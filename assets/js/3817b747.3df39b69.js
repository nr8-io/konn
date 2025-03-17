"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2640],{4737:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"api/app/api-app-init","title":"init","description":"Overview","source":"@site/docs/api/app/init.md","sourceDirName":"api/app","slug":"/api/app/api-app-init","permalink":"/docusaurus/api/app/api-app-init","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/app/init.md","tags":[],"version":"current","frontMatter":{"id":"api-app-init","title":"init"},"sidebar":"apiSidebar","previous":{"title":"kget","permalink":"/docusaurus/api/app/api-app-kget"},"next":{"title":"features","permalink":"/docusaurus/api/app/api-app-features"}}');var r=a(4848),l=a(8453),i=a(5537),s=a(9329);const o={id:"api-app-init",title:"init"},p=void 0,c={},u=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Helm like usage",id:"helm-like-usage",level:3},{value:"Optional props",id:"optional-props",level:3},{value:"Adding Profiles",id:"adding-profiles",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(e.p,{children:"Initializes an application manifest using a specified profile, applying its default properties and merging them with the provided ones."}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"props"})})," - (object) Additional properties to apply."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"profile"})})," - (string) The profile to use for initialization."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Returns a rendered manifest object with the profile\u2019s properties applied."}),"\n",(0,r.jsx)(e.li,{children:"Returns a rendered manifest object with the profile\u2019s properties applied."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsx)(e.h3,{id:"helm-like-usage",children:"Helm like usage"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nlocal app = k.app([\n  k.fromYaml([\n    importstr './deployment.yaml',\n    importstr './svc.yaml',\n  ], {\n    app: 'nginx123',\n    svc: 'my-svc12345',\n  }),\n], {\n  enabled: false,\n});\napp.init()\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"- apiVersion: apps/v1\n  kind: Deployment\n  metadata:\n    name: nginx123\n  spec:\n    selector:\n      matchLabels:\n        app: nginx123\n    template:\n      metadata:\n        labels:\n          app: nginx123\n      spec:\n        containers:\n          - image: nginx\n- apiVersion: v1\n  kind: Service\n  metadata:\n    name: my-svc12345\n  spec:\n    ports:\n      - port: 80\n        protocol: TCP\n        targetPort: 9376\n    selector:\n      app.kubernetes.io/name: MyApp\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'[\n   {\n      "apiVersion": "apps/v1",\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx123"\n      },\n      "spec": {\n         "selector": {\n            "matchLabels": {\n               "app": "nginx123"\n            }\n         },\n         "template": {\n            "metadata": {\n               "labels": {\n                  "app": "nginx123"\n               }\n            },\n            "spec": {\n               "containers": [\n                  {\n                     "image": "nginx"\n                  }\n               ]\n            }\n         }\n      }\n   },\n   {\n      "apiVersion": "v1",\n      "kind": "Service",\n      "metadata": {\n         "name": "my-svc12345"\n      },\n      "spec": {\n         "ports": [\n            {\n               "port": 80,\n               "protocol": "TCP",\n               "targetPort": 9376\n            }\n         ],\n         "selector": {\n            "app.kubernetes.io/name": "MyApp"\n         }\n      }\n   }\n]\n'})})}),(0,r.jsx)(s.A,{value:"deployment-template",label:"Deployment Template",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: "%(app)s"\nspec:\n  selector:\n    matchLabels:\n      app: "%(app)s"\n  template:\n    metadata:\n      labels:\n        app: "%(app)s"\n    spec:\n      containers:\n      - image: nginx\n'})})}),(0,r.jsx)(s.A,{value:"service-template",label:"Service Template",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: "%(svc)s"\nspec:\n  selector:\n    app.kubernetes.io/name: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n'})})})]}),"\n",(0,r.jsx)(e.h3,{id:"optional-props",children:"Optional props"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nlocal app = k.app([\n  k.fromYaml([\n    importstr './deployment.yaml',\n    importstr './svc.yaml',\n  ], {\n    app: 'nginx123',\n    svc: 'my-svc12345',\n  }),\n  function(ctx, props) if props.enabled then {\n    apiVersion: 'v1',\n    kind: 'ConfigMap',\n    metadata: {\n      name: 'example-config',\n    },\n    data: {\n      key: 'value',\n    },\n  },\n], {\n  enabled: true,  // setting this to false will exclude the ConfigMap\n});\n\napp.init()\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"- apiVersion: apps/v1\n  kind: Deployment\n  metadata:\n    name: nginx123\n  spec:\n    selector:\n      matchLabels:\n        app: nginx123\n    template:\n      metadata:\n        labels:\n          app: nginx123\n      spec:\n        containers:\n          - image: nginx\n- apiVersion: v1\n  kind: Service\n  metadata:\n    name: my-svc12345\n  spec:\n    ports:\n      - port: 80\n        protocol: TCP\n        targetPort: 9376\n    selector:\n      app.kubernetes.io/name: MyApp\n- apiVersion: v1\n  data:\n    key: value\n  kind: ConfigMap\n  metadata:\n    name: example-config\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'[\n   {\n      "apiVersion": "apps/v1",\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx123"\n      },\n      "spec": {\n         "selector": {\n            "matchLabels": {\n               "app": "nginx123"\n            }\n         },\n         "template": {\n            "metadata": {\n               "labels": {\n                  "app": "nginx123"\n               }\n            },\n            "spec": {\n               "containers": [\n                  {\n                     "image": "nginx"\n                  }\n               ]\n            }\n         }\n      }\n   },\n   {\n      "apiVersion": "v1",\n      "kind": "Service",\n      "metadata": {\n         "name": "my-svc12345"\n      },\n      "spec": {\n         "ports": [\n            {\n               "port": 80,\n               "protocol": "TCP",\n               "targetPort": 9376\n            }\n         ],\n         "selector": {\n            "app.kubernetes.io/name": "MyApp"\n         }\n      }\n   },\n   {\n      "apiVersion": "v1",\n      "data": {\n         "key": "value"\n      },\n      "kind": "ConfigMap",\n      "metadata": {\n         "name": "example-config"\n      }\n   }\n]\n'})})})]}),"\n",(0,r.jsx)(e.h3,{id:"adding-profiles",children:"Adding Profiles"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\nlocal k = import 'konn/main.libsonnet';\n\n\n// Create an extension for the deployment\nlocal ext = extension.new(\n  function(ctx, target, props) target {\n    metadata+: {\n      extended: true,\n      profile: ctx.profile(),\n    },\n  },\n  // only take affect for Deployments, if you remove selector it will take affect on everything\n  selector=function(ctx, target, props) target.is('Deployment'),\n);\n\n// Define the configuration with additional properties\nlocal appTest = app.new(\n  props={\n    app: 'nginx',\n    svc: 'my-svc',\n  },\n  profiles={\n    dev: {\n      name: 'dev',\n    },\n    prd: {\n      name: 'prd',\n    },\n  },\n  features=[\n    feature.new([\n      k.fromYaml(\n        [\n          importstr './deployment.yaml',\n          importstr './svc.yaml',\n        ],\n      ),\n    ], extensions=[ext]),  // using the profile trough ext we defined at the start\n  ],\n);\n\n// Init the app with a profile of your choosing\n\nappTest.init(profile='prd')\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"- apiVersion: apps/v1\n  kind: Deployment\n  metadata:\n    extended: true\n    name: nginx\n    profile: prd\n  spec:\n    selector:\n      matchLabels:\n        app: nginx\n    template:\n      metadata:\n        labels:\n          app: nginx\n      spec:\n        containers:\n          - image: nginx\n- apiVersion: v1\n  kind: Service\n  metadata:\n    name: my-svc\n  spec:\n    ports:\n      - port: 80\n        protocol: TCP\n        targetPort: 9376\n    selector:\n      app.kubernetes.io/name: MyApp\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'[\n   {\n      "apiVersion": "apps/v1",\n      "kind": "Deployment",\n      "metadata": {\n         "extended": true,\n         "name": "nginx",\n         "profile": "prd"\n      },\n      "spec": {\n         "selector": {\n            "matchLabels": {\n               "app": "nginx"\n            }\n         },\n         "template": {\n            "metadata": {\n               "labels": {\n                  "app": "nginx"\n               }\n            },\n            "spec": {\n               "containers": [\n                  {\n                     "image": "nginx"\n                  }\n               ]\n            }\n         }\n      }\n   },\n   {\n      "apiVersion": "v1",\n      "kind": "Service",\n      "metadata": {\n         "name": "my-svc"\n      },\n      "spec": {\n         "ports": [\n            {\n               "port": 80,\n               "protocol": "TCP",\n               "targetPort": 9376\n            }\n         ],\n         "selector": {\n            "app.kubernetes.io/name": "MyApp"\n         }\n      }\n   }\n]\n'})})})]})]})}function m(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},9329:(n,e,a)=>{a.d(e,{A:()=>i});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var l=a(4848);function i(n){let{children:e,hidden:a,className:i}=n;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:e})}},5537:(n,e,a)=>{a.d(e,{A:()=>k});var t=a(6540),r=a(4164),l=a(5627),i=a(6347),s=a(372),o=a(604),p=a(1861),c=a(8749);function u(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(n){const{values:e,children:a}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:a,attributes:t,default:r}}=n;return{value:e,label:a,attributes:t,default:r}}))}(a);return function(n){const e=(0,p.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,a])}function m(n){let{value:e,tabValues:a}=n;return a.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:a}=n;const r=(0,i.W6)(),l=function(n){let{queryString:e=!1,groupId:a}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o.aZ)(l),(0,t.useCallback)((n=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,n),r.replace({...r.location,search:e.toString()})}),[l,r])]}function v(n){const{defaultValue:e,queryString:a=!1,groupId:r}=n,l=d(n),[i,o]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=a.find((n=>n.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:l}))),[p,u]=h({queryString:a,groupId:r}),[v,g]=function(n){let{groupId:e}=n;const a=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,l]=(0,c.Dv)(a);return[r,(0,t.useCallback)((n=>{a&&l.set(n)}),[a,l])]}({groupId:r}),f=(()=>{const n=p??v;return m({value:n,tabValues:l})?n:null})();(0,s.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((n=>{if(!m({value:n,tabValues:l}))throw new Error(`Can't select invalid tab value=${n}`);o(n),u(n),g(n)}),[u,g,l]),tabValues:l}}var g=a(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(4848);function b(n){let{className:e,block:a,selectedValue:t,selectValue:i,tabValues:s}=n;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),c=n=>{const e=n.currentTarget,a=o.indexOf(e),r=s[a].value;r!==t&&(p(e),i(r))},u=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const a=o.indexOf(n.currentTarget)+1;e=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(n.currentTarget)-1;e=o[a]??o[o.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},e),children:s.map((n=>{let{value:e,label:a,attributes:l}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>{o.push(n)},onKeyDown:u,onClick:c,...l,className:(0,r.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===e}),children:a??e},e)}))})}function j(n){let{lazy:e,children:a,selectedValue:l}=n;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===l));return n?(0,t.cloneElement)(n,{className:(0,r.A)("margin-top--md",n.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==l})))})}function y(n){const e=v(n);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function k(n){const e=(0,g.A)();return(0,x.jsx)(y,{...n,children:u(n.children)},String(e))}},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>s});var t=a(6540);const r={},l=t.createContext(r);function i(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);