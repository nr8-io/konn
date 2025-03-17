---
id: api-manifest-fromJson
title: fromJson
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `fromJson` function creates a manifest from a JSON string or array of JSON strings. It parses the JSON and generates configurations based on it.

### Parameters
- **`json`** - (string | array) The JSON source to create the manifest from. See [json](#example-with-json).
- **`props`** - (object) The properties to apply to the manifest. See [props](#example-with-props).
- **`filter`** - (function) The filter function applied to the generated configurations. See [filter](#example-with-filter).
- **`map`** - (function) The map function applied to the generated configurations. See [map](#example-with-map).

### Return Value
Returns a new manifest object created from the JSON source.

## Usage Examples

### Example with json
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

manifest.fromJson('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "nginx"}}')
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
- apiVersion: v1
  kind: Pod
  metadata:
    name: nginx
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
[
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "nginx"
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

manifest.fromJson('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}', {
  name: 'nginx',
})
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
- apiVersion: v1
  kind: Pod
  metadata:
    name: nginx
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
[
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "nginx"
    }
  }
]
```
  </TabItem>
</Tabs>

### Example with filter
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
```js
local manifest = import '../../vendor/konn/manifest.libsonnet';

local jsonSource = '[{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "nginx"}}, {"apiVersion":"v1", "kind":"Service", "metadata":{"name": "nginx-svc"}}]';

local parsedJson = std.parseJson(jsonSource);

local filteredJson = std.filter(
  function(config) config.kind == 'Pod',
  parsedJson
);

local filteredManifest = manifest.from(filteredJson);

filteredManifest
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
body:
  - apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
{
   "body": [
      {
         "apiVersion": "v1",
         "kind": "Pod",
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
local jsonSource = '[{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "nginx"}}, {"apiVersion":"v1", "kind":"Service", "metadata":{"name": "nginx-svc"}}]';

local configs = std.parseJson(jsonSource);

local mappedConfigs = std.map(
  function(config)
    config {
      metadata+: {
        labels: {
          env: 'production',
        },
      },
    },
  configs
);

mappedConfigs
```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
```yaml
- apiVersion: v1
  kind: Pod
  metadata:
    labels:
      env: production
    name: nginx
- apiVersion: v1
  kind: Service
  metadata:
    labels:
      env: production
    name: nginx-svc
```
  </TabItem>
  <TabItem value="json" label="JSON Output">
```json
[
   {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
         "labels": {
            "env": "production"
         },
         "name": "nginx"
      }
   },
   {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": {
         "labels": {
            "env": "production"
         },
         "name": "nginx-svc"
      }
   }
]
```
  </TabItem>
</Tabs>