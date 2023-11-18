import{n as ve,s as ot,o as Fe,t as Ee}from"../chunks/scheduler.6c3506a3.js";function it(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function st(e){return e.split("%25").map(decodeURI).join("%25")}function ct(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const lt=["href","pathname","search","searchParams","toString","toJSON"];function ft(e,a){const s=new URL(e);for(const o of lt)Object.defineProperty(s,o,{get(){return a(),e[o]},enumerable:!0,configurable:!0});return ut(s),s}function ut(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const dt="/__data.json";function pt(e){return e.replace(/\/$/,"")+dt}function ht(...e){let a=5381;for(const s of e)if(typeof s=="string"){let o=s.length;for(;o;)a=a*33^s.charCodeAt(--o)}else if(ArrayBuffer.isView(s)){const o=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);let u=o.length;for(;u;)a=a*33^o[--u]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const he=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&re.delete(Ie(e)),he(e,a));const re=new Map;function gt(e,a){const s=Ie(e,a),o=document.querySelector(s);if(o!=null&&o.textContent){const{body:u,...f}=JSON.parse(o.textContent),_=o.getAttribute("data-ttl");return _&&re.set(s,{body:u,init:f,ttl:1e3*Number(_)}),Promise.resolve(new Response(u,f))}return he(e,a)}function mt(e,a,s){if(re.size>0){const o=Ie(e,s),u=re.get(o);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(s==null?void 0:s.cache))return new Response(u.body,u.init);re.delete(o)}}return he(a,s)}function Ie(e,a){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const u=[];a.headers&&u.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&u.push(a.body),o+=`[data-hash="${ht(...u)}"]`}return o}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${bt(e).map(o=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(u)return a.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return a.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const _=o.split(/\[(.+?)\](?!\])/);return"/"+_.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(O=>parseInt(O,16))));const m=_t.exec(h);if(!m)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,P,S,N]=m;return a.push({name:S,matcher:N,optional:!!C,rest:!!P,chained:P?p===1&&_[0]==="":!1}),P?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:a}}function wt(e){return!/^\([^)]+\)$/.test(e)}function bt(e){return e.slice(1).split("/").filter(wt)}function vt(e,a,s){const o={},u=e.slice(1);let f=0;for(let _=0;_<a.length;_+=1){const i=a[_];let h=u[_-f];if(i.chained&&i.rest&&f&&(h=u.slice(_-f,_+1).filter(p=>p).join("/"),f=0),h===void 0){i.rest&&(o[i.name]="");continue}if(!i.matcher||s[i.matcher](h)){o[i.name]=h;const p=a[_+1],m=u[_+1];p&&!p.rest&&p.optional&&m&&i.chained&&(f=0);continue}if(i.optional&&i.chained){f++;continue}return}if(!f)return o}function ke(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:a,dictionary:s,matchers:o}){const u=new Set(a);return Object.entries(s).map(([i,[h,p,m]])=>{const{pattern:C,params:P}=yt(i),S={id:i,exec:N=>{const O=C.exec(N);if(O)return vt(O,P,o)},errors:[1,...m||[]].map(N=>e[N]),layouts:[0,...p||[]].map(_),leaf:f(h)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function f(i){const h=i<0;return h&&(i=~i),[h,e[i]]}function _(i){return i===void 0?i:[u.has(i),e[i]]}}function Ze(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Ge(e,a){const s=JSON.stringify(a);try{sessionStorage[e]=s}catch{}}const W=[];function Le(e,a=ve){let s;const o=new Set;function u(i){if(ot(e,i)&&(e=i,s)){const h=!W.length;for(const p of o)p[1](),W.push(p,e);if(h){for(let p=0;p<W.length;p+=2)W[p][0](W[p+1]);W.length=0}}}function f(i){u(i(e))}function _(i,h=ve){const p=[i,h];return o.add(p),o.size===1&&(s=a(u,f)||ve),i(e),()=>{o.delete(p),o.size===0&&s&&(s(),s=null)}}return{set:u,update:f,subscribe:_}}var Ye;const G=((Ye=globalThis.__sveltekit_hnsxej)==null?void 0:Ye.base)??"";var Xe;const kt=((Xe=globalThis.__sveltekit_hnsxej)==null?void 0:Xe.assets)??G,St="1700313772795",Qe="sveltekit:snapshot",et="sveltekit:scroll",V="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1};function ze(e){let a=e.baseURI;if(!a){const s=e.getElementsByTagName("base");a=s.length?s[0].href:e.URL}return a}function ne(){return{x:pageXOffset,y:pageYOffset}}function Y(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const Be={...pe,"":pe.hover};function tt(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function He(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=tt(e)}}function Se(e,a){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,u=!s||!!o||de(s,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(s==null?void 0:s.origin)===location.origin&&e.hasAttribute("download");return{url:s,external:u,target:o,download:f}}function ue(e){let a=null,s=null,o=null,u=null,f=null,_=null,i=e;for(;i&&i!==document.documentElement;)o===null&&(o=Y(i,"preload-code")),u===null&&(u=Y(i,"preload-data")),a===null&&(a=Y(i,"keepfocus")),s===null&&(s=Y(i,"noscroll")),f===null&&(f=Y(i,"reload")),_===null&&(_=Y(i,"replacestate")),i=tt(i);function h(p){switch(p){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Be[o??"off"],preload_data:Be[u??"off"],keep_focus:h(a),noscroll:h(s),reload:h(f),replace_state:h(_)}}function Je(e){const a=Le(e);let s=!0;function o(){s=!0,a.update(_=>_)}function u(_){s=!1,a.set(_)}function f(_){let i;return a.subscribe(h=>{(i===void 0||s&&h!==i)&&_(i=h)})}return{notify:o,set:u,subscribe:f}}function Rt(){const{set:e,subscribe:a}=Le(!1);let s;async function o(){clearTimeout(s);try{const u=await fetch(`${kt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!u.ok)return!1;const _=(await u.json()).version!==St;return _&&(e(!0),clearTimeout(s)),_}catch{return!1}}return{subscribe:a,check:o}}function de(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}const At=-1,It=-2,Lt=-3,Ut=-4,Ot=-5,xt=-6;function Pt(e,a){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const s=e,o=Array(s.length);function u(f,_=!1){if(f===At)return;if(f===Lt)return NaN;if(f===Ut)return 1/0;if(f===Ot)return-1/0;if(f===xt)return-0;if(_)throw new Error("Invalid input");if(f in o)return o[f];const i=s[f];if(!i||typeof i!="object")o[f]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const h=i[0],p=a==null?void 0:a[h];if(p)return o[f]=p(u(i[1]));switch(h){case"Date":o[f]=new Date(i[1]);break;case"Set":const m=new Set;o[f]=m;for(let S=1;S<i.length;S+=1)m.add(u(i[S]));break;case"Map":const C=new Map;o[f]=C;for(let S=1;S<i.length;S+=2)C.set(u(i[S]),u(i[S+1]));break;case"RegExp":o[f]=new RegExp(i[1],i[2]);break;case"Object":o[f]=Object(i[1]);break;case"BigInt":o[f]=BigInt(i[1]);break;case"null":const P=Object.create(null);o[f]=P;for(let S=1;S<i.length;S+=2)P[i[S]]=u(i[S+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(i.length);o[f]=h;for(let p=0;p<i.length;p+=1){const m=i[p];m!==It&&(h[p]=u(m))}}else{const h={};o[f]=h;for(const p in i){const m=i[p];h[p]=u(m)}}return o[f]}return u(0)}function Nt(e){return e.filter(a=>a!=null)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const Tt=new Set([...nt]);[...Tt];async function $t(e){var a;for(const s in e)if(typeof((a=e[s])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([o,u])=>[o,await u])));return e}class ae{constructor(a,s){this.status=a,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(a,s){this.status=a,this.location=s}}const jt="x-sveltekit-invalidated",Ct="x-sveltekit-trailing-slash";function Dt(e){e.client}const F={url:Je({}),page:Je({}),navigating:Le(null),updated:Rt()},J=Ze(et)??{},te=Ze(Qe)??{};function Re(e){J[e]=ne()}function Vt(e,a){var Ve;const s=Et(e),o=e.nodes[0],u=e.nodes[1];o(),u();const f=document.documentElement,_=[],i=[];let h=null;const p={before_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},C=!1,P=!1,S=!0,N=!1,O=!1,z=!1,B=!1,q,$=(Ve=history.state)==null?void 0:Ve[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const ge=J[$];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let M,oe,X;async function Ue(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),l=Q(t,!0);h=null;const n=oe={},c=l&&await ye(l);if(n===oe&&c){if(c.type==="redirect")return ie(new URL(c.location,t).href,{},[t.pathname],n);c.props.page!==void 0&&(M=c.props.page),q.$set(c.props)}}function Oe(t){i.some(l=>l==null?void 0:l.snapshot)&&(te[t]=i.map(l=>{var n;return(n=l==null?void 0:l.snapshot)==null?void 0:n.capture()}))}function xe(t){var l;(l=te[t])==null||l.forEach((n,c)=>{var r,d;(d=(r=i[c])==null?void 0:r.snapshot)==null||d.restore(n)})}function Pe(){Re($),Ge(et,J),Oe($),Ge(Qe,te)}async function ie(t,{noScroll:l=!1,replaceState:n=!1,keepFocus:c=!1,state:r={},invalidateAll:d=!1},g,E){return typeof t=="string"&&(t=new URL(t,ze(document))),fe({url:t,scroll:l?ne():null,keepfocus:c,redirect_chain:g,details:{state:r,replaceState:n},nav_token:E,accepted:()=>{d&&(B=!0)},blocked:()=>{},type:"goto"})}async function Ne(t){return h={id:t.id,promise:ye(t).then(l=>(l.type==="loaded"&&l.state.error&&(h=null),l))},h.promise}async function se(...t){const n=s.filter(c=>t.some(r=>c.exec(r))).map(c=>Promise.all([...c.layouts,c.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(n)}function Te(t){var c;m=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),M=t.props.page,q=new e.root({target:a,props:{...t.props,stores:F,components:i},hydrate:!0}),xe($);const n={from:null,to:{params:m.params,route:{id:((c=m.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(r=>r(n)),P=!0}async function Z({url:t,params:l,branch:n,status:c,error:r,route:d,form:g}){let E="never";for(const y of n)(y==null?void 0:y.slash)!==void 0&&(E=y.slash);t.pathname=it(t.pathname,E),t.search=t.search;const v={type:"loaded",state:{url:t,params:l,branch:n,error:r,route:d},props:{constructors:Nt(n).map(y=>y.node.component)}};g!==void 0&&(v.props.form=g);let b={},R=!M,A=0;for(let y=0;y<Math.max(n.length,m.branch.length);y+=1){const w=n[y],x=m.branch[y];(w==null?void 0:w.data)!==(x==null?void 0:x.data)&&(R=!0),w&&(b={...b,...w.data},R&&(v.props[`data_${A}`]=b),A+=1)}return(!m.url||t.href!==m.url.href||m.error!==r||g!==void 0&&g!==M.form||R)&&(v.props.page={error:r,params:l,route:{id:(d==null?void 0:d.id)??null},status:c,url:new URL(t),form:g??null,data:R?b:M.data}),v}async function me({loader:t,parent:l,url:n,params:c,route:r,server_data_node:d}){var b,R,A;let g=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await t();if((b=v.universal)!=null&&b.load){let I=function(...w){for(const x of w){const{href:T}=new URL(x,n);E.dependencies.add(T)}};const y={route:{get id(){return E.route=!0,r.id}},params:new Proxy(c,{get:(w,x)=>(E.params.add(x),w[x])}),data:(d==null?void 0:d.data)??null,url:ft(n,()=>{E.url=!0}),async fetch(w,x){let T;w instanceof Request?(T=w.url,x={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...x}):T=w;const D=new URL(T,n);return I(D.href),D.origin===n.origin&&(T=D.href.slice(n.origin.length)),P?mt(T,D.href,x):gt(T,x)},setHeaders:()=>{},depends:I,parent(){return E.parent=!0,l()}};g=await v.universal.load.call(null,y)??null,g=g?await $t(g):null}return{node:v,loader:t,server:d,universal:(R=v.universal)!=null&&R.load?{type:"data",data:g,uses:E}:null,data:g??(d==null?void 0:d.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(d==null?void 0:d.slash)}}function $e(t,l,n,c,r){if(B)return!0;if(!c)return!1;if(c.parent&&t||c.route&&l||c.url&&n)return!0;for(const d of c.params)if(r[d]!==m.params[d])return!0;for(const d of c.dependencies)if(_.some(g=>g(new URL(d))))return!0;return!1}function _e(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function ye({id:t,invalidating:l,url:n,params:c,route:r}){if((h==null?void 0:h.id)===t)return h.promise;const{errors:d,layouts:g,leaf:E}=r,v=[...g,E];d.forEach(k=>k==null?void 0:k().catch(()=>{})),v.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const R=m.url?t!==m.url.pathname+m.url.search:!1,A=m.route?r.id!==m.route.id:!1;let I=!1;const y=v.map((k,U)=>{var H;const L=m.branch[U],j=!!(k!=null&&k[0])&&((L==null?void 0:L.loader)!==k[1]||$e(I,A,R,(H=L.server)==null?void 0:H.uses,c));return j&&(I=!0),j});if(y.some(Boolean)){try{b=await We(n,y)}catch(k){return ce({status:k instanceof ae?k.status:500,error:await ee(k,{url:n,params:c,route:{id:r.id}}),url:n,route:r})}if(b.type==="redirect")return b}const w=b==null?void 0:b.nodes;let x=!1;const T=v.map(async(k,U)=>{var we;if(!k)return;const L=m.branch[U],j=w==null?void 0:w[U];if((!j||j.type==="skip")&&k[1]===(L==null?void 0:L.loader)&&!$e(x,A,R,(we=L.universal)==null?void 0:we.uses,c))return L;if(x=!0,(j==null?void 0:j.type)==="error")throw j;return me({loader:k[1],url:n,params:c,route:r,parent:async()=>{var Me;const qe={};for(let be=0;be<U;be+=1)Object.assign(qe,(Me=await T[be])==null?void 0:Me.data);return qe},server_data_node:_e(j===void 0&&k[0]?{type:"skip"}:j??null,k[0]?L==null?void 0:L.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<v.length;k+=1)if(v[k])try{D.push(await T[k])}catch(U){if(U instanceof Ke)return{type:"redirect",location:U.location};let L=500,j;if(w!=null&&w.includes(U))L=U.status??L,j=U.error;else if(U instanceof ae)L=U.status,j=U.body;else{if(await F.updated.check())return await K(n);j=await ee(U,{params:c,url:n,route:{id:r.id}})}const H=await je(k,D,d);return H?await Z({url:n,params:c,branch:D.slice(0,H.idx).concat(H.node),status:L,error:j,route:r}):await De(n,{id:r.id},j,L)}else D.push(void 0);return await Z({url:n,params:c,branch:D,status:200,error:null,route:r,form:l?void 0:null})}async function je(t,l,n){for(;t--;)if(n[t]){let c=t;for(;!l[c];)c-=1;try{return{idx:c+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:l,url:n,route:c}){const r={};let d=null;if(e.server_loads[0]===0)try{const b=await We(n,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;d=b.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||C)&&await K(n)}const E=await me({loader:o,url:n,params:r,route:c,parent:()=>Promise.resolve({}),server_data_node:_e(d)}),v={node:await u(),loader:u,universal:null,server:null,data:null};return await Z({url:n,params:r,branch:[E,v],status:t,error:l,route:null})}function Q(t,l){if(de(t,G))return;const n=le(t);for(const c of s){const r=c.exec(n);if(r)return{id:t.pathname+t.search,invalidating:l,route:c,params:ct(r),url:t}}}function le(t){return st(t.pathname.slice(G.length)||"/")}function Ce({url:t,type:l,intent:n,delta:c}){var E,v;let r=!1;const d={from:{params:m.params,route:{id:((E=m.route)==null?void 0:E.id)??null},url:m.url},to:{params:(n==null?void 0:n.params)??null,route:{id:((v=n==null?void 0:n.route)==null?void 0:v.id)??null},url:t},willUnload:!n,type:l};c!==void 0&&(d.delta=c);const g={...d,cancel:()=>{r=!0}};return O||p.before_navigate.forEach(b=>b(g)),r?null:d}async function fe({url:t,scroll:l,keepfocus:n,redirect_chain:c,details:r,type:d,delta:g,nav_token:E={},accepted:v,blocked:b}){var T,D,k;const R=Q(t,!1),A=Ce({url:t,type:d,delta:g,intent:R});if(!A){b();return}const I=$;v(),O=!0,P&&F.navigating.set(A),oe=E;let y=R&&await ye(R);if(!y){if(de(t,G))return await K(t);y=await De(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(R==null?void 0:R.url)||t,oe!==E)return!1;if(y.type==="redirect")if(c.length>10||c.includes(t.pathname))y=await ce({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(y.location,t).href,{},[...c,t.pathname],E),!1;else((T=y.props.page)==null?void 0:T.status)>=400&&await F.updated.check()&&await K(t);if(_.length=0,B=!1,N=!0,Re(I),Oe(I),(D=y.props.page)!=null&&D.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),r){const U=r.replaceState?0:1;if(r.state[V]=$+=U,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let L=$+1;for(;te[L]||J[L];)delete te[L],delete J[L],L+=1}}h=null,P?(m=y.state,y.props.page&&(y.props.page.url=t),q.$set(y.props)):Te(y);const{activeElement:w}=document;if(await Ee(),S){const U=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):U?U.scrollIntoView():scrollTo(0,0)}const x=document.activeElement!==w&&document.activeElement!==document.body;!n&&!x&&Ae(),S=!0,y.props.page&&(M=y.props.page),O=!1,d==="popstate"&&xe($),p.after_navigate.forEach(U=>U(A)),F.navigating.set(null),N=!1}async function De(t,l,n,c){return t.origin===location.origin&&t.pathname===location.pathname&&!C?await ce({status:c,error:n,url:t,route:l}):await K(t)}function K(t){return location.href=t.href,new Promise(()=>{})}function rt(){let t;f.addEventListener("mousemove",d=>{const g=d.target;clearTimeout(t),t=setTimeout(()=>{c(g,2)},20)});function l(d){c(d.composedPath()[0],1)}f.addEventListener("mousedown",l),f.addEventListener("touchstart",l,{passive:!0});const n=new IntersectionObserver(d=>{for(const g of d)g.isIntersecting&&(se(le(new URL(g.target.href))),n.unobserve(g.target))},{threshold:0});function c(d,g){const E=He(d,f);if(!E)return;const{url:v,external:b,download:R}=Se(E,G);if(b||R)return;const A=ue(E);if(!A.reload)if(g<=A.preload_data){const I=Q(v,!1);I&&Ne(I)}else g<=A.preload_code&&se(le(v))}function r(){n.disconnect();for(const d of f.querySelectorAll("a")){const{url:g,external:E,download:v}=Se(d,G);if(E||v)continue;const b=ue(d);b.reload||(b.preload_code===pe.viewport&&n.observe(d),b.preload_code===pe.eager&&se(le(g)))}}p.after_navigate.push(r),r()}function ee(t,l){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Fe(()=>(p.after_navigate.push(t),()=>{const l=p.after_navigate.indexOf(t);p.after_navigate.splice(l,1)}))},before_navigate:t=>{Fe(()=>(p.before_navigate.push(t),()=>{const l=p.before_navigate.indexOf(t);p.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(N||!P)&&(S=!1)},goto:(t,l={})=>ie(t,l,[]),invalidate:t=>{if(typeof t=="function")_.push(t);else{const{href:l}=new URL(t,location.href);_.push(n=>n.href===l)}return Ue()},invalidate_all:()=>(B=!0,Ue()),preload_data:async t=>{const l=new URL(t,ze(document)),n=Q(l,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await Ne(n)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:n,route:c}=m;if(!c)return;const r=await je(m.branch.length,n,c.errors);if(r){const d=await Z({url:l,params:m.params,branch:n.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:c});m=d.state,q.$set(d.props),Ee().then(Ae)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...M,form:t.data,status:t.status}}),await Ee(),q.$set({form:t.data}),t.type==="success"&&Ae())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var r;let c=!1;if(Pe(),!O){const d={from:{params:m.params,route:{id:((r=m.route)==null?void 0:r.id)??null},url:m.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};p.before_navigate.forEach(g=>g(d))}c?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(l=navigator.connection)!=null&&l.saveData||rt(),f.addEventListener("click",n=>{var I;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const c=He(n.composedPath()[0],f);if(!c)return;const{url:r,external:d,target:g,download:E}=Se(c,G);if(!r)return;if(g==="_parent"||g==="_top"){if(window.parent!==window)return}else if(g&&g!=="_self")return;const v=ue(c);if(!(c instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||E)return;if(d||v.reload){Ce({url:r,type:"link"})?O=!0:n.preventDefault();return}const[R,A]=r.href.split("#");if(A!==void 0&&R===location.href.split("#")[0]){if(m.url.hash===r.hash){n.preventDefault(),(I=c.ownerDocument.getElementById(A))==null||I.scrollIntoView();return}if(z=!0,Re($),t(r),!v.replace_state)return;z=!1,n.preventDefault()}fe({url:r,scroll:v.noscroll?ne():null,keepfocus:v.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:v.replace_state??r.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formMethod)||c.method)!=="get")return;const g=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||c.action);if(de(g,G))return;const E=n.target,{keep_focus:v,noscroll:b,reload:R,replace_state:A}=ue(E);if(R)return;n.preventDefault(),n.stopPropagation();const I=new FormData(E),y=r==null?void 0:r.getAttribute("name");y&&I.append(y,(r==null?void 0:r.getAttribute("value"))??""),g.search=new URLSearchParams(I).toString(),fe({url:g,scroll:b?ne():null,keepfocus:v??!1,redirect_chain:[],details:{state:{},replaceState:A??g.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var c;if((c=n.state)!=null&&c[V]){if(n.state[V]===$)return;const r=J[n.state[V]];if(m.url.href.split("#")[0]===location.href.split("#")[0]){J[$]=ne(),$=n.state[V],scrollTo(r.x,r.y);return}const d=n.state[V]-$;await fe({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=n.state[V]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}else if(!z){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&F.navigating.set(null)});function t(n){m.url=n,F.page.set({...M,url:n}),F.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:n,params:c,route:r,data:d,form:g})=>{C=!0;const E=new URL(location.href);({params:c={},route:r={id:null}}=Q(E,!1)||{});let v;try{const b=n.map(async(I,y)=>{const w=d[y];return w!=null&&w.uses&&(w.uses=at(w.uses)),me({loader:e.nodes[I],url:E,params:c,route:r,parent:async()=>{const x={};for(let T=0;T<y;T+=1)Object.assign(x,(await b[T]).data);return x},server_data_node:_e(w)})}),R=await Promise.all(b),A=s.find(({id:I})=>I===r.id);if(A){const I=A.layouts;for(let y=0;y<I.length;y++)I[y]||R.splice(y,0,void 0)}v=await Z({url:E,params:c,branch:R,status:t,error:l,form:g,route:A??null})}catch(b){if(b instanceof Ke){await K(new URL(b.location,location.href));return}v=await ce({status:b instanceof ae?b.status:500,error:await ee(b,{url:E,params:c,route:r}),url:E,route:r})}Te(v)}}}async function We(e,a){const s=new URL(e);s.pathname=pt(e.pathname),e.pathname.endsWith("/")&&s.searchParams.append(Ct,"1"),s.searchParams.append(jt,a.map(u=>u?"1":"0").join(""));const o=await he(s.href);if(!o.ok)throw new ae(o.status,await o.json());return new Promise(async u=>{var m;const f=new Map,_=o.body.getReader(),i=new TextDecoder;function h(C){return Pt(C,{Promise:P=>new Promise((S,N)=>{f.set(P,{fulfil:S,reject:N})})})}let p="";for(;;){const{done:C,value:P}=await _.read();if(C&&!p)break;for(p+=!P&&p?`
`:i.decode(P);;){const S=p.indexOf(`
`);if(S===-1)break;const N=JSON.parse(p.slice(0,S));if(p=p.slice(S+1),N.type==="redirect")return u(N);if(N.type==="data")(m=N.nodes)==null||m.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=at(O.uses),O.data=h(O.data))}),u(N);else if(N.type==="chunk"){const{id:O,data:z,error:B}=N,q=f.get(O);f.delete(O),B?q.reject(h(B)):q.fulfil(h(z))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,s=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),s!==null?a.setAttribute("tabindex",s):a.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const u=[];for(let f=0;f<o.rangeCount;f+=1)u.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===u.length){for(let f=0;f<o.rangeCount;f+=1){const _=u[f],i=o.getRangeAt(f);if(_.commonAncestorContainer!==i.commonAncestorContainer||_.startContainer!==i.startContainer||_.endContainer!==i.endContainer||_.startOffset!==i.startOffset||_.endOffset!==i.endOffset)return}o.removeAllRanges()}})}}}async function Mt(e,a,s){const o=Vt(e,a);Dt({client:o}),s?await o._hydrate(s):o.goto(location.href,{replaceState:!0}),o._start_router()}export{Mt as start};
