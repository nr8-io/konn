---
id: api-config-is
title: is
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
`is` is a Kubernetes-specific function that works similarly to [get](api-config-get), but checks if the configuration matches a certain kind of configuration. It’s useful to verify whether a config matches certain criteria (like being of type `Namespace` or `Service`).

## Parameters
- **`kind`** - (array of strings) An array of valid configuration kinds (e.g., `['Namespace', 'Service']`).
- **`name`** - (array of strings, optional) An array of valid names to match (e.g., `['default', 'random']`). If not specified, it checks only the kind.

## Return Value
The `is` function returns a Boolean (`true` or `false`), indicating whether the configuration matches the specified kinds and names.


## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local service = k.config({
      kind: 'Namespace',  // if we replace Namespace with Service e will still return true
      type: 'config',
      metadata: {
        name: 'random',
      },
    });

    service.is(['Namespace', 'Service'])
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    true
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    true
    ```
  </TabItem>
</Tabs>






<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local service = k.config({
      kind: 'Namespace',  // if we replace Namespace with Service e will still return true
      type: 'config',
      metadata: {
        name: 'not default or random',
      },
    });


    service.is(['Namespace', 'Service'], ['default', 'random'])

    // names will also takes arrays
    // if metadata/name is not default or random it will return false
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    false
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    false
    ```
  </TabItem>
</Tabs>

:::note
Use the `is` function to ensure your configuration matches specific Kubernetes resource types and names.
:::