---
id: api-manifest-map
title: map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `map` function applies a custom map function to the manifest’s configurations. It allows transforming each configuration before returning the new manifest.

### Parameters
- **`fn`** - (function): The map function to apply. It takes `ctx`, `config`, and `props` as arguments and should return the modified config.

### Return Value
Returns a new manifest with the map function applied to its configurations.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [{
        kind: 'Deployment',
        metadata: {
          name: props.name,
          labels: {
            app: 'nginx',
          },
        },
      }, {
        kind: 'Deployment',
        metadata: {
          name: props.name,
          labels: {
            app: 'flask',
          },
        },
      }],
      {
        name: 'random',
      },
      map=function(ctx, config, props) config {
        metadata+: {
          name: props.name + '-app',  // adding -app to every props.name
        },
      }
    );

    testManifest
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: Deployment
        metadata:
          labels:
            app: nginx
          name: random-app
      - kind: Deployment
        metadata:
          labels:
            app: flask
          name: random-app
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
                   "app": "nginx"
                },
                "name": "random-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "flask"
                },
                "name": "random-app"
             }
          }
       ]
    }
    ```  
  </TabItem>
</Tabs>
