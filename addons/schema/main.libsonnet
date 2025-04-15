local array = import './lib/array.libsonnet';
local boolean = import './lib/boolean.libsonnet';
local feature = import './lib/feature.libsonnet';
local number = import './lib/number.libsonnet';
local object = import './lib/object.libsonnet';
local ref = import './lib/ref.libsonnet';
local schema = import './lib/schema.libsonnet';
local string = import './lib/string.libsonnet';
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

local generateJsonSchema = k.feature(
  [
    // create and annotate the root schema
    function(ctx, props) (
      // get the schema from the schema manifest
      local root = props.schema.kget('JsonSchema');

      if k.isConfig(root) then (
        // add root schema annotation
        root.extend(function(ctx, target, props) target {
          metadata+: {
            annotations+: {
              'konn.nr8.io/json-schema': 'root',
            },
          },
        })
      )
    ),
  ],
  {
    schema: schema('root', root=true),
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
);

{
  arr: array,
  array: array,
  bool: boolean,
  boolean: boolean,
  generateJsonSchema: generateJsonSchema,
  num: number,
  number: number,
  obj: object,
  object: object,
  ref: ref,
  schema: schema,
  str: string,
  string: string,
}
