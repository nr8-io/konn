---
id: api-helpers-resolve-props
title: resolve-props
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Merges properties with target defaults and applies overrides.

## Parameters
- **`target`** - (object) The target object with default properties.
- **`props`** - (object, optional) Additional properties to merge with the target's properties. Defaults to an empty object.

## Return Value
Returns the merged properties with overrides applied.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local helpers = import '../../vendor/konn/helpers.libsonnet';

    // Initial configuration with default props
    local myConfig = config.new(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: props.name,
      },
    }, {
      name: 'default-name',
    });

    // Props to override the default ones
    local overrideProps =
      {
        name: 'custom-name',
      };

    // Resolve the props with overrides
    local mergedProps = helpers.resolveProps(myConfig, overrideProps);

    // Output the resolved props
    mergedProps
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    name: custom-name
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "name": "custom-name"
    }
    ```
  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [config documentation](/api/config/api-config-new)