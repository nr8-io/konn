---
id: api-util-json
title: json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Parses a JSON string with optional templating. Supports returning a single document or an array of documents.

### Parameters
- **`str`** - (string): The JSON string to parse.
- **`props`** - (object, optional): The properties to use for templating. Defaults to an empty object.
- **`single`** - (boolean, optional): Whether to return a single document if only one is present. Defaults to `true`.
- **`template`** - (boolean, optional): Whether to apply templating to the string. Defaults to `true`.

### Return Value
Returns the parsed JSON document(s). If `single` is true and there is only one document, returns a single document; otherwise, returns an array of documents.

## Usage Examples


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local jsonString = |||
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "%(name)s"
        }
      }
    |||;

    local templatedJsonString = util.template(jsonString, { name: 'nginx' });

    util.json(templatedJsonString)
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "apiVersion": "v1",
       "kind": "Pod",
       "metadata": {
          "name": "nginx"
       }
    }
    ```
  </TabItem>
</Tabs>


