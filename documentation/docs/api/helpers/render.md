---
id: api-helpers-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Renders a target with a context and properties. Mostly used for testing.

## Parameters
- **`target`** - (any) The target to render.
- **`props`** - (object, optional) Additional properties to pass to the target. Defaults to an empty object.

## Return Value
Returns the rendered target or the target itself if it's not renderable.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    local myConfig = config.new(function(ctx, props) // requires a function to work
      {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      });

    helpers.render(myConfig)
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    kind: Deployment
    metadata:
      name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "kind": "Deployment",
       "metadata": {
          "name": "nginx"
       }
    }
    ```
  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [config documentation](/api/config/api-config-new)