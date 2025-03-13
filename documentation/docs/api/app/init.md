---
id: api-app-init
title: init
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Initializes an application manifest using a specified profile, applying its default properties and merging them with the provided ones.

## Parameters 
- **`props`** - (object) Additional properties to apply.
- **`profile`** - (string) The profile to use for initialization.

## Return Value
- Returns a rendered manifest object with the profile’s properties applied.
- Returns a rendered manifest object with the profile’s properties applied.

## Usage Examples

### Helm like usage

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local app = k.app([
      k.fromYaml([
        importstr './deployment.yaml',
        importstr './svc.yaml',
      ], {
        app: 'nginx123',
        svc: 'my-svc12345',
      }),
    ], {
      enabled: false,
    });
    app.init()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nginx123
      spec:
        selector:
          matchLabels:
            app: nginx123
        template:
          metadata:
            labels:
              app: nginx123
          spec:
            containers:
              - image: nginx
    - apiVersion: v1
      kind: Service
      metadata:
        name: my-svc12345
      spec:
        ports:
          - port: 80
            protocol: TCP
            targetPort: 9376
        selector:
          app.kubernetes.io/name: MyApp
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "apiVersion": "apps/v1",
          "kind": "Deployment",
          "metadata": {
             "name": "nginx123"
          },
          "spec": {
             "selector": {
                "matchLabels": {
                   "app": "nginx123"
                }
             },
             "template": {
                "metadata": {
                   "labels": {
                      "app": "nginx123"
                   }
                },
                "spec": {
                   "containers": [
                      {
                         "image": "nginx"
                      }
                   ]
                }
             }
          }
       },
       {
          "apiVersion": "v1",
          "kind": "Service",
          "metadata": {
             "name": "my-svc12345"
          },
          "spec": {
             "ports": [
                {
                   "port": 80,
                   "protocol": "TCP",
                   "targetPort": 9376
                }
             ],
             "selector": {
                "app.kubernetes.io/name": "MyApp"
             }
          }
       }
    ]
    ```
  </TabItem>
  <TabItem value="deployment-template" label="Deployment Template">
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: "%(app)s"
    spec:
      selector:
        matchLabels:
          app: "%(app)s"
      template:
        metadata:
          labels:
            app: "%(app)s"
        spec:
          containers:
          - image: nginx
    ```
  </TabItem>
  <TabItem value="service-template" label="Service Template">
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: "%(svc)s"
    spec:
      selector:
        app.kubernetes.io/name: MyApp
      ports:
        - protocol: TCP
          port: 80
          targetPort: 9376
    ```
  </TabItem>
</Tabs>

### Optional props

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local app = k.app([
      k.fromYaml([
        importstr './deployment.yaml',
        importstr './svc.yaml',
      ], {
        app: 'nginx123',
        svc: 'my-svc12345',
      }),
      function(ctx, props) if props.enabled then {
        apiVersion: 'v1',
        kind: 'ConfigMap',
        metadata: {
          name: 'example-config',
        },
        data: {
          key: 'value',
        },
      },
    ], {
      enabled: true,  // setting this to false will exclude the ConfigMap
    });

    app.init()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nginx123
      spec:
        selector:
          matchLabels:
            app: nginx123
        template:
          metadata:
            labels:
              app: nginx123
          spec:
            containers:
              - image: nginx
    - apiVersion: v1
      kind: Service
      metadata:
        name: my-svc12345
      spec:
        ports:
          - port: 80
            protocol: TCP
            targetPort: 9376
        selector:
          app.kubernetes.io/name: MyApp
    - apiVersion: v1
      data:
        key: value
      kind: ConfigMap
      metadata:
        name: example-config
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "apiVersion": "apps/v1",
          "kind": "Deployment",
          "metadata": {
             "name": "nginx123"
          },
          "spec": {
             "selector": {
                "matchLabels": {
                   "app": "nginx123"
                }
             },
             "template": {
                "metadata": {
                   "labels": {
                      "app": "nginx123"
                   }
                },
                "spec": {
                   "containers": [
                      {
                         "image": "nginx"
                      }
                   ]
                }
             }
          }
       },
       {
          "apiVersion": "v1",
          "kind": "Service",
          "metadata": {
             "name": "my-svc12345"
          },
          "spec": {
             "ports": [
                {
                   "port": 80,
                   "protocol": "TCP",
                   "targetPort": 9376
                }
             ],
             "selector": {
                "app.kubernetes.io/name": "MyApp"
             }
          }
       },
       {
          "apiVersion": "v1",
          "data": {
             "key": "value"
          },
          "kind": "ConfigMap",
          "metadata": {
             "name": "example-config"
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>


### Adding Profiles

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';
    local k = import 'konn/main.libsonnet';


    // Create an extension for the deployment
    local ext = extension.new(
      function(ctx, target, props) target {
        metadata+: {
          extended: true,
          profile: ctx.profile(),
        },
      },
      // only take affect for Deployments, if you remove selector it will take affect on everything
      selector=function(ctx, target, props) target.is('Deployment'),
    );

    // Define the configuration with additional properties
    local appTest = app.new(
      props={
        app: 'nginx',
        svc: 'my-svc',
      },
      profiles={
        dev: {
          name: 'dev',
        },
        prd: {
          name: 'prd',
        },
      },
      features=[
        feature.new([
          k.fromYaml(
            [
              importstr './deployment.yaml',
              importstr './svc.yaml',
            ],
          ),
        ], extensions=[ext]),  // using the profile trough ext we defined at the start
      ],
    );

    // Init the app with a profile of your choosing

    appTest.init(profile='prd')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - apiVersion: apps/v1
      kind: Deployment
      metadata:
        extended: true
        name: nginx
        profile: prd
      spec:
        selector:
          matchLabels:
            app: nginx
        template:
          metadata:
            labels:
              app: nginx
          spec:
            containers:
              - image: nginx
    - apiVersion: v1
      kind: Service
      metadata:
        name: my-svc
      spec:
        ports:
          - port: 80
            protocol: TCP
            targetPort: 9376
        selector:
          app.kubernetes.io/name: MyApp
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "apiVersion": "apps/v1",
          "kind": "Deployment",
          "metadata": {
             "extended": true,
             "name": "nginx",
             "profile": "prd"
          },
          "spec": {
             "selector": {
                "matchLabels": {
                   "app": "nginx"
                }
             },
             "template": {
                "metadata": {
                   "labels": {
                      "app": "nginx"
                   }
                },
                "spec": {
                   "containers": [
                      {
                         "image": "nginx"
                      }
                   ]
                }
             }
          }
       },
       {
          "apiVersion": "v1",
          "kind": "Service",
          "metadata": {
             "name": "my-svc"
          },
          "spec": {
             "ports": [
                {
                   "port": 80,
                   "protocol": "TCP",
                   "targetPort": 9376
                }
             ],
             "selector": {
                "app.kubernetes.io/name": "MyApp"
             }
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>
