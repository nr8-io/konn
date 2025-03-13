---
id: why-how
title: Why and How to use Konn
---


##  Why Use Konn?

Konn is an open-source project which offer Jsonnet-based configuration management library that provides structured methods to create, transform, and manage Kubernetes manifests, JSON, and YAML configurations.

Prerequisites: Make sure you are introduced to jsonnet if you want a tutorial which will give you a solid foundation the below is recommended: https://jsonnet.org/learning/tutorial.html

About Jsonnet: Jsonnet is a data templating language which comes from google and is used to introduce programing to your yaml/jsonnet files You can use it to template and extend your kubernetes manifests.

About Konn: Konn brings several advantages over plain Jsonnet, especially in the context of large-scale configuration management and feature-driven development

Konn enhances the ability to write maintainable, reusable, and flexible configurations, 
especially in complex environments where managing multiple profiles, features, and extensions is necessary. 
It abstracts away much of the boilerplate and manual configuration management found in plain Jsonnet, 
making it easier to maintain and evolve your configuration over time.

### Key capabilities of the tool:

#### Modular and Composable Configuration: you can create manifests from objects, arrays, YAML, and JSON strings
#### allows you to define features and extensions in a modular way, making it easy to compose and reuse configuration logic across multiple projects.
   > With plain Jsonnet, you would need to manually manage and compose multiple configurations, which can lead to redundant code and increased complexity as the system grows.
   
####  Profiles and Context-Aware Configuration:  makes it easy to define and manage different profiles (e.g., dev, stg, prd), allowing configurations to be tailored to each environment automatically.
   > In plain Jsonnet, managing environment-specific configurations requires more boilerplate code and manual handling of different profiles or contexts.

#### Feature and Extension Composition: introduces the concept of features and extensions, which enables configuration logic to be composed and applied flexibly.
  > While plain Jsonnet allows you to define functions and objects, the feature and extension model in Konn makes it much easier to modify and extend parts of the configuration based on different use cases, without repeating logic.


#### Dynamic Configuration Rendering : provides dynamic rendering of configurations based on profiles, context, and properties, making it ideal for scenarios where configurations need to adapt to    runtime conditions.
   > In plain Jsonnet, you would need to manually manage this dynamic behavior, often requiring more verbose and less flexible code.

#### Simplified Overrides: you can easily override specific parts of your configuration (e.g., the name of resources) without affecting other parts, allowing for greater flexibility and less duplication.
	> In plain Jsonnet, overriding specific properties may require more cumbersome logic to isolate and modify individual elements of a configuration.

#### Cleaner and More Declarative Approach:  focuses on being declarative, where you define the desired outcome, and it handles the complexity of how to achieve it through features and extensions.
   > Plain Jsonnet can be more imperative, requiring you to manually specify how configurations should be composed and adjusted in different scenarios.



## How to use Konn?