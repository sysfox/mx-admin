import{d as C,Y as I,y as P,b as E,as as F,at as k,au as u,aq as D,r as B,a3 as N,o as T,R as r,e as a,n as q,V as i,q as c,F as f,af as y,H as d,av as h,aw as H,C as A,ae as L,ag as v,ax as M,ai as V}from"./index-CtTzMi8p.js";const z=C({setup(){const g=I(),m=P(),x=()=>({text:"",author:"",source:""}),s=E({});F(()=>{k([u.原创,u.哲学,u.文学,u.诗词]).then(e=>{s.value={source:e.from,text:e.hitokoto,author:e.from_who||e.creator}})});const w=D(),b=async()=>{const e=async()=>{await r.api.says.post({data:s.value}),message.success("发布成功"),m.push({name:v.ListSay})};t.text||t.author||t.source?w.create({title:"警告",content:"发布一言会覆盖现有的内容，要继续吗",type:"warning",negativeText:"取消",positiveText:"确定",onPositiveClick(){e()}}):e()},S=e=>L(t)(e),t=B(x()),l=N(()=>g.query.id);T(async()=>{const e=l.value;if(e&&typeof e=="string"){const n=(await r.api.says(e).get({})).data;S(n)}});const p=async()=>{const e=()=>{try{if(!t.text||t.text.trim().length==0)throw"内容为空";return{...M(V(t),(o,n,R)=>(o[R]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:t.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!y(l.value))return;const o=l.value;await r.api.says(o).put({data:e()}),message.success("修改成功")}else await r.api.says.post({data:e()}),message.success("发布成功");m.push({name:v.ListSay})};return()=>a(A,{actionsElement:a(f,null,[y(l)?a(d,{name:"更新",variant:"info",onClick:p,icon:a(h,null,null)},null):a(f,null,[a(d,{name:"发布一言",variant:"info",onClick:b,icon:a(H,null,null)},null),a(d,{name:"发布自己说的",variant:"primary",onClick:p,icon:a(h,null,null)},null)])])},{default:()=>[a(q,null,{default:()=>[a(i,{label:"内容",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[a(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:s.value.text,value:t.text,onInput:e=>void(t.text=e)},null)]}),a(i,{label:"作者",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[a(c,{placeholder:s.value.author,value:t.author,onInput:e=>void(t.author=e)},null)]}),a(i,{label:"来源",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[a(c,{placeholder:s.value.source,value:t.source,onInput:e=>void(t.source=e)},null)]})]})]})}});export{z as default};