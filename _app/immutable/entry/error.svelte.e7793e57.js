import{S as E,i as S,s as q,e as f,d as b,f as x,h as _,j as d,k as g,l as c,m as j,p as u,q as v,r as h,n as $,v as k}from"../chunks/index.d11ddb9a.js";import{s as y}from"../chunks/singletons.d04bffba.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,p=s[0].error?.message+"",l;return{c(){t=f("h1"),o=b(r),n=x(),i=f("p"),l=b(p)},l(e){t=_(e,"H1",{});var a=d(t);o=g(a,r),a.forEach(c),n=j(e),i=_(e,"P",{});var m=d(i);l=g(m,p),m.forEach(c)},m(e,a){u(e,t,a),v(t,o),u(e,n,a),u(e,i,a),v(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&h(o,r),a&1&&p!==(p=e[0].error?.message+"")&&h(l,p)},i:$,o:$,d(e){e&&c(t),e&&c(n),e&&c(i)}}}function w(s,t,r){let o;return k(s,H,n=>r(0,o=n)),[o]}let B=class extends E{constructor(t){super(),S(this,t,w,P,q,{})}};export{B as default};
