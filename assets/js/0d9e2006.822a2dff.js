"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[180],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Add Collateral",sidebar_position:5,date:new Date("2021-08-13T12:33:07.000Z")},c=void 0,s={unversionedId:"leaf/tutorials/add-collateral",id:"leaf/tutorials/add-collateral",isDocsHomePage:!1,title:"Add Collateral",description:"Adding Collateral is useful in two scenarios. The first is when a Vault is coming close to being liquidated (link to liquidation), adding collateral can save the Vault. The second is when a Vault owner wants to increase their capacity for generating pUSD, adding collateral will increase the maximum amount of pUSD that can be generated.",source:"@site/docs/leaf/tutorials/add-collateral.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/add-collateral",permalink:"/docs/leaf/tutorials/add-collateral",version:"current",sidebarPosition:5,frontMatter:{title:"Add Collateral",sidebar_position:5,date:"2021-08-13T12:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Generating More pUSD",permalink:"/docs/leaf/tutorials/generate-more"},next:{title:"Paying Back pUSD",permalink:"/docs/leaf/tutorials/payback"}},u=[],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adding Collateral is useful in two scenarios. The first is when a Vault is coming close to being ",(0,o.kt)("strong",{parentName:"p"},"liquidated")," (link to liquidation), adding collateral can save the Vault. The second is when a Vault owner wants to increase their capacity for generating pUSD, adding collateral will increase the maximum amount of pUSD that can be generated."),(0,o.kt)("p",null,'To add collateral, click on "Deposit" and fill in the intended amount on the Deposit page. And then enter the quantity of collateral you want to add and click Deposit in picture on the right'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4724).Z})),(0,o.kt)("p",null,"Pay 4 MOB token and see Details,\nthe collateral Increase from\n96.8865 to 100.8865. You can see details\nabout this adding in chat window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3723).Z})))}p.isMDXComponent=!0},4724:function(e,t,n){t.Z=n.p+"assets/images/leaf-add-collateral-p1-25efe21981f53e17a98d38d9e3be128e.png"},3723:function(e,t,n){t.Z=n.p+"assets/images/leaf-add-collateral-p2-0de525ee1a8037e0f0806ad7103105e5.png"}}]);