import{d as m,Z as N,r as w,c as j,Y as C,w as P,o as b,e,F as x,ar as k,R as c,H as D,A as E,aU as F,O as B,aV as R,z as S,B as u,aW as A,aX as M,h as U,f as o,aY as z,a1 as T,M as V,aZ as q,ah as I,a_ as _,W as L,a$ as O,D as p,C as H,v as K}from"./index-C4yjJ-lD.js";import{N as W,a as Y}from"./ListItem-BAx5Yfyl.js";function Z(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!K(s)}const J=m({setup(){const{data:s,pager:n,sortProps:G,fetchDataFn:f,loading:g}=N((a,t)=>async(h=d.query.page||1,y=30)=>{const i=await c.api.projects.get({params:{page:h,size:y}});a.value=i.data,t.value=i.pagination}),r=w(new Set),v=j(),d=C(),l=f;return P(()=>d.query.page,async a=>{await l(a)}),b(async()=>{await l()}),()=>e(H,null,{actions:()=>e(x,null,[e(k,{checkedRowKeys:r,onDelete:async()=>{await Promise.all(Array.from(r.values()).map(a=>c.api.projects(a).delete())),r.clear(),l()}},null),e(D,{to:"/projects/edit",icon:e(E,null,null)},null)]),default:()=>e(F,{show:g.value},{default:()=>[e(W,{bordered:!1,class:"min-h-[300px] bg-transparent"},{footer(){return e("div",{class:"flex justify-end"},[e(B,{itemCount:n.value.total,pageCount:n.value.totalPage,page:n.value.currentPage,pageSize:n.value.size,onUpdatePage:a=>{l(a)}},null)])},default(){return s.value.map(a=>e(Y,{key:a.id},{prefix(){return e(R,{class:"mt-4",checked:r.has(a.id),onUpdateChecked:t=>{t?r.add(a.id):r.delete(a.id)}},null)},default(){return e(S,{description:a.description},{header(){return e("div",null,[e(u,A({ghost:!0,type:"primary",quaternary:!0,class:"!font-medium"},a.projectUrl?{tag:"a",href:a.projectUrl,target:"_blank"}:{}),{default:()=>[a.name]})])},footer(){return e(M,null,{default:()=>[e(U,{class:"pl-[3.6rem] text-sm text-[var(--clear-color-pressed)]"},{default:()=>[e("span",null,[o("创建于 "),z(a.created)]),a.modified&&e("span",null,[o("更新于")," ",e(T,{time:a.modified},null)])]})]})},"header-extra":function(){return e(V,null,{default:()=>[e(u,{onClick:()=>{q.push({name:I.EditProject,query:{id:a.id}})}},{default:()=>[o("编辑")]}),e(_,{class:"!p-0",options:[{value:"del",label:"",render(){return e(u,{type:"error",bordered:!1,onClick:async()=>{await c.api.projects(a.id).delete(),v.success("删除成功"),await l(n.value.currentPage)}},{default:()=>[o("删除")]})}}]},{default:()=>[e(u,{class:"!px-2"},{default:()=>[e(L,null,{default:()=>[e(O,null,null)]})]})]})]})},avatar(){let t;return a.avatar?e(p,{class:"align-center",circle:!0,src:a.avatar,size:"large"},null):e(p,{circle:!0,size:"large",class:"align-center"},Z(t=a.name[0].toUpperCase())?t:{default:()=>[t]})}})}}))}})]})})}});export{J as default};
