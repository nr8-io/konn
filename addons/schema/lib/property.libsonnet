// private key
local pkey = function(key) (
  '#' + key
);

// property option
local option = function(props={}, key, private=false) (
  if !std.objectHas(props, key) then {} else if private then { [pkey(key)]:: props[key] } else { [key]: props[key] }
);

{
  // requirement tracking
  [pkey('requires')]:: null,  // used for requiredFor, if true, the property is required
  [pkey('required')]:: null,

  new(options={}):: (
    self {}
    + option(options, 'type')
    + option(options, 'title')
    + option(options, 'description')
    + option(options, 'default')


    // private, used by parent schema for evaluating sub-schemas
    // https://json-schema.org/understanding-json-schema/reference/object#required
    + option(options, 'required', private=true)
    + option(options, 'requires', private=true)

    // annotations
    + option(options, 'examples')
    + option(options, 'deprecated')

    // string
    + option(options, 'format')
    + option(options, 'pattern')
    + option(options, 'minLength')
    + option(options, 'maxLength')

    // numbers
    + option(options, 'multipleOf')
    + option(options, 'minimum')
    + option(options, 'exclusiveMinimum')
    + option(options, 'maximum')
    + option(options, 'exclusiveMaximum')

    // special types
    + option(options, 'enum')
    + option(options, 'const')

    // array
    + option(options, 'contains')
    + option(options, 'items')
    + option(options, 'maxContains')
    + option(options, 'maxItems')
    + option(options, 'minContains')
    + option(options, 'minItems')
    + option(options, 'prefixItems')
    + option(options, 'unevaluatedItems')
    + option(options, 'uniqueItems')

    // object
    + option(options, 'additionalProperties')
    + option(options, 'unevaluatedProperties')
    + option(options, 'propertyNames')
    + option(options, 'minProperties')
    + option(options, 'maxProperties')

    // composition
    + option(options, 'allOf')
    + option(options, 'anyOf')
    + option(options, 'oneOf')
    + option(options, 'not')

    + (  // add object properties if supplied
      if std.objectHas(options, 'type') && options.type == 'object' && std.objectHas(options, 'properties') && options.properties != null then (
        // add properties & dependent requirements
        {
          properties: {
            [x]: options.properties[x]
            for x in std.objectFields(options.properties)
            if options.properties != null
          },
        }

        + (
          local dependentRequired = {
            [x]+: options.properties[x][pkey('requires')]
            for x in std.objectFields(options.properties)
            if std.isArray(options.properties[x][pkey('requires')])
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
            for x in std.objectFields(options.properties)
            if options.properties[x][pkey('required')] == true
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
      if std.objectHas(options, 'type') && options.type == 'object' && std.objectHas(options, 'patternProperties') && options.patternProperties != null then (
        // add properties & dependent requirements
        {
          patternProperties: {
            [x]: options.patternProperties[x]
            for x in std.objectFields(options.patternProperties)
            if options.patternProperties != null
          },
        }
      ) else (
        {}
      )
    )


    + (
      if std.objectHas(options, 'example') && std.type(options.example) != 'null' then (
        {
          examples+: [options.example],
        }
      ) else (
        {}
      )
    )

    + (  // advanced overrides
      if std.objectHas(options, 'override') && options.override != null && std.isObject(options.override) then (
        options.override
      ) else (
        {}
      )
    )
  ),

  // call the constructor with named parameters
  call(
    title=null,
    description=null,
    default=null,  // default value

    // requirements
    required=null,  // will add to parent required array
    requires=null,  // dependentRequired: https://json-schema.org/understanding-json-schema/reference/conditionals#dependentRequired

    // annotations https://json-schema.org/understanding-json-schema/reference/annotations
    example=null,
    examples=null,
    deprecated=null,

    // numbers
    exclusiveMaximum=null,
    exclusiveMinimum=null,
    maximum=null,
    minimum=null,
    multipleOf=null,

    // string
    format=null,
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

    // composition
    allOf=null,
    anyOf=null,
    oneOf=null,
    not=null,

    // directly extend json-schema for advanced use cases https://json-schema.org/
    override=null,
    type=null,
  ):: self.new({
    title: title,
    description: description,
    default: default,

    required: required,
    requires: requires,

    example: example,
    examples: examples,
    deprecated: deprecated,

    exclusiveMaximum: exclusiveMaximum,
    exclusiveMinimum: exclusiveMinimum,
    maximum: maximum,
    minimum: minimum,
    multipleOf: multipleOf,

    format: format,
    maxLength: maxLength,
    minLength: minLength,
    pattern: pattern,

    enum: enum,
    const: const,

    additionalProperties: additionalProperties,
    maxProperties: maxProperties,
    minProperties: minProperties,
    patternProperties: patternProperties,
    properties: properties,
    propertyNames: propertyNames,
    unevaluatedProperties: unevaluatedProperties,

    contains: contains,
    items: items,
    maxContains: maxContains,
    maxItems: maxItems,
    minContains: minContains,
    minItems: minItems,
    prefixItems: prefixItems,
    unevaluatedItems: unevaluatedItems,
    uniqueItems: uniqueItems,

    allOf: allOf,
    anyOf: anyOf,
    oneOf: oneOf,
    not: not,

    override: override,
    type: type,
  }),

  // access object property by key
  property(key=null):: (
    local type = self.type;

    if type == 'object' && std.objectHas(self.properties, key) then (
      self.properties[key]
    ) else (
      null
    )
  ),

  // gets the default value for the property, used for filling defaults
  defaults(recursive=false, depth=0):: (
    local type = if std.objectHas(self, 'type') then self.type else '';

    if (type == 'object' && recursive == false && depth == 0) || type == 'object' && recursive == true then (
      local properties = self.properties;
      {
        [x]: properties[x].defaults(recursive, depth + 1)
        for x in std.objectFields(properties)
      }
    ) else if std.objectHas(self, 'default') then (
      self.default
    ) else if type == 'object' then (
      {}
    ) else if type == 'array' then (
      []
    ) else (
      null
    )
  ),

}
