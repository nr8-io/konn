local t = import './types.libsonnet';
local k = import 'konn/main.libsonnet';

// extension to filter out schemas
local withGenerateJsonSchema = k.extension(
  function(ctx, target, props) (
    if k.is(target, 'JsonSchema') then (
      if props.generate && k.get(target, 'metadata.annotations[konn.nr8.io/json-schema]') == 'root' then (
        // get all schemas in the manifest except this one to add to defs
        local defs = ctx.filter(function(target) target.is('JsonSchema') && target.get('metadata.annotations[konn.nr8.io/json-schema]') != 'root');

        target {
          spec+: {
            '$defs'+: {
              [x.metadata.name]: x.spec
              for x in k.render(ctx, defs, props)
            },
          },
        }
      ) else if props.filter == false then (
        target  // disable schema filtering (on by default)
      ) else (
        null  // all json schemas are filtered out by default
      )
    ) else if !props.generate then (
      target  // if not generating include regular configs
    ) else (
      null  // if generating filter out regular configs
    )
  ),
  {
    filter: true,
    generate: false,
  }
);

k.feature(
  [
    // create and annotate the root schema
    function(ctx, props) (
      t.define(props.schema, root=true)
    ),
  ],
  {
    schema: t.schema('root'),
    generate: false,
    filter: true,
  },
  extensions=[
    function(ctx, props) withGenerateJsonSchema.apply({
      schema: props.schema,
      filter: props.filter,
      generate: props.generate,
    }),
  ]
)
