"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5258],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return p},I:function(){return u}});var r=n(7294),o=/{\w+}/g,a="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var c=r.isValidElement(i)?i:String(i);return n.push(c),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function c(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var l=n(7529);function s(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return i(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=s({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(c,{values:a},i)}},2008:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(7294),o="container_2Pz7",a="title_24BA",i="subtitle_2vvR",c="msg_3ZE1",l=n(4973);function s(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:c},t)),r.createElement("div",{className:o},r.createElement("div",{className:a},r.createElement(l.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(l.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(l.Z,null,"polishing the content"))),n)}},8185:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(2008),c=["components"],l={title:"Net APY",sidebar_position:2,date:new Date("2021-09-04T12:33:07.000Z")},s=void 0,u={unversionedId:"rings/key-concepts/net-apy",id:"rings/key-concepts/net-apy",isDocsHomePage:!1,title:"Net APY",description:"Improvement,",source:"@site/docs/rings/key-concepts/net-apy.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/net-apy",permalink:"/docs/rings/key-concepts/net-apy",version:"current",sidebarPosition:2,frontMatter:{title:"Net APY",sidebar_position:2,date:"2021-09-04T12:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"rToken",permalink:"/docs/rings/key-concepts/rtoken"},next:{title:"Loan Risk Indicator",permalink:"/docs/rings/key-concepts/loan-risk-indicator"}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.M,{msg:"better math formula: https://docusaurus.io/docs/markdown-features/math-equations",mdxType:"Improvement"}),(0,a.kt)("p",null,"Net APY(annual percentage yield) reflects the estimatd annual net yield based on the ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"Supply APY")," and ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"Borrow APY")," of the very moment. It indicates whether you are making money or losing money at the current APYS."),(0,a.kt)("p",null,"Net APY = ","[ \u2211(an asset's Supply x its Supply APY) - \u2211(an asset's Borrow x its Borrow APY) ]"," / Total Supply"),(0,a.kt)("p",null,"For example, you have supplied two assets: BTC and ETH; and you have borrowed two assets: ",(0,a.kt)("a",{parentName:"p",href:"/docs/leaf/pusd"},"pUSD")," and USDC. Your Net APY of the moment will be:\n{","[(BTC Supply ",(0,a.kt)("em",{parentName:"p"}," BTC Supply APY) + (ETH Supply ")," ETH Supply APY)]"," - ","[(pUSD Borrow ",(0,a.kt)("em",{parentName:"p"}," pUSD Borrow APY) + (USDC Borrow ")," USDC Borrow APY)]","}(BTC Supply + EtH Supply)"))}d.isMDXComponent=!0}}]);