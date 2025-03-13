---
id: api-app-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Processes the application's features and extensions, applying any necessary transformations before generating the final Kubernetes configurations.

## Parameters
- **`ctx`** - (object) The application context with metadata and props.
- **`props`** - (object) Additional properties to apply before rendering.

## Return Value
- Returns a fully rendered JSON/YAML representation of the Kubernetes configurations, ready for deployment.


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
      ],
    );

    myApp.render() 
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Deployment",
          "metadata": {
             "name": "nginx"
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>
