local property = import './property.libsonnet';

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

  // render as a kubernetes compatible CRD
  {
    apiVersion: 'konn.nr8.io/v1alpha1',
    kind: 'JsonSchema',
    metadata: {
      name: id,
    },
    spec: spec,
  } + {
    // inherit methods from property
    get:: spec.get,
    defaults:: spec.defaults,
  }
)
