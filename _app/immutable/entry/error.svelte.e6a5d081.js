import{S as E,i as S,s as x,k as b,r as f,a as H,l as _,m as d,u as g,h as p,c as k,b as l,H as v,v as h,n as $,I as q}from"../chunks/index.94e3dd9d.js";import{s as y}from"../chunks/singletons.ab2fbc52.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},I={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=b("h1"),o=f(r),n=H(),i=b("p"),u=f(c)},l(e){t=_(e,"H1",{});var a=d(t);o=g(a,r),a.forEach(p),n=k(e),i=_(e,"P",{});var m=d(i);u=g(m,c),m.forEach(p)},m(e,a){l(e,t,a),v(t,o),l(e,n,a),l(e,i,a),v(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&h(o,r),a&1&&c!==(c=e[0].error?.message+"")&&h(u,c)},i:$,o:$,d(e){e&&p(t),e&&p(n),e&&p(i)}}}function j(s,t,r){let o;return q(s,I,n=>r(0,o=n)),[o]}let A=class extends E{constructor(t){super(),S(this,t,j,P,x,{})}};export{A as default};
