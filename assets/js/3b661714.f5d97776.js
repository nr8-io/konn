"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8575],{5405:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/manifest/api-manifest-overrides","title":"overrides","description":"Overview","source":"@site/docs/api/manifest/overrides.md","sourceDirName":"api/manifest","slug":"/api/manifest/api-manifest-overrides","permalink":"/docusaurus/api/manifest/api-manifest-overrides","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/manifest/overrides.md","tags":[],"version":"current","frontMatter":{"id":"api-manifest-overrides","title":"overrides"},"sidebar":"apiSidebar","previous":{"title":"override","permalink":"/docusaurus/api/manifest/api-manifest-override"},"next":{"title":"configure","permalink":"/docusaurus/api/manifest/api-manifest-configure"}}');var t=a(4848),s=a(8453),l=a(5537),o=a(9329);const i={id:"api-manifest-overrides",title:"overrides"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Cross-linking to Other API Docs",id:"cross-linking-to-other-api-docs",level:3},{value:"helpers documentation",id:"helpers-documentation",level:4}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"overrides"})," function returns the manifest\u2019s properties after applying any overrides, which can be functions or objects that modify the original properties."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"props"})})," - (object): The properties to override."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns the properties after applying the overrides."}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"local lib = import '../../vendor/konn/helpers.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testManifest = manifest.new(function(ctx, props) [{\n  kind: 'Deployment',\n  metadata: {\n    name: props.name,\n    labels: {\n      label: props.label,\n      app: 'nginx',\n    },\n  },\n}, {\n  kind: 'Deployment',\n  metadata: {\n    name: props.name,\n    labels: {\n      label: props.label,\n      app: 'flask',\n    },\n  },\n}], {\n  name: 'placeholder',\n  label: 'placeholder',\n}).override(function(props) {\n  name: 'override-name',\n});\n\n{\n  Unchanged: testManifest,\n  custom_props: testManifest.overrides({ label: 'custom-label', name: 'this wont change override' }),\n}\n"})})}),(0,t.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"Unchanged:\n  body:\n    - kind: Deployment\n      metadata:\n        labels:\n          app: nginx\n          label: placeholder\n        name: override-name\n    - kind: Deployment\n      metadata:\n        labels:\n          app: flask\n          label: placeholder\n        name: override-name\ncustom_props:\n  label: custom-label\n  name: override-name\n"})})}),(0,t.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "Unchanged": {\n      "body": [\n         {\n            "kind": "Deployment",\n            "metadata": {\n               "labels": {\n                  "app": "nginx",\n                  "label": "placeholder"\n               },\n               "name": "override-name"\n            }\n         },\n         {\n            "kind": "Deployment",\n            "metadata": {\n               "labels": {\n                  "app": "flask",\n                  "label": "placeholder"\n               },\n               "name": "override-name"\n            }\n         }\n      ]\n   },\n   "custom_props": {\n      "label": "custom-label",\n      "name": "override-name"\n   }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"cross-linking-to-other-api-docs",children:"Cross-linking to Other API Docs"}),"\n",(0,t.jsx)(n.h4,{id:"helpers-documentation",children:(0,t.jsx)(n.a,{href:"/api/helpers/api-helpers-render",children:"helpers documentation"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var r=a(4164);const t={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>k});var r=a(6540),t=a(4164),s=a(5627),l=a(6347),o=a(372),i=a(604),u=a(1861),c=a(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:a,groupId:t}),[f,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),b=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function x(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,a=i.indexOf(n),t=o[a].value;t!==r&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function k(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var r=a(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);