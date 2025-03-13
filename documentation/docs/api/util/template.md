---
id: api-util-template
title: template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Processes a string template with the provided properties, removing lines where properties are null to maintain formatting.

### Parameters
- **`str`** - (string): The string template to process.
- **`props`** - (object, optional): The properties to use for templating. Defaults to an empty object.

### Return Value
Returns the processed string with lines containing null properties removed.

## Usage Examples


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local templateString = |||
      apiVersion: v1
      kind: Pod
      metadata:
        name: %(name)s
        namespace: %(namespace)s
    |||;

    util.template(templateString, { name: 'nginx', namespace: 'default' })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    |+
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: default
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    "apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: default\n\n"
    ```
  </TabItem>
</Tabs>


