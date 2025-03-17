---
id: manifests
title: manifest
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### What are manifests?

Manifests are an array of configs.
It`s just like a [Config](config) except it should return an array


:::note
This is an empty valid manifest
The Render function cannot return an object it has to be an array but if you are converting it will automatically convert it for you.
:::

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    k.manifest(function(ctx, props)[
        {},
    ])
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    - {}
    ```
    </TabItem>
</Tabs>

:::tip
It can be any number of objects to create a config except it has to be an array.
In the same way of when you run new.config
:::

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    k.manifest(function(ctx, props)[
        {
            foo: 'bar',  // all of these 
        },
        {
            foo: 'bar', // are getting converted to configs
        },
    ])
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
      - foo: bar
      - foo: bar
    ```
    </TabItem>
</Tabs>