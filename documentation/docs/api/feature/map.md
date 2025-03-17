---
id: api-feature-map
title: map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `map` function allows for transforming the configurations of the feature by applying a custom map function.

## Parameters
- **`fn`** - (function) The map function that modifies the configurations.

## Return Value
The extended feature object with the map function applied to the configurations.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new([
        manifest.new(
          function(ctx, props) [{
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'nginx',
              },
            },
          }, {
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'flask',
              },
            },
          }],
          {
            name: 'test',
          },
        ),
      ],
      map=function(ctx, config, props) config {
        metadata+: {
          name: props.name + '-app',  // adding -app to every props.name
        },
      });

    testFeature
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - kind: Deployment
        metadata:
          labels:
            app: nginx
          name: test-app
      - kind: Deployment
        metadata:
          labels:
            app: flask
          name: test-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "nginx"
                },
                "name": "test-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "flask"
                },
                "name": "test-app"
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
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new([
        manifest.new(
          function(ctx, props) [{
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'nginx',
              },
            },
          }, {
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'flask',
              },
            },
          }],
          {
            name: 'test',
          },
        ),
      ],
      map=function(ctx, config, props) config {
        metadata+: {
          labels+: {
            version: 'v1.0',
          },
        },
      });

    testFeature
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - kind: Deployment
        metadata:
          labels:
            app: nginx
            version: v1.0
          name: test
      - kind: Deployment
        metadata:
          labels:
            app: flask
            version: v1.0
          name: test
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "nginx",
                   "version": "v1.0"
                },
                "name": "test"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "flask",
                   "version": "v1.0"
                },
                "name": "test"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [manifest documentation](/api/manifest/api-manifest-new)


