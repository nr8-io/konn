"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7415],{5998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/extensions/api-extensions-new","title":"new","description":"Overview","source":"@site/docs/api/extensions/new.md","sourceDirName":"api/extensions","slug":"/api/extensions/api-extensions-new","permalink":"/docusaurus/api/extensions/api-extensions-new","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/extensions/new.md","tags":[],"version":"current","frontMatter":{"id":"api-extensions-new","title":"new"},"sidebar":"apiSidebar","previous":{"title":"profile","permalink":"/docusaurus/api/context/api-context-profile"},"next":{"title":"configure","permalink":"/docusaurus/api/extensions/api-extensions-configure"}}');var s=t(4848),r=t(8453),i=t(5537),l=t(9329);const o={id:"api-extensions-new",title:"new"},c=void 0,u={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Example with render",id:"example-with-render",level:3},{value:"Example with selector",id:"example-with-selector",level:3},{value:"Example with extends",id:"example-with-extends",level:3},{value:"Cross-linking to Other API Docs",id:"cross-linking-to-other-api-docs",level:3},{value:"manifest documentation",id:"manifest-documentation",level:4}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"new"})," function is used to create a new extension that can modify or generate Kubernetes resources. This function allows users to define how an extension transforms or adds configurations to a given manifest."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"render"})})," - (function) A function that defines how the extension transforms the selected Kubernetes resources. See ",(0,s.jsx)(n.a,{href:"#example-with-render",children:"render"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"selector"})})," - (function, optional) A function that filters which resources should be affected by the extension. See ",(0,s.jsx)(n.a,{href:"#example-with-selector",children:"selector"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"extends"})})," - (object, optional) An existing manifest or extension that this new extension should build upon. See ",(0,s.jsx)(n.a,{href:"#example-with-extends",children:"extends"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns an object containing the transformed or newly generated Kubernetes resources based on the provided render function."}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsx)(n.h3,{id:"example-with-render",children:"Example with render"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"local ext = import '../../vendor/konn/extension.libsonnet';\n\nlocal testExt = ext.new(\n  function(ctx, config, props)\n    [\n      {\n        kind: 'Deployment',\n        metadata: {\n          name: 'nginx',\n        },\n      },\n      {\n        kind: 'Deployment',\n        metadata: {\n          name: 'flask',\n        },\n      },\n    ]);\n\ntestExt\n"})})}),(0,s.jsx)(l.A,{value:"yaml",label:"YAML Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"body:\n  - kind: Deployment\n    metadata:\n      name: nginx\n  - kind: Deployment\n    metadata:\n      name: flask\n"})})}),(0,s.jsx)(l.A,{value:"json",label:"JSON Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "nginx"\n         }\n      },\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "flask"\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"example-with-selector",children:"Example with selector"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"local ext = import '../../vendor/konn/extension.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testManifest = manifest.new(function(ctx, props) [\n  {\n    kind: 'Deployment',\n    metadata: {\n      name: 'nginx',\n    },\n  },\n  {\n    kind: 'Service',\n    metadata: {\n      name: 'nginx-service',\n    },\n  },\n]);\n\nlocal serviceAnnotationExt = ext.new(\n  render=function(ctx, config, props) config {\n    metadata+: {\n      annotations+: {\n        'custom-annotation': 'added-via-extension',\n      },\n    },\n  },\n  selector=function(ctx, config, props) config.is('Service'),\n  extends=testManifest\n);\n\nserviceAnnotationExt\n"})})}),(0,s.jsx)(l.A,{value:"yaml",label:"YAML Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"body:\n  - kind: Deployment\n    metadata:\n      name: nginx\n  - kind: Service\n    metadata:\n      annotations:\n        custom-annotation: added-via-extension\n      name: nginx-service\n"})})}),(0,s.jsx)(l.A,{value:"json",label:"JSON Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "nginx"\n         }\n      },\n      {\n         "kind": "Service",\n         "metadata": {\n            "annotations": {\n               "custom-annotation": "added-via-extension"\n            },\n            "name": "nginx-service"\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"example-with-extends",children:"Example with extends"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"local ext = import '../../vendor/konn/extension.libsonnet';\n\nlocal baseExt = ext.new(\n  function(ctx, config, props)\n    [\n      {\n        kind: 'Deployment',\n        metadata: {\n          name: 'nginx',\n        },\n      },\n    ],\n);\n\nlocal testExt = ext.new(\n  render=function(ctx, config, props)\n    config {\n      metadata+: {\n        labels: {\n          extended: 'true',\n        },\n      },\n    },\n  extends=baseExt,\n);\n\ntestExt\n"})})}),(0,s.jsx)(l.A,{value:"yaml",label:"YAML Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'body:\n  body:\n    - kind: Deployment\n      metadata:\n        name: nginx\n  metadata:\n    labels:\n      extended: "true"\n'})})}),(0,s.jsx)(l.A,{value:"json",label:"JSON Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "body": {\n      "body": [\n         {\n            "kind": "Deployment",\n            "metadata": {\n               "name": "nginx"\n            }\n         }\n      ],\n      "metadata": {\n         "labels": {\n            "extended": "true"\n         }\n      }\n   }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"cross-linking-to-other-api-docs",children:"Cross-linking to Other API Docs"}),"\n",(0,s.jsx)(n.h4,{id:"manifest-documentation",children:(0,s.jsx)(n.a,{href:"/api/manifest/api-manifest-new",children:"manifest documentation"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),s=t(4164),r=t(5627),i=t(6347),l=t(372),o=t(604),c=t(1861),u=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=x({queryString:t,groupId:s}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=c??p;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);