local property = import './property.libsonnet';
local k = import 'konn/main.libsonnet';

function(
  id,

  // defaults
  title=null,
  description=null,
  default=null,
  required=null,
  requires=null,
  examples=null,
  deprecated=null,

  schema='https://json-schema.org/draft/2020-12/schema',

  // object
  properties=null,
  patternProperties=null,
  additionalProperties=null,
  unevaluatedProperties=null,
  propertyNames=null,
  minProperties=null,
  maxProperties=null,

  // root schema
  root=false,

  // advanced overrides
  override={},
) (
  local spec = property.new(
    type='object',

    title=title,
    description=description,
    default=default,
    required=required,
    requires=requires,
    examples=examples,
    deprecated=deprecated,

    properties=properties,
    patternProperties=patternProperties,
    additionalProperties=additionalProperties,
    unevaluatedProperties=unevaluatedProperties,
    propertyNames=propertyNames,
    minProperties=minProperties,
    maxProperties=maxProperties,

    // add schema specific properties
    override=override {
      '$id': 'konn:schema:' + id,
      '$schema': schema,
    }
  );

  // create a konn config and render as a kubernetes compatible CRD
  k.manifest(
    function(ctx, props) [
      {
        apiVersion: 'konn.nr8.io/v1alpha1',
        kind: 'JsonSchema',
        metadata+: {
          name: id,
        },
        spec: spec,
      },
    ],
    // filter out schemas unless the schema feature is included
    filter=function(ctx, target, props) (
      ctx.has('metadata.annotations[konn.nr8.io/json-schema]', 'root') || root
    )
  ) + {
    defaults:: spec.defaults,
    property:: spec.get,
  }
)
