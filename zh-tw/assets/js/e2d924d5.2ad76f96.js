(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[852],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8428:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"RESTful APIs",sidebar_position:3,date:new Date("2021-07-31T11:18:01.000Z")},l=void 0,p={unversionedId:"lake/apis",id:"lake/apis",isDocsHomePage:!1,title:"RESTful APIs",description:"API Endpoints",source:"@site/developer/lake/apis.md",sourceDirName:"lake",slug:"/lake/apis",permalink:"/zh-tw/developer/lake/apis",version:"current",lastUpdatedAt:1627710353,formattedLastUpdatedAt:"7/31/2021",sidebarPosition:3,frontMatter:{title:"RESTful APIs",sidebar_position:3,date:"2021-07-31T11:18:01.000Z"},sidebar:"tutorialSidebar",previous:{title:"Using SDK to Trade",permalink:"/zh-tw/developer/lake/guide/using-sdk"},next:{title:"Action Protocol",permalink:"/zh-tw/developer/lake/action-protocol"}},d=[{value:"API Endpoints",id:"api-endpoints",children:[]},{value:"Entities",id:"entities",children:[{value:"Pair Entity",id:"pair-entity",children:[]},{value:"Asset Entity",id:"asset-entity",children:[]}]},{value:"Get Information",id:"get-information",children:[]},{value:"List Assets",id:"list-assets",children:[]},{value:"List Pairs",id:"list-pairs",children:[]},{value:"Read Pair Market Stat",id:"read-pair-market-stat",children:[]},{value:"Read Pair Market Stat",id:"read-pair-market-stat-1",children:[]},{value:"Create Action",id:"create-action",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4swap"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mtgswap-api.fox.one"},"https://mtgswap-api.fox.one"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pando Lake"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lake-api.pando.im"},"https://lake-api.pando.im"))))),(0,o.kt)("p",null,"You can use any of them to construct your API requests in form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP_METHOD ${API_BASE}/${API_PATH}\n")),(0,o.kt)("h2",{id:"entities"},"Entities"),(0,o.kt)("h3",{id:"pair-entity"},"Pair Entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // the asset id of base and quote assets\n  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",\n  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",\n  // the amount of base and quote assets\n  "base_amount": "827.7243632",\n  "quote_amount": "57701.51287515",\n  // the liquidity of this pair\n  "liquidity": "6588.04146863",\n  // the asset id of LP-Token of this pair\n  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",\n  // the route id of this pair\n  "route_id": 1,\n  // fee 0.3%\n  "fee_percent": "0.003",\n  "max_liquidity": "100000000",\n  "base_value": "301753.29",\n  "quote_value": "300856.63",\n  "volume_24h": "9552.48",\n  "fee_24h": "28.63",\n  "transaction_count_24h": 165,\n  "version": 7503628,\n  "base_volume_24h": "27.23252371",\n  "quote_volume_24h": "1895.88436236"\n}\n')),(0,o.kt)("h3",{id:"asset-entity"},"Asset Entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // asset id\n  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",\n  // displayed name, symbol and icon\n  "name": "4swap LP Token BTC-wBTC",\n  "symbol": "sBTC-wBTC",\n  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",\n  // asset id of chain asset\n  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",\n  // chain asset entity\n  "chain": {Asset Entity},\n  // price in US Dollar\n  "price": "84447.541565189134",\n  // extra information of this assets\n  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum\u2019s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}\n}\n')),(0,o.kt)("h2",{id:"get-information"},"Get Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/info\n")),(0,o.kt)("p",null,"Responds ",(0,o.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg/overview"},"MTG")," information about 4swap and Lake."),(0,o.kt)("p",null,"You can save it to use it later because the information would not change frequently."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766645,\n  "data": {\n    // user id of MTG members\n    "members": [\n      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",\n      "099627f8-4031-42e3-a846-006ee598c56e",\n      "aefbfd62-727d-4424-89db-ae41f75d2e04",\n      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",\n      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"\n    ],\n    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",\n    // multisig threshold\n    "threshold": 3\n  }\n}\n')),(0,o.kt)("h2",{id:"list-assets"},"List Assets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/assets\n")),(0,o.kt)("p",null,"Responds supported assets of 4swap and Lake."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766503,\n  "data": {\n    "assets": [\n      {Asset Entity},\n      {Asset Entity},\n      ...\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"list-pairs"},"List Pairs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/pairs\n")),(0,o.kt)("p",null,"Responds all supported pairs of 4swap's pairs pool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766503,\n  "data": {\n    "pairs": [\n      {Pair Entity},\n      {Pair Entity},\n      ...\n    ],\n    "pair_count": 75,\n    "transaction_count_24h": 25134,\n    "volume_24h": "5189724.64904556",\n    "fee_24h": "13687.38904891",\n    "ts": 1627697766503,\n  }\n}\n')),(0,o.kt)("h2",{id:"read-pair-market-stat"},"Read Pair Market Stat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/stats/markets/${BASE_ASSET_ID}/${QUOTE_ASSET_ID}\n")),(0,o.kt)("p",null,"Responds market stat information about two asset ids specified in the URL."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766503,\n  "data": [\n    {\n      "ts": 1612224000,\n      "date": "2021-02-02T00:00:00Z",\n      // liquidity in US dollar\n      "value": "15796065.69038667",\n      // volume in US dollar\n      "volume": "656098.59481682"\n    },\n    ...\n  ]\n}\n')),(0,o.kt)("h2",{id:"read-pair-market-stat-1"},"Read Pair Market Stat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/stats/markets/${BASE_ASSET_ID}/${QUOTE_ASSET_ID}/kline/v2?dur=4320h\n")),(0,o.kt)("p",null,"Responds market K-line data about two asset ids specified in the URL."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766503,\n  "data": [\n    [\n      // timestamp\n      1612148400,\n      // price of base / quote\n      "0.039304863681",\n      // price of quote / base\n      "25.442131511901"\n    ]\n    ...\n  ]\n}\n')),(0,o.kt)("h2",{id:"create-action"},"Create Action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /api/actions\n")),(0,o.kt)("p",null,"This is an API to generate an encrypted transfer by provided ",(0,o.kt)("a",{parentName:"p",href:"action-protocol"},"action protocol")," data. It's useful if you don't want to sign and encrypt the transfer yourself."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Action protocol data\n  "action": "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669",\n  // amount of crypto\n  "amount": "123",\n  // asset id of crypto\n  "asset_id": "2566bf58-c4de-3479-8c55-c137bb7fe2ae",\n  // optional, broker id, leave it empty to use 4swap\'s default broker\n  "broker_id": "",\n  // optional, an UUID to trace the transfer\n  "trace_id": ""}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766503,\n  "data": {\n    // the encrypted action data\n    "action": "...",\n    // the code and the code url.\n    // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.\n    "code": "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",\n    "code_url": "mixin://codes/d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",\n    // an UUID to trace the transfer\n    "follow_id": "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\n  }\n}\n')),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/mixin-sdk-go"},"mixin-sdk-go")," client, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," as the parameter for ",(0,o.kt)("inlineCode",{parentName:"p"},"client.Transaction")," to create and send the transaction to the Mainnet address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// send a transaction to a multi-sign address which specified by `OpponentMultisig`\n// the OpponentMultisig.Receivers are the MTG group members\ntx, err := client.Transaction(ctx, &mixin.TransferInput{\n    AssetID: assetID,\n    Amount:  decimal.RequireFromString(amount),\n    TraceID: mixin.RandomTraceID(),\n  // the `action` field in the response\n    Memo:    resp.Action,\n  // the MTG members from `/api/information`\n    OpponentMultisig: struct {\n        Receivers []string `json:"receivers,omitempty"`\n        Threshold uint8    `json:"threshold,omitempty"`\n    }{\n        Receivers: group.Members,\n        Threshold: uint8(group.Threshold),\n    },\n}, *pin)\n')),(0,o.kt)("p",null,"If you want to integrate with Mixin Network compatible wallets, for example, ",(0,o.kt)("a",{parentName:"p",href:"https://mixin.one/messenger"},"Mixin Messenger")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/fennec"},"Fennec"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"code_url")," to invoke the wallets:"),(0,o.kt)("p",null,"Mixin Messenger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.location.href = resp.code_url\n")),(0,o.kt)("p",null,"Fennec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// fennec ext\nlet ext = null;\n// fennec context\nlet ctx = null;\n// token\nlet token = null;\n\nfunction load() {\n  // check the ext and get the context\n  if (window.__MIXIN__ && window.__MIXIN__.mixin_ext) {\n    ext = window.__MIXIN__.mixin_ext;\n    ctx = await ext.enable("demo");\n    if (ctx) {\n      token = await ctx.wallet.signToken({\n        payload: { from: "demo" }\n      });\n    }\n  }\n}\n\nfunction pay() {\n  // get the resp of `/api/actions`\n  // ...\n  ctx.wallet.multisigsPayment({ code: resp.code });\n}\n')))}u.isMDXComponent=!0}}]);