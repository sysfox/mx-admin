import{dU as f}from"./index-BsAc1UgJ.js";function g(i,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in i)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(i,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(i,n){(function(o,t){i.exports=t()})(self,()=>(()=>{var o={};return(()=>{var t=o;Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0,t.FitAddon=class{activate(e){this._terminal=e}dispose(){}fit(){const e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;const r=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(r._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;const e=this._terminal._core,r=e._renderService.dimensions;if(r.css.cell.width===0||r.css.cell.height===0)return;const c=this._terminal.options.scrollback===0?0:e.viewport.scrollBarWidth,a=window.getComputedStyle(this._terminal.element.parentElement),d=parseInt(a.getPropertyValue("height")),m=Math.max(0,parseInt(a.getPropertyValue("width"))),s=window.getComputedStyle(this._terminal.element),h=d-(parseInt(s.getPropertyValue("padding-top"))+parseInt(s.getPropertyValue("padding-bottom"))),u=m-(parseInt(s.getPropertyValue("padding-right"))+parseInt(s.getPropertyValue("padding-left")))-c;return{cols:Math.max(2,Math.floor(u/r.css.cell.width)),rows:Math.max(1,Math.floor(h/r.css.cell.height))}}}})(),o})())})(l);var p=l.exports;const _=f(p),w=g({__proto__:null,default:_},[p]);export{w as a};
