import{d,Z as p,o as f,e as s,ao as y,bg as h,h as g,i as T,B as x,f as o,C,R as r,dz as k}from"./index-DOvsCgXx.js";const w=d({setup(){const{data:l,fetchDataFn:u,loading:i}=p(e=>async()=>{const a=await r.api.health.cron.get();e.value=Array.from(Object.values(a.data).map(t=>({...t,_name:t.name,name:k(t.name)})))});f(async()=>{await u()});const c=async(e,a)=>{await r.api.health.cron.run(e).post();let t=setTimeout(function m(){r.api.health.cron.task(e).get().then(n=>{n.status==="fulfill"?(message.success(`${a} 执行完成`),t=clearTimeout(t)):n.status==="reject"?(message.error(`${a} 执行失败，${n.message}`),t=clearTimeout(t)):t=setTimeout(m,1e3)})},1e3)};return()=>s(C,null,{default:()=>[s(y,{noPagination:!0,data:l,loading:i.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},maxWidth:500,columns:[{title:"任务",key:"name",ellipsis:{tooltip:!0},width:150},{title:"描述",key:"description",width:250,ellipsis:{tooltip:!0}},{title:"状态",key:"status"},{title:"下次执行",key:"",render(e){const a=e.nextDate;return a?h(new Date(a),"MM/dd/yyyy hh:mm:ss"):"N/A"}},{title:"操作",key:"",render(e){return s(g,null,{default:()=>[s(T,{onPositiveClick:()=>void c(e._name,e.name)},{trigger(){return s(x,{size:"tiny",quaternary:!0,type:"primary"},{default:()=>[o("执行")]})},default:()=>s("span",{class:"max-w-48"},[o("确定要执行？")])})]})}}]},null)]})}});export{w as default};
