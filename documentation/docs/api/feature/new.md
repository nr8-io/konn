---
id: api-feature-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `new`

## Overview
The `new` function initializes a new feature with a set of configurations, properties, and extensions. It also provides functionality to apply filters and maps to customize the configuration.

## Parameters
- **`configs`** - (array) The configurations to be applied to the feature. See [configs](#example-with-configs).
- **`props`** - (object) The properties that define the behavior of the feature. See [props](#example-with-props).
- **`extensions`** - (array) Optional extensions to be applied to the feature. See [extensions](#example-with-extensions).
- **`filter`** - (function) A filter function used to determine whether a configuration should be included. See [filter](#example-with-filter).
- **`map`** - (function) A map function used to modify configurations. See [map](#example-with-map).

## Return Value
An object representing the new feature, including its body (rendered configuration), resolved configurations (`configs`), properties, and function arguments.

## Usage Examples

### Example with configs

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local feature = import '../../vendor/konn/feature.libsonnet';

local configsFeature = feature.new([
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

configsFeature
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
            "name": "nginx-service"
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
local feature = import '../../vendor/konn/feature.libsonnet';

local propsFeature = feature.new(
  [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  {
    prop1: 'value1',
    prop2: 'value2',
  }
);

propsFeature.props
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
prop1: value1
prop2: value2
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "prop1": "value1",
   "prop2": "value2"
}
```  
  </TabItem>
</Tabs>


### Example with extensions

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local extension = import '../../vendor/konn/extension.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local testExt = extension.new(
  function(ctx, config, props) config {
    metadata+: {
      labels: {
        app: 'extended-nginx',
      },
    },
  }
);

local extensionsFeature = feature.new(
  [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  {},
  [testExt]
);

extensionsFeature
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      labels:
        app: extended-nginx
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
               "app": "extended-nginx"
            },
            "name": "nginx"
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
local feature = import '../../vendor/konn/feature.libsonnet';

local filterFeature = feature.new(
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
  ],
  filter=function(ctx, config, props) config.get('metadata').name == 'flask'
);

filterFeature
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
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
            "name": "flask"
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
local feature = import '../../vendor/konn/feature.libsonnet';

local mapFeature = feature.new(
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
  ],
  map=function(ctx, config, props) config {
    metadata+: {
      name: config.metadata.name + '-app',
    },
  }
);

mapFeature
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - kind: Deployment
    metadata:
      name: nginx-app
  - kind: Deployment
    metadata:
      name: flask-app
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "body": [
      {
         "kind": "Deployment",
         "metadata": {
            "name": "nginx-app"
         }
      },
      {
         "kind": "Deployment",
         "metadata": {
            "name": "flask-app"
         }
      }
   ]
}
```  
  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [extensions documentation](/api/extensions/api-extensions-new)
