(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[890],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2208:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={title:"Technical Design",sidebar_position:2,date:new Date("2021-03-20T12:38:07.000Z")},l=void 0,c={unversionedId:"rings/desgin",id:"rings/desgin",isDocsHomePage:!1,title:"Technical Design",description:"Compound is an implementation of MTG and a parachain of Mixin network.",source:"@site/developer/rings/desgin.md",sourceDirName:"rings",slug:"/rings/desgin",permalink:"/zh-tw/developer/rings/desgin",version:"current",lastUpdatedAt:1627205248,formattedLastUpdatedAt:"7/25/2021",sidebarPosition:2,frontMatter:{title:"Technical Design",sidebar_position:2,date:"2021-03-20T12:38:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Technical Overview",permalink:"/zh-tw/developer/rings/overview"}},p=[{value:"APIs",id:"apis",children:[]},{value:"Workers",id:"workers",children:[]},{value:"Action processing",id:"action-processing",children:[]},{value:"Market Trade-Curbing Mechanism",id:"market-trade-curbing-mechanism",children:[]},{value:"The implementation of compound protocol",id:"the-implementation-of-compound-protocol",children:[]}],u={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Compound is an implementation of MTG and a parachain of Mixin network."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4712).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The user transfers a payment(UTXO) that carries business data to the Mixin network."),(0,a.kt)("li",{parentName:"ul"},"Compound syncs the outputs(UTXO) by parsing the business data(in output.memo)"),(0,a.kt)("li",{parentName:"ul"},"Compound dispatchs the business action(included in business data) and processes each action(supply, borrow...)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5640).Z})),(0,a.kt)("h2",{id:"apis"},"APIs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/compound/blob/master/handler/rest/rest.go"},"Rest APIs")," exported for application layer, including:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/markets                // response of all markets\n/markets/{asset}        // response of the market info of the specified asset\n/liquidities/{address}  // response of user liquidities\n/supplies               // response of supply datas\n/borrows                // response of borrow datas\n/transactions           // response of transactions\n")),(0,a.kt)("h2",{id:"workers"},"Workers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/cashier/cashier.go"},"cashier")," Processes the pending transfers. prepare for transfering a transaction to Mixin network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/syncer/syncer.go"},"syncer")," Syncs the outputs(UTXO) from Mixin network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/txsender/sender.go"},"txsender")," Transfers raw transaction to Mixin network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/spentsync/spentsync.go"},"spentsync")," syncs and updates the transfer state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/priceoracle/priceoracle.go"},"priceoracle")," Fetches a price and put the price on the chain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/payee.go"},"payee")," processes outputs and dispatches business actions.")),(0,a.kt)("h2",{id:"action-processing"},"Action processing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/borrow.go"},"borrow")," handles the borrow action event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/supply.go"},"supply")," handles the supply action event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/supply_pledge.go"},"pledge")," handles the pledge action event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/supply_unpledge.go"},"unpledge")," handles the unpledge action event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/supply_redeem.go"},"redeem")," handles the redeem action event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/borrow_repay.go"},"repay")," handles the repay action event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/liquidation.go"},"liquidation")," handles the liquidation action event"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/proposal.go"},"proposal")," handles and dispatches the proposal actions, include: adding market, updating market, closing or opening market, adding or removing allowlist, withdraw"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/worker/snapshot/price.go"},"price")," handles the price protocal action event.")),(0,a.kt)("h2",{id:"market-trade-curbing-mechanism"},"Market Trade-Curbing Mechanism"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Close the market when the price of a certain market is abnormal.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the price of a market is maliciously attacked, managers have the right to execute the ",(0,a.kt)("inlineCode",{parentName:"li"},"close-market")," order and apply for a closed-market vote. If the request is approved, the market will be closed."),(0,a.kt)("li",{parentName:"ul"},"Trades are prohibited in closed markets."),(0,a.kt)("li",{parentName:"ul"},"However, as long as there are closed markets, liquidation of all markets will be prohibited, because liquidation will affect the liquidity of all market accounts of users.")),(0,a.kt)("h2",{id:"the-implementation-of-compound-protocol"},"The implementation of compound protocol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/internal/compound/interest_rate_model.go"},"Interest rate model")," is The core implementation of compound protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/core/borrow.go"},"Borrow balance")," user borrow balance contains borrow principal and borrow interest. ",(0,a.kt)("inlineCode",{parentName:"li"},"balance = borrow.principal * market.borrow_index / borrow.interest_index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/blob/master/service/market/market.go"},"Accrue interest")," Accruing interest only occurs when there is a behavior that causes changes in market transaction data, such as supply, borrow, pledge, unpledge, redeem, repay, price updating. And Only calculated once in the same block.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    blockNumberPrior := market.BlockNumber\n\n    blockNum, e := s.blockSrv.GetBlock(ctx, time)\n    if e != nil {\n        return e\n    }\n\n    blockDelta := blockNum - blockNumberPrior\n    if blockDelta > 0 {\n        borrowRate, e := s.curBorrowRatePerBlockInternal(ctx, market)\n        if e != nil {\n            return e\n        }\n\n        if market.BorrowIndex.LessThanOrEqual(decimal.Zero) {\n            market.BorrowIndex = borrowRate\n        }\n\n        timesBorrowRate := borrowRate.Mul(decimal.NewFromInt(blockDelta))\n        interestAccumulated := market.TotalBorrows.Mul(timesBorrowRate)\n        totalBorrowsNew := interestAccumulated.Add(market.TotalBorrows)\n        totalReservesNew := interestAccumulated.Mul(market.ReserveFactor).Add(market.Reserves)\n        borrowIndexNew := market.BorrowIndex.Add(timesBorrowRate.Mul(market.BorrowIndex))\n\n        market.BlockNumber = blockNum\n        market.TotalBorrows = totalBorrowsNew.Truncate(16)\n        market.Reserves = totalReservesNew.Truncate(16)\n        market.BorrowIndex = borrowIndexNew.Truncate(16)\n    }\n\n")))}m.isMDXComponent=!0},4712:function(e,t,r){"use strict";t.Z=r.p+"assets/images/architecture-9f5e3fcdc439a1dd9e0837979da8eb59.jpg"},5640:function(e,t,r){"use strict";t.Z=r.p+"assets/images/workflow-2464cb27dcde662bc9641ebb9b167127.jpg"}}]);