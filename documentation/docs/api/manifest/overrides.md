---
id: api-manifest-overrides
title: overrides
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `overrides` function returns the manifest’s properties after applying any overrides, which can be functions or objects that modify the original properties.

### Parameters
- **`props`** - (object): The properties to override.

### Return Value
Returns the properties after applying the overrides.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
      kind: 'Deployment',
      metadata: {
        name: props.name,
        labels: {
          label: props.label,
          app: 'nginx',
        },
      },
    }, {
      kind: 'Deployment',
      metadata: {
        name: props.name,
        labels: {
          label: props.label,
          app: 'flask',
        },
      },
    }], {
      name: 'placeholder',
      label: 'placeholder',
    }).override(function(props) {
      name: 'override-name',
    });

    {
      Unchanged: testManifest,
      custom_props: testManifest.overrides({ label: 'custom-label', name: 'this wont change override' }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    Unchanged:
      body:
        - kind: Deployment
          metadata:
            labels:
              app: nginx
              label: placeholder
            name: override-name
        - kind: Deployment
          metadata:
            labels:
              app: flask
              label: placeholder
            name: override-name
    custom_props:
      label: custom-label
      name: override-name
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "Unchanged": {
          "body": [
             {
                "kind": "Deployment",
                "metadata": {
                   "labels": {
                      "app": "nginx",
                      "label": "placeholder"
                   },
                   "name": "override-name"
                }
             },
             {
                "kind": "Deployment",
                "metadata": {
                   "labels": {
                      "app": "flask",
                      "label": "placeholder"
                   },
                   "name": "override-name"
                }
             }
          ]
       },
       "custom_props": {
          "label": "custom-label",
          "name": "override-name"
       }
    }
    ```
  </TabItem>
</Tabs>

### Cross-linking to Other API Docs
#### [helpers documentation](/api/helpers/api-helpers-render)