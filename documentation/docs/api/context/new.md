---
id: api-context-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Creates a new context object with the specified properties, manifest, and metadata.

## Parameters
- **`props`** - (object) Includes the properties to include in the context. It defines various settings or configurations that can be used within the context. See [props](#example-with-props).
- **`manifest`** - (array) Array that includes the manifest to be part of the context. It represents the Kubernetes configurations, such as Deployments, Services, or any other Kubernetes resources. See [manifest](#example-with-manifest).
- **`metadata`** - (object) Contains the metadata to include in the context. It typically includes additional information like profile or environment settings that are relevant to the context. See [metadata](#example-with-metadata).

## Return Value
Returns a new context object.

## Usage Examples

### Example with props

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local testCtx = ctx.new(
  props={
    env: 'production',
  },
  manifest=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ]
);

local renderedManifest = std.map(
  function(config) config {
    metadata+: {
      labels+: {
        env: testCtx.args.props.env,
      },
    },
  },
  testCtx.args.manifest
);

renderedManifest
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Deployment
  metadata:
    labels:
      env: production
    name: nginx
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
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
```

  </TabItem>
</Tabs>

### Example with manifest
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local testCtx = ctx.new(
  manifest=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-service',
      },
    },
  ]);

testCtx.args.manifest
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Deployment
  metadata:
    name: nginx
- kind: Service
  metadata:
    name: nginx-service
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "Deployment",
      "metadata": {
         "name": "nginx"
      }
   },
   {
      "kind": "Service",
      "metadata": {
         "name": "nginx-service"
      }
   }
]
```

  </TabItem>
</Tabs>

### Example with metadata
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local testCtx = ctx.new(
  {
    kind: 'Deployment',
    metadata: {
      name: 'nginx',
    },
  },
  metadata={
    profile: 'dev',
  });

testCtx.args.metadata  // we only render metadata
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
profile: dev
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "profile": "dev"
}
```

  </TabItem>
</Tabs>