---
id: api-config-render
title: render
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `render` function is used to generate the final configuration output by processing the provided props. It takes the configuration defined with config and outputs the rendered result in the form of a structured object (JSON or YAML).

## Parameters
- **`props`** - (object) A set of key-value pairs that are passed to the configuration function. These are used within the configuration function to generate the output.

## Return Value
The `render` function returns the rendered configuration, which includes the evaluated props along with any other defined parameters in the configuration.
## Usage Examples
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local render_test = k.config(function(ctx, props) {
      kind: 'Service',
      props: props,
    });
    {
      render_test: render_test.render(props={
        namespace: 'prod',
      }),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_test:
      kind: Service
      props:
        namespace: prod
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "render_test": {
          "kind": "Service",
          "props": {
             "namespace": "prod"
          }
       }
    }
    ```
  </TabItem>
</Tabs>



:::note
If you don't supply a `ctx`, it will supply a `ctx` and if you don't supply `props`, it will supply `props` that will be empty `props: {}`.
:::


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local render_test = k.config(function(ctx,props){
        kind: 'Service',
        props:props
    });
    {
    render_test: render_test.render(props= {  
    //  namespace: prod,  Now that I have commented the props see how it evaluates 
    })
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_test:
      kind: Service
      props: {}
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "render_test": {
          "kind": "Service",
          "props": { }
       }
    }
    ```
  </TabItem>
</Tabs>
