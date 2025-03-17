---
id: api-helpers-is-manifest
title: is-manifest
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




## Overview
Tests if a given target is a manifest object.

## Parameters
- **`target`** - (any) The target to test.

## Return Value
Returns `true` if the target is a manifest object, otherwise `false`.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local validManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: 'valid-manifest',
          },
        },
      ],
    );

    local invalidManifest = {
      kind: 'Service',
      metadata: {
        name: 'invalid-manifest',
      },
    };

    {
      isValidManifest: helpers.isManifest(validManifest),
      isInvalidManifest: helpers.isManifest(invalidManifest),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    isValidManifest: true
    isInvalidManifest: false
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "isValidManifest": true,
      "isInvalidManifest": false
    }
    ```
  </TabItem>
</Tabs>


### Cross-linking to Other API Docs
#### [manifest documentation](/api/manifest/api-manifest-new)

