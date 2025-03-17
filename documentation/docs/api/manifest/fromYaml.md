---
id: api-manifest-fromYaml
title: fromYaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `fromYaml` function creates a manifest from a YAML string or array of YAML strings. It parses the YAML and generates configurations based on it.

### Parameters
- **`yaml`** - (string | array) The YAML source to create the manifest from. See [yaml](#example-with-yaml).
- **`props`** - (object) The properties to apply to the manifest. See [props](#example-with-props).
- **`filter`** - (function) The filter function applied to the generated configurations. See [filter](#example-with-filter).
- **`map`** - (function) The map function applied to the generated configurations. See [map](#example-with-map).

### Return Value
Returns a new manifest object created from the YAML source.

## Usage Examples

### Example with yaml
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    manifest.fromYaml('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "nginx"}}')
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

### Example with props
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    manifest.fromYaml('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}', {
      name: 'nginx',
    })
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

### Example with filter
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local yamlSource = '[{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "nginx"}}, {"apiVersion":"v1", "kind":"Service", "metadata":{"name": "nginx-svc"}}]';

    local parsedYaml = std.parseYaml(yamlSource);

    local filteredYaml = std.filter(
      function(config) config.kind == 'Pod',
      parsedYaml
    );

    local filteredManifest = manifest.from(filteredYaml);

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
    local yamlSource = '[{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "nginx"}}, {"apiVersion":"v1", "kind":"Service", "metadata":{"name": "nginx-svc"}}]';

    local configs = std.parseYaml(yamlSource);

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