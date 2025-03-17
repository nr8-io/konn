---
id: api-helpers-is-resolvable
title: is-resolvable
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




## Overview
Tests if a given target has a resolve method.

## Parameters
- **`target`** - (any) The target to test.

## Return Value
Returns `true` if the target has a resolve method, otherwise `false`.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    local resolvableObject = {
      resolve: function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: 'resolvable-object',
          },
        },
      ],
    };

    local nonResolvableObject = {
      kind: 'Service',
      metadata: {
        name: 'non-resolvable-object',
      },
    };

    {
      isResolvableObject: helpers.isResolvable(resolvableObject),
      isNonResolvableObject: helpers.isResolvable(nonResolvableObject),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    isResolvableObject: true
    isNonResolvableObject: false
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "isResolvableObject": true,
      "isNonResolvableObject": false
    }
    ```
  </TabItem>
</Tabs>