"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[928],{4368:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/helpers/api-helpers-is-renderable","title":"is-renderable","description":"Overview","source":"@site/docs/api/helpers/is-renderable.md","sourceDirName":"api/helpers","slug":"/api/helpers/api-helpers-is-renderable","permalink":"/docusaurus/api/helpers/api-helpers-is-renderable","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/helpers/is-renderable.md","tags":[],"version":"current","frontMatter":{"id":"api-helpers-is-renderable","title":"is-renderable"},"sidebar":"apiSidebar","previous":{"title":"is-manifest","permalink":"/docusaurus/api/helpers/api-helpers-is-manifest"},"next":{"title":"is-resolvable","permalink":"/docusaurus/api/helpers/api-helpers-is-resolvable"}}');var a=n(4848),l=n(8453),s=n(5537),i=n(9329);const u={id:"api-helpers-is-renderable",title:"is-renderable"},o=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(r.p,{children:"Tests if a given target is a renderable object."}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"target"})})," - (any) The target to test."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(r.p,{children:["Returns ",(0,a.jsx)(r.code,{children:"true"})," if the target is a renderable object, otherwise ",(0,a.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"local helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal renderableObject = {\n  render: function(ctx, props) {\n    kind: 'Deployment',\n    metadata: {\n      name: 'renderable-object',\n    },\n  },\n};\n\nlocal nonRenderableObject = {\n  kind: 'Service',\n  metadata: {\n    name: 'non-renderable-object',\n  },\n};\n\n{\n  isRenderableObject: helpers.isRenderable(renderableObject),\n  isNonRenderableObject: helpers.isRenderable(nonRenderableObject),\n}\n"})})}),(0,a.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"isRenderableObject: true\nisNonRenderableObject: false\n"})})}),(0,a.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'{\n  "isRenderableObject": true,\n  "isNonRenderableObject": false\n}\n'})})})]})]})}function b(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,r,n)=>{n.d(r,{A:()=>s});n(6540);var t=n(4164);const a={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},5537:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(6540),a=n(4164),l=n(5627),s=n(6347),i=n(372),u=n(604),o=n(1861),c=n(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function b(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,u.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=p(e),[s,u]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[o,d]=h({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=o??m;return b({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function g(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const r=e.currentTarget,n=u.indexOf(r),a=i[n].value;a!==t&&(o(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function x(e){let{lazy:r,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...r,...e}),(0,j.jsx)(x,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(r))}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(6540);const a={},l=t.createContext(a);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);