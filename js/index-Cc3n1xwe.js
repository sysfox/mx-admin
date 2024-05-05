function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/index-BHliiLgN.js","assets/index-C_iyiais.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d,dE as f,c as m,b as l,e,bH as u,F as p,H as v,C as g,R as h,cc as _}from"./index-BHliiLgN.js";import{F as b,d as y}from"./index-Dtzdz_vt.js";import{_ as E}from"./CheckCircleOutlined-C6ZmBOEM.js";import{T as S}from"./two-col-DoMMrhW2.js";const F=d({setup(){const n=f("debug-serverless",y),i=m(),t=l(),s=l(""),r=async()=>{try{const o=await h.api.debug.function.post({data:{function:n.value},errorHandler:a=>{s.value=`Error: ${a.data.message}`,i.error(a.data.message)}});_(()=>import("./index-BHliiLgN.js").then(a=>a.eh),__vite__mapDeps([0,1])).then(a=>{a.editor.colorize(JSON.stringify(o.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(o,null,2)})})}catch{}};return()=>e(g,{actionsElement:e(p,null,[e(v,{icon:e(E,null,null),onClick:r},null)])},{default:()=>[e(S,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(b,{value:n,onSave:r},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"max-h-[calc(100vh-10rem)] overflow-auto !bg-transparent !bg-none",ref:t},[s.value])]})]})]})}});export{F as default};
