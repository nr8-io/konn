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

  // composition
  allOf=null,
  anyOf=null,
  oneOf=null,
  not=null,

  // root schema
  root=false,

  // advanced overrides
  override={},
) (
  property.new(
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

    allOf=allOf,
    anyOf=anyOf,
    oneOf=oneOf,
    not=not,

    // add schema specific properties
    override=override {
      '$id': 'konn:schema:' + id,
      '$schema': schema,
    }
  )
)
