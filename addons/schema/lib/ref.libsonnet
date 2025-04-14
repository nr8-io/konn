local property = import './property.libsonnet';

function(
  id,

  required=null,
  requires=null,
) (
  property.new(
    required=required,
    requires=requires,
  ) + {
    '$ref': 'konn:schema:' + id,
  }
)
