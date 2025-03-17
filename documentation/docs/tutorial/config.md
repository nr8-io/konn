import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---
id: config
title: config
---
What is a Config

At its essence, a config in Konn is simply an object with key-value pairs. It serves as the foundation for templating configurations—whether for Kubernetes, infrastructure, applications, or any system that supports structured configuration formats like YAML, JSON, or TOML.

Why Konn for Configuration Management?

Unlike Helm, which relies heavily on find-and-replace templating, Konn offers a more powerful and flexible way to create configuration variants. Instead of managing multiple Helm charts or complex overlays, Konn allows you to define a single base configuration and generate different variations based on context.

For example:

You might have multiple environments (e.g., dev, staging, production).
One environment may require an additional debugging pod.

•Instead of maintaining multiple Helm releases, Konn enables you to express these variations efficiently.

In Konn, every configuration is ultimately a render function that returns an object. This approach ensures that configurations remain declarative, reusable



This is a valid config to represent the input and output:
npm

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>

    ```js
    {
      type: 'test',
    }
    ```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    type: test
    ```

  </TabItem>
</Tabs>

:::note
There are some helpers built in config such as building them fromYAML and fromJSON
:::

But let`s say we want to add properties to it and we add it in a way that we are going to be able to edit trough various different profiles and we need some way to get the props to the right place.

A config is a function that renders an object and all basic configs no matter how they are supplied while using this will end up wrapped like this

`ctx` -> determines where the config is used and making changes to it based on what is included in the context
What is the context? -> list of other included configs


`props` -> props are the current props down at any give point of time of initiation

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';
    k.config(function(ctx, props)
    {
        type: 'test',
    })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
    type: test
    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
      "body": {
        "type": "test"
      }
    }
    ```
  </TabItem>
</Tabs>


:::tip Tip
It`s built with preview in mind. 

Any time you are using Konn you can render in place to preview and test what you are working on at the smallest level.
:::


From this point onwards you will notice that the examples will be using the render function first and props second:

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
``` js
local k = import 'konn/main.libsonnet';
k.config(function(ctx, props)
{
    type: props.type,
}, {
    type: 'test'

})
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    type: test
    ```
  </TabItem>
</Tabs>


