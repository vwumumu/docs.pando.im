"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6891],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return u},I:function(){return c}});var a=n(7294),o=/{\w+}/g,r="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var s=a.isValidElement(i)?i:String(i);return n.push(s),r}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(r).reduce((function(e,t,a){var o;return e.concat(t).concat(null!==(o=n[a])&&void 0!==o?o:"")}),""):i.split(r).reduce((function(e,t,o){return[].concat(e,[a.createElement(a.Fragment,{key:o},t,n[o])])}),[])}function s(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var l=n(7529);function p(e){var t,n=e.id,a=e.message;return null!==(t=l[null!=n?n:a])&&void 0!==t?t:a}function c(e,t){var n,a=e.message;return i(null!==(n=p({message:a,id:e.id}))&&void 0!==n?n:a,t)}function u(e){var t,n=e.children,o=e.id,r=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=p({message:n,id:o}))&&void 0!==t?t:n;return a.createElement(s,{values:r},i)}},2008:function(e,t,n){n.d(t,{M:function(){return p}});var a=n(7294),o="container_2Pz7",r="title_24BA",i="subtitle_2vvR",s="msg_3ZE1",l=n(4973);function p(e){var t=e.msg,n="";return t&&(n=a.createElement("div",{className:s},t)),a.createElement("div",{className:o},a.createElement("div",{className:r},a.createElement(l.Z,null,"This Article needs additional information.")),a.createElement("div",{className:i},a.createElement(l.Z,null,"Please help improve it by "),a.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},a.createElement(l.Z,null,"polishing the content"))),n)}},121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(2008),s=["components"],l={title:"Listing assets and adding pools",sidebar_position:6,date:new Date("2021-08-15T22:33:07.000Z")},p=void 0,c={unversionedId:"lake/tutorials/listing",id:"lake/tutorials/listing",isDocsHomePage:!1,title:"Listing assets and adding pools",description:"Improvement,",source:"@site/docs/lake/tutorials/listing.md",sourceDirName:"lake/tutorials",slug:"/lake/tutorials/listing",permalink:"/docs/lake/tutorials/listing",version:"current",sidebarPosition:6,frontMatter:{title:"Listing assets and adding pools",sidebar_position:6,date:"2021-08-15T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Checking asset information",permalink:"/docs/lake/tutorials/asset-info-page"},next:{title:"Liquidity Provider Token (LP Token)",permalink:"/docs/lake/key-concepts/lp-token"}},u=[{value:"Add asset information to Mixin Network",id:"add-asset-information-to-mixin-network",children:[]},{value:"Create a pool at 4swap",id:"create-a-pool-at-4swap",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.M,{mdxType:"Improvement"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://lake.pando.im"},"Pando Lake"))," only allows for selected pools that have proven credentials. It doesn't accept new pool from the public."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://4swap.org"},"4swap"))," is a community-driven project that is currently allowing for any pool to be added."),(0,r.kt)("h2",{id:"add-asset-information-to-mixin-network"},"Add asset information to Mixin Network"),(0,r.kt)("p",null,"Visit Mixin's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MixinNetwork/asset-profile"},"asset-profile")," page, follow the instructions at ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," to Mixin Network."),(0,r.kt)("p",null,'For example, if you have an ERC-20 token named "RUM", you can add it to Mixin Network:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'an icon file named "icon.png", it should be 520px * 520px.'),(0,r.kt)("li",{parentName:"ol"},'a json file named "index.json", which should be a valid json file and contain the following information:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // the asset id of RUM in Mixin Network\n  "asset_id": "4f2ec12c-22f4-3a9e-b757-c84b6415ea8f",\n  // RUM is a ERC-20 token, the chain id is ETH\'s asset id\n  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",\n  // RUM is not listed on CoinMarketCap, so we use the empty string\n  "cmc_id": ""\n}\n')),(0,r.kt)("p",null,"The commit of the above example is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MixinNetwork/asset-profile/commit/437d378f899c5837598bdb8c4e9c18ae8f21ad27"},"here"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please create a pull request when you have finished. It usually takes about 1~2 days for Mixin Network to process your pull request."))),(0,r.kt)("h2",{id:"create-a-pool-at-4swap"},"Create a pool at 4swap"),(0,r.kt)("p",null,"You need to head to ",(0,r.kt)("a",{parentName:"p",href:"../../wallets/mixin-messenger"},"Mixin Messenger")," or ",(0,r.kt)("a",{parentName:"p",href:"../../wallets/fennec"},"Fennec")," to create a pool."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure the wallet balance of the 2 assets is above the minimum amount of 0.00000001. If not, please deposit some to your wallet."),(0,r.kt)("li",{parentName:"ol"},"Make sure you have above the minimum amount of 0.02 ETH in your wallet. If not, please deposit some into your wallet or swap for it at ",(0,r.kt)("a",{parentName:"li",href:"https://app.4swap.org"},"4swap"),"."),(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://app.4swap.org/#/me"},"this page"),', tap "connect" to connect with your wallet.'),(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://app.4swap.org/#/liquidity/create"},"this page"),", choose two assets you want to add to the pool and tap ",(0,r.kt)("inlineCode",{parentName:"li"},"Pay")," to create a pool.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It usually takes 1~3 days to wait for the pool to be created and approved by ",(0,r.kt)("a",{parentName:"p",href:"../key-concepts/4swap-mtg"},"MTG nodes"),". If the request is not processed in 3 days, you will receive a refund."))))}m.isMDXComponent=!0}}]);