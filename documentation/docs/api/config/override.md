---
id: api-config-override
title: override
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `override` function allows you to lock props at a certain point in the configuration flow. Once overridden, the prop values will not change, ensuring that the configuration does not unintentionally modify key properties passed to it.

## Parameters
- **`props`** - (object) The props object to be overridden. The function will replace or modify the values of the specified props with the overridden values.

## Return Value
The `override` function does not return a direct value but modifies the `props` object in place. It ensures that no higher-level configurations can alter the overridden properties.
## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local testConfig = config.new(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: props.name,
      },
    }, {
      name: 'my-deployment',
    }).override(
      function(props)
        {
          name: 'override-' + props.name,
        });

    testConfig
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      kind: Deployment
      metadata:
        name: override-my-deployment
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Deployment",
          "metadata": {
             "name": "override-my-deployment"
          }
       }
    }
    ```
  </TabItem>
</Tabs>

