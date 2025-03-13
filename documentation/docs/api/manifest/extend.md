---
id: api-manifest-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `extend` function creates a new manifest by extending the current one with a new render function, props, filter, or map functions. It allows modifying the behavior of an existing manifest. It does the same thing as [extend from config](/api/config/api-config-extend) except it obeys all the manifest rules.

### Parameters
- **`render`** - (function) A new render function to replace or extend the original one. See [render](#example-with-render).
- **`props`** - (object) The properties used for extending the manifest. See [props](#example-with-props).
- **`filter`** - (function) A filter function applied to the manifest's configurations. See [filter](#example-with-filter).
- **`map`** - (function) A map function applied to the manifest's configurations. See [map](#example-with-map).

### Return Value
Returns a new manifest with the provided extensions applied.

## Usage Examples

### Example with render
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

local baseManifest = manifest.new(
  function(ctx, props) [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  {
    name: 'nginx',
  }
);

local extendedManifest = baseManifest.extend(
  function(ctx, manifest, props) (
    manifest + [
      {
        kind: 'Service',
        metadata: {
          name: props.name + '-svc',
        },
      },
    ]
  ));

extendedManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Deployment
    metadata:
      name: nginx
  - kind: Service
    metadata:
      name: nginx-svc
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "nginx"
         }
      },
      {
         "kind": "Service",
         "metadata": {
            "name": "nginx-svc"
         }
      }
   ]
}
```
  </TabItem>
</Tabs>

### Example with props
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

local propsManifest = manifest.new(
  function(ctx, props) [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  {
    name: 'nginx',
  }
);

local extendedPropsManifest = propsManifest.extend(
  function(ctx, manifest, props) (
    manifest + [
      {
        kind: 'Deployment',
        metadata: {
          name: props.newName,
        },
      },
    ]
  ),
  {
    newName: 'flask',
  });

extendedPropsManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Deployment
    metadata:
      name: nginx
  - kind: Deployment
    metadata:
      name: flask
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "nginx"
         }
      },
      {
         "kind": "Deployment",
         "metadata": {
            "name": "flask"
         }
      }
   ]
}
```
  </TabItem>
</Tabs>

### Example with filter
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

local filterManifest = manifest.new(
  function(ctx, props) [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-svc',
      },
    },
  ]
);

local extendedFilterManifest = filterManifest.extend(
  filter=function(ctx, config, props) config.get('kind') == 'Service'
);

extendedFilterManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Service
    metadata:
      name: nginx-svc
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Service",
         "metadata": {
            "name": "nginx-svc"
         }
      }
   ]
}
```
  </TabItem>
</Tabs>

### Example with map
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

local mapManifest = manifest.new(
  function(ctx, props) [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ]
);

local extendedMapManifest = mapManifest.extend(
  map=function(ctx, config, props) config {
    metadata+: {
      labels: {
        env: 'production',
      },
    },
  });

extendedMapManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Deployment
    metadata:
      labels:
        env: production
      name: nginx
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "labels": {
               "env": "production"
            },
            "name": "nginx"
         }
      }
   ]
}
```
  </TabItem>
</Tabs>