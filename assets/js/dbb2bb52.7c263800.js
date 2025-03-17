"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2512],{91:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/manifest/api-manifest-from","title":"from","description":"Overview","source":"@site/docs/api/manifest/from.md","sourceDirName":"api/manifest","slug":"/api/manifest/api-manifest-from","permalink":"/konn/api/manifest/api-manifest-from","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/manifest/from.md","tags":[],"version":"current","frontMatter":{"id":"api-manifest-from","title":"from"},"sidebar":"apiSidebar","previous":{"title":"find","permalink":"/konn/api/manifest/api-manifest-find"},"next":{"title":"get","permalink":"/konn/api/manifest/api-manifest-get"}}');var r=a(4848),l=a(8453),i=a(5537),s=a(9329);const o={id:"api-manifest-from",title:"from"},c=void 0,u={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Example with source",id:"example-with-source",level:3},{value:"Example with props",id:"example-with-props",level:3},{value:"Example with filter",id:"example-with-filter",level:3},{value:"Example with map",id:"example-with-map",level:3},{value:"Cross-linking to Other API Docs",id:"cross-linking-to-other-api-docs",level:3},{value:"config documentation",id:"config-documentation",level:4}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"from"})," function creates a new manifest from an object, array, or an existing config/renderable object. If the source is already a manifest, it returns the original source."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"source"})})," - (object | array | string | function) The source to create the manifest from. See ",(0,r.jsx)(n.a,{href:"#example-with-source",children:"source"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"props"})})," - (object) The properties to apply to the manifest. See ",(0,r.jsx)(n.a,{href:"#example-with-props",children:"props"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"filter"})})," - (function) The filter function applied to the generated configurations. See ",(0,r.jsx)(n.a,{href:"#example-with-filter",children:"filter"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"maps"})})," - (function) The map function applied to the generated configurations. See ",(0,r.jsx)(n.a,{href:"#example-with-map",children:"map"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a new manifest object."}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsx)(n.h3,{id:"example-with-source",children:"Example with source"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal svc = {\n  type: 'Service',\n  name: 'example',\n};\n\nlocal sourceManifest = manifest.from(svc);\n\nsourceManifest\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n  - name: example\n    type: Service\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "name": "example",\n         "type": "Service"\n      }\n   ]\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"example-with-props",children:"Example with props"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local manifest = import '../../vendor/konn/manifest.libsonnet';\n\n\nlocal propsManifest = manifest.from(\n  function(ctx, props) [\n    {\n      kind: 'Service',\n      metadata: {\n        name: props.name,\n      },\n    },\n  ],\n  props={\n    name: 'modified-example',\n  });\n\npropsManifest\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n  - kind: Service\n    metadata:\n      name: modified-example\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "kind": "Service",\n         "metadata": {\n            "name": "modified-example"\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"example-with-filter",children:"Example with filter"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal svc = [\n  {\n    kind: 'Service',\n    metadata: {\n      name: 'example1',\n    },\n  },\n  {\n    kind: 'Deployment',\n    metadata: {\n      name: 'example2',\n    },\n  },\n];\n\nlocal filterManifest = manifest.from(\n  svc,\n  filter=function(ctx, config, props) config.is('Deployment')\n);\n\nfilterManifest\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n  - kind: Deployment\n    metadata:\n      name: example2\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "example2"\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"example-with-map",children:"Example with map"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal svc = [\n  {\n    type: 'Service',\n    name: 'example1',\n  },\n  {\n    type: 'Service',\n    name: 'example2',\n  },\n];\n\nlocal mapManifest = manifest.from(\n  svc,\n  map=function(ctx, config, props) config {\n    name: config.name + '-mapped',\n  });\n\nmapManifest\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n  - name: example1-mapped\n    type: Service\n  - name: example2-mapped\n    type: Service\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "name": "example1-mapped",\n         "type": "Service"\n      },\n      {\n         "name": "example2-mapped",\n         "type": "Service"\n      }\n   ]\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"cross-linking-to-other-api-docs",children:"Cross-linking to Other API Docs"}),"\n",(0,r.jsx)(n.h4,{id:"config-documentation",children:(0,r.jsx)(n.a,{href:"/api/config/api-config-render",children:"config documentation"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>i});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var l=a(4848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(6540),r=a(4164),l=a(5627),i=a(6347),s=a(372),o=a(604),c=a(1861),u=a(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=h({queryString:a,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(4848);function b(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=s[a].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:l}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(6540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);