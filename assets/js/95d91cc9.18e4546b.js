"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8089],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4973:function(e,t,r){r.d(t,{Z:function(){return d},I:function(){return s}});var n=r(7294),i=/{\w+}/g,o="{}";function a(e,t){var r=[],a=e.replace(i,(function(e){var i=e.substr(1,e.length-2),a=null==t?void 0:t[i];if(void 0!==a){var l=n.isValidElement(a)?a:String(a);return r.push(l),o}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,t,n){var i;return e.concat(t).concat(null!==(i=r[n])&&void 0!==i?i:"")}),""):a.split(o).reduce((function(e,t,i){return[].concat(e,[n.createElement(n.Fragment,{key:i},t,r[i])])}),[])}function l(e){var t=e.children,r=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(t,r)}var c=r(7529);function u(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function s(e,t){var r,n=e.message;return a(null!==(r=u({message:n,id:e.id}))&&void 0!==r?r:n,t)}function d(e){var t,r=e.children,i=e.id,o=e.values;if("string"!=typeof r)throw console.warn("Illegal <Translate> children",r),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(t=u({message:r,id:i}))&&void 0!==t?t:r;return n.createElement(l,{values:o},a)}},2008:function(e,t,r){r.d(t,{M:function(){return u}});var n=r(7294),i="container_2Pz7",o="title_24BA",a="subtitle_2vvR",l="msg_3ZE1",c=r(4973);function u(e){var t=e.msg,r="";return t&&(r=n.createElement("div",{className:l},t)),n.createElement("div",{className:i},n.createElement("div",{className:o},n.createElement(c.Z,null,"This Article needs additional information.")),n.createElement("div",{className:a},n.createElement(c.Z,null,"Please help improve it by "),n.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},n.createElement(c.Z,null,"polishing the content"))),r)}},5971:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(2008),l=["components"],c={title:"Where can I see liquidity reward\uff1f",sidebar_position:5,date:new Date("2021-09-13T00:00:02.000Z")},u=void 0,s={unversionedId:"lake/other-faqs/where-can-I-see-liquidity-reward",id:"lake/other-faqs/where-can-I-see-liquidity-reward",isDocsHomePage:!1,title:"Where can I see liquidity reward\uff1f",description:"Improvement,",source:"@site/docs/lake/other-faqs/where-can-I-see-liquidity-reward.md",sourceDirName:"lake/other-faqs",slug:"/lake/other-faqs/where-can-I-see-liquidity-reward",permalink:"/docs/lake/other-faqs/where-can-I-see-liquidity-reward",version:"current",sidebarPosition:5,frontMatter:{title:"Where can I see liquidity reward\uff1f",sidebar_position:5,date:"2021-09-13T00:00:02.000Z"},sidebar:"tutorialSidebar",previous:{title:"Why did I fail in providing liquidity?",permalink:"/docs/lake/other-faqs/why-providing-liquidity-fail"},next:{title:"Which tokens are supported?",permalink:"/docs/lake/other-faqs/supported-tokens"}},d=[],p={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"Transaction fees will enter the liquidity pool, and you can get a portion of it when you withdraw liquidity."))}f.isMDXComponent=!0}}]);