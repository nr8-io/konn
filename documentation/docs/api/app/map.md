---
id: api-app-map
title: map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Applies a transformation function to each configuration in the manifest, allowing modifications to be made dynamically.

## Parameters
- **`fn`** - (function) A function that modifies each configuration.

## Return Value
- Returns a new application manifest object with transformed configurations.

## Usage Examples



<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new(
      props={
        name: 'default',
      },
      features=[
        function(ctx, props) {
          kind: 'Deployment',
          metadata: {
            name: props.name,
          },
        },
      ],

      map=function(ctx, config, props) config {
        metadata+: {
          name: props.name + '-app',
        },
      });

    myApp
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: Deployment
        metadata:
          name: default-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "default-app"
             }
          }
       ]
    }
    ```  
  </TabItem>
</Tabs>


