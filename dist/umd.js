(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e["vue-button"]=n(e.Vue))})(this,function(e){"use strict";const n="",d=(t,s)=>{const o=t.__vccOpts||t;for(const[u,c]of s)o[u]=c;return o},i={name:"VueButton"},r={class:"lv-button"};function _(t,s,o,u,c,p){return e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("button",r,[e.renderSlot(t.$slots,"default",{},()=>[e.createTextVNode(" this is button ")],!0)])])}const f=d(i,[["render",_],["__scopeId","data-v-bc06568f"]]);return{install:t=>{t.component("vue-button",f)}}});
