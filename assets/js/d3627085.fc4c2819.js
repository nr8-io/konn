"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8272],{8523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorial/features","title":"feature","description":"This module defines features, which are structured collections of configurations that can be filtered, extended, mapped, and transformed dynamically.","source":"@site/docs/tutorial/feature.md","sourceDirName":"tutorial","slug":"/tutorial/features","permalink":"/konn/tutorial/features","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/feature.md","tags":[],"version":"current","frontMatter":{"id":"features","title":"feature"},"sidebar":"tutorialSidebar","previous":{"title":"Config","permalink":"/konn/tutorial/config"},"next":{"title":"Manifests","permalink":"/konn/tutorial/manifests"}}');var s=t(4848),r=t(8453);const o={id:"features",title:"feature"},a=void 0,c={},d=[{value:"Examples",id:"examples",level:3}];function l(e){const n={blockquote:"blockquote",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This module defines features, which are structured collections of configurations that can be filtered, extended, mapped, and transformed dynamically."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Encapsulates multiple configurations into a single unit."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Supports filtering & mapping of configurations."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Integrates with extensions to modify configurations dynamically."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Provides utility functions for searching and retrieving specific configs."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u2022 new(configs, props, extensions, filter, map)\nCreates a new feaure using the the content in the brackets above"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 render\nResolves and applies extensions to the configurations.\nFilters and maps configurations based on provided functions.\nReturns the final processed configs."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 resolve\nProcesses individual configurations from different sources\nFilters, maps, and transforms configurations dynamically."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 extensions\nReturns the resolved list of extensions for the feature."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 extend\nExtends an existing feature with additional configs, props, and extensions.\nCombines filters and mapping functions."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 overrides\nReturns the overridden properties."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 override\nOverrides properties dynamically at render time.\nAccepts:\n\u2022 An object \u2192 Directly replaces properties.\n\u2022 A function \u2192 Computes overrides based on existing props."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 configure\nAlias of override, used for configuring the feature."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 filter\nReturns an extended feature with a custom filter applied."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 map\nReturns an extended feature with a custom mapping function."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 find\nSearches for a config matching a condition and returns the first match."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 get\nRetrieves a specific config by path and matcher."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 kget\nRetrieves a specific Kubernetes config by kind and metadata name."}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);