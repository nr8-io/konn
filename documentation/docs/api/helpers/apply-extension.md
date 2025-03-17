---
id: api-helpers-apply-extension
title: apply-extension
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
Applies a list of extensions to a list of configurations using the provided context and properties.

## Parameters
- **`extensions`** - (array) An array of extensions to apply. See [example with extensions](#example-with-extensions).
- **`ctx`** - (object) The context to use when applying the extensions. See [example with context](#example-with-context).
- **`configs`** - (array) An array of configurations to which the extensions will be applied. See [example with configs](#example-with-configs).
- **`props`** - (object, optional) Additional properties to pass to the extensions. Defaults to an empty object. See [example with props](#example-with-props).

## Return Value
Returns an array of configurations with the extensions applied.

## Usage Examples

### Example with extensions
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
  ```js
  local config = import '../../vendor/konn/config.libsonnet';
  local context = import '../../vendor/konn/context.libsonnet';
  local extension = import '../../vendor/konn/extension.libsonnet';
  local helpers = import '../../vendor/konn/helpers.libsonnet';

  local ctx = context.new({
    env: 'production',
  });

  local baseConfig = config.new(
    function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: 'base-app',
      },
    },
  );

  local myExtension = extension.new(
    render=function(ctx, config, props)
      config {
        metadata+: {
          labels: {
            app: props.label,
          },
        },
      },
    props={
      label: 'extended-app',
    },
  );

  local extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);

  extendedConfigs
  ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
  ```yaml
  - kind: Deployment
    metadata:
      labels:
        app: extended-app
      name: base-app
  ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
  ```json
  [
    {
      "kind": "Deployment",
      "metadata": {
        "labels": {
          "app": "extended-app"
        },
        "name": "base-app"
      }
    }
  ]
  ```
  </TabItem>
</Tabs>

### Example with context
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
  ```js
  local config = import '../../vendor/konn/config.libsonnet';
  local context = import '../../vendor/konn/context.libsonnet';
  local extension = import '../../vendor/konn/extension.libsonnet';
  local helpers = import '../../vendor/konn/helpers.libsonnet';

  local ctx = context.new({
    env: 'staging',
    region: 'us-west-1',
  });

  local baseConfig = config.new(
    function(ctx, props) {
      kind: 'Service',
      metadata: {
        name: 'base-service',
      },
    },
  );

  local myExtension = extension.new(
    render=function(ctx, config, props)
      config {
        metadata+: {
          annotations: {
            'env': ctx.env,
            'region': ctx.region,
          },
        },
      },
  );

  local extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);

  extendedConfigs
  ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
  ```yaml
  - kind: Service
    metadata:
      name: base-service
      annotations:
        env: staging
        region: us-west-1
  ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
  ```json
  [
    {
      "kind": "Service",
      "metadata": {
        "name": "base-service",
        "annotations": {
          "env": "staging",
          "region": "us-west-1"
        }
      }
    }
  ]
  ```
  </TabItem>
</Tabs>

### Example with configs
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
  ```js
  local config = import '../../vendor/konn/config.libsonnet';
  local context = import '../../vendor/konn/context.libsonnet';
  local extension = import '../../vendor/konn/extension.libsonnet';
  local helpers = import '../../vendor/konn/helpers.libsonnet';

  local ctx = context.new({
    env: 'development',
  });

  local baseConfig1 = config.new(
    function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: 'config1',
      },
    },
  );

  local baseConfig2 = config.new(
    function(ctx, props) {
      kind: 'Service',
      metadata: {
        name: 'config2',
      },
    },
  );

  local myExtension = extension.new(
    render=function(ctx, config, props)
      config {
        metadata+: {
          labels: {
            env: ctx.env,
          },
        },
      },
  );

  local extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig1, baseConfig2]);

  extendedConfigs
  ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
  ```yaml
  - kind: Deployment
    metadata:
      labels:
        env: development
      name: config1
  - kind: Service
    metadata:
      labels:
        env: development
      name: config2
  ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
  ```json
  [
    {
      "kind": "Deployment",
      "metadata": {
        "labels": {
          "env": "development"
        },
        "name": "config1"
      }
    },
    {
      "kind": "Service",
      "metadata": {
        "labels": {
          "env": "development"
        },
        "name": "config2"
      }
    }
  ]
  ```
  </TabItem>
</Tabs>

### Example with props
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
  ```js
  local config = import '../../vendor/konn/config.libsonnet';
  local context = import '../../vendor/konn/context.libsonnet';
  local extension = import '../../vendor/konn/extension.libsonnet';
  local helpers = import '../../vendor/konn/helpers.libsonnet';

  local ctx = context.new({
    env: 'test',
  });

  local baseConfig = config.new(
    function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: 'base-app',
      },
    },
  );

  local myExtension = extension.new(
    render=function(ctx, config, props)
      config {
        metadata+: {
          labels: {
            app: props.label,
            version: props.version,
          },
        },
      },
    props={
      label: 'extended-app',
      version: 'v1.0',
    },
  );

  local extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);

  extendedConfigs
  ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
  ```yaml
  - kind: Deployment
    metadata:
      labels:
        app: extended-app
        version: v1.0
      name: base-app
  ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
  ```json
  [
    {
      "kind": "Deployment",
      "metadata": {
        "labels": {
          "app": "extended-app",
          "version": "v1.0"
        },
        "name": "base-app"
      }
    }
  ]
  ```
  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [extensions documentation](/api/extensions/api-extensions-new)
#### [config documentation](/api/config/api-config-new)
#### [context documentation](/api/context/api-context-new)

