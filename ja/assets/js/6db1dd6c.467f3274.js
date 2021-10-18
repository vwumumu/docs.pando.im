"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8408],{7495:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(7462),l=a(3366),s=(a(7294),a(3905)),r=a(5532),c=["components"],i={title:"Read Assets",sidebar_position:5,date:new Date("2021-09-30T23:18:01.000Z")},m=void 0,o={unversionedId:"lake/apis/assets",id:"lake/apis/assets",isDocsHomePage:!1,title:"Read Assets",description:"GET /assets",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/apis/assets.md",sourceDirName:"lake/apis",slug:"/lake/apis/assets",permalink:"/ja/developer/lake/apis/assets",version:"current",lastUpdatedAt:1634562135,formattedLastUpdatedAt:"10/18/2021",sidebarPosition:5,frontMatter:{title:"Read Assets",sidebar_position:5,date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Pairs",permalink:"/ja/developer/lake/apis/pairs"},next:{title:"Create Actions",permalink:"/ja/developer/lake/apis/actions"}},u=[{value:"GET /assets",id:"get-assets",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-assets"},"GET /assets"),(0,s.kt)("p",null,"This API will respond all supported crypto assets."),(0,s.kt)(r.jI,{base:"https://api.4swap.org/api",url:"/assets",mdxType:"APIEndpoint"}),(0,s.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,s.kt)(r.Xv,{title:"Read supported assets",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/assets",mdxType:"APIRequest"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": {\n    "assets": [\n      {Asset Entity},\n      {Asset Entity},\n      ...\n    ]\n  }\n}\n')))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return h},Yk:function(){return d},kH:function(){return R},so:function(){return C},Xv:function(){return v}});var n=a(7294),l=a(6010),s="title_sZG8",r="panel_2t5Q",c="table_3oTh",i="tbody_2SpR",m="tr_2EbQ",o="td_W9xC",u="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,E=null;return E=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:s},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",c)},n.createElement("tbody",{className:i},n.createElement("tr",{className:m},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,u)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},E)),n.createElement("tr",{className:m},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,u)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},d||"No limitation")))))}var E=a(3958);function v(e){e.title;var t=e.url,a=e.method,l=e.isPublic,s=e.base,r=e.data,c=s||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(E.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+c+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',r?" "+r:""))}var f="container_2R7I";function h(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(E.Z,{className:"language-sass"},""+a+t))}var N=a(7462),_="title_37bC",b="panel_1nCE",k="table_1ccU",Z="tbody_2YH9",g="tr_122g",y="td_2Fkc",T="th_3Lc3",A="required_13Y0",P="name_NWXV",j=/p-([a-zA-Z_]+)/;function w(e){var t=e.name,a=e.value,s="";return e.required&&(s=n.createElement("div",{className:A},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(y,T)},n.createElement("code",{className:P},t),s),n.createElement("td",{className:y},a))}function q(e,t){var a={},n=j.exec(e);if(null!==n&&n.length>1){var l=n[1],s=e.slice(l.length+3);return a.name=l,0===s.length?a.value=t:"required"===s&&(a.required=t),a}return null}function R(e){var t=[],a={};for(var s in e)if(Object.hasOwnProperty.call(e,s)){var r=q(s,e[s]);if(null!==r)for(var c in Object.hasOwnProperty.call(a,r.name)||(a[r.name]={}),r)Object.hasOwnProperty.call(r,c)&&(a[r.name][c]=r[c])}for(var i in a)t.push({name:i,value:a[i].value||"",required:!!a[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",b)},n.createElement("h3",{className:_},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",k)},n.createElement("tbody",{className:Z},t.map((function(e,t){return n.createElement(w,(0,N.Z)({key:t},e))})))))}var x="container_1Yme";function C(e){return n.createElement("div",{className:x},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(E.Z,{className:"language-json"},e.children))}}}]);