local config = import './config.libsonnet';
local context = import './context.libsonnet';
local lib = import './helpers.libsonnet';
local manifest = import './manifest.libsonnet';

// Feature
{
  type:: 'feature',

  // create new manifest
  new(
    configs=[],
    props={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
    schema=null
  ):: (
    local ctx = context.new(props);

    self + {
      body: self.render(ctx, props),
      schema: schema,
      configs:: self.resolve(ctx, props),
      props:: props,
      args:: {
        configs: configs,
        extensions: extensions,
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

    // apply extensions to the resolved configs
    local extended = lib.applyExtensions(
      self.extensions(ctx, moreProps),
      ctx,
      configs,
      moreProps
    );

    //render all resolved configs
    lib.renderConfigs(ctx, extended, moreProps)
  ),

  // resolve individual configs
  resolve(
    ctx=context.new(self.args.props, self.args.config),
    props=self.args.props
  ):: (
    local moreProps = lib.resolveProps(self, props);

    local configs = std.filter(
      // support conditional configs by filtering out null configs
      function(config) std.type(config) != 'null',
      // map over the configs and apply the render functions
      std.map(
        function(config) (
          // allow conditional config rendering
          if std.isFunction(config) then (
            config(ctx, moreProps)
          )
          else (
            config
          )
        ),
        self.args.configs
      )
    );

    // resolve all configs from different sources into a flat array
    local resolved = std.flattenArrays(
      std.map(
        function(source) (
          if lib.isResolvable(source) then (
            source.resolve(ctx, moreProps)
          )
          else if lib.isRenderable(source) then (
            [source.override(moreProps)]
          )
          else if std.isArray(source) then (
            manifest.from(source).resolve(ctx, moreProps)
          )
          else if std.isObject(source) then (
            [config.from(source, moreProps)]
          )
          else (
            error 'Invalid config source'
          )
        ),
        configs
      )
    );

    // apply custom filter and remove any empty configs
    local filtered = std.filter(
      function(config) (
        if std.length(std.objectFields(config)) > 0 then (
          self.args.filter(ctx, config, moreProps)
        )
        else (
          false
        )
      ),
      resolved
    );

    // apply custom map function the filtered configs
    lib.mapConfigs(self.args.map, filtered)
  ),

  //
  extensions(
    ctx=context.new(self.args.props, self.args.config),
    props=self.args.props
  ):: (
    local moreProps = lib.resolveProps(self, props);

    std.filter(
      // allow conditional extensions by filtering out null extensions
      function(extension) std.type(extension) != 'null',
      std.map(
        function(extension) (
          // allow conditional extension rendering
          if std.isFunction(extension) then (
            extension(ctx, moreProps)
          )
          else (
            extension
          )
        ),
        self.args.extensions
      )
    )
  ),

  // extend the manifest
  extend(
    configs=[],
    props={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
    schema=self.schema
  ):: (
    self.new(
      configs=self.args.configs + configs,
      props=lib.resolveProps(self, props),
      extensions=self.args.extensions + extensions,
      filter=function(ctx, config, props) (
        self.args.filter(ctx, config, props) && filter(ctx, config, props)
      ),
      map=function(ctx, config, props) (
        map(ctx, self.args.map(ctx, config, props), props)
      ),
      schema=schema
    )
  ),

  // resolve overrides
  overrides(props):: props,

  // override props with a function or object
  // overrides supersede the original and render prop
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
  apply(propsOrFunction):: self.override(propsOrFunction),
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
  get(path, matcher=''):: (
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
