"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3209],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Design",sidebar_position:1,date:new Date("2021-07-31T14:38:07.000Z")},l=void 0,p={unversionedId:"lake/design",id:"lake/design",isDocsHomePage:!1,title:"Design",description:"Pando Lake Design",source:"@site/developer/lake/design.md",sourceDirName:"lake",slug:"/lake/design",permalink:"/zh/developer/lake/design",version:"current",lastUpdatedAt:1633578864,formattedLastUpdatedAt:"10/7/2021",sidebarPosition:1,frontMatter:{title:"Design",sidebar_position:1,date:"2021-07-31T14:38:07.000Z"}},d=[{value:"Pando Lake Design",id:"pando-lake-design",children:[]},{value:"Deposit",id:"deposit",children:[]},{value:"Withdraw",id:"withdraw",children:[]},{value:"Swap",id:"swap",children:[]}],c={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pando-lake-design"},"Pando Lake Design"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pando Lake is a MTG implementation on Mixin Network of Uniswap V2")),(0,a.kt)("p",null,"Pando Lake is an automated liquidity protocol powered by a constant product formula and implemented in ",(0,a.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg/overview"},"Mixin Multisig Groups"),". It obviates the need for single Mixin Dapp, prioritizing decentralization, censorship resistance, and security."),(0,a.kt)("p",null,"Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time."),(0,a.kt)("p",null,"Pairs act as automated market makers, standing ready to accept one token for the other as long as the \u201cconstant product\u201d formula is preserved. This formula, most simply expressed as ",(0,a.kt)("strong",{parentName:"p"},"x * y = k"),", states that trades must not change the product (k) of a pair\u2019s reserve balances (x and y). Because k remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A modified ",(0,a.kt)("a",{parentName:"p",href:"https://curve.fi"},"Curve")," formula used on the stablecoin pools like USDT/USDC.")),(0,a.kt)("h2",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,"Each Pando Lake liquidity pool is a trading venue for a pair of Mixin Mainnet tokens. When a pool is created by the governance, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool."),(0,a.kt)("p",null,"The number of liquidity tokens This first liquidity provider will receive would equal ",(0,a.kt)("inlineCode",{parentName:"p"},"sqrt(x*y)"),", where x and y represent the amount of each token provided. For the following providers, the number will be ",(0,a.kt)("inlineCode",{parentName:"p"},"min(x/reserve_x,y/reserve_y)*liquidity_shares"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"deposit",src:n(9111).Z})),(0,a.kt)("h2",{id:"withdraw"},"Withdraw"),(0,a.kt)("p",null,"To retrieve the underlying liquidity, plus any fees accrued, liquidity providers must give back their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation."),(0,a.kt)("p",null,"The number of tokens retrieved will be ",(0,a.kt)("inlineCode",{parentName:"p"},"lp_token/liquidity_shares*reserve_x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lp_token/liquidity_shares*reserve_y"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"withdraw",src:n(3756).Z})),(0,a.kt)("h2",{id:"swap"},"Swap"),(0,a.kt)("p",null,"From the constant product formula it follows that the price of that token A is simply price_token_A = reserve_token_B / reserve_token_A. The market price only moves as the reserve ratio of the tokens in the pool changes, which happens when someone trades against it."),(0,a.kt)("p",null,"The swapping rule is the constant product formula. When either token is withdrawn, a proportional amount of the other must be deposited, in order to make the constant(",(0,a.kt)("inlineCode",{parentName:"p"},"k"),") unchange."),(0,a.kt)("p",null,"Pando Lake applies a 0.3% fee (0.04% for stablecoin pools) to trades, which is added to reserves to increases ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," actually as a payout to liquidation providers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"swap",src:n(5729).Z})))}u.isMDXComponent=!0},9111:function(e,t,n){t.Z=n.p+"assets/images/pando_lake_deposit-6ec2512b42d6c89436521e45f8c95509.png"},5729:function(e,t,n){t.Z=n.p+"assets/images/pando_lake_swap-b11e8f9b9a9d0412c1035d731eded24b.png"},3756:function(e,t,n){t.Z=n.p+"assets/images/pando_lake_withdraw-97c3c1d6bae3c4c895243f13e4d9b43b.png"}}]);