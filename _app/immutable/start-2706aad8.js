import{S as Ze,i as Qe,s as xe,a as et,e as q,c as tt,b as G,g as de,t as V,d as pe,f as B,h as F,j as nt,o as $e,k as rt,l as at,m as ot,n as Ee,p as D,q as st,r as it,u as lt,v as M,w as H,x as Ae,y as Y,z as X,A as ie}from"./chunks/index-cc086c8b.js";import{g as Je,f as ze,s as z,a as Oe,b as ct,i as ft}from"./chunks/singletons-0d8b9312.js";function ut(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){return r.split("%25").map(decodeURI).join("%25")}function pt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(r,e){const n=new URL(r);for(const s of ht){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return _t(n),n}function _t(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const gt="/__data.json";function wt(r){return r.replace(/\/$/,"")+gt}function yt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:e?.method||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;te.delete(s)}return he(r,e)};const te=new Map;function bt(r,e){const n=Ye(r,e),s=document.querySelector(n);if(s?.textContent){const{body:o,...c}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:o,init:c,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,c))}return he(r,e)}function vt(r,e,n){if(te.size>0){const s=Ye(r,n),o=te.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);te.delete(s)}}return he(e,n)}function Ye(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e?.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${yt(e.body)}"]`),s}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Rt(r).map((t,d,g)=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(p)return e.push(p[1]),n.push(p[2]),s.push(!1),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(_)return e.push(_[1]),n.push(_[2]),s.push(!0),"(?:/([^/]+))?";const y=d===g.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((j,O)=>{if(O%2){if(j.startsWith("x+"))return ke(String.fromCharCode(parseInt(j.slice(2),16)));if(j.startsWith("u+"))return ke(String.fromCharCode(...j.slice(2).split("-").map(Z=>parseInt(Z,16))));const T=Et.exec(j);if(!T)throw new Error(`Invalid param: ${j}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,P,re,K,ae]=T;return e.push(K),n.push(ae),s.push(!!P),re?"(.*?)":P?"([^/]*)?":"([^/]+?)"}return y&&j.includes(".")&&(o=!1),ke(j)}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function St(r){return!/^\([^)]+\)$/.test(r)}function Rt(r){return r.slice(1).split("/").filter(St)}function $t(r,{names:e,types:n,optional:s},o){const c={};for(let t=0;t<e.length;t+=1){const d=e[t],g=n[t];let p=r[t+1];if(p||!s[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(p))return}c[d]=p??""}}return c}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ot(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([d,[g,p,_]])=>{const{pattern:y,names:S,types:J,optional:j}=kt(d),O={id:d,exec:T=>{const P=y.exec(T);if(P)return $t(P,{names:S,types:J,optional:j},s)},errors:[1,..._||[]].map(T=>r[T]),layouts:[0,...p||[]].map(t),leaf:c(g)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function c(d){const g=d<0;return g&&(d=~d),[g,r[d]]}function t(d){return d===void 0?d:[o.has(d),r[d]]}}function Lt(r){let e,n,s;var o=r[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=M(o,c(r))),{c(){e&&H(e.$$.fragment),n=q()},l(t){e&&Ae(e.$$.fragment,t),n=q()},m(t,d){e&&Y(e,t,d),G(t,n,d),s=!0},p(t,d){const g={};if(d&4&&(g.data=t[2]),d&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){de();const p=e;V(p.$$.fragment,1,0,()=>{X(p,1)}),pe()}o?(e=M(o,c(t)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&F(n),e&&X(e,t)}}}function It(r){let e,n,s;var o=r[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return o&&(e=M(o,c(r))),{c(){e&&H(e.$$.fragment),n=q()},l(t){e&&Ae(e.$$.fragment,t),n=q()},m(t,d){e&&Y(e,t,d),G(t,n,d),s=!0},p(t,d){const g={};if(d&4&&(g.data=t[2]),d&523&&(g.$$scope={dirty:d,ctx:t}),o!==(o=t[0][0])){if(e){de();const p=e;V(p.$$.fragment,1,0,()=>{X(p,1)}),pe()}o?(e=M(o,c(t)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&F(n),e&&X(e,t)}}}function jt(r){let e,n,s;var o=r[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=M(o,c(r))),{c(){e&&H(e.$$.fragment),n=q()},l(t){e&&Ae(e.$$.fragment,t),n=q()},m(t,d){e&&Y(e,t,d),G(t,n,d),s=!0},p(t,d){const g={};if(d&8&&(g.data=t[3]),d&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){de();const p=e;V(p.$$.fragment,1,0,()=>{X(p,1)}),pe()}o?(e=M(o,c(t)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&F(n),e&&X(e,t)}}}function Ge(r){let e,n=r[5]&&Ke(r);return{c(){e=rt("div"),n&&n.c(),this.h()},l(s){e=at(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ot(e);n&&n.l(o),o.forEach(F),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(s,o){G(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=Ke(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&F(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=st(r[6])},l(n){e=it(n,r[6])},m(n,s){G(n,e,s)},p(n,s){s&64&&lt(e,n[6])},d(n){n&&F(e)}}}function At(r){let e,n,s,o,c;const t=[It,Lt],d=[];function g(_,y){return _[0][1]?0:1}e=g(r),n=d[e]=t[e](r);let p=r[4]&&Ge(r);return{c(){n.c(),s=et(),p&&p.c(),o=q()},l(_){n.l(_),s=tt(_),p&&p.l(_),o=q()},m(_,y){d[e].m(_,y),G(_,s,y),p&&p.m(_,y),G(_,o,y),c=!0},p(_,[y]){let S=e;e=g(_),e===S?d[e].p(_,y):(de(),V(d[S],1,1,()=>{d[S]=null}),pe(),n=d[e],n?n.p(_,y):(n=d[e]=t[e](_),n.c()),B(n,1),n.m(s.parentNode,s)),_[4]?p?p.p(_,y):(p=Ge(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){c||(B(n),c=!0)},o(_){V(n),c=!1},d(_){d[e].d(_),_&&F(s),p&&p.d(_),_&&F(o)}}}function Pt(r,e,n){let{stores:s}=e,{page:o}=e,{components:c}=e,{form:t}=e,{data_0:d=null}=e,{data_1:g=null}=e;nt(s.page.notify);let p=!1,_=!1,y=null;return $e(()=>{const S=s.page.subscribe(()=>{p&&(n(5,_=!0),n(6,y=document.title||"untitled page"))});return n(4,p=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,c=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,d=S.data_0),"data_1"in S&&n(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[c,t,d,g,p,_,y,s,o]}class Nt extends Ze{constructor(e){super(),Qe(this,e,Pt,At,xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ut=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Tt=function(r,e){return new URL(r,e).href},We={},le=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Tt(c,s),c in We)return;We[c]=!0;const t=c.endsWith(".css"),d=t?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const y=o[_];if(y.href===c&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ut,t||(p.as="script",p.crossOrigin=""),p.href=c,document.head.appendChild(p),t)return new Promise((_,y)=>{p.addEventListener("load",_),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Dt={},me=[()=>le(()=>import("./chunks/0-16d82e6b.js"),["./chunks/0-16d82e6b.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-74273004.js","./chunks/index-cc086c8b.js","./chunks/theme-7bb6b26f.js","./assets/_layout-466d74a1.css"],import.meta.url),()=>le(()=>import("./chunks/1-6a4a30c6.js"),["./chunks/1-6a4a30c6.js","./components/error.svelte-de644bf6.js","./chunks/index-cc086c8b.js","./chunks/singletons-0d8b9312.js","./chunks/index-aa612ee6.js"],import.meta.url),()=>le(()=>import("./chunks/2-ae66e598.js"),["./chunks/2-ae66e598.js","./components/pages/_page.svelte-d6eecc4d.js","./chunks/index-cc086c8b.js","./chunks/portfolio-2914def8.js","./chunks/index-aa612ee6.js","./chunks/theme-7bb6b26f.js","./assets/_page-b6b71a75.css"],import.meta.url),()=>le(()=>import("./chunks/3-36e1a0d4.js"),["./chunks/3-36e1a0d4.js","./components/pages/resume/_page.svelte-330a5cd1.js","./chunks/index-cc086c8b.js","./chunks/portfolio-2914def8.js","./assets/_page-b2d1e5da.css"],import.meta.url)],Ct=[],qt={"/":[2],"/resume":[3]},Vt={handleError:({error:r})=>{console.error(r)}};class Le{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}async function Bt(r){for(const e in r)if(typeof r[e]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([n,s])=>[n,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ft=-1,Jt=-2,zt=-3,Gt=-4,Kt=-5,Wt=-6;function Mt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,c=!1){if(o===Ft)return;if(o===zt)return NaN;if(o===Gt)return 1/0;if(o===Kt)return-1/0;if(o===Wt)return-0;if(c)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const g=new Set;n[o]=g;for(let y=1;y<t.length;y+=1)g.add(s(t[y]));break;case"Map":const p=new Map;n[o]=p;for(let y=1;y<t.length;y+=2)p.set(s(t[y]),s(t[y+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[o]=_;for(let y=1;y<t.length;y+=2)_[t[y]]=s(t[y+1]);break}else{const d=new Array(t.length);n[o]=d;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Jt&&(d[g]=s(p))}}else{const d={};n[o]=d;for(const g in t){const p=t[g];d[g]=s(p)}}return n[o]}return s(0)}const Xe="sveltekit:scroll",C="sveltekit:index",ce=Ot(me,Ct,qt,Dt),Ie=me[0],je=me[1];Ie();je();let ne={};try{ne=JSON.parse(sessionStorage[Xe])}catch{}function Se(r){ne[r]=Oe()}function Ht({target:r,base:e,trailing_slash:n}){const s=[];let o=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},d=!1,g=!1,p=!0,_=!1,y=!1,S=!1,J=!1,j,O=history.state?.[C];O||(O=Date.now(),history.replaceState({...history.state,[C]:O},"",location.href));const T=ne[O];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let P,re,K;async function ae(){K=K||Promise.resolve(),await K,K=null;const a=new URL(location.href),l=we(a,!0);o=null,await Ne(l,a,[])}async function Z(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:i=!1,state:u={},invalidateAll:h=!1},m,w){return typeof a=="string"&&(a=new URL(a,Je(document))),ye({url:a,scroll:l?Oe():null,keepfocus:i,redirect_chain:m,details:{state:u,replaceState:f},nav_token:w,accepted:()=>{h&&(J=!0)},blocked:()=>{},type:"goto"})}async function Pe(a){const l=we(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:De(l).then(f=>(f.type==="loaded"&&f.state.error&&(o=null),f))},o.promise}async function Ne(a,l,f,i,u={},h){re=u;let m=a&&await De(a);if(m||(m=await Be(l,{id:null},ee(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=a?.url||l,re!==u)return!1;if(m.type==="redirect")if(f.length>10||f.includes(l.pathname))m=await oe({status:500,error:ee(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return Z(new URL(m.location,l).href,{},[...f,l.pathname],u),!1;else m.props?.page?.status>=400&&await z.updated.check()&&await se(l);if(s.length=0,J=!1,_=!0,i&&i.details){const{details:w}=i,E=w.replaceState?0:1;w.state[C]=O+=E,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(o=null,g){t=m.state,m.props.page&&(m.props.page.url=l);const w=ue();j.$set(m.props),w()}else Ue(m);if(i){const{scroll:w,keepfocus:E}=i;if(E||Re(),await ie(),p){const b=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}}else await ie();p=!0,m.props.page&&(P=m.props.page),h&&h(),_=!1}function Ue(a){t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),P=a.props.page;const f=ue();j=new Nt({target:r,props:{...a.props,stores:z},hydrate:!0}),f();const i={from:null,to:fe("to",{params:t.params,route:{id:t.route?.id??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};c.after_navigate.forEach(u=>u(i)),g=!0}async function Q({url:a,params:l,branch:f,status:i,error:u,route:h,form:m}){const w=f.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:f,error:u,route:h},props:{components:w.map(k=>k.node.component)}};m!==void 0&&(E.props.form=m);let b={},R=!P;for(let k=0;k<w.length;k+=1){const L=w[k];b={...b,...L.data},(R||!t.branch.some(N=>N===L))&&(E.props[`data_${k}`]=b,R=R||Object.keys(L.data??{}).length>0)}if(R||(R=Object.keys(P.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==u||m!==void 0||R){E.props.page={error:u,params:l,route:h,status:i,url:a,form:m,data:R?b:P.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const k=(L,N)=>{Object.defineProperty(E.props.page,L,{get:()=>{throw new Error(`$page.${L} has been replaced by $page.url.${N}`)}})};k("origin","origin"),k("path","pathname"),k("query","searchParams")}return E}async function _e({loader:a,parent:l,url:f,params:i,route:u,server_data_node:h}){let m=null;const w={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if(E.shared?.load){let b=function(...v){for(const k of v){const{href:L}=new URL(k,f);w.dependencies.add(L)}};const R={route:{get id(){return w.route=!0,u.id}},params:new Proxy(i,{get:(v,k)=>(w.params.add(k),v[k])}),data:h?.data??null,url:mt(f,()=>{w.url=!0}),async fetch(v,k){let L;v instanceof Request?(L=v.url,k={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...k}):L=v;const N=new URL(L,f).href;return b(N),g?vt(L,N,k):bt(L,k)},setHeaders:()=>{},depends:b,parent(){return w.parent=!0,l()}};Object.defineProperties(R,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=await E.shared.load.call(null,R)??null,m=m?await Bt(m):null}return{node:E,loader:a,server:h,shared:E.shared?.load?{type:"data",data:m,uses:w}:null,data:m??h?.data??null}}function Te(a,l,f,i,u){if(J)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&f)return!0;for(const h of i.params)if(u[h]!==t.params[h])return!0;for(const h of i.dependencies)if(s.some(m=>m(new URL(h))))return!0;return!1}function ge(a,l){return a?.type==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:a?.type==="skip"?l??null:null}async function De({id:a,invalidating:l,url:f,params:i,route:u}){if(o?.id===a)return o.promise;const{errors:h,layouts:m,leaf:w}=u,E=[...m,w];h.forEach($=>$?.().catch(()=>{})),E.forEach($=>$?.[1]().catch(()=>{}));let b=null;const R=t.url?a!==t.url.pathname+t.url.search:!1,v=t.route?a!==t.route.id:!1,k=E.reduce(($,I,U)=>{const A=t.branch[U],W=!!I?.[0]&&(A?.loader!==I[1]||Te($.some(Boolean),v,R,A.server?.uses,i));return $.push(W),$},[]);if(k.some(Boolean)){try{b=await He(f,k)}catch($){return oe({status:500,error:ee($,{url:f,params:i,route:{id:u.id}}),url:f,route:u})}if(b.type==="redirect")return b}const L=b?.nodes;let N=!1;const be=E.map(async($,I)=>{if(!$)return;const U=t.branch[I],A=L?.[I];if((!A||A.type==="skip")&&$[1]===U?.loader&&!Te(N,v,R,U.shared?.uses,i))return U;if(N=!0,A?.type==="error")throw A;return _e({loader:$[1],url:f,params:i,route:u,parent:async()=>{const Fe={};for(let ve=0;ve<I;ve+=1)Object.assign(Fe,(await be[ve])?.data);return Fe},server_data_node:ge(A===void 0&&$[0]?{type:"skip"}:A??null,U?.server)})});for(const $ of be)$.catch(()=>{});const x=[];for(let $=0;$<E.length;$+=1)if(E[$])try{x.push(await be[$])}catch(I){if(I instanceof Me)return{type:"redirect",location:I.location};let U=500,A;L?.includes(I)?(U=I.status??U,A=I.error):I instanceof Le?(U=I.status,A=I.body):A=ee(I,{params:i,url:f,route:{id:u.id}});const W=await Ce($,x,h);return W?await Q({url:f,params:i,branch:x.slice(0,W.idx).concat(W.node),status:U,error:A,route:u}):await Be(f,{id:u.id},A,U)}else x.push(void 0);return await Q({url:f,params:i,branch:x,status:200,error:null,route:u,form:l?void 0:null})}async function Ce(a,l,f){for(;a--;)if(f[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:l,url:f,route:i}){const u={},h=await Ie();let m=null;if(h.server)try{const b=await He(f,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=b.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||d)&&await se(f)}const w=await _e({loader:Ie,url:f,params:u,route:i,parent:()=>Promise.resolve({}),server_data_node:ge(m)}),E={node:await je(),loader:je,shared:null,server:null,data:null};return await Q({url:f,params:u,branch:[w,E],status:a,error:l,route:null})}function we(a,l){if(qe(a))return;const f=dt(a.pathname.slice(e.length)||"/");for(const i of ce){const u=i.exec(f);if(u){const h=new URL(a.origin+ut(a.pathname,n)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:l,route:i,params:pt(u),url:h}}}}function qe(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Ve({url:a,type:l,intent:f,delta:i}){let u=!1;const h={from:fe("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:fe("to",{params:f?.params??null,route:{id:f?.route?.id??null},url:a}),willUnload:!f,type:l};i!==void 0&&(h.delta=i);const m={...h,cancel:()=>{u=!0}};return y||c.before_navigate.forEach(w=>w(m)),u?null:h}async function ye({url:a,scroll:l,keepfocus:f,redirect_chain:i,details:u,type:h,delta:m,nav_token:w,accepted:E,blocked:b}){const R=we(a,!1),v=Ve({url:a,type:h,delta:m,intent:R});if(!v){b();return}Se(O),E(),y=!0,g&&z.navigating.set(v),await Ne(R,a,i,{scroll:l,keepfocus:f,details:u},w,()=>{y=!1,c.after_navigate.forEach(k=>k(v)),z.navigating.set(null)})}async function Be(a,l,f,i){return a.origin===location.origin&&a.pathname===location.pathname&&!d?await oe({status:i,error:f,url:a,route:l}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{$e(()=>(c.after_navigate.push(a),()=>{const l=c.after_navigate.indexOf(a);c.after_navigate.splice(l,1)}))},before_navigate:a=>{$e(()=>(c.before_navigate.push(a),()=>{const l=c.before_navigate.indexOf(a);c.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return Z(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(f=>f.href===l)}return ae()},invalidateAll:()=>(J=!0,ae()),prefetch:async a=>{const l=new URL(a,Je(document));await Pe(l)},prefetch_routes:async a=>{const f=(a?ce.filter(i=>a.some(u=>i.exec(u))):ce).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u?.[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:i}=t;if(!i)return;const u=await Ce(t.branch.length,f,i.errors);if(u){const h=await Q({url:l,params:t.params,branch:f.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=h.state;const m=ue();j.$set(h.props),m(),ie().then(Re)}}else if(a.type==="redirect")Z(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...P,form:a.data,status:a.status}},f=ue();j.$set(l),f(),a.type==="success"&&ie().then(Re)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let u=!1;if(!y){const h={from:fe("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};c.before_navigate.forEach(m=>m(h))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[Xe]=JSON.stringify(ne)}catch{}}});const a=i=>{const{url:u,options:h,has:m}=ze(i);if(u&&h.prefetch&&!qe(u)){if(h.reload||m.rel_external||m.target||m.download)return;Pe(u)}};let l;const f=i=>{clearTimeout(l),l=setTimeout(()=>{i.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:h,options:m,has:w}=ze(i);if(!u||!h||!(u instanceof SVGAElement)&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||w.download)return;if(m.reload||w.rel_external||w.target){Ve({url:h,type:"link"})||i.preventDefault(),y=!0;return}const[b,R]=h.href.split("#");if(R!==void 0&&b===location.href.split("#")[0]){S=!0,Se(O),t.url=h,z.page.set({...P,url:h}),z.page.notify();return}ye({url:h,scroll:m.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===O)return;const u=i.state[C]-O;ye({url:new URL(location.href),scroll:ne[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[C]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:i,route:u,data:h,form:m})=>{d=!0;const w=new URL(location.href);let E;try{const b=f.map(async(R,v)=>{const k=h[v];return _e({loader:me[R],url:w,params:i,route:u,parent:async()=>{const L={};for(let N=0;N<v;N+=1)Object.assign(L,(await b[N]).data);return L},server_data_node:ge(k)})});E=await Q({url:w,params:i,branch:await Promise.all(b),status:a,error:l,form:m,route:ce.find(({id:R})=>R===u.id)??null})}catch(b){if(b instanceof Me){await se(new URL(b.location,location.href));return}E=await oe({status:b instanceof Le?b.status:500,error:ee(b,{url:w,params:i,route:u}),url:w,route:u})}Ue(E)}}}async function He(r,e){const n=new URL(r);n.pathname=wt(r.pathname);const s=await he(n.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return o.nodes?.forEach(c=>{c?.type==="data"&&(c.data=Mt(c.data),c.uses={dependencies:new Set(c.uses.dependencies??[]),params:new Set(c.uses.params??[]),parent:!!c.uses.parent,route:!!c.uses.route,url:!!c.uses.url})}),o}function ee(r,e){return r instanceof Le?r.body:Vt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const Yt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const n of Yt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}function Re(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function Qt({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){ct(n);const c=Ht({target:s,base:n.base,trailing_slash:o});ft({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Qt as start};
