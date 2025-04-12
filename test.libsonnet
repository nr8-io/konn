local k = import './main.libsonnet';

k.app(features=[
  k.manifest(
    function(ctx, props) [props],
  ),
], defaults={
  test: 7,
  banana: 6,
  eat: 6,
})
