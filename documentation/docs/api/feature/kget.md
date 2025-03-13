---
id: api-feature-kget
title: kget
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `kget` function retrieves a configuration by its kind and metadata name.

:::note get for kubernetes
Does the same as [get](api-feature-get) however instead of the path it's looking for kind.
:::

## Parameters
- **`kind`** - (string) The kind of the configuration to search for.
- **`name`** - (string) The name of the configuration to match.

## Return Value
The configuration that matches the kind and name.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new([
      {
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
      
      testFeature.kget('Deployment', 'nginx')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Deployment",
          "metadata": {
             "name": "nginx"
          }
       }
    }
    ```  
    </TabItem>
</Tabs>


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new([
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
      {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
        },
      },
    ]);

    {
      output_without_kget: testFeature,
      output: testFeature.kget('Deployment', 'flask'),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      body:
        kind: Deployment
        metadata:
          name: flask
    output_without_kget:
      body:
        - kind: Deployment
          metadata:
            name: nginx
        - kind: Deployment
          metadata:
            name: flask
        - kind: Deployment
          metadata:
            name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       },
       "output_without_kget": {
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
                   "name": "flask"
                }
             }
          ]
       }
    }
    ```  
    </TabItem>
</Tabs>