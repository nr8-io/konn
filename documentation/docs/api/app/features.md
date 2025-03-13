---
id: api-app-features
title: features
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Retrieves and filters the list of features defined in the application manifest.

## Parameters
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to apply.

## Return Value
- Returns an array of features applied to the configurations.
## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';

    local features = [
      function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: props.name,
        },
        spec: {
          selector: {
            app: props.name,
          },
          ports: [
            {
              port: 80,
              targetPort: 80,
            },
          ],
        },
      },];

    local myApp = app.new(
      features=[feature.new(features)],
      props={
        name: 'example-app',
        replicas: 3,
      });

    myApp
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: Service
        metadata:
          name: example-app
        spec:
          ports:
            - port: 80
              targetPort: 80
          selector:
            app: example-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Service",
             "metadata": {
                "name": "example-app"
             },
             "spec": {
                "ports": [
                   {
                      "port": 80,
                      "targetPort": 80
                   }
                ],
                "selector": {
                   "app": "example-app"
                }
             }
          }
       ]
    }
    ```  
  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
[feature documentation](/api/feature/api-feature-new)