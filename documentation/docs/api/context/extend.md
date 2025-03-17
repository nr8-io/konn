---
id: api-context-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Extends the current context with new properties and manifest, while keeping the existing metadata.

## Parameters
- **`props`** - (object) The properties to include in the extended context. See [props](#example-with-props).
- **`manifest`** - (array) The manifest to include in the extended context. See [manifest](#example-with-manifest).
- **`metadata`** - (object) The metadata to merge with the existing metadata in the context. See [metadata](#example-with-metadata).

## Return Value
Returns a new context object with the extended properties, manifest, and merged metadata.

## Usage Example

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local initialCtx = ctx.new(
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
  ]);

// Extend the context with additional props
local extendedCtx = initialCtx.extend(
  props={
    version: '1.0',
  });

{
  initialProps: initialCtx.args.props,
  extendedProps: extendedCtx.args.props,
}
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
initialProps:
  env: production
extendedProps:
  env: production
  version: 1.0
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
  "initialProps": {
    "env": "production"
  },
  "extendedProps": {
    "env": "production",
    "version": "1.0"
  }
}
```

  </TabItem>
</Tabs>

### Example with manifest
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local initialCtx = ctx.new(
  props={},
  manifest=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  metadata={}
);

// Extend the context with additional manifest
local extendedCtx = initialCtx.extend(
  manifest=[
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-service',
      },
    },
  ]
);

{
  initialManifest: initialCtx.args.manifest,
  extendedManifest: extendedCtx.args.manifest,
}
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
initialManifest:
  - kind: Deployment
    metadata:
      name: nginx
extendedManifest:
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
{
  "initialManifest": [
    {
      "kind": "Deployment",
      "metadata": {
        "name": "nginx"
      }
    }
  ],
  "extendedManifest": [
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
}
```

  </TabItem>
</Tabs>

### Example with metadata
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local initialCtx = ctx.new(
  props={},
  manifest=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  metadata={
    profile: 'dev',
  }
);

// Extend the context with additional metadata
local extendedCtx = initialCtx.extend(
  metadata={
    environment: 'staging',
  }
);

{
  initialMetadata: initialCtx.args.metadata,
  extendedMetadata: extendedCtx.args.metadata,
}
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
initialMetadata:
  profile: dev
extendedMetadata:
  profile: dev
  environment: staging
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
  "initialMetadata": {
    "profile": "dev"
  },
  "extendedMetadata": {
    "profile": "dev",
    "environment": "staging"
  }
}
```

  </TabItem>
</Tabs>

### Example with props
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ctx = import '../../vendor/konn/context.libsonnet';

local initialCtx = ctx.new(
  props={},
  manifest=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  metadata={
    profile: 'dev',
  }
);

// Extend the context with additional props, manifest, and metadata
local extendedCtx = initialCtx.extend(
  props={},
  manifest=[
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-service',
      },
    },
  ],
  metadata={
    environment: 'staging',
  }
);

{
  initialManifest: initialCtx.args.manifest,
  extendedManifest: extendedCtx.args.manifest,
  extendedMetadata: extendedCtx.args.metadata,
}
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
initialManifest:
  - kind: Deployment
    metadata:
      name: nginx
extendedManifest:
  - kind: Deployment
    metadata:
      name: nginx
  - kind: Service
    metadata:
      name: nginx-service
extendedMetadata:
  environment: staging
  profile: dev
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
  "initialManifest": [
    {
      "kind": "Deployment",
      "metadata": {
        "name": "nginx"
      }
    }
  ],
  "extendedManifest": [
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
  ],
  "extendedMetadata": {
    "environment": "staging",
    "profile": "dev"
  }
}
```

  </TabItem>
</Tabs>