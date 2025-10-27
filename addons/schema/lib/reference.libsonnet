local property = import './property.libsonnet';

function(
  id,
  default={},
  required=null,
  requires=null,
) (
  property.new(
    default=default,
    required=required,
    requires=requires,
  ) + {
    '$ref': '#/$defs/konn:schema:' + id,
  }
)
