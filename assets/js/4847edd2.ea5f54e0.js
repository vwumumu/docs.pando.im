(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[789],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),h=r,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9540:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"Auction Process",sidebar_position:2,date:new Date("2021-07-28T22:33:07.000Z")},l=void 0,s={unversionedId:"leaf/leaf-auction-process",id:"leaf/leaf-auction-process",isDocsHomePage:!1,title:"Auction Process",description:"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page.",source:"@site/docs/leaf/leaf-auction-process.md",sourceDirName:"leaf",slug:"/leaf/leaf-auction-process",permalink:"/docs/leaf/leaf-auction-process",version:"current",sidebarPosition:2,frontMatter:{title:"Auction Process",sidebar_position:2,date:"2021-07-28T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"What's Pando Leaf",permalink:"/docs/leaf/intro"},next:{title:"What's Pando Rings",permalink:"/docs/rings/intro"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page."),(0,a.kt)("p",null,"There are TWO phases of the auction. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Phase 1"),", participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Phase 2"),", participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt. The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for."))}f.isMDXComponent=!0}}]);