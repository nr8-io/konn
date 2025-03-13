---
id: api-app-get
title: get
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Retrieves a specific configuration by matching a given JSON path and value within the manifest.

## Parameters
- **`path`** - (string) The JSON path to search within each configuration.
- **`matcher`** - (string) The expected value at the specified path.

## Return Value
- Returns the first configuration object where the specified path matches the given value, or `null` if not found.

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
    ]);

    myApp.get('metadata.name', 'nginx')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Deployment",
          "metadata": {
             "name": "nginx"
          }
       }
    }
    ```  
  </TabItem>
</Tabs>


