(function(Z,b){typeof exports=="object"&&typeof module<"u"?module.exports=b():typeof define=="function"&&define.amd?define(b):(Z=typeof globalThis<"u"?globalThis:Z||self,Z["vue-button"]=b())})(this,function(){"use strict";function Z(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const b=process.env.NODE_ENV!=="production"?Object.freeze({}):{},kt=process.env.NODE_ENV!=="production"?Object.freeze([]):[],Ze=()=>{},en=/^on[^a-z]/,tn=e=>en.test(e),I=Object.assign,nn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rn=Object.prototype.hasOwnProperty,m=(e,t)=>rn.call(e,t),h=Array.isArray,G=e=>se(e)==="[object Map]",on=e=>se(e)==="[object Set]",w=e=>typeof e=="function",D=e=>typeof e=="string",Ve=e=>typeof e=="symbol",O=e=>e!==null&&typeof e=="object",sn=e=>O(e)&&w(e.then)&&w(e.catch),cn=Object.prototype.toString,se=e=>cn.call(e),ke=e=>se(e).slice(8,-1),ln=e=>se(e)==="[object Object]",xe=e=>D(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,un=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=(e,t)=>!Object.is(e,t),an=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let et;const ve=()=>et||(et=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ye(e){if(h(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=D(o)?hn(o):ye(o);if(r)for(const s in r)t[s]=r[s]}return t}else{if(D(e))return e;if(O(e))return e}}const fn=/;(?![^(]*\))/g,pn=/:([^]+)/,dn=/\/\*[^]*?\*\//g;function hn(e){const t={};return e.replace(dn,"").split(fn).forEach(n=>{if(n){const o=n.split(pn);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ie(e){let t="";if(D(e))t=e;else if(h(e))for(let n=0;n<e.length;n++){const o=Ie(e[n]);o&&(t+=o+" ")}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function tt(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let nt;function _n(e,t=nt){t&&t.active&&t.effects.push(e)}function gn(){return nt}const Re=e=>{const t=new Set(e);return t.w=0,t.n=0,t},rt=e=>(e.w&M)>0,ot=e=>(e.n&M)>0,mn=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=M},En=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];rt(r)&&!ot(r)?r.delete(e):t[n++]=r,r.w&=~M,r.n&=~M}t.length=n}},$e=new WeakMap;let k=0,M=1;const De=30;let S;const K=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),Ce=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class wn{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_n(this,o)}run(){if(!this.active)return this.fn();let t=S,n=H;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=S,S=this,H=!0,M=1<<++k,k<=De?mn(this):st(this),this.fn()}finally{k<=De&&En(this),M=1<<--k,S=this.parent,H=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){S===this?this.deferStop=!0:this.active&&(st(this),this.onStop&&this.onStop(),this.active=!1)}}function st(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let H=!0;const it=[];function ct(){it.push(H),H=!1}function lt(){const e=it.pop();H=e===void 0?!0:e}function V(e,t,n){if(H&&S){let o=$e.get(e);o||$e.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Re());const s=process.env.NODE_ENV!=="production"?{effect:S,target:e,type:t,key:n}:void 0;Nn(r,s)}}function Nn(e,t){let n=!1;k<=De?ot(e)||(e.n|=M,n=!rt(e)):n=!e.has(S),n&&(e.add(S),S.deps.push(e),process.env.NODE_ENV!=="production"&&S.onTrack&&S.onTrack(I({effect:S},t)))}function F(e,t,n,o,r,s){const i=$e.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&h(e)){const a=Number(o);i.forEach((d,l)=>{(l==="length"||l>=a)&&c.push(d)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":h(e)?xe(n)&&c.push(i.get("length")):(c.push(i.get(K)),G(e)&&c.push(i.get(Ce)));break;case"delete":h(e)||(c.push(i.get(K)),G(e)&&c.push(i.get(Ce)));break;case"set":G(e)&&c.push(i.get(K));break}const u=process.env.NODE_ENV!=="production"?{target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:s}:void 0;if(c.length===1)c[0]&&(process.env.NODE_ENV!=="production"?ce(c[0],u):ce(c[0]));else{const a=[];for(const d of c)d&&a.push(...d);process.env.NODE_ENV!=="production"?ce(Re(a),u):ce(Re(a))}}function ce(e,t){const n=h(e)?e:[...e];for(const o of n)o.computed&&ut(o,t);for(const o of n)o.computed||ut(o,t)}function ut(e,t){(e!==S||e.allowRecurse)&&(process.env.NODE_ENV!=="production"&&e.onTrigger&&e.onTrigger(I({effect:e},t)),e.scheduler?e.scheduler():e.run())}const bn=Z("__proto__,__v_isRef,__isVue"),at=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve)),On=Te(),Sn=Te(!0),Vn=Te(!0,!0),ft=xn();function xn(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=p(this);for(let s=0,i=this.length;s<i;s++)V(o,"get",s+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(p)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ct();const o=p(this)[t].apply(this,n);return lt(),o}}),e}function vn(e){const t=p(this);return V(t,"has",e),t.hasOwnProperty(e)}function Te(e=!1,t=!1){return function(o,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?Nt:wt:t?Wn:Et).get(o))return o;const i=h(o);if(!e){if(i&&m(ft,r))return Reflect.get(ft,r,s);if(r==="hasOwnProperty")return vn}const c=Reflect.get(o,r,s);return(Ve(r)?at.has(r):bn(r))||(e||V(o,"get",r),t)?c:x(c)?i&&xe(r)?c:c.value:O(c)?e?Ot(c):bt(c):c}}const yn=In();function In(e=!1){return function(n,o,r,s){let i=n[o];if(U(i)&&x(i)&&!x(r))return!1;if(!e&&(!Ae(r)&&!U(r)&&(i=p(i),r=p(r)),!h(n)&&x(i)&&!x(r)))return i.value=r,!0;const c=h(n)&&xe(o)?Number(o)<n.length:m(n,o),u=Reflect.set(n,o,r,s);return n===p(s)&&(c?ie(r,i)&&F(n,"set",o,r,i):F(n,"add",o,r)),u}}function Rn(e,t){const n=m(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&F(e,"delete",t,void 0,o),r}function $n(e,t){const n=Reflect.has(e,t);return(!Ve(t)||!at.has(t))&&V(e,"has",t),n}function Dn(e){return V(e,"iterate",h(e)?"length":K),Reflect.ownKeys(e)}const Cn={get:On,set:yn,deleteProperty:Rn,has:$n,ownKeys:Dn},pt={get:Sn,set(e,t){return process.env.NODE_ENV!=="production"&&tt(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return process.env.NODE_ENV!=="production"&&tt(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Tn=I({},pt,{get:Vn}),Pe=e=>e,le=e=>Reflect.getPrototypeOf(e);function ue(e,t,n=!1,o=!1){e=e.__v_raw;const r=p(e),s=p(t);n||(t!==s&&V(r,"get",t),V(r,"get",s));const{has:i}=le(r),c=o?Pe:n?Ke:ze;if(i.call(r,t))return c(e.get(t));if(i.call(r,s))return c(e.get(s));e!==r&&e.get(t)}function ae(e,t=!1){const n=this.__v_raw,o=p(n),r=p(e);return t||(e!==r&&V(o,"has",e),V(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function fe(e,t=!1){return e=e.__v_raw,!t&&V(p(e),"iterate",K),Reflect.get(e,"size",e)}function dt(e){e=p(e);const t=p(this);return le(t).has.call(t,e)||(t.add(e),F(t,"add",e,e)),this}function ht(e,t){t=p(t);const n=p(this),{has:o,get:r}=le(n);let s=o.call(n,e);s?process.env.NODE_ENV!=="production"&&mt(n,o,e):(e=p(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?ie(t,i)&&F(n,"set",e,t,i):F(n,"add",e,t),this}function _t(e){const t=p(this),{has:n,get:o}=le(t);let r=n.call(t,e);r?process.env.NODE_ENV!=="production"&&mt(t,n,e):(e=p(e),r=n.call(t,e));const s=o?o.call(t,e):void 0,i=t.delete(e);return r&&F(t,"delete",e,void 0,s),i}function gt(){const e=p(this),t=e.size!==0,n=process.env.NODE_ENV!=="production"?G(e)?new Map(e):new Set(e):void 0,o=e.clear();return t&&F(e,"clear",void 0,void 0,n),o}function pe(e,t){return function(o,r){const s=this,i=s.__v_raw,c=p(i),u=t?Pe:e?Ke:ze;return!e&&V(c,"iterate",K),i.forEach((a,d)=>o.call(r,u(a),u(d),s))}}function de(e,t,n){return function(...o){const r=this.__v_raw,s=p(r),i=G(s),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,a=r[e](...o),d=n?Pe:t?Ke:ze;return!t&&V(s,"iterate",u?Ce:K),{next(){const{value:l,done:f}=a.next();return f?{value:l,done:f}:{value:c?[d(l[0]),d(l[1])]:d(l),done:f}},[Symbol.iterator](){return this}}}}function A(e){return function(...t){if(process.env.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${un(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:this}}function Pn(){const e={get(s){return ue(this,s)},get size(){return fe(this)},has:ae,add:dt,set:ht,delete:_t,clear:gt,forEach:pe(!1,!1)},t={get(s){return ue(this,s,!1,!0)},get size(){return fe(this)},has:ae,add:dt,set:ht,delete:_t,clear:gt,forEach:pe(!1,!0)},n={get(s){return ue(this,s,!0)},get size(){return fe(this,!0)},has(s){return ae.call(this,s,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:pe(!0,!1)},o={get(s){return ue(this,s,!0,!0)},get size(){return fe(this,!0)},has(s){return ae.call(this,s,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:pe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=de(s,!1,!1),n[s]=de(s,!0,!1),t[s]=de(s,!1,!0),o[s]=de(s,!0,!0)}),[e,n,t,o]}const[Mn,Fn,An,jn]=Pn();function Me(e,t){const n=t?e?jn:An:e?Fn:Mn;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(m(n,r)&&r in o?n:o,r,s)}const zn={get:Me(!1,!1)},Kn={get:Me(!0,!1)},Hn={get:Me(!0,!0)};function mt(e,t,n){const o=p(n);if(o!==n&&t.call(e,o)){const r=ke(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Et=new WeakMap,Wn=new WeakMap,wt=new WeakMap,Nt=new WeakMap;function Un(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bn(e){return e.__v_skip||!Object.isExtensible(e)?0:Un(ke(e))}function bt(e){return U(e)?e:Fe(e,!1,Cn,zn,Et)}function Ot(e){return Fe(e,!0,pt,Kn,wt)}function he(e){return Fe(e,!0,Tn,Hn,Nt)}function Fe(e,t,n,o,r){if(!O(e))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Bn(e);if(i===0)return e;const c=new Proxy(e,i===2?o:n);return r.set(e,c),c}function W(e){return U(e)?W(e.__v_raw):!!(e&&e.__v_isReactive)}function U(e){return!!(e&&e.__v_isReadonly)}function Ae(e){return!!(e&&e.__v_isShallow)}function je(e){return W(e)||U(e)}function p(e){const t=e&&e.__v_raw;return t?p(t):e}function Jn(e){return an(e,"__v_skip",!0),e}const ze=e=>O(e)?bt(e):e,Ke=e=>O(e)?Ot(e):e;function x(e){return!!(e&&e.__v_isRef===!0)}function qn(e){return x(e)?e.value:e}const Gn={get:(e,t,n)=>qn(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return x(r)&&!x(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Ln(e){return W(e)?e:new Proxy(e,Gn)}const B=[];function Yn(e){B.push(e)}function Qn(){B.pop()}function E(e,...t){if(process.env.NODE_ENV==="production")return;ct();const n=B.length?B[B.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=Xn();if(o)J(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:s})=>`at <${Xt(n,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${e}`,...t];r.length&&s.push(`
`,...Zn(r)),console.warn(...s)}lt()}function Xn(){let e=B[B.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Zn(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...kn(n))}),t}function kn({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${Xt(e.component,e.type,o)}`,s=">"+n;return e.props?[r,...er(e.props),s]:[r+s]}function er(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...St(o,e[o]))}),n.length>3&&t.push(" ..."),t}function St(e,t,n){return D(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:x(t)?(t=St(e,p(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):w(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=p(t),n?t:[`${e}=`,t])}const Vt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function J(e,t,n,o){let r;try{r=o?e(...o):e()}catch(s){xt(s,t,n)}return r}function He(e,t,n,o){if(w(e)){const s=J(e,t,n,o);return s&&sn(s)&&s.catch(i=>{xt(i,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(He(e[s],t,n,o));return r}function xt(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,c=process.env.NODE_ENV!=="production"?Vt[n]:n;for(;s;){const a=s.ec;if(a){for(let d=0;d<a.length;d++)if(a[d](e,i,c)===!1)return}s=s.parent}const u=t.appContext.config.errorHandler;if(u){J(u,null,10,[e,i,c]);return}}tr(e,n,r,o)}function tr(e,t,n,o=!0){if(process.env.NODE_ENV!=="production"){const r=Vt[t];if(n&&Yn(n),E(`Unhandled error${r?` during execution of ${r}`:""}`),n&&Qn(),o)throw e;console.error(e)}else console.error(e)}let _e=!1,We=!1;const C=[];let j=0;const L=[];let P=null,z=0;const vt=Promise.resolve();let Ue=null;const nr=100;function rr(e){const t=Ue||vt;return e?t.then(this?e.bind(this):e):t}function or(e){let t=j+1,n=C.length;for(;t<n;){const o=t+n>>>1;ee(C[o])<e?t=o+1:n=o}return t}function Be(e){(!C.length||!C.includes(e,_e&&e.allowRecurse?j+1:j))&&(e.id==null?C.push(e):C.splice(or(e.id),0,e),yt())}function yt(){!_e&&!We&&(We=!0,Ue=vt.then(Rt))}function It(e){h(e)?L.push(...e):(!P||!P.includes(e,e.allowRecurse?z+1:z))&&L.push(e),yt()}function sr(e){if(L.length){const t=[...new Set(L)];if(L.length=0,P){P.push(...t);return}for(P=t,process.env.NODE_ENV!=="production"&&(e=e||new Map),P.sort((n,o)=>ee(n)-ee(o)),z=0;z<P.length;z++)process.env.NODE_ENV!=="production"&&$t(e,P[z])||P[z]();P=null,z=0}}const ee=e=>e.id==null?1/0:e.id,ir=(e,t)=>{const n=ee(e)-ee(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Rt(e){We=!1,_e=!0,process.env.NODE_ENV!=="production"&&(e=e||new Map),C.sort(ir);const t=process.env.NODE_ENV!=="production"?n=>$t(e,n):Ze;try{for(j=0;j<C.length;j++){const n=C[j];if(n&&n.active!==!1){if(process.env.NODE_ENV!=="production"&&t(n))continue;J(n,null,14)}}}finally{j=0,C.length=0,sr(e),_e=!1,Ue=null,(C.length||L.length)&&Rt(e)}}function $t(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>nr){const o=t.ownerInstance,r=o&&Qt(o.type);return E(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}const te=new Set;process.env.NODE_ENV!=="production"&&(ve().__VUE_HMR_RUNTIME__={createRecord:Je(cr),rerender:Je(lr),reload:Je(ur)});const ge=new Map;function cr(e,t){return ge.has(e)?!1:(ge.set(e,{initialDef:ne(t),instances:new Set}),!0)}function ne(e){return Zt(e)?e.__vccOpts:e}function lr(e,t){const n=ge.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,ne(o.type).render=t),o.renderCache=[],o.update()}))}function ur(e,t){const n=ge.get(e);if(!n)return;t=ne(t),Dt(n.initialDef,t);const o=[...n.instances];for(const r of o){const s=ne(r.type);te.has(s)||(s!==n.initialDef&&Dt(s,t),te.add(s)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(te.add(s),r.ceReload(t.styles),te.delete(s)):r.parent?Be(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}It(()=>{for(const r of o)te.delete(ne(r.type))})}function Dt(e,t){I(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function Je(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let R=null,ar=null;function Lr(){}const fr=e=>e.__isSuspense;function pr(e,t){t&&t.pendingBranch?h(e)?t.effects.push(...e):t.effects.push(e):It(e)}const me={};function dr(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:i}=b){var c;process.env.NODE_ENV!=="production"&&!t&&(n!==void 0&&E('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&E('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=g=>{E("Invalid watch source: ",g,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},a=gn()===((c=Q)==null?void 0:c.scope)?Q:null;let d,l=!1,f=!1;if(x(e)?(d=()=>e.value,l=Ae(e)):W(e)?(d=()=>e,o=!0):h(e)?(f=!0,l=e.some(g=>W(g)||Ae(g)),d=()=>e.map(g=>{if(x(g))return g.value;if(W(g))return Y(g);if(w(g))return J(g,a,2);process.env.NODE_ENV!=="production"&&u(g)})):w(e)?t?d=()=>J(e,a,2):d=()=>{if(!(a&&a.isUnmounted))return _&&_(),He(e,a,3,[v])}:(d=Ze,process.env.NODE_ENV!=="production"&&u(e)),t&&o){const g=d;d=()=>Y(g())}let _,v=g=>{_=$.onStop=()=>{J(g,a,4)}},y=f?new Array(e.length).fill(me):me;const q=()=>{if($.active)if(t){const g=$.run();(o||l||(f?g.some((Jr,qr)=>ie(Jr,y[qr])):ie(g,y)))&&(_&&_(),He(t,a,3,[g,y===me?void 0:f&&y[0]===me?[]:y,v]),y=g)}else $.run()};q.allowRecurse=!!t;let Se;r==="sync"?Se=q:r==="post"?Se=()=>At(q,a&&a.suspense):(q.pre=!0,a&&(q.id=a.uid),Se=()=>Be(q));const $=new wn(d,Se);return process.env.NODE_ENV!=="production"&&($.onTrack=s,$.onTrigger=i),t?n?q():y=$.run():r==="post"?At($.run.bind($),a&&a.suspense):$.run(),()=>{$.stop(),a&&a.scope&&nn(a.scope.effects,$)}}function hr(e,t,n){const o=this.proxy,r=D(e)?e.includes(".")?_r(o,e):()=>o[e]:e.bind(o,o);let s;w(t)?s=t:(s=t.handler,n=t);const i=Q;Yt(this);const c=dr(r,s.bind(o),n);return i?Yt(i):Tr(),c}function _r(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Y(e,t){if(!O(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),x(e))Y(e.value,t);else if(h(e))for(let n=0;n<e.length;n++)Y(e[n],t);else if(on(e)||G(e))e.forEach(n=>{Y(n,t)});else if(ln(e))for(const n in e)Y(e[n],t);return e}const gr=e=>!!e.type.__asyncLoader,mr=Symbol.for("v-ndc");function Er(e,t,n={},o,r){if(R.isCE||R.parent&&gr(R.parent)&&R.parent.isCE)return t!=="default"&&(n.name=t),Le("slot",n,o&&o());let s=e[t];process.env.NODE_ENV!=="production"&&s&&s.length>1&&(E("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),s=()=>[]),s&&s._c&&(s._d=!1),zt();const i=s&&Ct(s(n)),c=Rr(we,{key:n.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function Ct(e){return e.some(t=>Ht(t)?!(t.type===jt||t.type===we&&!Ct(t.children)):!0)?e:null}const qe=e=>e?Pr(e)?Mr(e)||e.proxy:qe(e.parent):null,re=I(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>process.env.NODE_ENV!=="production"?he(e.props):e.props,$attrs:e=>process.env.NODE_ENV!=="production"?he(e.attrs):e.attrs,$slots:e=>process.env.NODE_ENV!=="production"?he(e.slots):e.slots,$refs:e=>process.env.NODE_ENV!=="production"?he(e.refs):e.refs,$parent:e=>qe(e.parent),$root:e=>qe(e.root),$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>e.f||(e.f=()=>Be(e.update)),$nextTick:e=>e.n||(e.n=rr.bind(e.proxy)),$watch:e=>hr.bind(e)}),wr=e=>e==="_"||e==="$",Ge=(e,t)=>e!==b&&!e.__isScriptSetup&&m(e,t),Nr={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:c,appContext:u}=e;if(process.env.NODE_ENV!=="production"&&t==="__isVue")return!0;let a;if(t[0]!=="$"){const _=i[t];if(_!==void 0)switch(_){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Ge(o,t))return i[t]=1,o[t];if(r!==b&&m(r,t))return i[t]=2,r[t];if((a=e.propsOptions[0])&&m(a,t))return i[t]=3,s[t];if(n!==b&&m(n,t))return i[t]=4,n[t];i[t]=0}}const d=re[t];let l,f;if(d)return t==="$attrs"?(V(e,"get",t),process.env.NODE_ENV!=="production"&&void 0):process.env.NODE_ENV!=="production"&&t==="$slots"&&V(e,"get",t),d(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==b&&m(n,t))return i[t]=4,n[t];if(f=u.config.globalProperties,m(f,t))return f[t];process.env.NODE_ENV!=="production"&&R&&(!D(t)||t.indexOf("__v")!==0)&&(r!==b&&wr(t[0])&&m(r,t)?E(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===R&&E(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return Ge(r,t)?(r[t]=n,!0):process.env.NODE_ENV!=="production"&&r.__isScriptSetup&&m(r,t)?(E(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==b&&m(o,t)?(o[t]=n,!0):m(e.props,t)?(process.env.NODE_ENV!=="production"&&E(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(process.env.NODE_ENV!=="production"&&E(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(process.env.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,value:n}):s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let c;return!!n[i]||e!==b&&m(e,i)||Ge(t,i)||(c=s[0])&&m(c,i)||m(o,i)||m(re,i)||m(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:m(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};process.env.NODE_ENV!=="production"&&(Nr.ownKeys=e=>(E("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function Tt(e){return h(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function br(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let u;return c?u=c:!r.length&&!n&&!o?u=t:(u={},r.length&&r.forEach(a=>Ee(u,a,i,!0)),Ee(u,t,i)),O(t)&&s.set(t,u),u}function Ee(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Ee(e,s,n,!0),r&&r.forEach(i=>Ee(e,i,n,!0));for(const i in t)if(o&&i==="expose")process.env.NODE_ENV!=="production"&&E('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Or[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Or={data:Pt,props:Ft,emits:Ft,methods:oe,computed:oe,beforeCreate:N,created:N,beforeMount:N,mounted:N,beforeUpdate:N,updated:N,beforeDestroy:N,beforeUnmount:N,destroyed:N,unmounted:N,activated:N,deactivated:N,errorCaptured:N,serverPrefetch:N,components:oe,directives:oe,watch:Vr,provide:Pt,inject:Sr};function Pt(e,t){return t?e?function(){return I(w(e)?e.call(this,this):e,w(t)?t.call(this,this):t)}:t:e}function Sr(e,t){return oe(Mt(e),Mt(t))}function Mt(e){if(h(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function N(e,t){return e?[...new Set([].concat(e,t))]:t}function oe(e,t){return e?I(Object.create(null),e,t):t}function Ft(e,t){return e?h(e)&&h(t)?[...new Set([...e,...t])]:I(Object.create(null),Tt(e),Tt(t??{})):t}function Vr(e,t){if(!e)return t;if(!t)return e;const n=I(Object.create(null),e);for(const o in t)n[o]=N(e[o],t[o]);return n}const At=pr,xr=e=>e.__isTeleport,we=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ne=[];let T=null;function zt(e=!1){Ne.push(T=e?null:[])}function yr(){Ne.pop(),T=Ne[Ne.length-1]||null}function Kt(e){return e.dynamicChildren=T||kt,yr(),T&&T.push(e),e}function Ir(e,t,n,o,r,s){return Kt(Bt(e,t,n,o,r,s,!0))}function Rr(e,t,n,o,r){return Kt(Le(e,t,n,o,r,!0))}function Ht(e){return e?e.__v_isVNode===!0:!1}const $r=(...e)=>Jt(...e),Wt="__vInternal",Ut=({key:e})=>e??null,be=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?D(e)||x(e)||w(e)?{i:R,r:e,k:t,f:!!n}:e:null);function Bt(e,t=null,n=null,o=0,r=null,s=e===we?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ut(t),ref:t&&be(t),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:R};return c?(Ye(u,n),s&128&&e.normalize(u)):n&&(u.shapeFlag|=D(n)?8:16),process.env.NODE_ENV!=="production"&&u.key!==u.key&&E("VNode created with invalid key (NaN). VNode type:",u.type),!i&&T&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&T.push(u),u}const Le=process.env.NODE_ENV!=="production"?$r:Jt;function Jt(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===mr)&&(process.env.NODE_ENV!=="production"&&!e&&E(`Invalid vnode type when creating vnode: ${e}.`),e=jt),Ht(e)){const c=Oe(e,t,!0);return n&&Ye(c,n),!s&&T&&(c.shapeFlag&6?T[T.indexOf(e)]=c:T.push(c)),c.patchFlag|=-2,c}if(Zt(e)&&(e=e.__vccOpts),t){t=Dr(t);let{class:c,style:u}=t;c&&!D(c)&&(t.class=Ie(c)),O(u)&&(je(u)&&!h(u)&&(u=I({},u)),t.style=ye(u))}const i=D(e)?1:fr(e)?128:xr(e)?64:O(e)?4:w(e)?2:0;return process.env.NODE_ENV!=="production"&&i&4&&je(e)&&(e=p(e),E("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Bt(e,t,n,o,r,i,s,!0)}function Dr(e){return e?je(e)||Wt in e?I({},e):e:null}function Oe(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:i}=e,c=t?Cr(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ut(c),ref:t&&t.ref?n&&r?h(r)?r.concat(be(t)):[r,be(t)]:be(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:process.env.NODE_ENV!=="production"&&s===-1&&h(i)?i.map(qt):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Oe(e.ssContent),ssFallback:e.ssFallback&&Oe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function qt(e){const t=Oe(e);return h(e.children)&&(t.children=e.children.map(qt)),t}function Gt(e=" ",t=0){return Le(vr,null,e,t)}function Ye(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(h(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Ye(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Wt in t)?t._ctx=R:r===3&&R&&(R.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else w(t)?(t={default:t,_ctx:R},n=32):(t=String(t),o&64?(n=16,t=[Gt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Ie([t.class,o.class]));else if(r==="style")t.style=ye([t.style,o.style]);else if(tn(r)){const s=t[r],i=o[r];i&&s!==i&&!(h(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}let Q=null,Qe,X,Lt="__VUE_INSTANCE_SETTERS__";(X=ve()[Lt])||(X=ve()[Lt]=[]),X.push(e=>Q=e),Qe=e=>{X.length>1?X.forEach(t=>t(e)):X[0](e)};const Yt=e=>{Qe(e),e.scope.on()},Tr=()=>{Q&&Q.scope.off(),Qe(null)};function Pr(e){return e.vnode.shapeFlag&4}function Mr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ln(Jn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in re)return re[n](e)},has(t,n){return n in t||n in re}}))}const Fr=/(?:^|[-_])(\w)/g,Ar=e=>e.replace(Fr,t=>t.toUpperCase()).replace(/[-_]/g,"");function Qt(e,t=!0){return w(e)?e.displayName||e.name:e.name||t&&e.__name}function Xt(e,t,n=!1){let o=Qt(t);if(!o&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=s=>{for(const i in s)if(s[i]===t)return i};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?Ar(o):n?"App":"Anonymous"}function Zt(e){return w(e)&&"__vccOpts"in e}function Xe(e){return!!(e&&e.__v_isShallow)}function jr(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},r={header(l){return O(l)?l.__isVue?["div",e,"VueInstance"]:x(l)?["div",{},["span",e,d(l)],"<",c(l.value),">"]:W(l)?["div",{},["span",e,Xe(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${U(l)?" (readonly)":""}`]:U(l)?["div",{},["span",e,Xe(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...s(l.$)]}};function s(l){const f=[];l.type.props&&l.props&&f.push(i("props",p(l.props))),l.setupState!==b&&f.push(i("setup",l.setupState)),l.data!==b&&f.push(i("data",p(l.data)));const _=u(l,"computed");_&&f.push(i("computed",_));const v=u(l,"inject");return v&&f.push(i("injected",v)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),f}function i(l,f){return f=I({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(_=>["div",{},["span",o,_+": "],c(f[_],!1)])]]:["span",{}]}function c(l,f=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",o,l]:O(l)?["object",{object:f?p(l):l}]:["span",n,String(l)]}function u(l,f){const _=l.type;if(w(_))return;const v={};for(const y in l.ctx)a(_,y,f)&&(v[y]=l.ctx[y]);return v}function a(l,f,_){const v=l[_];if(h(v)&&v.includes(f)||O(v)&&f in v||l.extends&&a(l.extends,f,_)||l.mixins&&l.mixins.some(y=>a(y,f,_)))return!0}function d(l){return Xe(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}function zr(){jr()}process.env.NODE_ENV!=="production"&&zr();const Yr="",Kr=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Hr={},Wr={class:"lv-button"};function Ur(e,t,n,o,r,s){return zt(),Ir("button",Wr,[Er(e.$slots,"default",{},()=>[Gt(" this is button ")],!0)])}const Br=Kr(Hr,[["render",Ur],["__scopeId","data-v-14d868c1"]]);return{intall:(e,t)=>{console.log("🚀 ~ file: index.js:5 ~ options:",t),e.component("vue-button",Br)}}});