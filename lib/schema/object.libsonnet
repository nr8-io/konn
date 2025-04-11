local property = import './property.libsonnet';

function(
  // defaults
  title=null,
  description=null,
  default=null,
  required=null,
  requires=null,
  examples=null,
  deprecated=null,

  // object
  properties=null,
  patternProperties=null,
  additionalProperties=null,
  unevaluatedProperties=null,
  propertyNames=null,
  minProperties=null,
  maxProperties=null,

  // advanced overrides
  override=null,
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

    override=override
  )
)
