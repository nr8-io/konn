---
id: api-helpers-is-config
title: is-config
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Tests if a given target is a configuration object.

## Parameters
- **`target`** - (any) The target to test.

## Return Value
Returns `true` if the target is a configuration object, otherwise `false`.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';
    local config = import '../../vendor/konn/config.libsonnet';

    local validConfig = config.new(
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'valid-config',
        },
      },
    );

    local invalidConfig = {
      kind: 'Service',
      metadata: {
        name: 'invalid-config',
      },
    };

    {
      isValidConfig: helpers.isConfig(validConfig),
      isInvalidConfig: helpers.isConfig(invalidConfig),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    isValidConfig: true
    isInvalidConfig: false
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "isValidConfig": true,
      "isInvalidConfig": false
    }
    ```
  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [config documentation](/api/config/api-config-new)

