---
id: api-config-fromJson
title: fromJson
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `fromJson` function converts a JSON string into an equivalent Jsonnet object. It is similar to [fromYaml](api-config-fromYaml) but specifically handles JSON-formatted text.

## Parameters
- **`json`** (string) - A JSON-formatted string representing a configuration.
- **`props`** (object, optional) - Key-value pairs used for templating within the JSON string. Defaults to `{}`.

## Return Value
A config object derived from the JSON input, with placeholders resolved using `props`.



## Usage Examples


### Basic Usage
Convert a JSON string into a config object:
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';
    k.fromJson('{ "kind" : "ConfigMap"}')
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: ConfigMap
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "ConfigMap"
          }
       ]
    }
    ```
  </TabItem>
</Tabs>

### Using props 

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';
    k.fromJson('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}', {
      name: 'nginx',
    })
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "apiVersion": "v1",
             "kind": "Pod",
             "metadata": {
                "name": "nginx"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>

:::tip Use case
Using `fromJson` is useful when you have JSON-based configurations and need to transform them dynamically while maintaining JSON format.
:::