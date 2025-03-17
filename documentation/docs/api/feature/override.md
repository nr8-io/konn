---
id: api-feature-override
title: override
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `override` function allows for overriding the properties of a feature with new values, applying these overrides when rendering or resolving the feature.

## Parameters
- **`propsOrFunction`** - (object or function) The properties or a function to override the existing properties.

## Return Value
The feature object with overridden properties.

### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new([
      manifest.new(function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: props.name,
            labels: {
              label: props.label,
            },
          },
        },
      ], {
        name: 'default',  // commenting out the output props these props will be used instead
        label: 'default',
      }),
    ]).override(function(props) {
      name: 'override-' + props.name,  // override passed props only uses the props below
    });

    {
      output: lib.render(testFeature, {
        name: 'nginx-deployment',
        label: 'nginx',
      }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          labels:
            label: nginx
          name: override-nginx-deployment
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "label": "nginx"
                },
                "name": "override-nginx-deployment"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new(
      [
        manifest.new(
          function(ctx, props) [{
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                label: props.label,
              },
            },
          }],
        ).override(function(props) {
          name: props.name + '-test',
          label: props.label + '-app',
        }),
      ],
    ).override(function(props) {
      name: props.name + '-manifest',
    });

    {
      output: lib.render(testFeature, {
        name: 'default',
        label: 'default',
      }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          labels:
            label: default-app
          name: default-manifest-test
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "label": "default-app"
                },
                "name": "default-manifest-test"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [extensions documentation](/api/extensions/api-extensions-new)
#### [helpers documentation](/api/helpers/api-helpers-render)