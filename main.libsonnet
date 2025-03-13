local app = import './src/app.libsonnet';
local config = import './src/config.libsonnet';
local context = import './src/context.libsonnet';
local extension = import './src/extension.libsonnet';
local feature = import './src/feature.libsonnet';
local helpers = import './src/helpers.libsonnet';
local manifest = import './src/manifest.libsonnet';
local util = import './src/util.libsonnet';

{
  // util functions
  yaml:: util.yaml,
  json:: util.json,
  template:: util.template,
  onlyIf:: util.onlyIf,

  // lib functions
  isConfig:: helpers.isConfig,
  isManifest:: helpers.isManifest,
  isResolvable:: helpers.isResolvable,
  isRenderable:: helpers.isRenderable,

  // manifest helpers
  fromYaml:: manifest.fromYaml,
  fromJson:: manifest.fromJson,

  lib:: {
    app: app,
    config: config,
    context: context,
    extension: extension,
    feature: feature,
    manifest: manifest,
  },

  app(
    features=[],
    props={},
    profiles={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    app.new(features, props, profiles, extensions, filter, map)
  ),

  feature(
    configs=[],
    props={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    feature.new(configs, props, extensions, filter, map)
  ),

  manifest(
    render=function(ctx, props) [],  // render function
    props={},
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    manifest.from(render, props, filter, map)
  ),

  config(
    render=function(ctx, props) {},
    props={}
  ):: (
    config.from(render, props)
  ),

  extension(
    render=function(ctx, config, props) config,  // extension render function
    props={},  // extension default props
    selector=function(ctx, config, props) true,  // selector function
    extends=config.new(),  // renderable config or manifest to extend
  ):: (
    extension.new(render, props, selector, extends)
  ),

}
