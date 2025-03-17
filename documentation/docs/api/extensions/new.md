---
id: api-extensions-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `new` function is used to create a new extension that can modify or generate Kubernetes resources. This function allows users to define how an extension transforms or adds configurations to a given manifest.

## Parameters
- **`render`** - (function) A function that defines how the extension transforms the selected Kubernetes resources. See [render](#example-with-render).
- **`selector`** - (function, optional) A function that filters which resources should be affected by the extension. See [selector](#example-with-selector).
- **`extends`** - (object, optional) An existing manifest or extension that this new extension should build upon. See [extends](#example-with-extends).

## Return Value
Returns an object containing the transformed or newly generated Kubernetes resources based on the provided render function.

## Usage Examples

### Example with render
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local ext = import '../../vendor/konn/extension.libsonnet';

local testExt = ext.new(
  function(ctx, config, props)
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
    ]);

testExt
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
local ext = import '../../vendor/konn/extension.libsonnet';
local manifest = import '../../vendor/konn/manifest.libsonnet';

local testManifest = manifest.new(function(ctx, props) [
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

local serviceAnnotationExt = ext.new(
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
local ext = import '../../vendor/konn/extension.libsonnet';

local baseExt = ext.new(
  function(ctx, config, props)
    [
      {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
    ],
);

local testExt = ext.new(
  render=function(ctx, config, props)
    config {
      metadata+: {
        labels: {
          extended: 'true',
        },
      },
    },
  extends=baseExt,
);

testExt
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  body:
    - kind: Deployment
      metadata:
        name: nginx
  metadata:
    labels:
      extended: "true"
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "body": {
      "body": [
         {
            "kind": "Deployment",
            "metadata": {
               "name": "nginx"
            }
         }
      ],
      "metadata": {
         "labels": {
            "extended": "true"
         }
      }
   }
}
```

  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [manifest documentation](/api/manifest/api-manifest-new)