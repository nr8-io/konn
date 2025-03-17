---
id: api-util-only-if-array
title: onlyIfArray
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Applies a patch conditionally based on a test. If the test is true, the patch is applied; otherwise, a default value (an empty array) is returned.

### Parameters
- **`test`** - (boolean): The condition to test.
- **`patch`** - (array): The patch to apply if the test is true.
- **`default`** - (array, optional): The default value to return if the test is false. Defaults to an empty array.

### Return Value
Returns the patch if the test is true, otherwise returns the default value (an empty array).

## Usage Examples


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local patch = [
      {
        kind: 'Deployment',
        metadata:
          {
            name: 'nginx',
          },
      },
    ];

    util.onlyIfArray(true, patch) // switching to false will return an empty array
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

