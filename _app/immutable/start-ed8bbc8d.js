import{S as Je,i as xe,s as ze,a as Fe,e as C,c as Ke,b as z,g as ie,t as q,d as le,f as V,h as B,j as Ge,o as we,k as We,l as He,m as Me,n as me,p as N,q as Xe,r as Ye,u as Qe,v as K,w as Ee,x as G,y as W,z as Ue}from"./chunks/index-c2abf47a.js";import{g as je,f as Ae,s as x,a as ye,b as Ze,i as et}from"./chunks/singletons-a9466644.js";const tt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),nt=function(r,e){return new URL(r,e).href},Ne={},Q=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=nt(o,l),o in Ne)return;Ne[o]=!0;const u=o.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":tt,u||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),u)return new Promise((g,h)=>{c.addEventListener("load",g),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class _e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Te{constructor(e,t){this.status=e,this.location=t}}function rt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function at(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ot=["href","pathname","search","searchParams","toString","toJSON"];function st(r,e){const t=new URL(r);for(const l of ot){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,u)=>u(r,o),it(t),t}function it(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function lt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const ke=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:e?.method||"GET")!=="GET"){const l=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(l)}return ke(r,e)};const se=new Map;function ct(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${lt(t.body)}"]`);const u=document.querySelector(o);if(u?.textContent){const{body:n,...c}=JSON.parse(u.textContent),g=u.getAttribute("data-ttl");return g&&se.set(e,{body:n,init:c,ttl:1e3*Number(g)}),Promise.resolve(new Response(n,c))}return ke(r,t)}function ft(r,e){const t=se.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);se.delete(r)}return ke(r,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function dt(r){const e=[],t=[];let l=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(pt).map((u,n,c)=>{const g=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(g);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const y=n===c.length-1;return g&&"/"+g.split(/\[(.+?)\]/).map((L,b)=>{if(b%2){const T=ut.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,O,J]=T;return e.push(O),t.push(J),j?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(l=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function pt(r){return!/^\([^)]+\)$/.test(r)}function ht(r,e,t,l){const o={};for(let u=0;u<e.length;u+=1){const n=e[u],c=t[u],g=r[u+1]||"";if(c){const h=l[c];if(!h)throw new Error(`Missing "${c}" param matcher`);if(!h(g))return}o[n]=g}return o}function mt(r,e,t,l){const o=new Set(e);return Object.entries(t).map(([c,[g,h,y]])=>{const{pattern:L,names:b,types:T}=dt(c),j={id:c,exec:O=>{const J=L.exec(O);if(J)return ht(J,b,T,l)},errors:[1,...y||[]].map(O=>r[O]),layouts:[0,...h||[]].map(n),leaf:u(g)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(c){const g=c<0;return g&&(c=~c),[g,r[c]]}function n(c){return c===void 0?c:[o.has(c),r[c]]}}function _t(r){let e,t,l;var o=r[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(u(r))),{c(){e&&K(e.$$.fragment),t=C()},l(n){e&&Ee(e.$$.fragment,n),t=C()},m(n,c){e&&G(e,n,c),z(n,t,c),l=!0},p(n,c){const g={};if(c&4&&(g.data=n[2]),c&2&&(g.form=n[1]),o!==(o=n[0][0])){if(e){ie();const h=e;q(h.$$.fragment,1,0,()=>{W(h,1)}),le()}o?(e=new o(u(n)),K(e.$$.fragment),V(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){l||(e&&V(e.$$.fragment,n),l=!0)},o(n){e&&q(e.$$.fragment,n),l=!1},d(n){n&&B(t),e&&W(e,n)}}}function gt(r){let e,t,l;var o=r[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[wt]},$$scope:{ctx:n}}}}return o&&(e=new o(u(r))),{c(){e&&K(e.$$.fragment),t=C()},l(n){e&&Ee(e.$$.fragment,n),t=C()},m(n,c){e&&G(e,n,c),z(n,t,c),l=!0},p(n,c){const g={};if(c&4&&(g.data=n[2]),c&523&&(g.$$scope={dirty:c,ctx:n}),o!==(o=n[0][0])){if(e){ie();const h=e;q(h.$$.fragment,1,0,()=>{W(h,1)}),le()}o?(e=new o(u(n)),K(e.$$.fragment),V(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){l||(e&&V(e.$$.fragment,n),l=!0)},o(n){e&&q(e.$$.fragment,n),l=!1},d(n){n&&B(t),e&&W(e,n)}}}function wt(r){let e,t,l;var o=r[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(u(r))),{c(){e&&K(e.$$.fragment),t=C()},l(n){e&&Ee(e.$$.fragment,n),t=C()},m(n,c){e&&G(e,n,c),z(n,t,c),l=!0},p(n,c){const g={};if(c&8&&(g.data=n[3]),c&2&&(g.form=n[1]),o!==(o=n[0][1])){if(e){ie();const h=e;q(h.$$.fragment,1,0,()=>{W(h,1)}),le()}o?(e=new o(u(n)),K(e.$$.fragment),V(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){l||(e&&V(e.$$.fragment,n),l=!0)},o(n){e&&q(e.$$.fragment,n),l=!1},d(n){n&&B(t),e&&W(e,n)}}}function De(r){let e,t=r[5]&&Ce(r);return{c(){e=We("div"),t&&t.c(),this.h()},l(l){e=He(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=Me(e);t&&t.l(o),o.forEach(B),this.h()},h(){me(e,"id","svelte-announcer"),me(e,"aria-live","assertive"),me(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(l,o){z(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=Ce(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&B(e),t&&t.d()}}}function Ce(r){let e;return{c(){e=Xe(r[6])},l(t){e=Ye(t,r[6])},m(t,l){z(t,e,l)},p(t,l){l&64&&Qe(e,t[6])},d(t){t&&B(e)}}}function yt(r){let e,t,l,o,u;const n=[gt,_t],c=[];function g(y,L){return y[0][1]?0:1}e=g(r),t=c[e]=n[e](r);let h=r[4]&&De(r);return{c(){t.c(),l=Fe(),h&&h.c(),o=C()},l(y){t.l(y),l=Ke(y),h&&h.l(y),o=C()},m(y,L){c[e].m(y,L),z(y,l,L),h&&h.m(y,L),z(y,o,L),u=!0},p(y,[L]){let b=e;e=g(y),e===b?c[e].p(y,L):(ie(),q(c[b],1,1,()=>{c[b]=null}),le(),t=c[e],t?t.p(y,L):(t=c[e]=n[e](y),t.c()),V(t,1),t.m(l.parentNode,l)),y[4]?h?h.p(y,L):(h=De(y),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(y){u||(V(t),u=!0)},o(y){q(t),u=!1},d(y){c[e].d(y),y&&B(l),h&&h.d(y),y&&B(o)}}}function bt(r,e,t){let{stores:l}=e,{page:o}=e,{components:u}=e,{form:n}=e,{data_0:c=null}=e,{data_1:g=null}=e;Ge(l.page.notify);let h=!1,y=!1,L=null;return we(()=>{const b=l.page.subscribe(()=>{h&&(t(5,y=!0),t(6,L=document.title||"untitled page"))});return t(4,h=!0),b}),r.$$set=b=>{"stores"in b&&t(7,l=b.stores),"page"in b&&t(8,o=b.page),"components"in b&&t(0,u=b.components),"form"in b&&t(1,n=b.form),"data_0"in b&&t(2,c=b.data_0),"data_1"in b&&t(3,g=b.data_1)},r.$$.update=()=>{r.$$.dirty&384&&l.page.set(o)},[u,n,c,g,h,y,L,l,o]}class vt extends Je{constructor(e){super(),xe(this,e,bt,yt,ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Et={},ce=[()=>Q(()=>import("./chunks/0-68cebe8c.js"),["chunks/0-68cebe8c.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-aec06af9.js","assets/_layout-9477e5ae.css","chunks/index-c2abf47a.js","chunks/theme-7bb6b26f.js"],import.meta.url),()=>Q(()=>import("./chunks/1-6d1e1a14.js"),["chunks/1-6d1e1a14.js","components/error.svelte-44b4fb97.js","chunks/index-c2abf47a.js","chunks/singletons-a9466644.js","chunks/index-0f11b0b5.js"],import.meta.url),()=>Q(()=>import("./chunks/2-fd96a3ce.js"),["chunks/2-fd96a3ce.js","components/pages/_page.svelte-3d5d086a.js","assets/_page-474c571b.css","chunks/index-c2abf47a.js","chunks/portfolio-a12494f5.js","chunks/index-0f11b0b5.js","chunks/theme-7bb6b26f.js"],import.meta.url),()=>Q(()=>import("./chunks/3-219e4564.js"),["chunks/3-219e4564.js","components/pages/resume/_page.svelte-8f4ca560.js","assets/_page-1ac7e386.css","chunks/index-c2abf47a.js","chunks/portfolio-a12494f5.js"],import.meta.url)],kt=[],St={"":[2],resume:[3]},Rt={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},Lt="/__data.js",Be="sveltekit:scroll",D="sveltekit:index",re=mt(ce,kt,St,Et),be=ce[0],ve=ce[1];be();ve();let Z={};try{Z=JSON.parse(sessionStorage[Be])}catch{}function ge(r){Z[r]=ye()}function $t({target:r,base:e,trailing_slash:t}){const l=[];let o=null;const u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},c=!1,g=!0,h=!1,y=!1,L,b=history.state?.[D];b||(b=Date.now(),history.replaceState({...history.state,[D]:b},"",location.href));const T=Z[b];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let j=!1,O,J,ee;async function Se(){ee=ee||Promise.resolve(),await ee,ee=null;const a=new URL(location.href),i=pe(a,!0);o=null,await Le(i,a,[])}async function fe(a,{noscroll:i=!1,replaceState:d=!1,keepfocus:s=!1,state:f={}},p,m){return typeof a=="string"&&(a=new URL(a,je(document))),he({url:a,scroll:i?ye():null,keepfocus:s,redirect_chain:p,details:{state:f,replaceState:d},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Re(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:i.id,promise:Ie(i)},o.promise}async function Le(a,i,d,s,f={},p){J=f;let m=a&&await Ie(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await M(i),!1;if(i=a?.url||i,J!==f)return!1;if(m.type==="redirect")if(d.length>10||d.includes(i.pathname))m=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...d,i.pathname],f),!1;else m.props?.page?.status>=400&&await x.updated.check()&&await M(i);if(l.length=0,y=!1,h=!0,s&&s.details){const{details:_}=s,v=_.replaceState?0:1;_.state[D]=b+=v,history[_.replaceState?"replaceState":"pushState"](_.state,"",i)}if(o=null,c){n=m.state,m.props.page&&(m.props.page.url=i);const _=oe();L.$set(m.props),_()}else $e(m);if(s){const{scroll:_,keepfocus:v}=s;if(!v){const w=document.body,k=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),k!==null?w.setAttribute("tabindex",k):w.removeAttribute("tabindex")}if(await Ue(),g){const w=i.hash&&document.getElementById(i.hash.slice(1));_?scrollTo(_.x,_.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ue();g=!0,m.props.page&&(O=m.props.page),p&&p(),h=!1}function $e(a){n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),O=a.props.page;const d=oe();L=new vt({target:r,props:{...a.props,stores:x},hydrate:!0}),d();const s={from:null,to:ae("to",{params:n.params,routeId:n.route?.id??null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(f=>f(s)),c=!0}async function H({url:a,params:i,branch:d,status:s,error:f,route:p,form:m}){const _=d.filter(Boolean),v={type:"loaded",state:{url:a,params:i,branch:d,error:f,route:p},props:{components:_.map(S=>S.node.component)}};m!==void 0&&(v.props.form=m);let w={},k=!O;for(let S=0;S<_.length;S+=1){const $=_[S];w={...w,...$.data},(k||!n.branch.some(P=>P===$))&&(v.props[`data_${S}`]=w,k=k||Object.keys($.data??{}).length>0)}if(k||(k=Object.keys(O.data).length!==Object.keys(w).length),!n.url||a.href!==n.url.href||n.error!==f||k){v.props.page={error:f,params:i,routeId:p&&p.id,status:s,url:a,data:k?w:O.data};const S=($,P)=>{Object.defineProperty(v.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${P}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return v}async function ue({loader:a,parent:i,url:d,params:s,routeId:f,server_data_node:p}){let m=null;const _={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await a();if(v.shared?.load){let w=function(...E){for(const S of E){const{href:$}=new URL(S,d);_.dependencies.add($)}};const k={routeId:f,params:new Proxy(s,{get:(E,S)=>(_.params.add(S),E[S])}),data:p?.data??null,url:st(d,()=>{_.url=!0}),async fetch(E,S){let $;typeof E=="string"?$=E:($=E.url,S={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...S});const P=new URL($,d).href;return w(P),c?ft(P,S):ct($,P,S)},setHeaders:()=>{},depends:w,parent(){return _.parent=!0,i()}};Object.defineProperties(k,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=await v.shared.load.call(null,k)??null}return{node:v,loader:a,server:p,shared:v.shared?.load?{type:"data",data:m,uses:_}:null,data:m??p?.data??null}}function Pe(a,i,d,s){if(y)return!0;if(!d)return!1;if(d.parent&&i||d.url&&a)return!0;for(const f of d.params)if(s[f]!==n.params[f])return!0;for(const f of d.dependencies)if(l.some(p=>p(new URL(f))))return!0;return!1}function de(a,i){return a?.type==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,url:!!a.uses.url}}:a?.type==="skip"?i??null:null}async function Ie({id:a,invalidating:i,url:d,params:s,route:f}){if(o?.id===a)return o.promise;const{errors:p,layouts:m,leaf:_}=f,v=[...m,_];p.forEach(R=>R?.().catch(()=>{})),v.forEach(R=>R?.[1]().catch(()=>{}));let w=null;const k=n.url?a!==n.url.pathname+n.url.search:!1,E=v.reduce((R,I,A)=>{const U=n.branch[A],Y=!!I?.[0]&&(U?.loader!==I[1]||Pe(k,R.some(Boolean),U.server?.uses,s));return R.push(Y),R},[]);if(E.some(Boolean)){try{w=await qe(d,E)}catch(R){return te({status:500,error:R,url:d,routeId:f.id})}if(w.type==="redirect")return w}const S=w?.nodes;let $=!1;const P=v.map(async(R,I)=>{if(!R)return;const A=n.branch[I],U=S?.[I];if((!U||U.type==="skip")&&R[1]===A?.loader&&!Pe(k,$,A.shared?.uses,s))return A;if($=!0,U?.type==="error")throw U;return ue({loader:R[1],url:d,params:s,routeId:f.id,parent:async()=>{const F={};for(let ne=0;ne<I;ne+=1)Object.assign(F,(await P[ne])?.data);return F},server_data_node:de(U===void 0&&R[0]?{type:"skip"}:U??null,A?.server)})});for(const R of P)R.catch(()=>{});const X=[];for(let R=0;R<v.length;R+=1)if(v[R])try{X.push(await P[R])}catch(I){if(I instanceof Te)return{type:"redirect",location:I.location};let A=500,U;for(S?.includes(I)?(A=I.status??A,U=I.error):I instanceof _e?(A=I.status,U=I.body):U=Ve(I,{params:s,url:d,routeId:f.id});R--;)if(p[R]){let Y,F=R;for(;!X[F];)F-=1;try{return Y={node:await p[R](),loader:p[R],data:{},server:null,shared:null},await H({url:d,params:s,branch:X.slice(0,F+1).concat(Y),status:A,error:U,route:f})}catch{continue}}await M(d);return}else X.push(void 0);return await H({url:d,params:s,branch:X,status:200,error:null,route:f,form:i?void 0:null})}async function te({status:a,error:i,url:d,routeId:s}){const f={},p=await be();let m=null;if(p.server)try{const w=await qe(d,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{await M(d);return}const _=await ue({loader:be,url:d,params:f,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),v={node:await ve(),loader:ve,shared:null,server:null,data:null};return await H({url:d,params:f,branch:[_,v],status:a,error:i instanceof _e?i.body:Ve(i,{url:d,params:f,routeId:null}),route:null})}function pe(a,i){if(Oe(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const s of re){const f=s.exec(d);if(f){const p=new URL(a.origin+rt(a.pathname,t)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:i,route:s,params:at(f),url:p}}}}function Oe(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:d,redirect_chain:s,details:f,type:p,delta:m,nav_token:_,accepted:v,blocked:w}){let k=!1;const E=pe(a,!1),S={from:ae("from",{params:n.params,routeId:n.route?.id??null,url:n.url}),to:ae("to",{params:E?.params??null,routeId:E?.route.id??null,url:a}),type:p};m!==void 0&&(S.delta=m);const $={...S,cancel:()=>{k=!0}};if(u.before_navigate.forEach(P=>P($)),k){w();return}ge(b),v(),c&&x.navigating.set(S),await Le(E,a,s,{scroll:i,keepfocus:d,details:f},_,()=>{u.after_navigate.forEach(P=>P(S)),x.navigating.set(null)})}function M(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{we(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{we(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(h||!c)&&(g=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")l.push(a);else{const{href:i}=new URL(a,location.href);l.push(d=>d.href===i)}return Se()},invalidateAll:()=>(y=!0,Se()),prefetch:async a=>{const i=new URL(a,je(document));await Re(i)},prefetch_routes:async a=>{const d=(a?re.filter(s=>a.some(f=>s.exec(f))):re).map(s=>Promise.all([...s.layouts,s.leaf].map(f=>f?.[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:d,route:s}=n;if(!s)return;let f=n.branch.length;for(;f--;)if(s.errors[f]){let p,m=f;for(;!d[m];)m-=1;try{p={node:await s.errors[f](),loader:s.errors[f],data:{},server:null,shared:null};const _=await H({url:i,params:n.params,branch:d.slice(0,m+1).concat(p),status:500,error:a.error,route:s});n=_.state;const v=oe();L.$set(_.props),v();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==O.status&&(i.page={...O,status:a.status});const d=oe();L.$set(i),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{let f=!1;const p={from:ae("from",{params:n.params,routeId:n.route?.id??null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(m=>m(p)),f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ge(b);try{sessionStorage[Be]=JSON.stringify(Z)}catch{}}});const a=s=>{const{url:f,options:p}=Ae(s);if(f&&p.prefetch){if(Oe(f))return;Re(f)}};let i;const d=s=>{clearTimeout(i),i=setTimeout(()=>{s.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:f,url:p,options:m}=Ae(s);if(!f||!p)return;const _=f instanceof SVGAElement;if(!_&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||v.includes("external")||m.reload||(_?f.target.baseVal:f.target))return;const[w,k]=p.href.split("#");if(k!==void 0&&w===location.href.split("#")[0]){j=!0,ge(b),n.url=p,x.page.set({...O,url:p}),x.page.notify();return}he({url:p,scroll:m.noscroll?ye():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[D]===b)return;const f=s.state[D]-b;he({url:new URL(location.href),scroll:Z[s.state[D]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{b=s.state[D]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{j&&(j=!1,history.replaceState({...history.state,[D]:++b},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&x.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:d,params:s,routeId:f,data:p,form:m})=>{const _=new URL(location.href);let v;try{const w=d.map(async(k,E)=>{const S=p[E];return ue({loader:ce[k],url:_,params:s,routeId:f,parent:async()=>{const $={};for(let P=0;P<E;P+=1)Object.assign($,(await w[P]).data);return $},server_data_node:de(S)})});v=await H({url:_,params:s,branch:await Promise.all(w),status:a,error:i,form:m,route:re.find(k=>k.id===f)??null})}catch(w){const k=w;if(k instanceof Te){await M(new URL(w.location,location.href));return}v=await te({status:k instanceof _e?k.status:500,error:k,url:_,routeId:f})}$e(v)}}}let Pt=1;async function qe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Lt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Pt++)),await Q(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}function Ve(r,e){return Rt.handleError({error:r,event:e})??{message:e.routeId?"Internal Error":"Not Found"}}const It=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(r,e){for(const t of It)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function jt({env:r,hydrate:e,paths:t,target:l,trailing_slash:o}){Ze(t);const u=$t({target:l,base:t.base,trailing_slash:o});et({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{jt as start};
