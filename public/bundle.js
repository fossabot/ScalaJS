!function(t){var e={};function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);a(1);console.log("Webpack'd scripts loaded.")},function(t,e){(function(){"use strict";Object.freeze({assumingES6:!0,productionMode:!0,linkerVersion:"1.0.1",fileLevelThis:this});const t=Math.imul,e=Math.clz32;let a;class s{constructor(t){this.pb=t}toString(){return String.fromCharCode(this.pb)}}function n(t,e){return r(t,e,0)}var r=function t(e,a,s){const n=new e.Sa(a[s]);if(s<a.length-1){e=e.ra,s+=1;const r=n.g;for(let n=0;n<r.length;n++)r[n]=t(e,a,s)}return n};function c(t){switch(typeof t){case"string":return w(Ee);case"number":return f(t)?w(t<<24>>24===t?$e:t<<16>>16===t?je:ye):w(ge);case"boolean":return w(Qt);case"undefined":return w(Y);default:return null===t?t.gc():t instanceof Ae?w(xe):t instanceof s?w(Xt):t&&t.$classData?w(t.$classData):null}}function i(t){switch(typeof t){case"string":return"java.lang.String";case"number":return f(t)?t<<24>>24===t?"java.lang.Byte":t<<16>>16===t?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case"boolean":return"java.lang.Boolean";case"undefined":return"java.lang.Void";default:return null===t?t.gc():t instanceof Ae?"java.lang.Long":t instanceof s?"java.lang.Character":t&&t.$classData?t.$classData.name:null.W.name}}function o(t){return void 0===t?"undefined":t.toString()}function l(t){switch(typeof t){case"string":return Se(t);case"number":return t=+t,N(K(),t);case"boolean":return t?1231:1237;case"undefined":return 0;default:return t&&t.$classData||null===t?t.V():t instanceof s?p(t):d(t)}}let u=0;const h=new WeakMap;function d(t){switch(typeof t){case"string":case"number":case"bigint":case"boolean":case"undefined":return l(t);default:if(null===t)return 0;{let e=h.get(t);return void 0===e&&(u=e=u+1|0,h.set(t,e)),e}}}function f(t){return"number"==typeof t&&(0|t)===t&&1/t!=-1/0}const b=new s(0);function p(t){return null===t?0:t.pb}function w(t){return t.Pa||(t.Pa=new T(t)),t.Pa}function m(t,e,a,s){var n=new g;return n.J={},n.mb=t,n.qa=e,n.Ua=s,n.name=a,n.isPrimitive=!0,n.isInstance=function(){return!1},n}function $(t,e,a,s,n){var r=new g;const c=function(t){for(const e in t)return e}(t);return r.J=a,r.qa="L"+e+";",r.Ua=n||function(t,e){return!!(t&&t.$classData&&t.$classData.w===e&&t.$classData.v.J[c])},r.name=e,r.isInterface=!1,r.isInstance=s||function(t){return!!(t&&t.$classData&&t.$classData.J[c])},r}function v(t){return t.Oa||(t.Oa=(new g).hc(t)),t.Oa}class g{constructor(){this.Sa=void 0,this.v=this.ra=this.J=null,this.w=0,this.mb=null,this.qa="",this.Ua=this.Oa=this.Pa=void 0,this.name="",this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1,this.isInstance=void 0}hc(t){const e="longZero"===t.mb?a:t.mb;class s extends M{constructor(t){if(super(),"number"==typeof t){this.g=Array(t);for(let a=0;a<t;a++)this.g[a]=e}else this.g=t}}s.prototype.$classData=this;const n="["+t.qa,r=t.v||t,c=t.w+1;return this.Sa=s,this.J={a:1,Va:1,b:1},this.ra=t,this.v=r,this.w=c,this.name=this.qa=n,this.isArrayClass=!0,this.isInstance=function(t){return r.Ua(t,c)},this}isAssignableFrom(t){return this.isPrimitive||t.isPrimitive?this===t:this.isInstance(t===Ee?"":t!==Qt&&(t===$e||t===je||t===ye||t===ge||t===ve?0:t===xe?a:t===Xt?b:t===Y?void 0:{$classData:t}))}checkCast(){}getSuperclass(){return this.Qc?w(this.Qc):null}getComponentType(){return this.ra?w(this.ra):null}newArrayOfThisClass(t){let e=this;for(let a=0;a<t.length;a++)e=v(e);return n(e,t)}}function y(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==I)}function x(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==A)}function D(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==B)}function j(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==L)}function S(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==q)}function E(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==V)}function k(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==O)}function C(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==z)}const I=m(!1,"Z","boolean",y),A=m(0,"C","char",x),B=m(0,"B","byte",D),L=m(0,"S","short",j),q=m(0,"I","int",S),V=m("longZero","J","long",E),O=m(0,"F","float",k),z=m(0,"D","double",C);class M{V(){return d(this)}u(){return i(this)+"@"+(+(this.V()>>>0)).toString(16)}toString(){return this.u()}}function F(t,e){if(t=t&&t.$classData){const a=t.w||0;return!(a<e)&&(a>e||!t.v.isPrimitive)}return!1}const P=$({a:0},"java.lang.Object",{a:1},(function(t){return null!==t}),F);M.prototype.$classData=P;class T extends M{constructor(t){super(),this.W=t}u(){return(this.W.isInterface?"interface ":this.W.isPrimitive?"":"class ")+this.W.name}}const J=$({pc:0},"java.lang.Class",{pc:1,a:1});function N(t,e){const a=0|e;return a===e&&-1/0!=1/e?a:(t.ub[0]=e,(t=new Ae(0|t.ua[t.wb],0|t.ua[t.vb])).Q^t.U)}T.prototype.$classData=J;class R extends M{constructor(){super(),this.ub=this.ua=this.ia=null,this.Wa=!1,this.wb=this.vb=0,G=this,this.ia=new ArrayBuffer(8),this.ua=new Int32Array(this.ia,0,2),new Float32Array(this.ia,0,2),this.ub=new Float64Array(this.ia,0,1),this.ua[0]=16909060,this.vb=(this.Wa=1==(0|new Int8Array(this.ia,0,8)[0]))?0:1,this.wb=this.Wa?1:0}}const H=$({sc:0},"java.lang.FloatingPointBits$",{sc:1,a:1});R.prototype.$classData=H;let G=void 0;function K(){return G||(G=new R),G}class U extends M{constructor(){super(),this.zb=null,Z=this,this.zb=new ja(!1),new ja(!0)}}const W=$({Fc:0},"java.lang.System$Streams$",{Fc:1,a:1});U.prototype.$classData=W;let Z=void 0;function Q(){return Z||(Z=new U),Z}function X(t){return!!(t&&t.$classData&&1===t.$classData.w&&t.$classData.v.J.Bb)}$({Gc:0},"java.lang.System$SystemProperties$",{Gc:1,a:1}),$({Lc:0},"java.lang.Utils$",{Lc:1,a:1}),$({Mc:0},"java.lang.Utils$Cache$",{Mc:1,a:1});const Y=$({Bb:0},"java.lang.Void",{Bb:1,a:1},t=>void 0===t);function _(){at||(at=new tt);var t=at;return 0==(67108864&t.P)&&0==(67108864&t.P)&&(0==(33554432&t.P)&&0==(33554432&t.P)&&(t.ob=window,t.P|=33554432),t.nb=t.ob.document,t.P|=67108864),t.nb}$({Nc:0},"java.lang.reflect.Array$",{Nc:1,a:1}),$({Oc:0},"java.util.Arrays$",{Oc:1,a:1});class tt extends M{constructor(){super(),this.nb=this.ob=null,this.P=0}}const et=$({ac:0},"org.scalajs.dom.package$",{ac:1,a:1});tt.prototype.$classData=et;let at=void 0;function st(t,e,a,s,n){const r=e.y;if(0!=(0|a.length)&&(r.c=""+r.c+a),(t=t.e()).h())for(a=t.j(),r.c=""+r.c+a;t.h();)r.c=""+r.c+s,a=t.j(),r.c=""+r.c+a;return 0!=(0|n.length)&&(r.c=""+r.c+n),e}$({Zd:0},"scala.runtime.BoxesRunTime$",{Zd:1,a:1});class nt extends M{}const rt=$({be:0},"scala.runtime.ScalaRunTime$",{be:1,a:1});nt.prototype.$classData=rt;let ct=void 0;function it(t,e){if(null===e)return 0;if("number"==typeof e){if((e=2147483647<(t=+e)?2147483647:-2147483648>t?-2147483648:0|t)===t)t=e;else{var s=e=Lt();if(-0x8000000000000000>t)s.pa=-2147483648,s=0;else if(0x8000000000000000<=t)s.pa=2147483647,s=-1;else{const e=0|t,a=t/4294967296|0;s.pa=0>t&&0!==e?-1+a|0:a,s=e}e=e.pa,Lt(),t=(0>e?-(4294967296*+((0!==s?~e:0|-e)>>>0)+ +((0|-s)>>>0)):4294967296*e+ +(s>>>0))===t?s^e:N(K(),t)}return t}return e instanceof Ae?(t=(e=new Ae((t=null===e?a:e).Q,t.U)).Q,t=(e=e.U)===t>>31?t:t^e):l(e)}class ot extends M{}const lt=$({ce:0},"scala.runtime.Statics$",{ce:1,a:1});ot.prototype.$classData=lt;let ut=void 0;function ht(){return ut||(ut=new ot),ut}$({de:0},"scala.runtime.Statics$PFMarker$",{de:1,a:1});class dt extends M{}const ft=$({Yd:0},"scala.scalajs.runtime.package$",{Yd:1,a:1});dt.prototype.$classData=ft;let bt=void 0;class pt extends M{constructor(t){super(),this.Eb=t}u(){return"DynamicVariable("+this.Eb+")"}}const wt=$({Uc:0},"scala.util.DynamicVariable",{Uc:1,a:1});function mt(e,a){return a=t(-862048943,a),a=t(461845907,a<<15|a>>>17|0),-430675100+t(5,(e^=a)<<13|e>>>19|0)|0}function $t(e){return e=t(-2048144789,e^(e>>>16|0)),(e=t(-1028477387,e^(e>>>13|0)))^(e>>>16|0)}pt.prototype.$classData=wt;class vt extends M{}function gt(t,e){const a=_().createElement("p");a.textContent=e,t.appendChild(a)}class yt extends M{}const xt=$({bc:0},"tutorial.webapp.TutorialApp$",{bc:1,a:1});yt.prototype.$classData=xt;let Dt=void 0;function jt(){Dt||(Dt=new yt)}$({oc:0},"java.lang.Character$",{oc:1,a:1,b:1}),$({uc:0},"java.lang.Integer$",{uc:1,a:1,b:1});class St extends M{}function Et(t,e){t.Ab=e,t.Hc=null,t.Ic=!0,t.Jc=!0,t.rb()}$({Cc:0},"java.lang.String$",{Cc:1,a:1,b:1});class kt extends Error{constructor(){super(),this.Hc=this.Ab=null,this.Jc=this.Ic=!1}ta(){return this.Ab}rb(){"[object Error]"!==Object.prototype.toString.call(this)&&void 0!==Error.captureStackTrace&&Error.captureStackTrace(this)}u(){const t=i(this),e=this.ta();return null===e?t:t+": "+e}V(){return M.prototype.V.call(this)}get message(){var t=this.ta();return null===t?"":t}get name(){return i(this)}toString(){return this.u()}}function Ct(t,a){if(0==(-2097152&a))a=""+(4294967296*a+ +(t>>>0));else{var s=(32+e(1e9)|0)-(0!==a?e(a):32+e(t)|0)|0,n=s,r=0==(32&n)?1e9<<n:0;n=0==(32&n)?5e8>>>(31-n|0)|0|0<<n:1e9<<n;var c=t,i=a;for(t=a=0;0<=s&&0!=(-2097152&i);){var o=c,l=i;const e=r,u=n;(l===u?(-2147483648^o)>=(-2147483648^e):(-2147483648^l)>=(-2147483648^u))&&(o=i,l=n,o=(-2147483648^(i=c-r|0))>(-2147483648^c)?(o-l|0)-1|0:o-l|0,c=i,i=o,32>s?a|=1<<s:t|=1<<s),s=-1+s|0,r=r>>>1|0|n<<31,n=o=n>>>1|0}(0===(s=i)?-1147483648<=(-2147483648^c):-2147483648<=(-2147483648^s))&&(r=(n=(s=4294967296*i+ +(c>>>0))/1e9)/4294967296|0,t=(-2147483648^(n=a+(0|n)|0))<(-2147483648^a)?1+(t+r|0)|0:t+r|0,a=n,c=s%1e9|0),a=""+(4294967296*t+ +(a>>>0))+"000000000".substring(0|(s=""+c).length)+s}return a}class It extends M{constructor(){super(),this.pa=0}}const At=$({dc:0},"org.scalajs.linker.runtime.RuntimeLong$",{dc:1,a:1,b:1});It.prototype.$classData=At;let Bt=void 0;function Lt(){return Bt||(Bt=new It),Bt}function qt(t,e,n,r,i){var o;if((o=!!(t=c(e)).W.isArrayClass)&&(o=!!c(n).W.isAssignableFrom(t.W)),o)if((e=e.g)!==(n=n.g)||0>r||(0+i|0)<r)for(t=0;t<i;t=t+1|0)n[r+t|0]=e[0+t|0];else for(t=i-1|0;0<=t;t=t-1|0)n[r+t|0]=e[0+t|0];else for(t=0,i=0+i|0;t<i;){ct||(ct=new nt);var l=n;o=r,ct||(ct=new nt);var u=e;if(F(u,1)||S(u,1)||C(u,1)||E(u,1)||k(u,1))u=u.g[t];else if(x(u,1))u=new s(u.g[t]);else{if(!(D(u,1)||j(u,1)||y(u,1)||X(u))){if(null===u)throw new Re;throw new Qe(u)}u=u.g[t]}if(F(l,1))l.g[o]=u;else if(S(l,1))l.g[o]=0|u;else if(C(l,1))l.g[o]=+u;else if(E(l,1))l.g[o]=null===u?a:u;else if(k(l,1))l.g[o]=+u;else if(x(l,1))l.g[o]=p(u);else if(D(l,1))l.g[o]=0|u;else if(j(l,1))l.g[o]=0|u;else if(y(l,1))l.g[o]=!!u;else{if(!X(l)){if(null===l)throw new Re;throw new Qe(l)}l.g[o]=void 0}t=1+t|0,r=1+r|0}}class Vt extends M{}const Ot=$({Rc:0},"scala.Array$",{Rc:1,a:1,b:1});Vt.prototype.$classData=Ot;let zt=void 0;function Mt(){return zt||(zt=new Vt),zt}class Ft extends M{constructor(){super(),this.Cb=null,Tt=this,this.Cb=new pt(Q().zb),Q()}}const Pt=$({Sc:0},"scala.Console$",{Sc:1,a:1,ie:1});Ft.prototype.$classData=Pt;let Tt=void 0;$({yd:0},"scala.collection.immutable.List$$anon$1",{yd:1,a:1,I:1});class Jt extends M{u(){return"<function0>"}}class Nt extends M{constructor(t){super(),this.kb=t}u(){return""+this.kb}}const Rt=$({$d:0},"scala.runtime.IntRef",{$d:1,a:1,b:1});Nt.prototype.$classData=Rt;class Ht extends M{constructor(t){super(),this.lb=t}u(){return""+this.lb}}const Gt=$({ae:0},"scala.runtime.ObjectRef",{ae:1,a:1,b:1});Ht.prototype.$classData=Gt;class Kt extends vt{constructor(){super(),this.za=0,Wt=this,this.za=Se("Seq"),Se("Map"),Se("Set")}}const Ut=$({Vc:0},"scala.util.hashing.MurmurHash3$",{Vc:1,je:1,a:1});Kt.prototype.$classData=Ut;let Wt=void 0;function Zt(){return Wt||(Wt=new Kt),Wt}const Qt=$({lc:0},"java.lang.Boolean",{lc:1,a:1,b:1,K:1},t=>"boolean"==typeof t),Xt=$({nc:0},"java.lang.Character",{nc:1,a:1,b:1,K:1},t=>t instanceof s);class Yt extends kt{}const _t=$({C:0},"java.lang.Exception",{C:1,F:1,a:1,b:1});function te(t,e){if(0>e)return 1;var a=t.k();if(0<=a)return a===e?0:a<e?-1:1;for(a=0,t=t.e();t.h();){if(a===e)return t.h()?1:0;t.j(),a=1+a|0}return a-e|0}Yt.prototype.$classData=_t;class ee extends M{constructor(){super(),this.ka=null,se=this,this.ka=new Ye}R(t){return t.e()}}const ae=$({ad:0},"scala.collection.Iterator$",{ad:1,a:1,S:1,b:1});ee.prototype.$classData=ae;let se=void 0;function ne(){return se||(se=new ee),se}class re extends M{R(t){return function(t,e){return e&&e.$classData&&e.$classData.J.T?e:e&&e.$classData&&e.$classData.J.o?new ka(new pe((a=e,()=>a.e()))):(t=Ve(Fe(),e),Ma(new Fa,t));var a}(this,t)}}const ce=$({gd:0},"scala.collection.View$",{gd:1,a:1,S:1,b:1});re.prototype.$classData=ce;let ie=void 0;class oe extends M{constructor(t,e){super(),this.td=t,this.ud=e}q(){return this.td}n(){return this.ud}}const le=$({sd:0},"scala.collection.immutable.LazyList$State$Cons",{sd:1,a:1,rd:1,b:1});oe.prototype.$classData=le;class ue extends M{Ta(){throw new We("head of empty lazy list")}n(){throw Ge("tail of empty lazy list")}q(){this.Ta()}}const he=$({vd:0},"scala.collection.immutable.LazyList$State$Empty$",{vd:1,a:1,rd:1,b:1});ue.prototype.$classData=he;let de=void 0;function fe(){return de||(de=new ue),de}function be(t){return(0,t.Wd)()}class pe extends Jt{constructor(t){super(),this.Wd=t}}const we=$({Vd:0},"scala.scalajs.runtime.AnonFunction0",{Vd:1,ne:1,a:1,ee:1});pe.prototype.$classData=we,$({Xd:0},"scala.scalajs.runtime.AnonFunction1",{Xd:1,oe:1,a:1,I:1});class me extends M{}const $e=$({mc:0},"java.lang.Byte",{mc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t&&t<<24>>24===t&&1/t!=-1/0),ve=$({qc:0},"java.lang.Double",{qc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t),ge=$({rc:0},"java.lang.Float",{rc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t),ye=$({tc:0},"java.lang.Integer",{tc:1,ea:1,a:1,b:1,K:1},t=>f(t)),xe=$({yc:0},"java.lang.Long",{yc:1,ea:1,a:1,b:1,K:1},t=>t instanceof Ae);class De extends Yt{}const je=$({Bc:0},"java.lang.Short",{Bc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t&&t<<16>>16===t&&1/t!=-1/0);function Se(e){let a=0,s=1,n=(0|e.length)-1|0;for(;0<=n;)a=a+t(65535&(0|e.charCodeAt(n)),s)|0,s=t(31,s),n=-1+n|0;return a}const Ee=$({ec:0},"java.lang.String",{ec:1,a:1,b:1,K:1,tb:1},t=>"string"==typeof t);function ke(t){return t.c="",t}class Ce extends M{constructor(){super(),this.c=null}u(){return this.c}i(){return 0|this.c.length}}const Ie=$({Dc:0},"java.lang.StringBuilder",{Dc:1,a:1,tb:1,ic:1,b:1});Ce.prototype.$classData=Ie;class Ae extends St{constructor(t,e){super(),this.Q=t,this.U=e}V(){return this.Q^this.U}u(){Lt();var t=this.Q,e=this.U;return e===t>>31?""+t:0>e?"-"+Ct(0|-t,0!==t?~e:0|-e):Ct(t,e)}}const Be=$({cc:0},"org.scalajs.linker.runtime.RuntimeLong",{cc:1,ea:1,a:1,b:1,K:1});Ae.prototype.$classData=Be;class Le extends M{e(){return this}d(){return!this.h()}qb(t){{let e=0;for(;e<t&&this.h();)this.j(),e=1+e|0}return this}u(){return"<iterator>"}Ra(t,e,a,s){return st(this,t,e,a,s)}k(){return-1}}class qe extends M{constructor(){super(),this.Hb=null}R(t){return this.Hb.R(t)}}function Ve(t,e){return e instanceof Ya?e:0===e.k()?t.fb:new Ya(new pe((a=e,()=>function t(e,a){if(a.h()){const e=a.j();return new oe(e,new Ya(new pe(((e,a)=>()=>t(Fe(),a))(0,a))))}return fe()}(Fe(),a.e()))));var a}class Oe extends M{constructor(){super(),this.fb=null,Me=this,this.fb=Qa(new Ya(new pe(()=>fe())))}R(t){return Ve(this,t)}}const ze=$({pd:0},"scala.collection.immutable.LazyList$",{pd:1,a:1,fa:1,S:1,b:1});Oe.prototype.$classData=ze;let Me=void 0;function Fe(){return Me||(Me=new Oe),Me}$({Fd:0},"scala.collection.immutable.WrappedString$",{Fd:1,a:1,le:1,ke:1,b:1}),$({Md:0},"scala.collection.mutable.Builder$$anon$1",{Md:1,a:1,ib:1,Na:1,Ma:1});class Pe extends me{constructor(){super()}}function Te(t,e){return Et(t,e),t}$({jc:0},"java.lang.ArithmeticException",{jc:1,L:1,C:1,F:1,a:1,b:1}),$({xb:0},"java.lang.IllegalArgumentException",{xb:1,L:1,C:1,F:1,a:1,b:1});class Je extends De{}const Ne=$({yb:0},"java.lang.IndexOutOfBoundsException",{yb:1,L:1,C:1,F:1,a:1,b:1});Je.prototype.$classData=Ne,$({wc:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{wc:1,$b:1,a:1,Yb:1,kc:1,Zb:1});class Re extends De{constructor(){super(),Et(this,null)}}const He=$({zc:0},"java.lang.NullPointerException",{zc:1,L:1,C:1,F:1,a:1,b:1});function Ge(t){var e=new Ke;return Et(e,t),e}Re.prototype.$classData=He;class Ke extends De{}const Ue=$({Kc:0},"java.lang.UnsupportedOperationException",{Kc:1,L:1,C:1,F:1,a:1,b:1});Ke.prototype.$classData=Ue;class We extends De{constructor(t){super(),Et(this,t)}}const Ze=$({Pc:0},"java.util.NoSuchElementException",{Pc:1,L:1,C:1,F:1,a:1,b:1});We.prototype.$classData=Ze;class Qe extends De{constructor(t){super(),this.Db=null,this.Za=!1,this.xa=t,Et(this,null)}ta(){if(!this.Za&&!this.Za){if(null===this.xa)var t="null";else try{t=o(this.xa)+" (of class "+i(this.xa)+")"}catch(e){if(bt||(bt=new dt),null===(e instanceof kt?e:new xa(e)))throw e;t="an instance of class "+i(this.xa)}this.Db=t,this.Za=!0}return this.Db}}const Xe=$({Tc:0},"scala.MatchError",{Tc:1,L:1,C:1,F:1,a:1,b:1});Qe.prototype.$classData=Xe,$({fc:0},"scala.Tuple2",{fc:1,a:1,he:1,ya:1,G:1,b:1});class Ye extends Le{h(){return!1}k(){return 0}j(){throw new We("next on empty iterator")}}const _e=$({bd:0},"scala.collection.Iterator$$anon$19",{bd:1,Aa:1,a:1,Ca:1,l:1,m:1});function ta(t,e){if(0>e)throw Te(new Je,""+e);if((t=t.B(e)).d())throw Te(new Je,""+e);return t.q()}Ye.prototype.$classData=_e;class ea extends Le{constructor(t){super(),this.Ea=t}h(){return!this.Ea.d()}j(){const t=this.Ea.q();return this.Ea=this.Ea.H(),t}}const aa=$({ed:0},"scala.collection.StrictOptimizedLinearSeqOps$$anon$1",{ed:1,Aa:1,a:1,Ca:1,l:1,m:1});ea.prototype.$classData=aa,$({md:0},"scala.collection.immutable.IndexedSeq$",{md:1,cd:1,a:1,fa:1,S:1,b:1});class sa extends Le{constructor(t){super(),this.na=t}h(){return!this.na.d()}j(){if(this.na.d())return ne().ka.j();{const t=Xa(this.na).q();return this.na=Xa(this.na).n(),t}}}const na=$({qd:0},"scala.collection.immutable.LazyList$LazyIterator",{qd:1,Aa:1,a:1,Ca:1,l:1,m:1});sa.prototype.$classData=na;class ra extends M{constructor(){super(),ia=this}R(t){return t instanceof es?t:0===t.k()?is():bs(t instanceof ws?t:ps(new ws,t))}}const ca=$({xd:0},"scala.collection.immutable.List$",{xd:1,a:1,cb:1,fa:1,S:1,b:1});ra.prototype.$classData=ca;let ia=void 0;$({Bd:0},"scala.collection.immutable.Vector$",{Bd:1,a:1,cb:1,fa:1,S:1,b:1});class oa extends M{R(t){var e=t.k();if(0<=e){var a=n(v(P),[16<e?e:16]);t=t.e();const s=-1+e|0;if(!(0>=e)){let e=0;for(;a.g[e]=t.j(),e!==s;)e=1+e|0}(t=new vs).M=a,t.f=e,a=t}else if(a=new vs,e=n(v(P),[16]),a.M=e,a.f=0,t instanceof vs)$s(a,a.f+t.f|0),qt(Mt(),t.M,a.M,a.f,t.f),a.f=a.f+t.f|0;else for(e=t.e();e.h();)a.Qa(e.j());return a}}const la=$({Id:0},"scala.collection.mutable.ArrayBuffer$",{Id:1,a:1,cb:1,fa:1,S:1,b:1});oa.prototype.$classData=la;let ua=void 0;function ha(){return ua||(ua=new oa),ua}class da extends qe{constructor(){super(),this.Hb=ha()}}const fa=$({Od:0},"scala.collection.mutable.IndexedSeq$",{Od:1,cd:1,a:1,fa:1,S:1,b:1});da.prototype.$classData=fa;let ba=void 0;class pa extends M{R(t){return ps(new ws,t)}}const wa=$({Rd:0},"scala.collection.mutable.ListBuffer$",{Rd:1,a:1,cb:1,fa:1,S:1,b:1});pa.prototype.$classData=wa;let ma=void 0;$({Ac:0},"java.lang.NumberFormatException",{Ac:1,xb:1,L:1,C:1,F:1,a:1,b:1}),$({Ec:0},"java.lang.StringIndexOutOfBoundsException",{Ec:1,yb:1,L:1,C:1,F:1,a:1,b:1});class $a extends M{ha(){return this.E()}sb(t){return this.da().R(t)}q(){return this.e().j()}B(t){return this.sa(Ia(new Aa,this,t))}H(){if(this.d()){var t=new Ke;throw Et(t,null),t}return this.B(1)}d(){return!this.e().h()}Ra(t,e,a,s){return st(this,t,e,a,s)}k(){return-1}sa(t){return this.sb(t)}}class va extends Le{constructor(t){super(),this.aa=0,this.$c=t,this.ja=0,this.aa=t.i()}k(){return this.aa}h(){return 0<this.aa}j(){if(this.h()){const t=this.$c.p(this.ja);return this.ja=1+this.ja|0,this.aa=-1+this.aa|0,t}return ne().ka.j()}qb(t){return 0<t&&(this.ja=this.ja+t|0,t=this.aa-t|0,this.aa=0>t?0:t),this}}const ga=$({Zc:0},"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{Zc:1,Aa:1,a:1,Ca:1,l:1,m:1,b:1});va.prototype.$classData=ga,$({Cd:0},"scala.collection.immutable.VectorBuilder",{Cd:1,a:1,Vb:1,ib:1,Na:1,Ma:1,Rb:1}),$({Dd:0},"scala.collection.immutable.VectorIterator",{Dd:1,Aa:1,a:1,Ca:1,l:1,m:1,Rb:1});class ya extends Pe{constructor(){super()}}class xa extends De{constructor(t){super(),this.jb=t,Et(this,null)}ta(){return o(this.jb)}rb(){}wa(){return"JavaScriptException"}Xa(){return 1}Ya(t){if(0!==t)throw ht(),Te(new Je,""+t);return t=this.jb}V(){Zt();var t=this.Xa();if(0===t)t=Se(this.wa());else{var e=mt(-889275714,Se(this.wa()));let a=0;for(;a<t;){const t=this.Ya(a);e=mt(e,it(ht(),t)),a=1+a|0}t=$t(e^t)}return t}}const Da=$({Ud:0},"scala.scalajs.js.JavaScriptException",{Ud:1,L:1,C:1,F:1,a:1,b:1,ya:1,G:1});xa.prototype.$classData=Da;class ja extends ya{constructor(t){super(),this.xc=t,this.va=""}}const Sa=$({vc:0},"java.lang.JSConsoleBasedPrintStream",{vc:1,ge:1,fe:1,$b:1,a:1,Yb:1,kc:1,Zb:1,ic:1});ja.prototype.$classData=Sa;class Ea extends $a{da(){return ie||(ie=new re),ie}u(){return this.ha()+"(<not computed>)"}E(){return"View"}}class ka extends Ea{constructor(t){super(),this.jd=t}e(){return be(this.jd)}}const Ca=$({hd:0},"scala.collection.View$$anon$1",{hd:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1});function Ia(t,e,a){return t.eb=e,t.Kb=a,t.Ga=0<a?a:0,t}ka.prototype.$classData=Ca;class Aa extends Ea{constructor(){super(),this.eb=null,this.Ga=this.Kb=0}e(){return this.eb.e().qb(this.Kb)}k(){var t=this.eb.k();return 0<=t?0<(t=t-this.Ga|0)?t:0:-1}d(){return!this.e().h()}}const Ba=$({db:0},"scala.collection.View$Drop",{db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1});Aa.prototype.$classData=Ba;class La extends $a{V(){var t=Zt();if(this&&this.$classData&&this.$classData.J.Ba)t:{var e=t.za;switch(t=this.i()){case 0:t=$t(0^e);break t;case 1:t=e,e=this.p(0),t=$t(1^mt(t,it(ht(),e)));break t;default:var a=this.p(0),s=it(ht(),a);a=e=mt(e,s);var n=this.p(1),r=(n=it(ht(),n))-s|0;for(s=2;s<t;){e=mt(e,n);var c=this.p(s);if(r!==((c=it(ht(),c))-n|0)){for(e=mt(e,c),s=1+s|0;s<t;)a=this.p(s),e=mt(e,it(ht(),a)),s=1+s|0;t=$t(e^t);break t}n=c,s=1+s|0}t=$t(mt(mt(a,r),n))}}else if(this instanceof es){s=0,n=t=t.za,e=a=c=r=0;for(var i=this;!i.d();){var o=i.q();switch(i=i.H(),n=mt(n,o=it(ht(),o)),r){case 0:e=o,r=1;break;case 1:c=o-a|0,r=2;break;case 2:c!==(o-a|0)&&(r=3)}a=o,s=1+s|0}2===r?(s=c,t=$t(mt(mt(mt(t,e),s),a))):t=$t(n^s)}else t:if(e=t.za,t=this.e(),t.h())if(a=t.j(),t.h()){for(s=t.j(),a=e=mt(e,r=it(ht(),a)),r=(n=it(ht(),s))-r|0,s=2;t.h();){if(e=mt(e,n),c=t.j(),r!==((c=it(ht(),c))-n|0)){for(e=mt(e,c),s=1+s|0;t.h();)a=t.j(),e=mt(e,it(ht(),a)),s=1+s|0;t=$t(e^s);break t}n=c,s=1+s|0}t=$t(mt(mt(a,r),n))}else t=$t(1^mt(e,it(ht(),a)));else t=$t(0^e);return t}u(){var t=this.ha()+"(";return this.d()?t+")":this.Ra(os(),t,", ",")").y.c}z(t){return te(this,t)}d(){return 0===this.z(0)}}class qa extends Ea{ca(t){return Va(new Oa,this,t)}E(){return"SeqView"}z(t){return te(this,t)}d(){return 0===this.z(0)}B(t){return this.ca(t)}}function Va(t,e,a){return t.bb=e,Ia(t,e,a),t}class Oa extends Aa{constructor(){super(),this.bb=null}ca(t){return Va(new Oa,this,t)}E(){return"SeqView"}z(t){return te(this,t)}d(){return 0===this.z(0)}i(){const t=this.bb.i()-this.Ga|0;return 0<t?t:0}p(t){return this.bb.p(t+this.Ga|0)}B(t){return this.ca(t)}}const za=$({Ib:0},"scala.collection.SeqView$Drop",{Ib:1,db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1});function Ma(t,e){return t.ga=e,t}Oa.prototype.$classData=za;class Fa extends qa{constructor(){super(),this.ga=null}p(t){return this.ga.p(t)}i(){return this.ga.i()}e(){return this.ga.e()}k(){return this.ga.k()}d(){return this.ga.d()}}const Pa=$({Jb:0},"scala.collection.SeqView$Id",{Jb:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1});Fa.prototype.$classData=Pa;class Ta extends qa{e(){return new va(this)}E(){return"IndexedSeqView"}z(t){const e=this.i();return e===t?0:e<t?-1:1}k(){return this.i()}ca(t){return new Ja(this,t)}B(t){return new Ja(this,t)}}class Ja extends Oa{constructor(t,e){super(),Va(this,t,e)}e(){return new va(this)}E(){return"IndexedSeqView"}z(t){const e=this.i();return e===t?0:e<t?-1:1}k(){return this.i()}ca(t){return new Ja(this,t)}B(t){return new Ja(this,t)}}const Na=$({Xc:0},"scala.collection.IndexedSeqView$Drop",{Xc:1,Ib:1,db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Ja.prototype.$classData=Na;class Ra extends Fa{constructor(t){super(),Ma(this,t)}e(){return new va(this)}E(){return"IndexedSeqView"}z(t){const e=this.i();return e===t?0:e<t?-1:1}k(){return this.i()}ca(t){return new Ja(this,t)}B(t){return new Ja(this,t)}}const Ha=$({Yc:0},"scala.collection.IndexedSeqView$Id",{Yc:1,Jb:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Ra.prototype.$classData=Ha;class Ga extends La{}class Ka extends Ta{constructor(t,e){super(),this.Kd=t,this.hb=e}i(){return this.hb}p(t){if(t<this.hb)return this.Kd.g[t];throw Te(new Je,t+" is out of bounds (min 0, max "+(-1+this.hb|0)+")")}ha(){return"ArrayBufferView"}}const Ua=$({Jd:0},"scala.collection.mutable.ArrayBufferView",{Jd:1,Wc:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Ka.prototype.$classData=Ua,$({fd:0},"scala.collection.StringView",{fd:1,Wc:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1,ya:1,G:1});class Wa extends La{}function Za(t,e,a,s,n){if(e.c=""+e.c+a,t.D){if(!t.d()){let n;if(a=Xa(t).q(),e.c=""+e.c+a,a=t,n=Xa(t).n(),a!==n&&(!n.D||Xa(a)!==Xa(n))&&(a=n,n.D&&!n.d()))for(n=Xa(n).n();a!==n&&n.D&&!n.d()&&Xa(a)!==Xa(n);){e.c=""+e.c+s;var r=Xa(a).q();e.c=""+e.c+r,a=Xa(a).n(),n=Xa(n).n(),n.D&&!n.d()&&(n=Xa(n).n())}if(!n.D||n.d()){for(;a!==n;)e.c=""+e.c+s,t=Xa(a).q(),e.c=""+e.c+t,a=Xa(a).n();a.D||(e.c=""+e.c+s,e.c+="<not computed>")}else{for(r=t,t=0;;){var c=r;const e=n;if(c===e||Xa(c)===Xa(e))break;r=Xa(r).n(),n=Xa(n).n(),t=1+t|0}for(((r=a)===(c=n)||Xa(r)===Xa(c))&&0<t&&(e.c=""+e.c+s,t=Xa(a).q(),e.c=""+e.c+t,a=Xa(a).n());(t=a)!==(r=n)&&Xa(t)!==Xa(r);)e.c=""+e.c+s,t=Xa(a).q(),e.c=""+e.c+t,a=Xa(a).n();e.c=""+e.c+s,e.c+="<cycle>"}}}else e.c+="<not computed>";return e.c=""+e.c+n,e}function Qa(t){let e=t,a=t;for(e.d()||(e=Xa(e).n());a!==e&&!e.d()&&(e=Xa(e).n(),!e.d())&&(e=Xa(e).n(),e!==a);)a=Xa(a).n();return t}function Xa(t){if(!t.gb&&!t.gb){const e=be(t.Mb);t.D=!0,t.Mb=null,t.Nb=e,t.gb=!0}return t.Nb}class Ya extends Ga{constructor(t){super(),this.Nb=null,this.gb=!1,this.Mb=t,this.D=!1}E(){return"LinearSeq"}i(){{var t=this;let e=0;for(;!t.d();)e=1+e|0,t=t.H();t=e}return t}z(t){if(0>t)t=1;else t:for(var e=this,a=0;;){if(a===t){t=e.d()?0:1;break t}if(e.d()){t=-1;break t}a=1+a|0,e=e.H()}return t}p(t){return ta(this,t)}d(){return Xa(this)===fe()}k(){return this.D&&this.d()?0:-1}q(){return Xa(this).q()}e(){return this.D&&this.d()?ne().ka:new sa(this)}ha(){return"LazyList"}Ra(t,e,a,s){return Qa(this),Za(this,t.y,e,a,s),t}u(){var t=new Ce;return ke(t),t.c="LazyList",Za(this,t,"(",", ",")").c}B(t){return 0>=t?this:this.D&&this.d()?Fe().fb:(Fe(),e=t,new Ya(new pe((a=new Ht(this),s=new Nt(e),()=>{let t=a.lb,e=s.kb;for(;0<e&&!t.d();)t=Xa(t).n(),a.lb=t,e=-1+e|0,s.kb=e;return Xa(t)}))));var e,a,s}H(){return Xa(this).n()}da(){return Fe()}}const _a=$({od:0},"scala.collection.immutable.LazyList",{od:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,b:1});Ya.prototype.$classData=_a,$({Ed:0},"scala.collection.immutable.WrappedString",{Ed:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,ld:1,Ba:1,$:1,nd:1,b:1});class ts extends Wa{}class es extends Ga{e(){return new ea(this)}E(){return"LinearSeq"}p(t){return ta(this,t)}d(){return this===is()}i(){let t=this,e=0;for(;!t.d();)e=1+e|0,t=t.H();return e}z(t){if(0>t)t=1;else t:for(var e=this,a=0;;){if(a===t){t=e.d()?0:1;break t}if(e.d()){t=-1;break t}a=1+a|0,e=e.H()}return t}ha(){return"List"}B(t){t:for(var e=this;!(0>=t||e.d());)t=-1+t|0,e=e.H();return e}da(){return ia||(ia=new ra),ia}}$({Ad:0},"scala.collection.immutable.Vector",{Ad:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,ld:1,Ba:1,$:1,nd:1,Qb:1,Fa:1,Da:1,Rb:1,Ha:1,b:1});class as extends es{constructor(t,e){super(),this.Lb=t,this.ma=e}q(){return this.Lb}wa(){return"::"}Xa(){return 2}Ya(t){switch(t){case 0:return this.Lb;case 1:return this.ma;default:throw ht(),Te(new Je,""+t)}}H(){return this.ma}}const ss=$({kd:0},"scala.collection.immutable.$colon$colon",{kd:1,wd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,dd:1,Fa:1,Da:1,Qb:1,Ha:1,b:1,ya:1});as.prototype.$classData=ss;class ns extends es{constructor(){super(),cs=this,is(),is()}Ta(){throw new We("head of empty list")}k(){return 0}e(){return ne().ka}wa(){return"Nil"}Xa(){return 0}Ya(t){throw ht(),Te(new Je,""+t)}H(){throw Ge("tail of empty list")}q(){this.Ta()}}const rs=$({zd:0},"scala.collection.immutable.Nil$",{zd:1,wd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,dd:1,Fa:1,Da:1,Qb:1,Ha:1,b:1,ya:1});ns.prototype.$classData=rs;let cs=void 0;function is(){return cs||(cs=new ns),cs}function os(){var t=new us;return t.y=ke(new Ce),t}function ls(t,e){if(e instanceof us){var a=t.y;a.c=""+a.c+e.y}else{var s=e.k();if(0!==s)for(a=t.y,0<s&&a.i(),e=e.e();e.h();)s=p(e.j()),s=String.fromCharCode(s),a.c=""+a.c+s}return t}class us extends Wa{constructor(){super(),this.y=null}E(){return"IndexedSeq"}e(){const t=new Ra(this);return new va(t)}B(t){return this.sa(new Ja(this,t))}z(t){const e=this.y.i();return e===t?0:e<t?-1:1}i(){return this.y.i()}k(){return this.y.i()}u(){return this.y.c}da(){return ba||(ba=new da),ba}Qa(t){{const e=this.y;t=String.fromCharCode(p(t)),e.c=""+e.c+t}}sa(t){return ls(os(),t)}sb(t){return ls(os(),t)}p(t){return new s(65535&(0|this.y.c.charCodeAt(t)))}}const hs=$({Td:0},"scala.collection.mutable.StringBuilder",{Td:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Vb:1,ib:1,Na:1,Ma:1,Nd:1,Ba:1,$:1,Pd:1,tb:1,b:1});function ds(t){const e=ps(new ws,t);t.N=e.N,t.O=e.O,t.oa=!1}function fs(t,e){t.oa&&ds(t),e=new as(e,is()),0===t.A?t.N=e:t.O.ma=e,t.O=e,t.A=1+t.A|0}function bs(t){return t.oa=!t.d(),t.N}function ps(t,e){if((e=e.e()).h()){t.oa&&ds(t);var a=new as(e.j(),is());for(0===t.A?t.N=a:t.O.ma=a,t.O=a,t.A=1+t.A|0;e.h();)a=new as(e.j(),is()),t.O.ma=a,t.O=a,t.A=1+t.A|0}return t}us.prototype.$classData=hs;class ws extends ts{constructor(){super(),this.O=this.N=null,this.oa=!1,this.A=0,this.N=is(),this.O=null,this.oa=!1,this.A=0}e(){return this.N.e()}p(t){return ta(this.N,t)}i(){return this.A}k(){return this.A}d(){return 0===this.A}E(){return"ListBuffer"}Qa(t){fs(this,t)}da(){return ma||(ma=new pa),ma}}const ms=$({Qd:0},"scala.collection.mutable.ListBuffer",{Qd:1,Gd:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Ld:1,Na:1,Ma:1,Sd:1,Fa:1,Da:1,Vb:1,ib:1,Ha:1,b:1});function $s(t,e){ha();var a=t.M,s=a.g.length,r=s>>31,c=e>>31;if(!(c===r?(-2147483648^e)<=(-2147483648^s):c<r)){for(c=new Ae(s,r),s=t.f,r=c.Q<<1,r=(c=(0===(c=c.Q>>>31|0|c.U<<1)?-2147483632<(-2147483648^r):0<c)?new Ae(r,c):new Ae(16,0)).Q,c=c.U;;){const t=e>>31,a=r,s=c;if(!(t===s?(-2147483648^e)>(-2147483648^a):t>s))break;c=r>>>31|0|c<<1,r<<=1}if(0===(e=c)?-1<(-2147483648^r):0<e){if(2147483647===s)throw bt||(bt=new dt),Et(t=new Yt,"Collections can not have more than 2147483647 elements"),t instanceof xa?t.jb:t;r=2147483647}e=r,e=n(v(P),[e]),qt(Mt(),a,e,0,s),a=e}t.M=a}ws.prototype.$classData=ms;class vs extends ts{constructor(){super(),this.M=null,this.f=0}e(){return new va(new Ka(this.M,this.f))}B(t){return this.sa(new Ja(this,t))}z(t){const e=this.f;return e===t?0:e<t?-1:1}k(){return this.f}p(t){const e=1+t|0;if(0>t)throw Te(new Je,t+" is out of bounds (min 0, max "+(-1+this.f|0)+")");if(e>this.f)throw Te(new Je,e+" is out of bounds (min 0, max "+(-1+this.f|0)+")");return this.M.g[t]}i(){return this.f}E(){return"ArrayBuffer"}Qa(t){var e=this.f;$s(this,1+this.f|0),this.f=1+this.f|0;{const a=1+e|0;if(0>e)throw Te(new Je,e+" is out of bounds (min 0, max "+(-1+this.f|0)+")");if(a>this.f)throw Te(new Je,a+" is out of bounds (min 0, max "+(-1+this.f|0)+")");this.M.g[e]=t}}da(){return ha()}}const gs=$({Hd:0},"scala.collection.mutable.ArrayBuffer",{Hd:1,Gd:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Ld:1,Na:1,Ma:1,Sd:1,me:1,Nd:1,Ba:1,$:1,Pd:1,Fa:1,Da:1,Ha:1,b:1});vs.prototype.$classData=gs,a=new Ae(0,0),new(v(Ee).Sa)([]),jt();{var ys;Tt||(Tt=new Ft),ys=Tt.Cb.Eb;let t="Hello ScalaJS! Iteration 4.\n";for(;""!==t;){const e=0|t.indexOf("\n");if(0>e)ys.va=""+ys.va+t,t="";else{var xs=""+ys.va+t.substring(0,e);"undefined"!=typeof console&&(ys.xc&&console.error?console.error(xs):console.log(xs)),ys.va="",t=t.substring(1+e|0)}}}_().addEventListener("DOMContentLoaded",()=>{!function(){jt();var t=new ws;if(null===_().getElementById("scala-webapp")){var e=_().createElement("div");e.id="scala-webapp",_().body.appendChild(e)}for((e=_().createElement("h1")).textContent="ScalaJS Experiments",fs(t,e),(e=_().createElement("p")).textContent="This web-page was generated using Scala, which was compiled to JavaScript with ScalaJS.",fs(t,e),fs(t,e=_().createElement("hr")),(e=_().createElement("h3")).textContent="Directing Text to Evaluation Class",fs(t,e),fs(t,e=_().createElement("hr")),(e=_().createElement("h3")).textContent="Appending Elements to the DOM",fs(t,e),(e=_().createElement("button")).textContent="Add paragraph",e.addEventListener("click",()=>{jt();{var t=1;const e=_().getElementsByTagName("p"),a=(0|e.length)-1|0;if(!(0>a)){let s=0;for(;;){const n=e[s].textContent;if(0<=(0|n.length)&&"Button clicked"===n.substring(0,14)&&(t=1+t|0),s===a)break;s=1+s|0}}}gt(_().getElementById("append-test"),"Button clicked "+t+(2>t?" time!":" times!"))}),fs(t,e),(e=_().createElement("div")).id="append-test",fs(t,e),fs(t,e=_().createElement("hr")),t=t.N.e();t.h();)e=t.j(),_().getElementById("scala-webapp").appendChild(e);gt(_().getElementById("scala-webapp"),"All elements above generated using ScalaJS")}()})}).call(this)}]);