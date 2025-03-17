"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2465],{429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/helpers/api-helpers-is-resolvable","title":"is-resolvable","description":"Overview","source":"@site/docs/api/helpers/is-resolvable.md","sourceDirName":"api/helpers","slug":"/api/helpers/api-helpers-is-resolvable","permalink":"/konn/api/helpers/api-helpers-is-resolvable","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/helpers/is-resolvable.md","tags":[],"version":"current","frontMatter":{"id":"api-helpers-is-resolvable","title":"is-resolvable"},"sidebar":"apiSidebar","previous":{"title":"is-renderable","permalink":"/konn/api/helpers/api-helpers-is-renderable"},"next":{"title":"map-configs","permalink":"/konn/api/helpers/api-helpers-map-configs"}}');var a=t(4848),l=t(8453),s=t(5537),o=t(9329);const i={id:"api-helpers-is-resolvable",title:"is-resolvable"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(r.p,{children:"Tests if a given target has a resolve method."}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"target"})})," - (any) The target to test."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(r.p,{children:["Returns ",(0,a.jsx)(r.code,{children:"true"})," if the target has a resolve method, otherwise ",(0,a.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"local helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal resolvableObject = {\n  resolve: function(ctx, props) [\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'resolvable-object',\n      },\n    },\n  ],\n};\n\nlocal nonResolvableObject = {\n  kind: 'Service',\n  metadata: {\n    name: 'non-resolvable-object',\n  },\n};\n\n{\n  isResolvableObject: helpers.isResolvable(resolvableObject),\n  isNonResolvableObject: helpers.isResolvable(nonResolvableObject),\n}\n"})})}),(0,a.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"isResolvableObject: true\nisNonResolvableObject: false\n"})})}),(0,a.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'{\n  "isResolvableObject": true,\n  "isNonResolvableObject": false\n}\n'})})})]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,r,t)=>{t.d(r,{A:()=>s});t(6540);var n=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},5537:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(6540),a=t(4164),l=t(5627),s=t(6347),o=t(372),i=t(604),u=t(1861),c=t(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,l=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[u,d]=b({queryString:t,groupId:a}),[v,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=u??v;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),a=o[t].value;a!==n&&(u(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=v(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...r,...e}),(0,g.jsx)(x,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>o});var n=t(6540);const a={},l=n.createContext(a);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);