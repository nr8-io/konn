---
id: api-util-yaml
title: yaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Parses a YAML string with optional templating. Supports returning a single document or an array of documents.

### Parameters
- **`str`** - (string): The YAML string to parse.
- **`props`** - (object, optional): The properties to use for templating. Defaults to an empty object.
- **`single`** - (boolean, optional): Whether to return a single document if only one is present. Defaults to `true`.
- **`template`** - (boolean, optional): Whether to apply templating to the string. Defaults to `true`.

### Return Value
Returns the parsed YAML document(s). If `single` is true and there is only one document, returns a single document; otherwise, returns an array of documents.

:::note when using %
When using standalone % in a yaml you will end up with an error because konn is expecting a template eg %(prop)s.
Real life example if you have a yaml with the following data you will end up with an error
```yaml
spec:
  strategy:
    rollingUpdate:
      maxSurge: 50%
      maxUnavailable: 50%
```
To overcome this use double %% instead of single %
:::

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local yamlString = |||
      apiVersion: v1
      kind: Pod
      metadata:
        name: %(name)s
    |||;

    util.yaml(yamlString, { name: 'nginx' })
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

