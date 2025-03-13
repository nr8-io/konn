---
id: api-extensions-overrides
title: overrides
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `overrides` function is used to return the modified values of the properties after an override has been applied. It is particularly useful when you need to see the difference between the original and the overridden values. This function will allow you to get the explicit values that were set during the override process.

## Parameters
- **`props`** - (Required) The properties you want to override. This parameter defines which properties should be replaced or modified.

## Return Value
Returns a new object containing the overridden values for the properties, allowing you to see the changes applied.


## Usage Examples

<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testExtension = manifest.new(
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
      // name_nginx: 'nginx-app',  // Overriding placeholders
      name_flask: 'flask-app',
    });

    {
      output: testExtension.render(),
      output_overrides: testExtension.overrides({ name_nginx: 'test' }),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: placeholder
      - kind: Deployment
        metadata:
          name: flask-app
    output_overrides:
      name_flask: flask-app
      name_nginx: test
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "placeholder"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask-app"
             }
          }
       ],
       "output_overrides": {
          "name_flask": "flask-app",
          "name_nginx": "test"
       }
    }
    ```
    </TabItem>
</Tabs>


### Cross-linking to Other API Docs
[manifest documentation](/api/manifest/api-manifest-new)