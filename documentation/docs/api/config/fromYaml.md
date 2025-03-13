---
id: api-config-fromYaml
title: fromYaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `fromYaml` function converts a YAML string into an equivalent Jsonnet object. It is similar to [fromJson](api-config-fromJson) but specifically handles YAML-formatted text.

## Parameters
- **`yaml`** (string) - A YAML-formatted string representing a configuration.
- **`props`** (object, optional) - Additional properties merged with the configuration. Defaults to `{}`.

## Return Value
Returns a config object created from the YAML input.


## Usage Examples

### Basic Usage
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';
    k.fromYaml('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "flask"}}')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - apiVersion: v1
        kind: Pod
        metadata:
          name: flask
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
                "name": "flask"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>




<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local config = k.fromYaml(
      '{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "flask"}}'
    );
    config {
      spec+: {
        containers: [
          {
            name: 'flask-container',
            image: 'python:3.9',
          },
        ],
      },
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - apiVersion: v1
        kind: Pod
        metadata:
          name: flask
    spec:
      containers:
        - image: python:3.9
          name: flask-container
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
                "name": "flask"
             }
          }
       ],
       "spec": {
          "containers": [
             {
                "image": "python:3.9",
                "name": "flask-container"
             }
          ]
       }
    }
    ```  
    </TabItem>
</Tabs>
:::note
This approach is helpful when working with Kubernetes manifests or other YAML-based configurations, allowing seamless integration into your Jsonnet workflow.
:::


### Using Props
You can pass additional properties that will be resolved within the YAML structure.
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js

    local k = import 'konn/main.libsonnet';
    k.fromYaml('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}',{
        name: 'nginx',
    })
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    apiVersion: v1
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