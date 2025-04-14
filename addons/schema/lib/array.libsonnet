local property = import './property.libsonnet';

function(
  // defaults
  title=null,
  description=null,
  default=[],
  required=null,
  requires=null,
  examples=null,
  deprecated=null,

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

  // advanced overrides
  override=null,
) (
  property.new(
    type='array',
    title=title,
    description=description,
    default=default,
    required=required,
    requires=requires,
    examples=examples,
    deprecated=deprecated,

    contains=contains,
    items=items,
    maxContains=maxContains,
    maxItems=maxItems,
    minContains=minContains,
    minItems=minItems,
    prefixItems=prefixItems,
    unevaluatedItems=unevaluatedItems,
    uniqueItems=uniqueItems,

    override=override
  )
)
