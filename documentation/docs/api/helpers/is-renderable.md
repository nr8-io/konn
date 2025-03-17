---
id: api-helpers-is-renderable
title: is-renderable
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Tests if a given target is a renderable object.

## Parameters
- **`target`** - (any) The target to test.

## Return Value
Returns `true` if the target is a renderable object, otherwise `false`.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    local renderableObject = {
      render: function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'renderable-object',
        },
      },
    };

    local nonRenderableObject = {
      kind: 'Service',
      metadata: {
        name: 'non-renderable-object',
      },
    };

    {
      isRenderableObject: helpers.isRenderable(renderableObject),
      isNonRenderableObject: helpers.isRenderable(nonRenderableObject),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    isRenderableObject: true
    isNonRenderableObject: false
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "isRenderableObject": true,
      "isNonRenderableObject": false
    }
    ```
  </TabItem>
</Tabs>