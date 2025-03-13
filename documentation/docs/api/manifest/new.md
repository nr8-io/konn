---
id: api-manifest-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `new` function creates a new manifest object. It initializes the manifest with a provided render function, props, filter, and map functions. This function sets up the context and resolves any defaults or properties before rendering the manifest.

### Parameters
- **`render`** - (function) A render function that defines how the manifest is generated. It accepts `ctx` and `props` as arguments and should return an array of config objects. See [render](#example-with-render).
- **`props`** - (object) The properties used in the rendering process. This allows customization and overrides for the generated manifest. See [props](#example-with-props).
- **`filter`** - (function) A function that filters the generated configurations. It receives `ctx`, `config`, and `props` as arguments and should return a boolean value. See [filter](#example-with-filter).
- **`map`** - (function) A function that maps over the generated configurations, allowing modifications to each config. Receives `ctx`, `config`, and `props` as arguments. See [map](#example-with-map).

:::note
- `render` defaults to an empty array.
- `filter` default function returns true (no filtering).
- `map` default function returns the config unchanged.
:::

### Return Value
Returns a new manifest object with the following structure:

- **`body`** - The result of the render function, containing the generated configurations.
- **`configs`** - The resolved configurations from the resolve function.
- **`props`** - The properties passed to the function.
- **`args`** - Contains the render function, props, filter, and map functions for further customization.

## Usage Examples

### Example with render
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

local testManifest = manifest.new(
  function(ctx, props) [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Deployment',
      metadata: {
        name: props.name,
      },
    },
  ],
  {
    name: 'flask',
  });

testManifest.render()
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
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
[
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
        name: props.name,
      },
      spec: {
        replicas: props.replicas,
      },
    },
  ],
  {
    name: 'example-app',
    replicas: 3,
  });

propsManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Deployment
    metadata:
      name: example-app
    spec:
      replicas: 3
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "example-app"
         },
         "spec": {
            "replicas": 3
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
  ],
  filter=function(ctx, config, props) config.get('kind') == 'Deployment'
);

filterManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Deployment
    metadata:
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
            "name": "nginx"
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
  ],
  map=function(ctx, config, props) config {
    metadata+: {
      labels: {
        env: 'production',
      },
    },
  });

mapManifest
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