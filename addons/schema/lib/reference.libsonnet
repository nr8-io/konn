local property = import './property.libsonnet';

function(
  id,

  required=null,
  requires=null,

  default={},
) (
  property.new({
    required: required,
    requires: requires,
    default: default,
  }) + {
    '$ref': '#/$defs/konn:schema:' + id,
  }
)
