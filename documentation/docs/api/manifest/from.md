---
id: api-manifest-from
title: from
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `from` function creates a new manifest from an object, array, or an existing config/renderable object. If the source is already a manifest, it returns the original source.

### Parameters
- **`source`** - (object | array | string | function) The source to create the manifest from. See [source](#example-with-source).
- **`props`** - (object) The properties to apply to the manifest. See [props](#example-with-props).
- **`filter`** - (function) The filter function applied to the generated configurations. See [filter](#example-with-filter).
- **`maps`** - (function) The map function applied to the generated configurations. See [map](#example-with-map).

### Return Value
Returns a new manifest object.

## Usage Examples

### Example with source
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local config = import '../../vendor/konn/config.libsonnet';
local manifest = import '../../vendor/konn/manifest.libsonnet';

local svc = {
  type: 'Service',
  name: 'example',
};

local sourceManifest = manifest.from(svc);

sourceManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - name: example
    type: Service
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "name": "example",
         "type": "Service"
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


local propsManifest = manifest.from(
  function(ctx, props) [
    {
      kind: 'Service',
      metadata: {
        name: props.name,
      },
    },
  ],
  props={
    name: 'modified-example',
  });

propsManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Service
    metadata:
      name: modified-example
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Service",
         "metadata": {
            "name": "modified-example"
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

local svc = [
  {
    kind: 'Service',
    metadata: {
      name: 'example1',
    },
  },
  {
    kind: 'Deployment',
    metadata: {
      name: 'example2',
    },
  },
];

local filterManifest = manifest.from(
  svc,
  filter=function(ctx, config, props) config.is('Deployment')
);

filterManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - kind: Deployment
    metadata:
      name: example2
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "example2"
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
local config = import '../../vendor/konn/config.libsonnet';
local manifest = import '../../vendor/konn/manifest.libsonnet';

local svc = [
  {
    type: 'Service',
    name: 'example1',
  },
  {
    type: 'Service',
    name: 'example2',
  },
];

local mapManifest = manifest.from(
  svc,
  map=function(ctx, config, props) config {
    name: config.name + '-mapped',
  });

mapManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - name: example1-mapped
    type: Service
  - name: example2-mapped
    type: Service
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "name": "example1-mapped",
         "type": "Service"
      },
      {
         "name": "example2-mapped",
         "type": "Service"
      }
   ]
}
```
  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [config documentation](/api/config/api-config-render)