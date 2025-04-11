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

  // number
  exclusiveMaximum=null,
  exclusiveMinimum=null,
  maximum=null,
  minimum=null,
  multipleOf=null,

  // advanced overrides
  override=null,
) (
  property.new(
    type='number',
    title=title,
    description=description,
    default=default,
    required=required,
    requires=requires,
    examples=examples,
    deprecated=deprecated,

    exclusiveMaximum=exclusiveMaximum,
    exclusiveMinimum=exclusiveMinimum,
    maximum=maximum,
    minimum=minimum,
    multipleOf=multipleOf,

    override=override
  )
)
