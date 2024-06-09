import{s as ne}from"./confetti-D3WRURFJ.js";import{az as c,aA as U,aB as x,aC as w,dr as k,c4 as se,d as m,aD as P,b6 as ie,aE as j,aF as q,aG as o,b7 as ae,b8 as re,aH as oe,dE as le,aJ as _,aK as ue,a3 as y,aM as ce,aN as D,aO as N,dl as de,bO as R,dF as pe,dG as fe,aP as h,bX as V,as as ve,dH as he,ao as me,bK as ge,r as A,o as be,R as E,b as z,e,m as xe,aU as Ce,B,f as C,V as d,q as f,b1 as ye,h as $,n as M,c as ze}from"./index-C4yjJ-lD.js";const Ee=c("steps",`
 width: 100%;
 display: flex;
`,[c("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[U("disabled","cursor: not-allowed"),U("clickable",`
 cursor: pointer;
 `),x("&:last-child",[c("step-splitor","display: none;")])]),c("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),c("step-content","flex: 1;",[c("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("title",`
 white-space: nowrap;
 flex: 0;
 `)]),w("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),c("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[c("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[w("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[k()]),c("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[k()]),c("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[k()])])]),U("vertical","flex-direction: column;",[se("show-description",[x(">",[c("step","padding-bottom: 8px;")])]),x(">",[c("step","margin-bottom: 16px;",[x("&:last-child","margin-bottom: 0;"),x(">",[c("step-indicator",[x(">",[c("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),c("step-content",[w("description","margin-top: 8px;")])])])])])]);function Be(t,n){return typeof t!="object"||t===null||Array.isArray(t)?null:(t.props||(t.props={}),t.props.internalIndex=n+1,t)}function we(t){return t.map((n,i)=>Be(n,i))}const Se=Object.assign(Object.assign({},j.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),O=oe("n-steps"),Fe=m({name:"Steps",props:Se,setup(t,{slots:n}){const{mergedClsPrefixRef:i,mergedRtlRef:a}=P(t),l=ie("Steps",a,i),s=j("Steps","-steps",Ee,le,t,i);return q(O,{props:t,mergedThemeRef:s,mergedClsPrefixRef:i,stepsSlots:n}),{mergedClsPrefix:i,rtlEnabled:l}},render(){const{mergedClsPrefix:t}=this;return o("div",{class:[`${t}-steps`,this.rtlEnabled&&`${t}-steps--rtl`,this.vertical&&`${t}-steps--vertical`]},we(ae(re(this))))}}),Ie={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},S=m({name:"Step",props:Ie,setup(t){const n=_(O,null);n||ue("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=P(),{props:a,mergedThemeRef:l,mergedClsPrefixRef:s,stepsSlots:v}=n,r=y(()=>a.vertical),I=y(()=>{const{status:u}=t;if(u)return u;{const{internalIndex:p}=t,{current:b}=a;if(b===void 0)return"process";if(p<b)return"finish";if(p===b)return a.status||"process";if(p>b)return"wait"}return"process"}),T=y(()=>{const{value:u}=I,{size:p}=a,{common:{cubicBezierEaseInOut:b},self:{stepHeaderFontWeight:K,[h("stepHeaderFontSize",p)]:W,[h("indicatorIndexFontSize",p)]:G,[h("indicatorSize",p)]:L,[h("indicatorIconSize",p)]:J,[h("indicatorTextColor",u)]:X,[h("indicatorBorderColor",u)]:Q,[h("headerTextColor",u)]:Y,[h("splitorColor",u)]:Z,[h("indicatorColor",u)]:ee,[h("descriptionTextColor",u)]:te}}=l.value;return{"--n-bezier":b,"--n-description-text-color":te,"--n-header-text-color":Y,"--n-indicator-border-color":Q,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":G,"--n-indicator-size":L,"--n-indicator-text-color":X,"--n-splitor-color":Z,"--n-step-header-font-size":W,"--n-step-header-font-weight":K}}),g=i?ce("step",y(()=>{const{value:u}=I,{size:p}=a;return`${u[0]}${p[0]}`}),T,a):void 0,H=y(()=>{if(t.disabled)return;const{onUpdateCurrent:u,"onUpdate:current":p}=a;return u||p?()=>{u&&V(u,t.internalIndex),p&&V(p,t.internalIndex)}:void 0});return{stepsSlots:v,mergedClsPrefix:s,vertical:r,mergedStatus:I,handleStepClick:H,cssVars:i?void 0:T,themeClass:g?.themeClass,onRender:g?.onRender}},render(){const{mergedClsPrefix:t,onRender:n,handleStepClick:i,disabled:a}=this,l=D(this.$slots.default,s=>{const v=s||this.description;return v?o("div",{class:`${t}-step-content__description`},v):null});return n?.(),o("div",{class:[`${t}-step`,a&&`${t}-step--disabled`,!a&&i&&`${t}-step--clickable`,this.themeClass,l&&`${t}-step--show-description`,`${t}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},o("div",{class:`${t}-step-indicator`},o("div",{class:`${t}-step-indicator-slot`},o(de,null,{default:()=>D(this.$slots.icon,s=>{const{mergedStatus:v,stepsSlots:r}=this;return v==="finish"||v==="error"?v==="finish"?o(R,{clsPrefix:t,key:"finish"},{default:()=>N(r["finish-icon"],()=>[o(pe,null)])}):v==="error"?o(R,{clsPrefix:t,key:"error"},{default:()=>N(r["error-icon"],()=>[o(fe,null)])}):null:s||o("div",{key:this.internalIndex,class:`${t}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${t}-step-splitor`}):null),o("div",{class:`${t}-step-content`},o("div",{class:`${t}-step-content-header`},o("div",{class:`${t}-step-content-header__title`},N(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${t}-step-splitor`})),l))}}),Ue="_full_185ux_1",ke={full:Ue},Ne=()=>_("configs"),Pe=m({setup(){ve(async()=>{await he(),me()&&ge()});const t=A({});be(async()=>{const a=await E.api.init.configs.default.get();Object.assign(t,a)}),q("configs",t);const n=z(0),i=a=>n.value>a?"finish":n.value<a?"wait":"process";return()=>e("div",{class:ke.full},[e(xe,{title:"初始化",class:"modal-card sm form-card m-auto"},{default:()=>[e(Fe,{onUpdateCurrent:a=>{a<n.value&&(n.value=a)},size:"small",current:n.value},{default:()=>[e(S,{status:n.value>0?"finish":"process",title:"(๑•̀ㅂ•́)و✧",description:"让我们开始吧"},null),e(S,{status:i(1),title:"站点设置",description:"先设置一下站点相关配置吧"},null),e(S,{status:i(2),title:"主人信息",description:"请告诉你的名字"},null),e(S,{status:i(3),title:"(๑•̀ㅂ•́)و✧",description:"一切就绪了"},null)]}),e("div",{class:"mt-[3.5rem]"},[JSON.stringify(t)==="{}"?e("div",{class:"py-4 text-center"},[e(Ce,null,null)]):o([Ae,$e,Te,De][n.value],{onNext(){n.value++}})])]})])}}),F={onNext:{type:Function,required:!0}},Ae=m({props:F,setup(t){const n=async()=>{const i=document.createElement("input");i.type="file",i.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",i.accept=".zip",document.body.append(i),i.click(),i.addEventListener("change",()=>{const a=i.files[0],l=new FormData;l.append("file",a),E.api.init.restore.post({data:l,timeout:1073741824}).then(()=>{message.success("恢复成功，页面将会重载"),setTimeout(()=>{location.reload()},1e3)})})};return()=>e("div",{class:"flex justify-center space-x-4 text-center"},[e(B,{type:"default",round:!0,onClick:n},{default:()=>[C("还原备份")]}),e(B,{type:"primary",round:!0,onClick:()=>{t.onNext()}},{default:()=>[C("开始")]})])}}),$e=m({props:F,setup(t){const n=Ne(),i=z(n?.seo?.title||""),a=z(n?.seo?.keywords),l=z(n?.seo?.description||""),s=A({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),v=async()=>{await Promise.all([E.api.init.configs("seo").patch({data:{title:i.value,keywords:a.value,description:l.value}}),E.api.init.configs("url").patch({data:{...s}})]),t.onNext()};return()=>e(M,null,{default:()=>[e(d,{label:"站点标题",required:!0},{default:()=>[e(f,{value:i.value,onUpdateValue:r=>void(i.value=r)},null)]}),e(d,{label:"站点描述",required:!0},{default:()=>[e(f,{value:l.value,onUpdateValue:r=>void(l.value=r)},null)]}),e(d,{label:"关键字"},{default:()=>[e(ye,{value:a.value,onUpdateValue:r=>void(a.value=r)},null)]}),e(d,{label:"前端地址"},{default:()=>[e(f,{value:s.webUrl,onInput:r=>void(s.webUrl=r)},null)]}),e(d,{label:"API 地址"},{default:()=>[e(f,{value:s.serverUrl,onInput:r=>void(s.serverUrl=r)},null)]}),e(d,{label:"后台地址"},{default:()=>[e(f,{value:s.adminUrl,onInput:r=>void(s.adminUrl=r)},null)]}),e(d,{label:"Gateway 地址"},{default:()=>[e(f,{value:s.wsUrl,onInput:r=>void(s.wsUrl=r)},null)]}),e($,{justify:"end"},{default:()=>[e(B,{onClick:v,round:!0,type:"primary",disabled:!i.value||!l.value},{default:()=>[C("下一步")]})]})]})}}),Te=m({props:F,setup(t){const n=A({}),i=z(""),a=ze(),l=async()=>{if(i.value!==n.password){a.error("两次密码不一致");return}for(const s in n)n[s]===""&&(n[s]=void 0);await E.api.user.register.post({data:{...n}}),t.onNext()};return()=>e(M,null,{default:()=>[e(d,{label:"你的名字 (登录凭证)",required:!0},{default:()=>[e(f,{value:n.username,onUpdateValue:s=>{n.username=s}},null)]}),e(d,{label:"昵称"},{default:()=>[e(f,{value:n.name,onUpdateValue:s=>{n.name=s}},null)]}),e(d,{label:"邮箱",required:!0},{default:()=>[e(f,{value:n.mail,onUpdateValue:s=>{n.mail=s}},null)]}),e(d,{label:"密码",required:!0},{default:()=>[e(f,{value:n.password,type:"password",onUpdateValue:s=>{n.password=s}},null)]}),e(d,{label:"确认密码",required:!0},{default:()=>[e(f,{value:i.value,type:"password",onUpdateValue:s=>{i.value=s}},null)]}),e(d,{label:"个人首页"},{default:()=>[e(f,{value:n.url,onUpdateValue:s=>{n.url=s}},null)]}),e(d,{label:"头像"},{default:()=>[e(f,{value:n.avatar,onUpdateValue:s=>{n.avatar=s}},null)]}),e(d,{label:"个人介绍"},{default:()=>[e(f,{value:n.introduce,onUpdateValue:s=>{n.introduce=s}},null)]}),e($,{justify:"end"},{default:()=>[e(B,{disabled:!n.username||!n.mail||!n.password||!i.value,onClick:l,round:!0,type:"primary"},{default:()=>[C("下一步")]})]})]})}}),De=m({props:F,setup(){return()=>e($,{class:"text-center",vertical:!0},{default:()=>[e("span",{class:"text-base"},[C("你已经完成了所有的步骤，干得漂亮。")]),e(B,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),ne(),setTimeout(()=>{location.reload()},200)}},{default:()=>[C("LINK START")]})]})}});export{Pe as default};
