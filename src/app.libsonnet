local config = import './config.libsonnet';
local context = import './context.libsonnet';
local feature = import './feature.libsonnet';
local lib = import './helpers.libsonnet';
local manifest = import './manifest.libsonnet';

// Feature
{
  type:: 'application',

  // create new manifest
  new(
    features=[],
    defaults={},
    profiles={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    local ctx = context.new(defaults);

    self + {
      body: self.init(defaults),
      configs:: self.resolve(ctx, defaults),
      profiles:: {
        default: {},  // so we can render without a profile
      } + profiles,
      args:: {
        defaults: defaults,
        profiles: profiles,
        features: features,
        extensions: extensions,
        filter: filter,
        map: map,
      },
    }
  ),

  // render the config with resolved props
  render(
    ctx=context.new(self.args.defaults, self.args.config),
    props=self.args.defaults
  ):: (
    local moreProps = std.mergePatch(self.args.defaults, props);
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

  // render with profile
  init(
    props=self.args.defaults,
    profile='default',
  ):: (
    // get the profile props
    local profileProps = if std.objectHas(self.profiles, profile) then (
      self.profiles[profile]
    )
    else (
      error 'profile "' + profile + '" not found'
    );

    // merge global defaults with profile defaults
    local defaultProps = std.mergePatch(self.args.defaults, profileProps);
    // merge defaults with provided values
    local moreProps = std.mergePatch(defaultProps, props);

    // render context with profile metadata
    local ctx = context.new(moreProps, metadata={
      profile: profile,
    });

    self.render(ctx, moreProps)
  ),

  // resolve individual configs
  resolve(
    ctx=context.new(self.args.defaults, self.args.config),
    props=self.args.defaults
  ):: (
    local moreProps = std.mergePatch(self.args.defaults, props);

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
        self.args.features
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
  features(
    ctx=context.new(self.args.defaults, self.args.manifest),
    props=self.args.defaults
  ):: (
    local moreProps = std.mergePatch(self.args.defaults, props);

    std.filter(
      // allow conditional features by filtering out null extensions
      function(feature) std.type(feature) != 'null',
      std.map(
        function(feature) (
          // allow conditional extension rendering
          if std.isFunction(feature) then (
            feature(ctx, moreProps)
          )
          else (
            feature
          )
        ),
        self.args.features
      )
    )
  ),

  //
  extensions(
    ctx=context.new(self.args.defaults, self.args.manifest),
    props=self.args.defaults
  ):: (
    local moreProps = std.mergePatch(self.args.defaults, props);

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

    // resolve extensions from features
    + std.flattenArrays(
      std.map(
        function(feature) (
          if std.isObject(feature) && std.objectHasAll(feature, 'extensions') && std.isFunction(feature.extensions) then (
            feature.extensions(ctx, moreProps)
          )
          else (
            []
          )
        ),
        self.features(ctx, moreProps)
      )
    )
  ),

  // extend the manifest

  // extend the manifest
  extend(
    features=[],
    props={},
    profiles={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config
  ):: (
    self.new(
      features=self.args.features + features,
      props=std.mergePatch(self.args.defaults, props),
      profiles=std.mergePatch(self.args.profiles, profiles),
      extensions=self.args.extensions + extensions,
      filter=function(ctx, config, props) (
        self.args.filter(ctx, config, props) && filter(ctx, config, props)
      ),
      map=function(ctx, config, props) (
        map(ctx, self.args.map(ctx, config, props), props)
      ),
    )
  ),

  // returns an extened manifest with a filter applied
  filter(fn):: (
    self.extend(filter=fn)
  ),

  // returns an extened manifest with a map function applied
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
