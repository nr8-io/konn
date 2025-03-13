---
id: api-extensions-selector
title: selector
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `selector` function filters and modifies existing Kubernetes manifests based on specific conditions. It enables selective modification of resources while maintaining the structure of the original manifest.

## Parameters
- **`render`** - A function that modifies selected configurations. It takes `ctx`, `config`, and `props` as arguments and extends the metadata. See [render](#example-with-render).
- **`selector`** - A function that determines which objects should be modified. It checks if a resource meets specific criteria, such as matching `kind` or `name`. See [selector](#example-with-selector).
- **`extends`** - The base manifest containing the resources to be filtered and modified. See [extends](#example-with-extends).

## Return Value
Returns an array of modified Kubernetes manifests.

## Usage Examples

### Example with render
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local extension = import '../../vendor/konn/extension.libsonnet';
local manifest = import '../../vendor/konn/manifest.libsonnet';

local testManifest = manifest.new(function(ctx, props) [{
  kind: 'Deployment',
  metadata: {
    name: 'nginx',
  },
}, {
  kind: 'Deployment',
  metadata: {
    name: 'flask',
  },
}, {
  kind: 'Deployment',
  metadata: {
    name: 'kong',
  },
}]);

local testExtension = extension.new(
  render=function(ctx, config, props) config {
    metadata+: {
      label: 'extended',
    },
  },
  selector=function(ctx, config, props) config.is('Deployment', 'kong'),
  // removing 'kong' will select all deployments instead
  extends=testManifest
);

testExtension
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      name: nginx
  - kind: Deployment
    metadata:
      name: flask
  - kind: Deployment
    metadata:
      label: extended
      name: kong
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
      },
      {
         "kind": "Deployment",
         "metadata": {
            "name": "flask"
         }
      },
      {
         "kind": "Deployment",
         "metadata": {
            "label": "extended",
            "name": "kong"
         }
      }
   ]
}
```

  </TabItem>
</Tabs>

### Example with selector
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local extension = import '../../vendor/konn/extension.libsonnet';
local manifest = import '../../vendor/konn/manifest.libsonnet';

local testManifest = manifest.new(function(ctx, props) [{
  kind: 'Deployment',
  metadata: {
    name: 'nginx',
  },
}, {
  kind: 'Service',
  metadata: {
    name: 'nginx-service',
  },
}, {
  kind: 'Deployment',
  metadata: {
    name: 'flask',
  },
}, {
  kind: 'Service',
  metadata: {
    name: 'flask-service',
  },
}]);

local serviceAnnotationExt = extension.new(
  render=function(ctx, config, props) config {
    metadata+: {
      annotations+: {
        'custom-annotation': 'added-via-extension',
      },
    },
  },
  selector=function(ctx, config, props) config.is('Service'),
  extends=testManifest
);

serviceAnnotationExt
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      name: nginx
  - kind: Service
    metadata:
      annotations:
        custom-annotation: added-via-extension
      name: nginx-service
  - kind: Deployment
    metadata:
      name: flask
  - kind: Service
    metadata:
      annotations:
        custom-annotation: added-via-extension
      name: flask-service
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
      },
      {
         "kind": "Service",
         "metadata": {
            "annotations": {
               "custom-annotation": "added-via-extension"
            },
            "name": "nginx-service"
         }
      },
      {
         "kind": "Deployment",
         "metadata": {
            "name": "flask"
         }
      },
      {
         "kind": "Service",
         "metadata": {
            "annotations": {
               "custom-annotation": "added-via-extension"
            },
            "name": "flask-service"
         }
      }
   ]
}
```

  </TabItem>
</Tabs>

### Example with extends
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local extension = import '../../vendor/konn/extension.libsonnet';
local manifest = import '../../vendor/konn/manifest.libsonnet';

local testManifest = manifest.new(function(ctx, props) [{
  kind: 'Deployment',
  metadata: {
    name: 'nginx',
  },
}, {
  kind: 'Deployment',
  metadata: {
    name: 'flask',
  },
}]);

local testExtension = extension.new(
  render=function(ctx, config, props) config {
    metadata+: {
      annotations: {
        extended: 'true',
      },
    },
  },
  extends=testManifest
);

testExtension
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      annotations:
        extended: "true"
      name: nginx
  - kind: Deployment
    metadata:
      annotations:
        extended: "true"
      name: flask
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "annotations": {
               "extended": "true"
            },
            "name": "nginx"
         }
      },
      {
         "kind": "Deployment",
         "metadata": {
            "annotations": {
               "extended": "true"
            },
            "name": "flask"
         }
      }
   ]
}
```

  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
[manifest documentation](/api/manifest/api-manifest-new)