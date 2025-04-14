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
      if props.generate && k.is(target, 'JsonSchema', props.schema.metadata.name) then (
        target  // if generating a schema only include the root schema
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
    function(ctx, props) (
      // find all json schemas in the render context and filter out the root one
      local defs = ctx.filter(function(target) target.is('JsonSchema') && !target.is('JsonSchema', props.schema.metadata.name));

      // inject json schemas into the root $defs so they can be referenced
      props.schema {
        spec+: {
          '$defs'+: {
            [x.metadata.name]: x.spec
            for x in k.render(ctx, defs, props)
          },
        },
      }
    ),
  ],
  {
    schema: schema('root'),
    generate: false,
    filter: true,
  },
  extensions=[
    // apply withGenerateJsonSchema extension
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
