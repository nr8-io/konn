---
id: api-app-find
title: find
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
Searches the manifest for the first configuration that matches a given condition.

## Parameters
- **`fn`** - (function) A function that returns `true` for the desired configuration.

## Return Value
- Returns the first matching configuration object if found, otherwise `null`.

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
        kind: 'Service',
        metadata: {
          name: 'kong',
        },
      },
    ]);

    myApp.find(
      function(ctx, config, props) config.get('kind') == 'Service')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      kind: Service
      metadata:
        name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Service",
          "metadata": {
             "name": "kong"
          }
       }
    }
    ```  
  </TabItem>
</Tabs>


