---
id: api-feature-resolve
title: resolve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `resolve` function resolves individual configurations, processes extensions, and applies any necessary filtering and mapping to produce the final configurations.

### Parameters
- **`ctx`** - (object) The context in which the configuration is resolved.
- **`props`** - (object) The properties that influence the resolution of the configuration.

### Return Value
The resolved configurations, including any extensions or transformations applied, in a flat array.
## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new([
      {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
      {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
        },
      },
    ]);

    testFeature.resolve()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - body:
        kind: Deployment
        metadata:
          name: nginx
    - body:
        kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          }
       },
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>