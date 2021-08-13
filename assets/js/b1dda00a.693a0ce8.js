(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7737],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1730:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],c={title:"Auction Process",sidebar_position:1,date:new Date("2021-07-28T22:33:07.000Z")},l=void 0,u={unversionedId:"leaf/key-concepts/liquidation/leaf-auction-process",id:"leaf/key-concepts/liquidation/leaf-auction-process",isDocsHomePage:!1,title:"Auction Process",description:"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page.",source:"@site/docs/leaf/key-concepts/liquidation/leaf-auction-process.md",sourceDirName:"leaf/key-concepts/liquidation",slug:"/leaf/key-concepts/liquidation/leaf-auction-process",permalink:"/docs/leaf/key-concepts/liquidation/leaf-auction-process",version:"current",sidebarPosition:1,frontMatter:{title:"Auction Process",sidebar_position:1,date:"2021-07-28T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Vaults",permalink:"/docs/leaf/key-concepts/vaults"},next:{title:"Liquidation Ratio",permalink:"/docs/leaf/key-concepts/liquidation/liquidation-ratio"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page."),(0,i.kt)("p",null,"There are TWO phases of the auction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Phase 1"),", participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Phase 2"),", participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt. The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for."))}f.isMDXComponent=!0}}]);