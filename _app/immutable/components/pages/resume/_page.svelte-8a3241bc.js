import{S as qe,i as be,s as ze,k as d,q as b,a as P,l as v,m as g,r as z,h,c as D,n as f,b as j,G as c,u as Q,B as R,K as de,C as tt,D as lt,E as st,F as nt,f as N,t as G,w as K,x as O,T as Ee,y as U,z as J,e as X,g as xe,d as et}from"../../../chunks/index-a4f45e83.js";import{d as T}from"../../../chunks/portfolio-aa5a8a83.js";function Le(o,e,n){const l=o.slice();return l[5]=e[n],l}function Re(o){let e,n,l=o[5]+"",t;return{c(){e=d("li"),n=d("p"),t=b(l),this.h()},l(a){e=v(a,"LI",{});var s=g(e);n=v(s,"P",{class:!0});var i=g(n);t=z(i,l),i.forEach(h),s.forEach(h),this.h()},h(){f(n,"class","small svelte-1l8eqrq")},m(a,s){j(a,e,s),c(e,n),c(n,t)},p(a,s){s&16&&l!==(l=a[5]+"")&&Q(t,l)},d(a){a&&h(e)}}}function at(o){let e,n,l,t,a,s,i,r,m,_,u,p,$,y,S=o[4],E=[];for(let k=0;k<S.length;k+=1)E[k]=Re(Le(o,S,k));return{c(){e=d("section"),n=d("p"),l=b(o[1]),t=b(" - "),a=b(o[0]),s=P(),i=d("div"),r=d("p"),m=b(o[2]),_=P(),u=d("p"),p=b(o[3]),$=P(),y=d("ul");for(let k=0;k<E.length;k+=1)E[k].c();this.h()},l(k){e=v(k,"SECTION",{class:!0});var V=g(e);n=v(V,"P",{});var I=g(n);l=z(I,o[1]),t=z(I," - "),a=z(I,o[0]),I.forEach(h),s=D(V),i=v(V,"DIV",{class:!0});var B=g(i);r=v(B,"P",{});var he=g(r);m=z(he,o[2]),he.forEach(h),_=D(B),u=v(B,"P",{});var ue=g(u);p=z(ue,o[3]),ue.forEach(h),B.forEach(h),$=D(V),y=v(V,"UL",{class:!0});var A=g(y);for(let M=0;M<E.length;M+=1)E[M].l(A);A.forEach(h),V.forEach(h),this.h()},h(){f(i,"class","small flex justify-between items-baseline svelte-1l8eqrq"),f(y,"class","svelte-1l8eqrq"),f(e,"class","svelte-1l8eqrq")},m(k,V){j(k,e,V),c(e,n),c(n,l),c(n,t),c(n,a),c(e,s),c(e,i),c(i,r),c(r,m),c(i,_),c(i,u),c(u,p),c(e,$),c(e,y);for(let I=0;I<E.length;I+=1)E[I].m(y,null)},p(k,[V]){if(V&2&&Q(l,k[1]),V&1&&Q(a,k[0]),V&4&&Q(m,k[2]),V&8&&Q(p,k[3]),V&16){S=k[4];let I;for(I=0;I<S.length;I+=1){const B=Le(k,S,I);E[I]?E[I].p(B,V):(E[I]=Re(B),E[I].c(),E[I].m(y,null))}for(;I<E.length;I+=1)E[I].d(1);E.length=S.length}},i:R,o:R,d(k){k&&h(e),de(E,k)}}}function rt(o,e,n){let{position:l}=e,{company:t}=e,{date:a}=e,{location:s}=e,{items:i}=e;return o.$$set=r=>{"position"in r&&n(0,l=r.position),"company"in r&&n(1,t=r.company),"date"in r&&n(2,a=r.date),"location"in r&&n(3,s=r.location),"items"in r&&n(4,i=r.items)},[l,t,a,s,i]}class ot extends qe{constructor(e){super(),be(this,e,rt,at,ze,{position:0,company:1,date:2,location:3,items:4})}}function ct(o){let e,n,l,t,a,s,i,r;const m=o[2].default,_=tt(m,o,o[1],null);return{c(){e=d("div"),n=d("h3"),l=b(o[0]),t=P(),a=d("hr"),s=P(),i=d("div"),_&&_.c(),this.h()},l(u){e=v(u,"DIV",{});var p=g(e);n=v(p,"H3",{class:!0});var $=g(n);l=z($,o[0]),$.forEach(h),t=D(p),a=v(p,"HR",{}),s=D(p),i=v(p,"DIV",{class:!0});var y=g(i);_&&_.l(y),y.forEach(h),p.forEach(h),this.h()},h(){f(n,"class","section-title svelte-1js4o33"),f(i,"class","content svelte-1js4o33")},m(u,p){j(u,e,p),c(e,n),c(n,l),c(e,t),c(e,a),c(e,s),c(e,i),_&&_.m(i,null),r=!0},p(u,[p]){(!r||p&1)&&Q(l,u[0]),_&&_.p&&(!r||p&2)&&lt(_,m,u,u[1],r?nt(m,u[1],p,null):st(u[1]),null)},i(u){r||(N(_,u),r=!0)},o(u){G(_,u),r=!1},d(u){u&&h(e),_&&_.d(u)}}}function it(o,e,n){let{$$slots:l={},$$scope:t}=e,{title:a}=e;return o.$$set=s=>{"title"in s&&n(0,a=s.title),"$$scope"in s&&n(1,t=s.$$scope)},[a,t,l]}class fe extends qe{constructor(e){super(),be(this,e,it,ct,ze,{title:0})}}function ft(o){let e,n,l,t,a,s,i,r,m;return{c(){e=d("div"),n=d("h2"),l=b(o[0]),t=P(),a=d("p"),s=b(o[1]),i=P(),r=d("p"),m=b(o[2]),this.h()},l(_){e=v(_,"DIV",{class:!0});var u=g(e);n=v(u,"H2",{});var p=g(n);l=z(p,o[0]),p.forEach(h),t=D(u),a=v(u,"P",{class:!0});var $=g(a);s=z($,o[1]),$.forEach(h),i=D(u),r=v(u,"P",{class:!0});var y=g(r);m=z(y,o[2]),y.forEach(h),u.forEach(h),this.h()},h(){f(a,"class","svelte-df7jp4"),f(r,"class","svelte-df7jp4"),f(e,"class","edu svelte-df7jp4")},m(_,u){j(_,e,u),c(e,n),c(n,l),c(e,t),c(e,a),c(a,s),c(e,i),c(e,r),c(r,m)},p(_,[u]){u&1&&Q(l,_[0]),u&2&&Q(s,_[1]),u&4&&Q(m,_[2])},i:R,o:R,d(_){_&&h(e)}}}function ht(o,e,n){let{title:l}=e,{location:t}=e,{date:a}=e;return o.$$set=s=>{"title"in s&&n(0,l=s.title),"location"in s&&n(1,t=s.location),"date"in s&&n(2,a=s.date)},[l,t,a]}class ut extends qe{constructor(e){super(),be(this,e,ht,ft,ze,{title:0,location:1,date:2})}}function Xe(o,e,n){const l=o.slice();return l[0]=e[n],l}function Fe(o,e,n){const l=o.slice();return l[3]=e[n],l}function Ke(o,e,n){const l=o.slice();return l[6]=e[n],l}function Oe(o,e,n){const l=o.slice();return l[9]=e[n],l}function Ue(o,e,n){const l=o.slice();return l[12]=e[n],l}function Je(o){let e,n;return e=new ut({props:{date:o[12].date,location:o[12].school,title:o[12].title}}),{c(){K(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){U(e,l,t),n=!0},p:R,i(l){n||(N(e.$$.fragment,l),n=!0)},o(l){G(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function _t(o){let e,n,l=T.education,t=[];for(let s=0;s<l.length;s+=1)t[s]=Je(Ue(o,l,s));const a=s=>G(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=X()},l(s){for(let i=0;i<t.length;i+=1)t[i].l(s);e=X()},m(s,i){for(let r=0;r<t.length;r+=1)t[r].m(s,i);j(s,e,i),n=!0},p(s,i){if(i&0){l=T.education;let r;for(r=0;r<l.length;r+=1){const m=Ue(s,l,r);t[r]?(t[r].p(m,i),N(t[r],1)):(t[r]=Je(m),t[r].c(),N(t[r],1),t[r].m(e.parentNode,e))}for(xe(),r=l.length;r<t.length;r+=1)a(r);et()}},i(s){if(!n){for(let i=0;i<l.length;i+=1)N(t[i]);n=!0}},o(s){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)G(t[i]);n=!1},d(s){de(t,s),s&&h(e)}}}function dt(o){let e,n=T.skills.tools.join(", ")+"",l;return{c(){e=d("p"),l=b(n),this.h()},l(t){e=v(t,"P",{class:!0});var a=g(e);l=z(a,n),a.forEach(h),this.h()},h(){f(e,"class","small svelte-11yvkqz")},m(t,a){j(t,e,a),c(e,l)},p:R,d(t){t&&h(e)}}}function vt(o){let e,n=T.skills.languages.join(", ")+"",l;return{c(){e=d("p"),l=b(n),this.h()},l(t){e=v(t,"P",{class:!0});var a=g(e);l=z(a,n),a.forEach(h),this.h()},h(){f(e,"class","small svelte-11yvkqz")},m(t,a){j(t,e,a),c(e,l)},p:R,d(t){t&&h(e)}}}function Qe(o){let e,n=o[9]+"",l;return{c(){e=d("p"),l=b(n),this.h()},l(t){e=v(t,"P",{class:!0});var a=g(e);l=z(a,n),a.forEach(h),this.h()},h(){f(e,"class","small svelte-11yvkqz")},m(t,a){j(t,e,a),c(e,l)},p:R,d(t){t&&h(e)}}}function mt(o){let e,n=T.interests,l=[];for(let t=0;t<n.length;t+=1)l[t]=Qe(Oe(o,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=X()},l(t){for(let a=0;a<l.length;a+=1)l[a].l(t);e=X()},m(t,a){for(let s=0;s<l.length;s+=1)l[s].m(t,a);j(t,e,a)},p(t,a){if(a&0){n=T.interests;let s;for(s=0;s<n.length;s+=1){const i=Oe(t,n,s);l[s]?l[s].p(i,a):(l[s]=Qe(i),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(t){de(l,t),t&&h(e)}}}function We(o){let e,n;return e=new ot({props:{position:o[6].position,company:o[6].company,location:o[6].location,date:o[6].date,items:o[6].items}}),{c(){K(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){U(e,l,t),n=!0},p:R,i(l){n||(N(e.$$.fragment,l),n=!0)},o(l){G(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function gt(o){let e,n,l=T.experience,t=[];for(let s=0;s<l.length;s+=1)t[s]=We(Ke(o,l,s));const a=s=>G(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=X()},l(s){for(let i=0;i<t.length;i+=1)t[i].l(s);e=X()},m(s,i){for(let r=0;r<t.length;r+=1)t[r].m(s,i);j(s,e,i),n=!0},p(s,i){if(i&0){l=T.experience;let r;for(r=0;r<l.length;r+=1){const m=Ke(s,l,r);t[r]?(t[r].p(m,i),N(t[r],1)):(t[r]=We(m),t[r].c(),N(t[r],1),t[r].m(e.parentNode,e))}for(xe(),r=l.length;r<t.length;r+=1)a(r);et()}},i(s){if(!n){for(let i=0;i<l.length;i+=1)N(t[i]);n=!0}},o(s){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)G(t[i]);n=!1},d(s){de(t,s),s&&h(e)}}}function Ye(o){let e,n,l=o[3].title+"",t,a,s,i=o[3].info+"",r,m;return{c(){e=d("div"),n=d("p"),t=b(l),a=P(),s=d("p"),r=b(i),m=P(),this.h()},l(_){e=v(_,"DIV",{class:!0});var u=g(e);n=v(u,"P",{class:!0});var p=g(n);t=z(p,l),p.forEach(h),a=D(u),s=v(u,"P",{class:!0});var $=g(s);r=z($,i),$.forEach(h),m=D(u),u.forEach(h),this.h()},h(){f(n,"class","svelte-11yvkqz"),f(s,"class","svelte-11yvkqz"),f(e,"class","small flex justify-between pr-4 svelte-11yvkqz")},m(_,u){j(_,e,u),c(e,n),c(n,t),c(e,a),c(e,s),c(s,r),c(e,m)},p:R,d(_){_&&h(e)}}}function pt(o){let e,n=T.achievements,l=[];for(let t=0;t<n.length;t+=1)l[t]=Ye(Fe(o,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=X()},l(t){for(let a=0;a<l.length;a+=1)l[a].l(t);e=X()},m(t,a){for(let s=0;s<l.length;s+=1)l[s].m(t,a);j(t,e,a)},p(t,a){if(a&0){n=T.achievements;let s;for(s=0;s<n.length;s+=1){const i=Fe(t,n,s);l[s]?l[s].p(i,a):(l[s]=Ye(i),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(t){de(l,t),t&&h(e)}}}function Ze(o){let e,n,l=o[0].name+"",t,a,s=o[0].date+"",i,r,m,_=o[0].description+"",u,p;return{c(){e=d("p"),n=d("a"),t=b(l),a=b(`
          | `),i=b(s),r=P(),m=d("p"),u=b(_),p=P(),this.h()},l($){e=v($,"P",{class:!0});var y=g(e);n=v(y,"A",{href:!0,class:!0});var S=g(n);t=z(S,l),S.forEach(h),a=z(y,`
          | `),i=z(y,s),y.forEach(h),r=D($),m=v($,"P",{class:!0});var E=g(m);u=z(E,_),p=D(E),E.forEach(h),this.h()},h(){f(n,"href",o[0].link),f(n,"class","font-bold svelte-11yvkqz"),f(e,"class","small svelte-11yvkqz"),f(m,"class","small svelte-11yvkqz")},m($,y){j($,e,y),c(e,n),c(n,t),c(e,a),c(e,i),j($,r,y),j($,m,y),c(m,u),c(m,p)},p:R,d($){$&&h(e),$&&h(r),$&&h(m)}}}function $t(o){let e,n=T.projects,l=[];for(let t=0;t<n.length;t+=1)l[t]=Ze(Xe(o,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=X()},l(t){for(let a=0;a<l.length;a+=1)l[a].l(t);e=X()},m(t,a){for(let s=0;s<l.length;s+=1)l[s].m(t,a);j(t,e,a)},p(t,a){if(a&0){n=T.projects;let s;for(s=0;s<n.length;s+=1){const i=Xe(t,n,s);l[s]?l[s].p(i,a):(l[s]=Ze(i),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(t){de(l,t),t&&h(e)}}}function kt(o){let e,n,l,t,a,s,i,r,m,_,u,p,$,y,S,E,k,V,I,B,he,ue,A,M,Me,ye,W,Ie,we,Y,Z,Te,Pe,x,De,Ve,H,ee,je,te,Ne,le,Be,se,Ge,C,ne,Se,ae,He,re,pe;return ee=new fe({props:{title:"education",$$slots:{default:[_t]},$$scope:{ctx:o}}}),te=new fe({props:{title:"tools",$$slots:{default:[dt]},$$scope:{ctx:o}}}),le=new fe({props:{title:"languages",$$slots:{default:[vt]},$$scope:{ctx:o}}}),se=new fe({props:{title:"interests",$$slots:{default:[mt]},$$scope:{ctx:o}}}),ne=new fe({props:{title:"experience",$$slots:{default:[gt]},$$scope:{ctx:o}}}),ae=new fe({props:{title:"achievements",$$slots:{default:[pt]},$$scope:{ctx:o}}}),re=new fe({props:{title:"independent side-projects",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){e=d("div"),n=d("div"),l=d("h2"),t=b("Nicholas Baker"),a=P(),s=d("br"),i=P(),r=d("div"),m=d("div"),_=d("img"),p=b(`
         
        `),$=d("p"),y=b("Plano, TX"),S=P(),E=d("div"),k=d("img"),I=b(`
         
        `),B=d("p"),he=b("(972) 330-6048"),ue=P(),A=d("div"),M=d("img"),ye=b(`
         
        `),W=d("a"),Ie=b("ndbaker1@outlook.com"),we=P(),Y=d("div"),Z=d("img"),Pe=b(`
         
        `),x=d("a"),De=b("github.com/ndbaker1"),Ve=P(),H=d("div"),K(ee.$$.fragment),je=P(),K(te.$$.fragment),Ne=P(),K(le.$$.fragment),Be=P(),K(se.$$.fragment),Ge=P(),C=d("div"),K(ne.$$.fragment),Se=P(),K(ae.$$.fragment),He=P(),K(re.$$.fragment),this.h()},l(q){e=v(q,"DIV",{id:!0,class:!0});var w=g(e);n=v(w,"DIV",{id:!0,class:!0});var F=g(n);l=v(F,"H2",{class:!0});var ve=g(l);t=z(ve,"Nicholas Baker"),ve.forEach(h),a=D(F),s=v(F,"BR",{class:!0}),i=D(F),r=v(F,"DIV",{class:!0});var L=g(r);m=v(L,"DIV",{class:!0});var ce=g(m);_=v(ce,"IMG",{alt:!0,src:!0,width:!0,class:!0}),p=z(ce,`
         
        `),$=v(ce,"P",{class:!0});var me=g($);y=z(me,"Plano, TX"),me.forEach(h),ce.forEach(h),S=D(L),E=v(L,"DIV",{class:!0});var ie=g(E);k=v(ie,"IMG",{alt:!0,src:!0,width:!0,class:!0}),I=z(ie,`
         
        `),B=v(ie,"P",{class:!0});var ge=g(B);he=z(ge,"(972) 330-6048"),ge.forEach(h),ie.forEach(h),ue=D(L),A=v(L,"DIV",{class:!0});var $e=g(A);M=v($e,"IMG",{alt:!0,src:!0,width:!0,class:!0}),ye=z($e,`
         
        `),W=v($e,"A",{href:!0,target:!0,class:!0});var Ae=g(W);Ie=z(Ae,"ndbaker1@outlook.com"),Ae.forEach(h),$e.forEach(h),we=D(L),Y=v(L,"DIV",{class:!0});var ke=g(Y);Z=v(ke,"IMG",{alt:!0,src:!0,width:!0,class:!0}),Pe=z(ke,`
         
        `),x=v(ke,"A",{href:!0,target:!0,class:!0});var Ce=g(x);De=z(Ce,"github.com/ndbaker1"),Ce.forEach(h),ke.forEach(h),L.forEach(h),F.forEach(h),Ve=D(w),H=v(w,"DIV",{id:!0,class:!0});var oe=g(H);O(ee.$$.fragment,oe),je=D(oe),O(te.$$.fragment,oe),Ne=D(oe),O(le.$$.fragment,oe),Be=D(oe),O(se.$$.fragment,oe),oe.forEach(h),Ge=D(w),C=v(w,"DIV",{id:!0,class:!0});var _e=g(C);O(ne.$$.fragment,_e),Se=D(_e),O(ae.$$.fragment,_e),He=D(_e),O(re.$$.fragment,_e),_e.forEach(h),w.forEach(h),this.h()},h(){f(l,"class","text-xl text-center svelte-11yvkqz"),f(s,"class","svelte-11yvkqz"),f(_,"alt","location"),Ee(_.src,u="https://img.icons8.com/material-rounded/192/ffffff/address.png")||f(_,"src",u),f(_,"width","20px"),f(_,"class","svelte-11yvkqz"),f($,"class","svelte-11yvkqz"),f(m,"class","svelte-11yvkqz"),f(k,"alt","phone"),Ee(k.src,V="https://img.icons8.com/fluency-systems-filled/96/ffffff/phone.png")||f(k,"src",V),f(k,"width","20px"),f(k,"class","svelte-11yvkqz"),f(B,"class","svelte-11yvkqz"),f(E,"class","svelte-11yvkqz"),f(M,"alt","email"),Ee(M.src,Me="https://img.icons8.com/material-rounded/192/ffffff/mail.png")||f(M,"src",Me),f(M,"width","20px"),f(M,"class","svelte-11yvkqz"),f(W,"href","mailto:ndbaker1@outlook.com"),f(W,"target","_blank noreferrer"),f(W,"class","svelte-11yvkqz"),f(A,"class","svelte-11yvkqz"),f(Z,"alt","github"),Ee(Z.src,Te="https://img.icons8.com/ios-glyphs/120/ffffff/repository.png")||f(Z,"src",Te),f(Z,"width","20px"),f(Z,"class","svelte-11yvkqz"),f(x,"href","https://github.com/ndbaker1"),f(x,"target","_blank noreferrer"),f(x,"class","svelte-11yvkqz"),f(Y,"class","svelte-11yvkqz"),f(r,"class","text-sm header-items svelte-11yvkqz"),f(n,"id","header"),f(n,"class","svelte-11yvkqz"),f(H,"id","side"),f(H,"class","svelte-11yvkqz"),f(C,"id","main"),f(C,"class","svelte-11yvkqz"),f(e,"id","resume"),f(e,"class","svelte-11yvkqz")},m(q,w){j(q,e,w),c(e,n),c(n,l),c(l,t),c(n,a),c(n,s),c(n,i),c(n,r),c(r,m),c(m,_),c(m,p),c(m,$),c($,y),c(r,S),c(r,E),c(E,k),c(E,I),c(E,B),c(B,he),c(r,ue),c(r,A),c(A,M),c(A,ye),c(A,W),c(W,Ie),c(r,we),c(r,Y),c(Y,Z),c(Y,Pe),c(Y,x),c(x,De),c(e,Ve),c(e,H),U(ee,H,null),c(H,je),U(te,H,null),c(H,Ne),U(le,H,null),c(H,Be),U(se,H,null),c(e,Ge),c(e,C),U(ne,C,null),c(C,Se),U(ae,C,null),c(C,He),U(re,C,null),pe=!0},p(q,[w]){const F={};w&32768&&(F.$$scope={dirty:w,ctx:q}),ee.$set(F);const ve={};w&32768&&(ve.$$scope={dirty:w,ctx:q}),te.$set(ve);const L={};w&32768&&(L.$$scope={dirty:w,ctx:q}),le.$set(L);const ce={};w&32768&&(ce.$$scope={dirty:w,ctx:q}),se.$set(ce);const me={};w&32768&&(me.$$scope={dirty:w,ctx:q}),ne.$set(me);const ie={};w&32768&&(ie.$$scope={dirty:w,ctx:q}),ae.$set(ie);const ge={};w&32768&&(ge.$$scope={dirty:w,ctx:q}),re.$set(ge)},i(q){pe||(N(ee.$$.fragment,q),N(te.$$.fragment,q),N(le.$$.fragment,q),N(se.$$.fragment,q),N(ne.$$.fragment,q),N(ae.$$.fragment,q),N(re.$$.fragment,q),pe=!0)},o(q){G(ee.$$.fragment,q),G(te.$$.fragment,q),G(le.$$.fragment,q),G(se.$$.fragment,q),G(ne.$$.fragment,q),G(ae.$$.fragment,q),G(re.$$.fragment,q),pe=!1},d(q){q&&h(e),J(ee),J(te),J(le),J(se),J(ne),J(ae),J(re)}}}class bt extends qe{constructor(e){super(),be(this,e,null,kt,ze,{})}}export{bt as default};
