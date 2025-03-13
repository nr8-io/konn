---
id: api-helpers-map-configs
title: map-configs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Maps over configurations and extends them with the supplied context and properties.

## Parameters
- **`fn`** - (function) The function to apply to each configuration.
- **`configs`** - (array) The configurations to map over. Defaults to an empty array.

## Return Value
Returns an array of extended configurations.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    local configs = [
      config.new(function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      }),
      config.new(function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: 'nginx-service',
        },
      }),
    ];

    local mappedConfigs = helpers.mapConfigs(
      function(ctx, config, props) config {
        metadata+: {
          labels: {
            app: 'example',
          },
        },
      },
      configs
    );

    mappedConfigs
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - body:
        kind: Deployment
        metadata:
          labels:
            app: example
          name: nginx
    - body:
        kind: Service
        metadata:
          labels:
            app: example
          name: nginx-service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "example"
                },
                "name": "nginx"
             }
          }
       },
       {
          "body": {
             "kind": "Service",
             "metadata": {
                "labels": {
                   "app": "example"
                },
                "name": "nginx-service"
             }
          }
       }
    ]
    ```
  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [config documentation](/api/config/api-config-new)

