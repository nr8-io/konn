local config = import './config.libsonnet';
local context = import './context.libsonnet';
local lib = import './helpers.libsonnet';
local util = import './util.libsonnet';

// Manifest
{
  type:: 'manifest',

  // create a new manifest from and object, array or existing config/renderable object
  // if the source is a manifest it will return the original source
  from(
    source,
    props={},
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config
  ):: (
    if lib.isManifest(source) then (
      source
    ) else if std.isFunction(source) then (
      self.new(source, props, filter, map)
    ) else if std.isArray(source) || std.isObject(source) then (
      // create a manifest render function to handle the source
      local render = function(ctx, props) (
        if std.isArray(source) then (
          std.map(function(item) (
            config.from(item).render(ctx, props)
          ), source)
        ) else (
          [config.from(source).render(ctx, props)]
        )
      );

      // use existing props if source is a config/renderable object
      local moreProps = if lib.isRenderable(source) then (
        lib.resolveProps(source, props)
      ) else (
        props
      );

      self.new(render, props, filter, map)
    ) else if std.isString(source) && (std.startsWith(source, '[') || std.startsWith(source, '{')) then (
      self.fromJson(source, props)
    ) else if std.isString(source) then (
      self.fromYaml(source, props)
    ) else (
      error 'Invalid config source'
    )
  ),

  // manifest from yaml string
  fromYaml(
    yaml,
    props={},
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
    single=false,
    template=true
  ):: (
    self.new(
      function(ctx, props) (
        if std.isString(yaml) then (
          util.yaml(yaml, props, single, template)
        ) else if std.isArray(yaml) then (
          std.flatMap(
            function(str) (
              util.yaml(str, props, single, template)
            ),
            yaml
          )
        ) else (
          error 'Invalid yaml source'
        )
      ),
      props,
      filter,
      map,
    )
  ),

  // manifest from json string
  fromJson(
    json,
    props={},
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    self.new(
      function(ctx, props) (
        if std.isString(json) then (
          util.json(json, props, single=false)
        ) else if std.isArray(json) then (
          std.flatMap(
            function(str) (
              util.json(str, props, single=false)
            ),
            json
          )
        ) else (
          error 'Invalid json source'
        )
      ),
      props,
    )
  ),

  // create new manifest
  new(
    render=function(ctx, props) [],  // render function
    props={},
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    local ctx = context.new(props);

    self + {
      body: self.render(ctx, props),
      configs:: self.resolve(ctx, props),
      props:: props,
      args:: {
        render: render,
        props: props,
        filter: filter,
        map: map,
      },
    }
  ),

  // render the config with resolved props
  render(
    ctx=context.new(self.args.props, self.args.config),
    props=self.args.props
  ):: (
    local moreProps = lib.resolveProps(self, props);
    local configs = self.resolve(ctx, props);

    //render all resolved configs
    lib.renderConfigs(ctx, configs, moreProps)
  ),

  // resolve individual configs
  resolve(
    ctx=context.new(self.args.props, self.args.config),
    props=self.args.props
  ):: (
    // props with defaults
    local moreProps = lib.resolveProps(self, props);

    // render manifest and make sure its an array
    local render = function(ctx, props) (
      local result = self.args.render(ctx, props);

      if std.isArray(result) then (
        result
      ) else (
        error 'manifest render function must return an array'
      )
    );

    // render the manifest
    local manifest = render(ctx, moreProps);  // render the manifest

    // create configs from all of the rendered manifest objects
    local configs = std.mapWithIndex(
      function(i, target) (
        config.new(
          function(ctx, ignoredProps) (
            if manifest[i] != null then (
              config.from(manifest[i]).render(ctx, moreProps)
            )
          ),
          // inherit default props from manifest defaults
          self.props
        )
      ),
      manifest
    );

    // apply custom filter and remove any empty configs
    local filtered = std.filter(
      function(config) (
        if std.length(std.objectFields(config)) > 0 then (
          self.args.filter(ctx, config, moreProps)
        ) else (
          false
        )
      ),
      configs
    );

    // apply custom map function the filtered configs
    lib.mapConfigs(self.args.map, filtered)
  ),

  // extend the manifest
  extend(
    render=function(ctx, manifest, props) manifest,
    props={},
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config
  ):: (
    local manifest = self.render(context.new(props), props);

    self.new(
      render=function(ctx, props) (
        render(ctx, manifest, props)
      ),
      props=lib.resolveProps(self, props),
      filter=function(ctx, config, props) (
        self.args.filter(ctx, config, props) && filter(ctx, config, props)
      ),
      map=function(ctx, config, props) (
        map(ctx, self.args.map(ctx, config, props), props)
      ),
    )
  ),

  // resolve overrides
  overrides(props):: props,

  // override props with a function or object
  // overrides supersede the original and render props
  override(propsOrFunction):: (
    // original extension resolver
    local overrides = self.overrides;

    // override with function and parent props
    local overrideWith = function(props) (
      if std.isFunction(propsOrFunction) then (
        propsOrFunction(props)
      ) else if std.isObject(propsOrFunction) then (
        propsOrFunction
      )
    );

    // supply overrides to be computed at render
    self {
      overrides(props):: std.mergePatch(overrides(props), overrideWith(props)),
    }
  ),

  // alias of override
  configure(propsOrFunction):: self.override(propsOrFunction),

  // returns an extended manifest with a filter applied
  filter(fn):: (
    self.extend(filter=fn)
  ),

  // returns an extended manifest with a map function applied
  map(fn):: (
    self.extend(map=fn)
  ),

  // finds a configs in the manifest and returns the first result
  find(fn):: (
    local manifest = self.filter(fn);

    if std.length(manifest.configs) > 0 then (
      manifest.configs[0]
    )
  ),

  // get a specific config by path
  get(path, matcher):: (
    self.find(
      function(ctx, config, props) (
        lib.getPath(config.body, path) == matcher
      )
    )
  ),

  // get a specific config by kind and metadata name
  kget(kind, name=''):: (
    self.find(
      function(ctx, config, props) (
        config.body.kind == kind && config.body.metadata.name == name
      )
    )
  ),
}
