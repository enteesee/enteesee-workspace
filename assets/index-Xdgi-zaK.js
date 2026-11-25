(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function OT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hp={exports:{}},tu={},qp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function WR(){if(Xv)return Ve;Xv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,L={};function F(M,K,we){this.props=M,this.context=K,this.refs=L,this.updater=we||P}F.prototype.isReactComponent={},F.prototype.setState=function(M,K){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,K,"setState")},F.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function oe(){}oe.prototype=F.prototype;function Y(M,K,we){this.props=M,this.context=K,this.refs=L,this.updater=we||P}var te=Y.prototype=new oe;te.constructor=Y,V(te,F.prototype),te.isPureReactComponent=!0;var j=Array.isArray,Te=Object.prototype.hasOwnProperty,fe={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(M,K,we){var Pe,De={},Me=null,$e=null;if(K!=null)for(Pe in K.ref!==void 0&&($e=K.ref),K.key!==void 0&&(Me=""+K.key),K)Te.call(K,Pe)&&!b.hasOwnProperty(Pe)&&(De[Pe]=K[Pe]);var We=arguments.length-2;if(We===1)De.children=we;else if(1<We){for(var et=Array(We),ut=0;ut<We;ut++)et[ut]=arguments[ut+2];De.children=et}if(M&&M.defaultProps)for(Pe in We=M.defaultProps,We)De[Pe]===void 0&&(De[Pe]=We[Pe]);return{$$typeof:n,type:M,key:Me,ref:$e,props:De,_owner:fe.current}}function k(M,K){return{$$typeof:n,type:M.type,key:K,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function D(M){var K={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(we){return K[we]})}var U=/\/+/g;function A(M,K){return typeof M=="object"&&M!==null&&M.key!=null?D(""+M.key):K.toString(36)}function Qe(M,K,we,Pe,De){var Me=typeof M;(Me==="undefined"||Me==="boolean")&&(M=null);var $e=!1;if(M===null)$e=!0;else switch(Me){case"string":case"number":$e=!0;break;case"object":switch(M.$$typeof){case n:case e:$e=!0}}if($e)return $e=M,De=De($e),M=Pe===""?"."+A($e,0):Pe,j(De)?(we="",M!=null&&(we=M.replace(U,"$&/")+"/"),Qe(De,K,we,"",function(ut){return ut})):De!=null&&(N(De)&&(De=k(De,we+(!De.key||$e&&$e.key===De.key?"":(""+De.key).replace(U,"$&/")+"/")+M)),K.push(De)),1;if($e=0,Pe=Pe===""?".":Pe+":",j(M))for(var We=0;We<M.length;We++){Me=M[We];var et=Pe+A(Me,We);$e+=Qe(Me,K,we,et,De)}else if(et=T(M),typeof et=="function")for(M=et.call(M),We=0;!(Me=M.next()).done;)Me=Me.value,et=Pe+A(Me,We++),$e+=Qe(Me,K,we,et,De);else if(Me==="object")throw K=String(M),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return $e}function rt(M,K,we){if(M==null)return M;var Pe=[],De=0;return Qe(M,Pe,"","",function(Me){return K.call(we,Me,De++)}),Pe}function ie(M){if(M._status===-1){var K=M._result;K=K(),K.then(function(we){(M._status===0||M._status===-1)&&(M._status=1,M._result=we)},function(we){(M._status===0||M._status===-1)&&(M._status=2,M._result=we)}),M._status===-1&&(M._status=0,M._result=K)}if(M._status===1)return M._result.default;throw M._result}var de={current:null},G={transition:null},ue={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:G,ReactCurrentOwner:fe};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:rt,forEach:function(M,K,we){rt(M,function(){K.apply(this,arguments)},we)},count:function(M){var K=0;return rt(M,function(){K++}),K},toArray:function(M){return rt(M,function(K){return K})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ve.Component=F,Ve.Fragment=t,Ve.Profiler=s,Ve.PureComponent=Y,Ve.StrictMode=r,Ve.Suspense=f,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ve.act=re,Ve.cloneElement=function(M,K,we){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Pe=V({},M.props),De=M.key,Me=M.ref,$e=M._owner;if(K!=null){if(K.ref!==void 0&&(Me=K.ref,$e=fe.current),K.key!==void 0&&(De=""+K.key),M.type&&M.type.defaultProps)var We=M.type.defaultProps;for(et in K)Te.call(K,et)&&!b.hasOwnProperty(et)&&(Pe[et]=K[et]===void 0&&We!==void 0?We[et]:K[et])}var et=arguments.length-2;if(et===1)Pe.children=we;else if(1<et){We=Array(et);for(var ut=0;ut<et;ut++)We[ut]=arguments[ut+2];Pe.children=We}return{$$typeof:n,type:M.type,key:De,ref:Me,props:Pe,_owner:$e}},Ve.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Ve.createElement=C,Ve.createFactory=function(M){var K=C.bind(null,M);return K.type=M,K},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(M){return{$$typeof:d,render:M}},Ve.isValidElement=N,Ve.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:ie}},Ve.memo=function(M,K){return{$$typeof:m,type:M,compare:K===void 0?null:K}},Ve.startTransition=function(M){var K=G.transition;G.transition={};try{M()}finally{G.transition=K}},Ve.unstable_act=re,Ve.useCallback=function(M,K){return de.current.useCallback(M,K)},Ve.useContext=function(M){return de.current.useContext(M)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(M){return de.current.useDeferredValue(M)},Ve.useEffect=function(M,K){return de.current.useEffect(M,K)},Ve.useId=function(){return de.current.useId()},Ve.useImperativeHandle=function(M,K,we){return de.current.useImperativeHandle(M,K,we)},Ve.useInsertionEffect=function(M,K){return de.current.useInsertionEffect(M,K)},Ve.useLayoutEffect=function(M,K){return de.current.useLayoutEffect(M,K)},Ve.useMemo=function(M,K){return de.current.useMemo(M,K)},Ve.useReducer=function(M,K,we){return de.current.useReducer(M,K,we)},Ve.useRef=function(M){return de.current.useRef(M)},Ve.useState=function(M){return de.current.useState(M)},Ve.useSyncExternalStore=function(M,K,we){return de.current.useSyncExternalStore(M,K,we)},Ve.useTransition=function(){return de.current.useTransition()},Ve.version="18.3.1",Ve}var Jv;function ag(){return Jv||(Jv=1,qp.exports=WR()),qp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function HR(){if(Zv)return tu;Zv=1;var n=ag(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,E={},T=null,P=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(P=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:d,key:T,ref:P,props:E,_owner:s.current}}return tu.Fragment=t,tu.jsx=u,tu.jsxs=u,tu}var eE;function qR(){return eE||(eE=1,Hp.exports=HR()),Hp.exports}var I=qR(),J=ag();const GR=OT(J);var Sh={},Gp={exports:{}},bn={},Kp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE;function KR(){return tE||(tE=1,(function(n){function e(G,ue){var re=G.length;G.push(ue);e:for(;0<re;){var M=re-1>>>1,K=G[M];if(0<s(K,ue))G[M]=ue,G[re]=K,re=M;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ue=G[0],re=G.pop();if(re!==ue){G[0]=re;e:for(var M=0,K=G.length,we=K>>>1;M<we;){var Pe=2*(M+1)-1,De=G[Pe],Me=Pe+1,$e=G[Me];if(0>s(De,re))Me<K&&0>s($e,De)?(G[M]=$e,G[Me]=re,M=Me):(G[M]=De,G[Pe]=re,M=Pe);else if(Me<K&&0>s($e,re))G[M]=$e,G[Me]=re,M=Me;else break e}}return ue}function s(G,ue){var re=G.sortIndex-ue.sortIndex;return re!==0?re:G.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,E=null,T=3,P=!1,V=!1,L=!1,F=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(G){for(var ue=t(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=G)r(m),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(m)}}function j(G){if(L=!1,te(G),!V)if(t(f)!==null)V=!0,ie(Te);else{var ue=t(m);ue!==null&&de(j,ue.startTime-G)}}function Te(G,ue){V=!1,L&&(L=!1,oe(C),C=-1),P=!0;var re=T;try{for(te(ue),E=t(f);E!==null&&(!(E.expirationTime>ue)||G&&!D());){var M=E.callback;if(typeof M=="function"){E.callback=null,T=E.priorityLevel;var K=M(E.expirationTime<=ue);ue=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(f)&&r(f),te(ue)}else r(f);E=t(f)}if(E!==null)var we=!0;else{var Pe=t(m);Pe!==null&&de(j,Pe.startTime-ue),we=!1}return we}finally{E=null,T=re,P=!1}}var fe=!1,b=null,C=-1,k=5,N=-1;function D(){return!(n.unstable_now()-N<k)}function U(){if(b!==null){var G=n.unstable_now();N=G;var ue=!0;try{ue=b(!0,G)}finally{ue?A():(fe=!1,b=null)}}else fe=!1}var A;if(typeof Y=="function")A=function(){Y(U)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,rt=Qe.port2;Qe.port1.onmessage=U,A=function(){rt.postMessage(null)}}else A=function(){F(U,0)};function ie(G){b=G,fe||(fe=!0,A())}function de(G,ue){C=F(function(){G(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){V||P||(V=!0,ie(Te))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(G){switch(T){case 1:case 2:case 3:var ue=3;break;default:ue=T}var re=T;T=ue;try{return G()}finally{T=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,ue){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=T;T=G;try{return ue()}finally{T=re}},n.unstable_scheduleCallback=function(G,ue,re){var M=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?M+re:M):re=M,G){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=re+K,G={id:y++,callback:ue,priorityLevel:G,startTime:re,expirationTime:K,sortIndex:-1},re>M?(G.sortIndex=re,e(m,G),t(f)===null&&G===t(m)&&(L?(oe(C),C=-1):L=!0,de(j,re-M))):(G.sortIndex=K,e(f,G),V||P||(V=!0,ie(Te))),G},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(G){var ue=T;return function(){var re=T;T=ue;try{return G.apply(this,arguments)}finally{T=re}}}})(Qp)),Qp}var nE;function QR(){return nE||(nE=1,Kp.exports=KR()),Kp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rE;function YR(){if(rE)return bn;rE=1;var n=ag(),e=QR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function T(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function P(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function V(i,o,l,h){if(o===null||typeof o>"u"||P(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function L(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){F[i]=new L(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];F[o]=new L(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){F[i]=new L(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){F[i]=new L(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){F[i]=new L(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){F[i]=new L(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){F[i]=new L(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){F[i]=new L(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){F[i]=new L(i,5,!1,i.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function Y(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(oe,Y);F[o]=new L(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(oe,Y);F[o]=new L(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(oe,Y);F[o]=new L(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){F[i]=new L(i,1,!1,i.toLowerCase(),null,!1,!1)}),F.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){F[i]=new L(i,1,!1,i.toLowerCase(),null,!0,!0)});function te(i,o,l,h){var p=F.hasOwnProperty(o)?F[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(V(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var j=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),fe=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),G=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,M;function K(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var we=!1;function Pe(i,o){if(!i||we)return"";we=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(H){var h=H}Reflect.construct(i,[],o)}else{try{o.call()}catch(H){h=H}i.call(o.prototype)}else{try{throw Error()}catch(H){h=H}i()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var p=H.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,R=_.length-1;1<=w&&0<=R&&p[w]!==_[R];)R--;for(;1<=w&&0<=R;w--,R--)if(p[w]!==_[R]){if(w!==1||R!==1)do if(w--,R--,0>R||p[w]!==_[R]){var x=`
`+p[w].replace(" at new "," at ");return i.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",i.displayName)),x}while(1<=w&&0<=R);break}}}finally{we=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?K(i):""}function De(i){switch(i.tag){case 5:return K(i.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case fe:return"Portal";case k:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case Qe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case U:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case rt:return o=i.displayName||null,o!==null?o:Me(i.type)||"Memo";case ie:o=i._payload,i=i._init;try{return Me(i(o))}catch{}}return null}function $e(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function We(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function et(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function ut(i){var o=et(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Kn(i){i._valueTracker||(i._valueTracker=ut(i))}function yn(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=et(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Qn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function hr(i,o){var l=o.checked;return re({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Vr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=We(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function di(i,o){o=o.checked,o!=null&&te(i,"checked",o,!1)}function fi(i,o){di(i,o);var l=We(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Ur(i,o.type,l):o.hasOwnProperty("defaultValue")&&Ur(i,o.type,We(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Fr(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ur(i,o,l){(o!=="number"||Qn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Yn=Array.isArray;function dr(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+We(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Wi(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function pi(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Yn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:We(l)}}function Hi(i,o){var l=We(o.value),h=We(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ks(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function _t(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?_t(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var xt,W=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(xt=xt||document.createElement("div"),xt.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=xt.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function ce(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ge).forEach(function(i){Ye.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ge[o]=ge[i]})});function Ht(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ge.hasOwnProperty(i)&&ge[i]?(""+o).trim():o+"px"}function jr(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ht(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var bt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(i,o){if(o){if(bt[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Dt(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yt=null;function vn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Br=null,ln=null,zr=null;function $o(i){if(i=jl(i)){if(typeof Br!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Uc(o),Br(i.stateNode,i.type,o))}}function $r(i){ln?zr?zr.push(i):zr=[i]:ln=i}function _l(){if(ln){var i=ln,o=zr;if(zr=ln=null,$o(i),o)for(i=0;i<o.length;i++)$o(o[i])}}function Qs(i,o){return i(o)}function yl(){}var mi=!1;function vl(i,o,l){if(mi)return i(o,l);mi=!0;try{return Qs(i,o,l)}finally{mi=!1,(ln!==null||zr!==null)&&(yl(),_l())}}function Rt(i,o){var l=i.stateNode;if(l===null)return null;var h=Uc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Wo=!1;if(d)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Wo=!1}function Ys(i,o,l,h,p,_,w,R,x){var H=Array.prototype.slice.call(arguments,3);try{o.apply(l,H)}catch(ee){this.onError(ee)}}var Xs=!1,Ho=null,pr=!1,El=null,vf={onError:function(i){Xs=!0,Ho=i}};function qo(i,o,l,h,p,_,w,R,x){Xs=!1,Ho=null,Ys.apply(vf,arguments)}function cc(i,o,l,h,p,_,w,R,x){if(qo.apply(this,arguments),Xs){if(Xs){var H=Ho;Xs=!1,Ho=null}else throw Error(t(198));pr||(pr=!0,El=H)}}function mr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Js(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function gr(i){if(mr(i)!==i)throw Error(t(188))}function hc(i){var o=i.alternate;if(!o){if(o=mr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return gr(p),i;if(_===h)return gr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,R=p.child;R;){if(R===l){w=!0,l=p,h=_;break}if(R===h){w=!0,h=p,l=_;break}R=R.sibling}if(!w){for(R=_.child;R;){if(R===l){w=!0,l=_,h=p;break}if(R===h){w=!0,h=_,l=p;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function wl(i){return i=hc(i),i!==null?Go(i):null}function Go(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Go(i);if(o!==null)return o;i=i.sibling}return null}var Ko=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,dc=e.unstable_shouldYield,Ef=e.unstable_requestPaint,ot=e.unstable_now,fc=e.unstable_getCurrentPriorityLevel,Zs=e.unstable_ImmediatePriority,qi=e.unstable_UserBlockingPriority,Xn=e.unstable_NormalPriority,Il=e.unstable_LowPriority,pc=e.unstable_IdlePriority,eo=null,Fn=null;function mc(i){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(eo,i,void 0,(i.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:_c,Sl=Math.log,gc=Math.LN2;function _c(i){return i>>>=0,i===0?32:31-(Sl(i)/gc|0)|0}var Qo=64,Yo=4194304;function Gi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function to(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var R=w&~p;R!==0?h=Gi(R):(_&=w,_!==0&&(h=Gi(_)))}else w=l&~p,w!==0?h=Gi(w):_!==0&&(h=Gi(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-En(o),p=1<<l,h|=i[l],o&=~p;return h}function wf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gi(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-En(_),R=1<<w,x=p[w];x===-1?((R&l)===0||(R&h)!==0)&&(p[w]=wf(R,o)):x<=o&&(i.expiredLanes|=R),_&=~R}}function Un(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function no(){var i=Qo;return Qo<<=1,(Qo&4194240)===0&&(Qo=64),i}function Ki(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Qi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-En(o),i[o]=l}function it(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-En(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Yi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-En(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var ze=0;function Xi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var yc,Xo,vc,Ec,wc,Cl=!1,Wr=[],en=null,_r=null,yr=null,Ji=new Map,Jn=new Map,Hr=[],Tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(i,o){switch(i){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Ji.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(o.pointerId)}}function Cn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=jl(o),o!==null&&Xo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function If(i,o,l,h,p){switch(o){case"focusin":return en=Cn(en,i,o,l,h,p),!0;case"dragenter":return _r=Cn(_r,i,o,l,h,p),!0;case"mouseover":return yr=Cn(yr,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Ji.set(_,Cn(Ji.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Jn.set(_,Cn(Jn.get(_)||null,i,o,l,h,p)),!0}return!1}function Ic(i){var o=ao(i.target);if(o!==null){var l=mr(o);if(l!==null){if(o=l.tag,o===13){if(o=Js(l),o!==null){i.blockedOn=o,wc(i.priority,function(){vc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function _i(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Jo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);yt=h,l.target.dispatchEvent(h),yt=null}else return o=jl(l),o!==null&&Xo(o),i.blockedOn=l,!1;o.shift()}return!0}function ro(i,o,l){_i(i)&&l.delete(o)}function Sc(){Cl=!1,en!==null&&_i(en)&&(en=null),_r!==null&&_i(_r)&&(_r=null),yr!==null&&_i(yr)&&(yr=null),Ji.forEach(ro),Jn.forEach(ro)}function vr(i,o){i.blockedOn===o&&(i.blockedOn=null,Cl||(Cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sc)))}function Er(i){function o(p){return vr(p,i)}if(0<Wr.length){vr(Wr[0],i);for(var l=1;l<Wr.length;l++){var h=Wr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(en!==null&&vr(en,i),_r!==null&&vr(_r,i),yr!==null&&vr(yr,i),Ji.forEach(o),Jn.forEach(o),l=0;l<Hr.length;l++)h=Hr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<Hr.length&&(l=Hr[0],l.blockedOn===null);)Ic(l),l.blockedOn===null&&Hr.shift()}var yi=j.ReactCurrentBatchConfig,Zi=!0;function mt(i,o,l,h){var p=ze,_=yi.transition;yi.transition=null;try{ze=1,Rl(i,o,l,h)}finally{ze=p,yi.transition=_}}function Sf(i,o,l,h){var p=ze,_=yi.transition;yi.transition=null;try{ze=4,Rl(i,o,l,h)}finally{ze=p,yi.transition=_}}function Rl(i,o,l,h){if(Zi){var p=Jo(i,o,l,h);if(p===null)Lf(i,o,h,io,l),Tc(i,h);else if(If(p,i,o,l,h))h.stopPropagation();else if(Tc(i,h),o&4&&-1<Tf.indexOf(i)){for(;p!==null;){var _=jl(p);if(_!==null&&yc(_),_=Jo(i,o,l,h),_===null&&Lf(i,o,h,io,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Lf(i,o,h,null,l)}}var io=null;function Jo(i,o,l,h){if(io=null,i=vn(h),i=ao(i),i!==null)if(o=mr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Js(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return io=i,null}function Al(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Zs:return 1;case qi:return 4;case Xn:case Il:return 16;case pc:return 536870912;default:return 16}default:return 16}}var jn=null,Zo=null,Rn=null;function kl(){if(Rn)return Rn;var i,o=Zo,l=o.length,h,p="value"in jn?jn.value:jn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return Rn=p.slice(i,1<h?1-h:void 0)}function ea(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function qr(){return!0}function Pl(){return!1}function tn(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?qr:Pl,this.isPropagationStopped=Pl,this}return re(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),o}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=tn(wr),Gr=re({},wr,{view:0,detail:0}),Cf=tn(Gr),na,vi,es,so=re({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==es&&(es&&i.type==="mousemove"?(na=i.screenX-es.screenX,vi=i.screenY-es.screenY):vi=na=0,es=i),na)},movementY:function(i){return"movementY"in i?i.movementY:vi}}),ra=tn(so),Nl=re({},so,{dataTransfer:0}),Cc=tn(Nl),ia=re({},Gr,{relatedTarget:0}),sa=tn(ia),Rc=re({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ei=tn(Rc),Ac=re({},wr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),kc=tn(Ac),Pc=re({},wr,{data:0}),xl=tn(Pc),oa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Nc[i])?!!o[i]:!1}function Kr(){return xc}var c=re({},Gr,{key:function(i){if(i.key){var o=oa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ea(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?wn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kr,charCode:function(i){return i.type==="keypress"?ea(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ea(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=tn(c),v=re({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=tn(v),B=re({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kr}),q=tn(B),le=re({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tt=tn(le),Bt=re({},so,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),He=tn(Bt),qt=[9,13,27,32],Ot=d&&"CompositionEvent"in window,Zn=null;d&&"documentMode"in document&&(Zn=document.documentMode);var Bn=d&&"TextEvent"in window&&!Zn,oo=d&&(!Ot||Zn&&8<Zn&&11>=Zn),aa=" ",H_=!1;function q_(i,o){switch(i){case"keyup":return qt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var la=!1;function BC(i,o){switch(i){case"compositionend":return G_(o);case"keypress":return o.which!==32?null:(H_=!0,aa);case"textInput":return i=o.data,i===aa&&H_?null:i;default:return null}}function zC(i,o){if(la)return i==="compositionend"||!Ot&&q_(i,o)?(i=kl(),Rn=Zo=jn=null,la=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return oo&&o.locale!=="ko"?null:o.data;default:return null}}var $C={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!$C[i.type]:o==="textarea"}function Q_(i,o,l,h){$r(h),o=Mc(o,"onChange"),0<o.length&&(l=new ta("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var bl=null,Dl=null;function WC(i){fy(i,0)}function bc(i){var o=fa(i);if(yn(o))return i}function HC(i,o){if(i==="change")return o}var Y_=!1;if(d){var Rf;if(d){var Af="oninput"in document;if(!Af){var X_=document.createElement("div");X_.setAttribute("oninput","return;"),Af=typeof X_.oninput=="function"}Rf=Af}else Rf=!1;Y_=Rf&&(!document.documentMode||9<document.documentMode)}function J_(){bl&&(bl.detachEvent("onpropertychange",Z_),Dl=bl=null)}function Z_(i){if(i.propertyName==="value"&&bc(Dl)){var o=[];Q_(o,Dl,i,vn(i)),vl(WC,o)}}function qC(i,o,l){i==="focusin"?(J_(),bl=o,Dl=l,bl.attachEvent("onpropertychange",Z_)):i==="focusout"&&J_()}function GC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return bc(Dl)}function KC(i,o){if(i==="click")return bc(o)}function QC(i,o){if(i==="input"||i==="change")return bc(o)}function YC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Tr=typeof Object.is=="function"?Object.is:YC;function Ol(i,o){if(Tr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!Tr(i[p],o[p]))return!1}return!0}function ey(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ty(i,o){var l=ey(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ey(l)}}function ny(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?ny(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function ry(){for(var i=window,o=Qn();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Qn(i.document)}return o}function kf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function XC(i){var o=ry(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&ny(l.ownerDocument.documentElement,l)){if(h!==null&&kf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=ty(l,_);var w=ty(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var JC=d&&"documentMode"in document&&11>=document.documentMode,ua=null,Pf=null,Ll=null,Nf=!1;function iy(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nf||ua==null||ua!==Qn(h)||(h=ua,"selectionStart"in h&&kf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ll&&Ol(Ll,h)||(Ll=h,h=Mc(Pf,"onSelect"),0<h.length&&(o=new ta("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=ua)))}function Dc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ca={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},xf={},sy={};d&&(sy=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Oc(i){if(xf[i])return xf[i];if(!ca[i])return i;var o=ca[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in sy)return xf[i]=o[l];return i}var oy=Oc("animationend"),ay=Oc("animationiteration"),ly=Oc("animationstart"),uy=Oc("transitionend"),cy=new Map,hy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(i,o){cy.set(i,o),a(o,[i])}for(var bf=0;bf<hy.length;bf++){var Df=hy[bf],ZC=Df.toLowerCase(),eR=Df[0].toUpperCase()+Df.slice(1);ts(ZC,"on"+eR)}ts(oy,"onAnimationEnd"),ts(ay,"onAnimationIteration"),ts(ly,"onAnimationStart"),ts("dblclick","onDoubleClick"),ts("focusin","onFocus"),ts("focusout","onBlur"),ts(uy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function dy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,cc(h,o,void 0,i),i.currentTarget=null}function fy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var R=h[w],x=R.instance,H=R.currentTarget;if(R=R.listener,x!==_&&p.isPropagationStopped())break e;dy(p,R,H),_=x}else for(w=0;w<h.length;w++){if(R=h[w],x=R.instance,H=R.currentTarget,R=R.listener,x!==_&&p.isPropagationStopped())break e;dy(p,R,H),_=x}}}if(pr)throw i=El,pr=!1,El=null,i}function ht(i,o){var l=o[Bf];l===void 0&&(l=o[Bf]=new Set);var h=i+"__bubble";l.has(h)||(py(o,i,2,!1),l.add(h))}function Of(i,o,l){var h=0;o&&(h|=4),py(l,i,h,o)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Vl(i){if(!i[Lc]){i[Lc]=!0,r.forEach(function(l){l!=="selectionchange"&&(tR.has(l)||Of(l,!1,i),Of(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Lc]||(o[Lc]=!0,Of("selectionchange",!1,o))}}function py(i,o,l,h){switch(Al(o)){case 1:var p=mt;break;case 4:p=Sf;break;default:p=Rl}l=p.bind(null,o,l,i),p=void 0,!Wo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Lf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;w=w.return}for(;R!==null;){if(w=ao(R),w===null)return;if(x=w.tag,x===5||x===6){h=_=w;continue e}R=R.parentNode}}h=h.return}vl(function(){var H=_,ee=vn(l),ne=[];e:{var Z=cy.get(i);if(Z!==void 0){var pe=ta,ye=i;switch(i){case"keypress":if(ea(l)===0)break e;case"keydown":case"keyup":pe=g;break;case"focusin":ye="focus",pe=sa;break;case"focusout":ye="blur",pe=sa;break;case"beforeblur":case"afterblur":pe=sa;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=q;break;case oy:case ay:case ly:pe=Ei;break;case uy:pe=tt;break;case"scroll":pe=Cf;break;case"wheel":pe=He;break;case"copy":case"cut":case"paste":pe=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=S}var ve=(o&4)!==0,At=!ve&&i==="scroll",z=ve?Z!==null?Z+"Capture":null:Z;ve=[];for(var O=H,$;O!==null;){$=O;var se=$.stateNode;if($.tag===5&&se!==null&&($=se,z!==null&&(se=Rt(O,z),se!=null&&ve.push(Fl(O,se,$)))),At)break;O=O.return}0<ve.length&&(Z=new pe(Z,ye,null,l,ee),ne.push({event:Z,listeners:ve}))}}if((o&7)===0){e:{if(Z=i==="mouseover"||i==="pointerover",pe=i==="mouseout"||i==="pointerout",Z&&l!==yt&&(ye=l.relatedTarget||l.fromElement)&&(ao(ye)||ye[wi]))break e;if((pe||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,pe?(ye=l.relatedTarget||l.toElement,pe=H,ye=ye?ao(ye):null,ye!==null&&(At=mr(ye),ye!==At||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(pe=null,ye=H),pe!==ye)){if(ve=ra,se="onMouseLeave",z="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ve=S,se="onPointerLeave",z="onPointerEnter",O="pointer"),At=pe==null?Z:fa(pe),$=ye==null?Z:fa(ye),Z=new ve(se,O+"leave",pe,l,ee),Z.target=At,Z.relatedTarget=$,se=null,ao(ee)===H&&(ve=new ve(z,O+"enter",ye,l,ee),ve.target=$,ve.relatedTarget=At,se=ve),At=se,pe&&ye)t:{for(ve=pe,z=ye,O=0,$=ve;$;$=ha($))O++;for($=0,se=z;se;se=ha(se))$++;for(;0<O-$;)ve=ha(ve),O--;for(;0<$-O;)z=ha(z),$--;for(;O--;){if(ve===z||z!==null&&ve===z.alternate)break t;ve=ha(ve),z=ha(z)}ve=null}else ve=null;pe!==null&&my(ne,Z,pe,ve,!1),ye!==null&&At!==null&&my(ne,At,ye,ve,!0)}}e:{if(Z=H?fa(H):window,pe=Z.nodeName&&Z.nodeName.toLowerCase(),pe==="select"||pe==="input"&&Z.type==="file")var Ee=HC;else if(K_(Z))if(Y_)Ee=QC;else{Ee=GC;var Se=qC}else(pe=Z.nodeName)&&pe.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(Ee=KC);if(Ee&&(Ee=Ee(i,H))){Q_(ne,Ee,l,ee);break e}Se&&Se(i,Z,H),i==="focusout"&&(Se=Z._wrapperState)&&Se.controlled&&Z.type==="number"&&Ur(Z,"number",Z.value)}switch(Se=H?fa(H):window,i){case"focusin":(K_(Se)||Se.contentEditable==="true")&&(ua=Se,Pf=H,Ll=null);break;case"focusout":Ll=Pf=ua=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,iy(ne,l,ee);break;case"selectionchange":if(JC)break;case"keydown":case"keyup":iy(ne,l,ee)}var Ce;if(Ot)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else la?q_(i,l)&&(Ne="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(oo&&l.locale!=="ko"&&(la||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&la&&(Ce=kl()):(jn=ee,Zo="value"in jn?jn.value:jn.textContent,la=!0)),Se=Mc(H,Ne),0<Se.length&&(Ne=new xl(Ne,i,null,l,ee),ne.push({event:Ne,listeners:Se}),Ce?Ne.data=Ce:(Ce=G_(l),Ce!==null&&(Ne.data=Ce)))),(Ce=Bn?BC(i,l):zC(i,l))&&(H=Mc(H,"onBeforeInput"),0<H.length&&(ee=new xl("onBeforeInput","beforeinput",null,l,ee),ne.push({event:ee,listeners:H}),ee.data=Ce))}fy(ne,o)})}function Fl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Mc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Rt(i,l),_!=null&&h.unshift(Fl(i,_,p)),_=Rt(i,o),_!=null&&h.push(Fl(i,_,p))),i=i.return}return h}function ha(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function my(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var R=l,x=R.alternate,H=R.stateNode;if(x!==null&&x===h)break;R.tag===5&&H!==null&&(R=H,p?(x=Rt(l,_),x!=null&&w.unshift(Fl(l,x,R))):p||(x=Rt(l,_),x!=null&&w.push(Fl(l,x,R)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var nR=/\r\n?/g,rR=/\u0000|\uFFFD/g;function gy(i){return(typeof i=="string"?i:""+i).replace(nR,`
`).replace(rR,"")}function Vc(i,o,l){if(o=gy(o),gy(i)!==o&&l)throw Error(t(425))}function Fc(){}var Mf=null,Vf=null;function Ff(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,iR=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,sR=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(i){return _y.resolve(null).then(i).catch(oR)}:Uf;function oR(i){setTimeout(function(){throw i})}function jf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Er(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Er(o)}function ns(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function yy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var da=Math.random().toString(36).slice(2),Qr="__reactFiber$"+da,Ul="__reactProps$"+da,wi="__reactContainer$"+da,Bf="__reactEvents$"+da,aR="__reactListeners$"+da,lR="__reactHandles$"+da;function ao(i){var o=i[Qr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[wi]||l[Qr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=yy(i);i!==null;){if(l=i[Qr])return l;i=yy(i)}return o}i=l,l=i.parentNode}return null}function jl(i){return i=i[Qr]||i[wi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function fa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Uc(i){return i[Ul]||null}var zf=[],pa=-1;function rs(i){return{current:i}}function dt(i){0>pa||(i.current=zf[pa],zf[pa]=null,pa--)}function at(i,o){pa++,zf[pa]=i.current,i.current=o}var is={},un=rs(is),An=rs(!1),lo=is;function ma(i,o){var l=i.type.contextTypes;if(!l)return is;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function kn(i){return i=i.childContextTypes,i!=null}function jc(){dt(An),dt(un)}function vy(i,o,l){if(un.current!==is)throw Error(t(168));at(un,o),at(An,l)}function Ey(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,$e(i)||"Unknown",p));return re({},l,h)}function Bc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||is,lo=un.current,at(un,i),at(An,An.current),!0}function wy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Ey(i,o,lo),h.__reactInternalMemoizedMergedChildContext=i,dt(An),dt(un),at(un,i)):dt(An),at(An,l)}var Ti=null,zc=!1,$f=!1;function Ty(i){Ti===null?Ti=[i]:Ti.push(i)}function uR(i){zc=!0,Ty(i)}function ss(){if(!$f&&Ti!==null){$f=!0;var i=0,o=ze;try{var l=Ti;for(ze=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Ti=null,zc=!1}catch(p){throw Ti!==null&&(Ti=Ti.slice(i+1)),Ko(Zs,ss),p}finally{ze=o,$f=!1}}return null}var ga=[],_a=0,$c=null,Wc=0,er=[],tr=0,uo=null,Ii=1,Si="";function co(i,o){ga[_a++]=Wc,ga[_a++]=$c,$c=i,Wc=o}function Iy(i,o,l){er[tr++]=Ii,er[tr++]=Si,er[tr++]=uo,uo=i;var h=Ii;i=Si;var p=32-En(h)-1;h&=~(1<<p),l+=1;var _=32-En(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Ii=1<<32-En(o)+p|l<<p|h,Si=_+i}else Ii=1<<_|l<<p|h,Si=i}function Wf(i){i.return!==null&&(co(i,1),Iy(i,1,0))}function Hf(i){for(;i===$c;)$c=ga[--_a],ga[_a]=null,Wc=ga[--_a],ga[_a]=null;for(;i===uo;)uo=er[--tr],er[tr]=null,Si=er[--tr],er[tr]=null,Ii=er[--tr],er[tr]=null}var zn=null,$n=null,gt=!1,Ir=null;function Sy(i,o){var l=sr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Cy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,zn=i,$n=ns(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,zn=i,$n=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=uo!==null?{id:Ii,overflow:Si}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=sr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,zn=i,$n=null,!0):!1;default:return!1}}function qf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Gf(i){if(gt){var o=$n;if(o){var l=o;if(!Cy(i,o)){if(qf(i))throw Error(t(418));o=ns(l.nextSibling);var h=zn;o&&Cy(i,o)?Sy(h,l):(i.flags=i.flags&-4097|2,gt=!1,zn=i)}}else{if(qf(i))throw Error(t(418));i.flags=i.flags&-4097|2,gt=!1,zn=i}}}function Ry(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;zn=i}function Hc(i){if(i!==zn)return!1;if(!gt)return Ry(i),gt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Ff(i.type,i.memoizedProps)),o&&(o=$n)){if(qf(i))throw Ay(),Error(t(418));for(;o;)Sy(i,o),o=ns(o.nextSibling)}if(Ry(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){$n=ns(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}$n=null}}else $n=zn?ns(i.stateNode.nextSibling):null;return!0}function Ay(){for(var i=$n;i;)i=ns(i.nextSibling)}function ya(){$n=zn=null,gt=!1}function Kf(i){Ir===null?Ir=[i]:Ir.push(i)}var cR=j.ReactCurrentBatchConfig;function Bl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var R=p.refs;w===null?delete R[_]:R[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function qc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function ky(i){var o=i._init;return o(i._payload)}function Py(i){function o(z,O){if(i){var $=z.deletions;$===null?(z.deletions=[O],z.flags|=16):$.push(O)}}function l(z,O){if(!i)return null;for(;O!==null;)o(z,O),O=O.sibling;return null}function h(z,O){for(z=new Map;O!==null;)O.key!==null?z.set(O.key,O):z.set(O.index,O),O=O.sibling;return z}function p(z,O){return z=fs(z,O),z.index=0,z.sibling=null,z}function _(z,O,$){return z.index=$,i?($=z.alternate,$!==null?($=$.index,$<O?(z.flags|=2,O):$):(z.flags|=2,O)):(z.flags|=1048576,O)}function w(z){return i&&z.alternate===null&&(z.flags|=2),z}function R(z,O,$,se){return O===null||O.tag!==6?(O=Up($,z.mode,se),O.return=z,O):(O=p(O,$),O.return=z,O)}function x(z,O,$,se){var Ee=$.type;return Ee===b?ee(z,O,$.props.children,se,$.key):O!==null&&(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===ie&&ky(Ee)===O.type)?(se=p(O,$.props),se.ref=Bl(z,O,$),se.return=z,se):(se=gh($.type,$.key,$.props,null,z.mode,se),se.ref=Bl(z,O,$),se.return=z,se)}function H(z,O,$,se){return O===null||O.tag!==4||O.stateNode.containerInfo!==$.containerInfo||O.stateNode.implementation!==$.implementation?(O=jp($,z.mode,se),O.return=z,O):(O=p(O,$.children||[]),O.return=z,O)}function ee(z,O,$,se,Ee){return O===null||O.tag!==7?(O=vo($,z.mode,se,Ee),O.return=z,O):(O=p(O,$),O.return=z,O)}function ne(z,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Up(""+O,z.mode,$),O.return=z,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Te:return $=gh(O.type,O.key,O.props,null,z.mode,$),$.ref=Bl(z,null,O),$.return=z,$;case fe:return O=jp(O,z.mode,$),O.return=z,O;case ie:var se=O._init;return ne(z,se(O._payload),$)}if(Yn(O)||ue(O))return O=vo(O,z.mode,$,null),O.return=z,O;qc(z,O)}return null}function Z(z,O,$,se){var Ee=O!==null?O.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ee!==null?null:R(z,O,""+$,se);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Te:return $.key===Ee?x(z,O,$,se):null;case fe:return $.key===Ee?H(z,O,$,se):null;case ie:return Ee=$._init,Z(z,O,Ee($._payload),se)}if(Yn($)||ue($))return Ee!==null?null:ee(z,O,$,se,null);qc(z,$)}return null}function pe(z,O,$,se,Ee){if(typeof se=="string"&&se!==""||typeof se=="number")return z=z.get($)||null,R(O,z,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case Te:return z=z.get(se.key===null?$:se.key)||null,x(O,z,se,Ee);case fe:return z=z.get(se.key===null?$:se.key)||null,H(O,z,se,Ee);case ie:var Se=se._init;return pe(z,O,$,Se(se._payload),Ee)}if(Yn(se)||ue(se))return z=z.get($)||null,ee(O,z,se,Ee,null);qc(O,se)}return null}function ye(z,O,$,se){for(var Ee=null,Se=null,Ce=O,Ne=O=0,Qt=null;Ce!==null&&Ne<$.length;Ne++){Ce.index>Ne?(Qt=Ce,Ce=null):Qt=Ce.sibling;var Ke=Z(z,Ce,$[Ne],se);if(Ke===null){Ce===null&&(Ce=Qt);break}i&&Ce&&Ke.alternate===null&&o(z,Ce),O=_(Ke,O,Ne),Se===null?Ee=Ke:Se.sibling=Ke,Se=Ke,Ce=Qt}if(Ne===$.length)return l(z,Ce),gt&&co(z,Ne),Ee;if(Ce===null){for(;Ne<$.length;Ne++)Ce=ne(z,$[Ne],se),Ce!==null&&(O=_(Ce,O,Ne),Se===null?Ee=Ce:Se.sibling=Ce,Se=Ce);return gt&&co(z,Ne),Ee}for(Ce=h(z,Ce);Ne<$.length;Ne++)Qt=pe(Ce,z,Ne,$[Ne],se),Qt!==null&&(i&&Qt.alternate!==null&&Ce.delete(Qt.key===null?Ne:Qt.key),O=_(Qt,O,Ne),Se===null?Ee=Qt:Se.sibling=Qt,Se=Qt);return i&&Ce.forEach(function(ps){return o(z,ps)}),gt&&co(z,Ne),Ee}function ve(z,O,$,se){var Ee=ue($);if(typeof Ee!="function")throw Error(t(150));if($=Ee.call($),$==null)throw Error(t(151));for(var Se=Ee=null,Ce=O,Ne=O=0,Qt=null,Ke=$.next();Ce!==null&&!Ke.done;Ne++,Ke=$.next()){Ce.index>Ne?(Qt=Ce,Ce=null):Qt=Ce.sibling;var ps=Z(z,Ce,Ke.value,se);if(ps===null){Ce===null&&(Ce=Qt);break}i&&Ce&&ps.alternate===null&&o(z,Ce),O=_(ps,O,Ne),Se===null?Ee=ps:Se.sibling=ps,Se=ps,Ce=Qt}if(Ke.done)return l(z,Ce),gt&&co(z,Ne),Ee;if(Ce===null){for(;!Ke.done;Ne++,Ke=$.next())Ke=ne(z,Ke.value,se),Ke!==null&&(O=_(Ke,O,Ne),Se===null?Ee=Ke:Se.sibling=Ke,Se=Ke);return gt&&co(z,Ne),Ee}for(Ce=h(z,Ce);!Ke.done;Ne++,Ke=$.next())Ke=pe(Ce,z,Ne,Ke.value,se),Ke!==null&&(i&&Ke.alternate!==null&&Ce.delete(Ke.key===null?Ne:Ke.key),O=_(Ke,O,Ne),Se===null?Ee=Ke:Se.sibling=Ke,Se=Ke);return i&&Ce.forEach(function($R){return o(z,$R)}),gt&&co(z,Ne),Ee}function At(z,O,$,se){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Te:e:{for(var Ee=$.key,Se=O;Se!==null;){if(Se.key===Ee){if(Ee=$.type,Ee===b){if(Se.tag===7){l(z,Se.sibling),O=p(Se,$.props.children),O.return=z,z=O;break e}}else if(Se.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===ie&&ky(Ee)===Se.type){l(z,Se.sibling),O=p(Se,$.props),O.ref=Bl(z,Se,$),O.return=z,z=O;break e}l(z,Se);break}else o(z,Se);Se=Se.sibling}$.type===b?(O=vo($.props.children,z.mode,se,$.key),O.return=z,z=O):(se=gh($.type,$.key,$.props,null,z.mode,se),se.ref=Bl(z,O,$),se.return=z,z=se)}return w(z);case fe:e:{for(Se=$.key;O!==null;){if(O.key===Se)if(O.tag===4&&O.stateNode.containerInfo===$.containerInfo&&O.stateNode.implementation===$.implementation){l(z,O.sibling),O=p(O,$.children||[]),O.return=z,z=O;break e}else{l(z,O);break}else o(z,O);O=O.sibling}O=jp($,z.mode,se),O.return=z,z=O}return w(z);case ie:return Se=$._init,At(z,O,Se($._payload),se)}if(Yn($))return ye(z,O,$,se);if(ue($))return ve(z,O,$,se);qc(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,O!==null&&O.tag===6?(l(z,O.sibling),O=p(O,$),O.return=z,z=O):(l(z,O),O=Up($,z.mode,se),O.return=z,z=O),w(z)):l(z,O)}return At}var va=Py(!0),Ny=Py(!1),Gc=rs(null),Kc=null,Ea=null,Qf=null;function Yf(){Qf=Ea=Kc=null}function Xf(i){var o=Gc.current;dt(Gc),i._currentValue=o}function Jf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function wa(i,o){Kc=i,Qf=Ea=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Pn=!0),i.firstContext=null)}function nr(i){var o=i._currentValue;if(Qf!==i)if(i={context:i,memoizedValue:o,next:null},Ea===null){if(Kc===null)throw Error(t(308));Ea=i,Kc.dependencies={lanes:0,firstContext:i}}else Ea=Ea.next=i;return o}var ho=null;function Zf(i){ho===null?ho=[i]:ho.push(i)}function xy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Zf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ci(i,h)}function Ci(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var os=!1;function ep(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function by(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ri(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function as(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ge&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ci(i,l)}return p=h.interleaved,p===null?(o.next=o,Zf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ci(i,l)}function Qc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Yi(i,l)}}function Dy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Yc(i,o,l,h){var p=i.updateQueue;os=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var x=R,H=x.next;x.next=null,w===null?_=H:w.next=H,w=x;var ee=i.alternate;ee!==null&&(ee=ee.updateQueue,R=ee.lastBaseUpdate,R!==w&&(R===null?ee.firstBaseUpdate=H:R.next=H,ee.lastBaseUpdate=x))}if(_!==null){var ne=p.baseState;w=0,ee=H=x=null,R=_;do{var Z=R.lane,pe=R.eventTime;if((h&Z)===Z){ee!==null&&(ee=ee.next={eventTime:pe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ye=i,ve=R;switch(Z=o,pe=l,ve.tag){case 1:if(ye=ve.payload,typeof ye=="function"){ne=ye.call(pe,ne,Z);break e}ne=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=ve.payload,Z=typeof ye=="function"?ye.call(pe,ne,Z):ye,Z==null)break e;ne=re({},ne,Z);break e;case 2:os=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,Z=p.effects,Z===null?p.effects=[R]:Z.push(R))}else pe={eventTime:pe,lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ee===null?(H=ee=pe,x=ne):ee=ee.next=pe,w|=Z;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;Z=R,R=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);if(ee===null&&(x=ne),p.baseState=x,p.firstBaseUpdate=H,p.lastBaseUpdate=ee,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);mo|=w,i.lanes=w,i.memoizedState=ne}}function Oy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var zl={},Yr=rs(zl),$l=rs(zl),Wl=rs(zl);function fo(i){if(i===zl)throw Error(t(174));return i}function tp(i,o){switch(at(Wl,o),at($l,i),at(Yr,zl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Ct(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Ct(o,i)}dt(Yr),at(Yr,o)}function Ta(){dt(Yr),dt($l),dt(Wl)}function Ly(i){fo(Wl.current);var o=fo(Yr.current),l=Ct(o,i.type);o!==l&&(at($l,i),at(Yr,l))}function np(i){$l.current===i&&(dt(Yr),dt($l))}var vt=rs(0);function Xc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var rp=[];function ip(){for(var i=0;i<rp.length;i++)rp[i]._workInProgressVersionPrimary=null;rp.length=0}var Jc=j.ReactCurrentDispatcher,sp=j.ReactCurrentBatchConfig,po=0,Et=null,zt=null,Gt=null,Zc=!1,Hl=!1,ql=0,hR=0;function cn(){throw Error(t(321))}function op(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Tr(i[l],o[l]))return!1;return!0}function ap(i,o,l,h,p,_){if(po=_,Et=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Jc.current=i===null||i.memoizedState===null?mR:gR,i=l(h,p),Hl){_=0;do{if(Hl=!1,ql=0,25<=_)throw Error(t(301));_+=1,Gt=zt=null,o.updateQueue=null,Jc.current=_R,i=l(h,p)}while(Hl)}if(Jc.current=nh,o=zt!==null&&zt.next!==null,po=0,Gt=zt=Et=null,Zc=!1,o)throw Error(t(300));return i}function lp(){var i=ql!==0;return ql=0,i}function Xr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Et.memoizedState=Gt=i:Gt=Gt.next=i,Gt}function rr(){if(zt===null){var i=Et.alternate;i=i!==null?i.memoizedState:null}else i=zt.next;var o=Gt===null?Et.memoizedState:Gt.next;if(o!==null)Gt=o,zt=i;else{if(i===null)throw Error(t(310));zt=i,i={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Gt===null?Et.memoizedState=Gt=i:Gt=Gt.next=i}return Gt}function Gl(i,o){return typeof o=="function"?o(i):o}function up(i){var o=rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=zt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var R=w=null,x=null,H=_;do{var ee=H.lane;if((po&ee)===ee)x!==null&&(x=x.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:i(h,H.action);else{var ne={lane:ee,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};x===null?(R=x=ne,w=h):x=x.next=ne,Et.lanes|=ee,mo|=ee}H=H.next}while(H!==null&&H!==_);x===null?w=h:x.next=R,Tr(h,o.memoizedState)||(Pn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=x,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Et.lanes|=_,mo|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function cp(i){var o=rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Tr(_,o.memoizedState)||(Pn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function My(){}function Vy(i,o){var l=Et,h=rr(),p=o(),_=!Tr(h.memoizedState,p);if(_&&(h.memoizedState=p,Pn=!0),h=h.queue,hp(jy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Gt!==null&&Gt.memoizedState.tag&1){if(l.flags|=2048,Kl(9,Uy.bind(null,l,h,p,o),void 0,null),Kt===null)throw Error(t(349));(po&30)!==0||Fy(l,o,p)}return p}function Fy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Et.updateQueue,o===null?(o={lastEffect:null,stores:null},Et.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Uy(i,o,l,h){o.value=l,o.getSnapshot=h,By(o)&&zy(i)}function jy(i,o,l){return l(function(){By(o)&&zy(i)})}function By(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Tr(i,l)}catch{return!0}}function zy(i){var o=Ci(i,1);o!==null&&Ar(o,i,1,-1)}function $y(i){var o=Xr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:i},o.queue=i,i=i.dispatch=pR.bind(null,Et,i),[o.memoizedState,i]}function Kl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=Et.updateQueue,o===null?(o={lastEffect:null,stores:null},Et.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Wy(){return rr().memoizedState}function eh(i,o,l,h){var p=Xr();Et.flags|=i,p.memoizedState=Kl(1|o,l,void 0,h===void 0?null:h)}function th(i,o,l,h){var p=rr();h=h===void 0?null:h;var _=void 0;if(zt!==null){var w=zt.memoizedState;if(_=w.destroy,h!==null&&op(h,w.deps)){p.memoizedState=Kl(o,l,_,h);return}}Et.flags|=i,p.memoizedState=Kl(1|o,l,_,h)}function Hy(i,o){return eh(8390656,8,i,o)}function hp(i,o){return th(2048,8,i,o)}function qy(i,o){return th(4,2,i,o)}function Gy(i,o){return th(4,4,i,o)}function Ky(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Qy(i,o,l){return l=l!=null?l.concat([i]):null,th(4,4,Ky.bind(null,o,i),l)}function dp(){}function Yy(i,o){var l=rr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&op(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Xy(i,o){var l=rr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&op(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Jy(i,o,l){return(po&21)===0?(i.baseState&&(i.baseState=!1,Pn=!0),i.memoizedState=l):(Tr(l,o)||(l=no(),Et.lanes|=l,mo|=l,i.baseState=!0),o)}function dR(i,o){var l=ze;ze=l!==0&&4>l?l:4,i(!0);var h=sp.transition;sp.transition={};try{i(!1),o()}finally{ze=l,sp.transition=h}}function Zy(){return rr().memoizedState}function fR(i,o,l){var h=hs(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},ev(i))tv(o,l);else if(l=xy(i,o,l,h),l!==null){var p=In();Ar(l,i,h,p),nv(l,o,h)}}function pR(i,o,l){var h=hs(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(ev(i))tv(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,R=_(w,l);if(p.hasEagerState=!0,p.eagerState=R,Tr(R,w)){var x=o.interleaved;x===null?(p.next=p,Zf(o)):(p.next=x.next,x.next=p),o.interleaved=p;return}}catch{}finally{}l=xy(i,o,p,h),l!==null&&(p=In(),Ar(l,i,h,p),nv(l,o,h))}}function ev(i){var o=i.alternate;return i===Et||o!==null&&o===Et}function tv(i,o){Hl=Zc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function nv(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Yi(i,l)}}var nh={readContext:nr,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},mR={readContext:nr,useCallback:function(i,o){return Xr().memoizedState=[i,o===void 0?null:o],i},useContext:nr,useEffect:Hy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,eh(4194308,4,Ky.bind(null,o,i),l)},useLayoutEffect:function(i,o){return eh(4194308,4,i,o)},useInsertionEffect:function(i,o){return eh(4,2,i,o)},useMemo:function(i,o){var l=Xr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Xr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=fR.bind(null,Et,i),[h.memoizedState,i]},useRef:function(i){var o=Xr();return i={current:i},o.memoizedState=i},useState:$y,useDebugValue:dp,useDeferredValue:function(i){return Xr().memoizedState=i},useTransition:function(){var i=$y(!1),o=i[0];return i=dR.bind(null,i[1]),Xr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=Et,p=Xr();if(gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Kt===null)throw Error(t(349));(po&30)!==0||Fy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Hy(jy.bind(null,h,_,i),[i]),h.flags|=2048,Kl(9,Uy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Xr(),o=Kt.identifierPrefix;if(gt){var l=Si,h=Ii;l=(h&~(1<<32-En(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ql++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=hR++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},gR={readContext:nr,useCallback:Yy,useContext:nr,useEffect:hp,useImperativeHandle:Qy,useInsertionEffect:qy,useLayoutEffect:Gy,useMemo:Xy,useReducer:up,useRef:Wy,useState:function(){return up(Gl)},useDebugValue:dp,useDeferredValue:function(i){var o=rr();return Jy(o,zt.memoizedState,i)},useTransition:function(){var i=up(Gl)[0],o=rr().memoizedState;return[i,o]},useMutableSource:My,useSyncExternalStore:Vy,useId:Zy,unstable_isNewReconciler:!1},_R={readContext:nr,useCallback:Yy,useContext:nr,useEffect:hp,useImperativeHandle:Qy,useInsertionEffect:qy,useLayoutEffect:Gy,useMemo:Xy,useReducer:cp,useRef:Wy,useState:function(){return cp(Gl)},useDebugValue:dp,useDeferredValue:function(i){var o=rr();return zt===null?o.memoizedState=i:Jy(o,zt.memoizedState,i)},useTransition:function(){var i=cp(Gl)[0],o=rr().memoizedState;return[i,o]},useMutableSource:My,useSyncExternalStore:Vy,useId:Zy,unstable_isNewReconciler:!1};function Sr(i,o){if(i&&i.defaultProps){o=re({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function fp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:re({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var rh={isMounted:function(i){return(i=i._reactInternals)?mr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=In(),p=hs(i),_=Ri(h,p);_.payload=o,l!=null&&(_.callback=l),o=as(i,_,p),o!==null&&(Ar(o,i,p,h),Qc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=In(),p=hs(i),_=Ri(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=as(i,_,p),o!==null&&(Ar(o,i,p,h),Qc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=In(),h=hs(i),p=Ri(l,h);p.tag=2,o!=null&&(p.callback=o),o=as(i,p,h),o!==null&&(Ar(o,i,h,l),Qc(o,i,h))}};function rv(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!Ol(l,h)||!Ol(p,_):!0}function iv(i,o,l){var h=!1,p=is,_=o.contextType;return typeof _=="object"&&_!==null?_=nr(_):(p=kn(o)?lo:un.current,h=o.contextTypes,_=(h=h!=null)?ma(i,p):is),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=rh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function sv(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&rh.enqueueReplaceState(o,o.state,null)}function pp(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},ep(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=nr(_):(_=kn(o)?lo:un.current,p.context=ma(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(fp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&rh.enqueueReplaceState(p,p.state,null),Yc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ia(i,o){try{var l="",h=o;do l+=De(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function mp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function gp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var yR=typeof WeakMap=="function"?WeakMap:Map;function ov(i,o,l){l=Ri(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){ch||(ch=!0,xp=h),gp(i,o)},l}function av(i,o,l){l=Ri(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){gp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){gp(i,o),typeof h!="function"&&(us===null?us=new Set([this]):us.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function lv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new yR;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=bR.bind(null,i,o,l),o.then(i,i))}function uv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function cv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ri(-1,1),o.tag=2,as(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var vR=j.ReactCurrentOwner,Pn=!1;function Tn(i,o,l,h){o.child=i===null?Ny(o,null,l,h):va(o,i.child,l,h)}function hv(i,o,l,h,p){l=l.render;var _=o.ref;return wa(o,p),h=ap(i,o,l,h,_,p),l=lp(),i!==null&&!Pn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ai(i,o,p)):(gt&&l&&Wf(o),o.flags|=1,Tn(i,o,h,p),o.child)}function dv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Fp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,fv(i,o,_,h,p)):(i=gh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ol,l(w,h)&&i.ref===o.ref)return Ai(i,o,p)}return o.flags|=1,i=fs(_,h),i.ref=o.ref,i.return=o,o.child=i}function fv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Ol(_,h)&&i.ref===o.ref)if(Pn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Pn=!0);else return o.lanes=i.lanes,Ai(i,o,p)}return _p(i,o,l,h,p)}function pv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ca,Wn),Wn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,at(Ca,Wn),Wn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,at(Ca,Wn),Wn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,at(Ca,Wn),Wn|=h;return Tn(i,o,p,l),o.child}function mv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function _p(i,o,l,h,p){var _=kn(l)?lo:un.current;return _=ma(o,_),wa(o,p),l=ap(i,o,l,h,_,p),h=lp(),i!==null&&!Pn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ai(i,o,p)):(gt&&h&&Wf(o),o.flags|=1,Tn(i,o,l,p),o.child)}function gv(i,o,l,h,p){if(kn(l)){var _=!0;Bc(o)}else _=!1;if(wa(o,p),o.stateNode===null)sh(i,o),iv(o,l,h),pp(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,R=o.memoizedProps;w.props=R;var x=w.context,H=l.contextType;typeof H=="object"&&H!==null?H=nr(H):(H=kn(l)?lo:un.current,H=ma(o,H));var ee=l.getDerivedStateFromProps,ne=typeof ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";ne||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||x!==H)&&sv(o,w,h,H),os=!1;var Z=o.memoizedState;w.state=Z,Yc(o,h,w,p),x=o.memoizedState,R!==h||Z!==x||An.current||os?(typeof ee=="function"&&(fp(o,l,ee,h),x=o.memoizedState),(R=os||rv(o,l,R,h,Z,x,H))?(ne||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=x),w.props=h,w.state=x,w.context=H,h=R):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,by(i,o),R=o.memoizedProps,H=o.type===o.elementType?R:Sr(o.type,R),w.props=H,ne=o.pendingProps,Z=w.context,x=l.contextType,typeof x=="object"&&x!==null?x=nr(x):(x=kn(l)?lo:un.current,x=ma(o,x));var pe=l.getDerivedStateFromProps;(ee=typeof pe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==ne||Z!==x)&&sv(o,w,h,x),os=!1,Z=o.memoizedState,w.state=Z,Yc(o,h,w,p);var ye=o.memoizedState;R!==ne||Z!==ye||An.current||os?(typeof pe=="function"&&(fp(o,l,pe,h),ye=o.memoizedState),(H=os||rv(o,l,H,h,Z,ye,x)||!1)?(ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ye,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ye,x)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ye),w.props=h,w.state=ye,w.context=x,h=H):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),h=!1)}return yp(i,o,l,h,_,p)}function yp(i,o,l,h,p,_){mv(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&wy(o,l,!1),Ai(i,o,_);h=o.stateNode,vR.current=o;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=va(o,i.child,null,_),o.child=va(o,null,R,_)):Tn(i,o,R,_),o.memoizedState=h.state,p&&wy(o,l,!0),o.child}function _v(i){var o=i.stateNode;o.pendingContext?vy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&vy(i,o.context,!1),tp(i,o.containerInfo)}function yv(i,o,l,h,p){return ya(),Kf(p),o.flags|=256,Tn(i,o,l,h),o.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function Ep(i){return{baseLanes:i,cachePool:null,transitions:null}}function vv(i,o,l){var h=o.pendingProps,p=vt.current,_=!1,w=(o.flags&128)!==0,R;if((R=w)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),at(vt,p&1),i===null)return Gf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=_h(w,h,0,null),i=vo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Ep(l),o.memoizedState=vp,i):wp(o,w));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return ER(i,o,w,h,R,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,R=p.sibling;var x={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=x,o.deletions=null):(h=fs(p,x),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?_=fs(R,_):(_=vo(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?Ep(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=vp,h}return _=i.child,i=_.sibling,h=fs(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function wp(i,o){return o=_h({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function ih(i,o,l,h){return h!==null&&Kf(h),va(o,i.child,null,l),i=wp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function ER(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=mp(Error(t(422))),ih(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=_h({mode:"visible",children:h.children},p,0,null),_=vo(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&va(o,i.child,null,w),o.child.memoizedState=Ep(w),o.memoizedState=vp,_);if((o.mode&1)===0)return ih(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,_=Error(t(419)),h=mp(_,h,void 0),ih(i,o,w,h)}if(R=(w&i.childLanes)!==0,Pn||R){if(h=Kt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ci(i,p),Ar(h,i,p,-1))}return Vp(),h=mp(Error(t(421))),ih(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=DR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,$n=ns(p.nextSibling),zn=o,gt=!0,Ir=null,i!==null&&(er[tr++]=Ii,er[tr++]=Si,er[tr++]=uo,Ii=i.id,Si=i.overflow,uo=o),o=wp(o,h.children),o.flags|=4096,o)}function Ev(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Jf(i.return,o,l)}function Tp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function wv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(Tn(i,o,h.children,l),h=vt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ev(i,l,o);else if(i.tag===19)Ev(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(at(vt,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Xc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Tp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Xc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Tp(o,!0,l,null,_);break;case"together":Tp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function sh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ai(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),mo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=fs(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=fs(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function wR(i,o,l){switch(o.tag){case 3:_v(o),ya();break;case 5:Ly(o);break;case 1:kn(o.type)&&Bc(o);break;case 4:tp(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;at(Gc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(at(vt,vt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?vv(i,o,l):(at(vt,vt.current&1),i=Ai(i,o,l),i!==null?i.sibling:null);at(vt,vt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return wv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),at(vt,vt.current),h)break;return null;case 22:case 23:return o.lanes=0,pv(i,o,l)}return Ai(i,o,l)}var Tv,Ip,Iv,Sv;Tv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ip=function(){},Iv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,fo(Yr.current);var _=null;switch(l){case"input":p=hr(i,p),h=hr(i,h),_=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),_=[];break;case"textarea":p=Wi(i,p),h=Wi(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Fc)}ct(l,h);var w;l=null;for(H in p)if(!h.hasOwnProperty(H)&&p.hasOwnProperty(H)&&p[H]!=null)if(H==="style"){var R=p[H];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(s.hasOwnProperty(H)?_||(_=[]):(_=_||[]).push(H,null));for(H in h){var x=h[H];if(R=p!=null?p[H]:void 0,h.hasOwnProperty(H)&&x!==R&&(x!=null||R!=null))if(H==="style")if(R){for(w in R)!R.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in x)x.hasOwnProperty(w)&&R[w]!==x[w]&&(l||(l={}),l[w]=x[w])}else l||(_||(_=[]),_.push(H,l)),l=x;else H==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,R=R?R.__html:void 0,x!=null&&R!==x&&(_=_||[]).push(H,x)):H==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push(H,""+x):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(s.hasOwnProperty(H)?(x!=null&&H==="onScroll"&&ht("scroll",i),_||R===x||(_=[])):(_=_||[]).push(H,x))}l&&(_=_||[]).push("style",l);var H=_;(o.updateQueue=H)&&(o.flags|=4)}},Sv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Ql(i,o){if(!gt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function hn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function TR(i,o,l){var h=o.pendingProps;switch(Hf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(o),null;case 1:return kn(o.type)&&jc(),hn(o),null;case 3:return h=o.stateNode,Ta(),dt(An),dt(un),ip(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Hc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ir!==null&&(Op(Ir),Ir=null))),Ip(i,o),hn(o),null;case 5:np(o);var p=fo(Wl.current);if(l=o.type,i!==null&&o.stateNode!=null)Iv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return hn(o),null}if(i=fo(Yr.current),Hc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Qr]=o,h[Ul]=_,i=(o.mode&1)!==0,l){case"dialog":ht("cancel",h),ht("close",h);break;case"iframe":case"object":case"embed":ht("load",h);break;case"video":case"audio":for(p=0;p<Ml.length;p++)ht(Ml[p],h);break;case"source":ht("error",h);break;case"img":case"image":case"link":ht("error",h),ht("load",h);break;case"details":ht("toggle",h);break;case"input":Vr(h,_),ht("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},ht("invalid",h);break;case"textarea":pi(h,_),ht("invalid",h)}ct(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var R=_[w];w==="children"?typeof R=="string"?h.textContent!==R&&(_.suppressHydrationWarning!==!0&&Vc(h.textContent,R,i),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(_.suppressHydrationWarning!==!0&&Vc(h.textContent,R,i),p=["children",""+R]):s.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&ht("scroll",h)}switch(l){case"input":Kn(h),Fr(h,_,!0);break;case"textarea":Kn(h),Ks(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Fc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=_t(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Qr]=o,i[Ul]=h,Tv(i,o,!1,!1),o.stateNode=i;e:{switch(w=Dt(l,h),l){case"dialog":ht("cancel",i),ht("close",i),p=h;break;case"iframe":case"object":case"embed":ht("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ml.length;p++)ht(Ml[p],i);p=h;break;case"source":ht("error",i),p=h;break;case"img":case"image":case"link":ht("error",i),ht("load",i),p=h;break;case"details":ht("toggle",i),p=h;break;case"input":Vr(i,h),p=hr(i,h),ht("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),ht("invalid",i);break;case"textarea":pi(i,h),p=Wi(i,h),ht("invalid",i);break;default:p=h}ct(l,p),R=p;for(_ in R)if(R.hasOwnProperty(_)){var x=R[_];_==="style"?jr(i,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&W(i,x)):_==="children"?typeof x=="string"?(l!=="textarea"||x!=="")&&ce(i,x):typeof x=="number"&&ce(i,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?x!=null&&_==="onScroll"&&ht("scroll",i):x!=null&&te(i,_,x,w))}switch(l){case"input":Kn(i),Fr(i,h,!1);break;case"textarea":Kn(i),Ks(i);break;case"option":h.value!=null&&i.setAttribute("value",""+We(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?dr(i,!!h.multiple,_,!1):h.defaultValue!=null&&dr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Fc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return hn(o),null;case 6:if(i&&o.stateNode!=null)Sv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=fo(Wl.current),fo(Yr.current),Hc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Qr]=o,(_=h.nodeValue!==l)&&(i=zn,i!==null))switch(i.tag){case 3:Vc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Vc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Qr]=o,o.stateNode=h}return hn(o),null;case 13:if(dt(vt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(gt&&$n!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ay(),ya(),o.flags|=98560,_=!1;else if(_=Hc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Qr]=o}else ya(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;hn(o),_=!1}else Ir!==null&&(Op(Ir),Ir=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(vt.current&1)!==0?$t===0&&($t=3):Vp())),o.updateQueue!==null&&(o.flags|=4),hn(o),null);case 4:return Ta(),Ip(i,o),i===null&&Vl(o.stateNode.containerInfo),hn(o),null;case 10:return Xf(o.type._context),hn(o),null;case 17:return kn(o.type)&&jc(),hn(o),null;case 19:if(dt(vt),_=o.memoizedState,_===null)return hn(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)Ql(_,!1);else{if($t!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=Xc(i),w!==null){for(o.flags|=128,Ql(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return at(vt,vt.current&1|2),o.child}i=i.sibling}_.tail!==null&&ot()>Ra&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304)}else{if(!h)if(i=Xc(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!gt)return hn(o),null}else 2*ot()-_.renderingStartTime>Ra&&l!==1073741824&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=ot(),o.sibling=null,l=vt.current,at(vt,h?l&1|2:l&1),o):(hn(o),null);case 22:case 23:return Mp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Wn&1073741824)!==0&&(hn(o),o.subtreeFlags&6&&(o.flags|=8192)):hn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function IR(i,o){switch(Hf(o),o.tag){case 1:return kn(o.type)&&jc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ta(),dt(An),dt(un),ip(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return np(o),null;case 13:if(dt(vt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ya()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return dt(vt),null;case 4:return Ta(),null;case 10:return Xf(o.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var oh=!1,dn=!1,SR=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Sa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Tt(i,o,h)}else l.current=null}function Sp(i,o,l){try{l()}catch(h){Tt(i,o,h)}}var Cv=!1;function CR(i,o){if(Mf=Zi,i=ry(),kf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,R=-1,x=-1,H=0,ee=0,ne=i,Z=null;t:for(;;){for(var pe;ne!==l||p!==0&&ne.nodeType!==3||(R=w+p),ne!==_||h!==0&&ne.nodeType!==3||(x=w+h),ne.nodeType===3&&(w+=ne.nodeValue.length),(pe=ne.firstChild)!==null;)Z=ne,ne=pe;for(;;){if(ne===i)break t;if(Z===l&&++H===p&&(R=w),Z===_&&++ee===h&&(x=w),(pe=ne.nextSibling)!==null)break;ne=Z,Z=ne.parentNode}ne=pe}l=R===-1||x===-1?null:{start:R,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vf={focusedElem:i,selectionRange:l},Zi=!1,_e=o;_e!==null;)if(o=_e,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,_e=i;else for(;_e!==null;){o=_e;try{var ye=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var ve=ye.memoizedProps,At=ye.memoizedState,z=o.stateNode,O=z.getSnapshotBeforeUpdate(o.elementType===o.type?ve:Sr(o.type,ve),At);z.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(se){Tt(o,o.return,se)}if(i=o.sibling,i!==null){i.return=o.return,_e=i;break}_e=o.return}return ye=Cv,Cv=!1,ye}function Yl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Sp(o,l,_)}p=p.next}while(p!==h)}}function ah(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Cp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Rv(i){var o=i.alternate;o!==null&&(i.alternate=null,Rv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Qr],delete o[Ul],delete o[Bf],delete o[aR],delete o[lR])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Av(i){return i.tag===5||i.tag===3||i.tag===4}function kv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Av(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Rp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Fc));else if(h!==4&&(i=i.child,i!==null))for(Rp(i,o,l),i=i.sibling;i!==null;)Rp(i,o,l),i=i.sibling}function Ap(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ap(i,o,l),i=i.sibling;i!==null;)Ap(i,o,l),i=i.sibling}var nn=null,Cr=!1;function ls(i,o,l){for(l=l.child;l!==null;)Pv(i,o,l),l=l.sibling}function Pv(i,o,l){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(eo,l)}catch{}switch(l.tag){case 5:dn||Sa(l,o);case 6:var h=nn,p=Cr;nn=null,ls(i,o,l),nn=h,Cr=p,nn!==null&&(Cr?(i=nn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):nn.removeChild(l.stateNode));break;case 18:nn!==null&&(Cr?(i=nn,l=l.stateNode,i.nodeType===8?jf(i.parentNode,l):i.nodeType===1&&jf(i,l),Er(i)):jf(nn,l.stateNode));break;case 4:h=nn,p=Cr,nn=l.stateNode.containerInfo,Cr=!0,ls(i,o,l),nn=h,Cr=p;break;case 0:case 11:case 14:case 15:if(!dn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Sp(l,o,w),p=p.next}while(p!==h)}ls(i,o,l);break;case 1:if(!dn&&(Sa(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){Tt(l,o,R)}ls(i,o,l);break;case 21:ls(i,o,l);break;case 22:l.mode&1?(dn=(h=dn)||l.memoizedState!==null,ls(i,o,l),dn=h):ls(i,o,l);break;default:ls(i,o,l)}}function Nv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new SR),o.forEach(function(h){var p=OR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Rr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,R=w;e:for(;R!==null;){switch(R.tag){case 5:nn=R.stateNode,Cr=!1;break e;case 3:nn=R.stateNode.containerInfo,Cr=!0;break e;case 4:nn=R.stateNode.containerInfo,Cr=!0;break e}R=R.return}if(nn===null)throw Error(t(160));Pv(_,w,p),nn=null,Cr=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(H){Tt(p,o,H)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)xv(o,i),o=o.sibling}function xv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Rr(o,i),Jr(i),h&4){try{Yl(3,i,i.return),ah(3,i)}catch(ve){Tt(i,i.return,ve)}try{Yl(5,i,i.return)}catch(ve){Tt(i,i.return,ve)}}break;case 1:Rr(o,i),Jr(i),h&512&&l!==null&&Sa(l,l.return);break;case 5:if(Rr(o,i),Jr(i),h&512&&l!==null&&Sa(l,l.return),i.flags&32){var p=i.stateNode;try{ce(p,"")}catch(ve){Tt(i,i.return,ve)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,R=i.type,x=i.updateQueue;if(i.updateQueue=null,x!==null)try{R==="input"&&_.type==="radio"&&_.name!=null&&di(p,_),Dt(R,w);var H=Dt(R,_);for(w=0;w<x.length;w+=2){var ee=x[w],ne=x[w+1];ee==="style"?jr(p,ne):ee==="dangerouslySetInnerHTML"?W(p,ne):ee==="children"?ce(p,ne):te(p,ee,ne,H)}switch(R){case"input":fi(p,_);break;case"textarea":Hi(p,_);break;case"select":var Z=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var pe=_.value;pe!=null?dr(p,!!_.multiple,pe,!1):Z!==!!_.multiple&&(_.defaultValue!=null?dr(p,!!_.multiple,_.defaultValue,!0):dr(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ul]=_}catch(ve){Tt(i,i.return,ve)}}break;case 6:if(Rr(o,i),Jr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(ve){Tt(i,i.return,ve)}}break;case 3:if(Rr(o,i),Jr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Er(o.containerInfo)}catch(ve){Tt(i,i.return,ve)}break;case 4:Rr(o,i),Jr(i);break;case 13:Rr(o,i),Jr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Np=ot())),h&4&&Nv(i);break;case 22:if(ee=l!==null&&l.memoizedState!==null,i.mode&1?(dn=(H=dn)||ee,Rr(o,i),dn=H):Rr(o,i),Jr(i),h&8192){if(H=i.memoizedState!==null,(i.stateNode.isHidden=H)&&!ee&&(i.mode&1)!==0)for(_e=i,ee=i.child;ee!==null;){for(ne=_e=ee;_e!==null;){switch(Z=_e,pe=Z.child,Z.tag){case 0:case 11:case 14:case 15:Yl(4,Z,Z.return);break;case 1:Sa(Z,Z.return);var ye=Z.stateNode;if(typeof ye.componentWillUnmount=="function"){h=Z,l=Z.return;try{o=h,ye.props=o.memoizedProps,ye.state=o.memoizedState,ye.componentWillUnmount()}catch(ve){Tt(h,l,ve)}}break;case 5:Sa(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Ov(ne);continue}}pe!==null?(pe.return=Z,_e=pe):Ov(ne)}ee=ee.sibling}e:for(ee=null,ne=i;;){if(ne.tag===5){if(ee===null){ee=ne;try{p=ne.stateNode,H?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(R=ne.stateNode,x=ne.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,R.style.display=Ht("display",w))}catch(ve){Tt(i,i.return,ve)}}}else if(ne.tag===6){if(ee===null)try{ne.stateNode.nodeValue=H?"":ne.memoizedProps}catch(ve){Tt(i,i.return,ve)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===i)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===i)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===i)break e;ee===ne&&(ee=null),ne=ne.return}ee===ne&&(ee=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:Rr(o,i),Jr(i),h&4&&Nv(i);break;case 21:break;default:Rr(o,i),Jr(i)}}function Jr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Av(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ce(p,""),h.flags&=-33);var _=kv(i);Ap(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,R=kv(i);Rp(i,R,w);break;default:throw Error(t(161))}}catch(x){Tt(i,i.return,x)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function RR(i,o,l){_e=i,bv(i)}function bv(i,o,l){for(var h=(i.mode&1)!==0;_e!==null;){var p=_e,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||oh;if(!w){var R=p.alternate,x=R!==null&&R.memoizedState!==null||dn;R=oh;var H=dn;if(oh=w,(dn=x)&&!H)for(_e=p;_e!==null;)w=_e,x=w.child,w.tag===22&&w.memoizedState!==null?Lv(p):x!==null?(x.return=w,_e=x):Lv(p);for(;_!==null;)_e=_,bv(_),_=_.sibling;_e=p,oh=R,dn=H}Dv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,_e=_):Dv(i)}}function Dv(i){for(;_e!==null;){var o=_e;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:dn||ah(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!dn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Sr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Oy(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Oy(o,w,l)}break;case 5:var R=o.stateNode;if(l===null&&o.flags&4){l=R;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&l.focus();break;case"img":x.src&&(l.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var H=o.alternate;if(H!==null){var ee=H.memoizedState;if(ee!==null){var ne=ee.dehydrated;ne!==null&&Er(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||o.flags&512&&Cp(o)}catch(Z){Tt(o,o.return,Z)}}if(o===i){_e=null;break}if(l=o.sibling,l!==null){l.return=o.return,_e=l;break}_e=o.return}}function Ov(i){for(;_e!==null;){var o=_e;if(o===i){_e=null;break}var l=o.sibling;if(l!==null){l.return=o.return,_e=l;break}_e=o.return}}function Lv(i){for(;_e!==null;){var o=_e;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{ah(4,o)}catch(x){Tt(o,l,x)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(x){Tt(o,p,x)}}var _=o.return;try{Cp(o)}catch(x){Tt(o,_,x)}break;case 5:var w=o.return;try{Cp(o)}catch(x){Tt(o,w,x)}}}catch(x){Tt(o,o.return,x)}if(o===i){_e=null;break}var R=o.sibling;if(R!==null){R.return=o.return,_e=R;break}_e=o.return}}var AR=Math.ceil,lh=j.ReactCurrentDispatcher,kp=j.ReactCurrentOwner,ir=j.ReactCurrentBatchConfig,Ge=0,Kt=null,Lt=null,rn=0,Wn=0,Ca=rs(0),$t=0,Xl=null,mo=0,uh=0,Pp=0,Jl=null,Nn=null,Np=0,Ra=1/0,ki=null,ch=!1,xp=null,us=null,hh=!1,cs=null,dh=0,Zl=0,bp=null,fh=-1,ph=0;function In(){return(Ge&6)!==0?ot():fh!==-1?fh:fh=ot()}function hs(i){return(i.mode&1)===0?1:(Ge&2)!==0&&rn!==0?rn&-rn:cR.transition!==null?(ph===0&&(ph=no()),ph):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Al(i.type)),i)}function Ar(i,o,l,h){if(50<Zl)throw Zl=0,bp=null,Error(t(185));Qi(i,l,h),((Ge&2)===0||i!==Kt)&&(i===Kt&&((Ge&2)===0&&(uh|=l),$t===4&&ds(i,rn)),xn(i,h),l===1&&Ge===0&&(o.mode&1)===0&&(Ra=ot()+500,zc&&ss()))}function xn(i,o){var l=i.callbackNode;gi(i,o);var h=to(i,i===Kt?rn:0);if(h===0)l!==null&&Tl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Tl(l),o===1)i.tag===0?uR(Vv.bind(null,i)):Ty(Vv.bind(null,i)),sR(function(){(Ge&6)===0&&ss()}),l=null;else{switch(Xi(h)){case 1:l=Zs;break;case 4:l=qi;break;case 16:l=Xn;break;case 536870912:l=pc;break;default:l=Xn}l=Hv(l,Mv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Mv(i,o){if(fh=-1,ph=0,(Ge&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Aa()&&i.callbackNode!==l)return null;var h=to(i,i===Kt?rn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=mh(i,h);else{o=h;var p=Ge;Ge|=2;var _=Uv();(Kt!==i||rn!==o)&&(ki=null,Ra=ot()+500,_o(i,o));do try{NR();break}catch(R){Fv(i,R)}while(!0);Yf(),lh.current=_,Ge=p,Lt!==null?o=0:(Kt=null,rn=0,o=$t)}if(o!==0){if(o===2&&(p=Un(i),p!==0&&(h=p,o=Dp(i,p))),o===1)throw l=Xl,_o(i,0),ds(i,h),xn(i,ot()),l;if(o===6)ds(i,h);else{if(p=i.current.alternate,(h&30)===0&&!kR(p)&&(o=mh(i,h),o===2&&(_=Un(i),_!==0&&(h=_,o=Dp(i,_))),o===1))throw l=Xl,_o(i,0),ds(i,h),xn(i,ot()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:yo(i,Nn,ki);break;case 3:if(ds(i,h),(h&130023424)===h&&(o=Np+500-ot(),10<o)){if(to(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){In(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Uf(yo.bind(null,i,Nn,ki),o);break}yo(i,Nn,ki);break;case 4:if(ds(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-En(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=ot()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*AR(h/1960))-h,10<h){i.timeoutHandle=Uf(yo.bind(null,i,Nn,ki),h);break}yo(i,Nn,ki);break;case 5:yo(i,Nn,ki);break;default:throw Error(t(329))}}}return xn(i,ot()),i.callbackNode===l?Mv.bind(null,i):null}function Dp(i,o){var l=Jl;return i.current.memoizedState.isDehydrated&&(_o(i,o).flags|=256),i=mh(i,o),i!==2&&(o=Nn,Nn=l,o!==null&&Op(o)),i}function Op(i){Nn===null?Nn=i:Nn.push.apply(Nn,i)}function kR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!Tr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ds(i,o){for(o&=~Pp,o&=~uh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-En(o),h=1<<l;i[l]=-1,o&=~h}}function Vv(i){if((Ge&6)!==0)throw Error(t(327));Aa();var o=to(i,0);if((o&1)===0)return xn(i,ot()),null;var l=mh(i,o);if(i.tag!==0&&l===2){var h=Un(i);h!==0&&(o=h,l=Dp(i,h))}if(l===1)throw l=Xl,_o(i,0),ds(i,o),xn(i,ot()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,yo(i,Nn,ki),xn(i,ot()),null}function Lp(i,o){var l=Ge;Ge|=1;try{return i(o)}finally{Ge=l,Ge===0&&(Ra=ot()+500,zc&&ss())}}function go(i){cs!==null&&cs.tag===0&&(Ge&6)===0&&Aa();var o=Ge;Ge|=1;var l=ir.transition,h=ze;try{if(ir.transition=null,ze=1,i)return i()}finally{ze=h,ir.transition=l,Ge=o,(Ge&6)===0&&ss()}}function Mp(){Wn=Ca.current,dt(Ca)}function _o(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,iR(l)),Lt!==null)for(l=Lt.return;l!==null;){var h=l;switch(Hf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&jc();break;case 3:Ta(),dt(An),dt(un),ip();break;case 5:np(h);break;case 4:Ta();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:Xf(h.type._context);break;case 22:case 23:Mp()}l=l.return}if(Kt=i,Lt=i=fs(i.current,null),rn=Wn=o,$t=0,Xl=null,Pp=uh=mo=0,Nn=Jl=null,ho!==null){for(o=0;o<ho.length;o++)if(l=ho[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}ho=null}return i}function Fv(i,o){do{var l=Lt;try{if(Yf(),Jc.current=nh,Zc){for(var h=Et.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Zc=!1}if(po=0,Gt=zt=Et=null,Hl=!1,ql=0,kp.current=null,l===null||l.return===null){$t=1,Xl=o,Lt=null;break}e:{var _=i,w=l.return,R=l,x=o;if(o=rn,R.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var H=x,ee=R,ne=ee.tag;if((ee.mode&1)===0&&(ne===0||ne===11||ne===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var pe=uv(w);if(pe!==null){pe.flags&=-257,cv(pe,w,R,_,o),pe.mode&1&&lv(_,H,o),o=pe,x=H;var ye=o.updateQueue;if(ye===null){var ve=new Set;ve.add(x),o.updateQueue=ve}else ye.add(x);break e}else{if((o&1)===0){lv(_,H,o),Vp();break e}x=Error(t(426))}}else if(gt&&R.mode&1){var At=uv(w);if(At!==null){(At.flags&65536)===0&&(At.flags|=256),cv(At,w,R,_,o),Kf(Ia(x,R));break e}}_=x=Ia(x,R),$t!==4&&($t=2),Jl===null?Jl=[_]:Jl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var z=ov(_,x,o);Dy(_,z);break e;case 1:R=x;var O=_.type,$=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(us===null||!us.has($)))){_.flags|=65536,o&=-o,_.lanes|=o;var se=av(_,R,o);Dy(_,se);break e}}_=_.return}while(_!==null)}Bv(l)}catch(Ee){o=Ee,Lt===l&&l!==null&&(Lt=l=l.return);continue}break}while(!0)}function Uv(){var i=lh.current;return lh.current=nh,i===null?nh:i}function Vp(){($t===0||$t===3||$t===2)&&($t=4),Kt===null||(mo&268435455)===0&&(uh&268435455)===0||ds(Kt,rn)}function mh(i,o){var l=Ge;Ge|=2;var h=Uv();(Kt!==i||rn!==o)&&(ki=null,_o(i,o));do try{PR();break}catch(p){Fv(i,p)}while(!0);if(Yf(),Ge=l,lh.current=h,Lt!==null)throw Error(t(261));return Kt=null,rn=0,$t}function PR(){for(;Lt!==null;)jv(Lt)}function NR(){for(;Lt!==null&&!dc();)jv(Lt)}function jv(i){var o=Wv(i.alternate,i,Wn);i.memoizedProps=i.pendingProps,o===null?Bv(i):Lt=o,kp.current=null}function Bv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=TR(l,o,Wn),l!==null){Lt=l;return}}else{if(l=IR(l,o),l!==null){l.flags&=32767,Lt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{$t=6,Lt=null;return}}if(o=o.sibling,o!==null){Lt=o;return}Lt=o=i}while(o!==null);$t===0&&($t=5)}function yo(i,o,l){var h=ze,p=ir.transition;try{ir.transition=null,ze=1,xR(i,o,l,h)}finally{ir.transition=p,ze=h}return null}function xR(i,o,l,h){do Aa();while(cs!==null);if((Ge&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(it(i,_),i===Kt&&(Lt=Kt=null,rn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||hh||(hh=!0,Hv(Xn,function(){return Aa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ir.transition,ir.transition=null;var w=ze;ze=1;var R=Ge;Ge|=4,kp.current=null,CR(i,l),xv(l,i),XC(Vf),Zi=!!Mf,Vf=Mf=null,i.current=l,RR(l),Ef(),Ge=R,ze=w,ir.transition=_}else i.current=l;if(hh&&(hh=!1,cs=i,dh=p),_=i.pendingLanes,_===0&&(us=null),mc(l.stateNode),xn(i,ot()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(ch)throw ch=!1,i=xp,xp=null,i;return(dh&1)!==0&&i.tag!==0&&Aa(),_=i.pendingLanes,(_&1)!==0?i===bp?Zl++:(Zl=0,bp=i):Zl=0,ss(),null}function Aa(){if(cs!==null){var i=Xi(dh),o=ir.transition,l=ze;try{if(ir.transition=null,ze=16>i?16:i,cs===null)var h=!1;else{if(i=cs,cs=null,dh=0,(Ge&6)!==0)throw Error(t(331));var p=Ge;for(Ge|=4,_e=i.current;_e!==null;){var _=_e,w=_.child;if((_e.flags&16)!==0){var R=_.deletions;if(R!==null){for(var x=0;x<R.length;x++){var H=R[x];for(_e=H;_e!==null;){var ee=_e;switch(ee.tag){case 0:case 11:case 15:Yl(8,ee,_)}var ne=ee.child;if(ne!==null)ne.return=ee,_e=ne;else for(;_e!==null;){ee=_e;var Z=ee.sibling,pe=ee.return;if(Rv(ee),ee===H){_e=null;break}if(Z!==null){Z.return=pe,_e=Z;break}_e=pe}}}var ye=_.alternate;if(ye!==null){var ve=ye.child;if(ve!==null){ye.child=null;do{var At=ve.sibling;ve.sibling=null,ve=At}while(ve!==null)}}_e=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,_e=w;else e:for(;_e!==null;){if(_=_e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Yl(9,_,_.return)}var z=_.sibling;if(z!==null){z.return=_.return,_e=z;break e}_e=_.return}}var O=i.current;for(_e=O;_e!==null;){w=_e;var $=w.child;if((w.subtreeFlags&2064)!==0&&$!==null)$.return=w,_e=$;else e:for(w=O;_e!==null;){if(R=_e,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:ah(9,R)}}catch(Ee){Tt(R,R.return,Ee)}if(R===w){_e=null;break e}var se=R.sibling;if(se!==null){se.return=R.return,_e=se;break e}_e=R.return}}if(Ge=p,ss(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(eo,i)}catch{}h=!0}return h}finally{ze=l,ir.transition=o}}return!1}function zv(i,o,l){o=Ia(l,o),o=ov(i,o,1),i=as(i,o,1),o=In(),i!==null&&(Qi(i,1,o),xn(i,o))}function Tt(i,o,l){if(i.tag===3)zv(i,i,l);else for(;o!==null;){if(o.tag===3){zv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(us===null||!us.has(h))){i=Ia(l,i),i=av(o,i,1),o=as(o,i,1),i=In(),o!==null&&(Qi(o,1,i),xn(o,i));break}}o=o.return}}function bR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=In(),i.pingedLanes|=i.suspendedLanes&l,Kt===i&&(rn&l)===l&&($t===4||$t===3&&(rn&130023424)===rn&&500>ot()-Np?_o(i,0):Pp|=l),xn(i,o)}function $v(i,o){o===0&&((i.mode&1)===0?o=1:(o=Yo,Yo<<=1,(Yo&130023424)===0&&(Yo=4194304)));var l=In();i=Ci(i,o),i!==null&&(Qi(i,o,l),xn(i,l))}function DR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),$v(i,l)}function OR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),$v(i,l)}var Wv;Wv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||An.current)Pn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return Pn=!1,wR(i,o,l);Pn=(i.flags&131072)!==0}else Pn=!1,gt&&(o.flags&1048576)!==0&&Iy(o,Wc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;sh(i,o),i=o.pendingProps;var p=ma(o,un.current);wa(o,l),p=ap(null,o,h,i,p,l);var _=lp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,kn(h)?(_=!0,Bc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ep(o),p.updater=rh,o.stateNode=p,p._reactInternals=o,pp(o,h,i,l),o=yp(null,o,h,!0,_,l)):(o.tag=0,gt&&_&&Wf(o),Tn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(sh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=MR(h),i=Sr(h,i),p){case 0:o=_p(null,o,h,i,l);break e;case 1:o=gv(null,o,h,i,l);break e;case 11:o=hv(null,o,h,i,l);break e;case 14:o=dv(null,o,h,Sr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Sr(h,p),_p(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Sr(h,p),gv(i,o,h,p,l);case 3:e:{if(_v(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,by(i,o),Yc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ia(Error(t(423)),o),o=yv(i,o,h,l,p);break e}else if(h!==p){p=Ia(Error(t(424)),o),o=yv(i,o,h,l,p);break e}else for($n=ns(o.stateNode.containerInfo.firstChild),zn=o,gt=!0,Ir=null,l=Ny(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ya(),h===p){o=Ai(i,o,l);break e}Tn(i,o,h,l)}o=o.child}return o;case 5:return Ly(o),i===null&&Gf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Ff(h,p)?w=null:_!==null&&Ff(h,_)&&(o.flags|=32),mv(i,o),Tn(i,o,w,l),o.child;case 6:return i===null&&Gf(o),null;case 13:return vv(i,o,l);case 4:return tp(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=va(o,null,h,l):Tn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Sr(h,p),hv(i,o,h,p,l);case 7:return Tn(i,o,o.pendingProps,l),o.child;case 8:return Tn(i,o,o.pendingProps.children,l),o.child;case 12:return Tn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,at(Gc,h._currentValue),h._currentValue=w,_!==null)if(Tr(_.value,w)){if(_.children===p.children&&!An.current){o=Ai(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var R=_.dependencies;if(R!==null){w=_.child;for(var x=R.firstContext;x!==null;){if(x.context===h){if(_.tag===1){x=Ri(-1,l&-l),x.tag=2;var H=_.updateQueue;if(H!==null){H=H.shared;var ee=H.pending;ee===null?x.next=x:(x.next=ee.next,ee.next=x),H.pending=x}}_.lanes|=l,x=_.alternate,x!==null&&(x.lanes|=l),Jf(_.return,l,o),R.lanes|=l;break}x=x.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),Jf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}Tn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,wa(o,l),p=nr(p),h=h(p),o.flags|=1,Tn(i,o,h,l),o.child;case 14:return h=o.type,p=Sr(h,o.pendingProps),p=Sr(h.type,p),dv(i,o,h,p,l);case 15:return fv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Sr(h,p),sh(i,o),o.tag=1,kn(h)?(i=!0,Bc(o)):i=!1,wa(o,l),iv(o,h,p),pp(o,h,p,l),yp(null,o,h,!0,i,l);case 19:return wv(i,o,l);case 22:return pv(i,o,l)}throw Error(t(156,o.tag))};function Hv(i,o){return Ko(i,o)}function LR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(i,o,l,h){return new LR(i,o,l,h)}function Fp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function MR(i){if(typeof i=="function")return Fp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===U)return 11;if(i===rt)return 14}return 2}function fs(i,o){var l=i.alternate;return l===null?(l=sr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function gh(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")Fp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case b:return vo(l.children,p,_,o);case C:w=8,p|=8;break;case k:return i=sr(12,l,o,p|2),i.elementType=k,i.lanes=_,i;case A:return i=sr(13,l,o,p),i.elementType=A,i.lanes=_,i;case Qe:return i=sr(19,l,o,p),i.elementType=Qe,i.lanes=_,i;case de:return _h(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:w=10;break e;case D:w=9;break e;case U:w=11;break e;case rt:w=14;break e;case ie:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=sr(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function vo(i,o,l,h){return i=sr(7,i,h,o),i.lanes=l,i}function _h(i,o,l,h){return i=sr(22,i,h,o),i.elementType=de,i.lanes=l,i.stateNode={isHidden:!1},i}function Up(i,o,l){return i=sr(6,i,null,o),i.lanes=l,i}function jp(i,o,l){return o=sr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function VR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Bp(i,o,l,h,p,_,w,R,x){return i=new VR(i,o,l,R,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=sr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(_),i}function FR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function qv(i){if(!i)return is;i=i._reactInternals;e:{if(mr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(kn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(kn(l))return Ey(i,l,o)}return o}function Gv(i,o,l,h,p,_,w,R,x){return i=Bp(l,h,!0,i,p,_,w,R,x),i.context=qv(null),l=i.current,h=In(),p=hs(l),_=Ri(h,p),_.callback=o??null,as(l,_,p),i.current.lanes=p,Qi(i,p,h),xn(i,h),i}function yh(i,o,l,h){var p=o.current,_=In(),w=hs(p);return l=qv(l),o.context===null?o.context=l:o.pendingContext=l,o=Ri(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=as(p,o,w),i!==null&&(Ar(i,p,w,_),Qc(i,p,w)),w}function vh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Kv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function zp(i,o){Kv(i,o),(i=i.alternate)&&Kv(i,o)}function UR(){return null}var Qv=typeof reportError=="function"?reportError:function(i){console.error(i)};function $p(i){this._internalRoot=i}Eh.prototype.render=$p.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));yh(i,o,null,null)},Eh.prototype.unmount=$p.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;go(function(){yh(null,i,null,null)}),o[wi]=null}};function Eh(i){this._internalRoot=i}Eh.prototype.unstable_scheduleHydration=function(i){if(i){var o=Ec();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Hr.length&&o!==0&&o<Hr[l].priority;l++);Hr.splice(l,0,i),l===0&&Ic(i)}};function Wp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function wh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Yv(){}function jR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var H=vh(w);_.call(H)}}var w=Gv(o,h,i,0,null,!1,!1,"",Yv);return i._reactRootContainer=w,i[wi]=w.current,Vl(i.nodeType===8?i.parentNode:i),go(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var H=vh(x);R.call(H)}}var x=Bp(i,0,!1,null,null,!1,!1,"",Yv);return i._reactRootContainer=x,i[wi]=x.current,Vl(i.nodeType===8?i.parentNode:i),go(function(){yh(o,x,l,h)}),x}function Th(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var R=p;p=function(){var x=vh(w);R.call(x)}}yh(o,w,i,p)}else w=jR(l,o,i,p,h);return vh(w)}yc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Gi(o.pendingLanes);l!==0&&(Yi(o,l|1),xn(o,ot()),(Ge&6)===0&&(Ra=ot()+500,ss()))}break;case 13:go(function(){var h=Ci(i,1);if(h!==null){var p=In();Ar(h,i,1,p)}}),zp(i,1)}},Xo=function(i){if(i.tag===13){var o=Ci(i,134217728);if(o!==null){var l=In();Ar(o,i,134217728,l)}zp(i,134217728)}},vc=function(i){if(i.tag===13){var o=hs(i),l=Ci(i,o);if(l!==null){var h=In();Ar(l,i,o,h)}zp(i,o)}},Ec=function(){return ze},wc=function(i,o){var l=ze;try{return ze=i,o()}finally{ze=l}},Br=function(i,o,l){switch(o){case"input":if(fi(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Uc(h);if(!p)throw Error(t(90));yn(h),fi(h,p)}}}break;case"textarea":Hi(i,l);break;case"select":o=l.value,o!=null&&dr(i,!!l.multiple,o,!1)}},Qs=Lp,yl=go;var BR={usingClientEntryPoint:!1,Events:[jl,fa,Uc,$r,_l,Lp]},eu={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zR={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wl(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||UR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ih.isDisabled&&Ih.supportsFiber)try{eo=Ih.inject(zR),Fn=Ih}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BR,bn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(o))throw Error(t(200));return FR(i,o,null,l)},bn.createRoot=function(i,o){if(!Wp(i))throw Error(t(299));var l=!1,h="",p=Qv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Bp(i,1,!1,null,null,l,!1,h,p),i[wi]=o.current,Vl(i.nodeType===8?i.parentNode:i),new $p(o)},bn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wl(o),i=i===null?null:i.stateNode,i},bn.flushSync=function(i){return go(i)},bn.hydrate=function(i,o,l){if(!wh(o))throw Error(t(200));return Th(null,i,o,!0,l)},bn.hydrateRoot=function(i,o,l){if(!Wp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=Qv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=Gv(o,null,i,1,l??null,p,!1,_,w),i[wi]=o.current,Vl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Eh(o)},bn.render=function(i,o,l){if(!wh(o))throw Error(t(200));return Th(null,i,o,!1,l)},bn.unmountComponentAtNode=function(i){if(!wh(i))throw Error(t(40));return i._reactRootContainer?(go(function(){Th(null,null,i,!1,function(){i._reactRootContainer=null,i[wi]=null})}),!0):!1},bn.unstable_batchedUpdates=Lp,bn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!wh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Th(i,o,l,!1,h)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var iE;function XR(){if(iE)return Gp.exports;iE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gp.exports=YR(),Gp.exports}var sE;function JR(){if(sE)return Sh;sE=1;var n=XR();return Sh.createRoot=n.createRoot,Sh.hydrateRoot=n.hydrateRoot,Sh}var ZR=JR();const eA=OT(ZR),tA=()=>{};var oE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=function(n,e){if(!n)throw il(e)},il=function(n){return new Error("Firebase Database ("+LT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},nA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,P=m&63;f||(P=64,u||(T=64)),r.push(t[y],t[E],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(MT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new rA;const T=a<<2|d>>4;if(r.push(T),m!==64){const P=d<<4&240|m>>2;if(r.push(P),E!==64){const V=m<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VT=function(n){const e=MT(n);return lg.encodeByteArray(e,!0)},Kh=function(n){return VT(n).replace(/\./g,"")},Qh=function(n){try{return lg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(n){return FT(void 0,n)}function FT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!sA(t)||(n[t]=FT(n[t],e[t]));return n}function sA(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=()=>oA().__FIREBASE_DEFAULTS__,lA=()=>{if(typeof process>"u"||typeof oE>"u")return;const n=oE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},xd=()=>{try{return tA()||aA()||lA()||uA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},UT=n=>{var e,t;return(t=(e=xd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ug=n=>{const e=UT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},jT=()=>{var n;return(n=xd())===null||n===void 0?void 0:n.config},BT=n=>{var e;return(e=xd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kh(JSON.stringify(t)),Kh(JSON.stringify(u)),""].join(".")}const gu={};function cA(){const n={prod:[],emulator:[]};for(const e of Object.keys(gu))gu[e]?n.emulator.push(e):n.prod.push(e);return n}function hA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let aE=!1;function Dd(n,e){if(typeof window>"u"||typeof document>"u"||!ui(window.location.host)||gu[n]===e||gu[n]||aE)return;gu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=cA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{aE=!0,u()},T}function y(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=hA(r),P=t("text"),V=document.getElementById(P)||document.createElement("span"),L=t("learnmore"),F=document.getElementById(L)||document.createElement("a"),oe=t("preprendIcon"),Y=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const te=T.element;d(te),y(F,L);const j=m();f(Y,oe),te.append(Y,V,F,j),document.body.appendChild(te)}a?(V.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gn())}function dA(){var n;const e=(n=xd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const n=gn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gA(){return LT.NODE_ADMIN===!0}function _A(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function vA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FirebaseError";class ci extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=EA,Object.setPrototypeOf(this,ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qu.prototype.create)}}class Qu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?wA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new ci(s,d,r)}}function wA(n,e){return n.replace(TA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){return JSON.parse(n)}function Zt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=ku(Qh(a[0])||""),t=ku(Qh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},IA=function(n){const e=$T(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},SA=function(n){const e=$T(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $a(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Li(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(lE(a)&&lE(u)){if(!Li(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function lE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function uu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):E<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const T=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function RA(n,e){const t=new AA(n,e);return t.subscribe.bind(t)}class AA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Yp),s.error===void 0&&(s.error=Yp),s.complete===void 0&&(s.complete=Yp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yp(){}function Wa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ae(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Od=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){return n&&n._delegate?n._delegate:n}class Mi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ni;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:Eo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Eo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Eo){return this.instances.has(e)}getOptions(e=Eo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Eo){return this.component?this.component.multipleInstances?e:Eo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xA(n){return n===Eo?void 0:n}function bA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(je||(je={}));const OA={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},LA=je.INFO,MA={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},VA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=MA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=LA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const FA=(n,e)=>e.some(t=>n instanceof t);let uE,cE;function UA(){return uE||(uE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return cE||(cE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WT=new WeakMap,ym=new WeakMap,HT=new WeakMap,Xp=new WeakMap,dg=new WeakMap;function BA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Ts(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&WT.set(t,n)}).catch(()=>{}),dg.set(e,n),e}function zA(n){if(ym.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});ym.set(n,e)}let vm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ym.get(n);if(e==="objectStoreNames")return n.objectStoreNames||HT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ts(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $A(n){vm=n(vm)}function WA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jp(this),e,...t);return HT.set(r,e.sort?e.sort():[e]),Ts(r)}:jA().includes(n)?function(...e){return n.apply(Jp(this),e),Ts(WT.get(this))}:function(...e){return Ts(n.apply(Jp(this),e))}}function HA(n){return typeof n=="function"?WA(n):(n instanceof IDBTransaction&&zA(n),FA(n,UA())?new Proxy(n,vm):n)}function Ts(n){if(n instanceof IDBRequest)return BA(n);if(Xp.has(n))return Xp.get(n);const e=HA(n);return e!==n&&(Xp.set(n,e),dg.set(e,n)),e}const Jp=n=>dg.get(n);function qA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Ts(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ts(u.result),f.oldVersion,f.newVersion,Ts(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const GA=["get","getKey","getAll","getAllKeys","count"],KA=["put","add","delete","clear"],Zp=new Map;function hE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zp.get(e))return Zp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=KA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Zp.set(e,a),a}$A(n=>({...n,get:(e,t,r)=>hE(e,t)||n.get(e,t,r),has:(e,t)=>!!hE(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function YA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Em="@firebase/app",dE="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Ld("@firebase/app"),XA="@firebase/app-compat",JA="@firebase/analytics-compat",ZA="@firebase/analytics",ek="@firebase/app-check-compat",tk="@firebase/app-check",nk="@firebase/auth",rk="@firebase/auth-compat",ik="@firebase/database",sk="@firebase/data-connect",ok="@firebase/database-compat",ak="@firebase/functions",lk="@firebase/functions-compat",uk="@firebase/installations",ck="@firebase/installations-compat",hk="@firebase/messaging",dk="@firebase/messaging-compat",fk="@firebase/performance",pk="@firebase/performance-compat",mk="@firebase/remote-config",gk="@firebase/remote-config-compat",_k="@firebase/storage",yk="@firebase/storage-compat",vk="@firebase/firestore",Ek="@firebase/ai",wk="@firebase/firestore-compat",Tk="firebase",Ik="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="[DEFAULT]",Sk={[Em]:"fire-core",[XA]:"fire-core-compat",[ZA]:"fire-analytics",[JA]:"fire-analytics-compat",[tk]:"fire-app-check",[ek]:"fire-app-check-compat",[nk]:"fire-auth",[rk]:"fire-auth-compat",[ik]:"fire-rtdb",[sk]:"fire-data-connect",[ok]:"fire-rtdb-compat",[ak]:"fire-fn",[lk]:"fire-fn-compat",[uk]:"fire-iid",[ck]:"fire-iid-compat",[hk]:"fire-fcm",[dk]:"fire-fcm-compat",[fk]:"fire-perf",[pk]:"fire-perf-compat",[mk]:"fire-rc",[gk]:"fire-rc-compat",[_k]:"fire-gcs",[yk]:"fire-gcs-compat",[vk]:"fire-fst",[wk]:"fire-fst-compat",[Ek]:"fire-vertex","fire-js":"fire-js",[Tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map,Ck=new Map,Tm=new Map;function fE(n,e){try{n.container.addComponent(e)}catch(t){Vi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bs(n){const e=n.name;if(Tm.has(e))return Vi.debug(`There were multiple attempts to register component ${e}.`),!1;Tm.set(e,n);for(const t of Jh.values())fE(t,n);for(const t of Ck.values())fE(t,n);return!0}function Yu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Hn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new Qu("app","Firebase",Rk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=Ik;function qT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Is.create("bad-app-name",{appName:String(s)});if(t||(t=jT()),!t)throw Is.create("no-options");const a=Jh.get(s);if(a){if(Li(t,a.options)&&Li(r,a.config))return a;throw Is.create("duplicate-app",{appName:s})}const u=new DA(s);for(const f of Tm.values())u.addComponent(f);const d=new Ak(t,r,u);return Jh.set(s,d),d}function Md(n=wm){const e=Jh.get(n);if(!e&&n===wm&&jT())return qT();if(!e)throw Is.create("no-app",{appName:n});return e}function cr(n,e,t){var r;let s=(r=Sk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vi.warn(d.join(" "));return}bs(new Mi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="firebase-heartbeat-database",Pk=1,Pu="firebase-heartbeat-store";let em=null;function GT(){return em||(em=qA(kk,Pk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Is.create("idb-open",{originalErrorMessage:n.message})})),em}async function Nk(n){try{const t=(await GT()).transaction(Pu),r=await t.objectStore(Pu).get(KT(n));return await t.done,r}catch(e){if(e instanceof ci)Vi.warn(e.message);else{const t=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vi.warn(t.message)}}}async function pE(n,e){try{const r=(await GT()).transaction(Pu,"readwrite");await r.objectStore(Pu).put(e,KT(n)),await r.done}catch(t){if(t instanceof ci)Vi.warn(t.message);else{const r=Is.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vi.warn(r.message)}}}function KT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=1024,bk=30;class Dk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=mE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>bk){const u=Mk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mE(),{heartbeatsToSend:r,unsentEntries:s}=Ok(this._heartbeatsCache.heartbeats),a=Kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Vi.warn(t),""}}}function mE(){return new Date().toISOString().substring(0,10)}function Ok(n,e=xk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),gE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Lk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?vA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return pE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return pE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gE(n){return Kh(JSON.stringify({version:2,heartbeats:n})).length}function Mk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(n){bs(new Mi("platform-logger",e=>new QA(e),"PRIVATE")),bs(new Mi("heartbeat",e=>new Dk(e),"PRIVATE")),cr(Em,dE,n),cr(Em,dE,"esm2017"),cr("fire-js","")}Vk("");function fg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function QT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=QT,YT=new Qu("auth","Firebase",QT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Ld("@firebase/auth");function Uk(n,...e){Zh.logLevel<=je.WARN&&Zh.warn(`Auth (${$s}): ${n}`,...e)}function Lh(n,...e){Zh.logLevel<=je.ERROR&&Zh.error(`Auth (${$s}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,...e){throw pg(n,...e)}function ti(n,...e){return pg(n,...e)}function XT(n,e,t){const r=Object.assign(Object.assign({},Fk()),{[e]:t});return new Qu("auth","Firebase",r).create(e,{appName:n.name})}function Ss(n){return XT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return YT.create(n,...e)}function Re(n,e,...t){if(!n)throw pg(e,...t)}function xi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lh(e),new Error(e)}function Fi(n,e){n||xi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jk(){return _E()==="http:"||_E()==="https:"}function _E(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||pA()||"connection"in navigator)?navigator.onLine:!0}function zk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fi(t>e,"Short delay should be less than long delay!"),this.isMobile=hg()||zT()}get(){return Bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n,e){Fi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hk=new Xu(3e4,6e4);function Fo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ws(n,e,t,r,s={}){return ZT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=sl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return fA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&ui(n.emulatorConfig.host)&&(m.credentials="include"),JT.fetch()(await eI(n,n.config.apiHost,t,d),m)})}async function ZT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},$k),e);try{const s=new Gk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ch(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ch(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Ch(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Ch(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw XT(n,y,m);Lr(n,y)}}catch(s){if(s instanceof ci)throw s;Lr(n,"network-request-failed",{message:String(s)})}}async function Vd(n,e,t,r,s={}){const a=await Ws(n,e,t,r,s);return"mfaPendingCredential"in a&&Lr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function eI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?mg(n.config,s):`${n.config.apiScheme}://${s}`;return Wk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function qk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ti(this.auth,"network-request-failed")),Hk.get())})}}function Ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ti(n,e,r);return s.customData._tokenResponse=t,s}function yE(n){return n!==void 0&&n.enterprise!==void 0}class Kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qk(n,e){return Ws(n,"GET","/v2/recaptchaConfig",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(n,e){return Ws(n,"POST","/v1/accounts:delete",e)}async function ed(n,e){return Ws(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(n,e=!1){const t=Ze(n),r=await t.getIdToken(e),s=gg(r);Re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:_u(tm(s.auth_time)),issuedAtTime:_u(tm(s.iat)),expirationTime:_u(tm(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function tm(n){return Number(n)*1e3}function gg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Lh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(Lh("Failed to decode base64 JWT payload"),null)}catch(s){return Lh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vE(n){const e=gg(n);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ci&&Jk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Jk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Nu(n,ed(t,{idToken:r}));Re(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?tI(a.providerUserInfo):[],d=t1(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Sm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function e1(n){const e=Ze(n);await td(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tI(n){return n.map(e=>{var{providerId:t}=e,r=fg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(n,e){const t=await ZT(n,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await eI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&ui(n.emulatorConfig.host)&&(f.credentials="include"),JT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function r1(n,e){return Ws(n,"POST","/v2/accounts:revokeToken",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=vE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await n1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ma;return r&&(Re(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Re(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Re(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n,e){Re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Sm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Nu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xk(this,e)}reload(){return e1(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await td(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(Ss(this.auth));const e=await this.getIdToken();return await Nu(this,Yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=t.photoURL)!==null&&u!==void 0?u:void 0,L=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,oe=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Y=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:j,isAnonymous:Te,providerData:fe,stsTokenManager:b}=t;Re(te&&b,e,"internal-error");const C=Ma.fromJSON(this.name,b);Re(typeof te=="string",e,"internal-error"),ms(E,e.name),ms(T,e.name),Re(typeof j=="boolean",e,"internal-error"),Re(typeof Te=="boolean",e,"internal-error"),ms(P,e.name),ms(V,e.name),ms(L,e.name),ms(F,e.name),ms(oe,e.name),ms(Y,e.name);const k=new Pr({uid:te,auth:e,email:T,emailVerified:j,displayName:E,isAnonymous:Te,photoURL:V,phoneNumber:P,tenantId:L,stsTokenManager:C,createdAt:oe,lastLoginAt:Y});return fe&&Array.isArray(fe)&&(k.providerData=fe.map(N=>Object.assign({},N))),F&&(k._redirectEventId=F),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ma;s.updateFromServerResponse(t);const a=new Pr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await td(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Re(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?tI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Ma;d.updateFromIdToken(r);const f=new Pr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Map;function bi(n){Fi(n instanceof Function,"Expected a class definition");let e=EE.get(n);return e?(Fi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,EE.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nI.type="NONE";const wE=nI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n,e,t){return`firebase:${n}:${e}:${t}`}class Va{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Mh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Mh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ed(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Va(bi(wE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||bi(wE);const u=Mh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const T=await ed(e,{idToken:y}).catch(()=>{});if(!T)break;E=await Pr._fromGetAccountInfoResponse(e,T,y)}else E=Pr._fromJSON(e,y);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Va(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Va(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lI(e))return"Blackberry";if(uI(e))return"Webos";if(iI(e))return"Safari";if((e.includes("chrome/")||sI(e))&&!e.includes("edge/"))return"Chrome";if(aI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rI(n=gn()){return/firefox\//i.test(n)}function iI(n=gn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sI(n=gn()){return/crios\//i.test(n)}function oI(n=gn()){return/iemobile/i.test(n)}function aI(n=gn()){return/android/i.test(n)}function lI(n=gn()){return/blackberry/i.test(n)}function uI(n=gn()){return/webos/i.test(n)}function _g(n=gn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function i1(n=gn()){var e;return _g(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s1(){return mA()&&document.documentMode===10}function cI(n=gn()){return _g(n)||aI(n)||uI(n)||lI(n)||/windows phone/i.test(n)||oI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e=[]){let t;switch(n){case"Browser":t=TE(gn());break;case"Worker":t=`${TE(gn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(n,e={}){return Ws(n,"GET","/v2/passwordPolicy",Fo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=6;class u1{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:l1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new IE(this),this.idTokenSubscription=new IE(this),this.beforeStateQueue=new o1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bi(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Va.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ed(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Hn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await td(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(Ss(this));const t=e?Ze(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a1(this),t=new u1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await r1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bi(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await Va.create(this,[bi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Uk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ol(n){return Ze(n)}class IE{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h1(n){Fd=n}function dI(n){return Fd.loadJS(n)}function d1(){return Fd.recaptchaEnterpriseScript}function f1(){return Fd.gapiScript}function p1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class m1{constructor(){this.enterprise=new g1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class g1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _1="recaptcha-enterprise",fI="NO_RECAPTCHA";class y1{constructor(e){this.type=_1,this.auth=ol(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Qk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Kk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;yE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(fI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&yE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=d1();f.length!==0&&(f+=d),dI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function SE(n,e,t,r=!1,s=!1){const a=new y1(n);let u;if(s)u=fI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function CE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await SE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await SE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(n,e){const t=Yu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Li(a,e??{}))return s;Lr(s,"already-initialized")}return t.initialize({options:e})}function E1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(bi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function w1(n,e,t){const r=ol(n);Re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=pI(e),{host:u,port:d}=T1(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Re(Li(m,r.config.emulator)&&Li(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,ui(u)?(bd(`${a}//${u}${f}`),Dd("Auth",!0)):I1()}function pI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function T1(n){const e=pI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:RE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:RE(u)}}}function RE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function I1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xi("not implemented")}_getIdTokenResponse(e){return xi("not implemented")}_linkToIdToken(e,t){return xi("not implemented")}_getReauthenticationResolver(e){return xi("not implemented")}}async function S1(n,e){return Ws(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(n,e){return Vd(n,"POST","/v1/accounts:signInWithPassword",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return Vd(n,"POST","/v1/accounts:signInWithEmailLink",Fo(n,e))}async function A1(n,e){return Vd(n,"POST","/v1/accounts:signInWithEmailLink",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends yg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new xu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CE(e,t,"signInWithPassword",C1);case"emailLink":return R1(e,{email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CE(e,r,"signUpPassword",S1);case"emailLink":return A1(e,{idToken:t,email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(n,e){return Vd(n,"POST","/v1/accounts:signInWithIdp",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="http://localhost";class Po extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Po(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=fg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Po(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Fa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fa(e,t)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N1(n){const e=lu(uu(n)).link,t=e?lu(uu(e)).deep_link_id:null,r=lu(uu(n)).deep_link_id;return(r?lu(uu(r)).link:null)||r||t||e||n}class vg{constructor(e){var t,r,s,a,u,d;const f=lu(uu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=P1((s=f.mode)!==null&&s!==void 0?s:null);Re(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=N1(e);try{return new vg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.providerId=al.PROVIDER_ID}static credential(e,t){return xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vg.parseLink(t);return Re(r,"argument-error"),xu._fromEmailAndCode(e,r.code,r.tenantId)}}al.PROVIDER_ID="password";al.EMAIL_PASSWORD_SIGN_IN_METHOD="password";al.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends mI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Ju{constructor(){super("facebook.com")}static credential(e){return Po._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.FACEBOOK_SIGN_IN_METHOD="facebook.com";gs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Ju{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Po._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _s.credential(t,r)}catch{return null}}}_s.GOOGLE_SIGN_IN_METHOD="google.com";_s.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Ju{constructor(){super("github.com")}static credential(e){return Po._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.GITHUB_SIGN_IN_METHOD="github.com";ys.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Ju{constructor(){super("twitter.com")}static credential(e,t){return Po._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vs.credential(t,r)}catch{return null}}}vs.TWITTER_SIGN_IN_METHOD="twitter.com";vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Pr._fromIdTokenResponse(e,r,s),u=AE(r);return new Ha({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=AE(r);return new Ha({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function AE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends ci{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new nd(e,t,r,s)}}function gI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(n,a,e,r):a})}async function x1(n,e,t=!1){const r=await Nu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ha._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(n,e,t=!1){const{auth:r}=n;if(Hn(r.app))return Promise.reject(Ss(r));const s="reauthenticate";try{const a=await Nu(n,gI(r,s,e,n),t);Re(a.idToken,r,"internal-error");const u=gg(a.idToken);Re(u,r,"internal-error");const{sub:d}=u;return Re(n.uid===d,r,"user-mismatch"),Ha._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Lr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(n,e,t=!1){if(Hn(n.app))return Promise.reject(Ss(n));const r="signIn",s=await gI(n,r,e),a=await Ha._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function D1(n,e){return _I(ol(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(n){const e=ol(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function L1(n,e,t){return Hn(n.app)?Promise.reject(Ss(n)):D1(Ze(n),al.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&O1(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(n,e){return Ze(n).setPersistence(e)}function V1(n,e,t,r){return Ze(n).onIdTokenChanged(e,t,r)}function F1(n,e,t){return Ze(n).beforeAuthStateChanged(e,t)}function U1(n,e,t,r){return Ze(n).onAuthStateChanged(e,t,r)}function j1(n){return Ze(n).signOut()}const rd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=1e3,z1=10;class vI extends yI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);s1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,z1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},B1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vI.type="LOCAL";const EI=vI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI extends yI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wI.type="SESSION";const TI=wI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ud(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await $1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ud.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Eg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return window}function H1(n){ni().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){return typeof ni().WorkerGlobalScope<"u"&&typeof ni().importScripts=="function"}async function q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function K1(){return II()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="firebaseLocalStorageDb",Q1=1,id="firebaseLocalStorage",CI="fbase_key";class Zu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jd(n,e){return n.transaction([id],e?"readwrite":"readonly").objectStore(id)}function Y1(){const n=indexedDB.deleteDatabase(SI);return new Zu(n).toPromise()}function Cm(){const n=indexedDB.open(SI,Q1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(id,{keyPath:CI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(id)?e(r):(r.close(),await Y1(),e(await Cm()))})})}async function kE(n,e,t){const r=jd(n,!0).put({[CI]:e,value:t});return new Zu(r).toPromise()}async function X1(n,e){const t=jd(n,!1).get(e),r=await new Zu(t).toPromise();return r===void 0?null:r.value}function PE(n,e){const t=jd(n,!0).delete(e);return new Zu(t).toPromise()}const J1=800,Z1=3;class RI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Z1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return II()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ud._getInstance(K1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await q1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cm();return await kE(e,rd,"1"),await PE(e,rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>X1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>PE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=jd(s,!1).getAll();return new Zu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RI.type="LOCAL";const eP=RI;new Xu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(n,e){return e?bi(e):(Re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nP(n){return _I(n.auth,new wg(n),n.bypassAuthState)}function rP(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),b1(t,new wg(n),n.bypassAuthState)}async function iP(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),x1(t,new wg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nP;case"linkViaPopup":case"linkViaRedirect":return iP;case"reauthViaPopup":case"reauthViaRedirect":return rP;default:Lr(this.auth,"internal-error")}}resolve(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=new Xu(2e3,1e4);class Oa extends AI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Oa.currentPopupAction&&Oa.currentPopupAction.cancel(),Oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Fi(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ti(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ti(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sP.get())};e()}}Oa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="pendingRedirect",Vh=new Map;class aP extends AI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vh.get(this.auth._key());if(!e){try{const r=await lP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vh.set(this.auth._key(),e)}return this.bypassAuthState||Vh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lP(n,e){const t=hP(e),r=cP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function uP(n,e){Vh.set(n._key(),e)}function cP(n){return bi(n._redirectPersistence)}function hP(n){return Mh(oP,n.config.apiKey,n.name)}async function dP(n,e,t=!1){if(Hn(n.app))return Promise.reject(Ss(n));const r=ol(n),s=tP(r,e),u=await new aP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=600*1e3;class pP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ti(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fP&&this.cachedEventUids.clear(),this.cachedEventUids.has(NE(e))}saveEventToCache(e){this.cachedEventUids.add(NE(e)),this.lastProcessedEventTime=Date.now()}}function NE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(n,e={}){return Ws(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yP=/^https?/;async function vP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gP(n);for(const t of e)try{if(EP(t))return}catch{}Lr(n,"unauthorized-domain")}function EP(n){const e=Im(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!yP.test(t))return!1;if(_P.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new Xu(3e4,6e4);function xE(){const n=ni().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TP(n){return new Promise((e,t)=>{var r,s,a;function u(){xE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xE(),t(ti(n,"network-request-failed"))},timeout:wP.get()})}if(!((s=(r=ni().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=ni().gapi)===null||a===void 0)&&a.load)u();else{const d=p1("iframefcb");return ni()[d]=()=>{gapi.load?u():t(ti(n,"network-request-failed"))},dI(`${f1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Fh=null,e})}let Fh=null;function IP(n){return Fh=Fh||TP(n),Fh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new Xu(5e3,15e3),CP="__/auth/iframe",RP="emulator/auth/iframe",AP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PP(n){const e=n.config;Re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mg(e,RP):`https://${n.config.authDomain}/${CP}`,r={apiKey:e.apiKey,appName:n.name,v:$s},s=kP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${sl(r).slice(1)}`}async function NP(n){const e=await IP(n),t=ni().gapi;return Re(t,n,"internal-error"),e.open({where:document.body,url:PP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=ti(n,"network-request-failed"),d=ni().setTimeout(()=>{a(u)},SP.get());function f(){ni().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bP=500,DP=600,OP="_blank",LP="http://localhost";class bE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MP(n,e,t,r=bP,s=DP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},xP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=gn().toLowerCase();t&&(d=sI(m)?OP:t),rI(m)&&(e=e||LP,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[P,V])=>`${T}${P}=${V},`,"");if(i1(m)&&d!=="_self")return VP(e||"",d),new bE(null);const E=window.open(e||"",d,y);Re(E,n,"popup-blocked");try{E.focus()}catch{}return new bE(E)}function VP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="__/auth/handler",UP="emulator/auth/handler",jP=encodeURIComponent("fac");async function DE(n,e,t,r,s,a){Re(n.config.authDomain,n,"auth-domain-config-required"),Re(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$s,eventId:s};if(e instanceof mI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Yh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Ju){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${jP}=${encodeURIComponent(f)}`:"";return`${BP(n)}?${sl(d).slice(1)}${m}`}function BP({config:n}){return n.emulator?mg(n,UP):`https://${n.authDomain}/${FP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="webStorageSupport";class zP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TI,this._completeRedirectFn=dP,this._overrideRedirectResult=uP}async _openPopup(e,t,r,s){var a;Fi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await DE(e,t,r,Im(),s);return MP(e,u,Eg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await DE(e,t,r,Im(),s);return H1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Fi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await NP(e),r=new pP(e);return t.register("authEvent",s=>(Re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nm,{type:nm},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[nm];u!==void 0&&t(!!u),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cI()||iI()||_g()}}const $P=zP;var OE="@firebase/auth",LE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qP(n){bs(new Mi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Re(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hI(n)},m=new c1(r,s,a,f);return E1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),bs(new Mi("auth-internal",e=>{const t=ol(e.getProvider("auth").getImmediate());return(r=>new WP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(OE,LE,HP(n)),cr(OE,LE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=300,KP=BT("authIdTokenMaxAge")||GP;let ME=null;const QP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>KP)return;const s=t==null?void 0:t.token;ME!==s&&(ME=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YP(n=Md()){const e=Yu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=v1(n,{popupRedirectResolver:$P,persistence:[eP,EI,TI]}),r=BT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=QP(a.toString());F1(t,u,()=>u(t.currentUser)),V1(t,d=>u(d))}}const s=UT("auth");return s&&w1(t,`http://${s}`),t}function XP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}h1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=ti("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",XP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qP("Browser");var VE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,PI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,C){function k(){}k.prototype=C.prototype,b.D=C.prototype,b.prototype=new k,b.prototype.constructor=b,b.C=function(N,D,U){for(var A=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)A[Qe-2]=arguments[Qe];return C.prototype[D].apply(N,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,C,k){k||(k=0);var N=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)N[D]=C.charCodeAt(k++)|C.charCodeAt(k++)<<8|C.charCodeAt(k++)<<16|C.charCodeAt(k++)<<24;else for(D=0;16>D;++D)N[D]=C[k++]|C[k++]<<8|C[k++]<<16|C[k++]<<24;C=b.g[0],k=b.g[1],D=b.g[2];var U=b.g[3],A=C+(U^k&(D^U))+N[0]+3614090360&4294967295;C=k+(A<<7&4294967295|A>>>25),A=U+(D^C&(k^D))+N[1]+3905402710&4294967295,U=C+(A<<12&4294967295|A>>>20),A=D+(k^U&(C^k))+N[2]+606105819&4294967295,D=U+(A<<17&4294967295|A>>>15),A=k+(C^D&(U^C))+N[3]+3250441966&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(U^k&(D^U))+N[4]+4118548399&4294967295,C=k+(A<<7&4294967295|A>>>25),A=U+(D^C&(k^D))+N[5]+1200080426&4294967295,U=C+(A<<12&4294967295|A>>>20),A=D+(k^U&(C^k))+N[6]+2821735955&4294967295,D=U+(A<<17&4294967295|A>>>15),A=k+(C^D&(U^C))+N[7]+4249261313&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(U^k&(D^U))+N[8]+1770035416&4294967295,C=k+(A<<7&4294967295|A>>>25),A=U+(D^C&(k^D))+N[9]+2336552879&4294967295,U=C+(A<<12&4294967295|A>>>20),A=D+(k^U&(C^k))+N[10]+4294925233&4294967295,D=U+(A<<17&4294967295|A>>>15),A=k+(C^D&(U^C))+N[11]+2304563134&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(U^k&(D^U))+N[12]+1804603682&4294967295,C=k+(A<<7&4294967295|A>>>25),A=U+(D^C&(k^D))+N[13]+4254626195&4294967295,U=C+(A<<12&4294967295|A>>>20),A=D+(k^U&(C^k))+N[14]+2792965006&4294967295,D=U+(A<<17&4294967295|A>>>15),A=k+(C^D&(U^C))+N[15]+1236535329&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(D^U&(k^D))+N[1]+4129170786&4294967295,C=k+(A<<5&4294967295|A>>>27),A=U+(k^D&(C^k))+N[6]+3225465664&4294967295,U=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(U^C))+N[11]+643717713&4294967295,D=U+(A<<14&4294967295|A>>>18),A=k+(U^C&(D^U))+N[0]+3921069994&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(D^U&(k^D))+N[5]+3593408605&4294967295,C=k+(A<<5&4294967295|A>>>27),A=U+(k^D&(C^k))+N[10]+38016083&4294967295,U=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(U^C))+N[15]+3634488961&4294967295,D=U+(A<<14&4294967295|A>>>18),A=k+(U^C&(D^U))+N[4]+3889429448&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(D^U&(k^D))+N[9]+568446438&4294967295,C=k+(A<<5&4294967295|A>>>27),A=U+(k^D&(C^k))+N[14]+3275163606&4294967295,U=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(U^C))+N[3]+4107603335&4294967295,D=U+(A<<14&4294967295|A>>>18),A=k+(U^C&(D^U))+N[8]+1163531501&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(D^U&(k^D))+N[13]+2850285829&4294967295,C=k+(A<<5&4294967295|A>>>27),A=U+(k^D&(C^k))+N[2]+4243563512&4294967295,U=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(U^C))+N[7]+1735328473&4294967295,D=U+(A<<14&4294967295|A>>>18),A=k+(U^C&(D^U))+N[12]+2368359562&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(k^D^U)+N[5]+4294588738&4294967295,C=k+(A<<4&4294967295|A>>>28),A=U+(C^k^D)+N[8]+2272392833&4294967295,U=C+(A<<11&4294967295|A>>>21),A=D+(U^C^k)+N[11]+1839030562&4294967295,D=U+(A<<16&4294967295|A>>>16),A=k+(D^U^C)+N[14]+4259657740&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(k^D^U)+N[1]+2763975236&4294967295,C=k+(A<<4&4294967295|A>>>28),A=U+(C^k^D)+N[4]+1272893353&4294967295,U=C+(A<<11&4294967295|A>>>21),A=D+(U^C^k)+N[7]+4139469664&4294967295,D=U+(A<<16&4294967295|A>>>16),A=k+(D^U^C)+N[10]+3200236656&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(k^D^U)+N[13]+681279174&4294967295,C=k+(A<<4&4294967295|A>>>28),A=U+(C^k^D)+N[0]+3936430074&4294967295,U=C+(A<<11&4294967295|A>>>21),A=D+(U^C^k)+N[3]+3572445317&4294967295,D=U+(A<<16&4294967295|A>>>16),A=k+(D^U^C)+N[6]+76029189&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(k^D^U)+N[9]+3654602809&4294967295,C=k+(A<<4&4294967295|A>>>28),A=U+(C^k^D)+N[12]+3873151461&4294967295,U=C+(A<<11&4294967295|A>>>21),A=D+(U^C^k)+N[15]+530742520&4294967295,D=U+(A<<16&4294967295|A>>>16),A=k+(D^U^C)+N[2]+3299628645&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(D^(k|~U))+N[0]+4096336452&4294967295,C=k+(A<<6&4294967295|A>>>26),A=U+(k^(C|~D))+N[7]+1126891415&4294967295,U=C+(A<<10&4294967295|A>>>22),A=D+(C^(U|~k))+N[14]+2878612391&4294967295,D=U+(A<<15&4294967295|A>>>17),A=k+(U^(D|~C))+N[5]+4237533241&4294967295,k=D+(A<<21&4294967295|A>>>11),A=C+(D^(k|~U))+N[12]+1700485571&4294967295,C=k+(A<<6&4294967295|A>>>26),A=U+(k^(C|~D))+N[3]+2399980690&4294967295,U=C+(A<<10&4294967295|A>>>22),A=D+(C^(U|~k))+N[10]+4293915773&4294967295,D=U+(A<<15&4294967295|A>>>17),A=k+(U^(D|~C))+N[1]+2240044497&4294967295,k=D+(A<<21&4294967295|A>>>11),A=C+(D^(k|~U))+N[8]+1873313359&4294967295,C=k+(A<<6&4294967295|A>>>26),A=U+(k^(C|~D))+N[15]+4264355552&4294967295,U=C+(A<<10&4294967295|A>>>22),A=D+(C^(U|~k))+N[6]+2734768916&4294967295,D=U+(A<<15&4294967295|A>>>17),A=k+(U^(D|~C))+N[13]+1309151649&4294967295,k=D+(A<<21&4294967295|A>>>11),A=C+(D^(k|~U))+N[4]+4149444226&4294967295,C=k+(A<<6&4294967295|A>>>26),A=U+(k^(C|~D))+N[11]+3174756917&4294967295,U=C+(A<<10&4294967295|A>>>22),A=D+(C^(U|~k))+N[2]+718787259&4294967295,D=U+(A<<15&4294967295|A>>>17),A=k+(U^(D|~C))+N[9]+3951481745&4294967295,b.g[0]=b.g[0]+C&4294967295,b.g[1]=b.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+D&4294967295,b.g[3]=b.g[3]+U&4294967295}r.prototype.u=function(b,C){C===void 0&&(C=b.length);for(var k=C-this.blockSize,N=this.B,D=this.h,U=0;U<C;){if(D==0)for(;U<=k;)s(this,b,U),U+=this.blockSize;if(typeof b=="string"){for(;U<C;)if(N[D++]=b.charCodeAt(U++),D==this.blockSize){s(this,N),D=0;break}}else for(;U<C;)if(N[D++]=b[U++],D==this.blockSize){s(this,N),D=0;break}}this.h=D,this.o+=C},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var C=1;C<b.length-8;++C)b[C]=0;var k=8*this.o;for(C=b.length-8;C<b.length;++C)b[C]=k&255,k/=256;for(this.u(b),b=Array(16),C=k=0;4>C;++C)for(var N=0;32>N;N+=8)b[k++]=this.g[C]>>>N&255;return b};function a(b,C){var k=d;return Object.prototype.hasOwnProperty.call(k,b)?k[b]:k[b]=C(b)}function u(b,C){this.h=C;for(var k=[],N=!0,D=b.length-1;0<=D;D--){var U=b[D]|0;N&&U==C||(k[D]=U,N=!1)}this.g=k}var d={};function f(b){return-128<=b&&128>b?a(b,function(C){return new u([C|0],0>C?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return F(m(-b));for(var C=[],k=1,N=0;b>=k;N++)C[N]=b/k|0,k*=4294967296;return new u(C,0)}function y(b,C){if(b.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(b.charAt(0)=="-")return F(y(b.substring(1),C));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=m(Math.pow(C,8)),N=E,D=0;D<b.length;D+=8){var U=Math.min(8,b.length-D),A=parseInt(b.substring(D,D+U),C);8>U?(U=m(Math.pow(C,U)),N=N.j(U).add(m(A))):(N=N.j(k),N=N.add(m(A)))}return N}var E=f(0),T=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(L(this))return-F(this).m();for(var b=0,C=1,k=0;k<this.g.length;k++){var N=this.i(k);b+=(0<=N?N:4294967296+N)*C,C*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V(this))return"0";if(L(this))return"-"+F(this).toString(b);for(var C=m(Math.pow(b,6)),k=this,N="";;){var D=j(k,C).g;k=oe(k,D.j(C));var U=((0<k.g.length?k.g[0]:k.h)>>>0).toString(b);if(k=D,V(k))return U+N;for(;6>U.length;)U="0"+U;N=U+N}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function V(b){if(b.h!=0)return!1;for(var C=0;C<b.g.length;C++)if(b.g[C]!=0)return!1;return!0}function L(b){return b.h==-1}n.l=function(b){return b=oe(this,b),L(b)?-1:V(b)?0:1};function F(b){for(var C=b.g.length,k=[],N=0;N<C;N++)k[N]=~b.g[N];return new u(k,~b.h).add(T)}n.abs=function(){return L(this)?F(this):this},n.add=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0,D=0;D<=C;D++){var U=N+(this.i(D)&65535)+(b.i(D)&65535),A=(U>>>16)+(this.i(D)>>>16)+(b.i(D)>>>16);N=A>>>16,U&=65535,A&=65535,k[D]=A<<16|U}return new u(k,k[k.length-1]&-2147483648?-1:0)};function oe(b,C){return b.add(F(C))}n.j=function(b){if(V(this)||V(b))return E;if(L(this))return L(b)?F(this).j(F(b)):F(F(this).j(b));if(L(b))return F(this.j(F(b)));if(0>this.l(P)&&0>b.l(P))return m(this.m()*b.m());for(var C=this.g.length+b.g.length,k=[],N=0;N<2*C;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<b.g.length;D++){var U=this.i(N)>>>16,A=this.i(N)&65535,Qe=b.i(D)>>>16,rt=b.i(D)&65535;k[2*N+2*D]+=A*rt,Y(k,2*N+2*D),k[2*N+2*D+1]+=U*rt,Y(k,2*N+2*D+1),k[2*N+2*D+1]+=A*Qe,Y(k,2*N+2*D+1),k[2*N+2*D+2]+=U*Qe,Y(k,2*N+2*D+2)}for(N=0;N<C;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=C;N<2*C;N++)k[N]=0;return new u(k,0)};function Y(b,C){for(;(b[C]&65535)!=b[C];)b[C+1]+=b[C]>>>16,b[C]&=65535,C++}function te(b,C){this.g=b,this.h=C}function j(b,C){if(V(C))throw Error("division by zero");if(V(b))return new te(E,E);if(L(b))return C=j(F(b),C),new te(F(C.g),F(C.h));if(L(C))return C=j(b,F(C)),new te(F(C.g),C.h);if(30<b.g.length){if(L(b)||L(C))throw Error("slowDivide_ only works with positive integers.");for(var k=T,N=C;0>=N.l(b);)k=Te(k),N=Te(N);var D=fe(k,1),U=fe(N,1);for(N=fe(N,2),k=fe(k,2);!V(N);){var A=U.add(N);0>=A.l(b)&&(D=D.add(k),U=A),N=fe(N,1),k=fe(k,1)}return C=oe(b,D.j(C)),new te(D,C)}for(D=E;0<=b.l(C);){for(k=Math.max(1,Math.floor(b.m()/C.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),U=m(k),A=U.j(C);L(A)||0<A.l(b);)k-=N,U=m(k),A=U.j(C);V(U)&&(U=T),D=D.add(U),b=oe(b,A)}return new te(D,b)}n.A=function(b){return j(this,b).h},n.and=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0;N<C;N++)k[N]=this.i(N)&b.i(N);return new u(k,this.h&b.h)},n.or=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0;N<C;N++)k[N]=this.i(N)|b.i(N);return new u(k,this.h|b.h)},n.xor=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0;N<C;N++)k[N]=this.i(N)^b.i(N);return new u(k,this.h^b.h)};function Te(b){for(var C=b.g.length+1,k=[],N=0;N<C;N++)k[N]=b.i(N)<<1|b.i(N-1)>>>31;return new u(k,b.h)}function fe(b,C){var k=C>>5;C%=32;for(var N=b.g.length-k,D=[],U=0;U<N;U++)D[U]=0<C?b.i(U+k)>>>C|b.i(U+k+1)<<32-C:b.i(U+k);return new u(D,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,PI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Cs=u}).apply(typeof VE<"u"?VE:typeof self<"u"?self:typeof window<"u"?window:{});var Rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NI,cu,xI,Uh,Rm,bI,DI,OI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rh=="object"&&Rh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var B=c[S];if(!(B in v))break e;v=v[B]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,S=!1,B={next:function(){if(!S&&v<c.length){var q=v++;return{value:g(q,c[q]),done:!1}}return S=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,S),c.apply(g,B)}}return function(){return c.apply(g,arguments)}}function T(c,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,T.apply(null,arguments)}function P(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function V(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,B,q){for(var le=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)le[tt-2]=arguments[tt];return g.prototype[B].apply(S,le)}}function L(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function F(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(f(S)){const B=c.length||0,q=S.length||0;c.length=B+q;for(let le=0;le<q;le++)c[B+le]=S[le]}else c.push(S)}}class oe{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Y(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function j(c){return j[" "](c),c}j[" "]=function(){};var Te=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function fe(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function b(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function C(c){const g={};for(const v in c)g[v]=c[v];return g}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let v,S;for(let B=1;B<arguments.length;B++){S=arguments[B];for(v in S)c[v]=S[v];for(let q=0;q<k.length;q++)v=k[q],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function D(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function U(c){d.setTimeout(()=>{throw c},0)}function A(){var c=ue;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Qe{constructor(){this.h=this.g=null}add(g,v){const S=rt.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var rt=new oe(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let de,G=!1,ue=new Qe,re=()=>{const c=d.Promise.resolve(void 0);de=()=>{c.then(M)}};var M=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(v){U(v)}var g=rt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}G=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Pe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function De(c,g){if(we.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Te){e:{try{j(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Me[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.aa.h.call(this)}}V(De,we);var Me={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $e="closure_listenable_"+(1e6*Math.random()|0),We=0;function et(c,g,v,S,B){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=B,this.key=++We,this.da=this.fa=!1}function ut(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Kn(c){this.src=c,this.g={},this.h=0}Kn.prototype.add=function(c,g,v,S,B){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var le=Qn(c,g,S,B);return-1<le?(g=c[le],v||(g.fa=!1)):(g=new et(g,this.src,q,!!S,B),g.fa=v,c.push(g)),g};function yn(c,g){var v=g.type;if(v in c.g){var S=c.g[v],B=Array.prototype.indexOf.call(S,g,void 0),q;(q=0<=B)&&Array.prototype.splice.call(S,B,1),q&&(ut(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Qn(c,g,v,S){for(var B=0;B<c.length;++B){var q=c[B];if(!q.da&&q.listener==g&&q.capture==!!v&&q.ha==S)return B}return-1}var hr="closure_lm_"+(1e6*Math.random()|0),Vr={};function di(c,g,v,S,B){if(Array.isArray(g)){for(var q=0;q<g.length;q++)di(c,g[q],v,S,B);return null}return v=Ks(v),c&&c[$e]?c.K(g,v,m(S)?!!S.capture:!1,B):fi(c,g,v,!1,S,B)}function fi(c,g,v,S,B,q){if(!g)throw Error("Invalid event type");var le=m(B)?!!B.capture:!!B,tt=pi(c);if(tt||(c[hr]=tt=new Kn(c)),v=tt.add(g,v,S,le,q),v.proxy)return v;if(S=Fr(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)Pe||(B=le),B===void 0&&(B=!1),c.addEventListener(g.toString(),S,B);else if(c.attachEvent)c.attachEvent(dr(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Fr(){function c(v){return g.call(c.src,c.listener,v)}const g=Wi;return c}function Ur(c,g,v,S,B){if(Array.isArray(g))for(var q=0;q<g.length;q++)Ur(c,g[q],v,S,B);else S=m(S)?!!S.capture:!!S,v=Ks(v),c&&c[$e]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],v=Qn(q,v,S,B),-1<v&&(ut(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=pi(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Qn(g,v,S,B)),(v=-1<c?g[c]:null)&&Yn(v))}function Yn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[$e])yn(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(dr(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=pi(g))?(yn(v,c),v.h==0&&(v.src=null,g[hr]=null)):ut(c)}}}function dr(c){return c in Vr?Vr[c]:Vr[c]="on"+c}function Wi(c,g){if(c.da)c=!0;else{g=new De(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&Yn(c),c=v.call(S,g)}return c}function pi(c){return c=c[hr],c instanceof Kn?c:null}var Hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(c){return typeof c=="function"?c:(c[Hi]||(c[Hi]=function(g){return c.handleEvent(g)}),c[Hi])}function _t(){K.call(this),this.i=new Kn(this),this.M=this,this.F=null}V(_t,K),_t.prototype[$e]=!0,_t.prototype.removeEventListener=function(c,g,v,S){Ur(this,c,g,v,S)};function Ct(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new we(g,c);else if(g instanceof we)g.target=g.target||c;else{var B=g;g=new we(S,c),N(g,B)}if(B=!0,v)for(var q=v.length-1;0<=q;q--){var le=g.g=v[q];B=xt(le,S,!0,g)&&B}if(le=g.g=c,B=xt(le,S,!0,g)&&B,B=xt(le,S,!1,g)&&B,v)for(q=0;q<v.length;q++)le=g.g=v[q],B=xt(le,S,!1,g)&&B}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)ut(v[S]);delete c.g[g],c.h--}}this.F=null},_t.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},_t.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function xt(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,q=0;q<g.length;++q){var le=g[q];if(le&&!le.da&&le.capture==v){var tt=le.listener,Bt=le.ha||le.src;le.fa&&yn(c.i,le),B=tt.call(Bt,S)!==!1&&B}}return B&&!S.defaultPrevented}function W(c,g,v){if(typeof c=="function")v&&(c=T(c,v));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function ce(c){c.g=W(()=>{c.g=null,c.i&&(c.i=!1,ce(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ge extends K{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ce(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(c){K.call(this),this.h=c,this.g={}}V(Ye,K);var Ht=[];function jr(c){fe(c.g,function(g,v){this.g.hasOwnProperty(v)&&Yn(g)},c),c.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),jr(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bt=d.JSON.stringify,ct=d.JSON.parse,Dt=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function yt(){}yt.prototype.h=null;function vn(c){return c.h||(c.h=c.i())}function Br(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zr(){we.call(this,"d")}V(zr,we);function $o(){we.call(this,"c")}V($o,we);var $r={},_l=null;function Qs(){return _l=_l||new _t}$r.La="serverreachability";function yl(c){we.call(this,$r.La,c)}V(yl,we);function mi(c){const g=Qs();Ct(g,new yl(g))}$r.STAT_EVENT="statevent";function vl(c,g){we.call(this,$r.STAT_EVENT,c),this.stat=g}V(vl,we);function Rt(c){const g=Qs();Ct(g,new vl(g,c))}$r.Ma="timingevent";function Wo(c,g){we.call(this,$r.Ma,c),this.size=g}V(Wo,we);function fr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Ys(){this.g=!0}Ys.prototype.xa=function(){this.g=!1};function Xs(c,g,v,S,B,q){c.info(function(){if(c.g)if(q)for(var le="",tt=q.split("&"),Bt=0;Bt<tt.length;Bt++){var He=tt[Bt].split("=");if(1<He.length){var qt=He[0];He=He[1];var Ot=qt.split("_");le=2<=Ot.length&&Ot[1]=="type"?le+(qt+"="+He+"&"):le+(qt+"=redacted&")}}else le=null;else le=q;return"XMLHTTP REQ ("+S+") [attempt "+B+"]: "+g+`
`+v+`
`+le})}function Ho(c,g,v,S,B,q,le){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+B+"]: "+g+`
`+v+`
`+q+" "+le})}function pr(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+vf(c,v)+(S?" "+S:"")})}function El(c,g){c.info(function(){return"TIMEOUT: "+g})}Ys.prototype.info=function(){};function vf(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var B=S[1];if(Array.isArray(B)&&!(1>B.length)){var q=B[0];if(q!="noop"&&q!="stop"&&q!="close")for(var le=1;le<B.length;le++)B[le]=""}}}}return bt(v)}catch{return g}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function Js(){}V(Js,yt),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},mr=new Js;function gr(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var wl={},Go={};function Ko(c,g,v){c.L=1,c.v=Yi(Un(g)),c.m=v,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),ot(c),c.A=Un(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Ji(v.i,"t",S),c.C=0,v=c.j.J,c.h=new hc,c.g=Pc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new ge(T(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Ht[0]=B.toString()),B=Ht);for(var q=0;q<B.length;q++){var le=di(v,B[q],S||g.handleEvent,!1,g.h||g);if(!le)break;g.g[le.key]=le}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),mi(),Xs(c.i,c.u,c.A,c.l,c.R,c.m)}gr.prototype.ca=function(c){c=c.target;const g=this.M;g&&Rn(c)==3?g.j():this.Y(c)},gr.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=Rn(this.g);var g=this.g.Ba();const Zn=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||Ot!=4||g==7||(g==8||0>=Zn?mi(3):mi(2)),Zs(this);var v=this.g.Z();this.X=v;t:if(dc(this)){var S=kl(this.g);c="";var B=S.length,q=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),qi(this);var le="";break t}this.h.i=new d.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(q&&g==B-1)});S.length=0,this.h.g+=c,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=v==200,Ho(this.i,this.u,this.A,this.l,this.R,Ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var tt,Bt=this.g;if((tt=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(tt)){var He=tt;break t}}He=null}if(v=He)pr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,v);else{this.o=!1,this.s=3,Rt(12),Xn(this),qi(this);break e}}if(this.P){v=!0;let Bn;for(;!this.J&&this.C<le.length;)if(Bn=Ef(this,le),Bn==Go){Ot==4&&(this.s=4,Rt(14),v=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bn==wl){this.s=4,Rt(15),pr(this.i,this.l,le,"[Invalid Chunk]"),v=!1;break}else pr(this.i,this.l,Bn,null),Il(this,Bn);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||le.length!=0||this.h.h||(this.s=1,Rt(16),v=!1),this.o=this.o&&v,!v)pr(this.i,this.l,le,"[Invalid Chunked Response]"),Xn(this),qi(this);else if(0<le.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),Nl(qt),qt.M=!0,Rt(11))}}else pr(this.i,this.l,le,null),Il(this,le);Ot==4&&Xn(this),this.o&&!this.J&&(Ot==4?sa(this.j,this):(this.o=!1,ot(this)))}else ea(this.g),v==400&&0<le.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Xn(this),qi(this)}}}catch{}finally{}};function dc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ef(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?Go:(v=Number(g.substring(v,S)),isNaN(v)?wl:(S+=1,S+v>g.length?Go:(g=g.slice(S,S+v),c.C=S+v,g)))}gr.prototype.cancel=function(){this.J=!0,Xn(this)};function ot(c){c.S=Date.now()+c.I,fc(c,c.I)}function fc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=fr(T(c.ba,c),g)}function Zs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}gr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(El(this.i,this.A),this.L!=2&&(mi(),Rt(17)),Xn(this),this.s=2,qi(this)):fc(this,this.S-c)};function qi(c){c.j.G==0||c.J||sa(c.j,c)}function Xn(c){Zs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,jr(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Il(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||En(v.h,c))){if(!c.K&&En(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var B=S;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ia(v),wr(v);else break e;ra(v),Rt(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=fr(T(v.Za,v),6e3));if(1>=mc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ei(v,11)}else if((c.K||v.g==c)&&ia(v),!Y(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let He=B[g];if(v.T=He[0],He=He[1],v.G==2)if(He[0]=="c"){v.K=He[1],v.ia=He[2];const qt=He[3];qt!=null&&(v.la=qt,v.j.info("VER="+v.la));const Ot=He[4];Ot!=null&&(v.Aa=Ot,v.j.info("SVER="+v.Aa));const Zn=He[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(S=1.5*Zn,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Bn=c.g;if(Bn){const oo=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var q=S.h;q.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Sl(q,q.h),q.h=null))}if(S.D){const aa=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(S.ya=aa,it(S.I,S.D,aa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var le=c;if(S.qa=kc(S,S.J?S.ia:null,S.W),le.K){gc(S.h,le);var tt=le,Bt=S.L;Bt&&(tt.I=Bt),tt.B&&(Zs(tt),ot(tt)),S.g=le}else so(S);0<v.i.length&&Gr(v)}else He[0]!="stop"&&He[0]!="close"||Ei(v,7);else v.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Ei(v,7):tn(v):He[0]!="noop"&&v.l&&v.l.ta(He),v.v=0)}}mi(4)}catch{}}var pc=class{constructor(c,g){this.g=c,this.map=g}};function eo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function mc(c){return c.h?1:c.g?c.g.size:0}function En(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Sl(c,g){c.g?c.g.add(g):c.h=g}function gc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}eo.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _c(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return L(c.i)}function Qo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function Yo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function Gi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Yo(c),S=Qo(c),B=S.length,q=0;q<B;q++)g.call(void 0,S[q],v&&v[q],c)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),B=null;if(0<=S){var q=c[v].substring(0,S);B=c[v].substring(S+1)}else q=c[v];g(q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function gi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof gi){this.h=c.h,no(this,c.j),this.o=c.o,this.g=c.g,Ki(this,c.s),this.l=c.l;var g=c.i,v=new Wr;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Qi(this,v),this.m=c.m}else c&&(g=String(c).match(to))?(this.h=!1,no(this,g[1]||"",!0),this.o=ze(g[2]||""),this.g=ze(g[3]||"",!0),Ki(this,g[4]),this.l=ze(g[5]||"",!0),Qi(this,g[6]||"",!0),this.m=ze(g[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}gi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Xi(g,Xo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Xi(g,Xo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Xi(v,v.charAt(0)=="/"?Ec:vc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Xi(v,Cl)),c.join("")};function Un(c){return new gi(c)}function no(c,g,v){c.j=v?ze(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ki(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Qi(c,g,v){g instanceof Wr?(c.i=g,Hr(c.i,c.h)):(v||(g=Xi(g,wc)),c.i=new Wr(g,c.h))}function it(c,g,v){c.i.set(g,v)}function Yi(c){return it(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ze(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Xi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,yc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Xo=/[#\/\?@]/g,vc=/[#\?:]/g,Ec=/[#\?]/g,wc=/[#\?@]/g,Cl=/#/g;function Wr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function en(c){c.g||(c.g=new Map,c.h=0,c.i&&wf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Wr.prototype,n.add=function(c,g){en(this),this.i=null,c=Jn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function _r(c,g){en(c),g=Jn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function yr(c,g){return en(c),g=Jn(c,g),c.g.has(g)}n.forEach=function(c,g){en(this),this.g.forEach(function(v,S){v.forEach(function(B){c.call(g,B,S,this)},this)},this)},n.na=function(){en(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const B=c[S];for(let q=0;q<B.length;q++)v.push(g[S])}return v},n.V=function(c){en(this);let g=[];if(typeof c=="string")yr(this,c)&&(g=g.concat(this.g.get(Jn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return en(this),this.i=null,c=Jn(this,c),yr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ji(c,g,v){_r(c,g),0<v.length&&(c.i=null,c.g.set(Jn(c,g),L(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const q=encodeURIComponent(String(S)),le=this.V(S);for(S=0;S<le.length;S++){var B=q;le[S]!==""&&(B+="="+encodeURIComponent(String(le[S]))),c.push(B)}}return this.i=c.join("&")};function Jn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Hr(c,g){g&&!c.j&&(en(c),c.i=null,c.g.forEach(function(v,S){var B=S.toLowerCase();S!=B&&(_r(this,S),Ji(this,B,v))},c)),c.j=g}function Tf(c,g){const v=new Ys;if(d.Image){const S=new Image;S.onload=P(Cn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=P(Cn,v,"TestLoadImage: error",!1,g,S),S.onabort=P(Cn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=P(Cn,v,"TestLoadImage: timeout",!1,g,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Tc(c,g){const v=new Ys,S=new AbortController,B=setTimeout(()=>{S.abort(),Cn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(q=>{clearTimeout(B),q.ok?Cn(v,"TestPingServer: ok",!0,g):Cn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),Cn(v,"TestPingServer: error",!1,g)})}function Cn(c,g,v,S,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),S(v)}catch{}}function If(){this.g=new Dt}function Ic(c,g,v){const S=v||"";try{Gi(c,function(B,q){let le=B;m(B)&&(le=bt(B)),g.push(S+q+"="+encodeURIComponent(le))})}catch(B){throw g.push(S+"type="+encodeURIComponent("_badmap")),B}}function _i(c){this.l=c.Ub||null,this.j=c.eb||!1}V(_i,yt),_i.prototype.g=function(){return new ro(this.l,this.j)},_i.prototype.i=(function(c){return function(){return c}})({});function ro(c,g){_t.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ro,_t),n=ro.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Er(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?vr(this):Er(this),this.readyState==3&&Sc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,vr(this))},n.Qa=function(c){this.g&&(this.response=c,vr(this))},n.ga=function(){this.g&&vr(this)};function vr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Er(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function Er(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function yi(c){let g="";return fe(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function Zi(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=yi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):it(c,g,v))}function mt(c){_t.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(mt,_t);var Sf=/^https?$/i,Rl=["POST","PUT"];n=mt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?vn(this.o):vn(mr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){io(this,q);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var B in S)v.set(B,S[B]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const q of S.keys())v.set(q,S.get(q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),B=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||S||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,le]of v)this.g.setRequestHeader(q,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zo(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){io(this,q)}};function io(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Jo(c),jn(c)}function Jo(c){c.A||(c.A=!0,Ct(c,"complete"),Ct(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ct(this,"complete"),Ct(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Rn(c)!=4||c.Z()!=2)){if(c.u&&Rn(c)==4)W(c.Ea,0,c);else if(Ct(c,"readystatechange"),Rn(c)==4){c.h=!1;try{const le=c.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=le===0){var B=String(c.D).match(to)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),S=!Sf.test(B?B.toLowerCase():"")}v=S}if(v)Ct(c,"complete"),Ct(c,"success");else{c.m=6;try{var q=2<Rn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Jo(c)}}finally{jn(c)}}}}function jn(c,g){if(c.g){Zo(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ct(c,"ready");try{v.onreadystatechange=S}catch{}}}function Zo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Rn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ct(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(c){const g={};c=(c.g&&2<=Rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(Y(c[S]))continue;var v=D(c[S]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=g[B]||[];g[B]=q,q.push(v)}b(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Pl(c){this.Aa=0,this.i=[],this.j=new Ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qr("baseRetryDelayMs",5e3,c),this.cb=qr("retryDelaySeedMs",1e4,c),this.Wa=qr("forwardChannelMaxRetries",2,c),this.wa=qr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new eo(c&&c.concurrentRequestLimit),this.Da=new If,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,S){Rt(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=kc(this,null,this.W),Gr(this)};function tn(c){if(ta(c),c.G==3){var g=c.U++,v=Un(c.I);if(it(v,"SID",c.K),it(v,"RID",g),it(v,"TYPE","terminate"),vi(c,v),g=new gr(c,c.j,g),g.L=2,g.v=Yi(Un(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Pc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ot(g)}Ac(c)}function wr(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function ta(c){wr(c),c.u&&(d.clearTimeout(c.u),c.u=null),ia(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Gr(c){if(!Fn(c.h)&&!c.s){c.s=!0;var g=c.Ga;de||re(),G||(de(),G=!0),ue.add(g,c),c.B=0}}function Cf(c,g){return mc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=fr(T(c.Ga,c,g),Rc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new gr(this,this.j,c);let q=this.o;if(this.S&&(q?(q=C(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(B.H=q,q=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=es(this,B,g),v=Un(this.I),it(v,"RID",c),it(v,"CVER",22),this.D&&it(v,"X-HTTP-Session-Id",this.D),vi(this,v),q&&(this.O?g="headers="+encodeURIComponent(String(yi(q)))+"&"+g:this.m&&Zi(v,this.m,q)),Sl(this.h,B),this.Ua&&it(v,"TYPE","init"),this.P?(it(v,"$req",g),it(v,"SID","null"),B.T=!0,Ko(B,v,null)):Ko(B,v,g),this.G=2}}else this.G==3&&(c?na(this,c):this.i.length==0||Fn(this.h)||na(this))};function na(c,g){var v;g?v=g.l:v=c.U++;const S=Un(c.I);it(S,"SID",c.K),it(S,"RID",v),it(S,"AID",c.T),vi(c,S),c.m&&c.o&&Zi(S,c.m,c.o),v=new gr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=es(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sl(c.h,v),Ko(v,S,g)}function vi(c,g){c.H&&fe(c.H,function(v,S){it(g,S,v)}),c.l&&Gi({},function(v,S){it(g,S,v)})}function es(c,g,v){v=Math.min(c.i.length,v);var S=c.l?T(c.l.Na,c.l,c):null;e:{var B=c.i;let q=-1;for(;;){const le=["count="+v];q==-1?0<v?(q=B[0].g,le.push("ofs="+q)):q=0:le.push("ofs="+q);let tt=!0;for(let Bt=0;Bt<v;Bt++){let He=B[Bt].g;const qt=B[Bt].map;if(He-=q,0>He)q=Math.max(0,B[Bt].g-100),tt=!1;else try{Ic(qt,le,"req"+He+"_")}catch{S&&S(qt)}}if(tt){S=le.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function so(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;de||re(),G||(de(),G=!0),ue.add(g,c),c.v=0}}function ra(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=fr(T(c.Fa,c),Rc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=fr(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),wr(this),Cc(this))};function Nl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Cc(c){c.g=new gr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Un(c.qa);it(g,"RID","rpc"),it(g,"SID",c.K),it(g,"AID",c.T),it(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&it(g,"TO",c.ja),it(g,"TYPE","xmlhttp"),vi(c,g),c.m&&c.o&&Zi(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Yi(Un(g)),v.m=null,v.P=!0,Tl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,wr(this),ra(this),Rt(19))};function ia(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function sa(c,g){var v=null;if(c.g==g){ia(c),Nl(c),c.g=null;var S=2}else if(En(c.h,g))v=g.D,gc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=c.B;S=Qs(),Ct(S,new Wo(S,v)),Gr(c)}else so(c);else if(B=g.s,B==3||B==0&&0<g.X||!(S==1&&Cf(c,g)||S==2&&ra(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),B){case 1:Ei(c,5);break;case 4:Ei(c,10);break;case 3:Ei(c,6);break;default:Ei(c,2)}}}function Rc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Ei(c,g){if(c.j.info("Error code "+g),g==2){var v=T(c.fb,c),S=c.Xa;const B=!S;S=new gi(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||no(S,"https"),Yi(S),B?Tf(S.toString(),v):Tc(S.toString(),v)}else Rt(2);c.G=0,c.l&&c.l.sa(g),Ac(c),ta(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Ac(c){if(c.G=0,c.ka=[],c.l){const g=_c(c.h);(g.length!=0||c.i.length!=0)&&(F(c.ka,g),F(c.ka,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.ra()}}function kc(c,g,v){var S=v instanceof gi?Un(v):new gi(v);if(S.g!="")g&&(S.g=g+"."+S.g),Ki(S,S.s);else{var B=d.location;S=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var q=new gi(null);S&&no(q,S),g&&(q.g=g),B&&Ki(q,B),v&&(q.l=v),S=q}return v=c.D,g=c.ya,v&&g&&it(S,v,g),it(S,"VER",c.la),vi(c,S),S}function Pc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new mt(new _i({eb:v})):new mt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(c,g){return new wn(c,g)};function wn(c,g){_t.call(this),this.g=new Pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Y(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Y(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Kr(this)}V(wn,_t),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){tn(this.g)},wn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=bt(c),c=v);g.i.push(new pc(g.Ya++,c)),g.G==3&&Gr(g)},wn.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,wn.aa.N.call(this)};function Nc(c){zr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}V(Nc,zr);function xc(){$o.call(this),this.status=1}V(xc,$o);function Kr(c){this.g=c}V(Kr,xl),Kr.prototype.ua=function(){Ct(this.g,"a")},Kr.prototype.ta=function(c){Ct(this.g,new Nc(c))},Kr.prototype.sa=function(c){Ct(this.g,new xc)},Kr.prototype.ra=function(){Ct(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,OI=function(){return new oa},DI=function(){return Qs()},bI=$r,Rm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Uh=qo,cc.COMPLETE="complete",xI=cc,Br.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",_t.prototype.listen=_t.prototype.K,cu=Br,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,NI=mt}).apply(typeof Rh<"u"?Rh:typeof self<"u"?self:typeof window<"u"?window:{});const FE="@firebase/firestore",UE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pn.UNAUTHENTICATED=new pn(null),pn.GOOGLE_CREDENTIALS=new pn("google-credentials-uid"),pn.FIRST_PARTY=new pn("first-party-uid"),pn.MOCK_USER=new pn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Ld("@firebase/firestore");function Na(){return No.logLevel}function me(n,...e){if(No.logLevel<=je.DEBUG){const t=e.map(Tg);No.debug(`Firestore (${ll}): ${n}`,...t)}}function Ui(n,...e){if(No.logLevel<=je.ERROR){const t=e.map(Tg);No.error(`Firestore (${ll}): ${n}`,...t)}}function Ds(n,...e){if(No.logLevel<=je.WARN){const t=e.map(Tg);No.warn(`Firestore (${ll}): ${n}`,...t)}}function Tg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,LI(n,r,t)}function LI(n,e,t){let r=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ui(r),new Error(r)}function Je(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||LI(e,s,r)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends ci{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pn.UNAUTHENTICATED)))}shutdown(){}}class ZP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eN{constructor(e){this.t=e,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Rs,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Rs)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Je(typeof r.accessToken=="string",31837,{l:r}),new MI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new pn(e)}}class tN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(pn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const r=a=>{a.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,me("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Oe(n,e){return n<e?-1:n>e?1:0}function Am(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Oe(r,s);{const a=VI(),u=sN(a.encode(BE(n,t)),a.encode(BE(e,t)));return u!==0?u:Oe(r,s)}}t+=r>65535?2:1}return Oe(n.length,e.length)}function BE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Oe(n[t],e[t]);return Oe(n.length,e.length)}function qa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="__name__";class Zr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Zr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Zr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Oe(e.length,t.length)}static compareSegments(e,t){const r=Zr.isNumericId(e),s=Zr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Zr.extractNumericId(e).compare(Zr.extractNumericId(t)):Am(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class lt extends Zr{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const oN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Zr{construct(e,t,r){return new on(e,t,r)}static isValidIdentifier(e){return oN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zE}static keyField(){return new on([zE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new he(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new he(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new he(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new he(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new on(t)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(lt.fromString(e))}static fromName(e){return new Ie(lt.fromString(e).popFirst(5))}static empty(){return new Ie(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n,e,t){if(!t)throw new he(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aN(n,e,t,r){if(e===!0&&r===!0)throw new he(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $E(n){if(!Ie.isDocumentKey(n))throw new he(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function WE(n){if(Ie.isDocumentKey(n))throw new he(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function UI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function br(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bd(n);throw new he(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function lN(n,e){if(e<=0)throw new he(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){const t={typeString:n};return e&&(t.value=e),t}function ec(n,e){if(!UI(n))throw new he(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new he(Q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=-62135596800,qE=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qE);return new pt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HE)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-HE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Ut("string",pt._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new pt(0,0))}static max(){return new xe(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=-1;function uN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=xe.fromTimestamp(r===1e9?new pt(t+1,0):new pt(t,r));return new Os(s,Ie.empty(),e)}function cN(n){return new Os(n.readTime,n.key,bu)}class Os{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Os(xe.min(),Ie.empty(),bu)}static max(){return new Os(xe.max(),Ie.empty(),bu)}}function hN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ie.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==dN)throw n;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,r)=>{t(e)}))}static reject(e){return new X(((t,r)=>{r(e)}))}static waitFor(e){return new X(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=X.resolve(!1);for(const r of e)t=t.next((s=>s?X.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new X(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new X(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function pN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=-1;function $d(n){return n==null}function sd(n){return n===0&&1/n==-1/0}function mN(n){return typeof n=="number"&&Number.isInteger(n)&&!sd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="";function gN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=GE(e)),e=_N(n.get(t),e);return GE(e)}function _N(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case jI:t+="";break;default:t+=a}}return t}function GE(n){return n+jI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function BI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=class km{constructor(e,t){this.comparator=e,this.root=t||As.EMPTY}insert(e,t){return new km(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,As.BLACK,null,null))}remove(e){return new km(this.comparator,this.root.remove(e,this.comparator).copy(null,null,As.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ah(this.root,e,this.comparator,!0)}},Ah=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},As=class Pi{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Pi.RED,this.left=s??Pi.EMPTY,this.right=a??Pi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Pi(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pi.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};As.EMPTY=null,As.RED=!0,As.BLACK=!1;As.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new As(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new jt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new QE(this.data.getIterator())}getIteratorFrom(e){return new QE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class QE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new qn([])}unionWith(e){let t=new Wt(on.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new zI("Invalid base64 string: "+a):a}})(e);return new an(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const yN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(n){if(Je(!!n,39018),typeof n=="string"){let e=0;const t=yN.exec(n);if(Je(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:kt(n.seconds),nanos:kt(n.nanos)}}function kt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ms(n){return typeof n=="string"?an.fromBase64String(n):an.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="server_timestamp",WI="__type__",HI="__previous_value__",qI="__local_write_time__";function Cg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[WI])===null||t===void 0?void 0:t.stringValue)===$I}function Wd(n){const e=n.mapValue.fields[HI];return Cg(e)?Wd(e):e}function Du(n){const e=Ls(n.mapValue.fields[qI].timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const od="(default)";class Ou{constructor(e,t){this.projectId=e,this.database=t||od}static empty(){return new Ou("","")}get isDefaultDatabase(){return this.database===od}isEqual(e){return e instanceof Ou&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="__type__",EN="__max__",kh={mapValue:{}},KI="__vector__",ad="value";function Vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cg(n)?4:TN(n)?9007199254740991:wN(n)?10:11:Ae(28295,{value:n})}function li(n,e){if(n===e)return!0;const t=Vs(n);if(t!==Vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Du(n).isEqual(Du(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ls(s.timestampValue),d=Ls(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Ms(s.bytesValue).isEqual(Ms(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return kt(s.geoPointValue.latitude)===kt(a.geoPointValue.latitude)&&kt(s.geoPointValue.longitude)===kt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return kt(s.integerValue)===kt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=kt(s.doubleValue),d=kt(a.doubleValue);return u===d?sd(u)===sd(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return qa(n.arrayValue.values||[],e.arrayValue.values||[],li);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(KE(u)!==KE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!li(u[f],d[f])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function Lu(n,e){return(n.values||[]).find((t=>li(t,e)))!==void 0}function Ga(n,e){if(n===e)return 0;const t=Vs(n),r=Vs(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=kt(a.integerValue||a.doubleValue),f=kt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return YE(n.timestampValue,e.timestampValue);case 4:return YE(Du(n),Du(e));case 5:return Am(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Ms(a),f=Ms(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Oe(d[m],f[m]);if(y!==0)return y}return Oe(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Oe(kt(a.latitude),kt(u.latitude));return d!==0?d:Oe(kt(a.longitude),kt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return XE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const E=a.fields||{},T=u.fields||{},P=(d=E[ad])===null||d===void 0?void 0:d.arrayValue,V=(f=T[ad])===null||f===void 0?void 0:f.arrayValue,L=Oe(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0);return L!==0?L:XE(P,V)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===kh.mapValue&&u===kh.mapValue)return 0;if(a===kh.mapValue)return 1;if(u===kh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const T=Am(f[E],y[E]);if(T!==0)return T;const P=Ga(d[f[E]],m[y[E]]);if(P!==0)return P}return Oe(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function YE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=Ls(n),r=Ls(e),s=Oe(t.seconds,r.seconds);return s!==0?s:Oe(t.nanos,r.nanos)}function XE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ga(t[s],r[s]);if(a)return a}return Oe(t.length,r.length)}function Ka(n){return Pm(n)}function Pm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ls(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ms(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ie.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Pm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Pm(t.fields[u])}`;return s+"}"})(n.mapValue):Ae(61005,{value:n})}function jh(n){switch(Vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wd(n);return e?16+jh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ms(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+jh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Hs(r.fields,((a,u)=>{s+=a.length+jh(u)})),s})(n.mapValue);default:throw Ae(13486,{value:n})}}function JE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Nm(n){return!!n&&"integerValue"in n}function Rg(n){return!!n&&"arrayValue"in n}function ZE(n){return!!n&&"nullValue"in n}function ew(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bh(n){return!!n&&"mapValue"in n}function wN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[GI])===null||t===void 0?void 0:t.stringValue)===KI}function yu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hs(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=yu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function TN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===EN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yu(t)}setAll(e){let t=on.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=yu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Bh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return li(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Bh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Hs(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new On(yu(this.value))}}function QI(n){const e=[];return Hs(n.fields,((t,r)=>{const s=new on([t]);if(Bh(r)){const a=QI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new mn(e,0,xe.min(),xe.min(),xe.min(),On.empty(),0)}static newFoundDocument(e,t,r,s){return new mn(e,1,t,xe.min(),r,s,0)}static newNoDocument(e,t){return new mn(e,2,t,xe.min(),xe.min(),On.empty(),0)}static newUnknownDocument(e,t){return new mn(e,3,t,xe.min(),xe.min(),On.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t){this.position=e,this.inclusive=t}}function tw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=Ie.comparator(Ie.fromName(u.referenceValue),t.key):r=Ga(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function nw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!li(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function IN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{}class Ft extends YI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new CN(e,t,r):t==="array-contains"?new kN(e,r):t==="in"?new PN(e,r):t==="not-in"?new NN(e,r):t==="array-contains-any"?new xN(e,r):new Ft(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new RN(e,r):new AN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ga(t,this.value)):t!==null&&Vs(this.value)===Vs(t)&&this.matchesComparison(Ga(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mr extends YI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Mr(e,t)}matches(e){return XI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function XI(n){return n.op==="and"}function JI(n){return SN(n)&&XI(n)}function SN(n){for(const e of n.filters)if(e instanceof Mr)return!1;return!0}function xm(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+Ka(n.value);if(JI(n))return n.filters.map((e=>xm(e))).join(",");{const e=n.filters.map((t=>xm(t))).join(",");return`${n.op}(${e})`}}function ZI(n,e){return n instanceof Ft?(function(r,s){return s instanceof Ft&&r.op===s.op&&r.field.isEqual(s.field)&&li(r.value,s.value)})(n,e):n instanceof Mr?(function(r,s){return s instanceof Mr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&ZI(u,s.filters[d])),!0):!1})(n,e):void Ae(19439)}function e0(n){return n instanceof Ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ka(t.value)}`})(n):n instanceof Mr?(function(t){return t.op.toString()+" {"+t.getFilters().map(e0).join(" ,")+"}"})(n):"Filter"}class CN extends Ft{constructor(e,t,r){super(e,t,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const t=Ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class RN extends Ft{constructor(e,t){super(e,"in",t),this.keys=t0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AN extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=t0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function t0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ie.fromName(r.referenceValue)))}class kN extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rg(t)&&Lu(t.arrayValue,this.value)}}class PN extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Lu(this.value.arrayValue,t)}}class NN extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Lu(this.value.arrayValue,t)}}class xN extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Lu(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function rw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new bN(n,e,t,r,s,a,u)}function Ag(n){const e=be(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>xm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),$d(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ka(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ka(r))).join(",")),e.Pe=t}return e.Pe}function kg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!IN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ZI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nw(n.startAt,e.startAt)&&nw(n.endAt,e.endAt)}function bm(n){return Ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DN(n,e,t,r,s,a,u,d){return new hl(n,e,t,r,s,a,u,d)}function Pg(n){return new hl(n)}function iw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function n0(n){return n.collectionGroup!==null}function vu(n){const e=be(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Wt(on.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Mu(a,r))})),t.has(on.keyField().canonicalString())||e.Te.push(new Mu(on.keyField(),r))}return e.Te}function ri(n){const e=be(n);return e.Ie||(e.Ie=ON(e,vu(n))),e.Ie}function ON(n,e){if(n.limitType==="F")return rw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Mu(s.field,a)}));const t=n.endAt?new ld(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ld(n.startAt.position,n.startAt.inclusive):null;return rw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Dm(n,e){const t=n.filters.concat([e]);return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ud(n,e,t){return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hd(n,e){return kg(ri(n),ri(e))&&n.limitType===e.limitType}function r0(n){return`${Ag(ri(n))}|lt:${n.limitType}`}function xa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>e0(s))).join(", ")}]`),$d(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ka(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ka(s))).join(",")),`Target(${r})`})(ri(n))}; limitType=${n.limitType})`}function qd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ie.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of vu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=tw(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,vu(r),s)||r.endAt&&!(function(u,d,f){const m=tw(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,vu(r),s))})(n,e)}function LN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function i0(n){return(e,t)=>{let r=!1;for(const s of vu(n)){const a=MN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function MN(n,e,t){const r=n.field.isKeyField()?Ie.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Ga(f,m):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return BI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new jt(Ie.comparator);function ji(){return VN}const s0=new jt(Ie.comparator);function hu(...n){let e=s0;for(const t of n)e=e.insert(t.key,t);return e}function o0(n){let e=s0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function To(){return Eu()}function a0(){return Eu()}function Eu(){return new Uo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const FN=new jt(Ie.comparator),UN=new Wt(Ie.comparator);function Be(...n){let e=UN;for(const t of n)e=e.add(t);return e}const jN=new Wt(Oe);function BN(){return jN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sd(e)?"-0":e}}function l0(n){return{integerValue:""+n}}function zN(n,e){return mN(e)?l0(e):Ng(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this._=void 0}}function $N(n,e,t){return n instanceof cd?(function(s,a){const u={fields:{[WI]:{stringValue:$I},[qI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Cg(a)&&(a=Wd(a)),a&&(u.fields[HI]=a),{mapValue:u}})(t,e):n instanceof Qa?c0(n,e):n instanceof Vu?h0(n,e):(function(s,a){const u=u0(s,a),d=sw(u)+sw(s.Ee);return Nm(u)&&Nm(s.Ee)?l0(d):Ng(s.serializer,d)})(n,e)}function WN(n,e,t){return n instanceof Qa?c0(n,e):n instanceof Vu?h0(n,e):t}function u0(n,e){return n instanceof hd?(function(r){return Nm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class cd extends Gd{}class Qa extends Gd{constructor(e){super(),this.elements=e}}function c0(n,e){const t=d0(e);for(const r of n.elements)t.some((s=>li(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Vu extends Gd{constructor(e){super(),this.elements=e}}function h0(n,e){let t=d0(e);for(const r of n.elements)t=t.filter((s=>!li(s,r)));return{arrayValue:{values:t}}}class hd extends Gd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function sw(n){return kt(n.integerValue||n.doubleValue)}function d0(n){return Rg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,t){this.field=e,this.transform=t}}function qN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Qa&&s instanceof Qa||r instanceof Vu&&s instanceof Vu?qa(r.elements,s.elements,li):r instanceof hd&&s instanceof hd?li(r.Ee,s.Ee):r instanceof cd&&s instanceof cd})(n.transform,e.transform)}class GN{constructor(e,t){this.version=e,this.transformResults=t}}class Dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kd{}function f0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new m0(n.key,Dr.none()):new tc(n.key,n.data,Dr.none());{const t=n.data,r=On.empty();let s=new Wt(on.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new qs(n.key,r,new qn(s.toArray()),Dr.none())}}function KN(n,e,t){n instanceof tc?(function(s,a,u){const d=s.value.clone(),f=aw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof qs?(function(s,a,u){if(!zh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=aw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(p0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function wu(n,e,t,r){return n instanceof tc?(function(a,u,d,f){if(!zh(a.precondition,u))return d;const m=a.value.clone(),y=lw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof qs?(function(a,u,d,f){if(!zh(a.precondition,u))return d;const m=lw(a.fieldTransforms,f,u),y=u.data;return y.setAll(p0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return zh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function QN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=u0(r.transform,s||null);a!=null&&(t===null&&(t=On.empty()),t.set(r.field,a))}return t||null}function ow(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qa(r,s,((a,u)=>qN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tc extends Kd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qs extends Kd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function p0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function aw(n,e,t){const r=new Map;Je(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,WN(u,d,t[s]))}return r}function lw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,$N(a,u,e))}return r}class m0 extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YN extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&KN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=wu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=wu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=a0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=f0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&qa(this.mutations,e.mutations,((t,r)=>ow(t,r)))&&qa(this.baseMutations,e.baseMutations,((t,r)=>ow(t,r)))}}class xg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Je(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return FN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new xg(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,qe;function ex(n){switch(n){case Q.OK:return Ae(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function g0(n){if(n===void 0)return Ui("GRPC error has no .code"),Q.UNKNOWN;switch(n){case Mt.OK:return Q.OK;case Mt.CANCELLED:return Q.CANCELLED;case Mt.UNKNOWN:return Q.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return Q.INTERNAL;case Mt.UNAVAILABLE:return Q.UNAVAILABLE;case Mt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Mt.NOT_FOUND:return Q.NOT_FOUND;case Mt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Mt.ABORTED:return Q.ABORTED;case Mt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Mt.DATA_LOSS:return Q.DATA_LOSS;default:return Ae(39323,{code:n})}}(qe=Mt||(Mt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Cs([4294967295,4294967295],0);function uw(n){const e=VI().encode(n),t=new PI;return t.update(e),new Uint8Array(t.digest())}function cw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Cs([t,r],0),new Cs([s,a],0)]}class bg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new du(`Invalid padding: ${t}`);if(r<0)throw new du(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new du(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new du(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Cs.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Cs.fromNumber(r)));return s.compare(tx)===1&&(s=new Cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=uw(e),[r,s]=cw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new bg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=uw(e),[r,s]=cw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Qd(xe.min(),s,new jt(Oe),ji(),Be())}}class nc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nc(r,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class _0{constructor(e,t){this.targetId=e,this.De=t}}class y0{constructor(e,t,r=an.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class hw{constructor(){this.ve=0,this.Ce=dw(),this.Fe=an.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Be(),t=Be(),r=Be();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ae(38017,{changeType:a})}})),new nc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=dw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class nx{constructor(e){this.We=e,this.Ge=new Map,this.ze=ji(),this.je=Ph(),this.Je=Ph(),this.He=new jt(Oe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(bm(a))if(r===0){const u=new Ie(a.path);this.Xe(t,u,mn.newNoDocument(u,xe.min()))}else Je(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Ms(r).toUint8Array()}catch(f){if(f instanceof zI)return Ds("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new bg(u,s,a)}catch(f){return Ds(f instanceof du?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&bm(d.target)){const f=new Ie(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,mn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Be();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Qd(e,t,this.He,this.ze,r);return this.ze=ji(),this.je=Ph(),this.Je=Ph(),this.He=new jt(Oe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new hw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Wt(Oe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Wt(Oe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||me("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new hw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ph(){return new jt(Ie.comparator)}function dw(){return new jt(Ie.comparator)}const rx={asc:"ASCENDING",desc:"DESCENDING"},ix={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sx={and:"AND",or:"OR"};class ox{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Om(n,e){return n.useProto3Json||$d(e)?e:{value:e}}function dd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ax(n,e){return dd(n,e.toTimestamp())}function ii(n){return Je(!!n,49232),xe.fromTimestamp((function(t){const r=Ls(t);return new pt(r.seconds,r.nanos)})(n))}function Dg(n,e){return Lm(n,e).canonicalString()}function Lm(n,e){const t=(function(s){return new lt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function E0(n){const e=lt.fromString(n);return Je(C0(e),10190,{key:e.toString()}),e}function Mm(n,e){return Dg(n.databaseId,e.path)}function rm(n,e){const t=E0(e);if(t.get(1)!==n.databaseId.projectId)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ie(T0(t))}function w0(n,e){return Dg(n.databaseId,e)}function lx(n){const e=E0(n);return e.length===4?lt.emptyPath():T0(e)}function Vm(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function T0(n){return Je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fw(n,e,t){return{name:Mm(n,e),fields:t.value.mapValue.fields}}function ux(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(Je(y===void 0||typeof y=="string",58123),an.fromBase64String(y||"")):(Je(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),an.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?Q.UNKNOWN:g0(m.code);return new he(y,m.message||"")})(u);t=new y0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rm(n,r.document.name),a=ii(r.document.updateTime),u=r.document.createTime?ii(r.document.createTime):xe.min(),d=new On({mapValue:{fields:r.document.fields}}),f=mn.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new $h(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rm(n,r.document),a=r.readTime?ii(r.readTime):xe.min(),u=mn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new $h([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rm(n,r.document),a=r.removedTargetIds||[];t=new $h([],a,s,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ZN(s,a),d=r.targetId;t=new _0(d,u)}}return t}function cx(n,e){let t;if(e instanceof tc)t={update:fw(n,e.key,e.value)};else if(e instanceof m0)t={delete:Mm(n,e.key)};else if(e instanceof qs)t={update:fw(n,e.key,e.data),updateMask:vx(e.fieldMask)};else{if(!(e instanceof YN))return Ae(16599,{Rt:e.type});t={verify:Mm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof cd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Qa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Vu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof hd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ae(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:ax(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)})(n,e.precondition)),t}function hx(n,e){return n&&n.length>0?(Je(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ii(s.updateTime):ii(a);return u.isEqual(xe.min())&&(u=ii(a)),new GN(u,s.transformResults||[])})(t,e)))):[]}function dx(n,e){return{documents:[w0(n,e.path)]}}function fx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=w0(n,s);const a=(function(m){if(m.length!==0)return S0(Mr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(T){return{field:ba(T.field),direction:gx(T.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Om(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function px(n){let e=lx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Je(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(E){const T=I0(E);return T instanceof Mr&&JI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(V){return new Mu(Da(V.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,$d(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,P=E.values||[];return new ld(P,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,P=E.values||[];return new ld(P,T)})(t.endAt)),DN(e,s,u,a,d,"F",f,m)}function mx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function I0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Da(t.unaryFilter.field);return Ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Da(t.unaryFilter.field);return Ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Da(t.unaryFilter.field);return Ft.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Da(t.unaryFilter.field);return Ft.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ft.create(Da(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Mr.create(t.compositeFilter.filters.map((r=>I0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function gx(n){return rx[n]}function _x(n){return ix[n]}function yx(n){return sx[n]}function ba(n){return{fieldPath:n.canonicalString()}}function Da(n){return on.fromServerFormat(n.fieldPath)}function S0(n){return n instanceof Ft?(function(t){if(t.op==="=="){if(ew(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NAN"}};if(ZE(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ew(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NAN"}};if(ZE(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(t.field),op:_x(t.op),value:t.value}}})(n):n instanceof Mr?(function(t){const r=t.getFilters().map((s=>S0(s)));return r.length===1?r[0]:{compositeFilter:{op:yx(t.op),filters:r}}})(n):Ae(54877,{filter:n})}function vx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function C0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,r,s,a=xe.min(),u=xe.min(),d=an.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.gt=e}}function wx(n){const e=px({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.Dn=new Ix}addToCollectionParentIndex(e,t){return this.Dn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(Os.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class Ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Wt(lt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Wt(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},R0=41943040;class Dn{static withCacheSize(e){return new Dn(e,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.DEFAULT_COLLECTION_PERCENTILE=10,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dn.DEFAULT=new Dn(R0,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dn.DISABLED=new Dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ya(0)}static ur(){return new Ya(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="LruGarbageCollector",Sx=1048576;function gw([n,e],[t,r]){const s=Oe(n,t);return s===0?Oe(e,r):s}class Cx{constructor(e){this.Tr=e,this.buffer=new Wt(gw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){me(mw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?me(mw,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.Rr(3e5)}))}}class Ax{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(zd.ue);const r=new Cx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(pw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Na()<=je.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function kx(n,e){return new Ax(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.changes=new Uo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&wu(r.mutation,s,qn.empty(),pt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Be()){const s=To();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=hu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=To();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Be())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=ji();const u=Eu(),d=(function(){return Eu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof qs)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),wu(y.mutation,m,y.mutation.getFieldMask(),pt.now())):u.set(m.key,qn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var E;return d.set(m,new Nx(y,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Eu();let s=new jt(((u,d)=>u-d)),a=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||qn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const E=(s.get(d.batchId)||Be()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,E=a0();y.forEach((T=>{if(!a.has(T)){const P=f0(t.get(T),r.get(T));P!==null&&E.set(T,P),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return X.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return Ie.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):n0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):X.resolve(To());let d=bu,f=a;return u.next((m=>X.forEach(m,((y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(y)?X.resolve():this.remoteDocumentCache.getEntry(e,y).next((T=>{f=f.insert(y,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Be()))).next((y=>({batchId:d,changes:o0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ie(t)).next((r=>{let s=hu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=hu();return this.indexManager.getCollectionParents(e,a).next((d=>X.forEach(d,(f=>{const m=(function(E,T){return new hl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,mn.newInvalidDocument(y)))}));let d=hu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&wu(y.mutation,m,qn.empty(),pt.now()),qd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return X.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ii(s.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:wx(s.bundledQuery),readTime:ii(s.readTime)}})(t)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.overlays=new jt(Ie.comparator),this.kr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const r=To();return X.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),X.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),X.resolve()}getOverlaysForCollection(e,t,r){const s=To(),a=t.length+1,u=new Ie(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return X.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new jt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=To(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=To(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return X.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new JN(t,r));let a=this.kr.get(t);a===void 0&&(a=Be(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.qr=new Wt(Xt.Qr),this.$r=new Wt(Xt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Xt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Xt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ie(new lt([])),r=new Xt(t,e),s=new Xt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ie(new lt([])),r=new Xt(t,e),s=new Xt(t,e+1);let a=Be();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Xt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ie.comparator(e.key,t.key)||Oe(e.Hr,t.Hr)}static Ur(e,t){return Oe(e.Hr,t.Hr)||Ie.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Wt(Xt.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new XN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Xt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return X.resolve(u)}lookupMutationBatch(e,t){return X.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return X.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Sg:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xt(t,0),s=new Xt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),X.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Wt(Oe);return t.forEach((s=>{const a=new Xt(s,0),u=new Xt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),X.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;Ie.isDocumentKey(a)||(a=a.child(""));const u=new Xt(new Ie(a),0);let d=new Wt(Oe);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),X.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return X.forEach(t.mutations,(s=>{const a=new Xt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Xt(t,0),s=this.Yr.firstAfterOrEqual(r);return X.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.ni=e,this.docs=(function(){return new jt(Ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():mn.newInvalidDocument(t))}getEntries(e,t){let r=ji();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():mn.newInvalidDocument(s))})),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=ji();const u=t.path,d=new Ie(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||hN(cN(y),r)<=0||(s.has(y.key)||qd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return X.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ae(9500)}ri(e,t){return X.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Vx(this)}getSize(e){return X.resolve(this.size)}}class Vx extends Px{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),X.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.persistence=e,this.ii=new Uo((t=>Ag(t)),kg),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.si=0,this.oi=new Og,this.targetCount=0,this._i=Ya.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),X.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.hr(t),X.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),X.waitFor(a).next((()=>s))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),X.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t){this.ai={},this.overlays={},this.ui=new zd(0),this.ci=!1,this.ci=!0,this.li=new Ox,this.referenceDelegate=e(this),this.hi=new Fx(this),this.indexManager=new Tx,this.remoteDocumentCache=(function(s){return new Mx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Ex(t),this.Ti=new bx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Dx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Lx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){me("MemoryPersistence","Starting transaction:",e);const s=new Ux(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return X.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Ux extends fN{constructor(e){super(),this.currentSequenceNumber=e}}class Lg{constructor(e){this.persistence=e,this.Ai=new Og,this.Ri=null}static Vi(e){return new Lg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,(r=>{const s=Ie.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,xe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return X.or([()=>X.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class fd{constructor(e,t){this.persistence=e,this.gi=new Uo((r=>gN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=kx(this,t)}static Vi(e,t){return new fd(e,t)}Ii(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return X.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?X.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,xe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jh(e.data.value)),t}Sr(e,t,r){return X.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return X.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Be(),s=Be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Mg(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return _A()?8:pN(gn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new jx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Na()<=je.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",xa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(Na()<=je.DEBUG&&me("QueryEngine","Query:",xa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Na()<=je.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",xa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ri(t))):X.resolve())}ps(e,t){if(iw(t))return X.resolve(null);let r=ri(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ud(t,null,"F"),r=ri(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Be(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,ud(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return iw(t)||s.isEqual(xe.min())?X.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?X.resolve(null):(Na()<=je.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xa(t)),this.vs(e,u,t,uN(s,bu)).next((d=>d)))}))}bs(e,t){let r=new Wt(i0(e));return t.forEach(((s,a)=>{qd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Na()<=je.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",xa(t)),this.gs.getDocumentsMatchingQuery(e,t,Os.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="LocalStore",zx=3e8;class $x{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new jt(Oe),this.Ms=new Uo((a=>Ag(a)),kg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Wx(n,e,t,r){return new $x(n,e,t,r)}async function k0(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Be();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Hx(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const E=m.batch,T=E.keys();let P=X.resolve();return T.forEach((V=>{P=P.next((()=>y.getEntry(f,V))).next((L=>{const F=m.docVersions.get(V);Je(F!==null,48541),L.version.compareTo(F)<0&&(E.applyToRemoteDocument(L,m),L.isValidDocument()&&(L.setReadTime(m.commitVersion),y.addEntry(L)))}))})),P.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function P0(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function qx(n,e){const t=be(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,E))));let P=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(an.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):y.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(y.resumeToken,r)),s=s.insert(E,P),(function(L,F,oe){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=zx?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(T,P,y)&&d.push(t.hi.updateTargetData(a,P))}));let f=ji(),m=Be();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Gx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(xe.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return X.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Gx(n,e,t){let r=Be(),s=Be();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=ji();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(xe.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):me(Vg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Kx(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Sg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Qx(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,X.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new ws(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Fm(n,e,t){const r=be(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!cl(u))throw u;me(Vg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function _w(n,e,t){const r=be(n);let s=xe.min(),a=Be();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const E=be(f),T=E.Ms.get(y);return T!==void 0?X.resolve(E.Fs.get(T)):E.hi.getTargetData(m,y)})(r,u,ri(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:xe.min(),t?a:Be()))).next((d=>(Yx(r,LN(e),d),{documents:d,qs:a})))))}function Yx(n,e,t){let r=n.xs.get(e)||xe.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class yw{constructor(){this.activeTargetIds=BN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xx{constructor(){this.Fo=new yw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new yw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="ConnectivityMonitor";class Ew{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){me(vw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){me(vw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh=null;function Um(){return Nh===null?Nh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nh++,"0x"+Nh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="RestConnection",Zx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===od?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Um(),d=this.Go(e,t.toUriEncodedString());me(im,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=ui(m);return this.jo(e,d,f,r,y).then((E=>(me(im,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Ds(im,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ll})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Zx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="WebChannelConnection";class nb extends eb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Um();return new Promise(((d,f)=>{const m=new NI;m.setWithCredentials(!0),m.listenOnce(xI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Uh.NO_ERROR:const E=m.getResponseJson();me(fn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Uh.TIMEOUT:me(fn,`RPC '${e}' ${u} timed out`),f(new he(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Uh.HTTP_ERROR:const T=m.getStatus();if(me(fn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let P=m.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P==null?void 0:P.error;if(V&&V.status&&V.message){const L=(function(oe){const Y=oe.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(Y)>=0?Y:Q.UNKNOWN})(V.status);f(new he(L,V.message))}else f(new he(Q.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new he(Q.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{me(fn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);me(fn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=Um(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=OI(),d=DI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");me(fn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);this.T_(E);let T=!1,P=!1;const V=new tb({Ho:F=>{P?me(fn,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(T||(me(fn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),me(fn,`RPC '${e}' stream ${s} sending:`,F),E.send(F))},Yo:()=>E.close()}),L=(F,oe,Y)=>{F.listen(oe,(te=>{try{Y(te)}catch(j){setTimeout((()=>{throw j}),0)}}))};return L(E,cu.EventType.OPEN,(()=>{P||(me(fn,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),L(E,cu.EventType.CLOSE,(()=>{P||(P=!0,me(fn,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(E))})),L(E,cu.EventType.ERROR,(F=>{P||(P=!0,Ds(fn,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),V.__(new he(Q.UNAVAILABLE,"The operation could not be completed")))})),L(E,cu.EventType.MESSAGE,(F=>{var oe;if(!P){const Y=F.data[0];Je(!!Y,16349);const te=Y,j=(te==null?void 0:te.error)||((oe=te[0])===null||oe===void 0?void 0:oe.error);if(j){me(fn,`RPC '${e}' stream ${s} received error:`,j);const Te=j.status;let fe=(function(k){const N=Mt[k];if(N!==void 0)return g0(N)})(Te),b=j.message;fe===void 0&&(fe=Q.INTERNAL,b="Unknown error status: "+Te+" with message "+j.message),P=!0,V.__(new he(fe,b)),E.close()}else me(fn,`RPC '${e}' stream ${s} received:`,Y),V.a_(Y)}})),L(d,bI.STAT_EVENT,(F=>{F.stat===Rm.PROXY?me(fn,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Rm.NOPROXY&&me(fn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function sm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){return new ox(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&me("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="PersistentStream";class x0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new N0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Ui(t.toString()),Ui("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new he(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return me(ww,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(me(ww,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rb extends x0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ux(this.serializer,e),r=(function(a){if(!("targetChange"in a))return xe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?xe.min():u.readTime?ii(u.readTime):xe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Vm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=bm(f)?{documents:dx(a,f)}:{query:fx(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=v0(a,u.resumeToken);const m=Om(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(xe.min())>0){d.readTime=dd(a,u.snapshotVersion.toTimestamp());const m=Om(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=mx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Vm(this.serializer),t.removeTarget=e,this.k_(t)}}class ib extends x0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=hx(e.writeResults,e.commitTime),r=ii(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Vm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>cx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{}class ob extends sb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Lm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new he(Q.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Lm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(Q.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class ab{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ui(t),this._a=!1):me("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="RemoteStore";class lb{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{jo(this)&&(me(xo,"Restarting streams for network reachability change."),await(async function(f){const m=be(f);m.Ia.add(4),await rc(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Xd(m)})(this))}))})),this.Aa=new ab(r,s)}}async function Xd(n){if(jo(n))for(const e of n.da)await e(!0)}async function rc(n){for(const e of n.da)await e(!1)}function b0(n,e){const t=be(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Bg(t)?jg(t):dl(t).x_()&&Ug(t,e))}function Fg(n,e){const t=be(n),r=dl(t);t.Ta.delete(e),r.x_()&&D0(t,e),t.Ta.size===0&&(r.x_()?r.B_():jo(t)&&t.Aa.set("Unknown"))}function Ug(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dl(n).H_(e)}function D0(n,e){n.Ra.$e(e),dl(n).Y_(e)}function jg(n){n.Ra=new nx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),dl(n).start(),n.Aa.aa()}function Bg(n){return jo(n)&&!dl(n).M_()&&n.Ta.size>0}function jo(n){return be(n).Ia.size===0}function O0(n){n.Ra=void 0}async function ub(n){n.Aa.set("Online")}async function cb(n){n.Ta.forEach(((e,t)=>{Ug(n,e)}))}async function hb(n,e){O0(n),Bg(n)?(n.Aa.la(e),jg(n)):n.Aa.set("Unknown")}async function db(n,e,t){if(n.Aa.set("Online"),e instanceof y0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){me(xo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pd(n,r)}else if(e instanceof $h?n.Ra.Ye(e):e instanceof _0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(xe.min()))try{const r=await P0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(an.EMPTY_BYTE_STRING,y.snapshotVersion)),D0(a,f);const E=new ws(y.target,f,m,y.sequenceNumber);Ug(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){me(xo,"Failed to raise snapshot:",r),await pd(n,r)}}async function pd(n,e,t){if(!cl(e))throw e;n.Ia.add(1),await rc(n),n.Aa.set("Offline"),t||(t=()=>P0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{me(xo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Xd(n)}))}function L0(n,e){return e().catch((t=>pd(n,t,e)))}async function Jd(n){const e=be(n),t=Fs(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Sg;for(;fb(e);)try{const s=await Kx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,pb(e,s)}catch(s){await pd(e,s)}M0(e)&&V0(e)}function fb(n){return jo(n)&&n.Pa.length<10}function pb(n,e){n.Pa.push(e);const t=Fs(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function M0(n){return jo(n)&&!Fs(n).M_()&&n.Pa.length>0}function V0(n){Fs(n).start()}async function mb(n){Fs(n).na()}async function gb(n){const e=Fs(n);for(const t of n.Pa)e.X_(t.mutations)}async function _b(n,e,t){const r=n.Pa.shift(),s=xg.from(r,e,t);await L0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Jd(n)}async function yb(n,e){e&&Fs(n).Z_&&await(async function(r,s){if((function(u){return ex(u)&&u!==Q.ABORTED})(s.code)){const a=r.Pa.shift();Fs(r).N_(),await L0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Jd(r)}})(n,e),M0(n)&&V0(n)}async function Tw(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),me(xo,"RemoteStore received new credentials");const r=jo(t);t.Ia.add(3),await rc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xd(t)}async function vb(n,e){const t=be(n);e?(t.Ia.delete(2),await Xd(t)):e||(t.Ia.add(2),await rc(t),t.Aa.set("Unknown"))}function dl(n){return n.Va||(n.Va=(function(t,r,s){const a=be(t);return a.ia(),new rb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:ub.bind(null,n),e_:cb.bind(null,n),n_:hb.bind(null,n),J_:db.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Bg(n)?jg(n):n.Aa.set("Unknown")):(await n.Va.stop(),O0(n))}))),n.Va}function Fs(n){return n.ma||(n.ma=(function(t,r,s){const a=be(t);return a.ia(),new ib(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:mb.bind(null,n),n_:yb.bind(null,n),ea:gb.bind(null,n),ta:_b.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Jd(n)):(await n.ma.stop(),n.Pa.length>0&&(me(xo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new zg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $g(n,e){if(Ui("AsyncQueue",`${e}: ${n}`),cl(n))return new he(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{static emptySet(e){return new Ua(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ie.comparator(t.key,r.key):(t,r)=>Ie.comparator(t.key,r.key),this.keyedMap=hu(),this.sortedSet=new jt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ua)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ua;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.fa=new jt(Ie.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xa{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Xa(e,t,Ua.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class wb{constructor(){this.queries=Sw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=be(t),a=s.queries;s.queries=Sw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new he(Q.ABORTED,"Firestore shutting down"))}}function Sw(){return new Uo((n=>r0(n)),Hd)}async function F0(n,e){const t=be(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new Eb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=$g(u,`Initialization of query '${xa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Wg(t)}async function U0(n,e){const t=be(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Tb(n,e){const t=be(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Wg(t)}function Ib(n,e,t){const r=be(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Wg(n){n.Da.forEach((e=>{e.next()}))}var jm,Cw;(Cw=jm||(jm={})).Fa="default",Cw.Cache="cache";class j0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==jm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.key=e}}class z0{constructor(e){this.key=e}}class Sb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Be(),this.mutatedKeys=Be(),this.Xa=i0(e),this.eu=new Ua(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Iw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,E)=>{const T=s.get(y),P=qd(this.query,E)?E:null,V=!!T&&this.mutatedKeys.has(T.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let F=!1;T&&P?T.data.isEqual(P.data)?V!==L&&(r.track({type:3,doc:P}),F=!0):this.iu(T,P)||(r.track({type:2,doc:P}),F=!0,(f&&this.Xa(P,f)>0||m&&this.Xa(P,m)<0)&&(d=!0)):!T&&P?(r.track({type:0,doc:P}),F=!0):T&&!P&&(r.track({type:1,doc:T}),F=!0,(f||m)&&(d=!0)),F&&(P?(u=u.add(P),a=L?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,E)=>(function(P,V){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:F})}};return L(P)-L(V)})(y.type,E.type)||this.Xa(y.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Xa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Iw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Be(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new z0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new B0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Hg="SyncEngine";class Cb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Rb{constructor(e){this.key=e,this.lu=!1}}class Ab{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Uo((d=>r0(d)),Hd),this.Tu=new Map,this.Iu=new Set,this.du=new jt(Ie.comparator),this.Eu=new Map,this.Au=new Og,this.Ru={},this.Vu=new Map,this.mu=Ya.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function kb(n,e,t=!0){const r=K0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await $0(r,e,t,!0),s}async function Pb(n,e){const t=K0(n);await $0(t,e,!0,!1)}async function $0(n,e,t,r){const s=await Qx(n.localStore,ri(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await Nb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&b0(n.remoteStore,s),d}async function Nb(n,e,t,r,s){n.gu=(E,T,P)=>(async function(L,F,oe,Y){let te=F.view.nu(oe);te.Ds&&(te=await _w(L.localStore,F.query,!1).then((({documents:b})=>F.view.nu(b,te))));const j=Y&&Y.targetChanges.get(F.targetId),Te=Y&&Y.targetMismatches.get(F.targetId)!=null,fe=F.view.applyChanges(te,L.isPrimaryClient,j,Te);return Aw(L,F.targetId,fe._u),fe.snapshot})(n,E,T,P);const a=await _w(n.localStore,e,!0),u=new Sb(e,a.qs),d=u.nu(a.documents),f=nc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);Aw(n,t,m._u);const y=new Cb(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function xb(n,e,t){const r=be(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Hd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Fg(r.remoteStore,s.targetId),Bm(r,s.targetId)})).catch(ul)):(Bm(r,s.targetId),await Fm(r.localStore,s.targetId,!0))}async function bb(n,e){const t=be(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Fg(t.remoteStore,r.targetId))}async function Db(n,e,t){const r=jb(n);try{const s=await(function(u,d){const f=be(u),m=pt.now(),y=d.reduce(((P,V)=>P.add(V.key)),Be());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let V=ji(),L=Be();return f.Os.getEntries(P,y).next((F=>{V=F,V.forEach(((oe,Y)=>{Y.isValidDocument()||(L=L.add(oe))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,V))).next((F=>{E=F;const oe=[];for(const Y of d){const te=QN(Y,E.get(Y.key).overlayedDocument);te!=null&&oe.push(new qs(Y.key,te,QI(te.value.mapValue),Dr.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,oe,d)})).next((F=>{T=F;const oe=F.applyToLocalDocumentSet(E,L);return f.documentOverlayCache.saveOverlays(P,F.batchId,oe)}))})).then((()=>({batchId:T.batchId,changes:o0(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new jt(Oe)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await ic(r,s.changes),await Jd(r.remoteStore)}catch(s){const a=$g(s,"Failed to persist write");t.reject(a)}}async function W0(n,e){const t=be(n);try{const r=await qx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(Je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?Je(u.lu,14607):s.removedDocuments.size>0&&(Je(u.lu,42227),u.lu=!1))})),await ic(t,r,e)}catch(r){await ul(r)}}function Rw(n,e,t){const r=be(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=be(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&Wg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ob(n,e,t){const r=be(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new jt(Ie.comparator);u=u.insert(a,mn.newNoDocument(a,xe.min()));const d=Be().add(a),f=new Qd(xe.min(),new Map,new jt(Oe),u,d);await W0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),qg(r)}else await Fm(r.localStore,e,!1).then((()=>Bm(r,e,t))).catch(ul)}async function Lb(n,e){const t=be(n),r=e.batch.batchId;try{const s=await Hx(t.localStore,e);q0(t,r,null),H0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ic(t,s)}catch(s){await ul(s)}}async function Mb(n,e,t){const r=be(n);try{const s=await(function(u,d){const f=be(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(Je(E!==null,37113),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);q0(r,e,t),H0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ic(r,s)}catch(s){await ul(s)}}function H0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function q0(n,e,t){const r=be(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Bm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||G0(n,r)}))}function G0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Fg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),qg(n))}function Aw(n,e,t){for(const r of t)r instanceof B0?(n.Au.addReference(r.key,e),Vb(n,r)):r instanceof z0?(me(Hg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||G0(n,r.key)):Ae(19791,{yu:r})}function Vb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(me(Hg,"New document in limbo: "+t),n.Iu.add(r),qg(n))}function qg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ie(lt.fromString(e)),r=n.mu.next();n.Eu.set(r,new Rb(t)),n.du=n.du.insert(t,r),b0(n.remoteStore,new ws(ri(Pg(t.path)),r,"TargetPurposeLimboResolution",zd.ue))}}async function ic(n,e,t){const r=be(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Mg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=be(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>X.forEach(m,(T=>X.forEach(T.Is,(P=>y.persistence.referenceDelegate.addReference(E,T.targetId,P))).next((()=>X.forEach(T.ds,(P=>y.persistence.referenceDelegate.removeReference(E,T.targetId,P)))))))))}catch(E){if(!cl(E))throw E;me(Vg,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const P=y.Fs.get(T),V=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(V);y.Fs=y.Fs.insert(T,L)}}})(r.localStore,a))}async function Fb(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){me(Hg,"User change. New user:",e.toKey());const r=await k0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new he(Q.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ic(t,r.Bs)}}function Ub(n,e){const t=be(n),r=t.Eu.get(e);if(r&&r.lu)return Be().add(r.key);{let s=Be();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function K0(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ob.bind(null,e),e.hu.J_=Tb.bind(null,e.eventManager),e.hu.pu=Ib.bind(null,e.eventManager),e}function jb(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mb.bind(null,e),e}class md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Wx(this.persistence,new Bx,e.initialUser,this.serializer)}Du(e){return new A0(Lg.Vi,this.serializer)}bu(e){return new Xx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}md.provider={build:()=>new md};class Bb extends md{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Je(this.persistence.referenceDelegate instanceof fd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Rx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Dn.withCacheSize(this.cacheSizeBytes):Dn.DEFAULT;return new A0((r=>fd.Vi(r,t)),this.serializer)}}class zm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fb.bind(null,this.syncEngine),await vb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wb})()}createDatastore(e){const t=Yd(e.databaseInfo.databaseId),r=(function(a){return new nb(a)})(e.databaseInfo);return(function(a,u,d,f){return new ob(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new lb(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Rw(this.syncEngine,t,0)),(function(){return Ew.C()?new Ew:new Jx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const E=new Ab(s,a,u,d,f,m);return y&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=be(s);me(xo,"RemoteStore shutting down."),a.Ia.add(5),await rc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zm.provider={build:()=>new zm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ui("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="FirestoreClient";class zb{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=pn.UNAUTHENTICATED,this.clientId=Ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{me(Us,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(me(Us,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$g(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function om(n,e){n.asyncQueue.verifyOperationInProgress(),me(Us,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await k0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ds("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{me("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ds("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function kw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $b(n);me(Us,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Tw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Tw(e.remoteStore,s))),n._onlineComponents=e}async function $b(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){me(Us,"Using user provided OfflineComponentProvider");try{await om(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Q.FAILED_PRECONDITION||s.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ds("Error using user provided cache. Falling back to memory cache: "+t),await om(n,new md)}}else me(Us,"Using default OfflineComponentProvider"),await om(n,new Bb(void 0));return n._offlineComponents}async function Y0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(me(Us,"Using user provided OnlineComponentProvider"),await kw(n,n._uninitializedComponentsProvider._online)):(me(Us,"Using default OnlineComponentProvider"),await kw(n,new zm))),n._onlineComponents}function Wb(n){return Y0(n).then((e=>e.syncEngine))}async function $m(n){const e=await Y0(n),t=e.eventManager;return t.onListen=kb.bind(null,e.syncEngine),t.onUnlisten=xb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bb.bind(null,e.syncEngine),t}function Hb(n,e,t={}){const r=new Rs;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new Q0({next:T=>{y.Ou(),u.enqueueAndForget((()=>U0(a,E))),T.fromCache&&f.source==="server"?m.reject(new he(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new j0(d,y,{includeMetadataChanges:!0,ka:!0});return F0(a,E)})(await $m(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="firestore.googleapis.com",Nw=!0;class xw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=J0,this.ssl=Nw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Nw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=R0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sx)throw new he(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new JP;switch(r.type){case"firstParty":return new nN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Pw.get(t);r&&(me("ComponentProvider","Removing Datastore"),Pw.delete(t),r.terminate())})(this),Promise.resolve()}}function qb(n,e,t,r={}){var s;n=br(n,Zd);const a=ui(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(bd(`https://${f}`),Dd("Firestore",!0)),u.host!==J0&&u.host!==f&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Li(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=pn.MOCK_USER;else{y=cg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new he(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new pn(T)}n._authCredentials=new ZP(new MI(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class Nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ec(t,Nt._jsonSchema))return new Nt(e,r||null,new Ie(lt.fromString(t.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:Ut("string",Nt._jsonSchemaVersion),referencePath:Ut("string")};class ks extends $i{constructor(e,t,r){super(e,t,Pg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Ie(e))}withConverter(e){return new ks(this.firestore,e,this._path)}}function js(n,e,...t){if(n=Ze(n),FI("collection","path",e),n instanceof Zd){const r=lt.fromString(e,...t);return WE(r),new ks(n,null,r)}{if(!(n instanceof Nt||n instanceof ks))throw new he(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return WE(r),new ks(n.firestore,null,r)}}function gd(n,e,...t){if(n=Ze(n),arguments.length===1&&(e=Ig.newId()),FI("doc","path",e),n instanceof Zd){const r=lt.fromString(e,...t);return $E(r),new Nt(n,null,new Ie(r))}{if(!(n instanceof Nt||n instanceof ks))throw new he(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return $E(r),new Nt(n.firestore,n instanceof ks?n.converter:null,new Ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="AsyncQueue";class Dw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new N0(this,"async_queue_retry"),this.oc=()=>{const r=sm();r&&me(bw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=sm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=sm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Rs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!cl(e))throw e;me(bw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ui("INTERNAL UNHANDLED ERROR: ",Ow(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=zg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ae(47125,{hc:Ow(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ow(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class bo extends Zd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Dw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dw(e),this._firestoreClient=void 0,await e}}}function Gb(n,e){const t=typeof n=="object"?n:Md(),r=typeof n=="string"?n:od,s=Yu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=ug("firestore");a&&qb(s,...a)}return s}function Gg(n){if(n._terminated)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kb(n),n._firestoreClient}function Kb(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new vN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,X0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new zb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(an.fromBase64String(e))}catch(t){throw new he(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ar(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ar._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,ar._jsonSchema))return ar.fromBase64String(e.bytes)}}ar._jsonSchemaVersion="firestore/bytes/1.0",ar._jsonSchema={type:Ut("string",ar._jsonSchemaVersion),bytes:Ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:si._jsonSchemaVersion}}static fromJSON(e){if(ec(e,si._jsonSchema))return new si(e.latitude,e.longitude)}}si._jsonSchemaVersion="firestore/geoPoint/1.0",si._jsonSchema={type:Ut("string",si._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:oi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,oi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new oi(e.vectorValues);throw new he(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}oi._jsonSchemaVersion="firestore/vectorValue/1.0",oi._jsonSchema={type:Ut("string",oi._jsonSchemaVersion),vectorValues:Ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=/^__.*__$/;class Yb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qs(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class Z0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function eS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class nf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return _d(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(eS(this.Ec)&&Qb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Xb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yd(e)}Dc(e,t,r,s=!1){return new nf({Ec:e,methodName:t,bc:r,path:on.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(n){const e=n._freezeSettings(),t=Yd(n._databaseId);return new Xb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tS(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Qg("Data must be an object, but it was:",u,r);const d=nS(r,u);let f,m;if(a.merge)f=new qn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const T=Wm(e,E,t);if(!u.contains(T))throw new he(Q.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);iS(y,T)||y.push(T)}f=new qn(y),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new Yb(new On(d),f,m)}class sf extends tf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sf}}function Jb(n,e,t){return new nf({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Kg extends tf{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Jb(this,e,!0),r=this.vc.map((a=>fl(a,t))),s=new Qa(r);return new HN(e.path,s)}isEqual(e){return e instanceof Kg&&Li(this.vc,e.vc)}}function Zb(n,e,t,r){const s=n.Dc(1,e,t);Qg("Data must be an object, but it was:",s,r);const a=[],u=On.empty();Hs(r,((f,m)=>{const y=Yg(e,f,t);m=Ze(m);const E=s.gc(y);if(m instanceof sf)a.push(y);else{const T=fl(m,E);T!=null&&(a.push(y),u.set(y,T))}}));const d=new qn(a);return new Z0(u,d,s.fieldTransforms)}function eD(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Wm(e,r,t)],f=[s];if(a.length%2!=0)throw new he(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Wm(e,a[T])),f.push(a[T+1]);const m=[],y=On.empty();for(let T=d.length-1;T>=0;--T)if(!iS(m,d[T])){const P=d[T];let V=f[T];V=Ze(V);const L=u.gc(P);if(V instanceof sf)m.push(P);else{const F=fl(V,L);F!=null&&(m.push(P),y.set(P,F))}}const E=new qn(m);return new Z0(y,E,u.fieldTransforms)}function tD(n,e,t,r=!1){return fl(t,n.Dc(r?4:3,e))}function fl(n,e){if(rS(n=Ze(n)))return Qg("Unsupported field value:",e,n),nS(n,e);if(n instanceof tf)return(function(r,s){if(!eS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=fl(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=pt.fromDate(r);return{timestampValue:dd(s.serializer,a)}}if(r instanceof pt){const a=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dd(s.serializer,a)}}if(r instanceof si)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:v0(s.serializer,r._byteString)};if(r instanceof Nt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Dg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof oi)return(function(u,d){return{mapValue:{fields:{[GI]:{stringValue:KI},[ad]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Ng(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Bd(r)}`)})(n,e)}function nS(n,e){const t={};return BI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(n,((r,s)=>{const a=fl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function rS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof si||n instanceof ar||n instanceof Nt||n instanceof tf||n instanceof oi)}function Qg(n,e,t){if(!rS(t)||!UI(t)){const r=Bd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Wm(n,e,t){if((e=Ze(e))instanceof ef)return e._internalPath;if(typeof e=="string")return Yg(n,e);throw _d("Field path arguments must be of type string or ",n,!1,void 0,t)}const nD=new RegExp("[~\\*/\\[\\]]");function Yg(n,e,t){if(e.search(nD)>=0)throw _d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ef(...e.split("."))._internalPath}catch{throw _d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _d(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new he(Q.INVALID_ARGUMENT,d+n+f)}function iS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(of("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rD extends sS{data(){return super.data()}}function of(n,e){return typeof e=="string"?Yg(n,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xg{}class Jg extends Xg{}function Ja(n,e,...t){let r=[];e instanceof Xg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Zg)).length,d=a.filter((f=>f instanceof af)).length;if(u>1||u>0&&d>0)throw new he(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class af extends Jg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new af(e,t,r)}_apply(e){const t=this._parse(e);return lS(e._query,t),new $i(e.firestore,e.converter,Dm(e._query,t))}_parse(e){const t=rf(e.firestore);return(function(a,u,d,f,m,y,E){let T;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new he(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Vw(E,y);const V=[];for(const L of E)V.push(Mw(f,a,L));T={arrayValue:{values:V}}}else T=Mw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Vw(E,y),T=tD(d,u,E,y==="in"||y==="not-in");return Ft.create(m,y,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aS(n,e,t){const r=e,s=of("where",n);return af._create(s,r,t)}class Zg extends Xg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)lS(u,f),u=Dm(u,f)})(e._query,t),new $i(e.firestore,e.converter,Dm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class e_ extends Jg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new e_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new he(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new he(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mu(a,u)})(e._query,this._field,this._direction);return new $i(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new hl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Fu(n,e="asc"){const t=e,r=of("orderBy",n);return e_._create(r,t)}class t_ extends Jg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new t_(e,t,r)}_apply(e){return new $i(e.firestore,e.converter,ud(e._query,this._limit,this._limitType))}}function Uu(n){return lN("limit",n),t_._create("limit",n,"F")}function Mw(n,e,t){if(typeof(t=Ze(t))=="string"){if(t==="")throw new he(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n0(e)&&t.indexOf("/")!==-1)throw new he(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(lt.fromString(t));if(!Ie.isDocumentKey(r))throw new he(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return JE(n,new Ie(r))}if(t instanceof Nt)return JE(n,t._key);throw new he(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bd(t)}.`)}function Vw(n,e){if(!Array.isArray(n)||n.length===0)throw new he(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lS(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new he(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iD{convertValue(e,t="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Hs(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ad].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>kt(u.doubleValue)));return new oi(a)}convertGeoPoint(e){return new si(kt(e.latitude),kt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Wd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Du(e));default:return null}}convertTimestamp(e){const t=Ls(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Je(C0(r),9688,{name:e});const s=new Ou(r.get(1),r.get(3)),a=new Ie(r.popFirst(5));return s.isEqual(t)||Ui(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Co extends sS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(of("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Co._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Co._jsonSchemaVersion="firestore/documentSnapshot/1.0",Co._jsonSchema={type:Ut("string",Co._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class Wh extends Co{data(e={}){return super.data(e)}}class Ro{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Wh(this._firestore,this._userDataWriter,r.key,r,new fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Wh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Wh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:sD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ig.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:Ut("string",Ro._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class n_ extends iD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,t)}}function oD(n){n=br(n,$i);const e=br(n.firestore,bo),t=Gg(e),r=new n_(e);return oS(n._query),Hb(t,n._query).then((s=>new Ro(e,r,n,s)))}function aD(n,e,t){n=br(n,Nt);const r=br(n.firestore,bo),s=uS(n.converter,e);return r_(r,[tS(rf(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Dr.none())])}function cS(n,e,t,...r){n=br(n,Nt);const s=br(n.firestore,bo),a=rf(s);let u;return u=typeof(e=Ze(e))=="string"||e instanceof ef?eD(a,"updateDoc",n._key,e,t,r):Zb(a,"updateDoc",n._key,e),r_(s,[u.toMutation(n._key,Dr.exists(!0))])}function lD(n,e){const t=br(n.firestore,bo),r=gd(n),s=uS(n.converter,e);return r_(t,[tS(rf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Dr.exists(!1))]).then((()=>r))}function ju(n,...e){var t,r,s;n=Ze(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Lw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Lw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof Nt)m=br(n.firestore,bo),y=Pg(n._key.path),f={next:E=>{e[u]&&e[u](uD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=br(n,$i);m=br(E.firestore,bo),y=E._query;const T=new n_(m);f={next:P=>{e[u]&&e[u](new Ro(m,T,E,P))},error:e[u+1],complete:e[u+2]},oS(n._query)}return(function(T,P,V,L){const F=new Q0(L),oe=new j0(P,F,V);return T.asyncQueue.enqueueAndForget((async()=>F0(await $m(T),oe))),()=>{F.Ou(),T.asyncQueue.enqueueAndForget((async()=>U0(await $m(T),oe)))}})(Gg(m),y,d,f)}function r_(n,e){return(function(r,s){const a=new Rs;return r.asyncQueue.enqueueAndForget((async()=>Db(await Wb(r),s,a))),a.promise})(Gg(n),e)}function uD(n,e,t){const r=t.docs.get(e._key),s=new n_(n);return new Co(n,s,e._key,r,new fu(t.hasPendingWrites,t.fromCache),e.converter)}function cD(...n){return new Kg("arrayUnion",n)}(function(e,t=!0){(function(s){ll=s})($s),bs(new Mi("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new bo(new eN(r.getProvider("auth-internal")),new rN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new he(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ou(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),cr(FE,UE,e),cr(FE,UE,"esm2017")})();var Fw={};const Uw="@firebase/database",jw="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hS="";function hD(n){hS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ku(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return hi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dD(e)}}catch{}return new fD},Io=dS("localStorage"),pD=dS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Ld("@firebase/database"),mD=(function(){let n=1;return function(){return n++}})(),fS=function(n){const e=PA(n),t=new CA;t.update(e);const r=t.digest();return lg.encodeByteArray(r)},sc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sc.apply(null,r):typeof r=="object"?e+=Zt(r):e+=r,e+=" "}return e};let Tu=null,Bw=!0;const gD=function(n,e){ae(!0,"Can't turn on custom loggers persistently."),ja.logLevel=je.VERBOSE,Tu=ja.log.bind(ja)},sn=function(...n){if(Bw===!0&&(Bw=!1,Tu===null&&pD.get("logging_enabled")===!0&&gD()),Tu){const e=sc.apply(null,n);Tu(e)}},oc=function(n){return function(...e){sn(n,...e)}},Hm=function(...n){const e="FIREBASE INTERNAL ERROR: "+sc(...n);ja.error(e)},Bi=function(...n){const e=`FIREBASE FATAL ERROR: ${sc(...n)}`;throw ja.error(e),new Error(e)},Vn=function(...n){const e="FIREBASE WARNING: "+sc(...n);ja.warn(e)},_D=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},yD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Za="[MIN_NAME]",Do="[MAX_NAME]",Bo=function(n,e){if(n===e)return 0;if(n===Za||e===Do)return-1;if(e===Za||n===Do)return 1;{const t=zw(n),r=zw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},vD=function(n,e){return n===e?0:n<e?-1:1},nu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Zt(e))},i_=function(n){if(typeof n!="object"||n===null)return Zt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Zt(e[r]),t+=":",t+=i_(n[e[r]]);return t+="}",t},pS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function _n(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const mS=function(n){ae(!lf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},ED=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const ID=new RegExp("^-?(0*)\\d{1,10}$"),SD=-2147483648,CD=2147483647,zw=function(n){if(ID.test(n)){const e=Number(n);if(e>=SD&&e<=CD)return e}return null},pl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},RD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Iu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Hn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(sn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vn(e)}}class Hh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="5",gS="v",_S="s",yS="r",vS="f",ES=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wS="ls",TS="p",qm="ac",IS="websocket",SS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function PD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function RS(n,e,t){ae(typeof e=="string","typeof type must == string"),ae(typeof t=="object","typeof params must == object");let r;if(e===IS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===SS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PD(n)&&(t.ns=n.namespace);const s=[];return _n(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.counters_={}}incrementCounter(e,t=1){hi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return iA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={},lm={};function o_(n){const e=n.toString();return am[e]||(am[e]=new ND),am[e]}function xD(n,e){const t=n.toString();return lm[t]||(lm[t]=e()),lm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&pl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="start",DD="close",OD="pLPCommand",LD="pRTLPCB",AS="id",kS="pw",PS="ser",MD="cb",VD="seg",FD="ts",UD="d",jD="dframe",NS=1870,xS=30,BD=NS-xS,zD=25e3,$D=3e4;class La{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oc(e),this.stats_=o_(t),this.urlFn=f=>(this.appCheckToken&&(f[qm]=this.appCheckToken),RS(t,SS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new bD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($D)),yD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new a_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===$w)this.id=d,this.password=f;else if(u===DD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[$w]="t",r[PS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[MD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gS]=s_,this.transportSessionId&&(r[_S]=this.transportSessionId),this.lastSessionId&&(r[wS]=this.lastSessionId),this.applicationId&&(r[TS]=this.applicationId),this.appCheckToken&&(r[qm]=this.appCheckToken),typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(r[yS]=vS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){La.forceAllow_=!0}static forceDisallow(){La.forceDisallow_=!0}static isAvailable(){return La.forceAllow_?!0:!La.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ED()&&!wD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=VT(t),s=pS(r,BD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[jD]="t",r[AS]=e,r[kS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class a_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mD(),window[OD+this.uniqueCallbackIdentifier]=e,window[LD+this.uniqueCallbackIdentifier]=t,this.myIFrame=a_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){sn("frame writing exception"),d.stack&&sn(d.stack),sn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||sn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AS]=this.myID,e[kS]=this.myPW,e[PS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xS+r.length<=NS;){const u=this.pendingSegs.shift();r=r+"&"+VD+s+"="+u.seg+"&"+FD+s+"="+u.ts+"&"+UD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(zD)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{sn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=16384,HD=45e3;let yd=null;typeof MozWebSocket<"u"?yd=MozWebSocket:typeof WebSocket<"u"&&(yd=WebSocket);class kr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oc(this.connId),this.stats_=o_(t),this.connURL=kr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[gS]=s_,typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(u[yS]=vS),t&&(u[_S]=t),r&&(u[wS]=r),s&&(u[qm]=s),a&&(u[TS]=a),RS(e,IS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Io.set("previous_websocket_failure",!0);try{let r;gA(),this.mySock=new yd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){kr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yd!==null&&!kr.forceDisallow_}static previouslyFailed(){return Io.isInMemoryStorage||Io.get("previous_websocket_failure")===!0}markConnectionHealthy(){Io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ku(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ae(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=pS(t,WD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kr.responsesRequiredToBeHealthy=2;kr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static get ALL_TRANSPORTS(){return[La,kr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=kr&&kr.isAvailable();let r=t&&!kr.previouslyFailed();if(e.webSocketOnly&&(t||Vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kr];else{const s=this.transports_=[];for(const a of Bu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Bu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=6e4,GD=5e3,KD=10*1024,QD=100*1024,um="t",Ww="d",YD="s",Hw="r",XD="e",qw="o",Gw="a",Kw="n",Qw="p",JD="h";class ZD{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oc("c:"+this.id+":"),this.transportManager_=new Bu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Iu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(um in e){const t=e[um];t===Gw?this.upgradeIfSecondaryHealthy_():t===Hw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nu(um,e);if(Ww in e){const r=e[Ww];if(t===JD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Kw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===YD?this.onConnectionShutdown_(r):t===Hw?this.onReset_(r):t===XD?Hm("Server Error: "+r):t===qw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),s_!==r&&Vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Iu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Iu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.allowedEvents_=e,this.listeners_={},ae(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ae(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends DS{static getInstance(){return new vd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ae(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=32,Xw=768;class nt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new nt("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Bs(n){return n.pieces_.length-n.pieceNum_}function st(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new nt(n.pieces_,e)}function l_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function eO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function zu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function OS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new nt(e,0)}function Pt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof nt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new nt(t,0)}function Fe(n){return n.pieceNum_>=n.pieces_.length}function Ln(n,e){const t=Le(n),r=Le(e);if(t===null)return e;if(t===r)return Ln(st(n),st(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function tO(n,e){const t=zu(n,0),r=zu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Bo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function u_(n,e){if(Bs(n)!==Bs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function lr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Bs(n)>Bs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class nO{constructor(e,t){this.errorPrefix_=t,this.parts_=zu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Od(this.parts_[r]);LS(this)}}function rO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Od(e),LS(n)}function iO(n){const e=n.parts_.pop();n.byteLength_-=Od(e),n.parts_.length>0&&(n.byteLength_-=1)}function LS(n){if(n.byteLength_>Xw)throw new Error(n.errorPrefix_+"has a key path longer than "+Xw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Yw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yw+") or object contains a cycle "+wo(n))}function wo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends DS{static getInstance(){return new c_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ae(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1e3,sO=300*1e3,Jw=30*1e3,oO=1.3,aO=3e4,lO="server_kill",Zw=3;class Oi extends bS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=Oi.nextPersistentConnectionId_++,this.log_=oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ru,this.maxReconnectDelay_=sO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");c_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Zt(a)),ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Ni,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ae(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;Oi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&hi(e,"w")){const r=$a(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=IA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Zt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hm("Unrecognized action received from server: "+Zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aO&&(this.reconnectDelay_=ru),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Oi.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){ae(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?sn("getToken() completed but was canceled"):(sn("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new ZD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,P=>{Vn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(lO)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Vn(E),f())}}}interrupt(e){sn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>i_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new nt(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){sn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zw&&(this.reconnectDelay_=Jw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){sn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hS.replace(/\./g,"-")]=1,hg()?e["framework.cordova"]=1:zT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vd.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}Oi.nextPersistentConnectionId_=0;Oi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ue(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ue(Za,e),s=new Ue(Za,t);return this.compare(r,s)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;class MS extends uf{static get __EMPTY_NODE(){return xh}static set __EMPTY_NODE(e){xh=e}compare(e,t){return Bo(e.name,t.name)}isDefinedOn(e){throw il("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(Do,xh)}makePost(e,t){return ae(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,xh)}toString(){return".key"}}const Ba=new MS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Jt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Jt.RED,this.left=s??Mn.EMPTY_NODE,this.right=a??Mn.EMPTY_NODE}copy(e,t,r,s,a){return new Jt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Mn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Jt.RED=!0;Jt.BLACK=!1;class uO{copy(e,t,r,s,a){return this}insert(e,t,r){return new Jt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mn{constructor(e,t=Mn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Mn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Jt.BLACK,null,null))}remove(e){return new Mn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Jt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bh(this.root_,null,this.comparator_,!0,e)}}Mn.EMPTY_NODE=new uO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(n,e){return Bo(n.name,e.name)}function h_(n,e){return Bo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gm;function hO(n){Gm=n}const VS=function(n){return typeof n=="number"?"number:"+mS(n):"string:"+n},FS=function(n){if(n.isLeafNode()){const e=n.val();ae(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hi(e,".sv"),"Priority must be a string or number.")}else ae(n===Gm||n.isEmpty(),"priority of unexpected type.");ae(n===Gm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT;class Yt{static set __childrenNodeConstructor(e){eT=e}static get __childrenNodeConstructor(){return eT}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fe(e)?this:Le(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Le(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ae(r!==".priority"||Bs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(st(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=mS(this.value_):e+=this.value_,this.lazyHash_=fS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(ae(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Yt.VALUE_TYPE_ORDER.indexOf(t),a=Yt.VALUE_TYPE_ORDER.indexOf(r);return ae(s>=0,"Unknown leaf type: "+t),ae(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let US,jS;function dO(n){US=n}function fO(n){jS=n}class pO extends uf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Bo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(Do,new Yt("[PRIORITY-POST]",jS))}makePost(e,t){const r=US(e);return new Ue(t,new Yt("[PRIORITY-POST]",r))}toString(){return".priority"}}const wt=new pO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=Math.log(2);class gO{constructor(e){const t=a=>parseInt(Math.log(a)/mO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ed=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,T;if(y===0)return null;if(y===1)return E=n[f],T=t?t(E):E,new Jt(T,E.node,Jt.BLACK,null,null);{const P=parseInt(y/2,10)+f,V=s(f,P),L=s(P+1,m);return E=n[P],T=t?t(E):E,new Jt(T,E.node,Jt.BLACK,V,L)}},a=function(f){let m=null,y=null,E=n.length;const T=function(V,L){const F=E-V,oe=E;E-=V;const Y=s(F+1,oe),te=n[F],j=t?t(te):te;P(new Jt(j,te.node,L,null,Y))},P=function(V){m?(m.left=V,m=V):(y=V,m=V)};for(let V=0;V<f.count;++V){const L=f.nextBitIsOne(),F=Math.pow(2,f.count-(V+1));L?T(F,Jt.BLACK):(T(F,Jt.BLACK),T(F,Jt.RED))}return y},u=new gO(n.length),d=a(u);return new Mn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;const ka={};class Di{static get Default(){return ae(ka&&wt,"ChildrenNode.ts has not been loaded"),cm=cm||new Di({".priority":ka},{".priority":wt}),cm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$a(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Mn?t:null}hasIndex(e){return hi(this.indexSet_,e.toString())}addIndex(e,t){ae(e!==Ba,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Ue.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=Ed(r,e.getCompare()):d=ka;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new Di(y,m)}addToIndexes(e,t){const r=Xh(this.indexes_,(s,a)=>{const u=$a(this.indexSet_,a);if(ae(u,"Missing index implementation for "+a),s===ka)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Ue.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),Ed(d,u.getCompare())}else return ka;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Ue(e.name,d))),f.insert(e,e.node)}});return new Di(r,this.indexSet_)}removeFromIndexes(e,t){const r=Xh(this.indexes_,s=>{if(s===ka)return s;{const a=t.get(e.name);return a?s.remove(new Ue(e.name,a)):s}});return new Di(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;class ke{static get EMPTY_NODE(){return iu||(iu=new ke(new Mn(h_),null,Di.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&FS(this.priorityNode_),this.children_.isEmpty()&&ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||iu}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?iu:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(st(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ae(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ue(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?iu:this.priorityNode_;return new ke(s,u,a)}}updateChild(e,t){const r=Le(e);if(r===null)return t;{ae(Le(e)!==".priority"||Bs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(st(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(wt,(u,d)=>{t[u]=d.val(e),r++,a&&ke.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VS(this.getPriority().val())+":"),this.forEachChild(wt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":fS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Ue(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ac?-1:0}withIndex(e){if(e===Ba||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ba||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(wt),s=t.getIterator(wt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ba?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _O extends ke{constructor(){super(new Mn(h_),ke.EMPTY_NODE,Di.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const ac=new _O;Object.defineProperties(Ue,{MIN:{value:new Ue(Za,ke.EMPTY_NODE)},MAX:{value:new Ue(Do,ac)}});MS.__EMPTY_NODE=ke.EMPTY_NODE;Yt.__childrenNodeConstructor=ke;hO(ac);fO(ac);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=!0;function Vt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ae(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Yt(t,Vt(e))}if(!(n instanceof Array)&&yO){const t=[];let r=!1;if(_n(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Vt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Ue(u,f)))}}),t.length===0)return ke.EMPTY_NODE;const a=Ed(t,cO,u=>u.name,h_);if(r){const u=Ed(t,wt.getCompare());return new ke(a,Vt(e),new Di({".priority":u},{".priority":wt}))}else return new ke(a,Vt(e),Di.Default)}else{let t=ke.EMPTY_NODE;return _n(n,(r,s)=>{if(hi(n,r)&&r.substring(0,1)!=="."){const a=Vt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Vt(e))}}dO(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends uf{constructor(e){super(),this.indexPath_=e,ae(!Fe(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Bo(e.name,t.name):a}makePost(e,t){const r=Vt(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ue(t,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,ac);return new Ue(Do,e)}toString(){return zu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO extends uf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Bo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const r=Vt(e);return new Ue(t,r)}toString(){return".value"}}const wO=new EO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(n){return{type:"value",snapshotNode:n}}function el(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function $u(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Wu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function TO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ae(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange($u(t,d)):ae(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(el(t,r)):u.trackChildChange(Wu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(wt,(s,a)=>{t.hasChild(s)||r.trackChildChange($u(s,a))}),t.isLeafNode()||t.forEachChild(wt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Wu(s,a,u))}else r.trackChildChange(el(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ke.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.indexedFilter_=new d_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hu.getStartPost_(e),this.endPost_=Hu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Ue(t,r))||(r=ke.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ke.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ke.EMPTY_NODE);const a=this;return t.forEachChild(wt,(u,d)=>{a.matches(new Ue(u,d))||(s=s.updateImmediateChild(u,ke.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Hu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Ue(t,r))||(r=ke.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=ke.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ke.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ke.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,ke.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,P)=>E(P,T)}else u=this.index_.getCompare();const d=e;ae(d.numChildren()===this.limit_,"");const f=new Ue(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const P=T==null?1:u(T,f);if(y&&!r.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(Wu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange($u(t,E));const L=d.updateImmediateChild(t,ke.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(el(T.name,T.node)),L.updateImmediateChild(T.name,T.node)):L}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange($u(m.name,m.node)),a.trackChildChange(el(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,ke.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Za}hasEnd(){return this.endSet_}getIndexEndValue(){return ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Do}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new f_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SO(n){return n.loadsAllData()?new d_(n.getIndex()):n.hasLimit()?new IO(n):new Hu(n)}function tT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===wt?t="$priority":n.index_===wO?t="$value":n.index_===Ba?t="$key":(ae(n.index_ instanceof vO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Zt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Zt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Zt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Zt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Zt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==wt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends bS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ae(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=oc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=wd.getListenId_(e,r),d={};this.listens_[u]=d;const f=tT(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),$a(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=wd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=tT(e._queryParams),r=e._path.toString(),s=new Ni;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=ku(d.responseText)}catch{Vn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Vn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return{value:null,children:new Map}}function ml(n,e,t){if(Fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Le(e);n.children.has(r)||n.children.set(r,Td());const s=n.children.get(r);e=st(e),ml(s,e,t)}}function Km(n,e){if(Fe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(wt,(r,s)=>{ml(n,new nt(r),s)}),Km(n,e)}}else if(n.children.size>0){const t=Le(e);return e=st(e),n.children.has(t)&&Km(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Qm(n,e,t){n.value!==null?t(e,n.value):RO(n,(r,s)=>{const a=new nt(e.toString()+"/"+r);Qm(s,a,t)})}function RO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_n(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=10*1e3,kO=30*1e3,PO=300*1e3;class NO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new AO(e);const r=rT+(kO-rT)*Math.random();Iu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;_n(e,(s,a)=>{a>0&&hi(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Iu(this.reportStats_.bind(this),Math.floor(Math.random()*2*PO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nr||(Nr={}));function zS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Nr.ACK_USER_WRITE,this.source=zS()}operationForChild(e){if(Fe(this.path)){if(this.affectedTree.value!=null)return ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new nt(e));return new Id(Xe(),t,this.revert)}}else return ae(Le(this.path)===e,"operationForChild called for unrelated child."),new Id(st(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.source=e,this.path=t,this.type=Nr.LISTEN_COMPLETE}operationForChild(e){return Fe(this.path)?new qu(this.source,Xe()):new qu(this.source,st(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Nr.OVERWRITE}operationForChild(e){return Fe(this.path)?new Oo(this.source,Xe(),this.snap.getImmediateChild(e)):new Oo(this.source,st(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Nr.MERGE}operationForChild(e){if(Fe(this.path)){const t=this.children.subtree(new nt(e));return t.isEmpty()?null:t.value?new Oo(this.source,Xe(),t.value):new Gu(this.source,Xe(),t)}else return ae(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gu(this.source,st(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(TO(u.childName,u.snapshotNode))}),su(n,s,"child_removed",e,r,t),su(n,s,"child_added",e,r,t),su(n,s,"child_moved",a,r,t),su(n,s,"child_changed",e,r,t),su(n,s,"value",e,r,t),s}function su(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>OO(n,d,f)),u.forEach(d=>{const f=DO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function DO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function OO(n,e,t){if(e.childName==null||t.childName==null)throw il("Should only compare child_ events.");const r=new Ue(e.childName,e.snapshotNode),s=new Ue(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e){return{eventCache:n,serverCache:e}}function Su(n,e,t,r){return cf(new Lo(e,t,r),n.serverCache)}function $S(n,e,t,r){return cf(n.eventCache,new Lo(e,t,r))}function Ym(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Mo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;const LO=()=>(hm||(hm=new Mn(vD)),hm);class ft{static fromObject(e){let t=new ft(null);return _n(e,(r,s)=>{t=t.set(new nt(r),s)}),t}constructor(e,t=LO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Fe(e))return null;{const r=Le(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(st(e),t);return a!=null?{path:Pt(new nt(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Fe(e))return this;{const t=Le(e),r=this.children.get(t);return r!==null?r.subtree(st(e)):new ft(null)}}set(e,t){if(Fe(e))return new ft(t,this.children);{const r=Le(e),a=(this.children.get(r)||new ft(null)).set(st(e),t),u=this.children.insert(r,a);return new ft(this.value,u)}}remove(e){if(Fe(e))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const t=Le(e),r=this.children.get(t);if(r){const s=r.remove(st(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new ft(null):new ft(this.value,a)}else return this}}get(e){if(Fe(e))return this.value;{const t=Le(e),r=this.children.get(t);return r?r.get(st(e)):null}}setTree(e,t){if(Fe(e))return t;{const r=Le(e),a=(this.children.get(r)||new ft(null)).setTree(st(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new ft(this.value,u)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(Pt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Fe(e))return null;{const a=Le(e),u=this.children.get(a);return u?u.findOnPath_(st(e),Pt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,r){if(Fe(e))return this;{this.value&&r(t,this.value);const s=Le(e),a=this.children.get(s);return a?a.foreachOnPath_(st(e),Pt(t,s),r):new ft(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Pt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.writeTree_=e}static empty(){return new Or(new ft(null))}}function Cu(n,e,t){if(Fe(e))return new Or(new ft(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Ln(s,e);return a=a.updateChild(u,t),new Or(n.writeTree_.set(s,a))}else{const s=new ft(t),a=n.writeTree_.setTree(e,s);return new Or(a)}}}function iT(n,e,t){let r=n;return _n(t,(s,a)=>{r=Cu(r,Pt(e,s),a)}),r}function sT(n,e){if(Fe(e))return Or.empty();{const t=n.writeTree_.setTree(e,new ft(null));return new Or(t)}}function Xm(n,e){return zo(n,e)!=null}function zo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ln(t.path,e)):null}function oT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(wt,(r,s)=>{e.push(new Ue(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ue(r,s.value))}),e}function Ps(n,e){if(Fe(e))return n;{const t=zo(n,e);return t!=null?new Or(new ft(t)):new Or(n.writeTree_.subtree(e))}}function Jm(n){return n.writeTree_.isEmpty()}function tl(n,e){return WS(Xe(),n.writeTree_,e)}function WS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ae(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=WS(Pt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Pt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n,e){return KS(e,n)}function MO(n,e,t,r,s){ae(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Cu(n.visibleWrites,e,t)),n.lastWriteId=r}function VO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function FO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ae(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&UO(d,r.path)?s=!1:lr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return jO(n),!0;if(r.snap)n.visibleWrites=sT(n.visibleWrites,r.path);else{const d=r.children;_n(d,f=>{n.visibleWrites=sT(n.visibleWrites,Pt(r.path,f))})}return!0}else return!1}function UO(n,e){if(n.snap)return lr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lr(Pt(n.path,t),e))return!0;return!1}function jO(n){n.visibleWrites=HS(n.allWrites,BO,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function BO(n){return n.visible}function HS(n,e,t){let r=Or.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)lr(t,u)?(d=Ln(t,u),r=Cu(r,d,a.snap)):lr(u,t)&&(d=Ln(u,t),r=Cu(r,Xe(),a.snap.getChild(d)));else if(a.children){if(lr(t,u))d=Ln(t,u),r=iT(r,d,a.children);else if(lr(u,t))if(d=Ln(u,t),Fe(d))r=iT(r,Xe(),a.children);else{const f=$a(a.children,Le(d));if(f){const m=f.getChild(st(d));r=Cu(r,Xe(),m)}}}else throw il("WriteRecord should have .snap or .children")}}return r}function qS(n,e,t,r,s){if(!r&&!s){const a=zo(n.visibleWrites,e);if(a!=null)return a;{const u=Ps(n.visibleWrites,e);if(Jm(u))return t;if(t==null&&!Xm(u,Xe()))return null;{const d=t||ke.EMPTY_NODE;return tl(u,d)}}}else{const a=Ps(n.visibleWrites,e);if(!s&&Jm(a))return t;if(!s&&t==null&&!Xm(a,Xe()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(lr(m.path,e)||lr(e,m.path))},d=HS(n.allWrites,u,e),f=t||ke.EMPTY_NODE;return tl(d,f)}}}function zO(n,e,t){let r=ke.EMPTY_NODE;const s=zo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(wt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Ps(n.visibleWrites,e);return t.forEachChild(wt,(u,d)=>{const f=tl(Ps(a,new nt(u)),d);r=r.updateImmediateChild(u,f)}),oT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Ps(n.visibleWrites,e);return oT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function $O(n,e,t,r,s){ae(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=Pt(e,t);if(Xm(n.visibleWrites,a))return null;{const u=Ps(n.visibleWrites,a);return Jm(u)?s.getChild(t):tl(u,s.getChild(t))}}function WO(n,e,t,r){const s=Pt(e,t),a=zo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Ps(n.visibleWrites,s);return tl(u,r.getNode().getImmediateChild(t))}else return null}function HO(n,e){return zo(n.visibleWrites,e)}function qO(n,e,t,r,s,a,u){let d;const f=Ps(n.visibleWrites,e),m=zo(f,Xe());if(m!=null)d=m;else if(t!=null)d=tl(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let P=T.getNext();for(;P&&y.length<s;)E(P,r)!==0&&y.push(P),P=T.getNext();return y}else return[]}function GO(){return{visibleWrites:Or.empty(),allWrites:[],lastWriteId:-1}}function Sd(n,e,t,r){return qS(n.writeTree,n.treePath,e,t,r)}function __(n,e){return zO(n.writeTree,n.treePath,e)}function aT(n,e,t,r){return $O(n.writeTree,n.treePath,e,t,r)}function Cd(n,e){return HO(n.writeTree,Pt(n.treePath,e))}function KO(n,e,t,r,s,a){return qO(n.writeTree,n.treePath,e,t,r,s,a)}function y_(n,e,t){return WO(n.writeTree,n.treePath,e,t)}function GS(n,e){return KS(Pt(n.treePath,e),n.writeTree)}function KS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ae(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ae(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Wu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,$u(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,el(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Wu(r,e.snapshotNode,s.oldSnap));else throw il("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const QS=new YO;class v_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Lo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return y_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mo(this.viewCache_),a=KO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(n){return{filter:n}}function JO(n,e){ae(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ae(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ZO(n,e,t,r,s){const a=new QO;let u,d;if(t.type===Nr.OVERWRITE){const m=t;m.source.fromUser?u=Zm(n,e,m.path,m.snap,r,s,a):(ae(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Fe(m.path),u=Rd(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===Nr.MERGE){const m=t;m.source.fromUser?u=t2(n,e,m.path,m.children,r,s,a):(ae(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=eg(n,e,m.path,m.children,r,s,d,a))}else if(t.type===Nr.ACK_USER_WRITE){const m=t;m.revert?u=i2(n,e,m.path,r,s,a):u=n2(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Nr.LISTEN_COMPLETE)u=r2(n,e,t.path,r,a);else throw il("Unknown operation type: "+t.type);const f=a.getChanges();return e2(e,u,f),{viewCache:u,changes:f}}function e2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ym(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(BS(Ym(e)))}}function YS(n,e,t,r,s,a){const u=e.eventCache;if(Cd(r,t)!=null)return e;{let d,f;if(Fe(t))if(ae(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Mo(e),y=m instanceof ke?m:ke.EMPTY_NODE,E=__(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=Sd(r,Mo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Le(t);if(m===".priority"){ae(Bs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=aT(r,t,y,f);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=st(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=aT(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(y,T):E=u.getNode().getImmediateChild(m)}else E=y_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,s,a):d=u.getNode()}}return Su(e,d,u.isFullyInitialized()||Fe(t),n.filter.filtersNodes())}}function Rd(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Fe(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const P=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),P,null)}else{const P=Le(t);if(!f.isCompleteForPath(t)&&Bs(t)>1)return e;const V=st(t),F=f.getNode().getImmediateChild(P).updateChild(V,r);P===".priority"?m=y.updatePriority(f.getNode(),F):m=y.updateChild(f.getNode(),P,F,V,QS,null)}const E=$S(e,m,f.isFullyInitialized()||Fe(t),y.filtersNodes()),T=new v_(s,E,a);return YS(n,E,t,s,T,d)}function Zm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new v_(s,e,a);if(Fe(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Su(e,m,!0,n.filter.filtersNodes());else{const E=Le(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Su(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=st(t),P=d.getNode().getImmediateChild(E);let V;if(Fe(T))V=r;else{const L=y.getCompleteChild(E);L!=null?l_(T)===".priority"&&L.getChild(OS(T)).isEmpty()?V=L:V=L.updateChild(T,r):V=ke.EMPTY_NODE}if(P.equals(V))f=e;else{const L=n.filter.updateChild(d.getNode(),E,V,T,y,u);f=Su(e,L,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function lT(n,e){return n.eventCache.isCompleteForChild(e)}function t2(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=Pt(t,f);lT(e,Le(y))&&(d=Zm(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=Pt(t,f);lT(e,Le(y))||(d=Zm(n,d,y,m,s,a,u))}),d}function uT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function eg(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Fe(t)?m=r:m=new ft(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(y.hasChild(E)){const P=e.serverCache.getNode().getImmediateChild(E),V=uT(n,P,T);f=Rd(n,f,new nt(E),V,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const P=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!y.hasChild(E)&&!P){const V=e.serverCache.getNode().getImmediateChild(E),L=uT(n,V,T);f=Rd(n,f,new nt(E),L,s,a,u,d)}}),f}function n2(n,e,t,r,s,a,u){if(Cd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Fe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Rd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Fe(t)){let m=new ft(null);return f.getNode().forEachChild(Ba,(y,E)=>{m=m.set(new nt(y),E)}),eg(n,e,t,m,s,a,d,u)}else return e}else{let m=new ft(null);return r.foreach((y,E)=>{const T=Pt(t,y);f.isCompleteForPath(T)&&(m=m.set(y,f.getNode().getChild(T)))}),eg(n,e,t,m,s,a,d,u)}}function r2(n,e,t,r,s){const a=e.serverCache,u=$S(e,a.getNode(),a.isFullyInitialized()||Fe(t),a.isFiltered());return YS(n,u,t,r,QS,s)}function i2(n,e,t,r,s,a){let u;if(Cd(r,t)!=null)return e;{const d=new v_(r,e,s),f=e.eventCache.getNode();let m;if(Fe(t)||Le(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Sd(r,Mo(e));else{const E=e.serverCache.getNode();ae(E instanceof ke,"serverChildren would be complete if leaf node"),y=__(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Le(t);let E=y_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,st(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,ke.EMPTY_NODE,st(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Sd(r,Mo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Cd(r,Xe())!=null,Su(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new d_(r.getIndex()),a=SO(r);this.processor_=XO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(ke.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(ke.EMPTY_NODE,d.getNode(),null),y=new Lo(f,u.isFullyInitialized(),s.filtersNodes()),E=new Lo(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=cf(E,y),this.eventGenerator_=new xO(this.query_)}get query(){return this.query_}}function o2(n){return n.viewCache_.serverCache.getNode()}function a2(n,e){const t=Mo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Fe(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function cT(n){return n.eventRegistrations_.length===0}function l2(n,e){n.eventRegistrations_.push(e)}function hT(n,e,t){const r=[];if(t){ae(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function dT(n,e,t,r){e.type===Nr.MERGE&&e.source.queryId!==null&&(ae(Mo(n.viewCache_),"We should always have a full cache before handling merges"),ae(Ym(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=ZO(n.processor_,s,e,t,r);return JO(n.processor_,a.viewCache),ae(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,XS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function u2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(wt,(a,u)=>{r.push(el(a,u))}),t.isFullyInitialized()&&r.push(BS(t.getNode())),XS(n,r,t.getNode(),e)}function XS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return bO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;class c2{constructor(){this.views=new Map}}function h2(n){ae(!Ad,"__referenceConstructor has already been defined"),Ad=n}function d2(){return ae(Ad,"Reference.ts has not been loaded"),Ad}function f2(n){return n.views.size===0}function E_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ae(a!=null,"SyncTree gave us an op for an invalid query."),dT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(dT(u,e,t,r));return a}}function p2(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Sd(t,s?r:null),f=!1;d?f=!0:r instanceof ke?(d=__(t,r),f=!1):(d=ke.EMPTY_NODE,f=!1);const m=cf(new Lo(d,f,!1),new Lo(r,s,!1));return new s2(e,m)}return u}function m2(n,e,t,r,s,a){const u=p2(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),l2(u,t),u2(u,t)}function g2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=zs(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(hT(m,t,r)),cT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(hT(f,t,r)),cT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!zs(n)&&a.push(new(d2())(e._repo,e._path)),{removed:a,events:u}}function JS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function za(n,e){let t=null;for(const r of n.views.values())t=t||a2(r,e);return t}function ZS(n,e){if(e._queryParams.loadsAllData())return hf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function eC(n,e){return ZS(n,e)!=null}function zs(n){return hf(n)!=null}function hf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd;function _2(n){ae(!kd,"__referenceConstructor has already been defined"),kd=n}function y2(){return ae(kd,"Reference.ts has not been loaded"),kd}let v2=1;class fT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ft(null),this.pendingWriteTree_=GO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tC(n,e,t,r,s){return MO(n.pendingWriteTree_,e,t,r,s),s?lc(n,new Oo(zS(),e,t)):[]}function So(n,e,t=!1){const r=VO(n.pendingWriteTree_,e);if(FO(n.pendingWriteTree_,e)){let a=new ft(null);return r.snap!=null?a=a.set(Xe(),!0):_n(r.children,u=>{a=a.set(new nt(u),!0)}),lc(n,new Id(r.path,a,t))}else return[]}function df(n,e,t){return lc(n,new Oo(p_(),e,t))}function E2(n,e,t){const r=ft.fromObject(t);return lc(n,new Gu(p_(),e,r))}function w2(n,e){return lc(n,new qu(p_(),e))}function T2(n,e,t){const r=T_(n,t);if(r){const s=I_(r),a=s.path,u=s.queryId,d=Ln(a,e),f=new qu(m_(u),d);return S_(n,a,f)}else return[]}function tg(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||eC(u,e))){const f=g2(u,e,t,r);f2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,P)=>zs(P));if(y&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const P=C2(T);for(let V=0;V<P.length;++V){const L=P[V],F=L.query,oe=iC(n,L);n.listenProvider_.startListening(Ru(F),Pd(n,F),oe.hashFn,oe.onComplete)}}}!E&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Ru(e),null):m.forEach(T=>{const P=n.queryToTagMap.get(ff(T));n.listenProvider_.stopListening(Ru(T),P)}))}R2(n,m)}return d}function I2(n,e,t,r){const s=T_(n,r);if(s!=null){const a=I_(s),u=a.path,d=a.queryId,f=Ln(u,e),m=new Oo(m_(d),f,t);return S_(n,u,m)}else return[]}function S2(n,e,t,r){const s=T_(n,r);if(s){const a=I_(s),u=a.path,d=a.queryId,f=Ln(u,e),m=ft.fromObject(t),y=new Gu(m_(d),f,m);return S_(n,u,y)}else return[]}function pT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,P)=>{const V=Ln(T,s);a=a||za(P,V),u=u||zs(P)});let d=n.syncPointTree_.get(s);d?(u=u||zs(d),a=a||za(d,Xe())):(d=new c2,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=ke.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((P,V)=>{const L=za(V,Xe());L&&(a=a.updateImmediateChild(P,L))}));const m=eC(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=ff(e);ae(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const P=A2();n.queryToTagMap.set(T,P),n.tagToQueryMap.set(P,T)}const y=g_(n.pendingWriteTree_,s);let E=m2(d,e,t,y,a,f);if(!m&&!u&&!r){const T=ZS(d,e);E=E.concat(k2(n,e,T))}return E}function w_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Ln(u,e),m=za(d,f);if(m)return m});return qS(s,e,a,t,!0)}function lc(n,e){return nC(e,n.syncPointTree_,null,g_(n.pendingWriteTree_,Xe()))}function nC(n,e,t,r){if(Fe(n.path))return rC(n,e,t,r);{const s=e.get(Xe());t==null&&s!=null&&(t=za(s,Xe()));let a=[];const u=Le(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=GS(r,u);a=a.concat(nC(d,f,m,y))}return s&&(a=a.concat(E_(s,n,r,t))),a}}function rC(n,e,t,r){const s=e.get(Xe());t==null&&s!=null&&(t=za(s,Xe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=GS(r,u),y=n.operationForChild(u);y&&(a=a.concat(rC(y,d,f,m)))}),s&&(a=a.concat(E_(s,n,r,t))),a}function iC(n,e){const t=e.query,r=Pd(n,t);return{hashFn:()=>(o2(e)||ke.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?T2(n,t._path,r):w2(n,t._path);{const a=TD(s,t);return tg(n,t,null,a)}}}}function Pd(n,e){const t=ff(e);return n.queryToTagMap.get(t)}function ff(n){return n._path.toString()+"$"+n._queryIdentifier}function T_(n,e){return n.tagToQueryMap.get(e)}function I_(n){const e=n.indexOf("$");return ae(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new nt(n.substr(0,e))}}function S_(n,e,t){const r=n.syncPointTree_.get(e);ae(r,"Missing sync point for query tag that we're tracking");const s=g_(n.pendingWriteTree_,e);return E_(r,t,s,null)}function C2(n){return n.fold((e,t,r)=>{if(t&&zs(t))return[hf(t)];{let s=[];return t&&(s=JS(t)),_n(r,(a,u)=>{s=s.concat(u)}),s}})}function Ru(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(y2())(n._repo,n._path):n}function R2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=ff(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function A2(){return v2++}function k2(n,e,t){const r=e._path,s=Pd(n,e),a=iC(n,t),u=n.listenProvider_.startListening(Ru(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ae(!zs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,E)=>{if(!Fe(m)&&y&&zs(y))return[hf(y).query];{let T=[];return y&&(T=T.concat(JS(y).map(P=>P.query))),_n(E,(P,V)=>{T=T.concat(V)}),T}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Ru(y),Pd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new C_(t)}node(){return this.node_}}class R_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pt(this.path_,e);return new R_(this.syncTree_,t)}node(){return w_(this.syncTree_,this.path_)}}const P2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},mT=function(n,e,t){if(!n||typeof n!="object")return n;if(ae(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return N2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return x2(n[".sv"],e);ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},N2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ae(!1,"Unexpected server value: "+n)}},x2=function(n,e,t){n.hasOwnProperty("increment")||ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ae(!1,"Unexpected increment value: "+r);const s=e.node();if(ae(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},b2=function(n,e,t,r){return A_(e,new R_(t,n),r)},sC=function(n,e,t){return A_(n,new C_(e),t)};function A_(n,e,t){const r=n.getPriority().val(),s=mT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=mT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Yt(d,Vt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Yt(s))),u.forEachChild(wt,(d,f)=>{const m=A_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function P_(n,e){let t=e instanceof nt?e:new nt(e),r=n,s=Le(t);for(;s!==null;){const a=$a(r.node.children,s)||{children:{},childCount:0};r=new k_(s,r,a),t=st(t),s=Le(t)}return r}function gl(n){return n.node.value}function oC(n,e){n.node.value=e,ng(n)}function aC(n){return n.node.childCount>0}function D2(n){return gl(n)===void 0&&!aC(n)}function pf(n,e){_n(n.node.children,(t,r)=>{e(new k_(t,n,r))})}function lC(n,e,t,r){t&&e(n),pf(n,s=>{lC(s,e,!0)})}function O2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function uc(n){return new nt(n.parent===null?n.name:uc(n.parent)+"/"+n.name)}function ng(n){n.parent!==null&&L2(n.parent,n.name,n)}function L2(n,e,t){const r=D2(t),s=hi(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,ng(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ng(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=/[\[\].#$\/\u0000-\u001F\u007F]/,V2=/[\[\].#$\u0000-\u001F\u007F]/,dm=10*1024*1024,N_=function(n){return typeof n=="string"&&n.length!==0&&!M2.test(n)},uC=function(n){return typeof n=="string"&&n.length!==0&&!V2.test(n)},F2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uC(n)},cC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!lf(n)||n&&typeof n=="object"&&hi(n,".sv")},rg=function(n,e,t,r){mf(Wa(n,"value"),e,t)},mf=function(n,e,t){const r=t instanceof nt?new nO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wo(r));if(typeof e=="function")throw new Error(n+"contains a function "+wo(r)+" with contents = "+e.toString());if(lf(e))throw new Error(n+"contains "+e.toString()+" "+wo(r));if(typeof e=="string"&&e.length>dm/3&&Od(e)>dm)throw new Error(n+"contains a string greater than "+dm+" utf8 bytes "+wo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(_n(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!N_(u)))throw new Error(n+" contains an invalid key ("+u+") "+wo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rO(r,u),mf(n,d,r),iO(r)}),s&&a)throw new Error(n+' contains ".value" child '+wo(r)+" in addition to actual children.")}},U2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=zu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!N_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&lr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},j2=function(n,e,t,r){const s=Wa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];_n(e,(u,d)=>{const f=new nt(u);if(mf(s,d,Pt(t,f)),l_(f)===".priority"&&!cC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),U2(s,a)},B2=function(n,e,t){if(lf(e))throw new Error(Wa(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cC(e))throw new Error(Wa(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},hC=function(n,e,t,r){if(!uC(t))throw new Error(Wa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},z2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hC(n,e,t)},pu=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},$2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!N_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!F2(t))throw new Error(Wa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function x_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!u_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function dC(n,e,t){x_(n,t),fC(n,r=>u_(r,e))}function zi(n,e,t){x_(n,t),fC(n,r=>lr(r,e)||lr(e,r))}function fC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(H2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function H2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Tu&&sn("event: "+t.toString()),pl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="repo_interrupt",G2=25;class K2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new W2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Td(),this.transactionQueueTree_=new k_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Q2(n,e,t){if(n.stats_=o_(n.repoInfo_),n.forceRestClient_||RD())n.server_=new wd(n.repoInfo_,(r,s,a,u)=>{gT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_T(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Zt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Oi(n.repoInfo_,e,(r,s,a,u)=>{gT(n,r,s,a,u)},r=>{_T(n,r)},r=>{X2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=xD(n.repoInfo_,()=>new NO(n.stats_,n.server_)),n.infoData_=new CO,n.infoSyncTree_=new fT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=df(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),D_(n,"connected",!1),n.serverSyncTree_=new fT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);zi(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function Y2(n){const t=n.infoData_.getNode(new nt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function b_(n){return P2({timestamp:Y2(n)})}function gT(n,e,t,r,s){n.dataUpdateCount++;const a=new nt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Xh(t,m=>Vt(m));u=S2(n.serverSyncTree_,a,f,s)}else{const f=Vt(t);u=I2(n.serverSyncTree_,a,f,s)}else if(r){const f=Xh(t,m=>Vt(m));u=E2(n.serverSyncTree_,a,f)}else{const f=Vt(t);u=df(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=gf(n,a)),zi(n.eventQueue_,d,u)}function _T(n,e){D_(n,"connected",e),e===!1&&Z2(n)}function X2(n,e){_n(e,(t,r)=>{D_(n,t,r)})}function D_(n,e,t){const r=new nt("/.info/"+e),s=Vt(t);n.infoData_.updateSnapshot(r,s);const a=df(n.infoSyncTree_,r,s);zi(n.eventQueue_,r,a)}function pC(n){return n.nextWriteId_++}function J2(n,e,t,r,s){O_(n,"set",{path:e.toString(),value:t,priority:r});const a=b_(n),u=Vt(t,r),d=w_(n.serverSyncTree_,e),f=sC(u,d,a),m=pC(n),y=tC(n.serverSyncTree_,e,f,m,!0);x_(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(T,P)=>{const V=T==="ok";V||Vn("set at "+e+" failed: "+T);const L=So(n.serverSyncTree_,m,!V);zi(n.eventQueue_,e,L),nl(n,s,T,P)});const E=vC(n,e);gf(n,E),zi(n.eventQueue_,E,[])}function Z2(n){O_(n,"onDisconnectEvents");const e=b_(n),t=Td();Qm(n.onDisconnect_,Xe(),(s,a)=>{const u=b2(s,a,n.serverSyncTree_,e);ml(t,s,u)});let r=[];Qm(t,Xe(),(s,a)=>{r=r.concat(df(n.serverSyncTree_,s,a));const u=vC(n,s);gf(n,u)}),n.onDisconnect_=Td(),zi(n.eventQueue_,Xe(),r)}function eL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Km(n.onDisconnect_,e),nl(n,t,r,s)})}function yT(n,e,t,r){const s=Vt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&ml(n.onDisconnect_,e,s),nl(n,r,a,u)})}function tL(n,e,t,r,s){const a=Vt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&ml(n.onDisconnect_,e,a),nl(n,s,u,d)})}function nL(n,e,t,r){if(Yh(t)){sn("onDisconnect().update() called with empty data.  Don't do anything."),nl(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&_n(t,(u,d)=>{const f=Vt(d);ml(n.onDisconnect_,Pt(e,u),f)}),nl(n,r,s,a)})}function rL(n,e,t){let r;Le(e._path)===".info"?r=pT(n.infoSyncTree_,e,t):r=pT(n.serverSyncTree_,e,t),dC(n.eventQueue_,e._path,r)}function vT(n,e,t){let r;Le(e._path)===".info"?r=tg(n.infoSyncTree_,e,t):r=tg(n.serverSyncTree_,e,t),dC(n.eventQueue_,e._path,r)}function iL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(q2)}function O_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),sn(t,...e)}function nl(n,e,t,r){e&&pl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function mC(n,e,t){return w_(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function L_(n,e=n.transactionQueueTree_){if(e||_f(n,e),gl(e)){const t=_C(n,e);ae(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&sL(n,uc(e),t)}else aC(e)&&pf(e,t=>{L_(n,t)})}function sL(n,e,t){const r=t.map(m=>m.currentWriteId),s=mC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ae(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=Ln(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{O_(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(So(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();_f(n,P_(n.transactionQueueTree_,e)),L_(n,n.transactionQueueTree_),zi(n.eventQueue_,e,y);for(let T=0;T<E.length;T++)pl(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Vn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}gf(n,e)}},u)}function gf(n,e){const t=gC(n,e),r=uc(t),s=_C(n,t);return oL(n,s,r),r}function oL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=Ln(t,f.path);let y=!1,E;if(ae(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(So(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=G2)y=!0,E="maxretry",s=s.concat(So(n.serverSyncTree_,f.currentWriteId,!0));else{const T=mC(n,f.path,u);f.currentInputSnapshot=T;const P=e[d].update(T.val());if(P!==void 0){mf("transaction failed: Data returned ",P,f.path);let V=Vt(P);typeof P=="object"&&P!=null&&hi(P,".priority")||(V=V.updatePriority(T.getPriority()));const F=f.currentWriteId,oe=b_(n),Y=sC(V,T,oe);f.currentOutputSnapshotRaw=V,f.currentOutputSnapshotResolved=Y,f.currentWriteId=pC(n),u.splice(u.indexOf(F),1),s=s.concat(tC(n.serverSyncTree_,f.path,Y,f.currentWriteId,f.applyLocally)),s=s.concat(So(n.serverSyncTree_,F,!0))}else y=!0,E="nodata",s=s.concat(So(n.serverSyncTree_,f.currentWriteId,!0))}zi(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}_f(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)pl(r[d]);L_(n,n.transactionQueueTree_)}function gC(n,e){let t,r=n.transactionQueueTree_;for(t=Le(e);t!==null&&gl(r)===void 0;)r=P_(r,t),e=st(e),t=Le(e);return r}function _C(n,e){const t=[];return yC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function yC(n,e,t){const r=gl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);pf(e,s=>{yC(n,s,t)})}function _f(n,e){const t=gl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,oC(e,t.length>0?t:void 0)}pf(e,r=>{_f(n,r)})}function vC(n,e){const t=uc(gC(n,e)),r=P_(n.transactionQueueTree_,e);return O2(r,s=>{fm(n,s)}),fm(n,r),lC(r,s=>{fm(n,s)}),t}function fm(n,e){const t=gl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ae(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ae(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(So(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?oC(e,void 0):t.length=a+1,zi(n.eventQueue_,uc(e),s);for(let u=0;u<r.length;u++)pl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function lL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vn(`Invalid query segment '${t}' in query '${n}'`)}return e}const ET=function(n,e){const t=uL(n),r=t.namespace;t.domain==="firebase.com"&&Bi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_D();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new CS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new nt(t.pathString)}},uL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=aL(n.substring(y,E)));const T=lL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const V=e.indexOf(".");r=e.substring(0,V).toLowerCase(),t=e.substring(V+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Zt(this.snapshot.exportVal())}}class hL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ae(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ni;return eL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pu("OnDisconnect.remove",this._path);const e=new Ni;return yT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pu("OnDisconnect.set",this._path),rg("OnDisconnect.set",e,this._path);const t=new Ni;return yT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){pu("OnDisconnect.setWithPriority",this._path),rg("OnDisconnect.setWithPriority",e,this._path),B2("OnDisconnect.setWithPriority",t);const r=new Ni;return tL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){pu("OnDisconnect.update",this._path),j2("OnDisconnect.update",e,this._path);const t=new Ni;return nL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Fe(this._path)?null:l_(this._path)}get ref(){return new Gs(this._repo,this._path)}get _queryIdentifier(){const e=nT(this._queryParams),t=i_(e);return t==="{}"?"default":t}get _queryObject(){return nT(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof M_))return!1;const t=this._repo===e._repo,r=u_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+eO(this._path)}}class Gs extends M_{constructor(e,t){super(e,t,new f_,!1)}get parent(){const e=OS(this._path);return e===null?null:new Gs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new nt(e),r=ig(this.ref,e);return new Nd(this._node.getChild(t),r,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Nd(s,ig(this.ref,r),wt)))}hasChild(e){const t=new nt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wT(n,e){return n=Ze(n),n._checkNotDeleted("ref"),e!==void 0?ig(n._root,e):n._root}function ig(n,e){return n=Ze(n),Le(n._path)===null?z2("child","path",e):hC("child","path",e),new Gs(n._repo,Pt(n._path,e))}function pL(n){return n=Ze(n),new fL(n._repo,n._path)}function TT(n,e){n=Ze(n),pu("set",n._path),rg("set",e,n._path);const t=new Ni;return J2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class V_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new cL("value",this,new Nd(e.snapshotNode,new Gs(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hL(this,e,t):null}matches(e){return e instanceof V_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mL(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,E)=>{vT(n._repo,n,d),f(y,E)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new dL(t,a||void 0),d=new V_(u);return rL(n._repo,n,d),()=>vT(n._repo,n,d)}function gL(n,e,t,r){return mL(n,"value",e,t,r)}h2(Gs);_2(Gs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="FIREBASE_DATABASE_EMULATOR_HOST",sg={};let yL=!1;function vL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=ui(a);n.repoInfo_=new CS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function EL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sn("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=ET(a,s),d=u.repoInfo,f;typeof process<"u"&&Fw&&(f=Fw[_L]),f?(a=`http://${f}?ns=${d.namespace}`,u=ET(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new kD(n.name,n.options,e);$2("Invalid Firebase Database URL",u),Fe(u.path)||Bi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=TL(d,n,m,new AD(n,t));return new IL(y,n)}function wL(n,e){const t=sg[e];(!t||t[n.key]!==n)&&Bi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iL(n),delete t[n.key]}function TL(n,e,t,r){let s=sg[e.name];s||(s={},sg[e.name]=s);let a=s[n.toURLString()];return a&&Bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new K2(n,yL,t,r),s[n.toURLString()]=a,a}class IL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Q2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gs(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bi("Cannot call "+e+" on a deleted database.")}}function SL(n=Md(),e){const t=Yu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=ug("database");r&&CL(t,...r)}return t}function CL(n,e,t,r={}){n=Ze(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Li(r,a.repoInfo_.emulatorOptions))return;Bi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Bi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Hh(Hh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:cg(r.mockUserToken,n.app.options.projectId);u=new Hh(d)}ui(e)&&(bd(e),Dd("Database",!0)),vL(a,s,r,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(n){hD($s),bs(new Mi("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return EL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),cr(Uw,jw,n),cr(Uw,jw,"esm2017")}Oi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};RL();var AL="firebase",kL="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(AL,kL,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="firebasestorage.googleapis.com",wC="storageBucket",PL=120*1e3,NL=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ci{constructor(e,t,r=0){super(pm(e),`Firebase Storage: ${t} (${pm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,St.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function pm(n){return"storage/"+n}function F_(){const n="An unknown error occurred, please check the error payload for server response.";return new St(It.UNKNOWN,n)}function xL(n){return new St(It.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bL(n){return new St(It.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new St(It.UNAUTHENTICATED,n)}function OL(){return new St(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LL(n){return new St(It.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ML(){return new St(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VL(){return new St(It.CANCELED,"User canceled the upload/download.")}function FL(n){return new St(It.INVALID_URL,"Invalid URL '"+n+"'.")}function UL(n){return new St(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jL(){return new St(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wC+"' property when initializing the app?")}function BL(){return new St(It.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zL(){return new St(It.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $L(n){return new St(It.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function og(n){return new St(It.INVALID_ARGUMENT,n)}function TC(){return new St(It.APP_DELETED,"The Firebase app was deleted.")}function WL(n){return new St(It.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Au(n,e){return new St(It.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ou(n){throw new St(It.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Gn.makeFromUrl(e,t)}catch{return new Gn(e,"")}if(r.path==="")return r;throw UL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(j){j.path_=decodeURIComponent(j.path)}const y="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",P=new RegExp(`^https?://${E}/${y}/b/${s}/o${T}`,"i"),V={bucket:1,path:3},L=t===EC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",oe=new RegExp(`^https?://${L}/${s}/${F}`,"i"),te=[{regex:d,indices:f,postModify:a},{regex:P,indices:V,postModify:m},{regex:oe,indices:{bucket:1,path:2},postModify:m}];for(let j=0;j<te.length;j++){const Te=te[j],fe=Te.regex.exec(e);if(fe){const b=fe[Te.indices.bucket];let C=fe[Te.indices.path];C||(C=""),r=new Gn(b,C),Te.postModify(r);break}}if(r==null)throw FL(e);return r}}class HL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function y(...F){m||(m=!0,e.apply(null,F))}function E(F){s=setTimeout(()=>{s=null,n(P,f())},F)}function T(){a&&clearTimeout(a)}function P(F,...oe){if(m){T();return}if(F){T(),y.call(null,F,...oe);return}if(f()||u){T(),y.call(null,F,...oe);return}r<64&&(r*=2);let te;d===1?(d=2,te=0):te=(r+Math.random())*1e3,E(te)}let V=!1;function L(F){V||(V=!0,T(),!m&&(s!==null?(F||(d=2),clearTimeout(s),E(0)):F||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,L(!0)},t),L}function GL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(n){return n!==void 0}function QL(n){return typeof n=="object"&&!Array.isArray(n)}function U_(n){return typeof n=="string"||n instanceof String}function IT(n){return j_()&&n instanceof Blob}function j_(){return typeof Blob<"u"}function ST(n,e,t,r){if(r<e)throw og(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw og(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function IC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ao;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ao||(Ao={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,t,r,s,a,u,d,f,m,y,E,T=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,L)=>{this.resolve_=V,this.reject_=L,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Dh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Ao.NO_ERROR,f=a.getStatus();if(!d||YL(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Ao.ABORT;r(!1,new Dh(!1,null,y));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Dh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());KL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=F_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?TC():VL();u(f)}else{const f=ML();u(f)}};this.canceled_?t(!1,new Dh(!1,null,!0)):this.backoffId_=qL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function JL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ZL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function tM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function nM(n,e,t,r,s,a,u=!0,d=!1){const f=IC(n.urlParams),m=n.url+f,y=Object.assign({},n.headers);return eM(y,e),JL(y,t),ZL(y,a),tM(y,r),new XL(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iM(...n){const e=rM();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(j_())return new Blob(n);throw new St(It.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sM(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(n){if(typeof atob>"u")throw $L("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mm{constructor(e,t){this.data=e,this.contentType=t||null}}function aM(n,e){switch(n){case ei.RAW:return new mm(SC(e));case ei.BASE64:case ei.BASE64URL:return new mm(CC(n,e));case ei.DATA_URL:return new mm(uM(e),cM(e))}throw F_()}function SC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lM(n){let e;try{e=decodeURIComponent(n)}catch{throw Au(ei.DATA_URL,"Malformed data URL.")}return SC(e)}function CC(n,e){switch(n){case ei.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Au(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ei.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Au(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=oM(e)}catch(s){throw s.message.includes("polyfill")?s:Au(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class RC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Au(ei.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=hM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uM(n){const e=new RC(n);return e.base64?CC(ei.BASE64,e.rest):lM(e.rest)}function cM(n){return new RC(n).contentType}function hM(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){let r=0,s="";IT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(IT(this.data_)){const r=this.data_,s=sM(r,e,t);return s===null?null:new Es(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Es(r,!0)}}static getBlob(...e){if(j_()){const t=e.map(r=>r instanceof Es?r.data_:r);return new Es(iM.apply(null,t))}else{const t=e.map(u=>U_(u)?aM(ei.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new Es(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(n){let e;try{e=JSON.parse(n)}catch{return null}return QL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function fM(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function kC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(n,e){return e}class Sn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||pM}}let Oh=null;function mM(n){return!U_(n)||n.length<2?n:kC(n)}function PC(){if(Oh)return Oh;const n=[];n.push(new Sn("bucket")),n.push(new Sn("generation")),n.push(new Sn("metageneration")),n.push(new Sn("name","fullPath",!0));function e(a,u){return mM(u)}const t=new Sn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new Sn("size");return s.xform=r,n.push(s),n.push(new Sn("timeCreated")),n.push(new Sn("updated")),n.push(new Sn("md5Hash",null,!0)),n.push(new Sn("cacheControl",null,!0)),n.push(new Sn("contentDisposition",null,!0)),n.push(new Sn("contentEncoding",null,!0)),n.push(new Sn("contentLanguage",null,!0)),n.push(new Sn("contentType",null,!0)),n.push(new Sn("metadata","customMetadata",!0)),Oh=n,Oh}function gM(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new Gn(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function _M(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return gM(r,n),r}function NC(n,e,t){const r=AC(e);return r===null?null:_M(n,r,t)}function yM(n,e,t,r){const s=AC(e);if(s===null||!U_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const y=n.bucket,E=n.fullPath,T="/b/"+u(y)+"/o/"+u(E),P=B_(T,t,r),V=IC({alt:"media",token:m});return P+V})[0]}function vM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class xC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(n){if(!n)throw F_()}function EM(n,e){function t(r,s){const a=NC(n,s,e);return bC(a!==null),a}return t}function wM(n,e){function t(r,s){const a=NC(n,s,e);return bC(a!==null),yM(a,s,n.host,n._protocol)}return t}function DC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=OL():s=DL():t.getStatus()===402?s=bL(n.bucket):t.getStatus()===403?s=LL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function TM(n){const e=DC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=xL(n.path)),a.serverResponse=s.serverResponse,a}return t}function IM(n,e,t){const r=e.fullServerUrl(),s=B_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new xC(s,a,wM(n,t),u);return d.errorHandler=TM(e),d}function SM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function CM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=SM(null,e)),r}function RM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let te="";for(let j=0;j<2;j++)te=te+Math.random().toString().slice(2);return te}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=CM(e,r,s),y=vM(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",P=Es.getBlob(E,r,T);if(P===null)throw BL();const V={name:m.fullPath},L=B_(a,n.host,n._protocol),F="POST",oe=n.maxUploadRetryTime,Y=new xC(L,F,EM(n,t),oe);return Y.urlParams=V,Y.headers=u,Y.body=P.uploadData(),Y.errorHandler=DC(e),Y}class AM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ao.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ao.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ao.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw ou("cannot .send() more than once");if(ui(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ou("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ou("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ou("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ou("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kM extends AM{initXhr(){this.xhr_.responseType="text"}}function OC(){return new kM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this._service=e,t instanceof Gn?this._location=t:this._location=Gn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Vo(e,t)}get root(){const e=new Gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kC(this._location.path)}get storage(){return this._service}get parent(){const e=dM(this._location.path);if(e===null)return null;const t=new Gn(this._location.bucket,e);return new Vo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw WL(e)}}function PM(n,e,t){n._throwIfRoot("uploadBytes");const r=RM(n.storage,n._location,PC(),new Es(e,!0),t);return n.storage.makeRequestWithTokens(r,OC).then(s=>({metadata:s,ref:n}))}function NM(n){n._throwIfRoot("getDownloadURL");const e=IM(n.storage,n._location,PC());return n.storage.makeRequestWithTokens(e,OC).then(t=>{if(t===null)throw zL();return t})}function xM(n,e){const t=fM(n._location.path,e),r=new Gn(n._location.bucket,t);return new Vo(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(n){return/^[A-Za-z]+:\/\//.test(n)}function DM(n,e){return new Vo(n,e)}function LC(n,e){if(n instanceof z_){const t=n;if(t._bucket==null)throw jL();const r=new Vo(t,t._bucket);return e!=null?LC(r,e):r}else return e!==void 0?xM(n,e):n}function OM(n,e){if(e&&bM(e)){if(n instanceof z_)return DM(n,e);throw og("To use ref(service, url), the first argument must be a Storage instance.")}else return LC(n,e)}function CT(n,e){const t=e==null?void 0:e[wC];return t==null?null:Gn.makeFromBucketSpec(t,n)}function LM(n,e,t,r={}){n.host=`${e}:${t}`;const s=ui(e);s&&(bd(`https://${n.host}/b`),Dd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:cg(a,n.app.options.projectId))}class z_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=EC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PL,this._maxUploadRetryTime=NL,this._requests=new Set,s!=null?this._bucket=Gn.makeFromBucketSpec(s,this._host):this._bucket=CT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gn.makeFromBucketSpec(this._url,e):this._bucket=CT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ST("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ST("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vo(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new HL(TC());{const u=nM(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const RT="@firebase/storage",AT="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="storage";function MM(n,e,t){return n=Ze(n),PM(n,e,t)}function VM(n){return n=Ze(n),NM(n)}function FM(n,e){return n=Ze(n),OM(n,e)}function UM(n=Md(),e){n=Ze(n);const r=Yu(n,MC).getImmediate({identifier:e}),s=ug("storage");return s&&jM(r,...s),r}function jM(n,e,t,r={}){LM(n,e,t,r)}function BM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new z_(t,r,s,e,$s)}function zM(){bs(new Mi(MC,BM,"PUBLIC").setMultipleInstances(!0)),cr(RT,AT,""),cr(RT,AT,"esm2017")}zM();const $M={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},WM="https://enteesee-api.vnhairmarket.com",yf=qT($M),rl=YP(yf);M1(rl,EI).catch(()=>{});const ai=Gb(yf),kT=SL(yf),HM=UM(yf),Ns=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý",color:"#2481cc"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên",color:"#d84a35"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên",color:"#3d9b4f"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên",color:"#8e44ad"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối",color:"#c04b9b"}],xr=n=>(Ns.find(e=>e.id===n)||{name:n}).name,xs=n=>(Ns.find(e=>e.id===n)||{}).color||"#2481cc",au={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},gm=["waiting_acceptance","in_progress","waiting_review","completed"],VC={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function PT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function FC(n,e){return e.trim()?PT(n).includes(PT(e)):!0}function ko(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function $_(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function UC(n){if(!n)return"";const e=new Date(typeof n=="number"?n:Date.parse(n));if(Number.isNaN(e.getTime()))return"";const t=e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return e.toDateString()===new Date().toDateString()?t:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")} ${t}`}function qM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function or(n,{method:e="GET",body:t,token:r}={}){const s=r||(rl.currentUser?await rl.currentUser.getIdToken():"");let a;try{a=await fetch(`${WM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}function Ku(n,e="dữ liệu"){const t=String(n&&n.message||"");return/401|unauthenticated|permission|hết hạn/i.test(t)&&/401/.test(t)?"Phiên đăng nhập đã hết hạn — đăng nhập lại.":/^HTTP 404|HTTP 404/.test(t)?`Không tải được ${e} — thử tải lại trang.`:/HTTP (4\d\d|5\d\d)/.test(t)?`Không tải được ${e} — thử lại sau. Nếu vẫn lỗi, báo quản lý.`:/không kết nối được backend|backend chưa deploy/i.test(t)?"Máy chủ chưa sẵn sàng — tính năng này tạm chưa dùng được.":/failed to fetch|load failed|networkerror|network request failed/i.test(t)?"Không có mạng — kiểm tra mạng rồi thử lại.":/chưa xác định người gửi/i.test(t)?t:t||`Không tải được ${e} — thử lại sau.`}const ur={sendMessage:async({content:n,threadId:e=null,attachments:t=[],clientDocId:r=null,forwarded:s=!1,forwardedFrom:a=null},u)=>{const d=qM(u),f=(n||"").trim();if(!f)throw new Error("Nội dung trống.");try{const E=await or("/api/messages",{method:"POST",body:{content:f,roomId:"general",threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],forwarded:!!s,forwardedFrom:a||null}});return{id:E.message&&E.message.id}}catch(E){console.error("Gửi qua backend thất bại, fallback ghi trực tiếp Firestore:",E)}const m={roomId:"general",senderId:d.id,senderName:d.name,senderType:"human",content:f,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[d.id],pinned:!1,forwarded:!!s,forwardedFrom:a||null,reactions:{},edited:!1,editedAt:null,deleted:!1,deletedAt:null};return typeof r=="string"&&r.length>0?(await aD(gd(js(ai,"messages"),r),m),{id:r}):{id:(await lD(js(ai,"messages"),m)).id}},pinMessage:(n,e,t)=>or(`/api/messages/${n}/pin`,{method:"POST",body:{pinned:!!e,content:t&&t.content||"",senderName:t&&t.senderName||""}}),toggleReaction:(n,e)=>or(`/api/messages/${n}/react`,{method:"POST",body:{emoji:e}}),editMessage:(n,e)=>or(`/api/messages/${n}/edit`,{method:"POST",body:{content:e}}),deleteMessage:n=>or(`/api/messages/${n}/delete`,{method:"POST"}),markSeen:(n,e)=>e?cS(gd(ai,"messages",n),{seenBy:cD(e)}):Promise.resolve(),listTasks:(n="")=>or(`/api/tasks${n}`),createTask:n=>or("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>or(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>or("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>or("/api/jobs"),listUsers:()=>or("/api/users"),setTelegramChatId:(n,e)=>or(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})},W_="enteesee-theme",NT={light:"#eef1f5",dark:"#0b0f14"};function mu(){try{const n=localStorage.getItem(W_);return n==="dark"||n==="light"||n==="system"?n:null}catch{return null}}function jC(){try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function qh(n){return n==="dark"||n==="light"?n:jC()}function Gh(n){document.documentElement.dataset.theme=n;const e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",NT[n]||NT.light)}function GM(){const n=mu()||"system",e=qh(n);return Gh(e),e}function KM(n){try{localStorage.setItem(W_,n)}catch{}}function QM(){const[n,e]=J.useState(""),[t,r]=J.useState(""),[s,a]=J.useState(""),[u,d]=J.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await L1(rl,n.trim(),t)}catch(y){y.code==="auth/invalid-credential"?a("Email hoặc mật khẩu chưa đúng."):y.code==="auth/network-request-failed"?a("Không có mạng — kiểm tra mạng rồi thử lại."):y.code==="auth/too-many-requests"?a("Thử quá nhiều lần — đợi một lát rồi thử lại."):a("Đăng nhập chưa được — thử lại sau. Nếu vẫn lỗi, báo quản lý."),console.error("Login failed:",y)}finally{d(!1)}}return I.jsx("div",{className:"login-page",children:I.jsxs("div",{className:"login-card",children:[I.jsx("div",{className:"login-logo",children:"E"}),I.jsx("h1",{children:"Enteesee"}),I.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),I.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&I.jsx("div",{className:"err",children:s}),I.jsxs("form",{onSubmit:f,children:[I.jsx("div",{style:{marginBottom:10},children:I.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),I.jsx("div",{style:{marginBottom:12},children:I.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),I.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),I.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}function YM(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?I.jsx("b",{className:"mention",children:t},r):I.jsx("span",{children:t},r))}function XM(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function xT({status:n}){return n==="sending"||n==="failed"?I.jsxs("svg",{className:`tick tick-sending${n==="failed"?" tick-failed":""}`,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":n==="failed"?"Gửi thất bại":"Đang gửi",children:[I.jsx("circle",{cx:"6",cy:"6",r:"4.6"}),I.jsx("path",{d:"M6 3.5V6l1.8 1.2"})]}):n==="read"?I.jsxs("svg",{className:"tick tick-read",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã đọc",children:[I.jsx("path",{d:"M1 6.5 4 9.5 10 2.5"}),I.jsx("path",{d:"M5.5 6.5 8.5 9.5 14.5 2.5"})]}):I.jsx("svg",{className:"tick",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã gửi",children:I.jsx("path",{d:"M1.5 6.5 4.5 9.5 10.5 2.5"})})}function JM(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`pending-${crypto.randomUUID()}`:`pending-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}const ZM=1e4,eV=15e3,tV=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(min-width: 768px)").matches?220:140,nV=220,rV=160,iV=32,sV=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;function oV({person:n}){const[e,t]=J.useState([]),[r,s]=J.useState([]),[a,u]=J.useState(""),[d,f]=J.useState(""),[m,y]=J.useState(""),[E,T]=J.useState(!1),[P,V]=J.useState(!1),[L,F]=J.useState(null),[oe,Y]=J.useState(""),[te,j]=J.useState(""),[Te,fe]=J.useState(!1),[b,C]=J.useState([]),[k,N]=J.useState(!1),[D,U]=J.useState(null),A=J.useRef(null),Qe=J.useRef(null),rt=J.useRef(null),ie=J.useRef(null),de=J.useRef(new Map),G=J.useRef(new Map),ue=J.useRef(null),re=J.useRef([]),M=J.useRef(!1),[K,we]=J.useState(!0),[Pe,De]=J.useState(0),Me=J.useRef(!0),$e=J.useRef(!0),We=J.useRef(null);J.useEffect(()=>ju(Ja(js(ai,"messages"),Fu("createdAt","desc"),Uu(200)),W=>t(W.docs.map(ce=>({id:ce.id,...ce.data(),_pendingWrite:ce.metadata.hasPendingWrites})).reverse()),()=>Y("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),J.useEffect(()=>ju(Ja(js(ai,"aiEvents"),Fu("createdAt","desc"),Uu(200)),W=>s(W.docs.map(ce=>({id:ce.id,...ce.data()})))),[]);const et=J.useMemo(()=>{const W=new Map;for(const ce of r)ce.messageId&&W.set(ce.messageId,ce);return W},[r]),ut=J.useMemo(()=>new Set(e.filter(W=>!W._pendingWrite).map(W=>W.id)),[e]),Kn=J.useMemo(()=>new Set(b.flatMap(W=>[W.docId,W.realId].filter(Boolean))),[b]),yn=J.useMemo(()=>e.filter(W=>!(W._pendingWrite&&Kn.has(W.id))),[e,Kn]),Qn=J.useMemo(()=>{const W=m.trim();return yn.filter(ce=>FC(`${ce.content||""} ${ce.senderName||""}`,W))},[yn,m]),hr=J.useMemo(()=>{const W=new Map;for(const ce of e)W.set(ce.id,ce);return W},[e]);function Vr(W){const ce=Qe.current;if(!ce||!W)return;const ge=ce.querySelector(`[data-message-id="${CSS.escape(W)}"]`);ge&&(ge.scrollIntoView({behavior:"smooth",block:"center"}),ge.classList.add("flash"),setTimeout(()=>ge.classList.remove("flash"),1200))}async function di(W){try{await ur.pinMessage(W.id,!W.pinned,W),t(ce=>ce.map(ge=>ge.id===W.id?{...ge,pinned:!W.pinned}:ge))}catch(ce){j(Ku(ce,"ghim tin nhắn"))}}function fi(W){F(W);const ce=rt.current;ce&&(ce.focus({preventScroll:!0}),requestAnimationFrame(()=>{document.activeElement!==ce&&ce.focus({preventScroll:!0})}))}function Fr(W){const ce=de.current.get(W);ce&&(clearTimeout(ce),de.current.delete(W))}function Ur(W){Fr(W),C(ce=>ce.filter(ge=>ge.tempId!==W))}J.useEffect(()=>(M.current=!1,()=>{M.current=!0;for(const W of de.current.values())clearTimeout(W);de.current.clear();for(const W of G.current.values())clearTimeout(W.timeoutId);G.current.clear()}),[]),J.useEffect(()=>{re.current=e,e.length!==0&&C(W=>{let ce=!1;const ge=[];for(const Ye of W)if(Ye.realId&&ut.has(Ye.realId)||Ye.docId&&ut.has(Ye.docId)){Fr(Ye.tempId);const Ht=G.current.get(Ye.tempId);Ht&&(clearTimeout(Ht.timeoutId),G.current.delete(Ye.tempId)),ce=!0}else ge.push(Ye);return ce?ge:W})},[e,ut]);const Yn=J.useMemo(()=>b.filter(W=>!(W.realId&&ut.has(W.realId)||W.docId&&ut.has(W.docId))),[b,ut]);function dr(){const W=Qe.current;if(!W)return;const ce=W.scrollHeight-W.scrollTop-W.clientHeight,ge=Me.current?ce<=nV:ce<=rV;Me.current=ge,we(ge),ge&&De(0)}function Wi(W=!0){const ce=Qe.current;ce&&(ce.scrollTo({top:ce.scrollHeight,behavior:W?"smooth":"auto"}),De(0))}J.useEffect(()=>{const W=Qe.current;if(!W||yn.length===0)return;const ce=yn[yn.length-1],ge=We.current;if(We.current=ce.id,$e.current){W.scrollTo({top:W.scrollHeight,behavior:"auto"}),$e.current=!1;return}if(ce.id===ge)return;const Ye=ge?yn.findIndex(bt=>bt.id===ge):-1,Ht=Ye>=0?yn.slice(Ye+1):[ce],jr=Ht.some(bt=>bt.senderId===n.id);if(Me.current||jr)W.scrollTo({top:W.scrollHeight,behavior:"smooth"});else{const bt=Ht.filter(ct=>ct.senderId!==n.id).length;bt>0&&De(ct=>ct+bt)}},[yn,n.id]),J.useEffect(()=>{const W=Qe.current;if(!W||typeof ResizeObserver>"u")return;let ce=W.clientHeight;const ge=new ResizeObserver(()=>{const Ye=W.clientHeight;Ye<ce&&W.scrollHeight-W.scrollTop-ce<=iV&&(W.scrollTop=W.scrollHeight),ce=Ye});return ge.observe(W),()=>ge.disconnect()},[]),J.useEffect(()=>{e.slice(-5).forEach(ce=>{ce.id&&!(ce.seenBy||[]).includes(n.id)&&ur.markSeen(ce.id,n.id).catch(()=>{})})},[e,n.id]);function pi(){const W=rt.current;if(!W)return;const ce=tV();W.style.height="auto";const ge=W.scrollHeight;W.style.height=`${Math.min(ge,ce)}px`,W.style.overflowY=ge>ce?"auto":"hidden"}J.useEffect(()=>{pi()},[a]),J.useEffect(()=>{E&&ie.current&&ie.current.focus()},[E]);function Hi(W){u(W);const ce=W.match(/@([A-Za-zÀ-ỹ]*)$/);ce?(f(ce[1]),V(!0)):V(!1)}function Ks(W){u(ce=>ce.replace(/@[A-Za-zÀ-ỹ]*$/,`@${W.name} `)),V(!1),rt.current&&rt.current.focus()}async function _t(W=null){const ce=typeof W=="string";if(Te)return;let ge,Ye,Ht;if(ce){const ct=b.find(Dt=>Dt.tempId===W);if(!ct||ct.status!=="failed")return;ge=ct.tempId,Ye=ct.content,Ht=ct.threadId||null,Fr(ge),C(Dt=>Dt.map(yt=>yt.tempId===ge?{...yt,status:"sending",realId:null}:yt))}else{if(Ye=a.trim(),!Ye)return;Ht=L?L.id:null,ge=JM();const ct={tempId:ge,id:ge,docId:ge,realId:null,senderId:n.id,senderName:n.name,senderType:"human",content:Ye,threadId:Ht,createdAt:new Date().toISOString(),seenBy:[n.id],status:"sending"};C(Dt=>[...Dt,ct]),u(""),F(null),requestAnimationFrame(()=>{Wi()})}const jr=G.current.get(ge);jr&&clearTimeout(jr.timeoutId),ue.current=ge,fe(!0),j("");const bt={timeoutId:null};G.current.set(ge,bt),bt.timeoutId=setTimeout(()=>{M.current||G.current.get(ge)===bt&&(C(ct=>ct.map(Dt=>Dt.tempId===ge?{...Dt,status:"failed"}:Dt)),j("Không gửi được tin nhắn — kiểm tra mạng rồi thử lại."),ue.current===ge&&fe(!1))},eV);try{const ct=await ur.sendMessage({content:Ye,threadId:Ht,clientDocId:ge},n);clearTimeout(bt.timeoutId);const Dt=G.current.get(ge);if(Dt&&(clearTimeout(Dt.timeoutId),G.current.delete(ge)),M.current)return;const yt=ct&&ct.id?ct.id:null;if(yt&&re.current.some(vn=>vn.id===yt&&!vn._pendingWrite))Ur(ge);else if(yt)t(vn=>vn.some(Br=>Br.id===yt)?vn:[...vn,{id:yt,docId:yt,roomId:"general",senderId:n.id,senderName:n.name,senderType:"human",content:Ye,threadId:Ht||null,replyToMessageId:Ht||null,attachments:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[n.id],pinned:!1}]),Ur(ge);else{C(Br=>Br.map(ln=>ln.tempId===ge?{...ln,status:"sent",realId:yt}:ln)),Fr(ge);const vn=setTimeout(()=>{Ur(ge)},ZM);de.current.set(ge,vn)}requestAnimationFrame(()=>{pi(),rt.current&&rt.current.focus()})}catch(ct){if(clearTimeout(bt.timeoutId),M.current||G.current.get(ge)!==bt)return;G.current.delete(ge),Fr(ge),C(Dt=>Dt.map(yt=>yt.tempId===ge?{...yt,status:"failed"}:yt)),j(XM(ct))}finally{!M.current&&ue.current===ge&&(!G.current.has(ge)||G.current.get(ge)===bt)&&fe(!1)}}async function Ct(W){if(W){N(!0),j("");try{const ce=`rooms/general/${Date.now()}_${W.name}`,ge=await MM(FM(HM,ce),W),Ye=await VM(ge.ref);await ur.sendMessage({content:`Đã gửi file: ${W.name}`,attachments:[{name:W.name,size:W.size,type:W.type,url:Ye,path:ce}]},n)}catch(ce){j(/load failed|failed to fetch|networkerror/i.test(String(ce.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${ce.message}`)}finally{N(!1)}}}const xt=D?Ns.find(W=>W.id===D):null;return I.jsxs("div",{className:"chat",children:[I.jsxs("div",{className:`search-wrap${E?" open":""}`,children:[I.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>T(W=>!W),children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"11",cy:"11",r:"8"}),I.jsx("path",{d:"m21 21-4.3-4.3"})]})}),I.jsx("input",{ref:ie,className:"search",value:m,onChange:W=>y(W.target.value),placeholder:"Tìm tin nhắn…","aria-label":"Tìm tin nhắn"})]}),oe&&I.jsx("div",{className:"err-load",children:oe}),I.jsxs("div",{className:"chat-list-wrap",children:[I.jsxs("div",{className:"chat-list",ref:Qe,onScroll:dr,children:[Qn.length===0&&Yn.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),Qn.filter(W=>W.pinned).map(W=>I.jsx(_m,{m:W,person:n,event:et.get(W.id),onReply:fi,parent:W.threadId?hr.get(W.threadId):null,onQuoteClick:Vr,pinned:!0,onAvatar:U,onTogglePin:di},`pin-${W.id}`)),Qn.filter(W=>!W.pinned).map(W=>I.jsx(_m,{m:W,person:n,event:et.get(W.id),onReply:fi,parent:W.threadId?hr.get(W.threadId):null,onQuoteClick:Vr,onAvatar:U,onTogglePin:di},W.id)),Yn.map(W=>I.jsx(_m,{m:W,person:n,event:null,onReply:fi,parent:W.threadId?hr.get(W.threadId):null,onQuoteClick:Vr,onAvatar:U,onTogglePin:di,status:W.status,onRetry:W.status==="failed"?()=>_t(W.tempId):void 0},W.tempId))]}),I.jsxs("button",{type:"button",className:`scroll-bottom-btn${K?"":" visible"}${Pe>0?" has-new":""}`,"aria-label":Pe>0?`Cuộn xuống — có ${Pe>99?"hơn 99":Pe} tin mới`:"Cuộn xuống tin mới nhất","aria-hidden":K,tabIndex:K?-1:0,onClick:()=>Wi(!0),children:[I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),Pe>0&&I.jsxs("span",{className:"scroll-bottom-label",children:[Pe>99?"99+":Pe," tin mới"]})]})]}),D&&xt&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>U(null),children:I.jsxs("div",{className:"member-detail",onClick:W=>W.stopPropagation(),role:"dialog","aria-label":`Thông tin ${xt.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:xs(xt.id),color:"#fff"},children:xt.name.charAt(0)}),I.jsx("h3",{children:xt.name}),I.jsxs("div",{className:"muted",children:[xt.roleVi," · ID: ",xt.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:xt.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":"Thành viên phòng giao việc Enteesee."}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsxs("button",{type:"button",onClick:()=>{u(W=>`${W}@${xt.name} `),U(null),rt.current&&rt.current.focus()},children:["Nhắc @",xt.name]}),I.jsx("button",{type:"button",onClick:()=>U(null),children:"Đóng"})]})]})}),L&&I.jsxs("div",{className:"reply-bar",children:[I.jsxs("div",{className:"reply-bar-text",children:[I.jsxs("span",{className:"reply-bar-title",children:["Đang trả lời ",L.senderName||xr(L.senderId)]}),I.jsx("span",{className:"reply-bar-snippet",children:(L.content||"").slice(0,80)})]}),I.jsx("button",{type:"button",className:"reply-bar-close","aria-label":"Hủy trả lời",onClick:()=>F(null),children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),P&&I.jsx("div",{className:"mention-list",children:Ns.filter(W=>W.name.toLowerCase().startsWith(d.toLowerCase())).map(W=>I.jsxs("button",{type:"button",onClick:()=>Ks(W),children:["@",W.name," — ",W.roleVi]},W.id))}),te&&I.jsx("div",{className:"err",children:te}),I.jsxs("div",{className:"composer",children:[I.jsxs("div",{className:"composer-box",children:[I.jsx("button",{type:"button",className:"attach-btn",onClick:()=>A.current&&A.current.click(),disabled:k,title:"Đính kèm file","aria-label":"Đính kèm file",children:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),I.jsx("textarea",{ref:rt,value:a,onChange:W=>Hi(W.target.value),placeholder:"Nhắn tin…","aria-label":"Nhắn tin",rows:1,onKeyDown:W=>{W.key==="Enter"&&!W.shiftKey&&!W.nativeEvent.isComposing&&!sV()&&(W.preventDefault(),_t())}})]}),I.jsx("input",{ref:A,type:"file",style:{display:"none"},onChange:W=>{Ct(W.target.files[0]),W.target.value=""}}),I.jsx("button",{className:"send-btn",type:"button",onMouseDown:W=>W.preventDefault(),onClick:()=>_t(),disabled:Te||!a.trim(),title:"Gửi","aria-label":"Gửi",children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),I.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),k&&I.jsx("div",{className:"composer-note",children:"Đang tải file lên…"})]})}function aV(n){if(!n||n.length===0)return"Chưa ai xem tin này.";const e=n.map(xr);return e.length===1?`${e[0]} đã xem`:`${e.slice(0,-1).join(", ")} & ${e[e.length-1]} đã xem`}function _m({m:n,person:e,event:t,onReply:r,parent:s,onQuoteClick:a,pinned:u,onAvatar:d,status:f,onRetry:m,onTogglePin:y}){const[E,T]=J.useState(!1),[P,V]=J.useState(!1),L=!!n.tempId,F=n.senderId===e.id,oe=t,Y=(n.senderName||xr(n.senderId)||"?").charAt(0),te=xs(n.senderId),j=(n.seenBy||[]).filter(N=>N!==e.id),Te=j.length>0,fe=f||(Te?"read":"sent"),b=fe==="sent"||fe==="read",C=oe?`${oe.museRepliedAt?`Muse đã phản hồi ${ko(oe.museRepliedAt)}`:"Muse đang phản hồi…"} · ${oe.employeeAcknowledgedAt?`Nhân viên đã xác nhận ${ko(oe.employeeAcknowledgedAt)}`:"Chờ nhân viên xác nhận"}`:null;function k(N){L||N.target.closest("button, a")||T(D=>!D)}return I.jsxs("div",{className:`msg-row ${F?"mine":""}`,"data-message-id":n.id,children:[!F&&I.jsx("button",{type:"button",className:"msg-avatar-btn","aria-label":`Xem thông tin ${n.senderName||xr(n.senderId)}`,onClick:()=>d&&d(n.senderId),children:I.jsx("span",{className:"avatar",style:{backgroundColor:te,color:"#fff"},children:Y})}),I.jsxs("div",{className:`msg ${F?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||u?"pinned":""}${E?" show-actions":""}`,onClick:k,children:[!F&&I.jsx("div",{className:"sender-name",style:{color:te},children:n.senderName||xr(n.senderId)}),n.threadId&&s&&I.jsxs("button",{type:"button",className:"reply-quote",onClick:N=>{N.stopPropagation(),a&&a(s.id)},"aria-label":"Xem tin gốc",children:[I.jsx("span",{className:"reply-quote-name",style:{color:xs(s.senderId)},children:s.senderName||xr(s.senderId)}),I.jsx("span",{className:"reply-quote-text",children:s.content})]}),n.forwarded&&n.forwardedFrom&&I.jsxs("button",{type:"button",className:"reply-quote",onClick:N=>{N.stopPropagation(),a&&a(n.forwardedFrom.id)},"aria-label":"Xem tin gốc",children:[I.jsx("span",{className:"reply-quote-label",children:"Đã chuyển tiếp"}),I.jsx("span",{className:"reply-quote-name",children:n.forwardedFrom.senderName}),I.jsx("span",{className:"reply-quote-text",children:n.forwardedFrom.content})]}),n.senderType==="ai"&&I.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||u)&&I.jsx("span",{className:"tag status",children:"Đã ghim"}),I.jsxs("div",{className:"content",children:[YM(n.content),I.jsxs("span",{className:"msg-time",children:[$_(n.createdAt),F&&I.jsx("span",{className:"msg-time-wrap",children:b?I.jsx("button",{type:"button",className:"tick-btn","aria-label":fe==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái","aria-expanded":P,title:fe==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái",onClick:N=>{N.stopPropagation(),V(D=>!D)},children:I.jsx(xT,{status:fe})}):I.jsxs(I.Fragment,{children:[I.jsx(xT,{status:fe}),fe==="failed"&&m&&I.jsx("button",{type:"button",className:"retry-inline-btn",onClick:N=>{N.stopPropagation(),m()},children:"Thử lại"})]})})]})]}),n.linkPreview&&I.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&I.jsx("img",{src:n.linkPreview.image,alt:""}),I.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&I.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((N,D)=>I.jsx("div",{children:(N.type||"").startsWith("image/")?I.jsx("a",{href:N.url,target:"_blank",rel:"noreferrer",children:I.jsx("img",{className:"attachment-img",src:N.url,alt:N.name})}):I.jsxs("span",{className:"attachment-file",children:[I.jsx("a",{href:N.url,target:"_blank",rel:"noreferrer",children:N.name})," ",I.jsxs("span",{className:"muted",children:["(",Math.round((N.size||0)/1024)," KB)"]})]})},D)),C&&I.jsx("div",{style:{marginTop:6},children:I.jsx("span",{className:"tag ai-replied",children:C})}),!L&&I.jsxs("div",{className:"row",children:[I.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),I.jsx("button",{type:"button",onClick:()=>y(n),children:n.pinned?"Bỏ ghim":"Ghim"})]})]}),F&&P&&b&&I.jsx("div",{className:"seen-line",role:"status",children:aV(j)})]})}const lV=I.jsx("svg",{className:"combo-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),uV=I.jsx("svg",{className:"combo-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})});function cV({id:n,label:e,options:t,value:r,onChange:s}){const[a,u]=J.useState(!1),[d,f]=J.useState(-1),m=J.useRef(null),y=J.useRef({text:"",at:0}),E=t.find(L=>L.value===r)||t[0],T=`${n}-listbox`;J.useEffect(()=>{if(!a)return;const L=F=>{m.current&&!m.current.contains(F.target)&&u(!1)};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[a]);function P(L){const F=t[L];F&&(s(F.value),u(!1),f(-1))}function V(L){if(L.key==="ArrowDown"){if(L.preventDefault(),!a){u(!0),f(0);return}f(F=>Math.min(t.length-1,F+1))}else if(L.key==="ArrowUp"){if(L.preventDefault(),!a){u(!0),f(t.length-1);return}f(F=>Math.max(0,F-1))}else if(L.key==="Enter"||L.key===" ")L.preventDefault(),a&&d>=0?P(d):u(F=>!F);else if(L.key==="Escape")L.preventDefault(),u(!1),f(-1);else if(L.key==="Home")L.preventDefault(),u(!0),f(0);else if(L.key==="End")L.preventDefault(),u(!0),f(t.length-1);else if(L.key.length===1){const F=Date.now(),oe=y.current;oe.text=F-oe.at>800?L.key:oe.text+L.key,oe.at=F;const Y=t.findIndex(te=>te.label.toLowerCase().startsWith(oe.text.toLowerCase()));Y>=0&&(u(!0),f(Y))}}return I.jsxs("div",{className:"combo",ref:m,children:[e&&I.jsx("span",{className:"combo-label",id:`${n}-label`,children:e}),I.jsxs("button",{type:"button",id:n,className:"combo-trigger","aria-haspopup":"listbox","aria-expanded":a,"aria-labelledby":e?`${n}-label ${n}`:void 0,"aria-activedescendant":a&&d>=0?`${n}-opt-${d}`:void 0,onClick:()=>{u(L=>!L),f(t.findIndex(L=>L.value===r))},onKeyDown:V,children:[I.jsx("span",{className:"combo-value",children:E?E.label:""}),lV]}),a&&I.jsx("div",{className:"combo-panel",role:"listbox",id:T,"aria-labelledby":e?`${n}-label`:void 0,children:t.map((L,F)=>I.jsxs("button",{type:"button",id:`${n}-opt-${F}`,role:"option","aria-selected":L.value===r,className:`combo-option${L.value===r?" selected":""}${d===F?" highlighted":""}`,onClick:()=>P(F),onMouseEnter:()=>f(F),children:[L.value===r?uV:I.jsx("span",{className:"combo-check placeholder","aria-hidden":"true"}),L.label]},L.value))})]})}const hV=["urgent","high","normal","low"];function dV({person:n}){const[e,t]=J.useState([]),[r,s]=J.useState("all"),[a,u]=J.useState(""),[d,f]=J.useState(!1),[m,y]=J.useState(""),[E,T]=J.useState(null),[P,V]=J.useState("");async function L(){try{const j=n.role==="manager"?"":`?assignee=${n.id}`,Te=await ur.listTasks(j);t(Te.tasks||[]),y("")}catch(j){y(Ku(j,"danh sách công việc"))}}J.useEffect(()=>{L();const j=setInterval(L,15e3);return()=>clearInterval(j)},[n.id,n.role]);const F=J.useMemo(()=>e.filter(j=>r!=="all"&&j.status!==r?!1:FC(`${j.title} ${j.description||""} ${(j.assignees||[]).map(xr).join(" ")}`,a)),[e,r,a]);async function oe(j,Te,fe){y("");try{await ur.setTaskStatus(j.id,Te,fe),await L()}catch(b){y(Ku(b,"danh sách công việc"))}}const Y=n.role==="manager",te=gm.reduce((j,Te)=>({...j,[Te]:e.filter(fe=>fe.status===Te).length}),{});return I.jsxs("div",{children:[I.jsx("div",{className:"row",style:{marginBottom:10},children:gm.map(j=>I.jsxs("span",{className:"tag status",children:[au[j],": ",te[j]||0]},j))}),I.jsx("input",{className:"search",value:a,onChange:j=>u(j.target.value),placeholder:"Tìm công việc…","aria-label":"Tìm công việc"}),I.jsxs("div",{className:"row",style:{marginBottom:10,alignItems:"flex-end"},children:[I.jsx("div",{style:{flex:1,minWidth:180},children:I.jsx(cV,{id:"task-status-filter",label:"Trạng thái",options:[{value:"all",label:"Tất cả trạng thái"},...gm.map(j=>({value:j,label:au[j]}))],value:r,onChange:s})}),Y&&I.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&I.jsxs("div",{className:"err",role:"alert",children:[m,I.jsx("button",{type:"button",className:"retry-btn",onClick:L,children:"Thử lại"})]}),d&&Y&&I.jsx(fV,{onDone:()=>{f(!1),L()},onCancel:()=>f(!1)}),F.length===0&&!m&&I.jsx("div",{className:"empty",children:Y?I.jsxs(I.Fragment,{children:[I.jsx("div",{children:"Chưa có công việc nào — bấm để giao việc đầu tiên."}),I.jsx("div",{style:{marginTop:12},children:I.jsx("button",{type:"button",onClick:()=>f(!0),children:"+ Giao việc mới"})})]}):"Chưa có dữ liệu — chưa có công việc nào."}),F.map(j=>{const Te=(j.assignees||[]).includes(n.id);return I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:j.title}),I.jsx("div",{className:"muted",children:j.description||""}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("span",{className:"tag status",children:au[j.status]}),I.jsxs("span",{className:"tag status",children:["Ưu tiên: ",VC[j.priority]||j.priority]}),I.jsxs("span",{className:"muted",children:["Người nhận: ",(j.assignees||[]).map(xr).join(", ")]}),j.dueAt&&I.jsxs("span",{className:"muted",children:["Hạn: ",ko(j.dueAt)]})]}),j.reviewNote&&I.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",j.reviewNote]}),I.jsxs("div",{className:"row",style:{marginTop:10},children:[j.status==="waiting_acceptance"&&Te&&I.jsx("button",{className:"primary",onClick:()=>oe(j,"in_progress"),children:"Xác nhận nhận việc"}),j.status==="in_progress"&&Te&&I.jsx("button",{className:"primary",onClick:()=>oe(j,"waiting_review"),children:"Trình duyệt"}),j.status==="waiting_review"&&Y&&I.jsx("button",{className:"primary",onClick:()=>oe(j,"completed"),children:"Duyệt — Hoàn thành"}),j.status==="waiting_review"&&Y&&I.jsx("button",{className:"danger",onClick:()=>T(j.id),children:"Yêu cầu sửa"}),j.status==="completed"&&I.jsxs("span",{className:"tag acked",children:["Đã duyệt ",ko(j.approvedAt)]})]}),E===j.id&&I.jsxs("div",{style:{marginTop:8},children:[I.jsx("label",{htmlFor:"reject-reason",style:{fontSize:13,fontWeight:600},children:"Lý do yêu cầu sửa (bắt buộc)"}),I.jsx("input",{id:"reject-reason",value:P,onChange:fe=>V(fe.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("button",{disabled:!P.trim(),onClick:()=>{oe(j,"in_progress",P.trim()),T(null),V("")},children:"Gửi yêu cầu sửa"}),I.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(j.history||[]).length>0&&I.jsxs("details",{style:{marginTop:8},children:[I.jsxs("summary",{className:"muted",children:["Lịch sử (",j.history.length,")"]}),(j.history||[]).map((fe,b)=>I.jsxs("div",{className:"muted",children:[ko(fe.at)," — ",xr(fe.by),": ",fe.from?au[fe.from]:"—"," → ",au[fe.to],fe.reason?` — ${fe.reason}`:""]},b))]})]},j.id)})]})}function fV({onDone:n,onCancel:e}){const[t,r]=J.useState(""),[s,a]=J.useState(""),[u,d]=J.useState([]),[f,m]=J.useState(""),[y,E]=J.useState("normal"),[T,P]=J.useState(""),[V,L]=J.useState(!1);async function F(Y){if(Y.preventDefault(),!t.trim()||u.length===0){P("Nhập tiêu đề và chọn ít nhất một người nhận.");return}L(!0),P("");try{await ur.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:y}),n()}catch(te){P(Ku(te,"công việc"))}finally{L(!1)}}function oe(Y){d(te=>te.includes(Y)?te.filter(j=>j!==Y):[...te,Y])}return I.jsxs("form",{className:"card task-form",onSubmit:F,children:[I.jsx("h3",{style:{margin:0},children:"Giao việc mới"}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-title",children:"Tiêu đề công việc"}),I.jsx("input",{id:"task-title",value:t,onChange:Y=>r(Y.target.value),placeholder:"vd: Chuẩn bị báo cáo tuần",required:!0})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-desc",children:"Mô tả"}),I.jsx("textarea",{id:"task-desc",value:s,onChange:Y=>a(Y.target.value),placeholder:"Mô tả ngắn: làm gì, kết quả mong muốn là gì",rows:3})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"assignees-label",children:"Người nhận"}),I.jsx("div",{className:"assignee-chips",role:"group","aria-labelledby":"assignees-label",children:Ns.filter(Y=>Y.role==="staff").map(Y=>I.jsxs("label",{className:`assignee-chip${u.includes(Y.id)?" selected":""}`,children:[I.jsx("input",{type:"checkbox",checked:u.includes(Y.id),onChange:()=>oe(Y.id),"aria-label":`Chọn ${Y.name}`}),I.jsx("span",{className:"assignee-check","aria-hidden":"true",children:u.includes(Y.id)&&I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})})}),I.jsx("span",{className:"avatar sm",style:{backgroundColor:xs(Y.id),color:"#fff"},children:Y.name.charAt(0)}),Y.name]},Y.id))}),I.jsx("div",{className:"form-helper",children:"Chọn một hoặc nhiều người nhận."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-due",children:"Hạn hoàn thành"}),I.jsx("input",{id:"task-due",type:"datetime-local",value:f,onChange:Y=>m(Y.target.value)}),I.jsx("div",{className:"form-helper",children:"Để trống nếu không có hạn."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"priority-label",children:"Ưu tiên"}),I.jsx("div",{className:"segmented",role:"group","aria-labelledby":"priority-label",children:hV.map(Y=>I.jsx("button",{type:"button","aria-pressed":y===Y,className:`${y===Y?"selected":""}${Y==="urgent"&&y===Y?" danger-opt":""}`,onClick:()=>E(Y),children:VC[Y]},Y))})]}),T&&I.jsx("div",{className:"err",role:"alert",style:{margin:0},children:T}),I.jsxs("div",{className:"row",children:[I.jsx("button",{className:"primary",type:"submit",disabled:V,children:V?"Đang giao…":"Giao việc"}),I.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const pV={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận",pin:"Ghim"};function mV({person:n,onUnread:e}){const[t,r]=J.useState([]),[s,a]=J.useState(""),[u,d]=J.useState(0),f=J.useCallback(()=>{a(""),d(y=>y+1)},[]);J.useEffect(()=>ju(Ja(js(ai,"notifications"),aS("recipientId","==",n.id),Fu("createdAt","desc"),Uu(100)),y=>{const E=y.docs.map(T=>({id:T.id,...T.data()}));r(E),a(""),e(E.filter(T=>!T.read).length)},y=>{console.error("Notifications load failed:",y),a("Không tải được thông báo — thử lại sau.")}),[n.id,e,u]);async function m(){await Promise.all(t.filter(y=>!y.read).map(y=>cS(gd(ai,"notifications",y.id),{read:!0}).catch(()=>{})))}return I.jsxs("div",{children:[I.jsxs("div",{className:"row",style:{marginBottom:10},children:[I.jsx("b",{children:"Thông báo của bạn"}),I.jsx("button",{onClick:m,children:"Đánh dấu đã đọc hết"})]}),s&&I.jsxs("div",{className:"err",role:"alert",children:[s,I.jsx("button",{type:"button",className:"retry-btn",onClick:f,children:"Thử lại"})]}),t.length===0&&!s&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(y=>I.jsxs("div",{className:`card${y.read?"":" unread"}`,style:y.read?{opacity:.65}:{},children:[!y.read&&I.jsx("span",{className:"unread-dot","aria-hidden":"true"}),I.jsxs("div",{className:"row",children:[I.jsx("span",{className:"tag status",children:pV[y.type]||y.type}),I.jsx("span",{className:"muted",children:ko(y.createdAt)})]}),I.jsxs("div",{style:{marginTop:6},children:[xr(y.senderId),": ",y.content]}),y.replyToContent&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Trả lời ",y.replyToSenderName||"tin nhắn",": ",(y.replyToContent||"").slice(0,150)]})]},y.id))]})}const gV=[{value:"system",label:"Theo hệ thống"},{value:"light",label:"Sáng"},{value:"dark",label:"Tối"}];function _V({person:n,onlineByPerson:e,onSignOut:t,themeMode:r="system",onThemeModeChange:s}){const[a,u]=J.useState([]),[d,f]=J.useState([]),[m,y]=J.useState(""),[E,T]=J.useState([]),[P,V]=J.useState({}),[L,F]=J.useState("");J.useEffect(()=>ju(Ja(js(ai,"aiEvents"),Fu("createdAt","desc"),Uu(20)),j=>u(j.docs.map(Te=>({id:Te.id,...Te.data()})))),[]),J.useEffect(()=>{n.role==="manager"&&(ur.listJobs().then(j=>f(j.jobs||[])).catch(j=>y(Ku(j,"hàng đợi AI"))),ur.listUsers().then(j=>T(j.users||[])).catch(()=>{}))},[n.role]);const Y=a.filter(j=>(j.mentions||[]).includes(n.id)).find(j=>j.museRepliedAt),te=d.filter(j=>j.deadLetter);return I.jsxs("div",{children:[I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:n.name}),I.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),I.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),I.jsxs("div",{className:"muted",children:["Muse của bạn: ",Y?`đã phản hồi lần cuối ${ko(Y.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),I.jsx("div",{className:"row",style:{marginTop:10},children:I.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Giao diện"}),I.jsx("div",{className:"segmented",role:"group","aria-label":"Chọn giao diện",children:gV.map(j=>{const Te=r===j.value;return I.jsx("button",{type:"button",className:Te?"selected":"","aria-pressed":Te,onClick:()=>s&&s(j.value),children:j.label},j.value)})}),I.jsx("div",{className:"muted",style:{marginTop:8},children:"Theo hệ thống: tự đổi sáng/tối theo chế độ của điện thoại/máy tính."})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Kênh Telegram"}),I.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),I.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),I.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),I.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),E.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),E.map(j=>I.jsxs("div",{className:"form-field",style:{marginBottom:8},children:[I.jsxs("label",{htmlFor:`tg-${j.id}`,children:[j.name," — chat_id Telegram"]}),I.jsxs("div",{className:"row",children:[I.jsx("input",{id:`tg-${j.id}`,value:P[j.id]!==void 0?P[j.id]:j.telegramChatId||"",onChange:Te=>V({...P,[j.id]:Te.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),I.jsx("button",{onClick:async()=>{await ur.setTelegramChatId(j.id,P[j.id]!==void 0?P[j.id]:j.telegramChatId||""),F(`Đã lưu chat_id của ${j.name}.`),ur.listUsers().then(Te=>T(Te.users||[]))},children:"Lưu"})]})]},j.id)),L&&I.jsx("div",{className:"muted",children:L})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),m&&I.jsx("div",{className:"err",children:m}),d.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),te.length>0&&I.jsxs("div",{className:"err",children:["Có ",te.length," job vào dead-letter (gửi thất bại nhiều lần): ",te.map(j=>j.eventId).join(", ")]}),d.slice(0,20).map(j=>I.jsxs("div",{className:"muted",children:[j.eventId," → ",xr(j.recipientId),": ",j.status," (lần thử ",j.attempt,")",j.lastError?` — ${j.lastError}`:""]},j.jobId))]})]})}const Pa={chat:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M9 11l3 3L22 4"}),I.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),I.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),I.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),menu:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),I.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),I.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),moon:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),sun:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"12",cy:"12",r:"4"}),I.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),I.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),I.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),I.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),I.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),I.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),I.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),I.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},bT=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function DT({p:n,online:e,lastSeen:t,lastMsg:r,task:s,isAi:a,onSelect:u}){const d=r&&r.content||"";return I.jsxs("li",{className:"member-row-btn",role:"button",tabIndex:0,onClick:()=>u&&u(n),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&u&&(f.preventDefault(),u(n))},title:`Xem thông tin ${n.name}`,children:[I.jsxs("span",{className:"avatar-wrap",children:[I.jsx("span",{className:"avatar sm",style:{backgroundColor:xs(n.id),color:"#fff"},children:n.name.charAt(0)}),I.jsx("span",{className:e?"online-dot":"offline-dot"})]}),I.jsxs("span",{className:"side-person",children:[I.jsxs("span",{className:"side-name",children:[n.name," ",I.jsxs("span",{className:"side-role",children:["· ",n.roleVi]})]}),I.jsx("span",{className:`side-status${e?" online":""}`,children:e?"Đang online":t?`Hoạt động lần cuối ${UC(t)}`:"Chưa có dữ liệu hoạt động"}),r?I.jsxs("span",{className:"side-last",children:["“",d.slice(0,48),d.length>48?"…":"","” · ",$_(r.createdAt)]}):I.jsx("span",{className:"side-last",children:"Chưa có tin nhắn gần đây"}),s&&I.jsxs("span",{className:"side-task",children:["Đang làm: ",s]})]})]})}function yV(){const[n,e]=J.useState(null),[t,r]=J.useState(!1),s=J.useRef(!1),[a,u]=J.useState(null),[d,f]=J.useState("chat"),[m,y]=J.useState({}),[E,T]=J.useState(0),[P,V]=J.useState(!1),[L,F]=J.useState({}),[oe,Y]=J.useState({}),[te,j]=J.useState(null),[Te,fe]=J.useState(()=>mu()||"system"),[b,C]=J.useState(()=>document.documentElement.dataset.theme||qh(mu()||"system"));function k(ie){const de=ie==="dark"||ie==="light"||ie==="system"?ie:"system",G=qh(de);fe(de),C(G),Gh(G),KM(de)}function N(){k(b==="dark"?"light":"dark")}J.useEffect(()=>{const ie=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,de=()=>{const ue=mu();if(ue==="light"||ue==="dark")return;const re=jC();Gh(re),C(re)},G=ue=>{if(ue.key!==null&&ue.key!==W_)return;const re=mu()||"system",M=qh(re);fe(re),Gh(M),C(M)};return ie&&(ie.addEventListener?ie.addEventListener("change",de):ie.addListener&&ie.addListener(de)),window.addEventListener("storage",G),()=>{ie&&(ie.removeEventListener?ie.removeEventListener("change",de):ie.removeListener&&ie.removeListener(de)),window.removeEventListener("storage",G)}},[]),J.useEffect(()=>U1(rl,async ie=>{if(s.current||(s.current=!0,r(!0)),e(ie),!ie){u(null);return}const de=(ie.email||"").toLowerCase();let G=null;try{const ue=Ja(js(ai,"users"),aS("email","==",de)),re=await oD(ue);if(!re.empty){const M=re.docs[0].data();G=Ns.find(K=>K.id===M.id)||{id:M.id,name:M.name||de,role:M.role||"staff",roleVi:M.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!G&&de==="teddyssk559@gmail.com"&&(G=Ns.find(ue=>ue.id==="chung")),G||(G={id:ie.uid,name:ie.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(G)}),[]),J.useEffect(()=>{if(!n||!a)return;const ie=wT(kT,`presence/${n.uid}`),de=()=>TT(ie,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(re=>console.error("Presence write failed:",re));de(),pL(ie).remove().catch(re=>console.error("Presence onDisconnect failed:",re));const G=setInterval(de,6e4),ue=gL(wT(kT,"presence"),re=>y(re.val()||{}),re=>console.error("Presence read failed:",re));return()=>{clearInterval(G),ue(),TT(ie,null).catch(re=>console.error("Presence clear failed:",re))}},[n,a]);const D=J.useMemo(()=>{const ie={};for(const de of Object.values(m||{})){if(!de||!de.personId)continue;const G=typeof de.lastSeen=="number"?de.lastSeen:Date.parse(de.lastSeen||"");ie[de.personId]=de.online===!0&&Number.isFinite(G)&&Date.now()-G<12e4}return ie},[m]),U=J.useMemo(()=>{const ie={};for(const de of Object.values(m||{})){if(!de||!de.personId)continue;const G=typeof de.lastSeen=="number"?de.lastSeen:Date.parse(de.lastSeen||"");Number.isFinite(G)&&(ie[de.personId]=G)}return ie},[m]);if(J.useEffect(()=>{if(n)return ju(Ja(js(ai,"messages"),Fu("createdAt","desc"),Uu(60)),ie=>{const de={};for(const G of ie.docs){const ue=G.data();ue&&ue.senderId&&!de[ue.senderId]&&(de[ue.senderId]={content:ue.content||"",createdAt:ue.createdAt})}F(de)},()=>{})},[n]),J.useEffect(()=>{if(!n)return;let ie=!1;return ur.listTasks("").then(de=>{if(ie)return;const G={};for(const ue of de.tasks||[])if(ue.status==="in_progress")for(const re of ue.assignees||[])G[re]||(G[re]=ue.title);Y(G)}).catch(()=>{}),()=>{ie=!0}},[n]),!t)return I.jsx("div",{className:"app",children:I.jsxs("div",{className:"loading",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})});if(!n)return I.jsx(QM,{});if(!a)return I.jsx("div",{className:"app",children:I.jsx("div",{className:"content",children:I.jsx("div",{className:"main",children:I.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})});const A=Ns.filter(ie=>ie.id!=="muse"),Qe=A.filter(ie=>D[ie.id]).length,rt={id:"muse",name:"Muse",roleVi:"AI điều phối"};return I.jsxs("div",{className:`app${d==="chat"?" app-chat":""}`,children:[I.jsxs("aside",{className:`sidebar${P?" open":""}`,children:[I.jsxs("div",{className:"side-brand",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]}),I.jsx("button",{type:"button",className:"drawer-close","aria-label":"Đóng menu",onClick:()=>V(!1),children:Pa.close})]}),I.jsx("nav",{className:"side-nav",children:bT.map(ie=>I.jsxs("button",{className:d===ie.id?"active":"",onClick:()=>{f(ie.id),V(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[Pa[ie.id],ie.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:ie.label})]},ie.id))}),I.jsx("div",{className:"side-section",children:"Thành viên · Hoạt động"}),I.jsxs("ul",{className:"side-people",children:[A.map(ie=>I.jsx(DT,{p:ie,online:!!D[ie.id],lastSeen:U[ie.id],lastMsg:L[ie.id],task:oe[ie.id],onSelect:j},ie.id)),I.jsx(DT,{p:rt,isAi:!0,online:!0,lastSeen:U.muse,lastMsg:L.muse,task:oe.muse,onSelect:j})]}),I.jsxs("div",{className:"side-user",children:[I.jsx("span",{className:"avatar",style:{backgroundColor:xs(a.id),color:"#fff"},children:a.name.charAt(0)}),I.jsxs("div",{children:[I.jsx("div",{className:"side-name",children:a.name}),I.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),P&&I.jsx("div",{className:"drawer-backdrop",onClick:()=>V(!1)}),I.jsxs("div",{className:"content",children:[I.jsxs("header",{className:"header",children:[I.jsx("button",{type:"button",className:"menu-btn","aria-label":"Mở menu",onClick:()=>V(!0),children:Pa.menu}),I.jsxs("div",{className:"chat-peer",onClick:()=>V(!0),title:"Mở menu",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{className:"peer-info",children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsxs("div",{className:"peer-status",children:[A.length," thành viên",Qe>0&&I.jsxs("span",{className:"online-count",children:[" · ",Qe," đang online"]})]})]})]}),I.jsx("button",{type:"button",className:"header-avatars",onClick:()=>V(!0),"aria-label":"Mở danh sách thành viên",title:"Danh sách thành viên",children:A.map(ie=>I.jsxs("span",{className:"avatar-wrap",title:`${ie.name} — ${D[ie.id]?"đang online":"offline"}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:xs(ie.id),color:"#fff"},children:ie.name.charAt(0)}),I.jsx("span",{className:D[ie.id]?"online-dot":"offline-dot"})]},ie.id))}),I.jsx("button",{type:"button",className:"theme-btn",onClick:N,"aria-label":b==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối",title:b==="dark"?"Giao diện sáng":"Giao diện tối",children:b==="dark"?Pa.sun:Pa.moon})]}),I.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&I.jsx(oV,{person:a}),d==="tasks"&&I.jsx(dV,{person:a}),d==="notifs"&&I.jsx(mV,{person:a,onUnread:T}),d==="account"&&I.jsx(_V,{person:a,onlineByPerson:D,onSignOut:()=>j1(rl),themeMode:Te,onThemeModeChange:k})]})]}),I.jsx("nav",{className:"nav",children:bT.map(ie=>I.jsxs("button",{className:d===ie.id?"active":"",onClick:()=>{f(ie.id),V(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[Pa[ie.id],ie.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:ie.label})]},ie.id))}),te&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>j(null),children:I.jsxs("div",{className:"member-detail",onClick:ie=>ie.stopPropagation(),role:"dialog","aria-label":`Thông tin ${te.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:xs(te.id),color:"#fff"},children:te.name.charAt(0)}),I.jsx("h3",{children:te.name}),I.jsxs("div",{className:"muted",children:[te.roleVi," · ID: ",te.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:te.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":D[te.id]?"Đang online.":U[te.id]?`Hoạt động lần cuối ${UC(U[te.id])}.`:"Chưa có dữ liệu hoạt động."}),L[te.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Tin mới nhất: “",(L[te.id].content||"").slice(0,80),"” · ",$_(L[te.id].createdAt)]}),oe[te.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Đang làm: ",oe[te.id]]}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsx("button",{type:"button",onClick:()=>{j(null),V(!1),f("chat")},children:"Nhắn trong phòng"}),I.jsx("button",{type:"button",onClick:()=>j(null),children:"Đóng"})]})]})})]})}GM();eA.createRoot(document.getElementById("root")).render(I.jsx(GR.StrictMode,{children:I.jsx(yV,{})}));
