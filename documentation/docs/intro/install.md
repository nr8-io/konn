---
id: install
title: Installation
---

### There will be a github link to konn here somewhere


## Install the Jsonnet command line tool

The Jsonnet git repo contains all necessary steps for the installation of jsonnet:

 - https://github.com/google/jsonnet

:::tip
verify jsonnet is installed using 

```
jsonnet -v
```
:::



## Prerequisites for VScode


### Jsonnet Language Server 
 Plugin for Vscode
- https://marketplace.visualstudio.com/items?itemName=Grafana.vscode-jsonnet



`1.` Create .vscode folder in your base directory and create the following files → settings.json → exetensions.json

`2.` populate them as follows
• settings.json

```js
{
  "jsonnet.languageServer.jpath": [
    "./",
    "./lib",  
    "./vendor",
    // you need to point to konn and/or other libsonnet you will be referring to here
  ],
  "jsonnet.languageServer.resolvePathsWithTanka": true,
  "cSpell.words": [
    "multisite"
  ]
}
```

• exetensions.json
```js
 {
  "recommendations": [
    "grafana.vscode-jsonnet"
  ]
}
```

`3.` Go to extension in vscode and install Jsonnet Language Server
Make sure you have a vendor folder in your base directory if you don`t create one and have konn inside of it (this can be change but keep in mind you need to change settings.json for your lib location)