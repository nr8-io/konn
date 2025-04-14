local k = import './main.libsonnet';


local cfg = k.config(function(ctx, props) { test: props.test, test2: props.test2 }, { test: 1, test2: 2 });

k.feature([
  cfg,
  k.manifest(function(ctx, props) [props]),
  function(ctx, props) props,
  '[{}]',
  '{}',
  'banana: one',
  '- banana: two\n- banana: three',
], {
  test: 2,
})
