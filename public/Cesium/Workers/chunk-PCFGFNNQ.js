import{a as _}from"./chunk-Z3SYNMQT.js";import{a as B,b as S}from"./chunk-4KGDZUZQ.js";import{e as i}from"./chunk-F3TINEFX.js";var c,r={requestFullscreen:void 0,exitFullscreen:void 0,fullscreenEnabled:void 0,fullscreenElement:void 0,fullscreenchange:void 0,fullscreenerror:void 0},l={};Object.defineProperties(l,{element:{get:function(){if(l.supportsFullscreen())return document[r.fullscreenElement]}},changeEventName:{get:function(){if(l.supportsFullscreen())return r.fullscreenchange}},errorEventName:{get:function(){if(l.supportsFullscreen())return r.fullscreenerror}},enabled:{get:function(){if(l.supportsFullscreen())return document[r.fullscreenEnabled]}},fullscreen:{get:function(){if(l.supportsFullscreen())return null!==l.element}}}),l.supportsFullscreen=function(){if(i(c))return c;c=!1;let e=document.body;if("function"==typeof e.requestFullscreen)return r.requestFullscreen="requestFullscreen",r.exitFullscreen="exitFullscreen",r.fullscreenEnabled="fullscreenEnabled",r.fullscreenElement="fullscreenElement",r.fullscreenchange="fullscreenchange",r.fullscreenerror="fullscreenerror",c=!0;let n,t=["webkit","moz","o","ms","khtml"];for(let u=0,l=t.length;u<l;++u){let l=t[u];n=`${l}RequestFullscreen`,"function"==typeof e[n]?(r.requestFullscreen=n,c=!0):(n=`${l}RequestFullScreen`,"function"==typeof e[n]&&(r.requestFullscreen=n,c=!0)),n=`${l}ExitFullscreen`,"function"==typeof document[n]?r.exitFullscreen=n:(n=`${l}CancelFullScreen`,"function"==typeof document[n]&&(r.exitFullscreen=n)),n=`${l}FullscreenEnabled`,void 0!==document[n]?r.fullscreenEnabled=n:(n=`${l}FullScreenEnabled`,void 0!==document[n]&&(r.fullscreenEnabled=n)),n=`${l}FullscreenElement`,void 0!==document[n]?r.fullscreenElement=n:(n=`${l}FullScreenElement`,void 0!==document[n]&&(r.fullscreenElement=n)),n=`${l}fullscreenchange`,void 0!==document[`on${n}`]&&("ms"===l&&(n="MSFullscreenChange"),r.fullscreenchange=n),n=`${l}fullscreenerror`,void 0!==document[`on${n}`]&&("ms"===l&&(n="MSFullscreenError"),r.fullscreenerror=n)}return c},l.requestFullscreen=function(e,n){l.supportsFullscreen()&&e[r.requestFullscreen]({vrDisplay:n})},l.exitFullscreen=function(){l.supportsFullscreen()&&document[r.exitFullscreen]()},l._names=r;var s,g,k,y,U,A,W,m,P,F,D,E,v,I,R,V,N,b,C=l;function a(e){let r=e.split(".");for(let n=0,t=r.length;n<t;++n)r[n]=parseInt(r[n],10);return r}function w(){if(!i(g)&&(g=!1,!x())){let e=/ Chrome\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(g=!0,k=a(e[1]))}return g}function T(){return w()&&k}function $(){if(!i(y)&&(y=!1,!w()&&!x()&&/ Safari\/[\.0-9]+/.test(s.userAgent))){let e=/ Version\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(y=!0,U=a(e[1]))}return y}function Q(){return $()&&U}function q(){if(!i(A)){A=!1;let e=/ AppleWebKit\/([\.0-9]+)(\+?)/.exec(s.userAgent);null!==e&&(A=!0,(W=a(e[1])).isNightly=!!e[2])}return A}function j(){return q()&&W}function O(){if(!i(m)){let e;m=!1,"Microsoft Internet Explorer"===s.appName?(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(s.userAgent),null!==e&&(m=!0,P=a(e[1]))):"Netscape"===s.appName&&(e=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(s.userAgent),null!==e&&(m=!0,P=a(e[1])))}return m}function J(){return O()&&P}function x(){if(!i(F)){F=!1;let e=/ Edg\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(F=!0,D=a(e[1]))}return F}function Y(){return x()&&D}function h(){if(!i(E)){E=!1;let e=/Firefox\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(E=!0,v=a(e[1]))}return E}function G(){return i(I)||(I=/Windows/i.test(s.appVersion)),I}function K(){return i(R)||(R="iPhone"===navigator.platform||"iPod"===navigator.platform||"iPad"===navigator.platform),R}function X(){return h()&&v}function H(){return i(V)||(V=!h()&&typeof PointerEvent<"u"&&(!i(s.pointerEnabled)||s.pointerEnabled)),V}function z(){if(!i(b)){let e=document.createElement("canvas");e.setAttribute("style","image-rendering: -moz-crisp-edges;image-rendering: pixelated;");let r=e.style.imageRendering;(b=i(r)&&""!==r)&&(N=r)}return b}function L(){return z()?N:void 0}function u(){if(!u.initialized)throw new B("You must call FeatureDetection.supportsWebP.initialize and wait for the promise to resolve before calling FeatureDetection.supportsWebP");return u._result}s=typeof navigator<"u"?navigator:{},u._promise=void 0,u._result=void 0,u.initialize=function(){return i(u._promise)||(u._promise=new Promise((e=>{let r=new Image;r.onload=function(){u._result=r.width>0&&r.height>0,e(u._result)},r.onerror=function(){u._result=!1,e(u._result)},r.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),u._promise},Object.defineProperties(u,{initialized:{get:function(){return i(u._result)}}});var d=[];typeof ArrayBuffer<"u"&&(d.push(Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array),typeof Uint8ClampedArray<"u"&&d.push(Uint8ClampedArray),typeof Uint8ClampedArray<"u"&&d.push(Uint8ClampedArray),typeof BigInt64Array<"u"&&d.push(BigInt64Array),typeof BigUint64Array<"u"&&d.push(BigUint64Array));var f={isChrome:w,chromeVersion:T,isSafari:$,safariVersion:Q,isWebkit:q,webkitVersion:j,isInternetExplorer:O,internetExplorerVersion:J,isEdge:x,edgeVersion:Y,isFirefox:h,firefoxVersion:X,isWindows:G,isIPadOrIOS:K,hardwareConcurrency:_(s.hardwareConcurrency,3),supportsPointerEvents:H,supportsImageRenderingPixelated:z,supportsWebP:u,imageRenderingValue:L,typedArrayTypes:d,supportsBasis:function(e){return f.supportsWebAssembly()&&e.context.supportsBasis},supportsFullscreen:function(){return C.supportsFullscreen()},supportsTypedArrays:function(){return typeof ArrayBuffer<"u"},supportsBigInt64Array:function(){return typeof BigInt64Array<"u"},supportsBigUint64Array:function(){return typeof BigUint64Array<"u"},supportsBigInt:function(){return typeof BigInt<"u"},supportsWebWorkers:function(){return typeof Worker<"u"},supportsWebAssembly:function(){return typeof WebAssembly<"u"},supportsWebgl2:function(e){return S.defined("scene",e),e.context.webgl2},supportsEsmWebWorkers:function(){return!h()||parseInt(v)>=114}},se=f;export{se as a};