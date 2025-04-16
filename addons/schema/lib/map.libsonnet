local object = import './object.libsonnet';
local property = import './property.libsonnet';


// alias for object, puts properties into additional properties
function(
  // defaults
  title=null,
  description=null,
  default={},
  required=null,
  requires=null,
  examples=null,
  deprecated=null,

  // object
  properties={},
  additionalProperties=null,
  patternProperties=null,
  unevaluatedProperties=null,
  propertyNames=null,
  minProperties=null,
  maxProperties=null,

  // composition
  allOf=null,
  anyOf=null,
  oneOf=null,
  not=null,

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

    additionalProperties=object(
      title=title,
      description=description,
      examples=examples,
      deprecated=deprecated,

      // object properties
      properties=properties,
      additionalProperties=additionalProperties,
      patternProperties=patternProperties,
      unevaluatedProperties=unevaluatedProperties,
      propertyNames=propertyNames,
      minProperties=minProperties,
      maxProperties=maxProperties,

      allOf=allOf,
      anyOf=anyOf,
      oneOf=oneOf,
      not=not,
    ),

    override=override
  ) + {
    // transparent property forwarding to support defaults()
    properties:: properties,
  }
)
