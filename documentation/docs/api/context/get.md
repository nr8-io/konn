---
id: api-context-get
title: get
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




## Overview
Gets a configuration from the context's manifest by a specified path and matching value.

## Parameters
- **`path`** - (string) The path to the value to match.
- **`test`** - (any) The value to match at the specified path.

## Return Value
Returns the first configuration that matches the specified path and value, or `null` if no match is found.
### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local ctx = import '../../vendor/konn/context.libsonnet';

    local initialCtx = ctx.new(
      manifest=[
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'nginx-service',
          },
        },
      ],
    );

    // Get the configuration by path and value
    local foundConfig = initialCtx.get('metadata.name', 'nginx-service');

    foundConfig
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    kind: Service
    metadata:
      name: nginx-service
        ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "kind": "Service",
       "metadata": {
          "name": "nginx-service"
       }
    }
    ```  
    </TabItem>
</Tabs>