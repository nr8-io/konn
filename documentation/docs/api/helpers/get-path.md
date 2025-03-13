---
id: api-helpers-get-path
title: get-path
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Gets a value from an object by a specified path using dot notation.

## Parameters
- **`obj`** - (object) The object to retrieve the value from.
- **`path`** - (string) The path to the value, specified using dot notation.
- **`defaultValue`** - (any, optional) The default value to return if the path does not exist. Defaults to `null`.

## Return Value
Returns the value at the specified path, or the `defaultValue` if the path does not exist.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    local obj = {
      metadata: {
        name: 'example',
        labels: {
          app: 'my-app',
        },
      },
    };

    {
      name: helpers.getPath(obj, 'metadata.name', 'default'),
      app: helpers.getPath(obj, 'metadata.labels.app', 'default-app'),
      nonExist: helpers.getPath(obj, 'metadata.nonExist', 'not-found'),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    name: example
    app: my-app
    nonExist: not-found
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "name": "example",
      "app": "my-app",
      "nonExist": "not-found"
    }
    ```
  </TabItem>
</Tabs>