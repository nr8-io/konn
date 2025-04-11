// private key
local pkey = function(key) (
  '#' + key
);

// property option
local option = function(key, value, private=false) (
  if value == null then {} else if private then { [pkey(key)]:: value } else { [key]: value }
);

{
  // requirement tracking
  [pkey('requires')]:: null,  // used for requiredFor, if true, the property is required
  [pkey('required')]:: null,

  new(
    type=null,
    title=null,
    description=null,
    default=null,  // default value

    // requirements
    required=null,  // will add to parent required array
    requires=null,  // dependentRequired: https://json-schema.org/understanding-json-schema/reference/conditionals#dependentRequired

    // annotations https://json-schema.org/understanding-json-schema/reference/annotations
    examples=null,
    deprecated=null,

    // numbers
    exclusiveMaximum=null,
    exclusiveMinimum=null,
    maximum=null,
    minimum=null,
    multipleOf=null,

    // string
    maxLength=null,
    minLength=null,
    pattern=null,  // https://json-schema.org/understanding-json-schema/reference/regular_expressions

    // string and number
    enum=null,  // https://json-schema.org/understanding-json-schema/reference/enum
    const=null,  // https://json-schema.org/understanding-json-schema/reference/const

    // object
    additionalProperties=null,
    maxProperties=null,
    minProperties=null,
    patternProperties=null,
    properties=null,
    propertyNames=null,
    unevaluatedProperties=null,

    // array
    contains=null,
    items=null,
    maxContains=null,
    maxItems=null,
    minContains=null,
    minItems=null,
    prefixItems=null,
    unevaluatedItems=null,
    uniqueItems=null,

    // directly extend json-schema for advanced use cases https://json-schema.org/
    override=null
  ):: (
    self {}
    + option('type', type)
    + option('title', title)
    + option('description', description)
    + option('default', default)


    // private, used by parent schema for evaluating sub-schemas
    // https://json-schema.org/understanding-json-schema/reference/object#required
    + option('required', required, private=true)
    + option('requires', requires, private=true)

    // annotations
    + option('examples', examples)
    + option('deprecated', deprecated)

    // string
    + option('pattern', pattern)
    + option('minLength', minLength)
    + option('maxLength', maxLength)


    // numbers
    + option('multipleOf', multipleOf)
    + option('minimum', minimum)
    + option('exclusiveMinimum', exclusiveMinimum)
    + option('maximum', maximum)
    + option('exclusiveMaximum', exclusiveMaximum)

    // special types
    + option('enum', enum)
    + option('const', const)

    // array
    + option('contains', contains)
    + option('items', items)
    + option('maxContains', maxContains)
    + option('maxItems', maxItems)
    + option('minContains', minContains)
    + option('minItems', minItems)
    + option('prefixItems', prefixItems)
    + option('unevaluatedItems', unevaluatedItems)
    + option('uniqueItems', uniqueItems)

    // object
    + option('additionalProperties', additionalProperties)
    + option('unevaluatedProperties', unevaluatedProperties)
    + option('propertyNames', propertyNames)
    + option('minProperties', minProperties)
    + option('maxProperties', maxProperties)

    + (  // add object properties if supplied
      if type == 'object' && properties != null then (
        // add properties & dependent requirements
        {
          properties: {
            [x]: properties[x]
            for x in std.objectFields(properties)
            if properties != null
          },
        }

        + (
          local dependentRequired = {
            [x]+: properties[x][pkey('requires')]
            for x in std.objectFields(properties)
            if std.isArray(properties[x][pkey('requires')])
          };

          if std.length(dependentRequired) > 0 then (
            { dependentRequired+: dependentRequired }
          ) else (
            {}
          )
        )

        // add required array if any properties are flagged as required
        + (
          local requiredList = [
            x
            for x in std.objectFields(properties)
            if properties[x][pkey('required')] == true
          ];

          if std.length(requiredList) > 0 then (
            { required+: requiredList }
          ) else (
            {}
          )
        )
      ) else (
        {}
      )
    )

    + (  // add object properties if supplied
      if type == 'object' && patternProperties != null then (
        // add properties & dependent requirements
        {
          patternProperties: {
            [x]: patternProperties[x]
            for x in std.objectFields(patternProperties)
            if patternProperties != null
          },
        }
      ) else (
        {}
      )
    )

    + (  // advanced overrides
      if override != null && std.isObject(override) then (
        override
      ) else (
        {}
      )
    )
  ),

  // gets the default value for the property, used for filling defaults
  value():: self.default,
}
