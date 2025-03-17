---
id: api-app-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Initializes a new application manifest with a set of configurations, properties, and extensions. It also enables filtering and mapping to customize the configuration dynamically.

## Parameters
- **`features`** - (array) A list of Kubernetes objects or functions that generate them. See [features](api-app-new#example-with-features).
- **`props`** - (object) A set of properties that define application behavior. See [props](api-app-new#example-with-props).
- **`profiles`** - (object) Named sets of default property values. See [profiles](api-app-new#example-with-profiles).
- **`extensions`** - (array) A list of functions that modify configurations. See [extensions](api-app-new#example-with-extensions).
- **`filter`** - (function) A function to determine if a config should be included. See [filter](api-app-new#example-with-filter).
- **`map`** - (function) A function to transform configs before rendering. See [map](api-app-new#example-with-map).


## Return Value
- Returns an object representing the new application manifest, including its body (rendered configuration), resolved configurations (`configs`), profiles, features, extensions, and function arguments.

## Usage Examples
### Example with features

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local app = import '../../vendor/konn/app.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local myApp = app.new(
  features=[
    feature.new([
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: props.name,
        },
      },
      function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: props.name,
        },
      },
    ]),
  ],
  props={
    name: 'example-app',
  });

myApp
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Deployment
  metadata:
    name: example-app
- kind: Service
  metadata:
    name: example-app
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "Deployment",
      "metadata": {
         "name": "example-app"
      }
   },
   {
      "kind": "Service",
      "metadata": {
         "name": "example-app"
      }
   }
]
```

  </TabItem>
</Tabs>

### Example with props

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local app = import '../../vendor/konn/app.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local myApp = app.new([
    [
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: props.name,
        },
        spec: {
          replicas: props.replicas,
        },
      },
    ],
  ],
  props={
    name: 'example-app',
    replicas: 3,
  }
);

myApp
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      name: example-app
    spec:
      replicas: 3
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "example-app"
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

### Example with profiles

Also an example using profiles can be found [here](api-app-init#adding-profiles)
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local app = import '../../vendor/konn/app.libsonnet';
local extension = import '../../vendor/konn/extension.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local ext = extension.new(
  function(ctx, target, props) target {
    metadata+: {
      profile: ctx.profile(),
    },
  },
);
local baseApp = app.new(
  features=[
    feature.new([
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
    ], extensions=[ext]),
  ]);
baseApp.init(profile='dev')
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Deployment
  metadata:
    name: nginx
    profile: dev
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "Deployment",
      "metadata": {
         "name": "nginx",
         "profile": "dev"
      }
   }
]
```

  </TabItem>
</Tabs>

### Example with extensions

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

### Example with filter
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local app = import '../../vendor/konn/app.libsonnet';

local myApp = app.new([
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-svc',
      },
    },
  ],
  filter=function(ctx, config, props) config.get('kind') == 'Deployment'
);

myApp
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      name: nginx
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "nginx"
         }
      }
   ]
}
```

  </TabItem>
</Tabs>

### Example with map
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local app = import '../../vendor/konn/app.libsonnet';

local myApp = app.new([
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  map=function(ctx, config, props) config {
    metadata+: {
      labels: {
        env: 'production',
      },
    },
  });

myApp
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      labels:
        env: production
      name: nginx
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
               "env": "production"
            },
            "name": "nginx"
         }
      }
   ]
}
```

  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [extensions documentation](/api/extensions/api-extensions-new)
#### [feature documentation](/api/feature/api-feature-new).
