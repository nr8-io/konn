---
id: api-config-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `new` function in Konn is used to create a new configuration instance by applying a rendering function and initial properties (`props`).

## Parameters
- **`render`** - (function) A function that defines how the object should be rendered.
- **`props`** - (object) An object containing initial values.

## Return Value
The function returns an object with:
- **`body`** - The rendered output based on `ctx` and `props`.
- **`props`** - The initial properties for reference.
- **`args`** - Stores the `render` function and `props` used.


## Usage Examples


<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local k = import 'konn/main.libsonnet';

    k.lib.config.new(function(ctx,props){ 
      // the function is required removing it will result in an error
      //RUNTIME ERROR: Unexpected type object, expected function

    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
      name: "default",
      }
    })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      apiVersion: v1
      kind: Service
      metadata:
        name: default
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "apiVersion": "v1",
          "kind": "Service",
          "metadata": {
             "name": "default"
          }
       }
    }
    ```
    </TabItem>
</Tabs>


### Rendering multiple object by wrapping them in an array
<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local k = import 'konn/main.libsonnet';

    k.lib.config.new(
      function(ctx, props)
        [
          {
            kind: 'Deployment',
            metadata: {
              name: 'nginx',
            },
          },
          {
            kind: 'Deployment',
            metadata: {
              name: 'flask',
            },
          },
        ])
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>
