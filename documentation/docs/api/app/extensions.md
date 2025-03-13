---
id: api-app-extensions
title: extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Retrieves all extensions associated with the application, including those defined in features.

## Parameters
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to apply.

## Return Value
- Returns an array of extensions applied to the configurations. Extensions modify or extend the behavior of the manifest.
## Usage Examples


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';

    local addLabelsAndReplicas = extension.new(
      function(ctx, target, props) target {
        metadata+: {
          labels: props.labels,
        },
        spec+: {
          replicas: props.replicas,
        },
      },
      {
        labels: 'default-label',  // default props
        replicas: 1,
      }
    );

    local myApp = app.new(
      [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
      ],
      {
        labels: 'custom-label',
        replicas: 2,
      },
      extensions=[addLabelsAndReplicas]
    );

    myApp
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: Deployment
        metadata:
          labels: custom-label
          name: nginx
        spec:
          replicas: 2
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": "custom-label",
                "name": "nginx"
             },
             "spec": {
                "replicas": 2
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
    local app = import '../../vendor/konn/app.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';

    local addAnnotationsAndReplicas = extension.new(
      function(ctx, target, props) target {
        metadata+: {
          annotations: props.annotations,
        },
        spec+: {
          replicas: props.replicas,
        },
      },
      {
        annotations: 'default-annotation',  // default props
        replicas: 1,
      }
    );

    local myApp = app.new([
        {
          kind: 'Service',
          metadata: {
            name: 'nginx-svc',
          },
        },
      ],
      extensions=[addAnnotationsAndReplicas],
      props={
        annotations: 'custom-annotation',
        replicas: 3,
      });

    myApp
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: Service
        metadata:
          annotations: custom-annotation
          name: nginx-svc
        spec:
          replicas: 3
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Service",
             "metadata": {
                "annotations": "custom-annotation",
                "name": "nginx-svc"
             },
             "spec": {
                "replicas": 3
             }
          }
       ]
    }
    ```  
  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [extensions documentation](/api/extensions/api-extensions-new)