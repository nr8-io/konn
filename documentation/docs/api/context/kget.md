---
id: api-context-kget
title: kget
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Gets a specific Kubernetes resource from the context's manifest by kind and name.

## Parameters
- **`kind`** - (string) The kind of the Kubernetes resource.
- **`name`** - (string) The name of the Kubernetes resource.

## Return Value
Returns the Kubernetes resource that matches the specified kind and name, or `null` if no match is found.

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

    // Get a specific Kubernetes resource by kind and name
    local foundResource = initialCtx.kget('Service', 'nginx-service');


    foundResource
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