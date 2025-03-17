---
id: api-extensions-override
title: override
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `override` function is used to modify the properties of a configuration or manifest. It allows you to provide a set of properties (e.g., `name_nginx`, `name_flask`) and modify them through the function, providing an updated version of the configuration with the modified properties. This is useful when you need to replace placeholders or adjust configuration properties dynamically.

## Parameters
- **`props`** - (Required) A function or an object that provides the new values to override the existing properties in the configuration.

## Return Value
Returns a new configuration that includes the overridden properties.
## Usage Examples

<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: props.name_nginx,
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: props.name_flask,
          },
        },
      ],
      {
        name_nginx: 'placeholder',  // Keeping placeholders
        name_flask: 'placeholder',
      }
    ).override(function(props) {
      name_nginx: 'nginx-app',  // Overriding placeholders
      // name_flask: 'flask-app',
    });

    testManifest
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - kind: Deployment
        metadata:
          name: nginx-app
      - kind: Deployment
        metadata:
          name: placeholder
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "placeholder"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>

### Cross-linking to Other API Docs
[manifest documentation](/api/manifest/api-manifest-new)