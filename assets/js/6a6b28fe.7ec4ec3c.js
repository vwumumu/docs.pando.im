(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9411],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7444:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={title:"What's Pando Leaf",sidebar_position:1,date:new Date("2021-07-22T22:33:07.000Z")},c=void 0,u={unversionedId:"leaf/intro",id:"leaf/intro",isDocsHomePage:!1,title:"What's Pando Leaf",description:"Pando Leaf is a decentralized financial network built with the Mixin MTG (Mixin Trusted Group) technology, a place where you can deposit collateral to generate and destory Pando USD(pUSD) and destroy it when repaying the generated pUSD balance.",source:"@site/docs/leaf/intro.md",sourceDirName:"leaf",slug:"/leaf/intro",permalink:"/docs/leaf/intro",version:"current",sidebarPosition:1,frontMatter:{title:"What's Pando Leaf",sidebar_position:1,date:"2021-07-22T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Pando Lake User Manual",permalink:"/docs/lake/0ther-faqs-about-pando-lake"},next:{title:"Pando USD",permalink:"/docs/leaf/pusd"}},s=[{value:"How does Pando Leaf work?",id:"how-does-pando-leaf-work",children:[]},{value:"About the Auction when a vault becomes liquidated",id:"about-the-auction-when-a-vault-becomes-liquidated",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leaf.pando.im"},"Pando Leaf")," is a decentralized financial network built with the Mixin MTG (",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg/exchange"},"Mixin Trusted Group"),") technology, a place where you can deposit collateral to generate and destory ",(0,r.kt)("a",{parentName:"p",href:"./pusd"},"Pando USD(pUSD)")," and destroy it when repaying the generated pUSD balance."),(0,r.kt)("h2",{id:"how-does-pando-leaf-work"},"How does Pando Leaf work?"),(0,r.kt)("p",null,"Depositing collaterals and repaying the generated pUSD balance both happen in a ",(0,r.kt)("strong",{parentName:"p"},"vault"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vaults are not free. Generating the stablecoin requires the payment of stability fee. To reclaim collateral, users must repay the previously generated stablecoin and the accumulated stability fee."),(0,r.kt)("li",{parentName:"ul"},"Vaults are required to be overcollateralized. Vault owners should uphold the liquidation price/liquidation ratio (which is the minimum collateralization ratio) to avoid the ",(0,r.kt)("strong",{parentName:"li"},"liquidation")," of their positions.")),(0,r.kt)("p",null,"When a vault is liquidated, a liquidation penalty is applied and collateral is sold to repay the vault\u2019s outstanding stablecoin balance."),(0,r.kt)("h2",{id:"about-the-auction-when-a-vault-becomes-liquidated"},"About the Auction when a vault becomes liquidated"),(0,r.kt)("p",null,"Anyone can participate in the auction if a vault breaches the minimum required collateralization ratio and becomes liquidated."),(0,r.kt)("p",null,"There are two phases of the auction - For the first phase, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,r.kt)("p",null,"For the second phase, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt."))}p.isMDXComponent=!0}}]);