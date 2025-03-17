---
id: api-util-only-if
title: onlyIf
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




## Overview
Applies a patch conditionally based on a test. If the test is true, the patch is applied; otherwise, a default value is returned.

### Parameters
- **`test`** - (boolean): The condition to test.
- **`patch`** - (object): The patch to apply if the test is true.
- **`default`** - (object, optional): The default value to return if the test is false. Defaults to an empty object.

### Return Value
Returns the patch if the test is true, otherwise returns the default value.

## Usage Examples


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local patch = {
      kind: 'Deployment',
      metadata:
        {
          name: 'nginx',
        },
    };

    util.onlyIf(true, patch)
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    kind: Deployment
    metadata:
      name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "kind": "Deployment",
       "metadata": {
          "name": "nginx"
       }
    }
    ```
  </TabItem>
</Tabs>


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
   local util = import '../../vendor/konn/util.libsonnet';

  local patch = {
    kind: 'Deployment',
    metadata:
      {
        name: 'nginx',
      },
  };

  util.onlyIf(false, patch, {
    kind: 'Service',
    metadata:
      {
        name: 'default',
      },
  })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    kind: Service
    metadata:
      name: default
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "kind": "Service",
       "metadata": {
          "name": "default"
       }
    }
    ```
  </TabItem>
</Tabs>