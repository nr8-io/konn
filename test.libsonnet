local k = import './main.libsonnet';


local cfg = k.config(function(ctx, props) { test: props.test, test2: props.test2 }, { test: 1, test2: 2 }, private=true);

k.manifest([
  cfg,
  {},
], {
  test: 2,
}).render()
