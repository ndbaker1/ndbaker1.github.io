import{S as Je,i as ze,s as Fe,a as Ke,e as q,c as xe,b as K,g as ie,t as V,d as le,f as B,h as J,j as Ge,o as we,k as We,l as He,m as Me,n as me,p as T,q as Xe,r as Ye,u as Qe,v as G,w as ke,x as W,y as H,z as je}from"./chunks/index-c2abf47a.js";import{g as Ue,f as Ae,s as F,a as ye,b as Ze,i as et}from"./chunks/singletons-bf376c2b.js";const tt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),rt=function(n,e){return new URL(n,e).href},Ne={},Q=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=rt(o,l),o in Ne)return;Ne[o]=!0;const u=o.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":tt,u||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),u)return new Promise((w,p)=>{c.addEventListener("load",w),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class _e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Te{constructor(e,t){this.status=e,this.location=t}}function nt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function at(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const st=["href","pathname","search","searchParams","toString","toJSON"];function ot(n,e){const t=new URL(n);for(const l of st){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,u)=>u(n,o),it(t),t}function it(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function lt(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:e?.method||"GET")!=="GET"){const l=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;oe.delete(l)}return Ee(n,e)};const oe=new Map;function ct(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${lt(t.body)}"]`);const u=document.querySelector(o);if(u?.textContent){const{body:r,...c}=JSON.parse(u.textContent),w=u.getAttribute("data-ttl");return w&&oe.set(e,{body:r,init:c,ttl:1e3*Number(w)}),Promise.resolve(new Response(r,c))}return Ee(n,t)}function ft(n,e){const t=oe.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(n)}return Ee(n,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function dt(n){const e=[],t=[];let l=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(pt).map((u,r,c)=>{const w=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const b=r===c.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((R,v)=>{if(v%2){const D=ut.exec(R);if(!D)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,O,z]=D;return e.push(O),t.push(z),U?"(.*?)":"([^/]+?)"}return b&&R.includes(".")&&(l=!1),R.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function pt(n){return!/^\([^)]+\)$/.test(n)}function ht(n,e,t,l){const o={};for(let u=0;u<e.length;u+=1){const r=e[u],c=t[u],w=n[u+1]||"";if(c){const p=l[c];if(!p)throw new Error(`Missing "${c}" param matcher`);if(!p(w))return}o[r]=w}return o}function mt(n,e,t,l){const o=new Set(e);return Object.entries(t).map(([c,[w,p,b]])=>{const{pattern:R,names:v,types:D}=dt(c),U={id:c,exec:O=>{const z=R.exec(O);if(z)return ht(z,v,D,l)},errors:[1,...b||[]].map(O=>n[O]),layouts:[0,...p||[]].map(r),leaf:u(w)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function u(c){const w=c<0;return w&&(c=~c),[w,n[c]]}function r(c){return c===void 0?c:[o.has(c),n[c]]}}function _t(n){let e,t,l;var o=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return o&&(e=new o(u(n))),{c(){e&&G(e.$$.fragment),t=q()},l(r){e&&ke(e.$$.fragment,r),t=q()},m(r,c){e&&W(e,r,c),K(r,t,c),l=!0},p(r,c){const w={};if(c&4&&(w.data=r[2]),c&2&&(w.form=r[1]),o!==(o=r[0][0])){if(e){ie();const p=e;V(p.$$.fragment,1,0,()=>{H(p,1)}),le()}o?(e=new o(u(r)),G(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){l||(e&&B(e.$$.fragment,r),l=!0)},o(r){e&&V(e.$$.fragment,r),l=!1},d(r){r&&J(t),e&&H(e,r)}}}function gt(n){let e,t,l;var o=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[wt]},$$scope:{ctx:r}}}}return o&&(e=new o(u(n))),{c(){e&&G(e.$$.fragment),t=q()},l(r){e&&ke(e.$$.fragment,r),t=q()},m(r,c){e&&W(e,r,c),K(r,t,c),l=!0},p(r,c){const w={};if(c&4&&(w.data=r[2]),c&523&&(w.$$scope={dirty:c,ctx:r}),o!==(o=r[0][0])){if(e){ie();const p=e;V(p.$$.fragment,1,0,()=>{H(p,1)}),le()}o?(e=new o(u(r)),G(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){l||(e&&B(e.$$.fragment,r),l=!0)},o(r){e&&V(e.$$.fragment,r),l=!1},d(r){r&&J(t),e&&H(e,r)}}}function wt(n){let e,t,l;var o=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return o&&(e=new o(u(n))),{c(){e&&G(e.$$.fragment),t=q()},l(r){e&&ke(e.$$.fragment,r),t=q()},m(r,c){e&&W(e,r,c),K(r,t,c),l=!0},p(r,c){const w={};if(c&8&&(w.data=r[3]),c&2&&(w.form=r[1]),o!==(o=r[0][1])){if(e){ie();const p=e;V(p.$$.fragment,1,0,()=>{H(p,1)}),le()}o?(e=new o(u(r)),G(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){l||(e&&B(e.$$.fragment,r),l=!0)},o(r){e&&V(e.$$.fragment,r),l=!1},d(r){r&&J(t),e&&H(e,r)}}}function De(n){let e,t=n[5]&&Ce(n);return{c(){e=We("div"),t&&t.c(),this.h()},l(l){e=He(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=Me(e);t&&t.l(o),o.forEach(J),this.h()},h(){me(e,"id","svelte-announcer"),me(e,"aria-live","assertive"),me(e,"aria-atomic","true"),T(e,"position","absolute"),T(e,"left","0"),T(e,"top","0"),T(e,"clip","rect(0 0 0 0)"),T(e,"clip-path","inset(50%)"),T(e,"overflow","hidden"),T(e,"white-space","nowrap"),T(e,"width","1px"),T(e,"height","1px")},m(l,o){K(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=Ce(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&J(e),t&&t.d()}}}function Ce(n){let e;return{c(){e=Xe(n[6])},l(t){e=Ye(t,n[6])},m(t,l){K(t,e,l)},p(t,l){l&64&&Qe(e,t[6])},d(t){t&&J(e)}}}function yt(n){let e,t,l,o,u;const r=[gt,_t],c=[];function w(b,R){return b[0][1]?0:1}e=w(n),t=c[e]=r[e](n);let p=n[4]&&De(n);return{c(){t.c(),l=Ke(),p&&p.c(),o=q()},l(b){t.l(b),l=xe(b),p&&p.l(b),o=q()},m(b,R){c[e].m(b,R),K(b,l,R),p&&p.m(b,R),K(b,o,R),u=!0},p(b,[R]){let v=e;e=w(b),e===v?c[e].p(b,R):(ie(),V(c[v],1,1,()=>{c[v]=null}),le(),t=c[e],t?t.p(b,R):(t=c[e]=r[e](b),t.c()),B(t,1),t.m(l.parentNode,l)),b[4]?p?p.p(b,R):(p=De(b),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(b){u||(B(t),u=!0)},o(b){V(t),u=!1},d(b){c[e].d(b),b&&J(l),p&&p.d(b),b&&J(o)}}}function bt(n,e,t){let{stores:l}=e,{page:o}=e,{components:u}=e,{form:r}=e,{data_0:c=null}=e,{data_1:w=null}=e;Ge(l.page.notify);let p=!1,b=!1,R=null;return we(()=>{const v=l.page.subscribe(()=>{p&&(t(5,b=!0),t(6,R=document.title||"untitled page"))});return t(4,p=!0),v}),n.$$set=v=>{"stores"in v&&t(7,l=v.stores),"page"in v&&t(8,o=v.page),"components"in v&&t(0,u=v.components),"form"in v&&t(1,r=v.form),"data_0"in v&&t(2,c=v.data_0),"data_1"in v&&t(3,w=v.data_1)},n.$$.update=()=>{n.$$.dirty&384&&l.page.set(o)},[u,r,c,w,p,b,R,l,o]}class vt extends Je{constructor(e){super(),ze(this,e,bt,yt,Fe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const kt={},ce=[()=>Q(()=>import("./chunks/0-68cebe8c.js"),["chunks/0-68cebe8c.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-aec06af9.js","assets/_layout-9477e5ae.css","chunks/index-c2abf47a.js","chunks/theme-7bb6b26f.js"],import.meta.url),()=>Q(()=>import("./chunks/1-e53b284f.js"),["chunks/1-e53b284f.js","components/error.svelte-a562ed64.js","chunks/index-c2abf47a.js","chunks/singletons-bf376c2b.js","chunks/index-0f11b0b5.js"],import.meta.url),()=>Q(()=>import("./chunks/2-208f22f2.js"),["chunks/2-208f22f2.js","components/pages/_page.svelte-e784fc3a.js","assets/_page-474c571b.css","chunks/index-c2abf47a.js","chunks/portfolio-aa682267.js","chunks/index-0f11b0b5.js","chunks/theme-7bb6b26f.js"],import.meta.url),()=>Q(()=>import("./chunks/3-bcb6fd5b.js"),["chunks/3-bcb6fd5b.js","components/pages/resume/_page.svelte-67d98a71.js","assets/_page-1ac7e386.css","chunks/index-c2abf47a.js","chunks/portfolio-aa682267.js"],import.meta.url)],Et=[],St={"":[2],resume:[3]},Rt={handleError:({error:n})=>(console.error(n),{message:"Internal Error"})},Lt="/__data.js",Be="sveltekit:scroll",C="sveltekit:index",ne=mt(ce,Et,St,kt),be=ce[0],ve=ce[1];be();ve();let Z={};try{Z=JSON.parse(sessionStorage[Be])}catch{}function ge(n){Z[n]=ye()}function $t({target:n,base:e,trailing_slash:t}){const l=[];let o=null;const u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},c=!1,w=!0,p=!1,b=!1,R,v=history.state?.[C];v||(v=Date.now(),history.replaceState({...history.state,[C]:v},"",location.href));const D=Z[v];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let U=!1,O,z,ee;async function Se(){ee=ee||Promise.resolve(),await ee,ee=null;const a=new URL(location.href),i=pe(a,!0);o=null,await Le(i,a,[])}async function fe(a,{noscroll:i=!1,replaceState:d=!1,keepfocus:s=!1,state:f={}},m,_){return typeof a=="string"&&(a=new URL(a,Ue(document))),he({url:a,scroll:i?ye():null,keepfocus:s,redirect_chain:m,details:{state:f,replaceState:d},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Re(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:i.id,promise:Oe(i)},o.promise}async function Le(a,i,d,s,f={},m){z=f;let _=a&&await Oe(a);if(!_&&i.origin===location.origin&&i.pathname===location.pathname&&(_=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!_)return await X(i),!1;if(i=a?.url||i,z!==f)return!1;if(_.type==="redirect")if(d.length>10||d.includes(i.pathname))_=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(_.location,i).href,{},[...d,i.pathname],f),!1;else _.props?.page?.status>=400&&await F.updated.check()&&await X(i);if(l.length=0,b=!1,p=!0,s&&s.details){const{details:g}=s,E=g.replaceState?0:1;g.state[C]=v+=E,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(o=null,c){r=_.state,_.props.page&&(_.props.page.url=i);const g=se();R.$set(_.props),g()}else $e(_);if(s){const{scroll:g,keepfocus:E}=s;if(!E){const y=document.body,k=y.getAttribute("tabindex");y.tabIndex=-1,y.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),k!==null?y.setAttribute("tabindex",k):y.removeAttribute("tabindex")}if(await je(),w){const y=i.hash&&document.getElementById(i.hash.slice(1));g?scrollTo(g.x,g.y):y?y.scrollIntoView():scrollTo(0,0)}}else await je();w=!0,_.props.page&&(O=_.props.page),m&&m(),p=!1}function $e(a){r=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),O=a.props.page;const d=se();R=new vt({target:n,props:{...a.props,stores:F},hydrate:!0}),d();const s={from:null,to:ae("to",{params:r.params,routeId:r.route?.id??null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(f=>f(s)),c=!0}async function M({url:a,params:i,branch:d,status:s,error:f,route:m,form:_}){const g=d.filter(Boolean),E={type:"loaded",state:{url:a,params:i,branch:d,error:f,route:m},props:{components:g.map(h=>h.node.component)}};_!==void 0&&(E.props.form=_);let y={},k=!O;for(let h=0;h<g.length;h+=1){const $=g[h];y={...y,...$.data},(k||!r.branch.some(L=>L===$))&&(E.props[`data_${h}`]=y,k=k||Object.keys($.data??{}).length>0)}if(k||(k=Object.keys(O.data).length!==Object.keys(y).length),!r.url||a.href!==r.url.href||r.error!==f||k){E.props.page={error:f,params:i,routeId:m&&m.id,status:s,url:a,data:k?y:O.data};const h=($,L)=>{Object.defineProperty(E.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${L}`)}})};h("origin","origin"),h("path","pathname"),h("query","searchParams")}return E}async function ue({loader:a,parent:i,url:d,params:s,routeId:f,server_data_node:m}){let _=null;const g={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if(E.shared?.load){let y=function(...h){for(const $ of h){const{href:L}=new URL($,d);g.dependencies.add(L)}};const k={};for(const h in s)Object.defineProperty(k,h,{get(){return g.params.add(h),s[h]},enumerable:!0});const j={routeId:f,params:k,data:m?.data??null,url:ot(d,()=>{g.url=!0}),async fetch(h,$){let L;typeof h=="string"?L=h:(L=h.url,$={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...$});const N=new URL(L,d).href;return y(N),c?ft(N,$):ct(L,N,$)},setHeaders:()=>{},depends:y,parent(){return g.parent=!0,i()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=await E.shared.load.call(null,j)??null}return{node:E,loader:a,server:m,shared:E.shared?.load?{type:"data",data:_,uses:g}:null,data:_??m?.data??null}}function Pe(a,i,d){if(b)return!0;if(!d)return!1;if(d.parent&&i||a.url&&d.url)return!0;for(const s of a.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(l.some(f=>f(new URL(s))))return!0;return!1}function de(a,i){return a?.type==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,url:!!a.uses.url}}:a?.type==="skip"?i??null:null}async function Oe({id:a,invalidating:i,url:d,params:s,route:f}){if(o?.id===a)return o.promise;const{errors:m,layouts:_,leaf:g}=f,E=r.url&&{url:a!==r.url.pathname+r.url.search,params:Object.keys(s).filter(S=>r.params[S]!==s[S])},y=[..._,g];m.forEach(S=>S?.().catch(()=>{})),y.forEach(S=>S?.[1]().catch(()=>{}));let k=null;const j=y.reduce((S,P,A)=>{const I=r.branch[A],Y=!!P?.[0]&&(I?.loader!==P[1]||Pe(E,S.some(Boolean),I.server?.uses));return S.push(Y),S},[]);if(j.some(Boolean)){try{k=await qe(d,j)}catch(S){return te({status:500,error:S,url:d,routeId:f.id})}if(k.type==="redirect")return k}const h=k?.nodes;let $=!1;const L=y.map(async(S,P)=>{if(!S)return;const A=r.branch[P],I=h?.[P];if((!I||I.type==="skip")&&S[1]===A?.loader&&!Pe(E,$,A.shared?.uses))return A;if($=!0,I?.type==="error")throw I;return ue({loader:S[1],url:d,params:s,routeId:f.id,parent:async()=>{const x={};for(let re=0;re<P;re+=1)Object.assign(x,(await L[re])?.data);return x},server_data_node:de(I===void 0&&S[0]?{type:"skip"}:I??null,A?.server)})});for(const S of L)S.catch(()=>{});const N=[];for(let S=0;S<y.length;S+=1)if(y[S])try{N.push(await L[S])}catch(P){if(P instanceof Te)return{type:"redirect",location:P.location};let A=500,I;for(h?.includes(P)?(A=P.status??A,I=P.error):P instanceof _e?(A=P.status,I=P.body):I=Ve(P,{params:s,url:d,routeId:f.id});S--;)if(m[S]){let Y,x=S;for(;!N[x];)x-=1;try{return Y={node:await m[S](),loader:m[S],data:{},server:null,shared:null},await M({url:d,params:s,branch:N.slice(0,x+1).concat(Y),status:A,error:I,route:f})}catch{continue}}await X(d);return}else N.push(void 0);return await M({url:d,params:s,branch:N,status:200,error:null,route:f,form:i?void 0:null})}async function te({status:a,error:i,url:d,routeId:s}){const f={},m=await be();let _=null;if(m.server)try{const y=await qe(d,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;_=y.nodes[0]??null}catch{await X(d);return}const g=await ue({loader:be,url:d,params:f,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(_)}),E={node:await ve(),loader:ve,shared:null,server:null,data:null};return await M({url:d,params:f,branch:[g,E],status:a,error:i instanceof _e?i.body:Ve(i,{url:d,params:f,routeId:null}),route:null})}function pe(a,i){if(Ie(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ne){const f=s.exec(d);if(f){const m=new URL(a.origin+nt(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:i,route:s,params:at(f),url:m}}}}function Ie(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:d,redirect_chain:s,details:f,type:m,delta:_,nav_token:g,accepted:E,blocked:y}){let k=!1;const j=pe(a,!1),h={from:ae("from",{params:r.params,routeId:r.route?.id??null,url:r.url}),to:ae("to",{params:j?.params??null,routeId:j?.route.id??null,url:a}),type:m};_!==void 0&&(h.delta=_);const $={...h,cancel:()=>{k=!0}};if(u.before_navigate.forEach(L=>L($)),k){y();return}ge(v),E(),c&&F.navigating.set(h),await Le(j,a,s,{scroll:i,keepfocus:d,details:f},g,()=>{u.after_navigate.forEach(L=>L(h)),F.navigating.set(null)})}function X(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{we(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{we(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(p||!c)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")l.push(a);else{const{href:i}=new URL(a,location.href);l.push(d=>d.href===i)}return Se()},invalidateAll:()=>(b=!0,Se()),prefetch:async a=>{const i=new URL(a,Ue(document));await Re(i)},prefetch_routes:async a=>{const d=(a?ne.filter(s=>a.some(f=>s.exec(f))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(f=>f?.[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:d,route:s}=r;if(!s)return;let f=r.branch.length;for(;f--;)if(s.errors[f]){let m,_=f;for(;!d[_];)_-=1;try{m={node:await s.errors[f](),loader:s.errors[f],data:{},server:null,shared:null};const g=await M({url:i,params:r.params,branch:d.slice(0,_+1).concat(m),status:500,error:a.error,route:s});r=g.state;const E=se();R.$set(g.props),E();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==O.status&&(i.page={...O,status:a.status});const d=se();R.$set(i),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{let f=!1;const m={from:ae("from",{params:r.params,routeId:r.route?.id??null,url:r.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(_=>_(m)),f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ge(v);try{sessionStorage[Be]=JSON.stringify(Z)}catch{}}});const a=s=>{const{url:f,options:m}=Ae(s);if(f&&m.prefetch){if(Ie(f))return;Re(f)}};let i;const d=s=>{clearTimeout(i),i=setTimeout(()=>{s.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:f,url:m,options:_}=Ae(s);if(!f||!m)return;const g=f instanceof SVGAElement;if(!g&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||_.reload||(g?f.target.baseVal:f.target))return;const[y,k]=m.href.split("#");if(k!==void 0&&y===location.href.split("#")[0]){U=!0,ge(v),r.url=m,F.page.set({...O,url:m}),F.page.notify();return}he({url:m,scroll:_.noscroll?ye():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===v)return;const f=s.state[C]-v;he({url:new URL(location.href),scroll:Z[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=s.state[C]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{U&&(U=!1,history.replaceState({...history.state,[C]:++v},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&F.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:d,params:s,routeId:f,data:m,form:_})=>{const g=new URL(location.href);let E;try{const y=d.map(async(k,j)=>{const h=m[j];return ue({loader:ce[k],url:g,params:s,routeId:f,parent:async()=>{const $={};for(let L=0;L<j;L+=1)Object.assign($,(await y[L]).data);return $},server_data_node:de(h)})});E=await M({url:g,params:s,branch:await Promise.all(y),status:a,error:i,form:_,route:ne.find(k=>k.id===f)??null})}catch(y){const k=y;if(k instanceof Te){await X(new URL(y.location,location.href));return}E=await te({status:k instanceof _e?k.status:500,error:k,url:g,routeId:f})}$e(E)}}}let Pt=1;async function qe(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Lt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Pt++)),await Q(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}function Ve(n,e){return Rt.handleError({error:n,event:e})??{message:e.routeId?"Internal Error":"Not Found"}}const Ot=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(n,e){for(const t of Ot)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function se(){return()=>{}}async function Ut({env:n,hydrate:e,paths:t,target:l,trailing_slash:o}){Ze(t);const u=$t({target:l,base:t.base,trailing_slash:o});et({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Ut as start};
