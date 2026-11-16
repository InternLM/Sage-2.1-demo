var kd=Object.defineProperty;var Sd=(e,t,n)=>t in e?kd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>Sd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function _d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ic={exports:{}},gl={},Pc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),Ed=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Rd=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),$a=Symbol.iterator;function Od(e){return e===null||typeof e!="object"?null:(e=$a&&e[$a]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Oc={};function rr(e,t,n){this.props=e,this.context=t,this.refs=Oc,this.updater=n||Rc}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $c(){}$c.prototype=rr.prototype;function Ao(e,t,n){this.props=e,this.context=t,this.refs=Oc,this.updater=n||Rc}var No=Ao.prototype=new $c;No.constructor=Ao;Mc(No,rr.prototype);No.isPureReactComponent=!0;var za=Array.isArray,zc=Object.prototype.hasOwnProperty,Lo={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)zc.call(t,r)&&!Fc.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var a=Array(o),u=0;u<o;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Jr,type:e,key:l,ref:s,props:i,_owner:Lo.current}}function $d(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Io(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function zd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fa=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zd(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Jr:case Ed:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Fl(s,0):r,za(i)?(n="",e!=null&&(n=e.replace(Fa,"$&/")+"/"),Ci(i,t,n,"",function(u){return u})):i!=null&&(Io(i)&&(i=$d(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Fa,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",za(e))for(var o=0;o<e.length;o++){l=e[o];var a=r+Fl(l,o);s+=Ci(l,t,n,a,i)}else if(a=Od(e),typeof a=="function")for(e=a.call(e),o=0;!(l=e.next()).done;)l=l.value,a=r+Fl(l,o++),s+=Ci(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Fd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Ai={transition:null},jd={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Lo};function Dc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=rr;F.Fragment=Td;F.Profiler=Ad;F.PureComponent=Ao;F.StrictMode=Cd;F.Suspense=Pd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;F.act=Dc;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Lo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in t)zc.call(t,a)&&!Fc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&o!==void 0?o[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){o=Array(a);for(var u=0;u<a;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Jr,type:e.type,key:i,ref:l,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:Ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nd,_context:e},e.Consumer=e};F.createElement=jc;F.createFactory=function(e){var t=jc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Id,render:e}};F.isValidElement=Io;F.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:Fd}};F.memo=function(e,t){return{$$typeof:Rd,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};F.unstable_act=Dc;F.useCallback=function(e,t){return Ne.current.useCallback(e,t)};F.useContext=function(e){return Ne.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ne.current.useEffect(e,t)};F.useId=function(){return Ne.current.useId()};F.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ne.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};F.useRef=function(e){return Ne.current.useRef(e)};F.useState=function(e){return Ne.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ne.current.useTransition()};F.version="18.3.1";Pc.exports=F;var q=Pc.exports;const Dd=_d(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd=q,bd=Symbol.for("react.element"),Ud=Symbol.for("react.fragment"),Vd=Object.prototype.hasOwnProperty,Wd=Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Vd.call(t,r)&&!qd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bd,type:e,key:l,ref:s,props:i,_owner:Wd.current}}gl.Fragment=Ud;gl.jsx=Bc;gl.jsxs=Bc;Ic.exports=gl;var x=Ic.exports,ws={},bc={exports:{}},De={},Uc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,R){var M=C.length;C.push(R);e:for(;0<M;){var K=M-1>>>1,ne=C[K];if(0<i(ne,R))C[K]=R,C[M]=ne,M=K;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var R=C[0],M=C.pop();if(M!==R){C[0]=M;e:for(var K=0,ne=C.length,kn=ne>>>1;K<kn;){var Yt=2*(K+1)-1,zl=C[Yt],Kt=Yt+1,si=C[Kt];if(0>i(zl,M))Kt<ne&&0>i(si,zl)?(C[K]=si,C[Kt]=M,K=Kt):(C[K]=zl,C[Yt]=M,K=Yt);else if(Kt<ne&&0>i(si,M))C[K]=si,C[Kt]=M,K=Kt;else break e}}return R}function i(C,R){var M=C.sortIndex-R.sortIndex;return M!==0?M:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var a=[],u=[],c=1,h=null,f=3,d=!1,p=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(C){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=C)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function w(C){if(v=!1,y(C),!p)if(n(a)!==null)p=!0,wn(S);else{var R=n(u);R!==null&&he(w,R.startTime-C)}}function S(C,R){p=!1,v&&(v=!1,g(A),A=-1),d=!0;var M=f;try{for(y(R),h=n(a);h!==null&&(!(h.expirationTime>R)||C&&!j());){var K=h.callback;if(typeof K=="function"){h.callback=null,f=h.priorityLevel;var ne=K(h.expirationTime<=R);R=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(a)&&r(a),y(R)}else r(a);h=n(a)}if(h!==null)var kn=!0;else{var Yt=n(u);Yt!==null&&he(w,Yt.startTime-R),kn=!1}return kn}finally{h=null,f=M,d=!1}}var _=!1,T=null,A=-1,I=5,L=-1;function j(){return!(e.unstable_now()-L<I)}function D(){if(T!==null){var C=e.unstable_now();L=C;var R=!0;try{R=T(!0,C)}finally{R?Q():(_=!1,T=null)}}else _=!1}var Q;if(typeof m=="function")Q=function(){m(D)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,be=O.port2;O.port1.onmessage=D,Q=function(){be.postMessage(null)}}else Q=function(){k(D,0)};function wn(C){T=C,_||(_=!0,Q())}function he(C,R){A=k(function(){C(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){p||d||(p=!0,wn(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var M=f;f=R;try{return C()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=f;f=C;try{return R()}finally{f=M}},e.unstable_scheduleCallback=function(C,R,M){var K=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?K+M:K):M=K,C){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=M+ne,C={id:c++,callback:R,priorityLevel:C,startTime:M,expirationTime:ne,sortIndex:-1},M>K?(C.sortIndex=M,t(u,C),n(a)===null&&C===n(u)&&(v?(g(A),A=-1):v=!0,he(w,M-K))):(C.sortIndex=ne,t(a,C),p||d||(p=!0,wn(S))),C},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(C){var R=f;return function(){var M=f;f=R;try{return C.apply(this,arguments)}finally{f=M}}}})(Vc);Uc.exports=Vc;var Hd=Uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=q,je=Hd;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wc=new Set,$r={};function yn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for($r[e]=t,e=0;e<t.length;e++)Wc.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=Object.prototype.hasOwnProperty,Yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ja={},Da={};function Kd(e){return ks.call(Da,e)?!0:ks.call(ja,e)?!1:Yd.test(e)?Da[e]=!0:(ja[e]=!0,!1)}function Gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xd(e,t,n,r){if(t===null||typeof t>"u"||Gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Po=/[\-:]([a-z])/g;function Ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Po,Ro);me[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Po,Ro);me[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Po,Ro);me[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mo(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xd(t,n,i,r)&&(n=null),r||i===null?Kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Oo=Symbol.for("react.strict_mode"),Ss=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Hc=Symbol.for("react.context"),$o=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),zo=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Qc=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,jl;function vr(e){if(jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jl=t&&t[1]||""}return`
`+jl+e}var Dl=!1;function Bl(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=o);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function Zd(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function Ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Cn:return"Portal";case Ss:return"Profiler";case Oo:return"StrictMode";case _s:return"Suspense";case Es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hc:return(e.displayName||"Context")+".Consumer";case qc:return(e._context.displayName||"Context")+".Provider";case $o:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zo:return t=e.displayName||null,t!==null?t:Ts(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Ts(e(t))}catch{}}return null}function Jd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ts(t);case 8:return t===Oo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=Yc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=ep(e))}function Kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cs(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gc(e,t){t=t.checked,t!=null&&Mo(e,"checked",t,!1)}function As(e,t){Gc(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ns(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ns(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ns(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(xr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function Xc(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function ef(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ef(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var np=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ps(e,t){if(t){if(np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Dn=null,Bn=null;function qa(e){if(e=ni(e)){if(typeof Os!="function")throw Error(E(280));var t=e.stateNode;t&&(t=wl(t),Os(e.stateNode,e.type,t))}}function nf(e){Dn?Bn?Bn.push(e):Bn=[e]:Dn=e}function rf(){if(Dn){var e=Dn,t=Bn;if(Bn=Dn=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function lf(e,t){return e(t)}function sf(){}var bl=!1;function of(e,t,n){if(bl)return e(t,n);bl=!0;try{return lf(e,t,n)}finally{bl=!1,(Dn!==null||Bn!==null)&&(sf(),rf())}}function Fr(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var $s=!1;if(vt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){$s=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{$s=!1}function rp(e,t,n,r,i,l,s,o,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Er=!1,Di=null,Bi=!1,zs=null,ip={onError:function(e){Er=!0,Di=e}};function lp(e,t,n,r,i,l,s,o,a){Er=!1,Di=null,rp.apply(ip,arguments)}function sp(e,t,n,r,i,l,s,o,a){if(lp.apply(this,arguments),Er){if(Er){var u=Di;Er=!1,Di=null}else throw Error(E(198));Bi||(Bi=!0,zs=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ha(e){if(vn(e)!==e)throw Error(E(188))}function op(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ha(i),e;if(l===r)return Ha(i),t;l=l.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=l;break}if(o===r){s=!0,r=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=i;break}if(o===r){s=!0,r=l,n=i;break}o=o.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function uf(e){return e=op(e),e!==null?cf(e):null}function cf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cf(e);if(t!==null)return t;e=e.sibling}return null}var ff=je.unstable_scheduleCallback,Qa=je.unstable_cancelCallback,ap=je.unstable_shouldYield,up=je.unstable_requestPaint,ie=je.unstable_now,cp=je.unstable_getCurrentPriorityLevel,jo=je.unstable_ImmediatePriority,hf=je.unstable_UserBlockingPriority,bi=je.unstable_NormalPriority,fp=je.unstable_LowPriority,df=je.unstable_IdlePriority,ml=null,ut=null;function hp(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:gp,dp=Math.log,pp=Math.LN2;function gp(e){return e>>>=0,e===0?32:31-(dp(e)/pp|0)|0}var fi=64,hi=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=wr(o):(l&=s,l!==0&&(r=wr(l)))}else s=n&~i,s!==0?r=wr(s):l!==0&&(r=wr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-et(l),o=1<<s,a=i[s];a===-1?(!(o&n)||o&r)&&(i[s]=mp(o,t)):a<=t&&(e.expiredLanes|=o),l&=~o}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Do(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,Bo,yf,vf,xf,js=!1,di=[],Ot=null,$t=null,zt=null,jr=new Map,Dr=new Map,It=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function cr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ni(t),t!==null&&Bo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wp(e,t,n,r,i){switch(t){case"focusin":return Ot=cr(Ot,e,t,n,r,i),!0;case"dragenter":return $t=cr($t,e,t,n,r,i),!0;case"mouseover":return zt=cr(zt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return jr.set(l,cr(jr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Dr.set(l,cr(Dr.get(l)||null,e,t,n,r,i)),!0}return!1}function wf(e){var t=Jt(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=af(n),t!==null){e.blockedOn=t,xf(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ms=r,n.target.dispatchEvent(r),Ms=null}else return t=ni(n),t!==null&&Bo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Ni(e)&&n.delete(t)}function kp(){js=!1,Ot!==null&&Ni(Ot)&&(Ot=null),$t!==null&&Ni($t)&&($t=null),zt!==null&&Ni(zt)&&(zt=null),jr.forEach(Ka),Dr.forEach(Ka)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,kp)))}function Br(e){function t(i){return fr(i,e)}if(0<di.length){fr(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&fr(Ot,e),$t!==null&&fr($t,e),zt!==null&&fr(zt,e),jr.forEach(t),Dr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)wf(n),n.blockedOn===null&&It.shift()}var bn=St.ReactCurrentBatchConfig,Vi=!0;function Sp(e,t,n,r){var i=W,l=bn.transition;bn.transition=null;try{W=1,bo(e,t,n,r)}finally{W=i,bn.transition=l}}function _p(e,t,n,r){var i=W,l=bn.transition;bn.transition=null;try{W=4,bo(e,t,n,r)}finally{W=i,bn.transition=l}}function bo(e,t,n,r){if(Vi){var i=Ds(e,t,n,r);if(i===null)Zl(e,t,r,Wi,n),Ya(e,r);else if(wp(i,e,t,n,r))r.stopPropagation();else if(Ya(e,r),t&4&&-1<xp.indexOf(e)){for(;i!==null;){var l=ni(i);if(l!==null&&mf(l),l=Ds(e,t,n,r),l===null&&Zl(e,t,r,Wi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Wi=null;function Ds(e,t,n,r){if(Wi=null,e=Fo(r),e=Jt(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case jo:return 1;case hf:return 4;case bi:case fp:return 16;case df:return 536870912;default:return 16}default:return 16}}var Rt=null,Uo=null,Li=null;function Sf(){if(Li)return Li;var e,t=Uo,n=t.length,r,i="value"in Rt?Rt.value:Rt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Ga(){return!1}function Be(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pi:Ga,this.isPropagationStopped=Ga,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Be(ir),ti=te({},ir,{view:0,detail:0}),Ep=Be(ti),Vl,Wl,hr,yl=te({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Vl=e.screenX-hr.screenX,Wl=e.screenY-hr.screenY):Wl=Vl=0,hr=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Xa=Be(yl),Tp=te({},yl,{dataTransfer:0}),Cp=Be(Tp),Ap=te({},ti,{relatedTarget:0}),ql=Be(Ap),Np=te({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=Be(Np),Ip=te({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Be(Ip),Rp=te({},ir,{data:0}),Za=Be(Rp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$p[e])?!!t[e]:!1}function Wo(){return zp}var Fp=te({},ti,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wo,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=Be(Fp),Dp=te({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=Be(Dp),Bp=te({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wo}),bp=Be(Bp),Up=te({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Be(Up),Wp=te({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=Be(Wp),Hp=[9,13,27,32],qo=vt&&"CompositionEvent"in window,Tr=null;vt&&"documentMode"in document&&(Tr=document.documentMode);var Qp=vt&&"TextEvent"in window&&!Tr,_f=vt&&(!qo||Tr&&8<Tr&&11>=Tr),eu=" ",tu=!1;function Ef(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Yp(e,t){switch(e){case"compositionend":return Tf(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function Kp(e,t){if(Nn)return e==="compositionend"||!qo&&Ef(e,t)?(e=Sf(),Li=Uo=Rt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Cf(e,t,n,r){nf(r),t=qi(t,"onChange"),0<t.length&&(n=new Vo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,br=null;function Xp(e){Ff(e,0)}function vl(e){var t=Pn(e);if(Kc(t))return e}function Zp(e,t){if(e==="change")return t}var Af=!1;if(vt){var Hl;if(vt){var Ql="oninput"in document;if(!Ql){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Ql=typeof ru.oninput=="function"}Hl=Ql}else Hl=!1;Af=Hl&&(!document.documentMode||9<document.documentMode)}function iu(){Cr&&(Cr.detachEvent("onpropertychange",Nf),br=Cr=null)}function Nf(e){if(e.propertyName==="value"&&vl(br)){var t=[];Cf(t,br,e,Fo(e)),of(Xp,t)}}function Jp(e,t,n){e==="focusin"?(iu(),Cr=t,br=n,Cr.attachEvent("onpropertychange",Nf)):e==="focusout"&&iu()}function eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(br)}function tg(e,t){if(e==="click")return vl(t)}function ng(e,t){if(e==="input"||e==="change")return vl(t)}function rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:rg;function Ur(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ks.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ig(e){var t=If(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&Ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=su(n,l);var s=su(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lg=vt&&"documentMode"in document&&11>=document.documentMode,Ln=null,Bs=null,Ar=null,bs=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bs||Ln==null||Ln!==ji(r)||(r=Ln,"selectionStart"in r&&Ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Ur(Ar,r)||(Ar=r,r=qi(Bs,"onSelect"),0<r.length&&(t=new Vo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},Yl={},Pf={};vt&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function xl(e){if(Yl[e])return Yl[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pf)return Yl[e]=t[n];return e}var Rf=xl("animationend"),Mf=xl("animationiteration"),Of=xl("animationstart"),$f=xl("transitionend"),zf=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){zf.set(e,t),yn(t,[e])}for(var Kl=0;Kl<au.length;Kl++){var Gl=au[Kl],sg=Gl.toLowerCase(),og=Gl[0].toUpperCase()+Gl.slice(1);qt(sg,"on"+og)}qt(Rf,"onAnimationEnd");qt(Mf,"onAnimationIteration");qt(Of,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt($f,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sp(r,t,void 0,e),e.currentTarget=null}function Ff(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],a=o.instance,u=o.currentTarget;if(o=o.listener,a!==l&&i.isPropagationStopped())break e;uu(i,o,u),l=a}else for(s=0;s<r.length;s++){if(o=r[s],a=o.instance,u=o.currentTarget,o=o.listener,a!==l&&i.isPropagationStopped())break e;uu(i,o,u),l=a}}}if(Bi)throw e=zs,Bi=!1,zs=null,e}function G(e,t){var n=t[Hs];n===void 0&&(n=t[Hs]=new Set);var r=e+"__bubble";n.has(r)||(jf(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),jf(n,e,r,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[mi]){e[mi]=!0,Wc.forEach(function(n){n!=="selectionchange"&&(ag.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,Xl("selectionchange",!1,t))}}function jf(e,t,n,r){switch(kf(t)){case 1:var i=Sp;break;case 4:i=_p;break;default:i=bo}n=i.bind(null,t,n,e),i=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Jt(o),s===null)return;if(a=s.tag,a===5||a===6){r=l=s;continue e}o=o.parentNode}}r=r.return}of(function(){var u=l,c=Fo(n),h=[];e:{var f=zf.get(e);if(f!==void 0){var d=Vo,p=e;switch(e){case"keypress":if(Ii(n)===0)break e;case"keydown":case"keyup":d=jp;break;case"focusin":p="focus",d=ql;break;case"focusout":p="blur",d=ql;break;case"beforeblur":case"afterblur":d=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=bp;break;case Rf:case Mf:case Of:d=Lp;break;case $f:d=Vp;break;case"scroll":d=Ep;break;case"wheel":d=qp;break;case"copy":case"cut":case"paste":d=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Ja}var v=(t&4)!==0,k=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=Fr(m,g),w!=null&&v.push(Wr(m,w,y)))),k)break;m=m.return}0<v.length&&(f=new d(f,p,null,n,c),h.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",f&&n!==Ms&&(p=n.relatedTarget||n.fromElement)&&(Jt(p)||p[xt]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(p=n.relatedTarget||n.toElement,d=u,p=p?Jt(p):null,p!==null&&(k=vn(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(d=null,p=u),d!==p)){if(v=Xa,w="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ja,w="onPointerLeave",g="onPointerEnter",m="pointer"),k=d==null?f:Pn(d),y=p==null?f:Pn(p),f=new v(w,m+"leave",d,n,c),f.target=k,f.relatedTarget=y,w=null,Jt(c)===u&&(v=new v(g,m+"enter",p,n,c),v.target=y,v.relatedTarget=k,w=v),k=w,d&&p)t:{for(v=d,g=p,m=0,y=v;y;y=Sn(y))m++;for(y=0,w=g;w;w=Sn(w))y++;for(;0<m-y;)v=Sn(v),m--;for(;0<y-m;)g=Sn(g),y--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Sn(v),g=Sn(g)}v=null}else v=null;d!==null&&cu(h,f,d,v,!1),p!==null&&k!==null&&cu(h,k,p,v,!0)}}e:{if(f=u?Pn(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var S=Zp;else if(nu(f))if(Af)S=ng;else{S=eg;var _=Jp}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=tg);if(S&&(S=S(e,u))){Cf(h,S,n,c);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Ns(f,"number",f.value)}switch(_=u?Pn(u):window,e){case"focusin":(nu(_)||_.contentEditable==="true")&&(Ln=_,Bs=u,Ar=null);break;case"focusout":Ar=Bs=Ln=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,ou(h,n,c);break;case"selectionchange":if(lg)break;case"keydown":case"keyup":ou(h,n,c)}var T;if(qo)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Nn?Ef(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(_f&&n.locale!=="ko"&&(Nn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Nn&&(T=Sf()):(Rt=c,Uo="value"in Rt?Rt.value:Rt.textContent,Nn=!0)),_=qi(u,A),0<_.length&&(A=new Za(A,e,null,n,c),h.push({event:A,listeners:_}),T?A.data=T:(T=Tf(n),T!==null&&(A.data=T)))),(T=Qp?Yp(e,n):Kp(e,n))&&(u=qi(u,"onBeforeInput"),0<u.length&&(c=new Za("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}Ff(h,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Fr(e,n),l!=null&&r.unshift(Wr(e,l,i)),l=Fr(e,t),l!=null&&r.push(Wr(e,l,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,a=o.alternate,u=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&u!==null&&(o=u,i?(a=Fr(n,l),a!=null&&s.unshift(Wr(n,a,o))):i||(a=Fr(n,l),a!=null&&s.push(Wr(n,a,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ug=/\r\n?/g,cg=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(ug,`
`).replace(cg,"")}function yi(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(E(425))}function Hi(){}var Us=null,Vs=null;function Ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,fg=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(e){return hu.resolve(null).then(e).catch(dg)}:qs;function dg(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Br(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),ot="__reactFiber$"+lr,qr="__reactProps$"+lr,xt="__reactContainer$"+lr,Hs="__reactEvents$"+lr,pg="__reactListeners$"+lr,gg="__reactHandles$"+lr;function Jt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[ot])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[ot]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function wl(e){return e[qr]||null}var Qs=[],Rn=-1;function Ht(e){return{current:e}}function X(e){0>Rn||(e.current=Qs[Rn],Qs[Rn]=null,Rn--)}function Y(e,t){Rn++,Qs[Rn]=e.current,e.current=t}var Wt={},_e=Ht(Wt),Re=Ht(!1),an=Wt;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function Qi(){X(Re),X(_e)}function pu(e,t,n){if(_e.current!==Wt)throw Error(E(168));Y(_e,t),Y(Re,n)}function Df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Jd(e)||"Unknown",i));return te({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,an=_e.current,Y(_e,e),Y(Re,Re.current),!0}function gu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Df(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,X(Re),X(_e),Y(_e,e)):X(Re),Y(Re,n)}var dt=null,kl=!1,es=!1;function Bf(e){dt===null?dt=[e]:dt.push(e)}function mg(e){kl=!0,Bf(e)}function Qt(){if(!es&&dt!==null){es=!0;var e=0,t=W;try{var n=dt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,kl=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),ff(jo,Qt),i}finally{W=t,es=!1}}return null}var Mn=[],On=0,Ki=null,Gi=0,Ue=[],Ve=0,un=null,pt=1,gt="";function Gt(e,t){Mn[On++]=Gi,Mn[On++]=Ki,Ki=e,Gi=t}function bf(e,t,n){Ue[Ve++]=pt,Ue[Ve++]=gt,Ue[Ve++]=un,un=e;var r=pt;e=gt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var l=32-et(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pt=1<<32-et(t)+i|n<<i|r,gt=l+e}else pt=1<<l|n<<i|r,gt=e}function Qo(e){e.return!==null&&(Gt(e,1),bf(e,1,0))}function Yo(e){for(;e===Ki;)Ki=Mn[--On],Mn[On]=null,Gi=Mn[--On],Mn[On]=null;for(;e===un;)un=Ue[--Ve],Ue[Ve]=null,gt=Ue[--Ve],Ue[Ve]=null,pt=Ue[--Ve],Ue[Ve]=null}var Fe=null,ze=null,Z=!1,Xe=null;function Uf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,ze=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:pt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,ze=null,!0):!1;default:return!1}}function Ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(Z){var t=ze;if(t){var n=t;if(!mu(e,t)){if(Ys(e))throw Error(E(418));t=Ft(n.nextSibling);var r=Fe;t&&mu(e,t)?Uf(r,n):(e.flags=e.flags&-4097|2,Z=!1,Fe=e)}}else{if(Ys(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,Fe=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function vi(e){if(e!==Fe)return!1;if(!Z)return yu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ws(e.type,e.memoizedProps)),t&&(t=ze)){if(Ys(e))throw Vf(),Error(E(418));for(;t;)Uf(e,t),t=Ft(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Fe?Ft(e.stateNode.nextSibling):null;return!0}function Vf(){for(var e=ze;e;)e=Ft(e.nextSibling)}function Kn(){ze=Fe=null,Z=!1}function Ko(e){Xe===null?Xe=[e]:Xe.push(e)}var yg=St.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=i.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function Wf(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=bt(g,m),g.index=0,g.sibling=null,g}function l(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,m,y,w){return m===null||m.tag!==6?(m=os(y,g.mode,w),m.return=g,m):(m=i(m,y),m.return=g,m)}function a(g,m,y,w){var S=y.type;return S===An?c(g,m,y.props.children,w,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&vu(S)===m.type)?(w=i(m,y.props),w.ref=dr(g,m,y),w.return=g,w):(w=Fi(y.type,y.key,y.props,null,g.mode,w),w.ref=dr(g,m,y),w.return=g,w)}function u(g,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=as(y,g.mode,w),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function c(g,m,y,w,S){return m===null||m.tag!==7?(m=ln(y,g.mode,w,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function h(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=os(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ai:return y=Fi(m.type,m.key,m.props,null,g.mode,y),y.ref=dr(g,null,m),y.return=g,y;case Cn:return m=as(m,g.mode,y),m.return=g,m;case Ct:var w=m._init;return h(g,w(m._payload),y)}if(xr(m)||ar(m))return m=ln(m,g.mode,y,null),m.return=g,m;xi(g,m)}return null}function f(g,m,y,w){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:o(g,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:return y.key===S?a(g,m,y,w):null;case Cn:return y.key===S?u(g,m,y,w):null;case Ct:return S=y._init,f(g,m,S(y._payload),w)}if(xr(y)||ar(y))return S!==null?null:c(g,m,y,w,null);xi(g,y)}return null}function d(g,m,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,o(m,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ai:return g=g.get(w.key===null?y:w.key)||null,a(m,g,w,S);case Cn:return g=g.get(w.key===null?y:w.key)||null,u(m,g,w,S);case Ct:var _=w._init;return d(g,m,y,_(w._payload),S)}if(xr(w)||ar(w))return g=g.get(y)||null,c(m,g,w,S,null);xi(m,w)}return null}function p(g,m,y,w){for(var S=null,_=null,T=m,A=m=0,I=null;T!==null&&A<y.length;A++){T.index>A?(I=T,T=null):I=T.sibling;var L=f(g,T,y[A],w);if(L===null){T===null&&(T=I);break}e&&T&&L.alternate===null&&t(g,T),m=l(L,m,A),_===null?S=L:_.sibling=L,_=L,T=I}if(A===y.length)return n(g,T),Z&&Gt(g,A),S;if(T===null){for(;A<y.length;A++)T=h(g,y[A],w),T!==null&&(m=l(T,m,A),_===null?S=T:_.sibling=T,_=T);return Z&&Gt(g,A),S}for(T=r(g,T);A<y.length;A++)I=d(T,g,A,y[A],w),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?A:I.key),m=l(I,m,A),_===null?S=I:_.sibling=I,_=I);return e&&T.forEach(function(j){return t(g,j)}),Z&&Gt(g,A),S}function v(g,m,y,w){var S=ar(y);if(typeof S!="function")throw Error(E(150));if(y=S.call(y),y==null)throw Error(E(151));for(var _=S=null,T=m,A=m=0,I=null,L=y.next();T!==null&&!L.done;A++,L=y.next()){T.index>A?(I=T,T=null):I=T.sibling;var j=f(g,T,L.value,w);if(j===null){T===null&&(T=I);break}e&&T&&j.alternate===null&&t(g,T),m=l(j,m,A),_===null?S=j:_.sibling=j,_=j,T=I}if(L.done)return n(g,T),Z&&Gt(g,A),S;if(T===null){for(;!L.done;A++,L=y.next())L=h(g,L.value,w),L!==null&&(m=l(L,m,A),_===null?S=L:_.sibling=L,_=L);return Z&&Gt(g,A),S}for(T=r(g,T);!L.done;A++,L=y.next())L=d(T,g,A,L.value,w),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?A:L.key),m=l(L,m,A),_===null?S=L:_.sibling=L,_=L);return e&&T.forEach(function(D){return t(g,D)}),Z&&Gt(g,A),S}function k(g,m,y,w){if(typeof y=="object"&&y!==null&&y.type===An&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:e:{for(var S=y.key,_=m;_!==null;){if(_.key===S){if(S=y.type,S===An){if(_.tag===7){n(g,_.sibling),m=i(_,y.props.children),m.return=g,g=m;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&vu(S)===_.type){n(g,_.sibling),m=i(_,y.props),m.ref=dr(g,_,y),m.return=g,g=m;break e}n(g,_);break}else t(g,_);_=_.sibling}y.type===An?(m=ln(y.props.children,g.mode,w,y.key),m.return=g,g=m):(w=Fi(y.type,y.key,y.props,null,g.mode,w),w.ref=dr(g,m,y),w.return=g,g=w)}return s(g);case Cn:e:{for(_=y.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=as(y,g.mode,w),m.return=g,g=m}return s(g);case Ct:return _=y._init,k(g,m,_(y._payload),w)}if(xr(y))return p(g,m,y,w);if(ar(y))return v(g,m,y,w);xi(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=os(y,g.mode,w),m.return=g,g=m),s(g)):n(g,m)}return k}var Gn=Wf(!0),qf=Wf(!1),Xi=Ht(null),Zi=null,$n=null,Go=null;function Xo(){Go=$n=Zi=null}function Zo(e){var t=Xi.current;X(Xi),e._currentValue=t}function Gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Zi=e,Go=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Go!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(Zi===null)throw Error(E(308));$n=e,Zi.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var en=null;function Jo(e){en===null?en=[e]:en.push(e)}function Hf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jo(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,Jo(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Do(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ji(e,t,n,r){var i=e.updateQueue;At=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var a=o,u=a.next;a.next=null,s===null?l=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;s=0,c=u=a=null,o=l;do{var f=o.lane,d=o.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,v=o;switch(f=t,d=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){h=p.call(d,h,f);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,f=typeof p=="function"?p.call(d,h,f):p,f==null)break e;h=te({},h,f);break e;case 2:At=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else d={eventTime:d,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=d,a=h):c=c.next=d,s|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);fn|=s,e.lanes=s,e.memoizedState=h}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ri={},ct=Ht(ri),Hr=Ht(ri),Qr=Ht(ri);function tn(e){if(e===ri)throw Error(E(174));return e}function ta(e,t){switch(Y(Qr,t),Y(Hr,e),Y(ct,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}X(ct),Y(ct,t)}function Xn(){X(ct),X(Hr),X(Qr)}function Yf(e){tn(Qr.current);var t=tn(ct.current),n=Is(t,e.type);t!==n&&(Y(Hr,e),Y(ct,n))}function na(e){Hr.current===e&&(X(ct),X(Hr))}var J=Ht(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function ra(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var Ri=St.ReactCurrentDispatcher,ns=St.ReactCurrentBatchConfig,cn=0,ee=null,oe=null,ue=null,tl=!1,Nr=!1,Yr=0,vg=0;function ye(){throw Error(E(321))}function ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function la(e,t,n,r,i,l){if(cn=l,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Sg:_g,e=n(r,i),Nr){l=0;do{if(Nr=!1,Yr=0,25<=l)throw Error(E(301));l+=1,ue=oe=null,t.updateQueue=null,Ri.current=Eg,e=n(r,i)}while(Nr)}if(Ri.current=nl,t=oe!==null&&oe.next!==null,cn=0,ue=oe=ee=null,tl=!1,t)throw Error(E(300));return e}function sa(){var e=Yr!==0;return Yr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?ee.memoizedState=ue=e:ue=ue.next=e,ue}function Qe(){if(oe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?ee.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?ee.memoizedState=ue=e:ue=ue.next=e}return ue}function Kr(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=s=null,a=null,u=l;do{var c=u.lane;if((cn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(o=a=h,s=r):a=a.next=h,ee.lanes|=c,fn|=c}u=u.next}while(u!==null&&u!==l);a===null?s=r:a.next=o,nt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ee.lanes|=l,fn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function is(e){var t=Qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);nt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Kf(){}function Gf(e,t){var n=ee,r=Qe(),i=t(),l=!nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Pe=!0),r=r.queue,oa(Jf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Gr(9,Zf.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(E(349));cn&30||Xf(n,t,i)}return i}function Xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zf(e,t,n,r){t.value=n,t.getSnapshot=r,eh(t)&&th(e)}function Jf(e,t,n){return n(function(){eh(t)&&th(e)})}function eh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function th(e){var t=wt(e,1);t!==null&&tt(t,e,1,-1)}function ku(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t.queue=e,e=e.dispatch=kg.bind(null,ee,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nh(){return Qe().memoizedState}function Mi(e,t,n,r){var i=st();ee.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var i=Qe();r=r===void 0?null:r;var l=void 0;if(oe!==null){var s=oe.memoizedState;if(l=s.destroy,r!==null&&ia(r,s.deps)){i.memoizedState=Gr(t,n,l,r);return}}ee.flags|=e,i.memoizedState=Gr(1|t,n,l,r)}function Su(e,t){return Mi(8390656,8,e,t)}function oa(e,t){return Sl(2048,8,e,t)}function rh(e,t){return Sl(4,2,e,t)}function ih(e,t){return Sl(4,4,e,t)}function lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sh(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,lh.bind(null,t,e),n)}function aa(){}function oh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ah(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uh(e,t,n){return cn&21?(nt(n,t)||(n=pf(),ee.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function xg(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=ns.transition;ns.transition={};try{e(!1),t()}finally{W=n,ns.transition=r}}function ch(){return Qe().memoizedState}function wg(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fh(e))hh(t,n);else if(n=Hf(e,t,n,r),n!==null){var i=Ae();tt(n,e,r,i),dh(n,t,r)}}function kg(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fh(e))hh(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,nt(o,s)){var a=t.interleaved;a===null?(i.next=i,Jo(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Hf(e,t,i,r),n!==null&&(i=Ae(),tt(n,e,r,i),dh(n,t,r))}}function fh(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function hh(e,t){Nr=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Do(e,n)}}var nl={readContext:He,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Sg={readContext:He,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wg.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:ku,useDebugValue:aa,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=ku(!1),t=e[0];return e=xg.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=st();if(Z){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));cn&30||Xf(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Su(Jf.bind(null,r,l,e),[e]),r.flags|=2048,Gr(9,Zf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=st(),t=fe.identifierPrefix;if(Z){var n=gt,r=pt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_g={readContext:He,useCallback:oh,useContext:He,useEffect:oa,useImperativeHandle:sh,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:ah,useReducer:rs,useRef:nh,useState:function(){return rs(Kr)},useDebugValue:aa,useDeferredValue:function(e){var t=Qe();return uh(t,oe.memoizedState,e)},useTransition:function(){var e=rs(Kr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:Gf,useId:ch,unstable_isNewReconciler:!1},Eg={readContext:He,useCallback:oh,useContext:He,useEffect:oa,useImperativeHandle:sh,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:ah,useReducer:is,useRef:nh,useState:function(){return is(Kr)},useDebugValue:aa,useDeferredValue:function(e){var t=Qe();return oe===null?t.memoizedState=e:uh(t,oe.memoizedState,e)},useTransition:function(){var e=is(Kr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:Gf,useId:ch,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=Bt(e),l=yt(r,i);l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,i),t!==null&&(tt(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=Bt(e),l=yt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,i),t!==null&&(tt(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Bt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=jt(e,i,r),t!==null&&(tt(t,e,r,n),Pi(t,e,r))}};function _u(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,l):!0}function ph(e,t,n){var r=!1,i=Wt,l=t.contextType;return typeof l=="object"&&l!==null?l=He(l):(i=Me(t)?an:_e.current,r=t.contextTypes,l=(r=r!=null)?Yn(e,i):Wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function Zs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ea(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=He(l):(l=Me(t)?an:_e.current,i.context=Yn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Xs(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_l.enqueueReplaceState(i,i.state,null),Ji(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=Zd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Js(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tg=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,uo=r),Js(e,t)},n}function mh(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Js(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Js(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dg.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var Cg=St.ReactCurrentOwner,Pe=!1;function Te(e,t,n,r){t.child=e===null?qf(t,null,n,r):Gn(t,e.child,n,r)}function Nu(e,t,n,r,i){n=n.render;var l=t.ref;return Un(t,i),r=la(e,t,n,r,l,i),n=sa(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Z&&n&&Qo(t),t.flags|=1,Te(e,t,r,i),t.child)}function Lu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ma(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,yh(e,t,l,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(s,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ur(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,kt(e,t,i)}return eo(e,t,n,r,i)}function vh(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Fn,$e),$e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Fn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(Fn,$e),$e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(Fn,$e),$e|=r;return Te(e,t,i,n),t.child}function xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,n,r,i){var l=Me(n)?an:_e.current;return l=Yn(t,l),Un(t,i),n=la(e,t,n,r,l,i),r=sa(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Z&&r&&Qo(t),t.flags|=1,Te(e,t,n,i),t.child)}function Iu(e,t,n,r,i){if(Me(n)){var l=!0;Yi(t)}else l=!1;if(Un(t,i),t.stateNode===null)Oi(e,t),ph(t,n,r),Zs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Me(n)?an:_e.current,u=Yn(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||a!==u)&&Eu(t,s,r,u),At=!1;var f=t.memoizedState;s.state=f,Ji(t,r,s,i),a=t.memoizedState,o!==r||f!==a||Re.current||At?(typeof c=="function"&&(Xs(t,n,c,r),a=t.memoizedState),(o=At||_u(t,n,o,r,f,a,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Qf(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Ke(t.type,o),s.props=u,h=t.pendingProps,f=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=He(a):(a=Me(n)?an:_e.current,a=Yn(t,a));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||f!==a)&&Eu(t,s,r,a),At=!1,f=t.memoizedState,s.state=f,Ji(t,r,s,i);var p=t.memoizedState;o!==h||f!==p||Re.current||At?(typeof d=="function"&&(Xs(t,n,d,r),p=t.memoizedState),(u=At||_u(t,n,u,r,f,p,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,p,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,p,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return to(e,t,n,r,l,i)}function to(e,t,n,r,i,l){xh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&gu(t,n,!1),kt(e,t,l);r=t.stateNode,Cg.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,l),t.child=Gn(t,null,o,l)):Te(e,t,o,l),t.memoizedState=r.state,i&&gu(t,n,!0),t.child}function wh(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),ta(e,t.containerInfo)}function Pu(e,t,n,r,i){return Kn(),Ko(i),t.flags|=256,Te(e,t,n,r),t.child}var no={dehydrated:null,treeContext:null,retryLane:0};function ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function kh(e,t,n){var r=t.pendingProps,i=J.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(J,i&1),e===null)return Ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Cl(s,r,0,null),e=ln(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ro(n),t.memoizedState=no,e):ua(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Ag(e,t,s,r,o,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,o=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=bt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=bt(o,l):(l=ln(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?ro(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=no,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&Ko(r),Gn(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ag(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ls(Error(E(422))),wi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Cl({mode:"visible",children:r.children},i,0,null),l=ln(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=ro(s),t.memoizedState=no,l);if(!(t.mode&1))return wi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(E(419)),r=ls(l,r,void 0),wi(e,t,s,r)}if(o=(s&e.childLanes)!==0,Pe||o){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,wt(e,i),tt(r,e,i,-1))}return ga(),r=ls(Error(E(421))),wi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Bg.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ze=Ft(i.nextSibling),Fe=t,Z=!0,Xe=null,e!==null&&(Ue[Ve++]=pt,Ue[Ve++]=gt,Ue[Ve++]=un,pt=e.id,gt=e.overflow,un=t),t=ua(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gs(e.return,t,n)}function ss(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Sh(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Te(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ss(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&el(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ss(t,!0,n,null,l);break;case"together":ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ng(e,t,n){switch(t.tag){case 3:wh(t),Kn();break;case 5:Yf(t);break;case 1:Me(t.type)&&Yi(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?kh(e,t,n):(Y(J,J.current&1),e=kt(e,t,n),e!==null?e.sibling:null);Y(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,vh(e,t,n)}return kt(e,t,n)}var _h,io,Eh,Th;_h=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};io=function(){};Eh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(ct.current);var l=null;switch(n){case"input":i=Cs(e,i),r=Cs(e,r),l=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),l=[];break;case"textarea":i=Ls(e,i),r=Ls(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hi)}Ps(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($r.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==o&&(a!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&o[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(l||(l=[]),l.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($r.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",e),l||o===a||(l=[])):(l=l||[]).push(u,a))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Th=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lg(e,t,n){var r=t.pendingProps;switch(Yo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Me(t.type)&&Qi(),ve(t),null;case 3:return r=t.stateNode,Xn(),X(Re),X(_e),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(ho(Xe),Xe=null))),io(e,t),ve(t),null;case 5:na(t);var i=tn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Eh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=tn(ct.current),vi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ot]=t,r[qr]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)G(kr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ba(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":Va(r,l),G("invalid",r)}Ps(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&yi(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&yi(r.textContent,o,e),i=["children",""+o]):$r.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":ui(r),Ua(r,l,!0);break;case"textarea":ui(r),Wa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ot]=t,e[qr]=r,_h(e,t,!1,!1),t.stateNode=e;e:{switch(s=Rs(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)G(kr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":ba(e,r),i=Cs(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":Va(e,r),i=Ls(e,r),G("invalid",e);break;default:i=r}Ps(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?tf(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Jc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zr(e,a):typeof a=="number"&&zr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($r.hasOwnProperty(l)?a!=null&&l==="onScroll"&&G("scroll",e):a!=null&&Mo(e,l,a,s))}switch(n){case"input":ui(e),Ua(e,r,!1);break;case"textarea":ui(e),Wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?jn(e,!!r.multiple,l,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Th(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=tn(Qr.current),tn(ct.current),vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(l=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return ve(t),null;case 13:if(X(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))Vf(),Kn(),t.flags|=98560,l=!1;else if(l=vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[ot]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),l=!1}else Xe!==null&&(ho(Xe),Xe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):ga())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Xn(),io(e,t),e===null&&Vr(t.stateNode.containerInfo),ve(t),null;case 10:return Zo(t.type._context),ve(t),null;case 17:return Me(t.type)&&Qi(),ve(t),null;case 19:if(X(J),l=t.memoizedState,l===null)return ve(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)pr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=el(e),s!==null){for(t.flags|=128,pr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(J,J.current&1|2),t.child}e=e.sibling}l.tail!==null&&ie()>Jn&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=el(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Z)return ve(t),null}else 2*ie()-l.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,n=J.current,Y(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Ig(e,t){switch(Yo(t),t.tag){case 1:return Me(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),X(Re),X(_e),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(X(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(J),null;case 4:return Xn(),null;case 10:return Zo(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var ki=!1,xe=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,N=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function lo(e,t,n){try{n()}catch(r){re(e,t,r)}}var Mu=!1;function Rg(e,t){if(Us=Vi,e=If(),Ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,a=-1,u=0,c=0,h=e,f=null;t:for(;;){for(var d;h!==n||i!==0&&h.nodeType!==3||(o=s+i),h!==l||r!==0&&h.nodeType!==3||(a=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===e)break t;if(f===n&&++u===i&&(o=s),f===l&&++c===r&&(a=s),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},Vi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,k=p.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ke(t.type,v),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return p=Mu,Mu=!1,p}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&lo(t,n,l)}i=i.next}while(i!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function so(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ch(e){var t=e.alternate;t!==null&&(e.alternate=null,Ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[qr],delete t[Hs],delete t[pg],delete t[gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ah(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hi));else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var de=null,Ge=!1;function Et(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:xe||zn(n,t);case 6:var r=de,i=Ge;de=null,Et(e,t,n),de=r,Ge=i,de!==null&&(Ge?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ge?(e=de,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Br(e)):Jl(de,n.stateNode));break;case 4:r=de,i=Ge,de=n.stateNode.containerInfo,Ge=!0,Et(e,t,n),de=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&lo(n,t,s),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!xe&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){re(n,t,o)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Et(e,t,n),xe=r):Et(e,t,n);break;default:Et(e,t,n)}}function $u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pg),t.forEach(function(r){var i=bg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:de=o.stateNode,Ge=!1;break e;case 3:de=o.stateNode.containerInfo,Ge=!0;break e;case 4:de=o.stateNode.containerInfo,Ge=!0;break e}o=o.return}if(de===null)throw Error(E(160));Nh(l,s,i),de=null,Ge=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),it(e),r&4){try{Lr(3,e,e.return),El(3,e)}catch(v){re(e,e.return,v)}try{Lr(5,e,e.return)}catch(v){re(e,e.return,v)}}break;case 1:Ye(t,e),it(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(Ye(t,e),it(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(v){re(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Gc(i,l),Rs(o,s);var u=Rs(o,l);for(s=0;s<a.length;s+=2){var c=a[s],h=a[s+1];c==="style"?tf(i,h):c==="dangerouslySetInnerHTML"?Jc(i,h):c==="children"?zr(i,h):Mo(i,c,h,u)}switch(o){case"input":As(i,l);break;case"textarea":Xc(i,l);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?jn(i,!!l.multiple,d,!1):f!==!!l.multiple&&(l.defaultValue!=null?jn(i,!!l.multiple,l.defaultValue,!0):jn(i,!!l.multiple,l.multiple?[]:"",!1))}i[qr]=l}catch(v){re(e,e.return,v)}}break;case 6:if(Ye(t,e),it(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(v){re(e,e.return,v)}}break;case 3:if(Ye(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(v){re(e,e.return,v)}break;case 4:Ye(t,e),it(e);break;case 13:Ye(t,e),it(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ha=ie())),r&4&&$u(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||c,Ye(t,e),xe=u):Ye(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(h=N=c;N!==null;){switch(f=N,d=f.child,f.tag){case 0:case 11:case 14:case 15:Lr(4,f,f.return);break;case 1:zn(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(v){re(r,n,v)}}break;case 5:zn(f,f.return);break;case 22:if(f.memoizedState!==null){Fu(h);continue}}d!==null?(d.return=f,N=d):Fu(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=ef("display",s))}catch(v){re(e,e.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){re(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ye(t,e),it(e),r&4&&$u(e);break;case 21:break;default:Ye(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ah(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var l=Ou(e);ao(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Ou(e);oo(e,o,s);break;default:throw Error(E(161))}}catch(a){re(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mg(e,t,n){N=e,Ih(e)}function Ih(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ki;if(!s){var o=i.alternate,a=o!==null&&o.memoizedState!==null||xe;o=ki;var u=xe;if(ki=s,(xe=a)&&!u)for(N=i;N!==null;)s=N,a=s.child,s.tag===22&&s.memoizedState!==null?ju(i):a!==null?(a.return=s,N=a):ju(i);for(;l!==null;)N=l,Ih(l),l=l.sibling;N=i,ki=o,xe=u}zu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,N=l):zu(e)}}function zu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&wu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Br(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}xe||t.flags&512&&so(t)}catch(f){re(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Fu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ju(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(a){re(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){re(t,i,a)}}var l=t.return;try{so(t)}catch(a){re(t,l,a)}break;case 5:var s=t.return;try{so(t)}catch(a){re(t,s,a)}}}catch(a){re(t,t.return,a)}if(t===e){N=null;break}var o=t.sibling;if(o!==null){o.return=t.return,N=o;break}N=t.return}}var Og=Math.ceil,rl=St.ReactCurrentDispatcher,ca=St.ReactCurrentOwner,qe=St.ReactCurrentBatchConfig,B=0,fe=null,se=null,ge=0,$e=0,Fn=Ht(0),ae=0,Xr=null,fn=0,Tl=0,fa=0,Ir=null,Ie=null,ha=0,Jn=1/0,ft=null,il=!1,uo=null,Dt=null,Si=!1,Mt=null,ll=0,Pr=0,co=null,$i=-1,zi=0;function Ae(){return B&6?ie():$i!==-1?$i:$i=ie()}function Bt(e){return e.mode&1?B&2&&ge!==0?ge&-ge:yg.transition!==null?(zi===0&&(zi=pf()),zi):(e=W,e!==0||(e=window.event,e=e===void 0?16:kf(e.type)),e):1}function tt(e,t,n,r){if(50<Pr)throw Pr=0,co=null,Error(E(185));ei(e,n,r),(!(B&2)||e!==fe)&&(e===fe&&(!(B&2)&&(Tl|=n),ae===4&&Pt(e,ge)),Oe(e,r),n===1&&B===0&&!(t.mode&1)&&(Jn=ie()+500,kl&&Qt()))}function Oe(e,t){var n=e.callbackNode;yp(e,t);var r=Ui(e,e===fe?ge:0);if(r===0)n!==null&&Qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qa(n),t===1)e.tag===0?mg(Du.bind(null,e)):Bf(Du.bind(null,e)),hg(function(){!(B&6)&&Qt()}),n=null;else{switch(gf(r)){case 1:n=jo;break;case 4:n=hf;break;case 16:n=bi;break;case 536870912:n=df;break;default:n=bi}n=jh(n,Ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ph(e,t){if($i=-1,zi=0,B&6)throw Error(E(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=Ui(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=B;B|=2;var l=Mh();(fe!==e||ge!==t)&&(ft=null,Jn=ie()+500,rn(e,t));do try{Fg();break}catch(o){Rh(e,o)}while(!0);Xo(),rl.current=l,B=i,se!==null?t=0:(fe=null,ge=0,t=ae)}if(t!==0){if(t===2&&(i=Fs(e),i!==0&&(r=i,t=fo(e,i))),t===1)throw n=Xr,rn(e,0),Pt(e,r),Oe(e,ie()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!$g(i)&&(t=sl(e,r),t===2&&(l=Fs(e),l!==0&&(r=l,t=fo(e,l))),t===1))throw n=Xr,rn(e,0),Pt(e,r),Oe(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Xt(e,Ie,ft);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=ha+500-ie(),10<t)){if(Ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qs(Xt.bind(null,e,Ie,ft),t);break}Xt(e,Ie,ft);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Og(r/1960))-r,10<r){e.timeoutHandle=qs(Xt.bind(null,e,Ie,ft),r);break}Xt(e,Ie,ft);break;case 5:Xt(e,Ie,ft);break;default:throw Error(E(329))}}}return Oe(e,ie()),e.callbackNode===n?Ph.bind(null,e):null}function fo(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=sl(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&ho(t)),e}function ho(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function $g(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~fa,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if(B&6)throw Error(E(327));Vn();var t=Ui(e,0);if(!(t&1))return Oe(e,ie()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Fs(e);r!==0&&(t=r,n=fo(e,r))}if(n===1)throw n=Xr,rn(e,0),Pt(e,t),Oe(e,ie()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,Ie,ft),Oe(e,ie()),null}function da(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Jn=ie()+500,kl&&Qt())}}function hn(e){Mt!==null&&Mt.tag===0&&!(B&6)&&Vn();var t=B;B|=1;var n=qe.transition,r=W;try{if(qe.transition=null,W=1,e)return e()}finally{W=r,qe.transition=n,B=t,!(B&6)&&Qt()}}function pa(){$e=Fn.current,X(Fn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fg(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Yo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Xn(),X(Re),X(_e),ra();break;case 5:na(r);break;case 4:Xn();break;case 13:X(J);break;case 19:X(J);break;case 10:Zo(r.type._context);break;case 22:case 23:pa()}n=n.return}if(fe=e,se=e=bt(e.current,null),ge=$e=t,ae=0,Xr=null,fa=Tl=fn=0,Ie=Ir=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}en=null}return e}function Rh(e,t){do{var n=se;try{if(Xo(),Ri.current=nl,tl){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(cn=0,ue=oe=ee=null,Nr=!1,Yr=0,ca.current=null,n===null||n.return===null){ae=1,Xr=t,se=null;break}e:{var l=e,s=n.return,o=n,a=t;if(t=ge,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=o,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=Cu(s);if(d!==null){d.flags&=-257,Au(d,s,o,l,t),d.mode&1&&Tu(l,u,t),t=d,a=u;var p=t.updateQueue;if(p===null){var v=new Set;v.add(a),t.updateQueue=v}else p.add(a);break e}else{if(!(t&1)){Tu(l,u,t),ga();break e}a=Error(E(426))}}else if(Z&&o.mode&1){var k=Cu(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Au(k,s,o,l,t),Ko(Zn(a,o));break e}}l=a=Zn(a,o),ae!==4&&(ae=2),Ir===null?Ir=[l]:Ir.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=gh(l,a,t);xu(l,g);break e;case 1:o=a;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Dt===null||!Dt.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=mh(l,o,t);xu(l,w);break e}}l=l.return}while(l!==null)}$h(n)}catch(S){t=S,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Mh(){var e=rl.current;return rl.current=nl,e===null?nl:e}function ga(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(fn&268435455)&&!(Tl&268435455)||Pt(fe,ge)}function sl(e,t){var n=B;B|=2;var r=Mh();(fe!==e||ge!==t)&&(ft=null,rn(e,t));do try{zg();break}catch(i){Rh(e,i)}while(!0);if(Xo(),B=n,rl.current=r,se!==null)throw Error(E(261));return fe=null,ge=0,ae}function zg(){for(;se!==null;)Oh(se)}function Fg(){for(;se!==null&&!ap();)Oh(se)}function Oh(e){var t=Fh(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?$h(e):se=t,ca.current=null}function $h(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ig(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,se=null;return}}else if(n=Lg(n,t,$e),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ae===0&&(ae=5)}function Xt(e,t,n){var r=W,i=qe.transition;try{qe.transition=null,W=1,jg(e,t,n,r)}finally{qe.transition=i,W=r}return null}function jg(e,t,n,r){do Vn();while(Mt!==null);if(B&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(vp(e,l),e===fe&&(se=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,jh(bi,function(){return Vn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=qe.transition,qe.transition=null;var s=W;W=1;var o=B;B|=4,ca.current=null,Rg(e,n),Lh(n,e),ig(Vs),Vi=!!Us,Vs=Us=null,e.current=n,Mg(n),up(),B=o,W=s,qe.transition=l}else e.current=n;if(Si&&(Si=!1,Mt=e,ll=i),l=e.pendingLanes,l===0&&(Dt=null),hp(n.stateNode),Oe(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,e=uo,uo=null,e;return ll&1&&e.tag!==0&&Vn(),l=e.pendingLanes,l&1?e===co?Pr++:(Pr=0,co=e):Pr=0,Qt(),null}function Vn(){if(Mt!==null){var e=gf(ll),t=qe.transition,n=W;try{if(qe.transition=null,W=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,ll=0,B&6)throw Error(E(331));var i=B;for(B|=4,N=e.current;N!==null;){var l=N,s=l.child;if(N.flags&16){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var u=o[a];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Lr(8,c,l)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var f=c.sibling,d=c.return;if(Ch(c),c===u){N=null;break}if(f!==null){f.return=d,N=f;break}N=d}}}var p=l.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}N=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,N=s;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Lr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,N=g;break e}N=l.return}}var m=e.current;for(N=m;N!==null;){s=N;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,N=y;else e:for(s=m;N!==null;){if(o=N,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:El(9,o)}}catch(S){re(o,o.return,S)}if(o===s){N=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,N=w;break e}N=o.return}}if(B=i,Qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{W=n,qe.transition=t}}return!1}function Bu(e,t,n){t=Zn(n,t),t=gh(e,t,1),e=jt(e,t,1),t=Ae(),e!==null&&(ei(e,1,t),Oe(e,t))}function re(e,t,n){if(e.tag===3)Bu(e,e,n);else for(;t!==null;){if(t.tag===3){Bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Zn(n,e),e=mh(t,e,1),t=jt(t,e,1),e=Ae(),t!==null&&(ei(t,1,e),Oe(t,e));break}}t=t.return}}function Dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>ie()-ha?rn(e,0):fa|=n),Oe(e,t)}function zh(e,t){t===0&&(e.mode&1?(t=hi,hi<<=1,!(hi&130023424)&&(hi=4194304)):t=1);var n=Ae();e=wt(e,t),e!==null&&(ei(e,t,n),Oe(e,n))}function Bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zh(e,n)}function bg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),zh(e,n)}var Fh;Fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Ng(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Z&&t.flags&1048576&&bf(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var i=Yn(t,_e.current);Un(t,n),i=la(null,t,r,e,i,n);var l=sa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(l=!0,Yi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ea(t),i.updater=_l,t.stateNode=i,i._reactInternals=t,Zs(t,r,e,n),t=to(null,t,r,!0,l,n)):(t.tag=0,Z&&l&&Qo(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vg(r),e=Ke(r,e),i){case 0:t=eo(null,t,r,e,n);break e;case 1:t=Iu(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=Lu(null,t,r,Ke(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),eo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Iu(e,t,r,i,n);case 3:e:{if(wh(t),e===null)throw Error(E(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Qf(e,t),Ji(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Zn(Error(E(423)),t),t=Pu(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(E(424)),t),t=Pu(e,t,r,n,i);break e}else for(ze=Ft(t.stateNode.containerInfo.firstChild),Fe=t,Z=!0,Xe=null,n=qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===i){t=kt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&Ks(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Ws(r,i)?s=null:l!==null&&Ws(r,l)&&(t.flags|=32),xh(e,t),Te(e,t,s,n),t.child;case 6:return e===null&&Ks(t),null;case 13:return kh(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Nu(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,Y(Xi,r._currentValue),r._currentValue=s,l!==null)if(nt(l.value,s)){if(l.children===i.children&&!Re.current){t=kt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=yt(-1,n&-n),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Gs(l.return,n,t),o.lanes|=n;break}a=a.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(E(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Gs(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=He(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),Lu(e,t,r,i,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Oi(e,t),t.tag=1,Me(r)?(e=!0,Yi(t)):e=!1,Un(t,n),ph(t,r,i),Zs(t,r,i,n),to(null,t,r,!0,e,n);case 19:return Sh(e,t,n);case 22:return vh(e,t,n)}throw Error(E(156,t.tag))};function jh(e,t){return ff(e,t)}function Ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Ug(e,t,n,r)}function ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vg(e){if(typeof e=="function")return ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$o)return 11;if(e===zo)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")ma(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case An:return ln(n.children,i,l,t);case Oo:s=8,i|=8;break;case Ss:return e=We(12,n,t,i|2),e.elementType=Ss,e.lanes=l,e;case _s:return e=We(13,n,t,i),e.elementType=_s,e.lanes=l,e;case Es:return e=We(19,n,t,i),e.elementType=Es,e.lanes=l,e;case Qc:return Cl(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qc:s=10;break e;case Hc:s=9;break e;case $o:s=11;break e;case zo:s=14;break e;case Ct:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function ln(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=We(22,e,r,t),e.elementType=Qc,e.lanes=n,e.stateNode={isHidden:!1},e}function os(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function as(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,i,l,s,o,a){return e=new Wg(e,t,n,o,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(l),e}function qg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dh(e){if(!e)return Wt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Me(n))return Df(e,n,t)}return t}function Bh(e,t,n,r,i,l,s,o,a){return e=ya(n,r,!0,e,i,l,s,o,a),e.context=Dh(null),n=e.current,r=Ae(),i=Bt(n),l=yt(r,i),l.callback=t??null,jt(n,l,i),e.current.lanes=i,ei(e,i,r),Oe(e,r),e}function Al(e,t,n,r){var i=t.current,l=Ae(),s=Bt(i);return n=Dh(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(i,t,s),e!==null&&(tt(e,i,s,l),Pi(e,i,s)),s}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){bu(e,t),(e=e.alternate)&&bu(e,t)}function Hg(){return null}var bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Nl.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Al(e,t,null,null)};Nl.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Al(null,e,null,null)}),t[xt]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&wf(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function Qg(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=ol(s);l.call(u)}}var s=Bh(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=s,e[xt]=s.current,Vr(e.nodeType===8?e.parentNode:e),hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=ol(a);o.call(u)}}var a=ya(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[xt]=a.current,Vr(e.nodeType===8?e.parentNode:e),hn(function(){Al(t,a,n,r)}),a}function Il(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var a=ol(s);o.call(a)}}Al(t,s,e,i)}else s=Qg(n,t,e,i,r);return ol(s)}mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(Do(t,n|1),Oe(t,ie()),!(B&6)&&(Jn=ie()+500,Qt()))}break;case 13:hn(function(){var r=wt(e,1);if(r!==null){var i=Ae();tt(r,e,1,i)}}),va(e,1)}};Bo=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Ae();tt(t,e,134217728,n)}va(e,134217728)}};yf=function(e){if(e.tag===13){var t=Bt(e),n=wt(e,t);if(n!==null){var r=Ae();tt(n,e,t,r)}va(e,t)}};vf=function(){return W};xf=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Os=function(e,t,n){switch(t){case"input":if(As(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(E(90));Kc(r),As(r,i)}}}break;case"textarea":Xc(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};lf=da;sf=hn;var Yg={usingClientEntryPoint:!1,Events:[ni,Pn,wl,nf,rf,da]},gr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kg={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uf(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{ml=_i.inject(Kg),ut=_i}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yg;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(E(200));return qg(e,t,null,n)};De.createRoot=function(e,t){if(!wa(e))throw Error(E(299));var n=!1,r="",i=bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new xa(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=uf(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return hn(e)};De.hydrate=function(e,t,n){if(!Ll(t))throw Error(E(200));return Il(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Bh(t,null,e,1,n??null,i,!1,l,s),e[xt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Nl(t)};De.render=function(e,t,n){if(!Ll(t))throw Error(E(200));return Il(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(E(40));return e._reactRootContainer?(hn(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};De.unstable_batchedUpdates=da;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Il(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function Uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)}catch(e){console.error(e)}}Uh(),bc.exports=De;var Gg=bc.exports,Vu=Gg;ws.createRoot=Vu.createRoot,ws.hydrateRoot=Vu.hydrateRoot;function Xg({links:e=[]}){const siteLabels=useSiteLabels();const[t,n]=q.useState(!1);return q.useEffect(()=>{const r=()=>n(window.scrollY>80);return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),x.jsx("header",{className:`nav ${t?"nav--scrolled":""}`,children:x.jsxs("div",{className:"wrap nav__inner",children:[x.jsxs("a",{className:"nav__brand",href:"#top",children:[x.jsx("span",{className:"nav__logo","aria-hidden":"true"}),x.jsxs("span",{className:"atria-wordmark",children:["Sage 2.1 Flash"]})]}),x.jsx("nav",{className:"nav__quicklinks","aria-label":siteLabels.projectLinks,children:e.map((r,i)=>{const l=r.href&&r.href!=="#",s=Array.isArray(r.options)&&r.options.length>0;return s?x.jsxs("details",{className:"nav__token-menu",onKeyDown:o=>{o.key==="Escape"&&(o.currentTarget.removeAttribute("open"),o.currentTarget.querySelector("summary")?.focus())},children:[x.jsxs("summary",{className:"nav__quicklink nav__token-trigger",children:[r.label,x.jsx("span",{className:"nav__token-caret","aria-hidden":"true",children:"▾"})]}),x.jsx("div",{className:"nav__token-dropdown",children:r.options.map((o,a)=>x.jsxs("a",{className:"nav__token-option",href:o.href,target:"_blank",rel:"noreferrer",onClick:c=>c.currentTarget.closest("details")?.removeAttribute("open"),children:[x.jsx("span",{children:o.label}),x.jsx("span",{className:"nav__token-option-arrow","aria-hidden":"true",children:"↗"})]},a))})]},i):x.jsx("a",{className:`nav__quicklink ${l?"":"is-placeholder"}`,href:l?r.href:"#",target:l?"_blank":void 0,rel:l?"noreferrer":void 0,"aria-disabled":l?void 0:"true",onClick:l?void 0:o=>o.preventDefault(),children:r.label},i)})}),x.jsx(SiteLanguageSwitch,{})]})})}function Zg(){const siteLabels=useSiteLabels();const[e,t]=q.useState([]),[n,r]=q.useState(""),[i,l]=q.useState(!1),s=q.useRef([]);return q.useEffect(()=>{const o=Array.from(document.querySelectorAll("[data-toc]"));s.current=o,t(o.map(u=>({id:u.id,label:u.getAttribute("data-toc"),sub:u.hasAttribute("data-toc-sub")})));const a=()=>{var h;const u=window.innerHeight*.22;let c=((h=o[0])==null?void 0:h.id)||"";for(const f of o)f.getBoundingClientRect().top-u<=0&&(c=f.id);r(c),l(window.scrollY>window.innerHeight*.55)};return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[siteLabels]),e.length===0?null:x.jsx("aside",{className:`sidenav ${i?"is-show":""}`,"aria-label":siteLabels.contents,children:x.jsx("ul",{className:"sidenav__list",children:e.map(o=>x.jsx("li",{className:`sidenav__item ${o.sub?"is-sub":""} ${n===o.id?"is-active":""}`,children:x.jsxs("a",{href:`#${o.id}`,children:[x.jsx("span",{className:"sidenav__tick"}),x.jsx("span",{className:"sidenav__label",children:o.label})]})},o.id))})})}function Rr(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function po(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Jg(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function Wu(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function qu(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function em(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function tm(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function us(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function nm(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function rm(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}function Hu(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function im(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function lm(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function go(e,t){let n=t[0],r=t[1],i=t[2],l=n*n+r*r+i*i;return l>0&&(l=1/Math.sqrt(l)),e[0]=t[0]*l,e[1]=t[1]*l,e[2]=t[2]*l,e}function Vh(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Qu(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[0],o=n[1],a=n[2];return e[0]=i*a-l*o,e[1]=l*s-r*a,e[2]=r*o-i*s,e}function sm(e,t,n,r){let i=t[0],l=t[1],s=t[2];return e[0]=i+r*(n[0]-i),e[1]=l+r*(n[1]-l),e[2]=s+r*(n[2]-s),e}function om(e,t,n,r,i){const l=Math.exp(-r*i);let s=t[0],o=t[1],a=t[2];return e[0]=n[0]+(s-n[0])*l,e[1]=n[1]+(o-n[1])*l,e[2]=n[2]+(a-n[2])*l,e}function am(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[3]*r+n[7]*i+n[11]*l+n[15];return s=s||1,e[0]=(n[0]*r+n[4]*i+n[8]*l+n[12])/s,e[1]=(n[1]*r+n[5]*i+n[9]*l+n[13])/s,e[2]=(n[2]*r+n[6]*i+n[10]*l+n[14])/s,e}function um(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[3]*r+n[7]*i+n[11]*l+n[15];return s=s||1,e[0]=(n[0]*r+n[4]*i+n[8]*l)/s,e[1]=(n[1]*r+n[5]*i+n[9]*l)/s,e[2]=(n[2]*r+n[6]*i+n[10]*l)/s,e}function cm(e,t,n){let r=t[0],i=t[1],l=t[2];return e[0]=r*n[0]+i*n[3]+l*n[6],e[1]=r*n[1]+i*n[4]+l*n[7],e[2]=r*n[2]+i*n[5]+l*n[8],e}function fm(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[0],o=n[1],a=n[2],u=n[3],c=o*l-a*i,h=a*r-s*l,f=s*i-o*r,d=o*f-a*h,p=a*c-s*f,v=s*h-o*c,k=u*2;return c*=k,h*=k,f*=k,d*=2,p*=2,v*=2,e[0]=r+c+d,e[1]=i+h+p,e[2]=l+f+v,e}const hm=function(){const e=[0,0,0],t=[0,0,0];return function(n,r){po(e,n),po(t,r),go(e,e),go(t,t);let i=Vh(e,t);return i>1?0:i<-1?Math.PI:Math.acos(i)}}();function dm(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}class le extends Array{constructor(t=0,n=t,r=t){return super(t,n,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,n=t,r=t){return t.length?this.copy(t):(Jg(this,t,n,r),this)}copy(t){return po(this,t),this}add(t,n){return n?Wu(this,t,n):Wu(this,this,t),this}sub(t,n){return n?qu(this,t,n):qu(this,this,t),this}multiply(t){return t.length?em(this,this,t):us(this,this,t),this}divide(t){return t.length?tm(this,this,t):us(this,this,1/t),this}inverse(t=this){return lm(this,t),this}len(){return Rr(this)}distance(t){return t?nm(this,t):Rr(this)}squaredLen(){return Hu(this)}squaredDistance(t){return t?rm(this,t):Hu(this)}negate(t=this){return im(this,t),this}cross(t,n){return n?Qu(this,t,n):Qu(this,this,t),this}scale(t){return us(this,this,t),this}normalize(){return go(this,this),this}dot(t){return Vh(this,t)}equals(t){return dm(this,t)}applyMatrix3(t){return cm(this,this,t),this}applyMatrix4(t){return am(this,this,t),this}scaleRotateMatrix4(t){return um(this,this,t),this}applyQuaternion(t){return fm(this,this,t),this}angle(t){return hm(this,t)}lerp(t,n){return sm(this,this,t,n),this}smoothLerp(t,n,r){return om(this,this,t,n,r),this}clone(){return new le(this[0],this[1],this[2])}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}transformDirection(t){const n=this[0],r=this[1],i=this[2];return this[0]=t[0]*n+t[4]*r+t[8]*i,this[1]=t[1]*n+t[5]*r+t[9]*i,this[2]=t[2]*n+t[6]*r+t[10]*i,this.normalize()}}const Yu=new le;let pm=1,gm=1,Ku=!1;class mm{constructor(t,n={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=n,this.id=pm++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in n)this.addAttribute(r,n[r])}addAttribute(t,n){if(this.attributes[t]=n,n.id=gm++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else t==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(t){const n=!t.buffer;n&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),n?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((n,{name:r,type:i})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const l=this.attributes[r];this.gl.bindBuffer(l.target,l.buffer),this.glState.boundBuffer=l.buffer;let s=1;i===35674&&(s=2),i===35675&&(s=3),i===35676&&(s=4);const o=l.size/s,a=s===1?0:s*s*4,u=s===1?0:s*4;for(let c=0;c<s;c++)this.gl.vertexAttribPointer(n+c,o,l.type,l.normalized,l.stride+a,l.offset+c*u),this.gl.enableVertexAttribArray(n+c),this.gl.renderer.vertexAttribDivisor(n+c,l.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:n=this.gl.TRIANGLES}){var i;this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((l,{name:s})=>{const o=this.attributes[s];o.needsUpdate&&this.updateAttribute(o)});let r=2;((i=this.attributes.index)==null?void 0:i.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!Ku)return console.warn("No position buffer data found to compute bounds"),Ku=!0}computeBoundingBox(t){t||(t=this.getPosition());const n=t.data,r=t.size;this.bounds||(this.bounds={min:new le,max:new le,center:new le,scale:new le,radius:1/0});const i=this.bounds.min,l=this.bounds.max,s=this.bounds.center,o=this.bounds.scale;i.set(1/0),l.set(-1/0);for(let a=0,u=n.length;a<u;a+=r){const c=n[a],h=n[a+1],f=n[a+2];i.x=Math.min(c,i.x),i.y=Math.min(h,i.y),i.z=Math.min(f,i.z),l.x=Math.max(c,l.x),l.y=Math.max(h,l.y),l.z=Math.max(f,l.z)}o.sub(l,i),s.add(i,l).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const n=t.data,r=t.size;this.bounds||this.computeBoundingBox(t);let i=0;for(let l=0,s=n.length;l<s;l+=r)Yu.fromArray(n,l),i=Math.max(i,this.bounds.center.squaredDistance(Yu));this.bounds.radius=Math.sqrt(i)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let ym=1;const Gu={};class vm{constructor(t,{vertex:n,fragment:r,uniforms:i={},transparent:l=!1,cullFace:s=t.BACK,frontFace:o=t.CCW,depthTest:a=!0,depthWrite:u=!0,depthFunc:c=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=i,this.id=ym++,n||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=s,this.frontFace=o,this.depthTest=a,this.depthWrite=u,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:r})}setShaders({vertex:t,fragment:n}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Xu(t)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Xu(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let s=0;s<r;s++){let o=this.gl.getActiveUniform(this.program,s);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const a=o.name.match(/(\w+)/g);o.uniformName=a[0],o.nameComponents=a.slice(1)}this.attributeLocations=new Map;const i=[],l=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let s=0;s<l;s++){const o=this.gl.getActiveAttrib(this.program,s),a=this.gl.getAttribLocation(this.program,o.name);a!==-1&&(i[a]=o.name,this.attributeLocations.set(o,a))}this.attributeOrder=i.join("")}setBlendFunc(t,n,r,i){this.blendFunc.src=t,this.blendFunc.dst=n,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=i,t&&(this.transparent=!0)}setBlendEquation(t,n){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=n}setStencilFunc(t,n,r){this.stencilRef=n,this.stencilFunc.func=t,this.stencilFunc.ref=n,this.stencilFunc.mask=r}setStencilOp(t,n,r){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=n,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((i,l)=>{let s=this.uniforms[l.uniformName];for(const o of l.nameComponents){if(!s)break;if(o in s)s=s[o];else{if(Array.isArray(s.value))break;s=void 0;break}}if(!s)return Zu(`Active uniform ${l.name} has not been supplied`);if(s&&s.value===void 0)return Zu(`${l.name} uniform is missing a value parameter`);if(s.value.texture)return n=n+1,s.value.update(n),cs(this.gl,l.type,i,n);if(s.value.length&&s.value[0].texture){const o=[];return s.value.forEach(a=>{n=n+1,a.update(n),o.push(n)}),cs(this.gl,l.type,i,o)}cs(this.gl,l.type,i,s.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function cs(e,t,n,r){r=r.length?xm(r):r;const i=e.renderer.state.uniformLocations.get(n);if(r.length)if(i===void 0||i.length!==r.length)e.renderer.state.uniformLocations.set(n,r.slice(0));else{if(wm(i,r))return;i.set?i.set(r):km(i,r),e.renderer.state.uniformLocations.set(n,i)}else{if(i===r)return;e.renderer.state.uniformLocations.set(n,r)}switch(t){case 5126:return r.length?e.uniform1fv(n,r):e.uniform1f(n,r);case 35664:return e.uniform2fv(n,r);case 35665:return e.uniform3fv(n,r);case 35666:return e.uniform4fv(n,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?e.uniform1iv(n,r):e.uniform1i(n,r);case 35671:case 35667:return e.uniform2iv(n,r);case 35672:case 35668:return e.uniform3iv(n,r);case 35673:case 35669:return e.uniform4iv(n,r);case 35674:return e.uniformMatrix2fv(n,!1,r);case 35675:return e.uniformMatrix3fv(n,!1,r);case 35676:return e.uniformMatrix4fv(n,!1,r)}}function Xu(e){let t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function xm(e){const t=e.length,n=e[0].length;if(n===void 0)return e;const r=t*n;let i=Gu[r];i||(Gu[r]=i=new Float32Array(r));for(let l=0;l<t;l++)i.set(e[l],l*n);return i}function wm(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function km(e,t){for(let n=0,r=e.length;n<r;n++)e[n]=t[n]}let fs=0;function Zu(e){fs>100||(console.warn(e),fs++,fs>100&&console.warn("More than 100 program warnings - stopping logs."))}const hs=new le;let Sm=1;class _m{constructor({canvas:t=document.createElement("canvas"),width:n=300,height:r=150,dpr:i=1,alpha:l=!1,depth:s=!0,stencil:o=!1,antialias:a=!1,premultipliedAlpha:u=!1,preserveDrawingBuffer:c=!1,powerPreference:h="default",autoClear:f=!0,webgl:d=2}={}){const p={alpha:l,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h};this.dpr=i,this.alpha=l,this.color=!0,this.depth=s,this.stencil=o,this.premultipliedAlpha=u,this.autoClear=f,this.id=Sm++,d===2&&(this.gl=t.getContext("webgl2",p)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",p)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,n){this.width=t,this.height=n,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:n+"px"})}setViewport(t,n,r=0,i=0){this.state.viewport.width===t&&this.state.viewport.height===n||(this.state.viewport.width=t,this.state.viewport.height=n,this.state.viewport.x=r,this.state.viewport.y=i,this.gl.viewport(r,i,t,n))}setScissor(t,n,r=0,i=0){this.gl.scissor(r,i,t,n)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,n,r,i){this.state.blendFunc.src===t&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===i||(this.state.blendFunc.src=t,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=i,r!==void 0?this.gl.blendFuncSeparate(t,n,r,i):this.gl.blendFunc(t,n))}setBlendEquation(t,n){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(t,n):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,n,r){this.state.stencilFunc===t&&this.state.stencilRef===n&&this.state.stencilFuncMask===r||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(t||this.gl.ALWAYS,n||0,r||0))}setStencilOp(t,n,r){this.state.stencilFail===t&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===r||(this.state.stencilFail=t,this.state.stencilDepthFail=n,this.state.stencilDepthPass=r,this.gl.stencilOp(t,n,r))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(t,n))}getExtension(t,n,r){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),n?this.extensions[t]?this.extensions[t][r].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:t.zDepth!==n.zDepth?t.zDepth-n.zDepth:n.id-t.id}sortTransparent(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.zDepth!==n.zDepth?n.zDepth-t.zDepth:n.id-t.id}sortUI(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:n.id-t.id}getRenderList({scene:t,camera:n,frustumCull:r,sort:i}){let l=[];if(n&&r&&n.updateFrustum(),t.traverse(s=>{if(!s.visible)return!0;s.draw&&(r&&s.frustumCulled&&n&&!n.frustumIntersectsMesh(s)||l.push(s))}),i){const s=[],o=[],a=[];l.forEach(u=>{u.program.transparent?u.program.depthTest?o.push(u):a.push(u):s.push(u),u.zDepth=0,!(u.renderOrder!==0||!u.program.depthTest||!n)&&(u.worldMatrix.getTranslation(hs),hs.applyMatrix4(n.projectionViewMatrix),u.zDepth=hs.z)}),s.sort(this.sortOpaque),o.sort(this.sortTransparent),a.sort(this.sortUI),l=s.concat(o,a)}return l}render({scene:t,camera:n,target:r=null,update:i=!0,sort:l=!0,frustumCull:s=!0,clear:o}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),i&&t.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:t,camera:n,frustumCull:s,sort:l}).forEach(u=>{u.draw({camera:n})})}}function Em(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Tm(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function Cm(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n*n+r*r+i*i+l*l;return s>0&&(s=1/Math.sqrt(s)),e[0]=n*s,e[1]=r*s,e[2]=i*s,e[3]=l*s,e}function Am(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Nm(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Lm(e,t,n){n=n*.5;let r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function Ju(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=n[0],a=n[1],u=n[2],c=n[3];return e[0]=r*c+s*o+i*u-l*a,e[1]=i*c+s*a+l*o-r*u,e[2]=l*c+s*u+r*a-i*o,e[3]=s*c-r*o-i*a-l*u,e}function Im(e,t,n){n*=.5;let r=t[0],i=t[1],l=t[2],s=t[3],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a+s*o,e[1]=i*a+l*o,e[2]=l*a-i*o,e[3]=s*a-r*o,e}function Pm(e,t,n){n*=.5;let r=t[0],i=t[1],l=t[2],s=t[3],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a-l*o,e[1]=i*a+s*o,e[2]=l*a+r*o,e[3]=s*a-i*o,e}function Rm(e,t,n){n*=.5;let r=t[0],i=t[1],l=t[2],s=t[3],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*o,e[1]=i*a-r*o,e[2]=l*a+s*o,e[3]=s*a-l*o,e}function Mm(e,t,n,r){let i=t[0],l=t[1],s=t[2],o=t[3],a=n[0],u=n[1],c=n[2],h=n[3],f,d,p,v,k;return d=i*a+l*u+s*c+o*h,d<0&&(d=-d,a=-a,u=-u,c=-c,h=-h),1-d>1e-6?(f=Math.acos(d),p=Math.sin(f),v=Math.sin((1-r)*f)/p,k=Math.sin(r*f)/p):(v=1-r,k=r),e[0]=v*i+k*a,e[1]=v*l+k*u,e[2]=v*s+k*c,e[3]=v*o+k*h,e}function Om(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n*n+r*r+i*i+l*l,o=s?1/s:0;return e[0]=-n*o,e[1]=-r*o,e[2]=-i*o,e[3]=l*o,e}function $m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function zm(e,t){let n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);let l=(i+1)%3,s=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[l*3+l]-t[s*3+s]+1),e[i]=.5*r,r=.5/r,e[3]=(t[l*3+s]-t[s*3+l])*r,e[l]=(t[l*3+i]+t[i*3+l])*r,e[s]=(t[s*3+i]+t[i*3+s])*r}return e}function Fm(e,t,n="YXZ"){let r=Math.sin(t[0]*.5),i=Math.cos(t[0]*.5),l=Math.sin(t[1]*.5),s=Math.cos(t[1]*.5),o=Math.sin(t[2]*.5),a=Math.cos(t[2]*.5);return n==="XYZ"?(e[0]=r*s*a+i*l*o,e[1]=i*l*a-r*s*o,e[2]=i*s*o+r*l*a,e[3]=i*s*a-r*l*o):n==="YXZ"?(e[0]=r*s*a+i*l*o,e[1]=i*l*a-r*s*o,e[2]=i*s*o-r*l*a,e[3]=i*s*a+r*l*o):n==="ZXY"?(e[0]=r*s*a-i*l*o,e[1]=i*l*a+r*s*o,e[2]=i*s*o+r*l*a,e[3]=i*s*a-r*l*o):n==="ZYX"?(e[0]=r*s*a-i*l*o,e[1]=i*l*a+r*s*o,e[2]=i*s*o-r*l*a,e[3]=i*s*a+r*l*o):n==="YZX"?(e[0]=r*s*a+i*l*o,e[1]=i*l*a+r*s*o,e[2]=i*s*o-r*l*a,e[3]=i*s*a-r*l*o):n==="XZY"&&(e[0]=r*s*a-i*l*o,e[1]=i*l*a-r*s*o,e[2]=i*s*o+r*l*a,e[3]=i*s*a+r*l*o),e}const jm=Em,Dm=Tm,Bm=Am,bm=Cm;class Um extends Array{constructor(t=0,n=0,r=0,i=1){super(t,n,r,i),this.onChange=()=>{},this._target=this;const l=["0","1","2","3"];return new Proxy(this,{set(s,o){const a=Reflect.set(...arguments);return a&&l.includes(o)&&s.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return Nm(this._target),this.onChange(),this}set(t,n,r,i){return t.length?this.copy(t):(Dm(this._target,t,n,r,i),this.onChange(),this)}rotateX(t){return Im(this._target,this._target,t),this.onChange(),this}rotateY(t){return Pm(this._target,this._target,t),this.onChange(),this}rotateZ(t){return Rm(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return Om(this._target,t),this.onChange(),this}conjugate(t=this._target){return $m(this._target,t),this.onChange(),this}copy(t){return jm(this._target,t),this.onChange(),this}normalize(t=this._target){return bm(this._target,t),this.onChange(),this}multiply(t,n){return n?Ju(this._target,t,n):Ju(this._target,this._target,t),this.onChange(),this}dot(t){return Bm(this._target,t)}fromMatrix3(t){return zm(this._target,t),this.onChange(),this}fromEuler(t,n){return Fm(this._target,t,t.order),n||this.onChange(),this}fromAxisAngle(t,n){return Lm(this._target,t,n),this.onChange(),this}slerp(t,n){return Mm(this._target,this._target,t,n),this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this._target[3]=t[n+3],this.onChange(),this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t}}const Vm=1e-6;function Wm(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function qm(e,t,n,r,i,l,s,o,a,u,c,h,f,d,p,v,k){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=l,e[5]=s,e[6]=o,e[7]=a,e[8]=u,e[9]=c,e[10]=h,e[11]=f,e[12]=d,e[13]=p,e[14]=v,e[15]=k,e}function Hm(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Qm(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=t[4],o=t[5],a=t[6],u=t[7],c=t[8],h=t[9],f=t[10],d=t[11],p=t[12],v=t[13],k=t[14],g=t[15],m=n*o-r*s,y=n*a-i*s,w=n*u-l*s,S=r*a-i*o,_=r*u-l*o,T=i*u-l*a,A=c*v-h*p,I=c*k-f*p,L=c*g-d*p,j=h*k-f*v,D=h*g-d*v,Q=f*g-d*k,O=m*Q-y*D+w*j+S*L-_*I+T*A;return O?(O=1/O,e[0]=(o*Q-a*D+u*j)*O,e[1]=(i*D-r*Q-l*j)*O,e[2]=(v*T-k*_+g*S)*O,e[3]=(f*_-h*T-d*S)*O,e[4]=(a*L-s*Q-u*I)*O,e[5]=(n*Q-i*L+l*I)*O,e[6]=(k*w-p*T-g*y)*O,e[7]=(c*T-f*w+d*y)*O,e[8]=(s*D-o*L+u*A)*O,e[9]=(r*L-n*D-l*A)*O,e[10]=(p*_-v*w+g*m)*O,e[11]=(h*w-c*_-d*m)*O,e[12]=(o*I-s*j-a*A)*O,e[13]=(n*j-r*I+i*A)*O,e[14]=(v*y-p*S-k*m)*O,e[15]=(c*S-h*y+f*m)*O,e):null}function Wh(e){let t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],s=e[5],o=e[6],a=e[7],u=e[8],c=e[9],h=e[10],f=e[11],d=e[12],p=e[13],v=e[14],k=e[15],g=t*s-n*l,m=t*o-r*l,y=t*a-i*l,w=n*o-r*s,S=n*a-i*s,_=r*a-i*o,T=u*p-c*d,A=u*v-h*d,I=u*k-f*d,L=c*v-h*p,j=c*k-f*p,D=h*k-f*v;return g*D-m*j+y*L+w*I-S*A+_*T}function ec(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],v=t[12],k=t[13],g=t[14],m=t[15],y=n[0],w=n[1],S=n[2],_=n[3];return e[0]=y*r+w*o+S*h+_*v,e[1]=y*i+w*a+S*f+_*k,e[2]=y*l+w*u+S*d+_*g,e[3]=y*s+w*c+S*p+_*m,y=n[4],w=n[5],S=n[6],_=n[7],e[4]=y*r+w*o+S*h+_*v,e[5]=y*i+w*a+S*f+_*k,e[6]=y*l+w*u+S*d+_*g,e[7]=y*s+w*c+S*p+_*m,y=n[8],w=n[9],S=n[10],_=n[11],e[8]=y*r+w*o+S*h+_*v,e[9]=y*i+w*a+S*f+_*k,e[10]=y*l+w*u+S*d+_*g,e[11]=y*s+w*c+S*p+_*m,y=n[12],w=n[13],S=n[14],_=n[15],e[12]=y*r+w*o+S*h+_*v,e[13]=y*i+w*a+S*f+_*k,e[14]=y*l+w*u+S*d+_*g,e[15]=y*s+w*c+S*p+_*m,e}function Ym(e,t,n){let r=n[0],i=n[1],l=n[2],s,o,a,u,c,h,f,d,p,v,k,g;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*l+t[12],e[13]=t[1]*r+t[5]*i+t[9]*l+t[13],e[14]=t[2]*r+t[6]*i+t[10]*l+t[14],e[15]=t[3]*r+t[7]*i+t[11]*l+t[15]):(s=t[0],o=t[1],a=t[2],u=t[3],c=t[4],h=t[5],f=t[6],d=t[7],p=t[8],v=t[9],k=t[10],g=t[11],e[0]=s,e[1]=o,e[2]=a,e[3]=u,e[4]=c,e[5]=h,e[6]=f,e[7]=d,e[8]=p,e[9]=v,e[10]=k,e[11]=g,e[12]=s*r+c*i+p*l+t[12],e[13]=o*r+h*i+v*l+t[13],e[14]=a*r+f*i+k*l+t[14],e[15]=u*r+d*i+g*l+t[15]),e}function Km(e,t,n){let r=n[0],i=n[1],l=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*l,e[9]=t[9]*l,e[10]=t[10]*l,e[11]=t[11]*l,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Gm(e,t,n,r){let i=r[0],l=r[1],s=r[2],o=Math.hypot(i,l,s),a,u,c,h,f,d,p,v,k,g,m,y,w,S,_,T,A,I,L,j,D,Q,O,be;return Math.abs(o)<Vm?null:(o=1/o,i*=o,l*=o,s*=o,a=Math.sin(n),u=Math.cos(n),c=1-u,h=t[0],f=t[1],d=t[2],p=t[3],v=t[4],k=t[5],g=t[6],m=t[7],y=t[8],w=t[9],S=t[10],_=t[11],T=i*i*c+u,A=l*i*c+s*a,I=s*i*c-l*a,L=i*l*c-s*a,j=l*l*c+u,D=s*l*c+i*a,Q=i*s*c+l*a,O=l*s*c-i*a,be=s*s*c+u,e[0]=h*T+v*A+y*I,e[1]=f*T+k*A+w*I,e[2]=d*T+g*A+S*I,e[3]=p*T+m*A+_*I,e[4]=h*L+v*j+y*D,e[5]=f*L+k*j+w*D,e[6]=d*L+g*j+S*D,e[7]=p*L+m*j+_*D,e[8]=h*Q+v*O+y*be,e[9]=f*Q+k*O+w*be,e[10]=d*Q+g*O+S*be,e[11]=p*Q+m*O+_*be,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function Xm(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function qh(e,t){let n=t[0],r=t[1],i=t[2],l=t[4],s=t[5],o=t[6],a=t[8],u=t[9],c=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(l,s,o),e[2]=Math.hypot(a,u,c),e}function Zm(e){let t=e[0],n=e[1],r=e[2],i=e[4],l=e[5],s=e[6],o=e[8],a=e[9],u=e[10];const c=t*t+n*n+r*r,h=i*i+l*l+s*s,f=o*o+a*a+u*u;return Math.sqrt(Math.max(c,h,f))}const Hh=function(){const e=[1,1,1];return function(t,n){let r=e;qh(r,n);let i=1/r[0],l=1/r[1],s=1/r[2],o=n[0]*i,a=n[1]*l,u=n[2]*s,c=n[4]*i,h=n[5]*l,f=n[6]*s,d=n[8]*i,p=n[9]*l,v=n[10]*s,k=o+h+v,g=0;return k>0?(g=Math.sqrt(k+1)*2,t[3]=.25*g,t[0]=(f-p)/g,t[1]=(d-u)/g,t[2]=(a-c)/g):o>h&&o>v?(g=Math.sqrt(1+o-h-v)*2,t[3]=(f-p)/g,t[0]=.25*g,t[1]=(a+c)/g,t[2]=(d+u)/g):h>v?(g=Math.sqrt(1+h-o-v)*2,t[3]=(d-u)/g,t[0]=(a+c)/g,t[1]=.25*g,t[2]=(f+p)/g):(g=Math.sqrt(1+v-o-h)*2,t[3]=(a-c)/g,t[0]=(d+u)/g,t[1]=(f+p)/g,t[2]=.25*g),t}}();function Jm(e,t,n,r){let i=Rr([e[0],e[1],e[2]]);const l=Rr([e[4],e[5],e[6]]),s=Rr([e[8],e[9],e[10]]);Wh(e)<0&&(i=-i),n[0]=e[12],n[1]=e[13],n[2]=e[14];const a=e.slice(),u=1/i,c=1/l,h=1/s;a[0]*=u,a[1]*=u,a[2]*=u,a[4]*=c,a[5]*=c,a[6]*=c,a[8]*=h,a[9]*=h,a[10]*=h,Hh(t,a),r[0]=i,r[1]=l,r[2]=s}function e0(e,t,n,r){const i=e,l=t[0],s=t[1],o=t[2],a=t[3],u=l+l,c=s+s,h=o+o,f=l*u,d=l*c,p=l*h,v=s*c,k=s*h,g=o*h,m=a*u,y=a*c,w=a*h,S=r[0],_=r[1],T=r[2];return i[0]=(1-(v+g))*S,i[1]=(d+w)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(d-w)*_,i[5]=(1-(f+g))*_,i[6]=(k+m)*_,i[7]=0,i[8]=(p+y)*T,i[9]=(k-m)*T,i[10]=(1-(f+v))*T,i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function t0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n+n,o=r+r,a=i+i,u=n*s,c=r*s,h=r*o,f=i*s,d=i*o,p=i*a,v=l*s,k=l*o,g=l*a;return e[0]=1-h-p,e[1]=c+g,e[2]=f-k,e[3]=0,e[4]=c-g,e[5]=1-u-p,e[6]=d+v,e[7]=0,e[8]=f+k,e[9]=d-v,e[10]=1-u-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function n0(e,t,n,r,i){let l=1/Math.tan(t/2),s=1/(r-i);return e[0]=l/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*s,e[15]=0,e}function r0(e,t,n,r,i,l,s){let o=1/(t-n),a=1/(r-i),u=1/(l-s);return e[0]=-2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+n)*o,e[13]=(i+r)*a,e[14]=(s+l)*u,e[15]=1,e}function i0(e,t,n,r){let i=t[0],l=t[1],s=t[2],o=r[0],a=r[1],u=r[2],c=i-n[0],h=l-n[1],f=s-n[2],d=c*c+h*h+f*f;d===0?f=1:(d=1/Math.sqrt(d),c*=d,h*=d,f*=d);let p=a*f-u*h,v=u*c-o*f,k=o*h-a*c;return d=p*p+v*v+k*k,d===0&&(u?o+=1e-6:a?u+=1e-6:a+=1e-6,p=a*f-u*h,v=u*c-o*f,k=o*h-a*c,d=p*p+v*v+k*k),d=1/Math.sqrt(d),p*=d,v*=d,k*=d,e[0]=p,e[1]=v,e[2]=k,e[3]=0,e[4]=h*k-f*v,e[5]=f*p-c*k,e[6]=c*v-h*p,e[7]=0,e[8]=c,e[9]=h,e[10]=f,e[11]=0,e[12]=i,e[13]=l,e[14]=s,e[15]=1,e}function tc(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function nc(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function l0(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}class Ut extends Array{constructor(t=1,n=0,r=0,i=0,l=0,s=1,o=0,a=0,u=0,c=0,h=1,f=0,d=0,p=0,v=0,k=1){return super(t,n,r,i,l,s,o,a,u,c,h,f,d,p,v,k),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,n,r,i,l,s,o,a,u,c,h,f,d,p,v,k){return t.length?this.copy(t):(qm(this,t,n,r,i,l,s,o,a,u,c,h,f,d,p,v,k),this)}translate(t,n=this){return Ym(this,n,t),this}rotate(t,n,r=this){return Gm(this,r,t,n),this}scale(t,n=this){return Km(this,n,typeof t=="number"?[t,t,t]:t),this}add(t,n){return n?tc(this,t,n):tc(this,this,t),this}sub(t,n){return n?nc(this,t,n):nc(this,this,t),this}multiply(t,n){return t.length?n?ec(this,t,n):ec(this,this,t):l0(this,this,t),this}identity(){return Hm(this),this}copy(t){return Wm(this,t),this}fromPerspective({fov:t,aspect:n,near:r,far:i}={}){return n0(this,t,n,r,i),this}fromOrthogonal({left:t,right:n,bottom:r,top:i,near:l,far:s}){return r0(this,t,n,r,i,l,s),this}fromQuaternion(t){return t0(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Qm(this,t),this}compose(t,n,r){return e0(this,t,n,r),this}decompose(t,n,r){return Jm(this,t,n,r),this}getRotation(t){return Hh(t,this),this}getTranslation(t){return Xm(t,this),this}getScaling(t){return qh(t,this),this}getMaxScaleOnAxis(){return Zm(this)}lookAt(t,n,r){return i0(this,t,n,r),this}determinant(){return Wh(this)}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this[3]=t[n+3],this[4]=t[n+4],this[5]=t[n+5],this[6]=t[n+6],this[7]=t[n+7],this[8]=t[n+8],this[9]=t[n+9],this[10]=t[n+10],this[11]=t[n+11],this[12]=t[n+12],this[13]=t[n+13],this[14]=t[n+14],this[15]=t[n+15],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t[n+4]=this[4],t[n+5]=this[5],t[n+6]=this[6],t[n+7]=this[7],t[n+8]=this[8],t[n+9]=this[9],t[n+10]=this[10],t[n+11]=this[11],t[n+12]=this[12],t[n+13]=this[13],t[n+14]=this[14],t[n+15]=this[15],t}}function s0(e,t,n="YXZ"){return n==="XYZ"?(e[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(e[0]=Math.atan2(-t[9],t[10]),e[2]=Math.atan2(-t[4],t[0])):(e[0]=Math.atan2(t[6],t[5]),e[2]=0)):n==="YXZ"?(e[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(e[1]=Math.atan2(t[8],t[10]),e[2]=Math.atan2(t[1],t[5])):(e[1]=Math.atan2(-t[2],t[0]),e[2]=0)):n==="ZXY"?(e[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(e[1]=Math.atan2(-t[2],t[10]),e[2]=Math.atan2(-t[4],t[5])):(e[1]=0,e[2]=Math.atan2(t[1],t[0]))):n==="ZYX"?(e[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(e[0]=Math.atan2(t[6],t[10]),e[2]=Math.atan2(t[1],t[0])):(e[0]=0,e[2]=Math.atan2(-t[4],t[5]))):n==="YZX"?(e[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(e[0]=Math.atan2(-t[9],t[5]),e[1]=Math.atan2(-t[2],t[0])):(e[0]=0,e[1]=Math.atan2(t[8],t[10]))):n==="XZY"&&(e[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(e[0]=Math.atan2(t[6],t[5]),e[1]=Math.atan2(t[8],t[0])):(e[0]=Math.atan2(-t[9],t[10]),e[1]=0)),e}const rc=new Ut;class o0 extends Array{constructor(t=0,n=t,r=t,i="YXZ"){super(t,n,r),this.order=i,this.onChange=()=>{},this._target=this;const l=["0","1","2"];return new Proxy(this,{set(s,o){const a=Reflect.set(...arguments);return a&&l.includes(o)&&s.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,n=t,r=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=n,this._target[2]=r,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,n=this.order){return s0(this._target,t,n),this.onChange(),this}fromQuaternion(t,n=this.order,r){return rc.fromQuaternion(t),this._target.fromRotationMatrix(rc,n),r||this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}}class Qh{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ut,this.worldMatrix=new Ut,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new le,this.quaternion=new Um,this.scale=new le(1),this.rotation=new o0,this.up=new le(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,n=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,n&&t&&t.addChild(this,!1)}addChild(t,n=!0){~this.children.indexOf(t)||this.children.push(t),n&&t.setParent(this,!1)}removeChild(t,n=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),n&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let n=0,r=this.children.length;n<r;n++)this.children[n].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let n=0,r=this.children.length;n<r;n++)this.children[n].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,n=!1){n?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const a0=new Ut,u0=new le,c0=new le;class f0 extends Qh{constructor(t,{near:n=.1,far:r=100,fov:i=45,aspect:l=1,left:s,right:o,bottom:a,top:u,zoom:c=1}={}){super(),Object.assign(this,{near:n,far:r,fov:i,aspect:l,left:s,right:o,bottom:a,top:u,zoom:c}),this.projectionMatrix=new Ut,this.viewMatrix=new Ut,this.projectionViewMatrix=new Ut,this.worldPosition=new le,this.type=s||o?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:n=this.far,fov:r=this.fov,aspect:i=this.aspect}={}){return Object.assign(this,{near:t,far:n,fov:r,aspect:i}),this.projectionMatrix.fromPerspective({fov:r*(Math.PI/180),aspect:i,near:t,far:n}),this.type="perspective",this}orthographic({near:t=this.near,far:n=this.far,left:r=this.left||-1,right:i=this.right||1,bottom:l=this.bottom||-1,top:s=this.top||1,zoom:o=this.zoom}={}){return Object.assign(this,{near:t,far:n,left:r,right:i,bottom:l,top:s,zoom:o}),r/=o,i/=o,l/=o,s/=o,this.projectionMatrix.fromOrthogonal({left:r,right:i,bottom:l,top:s,near:t,far:n}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(a0.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new le,new le,new le,new le,new le,new le]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let n=0;n<6;n++){const r=1/this.frustum[n].distance();this.frustum[n].multiply(r),this.frustum[n].constant*=r}}frustumIntersectsMesh(t,n=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const r=u0;r.copy(t.geometry.bounds.center),r.applyMatrix4(n);const i=t.geometry.bounds.radius*n.getMaxScaleOnAxis();return this.frustumIntersectsSphere(r,i)}frustumIntersectsSphere(t,n){const r=c0;for(let i=0;i<6;i++){const l=this.frustum[i];if(r.copy(l).dot(t)+l.constant<-n)return!1}return!0}}function h0(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function d0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n+n,o=r+r,a=i+i,u=n*s,c=r*s,h=r*o,f=i*s,d=i*o,p=i*a,v=l*s,k=l*o,g=l*a;return e[0]=1-h-p,e[3]=c-g,e[6]=f+k,e[1]=c+g,e[4]=1-u-p,e[7]=d-v,e[2]=f-k,e[5]=d+v,e[8]=1-u-h,e}function p0(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function g0(e,t,n,r,i,l,s,o,a,u){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=l,e[5]=s,e[6]=o,e[7]=a,e[8]=u,e}function m0(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function y0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=t[4],o=t[5],a=t[6],u=t[7],c=t[8],h=c*s-o*u,f=-c*l+o*a,d=u*l-s*a,p=n*h+r*f+i*d;return p?(p=1/p,e[0]=h*p,e[1]=(-c*r+i*u)*p,e[2]=(o*r-i*s)*p,e[3]=f*p,e[4]=(c*n-i*a)*p,e[5]=(-o*n+i*l)*p,e[6]=d*p,e[7]=(-u*n+r*a)*p,e[8]=(s*n-r*l)*p,e):null}function ic(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],h=t[8],f=n[0],d=n[1],p=n[2],v=n[3],k=n[4],g=n[5],m=n[6],y=n[7],w=n[8];return e[0]=f*r+d*s+p*u,e[1]=f*i+d*o+p*c,e[2]=f*l+d*a+p*h,e[3]=v*r+k*s+g*u,e[4]=v*i+k*o+g*c,e[5]=v*l+k*a+g*h,e[6]=m*r+y*s+w*u,e[7]=m*i+y*o+w*c,e[8]=m*l+y*a+w*h,e}function v0(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],h=t[8],f=n[0],d=n[1];return e[0]=r,e[1]=i,e[2]=l,e[3]=s,e[4]=o,e[5]=a,e[6]=f*r+d*s+u,e[7]=f*i+d*o+c,e[8]=f*l+d*a+h,e}function x0(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],h=t[8],f=Math.sin(n),d=Math.cos(n);return e[0]=d*r+f*s,e[1]=d*i+f*o,e[2]=d*l+f*a,e[3]=d*s-f*r,e[4]=d*o-f*i,e[5]=d*a-f*l,e[6]=u,e[7]=c,e[8]=h,e}function w0(e,t,n){let r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function k0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=t[4],o=t[5],a=t[6],u=t[7],c=t[8],h=t[9],f=t[10],d=t[11],p=t[12],v=t[13],k=t[14],g=t[15],m=n*o-r*s,y=n*a-i*s,w=n*u-l*s,S=r*a-i*o,_=r*u-l*o,T=i*u-l*a,A=c*v-h*p,I=c*k-f*p,L=c*g-d*p,j=h*k-f*v,D=h*g-d*v,Q=f*g-d*k,O=m*Q-y*D+w*j+S*L-_*I+T*A;return O?(O=1/O,e[0]=(o*Q-a*D+u*j)*O,e[1]=(a*L-s*Q-u*I)*O,e[2]=(s*D-o*L+u*A)*O,e[3]=(i*D-r*Q-l*j)*O,e[4]=(n*Q-i*L+l*I)*O,e[5]=(r*L-n*D-l*A)*O,e[6]=(v*T-k*_+g*S)*O,e[7]=(k*w-p*T-g*y)*O,e[8]=(p*_-v*w+g*m)*O,e):null}class S0 extends Array{constructor(t=1,n=0,r=0,i=0,l=1,s=0,o=0,a=0,u=1){return super(t,n,r,i,l,s,o,a,u),this}set(t,n,r,i,l,s,o,a,u){return t.length?this.copy(t):(g0(this,t,n,r,i,l,s,o,a,u),this)}translate(t,n=this){return v0(this,n,t),this}rotate(t,n=this){return x0(this,n,t),this}scale(t,n=this){return w0(this,n,t),this}multiply(t,n){return n?ic(this,t,n):ic(this,this,t),this}identity(){return m0(this),this}copy(t){return p0(this,t),this}fromMatrix4(t){return h0(this,t),this}fromQuaternion(t){return d0(this,t),this}fromBasis(t,n,r){return this.set(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2]),this}inverse(t=this){return y0(this,t),this}getNormalMatrix(t){return k0(this,t),this}}let _0=0;class E0 extends Qh{constructor(t,{geometry:n,program:r,mode:i=t.TRIANGLES,frustumCulled:l=!0,renderOrder:s=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=_0++,this.geometry=n,this.program=r,this.mode=i,this.frustumCulled=l,this.renderOrder=s,this.modelViewMatrix=new Ut,this.normalMatrix=new S0,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}))}}const T0=["#ffffff","#ffffff","#ffffff"],C0=e=>{e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(l=>l+l).join(""));const t=parseInt(e.slice(0,6),16),n=(t>>16&255)/255,r=(t>>8&255)/255,i=(t&255)/255;return[n,r,i]},A0=`
  attribute vec3 position;
  attribute vec3 logo;
  attribute vec3 sides;
  attribute vec4 random;
  attribute vec3 color;
  attribute float particleSize;
  attribute float logoOnly;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  uniform float uLogoMix;
  uniform float uSideMix;
  uniform float uFade;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 cloudPos = position * uSpread;
    cloudPos.z *= 10.0;
    vec3 pos = mix(cloudPos, sides, uSideMix);
    pos = mix(pos, logo, uLogoMix);

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    // Opening motion from Preview commit 3cf4e45, before the static-fade change.
    float t = uTime;
    float motionWeight = mix(1.0, 0.35, uSideMix) * (1.0 - uLogoMix);
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x) * motionWeight;
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w) * motionWeight;
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z) * motionWeight;
    vec4 mvPos = viewMatrix * mPos;
    float originalScale = uSizeRandomness == 0.0 ? 1.0 : 1.0 + uSizeRandomness * (random.x - 0.5);
    float sizeScale = mix(originalScale, particleSize, max(uLogoMix, uSideMix));
    float presence = mix(1.0 - logoOnly, 1.0, uLogoMix);
    float fadeScale = 1.0 - smoothstep(0.10, 1.0, uFade) * (0.16 + random.x * 0.24);
    gl_PointSize = (uBaseSize * sizeScale * presence * fadeScale) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`,N0=`
  precision highp float;

  uniform float uAlphaParticles;
  uniform float uFade;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    float circle = (1.0 - smoothstep(0.39, 0.50, d)) * 0.94;
    float fadeStart = max(0.0, vRandom.w * 0.50 - 0.06);
    float particleFade = 1.0 - smoothstep(fadeStart, min(1.0, fadeStart + 0.50), uFade);
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) { discard; }
      gl_FragColor = vec4(vColor, particleFade);
    } else {
      gl_FragColor = vec4(vColor, circle * particleFade);
    }
  }
`,L0=
({particleCount:e=200,particleSpread:t=10,speed:n=.1,particleColors:r,moveParticlesOnHover:i=!1,particleHoverFactor:l=1,alphaParticles:s=!1,particleBaseSize:o=100,sizeRandomness:a=1,cameraDistance:u=20,disableRotation:c=!1,pixelRatio:h=1,className:f,story:d=!1,logoUrl:p="/assets/atria-logo.png?v=20260909"})=>{const v=q.useRef(null),k=q.useRef({x:0,y:0});return q.useEffect(()=>{const g=v.current;if(!g)return;let m=!1,y=0,w=0,S=0,_=0,T=0,A=null,I=null,L=null,j=null,D=null,Q=null,O=null,be=null,layoutRaf=0;const Pe=R=>R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2,wn=(R,M,K)=>Math.min(Math.max((R-M)/(K-M),0),1),Re=()=>new Promise(R=>{if(!d)return R([]);const M=new Image;M.onload=()=>{const K=document.createElement("canvas"),ne=180,kn=Math.max(1,Math.round(ne*M.height/M.width));K.width=ne,K.height=kn;const J=K.getContext("2d",{willReadFrequently:!0});J.drawImage(M,0,0,ne,kn);const ce=J.getImageData(0,0,ne,kn).data,oe=[];for(let B=0;B<kn;B+=2)for(let F=0;F<ne;F+=2)ce[(B*ne+F)*4+3]>48&&oe.push([F/ne,B/kn]);R(oe)},M.onerror=()=>R([]),M.src=p});(async()=>{const R=await Re();await new Promise(resolve=>{"requestIdleCallback"in window?window.requestIdleCallback(()=>resolve(),{timeout:180}):setTimeout(resolve,64)});if(m)return;const M=new _m({dpr:h,depth:!1,alpha:!0}),K=M.gl;A=M,I=K,g.appendChild(K.canvas),K.clearColor(0,0,0,0);const ne=new f0(K,{fov:15});L=ne,ne.position.set(0,0,u);const kn=()=>{const B=g.clientWidth,F=g.clientHeight;M.setSize(B,F),ne.perspective({aspect:K.canvas.width/K.canvas.height}),Q()};window.addEventListener("resize",kn,!1);const J=B=>{const F=g.getBoundingClientRect(),G=(B.clientX-F.left)/F.width*2-1,Y=-((B.clientY-F.top)/F.height*2-1);k.current={x:G,y:Y}};(d?window:g).addEventListener("mousemove",J,{passive:!0});let seed=1831565813;const rand=()=>{seed+=1831565813;let R=seed;return R=Math.imul(R^R>>>15,R|1),R^=R+Math.imul(R^R>>>7,R|61),((R^R>>>14)>>>0)/4294967296};const ce=e,oe=new Float32Array(ce*3),H=new Float32Array(ce*3),z=new Float32Array(ce*3),V=new Float32Array(ce*4),W=new Float32Array(ce*3),P=new Float32Array(ce),X=new Float32Array(ce),ee=r&&r.length>0?r:T0;for(let B=0;B<ce;B++){let F,G,Y,fe;do F=rand()*2-1,G=rand()*2-1,Y=rand()*2-1,fe=F*F+G*G+Y*Y;while(fe>1||fe===0);const le=Math.cbrt(rand());oe.set([F*le,G*le,Y*le],B*3),V.set([rand(),rand(),rand(),rand()],B*4);const sizeRoll=rand();P[B]=sizeRoll<.03?2.05+rand()*.4:sizeRoll<.14?1.18+rand()*.42:.5+rand()*.4;X[B]=B<800?0:1;const ue=C0(ee[Math.floor(rand()*ee.length)]);W.set(ue,B*3);const Se=R.length?R[Math.floor(B*R.length/ce)%R.length]:[.5+.34*Math.cos(B/ce*6.283),.5+.34*Math.sin(B/ce*6.283)];H.set([(Se[0]-.5)*(window.innerWidth<721?1.16:1.72),(.5-Se[1])*(window.innerWidth<721?1.10:1.62)+(window.innerWidth<721?1.36:.88),(rand()-.5)*(window.innerWidth<721?.05:.08)],B*3);const ge=B%2===0?-1:1;z.set([ge*(2.55+rand()*1.55),(rand()*2-1)*2.2,(rand()*2-1)*8],B*3)}const se=new mm(K,{position:{size:3,data:oe},logo:{size:3,data:H},sides:{size:3,data:z},random:{size:4,data:V},color:{size:3,data:W},particleSize:{size:1,data:P},logoOnly:{size:1,data:X}}),re=new vm(K,{vertex:A0,fragment:N0,uniforms:{uTime:{value:0},uSpread:{value:t},uBaseSize:{value:o*h},uSizeRandomness:{value:a},uAlphaParticles:{value:s?1:0},uFade:{value:0},uLogoMix:{value:d?1:0},uSideMix:{value:0}},transparent:!0,depthTest:!1}),te=new E0(K,{mode:K.POINTS,geometry:se,program:re});j=re,D=te;let fadeEnd=window.innerHeight*.32;const measureFade=()=>{const F=window.innerHeight,G=document.querySelector(".hero"),le=G?Math.max(F*.72,G.offsetTop+G.offsetHeight-F):F*.8;fadeEnd=Math.max(F*.72,le*.92)};const ae=()=>{const B=window.scrollY,progress=wn(B,0,fadeEnd),reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,scatter=reduced?0:Pe(wn(progress,0,.75)),fade=Pe(wn(progress,.45,1));re.uniforms.uLogoMix.value=d?1-scatter:0,re.uniforms.uSideMix.value=0,re.uniforms.uFade.value=d?fade:0;const Be=.92*(1-fade);g.style.opacity=Be.toFixed(3),g.style.visibility=progress>.995?"hidden":"visible",g.dataset.stage=progress>.995?"hidden":scatter>.96?"cloud":"logo"};Q=()=>{measureFade(),ae()};const ke
=()=>{y||(y=requestAnimationFrame(()=>{y=0,ae(),be&&be()}))};window.addEventListener("scroll",ke,{passive:!0}),kn(),ae();let xe=performance.now(),Ie=0,Ve=!document.hidden,Ke=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);const $e=B=>{if(m||!Ve){w=0;return}const F=B-xe;xe=B,Ie+=F*n,re.uniforms.uTime.value=Ie*.001;const G=re.uniforms.uLogoMix.value,Y=re.uniforms.uSideMix.value,fe=1-Math.max(G,Y);i?(te.position.x=-k.current.x*l*fe,te.position.y=-k.current.y*l*fe):(te.position.x=0,te.position.y=0),c||(te.rotation.x=Math.sin(Ie*2e-4)*.1*fe,te.rotation.y=Math.cos(Ie*5e-4)*.15*fe,te.rotation.z=0),M.render({scene:te,camera:ne});if(!Ke&&g.dataset.stage!=="hidden")w=requestAnimationFrame($e);else w=0};const startStory=()=>{if(m||!Ve||w)return;xe=performance.now(),w=requestAnimationFrame($e)};be=startStory;const qe=()=>{Ve=!document.hidden,Ve?startStory():(w&&cancelAnimationFrame(w),w=0)};document.addEventListener("visibilitychange",qe),startStory(),O={resize:kn,mousemove:J,scroll:ke,moveTarget:d?window:g,visibility:qe}})();return()=>{m=!0,y&&cancelAnimationFrame(y),w&&cancelAnimationFrame(w),window.removeEventListener("scroll",O&&O.scroll),window.removeEventListener("resize",O&&O.resize),document.removeEventListener("visibilitychange",O&&O.visibility),O&&O.moveTarget&&O.moveTarget.removeEventListener("mousemove",O.mousemove),I&&g.contains(I.canvas)&&g.removeChild(I.canvas)}},[e,t,n,r,i,l,s,o,a,u,c,h,d,p]),x.jsx("div",{ref:v,className:"particles-container "+(f||"")})};function I0({text:e="",className:t="",by:n="word",delay:r=40,as:i="span"}){const l=q.useRef(null);q.useEffect(()=>{const o=l.current;if(!o)return;const a=new IntersectionObserver(([u])=>{u.isIntersecting&&(o.classList.add("rb-split-in"),a.unobserve(o))},{threshold:.2});return a.observe(o),()=>a.disconnect()},[]);const s=n==="char"?Array.from(e):e.split(" ");return x.jsx(i,{ref:l,className:`rb-split ${t}`,"aria-label":e,children:s.map((o,a)=>x.jsxs("span",{className:`rb-split-unit ${o==="-"?"atria-hyphen":""}`,style:{transitionDelay:`${a*r}ms`},children:[o,n==="word"&&a<s.length-1?" ":""]},a))})}const sageLogoSvg = "<svg viewBox=\"-1 -1 150 49\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><g class=\"sage-logo-outline\"><path pathLength=\"1\" d=\"M102.90,38.90 L103.20,38.20 L104.20,37.60 L117.80,37.60 L117.80,29.80 L104.70,29.80 L104.70,29.70 L104.10,29.60 L104.00,29.40 L103.80,29.40 L103.20,28.60 L103.10,27.20 L103.20,27.20 L103.30,26.70 L104.00,26.00 L104.40,25.80 L104.90,25.80 L104.90,25.70 L117.80,25.70 L117.80,18.20 L111.90,18.20 L110.40,21.30 L110.20,21.40 L110.00,21.80 L109.80,21.80 L109.70,22.00 L109.30,22.20 L108.50,22.30 L108.50,22.20 L107.70,22.20 L107.70,22.10 L105.30,21.80 L105.30,21.70 L105.00,21.70 L104.40,21.40 L104.00,21.00 L104.00,20.70 L103.90,20.70 L104.00,19.80 L104.80,18.20 L105.00,17.40 L105.30,17.00 L105.50,16.20 L105.80,15.80 L106.00,15.00 L106.50,14.10 L106.50,13.80 L106.80,13.40 L106.80,13.10 L107.10,12.50 L107.60,12.00 L108.30,11.80 L108.30,11.70 L109.30,11.70 L109.30,11.80 L110.00,11.80 L110.00,11.90 L110.70,11.90 L110.70,12.00 L111.40,12.00 L111.40,12.10 L113.00,12.30 L113.80,12.80 L113.80,13.40 L113.50,13.80 L113.50,14.10 L117.80,14.10 L117.90,12.40 L118.70,11.60 L119.00,11.60 L119.00,11.50 L123.70,11.50 L123.70,11.60 L124.10,11.60 L124.20,11.80 L124.40,11.80 L124.80,12.30 L124.90,14.10 L136.40,14.10 L136.40,14.20 L136.80,14.20 L137.20,14.40 L137.60,14.80 L137.70,15.50 L137.80,15.50 L137.70,17.20 L137.10,17.90 L136.60,18.00 L136.60,18.10 L135.80,18.10 L135.80,18.20 L124.90,18.20 L124.90,25.70 L136.80,25.70 L136.80,25.80 L137.30,25.80 L137.70,26.00 L137.80,26.20 L138.00,26.20 L138.60,27.20 L138.60,28.20 L138.50,28.20 L138.40,28.80 L137.60,29.60 L136.90,29.70 L136.90,29.80 L124.90,29.80 L124.90,37.60 L138.30,37.60 L138.30,37.70 L139.00,37.90 L139.50,38.40 L139.70,38.80 L139.70,39.20 L139.80,39.20 L139.70,40.40 L139.00,41.30 L138.40,41.60 L137.00,41.60 L137.00,41.70 L105.50,41.70 L105.50,41.60 L104.20,41.60 L104.20,41.50 L103.50,41.30 L103.10,40.90 L102.80,40.30 L102.80,39.80 L102.70,39.80 L102.80,38.90Z\"/><path pathLength=\"1\" d=\"M88.60,11.00 L90.00,10.30 L90.70,10.30 L90.70,10.20 L91.50,10.30 L91.50,10.40 L92.10,10.50 L92.20,10.70 L92.60,10.80 L93.50,11.90 L93.70,12.90 L93.80,12.90 L93.80,13.50 L93.90,13.50 L94.20,15.50 L94.30,15.50 L94.80,18.50 L94.90,18.50 L94.90,19.60 L94.80,19.60 L94.70,20.20 L94.40,20.80 L93.20,21.80 L92.60,21.90 L92.60,22.00 L91.80,22.00 L91.80,22.10 L90.70,21.90 L89.90,21.50 L89.30,20.90 L89.20,20.50 L89.00,20.40 L88.80,19.30 L88.70,19.30 L88.70,18.80 L88.60,18.80 L88.60,18.30 L88.50,18.30 L88.50,17.80 L88.40,17.80 L88.40,17.30 L88.30,17.30 L88.30,16.80 L88.20,16.80 L88.20,16.30 L88.10,16.30 L88.10,15.80 L88.00,15.80 L88.00,15.30 L87.90,15.30 L87.90,14.80 L87.80,14.80 L87.80,14.30 L87.70,14.30 L87.70,13.70 L87.60,13.70 L87.60,12.80 L87.70,12.80 L87.80,12.10 L88.10,11.50Z\"/><path pathLength=\"1\" d=\"M30.70,0.20 L31.80,0.40 L33.60,1.30 L34.70,2.30 L34.70,2.50 L35.00,2.70 L35.40,3.50 L35.50,4.20 L35.60,4.20 L35.60,5.60 L35.50,5.60 L35.60,7.40 L35.50,7.40 L35.40,8.10 L35.00,8.90 L35.40,8.90 L35.40,9.00 L36.90,9.40 L37.20,9.60 L37.50,9.60 L39.90,10.80 L40.00,11.00 L40.80,11.40 L40.90,11.60 L41.40,11.80 L41.60,12.10 L41.80,12.10 L42.00,12.40 L42.20,12.40 L42.50,12.80 L42.70,12.80 L43.10,13.20 L43.10,13.40 L43.40,13.60 L43.40,13.80 L43.60,13.90 L43.80,14.60 L44.00,14.80 L44.30,16.20 L44.40,16.20 L44.50,17.50 L44.60,17.50 L44.60,18.60 L44.70,18.60 L44.60,20.40 L44.50,20.40 L44.20,21.70 L45.10,21.80 L45.90,22.20 L46.60,22.90 L46.90,23.50 L46.90,23.90 L47.00,23.90 L46.90,25.90 L46.10,27.30 L46.10,28.20 L46.30,28.50 L46.30,29.00 L46.40,29.00 L46.30,29.90 L45.90,30.70 L45.50,31.10 L44.90,31.40 L43.10,31.50 L42.40,31.10 L42.30,32.40 L42.20,32.40 L42.00,33.40 L41.50,34.40 L41.30,34.50 L41.20,34.90 L40.80,35.20 L40.80,35.40 L39.90,36.30 L39.70,36.30 L39.30,36.80 L39.10,36.80 L38.90,37.10 L38.70,37.10 L38.30,37.50 L37.90,37.60 L37.80,37.80 L36.40,38.50 L38.30,38.40 L38.30,38.30 L41.50,38.40 L41.50,38.50 L42.40,38.50 L42.40,38.60 L43.10,38.60 L43.10,38.70 L44.70,38.90 L44.70,39.00 L45.10,39.00 L45.10,39.10 L46.40,39.40 L46.40,45.50 L46.20,45.60 L46.20,45.50 L45.20,45.30 L44.90,45.10 L44.50,45.10 L44.50,45.00 L42.10,44.70 L42.10,44.60 L37.20,44.50 L37.20,44.60 L34.90,44.80 L34.90,44.90 L34.40,44.90 L34.40,45.00 L33.90,45.00 L33.90,45.10 L32.80,45.30 L32.80,45.40 L32.40,45.40 L31.80,45.70 L31.50,45.70 L31.30,45.90 L30.70,46.00 L30.30,46.30 L30.00,46.30 L28.80,47.00 L27.20,46.20 L26.90,46.20 L26.70,46.00 L26.40,46.00 L26.20,45.80 L24.70,45.40 L24.70,45.30 L24.30,45.30 L24.30,45.20 L23.90,45.20 L23.50,45.00 L23.10,45.00 L23.10,44.90 L22.60,44.90 L22.60,44.80 L20.30,44.60 L20.30,44.50 L15.30,44.60 L15.30,44.70 L14.60,44.70 L14.60,44.80 L13.00,45.00 L13.00,45.10 L12.60,45.10 L12.60,45.20 L12.20,45.20 L12.20,45.30 L11.00,45.60 L11.00,39.50 L11.10,39.40 L11.90,39.20 L11.90,39.10 L12.70,39.00 L12.70,38.90 L14.30,38.70 L14.30,38.60 L15.00,38.60 L15.00,38.50 L15.80,38.50 L15.80,38.40 L19.20,38.30 L19.20,38.40 L20.70,38.40 L20.70,38.50 L21.60,38.50 L21.60,38.60 L21.90,38.60 L21.90,38.50 L19.70,37.40 L19.50,37.10 L18.90,36.80 L18.60,36.40 L18.40,36.40 L17.00,35.00 L17.00,34.80 L16.60,34.50 L16.60,34.30 L16.20,33.90 L15.70,32.90 L15.40,31.80 L14.70,32.20 L13.30,32.20 L13.30,32.10 L12.60,32.00 L11.70,31.20 L11.50,30.80 L11.50,30.40 L11.40,30.40 L11.40,29.60 L11.60,29.20 L11.60,28.80 L11.70,28.80 L11.70,28.20 L10.90,27.00 L10.70,25.90 L10.60,25.90 L10.60,25.10 L10.70,25.10 L10.90,24.00 L11.40,23.50 L11.40,23.30 L12.40,22.70 L12.90,22.60 L12.70,21.90 L12.60,21.90 L12.40,20.60 L12.30,20.60 L12.30,19.40 L12.00,19.70 L12.00,19.90 L11.70,20.10 L11.70,20.30 L11.20,20.70 L11.20,20.90 L9.80,22.30 L9.60,22.30 L9.30,22.70 L9.10,22.70 L8.70,23.10 L8.50,23.10 L8.40,23.30 L7.60,23.70 L7.00,23.80 L6.40,24.10 L4.40,24.30 L4.40,24.40 L2.20,24.40 L2.20,24.30 L0.20,24.20 L0.00,24.00 L0.50,23.80 L1.00,23.30 L1.50,22.30 L1.50,21.90 L1.60,21.90 L1.70,20.40 L1.80,20.40 L1.70,17.50 L1.60,17.40 L1.80,17.40 L2.70,18.30 L2.90,18.30 L3.00,18.50 L3.60,18.80 L4.70,18.90 L4.70,19.00 L6.30,18.80 L6.30,18.70 L6.60,18.70 L7.60,18.20 L8.10,17.70 L8.30,17.70 L10.40,15.50 L10.40,15.40 L8.80,15.20 L8.80,15.10 L8.40,15.10 L8.40,15.00 L7.20,14.70 L7.00,14.50 L6.70,14.50 L4.90,13.60 L4.30,13.10 L3.90,13.00 L3.90,12.80 L5.50,12.00 L6.30,11.20 L6.70,10.40 L6.80,9.70 L6.90,9.70 L6.90,8.00 L6.80,8.00 L6.70,6.50 L8.80,8.70 L9.60,9.10 L9.70,9.30 L11.10,10.00 L12.00,10.20 L12.00,10.30 L12.40,10.30 L12.80,10.50 L13.50,10.50 L13.50,10.60 L15.80,10.60 L15.80,10.50 L16.70,10.50 L16.70,10.40 L18.80,10.10 L19.00,9.90 L19.30,9.90 L20.70,9.20 L22.80,8.70 L22.30,7.90 L22.20,7.20 L22.10,7.20 L22.00,6.10 L22.20,5.90 L22.20,4.20 L22.30,4.20 L22.40,3.50 L22.80,2.70 L23.80,1.60 L24.00,1.60 L24.20,1.30 L24.40,1.30 L24.50,1.10 L24.90,1.00 L25.00,0.80 L25.40,0.60 L26.00,0.50 L26.60,0.20 L27.50,0.10 L27.50,0.00 L30.10,0.00 L30.10,0.10Z\"/><path pathLength=\"1\" d=\"M66.40,17.30 L61.70,17.30 L61.70,17.20 L59.80,17.10 L59.00,16.40 L58.80,15.70 L58.70,15.70 L58.70,14.80 L58.80,14.80 L58.90,14.20 L59.50,13.50 L60.20,13.30 L60.20,13.20 L67.90,13.20 L68.50,12.80 L68.60,12.00 L68.80,11.60 L69.10,11.40 L69.50,11.40 L69.50,11.30 L74.50,11.30 L75.20,11.70 L75.40,12.80 L76.00,13.20 L85.10,13.20 L85.10,13.30 L85.50,13.30 L86.10,13.60 L86.50,14.20 L86.50,14.80 L86.60,14.80 L86.60,25.70 L86.70,25.90 L87.20,26.20 L88.50,26.20 L88.50,26.10 L94.00,26.20 L94.00,26.30 L94.50,26.40 L95.10,27.10 L95.10,27.50 L95.20,27.50 L95.20,35.30 L95.10,35.30 L95.10,39.80 L94.90,40.20 L94.20,40.80 L93.10,40.90 L93.10,41.00 L82.00,41.00 L82.00,40.90 L81.30,40.70 L80.70,40.10 L80.50,39.70 L80.50,39.20 L80.40,39.20 L80.60,38.00 L81.30,37.20 L81.80,37.10 L81.80,37.00 L83.20,37.00 L83.20,36.90 L87.70,37.00 L88.30,36.70 L88.40,36.20 L88.50,36.20 L88.50,31.10 L88.40,31.10 L88.40,30.70 L88.00,30.30 L75.80,30.30 L75.30,30.80 L75.30,41.50 L75.10,41.90 L74.90,42.00 L74.90,42.20 L74.10,42.60 L69.90,42.60 L69.90,42.50 L69.50,42.50 L69.20,42.20 L69.00,42.20 L68.60,41.50 L68.60,31.00 L68.50,31.00 L68.40,30.50 L68.10,30.30 L60.10,30.20 L59.50,29.90 L59.00,29.40 L58.80,28.70 L58.70,28.70 L58.70,27.80 L58.80,27.80 L58.90,27.20 L59.50,26.50 L60.20,26.30 L60.20,26.20 L67.90,26.20 L68.50,25.80 L68.50,25.50 L68.60,25.50 L68.60,18.00 L68.50,18.00 L68.40,17.50 L68.10,17.30Z\"/></g><g class=\"sage-logo-fill\">\n<path d=\"M137.846 37.6201H137.051C137.006 37.6201 136.967 37.6124 136.922 37.6124H124.815V29.7462H135.829C135.882 29.7462 135.928 29.7386 135.978 29.7386H136.662C137.712 29.7386 138.561 28.8866 138.561 27.8398V27.6756C138.561 26.6288 137.709 25.7768 136.662 25.7768H131.508C131.508 25.7768 131.477 25.7806 131.462 25.7806H124.815V18.1169H135.749C137.071 18.1169 137.732 17.5667 137.732 16.4703V15.7291C137.732 14.6518 137.071 14.1169 135.749 14.1169H124.815V12.8065C124.815 11.9316 124.165 11.4961 122.87 11.4961H119.833C118.511 11.4961 117.85 12.0462 117.85 13.1427V14.1169H113.395L113.758 13.3108L113.8 13.1083C113.8 12.9517 113.731 12.818 113.598 12.7034C113.437 12.5926 113.273 12.5009 113.112 12.4359C112.868 12.3481 112.665 12.2907 112.505 12.2678C112.287 12.222 112.111 12.1914 111.978 12.1685L109.388 11.7979C109.196 11.7521 109.009 11.7292 108.822 11.7292C107.905 11.7292 107.282 12.1341 106.958 12.9402L104.123 19.7291C104.016 19.9774 103.962 20.199 103.962 20.4015C103.962 20.7606 104.085 21.0395 104.325 21.242C104.57 21.4674 104.944 21.6355 105.46 21.7463L107.97 22.1512C108.184 22.1971 108.387 22.22 108.578 22.22C109.441 22.22 110.064 21.838 110.442 21.0777L111.94 18.1207H117.85V25.7844H110.224C110.224 25.7844 110.194 25.7806 110.178 25.7806H105.025C103.974 25.7806 103.126 26.6326 103.126 27.6794V27.8437C103.126 28.8943 103.978 29.7424 105.025 29.7424H105.834C105.884 29.7424 105.93 29.75 105.983 29.75H117.85V37.6162H105.578C105.533 37.6162 105.494 37.6239 105.449 37.6239H104.677C103.63 37.6239 102.778 38.4759 102.778 39.5227V39.6869C102.778 40.7375 103.63 41.5857 104.677 41.5857H105.086C105.238 41.6048 105.403 41.6162 105.578 41.6162H136.964C137.139 41.6162 137.304 41.6048 137.456 41.5857H137.85C138.897 41.5857 139.749 40.7337 139.749 39.6869V39.5227C139.749 38.472 138.897 37.6239 137.85 37.6239L137.846 37.6201Z\" fill=\"#1B3882\"/>\n<path d=\"M89.9861 10.3854L90.2297 10.3372C91.8048 10.0253 93.3346 11.0493 93.6464 12.6244L94.81 18.5007C95.1219 20.0758 94.0978 21.6056 92.5227 21.9174L92.2791 21.9657C90.704 22.2775 89.1743 21.2535 88.8624 19.6784L87.6988 13.8021C87.3869 12.227 88.411 10.6973 89.9861 10.3854Z\" fill=\"#1B3882\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M88.5038 26.1851H93.1609L93.1571 26.1927C94.479 26.1927 95.1399 26.7429 95.1399 27.8393L95.0979 39.2662C95.0979 39.7819 94.9222 40.1869 94.5707 40.4772C94.2192 40.7676 93.7302 40.9128 93.1113 40.9128L87.5792 40.9319C87.5576 40.9334 87.5365 40.9362 87.5156 40.939C87.4849 40.9431 87.4544 40.9472 87.4226 40.9472H82.3643C81.3175 40.9472 80.4693 40.099 80.4693 39.0522V38.8879C80.4693 37.8412 81.3175 36.993 82.3643 36.993H83.136L83.1462 36.9921C83.2266 36.9848 83.304 36.9777 83.392 36.9777L85.5353 36.993H87.4264C87.4493 36.993 87.4713 36.9969 87.4933 37.0007C87.5152 37.0045 87.5372 37.0083 87.5601 37.0083H87.6174C88.1026 37.0121 88.4962 36.6186 88.4962 36.1334V31.0981C88.4962 30.6129 88.1026 30.2233 87.6213 30.2233H76.1293C75.6441 30.2233 75.2544 30.6168 75.2544 31.1019L75.2926 40.9128C75.2926 41.4018 75.1474 41.7991 74.8533 42.1085C74.8265 42.1391 74.7921 42.1697 74.7577 42.1964C74.4139 42.46 73.944 42.5937 73.3518 42.5937H70.5973C69.2754 42.5937 68.6144 42.0436 68.6144 40.9472V31.0981C68.6144 30.6129 68.2209 30.2233 67.7396 30.2233H61.7682C61.6574 30.2233 61.558 30.2156 61.4587 30.208H60.6564C59.602 30.208 58.75 29.3522 58.75 28.3016V28.1373C58.75 27.0829 59.6058 26.2309 60.6564 26.2309H61.6192C61.6435 26.2309 61.667 26.2291 61.6909 26.2272C61.7157 26.2253 61.7409 26.2233 61.7682 26.2233H67.7396C68.2248 26.2233 68.6144 25.8298 68.6144 25.3484V18.0896C68.6144 17.6044 68.2209 17.2148 67.7396 17.2148H61.7682C61.751 17.2148 61.7347 17.2138 61.7185 17.2128C61.7023 17.2119 61.686 17.2109 61.6688 17.2109H60.6564C59.602 17.2109 58.75 16.3552 58.75 15.3046V15.1403C58.75 14.0858 59.6058 13.2339 60.6564 13.2339H61.4014C61.5198 13.2224 61.6421 13.2148 61.772 13.2148H67.7434C68.2286 13.2148 68.6183 12.8136 68.6183 12.3399C68.6183 11.8662 68.836 11.5644 69.2677 11.4306C69.4549 11.3657 69.7262 11.3313 70.0777 11.3313H73.9669C74.8303 11.3313 75.2621 11.6446 75.2621 12.2711V12.3399C75.2621 12.8213 75.6517 13.2148 76.1331 13.2148L84.5343 13.2453C85.8562 13.2453 86.5171 13.7802 86.5171 14.8576V25.3446C86.5171 25.8298 86.9107 26.2195 87.392 26.2195H88.5038V26.1851ZM79.1093 26.2195C79.5563 26.2195 79.9192 25.8565 79.9192 25.4095V18.017C79.9192 17.57 79.5563 17.2071 79.1093 17.2071H76.0682C75.6212 17.2071 75.2582 17.57 75.2582 18.017V25.4095C75.2582 25.8565 75.6212 26.2195 76.0682 26.2195H79.1093Z\" fill=\"#1B3882\"/>\n<path d=\"M11.8365 39.8686C11.8365 39.8686 16.6245 39.3364 16.8906 39.2476C17.1567 39.1589 22.1221 39.4251 22.1221 39.4251L25.3132 40.2235L28.2382 41.288L29.0366 41.5541L33.3809 39.9573L38.6124 39.1589L42.1584 39.2476L44.9059 39.6025L46.0592 39.9573L45.9705 44.7453L43.5753 44.1243L38.9648 43.7694L35.7737 44.0356L33.0261 44.6565L30.5447 45.4549L28.7704 46.1646L25.0471 44.7453L20.5253 43.8582H15.2938L11.8365 44.4791V39.8686Z\" fill=\"#1B3882\" fill-opacity=\"0.5\"/>\n<path d=\"M28.756 47C20.6957 42.562 12.1351 45.2233 12.0488 45.2504L11.0829 45.5585V39.4473L11.5954 39.2822C11.9675 39.1614 20.8337 36.3892 29.4682 41.1426L28.756 42.4388C21.8267 38.6242 14.5303 40.0559 12.5614 40.5488V43.5797C15.134 42.9686 22.3787 41.7981 29.4682 45.7014L28.756 46.9975V47Z\" fill=\"#1B3882\"/>\n<path d=\"M28.6548 47L27.9426 45.7038C35.0321 41.8005 42.2768 42.971 44.8494 43.5822V40.5512C42.883 40.0559 35.5841 38.6267 28.6548 42.4412L27.9426 41.1451C36.5771 36.3916 45.4433 39.1639 45.8154 39.2846L46.3279 39.4497V45.5634L45.362 45.2504C45.2782 45.2233 36.7176 42.562 28.6548 47Z\" fill=\"#1B3882\"/>\n<path d=\"M37.9349 33.0626C37.9373 32.5278 37.75 32.0695 37.3706 31.6703C36.996 31.2908 36.5426 31.1109 36.0202 31.1257C35.4854 31.1627 35.0296 31.3771 34.6452 31.7516C34.2706 32.205 34.0883 32.6782 34.0907 33.2153C34.0883 33.7304 34.2706 34.1887 34.6378 34.5657C35.0123 34.9649 35.4707 35.1473 36.0128 35.1103C36.5401 35.1128 36.9935 34.8984 37.3656 34.4844C37.7451 34.0704 37.9324 33.5948 37.9373 33.0601L37.9349 33.0626Z\" fill=\"#1B3882\" fill-opacity=\"0.5\"/>\n<path d=\"M23.007 34.4868C23.3865 34.0728 23.5737 33.6194 23.5713 33.0822C23.5737 32.5475 23.3865 32.0497 23.0119 31.6308C22.6102 31.2907 22.1618 31.1306 21.6591 31.1453C21.1071 31.202 20.6512 31.3967 20.284 31.7318C19.9095 32.1458 19.7222 32.6386 19.7173 33.1955C19.7173 33.7303 19.907 34.1886 20.2816 34.5681C20.6438 34.9673 21.0997 35.1472 21.6393 35.1127C22.1963 35.0954 22.6472 34.9008 23.0045 34.4868H23.007Z\" fill=\"#1B3882\" fill-opacity=\"0.5\"/>\n<path d=\"M28.6277 39.8417C27.1467 39.8417 25.6928 39.7185 24.579 39.4326C21.5826 38.6638 19.1972 37.2765 17.2875 35.1893C15.3038 33.0183 15.1781 30.9262 15.0451 28.7109C15.0278 28.4276 15.0106 28.1392 14.9884 27.846C14.811 25.3941 13.6528 21.5623 13.6405 21.5253L13.5493 21.2247L13.7341 20.9709C15.4393 18.6496 17.5413 16.9912 20.1657 15.8971C22.5756 14.8917 25.444 14.3669 28.9357 14.2905C34.7487 13.9504 41.0866 16.3678 44.0092 20.0419L44.194 20.2735L42.8707 26.4463C42.8559 26.779 42.7574 28.5163 42.2793 32.0672C41.7175 36.2267 36.5796 38.6071 33.9405 39.2823C32.6 39.6273 30.5867 39.8417 28.6252 39.8417H28.6277ZM14.9342 21.4637C15.22 22.447 16.0825 25.5494 16.2427 27.7524C16.2649 28.0505 16.2821 28.3462 16.2994 28.6345C16.4275 30.7932 16.531 32.4984 18.214 34.3416C19.9537 36.244 22.137 37.513 24.8895 38.2178C27.2231 38.8166 31.4295 38.6318 33.63 38.065C35.525 37.5795 40.5494 35.522 41.0374 31.8947C41.5524 28.0776 41.6189 26.3552 41.6214 26.3379V26.2837L42.8436 20.5914C40.9215 16.9001 39.7806 16.1436 37.3361 15.2219C34.7586 14.2486 31.6167 15.3821 28.9973 15.5374H28.9751C22.2972 15.6827 17.4009 13.5414 14.9317 21.4613L14.9342 21.4637Z\" fill=\"#1B3882\"/>\n<path d=\"M41.7561 21.0693C42.2317 22.294 42.4338 22.9076 42.8798 24.0288C42.8798 24.0288 44.0602 22.1338 44.4323 20.7785C44.8068 19.4084 44.5776 17.6638 44.2844 16.0325C43.5476 13.2948 42.9759 13.0829 40.7655 11.4614C39.7848 10.7887 38.6759 10.1924 37.4216 9.66749C34.7086 8.64485 31.9832 8.07808 29.2405 7.9598C26.5225 7.91298 23.7799 8.31957 21.0323 9.17465C19.7559 9.6182 18.6174 10.1505 17.6096 10.7665C15.3129 12.2524 13.7137 14.3445 12.8241 17.0305C12.5851 18.0408 12.2056 19.0117 12.2992 19.9481C12.728 24.2432 15.5298 26.1283 15.3376 25.0933C15.0887 23.7577 15.2489 22.9692 15.5914 21.6927C16.2419 19.2778 17.7821 17.4938 20.2142 16.3578H20.2216C20.6947 16.2247 23.0924 14.862 26.2761 16.4908C27.1213 16.8531 28.5998 17.8338 29.3391 17.8116C30.0808 17.7895 31.1478 17.0748 31.924 16.5894C33.3828 15.6752 34.7652 15.3622 36.5912 15.9413C39.2451 16.7767 40.874 18.6643 41.7561 21.0718V21.0693Z\" fill=\"#1B3882\"/>\n<path d=\"M2.60051 18.9278L4.5965 19.5143L6.88573 19.396L8.52934 18.2798L10.2912 16.6953L11.5825 14.9334L13.2261 13.2306L14.8106 12.2326L16.9815 11.762L15.5129 14.3444L14.2808 15.5765L11.6983 19.157L10.5253 20.9189L9.17496 21.8578L7.23811 23.149C7.23811 23.149 5.53536 23.5014 5.3604 23.5605C5.18544 23.6197 3.77593 23.8538 3.77593 23.8538L2.54384 23.7946L1.60498 23.5014L2.4847 21.7395L2.60297 20.4482V18.9229L2.60051 18.9278Z\" fill=\"#1B3882\" fill-opacity=\"0.5\"/>\n<path d=\"M7.70637 8.77539L7.52894 10.1233L7.06076 11.0646L6.47428 11.9443L5.00562 12.8241L6.76752 13.7038L8.70436 14.4677L10.7004 14.8792L11.5801 14.9383L13.6943 13.4697L15.9244 11.4737L15.1605 11.2396L12.4031 10.9463L10.348 10.1824L8.87933 9.42101L7.70637 8.77539Z\" fill=\"#1B3882\" fill-opacity=\"0.5\"/>\n<path d=\"M3.25136 24.3517C2.63039 24.3517 1.97738 24.3147 1.29233 24.2433L0.00109863 24.0954L0.636864 23.6864L0.976915 23.3192C1.02373 23.2477 1.15927 23.0112 1.38351 22.5134V22.5085C1.74575 21.7298 1.87142 20.4262 1.76053 18.6348L1.68414 17.4298L2.61314 18.1986C3.58403 19.0019 4.80134 19.1941 6.3316 18.7801C7.69922 18.3908 9.18759 17.1144 10.7499 14.9902C12.1865 12.9228 14.254 11.5206 16.9005 10.8208L17.1494 10.7543L18.8226 12.0578L17.3194 11.9494C17.179 12.0849 17.0385 12.2303 16.9104 12.3905L16.8808 12.4275L16.8414 12.462C15.9789 13.9947 14.7443 15.5077 13.5098 17.1636L13.4925 17.1932C13.3028 17.5259 13.1081 17.8709 12.8962 18.2134V18.2306L12.8272 18.3415C11.5631 20.3967 10.1733 21.9368 8.69476 22.9224C7.337 23.8736 5.51103 24.3541 3.25136 24.3541V24.3517ZM2.18191 23.2724C4.73234 23.4375 6.72094 23.0333 8.10089 22.0624L8.11074 22.0551C9.44879 21.1655 10.7228 19.7535 11.8982 17.861C11.9204 17.7969 11.9524 17.7427 11.9869 17.7008C12.1964 17.3632 12.3935 17.0158 12.5857 16.6782V16.6733C13.4211 15.0715 14.3821 13.6472 15.454 12.4275C13.8548 13.1322 12.5882 14.1795 11.6074 15.5915L11.6 15.6038C9.87264 17.9571 8.24135 19.3247 6.61499 19.788C5.17837 20.1749 3.91669 20.1059 2.84723 19.5835C2.86941 21.0571 2.70185 22.1635 2.33961 22.9446C2.2854 23.0678 2.23365 23.1763 2.18683 23.2724H2.18191Z\" fill=\"#1B3882\"/>\n<path d=\"M3.36956 24.3515C2.74858 24.3515 2.09557 24.3145 1.41052 24.2431L1.51895 23.2056C4.4464 23.5137 6.69868 23.1292 8.21662 22.0622L8.22894 22.0549C9.56699 21.1653 10.841 19.7533 12.0164 17.8608C12.0583 17.745 12.1248 17.6661 12.184 17.6144L12.8665 18.4029C12.97 18.3117 13.0144 18.1885 13.0218 18.1023L13.0119 18.228L12.9454 18.3389C11.6813 20.394 10.2915 21.9341 8.81295 22.9198C7.45518 23.871 5.62922 24.3515 3.36956 24.3515Z\" fill=\"#1B3882\"/>\n<path d=\"M12.2877 14.3495C12.0659 14.3643 11.8441 14.3766 11.6224 14.384C9.8654 14.4456 7.99015 13.9552 6.03605 12.9276C7.72895 11.8335 8.19961 10.5867 8.13308 9.46298C8.53721 9.78333 8.95858 10.0642 9.39721 10.3033C12.2705 11.9222 15.3063 12.1785 20.4959 10.7271L20.1435 9.7439C15.2127 11.1041 12.5415 10.8799 9.90236 9.39152C9.15325 8.98493 8.45835 8.43788 7.83737 7.77008L7.76592 7.69369L6.69645 6.53552L6.89852 8.0239C6.92809 8.14711 7.54168 11.0524 4.73989 12.4693L3.89221 12.8981L4.71032 13.3835C7.00202 14.7462 9.22471 15.4362 11.3193 15.4362L12.2877 14.3519V14.3495Z\" fill=\"#1B3882\"/>\n<path d=\"M25.488 30.3593C25.1628 30.3593 24.8572 30.1572 24.7069 29.8172C24.0095 28.2253 23.4625 27.5624 22.637 26.5595C21.8016 25.5467 20.0225 23.8317 19.7292 23.5828C19.3374 23.2501 19.2265 22.7967 19.4606 22.4838C19.5789 22.3285 19.9288 22.0156 20.6484 22.4936C22.1072 23.4596 25.3451 26.3648 26.2199 28.6984C26.5403 29.5461 26.2199 30.1228 25.7911 30.2977C25.6901 30.3396 25.5891 30.3568 25.4856 30.3568L25.488 30.3593Z\" fill=\"#1B3882\"/>\n<path d=\"M31.7841 30.3988C31.6806 30.3988 31.5746 30.3791 31.4711 30.3347C31.0424 30.1548 30.7319 29.5733 31.0621 28.7305C31.9664 26.4092 35.2413 23.5459 36.7125 22.5971C37.4394 22.1289 37.7844 22.4444 37.9002 22.6021C38.1318 22.9175 38.016 23.3684 37.6193 23.6962C37.3236 23.9426 35.5223 25.6306 34.6746 26.6359C33.8368 27.629 33.2823 28.2845 32.5628 29.869C32.41 30.2041 32.1069 30.4012 31.7866 30.4012L31.7841 30.3988Z\" fill=\"#1B3882\"/>\n<path d=\"M34.9998 4.94864C35.0219 3.73872 34.433 2.69637 33.2329 1.82405C32.0132 0.968971 30.5568 0.537733 28.8639 0.525412C27.171 0.513091 25.7196 0.929539 24.5245 1.77968C23.322 2.63722 22.7084 3.66726 22.6936 4.86732C22.6985 5.24188 22.7306 5.5844 22.7774 5.90475C27.2647 4.46073 31.2838 4.57901 34.8273 6.26205C34.9234 5.81357 34.9825 5.37741 34.9998 4.94617V4.94864Z\" fill=\"#1B3882\" fill-opacity=\"0.5\"/>\n<path d=\"M16.2375 29.3022L16.2153 29.2504C16.1562 29.1149 16.1044 28.9769 16.0625 28.8414L15.9369 28.4372L15.1064 28.4644L15.0423 29.1617C15.0473 29.1888 15.0621 29.2554 15.0769 29.3736V29.3983C15.0842 29.4402 15.0867 29.4747 15.0941 29.5092C15.1064 29.8788 14.9955 30.172 14.7442 30.4308C14.5052 30.6846 14.1922 30.7979 13.7807 30.7807C13.2706 30.761 13.1006 30.5565 13.0168 30.4037C12.7926 29.9995 12.7778 29.7827 12.7901 29.6866C12.8221 29.4229 12.8763 29.1445 12.9527 28.8636C13.071 28.4249 12.9823 27.9148 12.6841 27.3505L12.3786 26.7715C12.2627 26.5521 12.1617 26.2761 12.0779 25.9509C12.0139 25.6774 12.0311 25.3496 12.1272 24.9726C12.2135 24.6399 12.3983 24.3787 12.6915 24.1717C12.9848 23.9746 13.3347 23.9031 13.7511 23.9573L13.7832 23.9623H13.8152C14.2242 23.9647 14.5594 24.0042 14.8156 24.0732C14.7442 23.674 14.722 23.2575 14.759 22.8337C14.4904 22.7203 14.2193 22.6415 13.9458 22.6045H13.931L13.7289 22.5872C13.1203 22.5306 12.5264 22.6661 11.9646 22.9914C11.383 23.3314 10.9912 23.8341 10.8015 24.4871C10.6389 25.0564 10.6191 25.6429 10.7399 26.2269C10.7547 26.3156 10.7744 26.4191 10.8089 26.5176C10.9001 26.8059 11.0504 27.1263 11.2574 27.4713C11.5728 27.9912 11.6689 28.1613 11.696 28.2179L11.7058 28.2376C11.7453 28.3091 11.7527 28.4175 11.7256 28.5604L11.7157 28.6073C11.6861 28.7674 11.6566 28.9178 11.6442 28.9744C11.3978 29.6127 11.3732 30.2016 11.5678 30.7166C11.765 31.2637 12.1124 31.6629 12.6053 31.9093C12.8911 32.0497 13.2213 32.1385 13.5885 32.1754C13.7881 32.1951 13.9975 32.1976 14.2169 32.1853C14.929 32.1483 15.5081 31.8107 15.89 31.2169C16.2646 30.6526 16.3853 30.0267 16.2547 29.3589L16.2449 29.3022H16.2375Z\" fill=\"#1B3882\"/>\n<path d=\"M46.8405 23.6247C46.6483 22.9791 46.2491 22.4788 45.6528 22.1363H45.6503C45.1156 21.8307 44.5439 21.7051 43.9475 21.7618C43.9254 21.7618 43.9032 21.7667 43.881 21.7691L43.6839 21.7938H43.6666C43.2871 21.8554 42.9076 21.9983 42.538 22.2127C42.5405 22.2423 42.5454 22.2743 42.5503 22.3039C42.5848 22.6809 42.5676 23.053 42.5035 23.4152L42.7179 23.329C42.9914 23.2181 43.3635 23.1269 43.8539 23.053L43.881 23.0481C44.2556 22.9717 44.5784 23.0407 44.8938 23.2698C45.2264 23.5113 45.4507 23.812 45.5788 24.1841C45.6848 24.534 45.6996 24.8346 45.6257 25.1007C45.5345 25.4334 45.431 25.7291 45.3176 25.978C45.1821 26.2638 45.0441 26.5423 44.9086 26.7961C44.704 27.1756 44.6301 27.5871 44.6917 28.0159C44.7435 28.3904 44.7977 28.7009 44.8593 28.967C44.9036 29.1519 44.8765 29.3884 44.7804 29.6693L44.7755 29.6817C44.6966 29.933 44.2728 30.0685 44.0264 30.1277C43.4645 30.2608 43.2132 30.0562 43.0629 29.8714C42.8066 29.5412 42.6859 29.1839 42.6933 28.7822L42.7031 28.6664C42.7154 28.5506 42.7278 28.4915 42.7327 28.4693L42.7154 27.7497L41.7938 27.7719L41.6953 28.1662C41.6608 28.3017 41.6164 28.4348 41.5597 28.5679L41.5351 28.6245L41.5252 28.6861C41.4168 29.3416 41.5523 29.965 41.9244 30.5417L41.9343 30.554C42.3409 31.1405 42.9224 31.4633 43.6149 31.4879C43.7997 31.4978 43.9796 31.4928 44.1496 31.4781C44.5586 31.4411 44.9234 31.3327 45.2363 31.1577C45.6971 30.9039 46.0248 30.4973 46.217 29.9478C46.3994 29.4081 46.3624 28.8217 46.1086 28.2032L46.047 27.8384L46.0421 27.8113C46.0125 27.6807 46.0249 27.5526 46.0741 27.4245C46.1702 27.1953 46.3008 26.9292 46.461 26.6261C46.6705 26.2564 46.806 25.9435 46.8799 25.6774C46.9169 25.5591 46.9415 25.4556 46.9489 25.3521C47.045 24.773 47.0081 24.1939 46.8356 23.6296L46.8405 23.6247Z\" fill=\"#1B3882\"/>\n<path d=\"M35.4433 6.09441C35.5148 5.70014 35.5567 5.32805 35.5714 4.95595C35.5961 3.57108 34.9283 2.37348 33.5829 1.3952C32.2842 0.483444 30.7145 0.0152545 28.9181 0.000469353C27.1168 -0.01678 25.5545 0.441557 24.2707 1.35331C22.9277 2.31188 22.2377 3.49222 22.2205 4.86231V4.87464C22.2229 5.14816 22.2402 5.42168 22.2747 5.70753C22.149 5.85785 22.08 6.02295 22.0726 6.20037V6.22009C22.0726 6.68335 22.1392 7.14662 22.2796 7.5951L22.2821 7.60743C22.4743 8.17419 22.8045 8.71384 23.2653 9.21161L23.3984 9.35454L24.6107 9.49007C25.6457 10.0913 27.0281 10.4141 28.7284 10.4437C28.8023 10.4437 28.8763 10.4437 28.9477 10.4437C30.202 10.4437 31.2986 10.2909 32.2103 9.9903L32.2349 9.98044C32.5775 9.84738 32.9101 9.6872 33.228 9.50239C34.194 9.59357 34.9185 9.11797 35.2905 8.14954L35.3817 8.05098L35.3768 7.91298C35.5197 7.47436 35.7711 6.61435 35.4409 6.09441H35.4433ZM24.8744 2.20345C25.9734 1.4223 27.3287 1.03296 28.9083 1.04528C30.4878 1.0576 31.8579 1.4642 32.9742 2.24534C34.0363 3.01664 34.5439 3.89882 34.5266 4.92639C34.5192 5.11613 34.5045 5.3108 34.4773 5.51286C32.6834 4.76129 30.7688 4.38673 28.7407 4.38673C26.9985 4.38673 25.175 4.66518 23.2776 5.21963C23.2702 5.10134 23.2653 4.98306 23.2628 4.86725C23.2776 3.83722 23.805 2.96488 24.8744 2.20345ZM34.5168 7.10226L34.1644 7.8637C34.1644 7.8637 33.7036 8.52903 33.2009 8.44525L33.0062 8.41321L32.8387 8.51671C32.5331 8.70646 32.2078 8.86909 31.8702 8.99969C31.0201 9.27815 29.9679 9.41122 28.7457 9.39397C27.2326 9.3644 26.0203 9.09333 25.1405 8.58324C25.1134 8.56599 25.0863 8.54875 25.0617 8.53642L24.9582 8.47235L23.9085 8.35654C23.7089 8.12244 23.4255 7.6296 23.4255 7.6296L23.1372 6.79424C23.1372 6.79424 23.1224 6.4394 23.1199 6.35808C27.3682 5.02002 31.2172 5.13091 34.5611 6.68828C34.5661 6.74989 34.5168 7.10226 34.5168 7.10226ZM34.8297 7.87848V7.87109L34.8371 7.87848H34.8297Z\" fill=\"#1B3882\"/>\n</g></svg>";
const sageEvaluation = {
  "columns": [
    "Benchmark",
    "Sage 2.1 Flash",
    "GLM-5.3-Flash",
    "DeepSeek-V4.1-Flash-1017",
    "Qwen3.8-Max",
    "GPT-5.6 Sol",
    "Claude Opus 5",
    "GPT-6 Astra",
    "GPT-6.1 Sol",
    "Claude Opus 5.5"
  ],
  "rows": [
    [
      "Terminal-Bench 2.1",
      "87.9",
      "84.3",
      "87.6",
      "89.6",
      "86.2",
      "90.2",
      "87.4",
      "-",
      "87.6"
    ],
    [
      "DeepSWE",
      "67.9",
      "63.7",
      "73.9",
      "67.0",
      "70.6",
      "72.6",
      "74.1",
      "75.2",
      "74.2"
    ],
    [
      "NL2Repo-Bench",
      "57.2",
      "53.0",
      "62.7",
      "63.2",
      "60.7",
      "79.9",
      "-",
      "-",
      "-"
    ],
    [
      "SWE-bench Pro",
      "60.6",
      "59.2",
      "64.7",
      "65.3",
      "59.8",
      "76.5",
      "-",
      "-",
      "89.9"
    ],
    [
      "SpreadsheetBench 2",
      "37.1",
      "32.4",
      "35.8",
      "34.9",
      "32.7",
      "33.6",
      "-",
      "32.0",
      "35.1"
    ],
    [
      "ALE-CLI",
      "32.4",
      "28.1",
      "35.4",
      "24.8",
      "28.6",
      "29.5",
      "33.3",
      "29.5",
      "34.3"
    ],
    [
      "APEX-Agents",
      "61.7",
      "50.8",
      "69.2",
      "66.3",
      "55.4",
      "61.3",
      "64.7",
      "60.0",
      "73.5"
    ],
    [
      "GDPval",
      "78.0",
      "67.7",
      "77.6",
      "79.6",
      "69.6",
      "80.0",
      "-",
      "-",
      "-"
    ],
    [
      "Workspace-Bench-Lite",
      "67.1",
      "65.1",
      "66.8",
      "67.4",
      "57.4",
      "68.1",
      "-",
      "-",
      "-"
    ],
    [
      "Workspace-Bench",
      "61.7",
      "59.7",
      "63.0",
      "63.9",
      "50.9",
      "62.0",
      "-",
      "-",
      "-"
    ],
    [
      "OfficeQA Pro V2",
      "72.2",
      "64.7",
      "69.7",
      "66.2",
      "66.4",
      "67.2",
      "54.4",
      "70.0",
      "62.2"
    ],
    [
      "Harvey LAB",
      "25.0",
      "20.0",
      "11.7",
      "24.2",
      "5.0",
      "22.7",
      "-",
      "-",
      "-"
    ],
    [
      "AutomationBench",
      "56.7",
      "48.3",
      "57.8",
      "49.7",
      "45.7",
      "49.4",
      "41.4",
      "49.3",
      "58.0"
    ],
    [
      "BFCL V4",
      "75.5",
      "71.7",
      "71.4",
      "66.8",
      "68.8",
      "80.6",
      "-",
      "-",
      "-"
    ],
    [
      "JobBench",
      "58.8",
      "56.5",
      "58.5",
      "52.7",
      "45.4",
      "68.0",
      "50.4",
      "-",
      "-"
    ],
    [
      "SkillsBench",
      "62.3",
      "58.3",
      "52.8",
      "66.7",
      "62.5",
      "63.7",
      "-",
      "72.6",
      "71.8"
    ],
    [
      "τ³-bench Banking",
      "45.4",
      "39.2",
      "47.4",
      "55.2",
      "46.9",
      "48.7",
      "-",
      "-",
      "-"
    ],
    [
      "CyberGym",
      "84.3",
      "86.0",
      "88.8",
      "73.8",
      "83.6",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "MLE-bench Lite",
      "90.3",
      "84.3",
      "89.2",
      "82.2",
      "80.7",
      "88.0",
      "-",
      "-",
      "-"
    ],
    [
      "PostTrainBench",
      "39.2",
      "36.8",
      "-",
      "-",
      "31.0",
      "35.7",
      "41.9",
      "38.8",
      "43.8"
    ],
    [
      "PaperBench",
      "88.0",
      "83.0",
      "88.6",
      "95.1",
      "94.3",
      "86.9",
      "-",
      "-",
      "-"
    ],
    [
      "MLS-Bench",
      "42.0",
      "39.9",
      "44.3",
      "41.0",
      "46.2",
      "49.8",
      "50.0",
      "-",
      "-"
    ],
    [
      "DeepResearch Bench II",
      "54.2",
      "51.9",
      "55.1",
      "49.2",
      "50.7",
      "54.1",
      "-",
      "-",
      "-"
    ],
    [
      "DeepSearchQA",
      "94.4",
      "92.6",
      "95.3",
      "-",
      "93.2",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "BrowseComp-VL",
      "60.5",
      "61.0",
      "60.6",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "WideSearch",
      "81.5",
      "77.2",
      "86.3",
      "81.9",
      "83.3",
      "84.0",
      "-",
      "-",
      "-"
    ],
    [
      "BrowseComp",
      "91.2",
      "88.3",
      "93.8",
      "-",
      "92.2",
      "90.8",
      "91.5",
      "87.5",
      "90.8"
    ],
    [
      "OSWorld v2.1",
      "69.3",
      "66.4",
      "70.1",
      "66.4",
      "70.4",
      "74.0",
      "75.8",
      "75.2",
      "81.8"
    ],
    [
      "OSWorld-Verified",
      "85.2",
      "83.5",
      "78.5",
      "84.3",
      "82.2",
      "86.4",
      "-",
      "-",
      "-"
    ],
    [
      "WebArena-Verified",
      "67.6",
      "65.0",
      "60.7",
      "64.9",
      "66.6",
      "69.1",
      "-",
      "-",
      "-"
    ],
    [
      "Vision2Web",
      "78.0",
      "75.8",
      "-",
      "75.2",
      "73.5",
      "80.2",
      "-",
      "-",
      "-"
    ],
    [
      "WeaveBench",
      "68.4",
      "60.9",
      "-",
      "71.9",
      "79.6",
      "86.4",
      "-",
      "-",
      "-"
    ],
    [
      "OSWorld-G",
      "84.8",
      "83.7",
      "61.4",
      "88.6",
      "77.7",
      "76.8",
      "-",
      "-",
      "-"
    ],
    [
      "BabyVision",
      "75.8",
      "51.3",
      "58.0",
      "83.8",
      "80.7",
      "63.1",
      "-",
      "-",
      "-"
    ]
  ],
  "groups": [
    {
      "start": 0,
      "zh": "智能体编程",
      "en": "Agentic Coding"
    },
    {
      "start": 4,
      "zh": "生产力",
      "en": "Productivity"
    },
    {
      "start": 10,
      "zh": "工具使用",
      "en": "Tool Use"
    },
    {
      "start": 17,
      "zh": "网络安全",
      "en": "Cybersecurity"
    },
    {
      "start": 18,
      "zh": "机器学习工程",
      "en": "ML Engineering"
    },
    {
      "start": 22,
      "zh": "深度研究",
      "en": "Deep Research"
    },
    {
      "start": 23,
      "zh": "搜索",
      "en": "Search"
    },
    {
      "start": 27,
      "zh": "视觉",
      "en": "Vision"
    }
  ],
  "best": [
    [
      6
    ],
    [
      3
    ],
    [
      6
    ],
    [
      6
    ],
    [
      1
    ],
    [
      3
    ],
    [
      3
    ],
    [
      6
    ],
    [
      6
    ],
    [
      4
    ],
    [
      1
    ],
    [
      1
    ],
    [
      3
    ],
    [
      6
    ],
    [
      6
    ],
    [
      4
    ],
    [
      4
    ],
    [
      3
    ],
    [
      1
    ],
    [
      1
    ],
    [
      4
    ],
    [
      6
    ],
    [
      3
    ],
    [
      3
    ],
    [
      2
    ],
    [
      3
    ],
    [
      3
    ],
    [
      6
    ],
    [
      6
    ],
    [
      6
    ],
    [
      6
    ],
    [
      6
    ],
    [
      4
    ],
    [
      4
    ]
  ],
  "externalColumns": [
    7,
    8,
    9
  ],
  "chartIntro": {
    "zh": "图中展示 Sage 2.1 Flash 在 15 项 benchmark 上的成绩。图中展示我们与 5 个 baseline；按这 6 个模型中的名次排序，同名次按相对 GLM-5.3-Flash 的绝对提分降序排列。",
    "en": "The chart shows Sage 2.1 Flash on 15 benchmarks. The chart compares our model with five baselines, ordered by rank among these six models, then by absolute gain over GLM-5.3-Flash in descending order."
  },
  "notes": {
    "zh": [
      [
        "Terminal-Bench 2.1",
        "Terminal-Bench 2.1 采用 Claude Code作为评测 harness。任务采用 12× 超时倍率（上限 12 小时），验证阶段采用 3× 超时倍率，并使用离线依赖。最多执行 1,000 个交互步骤，上下文窗口为 512K，单次输出上限为 64K，thinking effort 设为 max。资源配置遵循各任务规格，Agent 可经镜像服务访问网络资源，禁用图片/PDF 读取。评测集共 89 个任务，出错的任务计 0 分。每个模型独立评测 4 次，取平均通过率。GPT-6 Astra 的引用成绩来自官方榜单。"
      ],
      [
        "DeepSWE",
        "DeepSWE 基于 AgentCompass 评测框架构建，采用 v1.1 数据集，共 113 个任务，使用 mini-swe-agent（版本 2.4.2，官方 mini.yaml）作为评测 harness。模型温度为 1.0，top_p 为 1.0。每个任务分配 2 个 CPU 与 8 GiB 内存，Agent 与验证器均禁用外网，不设迭代步数和费用上限。单条命令限时 30 秒，单次模型请求限时 600 秒。任务执行时限为 5,400 秒基准的 6 倍，即 32,400 秒。补丁在独立验证沙盒中运行隐藏测试，验证限时 1,800 秒。以二值 reward 统计通过率，模型超时或上下文超限计为失败。每个模型独立评测 4 次，取平均通过率。"
      ],
      [
        "NL2Repo-Bench",
        "DeepSeek-V4.1-Flash-1017、GLM-5.3-Flash、Claude Opus 5 和 Sage 2.1 Flash 采用 Claude Code，其余模型采用 OpenHands（v0.56.0）。每个任务限时 6 小时，最多 500 步；报告 104 个任务的平均测试通过率。"
      ],
      [
        "SWE-bench Pro",
        "SWE-bench Pro 中，Sage 2.1 Flash、GLM-5.3-Flash、DeepSeek-V4.1-Flash-1017 和 Claude Opus 5 使用 Claude Code，其余模型使用 OpenHands。题面采用官方 V2 locked 协议的提示词外壳，题集为 v1 的 731 个任务。每个任务分配 4 个 CPU 与 16 GiB 内存，单任务限时 4.5 小时，最多 250 轮。单次输出上限为 64K，thinking effort 设为 max。评测环境禁用外网（仅放行模型端点），并删除 base commit 之后的 Git 历史，以防止信息泄露或评测污染。禁用图片/PDF 读取及 WebSearch、WebFetch 工具。补丁在 Agent 结束后由 git diff 收取，在独立沙盒中运行官方测试判分。"
      ],
      [
        "SpreadsheetBench 2",
        "GPT 系列模型使用 Codex，其余模型使用 Claude Code。Visualization 子任务使用 Qwen3.7-plus 作为 VLM 评分器，其余子任务使用基于规则的验证器。报告 321 个任务的加权平均正确率。评测采用 Harbor 框架，每个任务分配 1 个 CPU 和 10 GB 内存。单次请求限时 60 分钟，不限交互步数。Visualization 子任务的图表在 Windows 上渲染后评分。"
      ],
      [
        "ALE-CLI",
        "采用 Agents’ Last Exam v1 的 CLI 子集，以 Claude Code 执行任务。在任务指定的软件环境中完成多步骤工作流并提交交付物，依据对应版本的隐藏参考和确定性 grader 验证结果；环境和任务资源按 v1 配置。"
      ],
      [
        "APEX-Agents",
        "采用 v1.1 任务定义和评分细则，评测投资银行、管理咨询和公司法律领域的跨文件工作流。Agent 根据任务材料生成交付物，按任务 rubric 判分，只有全部 rubric 条目通过才计为任务成功；报告 pass@1，即单次尝试的任务通过率。使用自建 harness 执行，保留 v1.1 对非明确、回避性回答的评分修订。"
      ],
      [
        "GDPval",
        "GDPval 基于 AgentCompass 评测框架构建，采用 Claude Code作为评测 harness。每个任务分配 4 个 CPU 与 8 GiB 内存，Agent 执行时限为 4 小时，最多 250 轮。单次输出上限为 64K，thinking effort 设为 max。禁用 WebSearch、WebFetch 及图片/PDF 读取。评分采用 GLM-5.2 作为 LLM Judge（温度 0），将候选模型交付物与 Claude Opus 4.8 baseline 交付物两两比较，依据评分细则逐项打分，记录胜、负、平结果。评测集共 220 个任务，最终报告胜场数除以评测总数的比例；平局不计为胜场，也不按半胜折算。"
      ],
      [
        "Workspace-Bench-Lite",
        "采用英文 Lite 数据集和 AgentCompass 评测框架。GPT 系列模型使用 Codex，其余模型使用 Claude Code。每个任务分配 2 个 CPU 和 8 GiB 内存，限时 2 小时。评分采用 doubao-seed-2-1-lite-260915 作为 LLM judge。"
      ],
      [
        "Workspace-Bench",
        "采用英文 Full 数据集。GPT 系列模型使用 Codex，其余模型使用 Claude Code。每个任务分配 2 个 CPU 和 8 GiB 内存，限时 2 小时。评分采用 doubao-seed-2-1-lite-260915 作为 LLM judge。"
      ],
      [
        "OfficeQA Pro V2",
        "采用基于官方技术报告构建的 harness，评测 OfficeQA Pro V2 的 90 个任务。temperature 设为 0，并发数为 40。单次请求限时 180 秒，单任务限时 900 秒，最多执行 200 步。模型仅可访问 source_files 指定的文档；搜索最多返回 8 条结果，工具输出最多为 18,000 个字符。官方评估器的容差为 0.05，无有效提交的任务最多重试 3 轮。"
      ],
      [
        "Harvey LAB",
        "从官方 1,200 个任务中按比例抽取 120 个子任务；评分采用 GLM-5.2 作为 LLM Judge，报告全部评分项均通过的任务比例。"
      ],
      [
        "AutomationBench",
        "采用 v1.0.6 和自建 harness，包含 PR #13 的空类型处理修复。任务从预设业务状态开始，通过工具完成工作流；按官方断言式 rubric 检查最终状态。全部断言通过才计为任务成功，报告任务通过率，simple 域不计入正式成绩。"
      ],
      [
        "BFCL V4",
        "Web Search 测试使用 Serper，API 失败的样例按错误计分。采用官方 harness（commit 6ea5797），共评测 5,217 个样例，并发数为 16。temperature 设为 0.001，单次请求限时 120 秒，最多尝试 2 次。Non-Live、Live、Irrelevance、Multi-Turn 和 Agentic 的评分权重分别为 10%、10%、10%、30% 和 40%；Agentic 内的 Web Search 与 Memory 等权。"
      ],
      [
        "JobBench",
        "采用官方 OpenCode harness，在包含 65 个任务的 main split 上评测，并发数为 10。每个任务限时 7,200 秒，最多尝试 2 次。使用 Grok-4.3 判分，最终成绩为各任务百分比分数的平均值。API 失败或两次尝试均失败的任务计 0 分。"
      ],
      [
        "SkillsBench",
        "采用 OpenHands，在不含多模态任务的 79 题子集上评测，3 次运行取平均。"
      ],
      [
        "τ³-bench Banking",
        "采用包含 97 道题的 Banking Knowledge 任务集，以及 Tau2 commit a2c0247。用户模拟器和 judge 均使用 GPT-5.2，推理强度设为 low，随机种子设为 300。alltools 提供 BM25 检索、基于 text-embedding-3-large 的 dense top-10 检索，以及只读知识库 shell；知识库包含 698 篇文档。单次模型请求限时 180 秒，最多重试 3 次。模拟限时 1,800 秒，外层任务限时 2,400 秒，最多执行 200 个交互步骤。"
      ],
      [
        "CyberGym",
        "采用 Claude Code，thinking effort 设为 max。每个任务分配 2 个 CPU 和 4 GB 内存，限时 4 小时 10 分钟。禁用网络访问，并删除相关 Git 历史。"
      ],
      [
        "MLE-bench Lite",
        "采用 Lite 数据集和 Claude Code harness，单次评测限时 12 小时；报告 HumanRank 指标，计算方式见 Frontis-MA1 论文。"
      ],
      [
        "PostTrainBench",
        "采用 v1.2。GLM-5.3-Flash、GPT-5.6 Sol 和 Claude Opus 5 的成绩引自 posttrainbench.com 官方榜单，为 6 个评测集与 4 个基座模型组成的 24 项结果的加权平均。Sage 2.1 Flash 为我们按相同口径自测的 24 项加权平均成绩。"
      ],
      [
        "PaperBench",
        "采用官方 Code-Dev 版本，共评测 20 篇论文。GPT 系列模型使用 Codex，其余模型使用 Claude Code，thinking effort 设为 max。每个任务分配 4 个 CPU 和 16 GB 内存，不使用 GPU，限时 12 小时，可通过搜索及页面读取工具联网。使用 GLM-5.3 作为 judge，对 rubric 叶节点评分，最终取 20 篇论文的平均分。"
      ],
      [
        "MLS-Bench",
        "采用 Claude Code 作为模型执行 harness，在官方任务规定的可修改范围内提出并实现机器学习方法改进。使用任务评测程序检验这些改进在不同模型、数据集和随机种子上的迁移效果，并按官方归一化任务指标汇总成绩。"
      ],
      [
        "DeepResearch Bench II",
        "采用 Claude Code，所有模型使用相同的搜索工具，单任务限时 4 小时。使用官方推荐的 GPT-5.5 作为 judge，每项结果取三次打分的均值。"
      ],
      [
        "DeepSearchQA",
        "采用自研的 ReAct 搜索 harness，提供 search、visit、python 三类工具，最多 500 步，上下文 256K，单次输出上限 64K。"
      ],
      [
        "BrowseComp-VL",
        "采用 SearchEyes 风格的多模态 ReAct 搜索 harness，提供 text_search、visual_search、lookup、summarize、python_interpreter 五类工具，最多 100 轮交互、100 次工具调用，上下文 512K，单次输出上限 64K，单任务限时 3 小时。保留历史上下文，接近上下文预算上限时触发强制终答。"
      ],
      [
        "WideSearch",
        "采用自研的 ReAct 搜索 harness，提供 search、visit、python 三类工具，最多 500 步，上下文 256K，单次输出上限 64K。GPT-5.6 Sol 基于 181 个任务统计；Qwen3.8-Max 引自官方 model card。"
      ],
      [
        "BrowseComp",
        "采用自研的 ReAct 搜索 harness，提供 search、visit、python 三类工具，最多 500 步，上下文 256K，单次输出上限 64K。使用 discard-all 上下文管理。"
      ],
      [
        "OSWorld v2.1",
        "GPT-5.6 使用 Codex 0.167.2 进行评测，其余模型使用 Claude Code。Offline 任务禁用公网访问，Online 任务保留联网能力；所有任务均禁用 WebSearch 和 WebFetch。禁止直接向模型输入 PDF 及使用外部 OCR，允许在本地提取 PDF 文本或将页面渲染为图片后读取。"
      ],
      [
        "OSWorld-Verified",
        "采用 20 张窗口、每批 10 步的历史截图折叠机制，将被折叠的旧截图替换为对应步骤模型生成的 Observation 文本。始终保留首帧和当前截图，完整保留历史文本、推理及工具交互。"
      ],
      [
        "WebArena-Verified",
        "基于 CUA-Lite 框架，使用绝对像素坐标，并采用 20 张窗口、每批 10 步的历史截图折叠机制。"
      ],
      [
        "Vision2Web",
        "GPT 系列模型使用 Codex，其余模型使用 Claude Code。"
      ],
      [
        "WeaveBench",
        "采用 Codex，在 Ubuntu 沙箱中结合 GUI 观察操作与 CLI／代码执行完成跨应用任务。使用官方轨迹感知 judge，综合交付物、截图、文件和执行日志进行 rubric 评分，并检查伪造截图、硬编码结果等捷径；命中作弊规则的任务计 0 分。"
      ],
      [
        "OSWorld-G",
        "使用 refined prompt，通过 click(x,y,button) 提交原图像素坐标；无可见目标时提交 (-1,-1,left)。"
      ],
      [
        "BabyVision",
        "使用 LANCZOS 等比例放大图片，使短边至少达到 1500 像素；已满足条件的图片保持原尺寸，不缩小。"
      ],
      [
        "GPT-6 Astra、GPT-6.1 Sol、Claude Opus 5.5",
        "这三列不是我们自测，引自公开来源：各家官方报告、Vals AI 榜单，以及 Kimi K3.1 Pro、Hy4、ERNIE 5.5 Flash Preview 的发布表。评测设置与本表其他列不完全一致，仅供参考，不参与每行最高分的标注。"
      ]
    ],
    "en": [
      [
        "Terminal-Bench 2.1",
        "Evaluations use Claude Code on 89 tasks. Task timeouts are multiplied by 12, capped at 12 hours; verifier timeouts are multiplied by 3. The verifier uses offline dependencies. Runs allow up to 1,000 interaction steps, a 512K context window, 64K output per generation and max thinking effort. Resources follow each task specification; agents can access network resources through mirrors, while image/PDF reading is disabled. Errors score zero. Each model is evaluated in four independent runs and the mean pass rate is reported. The GPT-6 Astra reference score is taken from the official leaderboard."
      ],
      [
        "DeepSWE",
        "Evaluations use the AgentCompass framework on DeepSWE v1.1, which contains 113 tasks. The evaluation harness is mini-swe-agent v2.4.2 with the official mini.yaml configuration. Temperature and top_p are both 1.0. Each task receives 2 CPUs and 8 GiB of memory. Agent and verifier have no external network access; there is no step or cost cap. Commands have a 30-second timeout and model requests a 600-second timeout. The task budget is 6 × 5,400 seconds, or 32,400 seconds. Hidden tests run in a separate verifier sandbox with a 1,800-second timeout. Pass rate is computed from binary rewards; model timeouts and context overflow count as failures. The reported pass rate is the average of four independent runs per model."
      ],
      [
        "NL2Repo-Bench",
        "DeepSeek-V4.1-Flash-1017, GLM-5.3-Flash, Claude Opus 5 and Sage 2.1 Flash are run with Claude Code, and the other models with OpenHands (v0.56.0). Each task has a 6-hour limit and at most 500 steps. The score is the average test pass rate over 104 tasks."
      ],
      [
        "SWE-bench Pro",
        "For SWE-bench Pro, Sage 2.1 Flash, GLM-5.3-Flash, DeepSeek-V4.1-Flash-1017 and Claude Opus 5 use Claude Code, while all other models use OpenHands. The evaluation uses the official V2 locked-protocol prompt wrapper and the v1 task set of 731 tasks. Each task receives 4 CPUs and 16 GiB of memory, a 4.5-hour time limit and at most 250 turns. Output is capped at 64K tokens and thinking effort is set to max. External network access is disabled except for model endpoints, and Git history after the base commit is removed to prevent information leakage or benchmark contamination. Image/PDF reading, WebSearch and WebFetch are disabled. Patches are collected using git diff after the agent finishes and graded with official tests in an isolated sandbox."
      ],
      [
        "SpreadsheetBench 2",
        "GPT models use Codex, while all other models use Claude Code. Visualization tasks are graded by Qwen3.7-plus as a VLM verifier, while the remaining tasks use rule-based verifiers. The reported score is the weighted average accuracy over 321 tasks. Evaluations use the Harbor framework, with 1 CPU and 10 GB of memory allocated to each task. Each model request has a 60-minute timeout, and there is no interaction-step limit. For Visualization tasks, charts are rendered on Windows before grading."
      ],
      [
        "ALE-CLI",
        "Evaluations use the CLI subset of Agents’ Last Exam v1 with Claude Code. Agents complete multi-step workflows in the prescribed software environments and submit deliverables, checked against version-matched hidden references and deterministic graders. Environments and task assets follow v1."
      ],
      [
        "APEX-Agents",
        "Evaluations use v1.1 task definitions and grading rubrics for cross-file workflows in investment banking, management consulting and corporate law. Agents produce deliverables from task materials for rubric-based evaluation. A task succeeds only if all rubric criteria pass. We report pass@1, the task success rate for a single attempt. Execution uses an in-house harness and retains the v1.1 grading changes for noncommittal answers."
      ],
      [
        "GDPval",
        "Evaluations use the AgentCompass framework and Claude Code on 220 tasks. Each task receives 4 CPUs and 8 GiB of memory, a 4-hour agent timeout and at most 250 turns. Output is capped at 64K tokens with max thinking effort. WebSearch, WebFetch and image/PDF reading are disabled. GLM-5.2 at temperature 0 judges candidate deliverables against Claude Opus 4.8 deliverables, applying rubric criteria and recording wins, losses and ties. The reported metric is the number of wins divided by the total number of evaluations. Ties remain in the denominator but contribute no wins; no half-win credit is assigned."
      ],
      [
        "Workspace-Bench-Lite",
        "Evaluations use the English Lite dataset and the AgentCompass framework. GPT models use Codex, while all other models use Claude Code. Each task receives 2 CPUs and 8 GiB of memory and has a two-hour time limit. The LLM judge is doubao-seed-2-1-lite-260915."
      ],
      [
        "Workspace-Bench",
        "Evaluations use the English Full dataset. GPT models use Codex, while all other models use Claude Code. Each task receives 2 CPUs and 8 GiB of memory and has a two-hour time limit. The LLM judge is doubao-seed-2-1-lite-260915."
      ],
      [
        "OfficeQA Pro V2",
        "The 90 tasks of OfficeQA Pro V2 are evaluated using a harness built from the official technical report. Temperature is set to 0, and evaluations run with 40 concurrent workers. Each request has a 180-second timeout, and each task has a 900-second timeout and a limit of 200 steps. Models may access only the documents specified by source_files. Search results contain at most 8 entries, and tool output is limited to 18,000 characters. The official evaluator uses a tolerance of 0.05. Tasks without valid submissions may be retried for up to 3 rounds."
      ],
      [
        "Harvey LAB",
        "Evaluations use a 120-task subset sampled proportionally from the 1,200 official tasks. GLM-5.2 serves as the LLM judge. The reported score is the proportion of tasks that pass every rubric criterion."
      ],
      [
        "AutomationBench",
        "Evaluations use v1.0.6 with an in-house harness and include the null-type handling fix from PR #13. Tasks start from predefined business states and use tools to complete workflows. Official assertion-based rubrics check final states; a task passes only when every assertion passes. The reported metric is task pass rate, excluding the simple domain."
      ],
      [
        "BFCL V4",
        "Web Search tests use Serper, and samples with API failures are scored as incorrect. Evaluations use the official harness at commit 6ea5797 on 5,217 cases, with 16 concurrent workers. Temperature is set to 0.001. Each request has a 120-second timeout and allows at most 2 attempts. The overall score assigns weights of 10% to Non-Live, 10% to Live, 10% to Irrelevance, 30% to Multi-Turn and 40% to Agentic. Within Agentic, Web Search and Memory receive equal weight."
      ],
      [
        "JobBench",
        "Evaluations use the official OpenCode harness on the main split of 65 tasks, with 10 concurrent workers. Each task has a 7,200-second timeout and allows at most 2 attempts. Grok-4.3 serves as the judge, and the final score is the mean of the per-task percentage scores. Tasks with API failures or two failed attempts receive a score of zero."
      ],
      [
        "SkillsBench",
        "Evaluations use OpenHands on the 79-task subset that excludes multimodal tasks. Results are averaged over three runs."
      ],
      [
        "τ³-bench Banking",
        "Evaluations use the 97 Banking Knowledge tasks and Tau2 commit a2c0247. Both the user simulator and the judge use GPT-5.2 with low reasoning effort, and the random seed is 300. The alltools configuration provides BM25 search, dense retrieval using text-embedding-3-large with the top 10 results, and a read-only knowledge-base shell. The knowledge base contains 698 documents. Each model request has a 180-second timeout and allows up to 3 retries. Simulations have a 1,800-second timeout, while the outer task timeout is 2,400 seconds. Each task allows at most 200 interaction steps."
      ],
      [
        "CyberGym",
        "Evaluations use Claude Code with max thinking effort. Each task receives 2 CPUs and 4 GB of memory and has a time limit of 4 hours and 10 minutes. Network access is disabled, and the relevant Git history is removed."
      ],
      [
        "MLE-bench Lite",
        "Evaluations use the Lite dataset and the Claude Code harness, with a 12-hour time limit per run. The reported metric is HumanRank, calculated using the methodology described in the Frontis-MA1 paper."
      ],
      [
        "PostTrainBench",
        "Evaluations use v1.2. Scores for GLM-5.3-Flash, GPT-5.6 Sol and Claude Opus 5 are taken from the official leaderboard at posttrainbench.com, a weighted average over 24 benchmark–base-model combinations (6 benchmarks × 4 base models). The score for Sage 2.1 Flash comes from our own evaluations and uses the same weighted average over the 24 benchmark–base-model combinations."
      ],
      [
        "PaperBench",
        "Evaluations cover all 20 papers of the official Code-Dev variant. GPT models use Codex and other models use Claude Code, with max thinking effort. Each task receives 4 CPUs and 16 GB of memory, no GPU, and a 12-hour limit, with search and page-reading access. GLM-5.3 serves as the judge and scores each rubric leaf; the final score is the mean across 20 papers."
      ],
      [
        "MLS-Bench",
        "Evaluations use Claude Code as the execution harness to propose and implement improvements to machine learning methods within the scope of changes permitted by each official task. Task evaluators test transfer across models, datasets and random seeds. Scores use the official normalized task metric."
      ],
      [
        "DeepResearch Bench II",
        "Evaluations use Claude Code. All models use the same search tools, and each task has a four-hour time limit. Each result is the mean of three judge scores. GPT-5.5, the officially recommended model, serves as the judge."
      ],
      [
        "DeepSearchQA",
        "Evaluations use our in-house ReAct search harness, which provides search, visit and python tools. Runs allow up to 500 interaction steps, with a 256K context window and a 64K output limit per generation."
      ],
      [
        "BrowseComp-VL",
        "We use a SearchEyes-style multimodal ReAct search harness with five tools: text_search, visual_search, lookup, summarize, and python_interpreter. Each task allows up to 100 interaction rounds and 100 tool calls in total, with a 512K-token context window, a 64K-token limit per output, and a three-hour time limit. The harness retains the interaction history and requires a final answer as the context window approaches its limit."
      ],
      [
        "WideSearch",
        "Evaluations use our in-house ReAct search harness, which provides search, visit and python tools. Runs allow up to 500 interaction steps, with a 256K context window and a 64K output limit per generation. The GPT-5.6 Sol score is calculated over 181 tasks. The Qwen3.8-Max score is taken from its official model card."
      ],
      [
        "BrowseComp",
        "Evaluations use our in-house ReAct search harness, which provides search, visit and python tools. Runs allow up to 500 interaction steps, with a 256K context window and a 64K output limit per generation. Context is managed with the discard-all strategy."
      ],
      [
        "OSWorld v2.1",
        "GPT-5.6 is evaluated using Codex 0.167.2, while all other models use Claude Code. Public internet access is disabled for Offline tasks and enabled for Online tasks. WebSearch and WebFetch are disabled for all tasks. Direct PDF input to the model and external OCR are prohibited. PDF text may be extracted locally, or pages may be rendered as images for reading."
      ],
      [
        "OSWorld-Verified",
        "Historical screenshots are folded in batches of 10 steps using a 20-screenshot window. Folded screenshots are replaced with Observation text generated by the model at the corresponding steps. The first and current screenshots are always retained, along with the complete history of text, reasoning and tool interactions."
      ],
      [
        "WebArena-Verified",
        "Evaluations use the CUA-Lite framework and absolute pixel coordinates. Historical screenshots are folded in batches of 10 steps using a 20-screenshot window."
      ],
      [
        "Vision2Web",
        "GPT models use Codex, while all other models use Claude Code."
      ],
      [
        "WeaveBench",
        "Evaluations use Codex in an Ubuntu sandbox, combining GUI observation and interaction with CLI and code execution to complete tasks across applications. The official trajectory-aware judge applies rubrics to deliverables, screenshots, files and execution logs, and checks for shortcuts such as fabricated screenshots and hard-coded results. Tasks that violate the anti-cheating rules receive a score of zero."
      ],
      [
        "OSWorld-G",
        "Evaluations use the refined prompt. The model submits pixel coordinates in the original image through click(x,y,button). When no target is visible, it submits (-1,-1,left)."
      ],
      [
        "BabyVision",
        "Images are upscaled with LANCZOS while preserving their aspect ratio so that the shorter side is at least 1,500 pixels. Images that already meet this requirement retain their original dimensions and are not downscaled."
      ],
      [
        "GPT-6 Astra, GPT-6.1 Sol, Claude Opus 5.5",
        "These three columns are not our own runs. They are taken from public sources: the vendors' official reports, the Vals AI leaderboard, and the launch tables of Kimi K3.1 Pro, Hy4 and ERNIE 5.5 Flash Preview. Their evaluation settings differ from the other columns, so they are for reference only and are not counted when the best score in each row is highlighted."
      ]
    ]
  }
}
;
const sageArticle = {
  "zh": {
    "title": "Sage 2.1 Flash ｜ 以推理探索，以行动求证",
    "opening": [
      "今天，我们正式发布 **书生 Sage 2.1 Flash**，一款面向高难度科学研究的前沿科学多模态智能体模型。模型采用 **3200 亿参数 MoE 架构**，将科学多模态理解与通用智能体能力相结合，支持科学深度研究、科学编程及专业科研软件操作。",
      "书生-S2.1 将分子图、晶体结构、蛋白质序列与三维结构、DNA序列、RNA序列，以及光谱、质谱、X 射线衍射、心电、脑电和光变曲线等十余类科学输入纳入统一模型，并依托大规模可验证环境训练，强化搜索、编程、工具调用与多步骤任务执行能力。通过视觉反馈，模型能够根据软件状态与中间结果检验判断、调整策略，在专业科研环境中持续推进复杂任务。"
    ],
    "intro": "科学研究需要在数据、代码与专业工具之间反复开展分析、操作和检查。以下演示展示 Sage 2.1 Flash 如何处理科学数据、操作专业软件，并利用中间结果调整执行过程，输出可供研究者复核的成果。",
    "cases": [
      {
        "title": "CT 三维重建",
        "description": "从 12,487 张来源混杂、顺序打乱且朝向不一的 CT 图像中，筛出同一次扫描的 139 张切片，校正朝向并恢复层序。模型根据一致性检查调整排序策略，在 3D Slicer 中完成三维骨骼重建，并回查原始切面复核局部细节。",
        "label": "视频演示｜CT 三维重建",
        "src": "/cases/sage/ct.mp4",
        "caption": "从 12,487 张混杂 CT 图像中找出同一次扫描的 139 张目标切片，恢复层序，并在 3D Slicer 中重建可交互查看的三维骨骼。",
        "poster": "/cases/sage/thumbnails/ct.jpg"
      },
      {
        "title": "三维建模",
        "description": "根据参考图，在 Blender 与 CAD 软件中完成建筑、航天发动机和汽车底盘的三维建模，结合渲染预览或装配检查复核结果，输出可编辑模型与展示视频。",
        "src": "/cases/sage/architecture.mp4",
        "label": "",
        "medias": [
          {
            "type": "video",
            "src": "/cases/sage/architecture.mp4",
            "label": "建筑三维重建",
            "description": "根据浦江大楼的多角度参考图，在 Blender 中完成三维建模、材质灯光与相机动画，输出展示视频和可编辑工程。",
            "caption": "根据浦江大楼的多角度参考图片，在 Blender 中搭建三维建筑、制作材质灯光与相机动画，输出建筑展示视频和可编辑工程",
            "poster": "/cases/sage/thumbnails/architecture.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/engine.mp4",
            "label": "航天发动机",
            "description": "根据参考图识别发动机总体构型、外部轮廓与零件布局，在 CAD 软件中完成参数化建模与整机装配，逐对检查零件干涉，输出可编辑模型与渲染图，为结构复核和后续设计迭代提供依据。",
            "caption": "根据参考图构建工业航天发动机和汽车底盘 cad",
            "poster": "/cases/sage/thumbnails/engine.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/chassis.mp4",
            "label": "汽车底盘",
            "description": "根据参考图构建汽车底盘的参数化 CAD 模型，完成车架、悬架与动力系统装配，检查零件干涉，输出 STEP 装配体、零件清单与渲染图。",
            "caption": "根据参考图构建工业航天发动机和汽车底盘 cad",
            "poster": "/cases/sage/thumbnails/chassis.jpg"
          }
        ]
      },
      {
        "title": "科研分析",
        "description": "",
        "src": "/cases/sage/microscopy.mp4",
        "medias": [
          {
            "type": "video",
            "src": "/cases/sage/microscopy.mp4",
            "label": "显微图分析",
            "description": "从荧光显微图出发，在 Fiji 中调整分割阈值、分离粘连细胞核，将轮廓叠回原图检查，并导出 ROI 与测量结果，便于复核和后续分析。",
            "caption": "在 Fiji 软件中分割显微图中的生物细胞核，检查相邻区域，并保存可复核的轮廓与测量结果。",
            "poster": "/cases/sage/thumbnails/microscopy.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/eeg-v2.mp4",
            "label": "脑电信号处理",
            "description": "在 EEGLAB 中结合独立成分的时间曲线、头皮分布与频谱特征，识别并移除眨眼相关成分。模型在同一时间窗、同一幅值尺度下比较处理前后的波形，复查其他片段，并保存处理后的数据、成分记录与对比图。",
            "caption": "在 EEGLAB 中识别并移除眨眼相关成分，对比验证伪迹减弱效果，并保存可复核的处理结果。",
            "poster": "/cases/sage/thumbnails/eeg-v2.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/satellite.mp4",
            "label": "卫星影像分析",
            "description": "在 QGIS 中对照两期卫星影像，利用多光谱数据提取鄱阳湖候选水域，将结果叠回原图检查浅水、湿滩与岸线边界。模型在共同有效的研究区内统计水域面积变化，导出变化地图、面积表和可重新打开的 QGIS 工程。",
            "caption": "对比两期鄱阳湖卫星影像，在 QGIS 中定位水域变化、提取并复核水体边界，导出变化地图与面积统计。",
            "poster": "/cases/sage/thumbnails/satellite.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/scientific-understanding.mp4",
            "poster": "/cases/sage/thumbnails/scientific-understanding.jpg",
            "label": "科学多模态理解",
            "description": "从 RNA 序列与晶体结构出发，模型结合自然语言问题提取科学特征，识别 RNA 类型并解释其生物学作用，依据原子的空间排布估计晶体形成能，展示从科学数据中寻找依据的推理过程。",
            "caption": "结合 RNA 序列与晶体结构回答科学问题，展示序列识别与形成能预测的推理过程。"
          }
        ]
      },
      {
        "title": "科学交互可视化",
        "description": "",
        "src": "/cases/sage/light-memory.html",
        "medias": [
          {
            "description": "围绕晶体量子存储中的效率损失，模型检索原始文献、提取实验参数，并通过参数扫描比较腔耦合、原子失步与损耗的影响。交互页面可调节反射率、吸收强度和存储时间，观察光脉冲与回波的变化，并追溯对应的文献与研究记录。",
            "label": "光的记忆",
            "src": "/cases/sage/light-memory.html",
            "type": "iframe",
            "caption": "将腔增强原子频率梳量子存储的科学deep research问题转化为可交互的html页面，交互过程中显示机制来源文献",
            "poster": "/cases/sage/thumbnails/light-memory.jpg",
            "designW": 1280,
            "designH": 850
          },
          {
            "type": "iframe",
            "src": "/cases/sage/crystal-structures.html",
            "label": "晶体结构可视化",
            "poster": "/cases/sage/thumbnails/crystal-structures.jpg",
            "designW": 1280,
            "designH": 850,
            "description": "模型从化学式出发，结合晶体学知识推演空间群、计算原子坐标并构建配位多面体，生成可旋转、缩放的三维交互页面。通过材质、辉光和滚动叙事呈现结构细节，让候选晶体从数据条目变成可直观探索的立体对象，帮助研究者理解和筛选新材料。",
            "caption": "将科学描述转为可交互的三维晶体，帮助研究者直观理解和筛选 AI 预测的候选材料。"
          }
        ]
      }
    ],
    "ending": [
      "Sage 2.1 Flash 面向科学推理与智能体任务执行，支持结合科学数据、检索、编程与专业软件开展分析。",
      "欢迎通过 API 体验模型能力，探索其在科研数据处理、专业软件操作与多步任务执行中的应用。"
    ],
    "api": "试用 Sage 2.1 Flash API →"
  },
  "en": {
    "title": "Sage 2.1 Flash | Explore through reasoning. Verify through action.",
    "opening": [
      "Today, we introduce **Sage 2.1 Flash**, a frontier scientific multimodal agent model for demanding scientific research. Built on a **320-billion-parameter MoE architecture**, it combines scientific multimodal understanding with general agent capabilities, supporting scientific deep research, scientific programming and the operation of professional research software.",
      "Sage 2.1 Flash incorporates more than ten types of scientific input into a unified model, including molecular graphs, crystal structures, protein sequences and three-dimensional structures, DNA and RNA sequences, spectra, mass spectra, X-ray diffraction, electrocardiograms, electroencephalograms and light curves. Large-scale training in verifiable environments strengthens its capabilities in search, programming, tool use and multistep task execution. Through visual feedback, the model can check its judgments against software states and intermediate results, adjust its strategy and advance complex tasks in professional research environments."
    ],
    "intro": "Scientific research requires repeated analysis, operation and inspection across data, code and professional tools. The following demonstrations show how Sage 2.1 Flash processes scientific data, operates professional software and uses intermediate results to adjust its execution, producing outputs that researchers can review.",
    "cases": [
      {
        "title": "CT Reconstruction",
        "description": "From 12,487 CT images with mixed sources, shuffled order and inconsistent orientations, the model identifies 139 slices from a single scan, corrects their orientation and restores the sequence. It revises its ordering strategy based on consistency checks, reconstructs three-dimensional bony structures in 3D Slicer, and returns to the source slices to verify local details.",
        "label": "Video Demo | CT Reconstruction",
        "src": "/cases/sage/ct.mp4",
        "caption": "Identify 139 target slices from a single scan among 12,487 mixed CT images, restore their order, and reconstruct an interactive 3D skeleton in 3D Slicer.",
        "poster": "/cases/sage/thumbnails/ct.jpg"
      },
      {
        "title": "3D Modeling",
        "description": "Using reference images, the model builds architectural, aerospace engine and truck chassis models in Blender and CAD software. It reviews the results through render previews or assembly checks and delivers editable models and presentation videos.",
        "src": "/cases/sage/architecture.mp4",
        "label": "",
        "medias": [
          {
            "type": "video",
            "src": "/cases/sage/architecture.mp4",
            "label": "Architecture",
            "description": "Using multi-view reference images of the Pujiang building, the model creates a 3D model, materials, lighting and camera animation in Blender, delivering a presentation video and an editable project.",
            "caption": "Use multi-view reference images of the Pujiang building to construct a 3D building, materials, lighting and camera animation in Blender, delivering a presentation video and an editable project.",
            "poster": "/cases/sage/thumbnails/architecture.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/engine.mp4",
            "label": "Aerospace Engine",
            "description": "Using reference images, the model identifies the overall engine configuration, external contours and component layout. It completes parametric modeling and assembly in CAD software, checks interference between pairs of parts, and delivers an editable model and rendered images for structural review and subsequent design iterations.",
            "caption": "Build industrial aerospace engine and truck chassis CAD models from reference images.",
            "poster": "/cases/sage/thumbnails/engine.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/chassis.mp4",
            "label": "Truck Chassis",
            "description": "The model builds a parametric truck chassis from reference images, assembles the frame, suspension and powertrain, checks interference, and exports a STEP assembly, bill of materials and rendered views.",
            "caption": "Build industrial aerospace engine and truck chassis CAD models from reference images.",
            "poster": "/cases/sage/thumbnails/chassis.jpg"
          }
        ]
      },
      {
        "title": "Scientific Analysis",
        "description": "",
        "src": "/cases/sage/microscopy.mp4",
        "medias": [
          {
            "type": "video",
            "src": "/cases/sage/microscopy.mp4",
            "label": "Microscopy Analysis",
            "description": "Starting from a fluorescence microscopy image, the model adjusts segmentation thresholds in Fiji, separates touching nuclei and overlays the contours on the source image for inspection. It exports ROIs and measurements for review and further analysis.",
            "caption": "Segment cell nuclei in a microscopy image using Fiji, inspect adjacent regions, and save reviewable contours and measurements.",
            "poster": "/cases/sage/thumbnails/microscopy.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/eeg-v2.mp4",
            "label": "EEG Signal Processing",
            "description": "In EEGLAB, the model combines independent-component time courses, scalp distributions and spectral features to identify and remove blink-related components. It compares waveforms before and after processing within the same time window and amplitude scale, reviews additional segments, and saves the processed data, component records and comparison figures.",
            "caption": "Identify and remove blink-related components in EEGLAB, compare the results to verify artifact reduction, and save reviewable outputs.",
            "poster": "/cases/sage/thumbnails/eeg-v2.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/satellite.mp4",
            "label": "Satellite Imagery Analysis",
            "description": "In QGIS, the model compares two satellite observations and extracts candidate water regions of Poyang Lake from multispectral data. It overlays the results on the original imagery to inspect shallow water, wet sediment and shoreline boundaries. Within the study area valid in both observations, it measures changes in water area and exports a change map, an area table and a QGIS project that can be reopened.",
            "caption": "Compare two satellite observations of Poyang Lake in QGIS, locate changes in water area, extract and review water boundaries, and export a change map and area statistics.",
            "poster": "/cases/sage/thumbnails/satellite.jpg"
          },
          {
            "type": "video",
            "src": "/cases/sage/scientific-understanding.mp4",
            "poster": "/cases/sage/thumbnails/scientific-understanding.jpg",
            "label": "Scientific Multimodal Understanding",
            "description": "Given RNA sequences and crystal structures, the model combines scientific features with natural-language questions. It identifies the RNA type and explains its biological role, then estimates crystal formation energy from atomic arrangements, showing how scientific data informs its reasoning.",
            "caption": "Answer scientific questions from RNA sequences and crystal structures, illustrating reasoning for sequence identification and formation-energy prediction."
          }
        ]
      },
      {
        "title": "Interactive Scientific Visualization",
        "description": "",
        "src": "/cases/sage/light-memory.html",
        "medias": [
          {
            "description": "The model investigates efficiency losses in crystal quantum memories by reviewing primary papers, extracting experimental parameters and comparing cavity coupling, atomic dephasing and losses through parameter sweeps. The interactive page lets visitors adjust reflectivity, absorption and storage time, observe pulses and echoes, and trace the evidence to papers and research records.",
            "label": "The Memory of Light",
            "src": "/cases/sage/light-memory.html",
            "type": "iframe",
            "caption": "Turn a scientific deep research question about cavity-enhanced atomic frequency comb quantum memory into an interactive HTML page that presents source literature during exploration.",
            "poster": "/cases/sage/thumbnails/light-memory.jpg",
            "designW": 1280,
            "designH": 850
          },
          {
            "type": "iframe",
            "src": "/cases/sage/crystal-structures.html",
            "label": "Crystal Structure Visualization",
            "poster": "/cases/sage/thumbnails/crystal-structures.jpg",
            "designW": 1280,
            "designH": 850,
            "description": "Starting from a chemical formula, the model uses crystallographic knowledge to infer space groups, calculate atomic coordinates and construct coordination polyhedra. It creates an interactive 3D page with rotation, zoom, physical materials, glow and scroll-driven views, turning candidate crystals into structures that researchers can explore and assess.",
            "caption": "Turn scientific descriptions into interactive 3D crystals, helping researchers understand and assess AI-predicted candidate materials."
          }
        ]
      }
    ],
    "ending": [
      "Sage 2.1 Flash is designed for scientific reasoning and agentic task execution, supporting analysis that combines scientific data, retrieval, programming and professional software.",
      "Try the model through its API and explore its applications in research data processing, professional software operation and multistep task execution."
    ],
    "api": "Try the Sage 2.1 Flash API →"
  }
}
;
function SageCase({entry:c,id}){
 const [selected,setSelected]=q.useState(0);const host=q.useRef(null);const tabs=q.useRef([]);
 const media={designW:1280,designH:850,...(c.medias?c.medias[selected]:{...c,type:c.type||'video'})};
 const select=index=>{host.current?.querySelectorAll('video').forEach(v=>v.pause());setSelected(index);};
 const onKey=(event,index)=>{let next;if(event.key==='ArrowRight')next=(index+1)%c.medias.length;else if(event.key==='ArrowLeft')next=(index+c.medias.length-1)%c.medias.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=c.medias.length-1;else return;event.preventDefault();select(next);tabs.current[next]?.focus();};
 return x.jsxs('article',{className:'sage-source-case',id,ref:host,children:[
  x.jsxs('div',{className:'read',children:[x.jsx('h3',{className:'h case__title',children:c.title}),x.jsx('p',{className:'p',children:c.description||media.description})]}),
  x.jsxs('figure',{className:'sage-source-media',children:[
   x.jsx('div',{id:id+'-panel',role:c.medias?'tabpanel':undefined,'aria-labelledby':c.medias?id+'-tab-'+selected:undefined,children:media.type==='video'?x.jsx('video',{className:'case__video',src:media.src,poster:media.poster,controls:true,preload:'metadata',playsInline:true,muted:true,'aria-label':media.label||c.title},media.src):x.jsx(oc,{media,title:media.label||c.title},media.src)}),
   x.jsx('figcaption',{className:'sage-source-caption',children:media.caption}),
   c.medias&&x.jsx('div',{className:'sage-thumbnail-tabs',style:{'--sage-tab-count':c.medias.length},role:'tablist','aria-label':c.title,children:c.medias.map((m,i)=>x.jsxs('button',{id:id+'-tab-'+i,ref:el=>tabs.current[i]=el,type:'button',role:'tab',tabIndex:selected===i?0:-1,'aria-selected':selected===i,'aria-controls':id+'-panel',className:'sage-thumbnail-tab '+(selected===i?'is-active':''),onClick:()=>select(i),onKeyDown:e=>onKey(e,i),children:[x.jsx('img',{src:m.poster,alt:'',width:640,height:360,loading:'lazy'}),x.jsx('span',{children:m.label})]},m.src))})
  ]})
 ]});
}
function SageArticle(){
 const {language}=q.useContext(SiteLanguageContext);const copy=sageArticle[language];const zh=language==='zh';
 const paragraph=(text,key)=>x.jsx('p',{className:'p',dangerouslySetInnerHTML:{__html:H.parseInline(text)}},key);
 return x.jsxs('main',{className:'article sage-source-article',children:[
  x.jsxs('section',{id:'overview',className:'read','data-toc':zh?'总览':'Overview',children:[x.jsx('h2',{className:'h',children:copy.title}),...copy.opening.map(paragraph)]}),
  x.jsx(SageOverviewChart,{}),
  x.jsxs('section',{id:'cases','data-toc':'Demo',children:[
   x.jsx('header',{className:'read sage-demo-heading',children:x.jsx('h2',{className:'h',children:'Demo'})}),
   x.jsx('div',{className:'read sage-source-intro',children:paragraph(copy.intro)}),
   ...copy.cases.map((c,i)=>x.jsx(SageCase,{entry:c,id:'demo-'+i},i)),
   x.jsxs('div',{className:'read sage-source-ending',children:[...copy.ending.map(paragraph),x.jsx('a',{href:'https://discovery.intern-ai.org.cn/',target:'_blank',rel:'noreferrer',children:copy.api})]})
  ]}),x.jsx(SageEvaluation,{})
 ]});
}
function SageOverviewChart(){const {language}=q.useContext(SiteLanguageContext);return x.jsxs('figure',{className:'sage-overview-chart',children:[x.jsx('img',{src:'/cases/sage/benchmarks.svg?v=37a62ce164',alt:language==='zh'?'Sage 2.1 Flash 与五个基线模型的十五项评测结果对比':'Sage 2.1 Flash and five baselines on 15 benchmarks',width:1440,height:741.924}),x.jsx('figcaption',{className:'sage-chart-caption',children:sageEvaluation.chartIntro[language]})]})}
function SageEvaluation(){
 const {language}=q.useContext(SiteLanguageContext);const zh=language==='zh';
 const external=c=>sageEvaluation.externalColumns.includes(c);
 const firstExternal=sageEvaluation.externalColumns[0];
 const rowNodes=sageEvaluation.rows.flatMap((row,r)=>{
  const group=sageEvaluation.groups.find(g=>g.start===r);
  const nodes=group?[x.jsx('tr',{className:'sage-evaluation-group',children:x.jsx('th',{colSpan:sageEvaluation.columns.length,scope:'colgroup',children:group[language]})},'group-'+r)]:[];
  nodes.push(x.jsx('tr',{'data-benchmark':row[0],children:row.map((v,c)=>x.jsx(c===0?'th':'td',{scope:c===0?'row':undefined,className:[c===1?'sage-score':'',sageEvaluation.best[r].includes(c)?'sage-best':'',external(c)?'sage-external':'',c===firstExternal?'sage-external-first':''].filter(Boolean).join(' ')||undefined,'data-model':c>0?sageEvaluation.columns[c]:undefined,children:v},c))},row[0]));return nodes;
 });
 return x.jsxs('section',{className:'sage-evaluation',id:'evaluation','data-toc':zh?'评测结果':'Evaluation',children:[
  x.jsx('div',{className:'read',children:x.jsx('h2',{className:'h',children:zh?'完整评测结果':'Full Evaluation Results'})}),
  x.jsx('div',{className:'sage-table-scroll',children:x.jsxs('table',{className:'sage-table',children:[
   x.jsx('thead',{children:x.jsx('tr',{children:sageEvaluation.columns.map((c,i)=>x.jsxs('th',{scope:'col',className:[external(i)?'sage-external':'',i===firstExternal?'sage-external-first':''].filter(Boolean).join(' ')||undefined,children:[i===0?(zh?'评测项目':'Benchmark'):c,external(i)&&x.jsx('span',{className:'sage-reference-label',children:zh?'引用成绩':'Reference'})]},i))})}),
   x.jsx('tbody',{children:rowNodes})
  ]})}),
  x.jsxs('div',{className:'sage-methodology read',children:[x.jsx('h3',{children:zh?'评测设定':'Evaluation settings'}),x.jsx('ol',{children:sageEvaluation.notes[language].map(([name,note],i)=>x.jsxs('li',{children:[x.jsx('strong',{children:name+' — '}),note]},i))})]})
 ]});
}
function P0({hero={}}) {
  const {language} = q.useContext(SiteLanguageContext);
  const zh = language === 'zh';
  return x.jsxs('section', {className:'sage-hero',id:'top',children:[
    x.jsxs('div',{className:'sage-hero__composition',children:[
    x.jsx('div',{className:'sage-logo-drawing','aria-hidden':true,dangerouslySetInnerHTML:{__html:sageLogoSvg}}),
    x.jsxs('div',{className:'sage-hero__copy',children:[
      x.jsx('h1',{className:'sage-title',children:'Sage 2.1 Flash'}),
      x.jsx('p',{className:'sage-tagline',children:zh?'以推理探索，以行动求证':'Explore through reasoning. Verify through action.'}),
      x.jsx('p',{className:'sage-description',children:zh?'面向高难度科学研究的前沿科学多模态智能体模型。':'A frontier scientific multimodal agent model for demanding research.'}),
      x.jsxs('div',{className:'sage-actions',children:[x.jsxs('a',{className:'sage-button',href:'#cases',children:[zh?'探索能力与案例':'Explore the demos',x.jsx('span',{'aria-hidden':true,children:'↗'})]}),x.jsx('a',{className:'sage-link',href:'https://discovery.intern-ai.org.cn/',target:'_blank',rel:'noreferrer',children:zh?'体验 API ↗':'Try the API ↗'})]})
    ]}),
    ]}),
  ]});
}
function Zr(e={}){const t=q.useRef(null),[n,r]=q.useState(!1);return q.useEffect(()=>{const i=t.current;if(!i)return;const l=new IntersectionObserver(([s])=>{s.isIntersecting&&(r(!0),l.unobserve(i))},{threshold:.15,rootMargin:"0px 0px -8% 0px",...e});return l.observe(i),()=>l.disconnect()},[]),[t,n]}function R0({overview:e}){const[t,n]=Zr();return x.jsx("section",{id:"overview",children:x.jsxs("div",{className:`read reveal ${n?"is-visible":""}`,ref:t,children:[e.kicker&&x.jsx("div",{className:"kicker",children:e.kicker}),x.jsx("h2",{className:"h",dangerouslySetInnerHTML:{__html:e.title}}),x.jsx("p",{className:"lede",style:{marginTop:20},dangerouslySetInnerHTML:{__html:e.lede}}),e.body.map((r,i)=>x.jsx("p",{className:"p",style:{marginTop:i===0?22:void 0},dangerouslySetInnerHTML:{__html:r}},i))]})})}function D0({src:e,title:t,designW:n=1920,designH:r=1080,priority:i,onLoad:l}){const s=q.useRef(null),[o,a]=q.useState(null);return q.useEffect(()=>{const u=s.current;if(!u)return;let c=0;const h=()=>{c||(c=requestAnimationFrame(()=>{c=0;const f=u.clientWidth/n;a(d=>d&&Math.abs(d-f)<.002?d:f)}))},p=new ResizeObserver(h);return p.observe(u),h(),()=>{c&&cancelAnimationFrame(c),p.disconnect()}},[n]),x.jsx("div",{className:"embed",ref:s,style:{aspectRatio:`${n} / ${r}`},children:i!==!1&&o!=null&&x.jsx("iframe",{className:"embed__frame",src:e,title:t,loading:"eager",allow:"fullscreen",allowFullScreen:!0,onLoad:l,style:{width:n,height:r,transform:`scale(${o})`}})})}function oc({ media: e, title: t, active: n = true }) {
  const siteLabels = useSiteLabels();
  const [i, l] = q.useState(false);
  const [pseudoFullscreen, setPseudoFullscreen] = q.useState(false);
  const [nativeFullscreen, setNativeFullscreen] = q.useState(false);
  const hostRef = q.useRef(null);
  const preventContextMenu = event => event.preventDefault();
  const videoPlayback =
    typeof window !== "undefined"
      ? window.__atriaVideoPlayback || (window.__atriaVideoPlayback = new Map())
      : new Map();
  const active = n && e.priority !== false;
  const isShowcase = ["presentation-showcase.html", "productivity-showcase.html"].some(src =>
    (e.src || "").includes(src),
  );
  const source = e.src || "";
  const suppressOuterFullscreen =
    isShowcase ||
    (e == null ? void 0 : e.type) === "pdf" ||
    source.includes("/cases/result");
  const demoMatch = [
    ["/cases/ml-coding-en.html", "ml-coding-en"],
    ["/cases/ml-coding.html", "ml-coding"],
    ["/cases/deepresearch_en.html", "deepresearch-en"],
    ["/cases/deepresearch.html", "deepresearch"],
    ["/cases/大观园.html", "grand-view-garden"],
    ["/cases/Interior-20260914.html", "interior-design"],
    ["/cases/室内装修.html", "interior-design"],
    ["/cases/terminal_en/index.html", "odyssey-en"],
    ["/cases/terminal_ch/index.html", "odyssey-zh"],
    ["/cases/火灾-en-20260914.html", "fire-escape"],
    ["/cases/火灾逃生教育游戏.html", "fire-escape"],
    ["/cases/SWE-en.html", "swe-en"],
    ["/cases/SWE.html", "swe"],
    ["/cases/minios-interactive/", "minios"],
    ["presentation-showcase.html", "presentation"],
    ["productivity-showcase.html", "productivity"],
    ["atria-dawn-weather.atria-asi.ai", "weather"],
  ].find(entry => source.includes(entry[0]));
  const isEnglish = document.documentElement.lang === "en";
  const demoKind = demoMatch && isEnglish && ["presentation", "productivity"].includes(demoMatch[1])
    ? `${demoMatch[1]}-en`
    : demoMatch
      ? demoMatch[1]
      : null;

  q.useEffect(() => {
    l(false);
  }, [e.src, active]);

  q.useEffect(() => {
    const syncFullscreenState = () => {
      const host = hostRef.current;
      const current = document.fullscreenElement || document.webkitFullscreenElement;
      setNativeFullscreen(Boolean(host && current && (current === host || host.contains(current))));
    };
    document.addEventListener("fullscreenchange", syncFullscreenState);
    document.addEventListener("webkitfullscreenchange", syncFullscreenState);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
      document.removeEventListener("webkitfullscreenchange", syncFullscreenState);
    };
  }, []);

  q.useEffect(() => {
    if (!pseudoFullscreen) return undefined;
    document.body.classList.add("demo-pseudo-fullscreen-open");
    const exitOnEscape = event => {
      if (event.key === "Escape") setPseudoFullscreen(false);
    };
    document.addEventListener("keydown", exitOnEscape);
    return () => {
      document.body.classList.remove("demo-pseudo-fullscreen-open");
      document.removeEventListener("keydown", exitOnEscape);
    };
  }, [pseudoFullscreen]);

  q.useEffect(
    () => () => {
      document.body.classList.remove("demo-pseudo-fullscreen-open");
    },
    [],
  );

  const showcaseObserver = q.useRef(null);
  q.useEffect(() => () => showcaseObserver.current?.disconnect(), [e.src, active]);
  const markLoaded = event => {
    l(true);
    if (!isShowcase || !event?.currentTarget) return;
    const frame = event.currentTarget;
    try {
      const shell = frame.contentDocument?.querySelector(".shell");
      const host = frame.parentElement;
      if (!shell || !host) return;
      const resize = () => { host.style.height = `${Math.ceil(shell.getBoundingClientRect().height) + 2}px`; };
      showcaseObserver.current?.disconnect();
      showcaseObserver.current = new ResizeObserver(resize);
      showcaseObserver.current.observe(shell);
      resize();
    } catch {}
  };
  const rememberVideoPosition = event => {
    const video = event.currentTarget;
    if (source && Number.isFinite(video.currentTime)) videoPlayback.set(source, video.currentTime);
  };
  const restoreVideoPosition = event => {
    const video = event.currentTarget;
    const savedTime = videoPlayback.get(source);
    if (Number.isFinite(savedTime) && savedTime > 0 && savedTime < video.duration - 0.25) {
      video.currentTime = savedTime;
    }
  };
  const isFullscreen = nativeFullscreen || pseudoFullscreen;
  const toggleFullscreen = async event => {
    event.preventDefault();
    event.stopPropagation();
    const host = hostRef.current || event.currentTarget.closest(".demo-fullscreen-host");
    if (!host) return;
    const current = document.fullscreenElement || document.webkitFullscreenElement;
    if (current) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) {
        try {
          await exit.call(document);
        } catch {}
      }
      return;
    }
    if (pseudoFullscreen) {
      setPseudoFullscreen(false);
      return;
    }

    const request = host.requestFullscreen || host.webkitRequestFullscreen;
    if (request) {
      try {
        await request.call(host);
        return;
      } catch {}
    }

    const video = host.querySelector("video");
    const enterVideoFullscreen = video && (video.webkitEnterFullscreen || video.webkitEnterFullScreen);
    if (enterVideoFullscreen) {
      try {
        enterVideoFullscreen.call(video);
        return;
      } catch {}
    }
    setPseudoFullscreen(true);
  };

  const fullscreenButton = () => {
    const label = isFullscreen ? siteLabels.exitFullscreen : siteLabels.fullscreen;
    return x.jsx("button", {
      type: "button",
      className: "demo-fullscreen",
      onClick: toggleFullscreen,
      "aria-label": label,
      "aria-pressed": isFullscreen,
      title: label,
      children: x.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: x.jsx("path", {
          d: isFullscreen
            ? "M9 4v5H4M15 4v5h5M20 15h-5v5M4 15h5v5"
            : "M8 4H4v4M16 4h4v4M20 16v4h-4M8 20H4v-4",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.8,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    });
  };

  const wrapFullscreen = (content, className, style) =>
    x.jsxs("div", {
      ref: hostRef,
      className: `${className} demo-fullscreen-host${isShowcase ? " demo-fullscreen-host--showcase" : ""}${
        pseudoFullscreen ? " is-pseudo-fullscreen" : ""
      }`,
      style,
      "data-demo-kind": demoKind,
      children: suppressOuterFullscreen ? content : [content, fullscreenButton()],
    });

  const iframe = () =>
    active
      ? x.jsx("iframe", {
          className: `case__frame ${i ? "is-loaded" : ""}`,
          src: e.src,
          title: t,
          loading: "eager",
          allow: "fullscreen",
          allowFullScreen: true,
          onLoad: markLoaded,
        })
      : null;

  if ((e == null ? void 0 : e.type) === "video") {
    return wrapFullscreen(x.jsx("video", {
        className: "case__video",
        src: active ? e.src : void 0,
        poster: e.poster || (source.startsWith("/cases/community/") ? source.replace(/\/preview\.mp4(?:\?.*)?$/, source.includes("/hk-sightseeing/") ? "/poster.jpg" : "/poster.webp") : void 0),
        controls: true,
        muted: true,
        defaultMuted: true,
        preload: active ? "metadata" : "none",
        playsInline: true,
        controlsList: "nodownload noplaybackrate noremoteplayback",
        disablePictureInPicture: true,
        disableRemotePlayback: true,
        onLoadedMetadata: restoreVideoPosition,
        onTimeUpdate: rememberVideoPosition,
        onPause: rememberVideoPosition,
        onSeeked: rememberVideoPosition,
        onEnded: () => videoPlayback.delete(source),
        onContextMenu: preventContextMenu,
      }), "figure figure--media demo-reserved-media");
  }
  if ((e == null ? void 0 : e.type) === "image") {
    return wrapFullscreen(
      x.jsx("img", {
        className: "case__image",
        src: e.src,
        alt: e.alt || t,
        loading: "lazy",
        decoding: "async",
        draggable: false,
        onContextMenu: preventContextMenu,
      }),
      "figure figure--media",
    );
  }
  if ((e == null ? void 0 : e.type) === "html") {
    return wrapFullscreen(
      iframe(),
      `figure figure--embed ${i ? "is-loaded" : "is-loading"}`,
      { height: e.height || "76vh" },
    );
  }
  if ((e == null ? void 0 : e.type) === "pdf") {
    return wrapFullscreen(
      active
        ? x.jsx("iframe", {
            className: "case__frame is-loaded",
            src: `${e.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,
            title: t,
            loading: "eager",
            allow: "fullscreen",
            allowFullScreen: true,
            onContextMenu: preventContextMenu,
          })
        : null,
      "figure figure--embed",
      { height: e.height || "82vh" },
    );
  }
  if ((e == null ? void 0 : e.type) === "component") return null;
  if ((e == null ? void 0 : e.type) === "iframe") {
    return wrapFullscreen(
      x.jsx(D0, {
        src: e.src,
        title: t,
        designW: e.designW,
        designH: e.designH,
        priority: active,
        onLoad: markLoaded,
      }),
      `demo-fullscreen-host--scaled ${i ? "is-loaded" : "is-loading"}`,
    );
  }
  return x.jsx("div", {
    className: "figure",
    children: x.jsxs("div", {
      className: "figure__media",
      style: { aspectRatio: "16 / 9" },
      children: [t, siteLabels.mediaPlaceholder],
    }),
  });
}const B0=new Set(["video","image","html","pdf","iframe","component"]);function b0({ c: e }) {
  const siteLabels = useSiteLabels();
  const [caseRef, isVisible] = Zr();
  const [selectedIndex, setSelectedIndex] = q.useState(0);
  const [isNear, setIsNear] = q.useState(false);
  const [visitedVideoTabs, setVisitedVideoTabs] = q.useState(() => new Set([0]));

  q.useEffect(() => {
    const element = caseRef.current;
    if (!element) return undefined;
    let timer = 0;
    let intersects = false;
    const settle = () => {
      clearTimeout(timer);
      if (intersects) timer = setTimeout(() => q.startTransition(() => setIsNear(true)), 520);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersects = entry.isIntersecting;
        if (intersects) settle();
        else {
          clearTimeout(timer);
          setIsNear(false);
          element.querySelectorAll("video").forEach(video => video.pause());
        }
      },
      { rootMargin: "350px 0px", threshold: 0 },
    );
    observer.observe(element);
    window.addEventListener("scroll", settle, { passive: true });
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", settle);
    };
  }, []);

  const medias = e.medias || null;
  const stack = e.stack || null;
  const currentMedia = medias ? medias[selectedIndex] : e.media;
  const mediaType = currentMedia?.type || stack?.[0]?.type;
  const figureClass = B0.has(mediaType) ? "case__figure--video" : "";
  const withPriority = media => ({ ...media, priority: isNear });
  const isVideoTabs = Boolean(medias?.length && medias.every(media => media?.type === "video"));
  const pauseVideos = event => {
    const figure = event.currentTarget.closest("figure");
    figure?.querySelectorAll("video").forEach(video => video.pause());
  };
  const selectTab = (event, index) => {
    pauseVideos(event);
    if (isVideoTabs) {
      setVisitedVideoTabs(previous => {
        if (previous.has(index)) return previous;
        const next = new Set(previous);
        next.add(index);
        return next;
      });
    }
    setSelectedIndex(index);
  };
  const activeMedia = medias ? medias[selectedIndex] : currentMedia;
  const caption = (medias && activeMedia && activeMedia.hint) || e.hint;

  return x.jsxs("div", {
    className: `case reveal ${isVisible ? "is-visible" : ""} ${isNear ? "is-near" : ""}`,
    ref: caseRef,
    children: [
      x.jsxs("div", {
        className: "read case__lead",
        children: [
          x.jsxs("h3", {
            className: "h case__title",
            children: [e.title, e.subtitle && x.jsx("span", { className: "case__subtitle", children: e.subtitle })],
          }),
          x.jsx("p", {
            className: "p",
            style: { marginTop: 12 },
            dangerouslySetInnerHTML: { __html: e.text },
          }),
        ],
      }),
      x.jsxs("figure", {
        className: `case__figure ${figureClass}`,
        children: [
          medias &&
            medias.length > 1 &&
            x.jsx("div", {
              className: "switch",
              role: "tablist",
              children: medias.map((media, index) =>
                x.jsx(
                  "button",
                  {
                    type: "button",
                    role: "tab",
                    "aria-selected": selectedIndex === index,
                    className: `switch__tab ${selectedIndex === index ? "is-active" : ""}`,
                    onClick: event => selectTab(event, index),
                    children: media.label || `${siteLabels.view} ${index + 1}`,
                  },
                  index,
                ),
              ),
            }),
          medias
            ? x.jsx("div", {
                className: "case__panels",
                children: isVideoTabs
                  ? medias.map((media, index) =>
                      visitedVideoTabs.has(index)
                        ? x.jsx(
                            "div",
                            {
                              className: `case__panel ${selectedIndex === index ? "is-active" : ""}`,
                              children: x.jsx(oc, {
                                media: withPriority(media),
                                title: e.title,
                                active: isNear,
                              }),
                            },
                            media.src || index,
                          )
                        : null,
                    )
                  : x.jsx(
                      "div",
                      {
                        className: "case__panel is-active",
                        children: x.jsx(oc, {
                          media: withPriority(medias[selectedIndex]),
                          title: e.title,
                          active: isNear,
                        }),
                      },
                      medias[selectedIndex].src || selectedIndex,
                    ),
              })
            : stack
              ? x.jsx("div", {
                  className: e.row ? "case__row" : void 0,
                  children: stack.map((media, index) =>
                    x.jsx(oc, { media: withPriority(media), title: e.title, active: isNear }, index),
                  ),
                })
              : x.jsx(oc, { media: withPriority(currentMedia), title: e.title, active: isNear }),
          caption && x.jsx("figcaption", { className: "figure__cap", children: caption }),
        ],
      }),
    ],
  });
}function BenchmarkResults({ table: e = {}, notes: t = {} }) {
  const columns = e.columns || [];
  const rows = e.rows || [];
  const orderedNotes = rows
    .map(row => {
      const name = row[0];
      const text = t[name];
      return text ? { name, text } : null;
    })
    .filter(Boolean);
  if (!columns.length || !rows.length) return null;
  return x.jsxs("section", {
    className: "benchmark-results",
    id: "benchmark-results",
    "data-toc": e.title,
    children: [
      e.title && x.jsx("h2", { className: "h benchmark-results__title", children: e.title }),
      x.jsx("div", {
        className: "benchmark-results__scroll",
        children: x.jsxs("table", {
          children: [
            x.jsx("thead", {
              children: x.jsx("tr", {
                children: columns.map((column, index) =>
                  x.jsx("th", { scope: "col", className: index === 1 ? "is-atria" : "", children: column }, index),
                ),
              }),
            }),
            x.jsx("tbody", {
              children: rows.map((row, rowIndex) => {
                const best = Math.max(
                  ...row.slice(1).map(value => {
                    const numeric = Number.parseFloat(value);
                    return Number.isFinite(numeric) ? numeric : -Infinity;
                  }),
                );
                return x.jsx(
                  "tr",
                  {
                    children: row.map((value, columnIndex) => {
                      if (columnIndex === 0) return x.jsx("th", { scope: "row", children: value }, columnIndex);
                      const numeric = Number.parseFloat(value);
                      const isBest = Number.isFinite(numeric) && numeric === best;
                      return x.jsx(
                        "td",
                        {
                          className: [columnIndex === 1 ? "is-atria" : "", isBest ? "is-best" : ""]
                            .filter(Boolean)
                            .join(" "),
                          children: value,
                        },
                        columnIndex,
                      );
                    }),
                  },
                  rowIndex,
                );
              }),
            }),
          ],
        }),
      }),
      orderedNotes.length > 0 &&
        x.jsx("ol", {
          className: "benchmark-results__notes",
          children: orderedNotes.map(note =>
            x.jsxs(
              "li",
              {
                children: [
                  x.jsx("strong", { children: note.name }),
                  x.jsx("span", { dangerouslySetInnerHTML: { __html: Or(note.text) } }),
                ],
              },
              note.name,
            ),
          ),
        }),
    ],
  });
}function U0({themes:e=[]}){const siteLabels=useSiteLabels();return x.jsx("section",{id:"cases",children:e.map((i,l)=>x.jsxs("div",{className:"theme",id:`theme-${l}`,"data-toc":i.num?`${i.num} ${i.en}`:i.name,children:[x.jsxs("div",{className:"read",children:[(i.num||i.en)&&x.jsxs("div",{className:"theme__label",children:[i.num&&x.jsx("span",{className:"theme__num",children:i.num}),i.en&&x.jsx("span",{className:"theme__en",children:i.en})]}),x.jsx("h2",{className:"h theme__name",dangerouslySetInnerHTML:{__html:i.name}}),x.jsx("p",{className:"p theme__intro",dangerouslySetInnerHTML:{__html:i.intro}})]}),i.benchmarkPlaceholder&&x.jsx("div",{className:"benchmark-placeholder","aria-label":siteLabels.benchmarkPlaceholder}),i.media&&x.jsxs("figure",{className:"case__figure case__figure--video theme__figure",children:[x.jsx(oc,{media:i.media,title:i.name}),i.media.hint&&x.jsx("figcaption",{className:"figure__cap",children:i.media.hint})]}),i.cases.map((s,o)=>x.jsx(b0,{c:s},o)),i.outro&&x.jsx("div",{className:"read theme__outro",children:x.jsx("p",{className:"p",dangerouslySetInnerHTML:{__html:i.outro}})})]},l))})}/*! js-yaml 5.4.1 https://github.com/nodeca/js-yaml @license MIT */var b=Symbol("NOT_RESOLVED");function Ee(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(n=>String(n)),representTagName:t.representTagName??(()=>e)}}function ka(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}function Pl(e,t){const n=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(r=>r),carrierIsResult:n,identify:t.identify,represent:t.represent??(r=>r),representTagName:t.representTagName??(()=>e)}}var W0=Ee("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),q0=["","~","null","Null","NULL"],H0=Ee("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>q0.indexOf(e)!==-1?null:b,identify:e=>e===null,represent:()=>"null"}),Q0=Ee("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:b,identify:e=>e===null,represent:()=>"null"}),Y0=["","~","null","Null","NULL"],K0=Ee("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>Y0.indexOf(e)!==-1?null:b,identify:e=>e===null,represent:()=>"null"}),G0=["true","True","TRUE"],X0=["false","False","FALSE"],Z0=Ee("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>G0.indexOf(e)!==-1?!0:X0.indexOf(e)!==-1?!1:b,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),J0=["true"],e1=["false"],t1=Ee("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>J0.indexOf(e)!==-1?!0:e1.indexOf(e)!==-1?!1:b,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),n1=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],r1=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],i1=Ee("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>n1.indexOf(e)!==-1?!0:r1.indexOf(e)!==-1?!1:b,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),l1=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),s1=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function o1(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function a1(e,t){if(t){if(!s1.test(e))return b}else if(!l1.test(e))return b;const n=o1(e);return Number.isFinite(n)?n:b}var Yh=Ee("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:a1,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),u1=new RegExp("^-?(?:0|[1-9][0-9]*)$"),c1=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function f1(e){let t=e,n=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b")?n*parseInt(t.slice(2),2):t.startsWith("0o")?n*parseInt(t.slice(2),8):t.startsWith("0x")?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function h1(e,t){if(t){if(!c1.test(e))return b}else if(!u1.test(e))return b;const n=f1(e);return Number.isFinite(n)?n:b}var d1=Ee("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:h1,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),p1=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function g1(e){let t=e.replace(/_/g,""),n=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(n=-1),t=t.slice(1)),t.startsWith("0b"))return n*parseInt(t.slice(2),2);if(t.startsWith("0x"))return n*parseInt(t.slice(2),16);if(t.includes(":")){let r=0;for(const i of t.split(":"))r=r*60+Number(i);return n*r}return t!=="0"&&t[0]==="0"?n*parseInt(t,8):n*parseInt(t,10)}function m1(e){if(!p1.test(e))return b;const t=g1(e);return Number.isFinite(t)?t:b}var vo=Ee("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:m1,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),y1=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),v1=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function x1(e){if(!y1.test(e))return b;let t=e.toLowerCase();const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const r=n*parseFloat(t);return Number.isFinite(r)||v1.test(e)?r:b}function w1(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Kh=Ee("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:x1,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:w1}),k1=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),S1=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function _1(e,t){if(t){if(!S1.test(e))return b;let r=e.toLowerCase();const i=r[0]==="-"?-1:1;if("+-".includes(r[0])&&(r=r.slice(1)),r===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(r===".nan")return NaN;const l=i*parseFloat(r);return Number.isFinite(l)?l:b}if(!k1.test(e))return b;const n=Number(e);return Number.isFinite(n)?n:b}function E1(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var T1=Ee("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:_1,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:E1}),C1=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),A1=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function N1(e){if(!C1.test(e))return b;let t=e.toLowerCase().replace(/_/g,"");const n=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let r=0;if(t.includes(":")){for(const i of t.split(":"))r=r*60+Number(i);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||A1.test(e)?r:b}function L1(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var xo=Ee("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:N1,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:L1}),I1=Ee("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":b,identify:()=>!1}),P1=/^[A-Za-z0-9+/]*={0,2}$/;function R1(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!P1.test(t))return b;const n=atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}function M1(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var O1=Ee("tag:yaml.org,2002:binary",{resolve:R1,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:M1}),$1=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),z1=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ac(e,t,n,r=0,i=0,l=0,s=0){const o=new Date(Date.UTC(e,t,n,r,i,l,s));return o.setUTCFullYear(e,t,n),o}function F1(e){let t=$1.exec(e);if(t===null&&(t=z1.exec(e)),t===null)return b;const n=+t[1],r=+t[2]-1,i=+t[3];if(!t[4]){const c=ac(n,r,i);return c.getUTCFullYear()!==n||c.getUTCMonth()!==r||c.getUTCDate()!==i?b:c}const l=+t[4],s=+t[5],o=+t[6];let a=0;if(l>23||s>59||o>59)return b;if(t[7]){let c=t[7].slice(0,3);for(;c.length<3;)c+="0";a=+c}const u=ac(n,r,i,l,s,o,a);if(u.getUTCFullYear()!==n||u.getUTCMonth()!==r||u.getUTCDate()!==i)return b;if(t[9]){const c=+t[10],h=+(t[11]||0);if(c>23||h>59)return b;const f=(c*60+h)*6e4;u.setTime(u.getTime()-(t[9]==="-"?-f:f))}return u}var j1=Ee("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:F1,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),D1=ka("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function Rl(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function uc(e,t){const n={};for(const r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var B1=ka("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";n=t.keys().next().value}else if(Rl(t)){const r=Object.keys(t);if(r.length!==1)return"cannot resolve an ordered map item";n=r[0]}else return"cannot resolve an ordered map item";return e.seen.has(n)?"duplicate key in ordered map":(e.seen.add(n),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),b1=ka("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const n=t,r=Object.keys(n);return r.length!==1?"cannot resolve a pairs item":(e.push([r[0],n[r[0]]]),"")},identify:()=>!1}),U1=Pl("tag:yaml.org,2002:map",{create:()=>({}),identify:Rl,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const r=String(t);return r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}}),V1=Pl("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const n of e)t.set(n,null);return t},addPair:(e,t,n)=>n!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function W1(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function q1(){return{scalar:[],sequence:[],mapping:[]}}function H1(e){const t=[];for(const n of e){let r=t.length;for(let i=0;i<t.length;i++){const l=t[i];if(l.nodeKind===n.nodeKind&&l.tagName===n.tagName&&l.matchByTagPrefix===n.matchByTagPrefix){r=i;break}}t[r]=n}return t}var Ml=class Gh{constructor(t){$(this,"tags");$(this,"implicitScalarTags");$(this,"implicitScalarByFirstChar");$(this,"implicitScalarAnyFirstChar");$(this,"defaultScalarTag");$(this,"defaultSequenceTag");$(this,"defaultMappingTag");$(this,"exact");$(this,"prefix");const n=H1(t),r=[],i=W1(),l=q1();for(const c of n){if(c.nodeKind==="scalar"&&c.implicit){if(c.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");r.push(c)}switch(c.nodeKind){case"scalar":c.matchByTagPrefix?l.scalar.push(c):i.scalar[c.tagName]=c;break;case"sequence":c.matchByTagPrefix?l.sequence.push(c):i.sequence[c.tagName]=c;break;case"mapping":c.matchByTagPrefix?l.mapping.push(c):i.mapping[c.tagName]=c;break}}const s=r.filter(c=>c.implicitFirstChars===null),o=new Set;for(const c of r)if(c.implicitFirstChars!==null)for(const h of c.implicitFirstChars)o.add(h);const a=new Map;for(const c of o)a.set(c,r.filter(h=>h.implicitFirstChars===null||h.implicitFirstChars.indexOf(c)!==-1));const u=i.scalar["tag:yaml.org,2002:str"];if(!u)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=n,this.implicitScalarTags=r,this.implicitScalarByFirstChar=a,this.implicitScalarAnyFirstChar=s,this.defaultScalarTag=u,this.defaultSequenceTag=i.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=i.mapping["tag:yaml.org,2002:map"],this.exact=i,this.prefix=l}lookupScalarTag(t){const n=this.exact.scalar[t];if(n)return n;for(const r of this.prefix.scalar)if(t.startsWith(r.tagName))return r}lookupSequenceTag(t){const n=this.exact.sequence[t];if(n)return n;for(const r of this.prefix.sequence)if(t.startsWith(r.tagName))return r}lookupMappingTag(t){const n=this.exact.mapping[t];if(n)return n;for(const r of this.prefix.mapping)if(t.startsWith(r.tagName))return r}resolveImplicitScalarTag(t){const n=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const i of n){const l=i.resolve(t,!1,i.tagName);if(l!==b)return{value:l,tag:i}}const r=this.defaultScalarTag;return{value:r.resolve(t,!1,r.tagName),tag:r}}withTags(...t){let n=[];for(const r of t)n=n.concat(r);return new Gh([...this.tags,...n])}},Sa=new Ml([W0,D1,U1]);new Ml([...Sa.tags,Q0,t1,d1,T1]);var Q1=new Ml([...Sa.tags,H0,Z0,Yh,Kh]),Y1=new Ml([...Sa.tags,K0,i1,vo,xo,j1,I1,O1,B1,b1,V1]);Y1.withTags({...vo,resolve:(e,t,n)=>{const r=vo.resolve(e,t,n);return r===b?Yh.resolve(e,t,n):r}},{...xo,resolve:(e,t,n)=>{const r=xo.resolve(e,t,n);return r===b?Kh.resolve(e,t,n):r}});Pl("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||Rl(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,n=e;for(const r of Object.keys(n))t.set(r,n[r]);return t}});function cc(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let n=0;n<t.length;n++){if(Array.isArray(t[n]))return null;typeof t[n]=="object"&&Object.prototype.toString.call(t[n])==="[object Object]"&&(t[n]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}Pl("tag:yaml.org,2002:map",{create:()=>({}),identify:Rl,represent:e=>{const t=new Map;for(const n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{const r=cc(t);return r===null?"nested arrays are not supported inside keys":(r==="__proto__"?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,"")},has:(e,t)=>{const n=cc(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{const n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var K1={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function ps(e,t,n,r,i){let l="",s="";const o=Math.floor(i/2)-1;return r-t>o&&(l=" ... ",t=r-o+l.length),n-r>o&&(s=" ...",n=r+o-s.length),{str:l+e.slice(t,n).replace(/\t/g,"→")+s,pos:r-t+l.length}}function gs(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function G1(e,t){if(!e.buffer)return null;const n={...K1,...t},r=/\r?\n|\r|\0/g,i=[0],l=[];let s,o=-1;for(;s=r.exec(e.buffer);)l.push(s.index),i.push(s.index+s[0].length),e.position<=s.index&&o<0&&(o=i.length-2);o<0&&(o=i.length-1);let a="";const u=Math.min(e.line+n.linesAfter,l.length).toString().length,c=n.maxLength-(n.indent+u+3);for(let f=1;f<=n.linesBefore&&!(o-f<0);f++){const d=ps(e.buffer,i[o-f],l[o-f],e.position-(i[o]-i[o-f]),c);a=`${" ".repeat(n.indent)}${gs((e.line-f+1).toString(),u)} | ${d.str}
${a}`}const h=ps(e.buffer,i[o],l[o],e.position,c);a+=`${" ".repeat(n.indent)}${gs((e.line+1).toString(),u)} | ${h.str}
`,a+=`${"-".repeat(n.indent+u+3+h.pos)}^
`;for(let f=1;f<=n.linesAfter&&!(o+f>=l.length);f++){const d=ps(e.buffer,i[o+f],l[o+f],e.position-(i[o]-i[o+f]),c);a+=`${" ".repeat(n.indent)}${gs((e.line+f+1).toString(),u)} | ${d.str}
`}return a.replace(/\n$/,"")}function fc(e,t){let n="";return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`

${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var dn=class Xh extends Error{constructor(n,r){super();$(this,"reason");$(this,"mark");this.name="YAMLException",this.reason=n,this.mark=r,this.message=fc(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(n){return`${this.name}: ${fc(this,n)}`}static throwAt(n,r,i,l=""){let s=0,o=0;for(let u=0;u<r;u++){const c=n.charCodeAt(u);c===10?(s++,o=u+1):c===13&&(s++,n.charCodeAt(u+1)===10&&u++,o=u+1)}const a={name:l,buffer:n,position:r,line:s,column:r-o};throw a.snippet=G1(a),new Xh(i,a)}},we={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},V={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},er={BLOCK:1,FLOW:2},at={CLIP:1,STRIP:2,KEEP:3},X1=-1;function hc(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var Zh=new Array(256),Jh=new Array(256);for(let e=0;e<256;e++)Zh[e]=hc(e)?1:0,Jh[e]=hc(e);function Z1(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function J1(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function ey(e){return e===120?2:e===117?4:8}function ul(e,t,n){let r=0;for(;t<n;){const i=e.charCodeAt(t);if(i===10)r++,t++;else if(i===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(i===32||i===9)t++;else break}return{position:t,breaks:r}}function _a(e){return e===1?" ":`
`.repeat(e-1)}function ty(e,t,n){let r="",i=t,l=t,s=t;for(;i<n;){const o=e.charCodeAt(i);if(o===10||o===13){r+=e.slice(l,s);const a=ul(e,i,n);r+=_a(a.breaks),i=l=s=a.position}else i++,o!==32&&o!==9&&(s=i)}return r+e.slice(l,s)}function ny(e,t,n){let r="",i=t,l=t,s=t;for(;i<n;){const o=e.charCodeAt(i);if(o===39)r+=e.slice(l,i)+"'",i+=2,l=s=i;else if(o===10||o===13){r+=e.slice(l,s);const a=ul(e,i,n);r+=_a(a.breaks),i=l=s=a.position}else i++,o!==32&&o!==9&&(s=i)}return r+e.slice(l,n)}function ry(e,t,n){let r="",i=t,l=t,s=t;for(;i<n;){const o=e.charCodeAt(i);if(o===92){r+=e.slice(l,i),i++;const a=e.charCodeAt(i);if(a===10||a===13)i=ul(e,i,n).position;else if(a<256&&Zh[a])r+=Jh[a],i++;else{let u=ey(a),c=0;for(;u>0;u--){i++;const h=J1(e.charCodeAt(i));c=(c<<4)+h}r+=Z1(c),i++}l=s=i}else if(o===10||o===13){r+=e.slice(l,s);const a=ul(e,i,n);r+=_a(a.breaks),i=l=s=a.position}else i++,o!==32&&o!==9&&(s=i)}return r+e.slice(l,n)}function dc(e,t,n,r,i,l){const s=r<0?0:r,o=e.slice(t,n).replace(/\r\n?/g,`
`),a=o===""?[]:(o.endsWith(`
`)?o.slice(0,-1):o).split(`
`);let u="",c=!1,h=0,f=!1;for(const d of a){let p=0;for(;p<s&&d.charCodeAt(p)===32;)p++;if(r<0||p>=d.length){h++;continue}const v=d.slice(s),k=v.charCodeAt(0);l?k===32||k===9?(f=!0,u+=`
`.repeat(c?1+h:h)):f?(f=!1,u+=`
`.repeat(h+1)):h===0?c&&(u+=" "):u+=`
`.repeat(h):u+=`
`.repeat(c?1+h:h),u+=v,c=!0,h=0}return i===at.KEEP?u+=`
`.repeat(c?1+h:h):i!==at.STRIP&&c&&(u+=`
`),u}function iy(e,t){if(t.valueStart===X1)return"";const{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case V.SINGLE_QUOTED:return ny(e,n,r);case V.DOUBLE_QUOTED:return ry(e,n,r);case V.LITERAL_BLOCK:return dc(e,n,r,t.indent,t.chomping,!1);case V.FOLDED_BLOCK:return dc(e,n,r,t.indent,t.chomping,!0);default:return ty(e,n,r)}}var ly=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"});function ed(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return decodeURIComponent(e.slice(2,-1));const n=e.indexOf("!",1),r=n===-1?"!":e.slice(0,n+1),i=(t==null?void 0:t[r])??ly[r]??r;return decodeURIComponent(i)+decodeURIComponent(e.slice(r.length))}var Wn=-1,sy="tag:yaml.org,2002:merge",Ea={filename:"",schema:Q1,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function oy(e){return"tagStart"in e&&e.tagStart!==Wn?e.tagStart:"anchorStart"in e&&e.anchorStart!==Wn?e.anchorStart:"valueStart"in e&&e.valueStart!==Wn?e.valueStart:"start"in e?e.start:0}function pe(e,t){dn.throwAt(e.source,e.position,t,e.filename)}function td(e,t,n,r){try{return n.finalize(r)}catch(i){if(i instanceof dn)throw i;dn.throwAt(e.source,t,i instanceof Error?i.message:String(i),e.filename)}}function ay(e,t){const n=iy(e.source,t),r=t.tagStart===Wn?"":e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==""){if(r==="!")return{value:n,tag:i};const l=ed(r,e.tagHandlers),s=e.schema.lookupScalarTag(l);if(s){const a=s.resolve(n,!0,l);return a===b&&pe(e,`cannot resolve a node with !<${l}> explicit tag`),{value:a,tag:s}}const o=e.schema.lookupMappingTag(l)??e.schema.lookupSequenceTag(l);if(o){n!==""&&pe(e,`cannot resolve a node with !<${l}> explicit tag`);const a=o.create(l);return{value:o.carrierIsResult?a:td(e,e.position,o,a),tag:o}}pe(e,`unknown scalar tag !<${l}>`)}return t.style===V.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:i.resolve(n,!1,i.tagName),tag:i}}function pc(e,t,n){const r=t.tagStart===Wn?"":e.source.slice(t.tagStart,t.tagEnd);return r===""||r==="!"?n:ed(r,e.tagHandlers)}function nd(e){return e.nodeKind==="mapping"}function gc(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&pe(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function mc(e,t,n,r){gc(e);for(const i of r.keys(n)){if(gc(e),t.tag.has(t.value,i))continue;const l=t.tag.addPair(t.value,i,r.get(n,i));l&&pe(e,l),t.overridable??(t.overridable=new Set),t.overridable.add(i)}}function uy(e,t,n,r){if(e.position=t.keyPosition,nd(r))mc(e,t,n,r);else if(r.nodeKind==="sequence"&&Array.isArray(n)){n.length>100&&pe(e,"abnormal merge sequence size");for(const i of n){const l=e.nodeTags.get(i);l||pe(e,"cannot merge mappings; the provided source object is unacceptable"),mc(e,t,i,l)}}else pe(e,"cannot merge mappings; the provided source object is unacceptable")}function cy(e,t,n,r,i){var s,o;if(e.position=t.keyPosition,t.keyIsMerge){uy(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!((s=t.overridable)!=null&&s.has(n))&&pe(e,"duplicated mapping key");const l=t.tag.addPair(t.value,n,r);l&&pe(e,l),(o=t.overridable)==null||o.delete(n)}function ms(e,t,n){const r=e.frames[e.frames.length-1];if(r.kind==="document")r.value=t,r.hasValue=!0;else if(r.kind==="sequence"){nd(n)&&e.nodeTags.set(t,n);const i=r.tag.addItem(r.value,t,r.index++);i&&pe(e,i)}else if(r.hasKey){const i=r.key;r.key=void 0,r.hasKey=!1,cy(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0,r.keyIsMerge=n.tagName===sy}function ys(e,t,n,r,i){if(t.anchorStart!==Wn){const l={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),l),l}return null}function fy(e,t){const n={...Ea,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){const r=n.events[n.eventIndex++];switch(n.position=oy(r),r.type){case we.DOCUMENT:n.anchors=new Map,n.nodeTags=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(const i of r.directives)i.kind==="tag"&&(n.tagHandlers[i.handle]=i.prefix);n.frames.push({kind:"document",position:n.position,value:void 0,hasValue:!1});break;case we.SCALAR:{const{value:i,tag:l}=ay(n,r);ys(n,r,i,l,!0),ms(n,i,l);break}case we.SEQUENCE:{const i=pc(n,r,"tag:yaml.org,2002:seq"),l=n.schema.lookupSequenceTag(i);l||pe(n,`unknown sequence tag !<${i}>`);const s=l.create(i),o=ys(n,r,s,l,l.carrierIsResult);n.frames.push({kind:"sequence",position:n.position,value:s,tag:l,anchor:o,index:0});break}case we.MAPPING:{const i=pc(n,r,"tag:yaml.org,2002:map"),l=n.schema.lookupMappingTag(i);l||pe(n,`unknown mapping tag !<${i}>`);const s=l.create(i),o=ys(n,r,s,l,l.carrierIsResult);n.frames.push({kind:"mapping",position:n.position,value:s,tag:l,anchor:o,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case we.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&pe(n,`aliases exceeded maxAliases (${n.maxAliases})`);const i=n.source.slice(r.anchorStart,r.anchorEnd),l=n.anchors.get(i);l||pe(n,`unidentified alias "${i}"`),l.isValueFinal||pe(n,`recursive alias "${i}" is not supported for tag ${l.tag.tagName} because it uses finalize()`),ms(n,l.value,l.tag);break}case we.POP:{const i=n.frames.pop();if(i.kind==="mapping"&&i.hasKey&&(n.position=i.keyPosition,pe(n,"incomplete mapping pair in event stream")),i.kind==="document")n.documents.push(i.value);else{const l=i.tag.carrierIsResult?i.value:td(n,i.position,i.tag,i.value);i.anchor&&(i.anchor.value=l,i.anchor.isValueFinal=!0),ms(n,l,i.tag)}break}}}return n.documents}var U=-1,rd=Object.prototype.hasOwnProperty,tr=1,wo=2,id=3,cl=4,hy=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,dy=/[,\[\]{}]/,ld=/^(?:!|!!|![0-9A-Za-z-]+!)$/,ko=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,sd=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,py=new RegExp(`^(?:${ko})*$`),gy=new RegExp(`^(?:${sd})+$`),my=new RegExp(`^(?:!(?:${ko})*|${sd}(?:${ko})*)$`),Ta={filename:"",maxDepth:100};function yy(e,t,n){e.events.push({type:we.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function od(e,t,n,r,i,l,s){e.events.push({type:we.SEQUENCE,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:l,style:s})}function So(e,t,n,r,i,l,s){e.events.push({type:we.MAPPING,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:l,style:s})}function yc(e,t){e.events.splice(t.eventsLength,0,{type:we.MAPPING,start:t.position,anchorStart:U,anchorEnd:U,tagStart:U,tagEnd:U,style:er.FLOW})}function sr(e,t,n,r,i,l,s,o,a=at.CLIP,u=-1,c=!1){e.events.push({type:we.SCALAR,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:l,tagEnd:s,style:o,chomping:a,indent:u,fast:c})}function vy(e,t,n){e.events.push({type:we.ALIAS,anchorStart:t,anchorEnd:n})}function qn(e){e.events.push({type:we.POP})}function Ce(e){sr(e,U,U,U,U,U,U,V.PLAIN)}function vc(){return{anchorStart:U,anchorEnd:U,tagStart:U,tagEnd:U}}function Hn(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function sn(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function P(e,t){dn.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function ce(e){return e===10||e===13}function pn(e){return e===9||e===32}function rt(e){return pn(e)||ce(e)}function mt(e){return e===0||rt(e)}function gn(e){return e===44||e===91||e===93||e===123||e===125}function xy(e){return e>=48&&e<=57?e-48:-1}function wy(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function ky(e){return e===120?2:e===117?4:e===85?8:0}function Sy(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function fl(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function ke(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||rt(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;pn(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!ce(r)&&r!==0);if(!ce(r))break;for(fl(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function nr(e,t=e.position){const n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){const r=e.input.charCodeAt(t+3);return r===0||rt(r)}return!1}function ad(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Ca(e){if(e.position!==e.lineStart)return!1;if(nr(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=Hn(e);ad(e),ke(e,!0);const n=e.input.charCodeAt(e.position),r=e.position===e.lineStart&&(n===37||n===45&&nr(e));return sn(e,t),r}function xc(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!ce(t);)t=e.input.charCodeAt(++e.position)}function ud(e,t,n){hy.test(e.input.slice(t,n))&&P(e,"the stream contains non-printable characters")}function _y(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==U&&P(e,"duplication of a tag property");const r=e.position;let i=!1,l=!1,s="!",o=e.input.charCodeAt(++e.position);o===60?(i=!0,o=e.input.charCodeAt(++e.position)):o===33&&(l=!0,s="!!",o=e.input.charCodeAt(++e.position));let a=e.position,u;if(i){for(;o!==0&&o!==62;)o=e.input.charCodeAt(++e.position);o!==62&&P(e,"unexpected end of the stream within a verbatim tag"),u=e.input.slice(a,e.position),e.position++}else{for(;o!==0&&!rt(o)&&!(n&&gn(o));)o===33&&(l?P(e,"tag suffix cannot contain exclamation marks"):(s=e.input.slice(a-1,e.position+1),ld.test(s)||P(e,"named tag handle cannot contain such characters"),l=!0,a=e.position+1)),o=e.input.charCodeAt(++e.position);u=e.input.slice(a,e.position),dy.test(u)&&P(e,"tag suffix cannot contain flow indicator characters")}return u&&!(i?py.test(u):gy.test(u))&&P(e,`tag name cannot contain such characters: ${u}`),!i&&s!=="!"&&s!=="!!"&&!rd.call(e.tagHandlers,s)&&P(e,`undeclared tag handle "${s}"`),t.tagStart=r,t.tagEnd=e.position,!0}function Ey(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==U&&P(e,"duplication of an anchor property"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!rt(e.input.charCodeAt(e.position))&&!gn(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&P(e,"name of an anchor node must contain at least one character"),t.anchorStart=n,t.anchorEnd=e.position,!0}function Ty(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==U||t.tagStart!==U)&&P(e,"alias node should not have any properties"),e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!rt(e.input.charCodeAt(e.position))&&!gn(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&P(e,"name of an alias node must contain at least one character"),vy(e,n,e.position),!0}function _o(e,t){ke(e,!1),e.lineIndent<t&&P(e,"deficient indentation")}function Cy(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const l=e.input.charCodeAt(e.position);if(l===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}const s=e.position;return e.position++,sr(e,r,s,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,V.SINGLE_QUOTED,at.CLIP,-1,i),!0}ce(l)?(i=!1,_o(e,t)):e.position===e.lineStart&&nr(e)?P(e,"unexpected end of the document within a single quoted scalar"):l!==9&&l<32?P(e,"expected valid JSON character"):e.position++}P(e,"unexpected end of the stream within a single quoted scalar")}function Ay(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const r=e.position;let i=!0;for(;e.input.charCodeAt(e.position)!==0;){const l=e.input.charCodeAt(e.position);if(l===34){const s=e.position;return e.position++,sr(e,r,s,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,V.DOUBLE_QUOTED,at.CLIP,-1,i),!0}if(l===92){i=!1;const s=e.input.charCodeAt(++e.position);if(ce(s))_o(e,t);else if(Sy(s))e.position++;else{let o=ky(s);for(o===0&&P(e,"unknown escape sequence");o-- >0;)e.position++,wy(e.input.charCodeAt(e.position))<0&&P(e,"expected hexadecimal character");e.position++}}else ce(l)?(i=!1,_o(e,t)):e.position===e.lineStart&&nr(e)?P(e,"unexpected end of the document within a double quoted scalar"):l!==9&&l<32?P(e,"expected valid JSON character"):e.position++}P(e,"unexpected end of the stream within a double quoted scalar")}function Ny(e,t,n){const r=e.input.charCodeAt(e.position);let i=at.CLIP,l=-1,s=!1;if(r!==124&&r!==62)return!1;const o=r===124?V.LITERAL_BLOCK:V.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const d=e.input.charCodeAt(e.position),p=xy(d);if(d===43||d===45)i!==at.CLIP&&P(e,"repeat of a chomping mode identifier"),i=d===43?at.KEEP:at.STRIP,e.position++;else if(p>=0)p===0&&P(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),s&&P(e,"repeat of an indentation width identifier"),l=t+p-1,s=!0,e.position++;else break}let a=!1;for(;pn(e.input.charCodeAt(e.position));)a=!0,e.position++;a&&e.input.charCodeAt(e.position)===35&&xc(e),ce(e.input.charCodeAt(e.position))?fl(e):e.input.charCodeAt(e.position)!==0&&P(e,"a line break is expected");let u=s?l:-1,c=0;const h=e.position;let f=e.position;for(;e.input.charCodeAt(e.position)!==0;){const d=e.position;let p=0;for(;e.input.charCodeAt(d+p)===32;)p++;const v=e.input.charCodeAt(d+p);if(v===0){u>=0?p>u&&(f=d+p):p>0&&(f=d+p);break}if(Ca(e))break;if(!s&&u===-1&&ce(v)&&(c=Math.max(c,p)),!s&&u===-1&&!ce(v)&&(v===9&&p<t&&(e.position=d+p,P(e,"tab characters must not be used in indentation")),p<c&&(e.position=d+p,P(e,"bad indentation of a mapping entry"))),u===-1&&v!==0&&!ce(v)&&p<t){e.lineIndent=p,e.position=d+p;break}!s&&v!==0&&!ce(v)&&u===-1&&(u=p);const k=u===-1?t+1:u;if(v!==0&&!ce(v)&&p<k){e.lineIndent=p,e.position=d+p;break}xc(e),f=e.position,ce(e.input.charCodeAt(e.position))&&(fl(e),f=e.position)}return ud(e,h,f),sr(e,h,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,o,i,u),!0}function Ly(e,t){const n=e.input.charCodeAt(e.position),r=t===tr;if(n===0||rt(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||r&&gn(n))return!1;if(n===63||n===45){const i=e.input.charCodeAt(e.position+1);if(mt(i)||r&&gn(i))return!1}return!0}function Iy(e,t,n,r){if(!Ly(e,n))return!1;const i=e.position;let l=e.position,s=e.input.charCodeAt(e.position);const o=n===tr;let a=!1;for(;s!==0&&!Ca(e);){if(s===58){const u=e.input.charCodeAt(e.position+1);if(mt(u)||o&&gn(u))break}else if(s===35){if(rt(e.input.charCodeAt(e.position-1)))break}else{if(o&&gn(s))break;if(ce(s)){const u=e.position,c=e.line,h=e.lineStart,f=e.lineIndent;if(ke(e,!1),e.lineIndent>=t){a=!0,s=e.input.charCodeAt(e.position);continue}e.position=u,e.line=c,e.lineStart=h,e.lineIndent=f;break}}pn(s)||(l=e.position+1),s=e.input.charCodeAt(++e.position)}return l===i?!1:(ud(e,i,l),sr(e,i,l,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,V.PLAIN,at.CLIP,-1,!a),!0)}function mr(e,t){const n=e.line;ke(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&P(e,"deficient indentation")}function Py(e,t,n){const r=e.input.charCodeAt(e.position),i=r===123,l=e.position;let s=!0;if(r!==91&&r!==123)return!1;const o=i?125:93;for(i?So(e,l,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,er.FLOW):od(e,l,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,er.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){mr(e,t);let a=e.input.charCodeAt(e.position);if(a===o)return e.position++,qn(e),!0;s?a===44&&P(e,"expected the node content, but found ','"):P(e,"missed comma between flow collection entries");let u=!1,c=!1;a===63&&rt(e.input.charCodeAt(e.position+1))&&(u=c=!0,e.position+=1,mr(e,t));const h=e.line,f=Hn(e),d=on(e,t,tr,!1,!0);mr(e,t),a=e.input.charCodeAt(e.position),(i||c||e.line===h)&&a===58?(u=!0,e.position++,mr(e,t),i||yc(e,f),d||Ce(e),on(e,t,tr,!1,!0)||Ce(e),mr(e,t),i||qn(e)):i&&u?(d||Ce(e),Ce(e)):i?Ce(e):u&&(yc(e,f),d||Ce(e),Ce(e),qn(e)),a=e.input.charCodeAt(e.position),a===44?(s=!0,e.position++):s=!1}P(e,"unexpected end of the stream within a flow collection")}function wc(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!mt(e.input.charCodeAt(e.position+1)))return!1;for(od(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,er.BLOCK);e.input.charCodeAt(e.position)===45&&mt(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,P(e,"tab characters must not be used in indentation"));const r=e.line;e.position++;const i=ke(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&mt(e.input.charCodeAt(e.position+1))&&P(e,"bad indentation of a sequence entry"),i&&e.lineIndent<=t?Ce(e):on(e,t,id,!1,!0),ke(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&P(e,"bad indentation of a sequence entry"),e.line===r&&e.input.charCodeAt(e.position)===45&&mt(e.input.charCodeAt(e.position+1))&&P(e,"bad indentation of a sequence entry")}return qn(e),!0}function vs(e,t,n,r){let i=!1,l=!1,s=!1,o=!1;if(e.firstTabInLine!==-1)return!1;let a=e.input.charCodeAt(e.position);for(;a!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,P(e,"tab characters must not be used in indentation"));const u=e.input.charCodeAt(e.position+1),c=e.line;if((a===63||a===58)&&mt(u))s||(So(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,er.BLOCK),s=!0),a===63?(i&&Ce(e),l=!0,i=!0):(i||(Ce(e),l=!0),i=!1),e.position+=1,o=!0;else{i&&(Ce(e),i=!1);const h=Hn(e);if(!on(e,n,wo,!1,!0))break;if(e.line===c){for(a=e.input.charCodeAt(e.position);pn(a);)a=e.input.charCodeAt(++e.position);if(a===58){if(a=e.input.charCodeAt(++e.position),mt(a)||P(e,"a whitespace character is expected after the key-value separator within a block mapping"),!s){for(sn(e,h),So(e,h.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,er.BLOCK),s=!0,on(e,n,wo,!1,!0),a=e.input.charCodeAt(e.position);pn(a);)a=e.input.charCodeAt(++e.position);e.position++}l=!0,i=!1,o=!1}else if(l)P(e,"expected ':' after a mapping key");else return r.anchorStart!==U||r.tagStart!==U?(sn(e,h),!1):!0}else if(l)P(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return r.anchorStart!==U||r.tagStart!==U?(sn(e,h),!1):!0}if(on(e,t,cl,!0,o)&&(o=!1),i||o&&(Ce(e),o=!1),ke(e,!0),a=e.input.charCodeAt(e.position),(e.line===c||e.lineIndent>t)&&a!==0)P(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return l?(i&&Ce(e),s&&qn(e),!0):!1}function on(e,t,n,r,i,l=!0){var p,v;e.depth>=e.maxDepth&&P(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let s=1,o=!1,a=!1,u=null;const c=vc();let h=n===cl||n===id,f=h;const d=h;if(r&&ke(e,!0)&&(o=!0,e.lineIndent>t?s=1:e.lineIndent===t?s=0:s=-1),s===1)for(;;){const k=e.input.charCodeAt(e.position),g=Hn(e);if(o&&s!==1&&(k===33||k===38))break;if(o&&d&&(c.tagStart!==U||c.anchorStart!==U)&&(k===33||k===38)){const m=Hn(e),y=t+1;if(vs(e,e.position-e.lineStart,y,c)&&((p=e.events[m.eventsLength])==null?void 0:p.type)===we.MAPPING)return e.depth--,!0;sn(e,m)}if(o&&(k===33&&c.tagStart!==U||k===38&&c.anchorStart!==U)||!_y(e,c,n===tr)&&!Ey(e,c))break;u===null&&(u=g),ke(e,!0)?(o=!0,f=d,e.lineIndent>t?s=1:e.lineIndent===t?s=0:s=-1):f=!1}if(f&&(f=o||i),s===1||n===cl){const k=n===tr||n===wo?t:t+1,g=e.position-e.lineStart;if(s===1)if(f&&(wc(e,g,c)||vs(e,g,k,c))||Py(e,k,c))a=!0;else{const m=e.input.charCodeAt(e.position);if(u!==null&&l&&d&&!f&&m!==124&&m!==62){const y=Hn(e),w=u.position-u.lineStart;sn(e,u),vs(e,w,k,vc())&&((v=e.events[y.eventsLength])==null?void 0:v.type)===we.MAPPING?a=!0:sn(e,y)}!a&&(h&&Ny(e,k,c)||Cy(e,k,c)||Ay(e,k,c)||Ty(e,c)||Iy(e,k,n,c))&&(a=!0)}else s===0&&(a=f&&wc(e,g,c))}return h=h&&!a,!a&&(c.anchorStart!==U||c.tagStart!==U||h)&&(sr(e,U,U,c.anchorStart,c.anchorEnd,c.tagStart,c.tagEnd,V.PLAIN),a=!0),e.depth--,a||c.anchorStart!==U||c.tagStart!==U}function Ry(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!rt(e.input.charCodeAt(e.position));)e.position++;const n=e.input.slice(t,e.position),r=[];for(n.length===0&&P(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!ce(e.input.charCodeAt(e.position));){for(;pn(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||ce(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!rt(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(i,e.position))}if(ce(e.input.charCodeAt(e.position))&&fl(e),n==="YAML"){e.directives.some(l=>l.kind==="yaml")&&P(e,"duplication of %YAML directive"),r.length!==1&&P(e,"YAML directive accepts exactly one argument");const i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);i===null&&P(e,"ill-formed argument of the YAML directive"),parseInt(i[1],10)!==1&&P(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:r[0]})}else if(n==="TAG"){r.length!==2&&P(e,"TAG directive accepts exactly two arguments");const[i,l]=r;ld.test(i)||P(e,"ill-formed tag handle (first argument) of the TAG directive"),rd.call(e.tagHandlers,i)&&P(e,`there is a previously declared suffix for "${i}" tag handle`),my.test(l)||P(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[i]=l,e.directives.push({kind:"tag",handle:i,prefix:l})}return!0}function My(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(ke(e,!0);Ry(e);)t=!0,ke(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&mt(e.input.charCodeAt(e.position+3))){n=!0;const o=e.line;e.position+=3,ke(e,!0),i=e.line>o}else t&&P(e,"directives end mark is expected");const l=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&nr(e)){e.position+=3,ke(e,!0);return}if(yy(e,n,!1),on(e,e.lineIndent-1,cl,!1,i,i)||Ce(e),ke(e,!0),e.position===e.lineStart&&nr(e)&&(r=e.input.charCodeAt(e.position)===46,r)){const o=e.line;e.position+=3,ke(e,!0),e.line===o&&e.position<e.length&&P(e,"end of the stream or a document separator is expected")}const s=e.events[l];(s==null?void 0:s.type)===we.DOCUMENT&&(s.explicitEnd=r),qn(e),!r&&e.position<e.length&&!Ca(e)&&P(e,"end of the stream or a document separator is expected")}function Oy(e,t){const n=e.length,r={...Ta,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf("\0");for(i!==-1&&dn.throwAt(e,i,"null byte is not allowed in input",r.filename);r.position<r.length&&(ad(r),ke(r,!0),!(r.position>=r.length));){const l=r.position;My(r),r.position===l&&P(r,"can not read a document")}return r.events}var $y={...Ta,...Ea};function zy(e,t={}){const n={...$y,...t},r=String(e),i=Object.keys(Ta),l=Object.keys(Ea);return fy(Oy(r,uc(n,i)),{...uc(n,l),source:r})}function Fy(e,t){const n=zy(e,t);if(n.length===0)throw new dn("expected a document, but the input is empty");if(n.length===1)return n[0];throw new dn("expected a single document in the stream, but found more")}function Ol(e,t){return(e&1<<t)!==0}var kc={applyQuoteFlowKeysOption:jy,doubleQuoteForInvisibles:Dy,doubleQuoteWhitespaceOnly:By,applyForceQuotesOption:by,tryLongOrMultilineAsBlock:Uy,quoteInvalidPlain:Vy,fallbackToDoubleQuoted:Wy};function cd(e){return e.presenterOptions.quoteStyle==="single"&&Ol(e.allowedStylesMask,V.SINGLE_QUOTED)?V.SINGLE_QUOTED:V.DOUBLE_QUOTED}function jy(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==V.PLAIN||(e.style=V.DOUBLE_QUOTED))}function Dy(e){e.style===V.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=V.DOUBLE_QUOTED)}function By(e){e.style===V.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=V.DOUBLE_QUOTED)}function by(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==V.PLAIN||(e.style=e.node.value.includes(`
`)?V.DOUBLE_QUOTED:cd(e)))}function Uy(e){if(e.style!==V.PLAIN||e.isKey)return;const t=e.node.value,n=t.indexOf(`
`)!==-1;if(!Ol(e.allowedStylesMask,V.LITERAL_BLOCK)){n&&(e.style=V.DOUBLE_QUOTED);return}const r=e.presenterOptions.lineWidth;if(r===-1){n&&(e.style=V.LITERAL_BLOCK);return}const i=Math.max(Math.min(r,40),r-e.shiftOfContent);let l=0,s=!1;for(;l<=t.length;){let o=t.length;const a=t.indexOf(`
`,l);a!==-1&&(o=a);const u=t.slice(l,o);if(u.length>i&&u[0]!==" "&&/ [^ \t]/.test(u)&&(s=!0),a===-1)break;l=a+1}s?e.style=V.FOLDED_BLOCK:n&&(e.style=V.LITERAL_BLOCK)}function Vy(e){e.style===V.PLAIN&&!Ol(e.allowedStylesMask,V.PLAIN)&&(e.style=cd(e))}function Wy(e){Ol(e.allowedStylesMask,e.style)||(e.style=V.DOUBLE_QUOTED)}Object.keys(kc).map(e=>Reflect.get(kc,e));function Aa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xn=Aa();function fd(e){xn=e}var Zt={exec:()=>null};function _n(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function z(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(i,l)=>{let s=typeof l=="string"?l:l.source;return s=s.replace(Se.caret,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,t)};return r}var qy=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),Se={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:_n(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:_n(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:_n(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:_n(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:_n(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:_n(e=>new RegExp(`^ {0,${e}}>`))},Hy=/^(?:[ \t]*(?:\n|$))+/,Qy=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Yy=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ii=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ky=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Na=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,hd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,dd=z(hd).replace(/bull/g,Na).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Gy=z(hd).replace(/bull/g,Na).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),La=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Xy=/^[^\n]+/,Ia=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Zy=z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ia).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Jy=z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Na).getRegex(),$l="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ev=z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Pa).replace("tag",$l).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pd=e=>z(La).replace("hr",ii).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$l).getRegex(),tv=pd(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),nv=pd(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),rv=z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nv).getRegex(),Ra={blockquote:rv,code:Qy,def:Zy,fences:Yy,heading:Ky,hr:ii,html:ev,lheading:dd,list:Jy,newline:Hy,paragraph:tv,table:Zt,text:Xy},Sc=z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ii).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$l).getRegex(),iv={...Ra,lheading:Gy,table:Sc,paragraph:z(La).replace("hr",ii).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Sc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$l).getRegex()},lv={...Ra,html:z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Zt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:z(La).replace("hr",ii).replace("heading",` *#{1,6} *[^
]`).replace("lheading",dd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ov=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,gd=/^( {2,}|\\)\n(?!\s*$)/,av=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_t=/[\p{P}\p{S}]/u,or=/[\s\p{P}\p{S}]/u,li=/[^\s\p{P}\p{S}]/u,uv=z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,or).getRegex(),cv=/[\p{Pi}\p{Ps}"']/u,md=/(?!~)[\p{P}\p{S}]/u,fv=/(?!~)[\s\p{P}\p{S}]/u,hv=/(?:[^\s\p{P}\p{S}]|~)/u,dv=z(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",qy?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),yd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,pv=z(yd,"u").replace(/punct/g,_t).getRegex(),gv=z(yd,"u").replace(/punct/g,md).getRegex(),mv=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,yv=z(mv,"u").replace(/openQuote/g,cv).replace(/punct/g,_t).getRegex(),vd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",vv=z(vd,"gu").replace(/notPunctSpace/g,li).replace(/punctSpace/g,or).replace(/punct/g,_t).getRegex(),xv=z(vd,"gu").replace(/notPunctSpace/g,hv).replace(/punctSpace/g,fv).replace(/punct/g,md).getRegex(),wv="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",kv=z(wv,"gu").replace(/notPunctSpace/g,li).replace(/punctSpace/g,or).replace(/punct/g,_t).getRegex(),Sv=z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,li).replace(/punctSpace/g,or).replace(/punct/g,_t).getRegex(),_v="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Ev=z(_v,"gu").replace(/notPunctSpace/g,li).replace(/punctSpace/g,or).replace(/punct/g,_t).getRegex(),Tv=z(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,_t).getRegex(),Cv="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Av=z(Cv,"gu").replace(/notPunctSpace/g,li).replace(/punctSpace/g,or).replace(/punct/g,_t).getRegex(),Nv=z(/\\(punct)/,"gu").replace(/punct/g,_t).getRegex(),Lv=z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Iv=z(Pa).replace("(?:-->|$)","-->").getRegex(),Pv=z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Iv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),hl=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Rv=z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",hl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xd=z(/^!?\[(label)\]\[(ref)\]/).replace("label",hl).replace("ref",Ia).getRegex(),wd=z(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ia).getRegex(),Mv=z("reflink|nolink(?!\\()","g").replace("reflink",xd).replace("nolink",wd).getRegex(),_c=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ma={_backpedal:Zt,anyPunctuation:Nv,autolink:Lv,blockSkip:dv,br:gd,code:ov,del:Zt,delLDelim:Zt,delRDelim:Zt,emStrongLDelim:pv,emStrongRDelimAst:vv,emStrongRDelimUnd:Sv,escape:sv,link:Rv,nolink:wd,punctuation:uv,reflink:xd,reflinkSearch:Mv,tag:Pv,text:av,url:Zt},Ov={...Ma,emStrongLDelim:yv,emStrongRDelimAst:kv,emStrongRDelimUnd:Ev,link:z(/^!?\[(label)\]\((.*?)\)/).replace("label",hl).getRegex(),reflink:z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",hl).getRegex()},Eo={...Ma,emStrongRDelimAst:xv,emStrongLDelim:gv,delLDelim:Tv,delRDelim:Av,url:z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",_c).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:z(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",_c).getRegex()},$v={...Eo,br:z(gd).replace("{2,}","*").getRegex(),text:z(Eo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ei={normal:Ra,gfm:iv,pedantic:lv},yr={normal:Ma,gfm:Eo,breaks:$v,pedantic:Ov},zv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ec=e=>zv[e];function lt(e,t){if(t){if(Se.escapeTest.test(e))return e.replace(Se.escapeReplace,Ec)}else if(Se.escapeTestNoEncode.test(e))return e.replace(Se.escapeReplaceNoEncode,Ec);return e}function Tc(e){try{e=encodeURI(e).replace(Se.percentDecode,"%")}catch{return null}return e}function Cc(e,t){var l;let n=e.replace(Se.findPipe,(s,o,a)=>{let u=!1,c=o;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Se.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!((l=r.at(-1))!=null&&l.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(Se.slashPipe,"|");return r}function Tt(e,t,n){let r=e.length;if(r===0)return"";let i=0;for(;i<r&&e.charAt(r-i-1)===t;)i++;return e.slice(0,r-i)}function Ac(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Se.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Fv(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function jv(e,t=0){let n=t,r="";for(let i of e)if(i==="	"){let l=4-n%4;r+=" ".repeat(l),n+=l}else r+=i,n++;return r}function Nc(e,t,n,r,i){let l=t.href,s=t.title||null,o=e[1].replace(i.other.outputLinkReplace,"$1"),a=e[0].charAt(0)==="!";r.state.inLink=!0;let u=r.state.linkEmitted,c=r.state.inRawBlock;r.state.linkEmitted=!1;let h=r.inlineTokens(o),f=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=!1,!a){if(f){r.state.inRawBlock=c;return}r.state.linkEmitted=!0}return{type:a?"image":"link",raw:n,href:l,title:s,text:o,tokens:h}}function Dv(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(l=>{let s=l.match(n.other.beginningSpace);if(s===null)return l;let[o]=s;return o.length>=i.length?l.slice(i.length):l}).join(`
`)}var dl=class{constructor(e){$(this,"options");$(this,"rules");$(this,"lexer");this.options=e||xn}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:Ac(t[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],r=Dv(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let r=Tt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Tt(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Tt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Tt(t[0],`
`).split(`
`),r="",i="",l=[];for(;n.length>0;){let s=!1,o=[],a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))o.push(n[a]),s=!0;else if(!s)o.push(n[a]);else break;n=n.slice(a);let u=o.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,i=i?`${i}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,l,!0),this.lexer.state.top=h,n.length===0)break;let f=l.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){let d=f,p=n.join(`
`),v=d.raw+`
`+p.replace(this.rules.other.blockquoteSetextReplace2,""),k=this.blockquote(v);l[l.length-1]=k,r=`${r}
${p}`,i=i.substring(0,i.length-d.text.length)+k.text;break}else if((f==null?void 0:f.type)==="list"){let d=f,p=d.raw+`
`+n.join(`
`),v=this.list(p);l[l.length-1]=v,r=r.substring(0,r.length-f.raw.length)+v.raw,i=i.substring(0,i.length-d.raw.length)+v.raw,n=p.substring(l.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:l,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let l=this.rules.other.listItemRegex(n),s=!1;for(;e;){let a=!1,u="",c="";if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let h=jv(t[2].split(`
`,1)[0],t[1].length),f=e.split(`
`,1)[0],d=!h.trim(),p=0;if(this.options.pedantic?(p=2,c=h.trimStart()):d?p=t[1].length+1:(p=h.search(this.rules.other.nonSpaceChar),p=p>4?1:p,c=h.slice(p),p+=t[1].length),d&&this.rules.other.blankLine.test(f)&&(u+=f+`
`,e=e.substring(f.length+1),a=!0),!a){let v=this.rules.other.nextBulletRegex(p),k=this.rules.other.hrRegex(p),g=this.rules.other.fencesBeginRegex(p),m=this.rules.other.headingBeginRegex(p),y=this.rules.other.htmlBeginRegex(p),w=this.rules.other.blockquoteBeginRegex(p);for(;e;){let S=e.split(`
`,1)[0],_;if(f=S,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),_=f):_=f.replace(this.rules.other.tabCharGlobal,"    "),g.test(f)||m.test(f)||y.test(f)||w.test(f)||v.test(f)||k.test(f))break;if(_.search(this.rules.other.nonSpaceChar)>=p||!f.trim())c+=`
`+_.slice(p);else{if(d||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||g.test(h)||m.test(h)||k.test(h))break;c+=`
`+f}d=!f.trim(),u+=S+`
`,e=e.substring(S.length+1),h=_.slice(p)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(s=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),i.raw+=u}let o=i.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let a of i.items)if(this.lexer.state.top=!1,a.tokens=this.lexer.blockTokens(a.text,[]),!i.loose){let u=a.tokens.filter(h=>h.type==="space"),c=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=c}for(let a of i.items){let u=a.tokens[0];if(a.task&&((u==null?void 0:u.type)==="text"||(u==null?void 0:u.type)==="paragraph")){a.text=a.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let c=this.rules.other.listTaskCheckbox.exec(a.raw);if(c){let h={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};a.checked=h.checked,i.loose?a.tokens[0]&&["paragraph","text"].includes(a.tokens[0].type)&&"tokens"in a.tokens[0]&&a.tokens[0].tokens?(a.tokens[0].raw=h.raw+a.tokens[0].raw,a.tokens[0].text=h.raw+a.tokens[0].text,a.tokens[0].tokens.unshift(h)):a.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):a.tokens.unshift(h)}}else a.task&&(a.task=!1)}if(i.loose)for(let a of i.items){a.loose=!0;for(let u of a.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=Ac(t[0]);return{type:"html",block:!0,raw:n,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:Tt(t[0],`
`),href:r,title:i}}}table(e){var s;let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Cc(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(s=t[3])!=null&&s.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],l={type:"table",raw:Tt(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?l.align.push("right"):this.rules.other.tableAlignCenter.test(o)?l.align.push("center"):this.rules.other.tableAlignLeft.test(o)?l.align.push("left"):l.align.push(null);for(let o=0;o<n.length;o++)l.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:l.align[o]});for(let o of i)l.rows.push(Cc(o,l.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:l.align[u]})));return l}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return{type:"heading",raw:Tt(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let l=Tt(n.slice(0,-1),"\\");if((n.length-l.length)%2===0)return}else{let l=Fv(t[2],"()");if(l===-2)return;if(l>-1){let s=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let r=t[2],i="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(r);l&&(r=l[1],i=l[3])}else i=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Nc(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[r.toLowerCase()];if(!i){let l=n[0].charAt(0);return{type:"text",raw:l,text:l}}return Nc(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,l,s,o=i,a=0,u=r[0][0],c=n===u,h=u==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+i);(r=h.exec(t))!==null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(s=[...l].length,r[3]||r[4]){o+=s;continue}else if(r[5]||r[6]){if(i%3&&!((i+s)%3)){a+=s;continue}if(c)break}if(o-=s,o>0)continue;s=Math.min(s,s+o+a);let f=[...r[0]][0].length,d=e.slice(0,i+r.index+f+s);if(Math.min(i,s)%2){let v=d.slice(1,-1);return{type:"em",raw:d,text:v,tokens:this.lexer.inlineTokens(v)}}let p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,l,s,o=i,a=this.rules.inline.delRDelim;for(a.lastIndex=0,t=t.slice(-1*e.length+i);(r=a.exec(t))!==null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l||(s=[...l].length,s!==i))continue;if(r[3]||r[4]){o+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o);let u=[...r[0]][0].length,c=e.slice(0,i+r.index+u+s),h=c.slice(i,-i);return{type:"del",raw:c,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,i;if(t[2]==="@")r=t[0],i="mailto:"+r;else{let l;do l=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(l!==t[0]);r=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Ze=class To{constructor(t){$(this,"tokens");$(this,"options");$(this,"state");$(this,"inlineQueue");$(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||xn,this.options.tokenizer=this.options.tokenizer||new dl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:Se,block:Ei.normal,inline:yr.normal};this.options.pedantic?(n.block=Ei.pedantic,n.inline=yr.pedantic):this.options.gfm&&(n.block=Ei.gfm,this.options.breaks?n.inline=yr.breaks:n.inline=yr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ei,inline:yr}}static lex(t,n){return new To(n).lex(t)}static lexInline(t,n){return new To(n).inlineTokens(t)}lex(t){t=t.replace(Se.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var l,s,o;this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(Se.tabCharGlobal,"    ").replace(Se.spaceLine,""));let i=1/0;for(;t;){if(t.length<i)i=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let a;if((s=(l=this.options.extensions)==null?void 0:l.block)!=null&&s.some(c=>(a=c.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let c=n.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let u=t;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0,h=t.slice(1),f;this.options.extensions.startBlock.forEach(d=>{f=d.call({lexer:this},h),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(u=t.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){let c=n.at(-1);r&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(a),r=u.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(a);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}linkInText(t){if(!t.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of t.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&t.charAt(r.index-1)!=="!")return!0;for(let r of t.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let i=r[0],l=i.lastIndexOf("[");if(!(i.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,i.slice(l+1,-1)))&&!(l>1&&this.linkInText(i.slice(1,l-1))))return!0}return!1}inlineTokens(t,n=[]){var o,a,u,c,h;this.tokenizer.lexer=this;let r=t;if(this.tokens.links&&t.includes("[")){let f=this.tokenizer.rules.inline.reflinkSearch,d=p=>{let v=p.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,p.slice(v+1,-1)))return p;if(v>1&&p.charAt(0)!=="!"){let k=p.slice(1,v-1);if(this.linkInText(k))return"["+k.replace(f,d)+"]["+"a".repeat(p.length-v-2)+"]"}return"["+"a".repeat(p.length-2)+"]"};r=r.replace(f,d)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,f=>"+".repeat(f.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(f,d,p)=>{let v=p?p.length:0;return f.slice(0,v)+"["+"a".repeat(f.length-v-2)+"]"}),r=((a=(o=this.options.hooks)==null?void 0:o.emStrongMask)==null?void 0:a.call({lexer:this},r))??r;let i=!1,l="",s=1/0;for(;t;){if(t.length<s)s=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}i||(l=""),i=!1;let f;if((c=(u=this.options.extensions)==null?void 0:u.inline)!=null&&c.some(p=>(f=p.call({lexer:this},t,n))?(t=t.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.escape(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.tag(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.link(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(f.raw.length);let p=n.at(-1);f.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=f.raw,p.text+=f.text):n.push(f);continue}if(f=this.tokenizer.emStrong(t,r,l)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.codespan(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.br(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.del(t,r,l)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.autolink(t)){t=t.substring(f.raw.length),n.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(t))){t=t.substring(f.raw.length),n.push(f);continue}let d=t;if((h=this.options.extensions)!=null&&h.startInline){let p=1/0,v=t.slice(1),k;this.options.extensions.startInline.forEach(g=>{k=g.call({lexer:this},v),typeof k=="number"&&k>=0&&(p=Math.min(p,k))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(f=this.tokenizer.inlineText(d)){t=t.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(l=f.raw.slice(-1)),i=!0;let p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=f.raw,p.text+=f.text):n.push(f);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return n}infiniteLoopError(t){let n="Infinite loop on byte: "+t;if(this.options.silent)console.error(n);else throw new Error(n)}},pl=class{constructor(e){$(this,"options");$(this,"parser");this.options=e||xn}space(e){return""}code({text:e,lang:t,escaped:n}){var l;let r=(l=(t||"").match(Se.notSpaceStart))==null?void 0:l[0],i=e.replace(Se.endingNewline,"")+`
`;return r?'<pre><code class="language-'+lt(r)+'">'+(n?i:lt(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:lt(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r="";for(let s=0;s<e.items.length;s++){let o=e.items[s];r+=this.listitem(o)}let i=t?"ol":"ul",l=t&&n!==1?' start="'+n+'"':"";return"<"+i+l+`>
`+r+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let r="";for(let i=0;i<e.rows.length;i++){let l=e.rows[i];n="";for(let s=0;s<l.length;s++)n+=this.tablecell(l[s]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${lt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Tc(e);if(i===null)return r;e=i;let l='<a href="'+e+'"';return t&&(l+=' title="'+lt(t)+'"'),l+=">"+r+"</a>",l}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Tc(e);if(i===null)return lt(n);e=i;let l=`<img src="${e}" alt="${lt(n)}"`;return t&&(l+=` title="${lt(t)}"`),l+=">",l}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:lt(e.text)}},Oa=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Je=class Co{constructor(t){$(this,"options");$(this,"renderer");$(this,"textRenderer");this.options=t||xn,this.options.renderer=this.options.renderer||new pl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oa}static parse(t,n){return new Co(n).parse(t)}static parseInline(t,n){return new Co(n).parseInline(t)}parse(t){var r,i;this.renderer.parser=this;let n="";for(let l=0;l<t.length;l++){let s=t[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[s.type]){let a=s,u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){n+=u||"";continue}}let o=s;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,n=this.renderer){var i,l;this.renderer.parser=this;let r="";for(let s=0;s<t.length;s++){let o=t[s];if((l=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&l[o.type]){let u=this.options.extensions.renderers[o.type].call({parser:this},o);if(u!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(o.type)){r+=u||"";continue}}let a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"checkbox":{r+=n.checkbox(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},Ti,Sr=(Ti=class{constructor(e){$(this,"options");$(this,"block");this.options=e||xn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ze.lex:Ze.lexInline}provideParser(e=this.block){return e?Je.parse:Je.parseInline}},$(Ti,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),$(Ti,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Ti),Bv=class{constructor(...e){$(this,"defaults",Aa());$(this,"options",this.setOptions);$(this,"parse",this.parseMarkdown(!0));$(this,"parseInline",this.parseMarkdown(!1));$(this,"Parser",Je);$(this,"Renderer",pl);$(this,"TextRenderer",Oa);$(this,"Lexer",Ze);$(this,"Tokenizer",dl);$(this,"Hooks",Sr);this.use(...e)}walkTokens(e,t){var r,i;let n=[];for(let l of e)switch(n=n.concat(t.call(this,l)),l.type){case"table":{let s=l;for(let o of s.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of s.rows)for(let a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{let s=l;n=n.concat(this.walkTokens(s.items,t));break}default:{let s=l;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[s.type]?this.defaults.extensions.childTokens[s.type].forEach(o=>{let a=s[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let l=t.renderers[i.name];l?t.renderers[i.name]=function(...s){let o=i.renderer.apply(this,s);return o===!1&&(o=l.apply(this,s)),o}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let l=t[i.level];l?l.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),r.extensions=t),n.renderer){let i=this.defaults.renderer||new pl(this.defaults);for(let l in n.renderer){if(!(l in i))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;let s=l,o=n.renderer[s],a=i[s];i[s]=(...u)=>{let c=o.apply(i,u);return c===!1&&(c=a.apply(i,u)),c||""}}r.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new dl(this.defaults);for(let l in n.tokenizer){if(!(l in i))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;let s=l,o=n.tokenizer[s],a=i[s];i[s]=(...u)=>{let c=o.apply(i,u);return c===!1&&(c=a.apply(i,u)),c}}r.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new Sr;for(let l in n.hooks){if(!(l in i))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;let s=l,o=n.hooks[s],a=i[s];Sr.passThroughHooks.has(l)?i[s]=u=>{if(this.defaults.async&&Sr.passThroughHooksRespectAsync.has(l))return(async()=>{let h=await o.call(i,u);return a.call(i,h)})();let c=o.call(i,u);return a.call(i,c)}:i[s]=(...u)=>{if(this.defaults.async)return(async()=>{let h=await o.apply(i,u);return h===!1&&(h=await a.apply(i,u)),h})();let c=o.apply(i,u);return c===!1&&(c=a.apply(i,u)),c}}r.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,l=n.walkTokens;r.walkTokens=function(s){let o=[];return o.push(l.call(this,s)),i&&(o=o.concat(i.call(this,s))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ze.lex(e,t??this.defaults)}parser(e,t){return Je.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let s=i.hooks?await i.hooks.preprocess(t):t,o=await(i.hooks?await i.hooks.provideLexer(e):e?Ze.lex:Ze.lexInline)(s,i),a=i.hooks?await i.hooks.processAllTokens(o):o;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser(e):e?Je.parse:Je.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(l);try{i.hooks&&(t=i.hooks.preprocess(t));let s=(i.hooks?i.hooks.provideLexer(e):e?Ze.lex:Ze.lexInline)(t,i);i.hooks&&(s=i.hooks.processAllTokens(s)),i.walkTokens&&this.walkTokens(s,i.walkTokens);let o=(i.hooks?i.hooks.provideParser(e):e?Je.parse:Je.parseInline)(s,i);return i.hooks&&(o=i.hooks.postprocess(o)),o}catch(s){return l(s)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+lt(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},mn=new Bv;function H(e,t){return mn.parse(e,t)}H.options=H.setOptions=function(e){return mn.setOptions(e),H.defaults=mn.defaults,fd(H.defaults),H};H.getDefaults=Aa;H.defaults=xn;function bv(...e){return mn.use(...e),H.defaults=mn.defaults,fd(H.defaults),H}H.use=bv;H.walkTokens=function(e,t){return mn.walkTokens(e,t)};H.parseInline=mn.parseInline;H.Parser=Je;H.parser=Je.parse;H.Renderer=pl;H.TextRenderer=Oa;H.Lexer=Ze;H.lexer=Ze.lex;H.Tokenizer=dl;H.Hooks=Sr;H.parse=H;H.options;H.setOptions;H.walkTokens;H.parseInline;Je.parse;Ze.lex;const Uv={mp4:"video",webm:"video",mov:"video",m4v:"video",png:"image",jpg:"image",jpeg:"image",gif:"image",webp:"image",svg:"image",html:"html",htm:"html",pdf:"pdf"};function Lc(e,t){if(e.includes("/cases/sage/")&&e.split("?")[0].endsWith(".html"))return {type:"iframe",src:e,label:t,designW:1280,designH:850};if(e.includes("/cases/protein-interactive/"))return {type:"iframe",src:e,label:t,designW:1280,designH:720};if(e.includes("/cases/excel-agent-demo.html"))return {type:"iframe",src:e,label:t,designW:1280,designH:720};if(e.includes("/cases/guandu.html"))return {type:"iframe",src:e,label:t,designW:1280,designH:800};const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),s=e.includes("/cases/minios-interactive/"),o=["/cases/deepresearch.html","/cases/deepresearch_en.html"].some(a=>e.includes(a)),i=s||o||["/cases/SWE.html","/cases/SWE-en.html","/cases/火灾逃生教育游戏.html","/cases/火灾-en-20260914.html","/cases/terminal_ch/index.html","/cases/terminal_en/index.html"].some(a=>e.includes(a))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:s?1280:o?1180:1920,designH:s?720:o?860:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}const Or=e=>H.parseInline(e.trim());function xs(e,t,n){if(e.startsWith("/cases/sage/")&&e.endsWith(".html"))return Lc(e,t);if(e==="@weather"){const r={type:"iframe",src:n,designW:1920,designH:1080};return t&&(r.label=t),r}if(e==="@sqlchart"){const r={type:"component",name:"sqlchart"};return t&&(r.label=t),r}return{type:"html",src:e,label:t}}function Vv(e){return e&&e!=="auto"?e:typeof window<"u"?`${window.location.origin}/weather/`:"/weather/"}function Wv(source) {
  const mainLines = [];
  const outros = new Map();
  let themeIndex = -1;
  let collectingOutro = false;
  for (const line of source.split("\n")) {
    if (/^##\s+/.test(line.trim())) {
      themeIndex++;
      collectingOutro = false;
    }
    if (line.trim() === "@outro" && themeIndex >= 0) {
      collectingOutro = true;
      continue;
    }
    if (collectingOutro) {
      if (!outros.has(themeIndex)) outros.set(themeIndex, []);
      outros.get(themeIndex).push(line);
    } else mainLines.push(line);
  }
  const parsed = parseOriginalContent(mainLines.join("\n"));
  for (const [index, lines] of outros) {
    parsed.themes[index].outro = lines.filter(line => line.trim()).map(line => Or(line)).join("<br/>");
  }
  return parsed;
}
function parseOriginalContent(e){const t=e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/),n=t?Fy(t[1])||{}:{},r=t?t[2]:e,i=Vv(n.weatherUrl),l=r.split(`
`),s=[];let o=null,a=null,u=[],c=[],h=[],f=[],d=!1,E=null,N=!1;const p=()=>c.filter(Boolean).map(g=>Or(g)).join("<br/>"),v=()=>{a&&(a.text=p(),f.length?a.medias=f:h.length>1?(a.stack=h,d&&(a.row=!0)):h.length===1&&(a.media=h[0]),o.cases.push(a),a=null,c=[],h=[],f=[],d=!1)},k=()=>{o&&(v(),o.intro=u.filter(Boolean).map(g=>Or(g)).join("<br/>"),E&&(o.media=E),N&&(o.benchmarkPlaceholder=!0),s.push(o),o=null,u=[],E=null,N=!1)};for(let g=0;g<l.length;g++){const y=l[g].trim();let w=y.match(/^##\s+(.*)$/),S=y.match(/^###\s+(.*)$/);if(S){v();const I=S[1].split(" · "),L=I.shift().trim(),j=I.join(" · ").trim();a={title:L},j&&(a.subtitle=j);continue}if(w&&!S){k();const I=w[1].split(" · ").map(L=>L.trim());o={cases:[]},I.length>=3&&/^\d+$/.test(I[0])?(o.num=I[0],o.en=I[1],o.name=I.slice(2).join(" · ")):o.name=I.join(" · ");continue}if(!o)continue;if(y.startsWith("@media-caption ")&&a&&f.length){f[f.length-1].hint=y.slice(15).trim();continue}if(y.startsWith("@caption ")){const I=y.slice(9).trim();if(a)a.hint=I;else if(E)E.hint=I;continue}if(y==="@benchmark"&&!a){N=!0;continue}if(y==="@row"){a&&(d=!0);continue}if(y==="@weather"){a&&h.push(xs("@weather","",i));continue}if(y==="@sqlchart"){a&&h.push(xs("@sqlchart"));continue}const _=y.match(/^[-*]\s+\[([^\]]*)\]\(([^)]+)\)\s*$/);if(_&&a){const I=_[2].trim(),L=_[1].trim();f.push(I.startsWith("@")?xs(I,L,i):Lc(I,L));continue}const T=y.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/),A=y.match(/^\[([^\]]*)\]\(([^)]+)\)\s*$/);if(T||A){const I=T||A,L=Lc(I[2].trim(),I[1].trim());a?h.push(L):E=L;continue}y&&(a?c.push(y):u.push(y))}return k(),{brand:n.brand||"Sage 2.1 Flash",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],benchmarkTable:n.benchmarkTable||{},benchmarkNotes:n.benchmarkNotes||{},themes:s}}function qv(e={}){return{kicker:e.kicker||"",title:e.title?Or(e.title):"",lede:e.lede?Or(e.lede):"",body:(e.body||[]).map(t=>Or(t))}}const Hv=`---
brand: Sage 2.1 Flash
hero:
  links:
    - label: "ModelScope"
      href: "https://www.modelscope.cn/models/Shanghai_AI_Laboratory/Sage-S2.1-Flash"
    - label: "Hugging Face"
      href: "https://huggingface.co/internlm/Sage-S2.1-Flash"
    - label: "体验 API"
      href: "https://discovery.intern-ai.org.cn/"
    - label: "书生官网"
      href: "https://intern-ai.org.cn/home"
overview:
  title: ""
  lede: ""
  body: []
---

# Sage 2.1 Flash ｜ 以推理探索，以行动求证

今天，我们正式发布 **书生 Sage 2.1 Flash**，一款面向高难度科学研究的前沿科学多模态智能体模型。模型采用 **3200 亿参数 MoE 架构**，将科学多模态理解与通用智能体能力相结合，支持科学深度研究、科学编程及专业科研软件操作。

书生-S2.1 将分子图、晶体结构、蛋白质序列与三维结构、DNA序列、RNA序列，以及光谱、质谱、X 射线衍射、心电、脑电和光变曲线等十余类科学输入纳入统一模型，并依托大规模可验证环境训练，强化搜索、编程、工具调用与多步骤任务执行能力。通过视觉反馈，模型能够根据软件状态与中间结果检验判断、调整策略，在专业科研环境中持续推进复杂任务。

![](/cases/sage/benchmarks.svg)

科学研究需要在数据、代码与专业工具之间反复开展分析、操作和检查。以下演示展示 Sage 2.1 Flash 如何处理科学数据、操作专业软件，并利用中间结果调整执行过程，输出可供研究者复核的成果。

## Demo

### CT 三维重建

从 12,487 张来源混杂、顺序打乱且朝向不一的 CT 图像中，筛出同一次扫描的 139 张切片，校正朝向并恢复层序。模型根据一致性检查调整排序策略，在 3D Slicer 中完成三维骨骼重建，并回查原始切面复核局部细节。

- [视频演示｜CT 三维重建](/cases/sage/ct.mp4)

### 三维建模

根据参考图，在 Blender 与 CAD 软件中完成建筑、航天发动机和汽车底盘的三维建模，结合渲染预览或装配检查复核结果，输出可编辑模型与展示视频。

- [建筑三维重建](/cases/sage/architecture.mp4)
- [航天发动机](/cases/sage/engine.mp4)
- [汽车底盘](/cases/sage/chassis.mp4)

### 科研分析

从荧光显微图出发，在 Fiji 中调整分割阈值、分离粘连细胞核，将轮廓叠回原图检查，并导出 ROI 与测量结果，便于复核和后续分析。

- [显微图分析](/cases/sage/microscopy.mp4)
- [脑电信号处理](/cases/sage/eeg-v2.mp4)
- [卫星影像分析](/cases/sage/satellite.mp4)
- [科学多模态理解](/cases/sage/scientific-understanding.mp4)

### 科学交互可视化

围绕晶体量子存储中的效率损失，模型检索原始文献、提取实验参数，并通过参数扫描比较腔耦合、原子失步与损耗的影响。交互页面可调节反射率、吸收强度和存储时间，观察光脉冲与回波的变化，并追溯对应的文献与研究记录。

- [光的记忆](/cases/sage/light-memory.html)
- [晶体结构可视化](/cases/sage/crystal-structures.html)

Sage 2.1 Flash 面向科学推理与智能体任务执行，支持结合科学数据、检索、编程与专业软件开展分析。

欢迎通过 API 体验模型能力，探索其在科研数据处理、专业软件操作与多步任务执行中的应用。

[试用 Sage 2.1 Flash API →](https://discovery.intern-ai.org.cn/)`,En=Wv(Hv);function Qv({content=En}){return x.jsxs(x.Fragment,{children:[x.jsx(Xg,{links:content.hero.links}),x.jsx(Zg,{}),x.jsx(P0,{hero:content.hero}),x.jsx(SageArticle,{})]})}
const siteLanguageStart = true;
const siteEnglishContent = Wv("---\nbrand: Sage 2.1 Flash\nhero:\n  links:\n    - label: \"ModelScope\"\n      href: \"https://www.modelscope.cn/models/Shanghai_AI_Laboratory/Sage-S2.1-Flash\"\n    - label: \"Hugging Face\"\n      href: \"https://huggingface.co/internlm/Sage-S2.1-Flash\"\n    - label: \"Try the API\"\n      href: \"https://discovery.intern-ai.org.cn/\"\n    - label: \"Intern AI\"\n      href: \"https://intern-ai.org.cn/home\"\noverview:\n  title: \"\"\n  lede: \"\"\n  body: []\n---\n\n# Sage 2.1 Flash | Explore through reasoning. Verify through action.\n\nToday, we introduce **Sage 2.1 Flash**, a frontier scientific multimodal agent model for demanding scientific research. Built on a **320-billion-parameter MoE architecture**, it combines scientific multimodal understanding with general agent capabilities, supporting scientific deep research, scientific programming and the operation of professional research software.\n\nSage 2.1 Flash incorporates more than ten types of scientific input into a unified model, including molecular graphs, crystal structures, protein sequences and three-dimensional structures, DNA and RNA sequences, spectra, mass spectra, X-ray diffraction, electrocardiograms, electroencephalograms and light curves. Large-scale training in verifiable environments strengthens its capabilities in search, programming, tool use and multistep task execution. Through visual feedback, the model can check its judgments against software states and intermediate results, adjust its strategy and advance complex tasks in professional research environments.\n\n![](/cases/sage/benchmarks.svg)\n\nScientific research requires repeated analysis, operation and inspection across data, code and professional tools. The following demonstrations show how Sage 2.1 Flash processes scientific data, operates professional software and uses intermediate results to adjust its execution, producing outputs that researchers can review.\n\n## Demo\n\n### CT Reconstruction\n\nFrom 12,487 CT images with mixed sources, shuffled order and inconsistent orientations, the model identifies 139 slices from a single scan, corrects their orientation and restores the sequence. It revises its ordering strategy based on consistency checks, reconstructs three-dimensional bony structures in 3D Slicer, and returns to the source slices to verify local details.\n\n- [Video Demo | CT Reconstruction](/cases/sage/ct.mp4)\n\n### 3D Modeling\n\nUsing reference images, the model builds architectural, aerospace engine and truck chassis models in Blender and CAD software. It reviews the results through render previews or assembly checks and delivers editable models and presentation videos.\n\n- [Architecture](/cases/sage/architecture.mp4)\n- [Aerospace Engine](/cases/sage/engine.mp4)\n- [Truck Chassis](/cases/sage/chassis.mp4)\n\n### Scientific Analysis\n\nStarting from a fluorescence microscopy image, the model adjusts segmentation thresholds in Fiji, separates touching nuclei and overlays the contours on the source image for inspection. It exports ROIs and measurements for review and further analysis.\n\n- [Microscopy Analysis](/cases/sage/microscopy.mp4)\n- [EEG Signal Processing](/cases/sage/eeg-v2.mp4)\n- [Satellite Imagery Analysis](/cases/sage/satellite.mp4)\n- [Scientific Multimodal Understanding](/cases/sage/scientific-understanding.mp4)\n\n### Interactive Scientific Visualization\n\nThe model investigates efficiency losses in crystal quantum memories by reviewing primary papers, extracting experimental parameters and comparing cavity coupling, atomic dephasing and losses through parameter sweeps. The interactive page lets visitors adjust reflectivity, absorption and storage time, observe pulses and echoes, and trace the evidence to papers and research records.\n\n- [The Memory of Light](/cases/sage/light-memory.html)\n- [Crystal Structure Visualization](/cases/sage/crystal-structures.html)\n\nSage 2.1 Flash is designed for scientific reasoning and agentic task execution, supporting analysis that combines scientific data, retrieval, programming and professional software.\n\nTry the model through its API and explore its applications in research data processing, professional software operation and multistep task execution.\n\n[Try the Sage 2.1 Flash API →](https://discovery.intern-ai.org.cn/)");
const siteCitationBibtex = "% Citation will be added with the technical report release.";
const SiteLanguageContext = q.createContext(null);
const siteMessages = {
  zh: {
    projectLinks: "项目链接",
    comingSoon: "即将推出",
    contents: "页面目录",
    viewCases: "查看案例 ",
    scrollToExplore: "滚动展开",
    mediaPlaceholder: " · 展示占位（视频 / 截图 / 交互）",
    view: "视图",
    benchmarkPlaceholder: "Benchmark 评测图预留区域",
    fullscreen: "全屏",
    exitFullscreen: "退出全屏",
    loadDemo: "点击加载交互演示",
    loadingDemo: "正在加载演示…",
    switchLanguage: "切换为英文",
    contact: "联系",
    citation: "引用",
    copyCitation: "复制 BibTeX",
    copiedCitation: "已复制",
    citationCopyFailed: "请选中下方引用并手动复制。",
    pageTitle: "Sage 2.1 Flash",
    pageDescription: "以推理探索，以行动求证。",
  },
  en: {
    projectLinks: "Project links",
    comingSoon: "Coming soon",
    contents: "On this page",
    viewCases: "Explore demos ",
    scrollToExplore: "Scroll to explore",
    mediaPlaceholder: " · Media placeholder (video / image / interactive demo)",
    view: "View",
    benchmarkPlaceholder: "Placeholder for the benchmark chart",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
    loadDemo: "Click to load interactive demo",
    loadingDemo: "Loading demo…",
    switchLanguage: "Switch to Chinese",
    contact: "Contact",
    citation: "Citation",
    copyCitation: "Copy BibTeX",
    copiedCitation: "Copied",
    citationCopyFailed: "Select the citation below to copy it manually.",
    pageTitle: "Sage 2.1 Flash",
    pageDescription: "Explore through reasoning. Verify through action.",
  },
};

function readSiteLanguage() {
  try {
    return window.localStorage.getItem("sage-2.1-language-v1") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function useSiteLabels() {
  return siteMessages[q.useContext(SiteLanguageContext).language];
}

function SiteLanguageSwitch() {
  const { language, setLanguage } = q.useContext(SiteLanguageContext);
  const targetLanguage = language === "zh" ? "en" : "zh";
  return x.jsx("button", {
    type: "button",
    className: "nav__quicklink nav__language",
    lang: targetLanguage === "zh" ? "zh-CN" : "en",
    "aria-label": siteMessages[language].switchLanguage,
    title: siteMessages[language].switchLanguage,
    onClick: () => setLanguage(targetLanguage),
    children: x.jsxs("span", {
      className: "nav__language-options",
      children: [
        x.jsx("span", {
          className: `nav__language-option ${language === "zh" ? "is-active" : ""}`,
          children: language === "en" ? "ZH" : "中文",
        }),
        x.jsx("span", {
          className: `nav__language-option ${language === "en" ? "is-active" : ""}`,
          children: "EN",
        }),
      ],
    }),
  });
}

function SiteCitation() {
  const labels = useSiteLabels();
  const [status, setStatus] = q.useState("");
  const copy = async () => {
    let copied = false;
    try {
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteCitationBibtex);
        copied = true;
      }
    } catch {}
    if (!copied) {
      const previousFocus = document.activeElement;
      const field = document.createElement("textarea");
      field.value = siteCitationBibtex;
      field.setAttribute("readonly", "");
      field.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0";
      document.body.appendChild(field);
      try {
        field.select();
        copied = document.execCommand("copy");
      } catch {} finally {
        field.remove();
        previousFocus?.focus({ preventScroll: true });
      }
    }
    setStatus(copied ? "copiedCitation" : "citationCopyFailed");
  };
  return x.jsxs("section", {
    className: "site-citation",
    "aria-labelledby": "citation-title",
    children: [
      x.jsxs("div", {
        className: "site-citation__header",
        children: [
          x.jsx("h2", { id: "citation-title", className: "h", children: labels.citation }),
          x.jsx("button", { type: "button", className: "site-citation__copy", onClick: copy, children: labels.copyCitation }),
        ],
      }),
      x.jsx("p", {
        className: "site-citation__paper",
        children: x.jsx("a", { href: "https://arxiv.org/abs/2609.15818", children: "Sage 2.1 Flash: The Dawn of Agentic Superintelligence" }),
      }),
      x.jsx("pre", {
        className: "site-citation__code",
        tabIndex: 0,
        "aria-label": "BibTeX",
        children: x.jsx("code", { children: siteCitationBibtex }),
      }),
      x.jsx("span", { className: "site-citation__status", role: "status", children: status ? labels[status] : "" }),
    ],
  });
}

function SiteApp() {
  const [language, setLanguage] = q.useState(readSiteLanguage);
  q.useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = siteMessages[language].pageTitle;
    document.querySelector('meta[name="description"]').content = siteMessages[language].pageDescription;
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", siteMessages[language].pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", siteMessages[language].pageDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", siteMessages[language].pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", siteMessages[language].pageDescription);
    try {
      window.localStorage.setItem("sage-2.1-language-v1", language);
    } catch {}
  }, [language]);
  return x.jsx(SiteLanguageContext.Provider, {
    value: { language, setLanguage },
    children: x.jsxs(x.Fragment, {
      children: [
        x.jsx(Qv, { content: language === "en" ? siteEnglishContent : En }),

        x.jsxs("footer", {
          className: "site-footer wrap",
          children: [
            x.jsx("span", { children: "书生 · Sage 2.1 Flash" }),
            x.jsx("a", { href: "https://intern-ai.org.cn/home", children: "Intern AI ↗", target: "_blank", rel: "noreferrer" }),
          ],
        }),
      ],
    }),
  });
}

const siteLanguageEnd = true;
ws.createRoot(document.getElementById("root")).render(x.jsx(Dd.StrictMode,{children:x.jsx(SiteApp,{})}));
