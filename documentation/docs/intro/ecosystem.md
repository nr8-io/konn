---
id: ecosystem
title: Ecosystem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



#### Notes with TO DO stuff `delete afterwards` link trough k8s lib helpers, argo  how to setup and use with 
 ========================



 k8s lib
 https://github.com/jsonnet-libs/k8s-libsonnet?tab=readme-ov-file

 k8s jsonnet lib
 https://jsonnet-libs.github.io/k8s-libsonnet/1.30/


 Setting up with argo
```plaintext
vendor/
└── konn/
app/
├── main.libsonnet
├── environments/
│   ├── dev/
│   │   ├── main.libsonnet
│   │   ├── parameters.yaml
│   ├── prod/
│   │   ├── main.libsonnet
│   │   ├── parameters.yaml
│   ├── staging/
│       ├── main.libsonnet
│       ├── parameters.yaml
├── templates/
│   ├── cm.yaml
│   ├── deploy.yaml
│   ├── ing.yaml
│   ├── pvc.yaml
│   ├── secret.yaml
│   ├── svc.yaml
```

### In this example we are just using existing yaml files and using konn to make them into a manifest

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>

```js
local k = import '../../vendor/konn/main.libsonnet';

k.app(
  features=[
    (import 'co.topvine/namespace/main.libsonnet').noManifest,  // namespace feature
    k.fromYaml([
      importstr 'templates/deploy-n8n.yaml',
      importstr 'templates/secret-n8n.yaml',
      importstr 'templates/svc-n8n.yaml',
      importstr 'templates/cm-n8n.yaml',
      importstr 'templates/ing-n8n.yaml',
    ]),
  ]
)

```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
body:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: n8n
    spec:
      replicas: 1
      selector:
        matchLabels:
          name: n8n
      template:
        metadata:
          labels:
            name: n8n
        spec:
          containers:
            - image: eu.gcr.io/repo/nginx
              imagePullPolicy: Always
              name: nginx
              ports:
                - containerPort: 80
              volumeMounts:
                - mountPath: /etc/nginx/conf.d/default.conf
                  name: nginx
                  subPath: default.conf
            - env:
                - name: N8N_BASIC_AUTH_ACTIVE
                  value: "true"
                - name: N8N_BASIC_AUTH_USER
                  valueFrom:
                    secretKeyRef:
                      key: user
                      name: n8n-basic-auth
                - name: N8N_BASIC_AUTH_PASSWORD
                  valueFrom:
                    secretKeyRef:
                      key: password
                      name: n8n-basic-auth
                - name: N8N_SECURE_COOKIE
                  value: "false"
                - name: VUE_APP_URL_BASE_API
                  value: http://n8n.tpv.k8s/
                - name: WEBHOOK_TUNNEL_URL
                  value: http://n8n.tpv.k8s/
              image: docker.n8n.io/n8nio/n8n:latest
              imagePullPolicy: Always
              name: n8n
              ports:
                - containerPort: 5678
          volumes:
            - configMap:
                name: nginx
              name: nginx
  - apiVersion: v1
    data:
      password: cGFzc3dvcmQ=
      user: YWRtaW4=
    kind: Secret
    metadata:
      name: n8n-basic-auth
    type: Opaque
  - apiVersion: v1
    kind: Service
    metadata:
      name: n8n
    spec:
      ports:
        - name: http
          port: 80
          targetPort: 8080
      selector:
        name: n8n
  - apiVersion: v1
    data:
      default.conf: |
        server {
          listen 8080 default_server;
          listen [::]:8080 default_server ipv6only=on;

        location / {
            proxy_pass http://localhost:5678;
            proxy_http_version 1.1;
            proxy_set_header Connection '';
            chunked_transfer_encoding off;
            proxy_buffering off;
            proxy_cache off;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection “upgrade”;
            proxy_set_header Host $host;
          }
        }
    kind: ConfigMap
    metadata:
      name: nginx
  - apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: n8n
    spec:
      rules:
        - host: n8n.tpv.k8s
          http:
            paths:
              - backend:
                  service:
                    name: n8n
                    port:
                      number: 80
                path: /
                pathType: Prefix
```

  </TabItem>
  <TabItem value="json" label="JSON Output">

```json
{
   "body": [
      {
         "apiVersion": "apps/v1",
         "kind": "Deployment",
         "metadata": {
            "name": "n8n"
         },
         "spec": {
            "replicas": 1,
            "selector": {
               "matchLabels": {
                  "name": "n8n"
               }
            },
            "template": {
               "metadata": {
                  "labels": {
                     "name": "n8n"
                  }
               },
               "spec": {
                  "containers": [
                     {
                        "image": "eu.gcr.io/topvine-co/nginx",
                        "imagePullPolicy": "Always",
                        "name": "nginx",
                        "ports": [
                           {
                              "containerPort": 80
                           }
                        ],
                        "volumeMounts": [
                           {
                              "mountPath": "/etc/nginx/conf.d/default.conf",
                              "name": "nginx",
                              "subPath": "default.conf"
                           }
                        ]
                     },
                     {
                        "env": [
                           {
                              "name": "N8N_BASIC_AUTH_ACTIVE",
                              "value": "true"
                           },
                           {
                              "name": "N8N_BASIC_AUTH_USER",
                              "valueFrom": {
                                 "secretKeyRef": {
                                    "key": "user",
                                    "name": "n8n-basic-auth"
                                 }
                              }
                           },
                           {
                              "name": "N8N_BASIC_AUTH_PASSWORD",
                              "valueFrom": {
                                 "secretKeyRef": {
                                    "key": "password",
                                    "name": "n8n-basic-auth"
                                 }
                              }
                           },
                           {
                              "name": "N8N_SECURE_COOKIE",
                              "value": "false"
                           },
                           {
                              "name": "VUE_APP_URL_BASE_API",
                              "value": "http://n8n.tpv.k8s/"
                           },
                           {
                              "name": "WEBHOOK_TUNNEL_URL",
                              "value": "http://n8n.tpv.k8s/"
                           }
                        ],
                        "image": "docker.n8n.io/n8nio/n8n:latest",
                        "imagePullPolicy": "Always",
                        "name": "n8n",
                        "ports": [
                           {
                              "containerPort": 5678
                           }
                        ]
                     }
                  ],
                  "volumes": [
                     {
                        "configMap": {
                           "name": "nginx"
                        },
                        "name": "nginx"
                     }
                  ]
               }
            }
         }
      },
      {
         "apiVersion": "v1",
         "data": {
            "password": "cGFzc3dvcmQ=",
            "user": "YWRtaW4="
         },
         "kind": "Secret",
         "metadata": {
            "name": "n8n-basic-auth"
         },
         "type": "Opaque"
      },
      {
         "apiVersion": "v1",
         "kind": "Service",
         "metadata": {
            "name": "n8n"
         },
         "spec": {
            "ports": [
               {
                  "name": "http",
                  "port": 80,
                  "targetPort": 8080
               }
            ],
            "selector": {
               "name": "n8n"
            }
         }
      },
      {
         "apiVersion": "v1",
         "data": {
            "default.conf": "server {\n  listen 8080 default_server;\n  listen [::]:8080 default_server ipv6only=on;\n\nlocation / {\n    proxy_pass http://localhost:5678;\n    proxy_http_version 1.1;\n    proxy_set_header Connection '';\n    chunked_transfer_encoding off;\n    proxy_buffering off;\n    proxy_cache off;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection “upgrade”;\n    proxy_set_header Host $host;\n  }\n}\n"
         },
         "kind": "ConfigMap",
         "metadata": {
            "name": "nginx"
         }
      },
      {
         "apiVersion": "networking.k8s.io/v1",
         "kind": "Ingress",
         "metadata": {
            "name": "n8n"
         },
         "spec": {
            "rules": [
               {
                  "host": "n8n.tpv.k8s",
                  "http": {
                     "paths": [
                        {
                           "backend": {
                              "service": {
                                 "name": "n8n",
                                 "port": {
                                    "number": 80
                                 }
                              }
                           },
                           "path": "/",
                           "pathType": "Prefix"
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
}
```

  </TabItem>
</Tabs>


### Link the manifest with argo
<Tabs>
  <TabItem value="yaml" label="Argo" default>

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: argocd-mockup
  namespace: n8n
spec:
  project: n8n
  source:
    repoURL: "https://github.com/myrepo/app.git"
    targetRevision: main
    path: dev
    directory:
      recurse: true
      jsonnet:
        libs:
          - lib
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  syncPolicy:
    automated:
      prune: false
      selfHeal: true
```
  </TabItem>
</Tabs>
