---
id: api-feature-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `filter` function allows for applying a filter to the configurations of the feature, excluding configurations based on a custom condition.

## Parameters
- **`fn`** - (function) The filter function that defines which configurations to keep.

## Return Value
The extended feature object with the filter applied to the configurations.

## Usage Examples


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
      [
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
      ],
      filter=function(ctx, config, props) config.get('metadata').name == 'flask'
    );

    testFeature
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>



<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
      [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
            labels: {
              tier: 'frontend',
            },
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: 'flask',
            labels: {
              tier: 'backend',
            },
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: 'kong',
            labels: {
              tier: 'backend',
            },
          },
        },
      ],
      filter=function(ctx, config, props) config.get('metadata.labels.tier') == 'backend'
    );

    testFeature
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - kind: Deployment
        metadata:
          labels:
            tier: backend
          name: flask
      - kind: Deployment
        metadata:
          labels:
            tier: backend
          name: kong
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
                   "tier": "backend"
                },
                "name": "flask"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "tier": "backend"
                },
                "name": "kong"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>