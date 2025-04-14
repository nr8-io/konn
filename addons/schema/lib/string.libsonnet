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

  // string
  format=null,
  pattern=null,
  minLength=null,
  maxLength=null,

  override=null,

) (
  property.new(
    type='string',
    title=title,
    description=description,
    default=default,
    required=required,
    requires=requires,
    examples=examples,
    deprecated=deprecated,

    format=format,
    pattern=pattern,
    minLength=minLength,
    maxLength=maxLength,

    override=override
  )
)
