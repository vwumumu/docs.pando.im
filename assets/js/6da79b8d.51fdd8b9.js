"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9348],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return p},I:function(){return s}});var r=n(7294),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var c=r.isValidElement(a)?a:String(a);return n.push(c),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function c(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(t,n)}var l=n(7529);function u(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return a(null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,i=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(t=u({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(c,{values:i},a)}},2008:function(e,t,n){n.d(t,{M:function(){return u}});var r=n(7294),o="container_2Pz7",i="title_24BA",a="subtitle_2vvR",c="msg_3ZE1",l=n(4973);function u(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:c},t)),r.createElement("div",{className:o},r.createElement("div",{className:i},r.createElement(l.Z,null,"This Article needs additional information.")),r.createElement("div",{className:a},r.createElement(l.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(l.Z,null,"polishing the content"))),n)}},5046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(2008),c=["components"],l={title:"Liquidity Provider Token (LP Token)",sidebar_position:1,date:new Date("2021-08-15T22:33:07.000Z")},u=void 0,s={unversionedId:"lake/key-concepts/lp-token",id:"lake/key-concepts/lp-token",isDocsHomePage:!1,title:"Liquidity Provider Token (LP Token)",description:"Improvement,",source:"@site/docs/lake/key-concepts/lp-token.md",sourceDirName:"lake/key-concepts",slug:"/lake/key-concepts/lp-token",permalink:"/docs/lake/key-concepts/lp-token",version:"current",sidebarPosition:1,frontMatter:{title:"Liquidity Provider Token (LP Token)",sidebar_position:1,date:"2021-08-15T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Listing assets and adding pools",permalink:"/docs/lake/tutorials/listing"},next:{title:"Automated Market Maker (AMM) Mechanism",permalink:"/docs/lake/key-concepts/amm-mechanism"}},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.M,{mdxType:"Improvement"}),(0,i.kt)("p",null,"To be added"))}m.isMDXComponent=!0}}]);