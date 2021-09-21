"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3181],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4973:function(e,n,t){t.d(n,{Z:function(){return f},I:function(){return s}});var r=t(7294),o=/{\w+}/g,a="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var c=r.isValidElement(i)?i:String(i);return t.push(c),a}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}function c(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(n,t)}var l=t(7529);function u(e){var n,t=e.id,r=e.message;return null!==(n=l[null!=t?t:r])&&void 0!==n?n:r}function s(e,n){var t,r=e.message;return i(null!==(t=u({message:r,id:e.id}))&&void 0!==t?t:r,n)}function f(e){var n,t=e.children,o=e.id,a=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(n=u({message:t,id:o}))&&void 0!==n?n:t;return r.createElement(c,{values:a},i)}},2008:function(e,n,t){t.d(n,{M:function(){return u}});var r=t(7294),o="container_2Pz7",a="title_24BA",i="subtitle_2vvR",c="msg_3ZE1",l=t(4973);function u(e){var n=e.msg,t="";return n&&(t=r.createElement("div",{className:c},n)),r.createElement("div",{className:o},r.createElement("div",{className:a},r.createElement(l.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(l.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(l.Z,null,"polishing the content"))),t)}},3866:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return f},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(2008),c=["components"],l={title:"Emergency Shutdown",sidebar_position:1,date:new Date("2021-07-28T22:33:07.000Z")},u=void 0,s={unversionedId:"leaf/other-faqs/emergency-shutdown",id:"leaf/other-faqs/emergency-shutdown",isDocsHomePage:!1,title:"Emergency Shutdown",description:"Improvement,",source:"@site/docs/leaf/other-faqs/emergency-shutdown.md",sourceDirName:"leaf/other-faqs",slug:"/leaf/other-faqs/emergency-shutdown",permalink:"/docs/leaf/other-faqs/emergency-shutdown",version:"current",sidebarPosition:1,frontMatter:{title:"Emergency Shutdown",sidebar_position:1,date:"2021-07-28T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/leaf/key-concepts/glossary"},next:{title:"What's Pando Rings",permalink:"/docs/rings/intro"}},f=[],p={toc:f};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.M,{mdxType:"Improvement"}),(0,a.kt)("p",null,"WIP"))}d.isMDXComponent=!0}}]);