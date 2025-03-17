---
id: api-app-resolve
title: resolve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Processes all features and extensions, filtering out invalid configurations and applying transformations before merging them into the final manifest.

## Parameters
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to merge with existing ones.

## Return Value
- Returns an array of resolved Kubernetes configurations, after applying the necessary filters and transformations.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new([
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
      {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
        },
      },
    ]);

    myApp.resolve()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - body:
        kind: Deployment
        metadata:
          name: nginx
    - body:
        kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          }
       },
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new(
      [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: 'flask',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'nginx-svc',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'flask-svc',
          },
        },
      ]);

    myApp.resolve()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - body:
        kind: Deployment
        metadata:
          name: nginx
    - body:
        kind: Deployment
        metadata:
          name: flask
    - body:
        kind: Service
        metadata:
          name: nginx-svc
    - body:
        kind: Service
        metadata:
          name: flask-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          }
       },
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       },
       {
          "body": {
             "kind": "Service",
             "metadata": {
                "name": "nginx-svc"
             }
          }
       },
       {
          "body": {
             "kind": "Service",
             "metadata": {
                "name": "flask-svc"
             }
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>
