---
id: api-manifest-find
title: find
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `find` function searches for configurations in the manifest that match the provided filter function. It returns the first matching configuration.

### Parameters
- **`fn`** -  (function):  A function to filter the configurations. It takes `ctx`, `config`, and `props` as arguments and should return a boolean indicating whether the configuration matches.

### Return Value
Returns the first configuration that matches the filter criteria.

## Usage Examples

:::note
Unlike the [find used in the feature API](/api/feature/api-feature-find) we need to wrap our testManifest in a function.
:::


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [{  // this is the difference between feature find and manifest find
        kind: 'Service',
        metadata: {
          name: 'nginx',
        },
      }, {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
        },
      }],
    );

    testManifest.find(function(ctx, config, props)
      config.get('kind') == 'Deployment')
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      kind: Deployment
      metadata:
        name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Deployment",
          "metadata": {
             "name": "flask"
          }
       }
    }
    ```
  </TabItem>
</Tabs>

