---
id: api-extensions-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `render` function processes and outputs a structured Kubernetes manifest based on the provided extension logic. It allows users to define resources dynamically and convert them into JSON, YAML, or another desired format.

## Parameters
- **`body`** - A function that defines how the extension should generate resources. It takes the context (`ctx`), configuration (`config`), and properties (`props`) as arguments and returns a list of Kubernetes manifests.

## Return Value
Returns an array of Kubernetes manifests as JSON or YAML.

## Usage Examples


<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local ext = import '../../vendor/konn/extension.libsonnet';

    local testExt = ext.new(
      function(ctx, config, props)
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
        ]
    );

    testExt.render()
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
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
    [
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
    ```
    </TabItem>
</Tabs>