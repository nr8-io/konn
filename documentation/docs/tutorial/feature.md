---
id: features
title: feature
---

This module defines features, which are structured collections of configurations that can be filtered, extended, mapped, and transformed dynamically.

> Encapsulates multiple configurations into a single unit.

> Supports filtering & mapping of configurations.

> Integrates with extensions to modify configurations dynamically.

> Provides utility functions for searching and retrieving specific configs.

• new(configs, props, extensions, filter, map)
Creates a new feaure using the the content in the brackets above

• render
Resolves and applies extensions to the configurations.
Filters and maps configurations based on provided functions.
Returns the final processed configs.

• resolve
Processes individual configurations from different sources
Filters, maps, and transforms configurations dynamically.

• extensions
Returns the resolved list of extensions for the feature.

• extend
Extends an existing feature with additional configs, props, and extensions.
Combines filters and mapping functions.

• overrides
Returns the overridden properties.

• override
Overrides properties dynamically at render time.
Accepts:
• An object → Directly replaces properties.
• A function → Computes overrides based on existing props.


• configure
Alias of override, used for configuring the feature.

• filter
Returns an extended feature with a custom filter applied.

• map
Returns an extended feature with a custom mapping function.

• find
Searches for a config matching a condition and returns the first match.

• get
Retrieves a specific config by path and matcher.

• kget
Retrieves a specific Kubernetes config by kind and metadata name.

### Examples
