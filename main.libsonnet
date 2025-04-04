local app = import './lib/app.libsonnet';
local config = import './lib/config.libsonnet';
local context = import './lib/context.libsonnet';
local extension = import './lib/extension.libsonnet';
local feature = import './lib/feature.libsonnet';
local helpers = import './lib/helpers.libsonnet';
local manifest = import './lib/manifest.libsonnet';
local util = import './lib/util.libsonnet';

{
  // util functions
  onlyIf:: util.onlyIf,
  onlyIfArr:: util.onlyIfArr,
  onlyIfHas:: util.onlyIfHas,
  onlyIfHasArr:: util.onlyIfHasArr,

  // templating helpers
  yaml:: util.yaml,
  json:: util.json,
  template:: util.template,

  // debugging helpers
  trace:: util.trace,

  // lib functions
  isConfig:: helpers.isConfig,
  isManifest:: helpers.isManifest,
  isResolvable:: helpers.isResolvable,
  isRenderable:: helpers.isRenderable,

  // manifest helpers
  fromYaml:: manifest.fromYaml,
  fromJson:: manifest.fromJson,

  // lib exports
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
    defaults={},
    profiles={},
    extensions=[],
    filter=function(ctx, config, props) true,
    map=function(ctx, config, props) config,
  ):: (
    app.new(features, defaults, profiles, extensions, filter, map)
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
