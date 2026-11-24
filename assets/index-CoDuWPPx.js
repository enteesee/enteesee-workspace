(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function AT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var jp={exports:{}},Jl={},Bp={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function DR(){if(Hv)return xe;Hv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(P){return P===null||typeof P!="object"?null:(P=E&&P[E]||P["@@iterator"],typeof P=="function"?P:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,j={};function B(P,W,fe){this.props=P,this.context=W,this.refs=j,this.updater=fe||x}B.prototype.isReactComponent={},B.prototype.setState=function(P,W){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,W,"setState")},B.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function K(P,W,fe){this.props=P,this.context=W,this.refs=j,this.updater=fe||x}var ne=K.prototype=new Z;ne.constructor=K,V(ne,B.prototype),ne.isPureReactComponent=!0;var q=Array.isArray,Ie=Object.prototype.hasOwnProperty,de={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(P,W,fe){var Ae,Ne={},Ve=null,ze=null;if(W!=null)for(Ae in W.ref!==void 0&&(ze=W.ref),W.key!==void 0&&(Ve=""+W.key),W)Ie.call(W,Ae)&&!O.hasOwnProperty(Ae)&&(Ne[Ae]=W[Ae]);var $e=arguments.length-2;if($e===1)Ne.children=fe;else if(1<$e){for(var Ze=Array($e),Lt=0;Lt<$e;Lt++)Ze[Lt]=arguments[Lt+2];Ne.children=Ze}if(P&&P.defaultProps)for(Ae in $e=P.defaultProps,$e)Ne[Ae]===void 0&&(Ne[Ae]=$e[Ae]);return{$$typeof:n,type:P,key:Ve,ref:ze,props:Ne,_owner:de.current}}function R(P,W){return{$$typeof:n,type:P.type,key:W,ref:P.ref,props:P.props,_owner:P._owner}}function N(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function b(P){var W={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(fe){return W[fe]})}var M=/\/+/g;function k(P,W){return typeof P=="object"&&P!==null&&P.key!=null?b(""+P.key):W.toString(36)}function Ke(P,W,fe,Ae,Ne){var Ve=typeof P;(Ve==="undefined"||Ve==="boolean")&&(P=null);var ze=!1;if(P===null)ze=!0;else switch(Ve){case"string":case"number":ze=!0;break;case"object":switch(P.$$typeof){case n:case e:ze=!0}}if(ze)return ze=P,Ne=Ne(ze),P=Ae===""?"."+k(ze,0):Ae,q(Ne)?(fe="",P!=null&&(fe=P.replace(M,"$&/")+"/"),Ke(Ne,W,fe,"",function(Lt){return Lt})):Ne!=null&&(N(Ne)&&(Ne=R(Ne,fe+(!Ne.key||ze&&ze.key===Ne.key?"":(""+Ne.key).replace(M,"$&/")+"/")+P)),W.push(Ne)),1;if(ze=0,Ae=Ae===""?".":Ae+":",q(P))for(var $e=0;$e<P.length;$e++){Ve=P[$e];var Ze=Ae+k(Ve,$e);ze+=Ke(Ve,W,fe,Ze,Ne)}else if(Ze=T(P),typeof Ze=="function")for(P=Ze.call(P),$e=0;!(Ve=P.next()).done;)Ve=Ve.value,Ze=Ae+k(Ve,$e++),ze+=Ke(Ve,W,fe,Ze,Ne);else if(Ve==="object")throw W=String(P),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ze}function At(P,W,fe){if(P==null)return P;var Ae=[],Ne=0;return Ke(P,Ae,"","",function(Ve){return W.call(fe,Ve,Ne++)}),Ae}function kt(P){if(P._status===-1){var W=P._result;W=W(),W.then(function(fe){(P._status===0||P._status===-1)&&(P._status=1,P._result=fe)},function(fe){(P._status===0||P._status===-1)&&(P._status=2,P._result=fe)}),P._status===-1&&(P._status=0,P._result=W)}if(P._status===1)return P._result.default;throw P._result}var He={current:null},ie={transition:null},ge={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ie,ReactCurrentOwner:de};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:At,forEach:function(P,W,fe){At(P,function(){W.apply(this,arguments)},fe)},count:function(P){var W=0;return At(P,function(){W++}),W},toArray:function(P){return At(P,function(W){return W})||[]},only:function(P){if(!N(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},xe.Component=B,xe.Fragment=t,xe.Profiler=s,xe.PureComponent=K,xe.StrictMode=r,xe.Suspense=f,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,xe.act=oe,xe.cloneElement=function(P,W,fe){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Ae=V({},P.props),Ne=P.key,Ve=P.ref,ze=P._owner;if(W!=null){if(W.ref!==void 0&&(Ve=W.ref,ze=de.current),W.key!==void 0&&(Ne=""+W.key),P.type&&P.type.defaultProps)var $e=P.type.defaultProps;for(Ze in W)Ie.call(W,Ze)&&!O.hasOwnProperty(Ze)&&(Ae[Ze]=W[Ze]===void 0&&$e!==void 0?$e[Ze]:W[Ze])}var Ze=arguments.length-2;if(Ze===1)Ae.children=fe;else if(1<Ze){$e=Array(Ze);for(var Lt=0;Lt<Ze;Lt++)$e[Lt]=arguments[Lt+2];Ae.children=$e}return{$$typeof:n,type:P.type,key:Ne,ref:Ve,props:Ae,_owner:ze}},xe.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:a,_context:P},P.Consumer=P},xe.createElement=S,xe.createFactory=function(P){var W=S.bind(null,P);return W.type=P,W},xe.createRef=function(){return{current:null}},xe.forwardRef=function(P){return{$$typeof:d,render:P}},xe.isValidElement=N,xe.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:kt}},xe.memo=function(P,W){return{$$typeof:m,type:P,compare:W===void 0?null:W}},xe.startTransition=function(P){var W=ie.transition;ie.transition={};try{P()}finally{ie.transition=W}},xe.unstable_act=oe,xe.useCallback=function(P,W){return He.current.useCallback(P,W)},xe.useContext=function(P){return He.current.useContext(P)},xe.useDebugValue=function(){},xe.useDeferredValue=function(P){return He.current.useDeferredValue(P)},xe.useEffect=function(P,W){return He.current.useEffect(P,W)},xe.useId=function(){return He.current.useId()},xe.useImperativeHandle=function(P,W,fe){return He.current.useImperativeHandle(P,W,fe)},xe.useInsertionEffect=function(P,W){return He.current.useInsertionEffect(P,W)},xe.useLayoutEffect=function(P,W){return He.current.useLayoutEffect(P,W)},xe.useMemo=function(P,W){return He.current.useMemo(P,W)},xe.useReducer=function(P,W,fe){return He.current.useReducer(P,W,fe)},xe.useRef=function(P){return He.current.useRef(P)},xe.useState=function(P){return He.current.useState(P)},xe.useSyncExternalStore=function(P,W,fe){return He.current.useSyncExternalStore(P,W,fe)},xe.useTransition=function(){return He.current.useTransition()},xe.version="18.3.1",xe}var qv;function rg(){return qv||(qv=1,Bp.exports=DR()),Bp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function bR(){if(Gv)return Jl;Gv=1;var n=rg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,E={},T=null,x=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(x=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:x,props:E,_owner:s.current}}return Jl.Fragment=t,Jl.jsx=u,Jl.jsxs=u,Jl}var Kv;function OR(){return Kv||(Kv=1,jp.exports=bR()),jp.exports}var C=OR(),le=rg();const LR=AT(le);var wh={},zp={exports:{}},vn={},$p={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function MR(){return Qv||(Qv=1,(function(n){function e(ie,ge){var oe=ie.length;ie.push(ge);e:for(;0<oe;){var P=oe-1>>>1,W=ie[P];if(0<s(W,ge))ie[P]=ge,ie[oe]=W,oe=P;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var ge=ie[0],oe=ie.pop();if(oe!==ge){ie[0]=oe;e:for(var P=0,W=ie.length,fe=W>>>1;P<fe;){var Ae=2*(P+1)-1,Ne=ie[Ae],Ve=Ae+1,ze=ie[Ve];if(0>s(Ne,oe))Ve<W&&0>s(ze,Ne)?(ie[P]=ze,ie[Ve]=oe,P=Ve):(ie[P]=Ne,ie[Ae]=oe,P=Ae);else if(Ve<W&&0>s(ze,oe))ie[P]=ze,ie[Ve]=oe,P=Ve;else break e}}return ge}function s(ie,ge){var oe=ie.sortIndex-ge.sortIndex;return oe!==0?oe:ie.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,E=null,T=3,x=!1,V=!1,j=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ie){for(var ge=t(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=ie)r(m),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(m)}}function q(ie){if(j=!1,ne(ie),!V)if(t(f)!==null)V=!0,kt(Ie);else{var ge=t(m);ge!==null&&He(q,ge.startTime-ie)}}function Ie(ie,ge){V=!1,j&&(j=!1,Z(S),S=-1),x=!0;var oe=T;try{for(ne(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||ie&&!b());){var P=E.callback;if(typeof P=="function"){E.callback=null,T=E.priorityLevel;var W=P(E.expirationTime<=ge);ge=n.unstable_now(),typeof W=="function"?E.callback=W:E===t(f)&&r(f),ne(ge)}else r(f);E=t(f)}if(E!==null)var fe=!0;else{var Ae=t(m);Ae!==null&&He(q,Ae.startTime-ge),fe=!1}return fe}finally{E=null,T=oe,x=!1}}var de=!1,O=null,S=-1,R=5,N=-1;function b(){return!(n.unstable_now()-N<R)}function M(){if(O!==null){var ie=n.unstable_now();N=ie;var ge=!0;try{ge=O(!0,ie)}finally{ge?k():(de=!1,O=null)}}else de=!1}var k;if(typeof K=="function")k=function(){K(M)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,At=Ke.port2;Ke.port1.onmessage=M,k=function(){At.postMessage(null)}}else k=function(){B(M,0)};function kt(ie){O=ie,de||(de=!0,k())}function He(ie,ge){S=B(function(){ie(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){V||x||(V=!0,kt(Ie))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ie){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var oe=T;T=ge;try{return ie()}finally{T=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=T;T=ie;try{return ge()}finally{T=oe}},n.unstable_scheduleCallback=function(ie,ge,oe){var P=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?P+oe:P):oe=P,ie){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=oe+W,ie={id:v++,callback:ge,priorityLevel:ie,startTime:oe,expirationTime:W,sortIndex:-1},oe>P?(ie.sortIndex=oe,e(m,ie),t(f)===null&&ie===t(m)&&(j?(Z(S),S=-1):j=!0,He(q,oe-P))):(ie.sortIndex=W,e(f,ie),V||x||(V=!0,kt(Ie))),ie},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ie){var ge=T;return function(){var oe=T;T=ge;try{return ie.apply(this,arguments)}finally{T=oe}}}})(Wp)),Wp}var Yv;function VR(){return Yv||(Yv=1,$p.exports=MR()),$p.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function FR(){if(Xv)return vn;Xv=1;var n=rg(),e=VR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function T(i){return f.call(E,i)?!0:f.call(v,i)?!1:m.test(i)?E[i]=!0:(v[i]=!0,!1)}function x(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function V(i,o,l,h){if(o===null||typeof o>"u"||x(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function j(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new j(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];B[o]=new j(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new j(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new j(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new j(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new j(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new j(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new j(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new j(i,5,!1,i.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function K(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(Z,K);B[o]=new j(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(Z,K);B[o]=new j(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(Z,K);B[o]=new j(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new j(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new j(i,1,!1,i.toLowerCase(),null,!0,!0)});function ne(i,o,l,h){var p=B.hasOwnProperty(o)?B[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(V(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),de=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,P;function W(i){if(P===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);P=o&&o[1]||""}return`
`+P+i}var fe=!1;function Ae(i,o){if(!i||fe)return"";fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var h=$}Reflect.construct(i,[],o)}else{try{o.call()}catch($){h=$}i.call(o.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,A=_.length-1;1<=w&&0<=A&&p[w]!==_[A];)A--;for(;1<=w&&0<=A;w--,A--)if(p[w]!==_[A]){if(w!==1||A!==1)do if(w--,A--,0>A||p[w]!==_[A]){var D=`
`+p[w].replace(" at new "," at ");return i.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",i.displayName)),D}while(1<=w&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?W(i):""}function Ne(i){switch(i.tag){case 5:return W(i.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return i=Ae(i.type,!1),i;case 11:return i=Ae(i.type.render,!1),i;case 1:return i=Ae(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case de:return"Portal";case R:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case Ke:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case b:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case M:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case At:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case kt:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ze(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Lt(i){var o=Ze(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Br(i){i._valueTracker||(i._valueTracker=Lt(i))}function Io(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ze(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Ti(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Is(i,o){var l=o.checked;return oe({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function So(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function il(i,o){o=o.checked,o!=null&&ne(i,"checked",o,!1)}function sl(i,o){il(i,o);var l=$e(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Co(i,o.type,l):o.hasOwnProperty("defaultValue")&&Co(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function oc(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Co(i,o,l){(o!=="number"||Ti(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var zr=Array.isArray;function $r(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function ol(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Ro(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(zr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function Ao(i,o){var l=$e(o.value),h=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function al(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Pt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Pt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Wr,ll=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Wr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ii(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cs=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(i){Cs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ss[o]=Ss[i]})});function ul(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ss.hasOwnProperty(i)&&Ss[i]?(""+o).trim():o+"px"}function cl(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=ul(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var hl=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(i,o){if(o){if(hl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function fl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function ko(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Po=null,Ln=null,gr=null;function No(i){if(i=Vl(i)){if(typeof Po!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Mc(o),Po(i.stateNode,i.type,o))}}function _r(i){Ln?gr?gr.push(i):gr=[i]:Ln=i}function pl(){if(Ln){var i=Ln,o=gr;if(gr=Ln=null,No(i),o)for(i=0;i<o.length;i++)No(o[i])}}function As(i,o){return i(o)}function ml(){}var Hr=!1;function gl(i,o,l){if(Hr)return i(o,l);Hr=!0;try{return As(i,o,l)}finally{Hr=!1,(Ln!==null||gr!==null)&&(ml(),pl())}}function mt(i,o){var l=i.stateNode;if(l===null)return null;var h=Mc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var xo=!1;if(d)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{xo=!1}function ks(i,o,l,h,p,_,w,A,D){var $=Array.prototype.slice.call(arguments,3);try{o.apply(l,$)}catch(X){this.onError(X)}}var Ps=!1,Do=null,Yn=!1,_l=null,pf={onError:function(i){Ps=!0,Do=i}};function bo(i,o,l,h,p,_,w,A,D){Ps=!1,Do=null,ks.apply(pf,arguments)}function ac(i,o,l,h,p,_,w,A,D){if(bo.apply(this,arguments),Ps){if(Ps){var $=Do;Ps=!1,Do=null}else throw Error(t(198));Yn||(Yn=!0,_l=$)}}function Xn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Ns(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Jn(i){if(Xn(i)!==i)throw Error(t(188))}function lc(i){var o=i.alternate;if(!o){if(o=Xn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Jn(p),i;if(_===h)return Jn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,A=p.child;A;){if(A===l){w=!0,l=p,h=_;break}if(A===h){w=!0,h=p,l=_;break}A=A.sibling}if(!w){for(A=_.child;A;){if(A===l){w=!0,l=_,h=p;break}if(A===h){w=!0,h=_,l=p;break}A=A.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function yl(i){return i=lc(i),i!==null?Oo(i):null}function Oo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Oo(i);if(o!==null)return o;i=i.sibling}return null}var Lo=e.unstable_scheduleCallback,vl=e.unstable_cancelCallback,uc=e.unstable_shouldYield,mf=e.unstable_requestPaint,et=e.unstable_now,cc=e.unstable_getCurrentPriorityLevel,xs=e.unstable_ImmediatePriority,Si=e.unstable_UserBlockingPriority,Mn=e.unstable_NormalPriority,El=e.unstable_LowPriority,hc=e.unstable_IdlePriority,Ds=null,Cn=null;function dc(i){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Ds,i,void 0,(i.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:pc,wl=Math.log,fc=Math.LN2;function pc(i){return i>>>=0,i===0?32:31-(wl(i)/fc|0)|0}var Mo=64,Vo=4194304;function Ci(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function bs(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var A=w&~p;A!==0?h=Ci(A):(_&=w,_!==0&&(h=Ci(_)))}else w=l&~p,w!==0?h=Ci(w):_!==0&&(h=Ci(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-an(o),p=1<<l,h|=i[l],o&=~p;return h}function gf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-an(_),A=1<<w,D=p[w];D===-1?((A&l)===0||(A&h)!==0)&&(p[w]=gf(A,o)):D<=o&&(i.expiredLanes|=A),_&=~A}}function Rn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Os(){var i=Mo;return Mo<<=1,(Mo&4194240)===0&&(Mo=64),i}function Ri(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Ai(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-an(o),i[o]=l}function Xe(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-an(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function ki(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-an(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Me=0;function Pi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var mc,Fo,gc,_c,yc,Tl=!1,yr=[],Wt=null,Zn=null,er=null,Ni=new Map,Vn=new Map,vr=[],_f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vc(i,o){switch(i){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ni.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(o.pointerId)}}function dn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Vl(o),o!==null&&Fo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function yf(i,o,l,h,p){switch(o){case"focusin":return Wt=dn(Wt,i,o,l,h,p),!0;case"dragenter":return Zn=dn(Zn,i,o,l,h,p),!0;case"mouseover":return er=dn(er,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Ni.set(_,dn(Ni.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Vn.set(_,dn(Vn.get(_)||null,i,o,l,h,p)),!0}return!1}function Ec(i){var o=Us(i.target);if(o!==null){var l=Xn(o);if(l!==null){if(o=l.tag,o===13){if(o=Ns(l),o!==null){i.blockedOn=o,yc(i.priority,function(){gc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Uo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Rs=h,l.target.dispatchEvent(h),Rs=null}else return o=Vl(l),o!==null&&Fo(o),i.blockedOn=l,!1;o.shift()}return!0}function Ls(i,o,l){Gr(i)&&l.delete(o)}function wc(){Tl=!1,Wt!==null&&Gr(Wt)&&(Wt=null),Zn!==null&&Gr(Zn)&&(Zn=null),er!==null&&Gr(er)&&(er=null),Ni.forEach(Ls),Vn.forEach(Ls)}function tr(i,o){i.blockedOn===o&&(i.blockedOn=null,Tl||(Tl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wc)))}function nr(i){function o(p){return tr(p,i)}if(0<yr.length){tr(yr[0],i);for(var l=1;l<yr.length;l++){var h=yr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Wt!==null&&tr(Wt,i),Zn!==null&&tr(Zn,i),er!==null&&tr(er,i),Ni.forEach(o),Vn.forEach(o),l=0;l<vr.length;l++)h=vr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)Ec(l),l.blockedOn===null&&vr.shift()}var Kr=q.ReactCurrentBatchConfig,xi=!0;function at(i,o,l,h){var p=Me,_=Kr.transition;Kr.transition=null;try{Me=1,Il(i,o,l,h)}finally{Me=p,Kr.transition=_}}function vf(i,o,l,h){var p=Me,_=Kr.transition;Kr.transition=null;try{Me=4,Il(i,o,l,h)}finally{Me=p,Kr.transition=_}}function Il(i,o,l,h){if(xi){var p=Uo(i,o,l,h);if(p===null)Nf(i,o,h,Ms,l),vc(i,h);else if(yf(p,i,o,l,h))h.stopPropagation();else if(vc(i,h),o&4&&-1<_f.indexOf(i)){for(;p!==null;){var _=Vl(p);if(_!==null&&mc(_),_=Uo(i,o,l,h),_===null&&Nf(i,o,h,Ms,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Nf(i,o,h,null,l)}}var Ms=null;function Uo(i,o,l,h){if(Ms=null,i=ko(h),i=Us(i),i!==null)if(o=Xn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Ns(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ms=i,null}function Sl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cc()){case xs:return 1;case Si:return 4;case Mn:case El:return 16;case hc:return 536870912;default:return 16}default:return 16}}var An=null,jo=null,fn=null;function Cl(){if(fn)return fn;var i,o=jo,l=o.length,h,p="value"in An?An.value:An.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return fn=p.slice(i,1<h?1-h:void 0)}function Bo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Er(){return!0}function Rl(){return!1}function Ht(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Er:Rl,this.isPropagationStopped=Rl,this}return oe(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),o}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=Ht(rr),wr=oe({},rr,{view:0,detail:0}),Ef=Ht(wr),$o,Qr,Di,Vs=oe({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Di&&(Di&&i.type==="mousemove"?($o=i.screenX-Di.screenX,Qr=i.screenY-Di.screenY):Qr=$o=0,Di=i),$o)},movementY:function(i){return"movementY"in i?i.movementY:Qr}}),Wo=Ht(Vs),Al=oe({},Vs,{dataTransfer:0}),Tc=Ht(Al),Ho=oe({},wr,{relatedTarget:0}),qo=Ht(Ho),Ic=oe({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yr=Ht(Ic),Sc=oe({},rr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Cc=Ht(Sc),Rc=oe({},rr,{data:0}),kl=Ht(Rc),Go={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ac={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Ac[i])?!!o[i]:!1}function Tr(){return kc}var c=oe({},wr,{key:function(i){if(i.key){var o=Go[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Bo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ln[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(i){return i.type==="keypress"?Bo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Bo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Ht(c),y=oe({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ht(y),F=oe({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),H=Ht(F),re=oe({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qe=Ht(re),xt=oe({},Vs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Ht(xt),Mt=[9,13,27,32],vt=d&&"CompositionEvent"in window,Fn=null;d&&"documentMode"in document&&(Fn=document.documentMode);var kn=d&&"TextEvent"in window&&!Fn,Fs=d&&(!vt||Fn&&8<Fn&&11>=Fn),Ko=" ",U_=!1;function j_(i,o){switch(i){case"keyup":return Mt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Qo=!1;function PC(i,o){switch(i){case"compositionend":return B_(o);case"keypress":return o.which!==32?null:(U_=!0,Ko);case"textInput":return i=o.data,i===Ko&&U_?null:i;default:return null}}function NC(i,o){if(Qo)return i==="compositionend"||!vt&&j_(i,o)?(i=Cl(),fn=jo=An=null,Qo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Fs&&o.locale!=="ko"?null:o.data;default:return null}}var xC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!xC[i.type]:o==="textarea"}function $_(i,o,l,h){_r(h),o=bc(o,"onChange"),0<o.length&&(l=new zo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var Pl=null,Nl=null;function DC(i){ay(i,0)}function Pc(i){var o=ea(i);if(Io(o))return i}function bC(i,o){if(i==="change")return o}var W_=!1;if(d){var wf;if(d){var Tf="oninput"in document;if(!Tf){var H_=document.createElement("div");H_.setAttribute("oninput","return;"),Tf=typeof H_.oninput=="function"}wf=Tf}else wf=!1;W_=wf&&(!document.documentMode||9<document.documentMode)}function q_(){Pl&&(Pl.detachEvent("onpropertychange",G_),Nl=Pl=null)}function G_(i){if(i.propertyName==="value"&&Pc(Nl)){var o=[];$_(o,Nl,i,ko(i)),gl(DC,o)}}function OC(i,o,l){i==="focusin"?(q_(),Pl=o,Nl=l,Pl.attachEvent("onpropertychange",G_)):i==="focusout"&&q_()}function LC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Pc(Nl)}function MC(i,o){if(i==="click")return Pc(o)}function VC(i,o){if(i==="input"||i==="change")return Pc(o)}function FC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ir=typeof Object.is=="function"?Object.is:FC;function xl(i,o){if(ir(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!ir(i[p],o[p]))return!1}return!0}function K_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Q_(i,o){var l=K_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=K_(l)}}function Y_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Y_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function X_(){for(var i=window,o=Ti();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Ti(i.document)}return o}function If(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function UC(i){var o=X_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Y_(l.ownerDocument.documentElement,l)){if(h!==null&&If(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=Q_(l,_);var w=Q_(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var jC=d&&"documentMode"in document&&11>=document.documentMode,Yo=null,Sf=null,Dl=null,Cf=!1;function J_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cf||Yo==null||Yo!==Ti(h)||(h=Yo,"selectionStart"in h&&If(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Dl&&xl(Dl,h)||(Dl=h,h=bc(Sf,"onSelect"),0<h.length&&(o=new zo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Yo)))}function Nc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Xo={animationend:Nc("Animation","AnimationEnd"),animationiteration:Nc("Animation","AnimationIteration"),animationstart:Nc("Animation","AnimationStart"),transitionend:Nc("Transition","TransitionEnd")},Rf={},Z_={};d&&(Z_=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function xc(i){if(Rf[i])return Rf[i];if(!Xo[i])return i;var o=Xo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Z_)return Rf[i]=o[l];return i}var ey=xc("animationend"),ty=xc("animationiteration"),ny=xc("animationstart"),ry=xc("transitionend"),iy=new Map,sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(i,o){iy.set(i,o),a(o,[i])}for(var Af=0;Af<sy.length;Af++){var kf=sy[Af],BC=kf.toLowerCase(),zC=kf[0].toUpperCase()+kf.slice(1);bi(BC,"on"+zC)}bi(ey,"onAnimationEnd"),bi(ty,"onAnimationIteration"),bi(ny,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ry,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$C=new Set("cancel close invalid load scroll toggle".split(" ").concat(bl));function oy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,ac(h,o,void 0,i),i.currentTarget=null}function ay(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var A=h[w],D=A.instance,$=A.currentTarget;if(A=A.listener,D!==_&&p.isPropagationStopped())break e;oy(p,A,$),_=D}else for(w=0;w<h.length;w++){if(A=h[w],D=A.instance,$=A.currentTarget,A=A.listener,D!==_&&p.isPropagationStopped())break e;oy(p,A,$),_=D}}}if(Yn)throw i=_l,Yn=!1,_l=null,i}function rt(i,o){var l=o[Mf];l===void 0&&(l=o[Mf]=new Set);var h=i+"__bubble";l.has(h)||(ly(o,i,2,!1),l.add(h))}function Pf(i,o,l){var h=0;o&&(h|=4),ly(l,i,h,o)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Ol(i){if(!i[Dc]){i[Dc]=!0,r.forEach(function(l){l!=="selectionchange"&&($C.has(l)||Pf(l,!1,i),Pf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Dc]||(o[Dc]=!0,Pf("selectionchange",!1,o))}}function ly(i,o,l,h){switch(Sl(o)){case 1:var p=at;break;case 4:p=vf;break;default:p=Il}l=p.bind(null,o,l,i),p=void 0,!xo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Nf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;w=w.return}for(;A!==null;){if(w=Us(A),w===null)return;if(D=w.tag,D===5||D===6){h=_=w;continue e}A=A.parentNode}}h=h.return}gl(function(){var $=_,X=ko(l),J=[];e:{var Y=iy.get(i);if(Y!==void 0){var ae=zo,he=i;switch(i){case"keypress":if(Bo(l)===0)break e;case"keydown":case"keyup":ae=g;break;case"focusin":he="focus",ae=qo;break;case"focusout":he="blur",ae=qo;break;case"beforeblur":case"afterblur":ae=qo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Tc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=H;break;case ey:case ty:case ny:ae=Yr;break;case ry:ae=Qe;break;case"scroll":ae=Ef;break;case"wheel":ae=Fe;break;case"copy":case"cut":case"paste":ae=Cc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=I}var pe=(o&4)!==0,gt=!pe&&i==="scroll",U=pe?Y!==null?Y+"Capture":null:Y;pe=[];for(var L=$,z;L!==null;){z=L;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,U!==null&&(ee=mt(L,U),ee!=null&&pe.push(Ll(L,ee,z)))),gt)break;L=L.return}0<pe.length&&(Y=new ae(Y,he,null,l,X),J.push({event:Y,listeners:pe}))}}if((o&7)===0){e:{if(Y=i==="mouseover"||i==="pointerover",ae=i==="mouseout"||i==="pointerout",Y&&l!==Rs&&(he=l.relatedTarget||l.fromElement)&&(Us(he)||he[Xr]))break e;if((ae||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ae?(he=l.relatedTarget||l.toElement,ae=$,he=he?Us(he):null,he!==null&&(gt=Xn(he),he!==gt||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=$),ae!==he)){if(pe=Wo,ee="onMouseLeave",U="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(pe=I,ee="onPointerLeave",U="onPointerEnter",L="pointer"),gt=ae==null?Y:ea(ae),z=he==null?Y:ea(he),Y=new pe(ee,L+"leave",ae,l,X),Y.target=gt,Y.relatedTarget=z,ee=null,Us(X)===$&&(pe=new pe(U,L+"enter",he,l,X),pe.target=z,pe.relatedTarget=gt,ee=pe),gt=ee,ae&&he)t:{for(pe=ae,U=he,L=0,z=pe;z;z=Jo(z))L++;for(z=0,ee=U;ee;ee=Jo(ee))z++;for(;0<L-z;)pe=Jo(pe),L--;for(;0<z-L;)U=Jo(U),z--;for(;L--;){if(pe===U||U!==null&&pe===U.alternate)break t;pe=Jo(pe),U=Jo(U)}pe=null}else pe=null;ae!==null&&uy(J,Y,ae,pe,!1),he!==null&&gt!==null&&uy(J,gt,he,pe,!0)}}e:{if(Y=$?ea($):window,ae=Y.nodeName&&Y.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Y.type==="file")var me=bC;else if(z_(Y))if(W_)me=VC;else{me=LC;var ye=OC}else(ae=Y.nodeName)&&ae.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=MC);if(me&&(me=me(i,$))){$_(J,me,l,X);break e}ye&&ye(i,Y,$),i==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&Co(Y,"number",Y.value)}switch(ye=$?ea($):window,i){case"focusin":(z_(ye)||ye.contentEditable==="true")&&(Yo=ye,Sf=$,Dl=null);break;case"focusout":Dl=Sf=Yo=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,J_(J,l,X);break;case"selectionchange":if(jC)break;case"keydown":case"keyup":J_(J,l,X)}var ve;if(vt)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Qo?j_(i,l)&&(Se="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Se="onCompositionStart");Se&&(Fs&&l.locale!=="ko"&&(Qo||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Qo&&(ve=Cl()):(An=X,jo="value"in An?An.value:An.textContent,Qo=!0)),ye=bc($,Se),0<ye.length&&(Se=new kl(Se,i,null,l,X),J.push({event:Se,listeners:ye}),ve?Se.data=ve:(ve=B_(l),ve!==null&&(Se.data=ve)))),(ve=kn?PC(i,l):NC(i,l))&&($=bc($,"onBeforeInput"),0<$.length&&(X=new kl("onBeforeInput","beforeinput",null,l,X),J.push({event:X,listeners:$}),X.data=ve))}ay(J,o)})}function Ll(i,o,l){return{instance:i,listener:o,currentTarget:l}}function bc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=mt(i,l),_!=null&&h.unshift(Ll(i,_,p)),_=mt(i,o),_!=null&&h.push(Ll(i,_,p))),i=i.return}return h}function Jo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function uy(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var A=l,D=A.alternate,$=A.stateNode;if(D!==null&&D===h)break;A.tag===5&&$!==null&&(A=$,p?(D=mt(l,_),D!=null&&w.unshift(Ll(l,D,A))):p||(D=mt(l,_),D!=null&&w.push(Ll(l,D,A)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var WC=/\r\n?/g,HC=/\u0000|\uFFFD/g;function cy(i){return(typeof i=="string"?i:""+i).replace(WC,`
`).replace(HC,"")}function Oc(i,o,l){if(o=cy(o),cy(i)!==o&&l)throw Error(t(425))}function Lc(){}var xf=null,Df=null;function bf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,qC=typeof clearTimeout=="function"?clearTimeout:void 0,hy=typeof Promise=="function"?Promise:void 0,GC=typeof queueMicrotask=="function"?queueMicrotask:typeof hy<"u"?function(i){return hy.resolve(null).then(i).catch(KC)}:Of;function KC(i){setTimeout(function(){throw i})}function Lf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),nr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);nr(o)}function Oi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function dy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),Ir="__reactFiber$"+Zo,Ml="__reactProps$"+Zo,Xr="__reactContainer$"+Zo,Mf="__reactEvents$"+Zo,QC="__reactListeners$"+Zo,YC="__reactHandles$"+Zo;function Us(i){var o=i[Ir];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Xr]||l[Ir]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=dy(i);i!==null;){if(l=i[Ir])return l;i=dy(i)}return o}i=l,l=i.parentNode}return null}function Vl(i){return i=i[Ir]||i[Xr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ea(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Mc(i){return i[Ml]||null}var Vf=[],ta=-1;function Li(i){return{current:i}}function it(i){0>ta||(i.current=Vf[ta],Vf[ta]=null,ta--)}function tt(i,o){ta++,Vf[ta]=i.current,i.current=o}var Mi={},Xt=Li(Mi),pn=Li(!1),js=Mi;function na(i,o){var l=i.type.contextTypes;if(!l)return Mi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function mn(i){return i=i.childContextTypes,i!=null}function Vc(){it(pn),it(Xt)}function fy(i,o,l){if(Xt.current!==Mi)throw Error(t(168));tt(Xt,o),tt(pn,l)}function py(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return oe({},l,h)}function Fc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Mi,js=Xt.current,tt(Xt,i),tt(pn,pn.current),!0}function my(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=py(i,o,js),h.__reactInternalMemoizedMergedChildContext=i,it(pn),it(Xt),tt(Xt,i)):it(pn),tt(pn,l)}var Jr=null,Uc=!1,Ff=!1;function gy(i){Jr===null?Jr=[i]:Jr.push(i)}function XC(i){Uc=!0,gy(i)}function Vi(){if(!Ff&&Jr!==null){Ff=!0;var i=0,o=Me;try{var l=Jr;for(Me=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Jr=null,Uc=!1}catch(p){throw Jr!==null&&(Jr=Jr.slice(i+1)),Lo(xs,Vi),p}finally{Me=o,Ff=!1}}return null}var ra=[],ia=0,jc=null,Bc=0,Un=[],jn=0,Bs=null,Zr=1,ei="";function zs(i,o){ra[ia++]=Bc,ra[ia++]=jc,jc=i,Bc=o}function _y(i,o,l){Un[jn++]=Zr,Un[jn++]=ei,Un[jn++]=Bs,Bs=i;var h=Zr;i=ei;var p=32-an(h)-1;h&=~(1<<p),l+=1;var _=32-an(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Zr=1<<32-an(o)+p|l<<p|h,ei=_+i}else Zr=1<<_|l<<p|h,ei=i}function Uf(i){i.return!==null&&(zs(i,1),_y(i,1,0))}function jf(i){for(;i===jc;)jc=ra[--ia],ra[ia]=null,Bc=ra[--ia],ra[ia]=null;for(;i===Bs;)Bs=Un[--jn],Un[jn]=null,ei=Un[--jn],Un[jn]=null,Zr=Un[--jn],Un[jn]=null}var Pn=null,Nn=null,lt=!1,sr=null;function yy(i,o){var l=Wn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function vy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Pn=i,Nn=Oi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Pn=i,Nn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Bs!==null?{id:Zr,overflow:ei}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Wn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Pn=i,Nn=null,!0):!1;default:return!1}}function Bf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function zf(i){if(lt){var o=Nn;if(o){var l=o;if(!vy(i,o)){if(Bf(i))throw Error(t(418));o=Oi(l.nextSibling);var h=Pn;o&&vy(i,o)?yy(h,l):(i.flags=i.flags&-4097|2,lt=!1,Pn=i)}}else{if(Bf(i))throw Error(t(418));i.flags=i.flags&-4097|2,lt=!1,Pn=i}}}function Ey(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Pn=i}function zc(i){if(i!==Pn)return!1;if(!lt)return Ey(i),lt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!bf(i.type,i.memoizedProps)),o&&(o=Nn)){if(Bf(i))throw wy(),Error(t(418));for(;o;)yy(i,o),o=Oi(o.nextSibling)}if(Ey(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Nn=Oi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Nn=null}}else Nn=Pn?Oi(i.stateNode.nextSibling):null;return!0}function wy(){for(var i=Nn;i;)i=Oi(i.nextSibling)}function sa(){Nn=Pn=null,lt=!1}function $f(i){sr===null?sr=[i]:sr.push(i)}var JC=q.ReactCurrentBatchConfig;function Fl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var A=p.refs;w===null?delete A[_]:A[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function $c(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Ty(i){var o=i._init;return o(i._payload)}function Iy(i){function o(U,L){if(i){var z=U.deletions;z===null?(U.deletions=[L],U.flags|=16):z.push(L)}}function l(U,L){if(!i)return null;for(;L!==null;)o(U,L),L=L.sibling;return null}function h(U,L){for(U=new Map;L!==null;)L.key!==null?U.set(L.key,L):U.set(L.index,L),L=L.sibling;return U}function p(U,L){return U=Hi(U,L),U.index=0,U.sibling=null,U}function _(U,L,z){return U.index=z,i?(z=U.alternate,z!==null?(z=z.index,z<L?(U.flags|=2,L):z):(U.flags|=2,L)):(U.flags|=1048576,L)}function w(U){return i&&U.alternate===null&&(U.flags|=2),U}function A(U,L,z,ee){return L===null||L.tag!==6?(L=Op(z,U.mode,ee),L.return=U,L):(L=p(L,z),L.return=U,L)}function D(U,L,z,ee){var me=z.type;return me===O?X(U,L,z.props.children,ee,z.key):L!==null&&(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===kt&&Ty(me)===L.type)?(ee=p(L,z.props),ee.ref=Fl(U,L,z),ee.return=U,ee):(ee=fh(z.type,z.key,z.props,null,U.mode,ee),ee.ref=Fl(U,L,z),ee.return=U,ee)}function $(U,L,z,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==z.containerInfo||L.stateNode.implementation!==z.implementation?(L=Lp(z,U.mode,ee),L.return=U,L):(L=p(L,z.children||[]),L.return=U,L)}function X(U,L,z,ee,me){return L===null||L.tag!==7?(L=Ys(z,U.mode,ee,me),L.return=U,L):(L=p(L,z),L.return=U,L)}function J(U,L,z){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Op(""+L,U.mode,z),L.return=U,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ie:return z=fh(L.type,L.key,L.props,null,U.mode,z),z.ref=Fl(U,null,L),z.return=U,z;case de:return L=Lp(L,U.mode,z),L.return=U,L;case kt:var ee=L._init;return J(U,ee(L._payload),z)}if(zr(L)||ge(L))return L=Ys(L,U.mode,z,null),L.return=U,L;$c(U,L)}return null}function Y(U,L,z,ee){var me=L!==null?L.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return me!==null?null:A(U,L,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ie:return z.key===me?D(U,L,z,ee):null;case de:return z.key===me?$(U,L,z,ee):null;case kt:return me=z._init,Y(U,L,me(z._payload),ee)}if(zr(z)||ge(z))return me!==null?null:X(U,L,z,ee,null);$c(U,z)}return null}function ae(U,L,z,ee,me){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(z)||null,A(L,U,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ie:return U=U.get(ee.key===null?z:ee.key)||null,D(L,U,ee,me);case de:return U=U.get(ee.key===null?z:ee.key)||null,$(L,U,ee,me);case kt:var ye=ee._init;return ae(U,L,z,ye(ee._payload),me)}if(zr(ee)||ge(ee))return U=U.get(z)||null,X(L,U,ee,me,null);$c(L,ee)}return null}function he(U,L,z,ee){for(var me=null,ye=null,ve=L,Se=L=0,Ut=null;ve!==null&&Se<z.length;Se++){ve.index>Se?(Ut=ve,ve=null):Ut=ve.sibling;var Be=Y(U,ve,z[Se],ee);if(Be===null){ve===null&&(ve=Ut);break}i&&ve&&Be.alternate===null&&o(U,ve),L=_(Be,L,Se),ye===null?me=Be:ye.sibling=Be,ye=Be,ve=Ut}if(Se===z.length)return l(U,ve),lt&&zs(U,Se),me;if(ve===null){for(;Se<z.length;Se++)ve=J(U,z[Se],ee),ve!==null&&(L=_(ve,L,Se),ye===null?me=ve:ye.sibling=ve,ye=ve);return lt&&zs(U,Se),me}for(ve=h(U,ve);Se<z.length;Se++)Ut=ae(ve,U,Se,z[Se],ee),Ut!==null&&(i&&Ut.alternate!==null&&ve.delete(Ut.key===null?Se:Ut.key),L=_(Ut,L,Se),ye===null?me=Ut:ye.sibling=Ut,ye=Ut);return i&&ve.forEach(function(qi){return o(U,qi)}),lt&&zs(U,Se),me}function pe(U,L,z,ee){var me=ge(z);if(typeof me!="function")throw Error(t(150));if(z=me.call(z),z==null)throw Error(t(151));for(var ye=me=null,ve=L,Se=L=0,Ut=null,Be=z.next();ve!==null&&!Be.done;Se++,Be=z.next()){ve.index>Se?(Ut=ve,ve=null):Ut=ve.sibling;var qi=Y(U,ve,Be.value,ee);if(qi===null){ve===null&&(ve=Ut);break}i&&ve&&qi.alternate===null&&o(U,ve),L=_(qi,L,Se),ye===null?me=qi:ye.sibling=qi,ye=qi,ve=Ut}if(Be.done)return l(U,ve),lt&&zs(U,Se),me;if(ve===null){for(;!Be.done;Se++,Be=z.next())Be=J(U,Be.value,ee),Be!==null&&(L=_(Be,L,Se),ye===null?me=Be:ye.sibling=Be,ye=Be);return lt&&zs(U,Se),me}for(ve=h(U,ve);!Be.done;Se++,Be=z.next())Be=ae(ve,U,Se,Be.value,ee),Be!==null&&(i&&Be.alternate!==null&&ve.delete(Be.key===null?Se:Be.key),L=_(Be,L,Se),ye===null?me=Be:ye.sibling=Be,ye=Be);return i&&ve.forEach(function(xR){return o(U,xR)}),lt&&zs(U,Se),me}function gt(U,L,z,ee){if(typeof z=="object"&&z!==null&&z.type===O&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Ie:e:{for(var me=z.key,ye=L;ye!==null;){if(ye.key===me){if(me=z.type,me===O){if(ye.tag===7){l(U,ye.sibling),L=p(ye,z.props.children),L.return=U,U=L;break e}}else if(ye.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===kt&&Ty(me)===ye.type){l(U,ye.sibling),L=p(ye,z.props),L.ref=Fl(U,ye,z),L.return=U,U=L;break e}l(U,ye);break}else o(U,ye);ye=ye.sibling}z.type===O?(L=Ys(z.props.children,U.mode,ee,z.key),L.return=U,U=L):(ee=fh(z.type,z.key,z.props,null,U.mode,ee),ee.ref=Fl(U,L,z),ee.return=U,U=ee)}return w(U);case de:e:{for(ye=z.key;L!==null;){if(L.key===ye)if(L.tag===4&&L.stateNode.containerInfo===z.containerInfo&&L.stateNode.implementation===z.implementation){l(U,L.sibling),L=p(L,z.children||[]),L.return=U,U=L;break e}else{l(U,L);break}else o(U,L);L=L.sibling}L=Lp(z,U.mode,ee),L.return=U,U=L}return w(U);case kt:return ye=z._init,gt(U,L,ye(z._payload),ee)}if(zr(z))return he(U,L,z,ee);if(ge(z))return pe(U,L,z,ee);$c(U,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,L!==null&&L.tag===6?(l(U,L.sibling),L=p(L,z),L.return=U,U=L):(l(U,L),L=Op(z,U.mode,ee),L.return=U,U=L),w(U)):l(U,L)}return gt}var oa=Iy(!0),Sy=Iy(!1),Wc=Li(null),Hc=null,aa=null,Wf=null;function Hf(){Wf=aa=Hc=null}function qf(i){var o=Wc.current;it(Wc),i._currentValue=o}function Gf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function la(i,o){Hc=i,Wf=aa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(gn=!0),i.firstContext=null)}function Bn(i){var o=i._currentValue;if(Wf!==i)if(i={context:i,memoizedValue:o,next:null},aa===null){if(Hc===null)throw Error(t(308));aa=i,Hc.dependencies={lanes:0,firstContext:i}}else aa=aa.next=i;return o}var $s=null;function Kf(i){$s===null?$s=[i]:$s.push(i)}function Cy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Kf(o)):(l.next=p.next,p.next=l),o.interleaved=l,ti(i,h)}function ti(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Fi=!1;function Qf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ry(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ni(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ui(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(je&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,ti(i,l)}return p=h.interleaved,p===null?(o.next=o,Kf(h)):(o.next=p.next,p.next=o),h.interleaved=o,ti(i,l)}function qc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,ki(i,l)}}function Ay(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Gc(i,o,l,h){var p=i.updateQueue;Fi=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var D=A,$=D.next;D.next=null,w===null?_=$:w.next=$,w=D;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=$:A.next=$,X.lastBaseUpdate=D))}if(_!==null){var J=p.baseState;w=0,X=$=D=null,A=_;do{var Y=A.lane,ae=A.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:ae,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=i,pe=A;switch(Y=o,ae=l,pe.tag){case 1:if(he=pe.payload,typeof he=="function"){J=he.call(ae,J,Y);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=pe.payload,Y=typeof he=="function"?he.call(ae,J,Y):he,Y==null)break e;J=oe({},J,Y);break e;case 2:Fi=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,Y=p.effects,Y===null?p.effects=[A]:Y.push(A))}else ae={eventTime:ae,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?($=X=ae,D=J):X=X.next=ae,w|=Y;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(X===null&&(D=J),p.baseState=D,p.firstBaseUpdate=$,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);qs|=w,i.lanes=w,i.memoizedState=J}}function ky(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ul={},Sr=Li(Ul),jl=Li(Ul),Bl=Li(Ul);function Ws(i){if(i===Ul)throw Error(t(174));return i}function Yf(i,o){switch(tt(Bl,o),tt(jl,i),tt(Sr,Ul),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Nt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Nt(o,i)}it(Sr),tt(Sr,o)}function ua(){it(Sr),it(jl),it(Bl)}function Py(i){Ws(Bl.current);var o=Ws(Sr.current),l=Nt(o,i.type);o!==l&&(tt(jl,i),tt(Sr,l))}function Xf(i){jl.current===i&&(it(Sr),it(jl))}var ut=Li(0);function Kc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Jf=[];function Zf(){for(var i=0;i<Jf.length;i++)Jf[i]._workInProgressVersionPrimary=null;Jf.length=0}var Qc=q.ReactCurrentDispatcher,ep=q.ReactCurrentBatchConfig,Hs=0,ct=null,Dt=null,Vt=null,Yc=!1,zl=!1,$l=0,ZC=0;function Jt(){throw Error(t(321))}function tp(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!ir(i[l],o[l]))return!1;return!0}function np(i,o,l,h,p,_){if(Hs=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Qc.current=i===null||i.memoizedState===null?rR:iR,i=l(h,p),zl){_=0;do{if(zl=!1,$l=0,25<=_)throw Error(t(301));_+=1,Vt=Dt=null,o.updateQueue=null,Qc.current=sR,i=l(h,p)}while(zl)}if(Qc.current=Zc,o=Dt!==null&&Dt.next!==null,Hs=0,Vt=Dt=ct=null,Yc=!1,o)throw Error(t(300));return i}function rp(){var i=$l!==0;return $l=0,i}function Cr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i,Vt}function zn(){if(Dt===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=Dt.next;var o=Vt===null?ct.memoizedState:Vt.next;if(o!==null)Vt=o,Dt=i;else{if(i===null)throw Error(t(310));Dt=i,i={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i}return Vt}function Wl(i,o){return typeof o=="function"?o(i):o}function ip(i){var o=zn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Dt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var A=w=null,D=null,$=_;do{var X=$.lane;if((Hs&X)===X)D!==null&&(D=D.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var J={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};D===null?(A=D=J,w=h):D=D.next=J,ct.lanes|=X,qs|=X}$=$.next}while($!==null&&$!==_);D===null?w=h:D.next=A,ir(h,o.memoizedState)||(gn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=D,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,ct.lanes|=_,qs|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function sp(i){var o=zn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);ir(_,o.memoizedState)||(gn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Ny(){}function xy(i,o){var l=ct,h=zn(),p=o(),_=!ir(h.memoizedState,p);if(_&&(h.memoizedState=p,gn=!0),h=h.queue,op(Oy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,Hl(9,by.bind(null,l,h,p,o),void 0,null),Ft===null)throw Error(t(349));(Hs&30)!==0||Dy(l,o,p)}return p}function Dy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function by(i,o,l,h){o.value=l,o.getSnapshot=h,Ly(o)&&My(i)}function Oy(i,o,l){return l(function(){Ly(o)&&My(i)})}function Ly(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!ir(i,l)}catch{return!0}}function My(i){var o=ti(i,1);o!==null&&ur(o,i,1,-1)}function Vy(i){var o=Cr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:i},o.queue=i,i=i.dispatch=nR.bind(null,ct,i),[o.memoizedState,i]}function Hl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Fy(){return zn().memoizedState}function Xc(i,o,l,h){var p=Cr();ct.flags|=i,p.memoizedState=Hl(1|o,l,void 0,h===void 0?null:h)}function Jc(i,o,l,h){var p=zn();h=h===void 0?null:h;var _=void 0;if(Dt!==null){var w=Dt.memoizedState;if(_=w.destroy,h!==null&&tp(h,w.deps)){p.memoizedState=Hl(o,l,_,h);return}}ct.flags|=i,p.memoizedState=Hl(1|o,l,_,h)}function Uy(i,o){return Xc(8390656,8,i,o)}function op(i,o){return Jc(2048,8,i,o)}function jy(i,o){return Jc(4,2,i,o)}function By(i,o){return Jc(4,4,i,o)}function zy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function $y(i,o,l){return l=l!=null?l.concat([i]):null,Jc(4,4,zy.bind(null,o,i),l)}function ap(){}function Wy(i,o){var l=zn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&tp(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Hy(i,o){var l=zn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&tp(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function qy(i,o,l){return(Hs&21)===0?(i.baseState&&(i.baseState=!1,gn=!0),i.memoizedState=l):(ir(l,o)||(l=Os(),ct.lanes|=l,qs|=l,i.baseState=!0),o)}function eR(i,o){var l=Me;Me=l!==0&&4>l?l:4,i(!0);var h=ep.transition;ep.transition={};try{i(!1),o()}finally{Me=l,ep.transition=h}}function Gy(){return zn().memoizedState}function tR(i,o,l){var h=$i(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Ky(i))Qy(o,l);else if(l=Cy(i,o,l,h),l!==null){var p=cn();ur(l,i,h,p),Yy(l,o,h)}}function nR(i,o,l){var h=$i(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ky(i))Qy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,A=_(w,l);if(p.hasEagerState=!0,p.eagerState=A,ir(A,w)){var D=o.interleaved;D===null?(p.next=p,Kf(o)):(p.next=D.next,D.next=p),o.interleaved=p;return}}catch{}finally{}l=Cy(i,o,p,h),l!==null&&(p=cn(),ur(l,i,h,p),Yy(l,o,h))}}function Ky(i){var o=i.alternate;return i===ct||o!==null&&o===ct}function Qy(i,o){zl=Yc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Yy(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,ki(i,l)}}var Zc={readContext:Bn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},rR={readContext:Bn,useCallback:function(i,o){return Cr().memoizedState=[i,o===void 0?null:o],i},useContext:Bn,useEffect:Uy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Xc(4194308,4,zy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Xc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Xc(4,2,i,o)},useMemo:function(i,o){var l=Cr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Cr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=tR.bind(null,ct,i),[h.memoizedState,i]},useRef:function(i){var o=Cr();return i={current:i},o.memoizedState=i},useState:Vy,useDebugValue:ap,useDeferredValue:function(i){return Cr().memoizedState=i},useTransition:function(){var i=Vy(!1),o=i[0];return i=eR.bind(null,i[1]),Cr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=ct,p=Cr();if(lt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ft===null)throw Error(t(349));(Hs&30)!==0||Dy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Uy(Oy.bind(null,h,_,i),[i]),h.flags|=2048,Hl(9,by.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Cr(),o=Ft.identifierPrefix;if(lt){var l=ei,h=Zr;l=(h&~(1<<32-an(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=$l++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=ZC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},iR={readContext:Bn,useCallback:Wy,useContext:Bn,useEffect:op,useImperativeHandle:$y,useInsertionEffect:jy,useLayoutEffect:By,useMemo:Hy,useReducer:ip,useRef:Fy,useState:function(){return ip(Wl)},useDebugValue:ap,useDeferredValue:function(i){var o=zn();return qy(o,Dt.memoizedState,i)},useTransition:function(){var i=ip(Wl)[0],o=zn().memoizedState;return[i,o]},useMutableSource:Ny,useSyncExternalStore:xy,useId:Gy,unstable_isNewReconciler:!1},sR={readContext:Bn,useCallback:Wy,useContext:Bn,useEffect:op,useImperativeHandle:$y,useInsertionEffect:jy,useLayoutEffect:By,useMemo:Hy,useReducer:sp,useRef:Fy,useState:function(){return sp(Wl)},useDebugValue:ap,useDeferredValue:function(i){var o=zn();return Dt===null?o.memoizedState=i:qy(o,Dt.memoizedState,i)},useTransition:function(){var i=sp(Wl)[0],o=zn().memoizedState;return[i,o]},useMutableSource:Ny,useSyncExternalStore:xy,useId:Gy,unstable_isNewReconciler:!1};function or(i,o){if(i&&i.defaultProps){o=oe({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function lp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:oe({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var eh={isMounted:function(i){return(i=i._reactInternals)?Xn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=cn(),p=$i(i),_=ni(h,p);_.payload=o,l!=null&&(_.callback=l),o=Ui(i,_,p),o!==null&&(ur(o,i,p,h),qc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=cn(),p=$i(i),_=ni(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Ui(i,_,p),o!==null&&(ur(o,i,p,h),qc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=cn(),h=$i(i),p=ni(l,h);p.tag=2,o!=null&&(p.callback=o),o=Ui(i,p,h),o!==null&&(ur(o,i,h,l),qc(o,i,h))}};function Xy(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!xl(l,h)||!xl(p,_):!0}function Jy(i,o,l){var h=!1,p=Mi,_=o.contextType;return typeof _=="object"&&_!==null?_=Bn(_):(p=mn(o)?js:Xt.current,h=o.contextTypes,_=(h=h!=null)?na(i,p):Mi),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=eh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Zy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&eh.enqueueReplaceState(o,o.state,null)}function up(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Qf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Bn(_):(_=mn(o)?js:Xt.current,p.context=na(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(lp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&eh.enqueueReplaceState(p,p.state,null),Gc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ca(i,o){try{var l="",h=o;do l+=Ne(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function cp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function hp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var oR=typeof WeakMap=="function"?WeakMap:Map;function ev(i,o,l){l=ni(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){ah||(ah=!0,Rp=h),hp(i,o)},l}function tv(i,o,l){l=ni(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){hp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){hp(i,o),typeof h!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function nv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new oR;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=ER.bind(null,i,o,l),o.then(i,i))}function rv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function iv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ni(-1,1),o.tag=2,Ui(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var aR=q.ReactCurrentOwner,gn=!1;function un(i,o,l,h){o.child=i===null?Sy(o,null,l,h):oa(o,i.child,l,h)}function sv(i,o,l,h,p){l=l.render;var _=o.ref;return la(o,p),h=np(i,o,l,h,_,p),l=rp(),i!==null&&!gn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ri(i,o,p)):(lt&&l&&Uf(o),o.flags|=1,un(i,o,h,p),o.child)}function ov(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!bp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,av(i,o,_,h,p)):(i=fh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:xl,l(w,h)&&i.ref===o.ref)return ri(i,o,p)}return o.flags|=1,i=Hi(_,h),i.ref=o.ref,i.return=o,o.child=i}function av(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(xl(_,h)&&i.ref===o.ref)if(gn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(gn=!0);else return o.lanes=i.lanes,ri(i,o,p)}return dp(i,o,l,h,p)}function lv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(da,xn),xn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,tt(da,xn),xn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,tt(da,xn),xn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,tt(da,xn),xn|=h;return un(i,o,p,l),o.child}function uv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function dp(i,o,l,h,p){var _=mn(l)?js:Xt.current;return _=na(o,_),la(o,p),l=np(i,o,l,h,_,p),h=rp(),i!==null&&!gn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ri(i,o,p)):(lt&&h&&Uf(o),o.flags|=1,un(i,o,l,p),o.child)}function cv(i,o,l,h,p){if(mn(l)){var _=!0;Fc(o)}else _=!1;if(la(o,p),o.stateNode===null)nh(i,o),Jy(o,l,h),up(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,A=o.memoizedProps;w.props=A;var D=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=Bn($):($=mn(l)?js:Xt.current,$=na(o,$));var X=l.getDerivedStateFromProps,J=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||D!==$)&&Zy(o,w,h,$),Fi=!1;var Y=o.memoizedState;w.state=Y,Gc(o,h,w,p),D=o.memoizedState,A!==h||Y!==D||pn.current||Fi?(typeof X=="function"&&(lp(o,l,X,h),D=o.memoizedState),(A=Fi||Xy(o,l,A,h,Y,D,$))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=D),w.props=h,w.state=D,w.context=$,h=A):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,Ry(i,o),A=o.memoizedProps,$=o.type===o.elementType?A:or(o.type,A),w.props=$,J=o.pendingProps,Y=w.context,D=l.contextType,typeof D=="object"&&D!==null?D=Bn(D):(D=mn(l)?js:Xt.current,D=na(o,D));var ae=l.getDerivedStateFromProps;(X=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==J||Y!==D)&&Zy(o,w,h,D),Fi=!1,Y=o.memoizedState,w.state=Y,Gc(o,h,w,p);var he=o.memoizedState;A!==J||Y!==he||pn.current||Fi?(typeof ae=="function"&&(lp(o,l,ae,h),he=o.memoizedState),($=Fi||Xy(o,l,$,h,Y,he,D)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,he,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,he,D)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=he),w.props=h,w.state=he,w.context=D,h=$):(typeof w.componentDidUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),h=!1)}return fp(i,o,l,h,_,p)}function fp(i,o,l,h,p,_){uv(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&my(o,l,!1),ri(i,o,_);h=o.stateNode,aR.current=o;var A=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=oa(o,i.child,null,_),o.child=oa(o,null,A,_)):un(i,o,A,_),o.memoizedState=h.state,p&&my(o,l,!0),o.child}function hv(i){var o=i.stateNode;o.pendingContext?fy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&fy(i,o.context,!1),Yf(i,o.containerInfo)}function dv(i,o,l,h,p){return sa(),$f(p),o.flags|=256,un(i,o,l,h),o.child}var pp={dehydrated:null,treeContext:null,retryLane:0};function mp(i){return{baseLanes:i,cachePool:null,transitions:null}}function fv(i,o,l){var h=o.pendingProps,p=ut.current,_=!1,w=(o.flags&128)!==0,A;if((A=w)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),tt(ut,p&1),i===null)return zf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=ph(w,h,0,null),i=Ys(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=mp(l),o.memoizedState=pp,i):gp(o,w));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return lR(i,o,w,h,A,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,A=p.sibling;var D={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=D,o.deletions=null):(h=Hi(p,D),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?_=Hi(A,_):(_=Ys(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?mp(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=pp,h}return _=i.child,i=_.sibling,h=Hi(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function gp(i,o){return o=ph({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function th(i,o,l,h){return h!==null&&$f(h),oa(o,i.child,null,l),i=gp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function lR(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=cp(Error(t(422))),th(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=ph({mode:"visible",children:h.children},p,0,null),_=Ys(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&oa(o,i.child,null,w),o.child.memoizedState=mp(w),o.memoizedState=pp,_);if((o.mode&1)===0)return th(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,_=Error(t(419)),h=cp(_,h,void 0),th(i,o,w,h)}if(A=(w&i.childLanes)!==0,gn||A){if(h=Ft,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ti(i,p),ur(h,i,p,-1))}return Dp(),h=cp(Error(t(421))),th(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=wR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Nn=Oi(p.nextSibling),Pn=o,lt=!0,sr=null,i!==null&&(Un[jn++]=Zr,Un[jn++]=ei,Un[jn++]=Bs,Zr=i.id,ei=i.overflow,Bs=o),o=gp(o,h.children),o.flags|=4096,o)}function pv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Gf(i.return,o,l)}function _p(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function mv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(un(i,o,h.children,l),h=ut.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&pv(i,l,o);else if(i.tag===19)pv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(tt(ut,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Kc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),_p(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Kc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}_p(o,!0,l,null,_);break;case"together":_p(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function nh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ri(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),qs|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Hi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Hi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function uR(i,o,l){switch(o.tag){case 3:hv(o),sa();break;case 5:Py(o);break;case 1:mn(o.type)&&Fc(o);break;case 4:Yf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;tt(Wc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(tt(ut,ut.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?fv(i,o,l):(tt(ut,ut.current&1),i=ri(i,o,l),i!==null?i.sibling:null);tt(ut,ut.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return mv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),tt(ut,ut.current),h)break;return null;case 22:case 23:return o.lanes=0,lv(i,o,l)}return ri(i,o,l)}var gv,yp,_v,yv;gv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},yp=function(){},_v=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Ws(Sr.current);var _=null;switch(l){case"input":p=Is(i,p),h=Is(i,h),_=[];break;case"select":p=oe({},p,{value:void 0}),h=oe({},h,{value:void 0}),_=[];break;case"textarea":p=ol(i,p),h=ol(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Lc)}dl(l,h);var w;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var A=p[$];for(w in A)A.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(s.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in h){var D=h[$];if(A=p!=null?p[$]:void 0,h.hasOwnProperty($)&&D!==A&&(D!=null||A!=null))if($==="style")if(A){for(w in A)!A.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in D)D.hasOwnProperty(w)&&A[w]!==D[w]&&(l||(l={}),l[w]=D[w])}else l||(_||(_=[]),_.push($,l)),l=D;else $==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,A=A?A.__html:void 0,D!=null&&A!==D&&(_=_||[]).push($,D)):$==="children"?typeof D!="string"&&typeof D!="number"||(_=_||[]).push($,""+D):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(s.hasOwnProperty($)?(D!=null&&$==="onScroll"&&rt("scroll",i),_||A===D||(_=[])):(_=_||[]).push($,D))}l&&(_=_||[]).push("style",l);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},yv=function(i,o,l,h){l!==h&&(o.flags|=4)};function ql(i,o){if(!lt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function cR(i,o,l){var h=o.pendingProps;switch(jf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(o),null;case 1:return mn(o.type)&&Vc(),Zt(o),null;case 3:return h=o.stateNode,ua(),it(pn),it(Xt),Zf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(zc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,sr!==null&&(Pp(sr),sr=null))),yp(i,o),Zt(o),null;case 5:Xf(o);var p=Ws(Bl.current);if(l=o.type,i!==null&&o.stateNode!=null)_v(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Zt(o),null}if(i=Ws(Sr.current),zc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Ir]=o,h[Ml]=_,i=(o.mode&1)!==0,l){case"dialog":rt("cancel",h),rt("close",h);break;case"iframe":case"object":case"embed":rt("load",h);break;case"video":case"audio":for(p=0;p<bl.length;p++)rt(bl[p],h);break;case"source":rt("error",h);break;case"img":case"image":case"link":rt("error",h),rt("load",h);break;case"details":rt("toggle",h);break;case"input":So(h,_),rt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},rt("invalid",h);break;case"textarea":Ro(h,_),rt("invalid",h)}dl(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var A=_[w];w==="children"?typeof A=="string"?h.textContent!==A&&(_.suppressHydrationWarning!==!0&&Oc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(_.suppressHydrationWarning!==!0&&Oc(h.textContent,A,i),p=["children",""+A]):s.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&rt("scroll",h)}switch(l){case"input":Br(h),oc(h,_,!0);break;case"textarea":Br(h),al(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Lc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Pt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Ir]=o,i[Ml]=h,gv(i,o,!1,!1),o.stateNode=i;e:{switch(w=fl(l,h),l){case"dialog":rt("cancel",i),rt("close",i),p=h;break;case"iframe":case"object":case"embed":rt("load",i),p=h;break;case"video":case"audio":for(p=0;p<bl.length;p++)rt(bl[p],i);p=h;break;case"source":rt("error",i),p=h;break;case"img":case"image":case"link":rt("error",i),rt("load",i),p=h;break;case"details":rt("toggle",i),p=h;break;case"input":So(i,h),p=Is(i,h),rt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=oe({},h,{value:void 0}),rt("invalid",i);break;case"textarea":Ro(i,h),p=ol(i,h),rt("invalid",i);break;default:p=h}dl(l,p),A=p;for(_ in A)if(A.hasOwnProperty(_)){var D=A[_];_==="style"?cl(i,D):_==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&ll(i,D)):_==="children"?typeof D=="string"?(l!=="textarea"||D!=="")&&Ii(i,D):typeof D=="number"&&Ii(i,""+D):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?D!=null&&_==="onScroll"&&rt("scroll",i):D!=null&&ne(i,_,D,w))}switch(l){case"input":Br(i),oc(i,h,!1);break;case"textarea":Br(i),al(i);break;case"option":h.value!=null&&i.setAttribute("value",""+$e(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?$r(i,!!h.multiple,_,!1):h.defaultValue!=null&&$r(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Lc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Zt(o),null;case 6:if(i&&o.stateNode!=null)yv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ws(Bl.current),Ws(Sr.current),zc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Ir]=o,(_=h.nodeValue!==l)&&(i=Pn,i!==null))switch(i.tag){case 3:Oc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Oc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ir]=o,o.stateNode=h}return Zt(o),null;case 13:if(it(ut),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(lt&&Nn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)wy(),sa(),o.flags|=98560,_=!1;else if(_=zc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ir]=o}else sa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Zt(o),_=!1}else sr!==null&&(Pp(sr),sr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(ut.current&1)!==0?bt===0&&(bt=3):Dp())),o.updateQueue!==null&&(o.flags|=4),Zt(o),null);case 4:return ua(),yp(i,o),i===null&&Ol(o.stateNode.containerInfo),Zt(o),null;case 10:return qf(o.type._context),Zt(o),null;case 17:return mn(o.type)&&Vc(),Zt(o),null;case 19:if(it(ut),_=o.memoizedState,_===null)return Zt(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)ql(_,!1);else{if(bt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=Kc(i),w!==null){for(o.flags|=128,ql(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return tt(ut,ut.current&1|2),o.child}i=i.sibling}_.tail!==null&&et()>fa&&(o.flags|=128,h=!0,ql(_,!1),o.lanes=4194304)}else{if(!h)if(i=Kc(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!lt)return Zt(o),null}else 2*et()-_.renderingStartTime>fa&&l!==1073741824&&(o.flags|=128,h=!0,ql(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=et(),o.sibling=null,l=ut.current,tt(ut,h?l&1|2:l&1),o):(Zt(o),null);case 22:case 23:return xp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(xn&1073741824)!==0&&(Zt(o),o.subtreeFlags&6&&(o.flags|=8192)):Zt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function hR(i,o){switch(jf(o),o.tag){case 1:return mn(o.type)&&Vc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ua(),it(pn),it(Xt),Zf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Xf(o),null;case 13:if(it(ut),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));sa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return it(ut),null;case 4:return ua(),null;case 10:return qf(o.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var rh=!1,en=!1,dR=typeof WeakSet=="function"?WeakSet:Set,ce=null;function ha(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){dt(i,o,h)}else l.current=null}function vp(i,o,l){try{l()}catch(h){dt(i,o,h)}}var vv=!1;function fR(i,o){if(xf=xi,i=X_(),If(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,A=-1,D=-1,$=0,X=0,J=i,Y=null;t:for(;;){for(var ae;J!==l||p!==0&&J.nodeType!==3||(A=w+p),J!==_||h!==0&&J.nodeType!==3||(D=w+h),J.nodeType===3&&(w+=J.nodeValue.length),(ae=J.firstChild)!==null;)Y=J,J=ae;for(;;){if(J===i)break t;if(Y===l&&++$===p&&(A=w),Y===_&&++X===h&&(D=w),(ae=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=ae}l=A===-1||D===-1?null:{start:A,end:D}}else l=null}l=l||{start:0,end:0}}else l=null;for(Df={focusedElem:i,selectionRange:l},xi=!1,ce=o;ce!==null;)if(o=ce,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ce=i;else for(;ce!==null;){o=ce;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var pe=he.memoizedProps,gt=he.memoizedState,U=o.stateNode,L=U.getSnapshotBeforeUpdate(o.elementType===o.type?pe:or(o.type,pe),gt);U.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var z=o.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){dt(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,ce=i;break}ce=o.return}return he=vv,vv=!1,he}function Gl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&vp(o,l,_)}p=p.next}while(p!==h)}}function ih(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Ep(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Ev(i){var o=i.alternate;o!==null&&(i.alternate=null,Ev(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Ir],delete o[Ml],delete o[Mf],delete o[QC],delete o[YC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function wv(i){return i.tag===5||i.tag===3||i.tag===4}function Tv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||wv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function wp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Lc));else if(h!==4&&(i=i.child,i!==null))for(wp(i,o,l),i=i.sibling;i!==null;)wp(i,o,l),i=i.sibling}function Tp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Tp(i,o,l),i=i.sibling;i!==null;)Tp(i,o,l),i=i.sibling}var qt=null,ar=!1;function ji(i,o,l){for(l=l.child;l!==null;)Iv(i,o,l),l=l.sibling}function Iv(i,o,l){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Ds,l)}catch{}switch(l.tag){case 5:en||ha(l,o);case 6:var h=qt,p=ar;qt=null,ji(i,o,l),qt=h,ar=p,qt!==null&&(ar?(i=qt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):qt.removeChild(l.stateNode));break;case 18:qt!==null&&(ar?(i=qt,l=l.stateNode,i.nodeType===8?Lf(i.parentNode,l):i.nodeType===1&&Lf(i,l),nr(i)):Lf(qt,l.stateNode));break;case 4:h=qt,p=ar,qt=l.stateNode.containerInfo,ar=!0,ji(i,o,l),qt=h,ar=p;break;case 0:case 11:case 14:case 15:if(!en&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&vp(l,o,w),p=p.next}while(p!==h)}ji(i,o,l);break;case 1:if(!en&&(ha(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){dt(l,o,A)}ji(i,o,l);break;case 21:ji(i,o,l);break;case 22:l.mode&1?(en=(h=en)||l.memoizedState!==null,ji(i,o,l),en=h):ji(i,o,l);break;default:ji(i,o,l)}}function Sv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new dR),o.forEach(function(h){var p=TR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function lr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,A=w;e:for(;A!==null;){switch(A.tag){case 5:qt=A.stateNode,ar=!1;break e;case 3:qt=A.stateNode.containerInfo,ar=!0;break e;case 4:qt=A.stateNode.containerInfo,ar=!0;break e}A=A.return}if(qt===null)throw Error(t(160));Iv(_,w,p),qt=null,ar=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch($){dt(p,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Cv(o,i),o=o.sibling}function Cv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(lr(o,i),Rr(i),h&4){try{Gl(3,i,i.return),ih(3,i)}catch(pe){dt(i,i.return,pe)}try{Gl(5,i,i.return)}catch(pe){dt(i,i.return,pe)}}break;case 1:lr(o,i),Rr(i),h&512&&l!==null&&ha(l,l.return);break;case 5:if(lr(o,i),Rr(i),h&512&&l!==null&&ha(l,l.return),i.flags&32){var p=i.stateNode;try{Ii(p,"")}catch(pe){dt(i,i.return,pe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,A=i.type,D=i.updateQueue;if(i.updateQueue=null,D!==null)try{A==="input"&&_.type==="radio"&&_.name!=null&&il(p,_),fl(A,w);var $=fl(A,_);for(w=0;w<D.length;w+=2){var X=D[w],J=D[w+1];X==="style"?cl(p,J):X==="dangerouslySetInnerHTML"?ll(p,J):X==="children"?Ii(p,J):ne(p,X,J,$)}switch(A){case"input":sl(p,_);break;case"textarea":Ao(p,_);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ae=_.value;ae!=null?$r(p,!!_.multiple,ae,!1):Y!==!!_.multiple&&(_.defaultValue!=null?$r(p,!!_.multiple,_.defaultValue,!0):$r(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ml]=_}catch(pe){dt(i,i.return,pe)}}break;case 6:if(lr(o,i),Rr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(pe){dt(i,i.return,pe)}}break;case 3:if(lr(o,i),Rr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{nr(o.containerInfo)}catch(pe){dt(i,i.return,pe)}break;case 4:lr(o,i),Rr(i);break;case 13:lr(o,i),Rr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Cp=et())),h&4&&Sv(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(en=($=en)||X,lr(o,i),en=$):lr(o,i),Rr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!X&&(i.mode&1)!==0)for(ce=i,X=i.child;X!==null;){for(J=ce=X;ce!==null;){switch(Y=ce,ae=Y.child,Y.tag){case 0:case 11:case 14:case 15:Gl(4,Y,Y.return);break;case 1:ha(Y,Y.return);var he=Y.stateNode;if(typeof he.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(pe){dt(h,l,pe)}}break;case 5:ha(Y,Y.return);break;case 22:if(Y.memoizedState!==null){kv(J);continue}}ae!==null?(ae.return=Y,ce=ae):kv(J)}X=X.sibling}e:for(X=null,J=i;;){if(J.tag===5){if(X===null){X=J;try{p=J.stateNode,$?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(A=J.stateNode,D=J.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,A.style.display=ul("display",w))}catch(pe){dt(i,i.return,pe)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=$?"":J.memoizedProps}catch(pe){dt(i,i.return,pe)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===i)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===i)break e;for(;J.sibling===null;){if(J.return===null||J.return===i)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:lr(o,i),Rr(i),h&4&&Sv(i);break;case 21:break;default:lr(o,i),Rr(i)}}function Rr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(wv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Ii(p,""),h.flags&=-33);var _=Tv(i);Tp(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,A=Tv(i);wp(i,A,w);break;default:throw Error(t(161))}}catch(D){dt(i,i.return,D)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function pR(i,o,l){ce=i,Rv(i)}function Rv(i,o,l){for(var h=(i.mode&1)!==0;ce!==null;){var p=ce,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||rh;if(!w){var A=p.alternate,D=A!==null&&A.memoizedState!==null||en;A=rh;var $=en;if(rh=w,(en=D)&&!$)for(ce=p;ce!==null;)w=ce,D=w.child,w.tag===22&&w.memoizedState!==null?Pv(p):D!==null?(D.return=w,ce=D):Pv(p);for(;_!==null;)ce=_,Rv(_),_=_.sibling;ce=p,rh=A,en=$}Av(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ce=_):Av(i)}}function Av(i){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:en||ih(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!en)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:or(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&ky(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}ky(o,w,l)}break;case 5:var A=o.stateNode;if(l===null&&o.flags&4){l=A;var D=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&l.focus();break;case"img":D.src&&(l.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&nr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}en||o.flags&512&&Ep(o)}catch(Y){dt(o,o.return,Y)}}if(o===i){ce=null;break}if(l=o.sibling,l!==null){l.return=o.return,ce=l;break}ce=o.return}}function kv(i){for(;ce!==null;){var o=ce;if(o===i){ce=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Pv(i){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{ih(4,o)}catch(D){dt(o,l,D)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(D){dt(o,p,D)}}var _=o.return;try{Ep(o)}catch(D){dt(o,_,D)}break;case 5:var w=o.return;try{Ep(o)}catch(D){dt(o,w,D)}}}catch(D){dt(o,o.return,D)}if(o===i){ce=null;break}var A=o.sibling;if(A!==null){A.return=o.return,ce=A;break}ce=o.return}}var mR=Math.ceil,sh=q.ReactCurrentDispatcher,Ip=q.ReactCurrentOwner,$n=q.ReactCurrentBatchConfig,je=0,Ft=null,Et=null,Gt=0,xn=0,da=Li(0),bt=0,Kl=null,qs=0,oh=0,Sp=0,Ql=null,_n=null,Cp=0,fa=1/0,ii=null,ah=!1,Rp=null,Bi=null,lh=!1,zi=null,uh=0,Yl=0,Ap=null,ch=-1,hh=0;function cn(){return(je&6)!==0?et():ch!==-1?ch:ch=et()}function $i(i){return(i.mode&1)===0?1:(je&2)!==0&&Gt!==0?Gt&-Gt:JC.transition!==null?(hh===0&&(hh=Os()),hh):(i=Me,i!==0||(i=window.event,i=i===void 0?16:Sl(i.type)),i)}function ur(i,o,l,h){if(50<Yl)throw Yl=0,Ap=null,Error(t(185));Ai(i,l,h),((je&2)===0||i!==Ft)&&(i===Ft&&((je&2)===0&&(oh|=l),bt===4&&Wi(i,Gt)),yn(i,h),l===1&&je===0&&(o.mode&1)===0&&(fa=et()+500,Uc&&Vi()))}function yn(i,o){var l=i.callbackNode;qr(i,o);var h=bs(i,i===Ft?Gt:0);if(h===0)l!==null&&vl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&vl(l),o===1)i.tag===0?XC(xv.bind(null,i)):gy(xv.bind(null,i)),GC(function(){(je&6)===0&&Vi()}),l=null;else{switch(Pi(h)){case 1:l=xs;break;case 4:l=Si;break;case 16:l=Mn;break;case 536870912:l=hc;break;default:l=Mn}l=Uv(l,Nv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Nv(i,o){if(ch=-1,hh=0,(je&6)!==0)throw Error(t(327));var l=i.callbackNode;if(pa()&&i.callbackNode!==l)return null;var h=bs(i,i===Ft?Gt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=dh(i,h);else{o=h;var p=je;je|=2;var _=bv();(Ft!==i||Gt!==o)&&(ii=null,fa=et()+500,Ks(i,o));do try{yR();break}catch(A){Dv(i,A)}while(!0);Hf(),sh.current=_,je=p,Et!==null?o=0:(Ft=null,Gt=0,o=bt)}if(o!==0){if(o===2&&(p=Rn(i),p!==0&&(h=p,o=kp(i,p))),o===1)throw l=Kl,Ks(i,0),Wi(i,h),yn(i,et()),l;if(o===6)Wi(i,h);else{if(p=i.current.alternate,(h&30)===0&&!gR(p)&&(o=dh(i,h),o===2&&(_=Rn(i),_!==0&&(h=_,o=kp(i,_))),o===1))throw l=Kl,Ks(i,0),Wi(i,h),yn(i,et()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Qs(i,_n,ii);break;case 3:if(Wi(i,h),(h&130023424)===h&&(o=Cp+500-et(),10<o)){if(bs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){cn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Of(Qs.bind(null,i,_n,ii),o);break}Qs(i,_n,ii);break;case 4:if(Wi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-an(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=et()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*mR(h/1960))-h,10<h){i.timeoutHandle=Of(Qs.bind(null,i,_n,ii),h);break}Qs(i,_n,ii);break;case 5:Qs(i,_n,ii);break;default:throw Error(t(329))}}}return yn(i,et()),i.callbackNode===l?Nv.bind(null,i):null}function kp(i,o){var l=Ql;return i.current.memoizedState.isDehydrated&&(Ks(i,o).flags|=256),i=dh(i,o),i!==2&&(o=_n,_n=l,o!==null&&Pp(o)),i}function Pp(i){_n===null?_n=i:_n.push.apply(_n,i)}function gR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!ir(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Wi(i,o){for(o&=~Sp,o&=~oh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-an(o),h=1<<l;i[l]=-1,o&=~h}}function xv(i){if((je&6)!==0)throw Error(t(327));pa();var o=bs(i,0);if((o&1)===0)return yn(i,et()),null;var l=dh(i,o);if(i.tag!==0&&l===2){var h=Rn(i);h!==0&&(o=h,l=kp(i,h))}if(l===1)throw l=Kl,Ks(i,0),Wi(i,o),yn(i,et()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Qs(i,_n,ii),yn(i,et()),null}function Np(i,o){var l=je;je|=1;try{return i(o)}finally{je=l,je===0&&(fa=et()+500,Uc&&Vi())}}function Gs(i){zi!==null&&zi.tag===0&&(je&6)===0&&pa();var o=je;je|=1;var l=$n.transition,h=Me;try{if($n.transition=null,Me=1,i)return i()}finally{Me=h,$n.transition=l,je=o,(je&6)===0&&Vi()}}function xp(){xn=da.current,it(da)}function Ks(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,qC(l)),Et!==null)for(l=Et.return;l!==null;){var h=l;switch(jf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Vc();break;case 3:ua(),it(pn),it(Xt),Zf();break;case 5:Xf(h);break;case 4:ua();break;case 13:it(ut);break;case 19:it(ut);break;case 10:qf(h.type._context);break;case 22:case 23:xp()}l=l.return}if(Ft=i,Et=i=Hi(i.current,null),Gt=xn=o,bt=0,Kl=null,Sp=oh=qs=0,_n=Ql=null,$s!==null){for(o=0;o<$s.length;o++)if(l=$s[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}$s=null}return i}function Dv(i,o){do{var l=Et;try{if(Hf(),Qc.current=Zc,Yc){for(var h=ct.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Yc=!1}if(Hs=0,Vt=Dt=ct=null,zl=!1,$l=0,Ip.current=null,l===null||l.return===null){bt=1,Kl=o,Et=null;break}e:{var _=i,w=l.return,A=l,D=o;if(o=Gt,A.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var $=D,X=A,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ae=rv(w);if(ae!==null){ae.flags&=-257,iv(ae,w,A,_,o),ae.mode&1&&nv(_,$,o),o=ae,D=$;var he=o.updateQueue;if(he===null){var pe=new Set;pe.add(D),o.updateQueue=pe}else he.add(D);break e}else{if((o&1)===0){nv(_,$,o),Dp();break e}D=Error(t(426))}}else if(lt&&A.mode&1){var gt=rv(w);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),iv(gt,w,A,_,o),$f(ca(D,A));break e}}_=D=ca(D,A),bt!==4&&(bt=2),Ql===null?Ql=[_]:Ql.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=ev(_,D,o);Ay(_,U);break e;case 1:A=D;var L=_.type,z=_.stateNode;if((_.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Bi===null||!Bi.has(z)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=tv(_,A,o);Ay(_,ee);break e}}_=_.return}while(_!==null)}Lv(l)}catch(me){o=me,Et===l&&l!==null&&(Et=l=l.return);continue}break}while(!0)}function bv(){var i=sh.current;return sh.current=Zc,i===null?Zc:i}function Dp(){(bt===0||bt===3||bt===2)&&(bt=4),Ft===null||(qs&268435455)===0&&(oh&268435455)===0||Wi(Ft,Gt)}function dh(i,o){var l=je;je|=2;var h=bv();(Ft!==i||Gt!==o)&&(ii=null,Ks(i,o));do try{_R();break}catch(p){Dv(i,p)}while(!0);if(Hf(),je=l,sh.current=h,Et!==null)throw Error(t(261));return Ft=null,Gt=0,bt}function _R(){for(;Et!==null;)Ov(Et)}function yR(){for(;Et!==null&&!uc();)Ov(Et)}function Ov(i){var o=Fv(i.alternate,i,xn);i.memoizedProps=i.pendingProps,o===null?Lv(i):Et=o,Ip.current=null}function Lv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=cR(l,o,xn),l!==null){Et=l;return}}else{if(l=hR(l,o),l!==null){l.flags&=32767,Et=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{bt=6,Et=null;return}}if(o=o.sibling,o!==null){Et=o;return}Et=o=i}while(o!==null);bt===0&&(bt=5)}function Qs(i,o,l){var h=Me,p=$n.transition;try{$n.transition=null,Me=1,vR(i,o,l,h)}finally{$n.transition=p,Me=h}return null}function vR(i,o,l,h){do pa();while(zi!==null);if((je&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Xe(i,_),i===Ft&&(Et=Ft=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||lh||(lh=!0,Uv(Mn,function(){return pa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=$n.transition,$n.transition=null;var w=Me;Me=1;var A=je;je|=4,Ip.current=null,fR(i,l),Cv(l,i),UC(Df),xi=!!xf,Df=xf=null,i.current=l,pR(l),mf(),je=A,Me=w,$n.transition=_}else i.current=l;if(lh&&(lh=!1,zi=i,uh=p),_=i.pendingLanes,_===0&&(Bi=null),dc(l.stateNode),yn(i,et()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(ah)throw ah=!1,i=Rp,Rp=null,i;return(uh&1)!==0&&i.tag!==0&&pa(),_=i.pendingLanes,(_&1)!==0?i===Ap?Yl++:(Yl=0,Ap=i):Yl=0,Vi(),null}function pa(){if(zi!==null){var i=Pi(uh),o=$n.transition,l=Me;try{if($n.transition=null,Me=16>i?16:i,zi===null)var h=!1;else{if(i=zi,zi=null,uh=0,(je&6)!==0)throw Error(t(331));var p=je;for(je|=4,ce=i.current;ce!==null;){var _=ce,w=_.child;if((ce.flags&16)!==0){var A=_.deletions;if(A!==null){for(var D=0;D<A.length;D++){var $=A[D];for(ce=$;ce!==null;){var X=ce;switch(X.tag){case 0:case 11:case 15:Gl(8,X,_)}var J=X.child;if(J!==null)J.return=X,ce=J;else for(;ce!==null;){X=ce;var Y=X.sibling,ae=X.return;if(Ev(X),X===$){ce=null;break}if(Y!==null){Y.return=ae,ce=Y;break}ce=ae}}}var he=_.alternate;if(he!==null){var pe=he.child;if(pe!==null){he.child=null;do{var gt=pe.sibling;pe.sibling=null,pe=gt}while(pe!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ce=w;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Gl(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,ce=U;break e}ce=_.return}}var L=i.current;for(ce=L;ce!==null;){w=ce;var z=w.child;if((w.subtreeFlags&2064)!==0&&z!==null)z.return=w,ce=z;else e:for(w=L;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:ih(9,A)}}catch(me){dt(A,A.return,me)}if(A===w){ce=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ce=ee;break e}ce=A.return}}if(je=p,Vi(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Ds,i)}catch{}h=!0}return h}finally{Me=l,$n.transition=o}}return!1}function Mv(i,o,l){o=ca(l,o),o=ev(i,o,1),i=Ui(i,o,1),o=cn(),i!==null&&(Ai(i,1,o),yn(i,o))}function dt(i,o,l){if(i.tag===3)Mv(i,i,l);else for(;o!==null;){if(o.tag===3){Mv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Bi===null||!Bi.has(h))){i=ca(l,i),i=tv(o,i,1),o=Ui(o,i,1),i=cn(),o!==null&&(Ai(o,1,i),yn(o,i));break}}o=o.return}}function ER(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=cn(),i.pingedLanes|=i.suspendedLanes&l,Ft===i&&(Gt&l)===l&&(bt===4||bt===3&&(Gt&130023424)===Gt&&500>et()-Cp?Ks(i,0):Sp|=l),yn(i,o)}function Vv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Vo,Vo<<=1,(Vo&130023424)===0&&(Vo=4194304)));var l=cn();i=ti(i,o),i!==null&&(Ai(i,o,l),yn(i,l))}function wR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Vv(i,l)}function TR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Vv(i,l)}var Fv;Fv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||pn.current)gn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return gn=!1,uR(i,o,l);gn=(i.flags&131072)!==0}else gn=!1,lt&&(o.flags&1048576)!==0&&_y(o,Bc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;nh(i,o),i=o.pendingProps;var p=na(o,Xt.current);la(o,l),p=np(null,o,h,i,p,l);var _=rp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,mn(h)?(_=!0,Fc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Qf(o),p.updater=eh,o.stateNode=p,p._reactInternals=o,up(o,h,i,l),o=fp(null,o,h,!0,_,l)):(o.tag=0,lt&&_&&Uf(o),un(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(nh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=SR(h),i=or(h,i),p){case 0:o=dp(null,o,h,i,l);break e;case 1:o=cv(null,o,h,i,l);break e;case 11:o=sv(null,o,h,i,l);break e;case 14:o=ov(null,o,h,or(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:or(h,p),dp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:or(h,p),cv(i,o,h,p,l);case 3:e:{if(hv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Ry(i,o),Gc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=ca(Error(t(423)),o),o=dv(i,o,h,l,p);break e}else if(h!==p){p=ca(Error(t(424)),o),o=dv(i,o,h,l,p);break e}else for(Nn=Oi(o.stateNode.containerInfo.firstChild),Pn=o,lt=!0,sr=null,l=Sy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(sa(),h===p){o=ri(i,o,l);break e}un(i,o,h,l)}o=o.child}return o;case 5:return Py(o),i===null&&zf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,bf(h,p)?w=null:_!==null&&bf(h,_)&&(o.flags|=32),uv(i,o),un(i,o,w,l),o.child;case 6:return i===null&&zf(o),null;case 13:return fv(i,o,l);case 4:return Yf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=oa(o,null,h,l):un(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:or(h,p),sv(i,o,h,p,l);case 7:return un(i,o,o.pendingProps,l),o.child;case 8:return un(i,o,o.pendingProps.children,l),o.child;case 12:return un(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,tt(Wc,h._currentValue),h._currentValue=w,_!==null)if(ir(_.value,w)){if(_.children===p.children&&!pn.current){o=ri(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var A=_.dependencies;if(A!==null){w=_.child;for(var D=A.firstContext;D!==null;){if(D.context===h){if(_.tag===1){D=ni(-1,l&-l),D.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?D.next=D:(D.next=X.next,X.next=D),$.pending=D}}_.lanes|=l,D=_.alternate,D!==null&&(D.lanes|=l),Gf(_.return,l,o),A.lanes|=l;break}D=D.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,A=w.alternate,A!==null&&(A.lanes|=l),Gf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}un(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,la(o,l),p=Bn(p),h=h(p),o.flags|=1,un(i,o,h,l),o.child;case 14:return h=o.type,p=or(h,o.pendingProps),p=or(h.type,p),ov(i,o,h,p,l);case 15:return av(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:or(h,p),nh(i,o),o.tag=1,mn(h)?(i=!0,Fc(o)):i=!1,la(o,l),Jy(o,h,p),up(o,h,p,l),fp(null,o,h,!0,i,l);case 19:return mv(i,o,l);case 22:return lv(i,o,l)}throw Error(t(156,o.tag))};function Uv(i,o){return Lo(i,o)}function IR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(i,o,l,h){return new IR(i,o,l,h)}function bp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function SR(i){if(typeof i=="function")return bp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===M)return 11;if(i===At)return 14}return 2}function Hi(i,o){var l=i.alternate;return l===null?(l=Wn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function fh(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")bp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case O:return Ys(l.children,p,_,o);case S:w=8,p|=8;break;case R:return i=Wn(12,l,o,p|2),i.elementType=R,i.lanes=_,i;case k:return i=Wn(13,l,o,p),i.elementType=k,i.lanes=_,i;case Ke:return i=Wn(19,l,o,p),i.elementType=Ke,i.lanes=_,i;case He:return ph(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:w=10;break e;case b:w=9;break e;case M:w=11;break e;case At:w=14;break e;case kt:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Wn(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Ys(i,o,l,h){return i=Wn(7,i,h,o),i.lanes=l,i}function ph(i,o,l,h){return i=Wn(22,i,h,o),i.elementType=He,i.lanes=l,i.stateNode={isHidden:!1},i}function Op(i,o,l){return i=Wn(6,i,null,o),i.lanes=l,i}function Lp(i,o,l){return o=Wn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function CR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Mp(i,o,l,h,p,_,w,A,D){return i=new CR(i,o,l,A,D),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Wn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(_),i}function RR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function jv(i){if(!i)return Mi;i=i._reactInternals;e:{if(Xn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(mn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(mn(l))return py(i,l,o)}return o}function Bv(i,o,l,h,p,_,w,A,D){return i=Mp(l,h,!0,i,p,_,w,A,D),i.context=jv(null),l=i.current,h=cn(),p=$i(l),_=ni(h,p),_.callback=o??null,Ui(l,_,p),i.current.lanes=p,Ai(i,p,h),yn(i,h),i}function mh(i,o,l,h){var p=o.current,_=cn(),w=$i(p);return l=jv(l),o.context===null?o.context=l:o.pendingContext=l,o=ni(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Ui(p,o,w),i!==null&&(ur(i,p,w,_),qc(i,p,w)),w}function gh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function zv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Vp(i,o){zv(i,o),(i=i.alternate)&&zv(i,o)}function AR(){return null}var $v=typeof reportError=="function"?reportError:function(i){console.error(i)};function Fp(i){this._internalRoot=i}_h.prototype.render=Fp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));mh(i,o,null,null)},_h.prototype.unmount=Fp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Gs(function(){mh(null,i,null,null)}),o[Xr]=null}};function _h(i){this._internalRoot=i}_h.prototype.unstable_scheduleHydration=function(i){if(i){var o=_c();i={blockedOn:null,target:i,priority:o};for(var l=0;l<vr.length&&o!==0&&o<vr[l].priority;l++);vr.splice(l,0,i),l===0&&Ec(i)}};function Up(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function yh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function kR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var $=gh(w);_.call($)}}var w=Bv(o,h,i,0,null,!1,!1,"",Wv);return i._reactRootContainer=w,i[Xr]=w.current,Ol(i.nodeType===8?i.parentNode:i),Gs(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var $=gh(D);A.call($)}}var D=Mp(i,0,!1,null,null,!1,!1,"",Wv);return i._reactRootContainer=D,i[Xr]=D.current,Ol(i.nodeType===8?i.parentNode:i),Gs(function(){mh(o,D,l,h)}),D}function vh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var A=p;p=function(){var D=gh(w);A.call(D)}}mh(o,w,i,p)}else w=kR(l,o,i,p,h);return gh(w)}mc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ci(o.pendingLanes);l!==0&&(ki(o,l|1),yn(o,et()),(je&6)===0&&(fa=et()+500,Vi()))}break;case 13:Gs(function(){var h=ti(i,1);if(h!==null){var p=cn();ur(h,i,1,p)}}),Vp(i,1)}},Fo=function(i){if(i.tag===13){var o=ti(i,134217728);if(o!==null){var l=cn();ur(o,i,134217728,l)}Vp(i,134217728)}},gc=function(i){if(i.tag===13){var o=$i(i),l=ti(i,o);if(l!==null){var h=cn();ur(l,i,o,h)}Vp(i,o)}},_c=function(){return Me},yc=function(i,o){var l=Me;try{return Me=i,o()}finally{Me=l}},Po=function(i,o,l){switch(o){case"input":if(sl(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Mc(h);if(!p)throw Error(t(90));Io(h),sl(h,p)}}}break;case"textarea":Ao(i,l);break;case"select":o=l.value,o!=null&&$r(i,!!l.multiple,o,!1)}},As=Np,ml=Gs;var PR={usingClientEntryPoint:!1,Events:[Vl,ea,Mc,_r,pl,Np]},Xl={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NR={bundleType:Xl.bundleType,version:Xl.version,rendererPackageName:Xl.rendererPackageName,rendererConfig:Xl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=yl(i),i===null?null:i.stateNode},findFiberByHostInstance:Xl.findFiberByHostInstance||AR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eh.isDisabled&&Eh.supportsFiber)try{Ds=Eh.inject(NR),Cn=Eh}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PR,vn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(o))throw Error(t(200));return RR(i,o,null,l)},vn.createRoot=function(i,o){if(!Up(i))throw Error(t(299));var l=!1,h="",p=$v;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Mp(i,1,!1,null,null,l,!1,h,p),i[Xr]=o.current,Ol(i.nodeType===8?i.parentNode:i),new Fp(o)},vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=yl(o),i=i===null?null:i.stateNode,i},vn.flushSync=function(i){return Gs(i)},vn.hydrate=function(i,o,l){if(!yh(o))throw Error(t(200));return vh(null,i,o,!0,l)},vn.hydrateRoot=function(i,o,l){if(!Up(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=$v;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=Bv(o,null,i,1,l??null,p,!1,_,w),i[Xr]=o.current,Ol(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new _h(o)},vn.render=function(i,o,l){if(!yh(o))throw Error(t(200));return vh(null,i,o,!1,l)},vn.unmountComponentAtNode=function(i){if(!yh(i))throw Error(t(40));return i._reactRootContainer?(Gs(function(){vh(null,null,i,!1,function(){i._reactRootContainer=null,i[Xr]=null})}),!0):!1},vn.unstable_batchedUpdates=Np,vn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!yh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return vh(i,o,l,!1,h)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var Jv;function UR(){if(Jv)return zp.exports;Jv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),zp.exports=FR(),zp.exports}var Zv;function jR(){if(Zv)return wh;Zv=1;var n=UR();return wh.createRoot=n.createRoot,wh.hydrateRoot=n.hydrateRoot,wh}var BR=jR();const zR=AT(BR),$R=()=>{};var eE={};/**
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
 */const kT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const te=function(n,e){if(!n)throw Ha(e)},Ha=function(n){return new Error("Firebase Database ("+kT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const PT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},WR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,x=m&63;f||(x=64,u||(T=64)),r.push(t[v],t[E],t[T],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(PT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new HR;const T=a<<2|d>>4;if(r.push(T),m!==64){const x=d<<4&240|m>>2;if(r.push(x),E!==64){const V=m<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NT=function(n){const e=PT(n);return ig.encodeByteArray(e,!0)},Wh=function(n){return NT(n).replace(/\./g,"")},Hh=function(n){try{return ig.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qR(n){return xT(void 0,n)}function xT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!GR(t)||(n[t]=xT(n[t],e[t]));return n}function GR(n){return n!=="__proto__"}/**
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
 */function KR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QR=()=>KR().__FIREBASE_DEFAULTS__,YR=()=>{if(typeof process>"u"||typeof eE>"u")return;const n=eE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},XR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hh(n[1]);return e&&JSON.parse(e)},Ad=()=>{try{return $R()||QR()||YR()||XR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},DT=n=>{var e,t;return(t=(e=Ad())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sg=n=>{const e=DT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},bT=()=>{var n;return(n=Ad())===null||n===void 0?void 0:n.config},OT=n=>{var e;return(e=Ad())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class oi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function og(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wh(JSON.stringify(t)),Wh(JSON.stringify(u)),""].join(".")}const du={};function JR(){const n={prod:[],emulator:[]};for(const e of Object.keys(du))du[e]?n.emulator.push(e):n.prod.push(e);return n}function ZR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let tE=!1;function Pd(n,e){if(typeof window>"u"||typeof document>"u"||!Fr(window.location.host)||du[n]===e||du[n]||tE)return;du[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=JR().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,x){T.setAttribute("width","24"),T.setAttribute("id",x),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{tE=!0,u()},T}function v(T,x){T.setAttribute("id",x),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=ZR(r),x=t("text"),V=document.getElementById(x)||document.createElement("span"),j=t("learnmore"),B=document.getElementById(j)||document.createElement("a"),Z=t("preprendIcon"),K=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const ne=T.element;d(ne),v(B,j);const q=m();f(K,Z),ne.append(K,V,B,q),document.body.appendChild(ne)}a?(V.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ag(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function eA(){var n;const e=(n=Ad())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function LT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rA(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iA(){return kT.NODE_ADMIN===!0}function sA(){return!eA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oA(){try{return typeof indexedDB=="object"}catch{return!1}}function aA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const lA="FirebaseError";class Ur extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lA,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hu.prototype.create)}}class Hu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?uA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Ur(s,d,r)}}function uA(n,e){return n.replace(cA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cA=/\{\$([^}]+)}/g;/**
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
 */function Su(n){return JSON.parse(n)}function $t(n){return JSON.stringify(n)}/**
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
 */const MT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Su(Hh(a[0])||""),t=Su(Hh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},hA=function(n){const e=MT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},dA=function(n){const e=MT(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function jr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Pa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function qh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function fi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(nE(a)&&nE(u)){if(!fi(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nE(n){return n!==null&&typeof n=="object"}/**
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
 */function qa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function su(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function ou(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class fA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,v;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),v=1518500249):(m=a^u^d,v=1859775393):E<60?(m=a&u|d&(a|u),v=2400959708):(m=a^u^d,v=3395469782);const T=(s<<5|s>>>27)+m+f+v+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function pA(n,e){const t=new mA(n,e);return t.subscribe.bind(t)}class mA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Hp),s.error===void 0&&(s.error=Hp),s.complete===void 0&&(s.complete=Hp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hp(){}function Na(n,e){return`${n} failed: ${e} argument `}/**
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
 */const _A=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,te(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Nd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class pi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Js="[DEFAULT]";/**
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
 */class yA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new oi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EA(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vA(n){return n===Js?void 0:n}function EA(n){return n.instantiationMode==="EAGER"}/**
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
 */class wA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const TA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},IA=Oe.INFO,SA={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},CA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=SA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=IA,this._logHandler=CA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const RA=(n,e)=>e.some(t=>n instanceof t);let rE,iE;function AA(){return rE||(rE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kA(){return iE||(iE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VT=new WeakMap,dm=new WeakMap,FT=new WeakMap,qp=new WeakMap,lg=new WeakMap;function PA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(es(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&VT.set(t,n)}).catch(()=>{}),lg.set(e,n),e}function NA(n){if(dm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});dm.set(n,e)}let fm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||FT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xA(n){fm=n(fm)}function DA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Gp(this),e,...t);return FT.set(r,e.sort?e.sort():[e]),es(r)}:kA().includes(n)?function(...e){return n.apply(Gp(this),e),es(VT.get(this))}:function(...e){return es(n.apply(Gp(this),e))}}function bA(n){return typeof n=="function"?DA(n):(n instanceof IDBTransaction&&NA(n),RA(n,AA())?new Proxy(n,fm):n)}function es(n){if(n instanceof IDBRequest)return PA(n);if(qp.has(n))return qp.get(n);const e=bA(n);return e!==n&&(qp.set(n,e),lg.set(e,n)),e}const Gp=n=>lg.get(n);function OA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=es(u);return r&&u.addEventListener("upgradeneeded",f=>{r(es(u.result),f.oldVersion,f.newVersion,es(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const LA=["get","getKey","getAll","getAllKeys","count"],MA=["put","add","delete","clear"],Kp=new Map;function sE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kp.get(e))return Kp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=MA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Kp.set(e,a),a}xA(n=>({...n,get:(e,t,r)=>sE(e,t)||n.get(e,t,r),has:(e,t)=>!!sE(e,t)||n.has(e,t)}));/**
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
 */class VA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function FA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pm="@firebase/app",oE="0.13.2";/**
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
 */const mi=new xd("@firebase/app"),UA="@firebase/app-compat",jA="@firebase/analytics-compat",BA="@firebase/analytics",zA="@firebase/app-check-compat",$A="@firebase/app-check",WA="@firebase/auth",HA="@firebase/auth-compat",qA="@firebase/database",GA="@firebase/data-connect",KA="@firebase/database-compat",QA="@firebase/functions",YA="@firebase/functions-compat",XA="@firebase/installations",JA="@firebase/installations-compat",ZA="@firebase/messaging",ek="@firebase/messaging-compat",tk="@firebase/performance",nk="@firebase/performance-compat",rk="@firebase/remote-config",ik="@firebase/remote-config-compat",sk="@firebase/storage",ok="@firebase/storage-compat",ak="@firebase/firestore",lk="@firebase/ai",uk="@firebase/firestore-compat",ck="firebase",hk="11.10.0";/**
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
 */const mm="[DEFAULT]",dk={[pm]:"fire-core",[UA]:"fire-core-compat",[BA]:"fire-analytics",[jA]:"fire-analytics-compat",[$A]:"fire-app-check",[zA]:"fire-app-check-compat",[WA]:"fire-auth",[HA]:"fire-auth-compat",[qA]:"fire-rtdb",[GA]:"fire-data-connect",[KA]:"fire-rtdb-compat",[QA]:"fire-fn",[YA]:"fire-fn-compat",[XA]:"fire-iid",[JA]:"fire-iid-compat",[ZA]:"fire-fcm",[ek]:"fire-fcm-compat",[tk]:"fire-perf",[nk]:"fire-perf-compat",[rk]:"fire-rc",[ik]:"fire-rc-compat",[sk]:"fire-gcs",[ok]:"fire-gcs-compat",[ak]:"fire-fst",[uk]:"fire-fst-compat",[lk]:"fire-vertex","fire-js":"fire-js",[ck]:"fire-js-all"};/**
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
 */const Kh=new Map,fk=new Map,gm=new Map;function aE(n,e){try{n.container.addComponent(e)}catch(t){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ls(n){const e=n.name;if(gm.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;gm.set(e,n);for(const t of Kh.values())aE(t,n);for(const t of fk.values())aE(t,n);return!0}function qu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new Hu("app","Firebase",pk);/**
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
 */class mk{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=hk;function UT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ts.create("bad-app-name",{appName:String(s)});if(t||(t=bT()),!t)throw ts.create("no-options");const a=Kh.get(s);if(a){if(fi(t,a.options)&&fi(r,a.config))return a;throw ts.create("duplicate-app",{appName:s})}const u=new wA(s);for(const f of gm.values())u.addComponent(f);const d=new mk(t,r,u);return Kh.set(s,d),d}function Dd(n=mm){const e=Kh.get(n);if(!e&&n===mm&&bT())return UT();if(!e)throw ts.create("no-app",{appName:n});return e}function Kn(n,e,t){var r;let s=(r=dk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(d.join(" "));return}ls(new pi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gk="firebase-heartbeat-database",_k=1,Cu="firebase-heartbeat-store";let Qp=null;function jT(){return Qp||(Qp=OA(gk,_k,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cu)}catch(t){console.warn(t)}}}}).catch(n=>{throw ts.create("idb-open",{originalErrorMessage:n.message})})),Qp}async function yk(n){try{const t=(await jT()).transaction(Cu),r=await t.objectStore(Cu).get(BT(n));return await t.done,r}catch(e){if(e instanceof Ur)mi.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(t.message)}}}async function lE(n,e){try{const r=(await jT()).transaction(Cu,"readwrite");await r.objectStore(Cu).put(e,BT(n)),await r.done}catch(t){if(t instanceof Ur)mi.warn(t.message);else{const r=ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mi.warn(r.message)}}}function BT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vk=1024,Ek=30;class wk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ik(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=uE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>Ek){const u=Sk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uE(),{heartbeatsToSend:r,unsentEntries:s}=Tk(this._heartbeatsCache.heartbeats),a=Wh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return mi.warn(t),""}}}function uE(){return new Date().toISOString().substring(0,10)}function Tk(n,e=vk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),cE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),cE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ik{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oA()?aA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cE(n){return Wh(JSON.stringify({version:2,heartbeats:n})).length}function Sk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Ck(n){ls(new pi("platform-logger",e=>new VA(e),"PRIVATE")),ls(new pi("heartbeat",e=>new wk(e),"PRIVATE")),Kn(pm,oE,n),Kn(pm,oE,"esm2017"),Kn("fire-js","")}Ck("");function ug(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function zT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rk=zT,$T=new Hu("auth","Firebase",zT());/**
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
 */const Qh=new xd("@firebase/auth");function Ak(n,...e){Qh.logLevel<=Oe.WARN&&Qh.warn(`Auth (${ys}): ${n}`,...e)}function bh(n,...e){Qh.logLevel<=Oe.ERROR&&Qh.error(`Auth (${ys}): ${n}`,...e)}/**
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
 */function pr(n,...e){throw cg(n,...e)}function Pr(n,...e){return cg(n,...e)}function WT(n,e,t){const r=Object.assign(Object.assign({},Rk()),{[e]:t});return new Hu("auth","Firebase",r).create(e,{appName:n.name})}function ns(n){return WT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $T.create(n,...e)}function Ee(n,e,...t){if(!n)throw cg(e,...t)}function ai(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bh(e),new Error(e)}function gi(n,e){n||ai(e)}/**
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
 */function _m(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kk(){return hE()==="http:"||hE()==="https:"}function hE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Pk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kk()||nA()||"connection"in navigator)?navigator.onLine:!0}function Nk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gu{constructor(e,t){this.shortDelay=e,this.longDelay=t,gi(t>e,"Short delay should be less than long delay!"),this.isMobile=ag()||LT()}get(){return Pk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hg(n,e){gi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class HT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bk=new Gu(3e4,6e4);function yo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vs(n,e,t,r,s={}){return qT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=qa(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return tA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(m.credentials="include"),HT.fetch()(await GT(n,n.config.apiHost,t,d),m)})}async function qT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xk),e);try{const s=new Lk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Th(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Th(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Th(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Th(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw WT(n,v,m);pr(n,v)}}catch(s){if(s instanceof Ur)throw s;pr(n,"network-request-failed",{message:String(s)})}}async function bd(n,e,t,r,s={}){const a=await vs(n,e,t,r,s);return"mfaPendingCredential"in a&&pr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function GT(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?hg(n.config,s):`${n.config.apiScheme}://${s}`;return Dk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Ok(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Pr(this.auth,"network-request-failed")),bk.get())})}}function Th(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Pr(n,e,r);return s.customData._tokenResponse=t,s}function dE(n){return n!==void 0&&n.enterprise!==void 0}class Mk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ok(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vk(n,e){return vs(n,"GET","/v2/recaptchaConfig",yo(n,e))}/**
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
 */async function Fk(n,e){return vs(n,"POST","/v1/accounts:delete",e)}async function Yh(n,e){return vs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uk(n,e=!1){const t=Ge(n),r=await t.getIdToken(e),s=dg(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:fu(Yp(s.auth_time)),issuedAtTime:fu(Yp(s.iat)),expirationTime:fu(Yp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Yp(n){return Number(n)*1e3}function dg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hh(t);return s?JSON.parse(s):(bh("Failed to decode base64 JWT payload"),null)}catch(s){return bh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fE(n){const e=dg(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ru(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ur&&jk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ym{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fu(this.lastLoginAt),this.creationTime=fu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ru(n,Yh(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?KT(a.providerUserInfo):[],d=$k(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new ym(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function zk(n){const e=Ge(n);await Xh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $k(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function KT(n){return n.map(e=>{var{providerId:t}=e,r=ug(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Wk(n,e){const t=await qT(n,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await GT(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(f.credentials="include"),HT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hk(n,e){return vs(n,"POST","/v2/accounts:revokeToken",yo(n,e))}/**
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
 */class Ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=fE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await Wk(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ta;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ta,this.toJSON())}_performRefresh(){return ai("not implemented")}}/**
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
 */function Gi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=ug(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ym(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ru(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Uk(this,e)}reload(){return zk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Xh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await Ru(this,Fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,x=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=t.photoURL)!==null&&u!==void 0?u:void 0,j=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,Z=(m=t.createdAt)!==null&&m!==void 0?m:void 0,K=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ne,emailVerified:q,isAnonymous:Ie,providerData:de,stsTokenManager:O}=t;Ee(ne&&O,e,"internal-error");const S=Ta.fromJSON(this.name,O);Ee(typeof ne=="string",e,"internal-error"),Gi(E,e.name),Gi(T,e.name),Ee(typeof q=="boolean",e,"internal-error"),Ee(typeof Ie=="boolean",e,"internal-error"),Gi(x,e.name),Gi(V,e.name),Gi(j,e.name),Gi(B,e.name),Gi(Z,e.name),Gi(K,e.name);const R=new hr({uid:ne,auth:e,email:T,emailVerified:q,displayName:E,isAnonymous:Ie,photoURL:V,phoneNumber:x,tenantId:j,stsTokenManager:S,createdAt:Z,lastLoginAt:K});return de&&Array.isArray(de)&&(R.providerData=de.map(N=>Object.assign({},N))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ta;s.updateFromServerResponse(t);const a=new hr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?KT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Ta;d.updateFromIdToken(r);const f=new hr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ym(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const pE=new Map;function li(n){gi(n instanceof Function,"Expected a class definition");let e=pE.get(n);return e?(gi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pE.set(n,e),e)}/**
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
 */class QT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}QT.type="NONE";const mE=QT;/**
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
 */function Oh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ia{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Oh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Oh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yh(this.auth,{idToken:e}).catch(()=>{});return t?hr._fromGetAccountInfoResponse(this.auth,t,e):null}return hr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ia(li(mE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||li(mE);const u=Oh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){let E;if(typeof v=="string"){const T=await Yh(e,{idToken:v}).catch(()=>{});if(!T)break;E=await hr._fromGetAccountInfoResponse(e,T,v)}else E=hr._fromJSON(e,v);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ia(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Ia(a,e,r))}}/**
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
 */function gE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tI(e))return"Blackberry";if(nI(e))return"Webos";if(XT(e))return"Safari";if((e.includes("chrome/")||JT(e))&&!e.includes("edge/"))return"Chrome";if(eI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function YT(n=sn()){return/firefox\//i.test(n)}function XT(n=sn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JT(n=sn()){return/crios\//i.test(n)}function ZT(n=sn()){return/iemobile/i.test(n)}function eI(n=sn()){return/android/i.test(n)}function tI(n=sn()){return/blackberry/i.test(n)}function nI(n=sn()){return/webos/i.test(n)}function fg(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qk(n=sn()){var e;return fg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gk(){return rA()&&document.documentMode===10}function rI(n=sn()){return fg(n)||eI(n)||nI(n)||tI(n)||/windows phone/i.test(n)||ZT(n)}/**
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
 */function iI(n,e=[]){let t;switch(n){case"Browser":t=gE(sn());break;case"Worker":t=`${gE(sn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ys}/${r}`}/**
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
 */class Kk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Qk(n,e={}){return vs(n,"GET","/v2/passwordPolicy",yo(n,e))}/**
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
 */const Yk=6;class Xk{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Yk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Jk{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _E(this),this.idTokenSubscription=new _E(this),this.beforeStateQueue=new Kk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=li(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Ia.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yh(this,{idToken:e}),r=await hr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(ns(this));const t=e?Ge(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(li(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qk(this),t=new Xk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&li(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ia.create(this,[li(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ak(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ga(n){return Ge(n)}class _E{constructor(e){this.auth=e,this.observer=null,this.addObserver=pA(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zk(n){Od=n}function sI(n){return Od.loadJS(n)}function e1(){return Od.recaptchaEnterpriseScript}function t1(){return Od.gapiScript}function n1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class r1{constructor(){this.enterprise=new i1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class i1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const s1="recaptcha-enterprise",oI="NO_RECAPTCHA";class o1{constructor(e){this.type=s1,this.auth=Ga(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Vk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Mk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;dE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(oI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new r1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&dE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=e1();f.length!==0&&(f+=d),sI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function yE(n,e,t,r=!1,s=!1){const a=new o1(n);let u;if(s)u=oI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function vE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await yE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await yE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function a1(n,e){const t=qu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(fi(a,e??{}))return s;pr(s,"already-initialized")}return t.initialize({options:e})}function l1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(li);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function u1(n,e,t){const r=Ga(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=aI(e),{host:u,port:d}=c1(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(fi(m,r.config.emulator)&&fi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Fr(u)?(kd(`${a}//${u}${f}`),Pd("Auth",!0)):h1()}function aI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c1(n){const e=aI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:EE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:EE(u)}}}function EE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function h1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ai("not implemented")}_getIdTokenResponse(e){return ai("not implemented")}_linkToIdToken(e,t){return ai("not implemented")}_getReauthenticationResolver(e){return ai("not implemented")}}async function d1(n,e){return vs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function f1(n,e){return bd(n,"POST","/v1/accounts:signInWithPassword",yo(n,e))}/**
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
 */async function p1(n,e){return bd(n,"POST","/v1/accounts:signInWithEmailLink",yo(n,e))}async function m1(n,e){return bd(n,"POST","/v1/accounts:signInWithEmailLink",yo(n,e))}/**
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
 */class Au extends pg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Au(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Au(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vE(e,t,"signInWithPassword",f1);case"emailLink":return p1(e,{email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vE(e,r,"signUpPassword",d1);case"emailLink":return m1(e,{idToken:t,email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sa(n,e){return bd(n,"POST","/v1/accounts:signInWithIdp",yo(n,e))}/**
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
 */const g1="http://localhost";class lo extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=ug(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new lo(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Sa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sa(e,t)}buildRequest(){const e={requestUri:g1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
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
 */function _1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y1(n){const e=su(ou(n)).link,t=e?su(ou(e)).deep_link_id:null,r=su(ou(n)).deep_link_id;return(r?su(ou(r)).link:null)||r||t||e||n}class mg{constructor(e){var t,r,s,a,u,d;const f=su(ou(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,E=_1((s=f.mode)!==null&&s!==void 0?s:null);Ee(m&&v&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=y1(e);try{return new mg(t)}catch{return null}}}/**
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
 */class Ka{constructor(){this.providerId=Ka.PROVIDER_ID}static credential(e,t){return Au._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mg.parseLink(t);return Ee(r,"argument-error"),Au._fromEmailAndCode(e,r.code,r.tenantId)}}Ka.PROVIDER_ID="password";Ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ku extends lI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ki extends Ku{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ki.credential(e.oauthAccessToken)}catch{return null}}}Ki.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ki.PROVIDER_ID="facebook.com";/**
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
 */class Qi extends Ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lo._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qi.credential(t,r)}catch{return null}}}Qi.GOOGLE_SIGN_IN_METHOD="google.com";Qi.PROVIDER_ID="google.com";/**
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
 */class Yi extends Ku{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yi.credential(e.oauthAccessToken)}catch{return null}}}Yi.GITHUB_SIGN_IN_METHOD="github.com";Yi.PROVIDER_ID="github.com";/**
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
 */class Xi extends Ku{constructor(){super("twitter.com")}static credential(e,t){return lo._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xi.credentialFromTaggedObject(e)}static credentialFromError(e){return Xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Xi.credential(t,r)}catch{return null}}}Xi.TWITTER_SIGN_IN_METHOD="twitter.com";Xi.PROVIDER_ID="twitter.com";/**
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
 */class xa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await hr._fromIdTokenResponse(e,r,s),u=wE(r);return new xa({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=wE(r);return new xa({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function wE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Jh extends Ur{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Jh(e,t,r,s)}}function uI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Jh._fromErrorAndOperation(n,a,e,r):a})}async function v1(n,e,t=!1){const r=await Ru(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xa._forOperation(n,"link",r)}/**
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
 */async function E1(n,e,t=!1){const{auth:r}=n;if(Dn(r.app))return Promise.reject(ns(r));const s="reauthenticate";try{const a=await Ru(n,uI(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const u=dg(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),xa._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&pr(r,"user-mismatch"),a}}/**
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
 */async function cI(n,e,t=!1){if(Dn(n.app))return Promise.reject(ns(n));const r="signIn",s=await uI(n,r,e),a=await xa._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function w1(n,e){return cI(Ga(n),e)}/**
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
 */async function T1(n){const e=Ga(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function I1(n,e,t){return Dn(n.app)?Promise.reject(ns(n)):w1(Ge(n),Ka.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&T1(n),r})}/**
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
 */function S1(n,e){return Ge(n).setPersistence(e)}function C1(n,e,t,r){return Ge(n).onIdTokenChanged(e,t,r)}function R1(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function A1(n,e,t,r){return Ge(n).onAuthStateChanged(e,t,r)}function k1(n){return Ge(n).signOut()}const Zh="__sak";/**
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
 */class hI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zh,"1"),this.storage.removeItem(Zh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const P1=1e3,N1=10;class dI extends hI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);Gk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,N1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},P1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dI.type="LOCAL";const fI=dI;/**
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
 */class pI extends hI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pI.type="SESSION";const mI=pI;/**
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
 */function x1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ld{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ld(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await x1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ld.receivers=[];/**
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
 */function gg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class D1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=gg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Nr(){return window}function b1(n){Nr().location.href=n}/**
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
 */function gI(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function O1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function M1(){return gI()?self:null}/**
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
 */const _I="firebaseLocalStorageDb",V1=1,ed="firebaseLocalStorage",yI="fbase_key";class Qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Md(n,e){return n.transaction([ed],e?"readwrite":"readonly").objectStore(ed)}function F1(){const n=indexedDB.deleteDatabase(_I);return new Qu(n).toPromise()}function vm(){const n=indexedDB.open(_I,V1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ed,{keyPath:yI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ed)?e(r):(r.close(),await F1(),e(await vm()))})})}async function TE(n,e,t){const r=Md(n,!0).put({[yI]:e,value:t});return new Qu(r).toPromise()}async function U1(n,e){const t=Md(n,!1).get(e),r=await new Qu(t).toPromise();return r===void 0?null:r.value}function IE(n,e){const t=Md(n,!0).delete(e);return new Qu(t).toPromise()}const j1=800,B1=3;class vI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>B1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ld._getInstance(M1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await O1(),!this.activeServiceWorker)return;this.sender=new D1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await TE(e,Zh,"1"),await IE(e,Zh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>TE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>U1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>IE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Md(s,!1).getAll();return new Qu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vI.type="LOCAL";const z1=vI;new Gu(3e4,6e4);/**
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
 */function $1(n,e){return e?li(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _g extends pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function W1(n){return cI(n.auth,new _g(n),n.bypassAuthState)}function H1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),E1(t,new _g(n),n.bypassAuthState)}async function q1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),v1(t,new _g(n),n.bypassAuthState)}/**
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
 */class EI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W1;case"linkViaPopup":case"linkViaRedirect":return q1;case"reauthViaPopup":case"reauthViaRedirect":return H1;default:pr(this.auth,"internal-error")}}resolve(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const G1=new Gu(2e3,1e4);class Ea extends EI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Ea.currentPopupAction&&Ea.currentPopupAction.cancel(),Ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){gi(this.filter.length===1,"Popup operations only handle one event");const e=gg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G1.get())};e()}}Ea.currentPopupAction=null;/**
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
 */const K1="pendingRedirect",Lh=new Map;class Q1 extends EI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Lh.get(this.auth._key());if(!e){try{const r=await Y1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Lh.set(this.auth._key(),e)}return this.bypassAuthState||Lh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y1(n,e){const t=Z1(e),r=J1(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function X1(n,e){Lh.set(n._key(),e)}function J1(n){return li(n._redirectPersistence)}function Z1(n){return Oh(K1,n.config.apiKey,n.name)}async function eP(n,e,t=!1){if(Dn(n.app))return Promise.reject(ns(n));const r=Ga(n),s=$1(r,e),u=await new Q1(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const tP=600*1e3;class nP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Pr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tP&&this.cachedEventUids.clear(),this.cachedEventUids.has(SE(e))}saveEventToCache(e){this.cachedEventUids.add(SE(e)),this.lastProcessedEventTime=Date.now()}}function SE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wI(n);default:return!1}}/**
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
 */async function iP(n,e={}){return vs(n,"GET","/v1/projects",e)}/**
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
 */const sP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oP=/^https?/;async function aP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await iP(n);for(const t of e)try{if(lP(t))return}catch{}pr(n,"unauthorized-domain")}function lP(n){const e=_m(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!oP.test(t))return!1;if(sP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uP=new Gu(3e4,6e4);function CE(){const n=Nr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cP(n){return new Promise((e,t)=>{var r,s,a;function u(){CE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{CE(),t(Pr(n,"network-request-failed"))},timeout:uP.get()})}if(!((s=(r=Nr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Nr().gapi)===null||a===void 0)&&a.load)u();else{const d=n1("iframefcb");return Nr()[d]=()=>{gapi.load?u():t(Pr(n,"network-request-failed"))},sI(`${t1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Mh=null,e})}let Mh=null;function hP(n){return Mh=Mh||cP(n),Mh}/**
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
 */const dP=new Gu(5e3,15e3),fP="__/auth/iframe",pP="emulator/auth/iframe",mP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _P(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hg(e,pP):`https://${n.config.authDomain}/${fP}`,r={apiKey:e.apiKey,appName:n.name,v:ys},s=gP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${qa(r).slice(1)}`}async function yP(n){const e=await hP(n),t=Nr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:_P(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Pr(n,"network-request-failed"),d=Nr().setTimeout(()=>{a(u)},dP.get());function f(){Nr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const vP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EP=500,wP=600,TP="_blank",IP="http://localhost";class RE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SP(n,e,t,r=EP,s=wP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},vP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=sn().toLowerCase();t&&(d=JT(m)?TP:t),YT(m)&&(e=e||IP,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[x,V])=>`${T}${x}=${V},`,"");if(qk(m)&&d!=="_self")return CP(e||"",d),new RE(null);const E=window.open(e||"",d,v);Ee(E,n,"popup-blocked");try{E.focus()}catch{}return new RE(E)}function CP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const RP="__/auth/handler",AP="emulator/auth/handler",kP=encodeURIComponent("fac");async function AE(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ys,eventId:s};if(e instanceof lI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",qh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof Ku){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${kP}=${encodeURIComponent(f)}`:"";return`${PP(n)}?${qa(d).slice(1)}${m}`}function PP({config:n}){return n.emulator?hg(n,AP):`https://${n.authDomain}/${RP}`}/**
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
 */const Xp="webStorageSupport";class NP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mI,this._completeRedirectFn=eP,this._overrideRedirectResult=X1}async _openPopup(e,t,r,s){var a;gi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await AE(e,t,r,_m(),s);return SP(e,u,gg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await AE(e,t,r,_m(),s);return b1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(gi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await yP(e),r=new nP(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xp,{type:Xp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Xp];u!==void 0&&t(!!u),pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rI()||XT()||fg()}}const xP=NP;var kE="@firebase/auth",PE="1.10.8";/**
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
 */class DP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OP(n){ls(new pi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iI(n)},m=new Jk(r,s,a,f);return l1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ls(new pi("auth-internal",e=>{const t=Ga(e.getProvider("auth").getImmediate());return(r=>new DP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(kE,PE,bP(n)),Kn(kE,PE,"esm2017")}/**
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
 */const LP=300,MP=OT("authIdTokenMaxAge")||LP;let NE=null;const VP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>MP)return;const s=t==null?void 0:t.token;NE!==s&&(NE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FP(n=Dd()){const e=qu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=a1(n,{popupRedirectResolver:xP,persistence:[z1,fI,mI]}),r=OT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=VP(a.toString());R1(t,u,()=>u(t.currentUser)),C1(t,d=>u(d))}}const s=DT("auth");return s&&u1(t,`http://${s}`),t}function UP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Zk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Pr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",UP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OP("Browser");var xE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,TI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function R(){}R.prototype=S.prototype,O.D=S.prototype,O.prototype=new R,O.prototype.constructor=O,O.C=function(N,b,M){for(var k=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)k[Ke-2]=arguments[Ke];return S.prototype[b].apply(N,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(O,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)N[b]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(b=0;16>b;++b)N[b]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=O.g[0],R=O.g[1],b=O.g[2];var M=O.g[3],k=S+(M^R&(b^M))+N[0]+3614090360&4294967295;S=R+(k<<7&4294967295|k>>>25),k=M+(b^S&(R^b))+N[1]+3905402710&4294967295,M=S+(k<<12&4294967295|k>>>20),k=b+(R^M&(S^R))+N[2]+606105819&4294967295,b=M+(k<<17&4294967295|k>>>15),k=R+(S^b&(M^S))+N[3]+3250441966&4294967295,R=b+(k<<22&4294967295|k>>>10),k=S+(M^R&(b^M))+N[4]+4118548399&4294967295,S=R+(k<<7&4294967295|k>>>25),k=M+(b^S&(R^b))+N[5]+1200080426&4294967295,M=S+(k<<12&4294967295|k>>>20),k=b+(R^M&(S^R))+N[6]+2821735955&4294967295,b=M+(k<<17&4294967295|k>>>15),k=R+(S^b&(M^S))+N[7]+4249261313&4294967295,R=b+(k<<22&4294967295|k>>>10),k=S+(M^R&(b^M))+N[8]+1770035416&4294967295,S=R+(k<<7&4294967295|k>>>25),k=M+(b^S&(R^b))+N[9]+2336552879&4294967295,M=S+(k<<12&4294967295|k>>>20),k=b+(R^M&(S^R))+N[10]+4294925233&4294967295,b=M+(k<<17&4294967295|k>>>15),k=R+(S^b&(M^S))+N[11]+2304563134&4294967295,R=b+(k<<22&4294967295|k>>>10),k=S+(M^R&(b^M))+N[12]+1804603682&4294967295,S=R+(k<<7&4294967295|k>>>25),k=M+(b^S&(R^b))+N[13]+4254626195&4294967295,M=S+(k<<12&4294967295|k>>>20),k=b+(R^M&(S^R))+N[14]+2792965006&4294967295,b=M+(k<<17&4294967295|k>>>15),k=R+(S^b&(M^S))+N[15]+1236535329&4294967295,R=b+(k<<22&4294967295|k>>>10),k=S+(b^M&(R^b))+N[1]+4129170786&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^b&(S^R))+N[6]+3225465664&4294967295,M=S+(k<<9&4294967295|k>>>23),k=b+(S^R&(M^S))+N[11]+643717713&4294967295,b=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(b^M))+N[0]+3921069994&4294967295,R=b+(k<<20&4294967295|k>>>12),k=S+(b^M&(R^b))+N[5]+3593408605&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^b&(S^R))+N[10]+38016083&4294967295,M=S+(k<<9&4294967295|k>>>23),k=b+(S^R&(M^S))+N[15]+3634488961&4294967295,b=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(b^M))+N[4]+3889429448&4294967295,R=b+(k<<20&4294967295|k>>>12),k=S+(b^M&(R^b))+N[9]+568446438&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^b&(S^R))+N[14]+3275163606&4294967295,M=S+(k<<9&4294967295|k>>>23),k=b+(S^R&(M^S))+N[3]+4107603335&4294967295,b=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(b^M))+N[8]+1163531501&4294967295,R=b+(k<<20&4294967295|k>>>12),k=S+(b^M&(R^b))+N[13]+2850285829&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^b&(S^R))+N[2]+4243563512&4294967295,M=S+(k<<9&4294967295|k>>>23),k=b+(S^R&(M^S))+N[7]+1735328473&4294967295,b=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(b^M))+N[12]+2368359562&4294967295,R=b+(k<<20&4294967295|k>>>12),k=S+(R^b^M)+N[5]+4294588738&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^b)+N[8]+2272392833&4294967295,M=S+(k<<11&4294967295|k>>>21),k=b+(M^S^R)+N[11]+1839030562&4294967295,b=M+(k<<16&4294967295|k>>>16),k=R+(b^M^S)+N[14]+4259657740&4294967295,R=b+(k<<23&4294967295|k>>>9),k=S+(R^b^M)+N[1]+2763975236&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^b)+N[4]+1272893353&4294967295,M=S+(k<<11&4294967295|k>>>21),k=b+(M^S^R)+N[7]+4139469664&4294967295,b=M+(k<<16&4294967295|k>>>16),k=R+(b^M^S)+N[10]+3200236656&4294967295,R=b+(k<<23&4294967295|k>>>9),k=S+(R^b^M)+N[13]+681279174&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^b)+N[0]+3936430074&4294967295,M=S+(k<<11&4294967295|k>>>21),k=b+(M^S^R)+N[3]+3572445317&4294967295,b=M+(k<<16&4294967295|k>>>16),k=R+(b^M^S)+N[6]+76029189&4294967295,R=b+(k<<23&4294967295|k>>>9),k=S+(R^b^M)+N[9]+3654602809&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^b)+N[12]+3873151461&4294967295,M=S+(k<<11&4294967295|k>>>21),k=b+(M^S^R)+N[15]+530742520&4294967295,b=M+(k<<16&4294967295|k>>>16),k=R+(b^M^S)+N[2]+3299628645&4294967295,R=b+(k<<23&4294967295|k>>>9),k=S+(b^(R|~M))+N[0]+4096336452&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~b))+N[7]+1126891415&4294967295,M=S+(k<<10&4294967295|k>>>22),k=b+(S^(M|~R))+N[14]+2878612391&4294967295,b=M+(k<<15&4294967295|k>>>17),k=R+(M^(b|~S))+N[5]+4237533241&4294967295,R=b+(k<<21&4294967295|k>>>11),k=S+(b^(R|~M))+N[12]+1700485571&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~b))+N[3]+2399980690&4294967295,M=S+(k<<10&4294967295|k>>>22),k=b+(S^(M|~R))+N[10]+4293915773&4294967295,b=M+(k<<15&4294967295|k>>>17),k=R+(M^(b|~S))+N[1]+2240044497&4294967295,R=b+(k<<21&4294967295|k>>>11),k=S+(b^(R|~M))+N[8]+1873313359&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~b))+N[15]+4264355552&4294967295,M=S+(k<<10&4294967295|k>>>22),k=b+(S^(M|~R))+N[6]+2734768916&4294967295,b=M+(k<<15&4294967295|k>>>17),k=R+(M^(b|~S))+N[13]+1309151649&4294967295,R=b+(k<<21&4294967295|k>>>11),k=S+(b^(R|~M))+N[4]+4149444226&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~b))+N[11]+3174756917&4294967295,M=S+(k<<10&4294967295|k>>>22),k=b+(S^(M|~R))+N[2]+718787259&4294967295,b=M+(k<<15&4294967295|k>>>17),k=R+(M^(b|~S))+N[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(b+(k<<21&4294967295|k>>>11))&4294967295,O.g[2]=O.g[2]+b&4294967295,O.g[3]=O.g[3]+M&4294967295}r.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var R=S-this.blockSize,N=this.B,b=this.h,M=0;M<S;){if(b==0)for(;M<=R;)s(this,O,M),M+=this.blockSize;if(typeof O=="string"){for(;M<S;)if(N[b++]=O.charCodeAt(M++),b==this.blockSize){s(this,N),b=0;break}}else for(;M<S;)if(N[b++]=O[M++],b==this.blockSize){s(this,N),b=0;break}}this.h=b,this.o+=S},r.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var R=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=R&255,R/=256;for(this.u(O),O=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)O[R++]=this.g[S]>>>N&255;return O};function a(O,S){var R=d;return Object.prototype.hasOwnProperty.call(R,O)?R[O]:R[O]=S(O)}function u(O,S){this.h=S;for(var R=[],N=!0,b=O.length-1;0<=b;b--){var M=O[b]|0;N&&M==S||(R[b]=M,N=!1)}this.g=R}var d={};function f(O){return-128<=O&&128>O?a(O,function(S){return new u([S|0],0>S?-1:0)}):new u([O|0],0>O?-1:0)}function m(O){if(isNaN(O)||!isFinite(O))return E;if(0>O)return B(m(-O));for(var S=[],R=1,N=0;O>=R;N++)S[N]=O/R|0,R*=4294967296;return new u(S,0)}function v(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return B(v(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=m(Math.pow(S,8)),N=E,b=0;b<O.length;b+=8){var M=Math.min(8,O.length-b),k=parseInt(O.substring(b,b+M),S);8>M?(M=m(Math.pow(S,M)),N=N.j(M).add(m(k))):(N=N.j(R),N=N.add(m(k)))}return N}var E=f(0),T=f(1),x=f(16777216);n=u.prototype,n.m=function(){if(j(this))return-B(this).m();for(var O=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);O+=(0<=N?N:4294967296+N)*S,S*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(V(this))return"0";if(j(this))return"-"+B(this).toString(O);for(var S=m(Math.pow(O,6)),R=this,N="";;){var b=q(R,S).g;R=Z(R,b.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(O);if(R=b,V(R))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function V(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function j(O){return O.h==-1}n.l=function(O){return O=Z(this,O),j(O)?-1:V(O)?0:1};function B(O){for(var S=O.g.length,R=[],N=0;N<S;N++)R[N]=~O.g[N];return new u(R,~O.h).add(T)}n.abs=function(){return j(this)?B(this):this},n.add=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],N=0,b=0;b<=S;b++){var M=N+(this.i(b)&65535)+(O.i(b)&65535),k=(M>>>16)+(this.i(b)>>>16)+(O.i(b)>>>16);N=k>>>16,M&=65535,k&=65535,R[b]=k<<16|M}return new u(R,R[R.length-1]&-2147483648?-1:0)};function Z(O,S){return O.add(B(S))}n.j=function(O){if(V(this)||V(O))return E;if(j(this))return j(O)?B(this).j(B(O)):B(B(this).j(O));if(j(O))return B(this.j(B(O)));if(0>this.l(x)&&0>O.l(x))return m(this.m()*O.m());for(var S=this.g.length+O.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var b=0;b<O.g.length;b++){var M=this.i(N)>>>16,k=this.i(N)&65535,Ke=O.i(b)>>>16,At=O.i(b)&65535;R[2*N+2*b]+=k*At,K(R,2*N+2*b),R[2*N+2*b+1]+=M*At,K(R,2*N+2*b+1),R[2*N+2*b+1]+=k*Ke,K(R,2*N+2*b+1),R[2*N+2*b+2]+=M*Ke,K(R,2*N+2*b+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new u(R,0)};function K(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function ne(O,S){this.g=O,this.h=S}function q(O,S){if(V(S))throw Error("division by zero");if(V(O))return new ne(E,E);if(j(O))return S=q(B(O),S),new ne(B(S.g),B(S.h));if(j(S))return S=q(O,B(S)),new ne(B(S.g),S.h);if(30<O.g.length){if(j(O)||j(S))throw Error("slowDivide_ only works with positive integers.");for(var R=T,N=S;0>=N.l(O);)R=Ie(R),N=Ie(N);var b=de(R,1),M=de(N,1);for(N=de(N,2),R=de(R,2);!V(N);){var k=M.add(N);0>=k.l(O)&&(b=b.add(R),M=k),N=de(N,1),R=de(R,1)}return S=Z(O,b.j(S)),new ne(b,S)}for(b=E;0<=O.l(S);){for(R=Math.max(1,Math.floor(O.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=m(R),k=M.j(S);j(k)||0<k.l(O);)R-=N,M=m(R),k=M.j(S);V(M)&&(M=T),b=b.add(M),O=Z(O,k)}return new ne(b,O)}n.A=function(O){return q(this,O).h},n.and=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&O.i(N);return new u(R,this.h&O.h)},n.or=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|O.i(N);return new u(R,this.h|O.h)},n.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^O.i(N);return new u(R,this.h^O.h)};function Ie(O){for(var S=O.g.length+1,R=[],N=0;N<S;N++)R[N]=O.i(N)<<1|O.i(N-1)>>>31;return new u(R,O.h)}function de(O,S){var R=S>>5;S%=32;for(var N=O.g.length-R,b=[],M=0;M<N;M++)b[M]=0<S?O.i(M+R)>>>S|O.i(M+R+1)<<32-S:O.i(M+R);return new u(b,O.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,rs=u}).apply(typeof xE<"u"?xE:typeof self<"u"?self:typeof window<"u"?window:{});var Ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var II,au,SI,Vh,Em,CI,RI,AI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ih=="object"&&Ih];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var F=c[I];if(!(F in y))break e;y=y[F]}c=c[c.length-1],I=y[c],g=g(I),g!=I&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,I=!1,F={next:function(){if(!I&&y<c.length){var H=y++;return{value:g(H,c[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function E(c,g,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function T(c,g,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function x(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function V(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,F,H){for(var re=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)re[Qe-2]=arguments[Qe];return g.prototype[F].apply(I,re)}}function j(c){const g=c.length;if(0<g){const y=Array(g);for(let I=0;I<g;I++)y[I]=c[I];return y}return[]}function B(c,g){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const F=c.length||0,H=I.length||0;c.length=F+H;for(let re=0;re<H;re++)c[F+re]=I[re]}else c.push(I)}}class Z{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(c){return/^[\s\xa0]*$/.test(c)}function ne(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function q(c){return q[" "](c),c}q[" "]=function(){};var Ie=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function de(c,g,y){for(const I in c)g.call(y,c[I],I,c)}function O(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function S(c){const g={};for(const y in c)g[y]=c[y];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let y,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(y in I)c[y]=I[y];for(let H=0;H<R.length;H++)y=R[H],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function b(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function M(c){d.setTimeout(()=>{throw c},0)}function k(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Ke{constructor(){this.h=this.g=null}add(g,y){const I=At.get();I.set(g,y),this.h?this.h.next=I:this.g=I,this.h=I}}var At=new Z(()=>new kt,c=>c.reset());class kt{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ie=!1,ge=new Ke,oe=()=>{const c=d.Promise.resolve(void 0);He=()=>{c.then(P)}};var P=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(y){M(y)}var g=At;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ie=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c})();function Ne(c,g){if(fe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ie){e:{try{q(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ne.aa.h.call(this)}}V(Ne,fe);var Ve={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Ze(c,g,y,I,F){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!I,this.ha=F,this.key=++$e,this.da=this.fa=!1}function Lt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Br(c){this.src=c,this.g={},this.h=0}Br.prototype.add=function(c,g,y,I,F){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var re=Ti(c,g,I,F);return-1<re?(g=c[re],y||(g.fa=!1)):(g=new Ze(g,this.src,H,!!I,F),g.fa=y,c.push(g)),g};function Io(c,g){var y=g.type;if(y in c.g){var I=c.g[y],F=Array.prototype.indexOf.call(I,g,void 0),H;(H=0<=F)&&Array.prototype.splice.call(I,F,1),H&&(Lt(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Ti(c,g,y,I){for(var F=0;F<c.length;++F){var H=c[F];if(!H.da&&H.listener==g&&H.capture==!!y&&H.ha==I)return F}return-1}var Is="closure_lm_"+(1e6*Math.random()|0),So={};function il(c,g,y,I,F){if(Array.isArray(g)){for(var H=0;H<g.length;H++)il(c,g[H],y,I,F);return null}return y=al(y),c&&c[ze]?c.K(g,y,m(I)?!!I.capture:!1,F):sl(c,g,y,!1,I,F)}function sl(c,g,y,I,F,H){if(!g)throw Error("Invalid event type");var re=m(F)?!!F.capture:!!F,Qe=Ro(c);if(Qe||(c[Is]=Qe=new Br(c)),y=Qe.add(g,y,I,re,H),y.proxy)return y;if(I=oc(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Ae||(F=re),F===void 0&&(F=!1),c.addEventListener(g.toString(),I,F);else if(c.attachEvent)c.attachEvent($r(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function oc(){function c(y){return g.call(c.src,c.listener,y)}const g=ol;return c}function Co(c,g,y,I,F){if(Array.isArray(g))for(var H=0;H<g.length;H++)Co(c,g[H],y,I,F);else I=m(I)?!!I.capture:!!I,y=al(y),c&&c[ze]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],y=Ti(H,y,I,F),-1<y&&(Lt(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=Ro(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ti(g,y,I,F)),(y=-1<c?g[c]:null)&&zr(y))}function zr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ze])Io(g.i,c);else{var y=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(y,I,c.capture):g.detachEvent?g.detachEvent($r(y),I):g.addListener&&g.removeListener&&g.removeListener(I),(y=Ro(g))?(Io(y,c),y.h==0&&(y.src=null,g[Is]=null)):Lt(c)}}}function $r(c){return c in So?So[c]:So[c]="on"+c}function ol(c,g){if(c.da)c=!0;else{g=new Ne(g,this);var y=c.listener,I=c.ha||c.src;c.fa&&zr(c),c=y.call(I,g)}return c}function Ro(c){return c=c[Is],c instanceof Br?c:null}var Ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(c){return typeof c=="function"?c:(c[Ao]||(c[Ao]=function(g){return c.handleEvent(g)}),c[Ao])}function Pt(){W.call(this),this.i=new Br(this),this.M=this,this.F=null}V(Pt,W),Pt.prototype[ze]=!0,Pt.prototype.removeEventListener=function(c,g,y,I){Co(this,c,g,y,I)};function Nt(c,g){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new fe(g,c);else if(g instanceof fe)g.target=g.target||c;else{var F=g;g=new fe(I,c),N(g,F)}if(F=!0,y)for(var H=y.length-1;0<=H;H--){var re=g.g=y[H];F=Wr(re,I,!0,g)&&F}if(re=g.g=c,F=Wr(re,I,!0,g)&&F,F=Wr(re,I,!1,g)&&F,y)for(H=0;H<y.length;H++)re=g.g=y[H],F=Wr(re,I,!1,g)&&F}Pt.prototype.N=function(){if(Pt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],I=0;I<y.length;I++)Lt(y[I]);delete c.g[g],c.h--}}this.F=null},Pt.prototype.K=function(c,g,y,I){return this.i.add(String(c),g,!1,y,I)},Pt.prototype.L=function(c,g,y,I){return this.i.add(String(c),g,!0,y,I)};function Wr(c,g,y,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,H=0;H<g.length;++H){var re=g[H];if(re&&!re.da&&re.capture==y){var Qe=re.listener,xt=re.ha||re.src;re.fa&&Io(c.i,re),F=Qe.call(xt,I)!==!1&&F}}return F&&!I.defaultPrevented}function ll(c,g,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Ii(c){c.g=ll(()=>{c.g=null,c.i&&(c.i=!1,Ii(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ss extends W{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(c){W.call(this),this.h=c,this.g={}}V(Cs,W);var ul=[];function cl(c){de(c.g,function(g,y){this.g.hasOwnProperty(y)&&zr(g)},c),c.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),cl(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hl=d.JSON.stringify,dl=d.JSON.parse,fl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Rs(){}Rs.prototype.h=null;function ko(c){return c.h||(c.h=c.i())}function Po(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){fe.call(this,"d")}V(gr,fe);function No(){fe.call(this,"c")}V(No,fe);var _r={},pl=null;function As(){return pl=pl||new Pt}_r.La="serverreachability";function ml(c){fe.call(this,_r.La,c)}V(ml,fe);function Hr(c){const g=As();Nt(g,new ml(g))}_r.STAT_EVENT="statevent";function gl(c,g){fe.call(this,_r.STAT_EVENT,c),this.stat=g}V(gl,fe);function mt(c){const g=As();Nt(g,new gl(g,c))}_r.Ma="timingevent";function xo(c,g){fe.call(this,_r.Ma,c),this.size=g}V(xo,fe);function Qn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function Ps(c,g,y,I,F,H){c.info(function(){if(c.g)if(H)for(var re="",Qe=H.split("&"),xt=0;xt<Qe.length;xt++){var Fe=Qe[xt].split("=");if(1<Fe.length){var Mt=Fe[0];Fe=Fe[1];var vt=Mt.split("_");re=2<=vt.length&&vt[1]=="type"?re+(Mt+"="+Fe+"&"):re+(Mt+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+g+`
`+y+`
`+re})}function Do(c,g,y,I,F,H,re){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+g+`
`+y+`
`+H+" "+re})}function Yn(c,g,y,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+pf(c,y)+(I?" "+I:"")})}function _l(c,g){c.info(function(){return"TIMEOUT: "+g})}ks.prototype.info=function(){};function pf(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var H=F[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return hl(y)}catch{return g}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ac={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function Ns(){}V(Ns,Rs),Ns.prototype.g=function(){return new XMLHttpRequest},Ns.prototype.i=function(){return{}},Xn=new Ns;function Jn(c,g,y,I){this.j=c,this.i=g,this.l=y,this.R=I||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lc}function lc(){this.i=null,this.g="",this.h=!1}var yl={},Oo={};function Lo(c,g,y){c.L=1,c.v=ki(Rn(g)),c.m=y,c.P=!0,vl(c,null)}function vl(c,g){c.F=Date.now(),et(c),c.A=Rn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Ni(y.i,"t",I),c.C=0,y=c.j.J,c.h=new lc,c.g=Rc(c.j,y?g:null,!c.m),0<c.O&&(c.M=new Ss(T(c.Y,c,c.g),c.O)),g=c.U,y=c.g,I=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(ul[0]=F.toString()),F=ul);for(var H=0;H<F.length;H++){var re=il(y,F[H],I||g.handleEvent,!1,g.h||g);if(!re)break;g.g[re.key]=re}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Hr(),Ps(c.i,c.u,c.A,c.l,c.R,c.m)}Jn.prototype.ca=function(c){c=c.target;const g=this.M;g&&fn(c)==3?g.j():this.Y(c)},Jn.prototype.Y=function(c){try{if(c==this.g)e:{const vt=fn(this.g);var g=this.g.Ba();const Fn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Cl(this.g)))){this.J||vt!=4||g==7||(g==8||0>=Fn?Hr(3):Hr(2)),xs(this);var y=this.g.Z();this.X=y;t:if(uc(this)){var I=Cl(this.g);c="";var F=I.length,H=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),Si(this);var re="";break t}this.h.i=new d.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(H&&g==F-1)});I.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=y==200,Do(this.i,this.u,this.A,this.l,this.R,vt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,xt=this.g;if((Qe=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Qe)){var Fe=Qe;break t}}Fe=null}if(y=Fe)Yn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,y);else{this.o=!1,this.s=3,mt(12),Mn(this),Si(this);break e}}if(this.P){y=!0;let kn;for(;!this.J&&this.C<re.length;)if(kn=mf(this,re),kn==Oo){vt==4&&(this.s=4,mt(14),y=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==yl){this.s=4,mt(15),Yn(this.i,this.l,re,"[Invalid Chunk]"),y=!1;break}else Yn(this.i,this.l,kn,null),El(this,kn);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||re.length!=0||this.h.h||(this.s=1,mt(16),y=!1),this.o=this.o&&y,!y)Yn(this.i,this.l,re,"[Invalid Chunked Response]"),Mn(this),Si(this);else if(0<re.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Al(Mt),Mt.M=!0,mt(11))}}else Yn(this.i,this.l,re,null),El(this,re);vt==4&&Mn(this),this.o&&!this.J&&(vt==4?qo(this.j,this):(this.o=!1,et(this)))}else Bo(this.g),y==400&&0<re.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Mn(this),Si(this)}}}catch{}finally{}};function uc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function mf(c,g){var y=c.C,I=g.indexOf(`
`,y);return I==-1?Oo:(y=Number(g.substring(y,I)),isNaN(y)?yl:(I+=1,I+y>g.length?Oo:(g=g.slice(I,I+y),c.C=I+y,g)))}Jn.prototype.cancel=function(){this.J=!0,Mn(this)};function et(c){c.S=Date.now()+c.I,cc(c,c.I)}function cc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Qn(T(c.ba,c),g)}function xs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Jn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(_l(this.i,this.A),this.L!=2&&(Hr(),mt(17)),Mn(this),this.s=2,Si(this)):cc(this,this.S-c)};function Si(c){c.j.G==0||c.J||qo(c.j,c)}function Mn(c){xs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,cl(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function El(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||an(y.h,c))){if(!c.K&&an(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Ho(y),rr(y);else break e;Wo(y),mt(18)}}else y.za=F[1],0<y.za-y.T&&37500>F[2]&&y.F&&y.v==0&&!y.C&&(y.C=Qn(T(y.Za,y),6e3));if(1>=dc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Yr(y,11)}else if((c.K||y.g==c)&&Ho(y),!K(g))for(F=y.Da.g.parse(g),g=0;g<F.length;g++){let Fe=F[g];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Mt=Fe[3];Mt!=null&&(y.la=Mt,y.j.info("VER="+y.la));const vt=Fe[4];vt!=null&&(y.Aa=vt,y.j.info("SVER="+y.Aa));const Fn=Fe[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(I=1.5*Fn,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const kn=c.g;if(kn){const Fs=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var H=I.h;H.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(wl(H,H.h),H.h=null))}if(I.D){const Ko=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ko&&(I.ya=Ko,Xe(I.I,I.D,Ko))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var re=c;if(I.qa=Cc(I,I.J?I.ia:null,I.W),re.K){fc(I.h,re);var Qe=re,xt=I.L;xt&&(Qe.I=xt),Qe.B&&(xs(Qe),et(Qe)),I.g=re}else Vs(I);0<y.i.length&&wr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Yr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Yr(y,7):Ht(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}Hr(4)}catch{}}var hc=class{constructor(c,g){this.g=c,this.map=g}};function Ds(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function dc(c){return c.h?1:c.g?c.g.size:0}function an(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function wl(c,g){c.g?c.g.add(g):c.h=g}function fc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ds.prototype.cancel=function(){if(this.i=pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function pc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return j(c.i)}function Mo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,I=0;I<y;I++)g.push(c[I]);return g}g=[],y=0;for(I in c)g[y++]=c[I];return g}function Vo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const I in c)g[y++]=I;return g}}}function Ci(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=Vo(c),I=Mo(c),F=I.length,H=0;H<F;H++)g.call(void 0,I[H],y&&y[H],c)}var bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gf(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),F=null;if(0<=I){var H=c[y].substring(0,I);F=c[y].substring(I+1)}else H=c[y];g(H,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function qr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof qr){this.h=c.h,Os(this,c.j),this.o=c.o,this.g=c.g,Ri(this,c.s),this.l=c.l;var g=c.i,y=new yr;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),Ai(this,y),this.m=c.m}else c&&(g=String(c).match(bs))?(this.h=!1,Os(this,g[1]||"",!0),this.o=Me(g[2]||""),this.g=Me(g[3]||"",!0),Ri(this,g[4]),this.l=Me(g[5]||"",!0),Ai(this,g[6]||"",!0),this.m=Me(g[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}qr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Pi(g,Fo,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Pi(g,Fo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Pi(y,y.charAt(0)=="/"?_c:gc,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Pi(y,Tl)),c.join("")};function Rn(c){return new qr(c)}function Os(c,g,y){c.j=y?Me(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ri(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ai(c,g,y){g instanceof yr?(c.i=g,vr(c.i,c.h)):(y||(g=Pi(g,yc)),c.i=new yr(g,c.h))}function Xe(c,g,y){c.i.set(g,y)}function ki(c){return Xe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Pi(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,mc),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Fo=/[#\/\?@]/g,gc=/[#\?:]/g,_c=/[#\?]/g,yc=/[#\?@]/g,Tl=/#/g;function yr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Wt(c){c.g||(c.g=new Map,c.h=0,c.i&&gf(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=yr.prototype,n.add=function(c,g){Wt(this),this.i=null,c=Vn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Zn(c,g){Wt(c),g=Vn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function er(c,g){return Wt(c),g=Vn(c,g),c.g.has(g)}n.forEach=function(c,g){Wt(this),this.g.forEach(function(y,I){y.forEach(function(F){c.call(g,F,I,this)},this)},this)},n.na=function(){Wt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let I=0;I<g.length;I++){const F=c[I];for(let H=0;H<F.length;H++)y.push(g[I])}return y},n.V=function(c){Wt(this);let g=[];if(typeof c=="string")er(this,c)&&(g=g.concat(this.g.get(Vn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},n.set=function(c,g){return Wt(this),this.i=null,c=Vn(this,c),er(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ni(c,g,y){Zn(c,g),0<y.length&&(c.i=null,c.g.set(Vn(c,g),j(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var I=g[y];const H=encodeURIComponent(String(I)),re=this.V(I);for(I=0;I<re.length;I++){var F=H;re[I]!==""&&(F+="="+encodeURIComponent(String(re[I]))),c.push(F)}}return this.i=c.join("&")};function Vn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function vr(c,g){g&&!c.j&&(Wt(c),c.i=null,c.g.forEach(function(y,I){var F=I.toLowerCase();I!=F&&(Zn(this,I),Ni(this,F,y))},c)),c.j=g}function _f(c,g){const y=new ks;if(d.Image){const I=new Image;I.onload=x(dn,y,"TestLoadImage: loaded",!0,g,I),I.onerror=x(dn,y,"TestLoadImage: error",!1,g,I),I.onabort=x(dn,y,"TestLoadImage: abort",!1,g,I),I.ontimeout=x(dn,y,"TestLoadImage: timeout",!1,g,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function vc(c,g){const y=new ks,I=new AbortController,F=setTimeout(()=>{I.abort(),dn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(H=>{clearTimeout(F),H.ok?dn(y,"TestPingServer: ok",!0,g):dn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),dn(y,"TestPingServer: error",!1,g)})}function dn(c,g,y,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(y)}catch{}}function yf(){this.g=new fl}function Ec(c,g,y){const I=y||"";try{Ci(c,function(F,H){let re=F;m(F)&&(re=hl(F)),g.push(I+H+"="+encodeURIComponent(re))})}catch(F){throw g.push(I+"type="+encodeURIComponent("_badmap")),F}}function Gr(c){this.l=c.Ub||null,this.j=c.eb||!1}V(Gr,Rs),Gr.prototype.g=function(){return new Ls(this.l,this.j)},Gr.prototype.i=(function(c){return function(){return c}})({});function Ls(c,g){Pt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ls,Pt),n=Ls.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,nr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function wc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?tr(this):nr(this),this.readyState==3&&wc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,tr(this))},n.Qa=function(c){this.g&&(this.response=c,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,nr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function nr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Kr(c){let g="";return de(c,function(y,I){g+=I,g+=":",g+=y,g+=`\r
`}),g}function xi(c,g,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=Kr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Xe(c,g,y))}function at(c){Pt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(at,Pt);var vf=/^https?$/i,Il=["POST","PUT"];n=at.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?ko(this.o):ko(Xn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){Ms(this,H);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)y.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())y.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Il,g,void 0))||I||F||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of y)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jo(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){Ms(this,H)}};function Ms(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Uo(c),An(c)}function Uo(c){c.A||(c.A=!0,Nt(c,"complete"),Nt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Nt(this,"complete"),Nt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sl(this):this.bb())},n.bb=function(){Sl(this)};function Sl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||fn(c)!=4||c.Z()!=2)){if(c.u&&fn(c)==4)ll(c.Ea,0,c);else if(Nt(c,"readystatechange"),fn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var I;if(I=re===0){var F=String(c.D).match(bs)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!vf.test(F?F.toLowerCase():"")}y=I}if(y)Nt(c,"complete"),Nt(c,"success");else{c.m=6;try{var H=2<fn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",Uo(c)}}finally{An(c)}}}}function An(c,g){if(c.g){jo(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Nt(c,"ready");try{y.onreadystatechange=I}catch{}}}function jo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function fn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),dl(g)}};function Cl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Bo(c){const g={};c=(c.g&&2<=fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(K(c[I]))continue;var y=b(c[I]);const F=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=g[F]||[];g[F]=H,H.push(y)}O(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function Rl(c){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,c),this.cb=Er("retryDelaySeedMs",1e4,c),this.Wa=Er("forwardChannelMaxRetries",2,c),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ds(c&&c.concurrentRequestLimit),this.Da=new yf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rl.prototype,n.la=8,n.G=1,n.connect=function(c,g,y,I){mt(0),this.W=c,this.H=g||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=Cc(this,null,this.W),wr(this)};function Ht(c){if(zo(c),c.G==3){var g=c.U++,y=Rn(c.I);if(Xe(y,"SID",c.K),Xe(y,"RID",g),Xe(y,"TYPE","terminate"),Qr(c,y),g=new Jn(c,c.j,g),g.L=2,g.v=ki(Rn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=Rc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),et(g)}Sc(c)}function rr(c){c.g&&(Al(c),c.g.cancel(),c.g=null)}function zo(c){rr(c),c.u&&(d.clearTimeout(c.u),c.u=null),Ho(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function wr(c){if(!Cn(c.h)&&!c.s){c.s=!0;var g=c.Ga;He||oe(),ie||(He(),ie=!0),ge.add(g,c),c.B=0}}function Ef(c,g){return dc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Qn(T(c.Ga,c,g),Ic(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Jn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(F.H=H,H=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Di(this,F,g),y=Rn(this.I),Xe(y,"RID",c),Xe(y,"CVER",22),this.D&&Xe(y,"X-HTTP-Session-Id",this.D),Qr(this,y),H&&(this.O?g="headers="+encodeURIComponent(String(Kr(H)))+"&"+g:this.m&&xi(y,this.m,H)),wl(this.h,F),this.Ua&&Xe(y,"TYPE","init"),this.P?(Xe(y,"$req",g),Xe(y,"SID","null"),F.T=!0,Lo(F,y,null)):Lo(F,y,g),this.G=2}}else this.G==3&&(c?$o(this,c):this.i.length==0||Cn(this.h)||$o(this))};function $o(c,g){var y;g?y=g.l:y=c.U++;const I=Rn(c.I);Xe(I,"SID",c.K),Xe(I,"RID",y),Xe(I,"AID",c.T),Qr(c,I),c.m&&c.o&&xi(I,c.m,c.o),y=new Jn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Di(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),wl(c.h,y),Lo(y,I,g)}function Qr(c,g){c.H&&de(c.H,function(y,I){Xe(g,I,y)}),c.l&&Ci({},function(y,I){Xe(g,I,y)})}function Di(c,g,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var F=c.i;let H=-1;for(;;){const re=["count="+y];H==-1?0<y?(H=F[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let Qe=!0;for(let xt=0;xt<y;xt++){let Fe=F[xt].g;const Mt=F[xt].map;if(Fe-=H,0>Fe)H=Math.max(0,F[xt].g-100),Qe=!1;else try{Ec(Mt,re,"req"+Fe+"_")}catch{I&&I(Mt)}}if(Qe){I=re.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,I}function Vs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;He||oe(),ie||(He(),ie=!0),ge.add(g,c),c.v=0}}function Wo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Qn(T(c.Fa,c),Ic(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Tc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Qn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),rr(this),Tc(this))};function Al(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Tc(c){c.g=new Jn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Rn(c.qa);Xe(g,"RID","rpc"),Xe(g,"SID",c.K),Xe(g,"AID",c.T),Xe(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Xe(g,"TO",c.ja),Xe(g,"TYPE","xmlhttp"),Qr(c,g),c.m&&c.o&&xi(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=ki(Rn(g)),y.m=null,y.P=!0,vl(y,c)}n.Za=function(){this.C!=null&&(this.C=null,rr(this),Wo(this),mt(19))};function Ho(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function qo(c,g){var y=null;if(c.g==g){Ho(c),Al(c),c.g=null;var I=2}else if(an(c.h,g))y=g.D,fc(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;I=As(),Nt(I,new xo(I,y)),wr(c)}else Vs(c);else if(F=g.s,F==3||F==0&&0<g.X||!(I==1&&Ef(c,g)||I==2&&Wo(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),F){case 1:Yr(c,5);break;case 4:Yr(c,10);break;case 3:Yr(c,6);break;default:Yr(c,2)}}}function Ic(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function Yr(c,g){if(c.j.info("Error code "+g),g==2){var y=T(c.fb,c),I=c.Xa;const F=!I;I=new qr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Os(I,"https"),ki(I),F?_f(I.toString(),y):vc(I.toString(),y)}else mt(2);c.G=0,c.l&&c.l.sa(g),Sc(c),zo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Sc(c){if(c.G=0,c.ka=[],c.l){const g=pc(c.h);(g.length!=0||c.i.length!=0)&&(B(c.ka,g),B(c.ka,c.i),c.h.i.length=0,j(c.i),c.i.length=0),c.l.ra()}}function Cc(c,g,y){var I=y instanceof qr?Rn(y):new qr(y);if(I.g!="")g&&(I.g=g+"."+I.g),Ri(I,I.s);else{var F=d.location;I=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var H=new qr(null);I&&Os(H,I),g&&(H.g=g),F&&Ri(H,F),y&&(H.l=y),I=H}return y=c.D,g=c.ya,y&&g&&Xe(I,y,g),Xe(I,"VER",c.la),Qr(c,I),I}function Rc(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new at(new Gr({eb:y})):new at(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}n=kl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Go(){}Go.prototype.g=function(c,g){return new ln(c,g)};function ln(c,g){Pt.call(this),this.g=new Rl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!K(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!K(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Tr(this)}V(ln,Pt),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){Ht(this.g)},ln.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=hl(c),c=y);g.i.push(new hc(g.Ya++,c)),g.G==3&&wr(g)},ln.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,ln.aa.N.call(this)};function Ac(c){gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}V(Ac,gr);function kc(){No.call(this),this.status=1}V(kc,No);function Tr(c){this.g=c}V(Tr,kl),Tr.prototype.ua=function(){Nt(this.g,"a")},Tr.prototype.ta=function(c){Nt(this.g,new Ac(c))},Tr.prototype.sa=function(c){Nt(this.g,new kc)},Tr.prototype.ra=function(){Nt(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,AI=function(){return new Go},RI=function(){return As()},CI=_r,Em={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,Vh=bo,ac.COMPLETE="complete",SI=ac,Po.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",Pt.prototype.listen=Pt.prototype.K,au=Po,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,II=at}).apply(typeof Ih<"u"?Ih:typeof self<"u"?self:typeof window<"u"?window:{});const DE="@firebase/firestore",bE="4.8.0";/**
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
 */class nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
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
 */let Qa="11.10.0";/**
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
 */const uo=new xd("@firebase/firestore");function ga(){return uo.logLevel}function ue(n,...e){if(uo.logLevel<=Oe.DEBUG){const t=e.map(yg);uo.debug(`Firestore (${Qa}): ${n}`,...t)}}function _i(n,...e){if(uo.logLevel<=Oe.ERROR){const t=e.map(yg);uo.error(`Firestore (${Qa}): ${n}`,...t)}}function us(n,...e){if(uo.logLevel<=Oe.WARN){const t=e.map(yg);uo.warn(`Firestore (${Qa}): ${n}`,...t)}}function yg(n){if(typeof n=="string")return n;try{/**
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
 */function we(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,kI(n,r,t)}function kI(n,e,t){let r=`FIRESTORE (${Qa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _i(r),new Error(r)}function qe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||kI(e,s,r)}function Re(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class PI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(nn.UNAUTHENTICATED)))}shutdown(){}}class BP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zP{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new is;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new is,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new is)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string",31837,{l:r}),new PI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class $P{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WP{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new $P(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(nn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class OE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new OE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new OE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function NI(){return new TextEncoder}/**
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
 */class vg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qP(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function wm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ke(r,s);{const a=NI(),u=GP(a.encode(LE(n,t)),a.encode(LE(e,t)));return u!==0?u:ke(r,s)}}t+=r>65535?2:1}return ke(n.length,e.length)}function LE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function GP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ke(n[t],e[t]);return ke(n.length,e.length)}function Da(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const ME="__name__";class Ar{constructor(e,t,r){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&we(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Ar.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return ke(e.length,t.length)}static compareSegments(e,t){const r=Ar.isNumericId(e),s=Ar.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ar.extractNumericId(e).compare(Ar.extractNumericId(t)):wm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rs.fromString(e.substring(4,e.length-2))}}class nt extends Ar{construct(e,t,r){return new nt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new nt(t)}static emptyPath(){return new nt([])}}const KP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Ar{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return KP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ME}static keyField(){return new Qt([ME])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new se(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new se(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new se(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new se(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(nt.fromString(e))}static fromName(e){return new _e(nt.fromString(e).popFirst(5))}static empty(){return new _e(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new nt(e.slice()))}}/**
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
 */function xI(n,e,t){if(!t)throw new se(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function QP(n,e,t,r){if(e===!0&&r===!0)throw new se(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function VE(n){if(!_e.isDocumentKey(n))throw new se(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function FE(n){if(_e.isDocumentKey(n))throw new se(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function DI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Vd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function hi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vd(n);throw new se(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function YP(n,e){if(e<=0)throw new se(G.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function St(n,e){const t={typeString:n};return e&&(t.value=e),t}function Yu(n,e){if(!DI(n))throw new se(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new se(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const UE=-62135596800,jE=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*jE);return new ot(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<UE)throw new se(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jE}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yu(e,ot._jsonSchema))return new ot(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-UE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:St("string",ot._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new ot(0,0))}static max(){return new Ce(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ku=-1;function XP(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ce.fromTimestamp(r===1e9?new ot(t+1,0):new ot(t,r));return new cs(s,_e.empty(),e)}function JP(n){return new cs(n.readTime,n.key,ku)}class cs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cs(Ce.min(),_e.empty(),ku)}static max(){return new cs(Ce.max(),_e.empty(),ku)}}function ZP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
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
 */const eN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ya(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==eN)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,r)=>{t(e)}))}static reject(e){return new Q(((t,r)=>{r(e)}))}static waitFor(e){return new Q(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Q.resolve(!1);for(const r of e)t=t.next((s=>s?Q.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Q(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((v=>{u[m]=v,++d,d===a&&r(u)}),(v=>s(v)))}}))}static doWhile(e,t){return new Q(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function nN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Fd.ue=-1;/**
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
 */const Eg=-1;function Ud(n){return n==null}function td(n){return n===0&&1/n==-1/0}function rN(n){return typeof n=="number"&&Number.isInteger(n)&&!td(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const bI="";function iN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=BE(e)),e=sN(n.get(t),e);return BE(e)}function sN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case bI:t+="";break;default:t+=a}}return t}function BE(n){return n+bI+""}/**
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
 */function zE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Es(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function OI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Rt=class Tm{constructor(e,t){this.comparator=e,this.root=t||ss.EMPTY}insert(e,t){return new Tm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ss.BLACK,null,null))}remove(e){return new Tm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ss.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sh(this.root,e,this.comparator,!0)}},Sh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ss=class si{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??si.RED,this.left=s??si.EMPTY,this.right=a??si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new si(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return si.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}};ss.EMPTY=null,ss.RED=!0,ss.BLACK=!1;ss.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new ss(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $E(this.data.getIterator())}getIteratorFrom(e){return new $E(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ot(this.comparator);return t.data=e,t}}class $E{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new bn([])}unionWith(e){let t=new Ot(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Da(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class LI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new LI("Invalid base64 string: "+a):a}})(e);return new Yt(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const oN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(n){if(qe(!!n,39018),typeof n=="string"){let e=0;const t=oN.exec(n);if(qe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ds(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
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
 */const MI="server_timestamp",VI="__type__",FI="__previous_value__",UI="__local_write_time__";function wg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[VI])===null||t===void 0?void 0:t.stringValue)===MI}function jd(n){const e=n.mapValue.fields[FI];return wg(e)?jd(e):e}function Pu(n){const e=hs(n.mapValue.fields[UI].timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class aN{constructor(e,t,r,s,a,u,d,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=v}}const nd="(default)";class Nu{constructor(e,t){this.projectId=e,this.database=t||nd}static empty(){return new Nu("","")}get isDefaultDatabase(){return this.database===nd}isEqual(e){return e instanceof Nu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const jI="__type__",lN="__max__",Ch={mapValue:{}},BI="__vector__",rd="value";function fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wg(n)?4:cN(n)?9007199254740991:uN(n)?10:11:we(28295,{value:n})}function Vr(n,e){if(n===e)return!0;const t=fs(n);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pu(n).isEqual(Pu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=hs(s.timestampValue),d=hs(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return ds(s.bytesValue).isEqual(ds(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return _t(s.geoPointValue.latitude)===_t(a.geoPointValue.latitude)&&_t(s.geoPointValue.longitude)===_t(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return _t(s.integerValue)===_t(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=_t(s.doubleValue),d=_t(a.doubleValue);return u===d?td(u)===td(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Da(n.arrayValue.values||[],e.arrayValue.values||[],Vr);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(zE(u)!==zE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Vr(u[f],d[f])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function xu(n,e){return(n.values||[]).find((t=>Vr(t,e)))!==void 0}function ba(n,e){if(n===e)return 0;const t=fs(n),r=fs(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=_t(a.integerValue||a.doubleValue),f=_t(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return WE(n.timestampValue,e.timestampValue);case 4:return WE(Pu(n),Pu(e));case 5:return wm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=ds(a),f=ds(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=ke(d[m],f[m]);if(v!==0)return v}return ke(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=ke(_t(a.latitude),_t(u.latitude));return d!==0?d:ke(_t(a.longitude),_t(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return HE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,v;const E=a.fields||{},T=u.fields||{},x=(d=E[rd])===null||d===void 0?void 0:d.arrayValue,V=(f=T[rd])===null||f===void 0?void 0:f.arrayValue,j=ke(((m=x==null?void 0:x.values)===null||m===void 0?void 0:m.length)||0,((v=V==null?void 0:V.values)===null||v===void 0?void 0:v.length)||0);return j!==0?j:HE(x,V)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Ch.mapValue&&u===Ch.mapValue)return 0;if(a===Ch.mapValue)return 1;if(u===Ch.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const T=wm(f[E],v[E]);if(T!==0)return T;const x=ba(d[f[E]],m[v[E]]);if(x!==0)return x}return ke(f.length,v.length)})(n.mapValue,e.mapValue);default:throw we(23264,{le:t})}}function WE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=hs(n),r=hs(e),s=ke(t.seconds,r.seconds);return s!==0?s:ke(t.nanos,r.nanos)}function HE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=ba(t[s],r[s]);if(a)return a}return ke(t.length,r.length)}function Oa(n){return Im(n)}function Im(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=hs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ds(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Im(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Im(t.fields[u])}`;return s+"}"})(n.mapValue):we(61005,{value:n})}function Fh(n){switch(fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jd(n);return e?16+Fh(e):16;case 5:return 2*n.stringValue.length;case 6:return ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Fh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Es(r.fields,((a,u)=>{s+=a.length+Fh(u)})),s})(n.mapValue);default:throw we(13486,{value:n})}}function qE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Sm(n){return!!n&&"integerValue"in n}function Tg(n){return!!n&&"arrayValue"in n}function GE(n){return!!n&&"nullValue"in n}function KE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Uh(n){return!!n&&"mapValue"in n}function uN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[jI])===null||t===void 0?void 0:t.stringValue)===BI}function pu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Es(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=pu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===lN}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Uh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pu(t)}setAll(e){let t=Qt.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=pu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Uh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Uh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Es(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new wn(pu(this.value))}}function zI(n){const e=[];return Es(n.fields,((t,r)=>{const s=new Qt([t]);if(Uh(r)){const a=zI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new bn(e)}/**
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
 */class rn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new rn(e,0,Ce.min(),Ce.min(),Ce.min(),wn.empty(),0)}static newFoundDocument(e,t,r,s){return new rn(e,1,t,Ce.min(),r,s,0)}static newNoDocument(e,t){return new rn(e,2,t,Ce.min(),Ce.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new rn(e,3,t,Ce.min(),Ce.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class id{constructor(e,t){this.position=e,this.inclusive=t}}function QE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=ba(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function YE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Du{constructor(e,t="asc"){this.field=e,this.dir=t}}function hN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $I{}class It extends $I{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fN(e,t,r):t==="array-contains"?new gN(e,r):t==="in"?new _N(e,r):t==="not-in"?new yN(e,r):t==="array-contains-any"?new vN(e,r):new It(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pN(e,r):new mN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ba(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(ba(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends $I{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new mr(e,t)}matches(e){return WI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function WI(n){return n.op==="and"}function HI(n){return dN(n)&&WI(n)}function dN(n){for(const e of n.filters)if(e instanceof mr)return!1;return!0}function Cm(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+Oa(n.value);if(HI(n))return n.filters.map((e=>Cm(e))).join(",");{const e=n.filters.map((t=>Cm(t))).join(",");return`${n.op}(${e})`}}function qI(n,e){return n instanceof It?(function(r,s){return s instanceof It&&r.op===s.op&&r.field.isEqual(s.field)&&Vr(r.value,s.value)})(n,e):n instanceof mr?(function(r,s){return s instanceof mr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&qI(u,s.filters[d])),!0):!1})(n,e):void we(19439)}function GI(n){return n instanceof It?(function(t){return`${t.field.canonicalString()} ${t.op} ${Oa(t.value)}`})(n):n instanceof mr?(function(t){return t.op.toString()+" {"+t.getFilters().map(GI).join(" ,")+"}"})(n):"Filter"}class fN extends It{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class pN extends It{constructor(e,t){super(e,"in",t),this.keys=KI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mN extends It{constructor(e,t){super(e,"not-in",t),this.keys=KI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function KI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class gN extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tg(t)&&xu(t.arrayValue,this.value)}}class _N extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xu(this.value.arrayValue,t)}}class yN extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xu(this.value.arrayValue,t)}}class vN extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>xu(this.value.arrayValue,r)))}}/**
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
 */class EN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function XE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new EN(n,e,t,r,s,a,u)}function Ig(n){const e=Re(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Cm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Ud(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Oa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Oa(r))).join(",")),e.Pe=t}return e.Pe}function Sg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!YE(n.startAt,e.startAt)&&YE(n.endAt,e.endAt)}function Rm(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ja{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function wN(n,e,t,r,s,a,u,d){return new Ja(n,e,t,r,s,a,u,d)}function Cg(n){return new Ja(n)}function JE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function QI(n){return n.collectionGroup!==null}function mu(n){const e=Re(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ot(Qt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Du(a,r))})),t.has(Qt.keyField().canonicalString())||e.Te.push(new Du(Qt.keyField(),r))}return e.Te}function xr(n){const e=Re(n);return e.Ie||(e.Ie=TN(e,mu(n))),e.Ie}function TN(n,e){if(n.limitType==="F")return XE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Du(s.field,a)}));const t=n.endAt?new id(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new id(n.startAt.position,n.startAt.inclusive):null;return XE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Am(n,e){const t=n.filters.concat([e]);return new Ja(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sd(n,e,t){return new Ja(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bd(n,e){return Sg(xr(n),xr(e))&&n.limitType===e.limitType}function YI(n){return`${Ig(xr(n))}|lt:${n.limitType}`}function _a(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>GI(s))).join(", ")}]`),Ud(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Oa(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Oa(s))).join(",")),`Target(${r})`})(xr(n))}; limitType=${n.limitType})`}function zd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of mu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=QE(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,mu(r),s)||r.endAt&&!(function(u,d,f){const m=QE(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,mu(r),s))})(n,e)}function IN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function XI(n){return(e,t)=>{let r=!1;for(const s of mu(n)){const a=SN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function SN(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?ba(f,m):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return we(19790,{direction:n.dir})}}/**
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
 */class vo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return OI(this.inner)}size(){return this.innerSize}}/**
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
 */const CN=new Rt(_e.comparator);function yi(){return CN}const JI=new Rt(_e.comparator);function lu(...n){let e=JI;for(const t of n)e=e.insert(t.key,t);return e}function ZI(n){let e=JI;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function eo(){return gu()}function e0(){return gu()}function gu(){return new vo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const RN=new Rt(_e.comparator),AN=new Ot(_e.comparator);function Le(...n){let e=AN;for(const t of n)e=e.add(t);return e}const kN=new Ot(ke);function PN(){return kN}/**
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
 */function Rg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(e)?"-0":e}}function t0(n){return{integerValue:""+n}}function NN(n,e){return rN(e)?t0(e):Rg(n,e)}/**
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
 */class $d{constructor(){this._=void 0}}function xN(n,e,t){return n instanceof od?(function(s,a){const u={fields:{[VI]:{stringValue:MI},[UI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&wg(a)&&(a=jd(a)),a&&(u.fields[FI]=a),{mapValue:u}})(t,e):n instanceof La?r0(n,e):n instanceof bu?i0(n,e):(function(s,a){const u=n0(s,a),d=ZE(u)+ZE(s.Ee);return Sm(u)&&Sm(s.Ee)?t0(d):Rg(s.serializer,d)})(n,e)}function DN(n,e,t){return n instanceof La?r0(n,e):n instanceof bu?i0(n,e):t}function n0(n,e){return n instanceof ad?(function(r){return Sm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class od extends $d{}class La extends $d{constructor(e){super(),this.elements=e}}function r0(n,e){const t=s0(e);for(const r of n.elements)t.some((s=>Vr(s,r)))||t.push(r);return{arrayValue:{values:t}}}class bu extends $d{constructor(e){super(),this.elements=e}}function i0(n,e){let t=s0(e);for(const r of n.elements)t=t.filter((s=>!Vr(s,r)));return{arrayValue:{values:t}}}class ad extends $d{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ZE(n){return _t(n.integerValue||n.doubleValue)}function s0(n){return Tg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class bN{constructor(e,t){this.field=e,this.transform=t}}function ON(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof La&&s instanceof La||r instanceof bu&&s instanceof bu?Da(r.elements,s.elements,Vr):r instanceof ad&&s instanceof ad?Vr(r.Ee,s.Ee):r instanceof od&&s instanceof od})(n.transform,e.transform)}class LN{constructor(e,t){this.version=e,this.transformResults=t}}class Dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wd{}function o0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new l0(n.key,Dr.none()):new Xu(n.key,n.data,Dr.none());{const t=n.data,r=wn.empty();let s=new Ot(Qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new ws(n.key,r,new bn(s.toArray()),Dr.none())}}function MN(n,e,t){n instanceof Xu?(function(s,a,u){const d=s.value.clone(),f=tw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ws?(function(s,a,u){if(!jh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=tw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(a0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function _u(n,e,t,r){return n instanceof Xu?(function(a,u,d,f){if(!jh(a.precondition,u))return d;const m=a.value.clone(),v=nw(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof ws?(function(a,u,d,f){if(!jh(a.precondition,u))return d;const m=nw(a.fieldTransforms,f,u),v=u.data;return v.setAll(a0(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return jh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function VN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=n0(r.transform,s||null);a!=null&&(t===null&&(t=wn.empty()),t.set(r.field,a))}return t||null}function ew(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Da(r,s,((a,u)=>ON(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xu extends Wd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ws extends Wd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function a0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function tw(n,e,t){const r=new Map;qe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,DN(u,d,t[s]))}return r}function nw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,xN(a,u,e))}return r}class l0 extends Wd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FN extends Wd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&MN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_u(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_u(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=e0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=o0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ce.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&Da(this.mutations,e.mutations,((t,r)=>ew(t,r)))&&Da(this.baseMutations,e.baseMutations,((t,r)=>ew(t,r)))}}class Ag{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){qe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return RN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ag(e,t,r,s)}}/**
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
 */class jN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var wt,Ue;function zN(n){switch(n){case G.OK:return we(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function u0(n){if(n===void 0)return _i("GRPC error has no .code"),G.UNKNOWN;switch(n){case wt.OK:return G.OK;case wt.CANCELLED:return G.CANCELLED;case wt.UNKNOWN:return G.UNKNOWN;case wt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case wt.INTERNAL:return G.INTERNAL;case wt.UNAVAILABLE:return G.UNAVAILABLE;case wt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case wt.NOT_FOUND:return G.NOT_FOUND;case wt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case wt.ABORTED:return G.ABORTED;case wt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case wt.DATA_LOSS:return G.DATA_LOSS;default:return we(39323,{code:n})}}(Ue=wt||(wt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $N=new rs([4294967295,4294967295],0);function rw(n){const e=NI().encode(n),t=new TI;return t.update(e),new Uint8Array(t.digest())}function iw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new rs([t,r],0),new rs([s,a],0)]}class kg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new uu(`Invalid padding: ${t}`);if(r<0)throw new uu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new uu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=rs.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(rs.fromNumber(r)));return s.compare($N)===1&&(s=new rs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=rw(e),[r,s]=iw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new kg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=rw(e),[r,s]=iw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class uu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ju.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hd(Ce.min(),s,new Rt(ke),yi(),Le())}}class Ju{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ju(r,t,Le(),Le(),Le())}}/**
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
 */class Bh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class c0{constructor(e,t){this.targetId=e,this.De=t}}class h0{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class sw{constructor(){this.ve=0,this.Ce=ow(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),r=Le();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:we(38017,{changeType:a})}})),new Ju(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ow()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class WN{constructor(e){this.We=e,this.Ge=new Map,this.ze=yi(),this.je=Rh(),this.Je=Rh(),this.He=new Rt(ke)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Rm(a))if(r===0){const u=new _e(a.path);this.Xe(t,u,rn.newNoDocument(u,Ce.min()))}else qe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=ds(r).toUint8Array()}catch(f){if(f instanceof LI)return us("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new kg(u,s,a)}catch(f){return us(f instanceof uu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Rm(d.target)){const f=new _e(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,rn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Le();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Hd(e,t,this.He,this.ze,r);return this.ze=yi(),this.je=Rh(),this.Je=Rh(),this.He=new Rt(ke),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new sw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ot(ke),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ot(ke),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Rh(){return new Rt(_e.comparator)}function ow(){return new Rt(_e.comparator)}const HN={asc:"ASCENDING",desc:"DESCENDING"},qN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GN={and:"AND",or:"OR"};class KN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function km(n,e){return n.useProto3Json||Ud(e)?e:{value:e}}function ld(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function QN(n,e){return ld(n,e.toTimestamp())}function br(n){return qe(!!n,49232),Ce.fromTimestamp((function(t){const r=hs(t);return new ot(r.seconds,r.nanos)})(n))}function Pg(n,e){return Pm(n,e).canonicalString()}function Pm(n,e){const t=(function(s){return new nt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function f0(n){const e=nt.fromString(n);return qe(y0(e),10190,{key:e.toString()}),e}function Nm(n,e){return Pg(n.databaseId,e.path)}function Jp(n,e){const t=f0(e);if(t.get(1)!==n.databaseId.projectId)throw new se(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(m0(t))}function p0(n,e){return Pg(n.databaseId,e)}function YN(n){const e=f0(n);return e.length===4?nt.emptyPath():m0(e)}function xm(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function m0(n){return qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function aw(n,e,t){return{name:Nm(n,e),fields:t.value.mapValue.fields}}function XN(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:we(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,v){return m.useProto3Json?(qe(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const v=m.code===void 0?G.UNKNOWN:u0(m.code);return new se(v,m.message||"")})(u);t=new h0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jp(n,r.document.name),a=br(r.document.updateTime),u=r.document.createTime?br(r.document.createTime):Ce.min(),d=new wn({mapValue:{fields:r.document.fields}}),f=rn.newFoundDocument(s,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Bh(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jp(n,r.document),a=r.readTime?br(r.readTime):Ce.min(),u=rn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Bh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jp(n,r.document),a=r.removedTargetIds||[];t=new Bh([],a,s,null)}else{if(!("filter"in e))return we(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new BN(s,a),d=r.targetId;t=new c0(d,u)}}return t}function JN(n,e){let t;if(e instanceof Xu)t={update:aw(n,e.key,e.value)};else if(e instanceof l0)t={delete:Nm(n,e.key)};else if(e instanceof ws)t={update:aw(n,e.key,e.data),updateMask:ax(e.fieldMask)};else{if(!(e instanceof FN))return we(16599,{Rt:e.type});t={verify:Nm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof od)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof La)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof bu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ad)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw we(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:QN(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:we(27497)})(n,e.precondition)),t}function ZN(n,e){return n&&n.length>0?(qe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?br(s.updateTime):br(a);return u.isEqual(Ce.min())&&(u=br(a)),new LN(u,s.transformResults||[])})(t,e)))):[]}function ex(n,e){return{documents:[p0(n,e.path)]}}function tx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=p0(n,s);const a=(function(m){if(m.length!==0)return _0(mr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((v=>(function(T){return{field:ya(T.field),direction:ix(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=km(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function nx(n){let e=YN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){qe(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(E){const T=g0(E);return T instanceof mr&&HI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(V){return new Du(va(V.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,Ud(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,x=E.values||[];return new id(x,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,x=E.values||[];return new id(x,T)})(t.endAt)),wN(e,s,u,a,d,"F",f,m)}function rx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function g0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=va(t.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=va(t.unaryFilter.field);return It.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=va(t.unaryFilter.field);return It.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=va(t.unaryFilter.field);return It.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return It.create(va(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return mr.create(t.compositeFilter.filters.map((r=>g0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function ix(n){return HN[n]}function sx(n){return qN[n]}function ox(n){return GN[n]}function ya(n){return{fieldPath:n.canonicalString()}}function va(n){return Qt.fromServerFormat(n.fieldPath)}function _0(n){return n instanceof It?(function(t){if(t.op==="=="){if(KE(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NAN"}};if(GE(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(KE(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NOT_NAN"}};if(GE(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ya(t.field),op:sx(t.op),value:t.value}}})(n):n instanceof mr?(function(t){const r=t.getFilters().map((s=>_0(s)));return r.length===1?r[0]:{compositeFilter:{op:ox(t.op),filters:r}}})(n):we(54877,{filter:n})}function ax(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function y0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Zi{constructor(e,t,r,s,a=Ce.min(),u=Ce.min(),d=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Zi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lx{constructor(e){this.gt=e}}function ux(n){const e=nx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
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
 */class cx{constructor(){this.Dn=new hx}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(cs.min())}updateCollectionGroup(e,t,r){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class hx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ot(nt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ot(nt.comparator)).toArray()}}/**
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
 */const lw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},v0=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(v0,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
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
 */class Ma{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ma(0)}static ur(){return new Ma(-1)}}/**
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
 */const uw="LruGarbageCollector",dx=1048576;function cw([n,e],[t,r]){const s=ke(n,t);return s===0?ke(e,r):s}class fx{constructor(e){this.Tr=e,this.buffer=new Ot(cw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class px{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(uw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xa(t)?ue(uw,"Ignoring IndexedDB error during garbage collection: ",t):await Ya(t)}await this.Rr(3e5)}))}}class mx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Fd.ue);const r=new fx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(lw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),ga()<=Oe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function gx(n,e){return new mx(n,e)}/**
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
 */class _x{constructor(){this.changes=new vo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&_u(r.mutation,s,bn.empty(),ot.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Le()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Le()){const s=eo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=lu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=eo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Le())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=yi();const u=gu(),d=(function(){return gu()})();return t.forEach(((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof ws)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),_u(v.mutation,m,v.mutation.getFieldMask(),ot.now())):u.set(m.key,bn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,v)=>u.set(m,v))),t.forEach(((m,v)=>{var E;return d.set(m,new yx(v,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=gu();let s=new Rt(((u,d)=>u-d)),a=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||bn.empty();v=d.applyToLocalView(m,v),r.set(f,v);const E=(s.get(d.batchId)||Le()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,E=e0();v.forEach((T=>{if(!a.has(T)){const x=o0(t.get(T),r.get(T));x!==null&&E.set(T,x),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return Q.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):QI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Q.resolve(eo());let d=ku,f=a;return u.next((m=>Q.forEach(m,((v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Le()))).next((v=>({batchId:d,changes:ZI(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let s=lu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=lu();return this.indexManager.getCollectionParents(e,a).next((d=>Q.forEach(d,(f=>{const m=(function(E,T){return new Ja(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((v=>{v.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,rn.newInvalidDocument(v)))}));let d=lu();return u.forEach(((f,m)=>{const v=a.get(f);v!==void 0&&_u(v.mutation,m,bn.empty(),ot.now()),zd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
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
 */class Ex{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:br(s.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:ux(s.bundledQuery),readTime:br(s.readTime)}})(t)),Q.resolve()}}/**
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
 */class wx{constructor(){this.overlays=new Rt(_e.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=eo();return Q.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Q.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Q.resolve()}getOverlaysForCollection(e,t,r){const s=eo(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Rt(((m,v)=>m-v));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=eo(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=eo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,v)=>d.set(m,v))),!(d.size()>=s)););return Q.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new jN(t,r));let a=this.kr.get(t);a===void 0&&(a=Le(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class Tx{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class Ng{constructor(){this.qr=new Ot(Bt.Qr),this.$r=new Ot(Bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Bt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Bt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new _e(new nt([])),r=new Bt(t,e),s=new Bt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new nt([])),r=new Bt(t,e),s=new Bt(t,e+1);let a=Le();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Bt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||ke(e.Hr,t.Hr)}static Ur(e,t){return ke(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
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
 */class Ix{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ot(Bt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new UN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Bt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(u)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Eg:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Bt(t,0),s=new Bt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ot(ke);return t.forEach((s=>{const a=new Bt(s,0),u=new Bt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Bt(new _e(a),0);let d=new Ot(ke);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),Q.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){qe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Q.forEach(t.mutations,(s=>{const a=new Bt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Bt(t,0),s=this.Yr.firstAfterOrEqual(r);return Q.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Sx{constructor(e){this.ni=e,this.docs=(function(){return new Rt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Q.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let r=yi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():rn.newInvalidDocument(s))})),Q.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=yi();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||ZP(JP(v),r)<=0||(s.has(v.key)||zd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Q.resolve(a)}getAllFromCollectionGroup(e,t,r,s){we(9500)}ri(e,t){return Q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Cx(this)}getSize(e){return Q.resolve(this.size)}}class Cx extends _x{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Rx{constructor(e){this.persistence=e,this.ii=new vo((t=>Ig(t)),Sg),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Ng,this.targetCount=0,this._i=Ma.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ma(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Q.waitFor(a).next((()=>s))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Q.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Q.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Q.resolve(r)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
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
 */class E0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Fd(0),this.ci=!1,this.ci=!0,this.li=new Tx,this.referenceDelegate=e(this),this.hi=new Rx(this),this.indexManager=new cx,this.remoteDocumentCache=(function(s){return new Sx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new lx(t),this.Ti=new Ex(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ix(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const s=new Ax(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Ax extends tN{constructor(e){super(),this.currentSequenceNumber=e}}class xg{constructor(e){this.persistence=e,this.Ai=new Ng,this.Ri=null}static Vi(e){return new xg(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Q.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(r=>{const s=_e.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Ce.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ud{constructor(e,t){this.persistence=e,this.gi=new vo((r=>iN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=gx(this,t)}static Vi(e,t){return new ud(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Q.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Ce.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fh(e.data.value)),t}Sr(e,t,r){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Le(),s=Le();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Dg(e,t.fromCache,r,s)}}/**
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
 */class kx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Px{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return sA()?8:nN(sn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new kx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ga()<=Oe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",_a(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(ga()<=Oe.DEBUG&&ue("QueryEngine","Query:",_a(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ga()<=Oe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",_a(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xr(t))):Q.resolve())}ps(e,t){if(JE(t))return Q.resolve(null);let r=xr(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=sd(t,null,"F"),r=xr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Le(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,sd(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return JE(t)||s.isEqual(Ce.min())?Q.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Q.resolve(null):(ga()<=Oe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_a(t)),this.vs(e,u,t,XP(s,ku)).next((d=>d)))}))}bs(e,t){let r=new Ot(XI(e));return t.forEach(((s,a)=>{zd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return ga()<=Oe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",_a(t)),this.gs.getDocumentsMatchingQuery(e,t,cs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const bg="LocalStore",Nx=3e8;class xx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Rt(ke),this.Ms=new vo((a=>Ig(a)),Sg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Dx(n,e,t,r){return new xx(n,e,t,r)}async function w0(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Le();for(const m of s){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function bx(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,v){const E=m.batch,T=E.keys();let x=Q.resolve();return T.forEach((V=>{x=x.next((()=>v.getEntry(f,V))).next((j=>{const B=m.docVersions.get(V);qe(B!==null,48541),j.version.compareTo(B)<0&&(E.applyToRemoteDocument(j,m),j.isValidDocument()&&(j.setReadTime(m.commitVersion),v.addEntry(j)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Le();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function T0(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Ox(n,e){const t=Re(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((v,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,E))));let x=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?x=x.withResumeToken(Yt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,r)),s=s.insert(E,x),(function(j,B,Z){return j.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Nx?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(T,x,v)&&d.push(t.hi.updateTargetData(a,x))}));let f=yi(),m=Le();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(Lx(a,u,e.documentUpdates).next((v=>{f=v.Ls,m=v.ks}))),!r.isEqual(Ce.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return Q.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Lx(n,e,t){let r=Le(),s=Le();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=yi();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Ce.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ue(bg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Mx(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Eg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Vx(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Q.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new Zi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Dm(n,e,t){const r=Re(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!Xa(u))throw u;ue(bg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function hw(n,e,t){const r=Re(n);let s=Ce.min(),a=Le();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,v){const E=Re(f),T=E.Ms.get(v);return T!==void 0?Q.resolve(E.Fs.get(T)):E.hi.getTargetData(m,v)})(r,u,xr(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Ce.min(),t?a:Le()))).next((d=>(Fx(r,IN(e),d),{documents:d,qs:a})))))}function Fx(n,e,t){let r=n.xs.get(e)||Ce.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class dw{constructor(){this.activeTargetIds=PN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ux{constructor(){this.Fo=new dw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new dw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jx{xo(e){}shutdown(){}}/**
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
 */const fw="ConnectivityMonitor";class pw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(fw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(fw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ah=null;function bm(){return Ah===null?Ah=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ah++,"0x"+Ah.toString(16)}/**
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
 */const Zp="RestConnection",Bx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===nd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=bm(),d=this.Go(e,t.toUriEncodedString());ue(Zp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),v=Fr(m);return this.jo(e,d,f,r,v).then((E=>(ue(Zp,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw us(Zp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Bx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class $x{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const tn="WebChannelConnection";class Wx extends zx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=bm();return new Promise(((d,f)=>{const m=new II;m.setWithCredentials(!0),m.listenOnce(SI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Vh.NO_ERROR:const E=m.getResponseJson();ue(tn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Vh.TIMEOUT:ue(tn,`RPC '${e}' ${u} timed out`),f(new se(G.DEADLINE_EXCEEDED,"Request time out"));break;case Vh.HTTP_ERROR:const T=m.getStatus();if(ue(tn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let x=m.getResponseJson();Array.isArray(x)&&(x=x[0]);const V=x==null?void 0:x.error;if(V&&V.status&&V.message){const j=(function(Z){const K=Z.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(K)>=0?K:G.UNKNOWN})(V.status);f(new se(j,V.message))}else f(new se(G.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new se(G.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ue(tn,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(s);ue(tn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",v,r,15)}))}P_(e,t,r){const s=bm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=AI(),d=RI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ue(tn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const E=u.createWebChannel(v,f);this.T_(E);let T=!1,x=!1;const V=new $x({Ho:B=>{x?ue(tn,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(T||(ue(tn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),ue(tn,`RPC '${e}' stream ${s} sending:`,B),E.send(B))},Yo:()=>E.close()}),j=(B,Z,K)=>{B.listen(Z,(ne=>{try{K(ne)}catch(q){setTimeout((()=>{throw q}),0)}}))};return j(E,au.EventType.OPEN,(()=>{x||(ue(tn,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),j(E,au.EventType.CLOSE,(()=>{x||(x=!0,ue(tn,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(E))})),j(E,au.EventType.ERROR,(B=>{x||(x=!0,us(tn,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),V.__(new se(G.UNAVAILABLE,"The operation could not be completed")))})),j(E,au.EventType.MESSAGE,(B=>{var Z;if(!x){const K=B.data[0];qe(!!K,16349);const ne=K,q=(ne==null?void 0:ne.error)||((Z=ne[0])===null||Z===void 0?void 0:Z.error);if(q){ue(tn,`RPC '${e}' stream ${s} received error:`,q);const Ie=q.status;let de=(function(R){const N=wt[R];if(N!==void 0)return u0(N)})(Ie),O=q.message;de===void 0&&(de=G.INTERNAL,O="Unknown error status: "+Ie+" with message "+q.message),x=!0,V.__(new se(de,O)),E.close()}else ue(tn,`RPC '${e}' stream ${s} received:`,K),V.a_(K)}})),j(d,CI.STAT_EVENT,(B=>{B.stat===Em.PROXY?ue(tn,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Em.NOPROXY&&ue(tn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function em(){return typeof document<"u"?document:null}/**
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
 */function qd(n){return new KN(n,!0)}/**
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
 */class I0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const mw="PersistentStream";class S0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new I0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(_i(t.toString()),_i("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new se(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(mw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(mw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hx extends S0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=XN(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ce.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ce.min():u.readTime?br(u.readTime):Ce.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=xm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Rm(f)?{documents:ex(a,f)}:{query:tx(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=d0(a,u.resumeToken);const m=km(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ce.min())>0){d.readTime=ld(a,u.snapshotVersion.toTimestamp());const m=km(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=rx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=xm(this.serializer),t.removeTarget=e,this.k_(t)}}class qx extends S0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=ZN(e.writeResults,e.commitTime),r=br(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=xm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>JN(this.serializer,r)))};this.k_(t)}}/**
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
 */class Gx{}class Kx extends Gx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new se(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Pm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(G.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Pm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(G.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Qx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_i(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const co="RemoteStore";class Yx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Eo(this)&&(ue(co,"Restarting streams for network reachability change."),await(async function(f){const m=Re(f);m.Ia.add(4),await Zu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Gd(m)})(this))}))})),this.Aa=new Qx(r,s)}}async function Gd(n){if(Eo(n))for(const e of n.da)await e(!0)}async function Zu(n){for(const e of n.da)await e(!1)}function C0(n,e){const t=Re(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Vg(t)?Mg(t):Za(t).x_()&&Lg(t,e))}function Og(n,e){const t=Re(n),r=Za(t);t.Ta.delete(e),r.x_()&&R0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Eo(t)&&t.Aa.set("Unknown"))}function Lg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Za(n).H_(e)}function R0(n,e){n.Ra.$e(e),Za(n).Y_(e)}function Mg(n){n.Ra=new WN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Za(n).start(),n.Aa.aa()}function Vg(n){return Eo(n)&&!Za(n).M_()&&n.Ta.size>0}function Eo(n){return Re(n).Ia.size===0}function A0(n){n.Ra=void 0}async function Xx(n){n.Aa.set("Online")}async function Jx(n){n.Ta.forEach(((e,t)=>{Lg(n,e)}))}async function Zx(n,e){A0(n),Vg(n)?(n.Aa.la(e),Mg(n)):n.Aa.set("Unknown")}async function eD(n,e,t){if(n.Aa.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ue(co,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cd(n,r)}else if(e instanceof Bh?n.Ra.Ye(e):e instanceof c0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ce.min()))try{const r=await T0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(m);v&&a.Ta.set(m,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(Yt.EMPTY_BYTE_STRING,v.snapshotVersion)),R0(a,f);const E=new Zi(v.target,f,m,v.sequenceNumber);Lg(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ue(co,"Failed to raise snapshot:",r),await cd(n,r)}}async function cd(n,e,t){if(!Xa(e))throw e;n.Ia.add(1),await Zu(n),n.Aa.set("Offline"),t||(t=()=>T0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(co,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Gd(n)}))}function k0(n,e){return e().catch((t=>cd(n,t,e)))}async function Kd(n){const e=Re(n),t=ps(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Eg;for(;tD(e);)try{const s=await Mx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,nD(e,s)}catch(s){await cd(e,s)}P0(e)&&N0(e)}function tD(n){return Eo(n)&&n.Pa.length<10}function nD(n,e){n.Pa.push(e);const t=ps(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function P0(n){return Eo(n)&&!ps(n).M_()&&n.Pa.length>0}function N0(n){ps(n).start()}async function rD(n){ps(n).na()}async function iD(n){const e=ps(n);for(const t of n.Pa)e.X_(t.mutations)}async function sD(n,e,t){const r=n.Pa.shift(),s=Ag.from(r,e,t);await k0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Kd(n)}async function oD(n,e){e&&ps(n).Z_&&await(async function(r,s){if((function(u){return zN(u)&&u!==G.ABORTED})(s.code)){const a=r.Pa.shift();ps(r).N_(),await k0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Kd(r)}})(n,e),P0(n)&&N0(n)}async function gw(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ue(co,"RemoteStore received new credentials");const r=Eo(t);t.Ia.add(3),await Zu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Gd(t)}async function aD(n,e){const t=Re(n);e?(t.Ia.delete(2),await Gd(t)):e||(t.Ia.add(2),await Zu(t),t.Aa.set("Unknown"))}function Za(n){return n.Va||(n.Va=(function(t,r,s){const a=Re(t);return a.ia(),new Hx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Xx.bind(null,n),e_:Jx.bind(null,n),n_:Zx.bind(null,n),J_:eD.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Vg(n)?Mg(n):n.Aa.set("Unknown")):(await n.Va.stop(),A0(n))}))),n.Va}function ps(n){return n.ma||(n.ma=(function(t,r,s){const a=Re(t);return a.ia(),new qx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:rD.bind(null,n),n_:oD.bind(null,n),ea:iD.bind(null,n),ta:sD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Kd(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(co,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Fg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Fg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ug(n,e){if(_i("AsyncQueue",`${e}: ${n}`),Xa(n))return new se(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ca{static emptySet(e){return new Ca(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=lu(),this.sortedSet=new Rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ca)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ca;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class _w{constructor(){this.fa=new Rt(_e.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):we(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Va{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Va(e,t,Ca.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class lD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class uD{constructor(){this.queries=yw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Re(t),a=s.queries;s.queries=yw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new se(G.ABORTED,"Firestore shutting down"))}}function yw(){return new vo((n=>YI(n)),Bd)}async function x0(n,e){const t=Re(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new lD,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Ug(u,`Initialization of query '${_a(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&jg(t)}async function D0(n,e){const t=Re(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function cD(n,e){const t=Re(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&jg(t)}function hD(n,e,t){const r=Re(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function jg(n){n.Da.forEach((e=>{e.next()}))}var Om,vw;(vw=Om||(Om={})).Fa="default",vw.Cache="cache";class b0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Va(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Om.Cache}}/**
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
 */class O0{constructor(e){this.key=e}}class L0{constructor(e){this.key=e}}class dD{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=XI(e),this.eu=new Ca(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new _w,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((v,E)=>{const T=s.get(v),x=zd(this.query,E)?E:null,V=!!T&&this.mutatedKeys.has(T.key),j=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let B=!1;T&&x?T.data.isEqual(x.data)?V!==j&&(r.track({type:3,doc:x}),B=!0):this.iu(T,x)||(r.track({type:2,doc:x}),B=!0,(f&&this.Xa(x,f)>0||m&&this.Xa(x,m)<0)&&(d=!0)):!T&&x?(r.track({type:0,doc:x}),B=!0):T&&!x&&(r.track({type:1,doc:T}),B=!0,(f||m)&&(d=!0)),B&&(x?(u=u.add(x),a=j?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,E)=>(function(x,V){const j=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{At:B})}};return j(x)-j(V)})(v.type,E.type)||this.Xa(v.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Va(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new _w,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new L0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new O0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Va.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Bg="SyncEngine";class fD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pD{constructor(e){this.key=e,this.lu=!1}}class mD{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new vo((d=>YI(d)),Bd),this.Tu=new Map,this.Iu=new Set,this.du=new Rt(_e.comparator),this.Eu=new Map,this.Au=new Ng,this.Ru={},this.Vu=new Map,this.mu=Ma.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function gD(n,e,t=!0){const r=B0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await M0(r,e,t,!0),s}async function _D(n,e){const t=B0(n);await M0(t,e,!0,!1)}async function M0(n,e,t,r){const s=await Vx(n.localStore,xr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await yD(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&C0(n.remoteStore,s),d}async function yD(n,e,t,r,s){n.gu=(E,T,x)=>(async function(j,B,Z,K){let ne=B.view.nu(Z);ne.Ds&&(ne=await hw(j.localStore,B.query,!1).then((({documents:O})=>B.view.nu(O,ne))));const q=K&&K.targetChanges.get(B.targetId),Ie=K&&K.targetMismatches.get(B.targetId)!=null,de=B.view.applyChanges(ne,j.isPrimaryClient,q,Ie);return ww(j,B.targetId,de._u),de.snapshot})(n,E,T,x);const a=await hw(n.localStore,e,!0),u=new dD(e,a.qs),d=u.nu(a.documents),f=Ju.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);ww(n,t,m._u);const v=new fD(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function vD(n,e,t){const r=Re(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Bd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Og(r.remoteStore,s.targetId),Lm(r,s.targetId)})).catch(Ya)):(Lm(r,s.targetId),await Dm(r.localStore,s.targetId,!0))}async function ED(n,e){const t=Re(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Og(t.remoteStore,r.targetId))}async function wD(n,e,t){const r=kD(n);try{const s=await(function(u,d){const f=Re(u),m=ot.now(),v=d.reduce(((x,V)=>x.add(V.key)),Le());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let V=yi(),j=Le();return f.Os.getEntries(x,v).next((B=>{V=B,V.forEach(((Z,K)=>{K.isValidDocument()||(j=j.add(Z))}))})).next((()=>f.localDocuments.getOverlayedDocuments(x,V))).next((B=>{E=B;const Z=[];for(const K of d){const ne=VN(K,E.get(K.key).overlayedDocument);ne!=null&&Z.push(new ws(K.key,ne,zI(ne.value.mapValue),Dr.exists(!0)))}return f.mutationQueue.addMutationBatch(x,m,Z,d)})).next((B=>{T=B;const Z=B.applyToLocalDocumentSet(E,j);return f.documentOverlayCache.saveOverlays(x,B.batchId,Z)}))})).then((()=>({batchId:T.batchId,changes:ZI(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Rt(ke)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await ec(r,s.changes),await Kd(r.remoteStore)}catch(s){const a=Ug(s,"Failed to persist write");t.reject(a)}}async function V0(n,e){const t=Re(n);try{const r=await Ox(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?qe(u.lu,14607):s.removedDocuments.size>0&&(qe(u.lu,42227),u.lu=!1))})),await ec(t,r,e)}catch(r){await Ya(r)}}function Ew(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Re(u);f.onlineState=d;let m=!1;f.queries.forEach(((v,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&jg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TD(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Rt(_e.comparator);u=u.insert(a,rn.newNoDocument(a,Ce.min()));const d=Le().add(a),f=new Hd(Ce.min(),new Map,new Rt(ke),u,d);await V0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),zg(r)}else await Dm(r.localStore,e,!1).then((()=>Lm(r,e,t))).catch(Ya)}async function ID(n,e){const t=Re(n),r=e.batch.batchId;try{const s=await bx(t.localStore,e);U0(t,r,null),F0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ec(t,s)}catch(s){await Ya(s)}}async function SD(n,e,t){const r=Re(n);try{const s=await(function(u,d){const f=Re(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(qe(E!==null,37113),v=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v))).next((()=>f.localDocuments.getDocuments(m,v)))}))})(r.localStore,e);U0(r,e,t),F0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ec(r,s)}catch(s){await Ya(s)}}function F0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function U0(n,e,t){const r=Re(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Lm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||j0(n,r)}))}function j0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Og(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),zg(n))}function ww(n,e,t){for(const r of t)r instanceof O0?(n.Au.addReference(r.key,e),CD(n,r)):r instanceof L0?(ue(Bg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||j0(n,r.key)):we(19791,{yu:r})}function CD(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ue(Bg,"New document in limbo: "+t),n.Iu.add(r),zg(n))}function zg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(nt.fromString(e)),r=n.mu.next();n.Eu.set(r,new pD(t)),n.du=n.du.insert(t,r),C0(n.remoteStore,new Zi(xr(Cg(t.path)),r,"TargetPurposeLimboResolution",Fd.ue))}}async function ec(n,e,t){const r=Re(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var v;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Dg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const v=Re(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>Q.forEach(m,(T=>Q.forEach(T.Is,(x=>v.persistence.referenceDelegate.addReference(E,T.targetId,x))).next((()=>Q.forEach(T.ds,(x=>v.persistence.referenceDelegate.removeReference(E,T.targetId,x)))))))))}catch(E){if(!Xa(E))throw E;ue(bg,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const x=v.Fs.get(T),V=x.snapshotVersion,j=x.withLastLimboFreeSnapshotVersion(V);v.Fs=v.Fs.insert(T,j)}}})(r.localStore,a))}async function RD(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ue(Bg,"User change. New user:",e.toKey());const r=await w0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new se(G.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ec(t,r.Bs)}}function AD(n,e){const t=Re(n),r=t.Eu.get(e);if(r&&r.lu)return Le().add(r.key);{let s=Le();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function B0(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=V0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TD.bind(null,e),e.hu.J_=cD.bind(null,e.eventManager),e.hu.pu=hD.bind(null,e.eventManager),e}function kD(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SD.bind(null,e),e}class hd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Dx(this.persistence,new Px,e.initialUser,this.serializer)}Du(e){return new E0(xg.Vi,this.serializer)}bu(e){return new Ux}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hd.provider={build:()=>new hd};class PD extends hd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){qe(this.persistence.referenceDelegate instanceof ud,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new px(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new E0((r=>ud.Vi(r,t)),this.serializer)}}class Mm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ew(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RD.bind(null,this.syncEngine),await aD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new uD})()}createDatastore(e){const t=qd(e.databaseInfo.databaseId),r=(function(a){return new Wx(a)})(e.databaseInfo);return(function(a,u,d,f){return new Kx(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new Yx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ew(this.syncEngine,t,0)),(function(){return pw.C()?new pw:new jx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,v){const E=new mD(s,a,u,d,f,m);return v&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Re(s);ue(co,"RemoteStore shutting down."),a.Ia.add(5),await Zu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Mm.provider={build:()=>new Mm};/**
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
 */class z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_i("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ms="FirestoreClient";class ND{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=nn.UNAUTHENTICATED,this.clientId=vg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ue(ms,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ue(ms,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ug(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function tm(n,e){n.asyncQueue.verifyOperationInProgress(),ue(ms,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await w0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{us("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{us("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Tw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xD(n);ue(ms,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>gw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>gw(e.remoteStore,s))),n._onlineComponents=e}async function xD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(ms,"Using user provided OfflineComponentProvider");try{await tm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;us("Error using user provided cache. Falling back to memory cache: "+t),await tm(n,new hd)}}else ue(ms,"Using default OfflineComponentProvider"),await tm(n,new PD(void 0));return n._offlineComponents}async function $0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(ms,"Using user provided OnlineComponentProvider"),await Tw(n,n._uninitializedComponentsProvider._online)):(ue(ms,"Using default OnlineComponentProvider"),await Tw(n,new Mm))),n._onlineComponents}function DD(n){return $0(n).then((e=>e.syncEngine))}async function Vm(n){const e=await $0(n),t=e.eventManager;return t.onListen=gD.bind(null,e.syncEngine),t.onUnlisten=vD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_D.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ED.bind(null,e.syncEngine),t}function bD(n,e,t={}){const r=new is;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const v=new z0({next:T=>{v.Ou(),u.enqueueAndForget((()=>D0(a,E))),T.fromCache&&f.source==="server"?m.reject(new se(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new b0(d,v,{includeMetadataChanges:!0,ka:!0});return x0(a,E)})(await Vm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function W0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Iw=new Map;/**
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
 */const H0="firestore.googleapis.com",Sw=!0;class Cw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=H0,this.ssl=Sw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Sw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=v0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dx)throw new se(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jP;switch(r.type){case"firstParty":return new WP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Iw.get(t);r&&(ue("ComponentProvider","Removing Datastore"),Iw.delete(t),r.terminate())})(this),Promise.resolve()}}function OD(n,e,t,r={}){var s;n=hi(n,Qd);const a=Fr(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(kd(`https://${f}`),Pd("Firestore",!0)),u.host!==H0&&u.host!==f&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!fi(m,d)&&(n._setSettings(m),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=nn.MOCK_USER;else{v=og(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new se(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new nn(T)}n._authCredentials=new BP(new PI(v,E))}}/**
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
 */class wi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wi(this.firestore,e,this._query)}}class Ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Yu(t,Ct._jsonSchema))return new Ct(e,r||null,new _e(nt.fromString(t.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:St("string",Ct._jsonSchemaVersion),referencePath:St("string")};class os extends wi{constructor(e,t,r){super(e,t,Cg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new _e(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function ho(n,e,...t){if(n=Ge(n),xI("collection","path",e),n instanceof Qd){const r=nt.fromString(e,...t);return FE(r),new os(n,null,r)}{if(!(n instanceof Ct||n instanceof os))throw new se(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(e,...t));return FE(r),new os(n.firestore,null,r)}}function dd(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=vg.newId()),xI("doc","path",e),n instanceof Qd){const r=nt.fromString(e,...t);return VE(r),new Ct(n,null,new _e(r))}{if(!(n instanceof Ct||n instanceof os))throw new se(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(e,...t));return VE(r),new Ct(n.firestore,n instanceof os?n.converter:null,new _e(r))}}/**
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
 */const Rw="AsyncQueue";class Aw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new I0(this,"async_queue_retry"),this.oc=()=>{const r=em();r&&ue(Rw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=em();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=em();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new is;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Xa(e))throw e;ue(Rw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_i("INTERNAL UNHANDLED ERROR: ",kw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Fg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&we(47125,{hc:kw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function kw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Pw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Fa extends Qd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Aw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Aw(e),this._firestoreClient=void 0,await e}}}function LD(n,e){const t=typeof n=="object"?n:Dd(),r=typeof n=="string"?n:nd,s=qu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=sg("firestore");a&&OD(s,...a)}return s}function $g(n){if(n._terminated)throw new se(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||MD(n),n._firestoreClient}function MD(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,v){return new aN(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,W0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ND(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Yt.fromBase64String(e))}catch(t){throw new se(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yu(e,Hn._jsonSchema))return Hn.fromBase64String(e.bytes)}}Hn._jsonSchemaVersion="firestore/bytes/1.0",Hn._jsonSchema={type:St("string",Hn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class Yd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xd{constructor(e){this._methodName=e}}/**
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
 */class Or{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Or._jsonSchemaVersion}}static fromJSON(e){if(Yu(e,Or._jsonSchema))return new Or(e.latitude,e.longitude)}}Or._jsonSchemaVersion="firestore/geoPoint/1.0",Or._jsonSchema={type:St("string",Or._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yu(e,Lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Lr(e.vectorValues);throw new se(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lr._jsonSchemaVersion="firestore/vectorValue/1.0",Lr._jsonSchema={type:St("string",Lr._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const VD=/^__.*__$/;class FD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xu(e,this.data,t,this.fieldTransforms)}}class q0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ws(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function G0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:n})}}class Jd{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Jd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return fd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(G0(this.Ec)&&VD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class UD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qd(e)}Dc(e,t,r,s=!1){return new Jd({Ec:e,methodName:t,bc:r,path:Qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wg(n){const e=n._freezeSettings(),t=qd(n._databaseId);return new UD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jD(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);qg("Data must be an object, but it was:",u,r);const d=K0(r,u);let f,m;if(a.merge)f=new bn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const T=Fm(e,E,t);if(!u.contains(T))throw new se(G.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Y0(v,T)||v.push(T)}f=new bn(v),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new FD(new wn(d),f,m)}class Zd extends Xd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zd}}function BD(n,e,t){return new Jd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Hg extends Xd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=BD(this,e,!0),r=this.vc.map((a=>el(a,t))),s=new La(r);return new bN(e.path,s)}isEqual(e){return e instanceof Hg&&fi(this.vc,e.vc)}}function zD(n,e,t,r){const s=n.Dc(1,e,t);qg("Data must be an object, but it was:",s,r);const a=[],u=wn.empty();Es(r,((f,m)=>{const v=Gg(e,f,t);m=Ge(m);const E=s.gc(v);if(m instanceof Zd)a.push(v);else{const T=el(m,E);T!=null&&(a.push(v),u.set(v,T))}}));const d=new bn(a);return new q0(u,d,s.fieldTransforms)}function $D(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Fm(e,r,t)],f=[s];if(a.length%2!=0)throw new se(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Fm(e,a[T])),f.push(a[T+1]);const m=[],v=wn.empty();for(let T=d.length-1;T>=0;--T)if(!Y0(m,d[T])){const x=d[T];let V=f[T];V=Ge(V);const j=u.gc(x);if(V instanceof Zd)m.push(x);else{const B=el(V,j);B!=null&&(m.push(x),v.set(x,B))}}const E=new bn(m);return new q0(v,E,u.fieldTransforms)}function WD(n,e,t,r=!1){return el(t,n.Dc(r?4:3,e))}function el(n,e){if(Q0(n=Ge(n)))return qg("Unsupported field value:",e,n),K0(n,e);if(n instanceof Xd)return(function(r,s){if(!G0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=el(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ot.fromDate(r);return{timestampValue:ld(s.serializer,a)}}if(r instanceof ot){const a=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ld(s.serializer,a)}}if(r instanceof Or)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:d0(s.serializer,r._byteString)};if(r instanceof Ct){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Pg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lr)return(function(u,d){return{mapValue:{fields:{[jI]:{stringValue:BI},[rd]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Rg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Vd(r)}`)})(n,e)}function K0(n,e){const t={};return OI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(n,((r,s)=>{const a=el(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function Q0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Or||n instanceof Hn||n instanceof Ct||n instanceof Xd||n instanceof Lr)}function qg(n,e,t){if(!Q0(t)||!DI(t)){const r=Vd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Fm(n,e,t){if((e=Ge(e))instanceof Yd)return e._internalPath;if(typeof e=="string")return Gg(n,e);throw fd("Field path arguments must be of type string or ",n,!1,void 0,t)}const HD=new RegExp("[~\\*/\\[\\]]");function Gg(n,e,t){if(e.search(HD)>=0)throw fd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yd(...e.split("."))._internalPath}catch{throw fd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new se(G.INVALID_ARGUMENT,d+n+f)}function Y0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class X0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ef("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qD extends X0{data(){return super.data()}}function ef(n,e){return typeof e=="string"?Gg(n,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}/**
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
 */function J0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kg{}class Qg extends Kg{}function Ua(n,e,...t){let r=[];e instanceof Kg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Yg)).length,d=a.filter((f=>f instanceof tf)).length;if(u>1||u>0&&d>0)throw new se(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class tf extends Qg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new tf(e,t,r)}_apply(e){const t=this._parse(e);return eS(e._query,t),new wi(e.firestore,e.converter,Am(e._query,t))}_parse(e){const t=Wg(e.firestore);return(function(a,u,d,f,m,v,E){let T;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){xw(E,v);const V=[];for(const j of E)V.push(Nw(f,a,j));T={arrayValue:{values:V}}}else T=Nw(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||xw(E,v),T=WD(d,u,E,v==="in"||v==="not-in");return It.create(m,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Z0(n,e,t){const r=e,s=ef("where",n);return tf._create(s,r,t)}class Yg extends Kg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)eS(u,f),u=Am(u,f)})(e._query,t),new wi(e.firestore,e.converter,Am(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xg extends Qg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new se(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new se(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Du(a,u)})(e._query,this._field,this._direction);return new wi(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new Ja(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Ou(n,e="asc"){const t=e,r=ef("orderBy",n);return Xg._create(r,t)}class Jg extends Qg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Jg(e,t,r)}_apply(e){return new wi(e.firestore,e.converter,sd(e._query,this._limit,this._limitType))}}function Lu(n){return YP("limit",n),Jg._create("limit",n,"F")}function Nw(n,e,t){if(typeof(t=Ge(t))=="string"){if(t==="")throw new se(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QI(e)&&t.indexOf("/")!==-1)throw new se(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(nt.fromString(t));if(!_e.isDocumentKey(r))throw new se(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qE(n,new _e(r))}if(t instanceof Ct)return qE(n,t._key);throw new se(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vd(t)}.`)}function xw(n,e){if(!Array.isArray(n)||n.length===0)throw new se(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eS(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class GD{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Es(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[rd].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>_t(u.doubleValue)));return new Lr(a)}convertGeoPoint(e){return new Or(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=jd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pu(e));default:return null}}convertTimestamp(e){const t=hs(e);return new ot(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=nt.fromString(e);qe(y0(r),9688,{name:e});const s=new Nu(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return s.isEqual(t)||_i(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function KD(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ro extends X0{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ef("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ro._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ro._jsonSchemaVersion="firestore/documentSnapshot/1.0",ro._jsonSchema={type:St("string",ro._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class zh extends ro{data(e={}){return super.data(e)}}class io{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new zh(this._firestore,this._userDataWriter,r.key,r,new cu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new zh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new cu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new zh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new cu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:QD(d.type),doc:f,oldIndex:m,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=io._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}io._jsonSchemaVersion="firestore/querySnapshot/1.0",io._jsonSchema={type:St("string",io._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class Zg extends GD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,t)}}function YD(n){n=hi(n,wi);const e=hi(n.firestore,Fa),t=$g(e),r=new Zg(e);return J0(n._query),bD(t,n._query).then((s=>new io(e,r,n,s)))}function Um(n,e,t,...r){n=hi(n,Ct);const s=hi(n.firestore,Fa),a=Wg(s);let u;return u=typeof(e=Ge(e))=="string"||e instanceof Yd?$D(a,"updateDoc",n._key,e,t,r):zD(a,"updateDoc",n._key,e),tS(s,[u.toMutation(n._key,Dr.exists(!0))])}function XD(n,e){const t=hi(n.firestore,Fa),r=dd(n),s=KD(n.converter,e);return tS(t,[jD(Wg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Dr.exists(!1))]).then((()=>r))}function Mu(n,...e){var t,r,s;n=Ge(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Pw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Pw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,v;if(n instanceof Ct)m=hi(n.firestore,Fa),v=Cg(n._key.path),f={next:E=>{e[u]&&e[u](JD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=hi(n,wi);m=hi(E.firestore,Fa),v=E._query;const T=new Zg(m);f={next:x=>{e[u]&&e[u](new io(m,T,E,x))},error:e[u+1],complete:e[u+2]},J0(n._query)}return(function(T,x,V,j){const B=new z0(j),Z=new b0(x,B,V);return T.asyncQueue.enqueueAndForget((async()=>x0(await Vm(T),Z))),()=>{B.Ou(),T.asyncQueue.enqueueAndForget((async()=>D0(await Vm(T),Z)))}})($g(m),v,d,f)}function tS(n,e){return(function(r,s){const a=new is;return r.asyncQueue.enqueueAndForget((async()=>wD(await DD(r),s,a))),a.promise})($g(n),e)}function JD(n,e,t){const r=t.docs.get(e._key),s=new Zg(n);return new ro(n,s,e._key,r,new cu(t.hasPendingWrites,t.fromCache),e.converter)}function ZD(...n){return new Hg("arrayUnion",n)}(function(e,t=!0){(function(s){Qa=s})(ys),ls(new pi("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Fa(new zP(r.getProvider("auth-internal")),new HP(u,r.getProvider("app-check-internal")),(function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new se(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nu(m.options.projectId,v)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Kn(DE,bE,e),Kn(DE,bE,"esm2017")})();var Dw={};const bw="@firebase/database",Ow="1.0.20";/**
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
 */let nS="";function eb(n){nS=n}/**
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
 */class tb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$t(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Su(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class nb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return jr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tb(e)}}catch{}return new nb},to=rS("localStorage"),rb=rS("sessionStorage");/**
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
 */const Ra=new xd("@firebase/database"),ib=(function(){let n=1;return function(){return n++}})(),iS=function(n){const e=_A(n),t=new fA;t.update(e);const r=t.digest();return ig.encodeByteArray(r)},tc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=tc.apply(null,r):typeof r=="object"?e+=$t(r):e+=r,e+=" "}return e};let yu=null,Lw=!0;const sb=function(n,e){te(!0,"Can't turn on custom loggers persistently."),Ra.logLevel=Oe.VERBOSE,yu=Ra.log.bind(Ra)},Kt=function(...n){if(Lw===!0&&(Lw=!1,yu===null&&rb.get("logging_enabled")===!0&&sb()),yu){const e=tc.apply(null,n);yu(e)}},nc=function(n){return function(...e){Kt(n,...e)}},jm=function(...n){const e="FIREBASE INTERNAL ERROR: "+tc(...n);Ra.error(e)},vi=function(...n){const e=`FIREBASE FATAL ERROR: ${tc(...n)}`;throw Ra.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+tc(...n);Ra.warn(e)},ob=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ab=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ja="[MIN_NAME]",fo="[MAX_NAME]",wo=function(n,e){if(n===e)return 0;if(n===ja||e===fo)return-1;if(e===ja||n===fo)return 1;{const t=Mw(n),r=Mw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},lb=function(n,e){return n===e?0:n<e?-1:1},Zl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$t(e))},e_=function(n){if(typeof n!="object"||n===null)return $t(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=$t(e[r]),t+=":",t+=e_(n[e[r]]);return t+="}",t},sS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function on(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const oS=function(n){te(!nf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const v=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(v.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},ub=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hb(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const db=new RegExp("^-?(0*)\\d{1,10}$"),fb=-2147483648,pb=2147483647,Mw=function(n){if(db.test(n)){const e=Number(n);if(e>=fb&&e<=pb)return e}return null},tl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},mb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class gb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Dn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _b{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class $h{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$h.OWNER="owner";/**
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
 */const t_="5",aS="v",lS="s",uS="r",cS="f",hS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dS="ls",fS="p",Bm="ac",pS="websocket",mS="long_polling";/**
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
 */class gS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=to.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&to.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function yb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function _S(n,e,t){te(typeof e=="string","typeof type must == string"),te(typeof t=="object","typeof params must == object");let r;if(e===pS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===mS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yb(n)&&(t.ns=n.namespace);const s=[];return on(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
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
 */class vb{constructor(){this.counters_={}}incrementCounter(e,t=1){jr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qR(this.counters_)}}/**
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
 */const nm={},rm={};function n_(n){const e=n.toString();return nm[e]||(nm[e]=new vb),nm[e]}function Eb(n,e){const t=n.toString();return rm[t]||(rm[t]=e()),rm[t]}/**
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
 */class wb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&tl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vw="start",Tb="close",Ib="pLPCommand",Sb="pRTLPCB",yS="id",vS="pw",ES="ser",Cb="cb",Rb="seg",Ab="ts",kb="d",Pb="dframe",wS=1870,TS=30,Nb=wS-TS,xb=25e3,Db=3e4;class wa{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nc(e),this.stats_=n_(t),this.urlFn=f=>(this.appCheckToken&&(f[Bm]=this.appCheckToken),_S(t,mS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Db)),ab(()=>{if(this.isClosed_)return;this.scriptTagHolder=new r_((...a)=>{const[u,d,f,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Vw)this.id=d,this.password=f;else if(u===Tb)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vw]="t",r[ES]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Cb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aS]=t_,this.transportSessionId&&(r[lS]=this.transportSessionId),this.lastSessionId&&(r[dS]=this.lastSessionId),this.applicationId&&(r[fS]=this.applicationId),this.appCheckToken&&(r[Bm]=this.appCheckToken),typeof location<"u"&&location.hostname&&hS.test(location.hostname)&&(r[uS]=cS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wa.forceAllow_=!0}static forceDisallow(){wa.forceDisallow_=!0}static isAvailable(){return wa.forceAllow_?!0:!wa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ub()&&!cb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$t(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=NT(t),s=sS(r,Nb);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Pb]="t",r[yS]=e,r[vS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$t(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class r_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ib(),window[Ib+this.uniqueCallbackIdentifier]=e,window[Sb+this.uniqueCallbackIdentifier]=t,this.myIFrame=r_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Kt("frame writing exception"),d.stack&&Kt(d.stack),Kt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yS]=this.myID,e[vS]=this.myPW,e[ES]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+TS+r.length<=wS;){const u=this.pendingSegs.shift();r=r+"&"+Rb+s+"="+u.seg+"&"+Ab+s+"="+u.ts+"&"+kb+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(xb)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bb=16384,Ob=45e3;let pd=null;typeof MozWebSocket<"u"?pd=MozWebSocket:typeof WebSocket<"u"&&(pd=WebSocket);class cr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nc(this.connId),this.stats_=n_(t),this.connURL=cr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[aS]=t_,typeof location<"u"&&location.hostname&&hS.test(location.hostname)&&(u[uS]=cS),t&&(u[lS]=t),r&&(u[dS]=r),s&&(u[Bm]=s),a&&(u[fS]=a),_S(e,pS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,to.set("previous_websocket_failure",!0);try{let r;iA(),this.mySock=new pd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pd!==null&&!cr.forceDisallow_}static previouslyFailed(){return to.isInMemoryStorage||to.get("previous_websocket_failure")===!0}markConnectionHealthy(){to.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Su(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=$t(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sS(t,bb);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ob))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cr.responsesRequiredToBeHealthy=2;cr.healthyTimeout=3e4;/**
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
 */class Vu{static get ALL_TRANSPORTS(){return[wa,cr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=cr&&cr.isAvailable();let r=t&&!cr.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cr];else{const s=this.transports_=[];for(const a of Vu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Vu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vu.globalTransportInitialized_=!1;/**
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
 */const Lb=6e4,Mb=5e3,Vb=10*1024,Fb=100*1024,im="t",Fw="d",Ub="s",Uw="r",jb="e",jw="o",Bw="a",zw="n",$w="p",Bb="h";class zb{constructor(e,t,r,s,a,u,d,f,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nc("c:"+this.id+":"),this.transportManager_=new Vu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(im in e){const t=e[im];t===Bw?this.upgradeIfSecondaryHealthy_():t===Uw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===jw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Zl("t",e),r=Zl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$w,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Zl("t",e),r=Zl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Zl(im,e);if(Fw in e){const r=e[Fw];if(t===Bb){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===zw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ub?this.onConnectionShutdown_(r):t===Uw?this.onReset_(r):t===jb?jm("Server Error: "+r):t===jw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),t_!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$w,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(to.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class IS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class SS{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){te(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class md extends SS{static getInstance(){return new md}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ag()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ww=32,Hw=768;class Ye{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function We(){return new Ye("")}function Pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function gs(n){return n.pieces_.length-n.pieceNum_}function Je(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ye(n.pieces_,e)}function i_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $b(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function CS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ye(e,0)}function yt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Ye(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function Tn(n,e){const t=Pe(n),r=Pe(e);if(t===null)return e;if(t===r)return Tn(Je(n),Je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Wb(n,e){const t=Fu(n,0),r=Fu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=wo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function s_(n,e){if(gs(n)!==gs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function qn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(gs(n)>gs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Hb{constructor(e,t){this.errorPrefix_=t,this.parts_=Fu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nd(this.parts_[r]);RS(this)}}function qb(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Nd(e),RS(n)}function Gb(n){const e=n.parts_.pop();n.byteLength_-=Nd(e),n.parts_.length>0&&(n.byteLength_-=1)}function RS(n){if(n.byteLength_>Hw)throw new Error(n.errorPrefix_+"has a key path longer than "+Hw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ww)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ww+") or object contains a cycle "+Zs(n))}function Zs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class o_ extends SS{static getInstance(){return new o_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const eu=1e3,Kb=300*1e3,qw=30*1e3,Qb=1.3,Yb=3e4,Xb="server_kill",Gw=3;class di extends IS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=di.nextPersistentConnectionId_++,this.log_=nc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eu,this.maxReconnectDelay_=Kb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");o_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&md.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_($t(a)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new oi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;di.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&jr(e,"w")){const r=Pa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=hA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$t(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):jm("Unrecognized action received from server: "+$t(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yb&&(this.reconnectDelay_=eu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+di.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){te(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new zb(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,x=>{Sn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xb)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Sn(E),f())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qh(this.interruptReasons_)&&(this.reconnectDelay_=eu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>e_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Ye(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Kt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gw&&(this.reconnectDelay_=qw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Kt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+nS.replace(/\./g,"-")]=1,ag()?e["framework.cordova"]=1:LT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=md.getInstance().currentlyOnline();return qh(this.interruptReasons_)&&e}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
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
 */class be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new be(e,t)}}/**
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
 */class rf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new be(ja,e),s=new be(ja,t);return this.compare(r,s)!==0}minPost(){return be.MIN}}/**
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
 */let kh;class AS extends rf{static get __EMPTY_NODE(){return kh}static set __EMPTY_NODE(e){kh=e}compare(e,t){return wo(e.name,t.name)}isDefinedOn(e){throw Ha("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return be.MIN}maxPost(){return new be(fo,kh)}makePost(e,t){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,kh)}toString(){return".key"}}const Aa=new AS;/**
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
 */class Ph{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=s??In.EMPTY_NODE,this.right=a??In.EMPTY_NODE}copy(e,t,r,s,a){return new zt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return In.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0;zt.BLACK=!1;class Jb{copy(e,t,r,s,a){return this}insert(e,t,r){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class In{constructor(e,t=In.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new In(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new In(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ph(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ph(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ph(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ph(this.root_,null,this.comparator_,!0,e)}}In.EMPTY_NODE=new Jb;/**
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
 */function Zb(n,e){return wo(n.name,e.name)}function a_(n,e){return wo(n,e)}/**
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
 */let zm;function eO(n){zm=n}const kS=function(n){return typeof n=="number"?"number:"+oS(n):"string:"+n},PS=function(n){if(n.isLeafNode()){const e=n.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jr(e,".sv"),"Priority must be a string or number.")}else te(n===zm||n.isEmpty(),"priority of unexpected type.");te(n===zm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Kw;class jt{static set __childrenNodeConstructor(e){Kw=e}static get __childrenNodeConstructor(){return Kw}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),PS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Pe(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Pe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(te(r!==".priority"||gs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Je(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=oS(this.value_):e+=this.value_,this.lazyHash_=iS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=jt.VALUE_TYPE_ORDER.indexOf(t),a=jt.VALUE_TYPE_ORDER.indexOf(r);return te(s>=0,"Unknown leaf type: "+t),te(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let NS,xS;function tO(n){NS=n}function nO(n){xS=n}class rO extends rf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?wo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return be.MIN}maxPost(){return new be(fo,new jt("[PRIORITY-POST]",xS))}makePost(e,t){const r=NS(e);return new be(t,new jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ht=new rO;/**
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
 */const iO=Math.log(2);class sO{constructor(e){const t=a=>parseInt(Math.log(a)/iO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gd=function(n,e,t,r){n.sort(e);const s=function(f,m){const v=m-f;let E,T;if(v===0)return null;if(v===1)return E=n[f],T=t?t(E):E,new zt(T,E.node,zt.BLACK,null,null);{const x=parseInt(v/2,10)+f,V=s(f,x),j=s(x+1,m);return E=n[x],T=t?t(E):E,new zt(T,E.node,zt.BLACK,V,j)}},a=function(f){let m=null,v=null,E=n.length;const T=function(V,j){const B=E-V,Z=E;E-=V;const K=s(B+1,Z),ne=n[B],q=t?t(ne):ne;x(new zt(q,ne.node,j,null,K))},x=function(V){m?(m.left=V,m=V):(v=V,m=V)};for(let V=0;V<f.count;++V){const j=f.nextBitIsOne(),B=Math.pow(2,f.count-(V+1));j?T(B,zt.BLACK):(T(B,zt.BLACK),T(B,zt.RED))}return v},u=new sO(n.length),d=a(u);return new In(r||e,d)};/**
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
 */let sm;const ma={};class ui{static get Default(){return te(ma&&ht,"ChildrenNode.ts has not been loaded"),sm=sm||new ui({".priority":ma},{".priority":ht}),sm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Pa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return jr(this.indexSet_,e.toString())}addIndex(e,t){te(e!==Aa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(be.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=gd(r,e.getCompare()):d=ma;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new ui(v,m)}addToIndexes(e,t){const r=Gh(this.indexes_,(s,a)=>{const u=Pa(this.indexSet_,a);if(te(u,"Missing index implementation for "+a),s===ma)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(be.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),gd(d,u.getCompare())}else return ma;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new be(e.name,d))),f.insert(e,e.node)}});return new ui(r,this.indexSet_)}removeFromIndexes(e,t){const r=Gh(this.indexes_,s=>{if(s===ma)return s;{const a=t.get(e.name);return a?s.remove(new be(e.name,a)):s}});return new ui(r,this.indexSet_)}}/**
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
 */let tu;class Te{static get EMPTY_NODE(){return tu||(tu=new Te(new In(a_),null,ui.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&PS(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tu}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?tu:t}}getChild(e){const t=Pe(e);return t===null?this:this.getImmediateChild(t).getChild(Je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(te(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new be(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?tu:this.priorityNode_;return new Te(s,u,a)}}updateChild(e,t){const r=Pe(e);if(r===null)return t;{te(Pe(e)!==".priority"||gs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Je(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(ht,(u,d)=>{t[u]=d.val(e),r++,a&&Te.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kS(this.getPriority().val())+":"),this.forEachChild(ht,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":iS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new be(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new be(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,be.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rc?-1:0}withIndex(e){if(e===Aa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Aa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ht),s=t.getIterator(ht);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Aa?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oO extends Te{constructor(){super(new In(a_),Te.EMPTY_NODE,ui.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const rc=new oO;Object.defineProperties(be,{MIN:{value:new be(ja,Te.EMPTY_NODE)},MAX:{value:new be(fo,rc)}});AS.__EMPTY_NODE=Te.EMPTY_NODE;jt.__childrenNodeConstructor=Te;eO(rc);nO(rc);/**
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
 */const aO=!0;function Tt(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,Tt(e))}if(!(n instanceof Array)&&aO){const t=[];let r=!1;if(on(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Tt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new be(u,f)))}}),t.length===0)return Te.EMPTY_NODE;const a=gd(t,Zb,u=>u.name,a_);if(r){const u=gd(t,ht.getCompare());return new Te(a,Tt(e),new ui({".priority":u},{".priority":ht}))}else return new Te(a,Tt(e),ui.Default)}else{let t=Te.EMPTY_NODE;return on(n,(r,s)=>{if(jr(n,r)&&r.substring(0,1)!=="."){const a=Tt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Tt(e))}}tO(Tt);/**
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
 */class lO extends rf{constructor(e){super(),this.indexPath_=e,te(!De(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?wo(e.name,t.name):a}makePost(e,t){const r=Tt(e),s=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new be(t,s)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,rc);return new be(fo,e)}toString(){return Fu(this.indexPath_,0).join("/")}}/**
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
 */class uO extends rf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?wo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,t){const r=Tt(e);return new be(t,r)}toString(){return".value"}}const cO=new uO;/**
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
 */function DS(n){return{type:"value",snapshotNode:n}}function Ba(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Uu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ju(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function hO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class l_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){te(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Uu(t,d)):te(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Ba(t,r)):u.trackChildChange(ju(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ht,(s,a)=>{t.hasChild(s)||r.trackChildChange(Uu(s,a))}),t.isLeafNode()||t.forEachChild(ht,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(ju(s,a,u))}else r.trackChildChange(Ba(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Bu{constructor(e){this.indexedFilter_=new l_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bu.getStartPost_(e),this.endPost_=Bu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new be(t,r))||(r=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Te.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Te.EMPTY_NODE);const a=this;return t.forEachChild(ht,(u,d)=>{a.matches(new be(u,d))||(s=s.updateImmediateChild(u,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class dO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Bu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new be(t,r))||(r=Te.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Te.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Te.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,x)=>E(x,T)}else u=this.index_.getCompare();const d=e;te(d.numChildren()===this.limit_,"");const f=new be(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const x=T==null?1:u(T,f);if(v&&!r.isEmpty()&&x>=0)return a!=null&&a.trackChildChange(ju(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Uu(t,E));const j=d.updateImmediateChild(t,Te.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(Ba(T.name,T.node)),j.updateImmediateChild(T.name,T.node)):j}}else return r.isEmpty()?e:v&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Uu(m.name,m.node)),a.trackChildChange(Ba(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Te.EMPTY_NODE)):e}}/**
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
 */class u_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ja}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new u_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fO(n){return n.loadsAllData()?new l_(n.getIndex()):n.hasLimit()?new dO(n):new Bu(n)}function Qw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ht?t="$priority":n.index_===cO?t="$value":n.index_===Aa?t="$key":(te(n.index_ instanceof lO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$t(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=$t(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+$t(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=$t(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+$t(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Yw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ht&&(e.i=n.index_.toString()),e}/**
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
 */class _d extends IS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=nc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=_d.getListenId_(e,r),d={};this.listens_[u]=d;const f=Qw(e._queryParams);this.restRequest_(a+".json",f,(m,v)=>{let E=v;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),Pa(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=_d.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Qw(e._queryParams),r=e._path.toString(),s=new oi;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qa(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Su(d.responseText)}catch{Sn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Sn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
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
 */class pO{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function yd(){return{value:null,children:new Map}}function nl(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Pe(e);n.children.has(r)||n.children.set(r,yd());const s=n.children.get(r);e=Je(e),nl(s,e,t)}}function $m(n,e){if(De(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ht,(r,s)=>{nl(n,new Ye(r),s)}),$m(n,e)}}else if(n.children.size>0){const t=Pe(e);return e=Je(e),n.children.has(t)&&$m(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Wm(n,e,t){n.value!==null?t(e,n.value):mO(n,(r,s)=>{const a=new Ye(e.toString()+"/"+r);Wm(s,a,t)})}function mO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class gO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&on(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Xw=10*1e3,_O=30*1e3,yO=300*1e3;class vO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gO(e);const r=Xw+(_O-Xw)*Math.random();vu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;on(e,(s,a)=>{a>0&&jr(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*yO))}}/**
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
 */var dr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dr||(dr={}));function bS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function h_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class vd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=dr.ACK_USER_WRITE,this.source=bS()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ye(e));return new vd(We(),t,this.revert)}}else return te(Pe(this.path)===e,"operationForChild called for unrelated child."),new vd(Je(this.path),this.affectedTree,this.revert)}}/**
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
 */class zu{constructor(e,t){this.source=e,this.path=t,this.type=dr.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new zu(this.source,We()):new zu(this.source,Je(this.path))}}/**
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
 */class po{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=dr.OVERWRITE}operationForChild(e){return De(this.path)?new po(this.source,We(),this.snap.getImmediateChild(e)):new po(this.source,Je(this.path),this.snap)}}/**
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
 */class $u{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=dr.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new Ye(e));return t.isEmpty()?null:t.value?new po(this.source,We(),t.value):new $u(this.source,We(),t)}else return te(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $u(this.source,Je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class EO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(hO(u.childName,u.snapshotNode))}),nu(n,s,"child_removed",e,r,t),nu(n,s,"child_added",e,r,t),nu(n,s,"child_moved",a,r,t),nu(n,s,"child_changed",e,r,t),nu(n,s,"value",e,r,t),s}function nu(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>IO(n,d,f)),u.forEach(d=>{const f=TO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function TO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function IO(n,e,t){if(e.childName==null||t.childName==null)throw Ha("Should only compare child_ events.");const r=new be(e.childName,e.snapshotNode),s=new be(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function sf(n,e){return{eventCache:n,serverCache:e}}function Eu(n,e,t,r){return sf(new mo(e,t,r),n.serverCache)}function OS(n,e,t,r){return sf(n.eventCache,new mo(e,t,r))}function Hm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function go(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let om;const SO=()=>(om||(om=new In(lb)),om);class st{static fromObject(e){let t=new st(null);return on(e,(r,s)=>{t=t.set(new Ye(r),s)}),t}constructor(e,t=SO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:We(),value:this.value};if(De(e))return null;{const r=Pe(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(Je(e),t);return a!=null?{path:yt(new Ye(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Pe(e),r=this.children.get(t);return r!==null?r.subtree(Je(e)):new st(null)}}set(e,t){if(De(e))return new st(t,this.children);{const r=Pe(e),a=(this.children.get(r)||new st(null)).set(Je(e),t),u=this.children.insert(r,a);return new st(this.value,u)}}remove(e){if(De(e))return this.children.isEmpty()?new st(null):new st(null,this.children);{const t=Pe(e),r=this.children.get(t);if(r){const s=r.remove(Je(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new st(null):new st(this.value,a)}else return this}}get(e){if(De(e))return this.value;{const t=Pe(e),r=this.children.get(t);return r?r.get(Je(e)):null}}setTree(e,t){if(De(e))return t;{const r=Pe(e),a=(this.children.get(r)||new st(null)).setTree(Je(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new st(this.value,u)}}fold(e){return this.fold_(We(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(yt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,We(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(De(e))return null;{const a=Pe(e),u=this.children.get(a);return u?u.findOnPath_(Je(e),yt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,We(),t)}foreachOnPath_(e,t,r){if(De(e))return this;{this.value&&r(t,this.value);const s=Pe(e),a=this.children.get(s);return a?a.foreachOnPath_(Je(e),yt(t,s),r):new st(null)}}foreach(e){this.foreach_(We(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(yt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class fr{constructor(e){this.writeTree_=e}static empty(){return new fr(new st(null))}}function wu(n,e,t){if(De(e))return new fr(new st(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Tn(s,e);return a=a.updateChild(u,t),new fr(n.writeTree_.set(s,a))}else{const s=new st(t),a=n.writeTree_.setTree(e,s);return new fr(a)}}}function Jw(n,e,t){let r=n;return on(t,(s,a)=>{r=wu(r,yt(e,s),a)}),r}function Zw(n,e){if(De(e))return fr.empty();{const t=n.writeTree_.setTree(e,new st(null));return new fr(t)}}function qm(n,e){return To(n,e)!=null}function To(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Tn(t.path,e)):null}function eT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ht,(r,s)=>{e.push(new be(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new be(r,s.value))}),e}function as(n,e){if(De(e))return n;{const t=To(n,e);return t!=null?new fr(new st(t)):new fr(n.writeTree_.subtree(e))}}function Gm(n){return n.writeTree_.isEmpty()}function za(n,e){return LS(We(),n.writeTree_,e)}function LS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(te(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=LS(yt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(yt(n,".priority"),r)),t}}/**
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
 */function d_(n,e){return US(e,n)}function CO(n,e,t,r,s){te(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=wu(n.visibleWrites,e,t)),n.lastWriteId=r}function RO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function AO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);te(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&kO(d,r.path)?s=!1:qn(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return PO(n),!0;if(r.snap)n.visibleWrites=Zw(n.visibleWrites,r.path);else{const d=r.children;on(d,f=>{n.visibleWrites=Zw(n.visibleWrites,yt(r.path,f))})}return!0}else return!1}function kO(n,e){if(n.snap)return qn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&qn(yt(n.path,t),e))return!0;return!1}function PO(n){n.visibleWrites=MS(n.allWrites,NO,We()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function NO(n){return n.visible}function MS(n,e,t){let r=fr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)qn(t,u)?(d=Tn(t,u),r=wu(r,d,a.snap)):qn(u,t)&&(d=Tn(u,t),r=wu(r,We(),a.snap.getChild(d)));else if(a.children){if(qn(t,u))d=Tn(t,u),r=Jw(r,d,a.children);else if(qn(u,t))if(d=Tn(u,t),De(d))r=Jw(r,We(),a.children);else{const f=Pa(a.children,Pe(d));if(f){const m=f.getChild(Je(d));r=wu(r,We(),m)}}}else throw Ha("WriteRecord should have .snap or .children")}}return r}function VS(n,e,t,r,s){if(!r&&!s){const a=To(n.visibleWrites,e);if(a!=null)return a;{const u=as(n.visibleWrites,e);if(Gm(u))return t;if(t==null&&!qm(u,We()))return null;{const d=t||Te.EMPTY_NODE;return za(u,d)}}}else{const a=as(n.visibleWrites,e);if(!s&&Gm(a))return t;if(!s&&t==null&&!qm(a,We()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(qn(m.path,e)||qn(e,m.path))},d=MS(n.allWrites,u,e),f=t||Te.EMPTY_NODE;return za(d,f)}}}function xO(n,e,t){let r=Te.EMPTY_NODE;const s=To(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ht,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=as(n.visibleWrites,e);return t.forEachChild(ht,(u,d)=>{const f=za(as(a,new Ye(u)),d);r=r.updateImmediateChild(u,f)}),eT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=as(n.visibleWrites,e);return eT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function DO(n,e,t,r,s){te(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=yt(e,t);if(qm(n.visibleWrites,a))return null;{const u=as(n.visibleWrites,a);return Gm(u)?s.getChild(t):za(u,s.getChild(t))}}function bO(n,e,t,r){const s=yt(e,t),a=To(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=as(n.visibleWrites,s);return za(u,r.getNode().getImmediateChild(t))}else return null}function OO(n,e){return To(n.visibleWrites,e)}function LO(n,e,t,r,s,a,u){let d;const f=as(n.visibleWrites,e),m=To(f,We());if(m!=null)d=m;else if(t!=null)d=za(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let x=T.getNext();for(;x&&v.length<s;)E(x,r)!==0&&v.push(x),x=T.getNext();return v}else return[]}function MO(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function Ed(n,e,t,r){return VS(n.writeTree,n.treePath,e,t,r)}function f_(n,e){return xO(n.writeTree,n.treePath,e)}function tT(n,e,t,r){return DO(n.writeTree,n.treePath,e,t,r)}function wd(n,e){return OO(n.writeTree,yt(n.treePath,e))}function VO(n,e,t,r,s,a){return LO(n.writeTree,n.treePath,e,t,r,s,a)}function p_(n,e,t){return bO(n.writeTree,n.treePath,e,t)}function FS(n,e){return US(yt(n.treePath,e),n.writeTree)}function US(n,e){return{treePath:n,writeTree:e}}/**
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
 */class FO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;te(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),te(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,ju(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Uu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Ba(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,ju(r,e.snapshotNode,s.oldSnap));else throw Ha("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const jS=new UO;class m_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return p_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:go(this.viewCache_),a=VO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function jO(n){return{filter:n}}function BO(n,e){te(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function zO(n,e,t,r,s){const a=new FO;let u,d;if(t.type===dr.OVERWRITE){const m=t;m.source.fromUser?u=Km(n,e,m.path,m.snap,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!De(m.path),u=Td(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===dr.MERGE){const m=t;m.source.fromUser?u=WO(n,e,m.path,m.children,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Qm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===dr.ACK_USER_WRITE){const m=t;m.revert?u=GO(n,e,m.path,r,s,a):u=HO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===dr.LISTEN_COMPLETE)u=qO(n,e,t.path,r,a);else throw Ha("Unknown operation type: "+t.type);const f=a.getChanges();return $O(e,u,f),{viewCache:u,changes:f}}function $O(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Hm(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(DS(Hm(e)))}}function BS(n,e,t,r,s,a){const u=e.eventCache;if(wd(r,t)!=null)return e;{let d,f;if(De(t))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=go(e),v=m instanceof Te?m:Te.EMPTY_NODE,E=f_(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=Ed(r,go(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Pe(t);if(m===".priority"){te(gs(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const E=tT(r,t,v,f);E!=null?d=n.filter.updatePriority(v,E):d=u.getNode()}else{const v=Je(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=tT(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(v,T):E=u.getNode().getImmediateChild(m)}else E=p_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,v,s,a):d=u.getNode()}}return Eu(e,d,u.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function Td(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(De(t))m=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const x=f.getNode().updateChild(t,r);m=v.updateFullNode(f.getNode(),x,null)}else{const x=Pe(t);if(!f.isCompleteForPath(t)&&gs(t)>1)return e;const V=Je(t),B=f.getNode().getImmediateChild(x).updateChild(V,r);x===".priority"?m=v.updatePriority(f.getNode(),B):m=v.updateChild(f.getNode(),x,B,V,jS,null)}const E=OS(e,m,f.isFullyInitialized()||De(t),v.filtersNodes()),T=new m_(s,E,a);return BS(n,E,t,s,T,d)}function Km(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const v=new m_(s,e,a);if(De(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Eu(e,m,!0,n.filter.filtersNodes());else{const E=Pe(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Eu(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=Je(t),x=d.getNode().getImmediateChild(E);let V;if(De(T))V=r;else{const j=v.getCompleteChild(E);j!=null?i_(T)===".priority"&&j.getChild(CS(T)).isEmpty()?V=j:V=j.updateChild(T,r):V=Te.EMPTY_NODE}if(x.equals(V))f=e;else{const j=n.filter.updateChild(d.getNode(),E,V,T,v,u);f=Eu(e,j,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function nT(n,e){return n.eventCache.isCompleteForChild(e)}function WO(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const v=yt(t,f);nT(e,Pe(v))&&(d=Km(n,d,v,m,s,a,u))}),r.foreach((f,m)=>{const v=yt(t,f);nT(e,Pe(v))||(d=Km(n,d,v,m,s,a,u))}),d}function rT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Qm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;De(t)?m=r:m=new st(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(v.hasChild(E)){const x=e.serverCache.getNode().getImmediateChild(E),V=rT(n,x,T);f=Td(n,f,new Ye(E),V,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const x=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!v.hasChild(E)&&!x){const V=e.serverCache.getNode().getImmediateChild(E),j=rT(n,V,T);f=Td(n,f,new Ye(E),j,s,a,u,d)}}),f}function HO(n,e,t,r,s,a,u){if(wd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(De(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Td(n,e,t,f.getNode().getChild(t),s,a,d,u);if(De(t)){let m=new st(null);return f.getNode().forEachChild(Aa,(v,E)=>{m=m.set(new Ye(v),E)}),Qm(n,e,t,m,s,a,d,u)}else return e}else{let m=new st(null);return r.foreach((v,E)=>{const T=yt(t,v);f.isCompleteForPath(T)&&(m=m.set(v,f.getNode().getChild(T)))}),Qm(n,e,t,m,s,a,d,u)}}function qO(n,e,t,r,s){const a=e.serverCache,u=OS(e,a.getNode(),a.isFullyInitialized()||De(t),a.isFiltered());return BS(n,u,t,r,jS,s)}function GO(n,e,t,r,s,a){let u;if(wd(r,t)!=null)return e;{const d=new m_(r,e,s),f=e.eventCache.getNode();let m;if(De(t)||Pe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Ed(r,go(e));else{const E=e.serverCache.getNode();te(E instanceof Te,"serverChildren would be complete if leaf node"),v=f_(r,E)}v=v,m=n.filter.updateFullNode(f,v,a)}else{const v=Pe(t);let E=p_(r,v,e.serverCache);E==null&&e.serverCache.isCompleteForChild(v)&&(E=f.getImmediateChild(v)),E!=null?m=n.filter.updateChild(f,v,E,Je(t),d,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(f,v,Te.EMPTY_NODE,Je(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Ed(r,go(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||wd(r,We())!=null,Eu(e,m,u,n.filter.filtersNodes())}}/**
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
 */class KO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new l_(r.getIndex()),a=fO(r);this.processor_=jO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Te.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),v=new mo(f,u.isFullyInitialized(),s.filtersNodes()),E=new mo(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=sf(E,v),this.eventGenerator_=new EO(this.query_)}get query(){return this.query_}}function QO(n){return n.viewCache_.serverCache.getNode()}function YO(n,e){const t=go(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Pe(e)).isEmpty())?t.getChild(e):null}function iT(n){return n.eventRegistrations_.length===0}function XO(n,e){n.eventRegistrations_.push(e)}function sT(n,e,t){const r=[];if(t){te(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function oT(n,e,t,r){e.type===dr.MERGE&&e.source.queryId!==null&&(te(go(n.viewCache_),"We should always have a full cache before handling merges"),te(Hm(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=zO(n.processor_,s,e,t,r);return BO(n.processor_,a.viewCache),te(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,zS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function JO(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ht,(a,u)=>{r.push(Ba(a,u))}),t.isFullyInitialized()&&r.push(DS(t.getNode())),zS(n,r,t.getNode(),e)}function zS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return wO(n.eventGenerator_,e,t,s)}/**
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
 */let Id;class ZO{constructor(){this.views=new Map}}function e2(n){te(!Id,"__referenceConstructor has already been defined"),Id=n}function t2(){return te(Id,"Reference.ts has not been loaded"),Id}function n2(n){return n.views.size===0}function g_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return te(a!=null,"SyncTree gave us an op for an invalid query."),oT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(oT(u,e,t,r));return a}}function r2(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Ed(t,s?r:null),f=!1;d?f=!0:r instanceof Te?(d=f_(t,r),f=!1):(d=Te.EMPTY_NODE,f=!1);const m=sf(new mo(d,f,!1),new mo(r,s,!1));return new KO(e,m)}return u}function i2(n,e,t,r,s,a){const u=r2(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),XO(u,t),JO(u,t)}function s2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=_s(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(sT(m,t,r)),iT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(sT(f,t,r)),iT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!_s(n)&&a.push(new(t2())(e._repo,e._path)),{removed:a,events:u}}function $S(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ka(n,e){let t=null;for(const r of n.views.values())t=t||YO(r,e);return t}function WS(n,e){if(e._queryParams.loadsAllData())return of(n);{const r=e._queryIdentifier;return n.views.get(r)}}function HS(n,e){return WS(n,e)!=null}function _s(n){return of(n)!=null}function of(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sd;function o2(n){te(!Sd,"__referenceConstructor has already been defined"),Sd=n}function a2(){return te(Sd,"Reference.ts has not been loaded"),Sd}let l2=1;class aT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new st(null),this.pendingWriteTree_=MO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qS(n,e,t,r,s){return CO(n.pendingWriteTree_,e,t,r,s),s?ic(n,new po(bS(),e,t)):[]}function no(n,e,t=!1){const r=RO(n.pendingWriteTree_,e);if(AO(n.pendingWriteTree_,e)){let a=new st(null);return r.snap!=null?a=a.set(We(),!0):on(r.children,u=>{a=a.set(new Ye(u),!0)}),ic(n,new vd(r.path,a,t))}else return[]}function af(n,e,t){return ic(n,new po(c_(),e,t))}function u2(n,e,t){const r=st.fromObject(t);return ic(n,new $u(c_(),e,r))}function c2(n,e){return ic(n,new zu(c_(),e))}function h2(n,e,t){const r=y_(n,t);if(r){const s=v_(r),a=s.path,u=s.queryId,d=Tn(a,e),f=new zu(h_(u),d);return E_(n,a,f)}else return[]}function Ym(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||HS(u,e))){const f=s2(u,e,t,r);n2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const v=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,x)=>_s(x));if(v&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const x=p2(T);for(let V=0;V<x.length;++V){const j=x[V],B=j.query,Z=QS(n,j);n.listenProvider_.startListening(Tu(B),Cd(n,B),Z.hashFn,Z.onComplete)}}}!E&&m.length>0&&!r&&(v?n.listenProvider_.stopListening(Tu(e),null):m.forEach(T=>{const x=n.queryToTagMap.get(lf(T));n.listenProvider_.stopListening(Tu(T),x)}))}m2(n,m)}return d}function d2(n,e,t,r){const s=y_(n,r);if(s!=null){const a=v_(s),u=a.path,d=a.queryId,f=Tn(u,e),m=new po(h_(d),f,t);return E_(n,u,m)}else return[]}function f2(n,e,t,r){const s=y_(n,r);if(s){const a=v_(s),u=a.path,d=a.queryId,f=Tn(u,e),m=st.fromObject(t),v=new $u(h_(d),f,m);return E_(n,u,v)}else return[]}function lT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,x)=>{const V=Tn(T,s);a=a||ka(x,V),u=u||_s(x)});let d=n.syncPointTree_.get(s);d?(u=u||_s(d),a=a||ka(d,We())):(d=new ZO,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Te.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((x,V)=>{const j=ka(V,We());j&&(a=a.updateImmediateChild(x,j))}));const m=HS(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=lf(e);te(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const x=g2();n.queryToTagMap.set(T,x),n.tagToQueryMap.set(x,T)}const v=d_(n.pendingWriteTree_,s);let E=i2(d,e,t,v,a,f);if(!m&&!u&&!r){const T=WS(d,e);E=E.concat(_2(n,e,T))}return E}function __(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Tn(u,e),m=ka(d,f);if(m)return m});return VS(s,e,a,t,!0)}function ic(n,e){return GS(e,n.syncPointTree_,null,d_(n.pendingWriteTree_,We()))}function GS(n,e,t,r){if(De(n.path))return KS(n,e,t,r);{const s=e.get(We());t==null&&s!=null&&(t=ka(s,We()));let a=[];const u=Pe(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,v=FS(r,u);a=a.concat(GS(d,f,m,v))}return s&&(a=a.concat(g_(s,n,r,t))),a}}function KS(n,e,t,r){const s=e.get(We());t==null&&s!=null&&(t=ka(s,We()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=FS(r,u),v=n.operationForChild(u);v&&(a=a.concat(KS(v,d,f,m)))}),s&&(a=a.concat(g_(s,n,r,t))),a}function QS(n,e){const t=e.query,r=Cd(n,t);return{hashFn:()=>(QO(e)||Te.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?h2(n,t._path,r):c2(n,t._path);{const a=hb(s,t);return Ym(n,t,null,a)}}}}function Cd(n,e){const t=lf(e);return n.queryToTagMap.get(t)}function lf(n){return n._path.toString()+"$"+n._queryIdentifier}function y_(n,e){return n.tagToQueryMap.get(e)}function v_(n){const e=n.indexOf("$");return te(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ye(n.substr(0,e))}}function E_(n,e,t){const r=n.syncPointTree_.get(e);te(r,"Missing sync point for query tag that we're tracking");const s=d_(n.pendingWriteTree_,e);return g_(r,t,s,null)}function p2(n){return n.fold((e,t,r)=>{if(t&&_s(t))return[of(t)];{let s=[];return t&&(s=$S(t)),on(r,(a,u)=>{s=s.concat(u)}),s}})}function Tu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(a2())(n._repo,n._path):n}function m2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=lf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function g2(){return l2++}function _2(n,e,t){const r=e._path,s=Cd(n,e),a=QS(n,t),u=n.listenProvider_.startListening(Tu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)te(!_s(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,v,E)=>{if(!De(m)&&v&&_s(v))return[of(v).query];{let T=[];return v&&(T=T.concat($S(v).map(x=>x.query))),on(E,(x,V)=>{T=T.concat(V)}),T}});for(let m=0;m<f.length;++m){const v=f[m];n.listenProvider_.stopListening(Tu(v),Cd(n,v))}}return u}/**
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
 */class w_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new w_(t)}node(){return this.node_}}class T_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new T_(this.syncTree_,t)}node(){return __(this.syncTree_,this.path_)}}const y2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},uT=function(n,e,t){if(!n||typeof n!="object")return n;if(te(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return v2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return E2(n[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},v2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:te(!1,"Unexpected server value: "+n)}},E2=function(n,e,t){n.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&te(!1,"Unexpected increment value: "+r);const s=e.node();if(te(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},w2=function(n,e,t,r){return I_(e,new T_(t,n),r)},YS=function(n,e,t){return I_(n,new w_(e),t)};function I_(n,e,t){const r=n.getPriority().val(),s=uT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=uT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new jt(d,Tt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new jt(s))),u.forEachChild(ht,(d,f)=>{const m=I_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
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
 */class S_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function C_(n,e){let t=e instanceof Ye?e:new Ye(e),r=n,s=Pe(t);for(;s!==null;){const a=Pa(r.node.children,s)||{children:{},childCount:0};r=new S_(s,r,a),t=Je(t),s=Pe(t)}return r}function rl(n){return n.node.value}function XS(n,e){n.node.value=e,Xm(n)}function JS(n){return n.node.childCount>0}function T2(n){return rl(n)===void 0&&!JS(n)}function uf(n,e){on(n.node.children,(t,r)=>{e(new S_(t,n,r))})}function ZS(n,e,t,r){t&&e(n),uf(n,s=>{ZS(s,e,!0)})}function I2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function sc(n){return new Ye(n.parent===null?n.name:sc(n.parent)+"/"+n.name)}function Xm(n){n.parent!==null&&S2(n.parent,n.name,n)}function S2(n,e,t){const r=T2(t),s=jr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Xm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Xm(n))}/**
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
 */const C2=/[\[\].#$\/\u0000-\u001F\u007F]/,R2=/[\[\].#$\u0000-\u001F\u007F]/,am=10*1024*1024,R_=function(n){return typeof n=="string"&&n.length!==0&&!C2.test(n)},eC=function(n){return typeof n=="string"&&n.length!==0&&!R2.test(n)},A2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eC(n)},tC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!nf(n)||n&&typeof n=="object"&&jr(n,".sv")},Jm=function(n,e,t,r){cf(Na(n,"value"),e,t)},cf=function(n,e,t){const r=t instanceof Ye?new Hb(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Zs(r));if(typeof e=="function")throw new Error(n+"contains a function "+Zs(r)+" with contents = "+e.toString());if(nf(e))throw new Error(n+"contains "+e.toString()+" "+Zs(r));if(typeof e=="string"&&e.length>am/3&&Nd(e)>am)throw new Error(n+"contains a string greater than "+am+" utf8 bytes "+Zs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(on(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!R_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Zs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qb(r,u),cf(n,d,r),Gb(r)}),s&&a)throw new Error(n+' contains ".value" child '+Zs(r)+" in addition to actual children.")}},k2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Fu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!R_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wb);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&qn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},P2=function(n,e,t,r){const s=Na(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];on(e,(u,d)=>{const f=new Ye(u);if(cf(s,d,yt(t,f)),i_(f)===".priority"&&!tC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),k2(s,a)},N2=function(n,e,t){if(nf(e))throw new Error(Na(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!tC(e))throw new Error(Na(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},nC=function(n,e,t,r){if(!eC(t))throw new Error(Na(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nC(n,e,t)},hu=function(n,e){if(Pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},D2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!A2(t))throw new Error(Na(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!s_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function rC(n,e,t){A_(n,t),iC(n,r=>s_(r,e))}function Ei(n,e,t){A_(n,t),iC(n,r=>qn(r,e)||qn(e,r))}function iC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(O2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function O2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();yu&&Kt("event: "+t.toString()),tl(r)}}}/**
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
 */const L2="repo_interrupt",M2=25;class V2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yd(),this.transactionQueueTree_=new S_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function F2(n,e,t){if(n.stats_=n_(n.repoInfo_),n.forceRestClient_||mb())n.server_=new _d(n.repoInfo_,(r,s,a,u)=>{cT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>hT(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new di(n.repoInfo_,e,(r,s,a,u)=>{cT(n,r,s,a,u)},r=>{hT(n,r)},r=>{j2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=Eb(n.repoInfo_,()=>new vO(n.stats_,n.server_)),n.infoData_=new pO,n.infoSyncTree_=new aT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=af(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),P_(n,"connected",!1),n.serverSyncTree_=new aT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);Ei(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function U2(n){const t=n.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function k_(n){return y2({timestamp:U2(n)})}function cT(n,e,t,r,s){n.dataUpdateCount++;const a=new Ye(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Gh(t,m=>Tt(m));u=f2(n.serverSyncTree_,a,f,s)}else{const f=Tt(t);u=d2(n.serverSyncTree_,a,f,s)}else if(r){const f=Gh(t,m=>Tt(m));u=u2(n.serverSyncTree_,a,f)}else{const f=Tt(t);u=af(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=hf(n,a)),Ei(n.eventQueue_,d,u)}function hT(n,e){P_(n,"connected",e),e===!1&&z2(n)}function j2(n,e){on(e,(t,r)=>{P_(n,t,r)})}function P_(n,e,t){const r=new Ye("/.info/"+e),s=Tt(t);n.infoData_.updateSnapshot(r,s);const a=af(n.infoSyncTree_,r,s);Ei(n.eventQueue_,r,a)}function sC(n){return n.nextWriteId_++}function B2(n,e,t,r,s){N_(n,"set",{path:e.toString(),value:t,priority:r});const a=k_(n),u=Tt(t,r),d=__(n.serverSyncTree_,e),f=YS(u,d,a),m=sC(n),v=qS(n.serverSyncTree_,e,f,m,!0);A_(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,x)=>{const V=T==="ok";V||Sn("set at "+e+" failed: "+T);const j=no(n.serverSyncTree_,m,!V);Ei(n.eventQueue_,e,j),$a(n,s,T,x)});const E=cC(n,e);hf(n,E),Ei(n.eventQueue_,E,[])}function z2(n){N_(n,"onDisconnectEvents");const e=k_(n),t=yd();Wm(n.onDisconnect_,We(),(s,a)=>{const u=w2(s,a,n.serverSyncTree_,e);nl(t,s,u)});let r=[];Wm(t,We(),(s,a)=>{r=r.concat(af(n.serverSyncTree_,s,a));const u=cC(n,s);hf(n,u)}),n.onDisconnect_=yd(),Ei(n.eventQueue_,We(),r)}function $2(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&$m(n.onDisconnect_,e),$a(n,t,r,s)})}function dT(n,e,t,r){const s=Tt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&nl(n.onDisconnect_,e,s),$a(n,r,a,u)})}function W2(n,e,t,r,s){const a=Tt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&nl(n.onDisconnect_,e,a),$a(n,s,u,d)})}function H2(n,e,t,r){if(qh(t)){Kt("onDisconnect().update() called with empty data.  Don't do anything."),$a(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&on(t,(u,d)=>{const f=Tt(d);nl(n.onDisconnect_,yt(e,u),f)}),$a(n,r,s,a)})}function q2(n,e,t){let r;Pe(e._path)===".info"?r=lT(n.infoSyncTree_,e,t):r=lT(n.serverSyncTree_,e,t),rC(n.eventQueue_,e._path,r)}function G2(n,e,t){let r;Pe(e._path)===".info"?r=Ym(n.infoSyncTree_,e,t):r=Ym(n.serverSyncTree_,e,t),rC(n.eventQueue_,e._path,r)}function K2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(L2)}function N_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Kt(t,...e)}function $a(n,e,t,r){e&&tl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function oC(n,e,t){return __(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function x_(n,e=n.transactionQueueTree_){if(e||df(n,e),rl(e)){const t=lC(n,e);te(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Q2(n,sc(e),t)}else JS(e)&&uf(e,t=>{x_(n,t)})}function Q2(n,e,t){const r=t.map(m=>m.currentWriteId),s=oC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const v=t[m];te(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=Tn(e,v.path);a=a.updateChild(E,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{N_(n,"transaction put response",{path:f.toString(),status:m});let v=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(no(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();df(n,C_(n.transactionQueueTree_,e)),x_(n,n.transactionQueueTree_),Ei(n.eventQueue_,e,v);for(let T=0;T<E.length;T++)tl(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Sn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}hf(n,e)}},u)}function hf(n,e){const t=aC(n,e),r=sc(t),s=lC(n,t);return Y2(n,s,r),r}function Y2(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=Tn(t,f.path);let v=!1,E;if(te(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,E=f.abortReason,s=s.concat(no(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=M2)v=!0,E="maxretry",s=s.concat(no(n.serverSyncTree_,f.currentWriteId,!0));else{const T=oC(n,f.path,u);f.currentInputSnapshot=T;const x=e[d].update(T.val());if(x!==void 0){cf("transaction failed: Data returned ",x,f.path);let V=Tt(x);typeof x=="object"&&x!=null&&jr(x,".priority")||(V=V.updatePriority(T.getPriority()));const B=f.currentWriteId,Z=k_(n),K=YS(V,T,Z);f.currentOutputSnapshotRaw=V,f.currentOutputSnapshotResolved=K,f.currentWriteId=sC(n),u.splice(u.indexOf(B),1),s=s.concat(qS(n.serverSyncTree_,f.path,K,f.currentWriteId,f.applyLocally)),s=s.concat(no(n.serverSyncTree_,B,!0))}else v=!0,E="nodata",s=s.concat(no(n.serverSyncTree_,f.currentWriteId,!0))}Ei(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}df(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)tl(r[d]);x_(n,n.transactionQueueTree_)}function aC(n,e){let t,r=n.transactionQueueTree_;for(t=Pe(e);t!==null&&rl(r)===void 0;)r=C_(r,t),e=Je(e),t=Pe(e);return r}function lC(n,e){const t=[];return uC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function uC(n,e,t){const r=rl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);uf(e,s=>{uC(n,s,t)})}function df(n,e){const t=rl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,XS(e,t.length>0?t:void 0)}uf(e,r=>{df(n,r)})}function cC(n,e){const t=sc(aC(n,e)),r=C_(n.transactionQueueTree_,e);return I2(r,s=>{lm(n,s)}),lm(n,r),ZS(r,s=>{lm(n,s)}),t}function lm(n,e){const t=rl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(te(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(te(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(no(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?XS(e,void 0):t.length=a+1,Ei(n.eventQueue_,sc(e),s);for(let u=0;u<r.length;u++)tl(r[u])}}/**
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
 */function X2(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function J2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const fT=function(n,e){const t=Z2(n),r=t.namespace;t.domain==="firebase.com"&&vi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&vi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ob();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new gS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Ye(t.pathString)}},Z2=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(v,E)),v<E&&(s=X2(n.substring(v,E)));const T=J2(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const x=e.slice(0,m);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const V=e.indexOf(".");r=e.substring(0,V).toLowerCase(),t=e.substring(V+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
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
 */class eL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class tL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return te(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class rL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new oi;return $2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){hu("OnDisconnect.remove",this._path);const e=new oi;return dT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){hu("OnDisconnect.set",this._path),Jm("OnDisconnect.set",e,this._path);const t=new oi;return dT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){hu("OnDisconnect.setWithPriority",this._path),Jm("OnDisconnect.setWithPriority",e,this._path),N2("OnDisconnect.setWithPriority",t);const r=new oi;return W2(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){hu("OnDisconnect.update",this._path),P2("OnDisconnect.update",e,this._path);const t=new oi;return H2(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class D_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return De(this._path)?null:i_(this._path)}get ref(){return new Ts(this._repo,this._path)}get _queryIdentifier(){const e=Yw(this._queryParams),t=e_(e);return t==="{}"?"default":t}get _queryObject(){return Yw(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof D_))return!1;const t=this._repo===e._repo,r=s_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+$b(this._path)}}class Ts extends D_{constructor(e,t){super(e,t,new u_,!1)}get parent(){const e=CS(this._path);return e===null?null:new Ts(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ye(e),r=Zm(this.ref,e);return new Rd(this._node.getChild(t),r,ht)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Rd(s,Zm(this.ref,r),ht)))}hasChild(e){const t=new Ye(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pT(n,e){return n=Ge(n),n._checkNotDeleted("ref"),e!==void 0?Zm(n._root,e):n._root}function Zm(n,e){return n=Ge(n),Pe(n._path)===null?x2("child","path",e):nC("child","path",e),new Ts(n._repo,yt(n._path,e))}function iL(n){return n=Ge(n),new rL(n._repo,n._path)}function mT(n,e){n=Ge(n),hu("set",n._path),Jm("set",e,n._path);const t=new oi;return B2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class b_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new eL("value",this,new Rd(e.snapshotNode,new Ts(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new tL(this,e,t):null}matches(e){return e instanceof b_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sL(n,e,t,r,s){const a=new nL(t,void 0),u=new b_(a);return q2(n._repo,n,u),()=>G2(n._repo,n,u)}function oL(n,e,t,r){return sL(n,"value",e)}e2(Ts);o2(Ts);/**
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
 */const aL="FIREBASE_DATABASE_EMULATOR_HOST",eg={};let lL=!1;function uL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Fr(a);n.repoInfo_=new gS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function cL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||vi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=fT(a,s),d=u.repoInfo,f;typeof process<"u"&&Dw&&(f=Dw[aL]),f?(a=`http://${f}?ns=${d.namespace}`,u=fT(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new _b(n.name,n.options,e);D2("Invalid Firebase Database URL",u),De(u.path)||vi("Database URL must point to the root of a Firebase Database (not including a child path).");const v=dL(d,n,m,new gb(n,t));return new fL(v,n)}function hL(n,e){const t=eg[e];(!t||t[n.key]!==n)&&vi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),K2(n),delete t[n.key]}function dL(n,e,t,r){let s=eg[e.name];s||(s={},eg[e.name]=s);let a=s[n.toURLString()];return a&&vi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new V2(n,lL,t,r),s[n.toURLString()]=a,a}class fL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(F2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ts(this._repo,We())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vi("Cannot call "+e+" on a deleted database.")}}function pL(n=Dd(),e){const t=qu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=sg("database");r&&mL(t,...r)}return t}function mL(n,e,t,r={}){n=Ge(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&fi(r,a.repoInfo_.emulatorOptions))return;vi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&vi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new $h($h.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:og(r.mockUserToken,n.app.options.projectId);u=new $h(d)}Fr(e)&&(kd(e),Pd("Database",!0)),uL(a,s,r,u)}/**
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
 */function gL(n){eb(ys),ls(new pi("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return cL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Kn(bw,Ow,n),Kn(bw,Ow,"esm2017")}di.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};di.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gL();var _L="firebase",yL="11.10.0";/**
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
 */Kn(_L,yL,"app");/**
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
 */const hC="firebasestorage.googleapis.com",dC="storageBucket",vL=120*1e3,EL=600*1e3;/**
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
 */class pt extends Ur{constructor(e,t,r=0){super(um(e),`Firebase Storage: ${t} (${um(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return um(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function um(n){return"storage/"+n}function O_(){const n="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,n)}function wL(n){return new pt(ft.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function TL(n){return new pt(ft.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pt(ft.UNAUTHENTICATED,n)}function SL(){return new pt(ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CL(n){return new pt(ft.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function RL(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AL(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function kL(n){return new pt(ft.INVALID_URL,"Invalid URL '"+n+"'.")}function PL(n){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function NL(){return new pt(ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dC+"' property when initializing the app?")}function xL(){return new pt(ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function DL(){return new pt(ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bL(n){return new pt(ft.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tg(n){return new pt(ft.INVALID_ARGUMENT,n)}function fC(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function OL(n){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Iu(n,e){return new pt(ft.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ru(n){throw new pt(ft.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class On{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=On.makeFromUrl(e,t)}catch{return new On(e,"")}if(r.path==="")return r;throw PL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(q){q.path_=decodeURIComponent(q.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",x=new RegExp(`^https?://${E}/${v}/b/${s}/o${T}`,"i"),V={bucket:1,path:3},j=t===hC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",Z=new RegExp(`^https?://${j}/${s}/${B}`,"i"),ne=[{regex:d,indices:f,postModify:a},{regex:x,indices:V,postModify:m},{regex:Z,indices:{bucket:1,path:2},postModify:m}];for(let q=0;q<ne.length;q++){const Ie=ne[q],de=Ie.regex.exec(e);if(de){const O=de[Ie.indices.bucket];let S=de[Ie.indices.path];S||(S=""),r=new On(O,S),Ie.postModify(r);break}}if(r==null)throw kL(e);return r}}class LL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ML(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function v(...B){m||(m=!0,e.apply(null,B))}function E(B){s=setTimeout(()=>{s=null,n(x,f())},B)}function T(){a&&clearTimeout(a)}function x(B,...Z){if(m){T();return}if(B){T(),v.call(null,B,...Z);return}if(f()||u){T(),v.call(null,B,...Z);return}r<64&&(r*=2);let ne;d===1?(d=2,ne=0):ne=(r+Math.random())*1e3,E(ne)}let V=!1;function j(B){V||(V=!0,T(),!m&&(s!==null?(B||(d=2),clearTimeout(s),E(0)):B||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,j(!0)},t),j}function VL(n){n(!1)}/**
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
 */function FL(n){return n!==void 0}function UL(n){return typeof n=="object"&&!Array.isArray(n)}function L_(n){return typeof n=="string"||n instanceof String}function gT(n){return M_()&&n instanceof Blob}function M_(){return typeof Blob<"u"}function _T(n,e,t,r){if(r<e)throw tg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw tg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function V_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function pC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var so;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(so||(so={}));/**
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
 */function jL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
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
 */class BL{constructor(e,t,r,s,a,u,d,f,m,v,E,T=!0,x=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,j)=>{this.resolve_=V,this.reject_=j,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Nh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===so.NO_ERROR,f=a.getStatus();if(!d||jL(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===so.ABORT;r(!1,new Nh(!1,null,v));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Nh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());FL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=O_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?fC():AL();u(f)}else{const f=RL();u(f)}};this.canceled_?t(!1,new Nh(!1,null,!0)):this.backoffId_=ML(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function zL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $L(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WL(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HL(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function qL(n,e,t,r,s,a,u=!0,d=!1){const f=pC(n.urlParams),m=n.url+f,v=Object.assign({},n.headers);return WL(v,e),zL(v,t),$L(v,a),HL(v,r),new BL(m,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
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
 */function GL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function KL(...n){const e=GL();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(M_())return new Blob(n);throw new pt(ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QL(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function YL(n){if(typeof atob>"u")throw bL("base-64");return atob(n)}/**
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
 */const kr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cm{constructor(e,t){this.data=e,this.contentType=t||null}}function XL(n,e){switch(n){case kr.RAW:return new cm(mC(e));case kr.BASE64:case kr.BASE64URL:return new cm(gC(n,e));case kr.DATA_URL:return new cm(ZL(e),eM(e))}throw O_()}function mC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JL(n){let e;try{e=decodeURIComponent(n)}catch{throw Iu(kr.DATA_URL,"Malformed data URL.")}return mC(e)}function gC(n,e){switch(n){case kr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Iu(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Iu(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=YL(e)}catch(s){throw s.message.includes("polyfill")?s:Iu(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class _C{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Iu(kr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=tM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ZL(n){const e=new _C(n);return e.base64?gC(kr.BASE64,e.rest):JL(e.rest)}function eM(n){return new _C(n).contentType}function tM(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ji{constructor(e,t){let r=0,s="";gT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(gT(this.data_)){const r=this.data_,s=QL(r,e,t);return s===null?null:new Ji(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ji(r,!0)}}static getBlob(...e){if(M_()){const t=e.map(r=>r instanceof Ji?r.data_:r);return new Ji(KL.apply(null,t))}else{const t=e.map(u=>L_(u)?XL(kr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new Ji(s,!0)}}uploadData(){return this.data_}}/**
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
 */function yC(n){let e;try{e=JSON.parse(n)}catch{return null}return UL(e)?e:null}/**
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
 */function nM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function rM(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function vC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function iM(n,e){return e}class hn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||iM}}let xh=null;function sM(n){return!L_(n)||n.length<2?n:vC(n)}function EC(){if(xh)return xh;const n=[];n.push(new hn("bucket")),n.push(new hn("generation")),n.push(new hn("metageneration")),n.push(new hn("name","fullPath",!0));function e(a,u){return sM(u)}const t=new hn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new hn("size");return s.xform=r,n.push(s),n.push(new hn("timeCreated")),n.push(new hn("updated")),n.push(new hn("md5Hash",null,!0)),n.push(new hn("cacheControl",null,!0)),n.push(new hn("contentDisposition",null,!0)),n.push(new hn("contentEncoding",null,!0)),n.push(new hn("contentLanguage",null,!0)),n.push(new hn("contentType",null,!0)),n.push(new hn("metadata","customMetadata",!0)),xh=n,xh}function oM(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new On(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function aM(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return oM(r,n),r}function wC(n,e,t){const r=yC(e);return r===null?null:aM(n,r,t)}function lM(n,e,t,r){const s=yC(e);if(s===null||!L_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const v=n.bucket,E=n.fullPath,T="/b/"+u(v)+"/o/"+u(E),x=V_(T,t,r),V=pC({alt:"media",token:m});return x+V})[0]}function uM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class TC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function IC(n){if(!n)throw O_()}function cM(n,e){function t(r,s){const a=wC(n,s,e);return IC(a!==null),a}return t}function hM(n,e){function t(r,s){const a=wC(n,s,e);return IC(a!==null),lM(a,s,n.host,n._protocol)}return t}function SC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=SL():s=IL():t.getStatus()===402?s=TL(n.bucket):t.getStatus()===403?s=CL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function dM(n){const e=SC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=wL(n.path)),a.serverResponse=s.serverResponse,a}return t}function fM(n,e,t){const r=e.fullServerUrl(),s=V_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new TC(s,a,hM(n,t),u);return d.errorHandler=dM(e),d}function pM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function mM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=pM(null,e)),r}function gM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let ne="";for(let q=0;q<2;q++)ne=ne+Math.random().toString().slice(2);return ne}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=mM(e,r,s),v=uM(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",x=Ji.getBlob(E,r,T);if(x===null)throw xL();const V={name:m.fullPath},j=V_(a,n.host,n._protocol),B="POST",Z=n.maxUploadRetryTime,K=new TC(j,B,cM(n,t),Z);return K.urlParams=V,K.headers=u,K.body=x.uploadData(),K.errorHandler=SC(e),K}class _M{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=so.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=so.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=so.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw ru("cannot .send() more than once");if(Fr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ru("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ru("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ru("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ru("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class yM extends _M{initXhr(){this.xhr_.responseType="text"}}function CC(){return new yM}/**
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
 */class _o{constructor(e,t){this._service=e,t instanceof On?this._location=t:this._location=On.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new _o(e,t)}get root(){const e=new On(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vC(this._location.path)}get storage(){return this._service}get parent(){const e=nM(this._location.path);if(e===null)return null;const t=new On(this._location.bucket,e);return new _o(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw OL(e)}}function vM(n,e,t){n._throwIfRoot("uploadBytes");const r=gM(n.storage,n._location,EC(),new Ji(e,!0),t);return n.storage.makeRequestWithTokens(r,CC).then(s=>({metadata:s,ref:n}))}function EM(n){n._throwIfRoot("getDownloadURL");const e=fM(n.storage,n._location,EC());return n.storage.makeRequestWithTokens(e,CC).then(t=>{if(t===null)throw DL();return t})}function wM(n,e){const t=rM(n._location.path,e),r=new On(n._location.bucket,t);return new _o(n.storage,r)}/**
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
 */function TM(n){return/^[A-Za-z]+:\/\//.test(n)}function IM(n,e){return new _o(n,e)}function RC(n,e){if(n instanceof F_){const t=n;if(t._bucket==null)throw NL();const r=new _o(t,t._bucket);return e!=null?RC(r,e):r}else return e!==void 0?wM(n,e):n}function SM(n,e){if(e&&TM(e)){if(n instanceof F_)return IM(n,e);throw tg("To use ref(service, url), the first argument must be a Storage instance.")}else return RC(n,e)}function yT(n,e){const t=e==null?void 0:e[dC];return t==null?null:On.makeFromBucketSpec(t,n)}function CM(n,e,t,r={}){n.host=`${e}:${t}`;const s=Fr(e);s&&(kd(`https://${n.host}/b`),Pd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:og(a,n.app.options.projectId))}class F_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=hC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vL,this._maxUploadRetryTime=EL,this._requests=new Set,s!=null?this._bucket=On.makeFromBucketSpec(s,this._host):this._bucket=yT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=On.makeFromBucketSpec(this._url,e):this._bucket=yT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_T("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_T("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _o(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new LL(fC());{const u=qL(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const vT="@firebase/storage",ET="0.13.14";/**
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
 */const AC="storage";function RM(n,e,t){return n=Ge(n),vM(n,e,t)}function AM(n){return n=Ge(n),EM(n)}function kM(n,e){return n=Ge(n),SM(n,e)}function PM(n=Dd(),e){n=Ge(n);const r=qu(n,AC).getImmediate({identifier:e}),s=sg("storage");return s&&NM(r,...s),r}function NM(n,e,t,r={}){CM(n,e,t,r)}function xM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new F_(t,r,s,e,ys)}function DM(){ls(new pi(AC,xM,"PUBLIC").setMultipleInstances(!0)),Kn(vT,ET,""),Kn(vT,ET,"esm2017")}DM();const bM={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},OM="",ff=UT(bM),Wa=FP(ff);S1(Wa,fI).catch(()=>{});const Mr=LD(ff),wT=pL(ff),LM=PM(ff),oo=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý",color:"#2481cc"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên",color:"#d84a35"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên",color:"#3d9b4f"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên",color:"#8e44ad"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối",color:"#c04b9b"}],ci=n=>(oo.find(e=>e.id===n)||{name:n}).name,Wu=n=>(oo.find(e=>e.id===n)||{}).color||"#2481cc",iu={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},hm=["waiting_acceptance","in_progress","waiting_review","completed"],MM={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function TT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function kC(n,e){return e.trim()?TT(n).includes(TT(e)):!0}function ao(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function ng(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function VM(n){if(!n)return"";const e=new Date(typeof n=="number"?n:Date.parse(n));if(Number.isNaN(e.getTime()))return"";const t=e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return e.toDateString()===new Date().toDateString()?t:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")} ${t}`}function FM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function Xs(n,{method:e="GET",body:t,token:r}={}){const s=r||(Wa.currentUser?await Wa.currentUser.getIdToken():"");let a;try{a=await fetch(`${OM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}const Gn={sendMessage:async({content:n,threadId:e=null,attachments:t=[]},r)=>{const s=FM(r),a=(n||"").trim();if(!a)throw new Error("Nội dung trống.");return{id:(await XD(ho(Mr,"messages"),{roomId:"general",senderId:s.id,senderName:s.name,senderType:"human",content:a,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[s.id],pinned:!1})).id}},pinMessage:(n,e)=>Um(dd(Mr,"messages",n),{pinned:!!e}),markSeen:(n,e)=>e?Um(dd(Mr,"messages",n),{seenBy:ZD(e)}):Promise.resolve(),listTasks:(n="")=>Xs(`/api/tasks${n}`),createTask:n=>Xs("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>Xs(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>Xs("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>Xs("/api/jobs"),listUsers:()=>Xs("/api/users"),setTelegramChatId:(n,e)=>Xs(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})};function UM(){const[n,e]=le.useState(""),[t,r]=le.useState(""),[s,a]=le.useState(""),[u,d]=le.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await I1(Wa,n.trim(),t)}catch(v){a(v.code==="auth/invalid-credential"?"Email hoặc mật khẩu chưa đúng.":`Đăng nhập thất bại: ${v.message}`)}finally{d(!1)}}return C.jsx("div",{className:"login-page",children:C.jsxs("div",{className:"login-card",children:[C.jsx("div",{className:"login-logo",children:"E"}),C.jsx("h1",{children:"Enteesee"}),C.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),C.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&C.jsx("div",{className:"err",children:s}),C.jsxs("form",{onSubmit:f,children:[C.jsx("div",{style:{marginBottom:10},children:C.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),C.jsx("div",{style:{marginBottom:12},children:C.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),C.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),C.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}function IT(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?C.jsx("b",{className:"mention",children:t},r):C.jsx("span",{children:t},r))}function jM(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function BM({person:n}){const[e,t]=le.useState([]),[r,s]=le.useState([]),[a,u]=le.useState(""),[d,f]=le.useState(""),[m,v]=le.useState(""),[E,T]=le.useState(!1),[x,V]=le.useState(!1),[j,B]=le.useState(null),[Z,K]=le.useState(null),[ne,q]=le.useState(""),[Ie,de]=le.useState(""),[O,S]=le.useState(!1),[R,N]=le.useState(!1),b=le.useRef(null),M=le.useRef(null);le.useEffect(()=>Mu(Ua(ho(Mr,"messages"),Ou("createdAt","desc"),Lu(200)),P=>t(P.docs.map(W=>({id:W.id,...W.data()})).reverse()),()=>q("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),le.useEffect(()=>Mu(Ua(ho(Mr,"aiEvents"),Ou("createdAt","desc"),Lu(200)),P=>s(P.docs.map(W=>({id:W.id,...W.data()})))),[]);const k=le.useMemo(()=>{const P=new Map;for(const W of r)W.messageId&&P.set(W.messageId,W);return P},[r]),Ke=le.useMemo(()=>{const P=e.filter(fe=>!fe.threadId),W=m.trim();return P.filter(fe=>kC(`${fe.content||""} ${fe.senderName||""}`,W))},[e,m]),At=P=>e.filter(W=>W.threadId===P),kt=le.useRef(!0);le.useEffect(()=>{const P=M.current;!P||Ke.length===0||(P.scrollTo({top:P.scrollHeight,behavior:kt.current?"auto":"smooth"}),kt.current=!1)},[Ke]),le.useEffect(()=>{e.slice(-5).forEach(W=>{W.id&&!(W.seenBy||[]).includes(n.id)&&Gn.markSeen(W.id,n.id).catch(()=>{})})},[e,n.id]);function He(P){u(P);const W=P.match(/@([A-Za-zÀ-ỹ]*)$/);W?(f(W[1]),V(!0)):V(!1)}function ie(P){u(W=>W.replace(/@[A-Za-zÀ-ỹ]*$/,`@${P.name} `)),V(!1)}async function ge(){const P=a.trim();if(!(!P||O)){S(!0),de("");try{await Gn.sendMessage({content:P,threadId:j?j.id:null},n),u(""),B(null)}catch(W){de(jM(W))}finally{S(!1)}}}async function oe(P){if(P){N(!0),de("");try{const W=`rooms/general/${Date.now()}_${P.name}`,fe=await RM(kM(LM,W),P),Ae=await AM(fe.ref);await Gn.sendMessage({content:`Đã gửi file: ${P.name}`,attachments:[{name:P.name,size:P.size,type:P.type,url:Ae,path:W}]},n)}catch(W){de(/load failed|failed to fetch|networkerror/i.test(String(W.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${W.message}`)}finally{N(!1)}}}return C.jsxs("div",{className:"chat",children:[C.jsxs("div",{className:`search-wrap${E?" open":""}`,children:[C.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>T(P=>!P),children:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[C.jsx("circle",{cx:"11",cy:"11",r:"8"}),C.jsx("path",{d:"m21 21-4.3-4.3"})]})}),C.jsx("input",{className:"search",value:m,onChange:P=>v(P.target.value),placeholder:"Tìm tin nhắn…"})]}),ne&&C.jsx("div",{className:"err-load",children:ne}),C.jsxs("div",{className:"chat-list",ref:M,children:[Ke.length===0&&C.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),Ke.filter(P=>P.pinned).map(P=>C.jsx(ST,{m:P,person:n,event:k.get(P.id),onReply:B,threadOpen:Z,setThreadOpen:K,threadReplies:At,pinned:!0},`pin-${P.id}`)),Ke.map(P=>C.jsx(ST,{m:P,person:n,event:k.get(P.id),onReply:B,threadOpen:Z,setThreadOpen:K,threadReplies:At},P.id))]}),j&&C.jsxs("div",{className:"reply-bar",children:[C.jsxs("span",{className:"muted",children:["Đang trả lời ",j.senderName,": ",(j.content||"").slice(0,80)]}),C.jsx("button",{onClick:()=>B(null),children:"Hủy"})]}),x&&C.jsx("div",{className:"mention-list",children:oo.filter(P=>P.name.toLowerCase().startsWith(d.toLowerCase())).map(P=>C.jsxs("button",{type:"button",onClick:()=>ie(P),children:["@",P.name," — ",P.roleVi]},P.id))}),Ie&&C.jsx("div",{className:"err",children:Ie}),C.jsxs("div",{className:"composer",children:[C.jsxs("div",{className:"composer-box",children:[C.jsx("button",{type:"button",className:"attach-btn",onClick:()=>b.current&&b.current.click(),disabled:R,title:"Đính kèm file","aria-label":"Đính kèm file",children:C.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:C.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),C.jsx("textarea",{value:a,onChange:P=>He(P.target.value),placeholder:"Nhắn tin…",rows:1,onKeyDown:P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),ge())}})]}),C.jsx("input",{ref:b,type:"file",style:{display:"none"},onChange:P=>{oe(P.target.files[0]),P.target.value=""}}),C.jsx("button",{className:"send-btn",type:"button",onClick:ge,disabled:O||!a.trim(),title:"Gửi","aria-label":"Gửi",children:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[C.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),C.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),R&&C.jsx("div",{className:"composer-note",children:"Đang tải file lên…"})]})}function ST({m:n,person:e,event:t,onReply:r,threadOpen:s,setThreadOpen:a,threadReplies:u,pinned:d}){const f=u(n.id),m=n.senderId===e.id,v=t,E=(n.senderName||ci(n.senderId)||"?").charAt(0),T=Wu(n.senderId),x=(n.seenBy||[]).filter(j=>j!==e.id),V=x.length>0;return C.jsxs("div",{className:`msg-row ${m?"mine":""}`,children:[!m&&C.jsx("span",{className:"avatar",style:{backgroundColor:T,color:"#fff"},children:E}),C.jsxs("div",{className:`msg ${m?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||d?"pinned":""}`,children:[!m&&C.jsx("div",{className:"sender-name",style:{color:T},children:n.senderName||ci(n.senderId)}),n.senderType==="ai"&&C.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||d)&&C.jsx("span",{className:"tag status",children:"Đã ghim"}),C.jsxs("div",{className:"content",children:[IT(n.content),C.jsxs("span",{className:"msg-time",children:[ng(n.createdAt),m&&C.jsx("span",{className:`ticks${V?" read":""}`,children:V?"✓✓":"✓"})]})]}),n.linkPreview&&C.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&C.jsx("img",{src:n.linkPreview.image,alt:""}),C.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&C.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((j,B)=>C.jsxs("div",{children:[C.jsx("a",{href:j.url,target:"_blank",rel:"noreferrer",children:j.name})," ",C.jsxs("span",{className:"muted",children:["(",Math.round((j.size||0)/1024)," KB)"]})]},B)),v&&C.jsxs("div",{style:{marginTop:6},children:[v.museRepliedAt?C.jsxs("span",{className:"tag ai-replied",children:["Muse đã phản hồi ",ao(v.museRepliedAt)]}):C.jsx("span",{className:"tag wait-ack",children:"Muse đang phản hồi…"}),v.employeeAcknowledgedAt?C.jsxs("span",{className:"tag acked",children:["Nhân viên đã xác nhận ",ao(v.employeeAcknowledgedAt)]}):C.jsx("span",{className:"tag wait-ack",children:"Nhân viên chưa xác nhận"})]}),C.jsxs("div",{className:"row",children:[C.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),f.length>0&&C.jsxs("button",{type:"button",onClick:()=>a(s===n.id?null:n.id),children:[s===n.id?"Ẩn":"Xem"," ",f.length," trả lời"]}),C.jsx("button",{type:"button",onClick:()=>Gn.pinMessage(n.id,!n.pinned).catch(()=>{}),children:n.pinned?"Bỏ ghim":"Ghim"}),m&&x.length>0&&C.jsxs("span",{className:"seen",children:["Đã xem: ",x.map(ci).join(", ")]})]}),s===n.id&&f.map(j=>C.jsxs("div",{className:"msg thread-reply",children:[C.jsx("div",{className:"sender-name",style:{color:Wu(j.senderId)},children:j.senderName||ci(j.senderId)}),C.jsxs("div",{className:"content",children:[IT(j.content),C.jsx("span",{className:"msg-time",children:ng(j.createdAt)})]})]},j.id))]})]})}function zM({person:n}){const[e,t]=le.useState([]),[r,s]=le.useState("all"),[a,u]=le.useState(""),[d,f]=le.useState(!1),[m,v]=le.useState(""),[E,T]=le.useState(null),[x,V]=le.useState("");async function j(){try{const q=n.role==="manager"?"":`?assignee=${n.id}`,Ie=await Gn.listTasks(q);t(Ie.tasks||[])}catch(q){v(q.message)}}le.useEffect(()=>{j();const q=setInterval(j,15e3);return()=>clearInterval(q)},[n.id,n.role]);const B=le.useMemo(()=>e.filter(q=>r!=="all"&&q.status!==r?!1:kC(`${q.title} ${q.description||""} ${(q.assignees||[]).map(ci).join(" ")}`,a)),[e,r,a]);async function Z(q,Ie,de){v("");try{await Gn.setTaskStatus(q.id,Ie,de),await j()}catch(O){v(O.message)}}const K=n.role==="manager",ne=hm.reduce((q,Ie)=>({...q,[Ie]:e.filter(de=>de.status===Ie).length}),{});return C.jsxs("div",{children:[C.jsx("div",{className:"row",style:{marginBottom:10},children:hm.map(q=>C.jsxs("span",{className:"tag status",children:[iu[q],": ",ne[q]||0]},q))}),C.jsx("input",{className:"search",value:a,onChange:q=>u(q.target.value),placeholder:"Tìm công việc…"}),C.jsxs("div",{className:"row",style:{marginBottom:10},children:[C.jsxs("select",{value:r,onChange:q=>s(q.target.value),children:[C.jsx("option",{value:"all",children:"Tất cả trạng thái"}),hm.map(q=>C.jsx("option",{value:q,children:iu[q]},q))]}),K&&C.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&C.jsx("div",{className:"err",children:m}),d&&K&&C.jsx($M,{onDone:()=>{f(!1),j()},onCancel:()=>f(!1)}),B.length===0&&C.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có công việc nào."}),B.map(q=>{const Ie=(q.assignees||[]).includes(n.id);return C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:q.title}),C.jsx("div",{className:"muted",children:q.description||""}),C.jsxs("div",{className:"row",style:{marginTop:6},children:[C.jsx("span",{className:"tag status",children:iu[q.status]}),C.jsxs("span",{className:"tag status",children:["Ưu tiên: ",MM[q.priority]||q.priority]}),C.jsxs("span",{className:"muted",children:["Người nhận: ",(q.assignees||[]).map(ci).join(", ")]}),q.dueAt&&C.jsxs("span",{className:"muted",children:["Hạn: ",ao(q.dueAt)]})]}),q.reviewNote&&C.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",q.reviewNote]}),C.jsxs("div",{className:"row",style:{marginTop:10},children:[q.status==="waiting_acceptance"&&Ie&&C.jsx("button",{className:"primary",onClick:()=>Z(q,"in_progress"),children:"Xác nhận nhận việc"}),q.status==="in_progress"&&Ie&&C.jsx("button",{className:"primary",onClick:()=>Z(q,"waiting_review"),children:"Trình duyệt"}),q.status==="waiting_review"&&K&&C.jsx("button",{className:"primary",onClick:()=>Z(q,"completed"),children:"Duyệt — Hoàn thành"}),q.status==="waiting_review"&&K&&C.jsx("button",{className:"danger",onClick:()=>T(q.id),children:"Yêu cầu sửa"}),q.status==="completed"&&C.jsxs("span",{className:"tag acked",children:["Đã duyệt ",ao(q.approvedAt)]})]}),E===q.id&&C.jsxs("div",{style:{marginTop:8},children:[C.jsx("input",{value:x,onChange:de=>V(de.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),C.jsxs("div",{className:"row",style:{marginTop:6},children:[C.jsx("button",{disabled:!x.trim(),onClick:()=>{Z(q,"in_progress",x.trim()),T(null),V("")},children:"Gửi yêu cầu sửa"}),C.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(q.history||[]).length>0&&C.jsxs("details",{style:{marginTop:8},children:[C.jsxs("summary",{className:"muted",children:["Lịch sử (",q.history.length,")"]}),(q.history||[]).map((de,O)=>C.jsxs("div",{className:"muted",children:[ao(de.at)," — ",ci(de.by),": ",de.from?iu[de.from]:"—"," → ",iu[de.to],de.reason?` — ${de.reason}`:""]},O))]})]},q.id)})]})}function $M({onDone:n,onCancel:e}){const[t,r]=le.useState(""),[s,a]=le.useState(""),[u,d]=le.useState([]),[f,m]=le.useState(""),[v,E]=le.useState("normal"),[T,x]=le.useState(""),[V,j]=le.useState(!1);async function B(Z){if(Z.preventDefault(),!t.trim()||u.length===0){x("Nhập tiêu đề và chọn ít nhất một người nhận.");return}j(!0),x("");try{await Gn.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:v}),n()}catch(K){x(K.message)}finally{j(!1)}}return C.jsxs("form",{className:"card",onSubmit:B,children:[C.jsx("input",{value:t,onChange:Z=>r(Z.target.value),placeholder:"Tiêu đề công việc",required:!0}),C.jsx("div",{style:{height:8}}),C.jsx("textarea",{value:s,onChange:Z=>a(Z.target.value),placeholder:"Mô tả",rows:3}),C.jsx("div",{style:{height:8}}),C.jsx("div",{className:"muted",children:"Người nhận (chọn một hoặc nhiều):"}),C.jsx("div",{className:"row",children:oo.filter(Z=>Z.role==="staff").map(Z=>C.jsxs("label",{style:{display:"flex",gap:6,alignItems:"center"},children:[C.jsx("input",{type:"checkbox",style:{width:"auto"},checked:u.includes(Z.id),onChange:K=>d(K.target.checked?[...u,Z.id]:u.filter(ne=>ne!==Z.id))}),Z.name]},Z.id))}),C.jsx("div",{style:{height:8}}),C.jsxs("div",{className:"row",children:[C.jsx("input",{type:"datetime-local",value:f,onChange:Z=>m(Z.target.value)}),C.jsxs("select",{value:v,onChange:Z=>E(Z.target.value),children:[C.jsx("option",{value:"urgent",children:"Khẩn cấp"}),C.jsx("option",{value:"high",children:"Cao"}),C.jsx("option",{value:"normal",children:"Bình thường"}),C.jsx("option",{value:"low",children:"Thấp"})]})]}),T&&C.jsx("div",{className:"err",style:{marginTop:8},children:T}),C.jsxs("div",{className:"row",style:{marginTop:10},children:[C.jsx("button",{className:"primary",type:"submit",disabled:V,children:"Giao việc"}),C.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const WM={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận"};function HM({person:n,onUnread:e}){const[t,r]=le.useState([]),[s,a]=le.useState("");le.useEffect(()=>Mu(Ua(ho(Mr,"notifications"),Z0("recipientId","==",n.id),Ou("createdAt","desc"),Lu(100)),d=>{const f=d.docs.map(m=>({id:m.id,...m.data()}));r(f),e(f.filter(m=>!m.read).length)},()=>a("Không tải được thông báo.")),[n.id,e]);async function u(){await Promise.all(t.filter(d=>!d.read).map(d=>Um(dd(Mr,"notifications",d.id),{read:!0}).catch(()=>{})))}return C.jsxs("div",{children:[C.jsxs("div",{className:"row",style:{marginBottom:10},children:[C.jsx("b",{children:"Thông báo của bạn"}),C.jsx("button",{onClick:u,children:"Đánh dấu đã đọc hết"})]}),s&&C.jsx("div",{className:"err",children:s}),t.length===0&&C.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(d=>C.jsxs("div",{className:`card${d.read?"":" unread"}`,style:d.read?{opacity:.65}:{},children:[C.jsxs("div",{className:"row",children:[C.jsx("span",{className:"tag status",children:WM[d.type]||d.type}),C.jsx("span",{className:"muted",children:ao(d.createdAt)})]}),C.jsxs("div",{style:{marginTop:6},children:[ci(d.senderId),": ",d.content]})]},d.id))]})}function qM({person:n,onlineByPerson:e,onSignOut:t}){const[r,s]=le.useState([]),[a,u]=le.useState([]),[d,f]=le.useState(""),[m,v]=le.useState([]),[E,T]=le.useState({}),[x,V]=le.useState("");le.useEffect(()=>Mu(Ua(ho(Mr,"aiEvents"),Ou("createdAt","desc"),Lu(20)),K=>s(K.docs.map(ne=>({id:ne.id,...ne.data()})))),[]),le.useEffect(()=>{n.role==="manager"&&(Gn.listJobs().then(K=>u(K.jobs||[])).catch(K=>f(K.message)),Gn.listUsers().then(K=>v(K.users||[])).catch(()=>{}))},[n.role]);const B=r.filter(K=>(K.mentions||[]).includes(n.id)).find(K=>K.museRepliedAt),Z=a.filter(K=>K.deadLetter);return C.jsxs("div",{children:[C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:n.name}),C.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),C.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),C.jsxs("div",{className:"muted",children:["Muse của bạn: ",B?`đã phản hồi lần cuối ${ao(B.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),C.jsx("div",{className:"row",style:{marginTop:10},children:C.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Kênh Telegram"}),C.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),C.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),C.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),C.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),m.length===0&&C.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),m.map(K=>C.jsxs("div",{className:"row",style:{marginBottom:8},children:[C.jsx("span",{style:{minWidth:60},children:K.name}),C.jsx("input",{value:E[K.id]!==void 0?E[K.id]:K.telegramChatId||"",onChange:ne=>T({...E,[K.id]:ne.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),C.jsx("button",{onClick:async()=>{await Gn.setTelegramChatId(K.id,E[K.id]!==void 0?E[K.id]:K.telegramChatId||""),V(`Đã lưu chat_id của ${K.name}.`),Gn.listUsers().then(ne=>v(ne.users||[]))},children:"Lưu"})]},K.id)),x&&C.jsx("div",{className:"muted",children:x})]}),n.role==="manager"&&C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),d&&C.jsx("div",{className:"err",children:d}),a.length===0&&C.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),Z.length>0&&C.jsxs("div",{className:"err",children:["Có ",Z.length," job vào dead-letter (gửi thất bại nhiều lần): ",Z.map(K=>K.eventId).join(", ")]}),a.slice(0,20).map(K=>C.jsxs("div",{className:"muted",children:[K.eventId," → ",ci(K.recipientId),": ",K.status," (lần thử ",K.attempt,")",K.lastError?` — ${K.lastError}`:""]},K.jobId))]})]})}const Dh={chat:C.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:C.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[C.jsx("path",{d:"M9 11l3 3L22 4"}),C.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[C.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),C.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[C.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),C.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),menu:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[C.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),C.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),C.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:C.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[C.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})},CT=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function RT({p:n,online:e,lastSeen:t,lastMsg:r,task:s,isAi:a}){const u=r&&r.content||"";return C.jsxs("li",{children:[C.jsxs("span",{className:"avatar-wrap",children:[C.jsx("span",{className:"avatar sm",style:{backgroundColor:Wu(n.id),color:"#fff"},children:n.name.charAt(0)}),C.jsx("span",{className:e?"online-dot":"offline-dot"})]}),C.jsxs("span",{className:"side-person",children:[C.jsxs("span",{className:"side-name",children:[n.name," ",C.jsxs("span",{className:"side-role",children:["· ",n.roleVi]})]}),C.jsx("span",{className:`side-status${e?" online":""}`,children:e?"Đang online":t?`Hoạt động lần cuối ${VM(t)}`:"Chưa có dữ liệu hoạt động"}),r?C.jsxs("span",{className:"side-last",children:["“",u.slice(0,48),u.length>48?"…":"","” · ",ng(r.createdAt)]}):C.jsx("span",{className:"side-last",children:"Chưa có tin nhắn gần đây"}),s&&C.jsxs("span",{className:"side-task",children:["Đang làm: ",s]})]})]})}function GM(){const[n,e]=le.useState(null),[t,r]=le.useState(!1),s=le.useRef(!1),[a,u]=le.useState(null),[d,f]=le.useState("chat"),[m,v]=le.useState({}),[E,T]=le.useState(0),[x,V]=le.useState(!1),[j,B]=le.useState({}),[Z,K]=le.useState({});le.useEffect(()=>A1(Wa,async S=>{if(s.current||(s.current=!0,r(!0)),e(S),!S){u(null);return}const R=(S.email||"").toLowerCase();let N=null;try{const b=Ua(ho(Mr,"users"),Z0("email","==",R)),M=await YD(b);if(!M.empty){const k=M.docs[0].data();N=oo.find(Ke=>Ke.id===k.id)||{id:k.id,name:k.name||R,role:k.role||"staff",roleVi:k.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!N&&R==="teddyssk559@gmail.com"&&(N=oo.find(b=>b.id==="chung")),N||(N={id:S.uid,name:S.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(N)}),[]),le.useEffect(()=>{if(!n||!a)return;const S=pT(wT,`presence/${n.uid}`),R=()=>mT(S,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(M=>console.error("Presence write failed:",M));R(),iL(S).remove().catch(M=>console.error("Presence onDisconnect failed:",M));const N=setInterval(R,6e4),b=oL(pT(wT,"presence"),M=>v(M.val()||{}));return()=>{clearInterval(N),b(),mT(S,null).catch(M=>console.error("Presence clear failed:",M))}},[n,a]);const ne=le.useMemo(()=>{const S={};for(const R of Object.values(m||{})){if(!R||!R.personId)continue;const N=typeof R.lastSeen=="number"?R.lastSeen:Date.parse(R.lastSeen||"");S[R.personId]=R.online===!0&&Number.isFinite(N)&&Date.now()-N<12e4}return S},[m]),q=le.useMemo(()=>{const S={};for(const R of Object.values(m||{})){if(!R||!R.personId)continue;const N=typeof R.lastSeen=="number"?R.lastSeen:Date.parse(R.lastSeen||"");Number.isFinite(N)&&(S[R.personId]=N)}return S},[m]);if(le.useEffect(()=>{if(n)return Mu(Ua(ho(Mr,"messages"),Ou("createdAt","desc"),Lu(60)),S=>{const R={};for(const N of S.docs){const b=N.data();b&&b.senderId&&!R[b.senderId]&&(R[b.senderId]={content:b.content||"",createdAt:b.createdAt})}B(R)},()=>{})},[n]),le.useEffect(()=>{if(!n)return;let S=!1;return Gn.listTasks("").then(R=>{if(S)return;const N={};for(const b of R.tasks||[])if(b.status==="in_progress")for(const M of b.assignees||[])N[M]||(N[M]=b.title);K(N)}).catch(()=>{}),()=>{S=!0}},[n]),!t)return C.jsx("div",{className:"app",children:C.jsxs("div",{className:"loading",children:[C.jsx("span",{className:"avatar avatar-group",children:"E"}),C.jsx("div",{className:"brand-title",children:"Enteesee"}),C.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})});if(!n)return C.jsx(UM,{});if(!a)return C.jsx("div",{className:"app",children:C.jsx("div",{className:"content",children:C.jsx("div",{className:"main",children:C.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})});const Ie=oo.filter(S=>S.id!=="muse"),de=Ie.filter(S=>ne[S.id]).length,O={id:"muse",name:"Muse",roleVi:"AI điều phối"};return C.jsxs("div",{className:`app${d==="chat"?" app-chat":""}`,children:[C.jsxs("aside",{className:`sidebar${x?" open":""}`,children:[C.jsxs("div",{className:"side-brand",children:[C.jsx("span",{className:"avatar avatar-group",children:"E"}),C.jsxs("div",{children:[C.jsx("div",{className:"brand-title",children:"Enteesee"}),C.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]}),C.jsx("button",{type:"button",className:"drawer-close","aria-label":"Đóng menu",onClick:()=>V(!1),children:Dh.close})]}),C.jsx("nav",{className:"side-nav",children:CT.map(S=>C.jsxs("button",{className:d===S.id?"active":"",onClick:()=>{f(S.id),V(!1)},children:[C.jsxs("span",{className:"nav-icon",children:[Dh[S.id],S.id==="notifs"&&E>0&&C.jsx("span",{className:"badge",children:E})]}),C.jsx("span",{children:S.label})]},S.id))}),C.jsx("div",{className:"side-section",children:"Thành viên · Hoạt động"}),C.jsxs("ul",{className:"side-people",children:[Ie.map(S=>C.jsx(RT,{p:S,online:!!ne[S.id],lastSeen:q[S.id],lastMsg:j[S.id],task:Z[S.id]},S.id)),C.jsx(RT,{p:O,isAi:!0,online:!0,lastSeen:q.muse,lastMsg:j.muse,task:Z.muse})]}),C.jsxs("div",{className:"side-user",children:[C.jsx("span",{className:"avatar",style:{backgroundColor:Wu(a.id),color:"#fff"},children:a.name.charAt(0)}),C.jsxs("div",{children:[C.jsx("div",{className:"side-name",children:a.name}),C.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),x&&C.jsx("div",{className:"drawer-backdrop",onClick:()=>V(!1)}),C.jsxs("div",{className:"content",children:[C.jsxs("header",{className:"header",children:[C.jsx("button",{type:"button",className:"menu-btn","aria-label":"Mở menu",onClick:()=>V(!0),children:Dh.menu}),C.jsxs("div",{className:"chat-peer",onClick:()=>V(!0),title:"Mở menu",children:[C.jsx("span",{className:"avatar avatar-group",children:"E"}),C.jsxs("div",{className:"peer-info",children:[C.jsx("div",{className:"brand-title",children:"Enteesee"}),C.jsxs("div",{className:"peer-status",children:[Ie.length," thành viên",de>0&&C.jsxs("span",{className:"online-count",children:[" · ",de," đang online"]})]})]})]}),C.jsx("button",{type:"button",className:"header-avatars",onClick:()=>V(!0),"aria-label":"Mở danh sách thành viên",title:"Danh sách thành viên",children:Ie.map(S=>C.jsxs("span",{className:"avatar-wrap",title:`${S.name} — ${ne[S.id]?"đang online":"offline"}`,children:[C.jsx("span",{className:"avatar",style:{backgroundColor:Wu(S.id),color:"#fff"},children:S.name.charAt(0)}),C.jsx("span",{className:ne[S.id]?"online-dot":"offline-dot"})]},S.id))})]}),C.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&C.jsx(BM,{person:a}),d==="tasks"&&C.jsx(zM,{person:a}),d==="notifs"&&C.jsx(HM,{person:a,onUnread:T}),d==="account"&&C.jsx(qM,{person:a,onlineByPerson:ne,onSignOut:()=>k1(Wa)})]})]}),C.jsx("nav",{className:"nav",children:CT.map(S=>C.jsxs("button",{className:d===S.id?"active":"",onClick:()=>{f(S.id),V(!1)},children:[C.jsxs("span",{className:"nav-icon",children:[Dh[S.id],S.id==="notifs"&&E>0&&C.jsx("span",{className:"badge",children:E})]}),C.jsx("span",{children:S.label})]},S.id))})]})}zR.createRoot(document.getElementById("root")).render(C.jsx(LR.StrictMode,{children:C.jsx(GM,{})}));
