---
id: api-helpers-render-configs
title: render-configs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Renders a list of configurations with the provided context and properties.

## Parameters
- **`ctx`** - (object) The context in which the configurations are rendered. Defaults to a new context. 
- **`configs`** - (array) The configurations to render. Defaults to an empty array. 
- **`props`** - (object, optional) Additional properties to pass to the configurations. Defaults to an empty object. See [example with props](#example-with-props).

## Return Value
Returns an array of rendered configurations.

## Usage Examples


### Example with props
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local context = import '../../vendor/konn/context.libsonnet';
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    local ctx = context.new({
      env: 'development',
    });

    local configs = [
      config.new(function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: props.name,
        },
        spec: {
          replicas: props.replicas,
        },
      }),
      config.new(function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: props.name + '-service',
        },
      }),
    ];

    local props = {
      name: 'myapp',
      replicas: 3,
    };

    local renderedConfigs = helpers.renderConfigs(ctx, configs, props);

    renderedConfigs
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - kind: Deployment
      metadata:
        name: myapp
      spec:
        replicas: 3
    - kind: Service
      metadata:
        name: myapp-service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Deployment",
          "metadata": {
             "name": "myapp"
          },
          "spec": {
             "replicas": 3
          }
       },
       {
          "kind": "Service",
          "metadata": {
             "name": "myapp-service"
          }
       }
    ]
    ```
  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [config documentation](/api/config/api-config-new)
#### [context documentation](/api/context/api-context-new)

