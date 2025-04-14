local lib = import './helpers.libsonnet';

// Creates a context passed to all render functions with utility functions
{
  // constructor
  new(
    props={},
    manifest=[],
    metadata={}
  ):: (
    self + {
      args:: {
        metadata: metadata,
        props: props,
        manifest: manifest,
      },
    }
  ),

  // extend the context with new props and manifest but keep metadata
  extend(props={}, manifest=[], metadata={}):: (
    self.new(
      props,  // replace props
      manifest,  // replace manifest
      std.mergePatch(self.args.metadata, metadata)  // extend metadata
    )
  ),

  // return all configs
  manifest():: self.args.manifest,

  // Filter manifests by a function
  filter(func):: (
    std.filter(
      function(config) (
        func(config)
      ),
      self.args.manifest
    )
  ),

  // Find configs with a function and return the first result
  find(test):: (
    local result = self.filter(test);

    if std.length(result) > 0 then (
      result[0]
    )
  ),

  // get a config by path and matching value
  get(path, test):: (
    self.find(
      function(config) (
        lib.getPath(config, path) == test
      )
    )
  ),

  // Get a specific kubernetes resource by kind and name
  kget(kind, name=''):: (
    self.find(
      function(config) (
        config.kind == kind && config.metadata.name == name
      )
    )
  ),

  // Check if a config exists by path and matching value
  has(path, test):: (
    self.find(
      function(config) (
        lib.getPath(config, path) == test
      )
    ) != null
  ),

  // Check if a kubernetes resources by kind and name
  khas(kind, name=null):: (
    self.find(
      function(config) (
        if (std.objectHas(config, 'kind')) then (
          if std.isString(name) then (
            config.kind == kind && config.metadata.name == name
          ) else (
            config.kind == kind
          )
        ) else (
          false
        )
      )
    ) != null
  ),

  // Return the current profile name
  profile():: (
    std.get(self.args.metadata, 'profile', null)
  ),
}
