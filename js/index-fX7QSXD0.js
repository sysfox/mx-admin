function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/index-C-VHWjjZ.js","assets/index-B_cKX3MI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d,dE as f,c as m,b as l,e,bH as u,F as p,H as v,C as g,R as h,cc as _}from"./index-C-VHWjjZ.js";import{F as b,d as y}from"./index-DaItgjwV.js";import{_ as E}from"./CheckCircleOutlined-Br_UpHQt.js";import{T as S}from"./two-col-Ckmiba7t.js";const F=d({setup(){const s=f("debug-serverless",y),i=m(),t=l(),r=l(""),o=async()=>{try{const n=await h.api.debug.function.post({data:{function:s.value},errorHandler:a=>{r.value=`Error: ${a.data.message}`,i.error(a.data.message)}});_(()=>import("./index-C-VHWjjZ.js").then(a=>a.eh),__vite__mapDeps([0,1])).then(a=>{a.editor.colorize(JSON.stringify(n.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(n,null,2)})})}catch{}};return()=>e(g,{actionsElement:e(p,null,[e(v,{icon:e(E,null,null),onClick:o},null)])},{default:()=>[e(S,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(b,{value:s,onSave:o},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"max-h-[calc(100vh-10rem)] overflow-auto !bg-transparent !bg-none",ref:t},[r.value])]})]})]})}});export{F as default};
