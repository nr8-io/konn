---
id: api-app-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Returns a new manifest containing only the configurations that match the specified filter condition.

## Parameters
- **`fn`** - (function) A function that determines whether a config should be included.

## Return Value
- Returns a filtered application manifest object, containing only the configurations that satisfy the provided filter function.

## Usage Examples


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new([

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

    myApp
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

