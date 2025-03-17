"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2299],{8941:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"intro/ecosystem","title":"Ecosystem","description":"Notes with TO DO stuff delete afterwards link trough k8s lib helpers, argo  how to setup and use with","source":"@site/docs/intro/ecosystem.md","sourceDirName":"intro","slug":"/intro/ecosystem","permalink":"/konn/intro/ecosystem","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro/ecosystem.md","tags":[],"version":"current","frontMatter":{"id":"ecosystem","title":"Ecosystem"},"sidebar":"konnSidebar","previous":{"title":"Learning Resources","permalink":"/konn/intro/learning-resources"}}');var s=t(4848),r=t(8453),o=t(5537),i=t(9329);const l={id:"ecosystem",title:"Ecosystem"},u=void 0,c={},p=[{value:"Notes with TO DO stuff <code>delete afterwards</code> link trough k8s lib helpers, argo  how to setup and use with",id:"notes-with-to-do-stuff-delete-afterwards-link-trough-k8s-lib-helpers-argo--how-to-setup-and-use-with",level:4},{value:"In this example we are just using existing yaml files and using konn to make them into a manifest",id:"in-this-example-we-are-just-using-existing-yaml-files-and-using-konn-to-make-them-into-a-manifest",level:3},{value:"Link the manifest with argo",id:"link-the-manifest-with-argo",level:3}];function m(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h4,{id:"notes-with-to-do-stuff-delete-afterwards-link-trough-k8s-lib-helpers-argo--how-to-setup-and-use-with",children:["Notes with TO DO stuff ",(0,s.jsx)(e.code,{children:"delete afterwards"})," link trough k8s lib helpers, argo  how to setup and use with"]}),"\n",(0,s.jsx)(e.p,{children:"========================"}),"\n",(0,s.jsxs)(e.p,{children:["k8s lib\n",(0,s.jsx)(e.a,{href:"https://github.com/jsonnet-libs/k8s-libsonnet?tab=readme-ov-file",children:"https://github.com/jsonnet-libs/k8s-libsonnet?tab=readme-ov-file"})]}),"\n",(0,s.jsxs)(e.p,{children:["k8s jsonnet lib\n",(0,s.jsx)(e.a,{href:"https://jsonnet-libs.github.io/k8s-libsonnet/1.30/",children:"https://jsonnet-libs.github.io/k8s-libsonnet/1.30/"})]}),"\n",(0,s.jsx)(e.p,{children:"Setting up with argo"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:"vendor/\n\u2514\u2500\u2500 konn/\napp/\n\u251c\u2500\u2500 main.libsonnet\n\u251c\u2500\u2500 environments/\n\u2502   \u251c\u2500\u2500 dev/\n\u2502   \u2502   \u251c\u2500\u2500 main.libsonnet\n\u2502   \u2502   \u251c\u2500\u2500 parameters.yaml\n\u2502   \u251c\u2500\u2500 prod/\n\u2502   \u2502   \u251c\u2500\u2500 main.libsonnet\n\u2502   \u2502   \u251c\u2500\u2500 parameters.yaml\n\u2502   \u251c\u2500\u2500 staging/\n\u2502       \u251c\u2500\u2500 main.libsonnet\n\u2502       \u251c\u2500\u2500 parameters.yaml\n\u251c\u2500\u2500 templates/\n\u2502   \u251c\u2500\u2500 cm.yaml\n\u2502   \u251c\u2500\u2500 deploy.yaml\n\u2502   \u251c\u2500\u2500 ing.yaml\n\u2502   \u251c\u2500\u2500 pvc.yaml\n\u2502   \u251c\u2500\u2500 secret.yaml\n\u2502   \u251c\u2500\u2500 svc.yaml\n"})}),"\n",(0,s.jsx)(e.h3,{id:"in-this-example-we-are-just-using-existing-yaml-files-and-using-konn-to-make-them-into-a-manifest",children:"In this example we are just using existing yaml files and using konn to make them into a manifest"}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"local k = import '../../vendor/konn/main.libsonnet';\n\nk.app(\n  features=[\n    (import 'co.topvine/namespace/main.libsonnet').noManifest,  // namespace feature\n    k.fromYaml([\n      importstr 'templates/deploy-n8n.yaml',\n      importstr 'templates/secret-n8n.yaml',\n      importstr 'templates/svc-n8n.yaml',\n      importstr 'templates/cm-n8n.yaml',\n      importstr 'templates/ing-n8n.yaml',\n    ]),\n  ]\n)\n\n"})})}),(0,s.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'body:\n  - apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: n8n\n    spec:\n      replicas: 1\n      selector:\n        matchLabels:\n          name: n8n\n      template:\n        metadata:\n          labels:\n            name: n8n\n        spec:\n          containers:\n            - image: eu.gcr.io/repo/nginx\n              imagePullPolicy: Always\n              name: nginx\n              ports:\n                - containerPort: 80\n              volumeMounts:\n                - mountPath: /etc/nginx/conf.d/default.conf\n                  name: nginx\n                  subPath: default.conf\n            - env:\n                - name: N8N_BASIC_AUTH_ACTIVE\n                  value: "true"\n                - name: N8N_BASIC_AUTH_USER\n                  valueFrom:\n                    secretKeyRef:\n                      key: user\n                      name: n8n-basic-auth\n                - name: N8N_BASIC_AUTH_PASSWORD\n                  valueFrom:\n                    secretKeyRef:\n                      key: password\n                      name: n8n-basic-auth\n                - name: N8N_SECURE_COOKIE\n                  value: "false"\n                - name: VUE_APP_URL_BASE_API\n                  value: http://n8n.tpv.k8s/\n                - name: WEBHOOK_TUNNEL_URL\n                  value: http://n8n.tpv.k8s/\n              image: docker.n8n.io/n8nio/n8n:latest\n              imagePullPolicy: Always\n              name: n8n\n              ports:\n                - containerPort: 5678\n          volumes:\n            - configMap:\n                name: nginx\n              name: nginx\n  - apiVersion: v1\n    data:\n      password: cGFzc3dvcmQ=\n      user: YWRtaW4=\n    kind: Secret\n    metadata:\n      name: n8n-basic-auth\n    type: Opaque\n  - apiVersion: v1\n    kind: Service\n    metadata:\n      name: n8n\n    spec:\n      ports:\n        - name: http\n          port: 80\n          targetPort: 8080\n      selector:\n        name: n8n\n  - apiVersion: v1\n    data:\n      default.conf: |\n        server {\n          listen 8080 default_server;\n          listen [::]:8080 default_server ipv6only=on;\n\n        location / {\n            proxy_pass http://localhost:5678;\n            proxy_http_version 1.1;\n            proxy_set_header Connection \'\';\n            chunked_transfer_encoding off;\n            proxy_buffering off;\n            proxy_cache off;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection \u201cupgrade\u201d;\n            proxy_set_header Host $host;\n          }\n        }\n    kind: ConfigMap\n    metadata:\n      name: nginx\n  - apiVersion: networking.k8s.io/v1\n    kind: Ingress\n    metadata:\n      name: n8n\n    spec:\n      rules:\n        - host: n8n.tpv.k8s\n          http:\n            paths:\n              - backend:\n                  service:\n                    name: n8n\n                    port:\n                      number: 80\n                path: /\n                pathType: Prefix\n'})})}),(0,s.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "apiVersion": "apps/v1",\n         "kind": "Deployment",\n         "metadata": {\n            "name": "n8n"\n         },\n         "spec": {\n            "replicas": 1,\n            "selector": {\n               "matchLabels": {\n                  "name": "n8n"\n               }\n            },\n            "template": {\n               "metadata": {\n                  "labels": {\n                     "name": "n8n"\n                  }\n               },\n               "spec": {\n                  "containers": [\n                     {\n                        "image": "eu.gcr.io/topvine-co/nginx",\n                        "imagePullPolicy": "Always",\n                        "name": "nginx",\n                        "ports": [\n                           {\n                              "containerPort": 80\n                           }\n                        ],\n                        "volumeMounts": [\n                           {\n                              "mountPath": "/etc/nginx/conf.d/default.conf",\n                              "name": "nginx",\n                              "subPath": "default.conf"\n                           }\n                        ]\n                     },\n                     {\n                        "env": [\n                           {\n                              "name": "N8N_BASIC_AUTH_ACTIVE",\n                              "value": "true"\n                           },\n                           {\n                              "name": "N8N_BASIC_AUTH_USER",\n                              "valueFrom": {\n                                 "secretKeyRef": {\n                                    "key": "user",\n                                    "name": "n8n-basic-auth"\n                                 }\n                              }\n                           },\n                           {\n                              "name": "N8N_BASIC_AUTH_PASSWORD",\n                              "valueFrom": {\n                                 "secretKeyRef": {\n                                    "key": "password",\n                                    "name": "n8n-basic-auth"\n                                 }\n                              }\n                           },\n                           {\n                              "name": "N8N_SECURE_COOKIE",\n                              "value": "false"\n                           },\n                           {\n                              "name": "VUE_APP_URL_BASE_API",\n                              "value": "http://n8n.tpv.k8s/"\n                           },\n                           {\n                              "name": "WEBHOOK_TUNNEL_URL",\n                              "value": "http://n8n.tpv.k8s/"\n                           }\n                        ],\n                        "image": "docker.n8n.io/n8nio/n8n:latest",\n                        "imagePullPolicy": "Always",\n                        "name": "n8n",\n                        "ports": [\n                           {\n                              "containerPort": 5678\n                           }\n                        ]\n                     }\n                  ],\n                  "volumes": [\n                     {\n                        "configMap": {\n                           "name": "nginx"\n                        },\n                        "name": "nginx"\n                     }\n                  ]\n               }\n            }\n         }\n      },\n      {\n         "apiVersion": "v1",\n         "data": {\n            "password": "cGFzc3dvcmQ=",\n            "user": "YWRtaW4="\n         },\n         "kind": "Secret",\n         "metadata": {\n            "name": "n8n-basic-auth"\n         },\n         "type": "Opaque"\n      },\n      {\n         "apiVersion": "v1",\n         "kind": "Service",\n         "metadata": {\n            "name": "n8n"\n         },\n         "spec": {\n            "ports": [\n               {\n                  "name": "http",\n                  "port": 80,\n                  "targetPort": 8080\n               }\n            ],\n            "selector": {\n               "name": "n8n"\n            }\n         }\n      },\n      {\n         "apiVersion": "v1",\n         "data": {\n            "default.conf": "server {\\n  listen 8080 default_server;\\n  listen [::]:8080 default_server ipv6only=on;\\n\\nlocation / {\\n    proxy_pass http://localhost:5678;\\n    proxy_http_version 1.1;\\n    proxy_set_header Connection \'\';\\n    chunked_transfer_encoding off;\\n    proxy_buffering off;\\n    proxy_cache off;\\n    proxy_set_header Upgrade $http_upgrade;\\n    proxy_set_header Connection \u201cupgrade\u201d;\\n    proxy_set_header Host $host;\\n  }\\n}\\n"\n         },\n         "kind": "ConfigMap",\n         "metadata": {\n            "name": "nginx"\n         }\n      },\n      {\n         "apiVersion": "networking.k8s.io/v1",\n         "kind": "Ingress",\n         "metadata": {\n            "name": "n8n"\n         },\n         "spec": {\n            "rules": [\n               {\n                  "host": "n8n.tpv.k8s",\n                  "http": {\n                     "paths": [\n                        {\n                           "backend": {\n                              "service": {\n                                 "name": "n8n",\n                                 "port": {\n                                    "number": 80\n                                 }\n                              }\n                           },\n                           "path": "/",\n                           "pathType": "Prefix"\n                        }\n                     ]\n                  }\n               }\n            ]\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"link-the-manifest-with-argo",children:"Link the manifest with argo"}),"\n",(0,s.jsx)(o.A,{children:(0,s.jsx)(i.A,{value:"yaml",label:"Argo",default:!0,children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: argocd-mockup\n  namespace: n8n\nspec:\n  project: n8n\n  source:\n    repoURL: "https://github.com/myrepo/app.git"\n    targetRevision: main\n    path: dev\n    directory:\n      recurse: true\n      jsonnet:\n        libs:\n          - lib\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: default\n  syncPolicy:\n    automated:\n      prune: false\n      selfHeal: true\n'})})})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},9329:(n,e,t)=>{t.d(e,{A:()=>o});t(6540);var a=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function o(n){let{children:e,hidden:t,className:o}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:e})}},5537:(n,e,t)=>{t.d(e,{A:()=>_});var a=t(6540),s=t(4164),r=t(5627),o=t(6347),i=t(372),l=t(604),u=t(1861),c=t(8749);function p(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return p(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:s}}=n;return{value:e,label:t,attributes:a,default:s}}))}(t);return function(n){const e=(0,u.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function d(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:t}=n;const s=(0,o.W6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(s.location.search);e.set(r,n),s.replace({...s.location,search:e.toString()})}),[r,s])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:s}=n,r=m(n),[o,l]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[u,p]=h({queryString:t,groupId:s}),[f,g]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,r]=(0,c.Dv)(t);return[s,(0,a.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:s}),v=(()=>{const n=u??f;return d({value:n,tabValues:r})?n:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((n=>{if(!d({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);l(n),p(n),g(n)}),[p,g,r]),tabValues:r}}var g=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function y(n){let{className:e,block:t,selectedValue:a,selectValue:o,tabValues:i}=n;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=n=>{const e=n.currentTarget,t=l.indexOf(e),s=i[t].value;s!==a&&(u(e),o(s))},p=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const t=l.indexOf(n.currentTarget)+1;e=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(n.currentTarget)-1;e=l[t]??l[l.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e),children:i.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>{l.push(n)},onKeyDown:p,onClick:c,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function k(n){let{lazy:e,children:t,selectedValue:r}=n;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=o.find((n=>n.props.value===r));return n?(0,a.cloneElement)(n,{className:(0,s.A)("margin-top--md",n.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function x(n){const e=f(n);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(y,{...e,...n}),(0,b.jsx)(k,{...e,...n})]})}function _(n){const e=(0,g.A)();return(0,b.jsx)(x,{...n,children:p(n.children)},String(e))}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var a=t(6540);const s={},r=a.createContext(s);function o(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);