---
id: api-context-khas
title: khas
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Checks if a Kubernetes resource exists in the context's manifest by kind and optionally by name.

## Parameters
- **`kind`** - (string) The kind of the Kubernetes resource.
- **`name`** - (string, optional) The name of the Kubernetes resource.

## Return Value
Returns `true` if a Kubernetes resource matches the specified kind and name (if provided), otherwise `false`.

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

    // Check if a Kubernetes resource exists by kind and name
    local hasResource = initialCtx.khas('Service', 'nginx-service');

    hasResource
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    hasResource: true
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "hasResource": true
    }
    ```  
    </TabItem>
</Tabs>