"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3203],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return p},I:function(){return u}});var r=n(7294),a=/{\w+}/g,o="{}";function i(e,t){var n=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==t?void 0:t[a];if(void 0!==i){var l=r.isValidElement(i)?i:String(i);return n.push(l),o}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(o).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):i.split(o).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function l(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var c=n(7529);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return i(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,a=e.id,o=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=s({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(l,{values:o},i)}},2008:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(7294),a="container_2Pz7",o="title_24BA",i="subtitle_2vvR",l="msg_3ZE1",c=n(4973);function s(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:l},t)),r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement(c.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(c.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(c.Z,null,"polishing the content"))),n)}},2433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(2008),l=["components"],c={title:"Swapping",sidebar_position:1,date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,u={unversionedId:"lake/tutorials/swapping",id:"lake/tutorials/swapping",isDocsHomePage:!1,title:"Swapping",description:"Improvement,",source:"@site/docs/lake/tutorials/swapping.md",sourceDirName:"lake/tutorials",slug:"/lake/tutorials/swapping",permalink:"/docs/lake/tutorials/swapping",version:"current",sidebarPosition:1,frontMatter:{title:"Swapping",sidebar_position:1,date:"2021-08-15T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"What's Pando Lake",permalink:"/docs/lake/intro"},next:{title:"Providing liquidity",permalink:"/docs/lake/tutorials/providing-liquidity"}},p=[],d={toc:p};function f(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"First, find Pando Lake robot in Mixin messenger, the bot id is 7000103937"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8347).Z})),(0,o.kt)("p",null,"On the Swap page, select the assets you want to pay and purchase."),(0,o.kt)("p",null,"By tapping the gear icon, you can set the slippage (skip to slippage explanation page) tolerance."),(0,o.kt)("p",null,"(pic of slippage setting)"),(0,o.kt)("p",null,"The route shows the steps your transaction will be processed. Algorithm calculates the optimal route so that you can receive the most asset possible."))}f.isMDXComponent=!0},8347:function(e,t,n){t.Z=n.p+"assets/images/lake-swapping-p1-c2d5418f9aa06922e95aa615cbea3fd7.png"}}]);