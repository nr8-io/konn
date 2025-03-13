---
id: api-feature-overrides
title: overrides
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `overrides` function is used to define custom properties that can supersede the original properties or extend them. This allows for greater flexibility in configuring features, enabling users to inject or modify configurations dynamically.

## Parameters
- **`props`** - The properties to override. This can either be an object containing key-value pairs of properties or a function that computes the overrides based on the current context (`props`).

## Return Value
The feature object with overridden properties.

:::note
Does not replace previously overridden values.
It merges new props with the existing overrides.
:::


### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new([
      manifest.new(
        function(ctx, props) [{
          kind: 'Deployment',
          metadata: {
            name: props.name,
            labels: {
              label: props.label,
            },
          },
        }],
        {
          name: 'default-name',
          label: 'default-label',
        }
      ),
    ]).override({
      name: 'overridden-name',
    });

    {
      Unchanged: testFeature,
      custom_props: testFeature.overrides({ label: 'custom-label', name: 'this wont change override' }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    Unchanged:
      body:
        - kind: Deployment
          metadata:
            labels:
              label: default-label
            name: overridden-name
    custom_props:
      label: custom-label
      name: overridden-name
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "Unchanged": {
          "body": [
             {
                "kind": "Deployment",
                "metadata": {
                   "labels": {
                      "label": "default-label"
                   },
                   "name": "overridden-name"
                }
             }
          ]
       },
       "custom_props": {
          "label": "custom-label",
          "name": "overridden-name"
       }
    }
    ```  
    </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [manifest documentation](/api/manifest/api-manifest-new)
