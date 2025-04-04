local context = import './context.libsonnet';
local lib = import './helpers.libsonnet';
local util = import './util.libsonnet';

// Config
{
  type:: 'config',

  // create a new config from and object or renderable object
  // if the source is a config it will return the original source
  from(source, props={}):: (
    if lib.isConfig(source) then (
      source
    ) else if std.isFunction(source) then (
      self.new(source, props)
    ) else if std.isObject(source) then (
      // create a manifest render function to handle the source
      local render = function(ctx, props) (
        if lib.isRenderable(source) then (
          local config = source.render(ctx, props);

          if std.isObject(config) then (
            config
          )
        )
        else (
          source
        )
      );

      // use existing props if source is a config/renderable object
      local moreProps = if lib.isRenderable(source) then (
        lib.resolveProps(source, props)
      ) else (
        props
      );

      self.new(render, moreProps)
    ) else if std.isString(source) && std.startsWith(source, '{') then (
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
  ):: (
    self.new(
      function(ctx, props) (
        local config = util.yaml(yaml, props, single=true);

        if std.isArray(config) then (
          error 'configs from yaml must be a single document'
        )
        else (
          config
        )
      ),
      props,
    )
  ),

  // manifest from yaml string
  fromJson(
    json,
    props={}
  ):: (
    self.new(
      function(ctx, props) (
        local config = util.json(json, props, single=true);

        if std.isArray(config) then (
          error 'configs from json must be a single document'
        )
        else (
          config
        )
      ),
      props
    )
  ),

  // create a new config
  new(
    render=function(ctx, props) {},
    props={}
  ):: (
    local ctx = context.new(props);

    self + {
      body: self.render(ctx, props),
      props:: props,
      args:: {
        render: render,
        props: props,
      },
    }
  ),

  // render the config with resolved props
  render(ctx=context.new(self.args.props), props={}):: (
    local resolvedProps = lib.resolveProps(self, props);

    self.args.render(ctx, resolvedProps)
  ),

  //
  extend(fn, props={}):: (
    local config = self.args.render(context.new(props), props);
    local moreProps = lib.resolveProps(self, props);

    self.new(
      function(ctx, props) (
        fn(ctx, config, props)
      ),
      moreProps
    )
  ),

  //
  override(propsOrFunction):: (
    // override with function and parent props
    local overrideWith = function(props) (
      if std.isFunction(propsOrFunction) then (
        propsOrFunction(props)
      ) else if std.isObject(propsOrFunction) then (
        propsOrFunction
      )
    );

    local render = function(ctx, props) (
      self.args.render(ctx, overrideWith(props))
    );

    self.new(render, self.props)
  ),


  // get a value from the config body
  get(path, defaultValue=null):: lib.getPath(self.body, path, defaultValue),

  // is the config a specific kind and name/kubernetes resource
  is(kind, name=null):: (
    local kinds = if std.isArray(kind) then kind else [kind];

    if std.type(name) != 'null' then (
      local names = if std.isArray(name) then name else [name];

      // before accessing self.body.kind checks self.body for kind
      std.objectHas(self.body, 'kind') &&
      std.count(kinds, self.body.kind) > 0 &&
      // before accessing name checks if body.metadata exists
      std.count(names, self.body.metadata.name) > 0
    ) else (
      // makes sure body has kind in it
      std.objectHas(self.body, 'kind') && std.count(kinds, self.body.kind) > 0
    )
  ),

}
