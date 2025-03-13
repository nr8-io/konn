---
id: api-feature-configure
title: configure
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `configure` function is an alias for the [override](api-feature-override) function and allows for overriding properties of the feature in a more concise manner.

## Parameters
- **`propsOrFunction`** - (object or function) The properties or function to apply as overrides.

## Return Value
The feature object with overridden properties.

### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new([
      manifest.new(function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: props.name,
            labels: {
              label: props.label,
            },
          },
        },
      ], {
        name: 'placeholder',  // commenting out the output props these props will be used instead
        label: 'placeholder',
      }),
    ]).configure(function(props) {
      name: 'override-' + props.name,  // override passed props
    });

    {
      output: lib.render(testFeature, {
        name: 'nginx-deployment',  // this propr will be overidden
        label: 'nginx',  // this one wont be overidden (we did not specify it under override func)
      }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          labels:
            label: nginx
          name: override-nginx-deployment
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "label": "nginx"
                },
                "name": "override-nginx-deployment"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [extensions documentation](/api/extensions/api-extensions-new)
#### [helpers documentation](/api/helpers/api-helpers-render)