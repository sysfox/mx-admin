import{d as m,dK as s,cc as b,b as g,w as y,d8 as w,e as a,bM as d,n as S,V as c,Q as v,B as T,f as h,C as x,R as C}from"./index-BsAc1UgJ.js";import{T as M}from"./two-col-C_Za1smr.js";import{E as p}from"./types-w5g51IlY.js";const V=t=>{switch(t){case"objectId":return((l=Math,n=Date,u=16,o=r=>l.floor(r).toString(u))=>o(n.now()/1e3)+" ".repeat(u).replaceAll(/./g,()=>o(l.random()*u)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).slice(5,10);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}},F=m({setup(){const t=s("debug-event-name",p.POST_CREATE),l=s("debug-event",{}),n=s("debug-event-type","web"),u=b({value:l.value[t.value]||"export default {}"}),o=g();y(()=>t.value,e=>{r.editor.setValue(l.value[e]||"")});const r=w(o,u,e=>{l.value={...l.value,[t.value]:e}},{language:"typescript",unSaveConfirm:!1}),i=async()=>{const e=l.value[t.value]?.replace(/({{(.*?)}})/g,(E,N,f)=>V(f))??"";C.api.debug.events.post({params:{type:n.value,event:t.value},data:new Function(`return ${e.replace(/^export default /,"")}`)()})};return()=>a(x,null,{default:()=>[a(M,null,{default:()=>[a(d,{span:"12"},{default:()=>[a(S,null,{default:()=>[a(c,{label:"Type"},{default:()=>[a(v,{tag:!0,filterable:!0,value:n.value,onUpdateValue:e=>void(n.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(c,{label:"Event"},{default:()=>[a(v,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(p).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(T,{type:"primary",onClick:i},{default:()=>[h("测试")]})])]}),a(d,{span:"24"},{default:()=>[a("div",{class:"relative h-[calc(100vh-20rem)]"},[a("div",{ref:o,class:"h-full"},null)])]})]})]})}});export{F as default};
