---
id: api-app-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Creates a new application definition by extending an existing one. It enables the addition of configurations, properties, profiles, and extensions while maintaining the original structure.

## Parameters
- **`features`** (`array`, `default` `[]`) - Additional features to be merged with the existing ones. See [features](#example-with-features).
- **`props`** (`object`, `default` `{}`) - Additional properties to be included in the extended application. See [props](#example-with-props).
- **`profiles`** (`object`, `default` `{}`) - Additional profiles that define different variations of the application. See [profiles](#example-with-profiles).
- **`extensions`** (`array`, `default` `[]`) - Additional extensions that modify or enhance the application behavior. See [extensions](#example-with-extensions).
- **`filter`** (`function`, `default` `true`) - A function that determines whether a configuration should be included in the final output. See [filter](#example-with-filter).
- **`map`** (`function`, `default` `identity function`) - A function that modifies each configuration before rendering. See [map](#example-with-map).

## Return Value
- Returns a new application manifest object that includes the extended properties, features, and configurations.


## Usage Examples

### Example with features

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>

```js
local app = import '../../vendor/konn/app.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local baseApp = app.new(
  features=[
    feature.new([
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: props.name,
        },
      },
    ]),
  ],
  props={
    name: 'example-app',
  }
);

local extendedApp = baseApp.extend(
  [
    feature.new([
      function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: props.name,
        },
      },
    ]),
  ]);

extendedApp
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
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
{
   "body": [
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
}
```

  </TabItem>
</Tabs>

### Example with props

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>

```js
local app = import '../../vendor/konn/app.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local baseApp = app.new([
    ([
       function(ctx, props) {
         kind: 'Deployment',
         metadata: {
           name: props.name,
         },
         spec: {
           replicas: props.replicas,
         },
       },
     ]),
  ],
  props={
    name: 'example-app',
    replicas: 3,
  });
local extendedApp = baseApp.extend();

extendedApp
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


Also an example using profiles can be found [here](/api/app/api-app-init#adding-profiles)
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
  profiles={
    dev: {
      name: 'dev-deployment',
    },
    prd: {
      name: 'prd-deployment',
    },
  },
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
local feature = import '../../vendor/konn/feature.libsonnet';

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
    labels: 'default-label',
    replicas: 1,
  }
);

local baseApp = app.new(
  [
    ([
       function(ctx, props) {
         kind: 'Deployment',
         metadata: {
           name: props.name,
         },
       },
     ]),
  ],
  props={
    name: 'base-app',
  },
  extensions=[addLabelsAndReplicas]
);

local extendedApp = baseApp.extend(
  [
    ([
       function(ctx, props) {
         kind: 'Service',
         metadata: {
           name: props.name,
         },
       },
     ]),
  ]);

extendedApp
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      labels: default-label
      name: base-app
    spec:
      replicas: 1
  - kind: Service
    metadata:
      labels: default-label
      name: base-app
    spec:
      replicas: 1
```

  </TabItem>
  <TabItem value="json" label="JSON Output">

```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "labels": "default-label",
            "name": "base-app"
         },
         "spec": {
            "replicas": 1
         }
      },
      {
         "kind": "Service",
         "metadata": {
            "labels": "default-label",
            "name": "base-app"
         },
         "spec": {
            "replicas": 1
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

local baseApp = app.new([
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

local extendedApp = baseApp.extend([]);

extendedApp
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

local baseApp = app.new([
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

local extendedApp = baseApp.extend();

extendedApp
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
#### [config documentation](/api/config/api-config-new)
#### [extensions documentation](/api/extensions/api-extensions-new)
#### [feature documentation](/api/feature/api-feature-new).
