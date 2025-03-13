---
id: api-manifest-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `render` function generates the final manifest configurations by resolving all the props and contexts. It calls the `resolve` function to gather the configurations and then processes them using the `lib.renderConfigs` function, which ensures the configurations are properly rendered.

### Parameters
- **`ctx`** - (context) The context object, created using the provided props and config.
- **`props`** - (object): The properties used in the render process.

### Return Value
Returns the rendered configurations by applying the `lib.renderConfigs` function to the resolved configs.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Service',
          metadata: {
            name: 'nginx-svc',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'flask-svc',
          },
        },
      ]);

    testManifest.render()
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - kind: Service
      metadata:
        name: nginx-svc
    - kind: Service
      metadata:
        name: flask-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Service",
          "metadata": {
             "name": "nginx-svc"
          }
       },
       {
          "kind": "Service",
          "metadata": {
             "name": "flask-svc"
          }
       }
    ]
    ```
  </TabItem>
</Tabs>

