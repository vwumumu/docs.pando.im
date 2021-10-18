"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7211],{6769:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),s=t(5532),i=["components"],c={title:"Read Transactions",sidebar_position:8,date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,m={unversionedId:"leaf/apis/transactions",id:"leaf/apis/transactions",isDocsHomePage:!1,title:"Read Transactions",description:"Read All Transactions",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/leaf/apis/transactions.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/transactions",permalink:"/ja/developer/leaf/apis/transactions",version:"current",lastUpdatedAt:1634562135,formattedLastUpdatedAt:"10/18/2021",sidebarPosition:8,frontMatter:{title:"Read Transactions",sidebar_position:8,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Oracles",permalink:"/ja/developer/leaf/apis/oracles"},next:{title:"Create Actions",permalink:"/ja/developer/leaf/apis/actions"}},d=[{value:"Read All Transactions",id:"read-all-transactions",children:[{value:"GET /transactions",id:"get-transactions",children:[]}]},{value:"Read Single Transaction",id:"read-single-transaction",children:[{value:"GET /transactions/:follow_id",id:"get-transactionsfollow_id",children:[]}]}],p={toc:d};function u(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-all-transactions"},"Read All Transactions"),(0,r.kt)("h3",{id:"get-transactions"},"GET /transactions"),(0,r.kt)("p",null,"This API will respond all transactions."),(0,r.kt)(s.jI,{base:"https://leaf-api.pando.im/api",url:"/transactions",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(s.Xv,{title:"Read all transactions",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/transactions",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633141343147,\n  "data": {\n    "transactions": [\n      {\n        "id": "66598b30-67cf-3925-bc0e-b2382bb21e34",\n        "created_at": "2021-04-27T05:29:18Z",\n        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n        "amount": "0.00000001",\n        "action": "CatFold",\n        "status": "OK",\n        "msg": "",\n        "parameters": "[\\"00000000-0000-0000-0000-000000000000\\"]"\n      },\n      {\n        "id": "578d309a-c83a-3202-85ea-124531b79b9b",\n        "created_at": "2021-04-27T05:30:18Z",\n        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n        "amount": "0.00000001",\n        "action": "CatFold",\n        "status": "OK",\n        "msg": "",\n        "parameters": "[\\"00000000-0000-0000-0000-000000000000\\"]"\n      },\n      // ...\n    ],\n    "pagination": {\n      "next_cursor": "50",\n      "has_next": true\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"read-single-transaction"},"Read Single Transaction"),(0,r.kt)("h3",{id:"get-transactionsfollow_id"},"GET /transactions/:follow_id"),(0,r.kt)("p",null,"This API will respond one transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},":follow_id"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"follow_id")," is an uuid that you specified when you created the ",(0,r.kt)("a",{parentName:"p",href:"./actions"},(0,r.kt)("inlineCode",{parentName:"a"},"action")),"."),(0,r.kt)(s.jI,{base:"https://leaf-api.pando.im/api",url:"/transactions/:follow_id",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,r.kt)(s.kH,{"p-follow_id":"the follow id","p-follow_id-required":"{true}",mdxType:"APIParams"}),(0,r.kt)(s.Xv,{title:"Read one transaction",method:"GET",base:"https://leaf-api.pando.im/api",url:"/transactions/c8c92c8f-65b3-49b7-bfae-d5ae43265129",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "action": 0,\n  "amount": "string",\n  "asset_id": "string",\n  "created_at": "2021-10-02",\n  "id": "string",\n  "msg": "string",\n  "parameters": "string",\n  // Abort|Ok\n  "status": 0\n}\n')))}u.isMDXComponent=!0},5532:function(e,a,t){t.d(a,{jI:function(){return _},Yk:function(){return u},kH:function(){return x},so:function(){return C},Xv:function(){return E}});var n=t(7294),l=t(6010),r="title_sZG8",s="panel_2t5Q",i="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",m="td_W9xC",d="th_3VyX",p=t(4973);function u(e){var a=e.scope,t=e.scopeNote,u=e.limitation,f=null;return f=a?n.createElement("div",null,n.createElement("code",null,a||"-"),t&&n.createElement("span",null,"; ",t)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",s)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",i)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},f)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},u||"No limitation")))))}var f=t(3958);function E(e){e.title;var a=e.url,t=e.method,l=e.isPublic,r=e.base,s=e.data,i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",t||"GET"," ",'"'+i+a+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',s?" "+s:""))}var h="container_2R7I";function _(e){var a=e.url,t=e.base||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+t+a))}var b=t(7462),v="title_37bC",N="panel_1nCE",g="table_1ccU",k="tbody_2YH9",T="tr_122g",Z="td_2Fkc",w="th_3Lc3",y="required_13Y0",P="name_NWXV",R=/p-([a-zA-Z_]+)/;function A(e){var a=e.name,t=e.value,r="";return e.required&&(r=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:T},n.createElement("th",{className:(0,l.Z)(Z,w)},n.createElement("code",{className:P},a),r),n.createElement("td",{className:Z},t))}function j(e,a){var t={},n=R.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return t.name=l,0===r.length?t.value=a:"required"===r&&(t.required=a),t}return null}function x(e){var a=[],t={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var s=j(r,e[r]);if(null!==s)for(var i in Object.hasOwnProperty.call(t,s.name)||(t[s.name]={}),s)Object.hasOwnProperty.call(s,i)&&(t[s.name][i]=s[i])}for(var c in t)a.push({name:c,value:t[c].value||"",required:!!t[c].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:v},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",g)},n.createElement("tbody",{className:k},a.map((function(e,a){return n.createElement(A,(0,b.Z)({key:a},e))})))))}var I="container_1Yme";function C(e){return n.createElement("div",{className:I},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);