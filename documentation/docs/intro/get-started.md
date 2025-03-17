---
id: intro
title: Introduction to Konn
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Getting started with Konn

Konn is an open-source project which offer Jsonnet-based configuration management library that provides structured methods to create, transform, and manage Kubernetes manifests, JSON, and YAML configurations.

Prerequisites:
Make sure you are introduced to jsonnet if you want a tutorial which will give you a solid foundation the below is recommended:
https://jsonnet.org/learning/tutorial.html


About Jsonnet:
Jsonnet is a data templating language which comes from google and is used to introduce programing to your yaml/jsonnet files 
You can use it to template and extend your kubernetes manifests.

About Konn:
Konn brings several advantages over plain Jsonnet, especially in the context of large-scale configuration management and feature-driven development




## Installing Konn → [Installtion](/intro/install)


## Basic Usage
### Creating a Configuration
Konn allows you to create and manage Kubernetes configurations using a simple and intuitive API. Here's how you can create a basic deployment configuration:
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import '../../vendor/konn/main.libsonnet';

    local deployment = k.config(
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      });

    deployment
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


### Rendering the Configuration to YAML or JSON from VScode
To render in YAML or JSON in VScode use `Ctrl` + `Shift` + `P` and search for:
-  `jsonnet: Evaluate file(YAML)` for yaml evaluation
-  `jsonnet: Evaluate file(YAML)` for json evaluation
:::note
Make sure you have the Jsonnet Language Server Plugin. 
Also you should setup your lib paths because jsonnet does not find them automatically
This topic is covered in [Installtion](/intro/install).
:::

## Examples
### Creating a Service
Here's an example of how to create a Kubernetes Service using Konn:
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
   local k = import '../../vendor/konn/main.libsonnet';

   local service = k.config(
     function(ctx, props) {
       kind: 'Service',
       metadata: {
         name: 'nginx-service',
       },
     });

   service
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
   body:
     kind: Service
     metadata:
       name: nginx-service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
   {
      "body": {
         "kind": "Service",
         "metadata": {
            "name": "nginx-service"
         }
      }
   }
    ```  
  </TabItem>
</Tabs>


### Using Extensions
Konn supports extensions to modify or enhance configurations. Here's an example:
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json

    ```  
  </TabItem>
</Tabs>


## Advanced Topics
### Using Profiles
Profiles allow you to define different variations of your application. Here's how to use profiles:

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
 

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json

    ```  
  </TabItem>
</Tabs>


### Conditional Configurations
Konn allows you to conditionally apply configurations based on properties:

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
 

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json

    ```  
  </TabItem>
</Tabs>


## Resources
For more information, check out the following resources:
- [Konn Documentation](https://konn.example.com/docs)
- [GitHub Repository](https://github.com/konn/konn)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

We hope this guide helps you get started with Konn. If you have any questions or need further assistance, feel free to reach out to our community or support team. Happy configuring!