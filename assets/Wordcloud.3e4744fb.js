import{u as l}from"./useEchartsInstance.d5c45169.js";import{_ as d,r as c,o as u,a as _,c as f}from"./index.2ac62065.js";const m={__name:"Wordcloud",setup(p){const a=c(null),e=[{name:"hellp",value:10},{name:"\u6CA1\u6709",value:20},{name:"\u4E0D\u9519",value:16},{name:"\u8FD8\u884C",value:30},{name:"\u5C4F\u5E55",value:40}];return u(()=>{const t=l(a.value),o={xAxis:{show:!1},yAxis:{show:!1},series:[{type:"custom",renderItem(n,h){let r=Math.random()*500,s=Math.random()*500;return{type:"text",x:r,y:s,style:{text:e[n.dataIndex].name,fontSize:e[n.dataIndex].value,fill:`rgba(${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)}, ${Math.random()})`}}},data:e}]};t.setOption(o)}),(t,o)=>(_(),f("div",{class:"wordcloud",ref_key:"wordcloud",ref:a},null,512))}},v=d(m,[["__scopeId","data-v-f4d3f3f2"]]);export{v as default};
