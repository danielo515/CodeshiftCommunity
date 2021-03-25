(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(94)),c={id:"your-first-codemod",title:"Your first codemod",slug:"/your-first-codemod"},d={unversionedId:"guides/your-first-codemod",id:"guides/your-first-codemod",isDocsHomePage:!1,title:"Your first codemod",description:"Every codemod follows fundamentally the same series of operations: find, modify/insert/remove.",source:"@site/docs/guides/your-first-codemod.mdx",slug:"/your-first-codemod",permalink:"/docs/your-first-codemod",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/guides/your-first-codemod.mdx",version:"current",sidebar:"docs",previous:{title:"Ecosystem",permalink:"/docs/ecosystem"},next:{title:"When not to codemod",permalink:"/docs/when-not-to-codemod"}},a=[{value:"Find",id:"find",children:[]},{value:"Modify",id:"modify",children:[]},{value:"Insert",id:"insert",children:[]},{value:"Remove",id:"remove",children:[]}],s={toc:a};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Every codemod follows fundamentally the same series of operations: find, modify/insert/remove.\nOnce you learn how to accomplish these operations, you can do anything within a codemod."),Object(i.b)("h2",{id:"find"},"Find"),Object(i.b)("h2",{id:"modify"},"Modify"),Object(i.b)("h2",{id:"insert"},"Insert"),Object(i.b)("h2",{id:"remove"},"Remove"))}u.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},f=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,p=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return r?o.a.createElement(p,d(d({ref:t},s),{},{components:r})):o.a.createElement(p,d({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d.mdxType="string"==typeof e?e:n,c[1]=d;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);