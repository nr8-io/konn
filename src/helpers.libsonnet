local context = import './context.libsonnet';

// apply extensions to configs with props
local applyExtensions = function(extensions, ctx, configs, props={}) (
  std.map(
    function(config) (
      std.foldl(
        function(target, extension) (
          extension.apply(
            ctx,
            target,
            props
          )
        ),
        extensions,
        config
      )
    ),
    configs,
  )
);

// get value from object by path using dot notation
local getPath = function(obj, path, defaultValue=null) (
  local keys = std.split(path, '.');  // Split the path by dots to get individual keys

  local get = function(o, k) (
    if std.length(k) == 0 then (
      o
    )
    else if std.isObject(o) && std.objectHas(o, k[0]) then (
      get(o[k[0]], std.slice(k, 1, null, null))
    )
    else (
      defaultValue
    )
  );

  get(obj, keys)
);

// Test if a given target is a valid renderable object
local isRenderable = function(target) (
  std.isObject(target)
  && std.objectHasAll(target, 'render')
  && std.isFunction(target.render)
);


// Test if a given target has resolveConfigs method
local isResolvable = function(target) (
  std.isObject(target)
  && std.objectHasAll(target, 'resolve')
  && std.isFunction(target.resolve)
);

// Test if a give target is a config
local isConfig = function(target) (
  isRenderable(target)
  && std.objectHasAll(target, 'type')
  && target.type == 'config'
);

// Test if a give target is a config
local isManifest = function(target) (
  isRenderable(target)
  && std.objectHasAll(target, 'type')
  && target.type == 'manifest'
);


// map configs and extend them with supplied context and props props
local mapConfigs = function(fn, configs=[]) (
  std.map(
    function(config) (
      // extend config with the map function and props
      config.extend(function(ctx, data, props) (
        fn(ctx, data, props)
      ))
    ),
    configs
  )
);


local renderConfigs = function(ctx=context.new(), configs=[], props={}) (
  std.foldl(
    function(manifest, config)
      local rendered = config.render(ctx.extend(props, manifest), props);

      if rendered != null then (
        manifest + [rendered]  // add rendered config to manifest
      )
      else (
        manifest  // filter out empty renders
      ),
    configs,  // configs to render
    []  // initial manifest
  )
);

// render a target with a context and props
// mostly used for testing
local render = function(target, props={}) (
  if isRenderable(target) then (
    target.render(context.new(target.args.props, target.args.configs), props)
  ) else (
    target
  )
);

// merge props with target defaults and apply overrides
local resolveProps = function(target, props={}) (
  local merged = std.mergePatch(target.props, props);

  // resolve with overrides
  if std.objectHasAll(target, 'overrides') && std.isFunction(target.overrides) then (
    std.mergePatch(merged, target.overrides(merged))
  ) else (
    merged
  )
);

// exports
{
  applyExtensions:: applyExtensions,
  getPath:: getPath,
  isConfig:: isConfig,
  isManifest:: isManifest,
  isRenderable:: isRenderable,
  isResolvable:: isResolvable,
  mapConfigs:: mapConfigs,
  renderConfigs:: renderConfigs,
  render:: render,
  resolveProps:: resolveProps,
}
