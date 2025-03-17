"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5875],{2989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"api/helpers/api-helpers-get-path","title":"get-path","description":"Overview","source":"@site/docs/api/helpers/get-path.md","sourceDirName":"api/helpers","slug":"/api/helpers/api-helpers-get-path","permalink":"/konn/api/helpers/api-helpers-get-path","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/helpers/get-path.md","tags":[],"version":"current","frontMatter":{"id":"api-helpers-get-path","title":"get-path"},"sidebar":"apiSidebar","previous":{"title":"apply-extension","permalink":"/konn/api/helpers/api-helpers-apply-extension"},"next":{"title":"is-config","permalink":"/konn/api/helpers/api-helpers-is-config"}}');var r=n(4848),l=n(8453),s=n(5537),o=n(9329);const i={id:"api-helpers-get-path",title:"get-path"},u=void 0,c={},p=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Gets a value from an object by a specified path using dot notation."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"obj"})})," - (object) The object to retrieve the value from."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"path"})})," - (string) The path to the value, specified using dot notation."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"defaultValue"})})," - (any, optional) The default value to return if the path does not exist. Defaults to ",(0,r.jsx)(t.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(t.p,{children:["Returns the value at the specified path, or the ",(0,r.jsx)(t.code,{children:"defaultValue"})," if the path does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"local helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal obj = {\n  metadata: {\n    name: 'example',\n    labels: {\n      app: 'my-app',\n    },\n  },\n};\n\n{\n  name: helpers.getPath(obj, 'metadata.name', 'default'),\n  app: helpers.getPath(obj, 'metadata.labels.app', 'default-app'),\n  nonExist: helpers.getPath(obj, 'metadata.nonExist', 'not-found'),\n}\n"})})}),(0,r.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"name: example\napp: my-app\nnonExist: not-found\n"})})}),(0,r.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "name": "example",\n  "app": "my-app",\n  "nonExist": "not-found"\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),l=n(5627),s=n(6347),o=n(372),i=n(604),u=n(1861),c=n(8749);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,p]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=u??f;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,l]),tabValues:l}}var b=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(u(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{i.push(e)},onKeyDown:p,onClick:c,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:p(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);