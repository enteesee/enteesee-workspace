(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function VT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gp={exports:{}},uu={},Kp={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function Gk(){if(eE)return $e;eE=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=w&&L[w]||L["@@iterator"],typeof L=="function"?L:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,F={};function U(L,Q,ye){this.props=L,this.context=Q,this.refs=F,this.updater=ye||N}U.prototype.isReactComponent={},U.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},U.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function ie(){}ie.prototype=U.prototype;function Y(L,Q,ye){this.props=L,this.context=Q,this.refs=F,this.updater=ye||N}var ne=Y.prototype=new ie;ne.constructor=Y,M(ne,U.prototype),ne.isPureReactComponent=!0;var B=Array.isArray,Ie=Object.prototype.hasOwnProperty,_e={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(L,Q,ye){var be,Le={},De=null,Fe=null;if(Q!=null)for(be in Q.ref!==void 0&&(Fe=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)Ie.call(Q,be)&&!x.hasOwnProperty(be)&&(Le[be]=Q[be]);var ze=arguments.length-2;if(ze===1)Le.children=ye;else if(1<ze){for(var Ge=Array(ze),Xe=0;Xe<ze;Xe++)Ge[Xe]=arguments[Xe+2];Le.children=Ge}if(L&&L.defaultProps)for(be in ze=L.defaultProps,ze)Le[be]===void 0&&(Le[be]=ze[be]);return{$$typeof:n,type:L,key:De,ref:Fe,props:Le,_owner:_e.current}}function A(L,Q){return{$$typeof:n,type:L.type,key:Q,ref:L.ref,props:L.props,_owner:L._owner}}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return Q[ye]})}var j=/\/+/g;function k(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):Q.toString(36)}function Be(L,Q,ye,be,Le){var De=typeof L;(De==="undefined"||De==="boolean")&&(L=null);var Fe=!1;if(L===null)Fe=!0;else switch(De){case"string":case"number":Fe=!0;break;case"object":switch(L.$$typeof){case n:case e:Fe=!0}}if(Fe)return Fe=L,Le=Le(Fe),L=be===""?"."+k(Fe,0):be,B(Le)?(ye="",L!=null&&(ye=L.replace(j,"$&/")+"/"),Be(Le,Q,ye,"",function(Xe){return Xe})):Le!=null&&(D(Le)&&(Le=A(Le,ye+(!Le.key||Fe&&Fe.key===Le.key?"":(""+Le.key).replace(j,"$&/")+"/")+L)),Q.push(Le)),1;if(Fe=0,be=be===""?".":be+":",B(L))for(var ze=0;ze<L.length;ze++){De=L[ze];var Ge=be+k(De,ze);Fe+=Be(De,Q,ye,Ge,Le)}else if(Ge=I(L),typeof Ge=="function")for(L=Ge.call(L),ze=0;!(De=L.next()).done;)De=De.value,Ge=be+k(De,ze++),Fe+=Be(De,Q,ye,Ge,Le);else if(De==="object")throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Se(L,Q,ye){if(L==null)return L;var be=[],Le=0;return Be(L,be,"","",function(De){return Q.call(ye,De,Le++)}),be}function te(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var fe={current:null},K={transition:null},ue={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:K,ReactCurrentOwner:_e};function ee(){throw Error("act(...) is not supported in production builds of React.")}return $e.Children={map:Se,forEach:function(L,Q,ye){Se(L,function(){Q.apply(this,arguments)},ye)},count:function(L){var Q=0;return Se(L,function(){Q++}),Q},toArray:function(L){return Se(L,function(Q){return Q})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},$e.Component=U,$e.Fragment=t,$e.Profiler=s,$e.PureComponent=Y,$e.StrictMode=r,$e.Suspense=f,$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,$e.act=ee,$e.cloneElement=function(L,Q,ye){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var be=M({},L.props),Le=L.key,De=L.ref,Fe=L._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Fe=_e.current),Q.key!==void 0&&(Le=""+Q.key),L.type&&L.type.defaultProps)var ze=L.type.defaultProps;for(Ge in Q)Ie.call(Q,Ge)&&!x.hasOwnProperty(Ge)&&(be[Ge]=Q[Ge]===void 0&&ze!==void 0?ze[Ge]:Q[Ge])}var Ge=arguments.length-2;if(Ge===1)be.children=ye;else if(1<Ge){ze=Array(Ge);for(var Xe=0;Xe<Ge;Xe++)ze[Xe]=arguments[Xe+2];be.children=ze}return{$$typeof:n,type:L.type,key:Le,ref:De,props:be,_owner:Fe}},$e.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},$e.createElement=C,$e.createFactory=function(L){var Q=C.bind(null,L);return Q.type=L,Q},$e.createRef=function(){return{current:null}},$e.forwardRef=function(L){return{$$typeof:d,render:L}},$e.isValidElement=D,$e.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:te}},$e.memo=function(L,Q){return{$$typeof:m,type:L,compare:Q===void 0?null:Q}},$e.startTransition=function(L){var Q=K.transition;K.transition={};try{L()}finally{K.transition=Q}},$e.unstable_act=ee,$e.useCallback=function(L,Q){return fe.current.useCallback(L,Q)},$e.useContext=function(L){return fe.current.useContext(L)},$e.useDebugValue=function(){},$e.useDeferredValue=function(L){return fe.current.useDeferredValue(L)},$e.useEffect=function(L,Q){return fe.current.useEffect(L,Q)},$e.useId=function(){return fe.current.useId()},$e.useImperativeHandle=function(L,Q,ye){return fe.current.useImperativeHandle(L,Q,ye)},$e.useInsertionEffect=function(L,Q){return fe.current.useInsertionEffect(L,Q)},$e.useLayoutEffect=function(L,Q){return fe.current.useLayoutEffect(L,Q)},$e.useMemo=function(L,Q){return fe.current.useMemo(L,Q)},$e.useReducer=function(L,Q,ye){return fe.current.useReducer(L,Q,ye)},$e.useRef=function(L){return fe.current.useRef(L)},$e.useState=function(L){return fe.current.useState(L)},$e.useSyncExternalStore=function(L,Q,ye){return fe.current.useSyncExternalStore(L,Q,ye)},$e.useTransition=function(){return fe.current.useTransition()},$e.version="18.3.1",$e}var tE;function hg(){return tE||(tE=1,Kp.exports=Gk()),Kp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function Kk(){if(nE)return uu;nE=1;var n=hg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,w={},I=null,N=null;m!==void 0&&(I=""+m),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(N=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(w[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:e,type:d,key:I,ref:N,props:w,_owner:s.current}}return uu.Fragment=t,uu.jsx=u,uu.jsxs=u,uu}var rE;function Qk(){return rE||(rE=1,Gp.exports=Kk()),Gp.exports}var E=Qk(),q=hg();const Yk=VT(q);var Rh={},Qp={exports:{}},$n={},Yp={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function Xk(){return iE||(iE=1,(function(n){function e(K,ue){var ee=K.length;K.push(ue);e:for(;0<ee;){var L=ee-1>>>1,Q=K[L];if(0<s(Q,ue))K[L]=ue,K[ee]=Q,ee=L;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ue=K[0],ee=K.pop();if(ee!==ue){K[0]=ee;e:for(var L=0,Q=K.length,ye=Q>>>1;L<ye;){var be=2*(L+1)-1,Le=K[be],De=be+1,Fe=K[De];if(0>s(Le,ee))De<Q&&0>s(Fe,Le)?(K[L]=Fe,K[De]=ee,L=De):(K[L]=Le,K[be]=ee,L=be);else if(De<Q&&0>s(Fe,ee))K[L]=Fe,K[De]=ee,L=De;else break e}}return ue}function s(K,ue){var ee=K.sortIndex-ue.sortIndex;return ee!==0?ee:K.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,w=null,I=3,N=!1,M=!1,F=!1,U=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(K){for(var ue=t(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=K)r(m),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(m)}}function B(K){if(F=!1,ne(K),!M)if(t(f)!==null)M=!0,te(Ie);else{var ue=t(m);ue!==null&&fe(B,ue.startTime-K)}}function Ie(K,ue){M=!1,F&&(F=!1,ie(C),C=-1),N=!0;var ee=I;try{for(ne(ue),w=t(f);w!==null&&(!(w.expirationTime>ue)||K&&!O());){var L=w.callback;if(typeof L=="function"){w.callback=null,I=w.priorityLevel;var Q=L(w.expirationTime<=ue);ue=n.unstable_now(),typeof Q=="function"?w.callback=Q:w===t(f)&&r(f),ne(ue)}else r(f);w=t(f)}if(w!==null)var ye=!0;else{var be=t(m);be!==null&&fe(B,be.startTime-ue),ye=!1}return ye}finally{w=null,I=ee,N=!1}}var _e=!1,x=null,C=-1,A=5,D=-1;function O(){return!(n.unstable_now()-D<A)}function j(){if(x!==null){var K=n.unstable_now();D=K;var ue=!0;try{ue=x(!0,K)}finally{ue?k():(_e=!1,x=null)}}else _e=!1}var k;if(typeof Y=="function")k=function(){Y(j)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Se=Be.port2;Be.port1.onmessage=j,k=function(){Se.postMessage(null)}}else k=function(){U(j,0)};function te(K){x=K,_e||(_e=!0,k())}function fe(K,ue){C=U(function(){K(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){M||N||(M=!0,te(Ie))},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(K){switch(I){case 1:case 2:case 3:var ue=3;break;default:ue=I}var ee=I;I=ue;try{return K()}finally{I=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,ue){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ee=I;I=K;try{return ue()}finally{I=ee}},n.unstable_scheduleCallback=function(K,ue,ee){var L=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?L+ee:L):ee=L,K){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ee+Q,K={id:y++,callback:ue,priorityLevel:K,startTime:ee,expirationTime:Q,sortIndex:-1},ee>L?(K.sortIndex=ee,e(m,K),t(f)===null&&K===t(m)&&(F?(ie(C),C=-1):F=!0,fe(B,ee-L))):(K.sortIndex=Q,e(f,K),M||N||(M=!0,te(Ie))),K},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(K){var ue=I;return function(){var ee=I;I=ue;try{return K.apply(this,arguments)}finally{I=ee}}}})(Xp)),Xp}var sE;function Jk(){return sE||(sE=1,Yp.exports=Xk()),Yp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE;function Zk(){if(oE)return $n;oE=1;var n=hg(),e=Jk();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function I(i){return f.call(w,i)?!0:f.call(y,i)?!1:m.test(i)?w[i]=!0:(y[i]=!0,!1)}function N(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,l,h){if(o===null||typeof o>"u"||N(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function F(i,o,l,h,p,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){U[i]=new F(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];U[o]=new F(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){U[i]=new F(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){U[i]=new F(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){U[i]=new F(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){U[i]=new F(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){U[i]=new F(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){U[i]=new F(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){U[i]=new F(i,5,!1,i.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function Y(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(ie,Y);U[o]=new F(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(ie,Y);U[o]=new F(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(ie,Y);U[o]=new F(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){U[i]=new F(i,1,!1,i.toLowerCase(),null,!1,!1)}),U.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){U[i]=new F(i,1,!1,i.toLowerCase(),null,!0,!0)});function ne(i,o,l,h){var p=U.hasOwnProperty(o)?U[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,l,p,h)&&(l=null),h||p===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var B=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),_e=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),O=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),K=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var ee=Object.assign,L;function Q(i){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+i}var ye=!1;function be(i,o){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(H){var h=H}Reflect.construct(i,[],o)}else{try{o.call()}catch(H){h=H}i.call(o.prototype)}else{try{throw Error()}catch(H){h=H}i()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var p=H.stack.split(`
`),_=h.stack.split(`
`),T=p.length-1,R=_.length-1;1<=T&&0<=R&&p[T]!==_[R];)R--;for(;1<=T&&0<=R;T--,R--)if(p[T]!==_[R]){if(T!==1||R!==1)do if(T--,R--,0>R||p[T]!==_[R]){var b=`
`+p[T].replace(" at new "," at ");return i.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",i.displayName)),b}while(1<=T&&0<=R);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function Le(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=be(i.type,!1),i;case 11:return i=be(i.type.render,!1),i;case 1:return i=be(i.type,!0),i;default:return""}}function De(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case _e:return"Portal";case A:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case Be:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case D:return(i._context.displayName||"Context")+".Provider";case j:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Se:return o=i.displayName||null,o!==null?o:De(i.type)||"Memo";case te:o=i._payload,i=i._init;try{return De(i(o))}catch{}}return null}function Fe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ze(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ge(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Xe(i){var o=Ge(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,_.call(this,T)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function an(i){i._valueTracker||(i._valueTracker=Xe(i))}function yn(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ge(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Tt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Qn(i,o){var l=o.checked;return ee({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Nr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=ze(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function _t(i,o){o=o.checked,o!=null&&ne(i,"checked",o,!1)}function xr(i,o){_t(i,o);var l=ze(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?de(i,o.type,l):o.hasOwnProperty("defaultValue")&&de(i,o.type,ze(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Pi(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function de(i,o,l){(o!=="number"||Tt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var nt=Array.isArray;function xt(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+ze(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function cr(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function hr(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(nt(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:ze(l)}}function br(i,o){var l=ze(o.value),h=ze(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function dr(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function bt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?bt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Yn,ti=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Yn.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function fr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mr=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(i){mr.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),pr[o]=pr[i]})});function Dr(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||pr.hasOwnProperty(i)&&pr[i]?(""+o).trim():o+"px"}function Ni(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Dr(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var ls=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(i,o){if(o){if(ls[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ni(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function us(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var cs=null,vn=null,gr=null;function ln(i){if(i=Kl(i)){if(typeof cs!="function")throw Error(t(280));var o=i.stateNode;o&&(o=zc(o),cs(i.stateNode,i.type,o))}}function dt(i){vn?gr?gr.push(i):gr=[i]:vn=i}function ii(){if(vn){var i=vn,o=gr;if(gr=vn=null,ln(i),o)for(i=0;i<o.length;i++)ln(o[i])}}function On(i,o){return i(o)}function Or(){}var Xn=!1;function un(i,o,l){if(Xn)return i(o,l);Xn=!0;try{return On(i,o,l)}finally{Xn=!1,(vn!==null||gr!==null)&&(Or(),ii())}}function It(i,o){var l=i.stateNode;if(l===null)return null;var h=zc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var si=!1;if(d)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){si=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{si=!1}function xi(i,o,l,h,p,_,T,R,b){var H=Array.prototype.slice.call(arguments,3);try{o.apply(l,H)}catch(se){this.onError(se)}}var oi=!1,hs=null,Jn=!1,bi=null,aa={onError:function(i){oi=!0,hs=i}};function ds(i,o,l,h,p,_,T,R,b){oi=!1,hs=null,xi.apply(aa,arguments)}function la(i,o,l,h,p,_,T,R,b){if(ds.apply(this,arguments),oi){if(oi){var H=hs;oi=!1,hs=null}else throw Error(t(198));Jn||(Jn=!0,bi=H)}}function P(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function J(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function oe(i){if(P(i)!==i)throw Error(t(188))}function Ae(i){var o=i.alternate;if(!o){if(o=P(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return oe(p),i;if(_===h)return oe(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var T=!1,R=p.child;R;){if(R===l){T=!0,l=p,h=_;break}if(R===h){T=!0,h=p,l=_;break}R=R.sibling}if(!T){for(R=_.child;R;){if(R===l){T=!0,l=_,h=p;break}if(R===h){T=!0,h=_,l=p;break}R=R.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function Je(i){return i=Ae(i),i!==null?kt(i):null}function kt(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=kt(i);if(o!==null)return o;i=i.sibling}return null}var Ze=e.unstable_scheduleCallback,st=e.unstable_cancelCallback,Rt=e.unstable_shouldYield,Gt=e.unstable_requestPaint,Qe=e.unstable_now,fs=e.unstable_getCurrentPriorityLevel,Lr=e.unstable_ImmediatePriority,ps=e.unstable_UserBlockingPriority,_r=e.unstable_NormalPriority,xl=e.unstable_LowPriority,_c=e.unstable_IdlePriority,yo=null,Zn=null;function yc(i){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(yo,i,void 0,(i.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:Ec,bl=Math.log,vc=Math.LN2;function Ec(i){return i>>>=0,i===0?32:31-(bl(i)/vc|0)|0}var ua=64,ca=4194304;function ms(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vo(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var R=T&~p;R!==0?h=ms(R):(_&=T,_!==0&&(h=ms(_)))}else T=l&~p,T!==0?h=ms(T):_!==0&&(h=ms(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-Pn(o),p=1<<l,h|=i[l],o&=~p;return h}function If(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Di(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-Pn(_),R=1<<T,b=p[T];b===-1?((R&l)===0||(R&h)!==0)&&(p[T]=If(R,o)):b<=o&&(i.expiredLanes|=R),_&=~R}}function er(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Eo(){var i=ua;return ua<<=1,(ua&4194240)===0&&(ua=64),i}function gs(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function _s(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Pn(o),i[o]=l}function ft(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Pn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function ys(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-Pn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Ye=0;function vs(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var wc,ha,Tc,Ic,Sc,Dl=!1,ai=[],cn=null,Mr=null,Vr=null,Es=new Map,yr=new Map,li=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(i,o){switch(i){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Es.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(o.pointerId)}}function Mn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Kl(o),o!==null&&ha(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Cf(i,o,l,h,p){switch(o){case"focusin":return cn=Mn(cn,i,o,l,h,p),!0;case"dragenter":return Mr=Mn(Mr,i,o,l,h,p),!0;case"mouseover":return Vr=Mn(Vr,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Es.set(_,Mn(Es.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,yr.set(_,Mn(yr.get(_)||null,i,o,l,h,p)),!0}return!1}function kc(i){var o=Co(i.target);if(o!==null){var l=P(o);if(l!==null){if(o=l.tag,o===13){if(o=J(l),o!==null){i.blockedOn=o,Sc(i.priority,function(){Tc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Oi(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=da(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);ri=h,l.target.dispatchEvent(h),ri=null}else return o=Kl(l),o!==null&&ha(o),i.blockedOn=l,!1;o.shift()}return!0}function wo(i,o,l){Oi(i)&&l.delete(o)}function Rc(){Dl=!1,cn!==null&&Oi(cn)&&(cn=null),Mr!==null&&Oi(Mr)&&(Mr=null),Vr!==null&&Oi(Vr)&&(Vr=null),Es.forEach(wo),yr.forEach(wo)}function Fr(i,o){i.blockedOn===o&&(i.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rc)))}function jr(i){function o(p){return Fr(p,i)}if(0<ai.length){Fr(ai[0],i);for(var l=1;l<ai.length;l++){var h=ai[l];h.blockedOn===i&&(h.blockedOn=null)}}for(cn!==null&&Fr(cn,i),Mr!==null&&Fr(Mr,i),Vr!==null&&Fr(Vr,i),Es.forEach(o),yr.forEach(o),l=0;l<li.length;l++)h=li[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<li.length&&(l=li[0],l.blockedOn===null);)kc(l),l.blockedOn===null&&li.shift()}var Li=B.ReactCurrentBatchConfig,ws=!0;function St(i,o,l,h){var p=Ye,_=Li.transition;Li.transition=null;try{Ye=1,Ol(i,o,l,h)}finally{Ye=p,Li.transition=_}}function kf(i,o,l,h){var p=Ye,_=Li.transition;Li.transition=null;try{Ye=4,Ol(i,o,l,h)}finally{Ye=p,Li.transition=_}}function Ol(i,o,l,h){if(ws){var p=da(i,o,l,h);if(p===null)Vf(i,o,h,To,l),Cc(i,h);else if(Cf(p,i,o,l,h))h.stopPropagation();else if(Cc(i,h),o&4&&-1<Sf.indexOf(i)){for(;p!==null;){var _=Kl(p);if(_!==null&&wc(_),_=da(i,o,l,h),_===null&&Vf(i,o,h,To,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Vf(i,o,h,null,l)}}var To=null;function da(i,o,l,h){if(To=null,i=us(h),i=Co(i),i!==null)if(o=P(i),o===null)i=null;else if(l=o.tag,l===13){if(i=J(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return To=i,null}function Ll(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fs()){case Lr:return 1;case ps:return 4;case _r:case xl:return 16;case _c:return 536870912;default:return 16}default:return 16}}var tr=null,fa=null,Vn=null;function Ml(){if(Vn)return Vn;var i,o=fa,l=o.length,h,p="value"in tr?tr.value:tr.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var T=l-i;for(h=1;h<=T&&o[l-h]===p[_-h];h++);return Vn=p.slice(i,1<h?1-h:void 0)}function pa(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function ui(){return!0}function Vl(){return!1}function hn(i){function o(l,h,p,_,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ui:Vl,this.isPropagationStopped=Vl,this}return ee(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),o}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=hn(Ur),ci=ee({},Ur,{view:0,detail:0}),Rf=hn(ci),ga,Mi,Ts,Io=ee({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ts&&(Ts&&i.type==="mousemove"?(ga=i.screenX-Ts.screenX,Mi=i.screenY-Ts.screenY):Mi=ga=0,Ts=i),ga)},movementY:function(i){return"movementY"in i?i.movementY:Mi}}),_a=hn(Io),Fl=ee({},Io,{dataTransfer:0}),Ac=hn(Fl),ya=ee({},ci,{relatedTarget:0}),va=hn(ya),Pc=ee({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Vi=hn(Pc),Nc=ee({},Ur,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),xc=hn(Nc),bc=ee({},Ur,{data:0}),jl=hn(bc),Ea={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Dc[i])?!!o[i]:!1}function hi(){return Oc}var c=ee({},ci,{key:function(i){if(i.key){var o=Ea[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=pa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Nn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(i){return i.type==="keypress"?pa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=hn(c),v=ee({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=hn(v),z=ee({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),G=hn(z),he=ee({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),ct=hn(he),Kt=ee({},Io,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),et=hn(Kt),Jt=[9,13,27,32],Ut=d&&"CompositionEvent"in window,vr=null;d&&"documentMode"in document&&(vr=document.documentMode);var nr=d&&"TextEvent"in window&&!vr,So=d&&(!Ut||vr&&8<vr&&11>=vr),wa=" ",K_=!1;function Q_(i,o){switch(i){case"keyup":return Jt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ta=!1;function WC(i,o){switch(i){case"compositionend":return Y_(o);case"keypress":return o.which!==32?null:(K_=!0,wa);case"textInput":return i=o.data,i===wa&&K_?null:i;default:return null}}function HC(i,o){if(Ta)return i==="compositionend"||!Ut&&Q_(i,o)?(i=Ml(),Vn=fa=tr=null,Ta=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return So&&o.locale!=="ko"?null:o.data;default:return null}}var qC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!qC[i.type]:o==="textarea"}function J_(i,o,l,h){dt(h),o=jc(o,"onChange"),0<o.length&&(l=new ma("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var Ul=null,Bl=null;function GC(i){gy(i,0)}function Lc(i){var o=Ra(i);if(yn(o))return i}function KC(i,o){if(i==="change")return o}var Z_=!1;if(d){var Af;if(d){var Pf="oninput"in document;if(!Pf){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),Pf=typeof ey.oninput=="function"}Af=Pf}else Af=!1;Z_=Af&&(!document.documentMode||9<document.documentMode)}function ty(){Ul&&(Ul.detachEvent("onpropertychange",ny),Bl=Ul=null)}function ny(i){if(i.propertyName==="value"&&Lc(Bl)){var o=[];J_(o,Bl,i,us(i)),un(GC,o)}}function QC(i,o,l){i==="focusin"?(ty(),Ul=o,Bl=l,Ul.attachEvent("onpropertychange",ny)):i==="focusout"&&ty()}function YC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Lc(Bl)}function XC(i,o){if(i==="click")return Lc(o)}function JC(i,o){if(i==="input"||i==="change")return Lc(o)}function ZC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Br=typeof Object.is=="function"?Object.is:ZC;function zl(i,o){if(Br(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!Br(i[p],o[p]))return!1}return!0}function ry(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function iy(i,o){var l=ry(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ry(l)}}function sy(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?sy(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function oy(){for(var i=window,o=Tt();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Tt(i.document)}return o}function Nf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function ek(i){var o=oy(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&sy(l.ownerDocument.documentElement,l)){if(h!==null&&Nf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=iy(l,_);var T=iy(l,h);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var tk=d&&"documentMode"in document&&11>=document.documentMode,Ia=null,xf=null,$l=null,bf=!1;function ay(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bf||Ia==null||Ia!==Tt(h)||(h=Ia,"selectionStart"in h&&Nf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$l&&zl($l,h)||($l=h,h=jc(xf,"onSelect"),0<h.length&&(o=new ma("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Ia)))}function Mc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Sa={animationend:Mc("Animation","AnimationEnd"),animationiteration:Mc("Animation","AnimationIteration"),animationstart:Mc("Animation","AnimationStart"),transitionend:Mc("Transition","TransitionEnd")},Df={},ly={};d&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Vc(i){if(Df[i])return Df[i];if(!Sa[i])return i;var o=Sa[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in ly)return Df[i]=o[l];return i}var uy=Vc("animationend"),cy=Vc("animationiteration"),hy=Vc("animationstart"),dy=Vc("transitionend"),fy=new Map,py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Is(i,o){fy.set(i,o),a(o,[i])}for(var Of=0;Of<py.length;Of++){var Lf=py[Of],nk=Lf.toLowerCase(),rk=Lf[0].toUpperCase()+Lf.slice(1);Is(nk,"on"+rk)}Is(uy,"onAnimationEnd"),Is(cy,"onAnimationIteration"),Is(hy,"onAnimationStart"),Is("dblclick","onDoubleClick"),Is("focusin","onFocus"),Is("focusout","onBlur"),Is(dy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ik=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wl));function my(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,la(h,o,void 0,i),i.currentTarget=null}function gy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var T=h.length-1;0<=T;T--){var R=h[T],b=R.instance,H=R.currentTarget;if(R=R.listener,b!==_&&p.isPropagationStopped())break e;my(p,R,H),_=b}else for(T=0;T<h.length;T++){if(R=h[T],b=R.instance,H=R.currentTarget,R=R.listener,b!==_&&p.isPropagationStopped())break e;my(p,R,H),_=b}}}if(Jn)throw i=bi,Jn=!1,bi=null,i}function yt(i,o){var l=o[$f];l===void 0&&(l=o[$f]=new Set);var h=i+"__bubble";l.has(h)||(_y(o,i,2,!1),l.add(h))}function Mf(i,o,l){var h=0;o&&(h|=4),_y(l,i,h,o)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function Hl(i){if(!i[Fc]){i[Fc]=!0,r.forEach(function(l){l!=="selectionchange"&&(ik.has(l)||Mf(l,!1,i),Mf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Fc]||(o[Fc]=!0,Mf("selectionchange",!1,o))}}function _y(i,o,l,h){switch(Ll(o)){case 1:var p=St;break;case 4:p=kf;break;default:p=Ol}l=p.bind(null,o,l,i),p=void 0,!si||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Vf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var b=T.tag;if((b===3||b===4)&&(b=T.stateNode.containerInfo,b===p||b.nodeType===8&&b.parentNode===p))return;T=T.return}for(;R!==null;){if(T=Co(R),T===null)return;if(b=T.tag,b===5||b===6){h=_=T;continue e}R=R.parentNode}}h=h.return}un(function(){var H=_,se=us(l),ae=[];e:{var re=fy.get(i);if(re!==void 0){var me=ma,Ee=i;switch(i){case"keypress":if(pa(l)===0)break e;case"keydown":case"keyup":me=g;break;case"focusin":Ee="focus",me=va;break;case"focusout":Ee="blur",me=va;break;case"beforeblur":case"afterblur":me=va;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=Ac;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=G;break;case uy:case cy:case hy:me=Vi;break;case dy:me=ct;break;case"scroll":me=Rf;break;case"wheel":me=et;break;case"copy":case"cut":case"paste":me=xc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=S}var we=(o&4)!==0,Mt=!we&&i==="scroll",$=we?re!==null?re+"Capture":null:re;we=[];for(var V=H,W;V!==null;){W=V;var le=W.stateNode;if(W.tag===5&&le!==null&&(W=le,$!==null&&(le=It(V,$),le!=null&&we.push(ql(V,le,W)))),Mt)break;V=V.return}0<we.length&&(re=new me(re,Ee,null,l,se),ae.push({event:re,listeners:we}))}}if((o&7)===0){e:{if(re=i==="mouseover"||i==="pointerover",me=i==="mouseout"||i==="pointerout",re&&l!==ri&&(Ee=l.relatedTarget||l.fromElement)&&(Co(Ee)||Ee[Fi]))break e;if((me||re)&&(re=se.window===se?se:(re=se.ownerDocument)?re.defaultView||re.parentWindow:window,me?(Ee=l.relatedTarget||l.toElement,me=H,Ee=Ee?Co(Ee):null,Ee!==null&&(Mt=P(Ee),Ee!==Mt||Ee.tag!==5&&Ee.tag!==6)&&(Ee=null)):(me=null,Ee=H),me!==Ee)){if(we=_a,le="onMouseLeave",$="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(we=S,le="onPointerLeave",$="onPointerEnter",V="pointer"),Mt=me==null?re:Ra(me),W=Ee==null?re:Ra(Ee),re=new we(le,V+"leave",me,l,se),re.target=Mt,re.relatedTarget=W,le=null,Co(se)===H&&(we=new we($,V+"enter",Ee,l,se),we.target=W,we.relatedTarget=Mt,le=we),Mt=le,me&&Ee)t:{for(we=me,$=Ee,V=0,W=we;W;W=Ca(W))V++;for(W=0,le=$;le;le=Ca(le))W++;for(;0<V-W;)we=Ca(we),V--;for(;0<W-V;)$=Ca($),W--;for(;V--;){if(we===$||$!==null&&we===$.alternate)break t;we=Ca(we),$=Ca($)}we=null}else we=null;me!==null&&yy(ae,re,me,we,!1),Ee!==null&&Mt!==null&&yy(ae,Mt,Ee,we,!0)}}e:{if(re=H?Ra(H):window,me=re.nodeName&&re.nodeName.toLowerCase(),me==="select"||me==="input"&&re.type==="file")var Te=KC;else if(X_(re))if(Z_)Te=JC;else{Te=YC;var ke=QC}else(me=re.nodeName)&&me.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(Te=XC);if(Te&&(Te=Te(i,H))){J_(ae,Te,l,se);break e}ke&&ke(i,re,H),i==="focusout"&&(ke=re._wrapperState)&&ke.controlled&&re.type==="number"&&de(re,"number",re.value)}switch(ke=H?Ra(H):window,i){case"focusin":(X_(ke)||ke.contentEditable==="true")&&(Ia=ke,xf=H,$l=null);break;case"focusout":$l=xf=Ia=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,ay(ae,l,se);break;case"selectionchange":if(tk)break;case"keydown":case"keyup":ay(ae,l,se)}var Re;if(Ut)e:{switch(i){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Ta?Q_(i,l)&&(Oe="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Oe="onCompositionStart");Oe&&(So&&l.locale!=="ko"&&(Ta||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Ta&&(Re=Ml()):(tr=se,fa="value"in tr?tr.value:tr.textContent,Ta=!0)),ke=jc(H,Oe),0<ke.length&&(Oe=new jl(Oe,i,null,l,se),ae.push({event:Oe,listeners:ke}),Re?Oe.data=Re:(Re=Y_(l),Re!==null&&(Oe.data=Re)))),(Re=nr?WC(i,l):HC(i,l))&&(H=jc(H,"onBeforeInput"),0<H.length&&(se=new jl("onBeforeInput","beforeinput",null,l,se),ae.push({event:se,listeners:H}),se.data=Re))}gy(ae,o)})}function ql(i,o,l){return{instance:i,listener:o,currentTarget:l}}function jc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=It(i,l),_!=null&&h.unshift(ql(i,_,p)),_=It(i,o),_!=null&&h.push(ql(i,_,p))),i=i.return}return h}function Ca(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function yy(i,o,l,h,p){for(var _=o._reactName,T=[];l!==null&&l!==h;){var R=l,b=R.alternate,H=R.stateNode;if(b!==null&&b===h)break;R.tag===5&&H!==null&&(R=H,p?(b=It(l,_),b!=null&&T.unshift(ql(l,b,R))):p||(b=It(l,_),b!=null&&T.push(ql(l,b,R)))),l=l.return}T.length!==0&&i.push({event:o,listeners:T})}var sk=/\r\n?/g,ok=/\u0000|\uFFFD/g;function vy(i){return(typeof i=="string"?i:""+i).replace(sk,`
`).replace(ok,"")}function Uc(i,o,l){if(o=vy(o),vy(i)!==o&&l)throw Error(t(425))}function Bc(){}var Ff=null,jf=null;function Uf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,ak=typeof clearTimeout=="function"?clearTimeout:void 0,Ey=typeof Promise=="function"?Promise:void 0,lk=typeof queueMicrotask=="function"?queueMicrotask:typeof Ey<"u"?function(i){return Ey.resolve(null).then(i).catch(uk)}:Bf;function uk(i){setTimeout(function(){throw i})}function zf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),jr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);jr(o)}function Ss(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function wy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ka=Math.random().toString(36).slice(2),di="__reactFiber$"+ka,Gl="__reactProps$"+ka,Fi="__reactContainer$"+ka,$f="__reactEvents$"+ka,ck="__reactListeners$"+ka,hk="__reactHandles$"+ka;function Co(i){var o=i[di];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Fi]||l[di]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=wy(i);i!==null;){if(l=i[di])return l;i=wy(i)}return o}i=l,l=i.parentNode}return null}function Kl(i){return i=i[di]||i[Fi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ra(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function zc(i){return i[Gl]||null}var Wf=[],Aa=-1;function Cs(i){return{current:i}}function vt(i){0>Aa||(i.current=Wf[Aa],Wf[Aa]=null,Aa--)}function mt(i,o){Aa++,Wf[Aa]=i.current,i.current=o}var ks={},En=Cs(ks),Fn=Cs(!1),ko=ks;function Pa(i,o){var l=i.type.contextTypes;if(!l)return ks;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function jn(i){return i=i.childContextTypes,i!=null}function $c(){vt(Fn),vt(En)}function Ty(i,o,l){if(En.current!==ks)throw Error(t(168));mt(En,o),mt(Fn,l)}function Iy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,Fe(i)||"Unknown",p));return ee({},l,h)}function Wc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ks,ko=En.current,mt(En,i),mt(Fn,Fn.current),!0}function Sy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Iy(i,o,ko),h.__reactInternalMemoizedMergedChildContext=i,vt(Fn),vt(En),mt(En,i)):vt(Fn),mt(Fn,l)}var ji=null,Hc=!1,Hf=!1;function Cy(i){ji===null?ji=[i]:ji.push(i)}function dk(i){Hc=!0,Cy(i)}function Rs(){if(!Hf&&ji!==null){Hf=!0;var i=0,o=Ye;try{var l=ji;for(Ye=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}ji=null,Hc=!1}catch(p){throw ji!==null&&(ji=ji.slice(i+1)),Ze(Lr,Rs),p}finally{Ye=o,Hf=!1}}return null}var Na=[],xa=0,qc=null,Gc=0,Er=[],wr=0,Ro=null,Ui=1,Bi="";function Ao(i,o){Na[xa++]=Gc,Na[xa++]=qc,qc=i,Gc=o}function ky(i,o,l){Er[wr++]=Ui,Er[wr++]=Bi,Er[wr++]=Ro,Ro=i;var h=Ui;i=Bi;var p=32-Pn(h)-1;h&=~(1<<p),l+=1;var _=32-Pn(o)+p;if(30<_){var T=p-p%5;_=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Ui=1<<32-Pn(o)+p|l<<p|h,Bi=_+i}else Ui=1<<_|l<<p|h,Bi=i}function qf(i){i.return!==null&&(Ao(i,1),ky(i,1,0))}function Gf(i){for(;i===qc;)qc=Na[--xa],Na[xa]=null,Gc=Na[--xa],Na[xa]=null;for(;i===Ro;)Ro=Er[--wr],Er[wr]=null,Bi=Er[--wr],Er[wr]=null,Ui=Er[--wr],Er[wr]=null}var rr=null,ir=null,Ct=!1,zr=null;function Ry(i,o){var l=Cr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Ay(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,rr=i,ir=Ss(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,rr=i,ir=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ro!==null?{id:Ui,overflow:Bi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Cr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,rr=i,ir=null,!0):!1;default:return!1}}function Kf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Qf(i){if(Ct){var o=ir;if(o){var l=o;if(!Ay(i,o)){if(Kf(i))throw Error(t(418));o=Ss(l.nextSibling);var h=rr;o&&Ay(i,o)?Ry(h,l):(i.flags=i.flags&-4097|2,Ct=!1,rr=i)}}else{if(Kf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ct=!1,rr=i}}}function Py(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;rr=i}function Kc(i){if(i!==rr)return!1;if(!Ct)return Py(i),Ct=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Uf(i.type,i.memoizedProps)),o&&(o=ir)){if(Kf(i))throw Ny(),Error(t(418));for(;o;)Ry(i,o),o=Ss(o.nextSibling)}if(Py(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){ir=Ss(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}ir=null}}else ir=rr?Ss(i.stateNode.nextSibling):null;return!0}function Ny(){for(var i=ir;i;)i=Ss(i.nextSibling)}function ba(){ir=rr=null,Ct=!1}function Yf(i){zr===null?zr=[i]:zr.push(i)}var fk=B.ReactCurrentBatchConfig;function Ql(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var R=p.refs;T===null?delete R[_]:R[_]=T},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Qc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function xy(i){var o=i._init;return o(i._payload)}function by(i){function o($,V){if(i){var W=$.deletions;W===null?($.deletions=[V],$.flags|=16):W.push(V)}}function l($,V){if(!i)return null;for(;V!==null;)o($,V),V=V.sibling;return null}function h($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function p($,V){return $=Ls($,V),$.index=0,$.sibling=null,$}function _($,V,W){return $.index=W,i?(W=$.alternate,W!==null?(W=W.index,W<V?($.flags|=2,V):W):($.flags|=2,V)):($.flags|=1048576,V)}function T($){return i&&$.alternate===null&&($.flags|=2),$}function R($,V,W,le){return V===null||V.tag!==6?(V=Bp(W,$.mode,le),V.return=$,V):(V=p(V,W),V.return=$,V)}function b($,V,W,le){var Te=W.type;return Te===x?se($,V,W.props.children,le,W.key):V!==null&&(V.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===te&&xy(Te)===V.type)?(le=p(V,W.props),le.ref=Ql($,V,W),le.return=$,le):(le=vh(W.type,W.key,W.props,null,$.mode,le),le.ref=Ql($,V,W),le.return=$,le)}function H($,V,W,le){return V===null||V.tag!==4||V.stateNode.containerInfo!==W.containerInfo||V.stateNode.implementation!==W.implementation?(V=zp(W,$.mode,le),V.return=$,V):(V=p(V,W.children||[]),V.return=$,V)}function se($,V,W,le,Te){return V===null||V.tag!==7?(V=Mo(W,$.mode,le,Te),V.return=$,V):(V=p(V,W),V.return=$,V)}function ae($,V,W){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Bp(""+V,$.mode,W),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ie:return W=vh(V.type,V.key,V.props,null,$.mode,W),W.ref=Ql($,null,V),W.return=$,W;case _e:return V=zp(V,$.mode,W),V.return=$,V;case te:var le=V._init;return ae($,le(V._payload),W)}if(nt(V)||ue(V))return V=Mo(V,$.mode,W,null),V.return=$,V;Qc($,V)}return null}function re($,V,W,le){var Te=V!==null?V.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return Te!==null?null:R($,V,""+W,le);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Ie:return W.key===Te?b($,V,W,le):null;case _e:return W.key===Te?H($,V,W,le):null;case te:return Te=W._init,re($,V,Te(W._payload),le)}if(nt(W)||ue(W))return Te!==null?null:se($,V,W,le,null);Qc($,W)}return null}function me($,V,W,le,Te){if(typeof le=="string"&&le!==""||typeof le=="number")return $=$.get(W)||null,R(V,$,""+le,Te);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case Ie:return $=$.get(le.key===null?W:le.key)||null,b(V,$,le,Te);case _e:return $=$.get(le.key===null?W:le.key)||null,H(V,$,le,Te);case te:var ke=le._init;return me($,V,W,ke(le._payload),Te)}if(nt(le)||ue(le))return $=$.get(W)||null,se(V,$,le,Te,null);Qc(V,le)}return null}function Ee($,V,W,le){for(var Te=null,ke=null,Re=V,Oe=V=0,tn=null;Re!==null&&Oe<W.length;Oe++){Re.index>Oe?(tn=Re,Re=null):tn=Re.sibling;var it=re($,Re,W[Oe],le);if(it===null){Re===null&&(Re=tn);break}i&&Re&&it.alternate===null&&o($,Re),V=_(it,V,Oe),ke===null?Te=it:ke.sibling=it,ke=it,Re=tn}if(Oe===W.length)return l($,Re),Ct&&Ao($,Oe),Te;if(Re===null){for(;Oe<W.length;Oe++)Re=ae($,W[Oe],le),Re!==null&&(V=_(Re,V,Oe),ke===null?Te=Re:ke.sibling=Re,ke=Re);return Ct&&Ao($,Oe),Te}for(Re=h($,Re);Oe<W.length;Oe++)tn=me(Re,$,Oe,W[Oe],le),tn!==null&&(i&&tn.alternate!==null&&Re.delete(tn.key===null?Oe:tn.key),V=_(tn,V,Oe),ke===null?Te=tn:ke.sibling=tn,ke=tn);return i&&Re.forEach(function(Ms){return o($,Ms)}),Ct&&Ao($,Oe),Te}function we($,V,W,le){var Te=ue(W);if(typeof Te!="function")throw Error(t(150));if(W=Te.call(W),W==null)throw Error(t(151));for(var ke=Te=null,Re=V,Oe=V=0,tn=null,it=W.next();Re!==null&&!it.done;Oe++,it=W.next()){Re.index>Oe?(tn=Re,Re=null):tn=Re.sibling;var Ms=re($,Re,it.value,le);if(Ms===null){Re===null&&(Re=tn);break}i&&Re&&Ms.alternate===null&&o($,Re),V=_(Ms,V,Oe),ke===null?Te=Ms:ke.sibling=Ms,ke=Ms,Re=tn}if(it.done)return l($,Re),Ct&&Ao($,Oe),Te;if(Re===null){for(;!it.done;Oe++,it=W.next())it=ae($,it.value,le),it!==null&&(V=_(it,V,Oe),ke===null?Te=it:ke.sibling=it,ke=it);return Ct&&Ao($,Oe),Te}for(Re=h($,Re);!it.done;Oe++,it=W.next())it=me(Re,$,Oe,it.value,le),it!==null&&(i&&it.alternate!==null&&Re.delete(it.key===null?Oe:it.key),V=_(it,V,Oe),ke===null?Te=it:ke.sibling=it,ke=it);return i&&Re.forEach(function(qk){return o($,qk)}),Ct&&Ao($,Oe),Te}function Mt($,V,W,le){if(typeof W=="object"&&W!==null&&W.type===x&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case Ie:e:{for(var Te=W.key,ke=V;ke!==null;){if(ke.key===Te){if(Te=W.type,Te===x){if(ke.tag===7){l($,ke.sibling),V=p(ke,W.props.children),V.return=$,$=V;break e}}else if(ke.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===te&&xy(Te)===ke.type){l($,ke.sibling),V=p(ke,W.props),V.ref=Ql($,ke,W),V.return=$,$=V;break e}l($,ke);break}else o($,ke);ke=ke.sibling}W.type===x?(V=Mo(W.props.children,$.mode,le,W.key),V.return=$,$=V):(le=vh(W.type,W.key,W.props,null,$.mode,le),le.ref=Ql($,V,W),le.return=$,$=le)}return T($);case _e:e:{for(ke=W.key;V!==null;){if(V.key===ke)if(V.tag===4&&V.stateNode.containerInfo===W.containerInfo&&V.stateNode.implementation===W.implementation){l($,V.sibling),V=p(V,W.children||[]),V.return=$,$=V;break e}else{l($,V);break}else o($,V);V=V.sibling}V=zp(W,$.mode,le),V.return=$,$=V}return T($);case te:return ke=W._init,Mt($,V,ke(W._payload),le)}if(nt(W))return Ee($,V,W,le);if(ue(W))return we($,V,W,le);Qc($,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,V!==null&&V.tag===6?(l($,V.sibling),V=p(V,W),V.return=$,$=V):(l($,V),V=Bp(W,$.mode,le),V.return=$,$=V),T($)):l($,V)}return Mt}var Da=by(!0),Dy=by(!1),Yc=Cs(null),Xc=null,Oa=null,Xf=null;function Jf(){Xf=Oa=Xc=null}function Zf(i){var o=Yc.current;vt(Yc),i._currentValue=o}function ep(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function La(i,o){Xc=i,Xf=Oa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Un=!0),i.firstContext=null)}function Tr(i){var o=i._currentValue;if(Xf!==i)if(i={context:i,memoizedValue:o,next:null},Oa===null){if(Xc===null)throw Error(t(308));Oa=i,Xc.dependencies={lanes:0,firstContext:i}}else Oa=Oa.next=i;return o}var Po=null;function tp(i){Po===null?Po=[i]:Po.push(i)}function Oy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,tp(o)):(l.next=p.next,p.next=l),o.interleaved=l,zi(i,h)}function zi(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var As=!1;function np(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ly(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function $i(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ps(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(rt&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,zi(i,l)}return p=h.interleaved,p===null?(o.next=o,tp(h)):(o.next=p.next,p.next=o),h.interleaved=o,zi(i,l)}function Jc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,ys(i,l)}}function My(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Zc(i,o,l,h){var p=i.updateQueue;As=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var b=R,H=b.next;b.next=null,T===null?_=H:T.next=H,T=b;var se=i.alternate;se!==null&&(se=se.updateQueue,R=se.lastBaseUpdate,R!==T&&(R===null?se.firstBaseUpdate=H:R.next=H,se.lastBaseUpdate=b))}if(_!==null){var ae=p.baseState;T=0,se=H=b=null,R=_;do{var re=R.lane,me=R.eventTime;if((h&re)===re){se!==null&&(se=se.next={eventTime:me,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var Ee=i,we=R;switch(re=o,me=l,we.tag){case 1:if(Ee=we.payload,typeof Ee=="function"){ae=Ee.call(me,ae,re);break e}ae=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=we.payload,re=typeof Ee=="function"?Ee.call(me,ae,re):Ee,re==null)break e;ae=ee({},ae,re);break e;case 2:As=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,re=p.effects,re===null?p.effects=[R]:re.push(R))}else me={eventTime:me,lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},se===null?(H=se=me,b=ae):se=se.next=me,T|=re;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;re=R,R=re.next,re.next=null,p.lastBaseUpdate=re,p.shared.pending=null}}while(!0);if(se===null&&(b=ae),p.baseState=b,p.firstBaseUpdate=H,p.lastBaseUpdate=se,o=p.shared.interleaved,o!==null){p=o;do T|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);bo|=T,i.lanes=T,i.memoizedState=ae}}function Vy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Yl={},fi=Cs(Yl),Xl=Cs(Yl),Jl=Cs(Yl);function No(i){if(i===Yl)throw Error(t(174));return i}function rp(i,o){switch(mt(Jl,o),mt(Xl,i),mt(fi,Yl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:at(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=at(o,i)}vt(fi),mt(fi,o)}function Ma(){vt(fi),vt(Xl),vt(Jl)}function Fy(i){No(Jl.current);var o=No(fi.current),l=at(o,i.type);o!==l&&(mt(Xl,i),mt(fi,l))}function ip(i){Xl.current===i&&(vt(fi),vt(Xl))}var At=Cs(0);function eh(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var sp=[];function op(){for(var i=0;i<sp.length;i++)sp[i]._workInProgressVersionPrimary=null;sp.length=0}var th=B.ReactCurrentDispatcher,ap=B.ReactCurrentBatchConfig,xo=0,Pt=null,Qt=null,Zt=null,nh=!1,Zl=!1,eu=0,pk=0;function wn(){throw Error(t(321))}function lp(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Br(i[l],o[l]))return!1;return!0}function up(i,o,l,h,p,_){if(xo=_,Pt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,th.current=i===null||i.memoizedState===null?yk:vk,i=l(h,p),Zl){_=0;do{if(Zl=!1,eu=0,25<=_)throw Error(t(301));_+=1,Zt=Qt=null,o.updateQueue=null,th.current=Ek,i=l(h,p)}while(Zl)}if(th.current=sh,o=Qt!==null&&Qt.next!==null,xo=0,Zt=Qt=Pt=null,nh=!1,o)throw Error(t(300));return i}function cp(){var i=eu!==0;return eu=0,i}function pi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Pt.memoizedState=Zt=i:Zt=Zt.next=i,Zt}function Ir(){if(Qt===null){var i=Pt.alternate;i=i!==null?i.memoizedState:null}else i=Qt.next;var o=Zt===null?Pt.memoizedState:Zt.next;if(o!==null)Zt=o,Qt=i;else{if(i===null)throw Error(t(310));Qt=i,i={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Zt===null?Pt.memoizedState=Zt=i:Zt=Zt.next=i}return Zt}function tu(i,o){return typeof o=="function"?o(i):o}function hp(i){var o=Ir(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Qt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var R=T=null,b=null,H=_;do{var se=H.lane;if((xo&se)===se)b!==null&&(b=b.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:i(h,H.action);else{var ae={lane:se,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};b===null?(R=b=ae,T=h):b=b.next=ae,Pt.lanes|=se,bo|=se}H=H.next}while(H!==null&&H!==_);b===null?T=h:b.next=R,Br(h,o.memoizedState)||(Un=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=b,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Pt.lanes|=_,bo|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function dp(i){var o=Ir(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);Br(_,o.memoizedState)||(Un=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function jy(){}function Uy(i,o){var l=Pt,h=Ir(),p=o(),_=!Br(h.memoizedState,p);if(_&&(h.memoizedState=p,Un=!0),h=h.queue,fp($y.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Zt!==null&&Zt.memoizedState.tag&1){if(l.flags|=2048,nu(9,zy.bind(null,l,h,p,o),void 0,null),en===null)throw Error(t(349));(xo&30)!==0||By(l,o,p)}return p}function By(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Pt.updateQueue,o===null?(o={lastEffect:null,stores:null},Pt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function zy(i,o,l,h){o.value=l,o.getSnapshot=h,Wy(o)&&Hy(i)}function $y(i,o,l){return l(function(){Wy(o)&&Hy(i)})}function Wy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Br(i,l)}catch{return!0}}function Hy(i){var o=zi(i,1);o!==null&&qr(o,i,1,-1)}function qy(i){var o=pi();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tu,lastRenderedState:i},o.queue=i,i=i.dispatch=_k.bind(null,Pt,i),[o.memoizedState,i]}function nu(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=Pt.updateQueue,o===null?(o={lastEffect:null,stores:null},Pt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Gy(){return Ir().memoizedState}function rh(i,o,l,h){var p=pi();Pt.flags|=i,p.memoizedState=nu(1|o,l,void 0,h===void 0?null:h)}function ih(i,o,l,h){var p=Ir();h=h===void 0?null:h;var _=void 0;if(Qt!==null){var T=Qt.memoizedState;if(_=T.destroy,h!==null&&lp(h,T.deps)){p.memoizedState=nu(o,l,_,h);return}}Pt.flags|=i,p.memoizedState=nu(1|o,l,_,h)}function Ky(i,o){return rh(8390656,8,i,o)}function fp(i,o){return ih(2048,8,i,o)}function Qy(i,o){return ih(4,2,i,o)}function Yy(i,o){return ih(4,4,i,o)}function Xy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Jy(i,o,l){return l=l!=null?l.concat([i]):null,ih(4,4,Xy.bind(null,o,i),l)}function pp(){}function Zy(i,o){var l=Ir();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&lp(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function ev(i,o){var l=Ir();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&lp(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function tv(i,o,l){return(xo&21)===0?(i.baseState&&(i.baseState=!1,Un=!0),i.memoizedState=l):(Br(l,o)||(l=Eo(),Pt.lanes|=l,bo|=l,i.baseState=!0),o)}function mk(i,o){var l=Ye;Ye=l!==0&&4>l?l:4,i(!0);var h=ap.transition;ap.transition={};try{i(!1),o()}finally{Ye=l,ap.transition=h}}function nv(){return Ir().memoizedState}function gk(i,o,l){var h=Ds(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},rv(i))iv(o,l);else if(l=Oy(i,o,l,h),l!==null){var p=bn();qr(l,i,h,p),sv(l,o,h)}}function _k(i,o,l){var h=Ds(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(rv(i))iv(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,R=_(T,l);if(p.hasEagerState=!0,p.eagerState=R,Br(R,T)){var b=o.interleaved;b===null?(p.next=p,tp(o)):(p.next=b.next,b.next=p),o.interleaved=p;return}}catch{}finally{}l=Oy(i,o,p,h),l!==null&&(p=bn(),qr(l,i,h,p),sv(l,o,h))}}function rv(i){var o=i.alternate;return i===Pt||o!==null&&o===Pt}function iv(i,o){Zl=nh=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function sv(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,ys(i,l)}}var sh={readContext:Tr,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},yk={readContext:Tr,useCallback:function(i,o){return pi().memoizedState=[i,o===void 0?null:o],i},useContext:Tr,useEffect:Ky,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,rh(4194308,4,Xy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return rh(4194308,4,i,o)},useInsertionEffect:function(i,o){return rh(4,2,i,o)},useMemo:function(i,o){var l=pi();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=pi();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=gk.bind(null,Pt,i),[h.memoizedState,i]},useRef:function(i){var o=pi();return i={current:i},o.memoizedState=i},useState:qy,useDebugValue:pp,useDeferredValue:function(i){return pi().memoizedState=i},useTransition:function(){var i=qy(!1),o=i[0];return i=mk.bind(null,i[1]),pi().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=Pt,p=pi();if(Ct){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),en===null)throw Error(t(349));(xo&30)!==0||By(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Ky($y.bind(null,h,_,i),[i]),h.flags|=2048,nu(9,zy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=pi(),o=en.identifierPrefix;if(Ct){var l=Bi,h=Ui;l=(h&~(1<<32-Pn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=eu++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=pk++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},vk={readContext:Tr,useCallback:Zy,useContext:Tr,useEffect:fp,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:hp,useRef:Gy,useState:function(){return hp(tu)},useDebugValue:pp,useDeferredValue:function(i){var o=Ir();return tv(o,Qt.memoizedState,i)},useTransition:function(){var i=hp(tu)[0],o=Ir().memoizedState;return[i,o]},useMutableSource:jy,useSyncExternalStore:Uy,useId:nv,unstable_isNewReconciler:!1},Ek={readContext:Tr,useCallback:Zy,useContext:Tr,useEffect:fp,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:dp,useRef:Gy,useState:function(){return dp(tu)},useDebugValue:pp,useDeferredValue:function(i){var o=Ir();return Qt===null?o.memoizedState=i:tv(o,Qt.memoizedState,i)},useTransition:function(){var i=dp(tu)[0],o=Ir().memoizedState;return[i,o]},useMutableSource:jy,useSyncExternalStore:Uy,useId:nv,unstable_isNewReconciler:!1};function $r(i,o){if(i&&i.defaultProps){o=ee({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function mp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ee({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var oh={isMounted:function(i){return(i=i._reactInternals)?P(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=bn(),p=Ds(i),_=$i(h,p);_.payload=o,l!=null&&(_.callback=l),o=Ps(i,_,p),o!==null&&(qr(o,i,p,h),Jc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=bn(),p=Ds(i),_=$i(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Ps(i,_,p),o!==null&&(qr(o,i,p,h),Jc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=bn(),h=Ds(i),p=$i(l,h);p.tag=2,o!=null&&(p.callback=o),o=Ps(i,p,h),o!==null&&(qr(o,i,h,l),Jc(o,i,h))}};function ov(i,o,l,h,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,T):o.prototype&&o.prototype.isPureReactComponent?!zl(l,h)||!zl(p,_):!0}function av(i,o,l){var h=!1,p=ks,_=o.contextType;return typeof _=="object"&&_!==null?_=Tr(_):(p=jn(o)?ko:En.current,h=o.contextTypes,_=(h=h!=null)?Pa(i,p):ks),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=oh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function lv(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&oh.enqueueReplaceState(o,o.state,null)}function gp(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},np(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Tr(_):(_=jn(o)?ko:En.current,p.context=Pa(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(mp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&oh.enqueueReplaceState(p,p.state,null),Zc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Va(i,o){try{var l="",h=o;do l+=Le(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function _p(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function yp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var wk=typeof WeakMap=="function"?WeakMap:Map;function uv(i,o,l){l=$i(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){fh||(fh=!0,Dp=h),yp(i,o)},l}function cv(i,o,l){l=$i(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){yp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){yp(i,o),typeof h!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function hv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new wk;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=Lk.bind(null,i,o,l),o.then(i,i))}function dv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function fv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=$i(-1,1),o.tag=2,Ps(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Tk=B.ReactCurrentOwner,Un=!1;function xn(i,o,l,h){o.child=i===null?Dy(o,null,l,h):Da(o,i.child,l,h)}function pv(i,o,l,h,p){l=l.render;var _=o.ref;return La(o,p),h=up(i,o,l,h,_,p),l=cp(),i!==null&&!Un?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Wi(i,o,p)):(Ct&&l&&qf(o),o.flags|=1,xn(i,o,h,p),o.child)}function mv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Up(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,gv(i,o,_,h,p)):(i=vh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:zl,l(T,h)&&i.ref===o.ref)return Wi(i,o,p)}return o.flags|=1,i=Ls(_,h),i.ref=o.ref,i.return=o,o.child=i}function gv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(zl(_,h)&&i.ref===o.ref)if(Un=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Un=!0);else return o.lanes=i.lanes,Wi(i,o,p)}return vp(i,o,l,h,p)}function _v(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(ja,sr),sr|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,mt(ja,sr),sr|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,mt(ja,sr),sr|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,mt(ja,sr),sr|=h;return xn(i,o,p,l),o.child}function yv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function vp(i,o,l,h,p){var _=jn(l)?ko:En.current;return _=Pa(o,_),La(o,p),l=up(i,o,l,h,_,p),h=cp(),i!==null&&!Un?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Wi(i,o,p)):(Ct&&h&&qf(o),o.flags|=1,xn(i,o,l,p),o.child)}function vv(i,o,l,h,p){if(jn(l)){var _=!0;Wc(o)}else _=!1;if(La(o,p),o.stateNode===null)lh(i,o),av(o,l,h),gp(o,l,h,p),h=!0;else if(i===null){var T=o.stateNode,R=o.memoizedProps;T.props=R;var b=T.context,H=l.contextType;typeof H=="object"&&H!==null?H=Tr(H):(H=jn(l)?ko:En.current,H=Pa(o,H));var se=l.getDerivedStateFromProps,ae=typeof se=="function"||typeof T.getSnapshotBeforeUpdate=="function";ae||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(R!==h||b!==H)&&lv(o,T,h,H),As=!1;var re=o.memoizedState;T.state=re,Zc(o,h,T,p),b=o.memoizedState,R!==h||re!==b||Fn.current||As?(typeof se=="function"&&(mp(o,l,se,h),b=o.memoizedState),(R=As||ov(o,l,R,h,re,b,H))?(ae||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=b),T.props=h,T.state=b,T.context=H,h=R):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,Ly(i,o),R=o.memoizedProps,H=o.type===o.elementType?R:$r(o.type,R),T.props=H,ae=o.pendingProps,re=T.context,b=l.contextType,typeof b=="object"&&b!==null?b=Tr(b):(b=jn(l)?ko:En.current,b=Pa(o,b));var me=l.getDerivedStateFromProps;(se=typeof me=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(R!==ae||re!==b)&&lv(o,T,h,b),As=!1,re=o.memoizedState,T.state=re,Zc(o,h,T,p);var Ee=o.memoizedState;R!==ae||re!==Ee||Fn.current||As?(typeof me=="function"&&(mp(o,l,me,h),Ee=o.memoizedState),(H=As||ov(o,l,H,h,re,Ee,b)||!1)?(se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ee,b),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ee,b)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||R===i.memoizedProps&&re===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&re===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=Ee),T.props=h,T.state=Ee,T.context=b,h=H):(typeof T.componentDidUpdate!="function"||R===i.memoizedProps&&re===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&re===i.memoizedState||(o.flags|=1024),h=!1)}return Ep(i,o,l,h,_,p)}function Ep(i,o,l,h,p,_){yv(i,o);var T=(o.flags&128)!==0;if(!h&&!T)return p&&Sy(o,l,!1),Wi(i,o,_);h=o.stateNode,Tk.current=o;var R=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&T?(o.child=Da(o,i.child,null,_),o.child=Da(o,null,R,_)):xn(i,o,R,_),o.memoizedState=h.state,p&&Sy(o,l,!0),o.child}function Ev(i){var o=i.stateNode;o.pendingContext?Ty(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Ty(i,o.context,!1),rp(i,o.containerInfo)}function wv(i,o,l,h,p){return ba(),Yf(p),o.flags|=256,xn(i,o,l,h),o.child}var wp={dehydrated:null,treeContext:null,retryLane:0};function Tp(i){return{baseLanes:i,cachePool:null,transitions:null}}function Tv(i,o,l){var h=o.pendingProps,p=At.current,_=!1,T=(o.flags&128)!==0,R;if((R=T)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),mt(At,p&1),i===null)return Qf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,i=h.fallback,_?(h=o.mode,_=o.child,T={mode:"hidden",children:T},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Eh(T,h,0,null),i=Mo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Tp(l),o.memoizedState=wp,i):Ip(o,T));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return Ik(i,o,T,h,R,p,l);if(_){_=h.fallback,T=o.mode,p=i.child,R=p.sibling;var b={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=b,o.deletions=null):(h=Ls(p,b),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?_=Ls(R,_):(_=Mo(_,T,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,T=i.child.memoizedState,T=T===null?Tp(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,o.memoizedState=wp,h}return _=i.child,i=_.sibling,h=Ls(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Ip(i,o){return o=Eh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function ah(i,o,l,h){return h!==null&&Yf(h),Da(o,i.child,null,l),i=Ip(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function Ik(i,o,l,h,p,_,T){if(l)return o.flags&256?(o.flags&=-257,h=_p(Error(t(422))),ah(i,o,T,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=Eh({mode:"visible",children:h.children},p,0,null),_=Mo(_,p,T,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&Da(o,i.child,null,T),o.child.memoizedState=Tp(T),o.memoizedState=wp,_);if((o.mode&1)===0)return ah(i,o,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,_=Error(t(419)),h=_p(_,h,void 0),ah(i,o,T,h)}if(R=(T&i.childLanes)!==0,Un||R){if(h=en,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,zi(i,p),qr(h,i,p,-1))}return jp(),h=_p(Error(t(421))),ah(i,o,T,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=Mk.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,ir=Ss(p.nextSibling),rr=o,Ct=!0,zr=null,i!==null&&(Er[wr++]=Ui,Er[wr++]=Bi,Er[wr++]=Ro,Ui=i.id,Bi=i.overflow,Ro=o),o=Ip(o,h.children),o.flags|=4096,o)}function Iv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),ep(i.return,o,l)}function Sp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function Sv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(xn(i,o,h.children,l),h=At.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Iv(i,l,o);else if(i.tag===19)Iv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(mt(At,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&eh(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Sp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&eh(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Sp(o,!0,l,null,_);break;case"together":Sp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function lh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Wi(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),bo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ls(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ls(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function Sk(i,o,l){switch(o.tag){case 3:Ev(o),ba();break;case 5:Fy(o);break;case 1:jn(o.type)&&Wc(o);break;case 4:rp(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;mt(Yc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(mt(At,At.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Tv(i,o,l):(mt(At,At.current&1),i=Wi(i,o,l),i!==null?i.sibling:null);mt(At,At.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Sv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),mt(At,At.current),h)break;return null;case 22:case 23:return o.lanes=0,_v(i,o,l)}return Wi(i,o,l)}var Cv,Cp,kv,Rv;Cv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Cp=function(){},kv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,No(fi.current);var _=null;switch(l){case"input":p=Qn(i,p),h=Qn(i,h),_=[];break;case"select":p=ee({},p,{value:void 0}),h=ee({},h,{value:void 0}),_=[];break;case"textarea":p=cr(i,p),h=cr(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Bc)}_o(l,h);var T;l=null;for(H in p)if(!h.hasOwnProperty(H)&&p.hasOwnProperty(H)&&p[H]!=null)if(H==="style"){var R=p[H];for(T in R)R.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(s.hasOwnProperty(H)?_||(_=[]):(_=_||[]).push(H,null));for(H in h){var b=h[H];if(R=p!=null?p[H]:void 0,h.hasOwnProperty(H)&&b!==R&&(b!=null||R!=null))if(H==="style")if(R){for(T in R)!R.hasOwnProperty(T)||b&&b.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in b)b.hasOwnProperty(T)&&R[T]!==b[T]&&(l||(l={}),l[T]=b[T])}else l||(_||(_=[]),_.push(H,l)),l=b;else H==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,R=R?R.__html:void 0,b!=null&&R!==b&&(_=_||[]).push(H,b)):H==="children"?typeof b!="string"&&typeof b!="number"||(_=_||[]).push(H,""+b):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(s.hasOwnProperty(H)?(b!=null&&H==="onScroll"&&yt("scroll",i),_||R===b||(_=[])):(_=_||[]).push(H,b))}l&&(_=_||[]).push("style",l);var H=_;(o.updateQueue=H)&&(o.flags|=4)}},Rv=function(i,o,l,h){l!==h&&(o.flags|=4)};function ru(i,o){if(!Ct)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Tn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function Ck(i,o,l){var h=o.pendingProps;switch(Gf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(o),null;case 1:return jn(o.type)&&$c(),Tn(o),null;case 3:return h=o.stateNode,Ma(),vt(Fn),vt(En),op(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Kc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,zr!==null&&(Mp(zr),zr=null))),Cp(i,o),Tn(o),null;case 5:ip(o);var p=No(Jl.current);if(l=o.type,i!==null&&o.stateNode!=null)kv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Tn(o),null}if(i=No(fi.current),Kc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[di]=o,h[Gl]=_,i=(o.mode&1)!==0,l){case"dialog":yt("cancel",h),yt("close",h);break;case"iframe":case"object":case"embed":yt("load",h);break;case"video":case"audio":for(p=0;p<Wl.length;p++)yt(Wl[p],h);break;case"source":yt("error",h);break;case"img":case"image":case"link":yt("error",h),yt("load",h);break;case"details":yt("toggle",h);break;case"input":Nr(h,_),yt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},yt("invalid",h);break;case"textarea":hr(h,_),yt("invalid",h)}_o(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var R=_[T];T==="children"?typeof R=="string"?h.textContent!==R&&(_.suppressHydrationWarning!==!0&&Uc(h.textContent,R,i),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(_.suppressHydrationWarning!==!0&&Uc(h.textContent,R,i),p=["children",""+R]):s.hasOwnProperty(T)&&R!=null&&T==="onScroll"&&yt("scroll",h)}switch(l){case"input":an(h),Pi(h,_,!0);break;case"textarea":an(h),dr(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Bc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=bt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=T.createElement(l,{is:h.is}):(i=T.createElement(l),l==="select"&&(T=i,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):i=T.createElementNS(i,l),i[di]=o,i[Gl]=h,Cv(i,o,!1,!1),o.stateNode=i;e:{switch(T=ni(l,h),l){case"dialog":yt("cancel",i),yt("close",i),p=h;break;case"iframe":case"object":case"embed":yt("load",i),p=h;break;case"video":case"audio":for(p=0;p<Wl.length;p++)yt(Wl[p],i);p=h;break;case"source":yt("error",i),p=h;break;case"img":case"image":case"link":yt("error",i),yt("load",i),p=h;break;case"details":yt("toggle",i),p=h;break;case"input":Nr(i,h),p=Qn(i,h),yt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ee({},h,{value:void 0}),yt("invalid",i);break;case"textarea":hr(i,h),p=cr(i,h),yt("invalid",i);break;default:p=h}_o(l,p),R=p;for(_ in R)if(R.hasOwnProperty(_)){var b=R[_];_==="style"?Ni(i,b):_==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&ti(i,b)):_==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&fr(i,b):typeof b=="number"&&fr(i,""+b):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?b!=null&&_==="onScroll"&&yt("scroll",i):b!=null&&ne(i,_,b,T))}switch(l){case"input":an(i),Pi(i,h,!1);break;case"textarea":an(i),dr(i);break;case"option":h.value!=null&&i.setAttribute("value",""+ze(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?xt(i,!!h.multiple,_,!1):h.defaultValue!=null&&xt(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Bc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Tn(o),null;case 6:if(i&&o.stateNode!=null)Rv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=No(Jl.current),No(fi.current),Kc(o)){if(h=o.stateNode,l=o.memoizedProps,h[di]=o,(_=h.nodeValue!==l)&&(i=rr,i!==null))switch(i.tag){case 3:Uc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Uc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[di]=o,o.stateNode=h}return Tn(o),null;case 13:if(vt(At),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ct&&ir!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ny(),ba(),o.flags|=98560,_=!1;else if(_=Kc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[di]=o}else ba(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Tn(o),_=!1}else zr!==null&&(Mp(zr),zr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(At.current&1)!==0?Yt===0&&(Yt=3):jp())),o.updateQueue!==null&&(o.flags|=4),Tn(o),null);case 4:return Ma(),Cp(i,o),i===null&&Hl(o.stateNode.containerInfo),Tn(o),null;case 10:return Zf(o.type._context),Tn(o),null;case 17:return jn(o.type)&&$c(),Tn(o),null;case 19:if(vt(At),_=o.memoizedState,_===null)return Tn(o),null;if(h=(o.flags&128)!==0,T=_.rendering,T===null)if(h)ru(_,!1);else{if(Yt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(T=eh(i),T!==null){for(o.flags|=128,ru(_,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return mt(At,At.current&1|2),o.child}i=i.sibling}_.tail!==null&&Qe()>Ua&&(o.flags|=128,h=!0,ru(_,!1),o.lanes=4194304)}else{if(!h)if(i=eh(T),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),ru(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Ct)return Tn(o),null}else 2*Qe()-_.renderingStartTime>Ua&&l!==1073741824&&(o.flags|=128,h=!0,ru(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(l=_.last,l!==null?l.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Qe(),o.sibling=null,l=At.current,mt(At,h?l&1|2:l&1),o):(Tn(o),null);case 22:case 23:return Fp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(sr&1073741824)!==0&&(Tn(o),o.subtreeFlags&6&&(o.flags|=8192)):Tn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function kk(i,o){switch(Gf(o),o.tag){case 1:return jn(o.type)&&$c(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ma(),vt(Fn),vt(En),op(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return ip(o),null;case 13:if(vt(At),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ba()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return vt(At),null;case 4:return Ma(),null;case 10:return Zf(o.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var uh=!1,In=!1,Rk=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Fa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Dt(i,o,h)}else l.current=null}function kp(i,o,l){try{l()}catch(h){Dt(i,o,h)}}var Av=!1;function Ak(i,o){if(Ff=ws,i=oy(),Nf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,R=-1,b=-1,H=0,se=0,ae=i,re=null;t:for(;;){for(var me;ae!==l||p!==0&&ae.nodeType!==3||(R=T+p),ae!==_||h!==0&&ae.nodeType!==3||(b=T+h),ae.nodeType===3&&(T+=ae.nodeValue.length),(me=ae.firstChild)!==null;)re=ae,ae=me;for(;;){if(ae===i)break t;if(re===l&&++H===p&&(R=T),re===_&&++se===h&&(b=T),(me=ae.nextSibling)!==null)break;ae=re,re=ae.parentNode}ae=me}l=R===-1||b===-1?null:{start:R,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(jf={focusedElem:i,selectionRange:l},ws=!1,ve=o;ve!==null;)if(o=ve,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ve=i;else for(;ve!==null;){o=ve;try{var Ee=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ee!==null){var we=Ee.memoizedProps,Mt=Ee.memoizedState,$=o.stateNode,V=$.getSnapshotBeforeUpdate(o.elementType===o.type?we:$r(o.type,we),Mt);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var W=o.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(le){Dt(o,o.return,le)}if(i=o.sibling,i!==null){i.return=o.return,ve=i;break}ve=o.return}return Ee=Av,Av=!1,Ee}function iu(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&kp(o,l,_)}p=p.next}while(p!==h)}}function ch(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Rp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Pv(i){var o=i.alternate;o!==null&&(i.alternate=null,Pv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[di],delete o[Gl],delete o[$f],delete o[ck],delete o[hk])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Nv(i){return i.tag===5||i.tag===3||i.tag===4}function xv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Nv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ap(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Bc));else if(h!==4&&(i=i.child,i!==null))for(Ap(i,o,l),i=i.sibling;i!==null;)Ap(i,o,l),i=i.sibling}function Pp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Pp(i,o,l),i=i.sibling;i!==null;)Pp(i,o,l),i=i.sibling}var dn=null,Wr=!1;function Ns(i,o,l){for(l=l.child;l!==null;)bv(i,o,l),l=l.sibling}function bv(i,o,l){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(yo,l)}catch{}switch(l.tag){case 5:In||Fa(l,o);case 6:var h=dn,p=Wr;dn=null,Ns(i,o,l),dn=h,Wr=p,dn!==null&&(Wr?(i=dn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(Wr?(i=dn,l=l.stateNode,i.nodeType===8?zf(i.parentNode,l):i.nodeType===1&&zf(i,l),jr(i)):zf(dn,l.stateNode));break;case 4:h=dn,p=Wr,dn=l.stateNode.containerInfo,Wr=!0,Ns(i,o,l),dn=h,Wr=p;break;case 0:case 11:case 14:case 15:if(!In&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&kp(l,o,T),p=p.next}while(p!==h)}Ns(i,o,l);break;case 1:if(!In&&(Fa(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){Dt(l,o,R)}Ns(i,o,l);break;case 21:Ns(i,o,l);break;case 22:l.mode&1?(In=(h=In)||l.memoizedState!==null,Ns(i,o,l),In=h):Ns(i,o,l);break;default:Ns(i,o,l)}}function Dv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new Rk),o.forEach(function(h){var p=Vk.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Hr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,T=o,R=T;e:for(;R!==null;){switch(R.tag){case 5:dn=R.stateNode,Wr=!1;break e;case 3:dn=R.stateNode.containerInfo,Wr=!0;break e;case 4:dn=R.stateNode.containerInfo,Wr=!0;break e}R=R.return}if(dn===null)throw Error(t(160));bv(_,T,p),dn=null,Wr=!1;var b=p.alternate;b!==null&&(b.return=null),p.return=null}catch(H){Dt(p,o,H)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Ov(o,i),o=o.sibling}function Ov(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Hr(o,i),mi(i),h&4){try{iu(3,i,i.return),ch(3,i)}catch(we){Dt(i,i.return,we)}try{iu(5,i,i.return)}catch(we){Dt(i,i.return,we)}}break;case 1:Hr(o,i),mi(i),h&512&&l!==null&&Fa(l,l.return);break;case 5:if(Hr(o,i),mi(i),h&512&&l!==null&&Fa(l,l.return),i.flags&32){var p=i.stateNode;try{fr(p,"")}catch(we){Dt(i,i.return,we)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,R=i.type,b=i.updateQueue;if(i.updateQueue=null,b!==null)try{R==="input"&&_.type==="radio"&&_.name!=null&&_t(p,_),ni(R,T);var H=ni(R,_);for(T=0;T<b.length;T+=2){var se=b[T],ae=b[T+1];se==="style"?Ni(p,ae):se==="dangerouslySetInnerHTML"?ti(p,ae):se==="children"?fr(p,ae):ne(p,se,ae,H)}switch(R){case"input":xr(p,_);break;case"textarea":br(p,_);break;case"select":var re=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var me=_.value;me!=null?xt(p,!!_.multiple,me,!1):re!==!!_.multiple&&(_.defaultValue!=null?xt(p,!!_.multiple,_.defaultValue,!0):xt(p,!!_.multiple,_.multiple?[]:"",!1))}p[Gl]=_}catch(we){Dt(i,i.return,we)}}break;case 6:if(Hr(o,i),mi(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(we){Dt(i,i.return,we)}}break;case 3:if(Hr(o,i),mi(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{jr(o.containerInfo)}catch(we){Dt(i,i.return,we)}break;case 4:Hr(o,i),mi(i);break;case 13:Hr(o,i),mi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(bp=Qe())),h&4&&Dv(i);break;case 22:if(se=l!==null&&l.memoizedState!==null,i.mode&1?(In=(H=In)||se,Hr(o,i),In=H):Hr(o,i),mi(i),h&8192){if(H=i.memoizedState!==null,(i.stateNode.isHidden=H)&&!se&&(i.mode&1)!==0)for(ve=i,se=i.child;se!==null;){for(ae=ve=se;ve!==null;){switch(re=ve,me=re.child,re.tag){case 0:case 11:case 14:case 15:iu(4,re,re.return);break;case 1:Fa(re,re.return);var Ee=re.stateNode;if(typeof Ee.componentWillUnmount=="function"){h=re,l=re.return;try{o=h,Ee.props=o.memoizedProps,Ee.state=o.memoizedState,Ee.componentWillUnmount()}catch(we){Dt(h,l,we)}}break;case 5:Fa(re,re.return);break;case 22:if(re.memoizedState!==null){Vv(ae);continue}}me!==null?(me.return=re,ve=me):Vv(ae)}se=se.sibling}e:for(se=null,ae=i;;){if(ae.tag===5){if(se===null){se=ae;try{p=ae.stateNode,H?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(R=ae.stateNode,b=ae.memoizedProps.style,T=b!=null&&b.hasOwnProperty("display")?b.display:null,R.style.display=Dr("display",T))}catch(we){Dt(i,i.return,we)}}}else if(ae.tag===6){if(se===null)try{ae.stateNode.nodeValue=H?"":ae.memoizedProps}catch(we){Dt(i,i.return,we)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===i)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===i)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===i)break e;se===ae&&(se=null),ae=ae.return}se===ae&&(se=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:Hr(o,i),mi(i),h&4&&Dv(i);break;case 21:break;default:Hr(o,i),mi(i)}}function mi(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Nv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(fr(p,""),h.flags&=-33);var _=xv(i);Pp(i,_,p);break;case 3:case 4:var T=h.stateNode.containerInfo,R=xv(i);Ap(i,R,T);break;default:throw Error(t(161))}}catch(b){Dt(i,i.return,b)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function Pk(i,o,l){ve=i,Lv(i)}function Lv(i,o,l){for(var h=(i.mode&1)!==0;ve!==null;){var p=ve,_=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||uh;if(!T){var R=p.alternate,b=R!==null&&R.memoizedState!==null||In;R=uh;var H=In;if(uh=T,(In=b)&&!H)for(ve=p;ve!==null;)T=ve,b=T.child,T.tag===22&&T.memoizedState!==null?Fv(p):b!==null?(b.return=T,ve=b):Fv(p);for(;_!==null;)ve=_,Lv(_),_=_.sibling;ve=p,uh=R,In=H}Mv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ve=_):Mv(i)}}function Mv(i){for(;ve!==null;){var o=ve;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:In||ch(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!In)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:$r(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Vy(o,_,h);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Vy(o,T,l)}break;case 5:var R=o.stateNode;if(l===null&&o.flags&4){l=R;var b=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var H=o.alternate;if(H!==null){var se=H.memoizedState;if(se!==null){var ae=se.dehydrated;ae!==null&&jr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||o.flags&512&&Rp(o)}catch(re){Dt(o,o.return,re)}}if(o===i){ve=null;break}if(l=o.sibling,l!==null){l.return=o.return,ve=l;break}ve=o.return}}function Vv(i){for(;ve!==null;){var o=ve;if(o===i){ve=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ve=l;break}ve=o.return}}function Fv(i){for(;ve!==null;){var o=ve;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{ch(4,o)}catch(b){Dt(o,l,b)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(b){Dt(o,p,b)}}var _=o.return;try{Rp(o)}catch(b){Dt(o,_,b)}break;case 5:var T=o.return;try{Rp(o)}catch(b){Dt(o,T,b)}}}catch(b){Dt(o,o.return,b)}if(o===i){ve=null;break}var R=o.sibling;if(R!==null){R.return=o.return,ve=R;break}ve=o.return}}var Nk=Math.ceil,hh=B.ReactCurrentDispatcher,Np=B.ReactCurrentOwner,Sr=B.ReactCurrentBatchConfig,rt=0,en=null,Bt=null,fn=0,sr=0,ja=Cs(0),Yt=0,su=null,bo=0,dh=0,xp=0,ou=null,Bn=null,bp=0,Ua=1/0,Hi=null,fh=!1,Dp=null,xs=null,ph=!1,bs=null,mh=0,au=0,Op=null,gh=-1,_h=0;function bn(){return(rt&6)!==0?Qe():gh!==-1?gh:gh=Qe()}function Ds(i){return(i.mode&1)===0?1:(rt&2)!==0&&fn!==0?fn&-fn:fk.transition!==null?(_h===0&&(_h=Eo()),_h):(i=Ye,i!==0||(i=window.event,i=i===void 0?16:Ll(i.type)),i)}function qr(i,o,l,h){if(50<au)throw au=0,Op=null,Error(t(185));_s(i,l,h),((rt&2)===0||i!==en)&&(i===en&&((rt&2)===0&&(dh|=l),Yt===4&&Os(i,fn)),zn(i,h),l===1&&rt===0&&(o.mode&1)===0&&(Ua=Qe()+500,Hc&&Rs()))}function zn(i,o){var l=i.callbackNode;Di(i,o);var h=vo(i,i===en?fn:0);if(h===0)l!==null&&st(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&st(l),o===1)i.tag===0?dk(Uv.bind(null,i)):Cy(Uv.bind(null,i)),lk(function(){(rt&6)===0&&Rs()}),l=null;else{switch(vs(h)){case 1:l=Lr;break;case 4:l=ps;break;case 16:l=_r;break;case 536870912:l=_c;break;default:l=_r}l=Kv(l,jv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function jv(i,o){if(gh=-1,_h=0,(rt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ba()&&i.callbackNode!==l)return null;var h=vo(i,i===en?fn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=yh(i,h);else{o=h;var p=rt;rt|=2;var _=zv();(en!==i||fn!==o)&&(Hi=null,Ua=Qe()+500,Oo(i,o));do try{Dk();break}catch(R){Bv(i,R)}while(!0);Jf(),hh.current=_,rt=p,Bt!==null?o=0:(en=null,fn=0,o=Yt)}if(o!==0){if(o===2&&(p=er(i),p!==0&&(h=p,o=Lp(i,p))),o===1)throw l=su,Oo(i,0),Os(i,h),zn(i,Qe()),l;if(o===6)Os(i,h);else{if(p=i.current.alternate,(h&30)===0&&!xk(p)&&(o=yh(i,h),o===2&&(_=er(i),_!==0&&(h=_,o=Lp(i,_))),o===1))throw l=su,Oo(i,0),Os(i,h),zn(i,Qe()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Lo(i,Bn,Hi);break;case 3:if(Os(i,h),(h&130023424)===h&&(o=bp+500-Qe(),10<o)){if(vo(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){bn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Bf(Lo.bind(null,i,Bn,Hi),o);break}Lo(i,Bn,Hi);break;case 4:if(Os(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var T=31-Pn(h);_=1<<T,T=o[T],T>p&&(p=T),h&=~_}if(h=p,h=Qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Nk(h/1960))-h,10<h){i.timeoutHandle=Bf(Lo.bind(null,i,Bn,Hi),h);break}Lo(i,Bn,Hi);break;case 5:Lo(i,Bn,Hi);break;default:throw Error(t(329))}}}return zn(i,Qe()),i.callbackNode===l?jv.bind(null,i):null}function Lp(i,o){var l=ou;return i.current.memoizedState.isDehydrated&&(Oo(i,o).flags|=256),i=yh(i,o),i!==2&&(o=Bn,Bn=l,o!==null&&Mp(o)),i}function Mp(i){Bn===null?Bn=i:Bn.push.apply(Bn,i)}function xk(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!Br(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Os(i,o){for(o&=~xp,o&=~dh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-Pn(o),h=1<<l;i[l]=-1,o&=~h}}function Uv(i){if((rt&6)!==0)throw Error(t(327));Ba();var o=vo(i,0);if((o&1)===0)return zn(i,Qe()),null;var l=yh(i,o);if(i.tag!==0&&l===2){var h=er(i);h!==0&&(o=h,l=Lp(i,h))}if(l===1)throw l=su,Oo(i,0),Os(i,o),zn(i,Qe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Lo(i,Bn,Hi),zn(i,Qe()),null}function Vp(i,o){var l=rt;rt|=1;try{return i(o)}finally{rt=l,rt===0&&(Ua=Qe()+500,Hc&&Rs())}}function Do(i){bs!==null&&bs.tag===0&&(rt&6)===0&&Ba();var o=rt;rt|=1;var l=Sr.transition,h=Ye;try{if(Sr.transition=null,Ye=1,i)return i()}finally{Ye=h,Sr.transition=l,rt=o,(rt&6)===0&&Rs()}}function Fp(){sr=ja.current,vt(ja)}function Oo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,ak(l)),Bt!==null)for(l=Bt.return;l!==null;){var h=l;switch(Gf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&$c();break;case 3:Ma(),vt(Fn),vt(En),op();break;case 5:ip(h);break;case 4:Ma();break;case 13:vt(At);break;case 19:vt(At);break;case 10:Zf(h.type._context);break;case 22:case 23:Fp()}l=l.return}if(en=i,Bt=i=Ls(i.current,null),fn=sr=o,Yt=0,su=null,xp=dh=bo=0,Bn=ou=null,Po!==null){for(o=0;o<Po.length;o++)if(l=Po[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,h.next=T}l.pending=h}Po=null}return i}function Bv(i,o){do{var l=Bt;try{if(Jf(),th.current=sh,nh){for(var h=Pt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}nh=!1}if(xo=0,Zt=Qt=Pt=null,Zl=!1,eu=0,Np.current=null,l===null||l.return===null){Yt=1,su=o,Bt=null;break}e:{var _=i,T=l.return,R=l,b=o;if(o=fn,R.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var H=b,se=R,ae=se.tag;if((se.mode&1)===0&&(ae===0||ae===11||ae===15)){var re=se.alternate;re?(se.updateQueue=re.updateQueue,se.memoizedState=re.memoizedState,se.lanes=re.lanes):(se.updateQueue=null,se.memoizedState=null)}var me=dv(T);if(me!==null){me.flags&=-257,fv(me,T,R,_,o),me.mode&1&&hv(_,H,o),o=me,b=H;var Ee=o.updateQueue;if(Ee===null){var we=new Set;we.add(b),o.updateQueue=we}else Ee.add(b);break e}else{if((o&1)===0){hv(_,H,o),jp();break e}b=Error(t(426))}}else if(Ct&&R.mode&1){var Mt=dv(T);if(Mt!==null){(Mt.flags&65536)===0&&(Mt.flags|=256),fv(Mt,T,R,_,o),Yf(Va(b,R));break e}}_=b=Va(b,R),Yt!==4&&(Yt=2),ou===null?ou=[_]:ou.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var $=uv(_,b,o);My(_,$);break e;case 1:R=b;var V=_.type,W=_.stateNode;if((_.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(xs===null||!xs.has(W)))){_.flags|=65536,o&=-o,_.lanes|=o;var le=cv(_,R,o);My(_,le);break e}}_=_.return}while(_!==null)}Wv(l)}catch(Te){o=Te,Bt===l&&l!==null&&(Bt=l=l.return);continue}break}while(!0)}function zv(){var i=hh.current;return hh.current=sh,i===null?sh:i}function jp(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(bo&268435455)===0&&(dh&268435455)===0||Os(en,fn)}function yh(i,o){var l=rt;rt|=2;var h=zv();(en!==i||fn!==o)&&(Hi=null,Oo(i,o));do try{bk();break}catch(p){Bv(i,p)}while(!0);if(Jf(),rt=l,hh.current=h,Bt!==null)throw Error(t(261));return en=null,fn=0,Yt}function bk(){for(;Bt!==null;)$v(Bt)}function Dk(){for(;Bt!==null&&!Rt();)$v(Bt)}function $v(i){var o=Gv(i.alternate,i,sr);i.memoizedProps=i.pendingProps,o===null?Wv(i):Bt=o,Np.current=null}function Wv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=Ck(l,o,sr),l!==null){Bt=l;return}}else{if(l=kk(l,o),l!==null){l.flags&=32767,Bt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Yt=6,Bt=null;return}}if(o=o.sibling,o!==null){Bt=o;return}Bt=o=i}while(o!==null);Yt===0&&(Yt=5)}function Lo(i,o,l){var h=Ye,p=Sr.transition;try{Sr.transition=null,Ye=1,Ok(i,o,l,h)}finally{Sr.transition=p,Ye=h}return null}function Ok(i,o,l,h){do Ba();while(bs!==null);if((rt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(ft(i,_),i===en&&(Bt=en=null,fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ph||(ph=!0,Kv(_r,function(){return Ba(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Sr.transition,Sr.transition=null;var T=Ye;Ye=1;var R=rt;rt|=4,Np.current=null,Ak(i,l),Ov(l,i),ek(jf),ws=!!Ff,jf=Ff=null,i.current=l,Pk(l),Gt(),rt=R,Ye=T,Sr.transition=_}else i.current=l;if(ph&&(ph=!1,bs=i,mh=p),_=i.pendingLanes,_===0&&(xs=null),yc(l.stateNode),zn(i,Qe()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(fh)throw fh=!1,i=Dp,Dp=null,i;return(mh&1)!==0&&i.tag!==0&&Ba(),_=i.pendingLanes,(_&1)!==0?i===Op?au++:(au=0,Op=i):au=0,Rs(),null}function Ba(){if(bs!==null){var i=vs(mh),o=Sr.transition,l=Ye;try{if(Sr.transition=null,Ye=16>i?16:i,bs===null)var h=!1;else{if(i=bs,bs=null,mh=0,(rt&6)!==0)throw Error(t(331));var p=rt;for(rt|=4,ve=i.current;ve!==null;){var _=ve,T=_.child;if((ve.flags&16)!==0){var R=_.deletions;if(R!==null){for(var b=0;b<R.length;b++){var H=R[b];for(ve=H;ve!==null;){var se=ve;switch(se.tag){case 0:case 11:case 15:iu(8,se,_)}var ae=se.child;if(ae!==null)ae.return=se,ve=ae;else for(;ve!==null;){se=ve;var re=se.sibling,me=se.return;if(Pv(se),se===H){ve=null;break}if(re!==null){re.return=me,ve=re;break}ve=me}}}var Ee=_.alternate;if(Ee!==null){var we=Ee.child;if(we!==null){Ee.child=null;do{var Mt=we.sibling;we.sibling=null,we=Mt}while(we!==null)}}ve=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,ve=T;else e:for(;ve!==null;){if(_=ve,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:iu(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,ve=$;break e}ve=_.return}}var V=i.current;for(ve=V;ve!==null;){T=ve;var W=T.child;if((T.subtreeFlags&2064)!==0&&W!==null)W.return=T,ve=W;else e:for(T=V;ve!==null;){if(R=ve,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:ch(9,R)}}catch(Te){Dt(R,R.return,Te)}if(R===T){ve=null;break e}var le=R.sibling;if(le!==null){le.return=R.return,ve=le;break e}ve=R.return}}if(rt=p,Rs(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(yo,i)}catch{}h=!0}return h}finally{Ye=l,Sr.transition=o}}return!1}function Hv(i,o,l){o=Va(l,o),o=uv(i,o,1),i=Ps(i,o,1),o=bn(),i!==null&&(_s(i,1,o),zn(i,o))}function Dt(i,o,l){if(i.tag===3)Hv(i,i,l);else for(;o!==null;){if(o.tag===3){Hv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(xs===null||!xs.has(h))){i=Va(l,i),i=cv(o,i,1),o=Ps(o,i,1),i=bn(),o!==null&&(_s(o,1,i),zn(o,i));break}}o=o.return}}function Lk(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=bn(),i.pingedLanes|=i.suspendedLanes&l,en===i&&(fn&l)===l&&(Yt===4||Yt===3&&(fn&130023424)===fn&&500>Qe()-bp?Oo(i,0):xp|=l),zn(i,o)}function qv(i,o){o===0&&((i.mode&1)===0?o=1:(o=ca,ca<<=1,(ca&130023424)===0&&(ca=4194304)));var l=bn();i=zi(i,o),i!==null&&(_s(i,o,l),zn(i,l))}function Mk(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),qv(i,l)}function Vk(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),qv(i,l)}var Gv;Gv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Fn.current)Un=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return Un=!1,Sk(i,o,l);Un=(i.flags&131072)!==0}else Un=!1,Ct&&(o.flags&1048576)!==0&&ky(o,Gc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;lh(i,o),i=o.pendingProps;var p=Pa(o,En.current);La(o,l),p=up(null,o,h,i,p,l);var _=cp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,jn(h)?(_=!0,Wc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,np(o),p.updater=oh,o.stateNode=p,p._reactInternals=o,gp(o,h,i,l),o=Ep(null,o,h,!0,_,l)):(o.tag=0,Ct&&_&&qf(o),xn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(lh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=jk(h),i=$r(h,i),p){case 0:o=vp(null,o,h,i,l);break e;case 1:o=vv(null,o,h,i,l);break e;case 11:o=pv(null,o,h,i,l);break e;case 14:o=mv(null,o,h,$r(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:$r(h,p),vp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:$r(h,p),vv(i,o,h,p,l);case 3:e:{if(Ev(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Ly(i,o),Zc(o,h,null,l);var T=o.memoizedState;if(h=T.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Va(Error(t(423)),o),o=wv(i,o,h,l,p);break e}else if(h!==p){p=Va(Error(t(424)),o),o=wv(i,o,h,l,p);break e}else for(ir=Ss(o.stateNode.containerInfo.firstChild),rr=o,Ct=!0,zr=null,l=Dy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ba(),h===p){o=Wi(i,o,l);break e}xn(i,o,h,l)}o=o.child}return o;case 5:return Fy(o),i===null&&Qf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Uf(h,p)?T=null:_!==null&&Uf(h,_)&&(o.flags|=32),yv(i,o),xn(i,o,T,l),o.child;case 6:return i===null&&Qf(o),null;case 13:return Tv(i,o,l);case 4:return rp(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Da(o,null,h,l):xn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:$r(h,p),pv(i,o,h,p,l);case 7:return xn(i,o,o.pendingProps,l),o.child;case 8:return xn(i,o,o.pendingProps.children,l),o.child;case 12:return xn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,T=p.value,mt(Yc,h._currentValue),h._currentValue=T,_!==null)if(Br(_.value,T)){if(_.children===p.children&&!Fn.current){o=Wi(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var R=_.dependencies;if(R!==null){T=_.child;for(var b=R.firstContext;b!==null;){if(b.context===h){if(_.tag===1){b=$i(-1,l&-l),b.tag=2;var H=_.updateQueue;if(H!==null){H=H.shared;var se=H.pending;se===null?b.next=b:(b.next=se.next,se.next=b),H.pending=b}}_.lanes|=l,b=_.alternate,b!==null&&(b.lanes|=l),ep(_.return,l,o),R.lanes|=l;break}b=b.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,R=T.alternate,R!==null&&(R.lanes|=l),ep(T,l,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}xn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,La(o,l),p=Tr(p),h=h(p),o.flags|=1,xn(i,o,h,l),o.child;case 14:return h=o.type,p=$r(h,o.pendingProps),p=$r(h.type,p),mv(i,o,h,p,l);case 15:return gv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:$r(h,p),lh(i,o),o.tag=1,jn(h)?(i=!0,Wc(o)):i=!1,La(o,l),av(o,h,p),gp(o,h,p,l),Ep(null,o,h,!0,i,l);case 19:return Sv(i,o,l);case 22:return _v(i,o,l)}throw Error(t(156,o.tag))};function Kv(i,o){return Ze(i,o)}function Fk(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cr(i,o,l,h){return new Fk(i,o,l,h)}function Up(i){return i=i.prototype,!(!i||!i.isReactComponent)}function jk(i){if(typeof i=="function")return Up(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===Se)return 14}return 2}function Ls(i,o){var l=i.alternate;return l===null?(l=Cr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function vh(i,o,l,h,p,_){var T=2;if(h=i,typeof i=="function")Up(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case x:return Mo(l.children,p,_,o);case C:T=8,p|=8;break;case A:return i=Cr(12,l,o,p|2),i.elementType=A,i.lanes=_,i;case k:return i=Cr(13,l,o,p),i.elementType=k,i.lanes=_,i;case Be:return i=Cr(19,l,o,p),i.elementType=Be,i.lanes=_,i;case fe:return Eh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case D:T=10;break e;case O:T=9;break e;case j:T=11;break e;case Se:T=14;break e;case te:T=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Cr(T,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Mo(i,o,l,h){return i=Cr(7,i,h,o),i.lanes=l,i}function Eh(i,o,l,h){return i=Cr(22,i,h,o),i.elementType=fe,i.lanes=l,i.stateNode={isHidden:!1},i}function Bp(i,o,l){return i=Cr(6,i,null,o),i.lanes=l,i}function zp(i,o,l){return o=Cr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function Uk(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gs(0),this.expirationTimes=gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function $p(i,o,l,h,p,_,T,R,b){return i=new Uk(i,o,l,R,b),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Cr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},np(_),i}function Bk(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Qv(i){if(!i)return ks;i=i._reactInternals;e:{if(P(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(jn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(jn(l))return Iy(i,l,o)}return o}function Yv(i,o,l,h,p,_,T,R,b){return i=$p(l,h,!0,i,p,_,T,R,b),i.context=Qv(null),l=i.current,h=bn(),p=Ds(l),_=$i(h,p),_.callback=o??null,Ps(l,_,p),i.current.lanes=p,_s(i,p,h),zn(i,h),i}function wh(i,o,l,h){var p=o.current,_=bn(),T=Ds(p);return l=Qv(l),o.context===null?o.context=l:o.pendingContext=l,o=$i(_,T),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Ps(p,o,T),i!==null&&(qr(i,p,T,_),Jc(i,p,T)),T}function Th(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Xv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Wp(i,o){Xv(i,o),(i=i.alternate)&&Xv(i,o)}function zk(){return null}var Jv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Hp(i){this._internalRoot=i}Ih.prototype.render=Hp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));wh(i,o,null,null)},Ih.prototype.unmount=Hp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Do(function(){wh(null,i,null,null)}),o[Fi]=null}};function Ih(i){this._internalRoot=i}Ih.prototype.unstable_scheduleHydration=function(i){if(i){var o=Ic();i={blockedOn:null,target:i,priority:o};for(var l=0;l<li.length&&o!==0&&o<li[l].priority;l++);li.splice(l,0,i),l===0&&kc(i)}};function qp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Sh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function $k(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var H=Th(T);_.call(H)}}var T=Yv(o,h,i,0,null,!1,!1,"",Zv);return i._reactRootContainer=T,i[Fi]=T.current,Hl(i.nodeType===8?i.parentNode:i),Do(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var H=Th(b);R.call(H)}}var b=$p(i,0,!1,null,null,!1,!1,"",Zv);return i._reactRootContainer=b,i[Fi]=b.current,Hl(i.nodeType===8?i.parentNode:i),Do(function(){wh(o,b,l,h)}),b}function Ch(i,o,l,h,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var R=p;p=function(){var b=Th(T);R.call(b)}}wh(o,T,i,p)}else T=$k(l,o,i,p,h);return Th(T)}wc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=ms(o.pendingLanes);l!==0&&(ys(o,l|1),zn(o,Qe()),(rt&6)===0&&(Ua=Qe()+500,Rs()))}break;case 13:Do(function(){var h=zi(i,1);if(h!==null){var p=bn();qr(h,i,1,p)}}),Wp(i,1)}},ha=function(i){if(i.tag===13){var o=zi(i,134217728);if(o!==null){var l=bn();qr(o,i,134217728,l)}Wp(i,134217728)}},Tc=function(i){if(i.tag===13){var o=Ds(i),l=zi(i,o);if(l!==null){var h=bn();qr(l,i,o,h)}Wp(i,o)}},Ic=function(){return Ye},Sc=function(i,o){var l=Ye;try{return Ye=i,o()}finally{Ye=l}},cs=function(i,o,l){switch(o){case"input":if(xr(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=zc(h);if(!p)throw Error(t(90));yn(h),xr(h,p)}}}break;case"textarea":br(i,l);break;case"select":o=l.value,o!=null&&xt(i,!!l.multiple,o,!1)}},On=Vp,Or=Do;var Wk={usingClientEntryPoint:!1,Events:[Kl,Ra,zc,dt,ii,Vp]},lu={findFiberByHostInstance:Co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hk={bundleType:lu.bundleType,version:lu.version,rendererPackageName:lu.rendererPackageName,rendererConfig:lu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Je(i),i===null?null:i.stateNode},findFiberByHostInstance:lu.findFiberByHostInstance||zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kh.isDisabled&&kh.supportsFiber)try{yo=kh.inject(Hk),Zn=kh}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wk,$n.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(o))throw Error(t(200));return Bk(i,o,null,l)},$n.createRoot=function(i,o){if(!qp(i))throw Error(t(299));var l=!1,h="",p=Jv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=$p(i,1,!1,null,null,l,!1,h,p),i[Fi]=o.current,Hl(i.nodeType===8?i.parentNode:i),new Hp(o)},$n.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Je(o),i=i===null?null:i.stateNode,i},$n.flushSync=function(i){return Do(i)},$n.hydrate=function(i,o,l){if(!Sh(o))throw Error(t(200));return Ch(null,i,o,!0,l)},$n.hydrateRoot=function(i,o,l){if(!qp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",T=Jv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=Yv(o,null,i,1,l??null,p,!1,_,T),i[Fi]=o.current,Hl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Ih(o)},$n.render=function(i,o,l){if(!Sh(o))throw Error(t(200));return Ch(null,i,o,!1,l)},$n.unmountComponentAtNode=function(i){if(!Sh(i))throw Error(t(40));return i._reactRootContainer?(Do(function(){Ch(null,null,i,!1,function(){i._reactRootContainer=null,i[Fi]=null})}),!0):!1},$n.unstable_batchedUpdates=Vp,$n.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Sh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Ch(i,o,l,!1,h)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var aE;function eR(){if(aE)return Qp.exports;aE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Qp.exports=Zk(),Qp.exports}var lE;function tR(){if(lE)return Rh;lE=1;var n=eR();return Rh.createRoot=n.createRoot,Rh.hydrateRoot=n.hydrateRoot,Rh}var nR=tR();const rR=VT(nR),iR=()=>{};var uE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=function(n,e){if(!n)throw yl(e)},yl=function(n){return new Error("Firebase Database ("+FT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|m>>6,N=m&63;f||(N=64,u||(I=64)),r.push(t[y],t[w],t[I],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||w==null)throw new oR;const I=a<<2|d>>4;if(r.push(I),m!==64){const N=d<<4&240|m>>2;if(r.push(N),w!==64){const M=m<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UT=function(n){const e=jT(n);return dg.encodeByteArray(e,!0)},Xh=function(n){return UT(n).replace(/\./g,"")},Jh=function(n){try{return dg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n){return BT(void 0,n)}function BT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lR(t)||(n[t]=BT(n[t],e[t]));return n}function lR(n){return n!=="__proto__"}/**
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
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cR=()=>uR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof uE>"u")return;const n=uE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jh(n[1]);return e&&JSON.parse(e)},Ld=()=>{try{return iR()||cR()||hR()||dR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zT=n=>{var e,t;return(t=(e=Ld())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fg=n=>{const e=zT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},$T=()=>{var n;return(n=Ld())===null||n===void 0?void 0:n.config},WT=n=>{var e;return(e=Ld())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ki(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Md(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function pg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xh(JSON.stringify(t)),Xh(JSON.stringify(u)),""].join(".")}const Su={};function fR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Su))Su[e]?n.emulator.push(e):n.prod.push(e);return n}function pR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let cE=!1;function Vd(n,e){if(typeof window>"u"||typeof document>"u"||!ki(window.location.host)||Su[n]===e||Su[n]||cE)return;Su[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=fR().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function f(I,N){I.setAttribute("width","24"),I.setAttribute("id",N),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function m(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{cE=!0,u()},I}function y(I,N){I.setAttribute("id",N),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=pR(r),N=t("text"),M=document.getElementById(N)||document.createElement("span"),F=t("learnmore"),U=document.getElementById(F)||document.createElement("a"),ie=t("preprendIcon"),Y=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ne=I.element;d(ne),y(U,F);const B=m();f(Y,ie),ne.append(Y,M,U,B),document.body.appendChild(ne)}a?(M.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rn())}function mR(){var n;const e=(n=Ld())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _R(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yR(){const n=Rn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vR(){return FT.NODE_ADMIN===!0}function ER(){return!mR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wR(){try{return typeof indexedDB=="object"}catch{return!1}}function TR(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="FirebaseError";class Ri extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=IR,Object.setPrototypeOf(this,Ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nc.prototype.create)}}class nc{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?SR(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Ri(s,d,r)}}function SR(n,e){return n.replace(CR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){return JSON.parse(n)}function on(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Mu(Jh(a[0])||""),t=Mu(Jh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},kR=function(n){const e=qT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},RR=function(n){const e=qT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function rl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ed(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Zi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(hE(a)&&hE(u)){if(!Zi(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function _u(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let w=0;w<80;w++){w<40?w<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):w<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const I=(s<<5|s>>>27)+m+f+y+r[w]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=I}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function PR(n,e){const t=new NR(n,e);return t.subscribe.bind(t)}class NR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Jp),s.error===void 0&&(s.error=Jp),s.complete===void 0&&(s.complete=Jp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jp(){}function il(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ce(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class es{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fo="[DEFAULT]";/**
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
 */class DR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LR(e))try{this.getOrInitializeService({instanceIdentifier:Fo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Fo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fo){return this.instances.has(e)}getOptions(e=Fo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fo){return this.component?this.component.multipleInstances?e:Fo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OR(n){return n===Fo?void 0:n}function LR(n){return n.instantiationMode==="EAGER"}/**
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
 */class MR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(qe||(qe={}));const VR={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},FR=qe.INFO,jR={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},UR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=jR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=FR,this._logHandler=UR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const BR=(n,e)=>e.some(t=>n instanceof t);let dE,fE;function zR(){return dE||(dE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $R(){return fE||(fE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GT=new WeakMap,Tm=new WeakMap,KT=new WeakMap,Zp=new WeakMap,gg=new WeakMap;function WR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Ws(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&GT.set(t,n)}).catch(()=>{}),gg.set(e,n),e}function HR(n){if(Tm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Tm.set(n,e)}let Im={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||KT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ws(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qR(n){Im=n(Im)}function GR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(em(this),e,...t);return KT.set(r,e.sort?e.sort():[e]),Ws(r)}:$R().includes(n)?function(...e){return n.apply(em(this),e),Ws(GT.get(this))}:function(...e){return Ws(n.apply(em(this),e))}}function KR(n){return typeof n=="function"?GR(n):(n instanceof IDBTransaction&&HR(n),BR(n,zR())?new Proxy(n,Im):n)}function Ws(n){if(n instanceof IDBRequest)return WR(n);if(Zp.has(n))return Zp.get(n);const e=KR(n);return e!==n&&(Zp.set(n,e),gg.set(e,n)),e}const em=n=>gg.get(n);function QR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Ws(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ws(u.result),f.oldVersion,f.newVersion,Ws(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const YR=["get","getKey","getAll","getAllKeys","count"],XR=["put","add","delete","clear"],tm=new Map;function pE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tm.get(e))return tm.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=XR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return tm.set(e,a),a}qR(n=>({...n,get:(e,t,r)=>pE(e,t)||n.get(e,t,r),has:(e,t)=>!!pE(e,t)||n.has(e,t)}));/**
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
 */class JR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ZR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sm="@firebase/app",mE="0.13.2";/**
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
 */const ts=new jd("@firebase/app"),e1="@firebase/app-compat",t1="@firebase/analytics-compat",n1="@firebase/analytics",r1="@firebase/app-check-compat",i1="@firebase/app-check",s1="@firebase/auth",o1="@firebase/auth-compat",a1="@firebase/database",l1="@firebase/data-connect",u1="@firebase/database-compat",c1="@firebase/functions",h1="@firebase/functions-compat",d1="@firebase/installations",f1="@firebase/installations-compat",p1="@firebase/messaging",m1="@firebase/messaging-compat",g1="@firebase/performance",_1="@firebase/performance-compat",y1="@firebase/remote-config",v1="@firebase/remote-config-compat",E1="@firebase/storage",w1="@firebase/storage-compat",T1="@firebase/firestore",I1="@firebase/ai",S1="@firebase/firestore-compat",C1="firebase",k1="11.10.0";/**
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
 */const Cm="[DEFAULT]",R1={[Sm]:"fire-core",[e1]:"fire-core-compat",[n1]:"fire-analytics",[t1]:"fire-analytics-compat",[i1]:"fire-app-check",[r1]:"fire-app-check-compat",[s1]:"fire-auth",[o1]:"fire-auth-compat",[a1]:"fire-rtdb",[l1]:"fire-data-connect",[u1]:"fire-rtdb-compat",[c1]:"fire-fn",[h1]:"fire-fn-compat",[d1]:"fire-iid",[f1]:"fire-iid-compat",[p1]:"fire-fcm",[m1]:"fire-fcm-compat",[g1]:"fire-perf",[_1]:"fire-perf-compat",[y1]:"fire-rc",[v1]:"fire-rc-compat",[E1]:"fire-gcs",[w1]:"fire-gcs-compat",[T1]:"fire-fst",[S1]:"fire-fst-compat",[I1]:"fire-vertex","fire-js":"fire-js",[C1]:"fire-js-all"};/**
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
 */const td=new Map,A1=new Map,km=new Map;function gE(n,e){try{n.container.addComponent(e)}catch(t){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function eo(n){const e=n.name;if(km.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;km.set(e,n);for(const t of td.values())gE(t,n);for(const t of A1.values())gE(t,n);return!0}function rc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function or(n){return n==null?!1:n.settings!==void 0}/**
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
 */const P1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hs=new nc("app","Firebase",P1);/**
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
 */class N1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hs.create("app-deleted",{appName:this._name})}}/**
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
 */const ho=k1;function QT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Hs.create("bad-app-name",{appName:String(s)});if(t||(t=$T()),!t)throw Hs.create("no-options");const a=td.get(s);if(a){if(Zi(t,a.options)&&Zi(r,a.config))return a;throw Hs.create("duplicate-app",{appName:s})}const u=new MR(s);for(const f of km.values())u.addComponent(f);const d=new N1(t,r,u);return td.set(s,d),d}function Ud(n=Cm){const e=td.get(n);if(!e&&n===Cm&&$T())return QT();if(!e)throw Hs.create("no-app",{appName:n});return e}function Pr(n,e,t){var r;let s=(r=R1[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(d.join(" "));return}eo(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const x1="firebase-heartbeat-database",b1=1,Vu="firebase-heartbeat-store";let nm=null;function YT(){return nm||(nm=QR(x1,b1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Hs.create("idb-open",{originalErrorMessage:n.message})})),nm}async function D1(n){try{const t=(await YT()).transaction(Vu),r=await t.objectStore(Vu).get(XT(n));return await t.done,r}catch(e){if(e instanceof Ri)ts.warn(e.message);else{const t=Hs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(t.message)}}}async function _E(n,e){try{const r=(await YT()).transaction(Vu,"readwrite");await r.objectStore(Vu).put(e,XT(n)),await r.done}catch(t){if(t instanceof Ri)ts.warn(t.message);else{const r=Hs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ts.warn(r.message)}}}function XT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const O1=1024,L1=30;class M1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=yE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>L1){const u=j1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ts.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yE(),{heartbeatsToSend:r,unsentEntries:s}=V1(this._heartbeatsCache.heartbeats),a=Xh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ts.warn(t),""}}}function yE(){return new Date().toISOString().substring(0,10)}function V1(n,e=O1){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),vE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class F1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wR()?TR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await D1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _E(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _E(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vE(n){return Xh(JSON.stringify({version:2,heartbeats:n})).length}function j1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function U1(n){eo(new es("platform-logger",e=>new JR(e),"PRIVATE")),eo(new es("heartbeat",e=>new M1(e),"PRIVATE")),Pr(Sm,mE,n),Pr(Sm,mE,"esm2017"),Pr("fire-js","")}U1("");function _g(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function JT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B1=JT,ZT=new nc("auth","Firebase",JT());/**
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
 */const nd=new jd("@firebase/auth");function z1(n,...e){nd.logLevel<=qe.WARN&&nd.warn(`Auth (${ho}): ${n}`,...e)}function Fh(n,...e){nd.logLevel<=qe.ERROR&&nd.error(`Auth (${ho}): ${n}`,...e)}/**
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
 */function Zr(n,...e){throw yg(n,...e)}function yi(n,...e){return yg(n,...e)}function eI(n,e,t){const r=Object.assign(Object.assign({},B1()),{[e]:t});return new nc("auth","Firebase",r).create(e,{appName:n.name})}function qs(n){return eI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ZT.create(n,...e)}function Pe(n,e,...t){if(!n)throw yg(e,...t)}function Qi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fh(e),new Error(e)}function ns(n,e){n||Qi(e)}/**
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
 */function Rm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $1(){return EE()==="http:"||EE()==="https:"}function EE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function W1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($1()||_R()||"connection"in navigator)?navigator.onLine:!0}function H1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ic{constructor(e,t){this.shortDelay=e,this.longDelay=t,ns(t>e,"Short delay should be less than long delay!"),this.isMobile=mg()||HT()}get(){return W1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vg(n,e){ns(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const q1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const G1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],K1=new ic(3e4,6e4);function na(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fo(n,e,t,r,s={}){return nI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=vl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return gR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&ki(n.emulatorConfig.host)&&(m.credentials="include"),tI.fetch()(await rI(n,n.config.apiHost,t,d),m)})}async function nI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},q1),e);try{const s=new Y1(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ah(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ah(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Ah(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Ah(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw eI(n,y,m);Zr(n,y)}}catch(s){if(s instanceof Ri)throw s;Zr(n,"network-request-failed",{message:String(s)})}}async function Bd(n,e,t,r,s={}){const a=await fo(n,e,t,r,s);return"mfaPendingCredential"in a&&Zr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function rI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?vg(n.config,s):`${n.config.apiScheme}://${s}`;return G1.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Q1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Y1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(yi(this.auth,"network-request-failed")),K1.get())})}}function Ah(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=yi(n,e,r);return s.customData._tokenResponse=t,s}function wE(n){return n!==void 0&&n.enterprise!==void 0}class X1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Q1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function J1(n,e){return fo(n,"GET","/v2/recaptchaConfig",na(n,e))}/**
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
 */async function Z1(n,e){return fo(n,"POST","/v1/accounts:delete",e)}async function rd(n,e){return fo(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eA(n,e=!1){const t=ut(n),r=await t.getIdToken(e),s=Eg(r);Pe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Cu(rm(s.auth_time)),issuedAtTime:Cu(rm(s.iat)),expirationTime:Cu(rm(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function rm(n){return Number(n)*1e3}function Eg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jh(t);return s?JSON.parse(s):(Fh("Failed to decode base64 JWT payload"),null)}catch(s){return Fh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function TE(n){const e=Eg(n);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ri&&tA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class nA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Am{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cu(this.lastLoginAt),this.creationTime=Cu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function id(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Fu(n,rd(t,{idToken:r}));Pe(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?iI(a.providerUserInfo):[],d=iA(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Am(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function rA(n){const e=ut(n);await id(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iI(n){return n.map(e=>{var{providerId:t}=e,r=_g(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sA(n,e){const t=await nI(n,{},async()=>{const r=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await rI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&ki(n.emulatorConfig.host)&&(f.credentials="include"),tI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oA(n,e){return fo(n,"POST","/v2/accounts:revokeToken",na(n,e))}/**
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
 */class Ya{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Pe(e.length!==0,"internal-error");const t=TE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await sA(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ya;return r&&(Pe(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Pe(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Pe(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ya,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
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
 */function Vs(n,e){Pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=_g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Am(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Fu(this,this.stsTokenManager.getToken(this.auth,e));return Pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eA(this,e)}reload(){return rA(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await id(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(qs(this.auth));const e=await this.getIdToken();return await Fu(this,Z1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(u=t.photoURL)!==null&&u!==void 0?u:void 0,F=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ie=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Y=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ne,emailVerified:B,isAnonymous:Ie,providerData:_e,stsTokenManager:x}=t;Pe(ne&&x,e,"internal-error");const C=Ya.fromJSON(this.name,x);Pe(typeof ne=="string",e,"internal-error"),Vs(w,e.name),Vs(I,e.name),Pe(typeof B=="boolean",e,"internal-error"),Pe(typeof Ie=="boolean",e,"internal-error"),Vs(N,e.name),Vs(M,e.name),Vs(F,e.name),Vs(U,e.name),Vs(ie,e.name),Vs(Y,e.name);const A=new Kr({uid:ne,auth:e,email:I,emailVerified:B,displayName:w,isAnonymous:Ie,photoURL:M,phoneNumber:N,tenantId:F,stsTokenManager:C,createdAt:ie,lastLoginAt:Y});return _e&&Array.isArray(_e)&&(A.providerData=_e.map(D=>Object.assign({},D))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ya;s.updateFromServerResponse(t);const a=new Kr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await id(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Pe(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?iI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Ya;d.updateFromIdToken(r);const f=new Kr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Am(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const IE=new Map;function Yi(n){ns(n instanceof Function,"Expected a class definition");let e=IE.get(n);return e?(ns(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,IE.set(n,e),e)}/**
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
 */class sI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sI.type="NONE";const SE=sI;/**
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
 */function jh(n,e,t){return`firebase:${n}:${e}:${t}`}class Xa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=jh(this.userKey,s.apiKey,a),this.fullPersistenceKey=jh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await rd(this.auth,{idToken:e}).catch(()=>{});return t?Kr._fromGetAccountInfoResponse(this.auth,t,e):null}return Kr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xa(Yi(SE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Yi(SE);const u=jh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let w;if(typeof y=="string"){const I=await rd(e,{idToken:y}).catch(()=>{});if(!I)break;w=await Kr._fromGetAccountInfoResponse(e,I,y)}else w=Kr._fromJSON(e,y);m!==a&&(d=w),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Xa(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Xa(a,e,r))}}/**
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
 */function CE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hI(e))return"Blackberry";if(dI(e))return"Webos";if(aI(e))return"Safari";if((e.includes("chrome/")||lI(e))&&!e.includes("edge/"))return"Chrome";if(cI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oI(n=Rn()){return/firefox\//i.test(n)}function aI(n=Rn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lI(n=Rn()){return/crios\//i.test(n)}function uI(n=Rn()){return/iemobile/i.test(n)}function cI(n=Rn()){return/android/i.test(n)}function hI(n=Rn()){return/blackberry/i.test(n)}function dI(n=Rn()){return/webos/i.test(n)}function wg(n=Rn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aA(n=Rn()){var e;return wg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lA(){return yR()&&document.documentMode===10}function fI(n=Rn()){return wg(n)||cI(n)||dI(n)||hI(n)||/windows phone/i.test(n)||uI(n)}/**
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
 */function pI(n,e=[]){let t;switch(n){case"Browser":t=CE(Rn());break;case"Worker":t=`${CE(Rn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ho}/${r}`}/**
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
 */class uA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cA(n,e={}){return fo(n,"GET","/v2/passwordPolicy",na(n,e))}/**
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
 */const hA=6;class dA{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:hA,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class fA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kE(this),this.idTokenSubscription=new kE(this),this.beforeStateQueue=new uA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yi(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Xa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rd(this,{idToken:e}),r=await Kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(or(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await id(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(qs(this));const t=e?ut(e):null;return t&&Pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(qs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(qs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cA(this),t=new dA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nc("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await oA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yi(e)||this._popupRedirectResolver;Pe(t,this,"argument-error"),this.redirectPersistenceManager=await Xa.create(this,[Yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Pe(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&z1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function El(n){return ut(n)}class kE{constructor(e){this.auth=e,this.observer=null,this.addObserver=PR(t=>this.observer=t)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pA(n){zd=n}function mI(n){return zd.loadJS(n)}function mA(){return zd.recaptchaEnterpriseScript}function gA(){return zd.gapiScript}function _A(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yA{constructor(){this.enterprise=new vA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const EA="recaptcha-enterprise",gI="NO_RECAPTCHA";class wA{constructor(e){this.type=EA,this.auth=El(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{J1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new X1(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;wE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(gI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yA().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&wE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=mA();f.length!==0&&(f+=d),mI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function RE(n,e,t,r=!1,s=!1){const a=new wA(n);let u;if(s)u=gI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function AE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await RE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await RE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function TA(n,e){const t=rc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Zi(a,e??{}))return s;Zr(s,"already-initialized")}return t.initialize({options:e})}function IA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Yi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SA(n,e,t){const r=El(n);Pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=_I(e),{host:u,port:d}=CA(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Pe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Pe(Zi(m,r.config.emulator)&&Zi(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,ki(u)?(Md(`${a}//${u}${f}`),Vd("Auth",!0)):kA()}function _I(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CA(n){const e=_I(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:PE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:PE(u)}}}function PE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Tg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qi("not implemented")}_getIdTokenResponse(e){return Qi("not implemented")}_linkToIdToken(e,t){return Qi("not implemented")}_getReauthenticationResolver(e){return Qi("not implemented")}}async function RA(n,e){return fo(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function AA(n,e){return Bd(n,"POST","/v1/accounts:signInWithPassword",na(n,e))}/**
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
 */async function PA(n,e){return Bd(n,"POST","/v1/accounts:signInWithEmailLink",na(n,e))}async function NA(n,e){return Bd(n,"POST","/v1/accounts:signInWithEmailLink",na(n,e))}/**
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
 */class ju extends Tg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ju(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ju(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return AE(e,t,"signInWithPassword",AA);case"emailLink":return PA(e,{email:this._email,oobCode:this._password});default:Zr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return AE(e,r,"signUpPassword",RA);case"emailLink":return NA(e,{idToken:t,email:this._email,oobCode:this._password});default:Zr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ja(n,e){return Bd(n,"POST","/v1/accounts:signInWithIdp",na(n,e))}/**
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
 */const xA="http://localhost";class Go extends Tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Go(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=_g(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Go(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ja(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ja(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ja(e,t)}buildRequest(){const e={requestUri:xA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vl(t)}return e}}/**
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
 */function bA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DA(n){const e=gu(_u(n)).link,t=e?gu(_u(e)).deep_link_id:null,r=gu(_u(n)).deep_link_id;return(r?gu(_u(r)).link:null)||r||t||e||n}class Ig{constructor(e){var t,r,s,a,u,d;const f=gu(_u(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,w=bA((s=f.mode)!==null&&s!==void 0?s:null);Pe(m&&y&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=DA(e);try{return new Ig(t)}catch{return null}}}/**
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
 */class wl{constructor(){this.providerId=wl.PROVIDER_ID}static credential(e,t){return ju._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ig.parseLink(t);return Pe(r,"argument-error"),ju._fromEmailAndCode(e,r.code,r.tenantId)}}wl.PROVIDER_ID="password";wl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sc extends yI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fs extends sc{constructor(){super("facebook.com")}static credential(e){return Go._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fs.credential(e.oauthAccessToken)}catch{return null}}}Fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fs.PROVIDER_ID="facebook.com";/**
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
 */class js extends sc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Go._fromParams({providerId:js.PROVIDER_ID,signInMethod:js.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return js.credentialFromTaggedObject(e)}static credentialFromError(e){return js.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return js.credential(t,r)}catch{return null}}}js.GOOGLE_SIGN_IN_METHOD="google.com";js.PROVIDER_ID="google.com";/**
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
 */class Us extends sc{constructor(){super("github.com")}static credential(e){return Go._fromParams({providerId:Us.PROVIDER_ID,signInMethod:Us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Us.credentialFromTaggedObject(e)}static credentialFromError(e){return Us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Us.credential(e.oauthAccessToken)}catch{return null}}}Us.GITHUB_SIGN_IN_METHOD="github.com";Us.PROVIDER_ID="github.com";/**
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
 */class Bs extends sc{constructor(){super("twitter.com")}static credential(e,t){return Go._fromParams({providerId:Bs.PROVIDER_ID,signInMethod:Bs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bs.credentialFromTaggedObject(e)}static credentialFromError(e){return Bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bs.credential(t,r)}catch{return null}}}Bs.TWITTER_SIGN_IN_METHOD="twitter.com";Bs.PROVIDER_ID="twitter.com";/**
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
 */class sl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Kr._fromIdTokenResponse(e,r,s),u=NE(r);return new sl({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=NE(r);return new sl({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function NE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class sd extends Ri{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new sd(e,t,r,s)}}function vI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?sd._fromErrorAndOperation(n,a,e,r):a})}async function OA(n,e,t=!1){const r=await Fu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sl._forOperation(n,"link",r)}/**
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
 */async function LA(n,e,t=!1){const{auth:r}=n;if(or(r.app))return Promise.reject(qs(r));const s="reauthenticate";try{const a=await Fu(n,vI(r,s,e,n),t);Pe(a.idToken,r,"internal-error");const u=Eg(a.idToken);Pe(u,r,"internal-error");const{sub:d}=u;return Pe(n.uid===d,r,"user-mismatch"),sl._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Zr(r,"user-mismatch"),a}}/**
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
 */async function EI(n,e,t=!1){if(or(n.app))return Promise.reject(qs(n));const r="signIn",s=await vI(n,r,e),a=await sl._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function MA(n,e){return EI(El(n),e)}/**
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
 */async function VA(n){const e=El(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function FA(n,e,t){return or(n.app)?Promise.reject(qs(n)):MA(ut(n),wl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&VA(n),r})}/**
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
 */function jA(n,e){return ut(n).setPersistence(e)}function UA(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function BA(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function zA(n,e,t,r){return ut(n).onAuthStateChanged(e,t,r)}function $A(n){return ut(n).signOut()}const od="__sak";/**
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
 */class wI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(od,"1"),this.storage.removeItem(od),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WA=1e3,HA=10;class TI extends wI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);lA()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}TI.type="LOCAL";const II=TI;/**
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
 */class SI extends wI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}SI.type="SESSION";const CI=SI;/**
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
 */function qA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new $d(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await qA(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$d.receivers=[];/**
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
 */function Sg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class GA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Sg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function vi(){return window}function KA(n){vi().location.href=n}/**
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
 */function kI(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function QA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function XA(){return kI()?self:null}/**
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
 */const RI="firebaseLocalStorageDb",JA=1,ad="firebaseLocalStorage",AI="fbase_key";class oc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wd(n,e){return n.transaction([ad],e?"readwrite":"readonly").objectStore(ad)}function ZA(){const n=indexedDB.deleteDatabase(RI);return new oc(n).toPromise()}function Pm(){const n=indexedDB.open(RI,JA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ad,{keyPath:AI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ad)?e(r):(r.close(),await ZA(),e(await Pm()))})})}async function xE(n,e,t){const r=Wd(n,!0).put({[AI]:e,value:t});return new oc(r).toPromise()}async function eP(n,e){const t=Wd(n,!1).get(e),r=await new oc(t).toPromise();return r===void 0?null:r.value}function bE(n,e){const t=Wd(n,!0).delete(e);return new oc(t).toPromise()}const tP=800,nP=3;class PI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$d._getInstance(XA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await QA(),!this.activeServiceWorker)return;this.sender=new GA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pm();return await xE(e,od,"1"),await bE(e,od),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>eP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Wd(s,!1).getAll();return new oc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PI.type="LOCAL";const rP=PI;new ic(3e4,6e4);/**
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
 */function iP(n,e){return e?Yi(e):(Pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cg extends Tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ja(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ja(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ja(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sP(n){return EI(n.auth,new Cg(n),n.bypassAuthState)}function oP(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),LA(t,new Cg(n),n.bypassAuthState)}async function aP(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),OA(t,new Cg(n),n.bypassAuthState)}/**
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
 */class NI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sP;case"linkViaPopup":case"linkViaRedirect":return aP;case"reauthViaPopup":case"reauthViaRedirect":return oP;default:Zr(this.auth,"internal-error")}}resolve(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lP=new ic(2e3,1e4);class Ka extends NI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Ka.currentPopupAction&&Ka.currentPopupAction.cancel(),Ka.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){ns(this.filter.length===1,"Popup operations only handle one event");const e=Sg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ka.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lP.get())};e()}}Ka.currentPopupAction=null;/**
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
 */const uP="pendingRedirect",Uh=new Map;class cP extends NI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Uh.get(this.auth._key());if(!e){try{const r=await hP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Uh.set(this.auth._key(),e)}return this.bypassAuthState||Uh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hP(n,e){const t=pP(e),r=fP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dP(n,e){Uh.set(n._key(),e)}function fP(n){return Yi(n._redirectPersistence)}function pP(n){return jh(uP,n.config.apiKey,n.name)}async function mP(n,e,t=!1){if(or(n.app))return Promise.reject(qs(n));const r=El(n),s=iP(r,e),u=await new cP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const gP=600*1e3;class _P{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(yi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gP&&this.cachedEventUids.clear(),this.cachedEventUids.has(DE(e))}saveEventToCache(e){this.cachedEventUids.add(DE(e)),this.lastProcessedEventTime=Date.now()}}function DE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xI(n);default:return!1}}/**
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
 */async function vP(n,e={}){return fo(n,"GET","/v1/projects",e)}/**
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
 */const EP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wP=/^https?/;async function TP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vP(n);for(const t of e)try{if(IP(t))return}catch{}Zr(n,"unauthorized-domain")}function IP(n){const e=Rm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!wP.test(t))return!1;if(EP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const SP=new ic(3e4,6e4);function OE(){const n=vi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CP(n){return new Promise((e,t)=>{var r,s,a;function u(){OE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OE(),t(yi(n,"network-request-failed"))},timeout:SP.get()})}if(!((s=(r=vi().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=vi().gapi)===null||a===void 0)&&a.load)u();else{const d=_A("iframefcb");return vi()[d]=()=>{gapi.load?u():t(yi(n,"network-request-failed"))},mI(`${gA()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Bh=null,e})}let Bh=null;function kP(n){return Bh=Bh||CP(n),Bh}/**
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
 */const RP=new ic(5e3,15e3),AP="__/auth/iframe",PP="emulator/auth/iframe",NP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bP(n){const e=n.config;Pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vg(e,PP):`https://${n.config.authDomain}/${AP}`,r={apiKey:e.apiKey,appName:n.name,v:ho},s=xP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${vl(r).slice(1)}`}async function DP(n){const e=await kP(n),t=vi().gapi;return Pe(t,n,"internal-error"),e.open({where:document.body,url:bP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=yi(n,"network-request-failed"),d=vi().setTimeout(()=>{a(u)},RP.get());function f(){vi().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const OP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LP=500,MP=600,VP="_blank",FP="http://localhost";class LE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(n,e,t,r=LP,s=MP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},OP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=Rn().toLowerCase();t&&(d=lI(m)?VP:t),oI(m)&&(e=e||FP,f.scrollbars="yes");const y=Object.entries(f).reduce((I,[N,M])=>`${I}${N}=${M},`,"");if(aA(m)&&d!=="_self")return UP(e||"",d),new LE(null);const w=window.open(e||"",d,y);Pe(w,n,"popup-blocked");try{w.focus()}catch{}return new LE(w)}function UP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const BP="__/auth/handler",zP="emulator/auth/handler",$P=encodeURIComponent("fac");async function ME(n,e,t,r,s,a){Pe(n.config.authDomain,n,"auth-domain-config-required"),Pe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ho,eventId:s};if(e instanceof yI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Zh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof sc){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${$P}=${encodeURIComponent(f)}`:"";return`${WP(n)}?${vl(d).slice(1)}${m}`}function WP({config:n}){return n.emulator?vg(n,zP):`https://${n.authDomain}/${BP}`}/**
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
 */const im="webStorageSupport";class HP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CI,this._completeRedirectFn=mP,this._overrideRedirectResult=dP}async _openPopup(e,t,r,s){var a;ns((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await ME(e,t,r,Rm(),s);return jP(e,u,Sg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await ME(e,t,r,Rm(),s);return KA(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(ns(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await DP(e),r=new _P(e);return t.register("authEvent",s=>(Pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(im,{type:im},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[im];u!==void 0&&t(!!u),Zr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fI()||aI()||wg()}}const qP=HP;var VE="@firebase/auth",FE="1.10.8";/**
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
 */class GP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QP(n){eo(new es("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Pe(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pI(n)},m=new fA(r,s,a,f);return IA(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),eo(new es("auth-internal",e=>{const t=El(e.getProvider("auth").getImmediate());return(r=>new GP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(VE,FE,KP(n)),Pr(VE,FE,"esm2017")}/**
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
 */const YP=300,XP=WT("authIdTokenMaxAge")||YP;let jE=null;const JP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>XP)return;const s=t==null?void 0:t.token;jE!==s&&(jE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ZP(n=Ud()){const e=rc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=TA(n,{popupRedirectResolver:qP,persistence:[rP,II,CI]}),r=WT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=JP(a.toString());BA(t,u,()=>u(t.currentUser)),UA(t,d=>u(d))}}const s=zT("auth");return s&&SA(t,`http://${s}`),t}function eN(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}pA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=yi("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",eN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QP("Browser");var UE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gs,bI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,C){function A(){}A.prototype=C.prototype,x.D=C.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(D,O,j){for(var k=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)k[Be-2]=arguments[Be];return C.prototype[O].apply(D,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,C,A){A||(A=0);var D=Array(16);if(typeof C=="string")for(var O=0;16>O;++O)D[O]=C.charCodeAt(A++)|C.charCodeAt(A++)<<8|C.charCodeAt(A++)<<16|C.charCodeAt(A++)<<24;else for(O=0;16>O;++O)D[O]=C[A++]|C[A++]<<8|C[A++]<<16|C[A++]<<24;C=x.g[0],A=x.g[1],O=x.g[2];var j=x.g[3],k=C+(j^A&(O^j))+D[0]+3614090360&4294967295;C=A+(k<<7&4294967295|k>>>25),k=j+(O^C&(A^O))+D[1]+3905402710&4294967295,j=C+(k<<12&4294967295|k>>>20),k=O+(A^j&(C^A))+D[2]+606105819&4294967295,O=j+(k<<17&4294967295|k>>>15),k=A+(C^O&(j^C))+D[3]+3250441966&4294967295,A=O+(k<<22&4294967295|k>>>10),k=C+(j^A&(O^j))+D[4]+4118548399&4294967295,C=A+(k<<7&4294967295|k>>>25),k=j+(O^C&(A^O))+D[5]+1200080426&4294967295,j=C+(k<<12&4294967295|k>>>20),k=O+(A^j&(C^A))+D[6]+2821735955&4294967295,O=j+(k<<17&4294967295|k>>>15),k=A+(C^O&(j^C))+D[7]+4249261313&4294967295,A=O+(k<<22&4294967295|k>>>10),k=C+(j^A&(O^j))+D[8]+1770035416&4294967295,C=A+(k<<7&4294967295|k>>>25),k=j+(O^C&(A^O))+D[9]+2336552879&4294967295,j=C+(k<<12&4294967295|k>>>20),k=O+(A^j&(C^A))+D[10]+4294925233&4294967295,O=j+(k<<17&4294967295|k>>>15),k=A+(C^O&(j^C))+D[11]+2304563134&4294967295,A=O+(k<<22&4294967295|k>>>10),k=C+(j^A&(O^j))+D[12]+1804603682&4294967295,C=A+(k<<7&4294967295|k>>>25),k=j+(O^C&(A^O))+D[13]+4254626195&4294967295,j=C+(k<<12&4294967295|k>>>20),k=O+(A^j&(C^A))+D[14]+2792965006&4294967295,O=j+(k<<17&4294967295|k>>>15),k=A+(C^O&(j^C))+D[15]+1236535329&4294967295,A=O+(k<<22&4294967295|k>>>10),k=C+(O^j&(A^O))+D[1]+4129170786&4294967295,C=A+(k<<5&4294967295|k>>>27),k=j+(A^O&(C^A))+D[6]+3225465664&4294967295,j=C+(k<<9&4294967295|k>>>23),k=O+(C^A&(j^C))+D[11]+643717713&4294967295,O=j+(k<<14&4294967295|k>>>18),k=A+(j^C&(O^j))+D[0]+3921069994&4294967295,A=O+(k<<20&4294967295|k>>>12),k=C+(O^j&(A^O))+D[5]+3593408605&4294967295,C=A+(k<<5&4294967295|k>>>27),k=j+(A^O&(C^A))+D[10]+38016083&4294967295,j=C+(k<<9&4294967295|k>>>23),k=O+(C^A&(j^C))+D[15]+3634488961&4294967295,O=j+(k<<14&4294967295|k>>>18),k=A+(j^C&(O^j))+D[4]+3889429448&4294967295,A=O+(k<<20&4294967295|k>>>12),k=C+(O^j&(A^O))+D[9]+568446438&4294967295,C=A+(k<<5&4294967295|k>>>27),k=j+(A^O&(C^A))+D[14]+3275163606&4294967295,j=C+(k<<9&4294967295|k>>>23),k=O+(C^A&(j^C))+D[3]+4107603335&4294967295,O=j+(k<<14&4294967295|k>>>18),k=A+(j^C&(O^j))+D[8]+1163531501&4294967295,A=O+(k<<20&4294967295|k>>>12),k=C+(O^j&(A^O))+D[13]+2850285829&4294967295,C=A+(k<<5&4294967295|k>>>27),k=j+(A^O&(C^A))+D[2]+4243563512&4294967295,j=C+(k<<9&4294967295|k>>>23),k=O+(C^A&(j^C))+D[7]+1735328473&4294967295,O=j+(k<<14&4294967295|k>>>18),k=A+(j^C&(O^j))+D[12]+2368359562&4294967295,A=O+(k<<20&4294967295|k>>>12),k=C+(A^O^j)+D[5]+4294588738&4294967295,C=A+(k<<4&4294967295|k>>>28),k=j+(C^A^O)+D[8]+2272392833&4294967295,j=C+(k<<11&4294967295|k>>>21),k=O+(j^C^A)+D[11]+1839030562&4294967295,O=j+(k<<16&4294967295|k>>>16),k=A+(O^j^C)+D[14]+4259657740&4294967295,A=O+(k<<23&4294967295|k>>>9),k=C+(A^O^j)+D[1]+2763975236&4294967295,C=A+(k<<4&4294967295|k>>>28),k=j+(C^A^O)+D[4]+1272893353&4294967295,j=C+(k<<11&4294967295|k>>>21),k=O+(j^C^A)+D[7]+4139469664&4294967295,O=j+(k<<16&4294967295|k>>>16),k=A+(O^j^C)+D[10]+3200236656&4294967295,A=O+(k<<23&4294967295|k>>>9),k=C+(A^O^j)+D[13]+681279174&4294967295,C=A+(k<<4&4294967295|k>>>28),k=j+(C^A^O)+D[0]+3936430074&4294967295,j=C+(k<<11&4294967295|k>>>21),k=O+(j^C^A)+D[3]+3572445317&4294967295,O=j+(k<<16&4294967295|k>>>16),k=A+(O^j^C)+D[6]+76029189&4294967295,A=O+(k<<23&4294967295|k>>>9),k=C+(A^O^j)+D[9]+3654602809&4294967295,C=A+(k<<4&4294967295|k>>>28),k=j+(C^A^O)+D[12]+3873151461&4294967295,j=C+(k<<11&4294967295|k>>>21),k=O+(j^C^A)+D[15]+530742520&4294967295,O=j+(k<<16&4294967295|k>>>16),k=A+(O^j^C)+D[2]+3299628645&4294967295,A=O+(k<<23&4294967295|k>>>9),k=C+(O^(A|~j))+D[0]+4096336452&4294967295,C=A+(k<<6&4294967295|k>>>26),k=j+(A^(C|~O))+D[7]+1126891415&4294967295,j=C+(k<<10&4294967295|k>>>22),k=O+(C^(j|~A))+D[14]+2878612391&4294967295,O=j+(k<<15&4294967295|k>>>17),k=A+(j^(O|~C))+D[5]+4237533241&4294967295,A=O+(k<<21&4294967295|k>>>11),k=C+(O^(A|~j))+D[12]+1700485571&4294967295,C=A+(k<<6&4294967295|k>>>26),k=j+(A^(C|~O))+D[3]+2399980690&4294967295,j=C+(k<<10&4294967295|k>>>22),k=O+(C^(j|~A))+D[10]+4293915773&4294967295,O=j+(k<<15&4294967295|k>>>17),k=A+(j^(O|~C))+D[1]+2240044497&4294967295,A=O+(k<<21&4294967295|k>>>11),k=C+(O^(A|~j))+D[8]+1873313359&4294967295,C=A+(k<<6&4294967295|k>>>26),k=j+(A^(C|~O))+D[15]+4264355552&4294967295,j=C+(k<<10&4294967295|k>>>22),k=O+(C^(j|~A))+D[6]+2734768916&4294967295,O=j+(k<<15&4294967295|k>>>17),k=A+(j^(O|~C))+D[13]+1309151649&4294967295,A=O+(k<<21&4294967295|k>>>11),k=C+(O^(A|~j))+D[4]+4149444226&4294967295,C=A+(k<<6&4294967295|k>>>26),k=j+(A^(C|~O))+D[11]+3174756917&4294967295,j=C+(k<<10&4294967295|k>>>22),k=O+(C^(j|~A))+D[2]+718787259&4294967295,O=j+(k<<15&4294967295|k>>>17),k=A+(j^(O|~C))+D[9]+3951481745&4294967295,x.g[0]=x.g[0]+C&4294967295,x.g[1]=x.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+j&4294967295}r.prototype.u=function(x,C){C===void 0&&(C=x.length);for(var A=C-this.blockSize,D=this.B,O=this.h,j=0;j<C;){if(O==0)for(;j<=A;)s(this,x,j),j+=this.blockSize;if(typeof x=="string"){for(;j<C;)if(D[O++]=x.charCodeAt(j++),O==this.blockSize){s(this,D),O=0;break}}else for(;j<C;)if(D[O++]=x[j++],O==this.blockSize){s(this,D),O=0;break}}this.h=O,this.o+=C},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var C=1;C<x.length-8;++C)x[C]=0;var A=8*this.o;for(C=x.length-8;C<x.length;++C)x[C]=A&255,A/=256;for(this.u(x),x=Array(16),C=A=0;4>C;++C)for(var D=0;32>D;D+=8)x[A++]=this.g[C]>>>D&255;return x};function a(x,C){var A=d;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=C(x)}function u(x,C){this.h=C;for(var A=[],D=!0,O=x.length-1;0<=O;O--){var j=x[O]|0;D&&j==C||(A[O]=j,D=!1)}this.g=A}var d={};function f(x){return-128<=x&&128>x?a(x,function(C){return new u([C|0],0>C?-1:0)}):new u([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return w;if(0>x)return U(m(-x));for(var C=[],A=1,D=0;x>=A;D++)C[D]=x/A|0,A*=4294967296;return new u(C,0)}function y(x,C){if(x.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(x.charAt(0)=="-")return U(y(x.substring(1),C));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(C,8)),D=w,O=0;O<x.length;O+=8){var j=Math.min(8,x.length-O),k=parseInt(x.substring(O,O+j),C);8>j?(j=m(Math.pow(C,j)),D=D.j(j).add(m(k))):(D=D.j(A),D=D.add(m(k)))}return D}var w=f(0),I=f(1),N=f(16777216);n=u.prototype,n.m=function(){if(F(this))return-U(this).m();for(var x=0,C=1,A=0;A<this.g.length;A++){var D=this.i(A);x+=(0<=D?D:4294967296+D)*C,C*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(M(this))return"0";if(F(this))return"-"+U(this).toString(x);for(var C=m(Math.pow(x,6)),A=this,D="";;){var O=B(A,C).g;A=ie(A,O.j(C));var j=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=O,M(A))return j+D;for(;6>j.length;)j="0"+j;D=j+D}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function M(x){if(x.h!=0)return!1;for(var C=0;C<x.g.length;C++)if(x.g[C]!=0)return!1;return!0}function F(x){return x.h==-1}n.l=function(x){return x=ie(this,x),F(x)?-1:M(x)?0:1};function U(x){for(var C=x.g.length,A=[],D=0;D<C;D++)A[D]=~x.g[D];return new u(A,~x.h).add(I)}n.abs=function(){return F(this)?U(this):this},n.add=function(x){for(var C=Math.max(this.g.length,x.g.length),A=[],D=0,O=0;O<=C;O++){var j=D+(this.i(O)&65535)+(x.i(O)&65535),k=(j>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);D=k>>>16,j&=65535,k&=65535,A[O]=k<<16|j}return new u(A,A[A.length-1]&-2147483648?-1:0)};function ie(x,C){return x.add(U(C))}n.j=function(x){if(M(this)||M(x))return w;if(F(this))return F(x)?U(this).j(U(x)):U(U(this).j(x));if(F(x))return U(this.j(U(x)));if(0>this.l(N)&&0>x.l(N))return m(this.m()*x.m());for(var C=this.g.length+x.g.length,A=[],D=0;D<2*C;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(var O=0;O<x.g.length;O++){var j=this.i(D)>>>16,k=this.i(D)&65535,Be=x.i(O)>>>16,Se=x.i(O)&65535;A[2*D+2*O]+=k*Se,Y(A,2*D+2*O),A[2*D+2*O+1]+=j*Se,Y(A,2*D+2*O+1),A[2*D+2*O+1]+=k*Be,Y(A,2*D+2*O+1),A[2*D+2*O+2]+=j*Be,Y(A,2*D+2*O+2)}for(D=0;D<C;D++)A[D]=A[2*D+1]<<16|A[2*D];for(D=C;D<2*C;D++)A[D]=0;return new u(A,0)};function Y(x,C){for(;(x[C]&65535)!=x[C];)x[C+1]+=x[C]>>>16,x[C]&=65535,C++}function ne(x,C){this.g=x,this.h=C}function B(x,C){if(M(C))throw Error("division by zero");if(M(x))return new ne(w,w);if(F(x))return C=B(U(x),C),new ne(U(C.g),U(C.h));if(F(C))return C=B(x,U(C)),new ne(U(C.g),C.h);if(30<x.g.length){if(F(x)||F(C))throw Error("slowDivide_ only works with positive integers.");for(var A=I,D=C;0>=D.l(x);)A=Ie(A),D=Ie(D);var O=_e(A,1),j=_e(D,1);for(D=_e(D,2),A=_e(A,2);!M(D);){var k=j.add(D);0>=k.l(x)&&(O=O.add(A),j=k),D=_e(D,1),A=_e(A,1)}return C=ie(x,O.j(C)),new ne(O,C)}for(O=w;0<=x.l(C);){for(A=Math.max(1,Math.floor(x.m()/C.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),j=m(A),k=j.j(C);F(k)||0<k.l(x);)A-=D,j=m(A),k=j.j(C);M(j)&&(j=I),O=O.add(j),x=ie(x,k)}return new ne(O,x)}n.A=function(x){return B(this,x).h},n.and=function(x){for(var C=Math.max(this.g.length,x.g.length),A=[],D=0;D<C;D++)A[D]=this.i(D)&x.i(D);return new u(A,this.h&x.h)},n.or=function(x){for(var C=Math.max(this.g.length,x.g.length),A=[],D=0;D<C;D++)A[D]=this.i(D)|x.i(D);return new u(A,this.h|x.h)},n.xor=function(x){for(var C=Math.max(this.g.length,x.g.length),A=[],D=0;D<C;D++)A[D]=this.i(D)^x.i(D);return new u(A,this.h^x.h)};function Ie(x){for(var C=x.g.length+1,A=[],D=0;D<C;D++)A[D]=x.i(D)<<1|x.i(D-1)>>>31;return new u(A,x.h)}function _e(x,C){var A=C>>5;C%=32;for(var D=x.g.length-A,O=[],j=0;j<D;j++)O[j]=0<C?x.i(j+A)>>>C|x.i(j+A+1)<<32-C:x.i(j+A);return new u(O,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Gs=u}).apply(typeof UE<"u"?UE:typeof self<"u"?self:typeof window<"u"?window:{});var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DI,yu,OI,zh,Nm,LI,MI,VI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ph=="object"&&Ph];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var z=c[S];if(!(z in v))break e;v=v[z]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,S=!1,z={next:function(){if(!S&&v<c.length){var G=v++;return{value:g(G,c[G]),done:!1}}return S=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function w(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,S),c.apply(g,z)}}return function(){return c.apply(g,arguments)}}function I(c,g,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,I.apply(null,arguments)}function N(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function M(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,z,G){for(var he=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)he[ct-2]=arguments[ct];return g.prototype[z].apply(S,he)}}function F(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function U(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(f(S)){const z=c.length||0,G=S.length||0;c.length=z+G;for(let he=0;he<G;he++)c[z+he]=S[he]}else c.push(S)}}class ie{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Y(c){return/^[\s\xa0]*$/.test(c)}function ne(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function B(c){return B[" "](c),c}B[" "]=function(){};var Ie=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function _e(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function x(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function C(c){const g={};for(const v in c)g[v]=c[v];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,g){let v,S;for(let z=1;z<arguments.length;z++){S=arguments[z];for(v in S)c[v]=S[v];for(let G=0;G<A.length;G++)v=A[G],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function O(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function j(c){d.setTimeout(()=>{throw c},0)}function k(){var c=ue;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Be{constructor(){this.h=this.g=null}add(g,v){const S=Se.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Se=new ie(()=>new te,c=>c.reset());class te{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,K=!1,ue=new Be,ee=()=>{const c=d.Promise.resolve(void 0);fe=()=>{c.then(L)}};var L=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(v){j(v)}var g=Se;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}K=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var be=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function Le(c,g){if(ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ie){e:{try{B(g.nodeName);var z=!0;break e}catch{}z=!1}z||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:De[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Le.aa.h.call(this)}}M(Le,ye);var De={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),ze=0;function Ge(c,g,v,S,z){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=z,this.key=++ze,this.da=this.fa=!1}function Xe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function an(c){this.src=c,this.g={},this.h=0}an.prototype.add=function(c,g,v,S,z){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var he=Tt(c,g,S,z);return-1<he?(g=c[he],v||(g.fa=!1)):(g=new Ge(g,this.src,G,!!S,z),g.fa=v,c.push(g)),g};function yn(c,g){var v=g.type;if(v in c.g){var S=c.g[v],z=Array.prototype.indexOf.call(S,g,void 0),G;(G=0<=z)&&Array.prototype.splice.call(S,z,1),G&&(Xe(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Tt(c,g,v,S){for(var z=0;z<c.length;++z){var G=c[z];if(!G.da&&G.listener==g&&G.capture==!!v&&G.ha==S)return z}return-1}var Qn="closure_lm_"+(1e6*Math.random()|0),Nr={};function _t(c,g,v,S,z){if(Array.isArray(g)){for(var G=0;G<g.length;G++)_t(c,g[G],v,S,z);return null}return v=dr(v),c&&c[Fe]?c.K(g,v,m(S)?!!S.capture:!1,z):xr(c,g,v,!1,S,z)}function xr(c,g,v,S,z,G){if(!g)throw Error("Invalid event type");var he=m(z)?!!z.capture:!!z,ct=hr(c);if(ct||(c[Qn]=ct=new an(c)),v=ct.add(g,v,S,he,G),v.proxy)return v;if(S=Pi(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)be||(z=he),z===void 0&&(z=!1),c.addEventListener(g.toString(),S,z);else if(c.attachEvent)c.attachEvent(xt(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Pi(){function c(v){return g.call(c.src,c.listener,v)}const g=cr;return c}function de(c,g,v,S,z){if(Array.isArray(g))for(var G=0;G<g.length;G++)de(c,g[G],v,S,z);else S=m(S)?!!S.capture:!!S,v=dr(v),c&&c[Fe]?(c=c.i,g=String(g).toString(),g in c.g&&(G=c.g[g],v=Tt(G,v,S,z),-1<v&&(Xe(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete c.g[g],c.h--)))):c&&(c=hr(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Tt(g,v,S,z)),(v=-1<c?g[c]:null)&&nt(v))}function nt(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Fe])yn(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(xt(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=hr(g))?(yn(v,c),v.h==0&&(v.src=null,g[Qn]=null)):Xe(c)}}}function xt(c){return c in Nr?Nr[c]:Nr[c]="on"+c}function cr(c,g){if(c.da)c=!0;else{g=new Le(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&nt(c),c=v.call(S,g)}return c}function hr(c){return c=c[Qn],c instanceof an?c:null}var br="__closure_events_fn_"+(1e9*Math.random()>>>0);function dr(c){return typeof c=="function"?c:(c[br]||(c[br]=function(g){return c.handleEvent(g)}),c[br])}function bt(){Q.call(this),this.i=new an(this),this.M=this,this.F=null}M(bt,Q),bt.prototype[Fe]=!0,bt.prototype.removeEventListener=function(c,g,v,S){de(this,c,g,v,S)};function at(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new ye(g,c);else if(g instanceof ye)g.target=g.target||c;else{var z=g;g=new ye(S,c),D(g,z)}if(z=!0,v)for(var G=v.length-1;0<=G;G--){var he=g.g=v[G];z=Yn(he,S,!0,g)&&z}if(he=g.g=c,z=Yn(he,S,!0,g)&&z,z=Yn(he,S,!1,g)&&z,v)for(G=0;G<v.length;G++)he=g.g=v[G],z=Yn(he,S,!1,g)&&z}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)Xe(v[S]);delete c.g[g],c.h--}}this.F=null},bt.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},bt.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function Yn(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var z=!0,G=0;G<g.length;++G){var he=g[G];if(he&&!he.da&&he.capture==v){var ct=he.listener,Kt=he.ha||he.src;he.fa&&yn(c.i,he),z=ct.call(Kt,S)!==!1&&z}}return z&&!S.defaultPrevented}function ti(c,g,v){if(typeof c=="function")v&&(c=I(c,v));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function fr(c){c.g=ti(()=>{c.g=null,c.i&&(c.i=!1,fr(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class pr extends Q{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:fr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(c){Q.call(this),this.h=c,this.g={}}M(mr,Q);var Dr=[];function Ni(c){_e(c.g,function(g,v){this.g.hasOwnProperty(v)&&nt(g)},c),c.g={}}mr.prototype.N=function(){mr.aa.N.call(this),Ni(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ls=d.JSON.stringify,_o=d.JSON.parse,ni=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function ri(){}ri.prototype.h=null;function us(c){return c.h||(c.h=c.i())}function cs(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){ye.call(this,"d")}M(gr,ye);function ln(){ye.call(this,"c")}M(ln,ye);var dt={},ii=null;function On(){return ii=ii||new bt}dt.La="serverreachability";function Or(c){ye.call(this,dt.La,c)}M(Or,ye);function Xn(c){const g=On();at(g,new Or(g))}dt.STAT_EVENT="statevent";function un(c,g){ye.call(this,dt.STAT_EVENT,c),this.stat=g}M(un,ye);function It(c){const g=On();at(g,new un(g,c))}dt.Ma="timingevent";function si(c,g){ye.call(this,dt.Ma,c),this.size=g}M(si,ye);function Ln(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function oi(c,g,v,S,z,G){c.info(function(){if(c.g)if(G)for(var he="",ct=G.split("&"),Kt=0;Kt<ct.length;Kt++){var et=ct[Kt].split("=");if(1<et.length){var Jt=et[0];et=et[1];var Ut=Jt.split("_");he=2<=Ut.length&&Ut[1]=="type"?he+(Jt+"="+et+"&"):he+(Jt+"=redacted&")}}else he=null;else he=G;return"XMLHTTP REQ ("+S+") [attempt "+z+"]: "+g+`
`+v+`
`+he})}function hs(c,g,v,S,z,G,he){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+z+"]: "+g+`
`+v+`
`+G+" "+he})}function Jn(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+aa(c,v)+(S?" "+S:"")})}function bi(c,g){c.info(function(){return"TIMEOUT: "+g})}xi.prototype.info=function(){};function aa(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var z=S[1];if(Array.isArray(z)&&!(1>z.length)){var G=z[0];if(G!="noop"&&G!="stop"&&G!="close")for(var he=1;he<z.length;he++)z[he]=""}}}}return ls(v)}catch{return g}}var ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},la={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},P;function J(){}M(J,ri),J.prototype.g=function(){return new XMLHttpRequest},J.prototype.i=function(){return{}},P=new J;function oe(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new mr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}var Je={},kt={};function Ze(c,g,v){c.L=1,c.v=ys(er(g)),c.m=v,c.P=!0,st(c,null)}function st(c,g){c.F=Date.now(),Qe(c),c.A=er(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Es(v.i,"t",S),c.C=0,v=c.j.J,c.h=new Ae,c.g=bc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new pr(I(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(Dr[0]=z.toString()),z=Dr);for(var G=0;G<z.length;G++){var he=_t(v,z[G],S||g.handleEvent,!1,g.h||g);if(!he)break;g.g[he.key]=he}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Xn(),oi(c.i,c.u,c.A,c.l,c.R,c.m)}oe.prototype.ca=function(c){c=c.target;const g=this.M;g&&Vn(c)==3?g.j():this.Y(c)},oe.prototype.Y=function(c){try{if(c==this.g)e:{const Ut=Vn(this.g);var g=this.g.Ba();const vr=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Ml(this.g)))){this.J||Ut!=4||g==7||(g==8||0>=vr?Xn(3):Xn(2)),Lr(this);var v=this.g.Z();this.X=v;t:if(Rt(this)){var S=Ml(this.g);c="";var z=S.length,G=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),ps(this);var he="";break t}this.h.i=new d.TextDecoder}for(g=0;g<z;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(G&&g==z-1)});S.length=0,this.h.g+=c,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=v==200,hs(this.i,this.u,this.A,this.l,this.R,Ut,v),this.o){if(this.T&&!this.K){t:{if(this.g){var ct,Kt=this.g;if((ct=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(ct)){var et=ct;break t}}et=null}if(v=et)Jn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xl(this,v);else{this.o=!1,this.s=3,It(12),_r(this),ps(this);break e}}if(this.P){v=!0;let nr;for(;!this.J&&this.C<he.length;)if(nr=Gt(this,he),nr==kt){Ut==4&&(this.s=4,It(14),v=!1),Jn(this.i,this.l,null,"[Incomplete Response]");break}else if(nr==Je){this.s=4,It(15),Jn(this.i,this.l,he,"[Invalid Chunk]"),v=!1;break}else Jn(this.i,this.l,nr,null),xl(this,nr);if(Rt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||he.length!=0||this.h.h||(this.s=1,It(16),v=!1),this.o=this.o&&v,!v)Jn(this.i,this.l,he,"[Invalid Chunked Response]"),_r(this),ps(this);else if(0<he.length&&!this.W){this.W=!0;var Jt=this.j;Jt.g==this&&Jt.ba&&!Jt.M&&(Jt.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),Fl(Jt),Jt.M=!0,It(11))}}else Jn(this.i,this.l,he,null),xl(this,he);Ut==4&&_r(this),this.o&&!this.J&&(Ut==4?va(this.j,this):(this.o=!1,Qe(this)))}else pa(this.g),v==400&&0<he.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),_r(this),ps(this)}}}catch{}finally{}};function Rt(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Gt(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?kt:(v=Number(g.substring(v,S)),isNaN(v)?Je:(S+=1,S+v>g.length?kt:(g=g.slice(S,S+v),c.C=S+v,g)))}oe.prototype.cancel=function(){this.J=!0,_r(this)};function Qe(c){c.S=Date.now()+c.I,fs(c,c.I)}function fs(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ln(I(c.ba,c),g)}function Lr(c){c.B&&(d.clearTimeout(c.B),c.B=null)}oe.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(bi(this.i,this.A),this.L!=2&&(Xn(),It(17)),_r(this),this.s=2,ps(this)):fs(this,this.S-c)};function ps(c){c.j.G==0||c.J||va(c.j,c)}function _r(c){Lr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ni(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function xl(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||Pn(v.h,c))){if(!c.K&&Pn(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var z=S;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ya(v),Ur(v);else break e;_a(v),It(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ln(I(v.Za,v),6e3));if(1>=yc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Vi(v,11)}else if((c.K||v.g==c)&&ya(v),!Y(g))for(z=v.Da.g.parse(g),g=0;g<z.length;g++){let et=z[g];if(v.T=et[0],et=et[1],v.G==2)if(et[0]=="c"){v.K=et[1],v.ia=et[2];const Jt=et[3];Jt!=null&&(v.la=Jt,v.j.info("VER="+v.la));const Ut=et[4];Ut!=null&&(v.Aa=Ut,v.j.info("SVER="+v.Aa));const vr=et[5];vr!=null&&typeof vr=="number"&&0<vr&&(S=1.5*vr,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const nr=c.g;if(nr){const So=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(So){var G=S.h;G.g||So.indexOf("spdy")==-1&&So.indexOf("quic")==-1&&So.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(bl(G,G.h),G.h=null))}if(S.D){const wa=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(S.ya=wa,ft(S.I,S.D,wa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var he=c;if(S.qa=xc(S,S.J?S.ia:null,S.W),he.K){vc(S.h,he);var ct=he,Kt=S.L;Kt&&(ct.I=Kt),ct.B&&(Lr(ct),Qe(ct)),S.g=he}else Io(S);0<v.i.length&&ci(v)}else et[0]!="stop"&&et[0]!="close"||Vi(v,7);else v.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Vi(v,7):hn(v):et[0]!="noop"&&v.l&&v.l.ta(et),v.v=0)}}Xn(4)}catch{}}var _c=class{constructor(c,g){this.g=c,this.map=g}};function yo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function yc(c){return c.h?1:c.g?c.g.size:0}function Pn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function bl(c,g){c.g?c.g.add(g):c.h=g}function vc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}yo.prototype.cancel=function(){if(this.i=Ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ec(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return F(c.i)}function ua(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function ca(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function ms(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=ca(c),S=ua(c),z=S.length,G=0;G<z;G++)g.call(void 0,S[G],v&&v[G],c)}var vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function If(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),z=null;if(0<=S){var G=c[v].substring(0,S);z=c[v].substring(S+1)}else G=c[v];g(G,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Di(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Di){this.h=c.h,Eo(this,c.j),this.o=c.o,this.g=c.g,gs(this,c.s),this.l=c.l;var g=c.i,v=new ai;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),_s(this,v),this.m=c.m}else c&&(g=String(c).match(vo))?(this.h=!1,Eo(this,g[1]||"",!0),this.o=Ye(g[2]||""),this.g=Ye(g[3]||"",!0),gs(this,g[4]),this.l=Ye(g[5]||"",!0),_s(this,g[6]||"",!0),this.m=Ye(g[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}Di.prototype.toString=function(){var c=[],g=this.j;g&&c.push(vs(g,ha,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(vs(g,ha,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(vs(v,v.charAt(0)=="/"?Ic:Tc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",vs(v,Dl)),c.join("")};function er(c){return new Di(c)}function Eo(c,g,v){c.j=v?Ye(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function gs(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function _s(c,g,v){g instanceof ai?(c.i=g,li(c.i,c.h)):(v||(g=vs(g,Sc)),c.i=new ai(g,c.h))}function ft(c,g,v){c.i.set(g,v)}function ys(c){return ft(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ye(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vs(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,wc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function wc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ha=/[#\/\?@]/g,Tc=/[#\?:]/g,Ic=/[#\?]/g,Sc=/[#\?@]/g,Dl=/#/g;function ai(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function cn(c){c.g||(c.g=new Map,c.h=0,c.i&&If(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=ai.prototype,n.add=function(c,g){cn(this),this.i=null,c=yr(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function Mr(c,g){cn(c),g=yr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Vr(c,g){return cn(c),g=yr(c,g),c.g.has(g)}n.forEach=function(c,g){cn(this),this.g.forEach(function(v,S){v.forEach(function(z){c.call(g,z,S,this)},this)},this)},n.na=function(){cn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const z=c[S];for(let G=0;G<z.length;G++)v.push(g[S])}return v},n.V=function(c){cn(this);let g=[];if(typeof c=="string")Vr(this,c)&&(g=g.concat(this.g.get(yr(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return cn(this),this.i=null,c=yr(this,c),Vr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Es(c,g,v){Mr(c,g),0<v.length&&(c.i=null,c.g.set(yr(c,g),F(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const G=encodeURIComponent(String(S)),he=this.V(S);for(S=0;S<he.length;S++){var z=G;he[S]!==""&&(z+="="+encodeURIComponent(String(he[S]))),c.push(z)}}return this.i=c.join("&")};function yr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function li(c,g){g&&!c.j&&(cn(c),c.i=null,c.g.forEach(function(v,S){var z=S.toLowerCase();S!=z&&(Mr(this,S),Es(this,z,v))},c)),c.j=g}function Sf(c,g){const v=new xi;if(d.Image){const S=new Image;S.onload=N(Mn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=N(Mn,v,"TestLoadImage: error",!1,g,S),S.onabort=N(Mn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=N(Mn,v,"TestLoadImage: timeout",!1,g,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Cc(c,g){const v=new xi,S=new AbortController,z=setTimeout(()=>{S.abort(),Mn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(G=>{clearTimeout(z),G.ok?Mn(v,"TestPingServer: ok",!0,g):Mn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(z),Mn(v,"TestPingServer: error",!1,g)})}function Mn(c,g,v,S,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),S(v)}catch{}}function Cf(){this.g=new ni}function kc(c,g,v){const S=v||"";try{ms(c,function(z,G){let he=z;m(z)&&(he=ls(z)),g.push(S+G+"="+encodeURIComponent(he))})}catch(z){throw g.push(S+"type="+encodeURIComponent("_badmap")),z}}function Oi(c){this.l=c.Ub||null,this.j=c.eb||!1}M(Oi,ri),Oi.prototype.g=function(){return new wo(this.l,this.j)},Oi.prototype.i=(function(c){return function(){return c}})({});function wo(c,g){bt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(wo,bt),n=wo.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,jr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Fr(this):jr(this),this.readyState==3&&Rc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Fr(this))},n.Qa=function(c){this.g&&(this.response=c,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,jr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function jr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Li(c){let g="";return _e(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function ws(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=Li(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):ft(c,g,v))}function St(c){bt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(St,bt);var kf=/^https?$/i,Ol=["POST","PUT"];n=St.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():P.g(),this.v=this.o?us(this.o):us(P),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(G){To(this,G);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var z in S)v.set(z,S[z]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const G of S.keys())v.set(G,S.get(G));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),z=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ol,g,void 0))||S||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,he]of v)this.g.setRequestHeader(G,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fa(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){To(this,G)}};function To(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,da(c),tr(c)}function da(c){c.A||(c.A=!0,at(c,"complete"),at(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,at(this,"complete"),at(this,"abort"),tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tr(this,!0)),St.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ll(this):this.bb())},n.bb=function(){Ll(this)};function Ll(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Vn(c)!=4||c.Z()!=2)){if(c.u&&Vn(c)==4)ti(c.Ea,0,c);else if(at(c,"readystatechange"),Vn(c)==4){c.h=!1;try{const he=c.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=he===0){var z=String(c.D).match(vo)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),S=!kf.test(z?z.toLowerCase():"")}v=S}if(v)at(c,"complete"),at(c,"success");else{c.m=6;try{var G=2<Vn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",da(c)}}finally{tr(c)}}}}function tr(c,g){if(c.g){fa(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||at(c,"ready");try{v.onreadystatechange=S}catch{}}}function fa(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Vn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),_o(g)}};function Ml(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function pa(c){const g={};c=(c.g&&2<=Vn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(Y(c[S]))continue;var v=O(c[S]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=g[z]||[];g[z]=G,G.push(v)}x(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ui(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Vl(c){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ui("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ui("baseRetryDelayMs",5e3,c),this.cb=ui("retryDelaySeedMs",1e4,c),this.Wa=ui("forwardChannelMaxRetries",2,c),this.wa=ui("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new yo(c&&c.concurrentRequestLimit),this.Da=new Cf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Vl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,S){It(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=xc(this,null,this.W),ci(this)};function hn(c){if(ma(c),c.G==3){var g=c.U++,v=er(c.I);if(ft(v,"SID",c.K),ft(v,"RID",g),ft(v,"TYPE","terminate"),Mi(c,v),g=new oe(c,c.j,g),g.L=2,g.v=ys(er(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=bc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Qe(g)}Nc(c)}function Ur(c){c.g&&(Fl(c),c.g.cancel(),c.g=null)}function ma(c){Ur(c),c.u&&(d.clearTimeout(c.u),c.u=null),ya(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function ci(c){if(!Zn(c.h)&&!c.s){c.s=!0;var g=c.Ga;fe||ee(),K||(fe(),K=!0),ue.add(g,c),c.B=0}}function Rf(c,g){return yc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ln(I(c.Ga,c,g),Pc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new oe(this,this.j,c);let G=this.o;if(this.S&&(G?(G=C(G),D(G,this.S)):G=this.S),this.m!==null||this.O||(z.H=G,G=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Ts(this,z,g),v=er(this.I),ft(v,"RID",c),ft(v,"CVER",22),this.D&&ft(v,"X-HTTP-Session-Id",this.D),Mi(this,v),G&&(this.O?g="headers="+encodeURIComponent(String(Li(G)))+"&"+g:this.m&&ws(v,this.m,G)),bl(this.h,z),this.Ua&&ft(v,"TYPE","init"),this.P?(ft(v,"$req",g),ft(v,"SID","null"),z.T=!0,Ze(z,v,null)):Ze(z,v,g),this.G=2}}else this.G==3&&(c?ga(this,c):this.i.length==0||Zn(this.h)||ga(this))};function ga(c,g){var v;g?v=g.l:v=c.U++;const S=er(c.I);ft(S,"SID",c.K),ft(S,"RID",v),ft(S,"AID",c.T),Mi(c,S),c.m&&c.o&&ws(S,c.m,c.o),v=new oe(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ts(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),bl(c.h,v),Ze(v,S,g)}function Mi(c,g){c.H&&_e(c.H,function(v,S){ft(g,S,v)}),c.l&&ms({},function(v,S){ft(g,S,v)})}function Ts(c,g,v){v=Math.min(c.i.length,v);var S=c.l?I(c.l.Na,c.l,c):null;e:{var z=c.i;let G=-1;for(;;){const he=["count="+v];G==-1?0<v?(G=z[0].g,he.push("ofs="+G)):G=0:he.push("ofs="+G);let ct=!0;for(let Kt=0;Kt<v;Kt++){let et=z[Kt].g;const Jt=z[Kt].map;if(et-=G,0>et)G=Math.max(0,z[Kt].g-100),ct=!1;else try{kc(Jt,he,"req"+et+"_")}catch{S&&S(Jt)}}if(ct){S=he.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function Io(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;fe||ee(),K||(fe(),K=!0),ue.add(g,c),c.v=0}}function _a(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ln(I(c.Fa,c),Pc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Ac(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ln(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ur(this),Ac(this))};function Fl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Ac(c){c.g=new oe(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=er(c.qa);ft(g,"RID","rpc"),ft(g,"SID",c.K),ft(g,"AID",c.T),ft(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&ft(g,"TO",c.ja),ft(g,"TYPE","xmlhttp"),Mi(c,g),c.m&&c.o&&ws(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=ys(er(g)),v.m=null,v.P=!0,st(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Ur(this),_a(this),It(19))};function ya(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function va(c,g){var v=null;if(c.g==g){ya(c),Fl(c),c.g=null;var S=2}else if(Pn(c.h,g))v=g.D,vc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var z=c.B;S=On(),at(S,new si(S,v)),ci(c)}else Io(c);else if(z=g.s,z==3||z==0&&0<g.X||!(S==1&&Rf(c,g)||S==2&&_a(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),z){case 1:Vi(c,5);break;case 4:Vi(c,10);break;case 3:Vi(c,6);break;default:Vi(c,2)}}}function Pc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Vi(c,g){if(c.j.info("Error code "+g),g==2){var v=I(c.fb,c),S=c.Xa;const z=!S;S=new Di(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Eo(S,"https"),ys(S),z?Sf(S.toString(),v):Cc(S.toString(),v)}else It(2);c.G=0,c.l&&c.l.sa(g),Nc(c),ma(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Nc(c){if(c.G=0,c.ka=[],c.l){const g=Ec(c.h);(g.length!=0||c.i.length!=0)&&(U(c.ka,g),U(c.ka,c.i),c.h.i.length=0,F(c.i),c.i.length=0),c.l.ra()}}function xc(c,g,v){var S=v instanceof Di?er(v):new Di(v);if(S.g!="")g&&(S.g=g+"."+S.g),gs(S,S.s);else{var z=d.location;S=z.protocol,g=g?g+"."+z.hostname:z.hostname,z=+z.port;var G=new Di(null);S&&Eo(G,S),g&&(G.g=g),z&&gs(G,z),v&&(G.l=v),S=G}return v=c.D,g=c.ya,v&&g&&ft(S,v,g),ft(S,"VER",c.la),Mi(c,S),S}function bc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new St(new Oi({eb:v})):new St(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jl(){}n=jl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ea(){}Ea.prototype.g=function(c,g){return new Nn(c,g)};function Nn(c,g){bt.call(this),this.g=new Vl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Y(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Y(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new hi(this)}M(Nn,bt),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){hn(this.g)},Nn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=ls(c),c=v);g.i.push(new _c(g.Ya++,c)),g.G==3&&ci(g)},Nn.prototype.N=function(){this.g.l=null,delete this.j,hn(this.g),delete this.g,Nn.aa.N.call(this)};function Dc(c){gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}M(Dc,gr);function Oc(){ln.call(this),this.status=1}M(Oc,ln);function hi(c){this.g=c}M(hi,jl),hi.prototype.ua=function(){at(this.g,"a")},hi.prototype.ta=function(c){at(this.g,new Dc(c))},hi.prototype.sa=function(c){at(this.g,new Oc)},hi.prototype.ra=function(){at(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,VI=function(){return new Ea},MI=function(){return On()},LI=dt,Nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,zh=ds,la.COMPLETE="complete",OI=la,cs.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,yu=cs,St.prototype.listenOnce=St.prototype.L,St.prototype.getLastError=St.prototype.Ka,St.prototype.getLastErrorCode=St.prototype.Ba,St.prototype.getStatus=St.prototype.Z,St.prototype.getResponseJson=St.prototype.Oa,St.prototype.getResponseText=St.prototype.oa,St.prototype.send=St.prototype.ea,St.prototype.setWithCredentials=St.prototype.Ha,DI=St}).apply(typeof Ph<"u"?Ph:typeof self<"u"?self:typeof window<"u"?window:{});const BE="@firebase/firestore",zE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Cn.UNAUTHENTICATED=new Cn(null),Cn.GOOGLE_CREDENTIALS=new Cn("google-credentials-uid"),Cn.FIRST_PARTY=new Cn("first-party-uid"),Cn.MOCK_USER=new Cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new jd("@firebase/firestore");function Wa(){return Ko.logLevel}function ge(n,...e){if(Ko.logLevel<=qe.DEBUG){const t=e.map(kg);Ko.debug(`Firestore (${Tl}): ${n}`,...t)}}function rs(n,...e){if(Ko.logLevel<=qe.ERROR){const t=e.map(kg);Ko.error(`Firestore (${Tl}): ${n}`,...t)}}function to(n,...e){if(Ko.logLevel<=qe.WARN){const t=e.map(kg);Ko.warn(`Firestore (${Tl}): ${n}`,...t)}}function kg(n){if(typeof n=="string")return n;try{/**
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
 */function Ne(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,FI(n,r,t)}function FI(n,e,t){let r=`FIRESTORE (${Tl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw rs(r),new Error(r)}function lt(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||FI(e,s,r)}function Ve(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Ri{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Cn.UNAUTHENTICATED)))}shutdown(){}}class nN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rN{constructor(e){this.t=e,this.currentUser=Cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){lt(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ks;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ks,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ks)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string",31837,{l:r}),new jI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Cn(e)}}class iN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new iN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Cn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $E{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,or(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){lt(this.o===void 0,3512);const r=a=>{a.error!=null&&ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ge("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $E(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(lt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $E(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function UI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=aN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function je(n,e){return n<e?-1:n>e?1:0}function xm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return je(r,s);{const a=UI(),u=lN(a.encode(WE(n,t)),a.encode(WE(e,t)));return u!==0?u:je(r,s)}}t+=r>65535?2:1}return je(n.length,e.length)}function WE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return je(n[t],e[t]);return je(n.length,e.length)}function ol(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="__name__";class gi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ne(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ne(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gi?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=gi.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return je(e.length,t.length)}static compareSegments(e,t){const r=gi.isNumericId(e),s=gi.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?gi.extractNumericId(e).compare(gi.extractNumericId(t)):xm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gs.fromString(e.substring(4,e.length-2))}}class gt extends gi{construct(e,t,r){return new gt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new pe(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new gt(t)}static emptyPath(){return new gt([])}}const uN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends gi{construct(e,t,r){return new gn(e,t,r)}static isValidIdentifier(e){return uN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===HE}static keyField(){return new gn([HE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new pe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new pe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new pe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new pe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gn(t)}static emptyPath(){return new gn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.path=e}static fromPath(e){return new Ce(gt.fromString(e))}static fromName(e){return new Ce(gt.fromString(e).popFirst(5))}static empty(){return new Ce(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return gt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ce(new gt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n,e,t){if(!t)throw new pe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cN(n,e,t,r){if(e===!0&&r===!0)throw new pe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qE(n){if(!Ce.isDocumentKey(n))throw new pe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function GE(n){if(Ce.isDocumentKey(n))throw new pe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ne(12329,{type:typeof n})}function Yr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hd(n);throw new pe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function hN(n,e){if(e<=0)throw new pe(X.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function ac(n,e){if(!zI(n))throw new pe(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new pe(X.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=-62135596800,QE=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*QE);return new wt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<KE)throw new pe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/QE}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ac(e,wt._jsonSchema))return new wt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-KE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:Ht("string",wt._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{static fromTimestamp(e){return new Me(e)}static min(){return new Me(new wt(0,0))}static max(){return new Me(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uu=-1;function dN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Me.fromTimestamp(r===1e9?new wt(t+1,0):new wt(t,r));return new no(s,Ce.empty(),e)}function fN(n){return new no(n.readTime,n.key,Uu)}class no{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new no(Me.min(),Ce.empty(),Uu)}static max(){return new no(Me.max(),Ce.empty(),Uu)}}function pN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ce.comparator(n.documentKey,e.documentKey),t!==0?t:je(n.largestBatchId,e.largestBatchId))}/**
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
 */const mN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==mN)throw n;ge("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,r)=>{t(e)}))}static reject(e){return new Z(((t,r)=>{r(e)}))}static waitFor(e){return new Z(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Z.resolve(!1);for(const r of e)t=t.next((s=>s?Z.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Z(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new Z(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function _N(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}qd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=-1;function Gd(n){return n==null}function ld(n){return n===0&&1/n==-1/0}function yN(n){return typeof n=="number"&&Number.isInteger(n)&&!ld(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="";function vN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=YE(e)),e=EN(n.get(t),e);return YE(e)}function EN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case $I:t+="";break;default:t+=a}}return t}function YE(n){return n+$I+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function po(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function WI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt=class bm{constructor(e,t){this.comparator=e,this.root=t||Qs.EMPTY}insert(e,t){return new bm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qs.BLACK,null,null))}remove(e){return new bm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nh(this.root,e,this.comparator,!0)}},Nh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Qs=class qi{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??qi.RED,this.left=s??qi.EMPTY,this.right=a??qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new qi(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qi.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}};Qs.EMPTY=null,Qs.RED=!0,Qs.BLACK=!1;Qs.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Qs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.comparator=e,this.data=new qt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new JE(this.data.getIterator())}getIteratorFrom(e){return new JE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xt(this.comparator);return t.data=e,t}}class JE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class lr{constructor(e){this.fields=e,e.sort(gn.comparator)}static empty(){return new lr([])}unionWith(e){let t=new Xt(gn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new lr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ol(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class HI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new HI("Invalid base64 string: "+a):a}})(e);return new _n(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new _n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const wN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(n){if(lt(!!n,39018),typeof n=="string"){let e=0;const t=wN.exec(n);if(lt(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function io(n){return typeof n=="string"?_n.fromBase64String(n):_n.fromUint8Array(n)}/**
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
 */const qI="server_timestamp",GI="__type__",KI="__previous_value__",QI="__local_write_time__";function Pg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[GI])===null||t===void 0?void 0:t.stringValue)===qI}function Kd(n){const e=n.mapValue.fields[KI];return Pg(e)?Kd(e):e}function Bu(n){const e=ro(n.mapValue.fields[QI].timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const ud="(default)";class zu{constructor(e,t){this.projectId=e,this.database=t||ud}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database===ud}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const YI="__type__",IN="__max__",xh={mapValue:{}},XI="__vector__",cd="value";function so(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pg(n)?4:CN(n)?9007199254740991:SN(n)?10:11:Ne(28295,{value:n})}function Ci(n,e){if(n===e)return!0;const t=so(n);if(t!==so(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bu(n).isEqual(Bu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ro(s.timestampValue),d=ro(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return io(s.bytesValue).isEqual(io(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return Vt(s.geoPointValue.latitude)===Vt(a.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return Vt(s.integerValue)===Vt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Vt(s.doubleValue),d=Vt(a.doubleValue);return u===d?ld(u)===ld(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return ol(n.arrayValue.values||[],e.arrayValue.values||[],Ci);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(XE(u)!==XE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Ci(u[f],d[f])))return!1;return!0})(n,e);default:return Ne(52216,{left:n})}}function $u(n,e){return(n.values||[]).find((t=>Ci(t,e)))!==void 0}function al(n,e){if(n===e)return 0;const t=so(n),r=so(e);if(t!==r)return je(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return je(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=Vt(a.integerValue||a.doubleValue),f=Vt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return ZE(n.timestampValue,e.timestampValue);case 4:return ZE(Bu(n),Bu(e));case 5:return xm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=io(a),f=io(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=je(d[m],f[m]);if(y!==0)return y}return je(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=je(Vt(a.latitude),Vt(u.latitude));return d!==0?d:je(Vt(a.longitude),Vt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ew(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const w=a.fields||{},I=u.fields||{},N=(d=w[cd])===null||d===void 0?void 0:d.arrayValue,M=(f=I[cd])===null||f===void 0?void 0:f.arrayValue,F=je(((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0,((y=M==null?void 0:M.values)===null||y===void 0?void 0:y.length)||0);return F!==0?F:ew(N,M)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===xh.mapValue&&u===xh.mapValue)return 0;if(a===xh.mapValue)return 1;if(u===xh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let w=0;w<f.length&&w<y.length;++w){const I=xm(f[w],y[w]);if(I!==0)return I;const N=al(d[f[w]],m[y[w]]);if(N!==0)return N}return je(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ne(23264,{le:t})}}function ZE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return je(n,e);const t=ro(n),r=ro(e),s=je(t.seconds,r.seconds);return s!==0?s:je(t.nanos,r.nanos)}function ew(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=al(t[s],r[s]);if(a)return a}return je(t.length,r.length)}function ll(n){return Dm(n)}function Dm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ro(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return io(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Dm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Dm(t.fields[u])}`;return s+"}"})(n.mapValue):Ne(61005,{value:n})}function $h(n){switch(so(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kd(n);return e?16+$h(e):16;case 5:return 2*n.stringValue.length;case 6:return io(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+$h(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return po(r.fields,((a,u)=>{s+=a.length+$h(u)})),s})(n.mapValue);default:throw Ne(13486,{value:n})}}function tw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Om(n){return!!n&&"integerValue"in n}function Ng(n){return!!n&&"arrayValue"in n}function nw(n){return!!n&&"nullValue"in n}function rw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wh(n){return!!n&&"mapValue"in n}function SN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[YI])===null||t===void 0?void 0:t.stringValue)===XI}function ku(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return po(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ku(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ku(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===IN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.value=e}static empty(){return new Hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ku(t)}setAll(e){let t=gn.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=ku(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Wh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ci(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){po(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Hn(ku(this.value))}}function JI(n){const e=[];return po(n.fields,((t,r)=>{const s=new gn([t]);if(Wh(r)){const a=JI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new lr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new kn(e,0,Me.min(),Me.min(),Me.min(),Hn.empty(),0)}static newFoundDocument(e,t,r,s){return new kn(e,1,t,Me.min(),r,s,0)}static newNoDocument(e,t){return new kn(e,2,t,Me.min(),Me.min(),Hn.empty(),0)}static newUnknownDocument(e,t){return new kn(e,3,t,Me.min(),Me.min(),Hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hd{constructor(e,t){this.position=e,this.inclusive=t}}function iw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=Ce.comparator(Ce.fromName(u.referenceValue),t.key):r=al(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function sw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ci(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function kN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ZI{}class Wt extends ZI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new AN(e,t,r):t==="array-contains"?new xN(e,r):t==="in"?new bN(e,r):t==="not-in"?new DN(e,r):t==="array-contains-any"?new ON(e,r):new Wt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new PN(e,r):new NN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(al(t,this.value)):t!==null&&so(this.value)===so(t)&&this.matchesComparison(al(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ei extends ZI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ei(e,t)}matches(e){return e0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function e0(n){return n.op==="and"}function t0(n){return RN(n)&&e0(n)}function RN(n){for(const e of n.filters)if(e instanceof ei)return!1;return!0}function Lm(n){if(n instanceof Wt)return n.field.canonicalString()+n.op.toString()+ll(n.value);if(t0(n))return n.filters.map((e=>Lm(e))).join(",");{const e=n.filters.map((t=>Lm(t))).join(",");return`${n.op}(${e})`}}function n0(n,e){return n instanceof Wt?(function(r,s){return s instanceof Wt&&r.op===s.op&&r.field.isEqual(s.field)&&Ci(r.value,s.value)})(n,e):n instanceof ei?(function(r,s){return s instanceof ei&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&n0(u,s.filters[d])),!0):!1})(n,e):void Ne(19439)}function r0(n){return n instanceof Wt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ll(t.value)}`})(n):n instanceof ei?(function(t){return t.op.toString()+" {"+t.getFilters().map(r0).join(" ,")+"}"})(n):"Filter"}class AN extends Wt{constructor(e,t,r){super(e,t,r),this.key=Ce.fromName(r.referenceValue)}matches(e){const t=Ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class PN extends Wt{constructor(e,t){super(e,"in",t),this.keys=i0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class NN extends Wt{constructor(e,t){super(e,"not-in",t),this.keys=i0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function i0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ce.fromName(r.referenceValue)))}class xN extends Wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ng(t)&&$u(t.arrayValue,this.value)}}class bN extends Wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$u(this.value.arrayValue,t)}}class DN extends Wt{constructor(e,t){super(e,"not-in",t)}matches(e){if($u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$u(this.value.arrayValue,t)}}class ON extends Wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ng(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>$u(this.value.arrayValue,r)))}}/**
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
 */class LN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function ow(n,e=null,t=[],r=[],s=null,a=null,u=null){return new LN(n,e,t,r,s,a,u)}function xg(n){const e=Ve(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Lm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Gd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ll(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ll(r))).join(",")),e.Pe=t}return e.Pe}function bg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!n0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sw(n.startAt,e.startAt)&&sw(n.endAt,e.endAt)}function Mm(n){return Ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function MN(n,e,t,r,s,a,u,d){return new Cl(n,e,t,r,s,a,u,d)}function Dg(n){return new Cl(n)}function aw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function s0(n){return n.collectionGroup!==null}function Ru(n){const e=Ve(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Xt(gn.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Wu(a,r))})),t.has(gn.keyField().canonicalString())||e.Te.push(new Wu(gn.keyField(),r))}return e.Te}function Ei(n){const e=Ve(n);return e.Ie||(e.Ie=VN(e,Ru(n))),e.Ie}function VN(n,e){if(n.limitType==="F")return ow(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Wu(s.field,a)}));const t=n.endAt?new hd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hd(n.startAt.position,n.startAt.inclusive):null;return ow(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vm(n,e){const t=n.filters.concat([e]);return new Cl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function dd(n,e,t){return new Cl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qd(n,e){return bg(Ei(n),Ei(e))&&n.limitType===e.limitType}function o0(n){return`${xg(Ei(n))}|lt:${n.limitType}`}function Ha(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>r0(s))).join(", ")}]`),Gd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ll(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ll(s))).join(",")),`Target(${r})`})(Ei(n))}; limitType=${n.limitType})`}function Yd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ce.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of Ru(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=iw(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,Ru(r),s)||r.endAt&&!(function(u,d,f){const m=iw(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,Ru(r),s))})(n,e)}function FN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function a0(n){return(e,t)=>{let r=!1;for(const s of Ru(n)){const a=jN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function jN(n,e,t){const r=n.field.isKeyField()?Ce.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?al(f,m):Ne(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ne(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return WI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new qt(Ce.comparator);function is(){return UN}const l0=new qt(Ce.comparator);function vu(...n){let e=l0;for(const t of n)e=e.insert(t.key,t);return e}function u0(n){let e=l0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Uo(){return Au()}function c0(){return Au()}function Au(){return new ra((n=>n.toString()),((n,e)=>n.isEqual(e)))}const BN=new qt(Ce.comparator),zN=new Xt(Ce.comparator);function Ke(...n){let e=zN;for(const t of n)e=e.add(t);return e}const $N=new Xt(je);function WN(){return $N}/**
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
 */function Og(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ld(e)?"-0":e}}function h0(n){return{integerValue:""+n}}function HN(n,e){return yN(e)?h0(e):Og(n,e)}/**
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
 */class Xd{constructor(){this._=void 0}}function qN(n,e,t){return n instanceof fd?(function(s,a){const u={fields:{[GI]:{stringValue:qI},[QI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Pg(a)&&(a=Kd(a)),a&&(u.fields[KI]=a),{mapValue:u}})(t,e):n instanceof ul?f0(n,e):n instanceof Hu?p0(n,e):(function(s,a){const u=d0(s,a),d=lw(u)+lw(s.Ee);return Om(u)&&Om(s.Ee)?h0(d):Og(s.serializer,d)})(n,e)}function GN(n,e,t){return n instanceof ul?f0(n,e):n instanceof Hu?p0(n,e):t}function d0(n,e){return n instanceof pd?(function(r){return Om(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class fd extends Xd{}class ul extends Xd{constructor(e){super(),this.elements=e}}function f0(n,e){const t=m0(e);for(const r of n.elements)t.some((s=>Ci(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Hu extends Xd{constructor(e){super(),this.elements=e}}function p0(n,e){let t=m0(e);for(const r of n.elements)t=t.filter((s=>!Ci(s,r)));return{arrayValue:{values:t}}}class pd extends Xd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function lw(n){return Vt(n.integerValue||n.doubleValue)}function m0(n){return Ng(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,t){this.field=e,this.transform=t}}function QN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ul&&s instanceof ul||r instanceof Hu&&s instanceof Hu?ol(r.elements,s.elements,Ci):r instanceof pd&&s instanceof pd?Ci(r.Ee,s.Ee):r instanceof fd&&s instanceof fd})(n.transform,e.transform)}class YN{constructor(e,t){this.version=e,this.transformResults=t}}class Xr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xr}static exists(e){return new Xr(void 0,e)}static updateTime(e){return new Xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Jd{}function g0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new y0(n.key,Xr.none()):new lc(n.key,n.data,Xr.none());{const t=n.data,r=Hn.empty();let s=new Xt(gn.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new mo(n.key,r,new lr(s.toArray()),Xr.none())}}function XN(n,e,t){n instanceof lc?(function(s,a,u){const d=s.value.clone(),f=cw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof mo?(function(s,a,u){if(!Hh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=cw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(_0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Pu(n,e,t,r){return n instanceof lc?(function(a,u,d,f){if(!Hh(a.precondition,u))return d;const m=a.value.clone(),y=hw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof mo?(function(a,u,d,f){if(!Hh(a.precondition,u))return d;const m=hw(a.fieldTransforms,f,u),y=u.data;return y.setAll(_0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return Hh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function JN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=d0(r.transform,s||null);a!=null&&(t===null&&(t=Hn.empty()),t.set(r.field,a))}return t||null}function uw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ol(r,s,((a,u)=>QN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lc extends Jd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mo extends Jd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function _0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function cw(n,e,t){const r=new Map;lt(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,GN(u,d,t[s]))}return r}function hw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,qN(a,u,e))}return r}class y0 extends Jd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZN extends Jd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&XN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Pu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Pu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=c0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=g0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Me.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ke())}isEqual(e){return this.batchId===e.batchId&&ol(this.mutations,e.mutations,((t,r)=>uw(t,r)))&&ol(this.baseMutations,e.baseMutations,((t,r)=>uw(t,r)))}}class Lg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){lt(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return BN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Lg(e,t,r,s)}}/**
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
 */class tx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,tt;function rx(n){switch(n){case X.OK:return Ne(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Ne(15467,{code:n})}}function v0(n){if(n===void 0)return rs("GRPC error has no .code"),X.UNKNOWN;switch(n){case zt.OK:return X.OK;case zt.CANCELLED:return X.CANCELLED;case zt.UNKNOWN:return X.UNKNOWN;case zt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case zt.INTERNAL:return X.INTERNAL;case zt.UNAVAILABLE:return X.UNAVAILABLE;case zt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case zt.NOT_FOUND:return X.NOT_FOUND;case zt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case zt.ABORTED:return X.ABORTED;case zt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case zt.DATA_LOSS:return X.DATA_LOSS;default:return Ne(39323,{code:n})}}(tt=zt||(zt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ix=new Gs([4294967295,4294967295],0);function dw(n){const e=UI().encode(n),t=new bI;return t.update(e),new Uint8Array(t.digest())}function fw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Gs([t,r],0),new Gs([s,a],0)]}class Mg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Eu(`Invalid padding: ${t}`);if(r<0)throw new Eu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Eu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Eu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Gs.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Gs.fromNumber(r)));return s.compare(ix)===1&&(s=new Gs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=dw(e),[r,s]=fw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Mg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=dw(e),[r,s]=fw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,uc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Zd(Me.min(),s,new qt(je),is(),Ke())}}class uc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new uc(r,t,Ke(),Ke(),Ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class E0{constructor(e,t){this.targetId=e,this.De=t}}class w0{constructor(e,t,r=_n.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class pw{constructor(){this.ve=0,this.Ce=mw(),this.Fe=_n.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ke(),t=Ke(),r=Ke();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ne(38017,{changeType:a})}})),new uc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=mw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class sx{constructor(e){this.We=e,this.Ge=new Map,this.ze=is(),this.je=bh(),this.Je=bh(),this.He=new qt(je)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ne(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Mm(a))if(r===0){const u=new Ce(a.path);this.Xe(t,u,kn.newNoDocument(u,Me.min()))}else lt(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=io(r).toUint8Array()}catch(f){if(f instanceof HI)return to("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Mg(u,s,a)}catch(f){return to(f instanceof Eu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Mm(d.target)){const f=new Ce(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,kn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Ke();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Zd(e,t,this.He,this.ze,r);return this.ze=is(),this.je=bh(),this.Je=bh(),this.He=new qt(je),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new pw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Xt(je),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Xt(je),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ge("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new pw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function bh(){return new qt(Ce.comparator)}function mw(){return new qt(Ce.comparator)}const ox={asc:"ASCENDING",desc:"DESCENDING"},ax={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lx={and:"AND",or:"OR"};class ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fm(n,e){return n.useProto3Json||Gd(e)?e:{value:e}}function md(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cx(n,e){return md(n,e.toTimestamp())}function wi(n){return lt(!!n,49232),Me.fromTimestamp((function(t){const r=ro(t);return new wt(r.seconds,r.nanos)})(n))}function Vg(n,e){return jm(n,e).canonicalString()}function jm(n,e){const t=(function(s){return new gt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function I0(n){const e=gt.fromString(n);return lt(A0(e),10190,{key:e.toString()}),e}function Um(n,e){return Vg(n.databaseId,e.path)}function sm(n,e){const t=I0(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ce(C0(t))}function S0(n,e){return Vg(n.databaseId,e)}function hx(n){const e=I0(n);return e.length===4?gt.emptyPath():C0(e)}function Bm(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function C0(n){return lt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gw(n,e,t){return{name:Um(n,e),fields:t.value.mapValue.fields}}function dx(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ne(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(lt(y===void 0||typeof y=="string",58123),_n.fromBase64String(y||"")):(lt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),_n.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?X.UNKNOWN:v0(m.code);return new pe(y,m.message||"")})(u);t=new w0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sm(n,r.document.name),a=wi(r.document.updateTime),u=r.document.createTime?wi(r.document.createTime):Me.min(),d=new Hn({mapValue:{fields:r.document.fields}}),f=kn.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new qh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sm(n,r.document),a=r.readTime?wi(r.readTime):Me.min(),u=kn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new qh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sm(n,r.document),a=r.removedTargetIds||[];t=new qh([],a,s,null)}else{if(!("filter"in e))return Ne(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new nx(s,a),d=r.targetId;t=new E0(d,u)}}return t}function fx(n,e){let t;if(e instanceof lc)t={update:gw(n,e.key,e.value)};else if(e instanceof y0)t={delete:Um(n,e.key)};else if(e instanceof mo)t={update:gw(n,e.key,e.data),updateMask:Tx(e.fieldMask)};else{if(!(e instanceof ZN))return Ne(16599,{Rt:e.type});t={verify:Um(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof fd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ul)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Hu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof pd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ne(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:cx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ne(27497)})(n,e.precondition)),t}function px(n,e){return n&&n.length>0?(lt(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?wi(s.updateTime):wi(a);return u.isEqual(Me.min())&&(u=wi(a)),new YN(u,s.transformResults||[])})(t,e)))):[]}function mx(n,e){return{documents:[S0(n,e.path)]}}function gx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=S0(n,s);const a=(function(m){if(m.length!==0)return R0(ei.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(I){return{field:qa(I.field),direction:vx(I.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Fm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function _x(n){let e=hx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){lt(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(w){const I=k0(w);return I instanceof ei&&t0(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((I=>(function(M){return new Wu(Ga(M.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let I;return I=typeof w=="object"?w.value:w,Gd(I)?null:I})(t.limit));let f=null;t.startAt&&(f=(function(w){const I=!!w.before,N=w.values||[];return new hd(N,I)})(t.startAt));let m=null;return t.endAt&&(m=(function(w){const I=!w.before,N=w.values||[];return new hd(N,I)})(t.endAt)),MN(e,s,u,a,d,"F",f,m)}function yx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function k0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ga(t.unaryFilter.field);return Wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ga(t.unaryFilter.field);return Wt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ga(t.unaryFilter.field);return Wt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ga(t.unaryFilter.field);return Wt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Wt.create(Ga(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ei.create(t.compositeFilter.filters.map((r=>k0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}})(t.compositeFilter.op))})(n):Ne(30097,{filter:n})}function vx(n){return ox[n]}function Ex(n){return ax[n]}function wx(n){return lx[n]}function qa(n){return{fieldPath:n.canonicalString()}}function Ga(n){return gn.fromServerFormat(n.fieldPath)}function R0(n){return n instanceof Wt?(function(t){if(t.op==="=="){if(rw(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NAN"}};if(nw(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rw(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NOT_NAN"}};if(nw(t.value))return{unaryFilter:{field:qa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(t.field),op:Ex(t.op),value:t.value}}})(n):n instanceof ei?(function(t){const r=t.getFilters().map((s=>R0(s)));return r.length===1?r[0]:{compositeFilter:{op:wx(t.op),filters:r}}})(n):Ne(54877,{filter:n})}function Tx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function A0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,r,s,a=Me.min(),u=Me.min(),d=_n.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.gt=e}}function Sx(n){const e=_x({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?dd(e,e.limit,"L"):e}/**
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
 */class Cx{constructor(){this.Dn=new kx}addToCollectionParentIndex(e,t){return this.Dn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(no.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(no.min())}updateCollectionGroup(e,t,r){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class kx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Xt(gt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xt(gt.comparator)).toArray()}}/**
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
 */const _w={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P0=41943040;class Wn{static withCacheSize(e){return new Wn(e,Wn.DEFAULT_COLLECTION_PERCENTILE,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.DEFAULT_COLLECTION_PERCENTILE=10,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wn.DEFAULT=new Wn(P0,Wn.DEFAULT_COLLECTION_PERCENTILE,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wn.DISABLED=new Wn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new cl(0)}static ur(){return new cl(-1)}}/**
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
 */const yw="LruGarbageCollector",Rx=1048576;function vw([n,e],[t,r]){const s=je(n,t);return s===0?je(e,r):s}class Ax{constructor(e){this.Tr=e,this.buffer=new Xt(vw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Px{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ge(yw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sl(t)?ge(yw,"Ignoring IndexedDB error during garbage collection: ",t):await Il(t)}await this.Rr(3e5)}))}}class Nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(qd.ue);const r=new Ax(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ge("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(_w)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ge("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_w):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ge("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(m=Date.now(),Wa()<=qe.DEBUG&&ge("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function xx(n,e){return new Nx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.changes=new ra((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Pu(r.mutation,s,lr.empty(),wt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ke()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ke()){const s=Uo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=vu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Uo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ke())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=is();const u=Au(),d=(function(){return Au()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof mo)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Pu(y.mutation,m,y.mutation.getFieldMask(),wt.now())):u.set(m.key,lr.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var w;return d.set(m,new Dx(y,(w=u.get(m))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Au();let s=new qt(((u,d)=>u-d)),a=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||lr.empty();y=d.applyToLocalView(m,y),r.set(f,y);const w=(s.get(d.batchId)||Ke()).add(f);s=s.insert(d.batchId,w)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,w=c0();y.forEach((I=>{if(!a.has(I)){const N=g0(t.get(I),r.get(I));N!==null&&w.set(I,N),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,w))}return Z.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return Ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):s0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Z.resolve(Uo());let d=Uu,f=a;return u.next((m=>Z.forEach(m,((y,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(y)?Z.resolve():this.remoteDocumentCache.getEntry(e,y).next((I=>{f=f.insert(y,I)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Ke()))).next((y=>({batchId:d,changes:u0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ce(t)).next((r=>{let s=vu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=vu();return this.indexManager.getCollectionParents(e,a).next((d=>Z.forEach(d,(f=>{const m=(function(w,I){return new Cl(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((w,I)=>{u=u.insert(w,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,kn.newInvalidDocument(y)))}));let d=vu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&Pu(y.mutation,m,lr.empty(),wt.now()),Yd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
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
 */class Lx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:wi(s.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Sx(s.bundledQuery),readTime:wi(s.readTime)}})(t)),Z.resolve()}}/**
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
 */class Mx{constructor(){this.overlays=new qt(Ce.comparator),this.kr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Uo();return Z.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Z.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Z.resolve()}getOverlaysForCollection(e,t,r){const s=Uo(),a=t.length+1,u=new Ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Z.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new qt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=Uo(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=Uo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return Z.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new tx(t,r));let a=this.kr.get(t);a===void 0&&(a=Ke(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class Vx{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.qr=new Xt(rn.Qr),this.$r=new Xt(rn.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new rn(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new rn(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ce(new gt([])),r=new rn(t,e),s=new rn(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ce(new gt([])),r=new rn(t,e),s=new rn(t,e+1);let a=Ke();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new rn(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class rn{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ce.comparator(e.key,t.key)||je(e.Hr,t.Hr)}static Ur(e,t){return je(e.Hr,t.Hr)||Ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Xt(rn.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new ex(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new rn(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(u)}lookupMutationBatch(e,t){return Z.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Ag:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new rn(t,0),s=new rn(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Xt(je);return t.forEach((s=>{const a=new rn(s,0),u=new rn(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;Ce.isDocumentKey(a)||(a=a.child(""));const u=new rn(new Ce(a),0);let d=new Xt(je);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),Z.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){lt(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Z.forEach(t.mutations,(s=>{const a=new rn(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new rn(t,0),s=this.Yr.firstAfterOrEqual(r);return Z.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.ni=e,this.docs=(function(){return new qt(Ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Z.resolve(r?r.document.mutableCopy():kn.newInvalidDocument(t))}getEntries(e,t){let r=is();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():kn.newInvalidDocument(s))})),Z.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=is();const u=t.path,d=new Ce(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||pN(fN(y),r)<=0||(s.has(y.key)||Yd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return Z.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ne(9500)}ri(e,t){return Z.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Ux(this)}getSize(e){return Z.resolve(this.size)}}class Ux extends bx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Z.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.persistence=e,this.ii=new ra((t=>xg(t)),bg),this.lastRemoteSnapshotVersion=Me.min(),this.highestTargetId=0,this.si=0,this.oi=new Fg,this.targetCount=0,this._i=cl.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Z.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new cl(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.hr(t),Z.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Z.waitFor(a).next((()=>s))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Z.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Z.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Z.resolve(r)}containsKey(e,t){return Z.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t){this.ai={},this.overlays={},this.ui=new qd(0),this.ci=!1,this.ci=!0,this.li=new Vx,this.referenceDelegate=e(this),this.hi=new Bx(this),this.indexManager=new Cx,this.remoteDocumentCache=(function(s){return new jx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Ix(t),this.Ti=new Lx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Fx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ge("MemoryPersistence","Starting transaction:",e);const s=new zx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Z.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class zx extends gN{constructor(e){super(),this.currentSequenceNumber=e}}class jg{constructor(e){this.persistence=e,this.Ai=new Fg,this.Ri=null}static Vi(e){return new jg(e)}get mi(){if(this.Ri)return this.Ri;throw Ne(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Z.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,(r=>{const s=Ce.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Me.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Z.or([()=>Z.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class gd{constructor(e,t){this.persistence=e,this.gi=new ra((r=>vN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=xx(this,t)}static Vi(e,t){return new gd(e,t)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Z.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Z.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Me.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$h(e.data.value)),t}Sr(e,t,r){return Z.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Ke(),s=Ke();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ug(e,t.fromCache,r,s)}}/**
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
 */class $x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return ER()?8:_N(Rn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new $x;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Wa()<=qe.DEBUG&&ge("QueryEngine","SDK will not create cache indexes for query:",Ha(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(Wa()<=qe.DEBUG&&ge("QueryEngine","Query:",Ha(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Wa()<=qe.DEBUG&&ge("QueryEngine","The SDK decides to create cache indexes for query:",Ha(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ei(t))):Z.resolve())}ps(e,t){if(aw(t))return Z.resolve(null);let r=Ei(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=dd(t,null,"F"),r=Ei(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Ke(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,dd(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return aw(t)||s.isEqual(Me.min())?Z.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Z.resolve(null):(Wa()<=qe.DEBUG&&ge("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ha(t)),this.vs(e,u,t,dN(s,Uu)).next((d=>d)))}))}bs(e,t){let r=new Xt(a0(e));return t.forEach(((s,a)=>{Yd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Wa()<=qe.DEBUG&&ge("QueryEngine","Using full collection scan to execute query:",Ha(t)),this.gs.getDocumentsMatchingQuery(e,t,no.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Bg="LocalStore",Hx=3e8;class qx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new qt(je),this.Ms=new ra((a=>xg(a)),bg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ox(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Gx(n,e,t,r){return new qx(n,e,t,r)}async function x0(n,e){const t=Ve(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Ke();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Kx(n,e){const t=Ve(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const w=m.batch,I=w.keys();let N=Z.resolve();return I.forEach((M=>{N=N.next((()=>y.getEntry(f,M))).next((F=>{const U=m.docVersions.get(M);lt(U!==null,48541),F.version.compareTo(U)<0&&(w.applyToRemoteDocument(F,m),F.isValidDocument()&&(F.setReadTime(m.commitVersion),y.addEntry(F)))}))})),N.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Ke();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function b0(n){const e=Ve(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Qx(n,e){const t=Ve(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,w)=>{const I=s.get(w);if(!I)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,w))));let N=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?N=N.withResumeToken(_n.EMPTY_BYTE_STRING,Me.min()).withLastLimboFreeSnapshotVersion(Me.min()):y.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(y.resumeToken,r)),s=s.insert(w,N),(function(F,U,ie){return F.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Hx?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(I,N,y)&&d.push(t.hi.updateTargetData(a,N))}));let f=is(),m=Ke();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Yx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(Me.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return Z.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Yx(n,e,t){let r=Ke(),s=Ke();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=is();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Me.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ge(Bg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Xx(n,e){const t=Ve(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ag),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Jx(n,e){const t=Ve(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Z.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new $s(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function zm(n,e,t){const r=Ve(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!Sl(u))throw u;ge(Bg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Ew(n,e,t){const r=Ve(n);let s=Me.min(),a=Ke();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const w=Ve(f),I=w.Ms.get(y);return I!==void 0?Z.resolve(w.Fs.get(I)):w.hi.getTargetData(m,y)})(r,u,Ei(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Me.min(),t?a:Ke()))).next((d=>(Zx(r,FN(e),d),{documents:d,qs:a})))))}function Zx(n,e,t){let r=n.xs.get(e)||Me.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class ww{constructor(){this.activeTargetIds=WN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eb{constructor(){this.Fo=new ww,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ww,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tb{xo(e){}shutdown(){}}/**
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
 */const Tw="ConnectivityMonitor";class Iw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ge(Tw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ge(Tw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dh=null;function $m(){return Dh===null?Dh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Dh++,"0x"+Dh.toString(16)}/**
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
 */const om="RestConnection",nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ud?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=$m(),d=this.Go(e,t.toUriEncodedString());ge(om,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=ki(m);return this.jo(e,d,f,r,y).then((w=>(ge(om,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw to(om,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Tl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=nb[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="WebChannelConnection";class sb extends rb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=$m();return new Promise(((d,f)=>{const m=new DI;m.setWithCredentials(!0),m.listenOnce(OI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case zh.NO_ERROR:const w=m.getResponseJson();ge(Sn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case zh.TIMEOUT:ge(Sn,`RPC '${e}' ${u} timed out`),f(new pe(X.DEADLINE_EXCEEDED,"Request time out"));break;case zh.HTTP_ERROR:const I=m.getStatus();if(ge(Sn,`RPC '${e}' ${u} failed with status:`,I,"response text:",m.getResponseText()),I>0){let N=m.getResponseJson();Array.isArray(N)&&(N=N[0]);const M=N==null?void 0:N.error;if(M&&M.status&&M.message){const F=(function(ie){const Y=ie.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(Y)>=0?Y:X.UNKNOWN})(M.status);f(new pe(F,M.message))}else f(new pe(X.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new pe(X.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ge(Sn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ge(Sn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=$m(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=VI(),d=MI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ge(Sn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const w=u.createWebChannel(y,f);this.T_(w);let I=!1,N=!1;const M=new ib({Ho:U=>{N?ge(Sn,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(I||(ge(Sn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),ge(Sn,`RPC '${e}' stream ${s} sending:`,U),w.send(U))},Yo:()=>w.close()}),F=(U,ie,Y)=>{U.listen(ie,(ne=>{try{Y(ne)}catch(B){setTimeout((()=>{throw B}),0)}}))};return F(w,yu.EventType.OPEN,(()=>{N||(ge(Sn,`RPC '${e}' stream ${s} transport opened.`),M.s_())})),F(w,yu.EventType.CLOSE,(()=>{N||(N=!0,ge(Sn,`RPC '${e}' stream ${s} transport closed`),M.__(),this.I_(w))})),F(w,yu.EventType.ERROR,(U=>{N||(N=!0,to(Sn,`RPC '${e}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),M.__(new pe(X.UNAVAILABLE,"The operation could not be completed")))})),F(w,yu.EventType.MESSAGE,(U=>{var ie;if(!N){const Y=U.data[0];lt(!!Y,16349);const ne=Y,B=(ne==null?void 0:ne.error)||((ie=ne[0])===null||ie===void 0?void 0:ie.error);if(B){ge(Sn,`RPC '${e}' stream ${s} received error:`,B);const Ie=B.status;let _e=(function(A){const D=zt[A];if(D!==void 0)return v0(D)})(Ie),x=B.message;_e===void 0&&(_e=X.INTERNAL,x="Unknown error status: "+Ie+" with message "+B.message),N=!0,M.__(new pe(_e,x)),w.close()}else ge(Sn,`RPC '${e}' stream ${s} received:`,Y),M.a_(Y)}})),F(d,LI.STAT_EVENT,(U=>{U.stat===Nm.PROXY?ge(Sn,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===Nm.NOPROXY&&ge(Sn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function am(){return typeof document<"u"?document:null}/**
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
 */function ef(n){return new ux(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ge("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="PersistentStream";class O0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new D0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(rs(t.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new pe(X.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ge(Sw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ge(Sw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ob extends O0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=dx(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Me.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Me.min():u.readTime?wi(u.readTime):Me.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Bm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Mm(f)?{documents:mx(a,f)}:{query:gx(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=T0(a,u.resumeToken);const m=Fm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Me.min())>0){d.readTime=md(a,u.snapshotVersion.toTimestamp());const m=Fm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=yx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Bm(this.serializer),t.removeTarget=e,this.k_(t)}}class ab extends O0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=px(e.writeResults,e.commitTime),r=wi(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Bm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>fx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{}class ub extends lb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new pe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,jm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new pe(X.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,jm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pe(X.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class cb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rs(t),this._a=!1):ge("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="RemoteStore";class hb{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{ia(this)&&(ge(Qo,"Restarting streams for network reachability change."),await(async function(f){const m=Ve(f);m.Ia.add(4),await cc(m),m.Aa.set("Unknown"),m.Ia.delete(4),await tf(m)})(this))}))})),this.Aa=new cb(r,s)}}async function tf(n){if(ia(n))for(const e of n.da)await e(!0)}async function cc(n){for(const e of n.da)await e(!1)}function L0(n,e){const t=Ve(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Hg(t)?Wg(t):kl(t).x_()&&$g(t,e))}function zg(n,e){const t=Ve(n),r=kl(t);t.Ta.delete(e),r.x_()&&M0(t,e),t.Ta.size===0&&(r.x_()?r.B_():ia(t)&&t.Aa.set("Unknown"))}function $g(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Me.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kl(n).H_(e)}function M0(n,e){n.Ra.$e(e),kl(n).Y_(e)}function Wg(n){n.Ra=new sx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),kl(n).start(),n.Aa.aa()}function Hg(n){return ia(n)&&!kl(n).M_()&&n.Ta.size>0}function ia(n){return Ve(n).Ia.size===0}function V0(n){n.Ra=void 0}async function db(n){n.Aa.set("Online")}async function fb(n){n.Ta.forEach(((e,t)=>{$g(n,e)}))}async function pb(n,e){V0(n),Hg(n)?(n.Aa.la(e),Wg(n)):n.Aa.set("Unknown")}async function mb(n,e,t){if(n.Aa.set("Online"),e instanceof w0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ge(Qo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _d(n,r)}else if(e instanceof qh?n.Ra.Ye(e):e instanceof E0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Me.min()))try{const r=await b0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(_n.EMPTY_BYTE_STRING,y.snapshotVersion)),M0(a,f);const w=new $s(y.target,f,m,y.sequenceNumber);$g(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ge(Qo,"Failed to raise snapshot:",r),await _d(n,r)}}async function _d(n,e,t){if(!Sl(e))throw e;n.Ia.add(1),await cc(n),n.Aa.set("Offline"),t||(t=()=>b0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ge(Qo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await tf(n)}))}function F0(n,e){return e().catch((t=>_d(n,t,e)))}async function nf(n){const e=Ve(n),t=oo(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ag;for(;gb(e);)try{const s=await Xx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,_b(e,s)}catch(s){await _d(e,s)}j0(e)&&U0(e)}function gb(n){return ia(n)&&n.Pa.length<10}function _b(n,e){n.Pa.push(e);const t=oo(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function j0(n){return ia(n)&&!oo(n).M_()&&n.Pa.length>0}function U0(n){oo(n).start()}async function yb(n){oo(n).na()}async function vb(n){const e=oo(n);for(const t of n.Pa)e.X_(t.mutations)}async function Eb(n,e,t){const r=n.Pa.shift(),s=Lg.from(r,e,t);await F0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await nf(n)}async function wb(n,e){e&&oo(n).Z_&&await(async function(r,s){if((function(u){return rx(u)&&u!==X.ABORTED})(s.code)){const a=r.Pa.shift();oo(r).N_(),await F0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await nf(r)}})(n,e),j0(n)&&U0(n)}async function Cw(n,e){const t=Ve(n);t.asyncQueue.verifyOperationInProgress(),ge(Qo,"RemoteStore received new credentials");const r=ia(t);t.Ia.add(3),await cc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await tf(t)}async function Tb(n,e){const t=Ve(n);e?(t.Ia.delete(2),await tf(t)):e||(t.Ia.add(2),await cc(t),t.Aa.set("Unknown"))}function kl(n){return n.Va||(n.Va=(function(t,r,s){const a=Ve(t);return a.ia(),new ob(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:db.bind(null,n),e_:fb.bind(null,n),n_:pb.bind(null,n),J_:mb.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Hg(n)?Wg(n):n.Aa.set("Unknown")):(await n.Va.stop(),V0(n))}))),n.Va}function oo(n){return n.ma||(n.ma=(function(t,r,s){const a=Ve(t);return a.ia(),new ab(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:yb.bind(null,n),n_:wb.bind(null,n),ea:vb.bind(null,n),ta:Eb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await nf(n)):(await n.ma.stop(),n.Pa.length>0&&(ge(Qo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new qg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gg(n,e){if(rs("AsyncQueue",`${e}: ${n}`),Sl(n))return new pe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{static emptySet(e){return new Za(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ce.comparator(t.key,r.key):(t,r)=>Ce.comparator(t.key,r.key),this.keyedMap=vu(),this.sortedSet=new qt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Za)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Za;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.fa=new qt(Ce.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ne(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class hl{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new hl(e,t,Za.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Sb{constructor(){this.queries=Rw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Ve(t),a=s.queries;s.queries=Rw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new pe(X.ABORTED,"Firestore shutting down"))}}function Rw(){return new ra((n=>o0(n)),Qd)}async function B0(n,e){const t=Ve(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new Ib,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Gg(u,`Initialization of query '${Ha(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Kg(t)}async function z0(n,e){const t=Ve(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Cb(n,e){const t=Ve(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Kg(t)}function kb(n,e,t){const r=Ve(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Kg(n){n.Da.forEach((e=>{e.next()}))}var Wm,Aw;(Aw=Wm||(Wm={})).Fa="default",Aw.Cache="cache";class $0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=hl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.key=e}}class H0{constructor(e){this.key=e}}class Rb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ke(),this.mutatedKeys=Ke(),this.Xa=a0(e),this.eu=new Za(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new kw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,w)=>{const I=s.get(y),N=Yd(this.query,w)?w:null,M=!!I&&this.mutatedKeys.has(I.key),F=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let U=!1;I&&N?I.data.isEqual(N.data)?M!==F&&(r.track({type:3,doc:N}),U=!0):this.iu(I,N)||(r.track({type:2,doc:N}),U=!0,(f&&this.Xa(N,f)>0||m&&this.Xa(N,m)<0)&&(d=!0)):!I&&N?(r.track({type:0,doc:N}),U=!0):I&&!N&&(r.track({type:1,doc:I}),U=!0,(f||m)&&(d=!0)),U&&(N?(u=u.add(N),a=F?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,w)=>(function(N,M){const F=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne(20277,{At:U})}};return F(N)-F(M)})(y.type,w.type)||this.Xa(y.doc,w.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new hl(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new kw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ke(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new H0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new W0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return hl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Qg="SyncEngine";class Ab{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Pb{constructor(e){this.key=e,this.lu=!1}}class Nb{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ra((d=>o0(d)),Qd),this.Tu=new Map,this.Iu=new Set,this.du=new qt(Ce.comparator),this.Eu=new Map,this.Au=new Fg,this.Ru={},this.Vu=new Map,this.mu=cl.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function xb(n,e,t=!0){const r=X0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await q0(r,e,t,!0),s}async function bb(n,e){const t=X0(n);await q0(t,e,!0,!1)}async function q0(n,e,t,r){const s=await Jx(n.localStore,Ei(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await Db(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&L0(n.remoteStore,s),d}async function Db(n,e,t,r,s){n.gu=(w,I,N)=>(async function(F,U,ie,Y){let ne=U.view.nu(ie);ne.Ds&&(ne=await Ew(F.localStore,U.query,!1).then((({documents:x})=>U.view.nu(x,ne))));const B=Y&&Y.targetChanges.get(U.targetId),Ie=Y&&Y.targetMismatches.get(U.targetId)!=null,_e=U.view.applyChanges(ne,F.isPrimaryClient,B,Ie);return Nw(F,U.targetId,_e._u),_e.snapshot})(n,w,I,N);const a=await Ew(n.localStore,e,!0),u=new Rb(e,a.qs),d=u.nu(a.documents),f=uc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);Nw(n,t,m._u);const y=new Ab(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function Ob(n,e,t){const r=Ve(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Qd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&zg(r.remoteStore,s.targetId),Hm(r,s.targetId)})).catch(Il)):(Hm(r,s.targetId),await zm(r.localStore,s.targetId,!0))}async function Lb(n,e){const t=Ve(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zg(t.remoteStore,r.targetId))}async function Mb(n,e,t){const r=$b(n);try{const s=await(function(u,d){const f=Ve(u),m=wt.now(),y=d.reduce(((N,M)=>N.add(M.key)),Ke());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let M=is(),F=Ke();return f.Os.getEntries(N,y).next((U=>{M=U,M.forEach(((ie,Y)=>{Y.isValidDocument()||(F=F.add(ie))}))})).next((()=>f.localDocuments.getOverlayedDocuments(N,M))).next((U=>{w=U;const ie=[];for(const Y of d){const ne=JN(Y,w.get(Y.key).overlayedDocument);ne!=null&&ie.push(new mo(Y.key,ne,JI(ne.value.mapValue),Xr.exists(!0)))}return f.mutationQueue.addMutationBatch(N,m,ie,d)})).next((U=>{I=U;const ie=U.applyToLocalDocumentSet(w,F);return f.documentOverlayCache.saveOverlays(N,U.batchId,ie)}))})).then((()=>({batchId:I.batchId,changes:u0(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new qt(je)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await hc(r,s.changes),await nf(r.remoteStore)}catch(s){const a=Gg(s,"Failed to persist write");t.reject(a)}}async function G0(n,e){const t=Ve(n);try{const r=await Qx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(lt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?lt(u.lu,14607):s.removedDocuments.size>0&&(lt(u.lu,42227),u.lu=!1))})),await hc(t,r,e)}catch(r){await Il(r)}}function Pw(n,e,t){const r=Ve(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Ve(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,w)=>{for(const I of w.wa)I.va(d)&&(m=!0)})),m&&Kg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vb(n,e,t){const r=Ve(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new qt(Ce.comparator);u=u.insert(a,kn.newNoDocument(a,Me.min()));const d=Ke().add(a),f=new Zd(Me.min(),new Map,new qt(je),u,d);await G0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Yg(r)}else await zm(r.localStore,e,!1).then((()=>Hm(r,e,t))).catch(Il)}async function Fb(n,e){const t=Ve(n),r=e.batch.batchId;try{const s=await Kx(t.localStore,e);Q0(t,r,null),K0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hc(t,s)}catch(s){await Il(s)}}async function jb(n,e,t){const r=Ve(n);try{const s=await(function(u,d){const f=Ve(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((w=>(lt(w!==null,37113),y=w.keys(),f.mutationQueue.removeMutationBatch(m,w)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);Q0(r,e,t),K0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hc(r,s)}catch(s){await Il(s)}}function K0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Q0(n,e,t){const r=Ve(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Hm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Y0(n,r)}))}function Y0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(zg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Yg(n))}function Nw(n,e,t){for(const r of t)r instanceof W0?(n.Au.addReference(r.key,e),Ub(n,r)):r instanceof H0?(ge(Qg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Y0(n,r.key)):Ne(19791,{yu:r})}function Ub(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ge(Qg,"New document in limbo: "+t),n.Iu.add(r),Yg(n))}function Yg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ce(gt.fromString(e)),r=n.mu.next();n.Eu.set(r,new Pb(t)),n.du=n.du.insert(t,r),L0(n.remoteStore,new $s(Ei(Dg(t.path)),r,"TargetPurposeLimboResolution",qd.ue))}}async function hc(n,e,t){const r=Ve(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const w=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=Ug.Es(f.targetId,m);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=Ve(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Z.forEach(m,(I=>Z.forEach(I.Is,(N=>y.persistence.referenceDelegate.addReference(w,I.targetId,N))).next((()=>Z.forEach(I.ds,(N=>y.persistence.referenceDelegate.removeReference(w,I.targetId,N)))))))))}catch(w){if(!Sl(w))throw w;ge(Bg,"Failed to update sequence numbers: "+w)}for(const w of m){const I=w.targetId;if(!w.fromCache){const N=y.Fs.get(I),M=N.snapshotVersion,F=N.withLastLimboFreeSnapshotVersion(M);y.Fs=y.Fs.insert(I,F)}}})(r.localStore,a))}async function Bb(n,e){const t=Ve(n);if(!t.currentUser.isEqual(e)){ge(Qg,"User change. New user:",e.toKey());const r=await x0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new pe(X.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hc(t,r.Bs)}}function zb(n,e){const t=Ve(n),r=t.Eu.get(e);if(r&&r.lu)return Ke().add(r.key);{let s=Ke();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function X0(n){const e=Ve(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=G0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vb.bind(null,e),e.hu.J_=Cb.bind(null,e.eventManager),e.hu.pu=kb.bind(null,e.eventManager),e}function $b(n){const e=Ve(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jb.bind(null,e),e}class yd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ef(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Gx(this.persistence,new Wx,e.initialUser,this.serializer)}Du(e){return new N0(jg.Vi,this.serializer)}bu(e){return new eb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yd.provider={build:()=>new yd};class Wb extends yd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){lt(this.persistence.referenceDelegate instanceof gd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Px(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Wn.withCacheSize(this.cacheSizeBytes):Wn.DEFAULT;return new N0((r=>gd.Vi(r,t)),this.serializer)}}class qm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bb.bind(null,this.syncEngine),await Tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Sb})()}createDatastore(e){const t=ef(e.databaseInfo.databaseId),r=(function(a){return new sb(a)})(e.databaseInfo);return(function(a,u,d,f){return new ub(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new hb(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Pw(this.syncEngine,t,0)),(function(){return Iw.C()?new Iw:new tb})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const w=new Nb(s,a,u,d,f,m);return y&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Ve(s);ge(Qo,"RemoteStore shutting down."),a.Ia.add(5),await cc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qm.provider={build:()=>new qm};/**
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
 */class J0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):rs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="FirestoreClient";class Hb{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Cn.UNAUTHENTICATED,this.clientId=Rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ge(ao,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ge(ao,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ks;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function lm(n,e){n.asyncQueue.verifyOperationInProgress(),ge(ao,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await x0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{to("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ge("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{to("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function xw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qb(n);ge(ao,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Cw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Cw(e.remoteStore,s))),n._onlineComponents=e}async function qb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ge(ao,"Using user provided OfflineComponentProvider");try{await lm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===X.FAILED_PRECONDITION||s.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;to("Error using user provided cache. Falling back to memory cache: "+t),await lm(n,new yd)}}else ge(ao,"Using default OfflineComponentProvider"),await lm(n,new Wb(void 0));return n._offlineComponents}async function Z0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ge(ao,"Using user provided OnlineComponentProvider"),await xw(n,n._uninitializedComponentsProvider._online)):(ge(ao,"Using default OnlineComponentProvider"),await xw(n,new qm))),n._onlineComponents}function Gb(n){return Z0(n).then((e=>e.syncEngine))}async function Gm(n){const e=await Z0(n),t=e.eventManager;return t.onListen=xb.bind(null,e.syncEngine),t.onUnlisten=Ob.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Lb.bind(null,e.syncEngine),t}function Kb(n,e,t={}){const r=new Ks;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new J0({next:I=>{y.Ou(),u.enqueueAndForget((()=>z0(a,w))),I.fromCache&&f.source==="server"?m.reject(new pe(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(I)},error:I=>m.reject(I)}),w=new $0(d,y,{includeMetadataChanges:!0,ka:!0});return B0(a,w)})(await Gm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function eS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bw=new Map;/**
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
 */const tS="firestore.googleapis.com",Dw=!0;class Ow{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tS,this.ssl=Dw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Dw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rx)throw new pe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rf{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ow({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ow(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new tN;switch(r.type){case"firstParty":return new sN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new pe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=bw.get(t);r&&(ge("ComponentProvider","Removing Datastore"),bw.delete(t),r.terminate())})(this),Promise.resolve()}}function Qb(n,e,t,r={}){var s;n=Yr(n,rf);const a=ki(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Md(`https://${f}`),Vd("Firestore",!0)),u.host!==tS&&u.host!==f&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Zi(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=Cn.MOCK_USER;else{y=pg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new pe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Cn(I)}n._authCredentials=new nN(new jI(y,w))}}/**
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
 */class as{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new as(this.firestore,e,this._query)}}class jt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}toJSON(){return{type:jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ac(t,jt._jsonSchema))return new jt(e,r||null,new Ce(gt.fromString(t.referencePath)))}}jt._jsonSchemaVersion="firestore/documentReference/1.0",jt._jsonSchema={type:Ht("string",jt._jsonSchemaVersion),referencePath:Ht("string")};class Ys extends as{constructor(e,t,r){super(e,t,Dg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new Ce(e))}withConverter(e){return new Ys(this.firestore,e,this._path)}}function lo(n,e,...t){if(n=ut(n),BI("collection","path",e),n instanceof rf){const r=gt.fromString(e,...t);return GE(r),new Ys(n,null,r)}{if(!(n instanceof jt||n instanceof Ys))throw new pe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(e,...t));return GE(r),new Ys(n.firestore,null,r)}}function vd(n,e,...t){if(n=ut(n),arguments.length===1&&(e=Rg.newId()),BI("doc","path",e),n instanceof rf){const r=gt.fromString(e,...t);return qE(r),new jt(n,null,new Ce(r))}{if(!(n instanceof jt||n instanceof Ys))throw new pe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(e,...t));return qE(r),new jt(n.firestore,n instanceof Ys?n.converter:null,new Ce(r))}}/**
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
 */const Lw="AsyncQueue";class Mw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new D0(this,"async_queue_retry"),this.oc=()=>{const r=am();r&&ge(Lw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=am();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=am();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ks;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Sl(e))throw e;ge(Lw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,rs("INTERNAL UNHANDLED ERROR: ",Vw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=qg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ne(47125,{hc:Vw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Vw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Fw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Yo extends rf{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Mw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mw(e),this._firestoreClient=void 0,await e}}}function Yb(n,e){const t=typeof n=="object"?n:Ud(),r=typeof n=="string"?n:ud,s=rc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=fg("firestore");a&&Qb(s,...a)}return s}function Xg(n){if(n._terminated)throw new pe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xb(n),n._firestoreClient}function Xb(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new TN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,eS(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Hb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class Rr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rr(_n.fromBase64String(e))}catch(t){throw new pe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rr(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ac(e,Rr._jsonSchema))return Rr.fromBase64String(e.bytes)}}Rr._jsonSchemaVersion="firestore/bytes/1.0",Rr._jsonSchema={type:Ht("string",Rr._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class sf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ti._jsonSchemaVersion}}static fromJSON(e){if(ac(e,Ti._jsonSchema))return new Ti(e.latitude,e.longitude)}}Ti._jsonSchemaVersion="firestore/geoPoint/1.0",Ti._jsonSchema={type:Ht("string",Ti._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class Ii{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ac(e,Ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ii(e.vectorValues);throw new pe(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Ht("string",Ii._jsonSchemaVersion),vectorValues:Ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=/^__.*__$/;class Zb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mo(e,this.data,this.fieldMask,t,this.fieldTransforms):new lc(e,this.data,t,this.fieldTransforms)}}class nS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne(40011,{Ec:n})}}class af{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ed(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(rS(this.Ec)&&Jb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class eD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ef(e)}Dc(e,t,r,s=!1){return new af({Ec:e,methodName:t,bc:r,path:gn.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lf(n){const e=n._freezeSettings(),t=ef(n._databaseId);return new eD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iS(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Zg("Data must be an object, but it was:",u,r);const d=sS(r,u);let f,m;if(a.merge)f=new lr(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const I=Km(e,w,t);if(!u.contains(I))throw new pe(X.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);aS(y,I)||y.push(I)}f=new lr(y),m=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,m=u.fieldTransforms;return new Zb(new Hn(d),f,m)}class uf extends of{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uf}}function tD(n,e,t){return new af({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Jg extends of{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=tD(this,e,!0),r=this.vc.map((a=>Rl(a,t))),s=new ul(r);return new KN(e.path,s)}isEqual(e){return e instanceof Jg&&Zi(this.vc,e.vc)}}function nD(n,e,t,r){const s=n.Dc(1,e,t);Zg("Data must be an object, but it was:",s,r);const a=[],u=Hn.empty();po(r,((f,m)=>{const y=e_(e,f,t);m=ut(m);const w=s.gc(y);if(m instanceof uf)a.push(y);else{const I=Rl(m,w);I!=null&&(a.push(y),u.set(y,I))}}));const d=new lr(a);return new nS(u,d,s.fieldTransforms)}function rD(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Km(e,r,t)],f=[s];if(a.length%2!=0)throw new pe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)d.push(Km(e,a[I])),f.push(a[I+1]);const m=[],y=Hn.empty();for(let I=d.length-1;I>=0;--I)if(!aS(m,d[I])){const N=d[I];let M=f[I];M=ut(M);const F=u.gc(N);if(M instanceof uf)m.push(N);else{const U=Rl(M,F);U!=null&&(m.push(N),y.set(N,U))}}const w=new lr(m);return new nS(y,w,u.fieldTransforms)}function iD(n,e,t,r=!1){return Rl(t,n.Dc(r?4:3,e))}function Rl(n,e){if(oS(n=ut(n)))return Zg("Unsupported field value:",e,n),sS(n,e);if(n instanceof of)return(function(r,s){if(!rS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=Rl(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=wt.fromDate(r);return{timestampValue:md(s.serializer,a)}}if(r instanceof wt){const a=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:md(s.serializer,a)}}if(r instanceof Ti)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rr)return{bytesValue:T0(s.serializer,r._byteString)};if(r instanceof jt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Vg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ii)return(function(u,d){return{mapValue:{fields:{[YI]:{stringValue:XI},[cd]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Og(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Hd(r)}`)})(n,e)}function sS(n,e){const t={};return WI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):po(n,((r,s)=>{const a=Rl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function oS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof Ti||n instanceof Rr||n instanceof jt||n instanceof of||n instanceof Ii)}function Zg(n,e,t){if(!oS(t)||!zI(t)){const r=Hd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Km(n,e,t){if((e=ut(e))instanceof sf)return e._internalPath;if(typeof e=="string")return e_(n,e);throw Ed("Field path arguments must be of type string or ",n,!1,void 0,t)}const sD=new RegExp("[~\\*/\\[\\]]");function e_(n,e,t){if(e.search(sD)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new sf(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ed(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new pe(X.INVALID_ARGUMENT,d+n+f)}function aS(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class lS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oD extends lS{data(){return super.data()}}function cf(n,e){return typeof e=="string"?e_(n,e):e instanceof sf?e._internalPath:e._delegate._internalPath}/**
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
 */function uS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new pe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class t_{}class n_ extends t_{}function dl(n,e,...t){let r=[];e instanceof t_&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof r_)).length,d=a.filter((f=>f instanceof hf)).length;if(u>1||u>0&&d>0)throw new pe(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class hf extends n_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new hf(e,t,r)}_apply(e){const t=this._parse(e);return hS(e._query,t),new as(e.firestore,e.converter,Vm(e._query,t))}_parse(e){const t=lf(e.firestore);return(function(a,u,d,f,m,y,w){let I;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new pe(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Uw(w,y);const M=[];for(const F of w)M.push(jw(f,a,F));I={arrayValue:{values:M}}}else I=jw(f,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Uw(w,y),I=iD(d,u,w,y==="in"||y==="not-in");return Wt.create(m,y,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cS(n,e,t){const r=e,s=cf("where",n);return hf._create(s,r,t)}class r_ extends t_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new r_(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ei.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)hS(u,f),u=Vm(u,f)})(e._query,t),new as(e.firestore,e.converter,Vm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class i_ extends n_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new i_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new pe(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new pe(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wu(a,u)})(e._query,this._field,this._direction);return new as(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new Cl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function qu(n,e="asc"){const t=e,r=cf("orderBy",n);return i_._create(r,t)}class s_ extends n_{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new s_(e,t,r)}_apply(e){return new as(e.firestore,e.converter,dd(e._query,this._limit,this._limitType))}}function Gu(n){return hN("limit",n),s_._create("limit",n,"F")}function jw(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new pe(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s0(e)&&t.indexOf("/")!==-1)throw new pe(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(gt.fromString(t));if(!Ce.isDocumentKey(r))throw new pe(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tw(n,new Ce(r))}if(t instanceof jt)return tw(n,t._key);throw new pe(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hd(t)}.`)}function Uw(n,e){if(!Array.isArray(n)||n.length===0)throw new pe(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hS(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new pe(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new pe(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class aD{convertValue(e,t="none"){switch(so(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(io(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return po(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[cd].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>Vt(u.doubleValue)));return new Ii(a)}convertGeoPoint(e){return new Ti(Vt(e.latitude),Vt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Kd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bu(e));default:return null}}convertTimestamp(e){const t=ro(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=gt.fromString(e);lt(A0(r),9688,{name:e});const s=new zu(r.get(1),r.get(3)),a=new Ce(r.popFirst(5));return s.isEqual(t)||rs(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function dS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $o extends lS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(cf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=$o._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}$o._jsonSchemaVersion="firestore/documentSnapshot/1.0",$o._jsonSchema={type:Ht("string",$o._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Gh extends $o{data(e={}){return super.data(e)}}class Wo{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new wu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Gh(this._firestore,this._userDataWriter,r.key,r,new wu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Gh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new wu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Gh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new wu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:lD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:n})}}Wo._jsonSchemaVersion="firestore/querySnapshot/1.0",Wo._jsonSchema={type:Ht("string",Wo._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class o_ extends aD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,t)}}function uD(n){n=Yr(n,as);const e=Yr(n.firestore,Yo),t=Xg(e),r=new o_(e);return uS(n._query),Kb(t,n._query).then((s=>new Wo(e,r,n,s)))}function cD(n,e,t){n=Yr(n,jt);const r=Yr(n.firestore,Yo),s=dS(n.converter,e);return a_(r,[iS(lf(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xr.none())])}function fS(n,e,t,...r){n=Yr(n,jt);const s=Yr(n.firestore,Yo),a=lf(s);let u;return u=typeof(e=ut(e))=="string"||e instanceof sf?rD(a,"updateDoc",n._key,e,t,r):nD(a,"updateDoc",n._key,e),a_(s,[u.toMutation(n._key,Xr.exists(!0))])}function hD(n,e){const t=Yr(n.firestore,Yo),r=vd(n),s=dS(n.converter,e);return a_(t,[iS(lf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Xr.exists(!1))]).then((()=>r))}function Ku(n,...e){var t,r,s;n=ut(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Fw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Fw(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,m,y;if(n instanceof jt)m=Yr(n.firestore,Yo),y=Dg(n._key.path),f={next:w=>{e[u]&&e[u](dD(m,n,w))},error:e[u+1],complete:e[u+2]};else{const w=Yr(n,as);m=Yr(w.firestore,Yo),y=w._query;const I=new o_(m);f={next:N=>{e[u]&&e[u](new Wo(m,I,w,N))},error:e[u+1],complete:e[u+2]},uS(n._query)}return(function(I,N,M,F){const U=new J0(F),ie=new $0(N,U,M);return I.asyncQueue.enqueueAndForget((async()=>B0(await Gm(I),ie))),()=>{U.Ou(),I.asyncQueue.enqueueAndForget((async()=>z0(await Gm(I),ie)))}})(Xg(m),y,d,f)}function a_(n,e){return(function(r,s){const a=new Ks;return r.asyncQueue.enqueueAndForget((async()=>Mb(await Gb(r),s,a))),a.promise})(Xg(n),e)}function dD(n,e,t){const r=t.docs.get(e._key),s=new o_(n);return new $o(n,s,e._key,r,new wu(t.hasPendingWrites,t.fromCache),e.converter)}function fD(...n){return new Jg("arrayUnion",n)}(function(e,t=!0){(function(s){Tl=s})(ho),eo(new es("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Yo(new rN(r.getProvider("auth-internal")),new oN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new pe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Pr(BE,zE,e),Pr(BE,zE,"esm2017")})();var Bw={};const zw="@firebase/database",$w="1.0.20";/**
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
 */let pS="";function pD(n){pS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),on(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ai(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mD(e)}}catch{}return new gD},Bo=mS("localStorage"),_D=mS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new jd("@firebase/database"),yD=(function(){let n=1;return function(){return n++}})(),gS=function(n){const e=bR(n),t=new AR;t.update(e);const r=t.digest();return dg.encodeByteArray(r)},dc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=dc.apply(null,r):typeof r=="object"?e+=on(r):e+=r,e+=" "}return e};let Nu=null,Ww=!0;const vD=function(n,e){ce(!0,"Can't turn on custom loggers persistently."),el.logLevel=qe.VERBOSE,Nu=el.log.bind(el)},mn=function(...n){if(Ww===!0&&(Ww=!1,Nu===null&&_D.get("logging_enabled")===!0&&vD()),Nu){const e=dc.apply(null,n);Nu(e)}},fc=function(n){return function(...e){mn(n,...e)}},Qm=function(...n){const e="FIREBASE INTERNAL ERROR: "+dc(...n);el.error(e)},ss=function(...n){const e=`FIREBASE FATAL ERROR: ${dc(...n)}`;throw el.error(e),new Error(e)},Kn=function(...n){const e="FIREBASE WARNING: "+dc(...n);el.warn(e)},ED=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},df=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},fl="[MIN_NAME]",Xo="[MAX_NAME]",sa=function(n,e){if(n===e)return 0;if(n===fl||e===Xo)return-1;if(e===fl||n===Xo)return 1;{const t=Hw(n),r=Hw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},TD=function(n,e){return n===e?0:n<e?-1:1},cu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+on(e))},l_=function(n){if(typeof n!="object"||n===null)return on(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=on(e[r]),t+=":",t+=l_(n[e[r]]);return t+="}",t},_S=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function An(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const yS=function(n){ce(!df(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let w="";for(f=0;f<64;f+=8){let I=parseInt(y.substr(f,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},ID=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const kD=new RegExp("^-?(0*)\\d{1,10}$"),RD=-2147483648,AD=2147483647,Hw=function(n){if(kD.test(n)){const e=Number(n);if(e>=RD&&e<=AD)return e}return null},Al=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},PD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ND{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,or(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(mn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kn(e)}}class Kh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="5",vS="v",ES="s",wS="r",TS="f",IS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,SS="ls",CS="p",Ym="ac",kS="websocket",RS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function PS(n,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let r;if(e===kS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===RS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bD(n)&&(t.ns=n.namespace);const s=[];return An(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.counters_={}}incrementCounter(e,t=1){Ai(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return aR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={},cm={};function c_(n){const e=n.toString();return um[e]||(um[e]=new DD),um[e]}function OD(n,e){const t=n.toString();return cm[t]||(cm[t]=e()),cm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Al(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="start",MD="close",VD="pLPCommand",FD="pRTLPCB",NS="id",xS="pw",bS="ser",jD="cb",UD="seg",BD="ts",zD="d",$D="dframe",DS=1870,OS=30,WD=DS-OS,HD=25e3,qD=3e4;class Qa{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fc(e),this.stats_=c_(t),this.urlFn=f=>(this.appCheckToken&&(f[Ym]=this.appCheckToken),PS(t,RS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new LD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qD)),wD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new h_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===qw)this.id=d,this.password=f;else if(u===MD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[qw]="t",r[bS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vS]=u_,this.transportSessionId&&(r[ES]=this.transportSessionId),this.lastSessionId&&(r[SS]=this.lastSessionId),this.applicationId&&(r[CS]=this.applicationId),this.appCheckToken&&(r[Ym]=this.appCheckToken),typeof location<"u"&&location.hostname&&IS.test(location.hostname)&&(r[wS]=TS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qa.forceAllow_=!0}static forceDisallow(){Qa.forceDisallow_=!0}static isAvailable(){return Qa.forceAllow_?!0:!Qa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ID()&&!SD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=on(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=UT(t),s=_S(r,WD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[$D]="t",r[NS]=e,r[xS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=on(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class h_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yD(),window[VD+this.uniqueCallbackIdentifier]=e,window[FD+this.uniqueCallbackIdentifier]=t,this.myIFrame=h_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){mn("frame writing exception"),d.stack&&mn(d.stack),mn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[NS]=this.myID,e[xS]=this.myPW,e[bS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+OS+r.length<=DS;){const u=this.pendingSegs.shift();r=r+"&"+UD+s+"="+u.seg+"&"+BD+s+"="+u.ts+"&"+zD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(HD)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{mn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=16384,KD=45e3;let wd=null;typeof MozWebSocket<"u"?wd=MozWebSocket:typeof WebSocket<"u"&&(wd=WebSocket);class Gr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fc(this.connId),this.stats_=c_(t),this.connURL=Gr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[vS]=u_,typeof location<"u"&&location.hostname&&IS.test(location.hostname)&&(u[wS]=TS),t&&(u[ES]=t),r&&(u[SS]=r),s&&(u[Ym]=s),a&&(u[CS]=a),PS(e,kS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bo.set("previous_websocket_failure",!0);try{let r;vR(),this.mySock=new wd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Gr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&wd!==null&&!Gr.forceDisallow_}static previouslyFailed(){return Bo.isInMemoryStorage||Bo.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Mu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=on(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=_S(t,GD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gr.responsesRequiredToBeHealthy=2;Gr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{static get ALL_TRANSPORTS(){return[Qa,Gr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Gr&&Gr.isAvailable();let r=t&&!Gr.previouslyFailed();if(e.webSocketOnly&&(t||Kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gr];else{const s=this.transports_=[];for(const a of Qu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Qu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=6e4,YD=5e3,XD=10*1024,JD=100*1024,hm="t",Gw="d",ZD="s",Kw="r",e2="e",Qw="o",Yw="a",Xw="n",Jw="p",t2="h";class n2{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fc("c:"+this.id+":"),this.transportManager_=new Qu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=xu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hm in e){const t=e[hm];t===Yw?this.upgradeIfSecondaryHealthy_():t===Kw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=cu("t",e),r=cu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=cu("t",e),r=cu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=cu(hm,e);if(Gw in e){const r=e[Gw];if(t===t2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Xw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ZD?this.onConnectionShutdown_(r):t===Kw?this.onReset_(r):t===e2?Qm("Server Error: "+r):t===Qw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),u_!==r&&Kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),xu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends MS{static getInstance(){return new Td}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=32,eT=768;class ht{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ot(){return new ht("")}function Ue(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function uo(n){return n.pieces_.length-n.pieceNum_}function pt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ht(n.pieces_,e)}function d_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function r2(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Yu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function VS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ht(e,0)}function Ft(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ht)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new ht(t,0)}function We(n){return n.pieceNum_>=n.pieces_.length}function qn(n,e){const t=Ue(n),r=Ue(e);if(t===null)return e;if(t===r)return qn(pt(n),pt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function i2(n,e){const t=Yu(n,0),r=Yu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=sa(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function f_(n,e){if(uo(n)!==uo(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Ar(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(uo(n)>uo(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class s2{constructor(e,t){this.errorPrefix_=t,this.parts_=Yu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fd(this.parts_[r]);FS(this)}}function o2(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fd(e),FS(n)}function a2(n){const e=n.parts_.pop();n.byteLength_-=Fd(e),n.parts_.length>0&&(n.byteLength_-=1)}function FS(n){if(n.byteLength_>eT)throw new Error(n.errorPrefix_+"has a key path longer than "+eT+" bytes ("+n.byteLength_+").");if(n.parts_.length>Zw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zw+") or object contains a cycle "+jo(n))}function jo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends MS{static getInstance(){return new p_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=1e3,l2=300*1e3,tT=30*1e3,u2=1.3,c2=3e4,h2="server_kill",nT=3;class Ji extends LS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=Ji.nextPersistentConnectionId_++,this.log_=fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hu,this.maxReconnectDelay_=l2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");p_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Td.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(on(a)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Gi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;Ji.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ai(e,"w")){const r=rl(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=kR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+on(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qm("Unrecognized action received from server: "+on(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>c2&&(this.reconnectDelay_=hu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*u2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ji.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(w){ce(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?mn("getToken() completed but was canceled"):(mn("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,d=new n2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,N=>{Kn(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(h2)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&Kn(w),f())}}}interrupt(e){mn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zh(this.interruptReasons_)&&(this.reconnectDelay_=hu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>l_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new ht(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){mn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nT&&(this.reconnectDelay_=tT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+pS.replace(/\./g,"-")]=1,mg()?e["framework.cordova"]=1:HT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Td.getInstance().currentlyOnline();return Zh(this.interruptReasons_)&&e}}Ji.nextPersistentConnectionId_=0;Ji.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new He(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new He(fl,e),s=new He(fl,t);return this.compare(r,s)!==0}minPost(){return He.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh;class jS extends ff{static get __EMPTY_NODE(){return Oh}static set __EMPTY_NODE(e){Oh=e}compare(e,t){return sa(e.name,t.name)}isDefinedOn(e){throw yl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return He.MIN}maxPost(){return new He(Xo,Oh)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,Oh)}toString(){return".key"}}const tl=new jS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class sn{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??sn.RED,this.left=s??Gn.EMPTY_NODE,this.right=a??Gn.EMPTY_NODE}copy(e,t,r,s,a){return new sn(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Gn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}sn.RED=!0;sn.BLACK=!1;class d2{copy(e,t,r,s,a){return this}insert(e,t,r){return new sn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gn{constructor(e,t=Gn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,sn.BLACK,null,null))}remove(e){return new Gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Lh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Lh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Lh(this.root_,null,this.comparator_,!0,e)}}Gn.EMPTY_NODE=new d2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(n,e){return sa(n.name,e.name)}function m_(n,e){return sa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xm;function p2(n){Xm=n}const US=function(n){return typeof n=="number"?"number:"+yS(n):"string:"+n},BS=function(n){if(n.isLeafNode()){const e=n.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ai(e,".sv"),"Priority must be a string or number.")}else ce(n===Xm||n.isEmpty(),"priority of unexpected type.");ce(n===Xm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rT;class nn{static set __childrenNodeConstructor(e){rT=e}static get __childrenNodeConstructor(){return rT}constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return We(e)?this:Ue(e)===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ue(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ce(r!==".priority"||uo(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+US(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=yS(this.value_):e+=this.value_,this.lazyHash_=gS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=nn.VALUE_TYPE_ORDER.indexOf(t),a=nn.VALUE_TYPE_ORDER.indexOf(r);return ce(s>=0,"Unknown leaf type: "+t),ce(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zS,$S;function m2(n){zS=n}function g2(n){$S=n}class _2 extends ff{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?sa(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return He.MIN}maxPost(){return new He(Xo,new nn("[PRIORITY-POST]",$S))}makePost(e,t){const r=zS(e);return new He(t,new nn("[PRIORITY-POST]",r))}toString(){return".priority"}}const Nt=new _2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=Math.log(2);class v2{constructor(e){const t=a=>parseInt(Math.log(a)/y2,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Id=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let w,I;if(y===0)return null;if(y===1)return w=n[f],I=t?t(w):w,new sn(I,w.node,sn.BLACK,null,null);{const N=parseInt(y/2,10)+f,M=s(f,N),F=s(N+1,m);return w=n[N],I=t?t(w):w,new sn(I,w.node,sn.BLACK,M,F)}},a=function(f){let m=null,y=null,w=n.length;const I=function(M,F){const U=w-M,ie=w;w-=M;const Y=s(U+1,ie),ne=n[U],B=t?t(ne):ne;N(new sn(B,ne.node,F,null,Y))},N=function(M){m?(m.left=M,m=M):(y=M,m=M)};for(let M=0;M<f.count;++M){const F=f.nextBitIsOne(),U=Math.pow(2,f.count-(M+1));F?I(U,sn.BLACK):(I(U,sn.BLACK),I(U,sn.RED))}return y},u=new v2(n.length),d=a(u);return new Gn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dm;const za={};class Xi{static get Default(){return ce(za&&Nt,"ChildrenNode.ts has not been loaded"),dm=dm||new Xi({".priority":za},{".priority":Nt}),dm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=rl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gn?t:null}hasIndex(e){return Ai(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==tl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(He.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=Id(r,e.getCompare()):d=za;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new Xi(y,m)}addToIndexes(e,t){const r=ed(this.indexes_,(s,a)=>{const u=rl(this.indexSet_,a);if(ce(u,"Missing index implementation for "+a),s===za)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(He.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),Id(d,u.getCompare())}else return za;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new He(e.name,d))),f.insert(e,e.node)}});return new Xi(r,this.indexSet_)}removeFromIndexes(e,t){const r=ed(this.indexes_,s=>{if(s===za)return s;{const a=t.get(e.name);return a?s.remove(new He(e.name,a)):s}});return new Xi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;class xe{static get EMPTY_NODE(){return du||(du=new xe(new Gn(m_),null,Xi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BS(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||du}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?du:t}}getChild(e){const t=Ue(e);return t===null?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new He(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?du:this.priorityNode_;return new xe(s,u,a)}}updateChild(e,t){const r=Ue(e);if(r===null)return t;{ce(Ue(e)!==".priority"||uo(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(pt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(Nt,(u,d)=>{t[u]=d.val(e),r++,a&&xe.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+US(this.getPriority().val())+":"),this.forEachChild(Nt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":gS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new He(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new He(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new He(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,He.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pc?-1:0}withIndex(e){if(e===tl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===tl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Nt),s=t.getIterator(Nt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===tl?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class E2 extends xe{constructor(){super(new Gn(m_),xe.EMPTY_NODE,Xi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const pc=new E2;Object.defineProperties(He,{MIN:{value:new He(fl,xe.EMPTY_NODE)},MAX:{value:new He(Xo,pc)}});jS.__EMPTY_NODE=xe.EMPTY_NODE;nn.__childrenNodeConstructor=xe;p2(pc);g2(pc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=!0;function $t(n,e=null){if(n===null)return xe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new nn(t,$t(e))}if(!(n instanceof Array)&&w2){const t=[];let r=!1;if(An(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=$t(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new He(u,f)))}}),t.length===0)return xe.EMPTY_NODE;const a=Id(t,f2,u=>u.name,m_);if(r){const u=Id(t,Nt.getCompare());return new xe(a,$t(e),new Xi({".priority":u},{".priority":Nt}))}else return new xe(a,$t(e),Xi.Default)}else{let t=xe.EMPTY_NODE;return An(n,(r,s)=>{if(Ai(n,r)&&r.substring(0,1)!=="."){const a=$t(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority($t(e))}}m2($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2 extends ff{constructor(e){super(),this.indexPath_=e,ce(!We(e)&&Ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?sa(e.name,t.name):a}makePost(e,t){const r=$t(e),s=xe.EMPTY_NODE.updateChild(this.indexPath_,r);return new He(t,s)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,pc);return new He(Xo,e)}toString(){return Yu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2 extends ff{compare(e,t){const r=e.node.compareTo(t.node);return r===0?sa(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,t){const r=$t(e);return new He(t,r)}toString(){return".value"}}const S2=new I2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(n){return{type:"value",snapshotNode:n}}function pl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Xu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ju(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function C2(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ce(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Xu(t,d)):ce(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(pl(t,r)):u.trackChildChange(Ju(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Nt,(s,a)=>{t.hasChild(s)||r.trackChildChange(Xu(s,a))}),t.isLeafNode()||t.forEachChild(Nt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Ju(s,a,u))}else r.trackChildChange(pl(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.indexedFilter_=new g_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zu.getStartPost_(e),this.endPost_=Zu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new He(t,r))||(r=xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=xe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(xe.EMPTY_NODE);const a=this;return t.forEachChild(Nt,(u,d)=>{a.matches(new He(u,d))||(s=s.updateImmediateChild(u,xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Zu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new He(t,r))||(r=xe.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=xe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=xe.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(xe.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(I,N)=>w(N,I)}else u=this.index_.getCompare();const d=e;ce(d.numChildren()===this.limit_,"");const f=new He(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const w=d.getImmediateChild(t);let I=s.getChildAfterChild(this.index_,m,this.reverse_);for(;I!=null&&(I.name===t||d.hasChild(I.name));)I=s.getChildAfterChild(this.index_,I,this.reverse_);const N=I==null?1:u(I,f);if(y&&!r.isEmpty()&&N>=0)return a!=null&&a.trackChildChange(Ju(t,r,w)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Xu(t,w));const F=d.updateImmediateChild(t,xe.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a!=null&&a.trackChildChange(pl(I.name,I.node)),F.updateImmediateChild(I.name,I.node)):F}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Xu(m.name,m.node)),a.trackChildChange(pl(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,xe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fl}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nt}copy(){const e=new __;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function R2(n){return n.loadsAllData()?new g_(n.getIndex()):n.hasLimit()?new k2(n):new Zu(n)}function iT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Nt?t="$priority":n.index_===S2?t="$value":n.index_===tl?t="$key":(ce(n.index_ instanceof T2,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=on(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=on(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+on(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=on(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+on(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function sT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Nt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends LS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=fc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Sd.getListenId_(e,r),d={};this.listens_[u]=d;const f=iT(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let w=y;if(m===404&&(w=null,m=null),m===null&&this.onDataUpdate_(a,w,!1,r),rl(this.listens_,u)===d){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",s(I,null)}})}unlisten(e,t){const r=Sd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=iT(e._queryParams),r=e._path.toString(),s=new Gi;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Mu(d.responseText)}catch{Kn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Kn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){return{value:null,children:new Map}}function Pl(n,e,t){if(We(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ue(e);n.children.has(r)||n.children.set(r,Cd());const s=n.children.get(r);e=pt(e),Pl(s,e,t)}}function Jm(n,e){if(We(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Nt,(r,s)=>{Pl(n,new ht(r),s)}),Jm(n,e)}}else if(n.children.size>0){const t=Ue(e);return e=pt(e),n.children.has(t)&&Jm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Zm(n,e,t){n.value!==null?t(e,n.value):P2(n,(r,s)=>{const a=new ht(e.toString()+"/"+r);Zm(s,a,t)})}function P2(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&An(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=10*1e3,x2=30*1e3,b2=300*1e3;class D2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new N2(e);const r=oT+(x2-oT)*Math.random();xu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;An(e,(s,a)=>{a>0&&Ai(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),xu(this.reportStats_.bind(this),Math.floor(Math.random()*2*b2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qr||(Qr={}));function HS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function y_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function v_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Qr.ACK_USER_WRITE,this.source=HS()}operationForChild(e){if(We(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ht(e));return new kd(ot(),t,this.revert)}}else return ce(Ue(this.path)===e,"operationForChild called for unrelated child."),new kd(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.source=e,this.path=t,this.type=Qr.LISTEN_COMPLETE}operationForChild(e){return We(this.path)?new ec(this.source,ot()):new ec(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Qr.OVERWRITE}operationForChild(e){return We(this.path)?new Jo(this.source,ot(),this.snap.getImmediateChild(e)):new Jo(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Qr.MERGE}operationForChild(e){if(We(this.path)){const t=this.children.subtree(new ht(e));return t.isEmpty()?null:t.value?new Jo(this.source,ot(),t.value):new tc(this.source,ot(),t)}else return ce(Ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tc(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(We(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ue(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function L2(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(C2(u.childName,u.snapshotNode))}),fu(n,s,"child_removed",e,r,t),fu(n,s,"child_added",e,r,t),fu(n,s,"child_moved",a,r,t),fu(n,s,"child_changed",e,r,t),fu(n,s,"value",e,r,t),s}function fu(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>V2(n,d,f)),u.forEach(d=>{const f=M2(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function M2(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function V2(n,e,t){if(e.childName==null||t.childName==null)throw yl("Should only compare child_ events.");const r=new He(e.childName,e.snapshotNode),s=new He(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e){return{eventCache:n,serverCache:e}}function bu(n,e,t,r){return pf(new Zo(e,t,r),n.serverCache)}function qS(n,e,t,r){return pf(n.eventCache,new Zo(e,t,r))}function eg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ea(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fm;const F2=()=>(fm||(fm=new Gn(TD)),fm);class Et{static fromObject(e){let t=new Et(null);return An(e,(r,s)=>{t=t.set(new ht(r),s)}),t}constructor(e,t=F2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ot(),value:this.value};if(We(e))return null;{const r=Ue(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(pt(e),t);return a!=null?{path:Ft(new ht(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(We(e))return this;{const t=Ue(e),r=this.children.get(t);return r!==null?r.subtree(pt(e)):new Et(null)}}set(e,t){if(We(e))return new Et(t,this.children);{const r=Ue(e),a=(this.children.get(r)||new Et(null)).set(pt(e),t),u=this.children.insert(r,a);return new Et(this.value,u)}}remove(e){if(We(e))return this.children.isEmpty()?new Et(null):new Et(null,this.children);{const t=Ue(e),r=this.children.get(t);if(r){const s=r.remove(pt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new Et(null):new Et(this.value,a)}else return this}}get(e){if(We(e))return this.value;{const t=Ue(e),r=this.children.get(t);return r?r.get(pt(e)):null}}setTree(e,t){if(We(e))return t;{const r=Ue(e),a=(this.children.get(r)||new Et(null)).setTree(pt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new Et(this.value,u)}}fold(e){return this.fold_(ot(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(Ft(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ot(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(We(e))return null;{const a=Ue(e),u=this.children.get(a);return u?u.findOnPath_(pt(e),Ft(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ot(),t)}foreachOnPath_(e,t,r){if(We(e))return this;{this.value&&r(t,this.value);const s=Ue(e),a=this.children.get(s);return a?a.foreachOnPath_(pt(e),Ft(t,s),r):new Et(null)}}foreach(e){this.foreach_(ot(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Ft(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.writeTree_=e}static empty(){return new Jr(new Et(null))}}function Du(n,e,t){if(We(e))return new Jr(new Et(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=qn(s,e);return a=a.updateChild(u,t),new Jr(n.writeTree_.set(s,a))}else{const s=new Et(t),a=n.writeTree_.setTree(e,s);return new Jr(a)}}}function aT(n,e,t){let r=n;return An(t,(s,a)=>{r=Du(r,Ft(e,s),a)}),r}function lT(n,e){if(We(e))return Jr.empty();{const t=n.writeTree_.setTree(e,new Et(null));return new Jr(t)}}function tg(n,e){return oa(n,e)!=null}function oa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(qn(t.path,e)):null}function uT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Nt,(r,s)=>{e.push(new He(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new He(r,s.value))}),e}function Xs(n,e){if(We(e))return n;{const t=oa(n,e);return t!=null?new Jr(new Et(t)):new Jr(n.writeTree_.subtree(e))}}function ng(n){return n.writeTree_.isEmpty()}function ml(n,e){return GS(ot(),n.writeTree_,e)}function GS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ce(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=GS(Ft(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Ft(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(n,e){return XS(e,n)}function j2(n,e,t,r,s){ce(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Du(n.visibleWrites,e,t)),n.lastWriteId=r}function U2(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function B2(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&z2(d,r.path)?s=!1:Ar(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return $2(n),!0;if(r.snap)n.visibleWrites=lT(n.visibleWrites,r.path);else{const d=r.children;An(d,f=>{n.visibleWrites=lT(n.visibleWrites,Ft(r.path,f))})}return!0}else return!1}function z2(n,e){if(n.snap)return Ar(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ar(Ft(n.path,t),e))return!0;return!1}function $2(n){n.visibleWrites=KS(n.allWrites,W2,ot()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function W2(n){return n.visible}function KS(n,e,t){let r=Jr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)Ar(t,u)?(d=qn(t,u),r=Du(r,d,a.snap)):Ar(u,t)&&(d=qn(u,t),r=Du(r,ot(),a.snap.getChild(d)));else if(a.children){if(Ar(t,u))d=qn(t,u),r=aT(r,d,a.children);else if(Ar(u,t))if(d=qn(u,t),We(d))r=aT(r,ot(),a.children);else{const f=rl(a.children,Ue(d));if(f){const m=f.getChild(pt(d));r=Du(r,ot(),m)}}}else throw yl("WriteRecord should have .snap or .children")}}return r}function QS(n,e,t,r,s){if(!r&&!s){const a=oa(n.visibleWrites,e);if(a!=null)return a;{const u=Xs(n.visibleWrites,e);if(ng(u))return t;if(t==null&&!tg(u,ot()))return null;{const d=t||xe.EMPTY_NODE;return ml(u,d)}}}else{const a=Xs(n.visibleWrites,e);if(!s&&ng(a))return t;if(!s&&t==null&&!tg(a,ot()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(Ar(m.path,e)||Ar(e,m.path))},d=KS(n.allWrites,u,e),f=t||xe.EMPTY_NODE;return ml(d,f)}}}function H2(n,e,t){let r=xe.EMPTY_NODE;const s=oa(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Nt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Xs(n.visibleWrites,e);return t.forEachChild(Nt,(u,d)=>{const f=ml(Xs(a,new ht(u)),d);r=r.updateImmediateChild(u,f)}),uT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Xs(n.visibleWrites,e);return uT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function q2(n,e,t,r,s){ce(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=Ft(e,t);if(tg(n.visibleWrites,a))return null;{const u=Xs(n.visibleWrites,a);return ng(u)?s.getChild(t):ml(u,s.getChild(t))}}function G2(n,e,t,r){const s=Ft(e,t),a=oa(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Xs(n.visibleWrites,s);return ml(u,r.getNode().getImmediateChild(t))}else return null}function K2(n,e){return oa(n.visibleWrites,e)}function Q2(n,e,t,r,s,a,u){let d;const f=Xs(n.visibleWrites,e),m=oa(f,ot());if(m!=null)d=m;else if(t!=null)d=ml(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],w=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let N=I.getNext();for(;N&&y.length<s;)w(N,r)!==0&&y.push(N),N=I.getNext();return y}else return[]}function Y2(){return{visibleWrites:Jr.empty(),allWrites:[],lastWriteId:-1}}function Rd(n,e,t,r){return QS(n.writeTree,n.treePath,e,t,r)}function w_(n,e){return H2(n.writeTree,n.treePath,e)}function cT(n,e,t,r){return q2(n.writeTree,n.treePath,e,t,r)}function Ad(n,e){return K2(n.writeTree,Ft(n.treePath,e))}function X2(n,e,t,r,s,a){return Q2(n.writeTree,n.treePath,e,t,r,s,a)}function T_(n,e,t){return G2(n.writeTree,n.treePath,e,t)}function YS(n,e){return XS(Ft(n.treePath,e),n.writeTree)}function XS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Ju(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Xu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,pl(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Ju(r,e.snapshotNode,s.oldSnap));else throw yl("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const JS=new Z2;class I_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return T_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ea(this.viewCache_),a=X2(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(n){return{filter:n}}function tO(n,e){ce(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function nO(n,e,t,r,s){const a=new J2;let u,d;if(t.type===Qr.OVERWRITE){const m=t;m.source.fromUser?u=rg(n,e,m.path,m.snap,r,s,a):(ce(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!We(m.path),u=Pd(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===Qr.MERGE){const m=t;m.source.fromUser?u=iO(n,e,m.path,m.children,r,s,a):(ce(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=ig(n,e,m.path,m.children,r,s,d,a))}else if(t.type===Qr.ACK_USER_WRITE){const m=t;m.revert?u=aO(n,e,m.path,r,s,a):u=sO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Qr.LISTEN_COMPLETE)u=oO(n,e,t.path,r,a);else throw yl("Unknown operation type: "+t.type);const f=a.getChanges();return rO(e,u,f),{viewCache:u,changes:f}}function rO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=eg(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(WS(eg(e)))}}function ZS(n,e,t,r,s,a){const u=e.eventCache;if(Ad(r,t)!=null)return e;{let d,f;if(We(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=ea(e),y=m instanceof xe?m:xe.EMPTY_NODE,w=w_(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const m=Rd(r,ea(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Ue(t);if(m===".priority"){ce(uo(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const w=cT(r,t,y,f);w!=null?d=n.filter.updatePriority(y,w):d=u.getNode()}else{const y=pt(t);let w;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const I=cT(r,t,u.getNode(),f);I!=null?w=u.getNode().getImmediateChild(m).updateChild(y,I):w=u.getNode().getImmediateChild(m)}else w=T_(r,m,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),m,w,y,s,a):d=u.getNode()}}return bu(e,d,u.isFullyInitialized()||We(t),n.filter.filtersNodes())}}function Pd(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(We(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const N=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),N,null)}else{const N=Ue(t);if(!f.isCompleteForPath(t)&&uo(t)>1)return e;const M=pt(t),U=f.getNode().getImmediateChild(N).updateChild(M,r);N===".priority"?m=y.updatePriority(f.getNode(),U):m=y.updateChild(f.getNode(),N,U,M,JS,null)}const w=qS(e,m,f.isFullyInitialized()||We(t),y.filtersNodes()),I=new I_(s,w,a);return ZS(n,w,t,s,I,d)}function rg(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new I_(s,e,a);if(We(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=bu(e,m,!0,n.filter.filtersNodes());else{const w=Ue(t);if(w===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=bu(e,m,d.isFullyInitialized(),d.isFiltered());else{const I=pt(t),N=d.getNode().getImmediateChild(w);let M;if(We(I))M=r;else{const F=y.getCompleteChild(w);F!=null?d_(I)===".priority"&&F.getChild(VS(I)).isEmpty()?M=F:M=F.updateChild(I,r):M=xe.EMPTY_NODE}if(N.equals(M))f=e;else{const F=n.filter.updateChild(d.getNode(),w,M,I,y,u);f=bu(e,F,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function hT(n,e){return n.eventCache.isCompleteForChild(e)}function iO(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=Ft(t,f);hT(e,Ue(y))&&(d=rg(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=Ft(t,f);hT(e,Ue(y))||(d=rg(n,d,y,m,s,a,u))}),d}function dT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ig(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;We(t)?m=r:m=new Et(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((w,I)=>{if(y.hasChild(w)){const N=e.serverCache.getNode().getImmediateChild(w),M=dT(n,N,I);f=Pd(n,f,new ht(w),M,s,a,u,d)}}),m.children.inorderTraversal((w,I)=>{const N=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!y.hasChild(w)&&!N){const M=e.serverCache.getNode().getImmediateChild(w),F=dT(n,M,I);f=Pd(n,f,new ht(w),F,s,a,u,d)}}),f}function sO(n,e,t,r,s,a,u){if(Ad(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(We(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Pd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(We(t)){let m=new Et(null);return f.getNode().forEachChild(tl,(y,w)=>{m=m.set(new ht(y),w)}),ig(n,e,t,m,s,a,d,u)}else return e}else{let m=new Et(null);return r.foreach((y,w)=>{const I=Ft(t,y);f.isCompleteForPath(I)&&(m=m.set(y,f.getNode().getChild(I)))}),ig(n,e,t,m,s,a,d,u)}}function oO(n,e,t,r,s){const a=e.serverCache,u=qS(e,a.getNode(),a.isFullyInitialized()||We(t),a.isFiltered());return ZS(n,u,t,r,JS,s)}function aO(n,e,t,r,s,a){let u;if(Ad(r,t)!=null)return e;{const d=new I_(r,e,s),f=e.eventCache.getNode();let m;if(We(t)||Ue(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Rd(r,ea(e));else{const w=e.serverCache.getNode();ce(w instanceof xe,"serverChildren would be complete if leaf node"),y=w_(r,w)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Ue(t);let w=T_(r,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=f.getImmediateChild(y)),w!=null?m=n.filter.updateChild(f,y,w,pt(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,xe.EMPTY_NODE,pt(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Rd(r,ea(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Ad(r,ot())!=null,bu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new g_(r.getIndex()),a=R2(r);this.processor_=eO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(xe.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(xe.EMPTY_NODE,d.getNode(),null),y=new Zo(f,u.isFullyInitialized(),s.filtersNodes()),w=new Zo(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=pf(w,y),this.eventGenerator_=new O2(this.query_)}get query(){return this.query_}}function uO(n){return n.viewCache_.serverCache.getNode()}function cO(n,e){const t=ea(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!We(e)&&!t.getImmediateChild(Ue(e)).isEmpty())?t.getChild(e):null}function fT(n){return n.eventRegistrations_.length===0}function hO(n,e){n.eventRegistrations_.push(e)}function pT(n,e,t){const r=[];if(t){ce(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function mT(n,e,t,r){e.type===Qr.MERGE&&e.source.queryId!==null&&(ce(ea(n.viewCache_),"We should always have a full cache before handling merges"),ce(eg(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=nO(n.processor_,s,e,t,r);return tO(n.processor_,a.viewCache),ce(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,eC(n,a.changes,a.viewCache.eventCache.getNode(),null)}function dO(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Nt,(a,u)=>{r.push(pl(a,u))}),t.isFullyInitialized()&&r.push(WS(t.getNode())),eC(n,r,t.getNode(),e)}function eC(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return L2(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd;class fO{constructor(){this.views=new Map}}function pO(n){ce(!Nd,"__referenceConstructor has already been defined"),Nd=n}function mO(){return ce(Nd,"Reference.ts has not been loaded"),Nd}function gO(n){return n.views.size===0}function S_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ce(a!=null,"SyncTree gave us an op for an invalid query."),mT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(mT(u,e,t,r));return a}}function _O(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Rd(t,s?r:null),f=!1;d?f=!0:r instanceof xe?(d=w_(t,r),f=!1):(d=xe.EMPTY_NODE,f=!1);const m=pf(new Zo(d,f,!1),new Zo(r,s,!1));return new lO(e,m)}return u}function yO(n,e,t,r,s,a){const u=_O(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),hO(u,t),dO(u,t)}function vO(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=co(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(pT(m,t,r)),fT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(pT(f,t,r)),fT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!co(n)&&a.push(new(mO())(e._repo,e._path)),{removed:a,events:u}}function tC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function nl(n,e){let t=null;for(const r of n.views.values())t=t||cO(r,e);return t}function nC(n,e){if(e._queryParams.loadsAllData())return mf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function rC(n,e){return nC(n,e)!=null}function co(n){return mf(n)!=null}function mf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd;function EO(n){ce(!xd,"__referenceConstructor has already been defined"),xd=n}function wO(){return ce(xd,"Reference.ts has not been loaded"),xd}let TO=1;class gT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Et(null),this.pendingWriteTree_=Y2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iC(n,e,t,r,s){return j2(n.pendingWriteTree_,e,t,r,s),s?mc(n,new Jo(HS(),e,t)):[]}function zo(n,e,t=!1){const r=U2(n.pendingWriteTree_,e);if(B2(n.pendingWriteTree_,e)){let a=new Et(null);return r.snap!=null?a=a.set(ot(),!0):An(r.children,u=>{a=a.set(new ht(u),!0)}),mc(n,new kd(r.path,a,t))}else return[]}function gf(n,e,t){return mc(n,new Jo(y_(),e,t))}function IO(n,e,t){const r=Et.fromObject(t);return mc(n,new tc(y_(),e,r))}function SO(n,e){return mc(n,new ec(y_(),e))}function CO(n,e,t){const r=k_(n,t);if(r){const s=R_(r),a=s.path,u=s.queryId,d=qn(a,e),f=new ec(v_(u),d);return A_(n,a,f)}else return[]}function sg(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||rC(u,e))){const f=vO(u,e,t,r);gO(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(I,N)=>co(N));if(y&&!w){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const N=AO(I);for(let M=0;M<N.length;++M){const F=N[M],U=F.query,ie=aC(n,F);n.listenProvider_.startListening(Ou(U),bd(n,U),ie.hashFn,ie.onComplete)}}}!w&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Ou(e),null):m.forEach(I=>{const N=n.queryToTagMap.get(_f(I));n.listenProvider_.stopListening(Ou(I),N)}))}PO(n,m)}return d}function kO(n,e,t,r){const s=k_(n,r);if(s!=null){const a=R_(s),u=a.path,d=a.queryId,f=qn(u,e),m=new Jo(v_(d),f,t);return A_(n,u,m)}else return[]}function RO(n,e,t,r){const s=k_(n,r);if(s){const a=R_(s),u=a.path,d=a.queryId,f=qn(u,e),m=Et.fromObject(t),y=new tc(v_(d),f,m);return A_(n,u,y)}else return[]}function _T(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(I,N)=>{const M=qn(I,s);a=a||nl(N,M),u=u||co(N)});let d=n.syncPointTree_.get(s);d?(u=u||co(d),a=a||nl(d,ot())):(d=new fO,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=xe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((N,M)=>{const F=nl(M,ot());F&&(a=a.updateImmediateChild(N,F))}));const m=rC(d,e);if(!m&&!e._queryParams.loadsAllData()){const I=_f(e);ce(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const N=NO();n.queryToTagMap.set(I,N),n.tagToQueryMap.set(N,I)}const y=E_(n.pendingWriteTree_,s);let w=yO(d,e,t,y,a,f);if(!m&&!u&&!r){const I=nC(d,e);w=w.concat(xO(n,e,I))}return w}function C_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=qn(u,e),m=nl(d,f);if(m)return m});return QS(s,e,a,t,!0)}function mc(n,e){return sC(e,n.syncPointTree_,null,E_(n.pendingWriteTree_,ot()))}function sC(n,e,t,r){if(We(n.path))return oC(n,e,t,r);{const s=e.get(ot());t==null&&s!=null&&(t=nl(s,ot()));let a=[];const u=Ue(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=YS(r,u);a=a.concat(sC(d,f,m,y))}return s&&(a=a.concat(S_(s,n,r,t))),a}}function oC(n,e,t,r){const s=e.get(ot());t==null&&s!=null&&(t=nl(s,ot()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=YS(r,u),y=n.operationForChild(u);y&&(a=a.concat(oC(y,d,f,m)))}),s&&(a=a.concat(S_(s,n,r,t))),a}function aC(n,e){const t=e.query,r=bd(n,t);return{hashFn:()=>(uO(e)||xe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?CO(n,t._path,r):SO(n,t._path);{const a=CD(s,t);return sg(n,t,null,a)}}}}function bd(n,e){const t=_f(e);return n.queryToTagMap.get(t)}function _f(n){return n._path.toString()+"$"+n._queryIdentifier}function k_(n,e){return n.tagToQueryMap.get(e)}function R_(n){const e=n.indexOf("$");return ce(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ht(n.substr(0,e))}}function A_(n,e,t){const r=n.syncPointTree_.get(e);ce(r,"Missing sync point for query tag that we're tracking");const s=E_(n.pendingWriteTree_,e);return S_(r,t,s,null)}function AO(n){return n.fold((e,t,r)=>{if(t&&co(t))return[mf(t)];{let s=[];return t&&(s=tC(t)),An(r,(a,u)=>{s=s.concat(u)}),s}})}function Ou(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wO())(n._repo,n._path):n}function PO(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=_f(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function NO(){return TO++}function xO(n,e,t){const r=e._path,s=bd(n,e),a=aC(n,t),u=n.listenProvider_.startListening(Ou(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ce(!co(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,w)=>{if(!We(m)&&y&&co(y))return[mf(y).query];{let I=[];return y&&(I=I.concat(tC(y).map(N=>N.query))),An(w,(N,M)=>{I=I.concat(M)}),I}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Ou(y),bd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new P_(t)}node(){return this.node_}}class N_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ft(this.path_,e);return new N_(this.syncTree_,t)}node(){return C_(this.syncTree_,this.path_)}}const bO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},yT=function(n,e,t){if(!n||typeof n!="object")return n;if(ce(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return DO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return OO(n[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},DO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ce(!1,"Unexpected server value: "+n)}},OO=function(n,e,t){n.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ce(!1,"Unexpected increment value: "+r);const s=e.node();if(ce(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},LO=function(n,e,t,r){return x_(e,new N_(t,n),r)},lC=function(n,e,t){return x_(n,new P_(e),t)};function x_(n,e,t){const r=n.getPriority().val(),s=yT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=yT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new nn(d,$t(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new nn(s))),u.forEachChild(Nt,(d,f)=>{const m=x_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function D_(n,e){let t=e instanceof ht?e:new ht(e),r=n,s=Ue(t);for(;s!==null;){const a=rl(r.node.children,s)||{children:{},childCount:0};r=new b_(s,r,a),t=pt(t),s=Ue(t)}return r}function Nl(n){return n.node.value}function uC(n,e){n.node.value=e,og(n)}function cC(n){return n.node.childCount>0}function MO(n){return Nl(n)===void 0&&!cC(n)}function yf(n,e){An(n.node.children,(t,r)=>{e(new b_(t,n,r))})}function hC(n,e,t,r){t&&e(n),yf(n,s=>{hC(s,e,!0)})}function VO(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function gc(n){return new ht(n.parent===null?n.name:gc(n.parent)+"/"+n.name)}function og(n){n.parent!==null&&FO(n.parent,n.name,n)}function FO(n,e,t){const r=MO(t),s=Ai(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,og(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,og(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=/[\[\].#$\/\u0000-\u001F\u007F]/,UO=/[\[\].#$\u0000-\u001F\u007F]/,pm=10*1024*1024,O_=function(n){return typeof n=="string"&&n.length!==0&&!jO.test(n)},dC=function(n){return typeof n=="string"&&n.length!==0&&!UO.test(n)},BO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dC(n)},fC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!df(n)||n&&typeof n=="object"&&Ai(n,".sv")},ag=function(n,e,t,r){vf(il(n,"value"),e,t)},vf=function(n,e,t){const r=t instanceof ht?new s2(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+jo(r));if(typeof e=="function")throw new Error(n+"contains a function "+jo(r)+" with contents = "+e.toString());if(df(e))throw new Error(n+"contains "+e.toString()+" "+jo(r));if(typeof e=="string"&&e.length>pm/3&&Fd(e)>pm)throw new Error(n+"contains a string greater than "+pm+" utf8 bytes "+jo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(An(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!O_(u)))throw new Error(n+" contains an invalid key ("+u+") "+jo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);o2(r,u),vf(n,d,r),a2(r)}),s&&a)throw new Error(n+' contains ".value" child '+jo(r)+" in addition to actual children.")}},zO=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Yu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!O_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(i2);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&Ar(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},$O=function(n,e,t,r){const s=il(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];An(e,(u,d)=>{const f=new ht(u);if(vf(s,d,Ft(t,f)),d_(f)===".priority"&&!fC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),zO(s,a)},WO=function(n,e,t){if(df(e))throw new Error(il(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fC(e))throw new Error(il(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},pC=function(n,e,t,r){if(!dC(t))throw new Error(il(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HO=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pC(n,e,t)},Tu=function(n,e){if(Ue(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},qO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!O_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!BO(t))throw new Error(il(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function L_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!f_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function mC(n,e,t){L_(n,t),gC(n,r=>f_(r,e))}function os(n,e,t){L_(n,t),gC(n,r=>Ar(r,e)||Ar(e,r))}function gC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(KO(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function KO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Nu&&mn("event: "+t.toString()),Al(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="repo_interrupt",YO=25;class XO{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cd(),this.transactionQueueTree_=new b_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JO(n,e,t){if(n.stats_=c_(n.repoInfo_),n.forceRestClient_||PD())n.server_=new Sd(n.repoInfo_,(r,s,a,u)=>{vT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ET(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{on(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ji(n.repoInfo_,e,(r,s,a,u)=>{vT(n,r,s,a,u)},r=>{ET(n,r)},r=>{eL(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=OD(n.repoInfo_,()=>new D2(n.stats_,n.server_)),n.infoData_=new A2,n.infoSyncTree_=new gT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=gf(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),V_(n,"connected",!1),n.serverSyncTree_=new gT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);os(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function ZO(n){const t=n.infoData_.getNode(new ht(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function M_(n){return bO({timestamp:ZO(n)})}function vT(n,e,t,r,s){n.dataUpdateCount++;const a=new ht(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=ed(t,m=>$t(m));u=RO(n.serverSyncTree_,a,f,s)}else{const f=$t(t);u=kO(n.serverSyncTree_,a,f,s)}else if(r){const f=ed(t,m=>$t(m));u=IO(n.serverSyncTree_,a,f)}else{const f=$t(t);u=gf(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=Ef(n,a)),os(n.eventQueue_,d,u)}function ET(n,e){V_(n,"connected",e),e===!1&&nL(n)}function eL(n,e){An(e,(t,r)=>{V_(n,t,r)})}function V_(n,e,t){const r=new ht("/.info/"+e),s=$t(t);n.infoData_.updateSnapshot(r,s);const a=gf(n.infoSyncTree_,r,s);os(n.eventQueue_,r,a)}function _C(n){return n.nextWriteId_++}function tL(n,e,t,r,s){F_(n,"set",{path:e.toString(),value:t,priority:r});const a=M_(n),u=$t(t,r),d=C_(n.serverSyncTree_,e),f=lC(u,d,a),m=_C(n),y=iC(n.serverSyncTree_,e,f,m,!0);L_(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(I,N)=>{const M=I==="ok";M||Kn("set at "+e+" failed: "+I);const F=zo(n.serverSyncTree_,m,!M);os(n.eventQueue_,e,F),gl(n,s,I,N)});const w=TC(n,e);Ef(n,w),os(n.eventQueue_,w,[])}function nL(n){F_(n,"onDisconnectEvents");const e=M_(n),t=Cd();Zm(n.onDisconnect_,ot(),(s,a)=>{const u=LO(s,a,n.serverSyncTree_,e);Pl(t,s,u)});let r=[];Zm(t,ot(),(s,a)=>{r=r.concat(gf(n.serverSyncTree_,s,a));const u=TC(n,s);Ef(n,u)}),n.onDisconnect_=Cd(),os(n.eventQueue_,ot(),r)}function rL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Jm(n.onDisconnect_,e),gl(n,t,r,s)})}function wT(n,e,t,r){const s=$t(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&Pl(n.onDisconnect_,e,s),gl(n,r,a,u)})}function iL(n,e,t,r,s){const a=$t(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&Pl(n.onDisconnect_,e,a),gl(n,s,u,d)})}function sL(n,e,t,r){if(Zh(t)){mn("onDisconnect().update() called with empty data.  Don't do anything."),gl(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&An(t,(u,d)=>{const f=$t(d);Pl(n.onDisconnect_,Ft(e,u),f)}),gl(n,r,s,a)})}function oL(n,e,t){let r;Ue(e._path)===".info"?r=_T(n.infoSyncTree_,e,t):r=_T(n.serverSyncTree_,e,t),mC(n.eventQueue_,e._path,r)}function TT(n,e,t){let r;Ue(e._path)===".info"?r=sg(n.infoSyncTree_,e,t):r=sg(n.serverSyncTree_,e,t),mC(n.eventQueue_,e._path,r)}function aL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(QO)}function F_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),mn(t,...e)}function gl(n,e,t,r){e&&Al(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function yC(n,e,t){return C_(n.serverSyncTree_,e,t)||xe.EMPTY_NODE}function j_(n,e=n.transactionQueueTree_){if(e||wf(n,e),Nl(e)){const t=EC(n,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&lL(n,gc(e),t)}else cC(e)&&yf(e,t=>{j_(n,t)})}function lL(n,e,t){const r=t.map(m=>m.currentWriteId),s=yC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ce(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=qn(e,y.path);a=a.updateChild(w,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{F_(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,y=y.concat(zo(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();wf(n,D_(n.transactionQueueTree_,e)),j_(n,n.transactionQueueTree_),os(n.eventQueue_,e,y);for(let I=0;I<w.length;I++)Al(w[I])}else{if(m==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{Kn("transaction at "+f.toString()+" failed: "+m);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=m}Ef(n,e)}},u)}function Ef(n,e){const t=vC(n,e),r=gc(t),s=EC(n,t);return uL(n,s,r),r}function uL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=qn(t,f.path);let y=!1,w;if(ce(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,w=f.abortReason,s=s.concat(zo(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=YO)y=!0,w="maxretry",s=s.concat(zo(n.serverSyncTree_,f.currentWriteId,!0));else{const I=yC(n,f.path,u);f.currentInputSnapshot=I;const N=e[d].update(I.val());if(N!==void 0){vf("transaction failed: Data returned ",N,f.path);let M=$t(N);typeof N=="object"&&N!=null&&Ai(N,".priority")||(M=M.updatePriority(I.getPriority()));const U=f.currentWriteId,ie=M_(n),Y=lC(M,I,ie);f.currentOutputSnapshotRaw=M,f.currentOutputSnapshotResolved=Y,f.currentWriteId=_C(n),u.splice(u.indexOf(U),1),s=s.concat(iC(n.serverSyncTree_,f.path,Y,f.currentWriteId,f.applyLocally)),s=s.concat(zo(n.serverSyncTree_,U,!0))}else y=!0,w="nodata",s=s.concat(zo(n.serverSyncTree_,f.currentWriteId,!0))}os(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}wf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Al(r[d]);j_(n,n.transactionQueueTree_)}function vC(n,e){let t,r=n.transactionQueueTree_;for(t=Ue(e);t!==null&&Nl(r)===void 0;)r=D_(r,t),e=pt(e),t=Ue(e);return r}function EC(n,e){const t=[];return wC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function wC(n,e,t){const r=Nl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);yf(e,s=>{wC(n,s,t)})}function wf(n,e){const t=Nl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,uC(e,t.length>0?t:void 0)}yf(e,r=>{wf(n,r)})}function TC(n,e){const t=gc(vC(n,e)),r=D_(n.transactionQueueTree_,e);return VO(r,s=>{mm(n,s)}),mm(n,r),hC(r,s=>{mm(n,s)}),t}function mm(n,e){const t=Nl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ce(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ce(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(zo(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?uC(e,void 0):t.length=a+1,os(n.eventQueue_,gc(e),s);for(let u=0;u<r.length;u++)Al(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Kn(`Invalid query segment '${t}' in query '${n}'`)}return e}const IT=function(n,e){const t=dL(n),r=t.namespace;t.domain==="firebase.com"&&ss(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ED();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new AS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new ht(t.pathString)}},dL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(y,w)),y<w&&(s=cL(n.substring(y,w)));const I=hL(n.substring(Math.min(n.length,w)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const N=e.slice(0,m);if(N.toLowerCase()==="localhost")t="localhost";else if(N.split(".").length<=2)t=N;else{const M=e.indexOf(".");r=e.substring(0,M).toLowerCase(),t=e.substring(M+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+on(this.snapshot.exportVal())}}class pL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ce(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Gi;return rL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Tu("OnDisconnect.remove",this._path);const e=new Gi;return wT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Tu("OnDisconnect.set",this._path),ag("OnDisconnect.set",e,this._path);const t=new Gi;return wT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Tu("OnDisconnect.setWithPriority",this._path),ag("OnDisconnect.setWithPriority",e,this._path),WO("OnDisconnect.setWithPriority",t);const r=new Gi;return iL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){Tu("OnDisconnect.update",this._path),$O("OnDisconnect.update",e,this._path);const t=new Gi;return sL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class U_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return We(this._path)?null:d_(this._path)}get ref(){return new go(this._repo,this._path)}get _queryIdentifier(){const e=sT(this._queryParams),t=l_(e);return t==="{}"?"default":t}get _queryObject(){return sT(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof U_))return!1;const t=this._repo===e._repo,r=f_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+r2(this._path)}}class go extends U_{constructor(e,t){super(e,t,new __,!1)}get parent(){const e=VS(this._path);return e===null?null:new go(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Dd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ht(e),r=lg(this.ref,e);return new Dd(this._node.getChild(t),r,Nt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Dd(s,lg(this.ref,r),Nt)))}hasChild(e){const t=new ht(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ST(n,e){return n=ut(n),n._checkNotDeleted("ref"),e!==void 0?lg(n._root,e):n._root}function lg(n,e){return n=ut(n),Ue(n._path)===null?HO("child","path",e):pC("child","path",e),new go(n._repo,Ft(n._path,e))}function _L(n){return n=ut(n),new gL(n._repo,n._path)}function CT(n,e){n=ut(n),Tu("set",n._path),ag("set",e,n._path);const t=new Gi;return tL(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class B_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new fL("value",this,new Dd(e.snapshotNode,new go(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pL(this,e,t):null}matches(e){return e instanceof B_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function yL(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,w)=>{TT(n._repo,n,d),f(y,w)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new mL(t,a||void 0),d=new B_(u);return oL(n._repo,n,d),()=>TT(n._repo,n,d)}function vL(n,e,t,r){return yL(n,"value",e,t,r)}pO(go);EO(go);/**
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
 */const EL="FIREBASE_DATABASE_EMULATOR_HOST",ug={};let wL=!1;function TL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=ki(a);n.repoInfo_=new AS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function IL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mn("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=IT(a,s),d=u.repoInfo,f;typeof process<"u"&&Bw&&(f=Bw[EL]),f?(a=`http://${f}?ns=${d.namespace}`,u=IT(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new xD(n.name,n.options,e);qO("Invalid Firebase Database URL",u),We(u.path)||ss("Database URL must point to the root of a Firebase Database (not including a child path).");const y=CL(d,n,m,new ND(n,t));return new kL(y,n)}function SL(n,e){const t=ug[e];(!t||t[n.key]!==n)&&ss(`Database ${e}(${n.repoInfo_}) has already been deleted.`),aL(n),delete t[n.key]}function CL(n,e,t,r){let s=ug[e.name];s||(s={},ug[e.name]=s);let a=s[n.toURLString()];return a&&ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new XO(n,wL,t,r),s[n.toURLString()]=a,a}class kL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new go(this._repo,ot())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ss("Cannot call "+e+" on a deleted database.")}}function RL(n=Ud(),e){const t=rc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=fg("database");r&&AL(t,...r)}return t}function AL(n,e,t,r={}){n=ut(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Zi(r,a.repoInfo_.emulatorOptions))return;ss("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ss('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Kh(Kh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:pg(r.mockUserToken,n.app.options.projectId);u=new Kh(d)}ki(e)&&(Md(e),Vd("Database",!0)),TL(a,s,r,u)}/**
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
 */function PL(n){pD(ho),eo(new es("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return IL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Pr(zw,$w,n),Pr(zw,$w,"esm2017")}Ji.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ji.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};PL();var NL="firebase",xL="11.10.0";/**
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
 */Pr(NL,xL,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="firebasestorage.googleapis.com",SC="storageBucket",bL=120*1e3,DL=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Ri{constructor(e,t,r=0){super(gm(e),`Firebase Storage: ${t} (${gm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function gm(n){return"storage/"+n}function z_(){const n="An unknown error occurred, please check the error payload for server response.";return new Lt(Ot.UNKNOWN,n)}function OL(n){return new Lt(Ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function LL(n){return new Lt(Ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ML(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Lt(Ot.UNAUTHENTICATED,n)}function VL(){return new Lt(Ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FL(n){return new Lt(Ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jL(){return new Lt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UL(){return new Lt(Ot.CANCELED,"User canceled the upload/download.")}function BL(n){return new Lt(Ot.INVALID_URL,"Invalid URL '"+n+"'.")}function zL(n){return new Lt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $L(){return new Lt(Ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+SC+"' property when initializing the app?")}function WL(){return new Lt(Ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HL(){return new Lt(Ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qL(n){return new Lt(Ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cg(n){return new Lt(Ot.INVALID_ARGUMENT,n)}function CC(){return new Lt(Ot.APP_DELETED,"The Firebase app was deleted.")}function GL(n){return new Lt(Ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Lu(n,e){return new Lt(Ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pu(n){throw new Lt(Ot.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ur.makeFromUrl(e,t)}catch{return new ur(e,"")}if(r.path==="")return r;throw zL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(B){B.path_=decodeURIComponent(B.path)}const y="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",N=new RegExp(`^https?://${w}/${y}/b/${s}/o${I}`,"i"),M={bucket:1,path:3},F=t===IC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",ie=new RegExp(`^https?://${F}/${s}/${U}`,"i"),ne=[{regex:d,indices:f,postModify:a},{regex:N,indices:M,postModify:m},{regex:ie,indices:{bucket:1,path:2},postModify:m}];for(let B=0;B<ne.length;B++){const Ie=ne[B],_e=Ie.regex.exec(e);if(_e){const x=_e[Ie.indices.bucket];let C=_e[Ie.indices.path];C||(C=""),r=new ur(x,C),Ie.postModify(r);break}}if(r==null)throw BL(e);return r}}class KL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function y(...U){m||(m=!0,e.apply(null,U))}function w(U){s=setTimeout(()=>{s=null,n(N,f())},U)}function I(){a&&clearTimeout(a)}function N(U,...ie){if(m){I();return}if(U){I(),y.call(null,U,...ie);return}if(f()||u){I(),y.call(null,U,...ie);return}r<64&&(r*=2);let ne;d===1?(d=2,ne=0):ne=(r+Math.random())*1e3,w(ne)}let M=!1;function F(U){M||(M=!0,I(),!m&&(s!==null?(U||(d=2),clearTimeout(s),w(0)):U||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,F(!0)},t),F}function YL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(n){return n!==void 0}function JL(n){return typeof n=="object"&&!Array.isArray(n)}function $_(n){return typeof n=="string"||n instanceof String}function kT(n){return W_()&&n instanceof Blob}function W_(){return typeof Blob<"u"}function RT(n,e,t,r){if(r<e)throw cg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw cg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function kC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ho;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ho||(Ho={}));/**
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
 */function ZL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t,r,s,a,u,d,f,m,y,w,I=!0,N=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=w,this.retry=I,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,F)=>{this.resolve_=M,this.reject_=F,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Mh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Ho.NO_ERROR,f=a.getStatus();if(!d||ZL(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Ho.ABORT;r(!1,new Mh(!1,null,y));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Mh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());XL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=z_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?CC():UL();u(f)}else{const f=jL();u(f)}};this.canceled_?t(!1,new Mh(!1,null,!0)):this.backoffId_=QL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function tM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function nM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function iM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function sM(n,e,t,r,s,a,u=!0,d=!1){const f=kC(n.urlParams),m=n.url+f,y=Object.assign({},n.headers);return rM(y,e),tM(y,t),nM(y,a),iM(y,r),new eM(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aM(...n){const e=oM();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(W_())return new Blob(n);throw new Lt(Ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lM(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function uM(n){if(typeof atob>"u")throw qL("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _m{constructor(e,t){this.data=e,this.contentType=t||null}}function cM(n,e){switch(n){case _i.RAW:return new _m(RC(e));case _i.BASE64:case _i.BASE64URL:return new _m(AC(n,e));case _i.DATA_URL:return new _m(dM(e),fM(e))}throw z_()}function RC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hM(n){let e;try{e=decodeURIComponent(n)}catch{throw Lu(_i.DATA_URL,"Malformed data URL.")}return RC(e)}function AC(n,e){switch(n){case _i.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Lu(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case _i.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Lu(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=uM(e)}catch(s){throw s.message.includes("polyfill")?s:Lu(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class PC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Lu(_i.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=pM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dM(n){const e=new PC(n);return e.base64?AC(_i.BASE64,e.rest):hM(e.rest)}function fM(n){return new PC(n).contentType}function pM(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){let r=0,s="";kT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(kT(this.data_)){const r=this.data_,s=lM(r,e,t);return s===null?null:new zs(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new zs(r,!0)}}static getBlob(...e){if(W_()){const t=e.map(r=>r instanceof zs?r.data_:r);return new zs(aM.apply(null,t))}else{const t=e.map(u=>$_(u)?cM(_i.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new zs(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(n){let e;try{e=JSON.parse(n)}catch{return null}return JL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function gM(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function xC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(n,e){return e}class Dn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||_M}}let Vh=null;function yM(n){return!$_(n)||n.length<2?n:xC(n)}function bC(){if(Vh)return Vh;const n=[];n.push(new Dn("bucket")),n.push(new Dn("generation")),n.push(new Dn("metageneration")),n.push(new Dn("name","fullPath",!0));function e(a,u){return yM(u)}const t=new Dn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new Dn("size");return s.xform=r,n.push(s),n.push(new Dn("timeCreated")),n.push(new Dn("updated")),n.push(new Dn("md5Hash",null,!0)),n.push(new Dn("cacheControl",null,!0)),n.push(new Dn("contentDisposition",null,!0)),n.push(new Dn("contentEncoding",null,!0)),n.push(new Dn("contentLanguage",null,!0)),n.push(new Dn("contentType",null,!0)),n.push(new Dn("metadata","customMetadata",!0)),Vh=n,Vh}function vM(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new ur(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function EM(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return vM(r,n),r}function DC(n,e,t){const r=NC(e);return r===null?null:EM(n,r,t)}function wM(n,e,t,r){const s=NC(e);if(s===null||!$_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const y=n.bucket,w=n.fullPath,I="/b/"+u(y)+"/o/"+u(w),N=H_(I,t,r),M=kC({alt:"media",token:m});return N+M})[0]}function TM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class OC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(n){if(!n)throw z_()}function IM(n,e){function t(r,s){const a=DC(n,s,e);return LC(a!==null),a}return t}function SM(n,e){function t(r,s){const a=DC(n,s,e);return LC(a!==null),wM(a,s,n.host,n._protocol)}return t}function MC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=VL():s=ML():t.getStatus()===402?s=LL(n.bucket):t.getStatus()===403?s=FL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function CM(n){const e=MC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=OL(n.path)),a.serverResponse=s.serverResponse,a}return t}function kM(n,e,t){const r=e.fullServerUrl(),s=H_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new OC(s,a,SM(n,t),u);return d.errorHandler=CM(e),d}function RM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function AM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=RM(null,e)),r}function PM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let ne="";for(let B=0;B<2;B++)ne=ne+Math.random().toString().slice(2);return ne}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=AM(e,r,s),y=TM(m,t),w="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,I=`\r
--`+f+"--",N=zs.getBlob(w,r,I);if(N===null)throw WL();const M={name:m.fullPath},F=H_(a,n.host,n._protocol),U="POST",ie=n.maxUploadRetryTime,Y=new OC(F,U,IM(n,t),ie);return Y.urlParams=M,Y.headers=u,Y.body=N.uploadData(),Y.errorHandler=MC(e),Y}class NM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ho.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ho.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ho.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw pu("cannot .send() more than once");if(ki(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xM extends NM{initXhr(){this.xhr_.responseType="text"}}function VC(){return new xM}/**
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
 */class ta{constructor(e,t){this._service=e,t instanceof ur?this._location=t:this._location=ur.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ta(e,t)}get root(){const e=new ur(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xC(this._location.path)}get storage(){return this._service}get parent(){const e=mM(this._location.path);if(e===null)return null;const t=new ur(this._location.bucket,e);return new ta(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw GL(e)}}function bM(n,e,t){n._throwIfRoot("uploadBytes");const r=PM(n.storage,n._location,bC(),new zs(e,!0),t);return n.storage.makeRequestWithTokens(r,VC).then(s=>({metadata:s,ref:n}))}function DM(n){n._throwIfRoot("getDownloadURL");const e=kM(n.storage,n._location,bC());return n.storage.makeRequestWithTokens(e,VC).then(t=>{if(t===null)throw HL();return t})}function OM(n,e){const t=gM(n._location.path,e),r=new ur(n._location.bucket,t);return new ta(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(n){return/^[A-Za-z]+:\/\//.test(n)}function MM(n,e){return new ta(n,e)}function FC(n,e){if(n instanceof q_){const t=n;if(t._bucket==null)throw $L();const r=new ta(t,t._bucket);return e!=null?FC(r,e):r}else return e!==void 0?OM(n,e):n}function VM(n,e){if(e&&LM(e)){if(n instanceof q_)return MM(n,e);throw cg("To use ref(service, url), the first argument must be a Storage instance.")}else return FC(n,e)}function AT(n,e){const t=e==null?void 0:e[SC];return t==null?null:ur.makeFromBucketSpec(t,n)}function FM(n,e,t,r={}){n.host=`${e}:${t}`;const s=ki(e);s&&(Md(`https://${n.host}/b`),Vd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:pg(a,n.app.options.projectId))}class q_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=IC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bL,this._maxUploadRetryTime=DL,this._requests=new Set,s!=null?this._bucket=ur.makeFromBucketSpec(s,this._host):this._bucket=AT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ur.makeFromBucketSpec(this._url,e):this._bucket=AT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){RT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){RT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ta(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new KL(CC());{const u=sM(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const PT="@firebase/storage",NT="0.13.14";/**
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
 */const jC="storage";function jM(n,e,t){return n=ut(n),bM(n,e,t)}function UM(n){return n=ut(n),DM(n)}function BM(n,e){return n=ut(n),VM(n,e)}function zM(n=Ud(),e){n=ut(n);const r=rc(n,jC).getImmediate({identifier:e}),s=fg("storage");return s&&$M(r,...s),r}function $M(n,e,t,r={}){FM(n,e,t,r)}function WM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new q_(t,r,s,e,ho)}function HM(){eo(new es(jC,WM,"PUBLIC").setMultipleInstances(!0)),Pr(PT,NT,""),Pr(PT,NT,"esm2017")}HM();const qM={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},GM="https://enteesee-api.vnhairmarket.com",Tf=QT(qM),_l=ZP(Tf);jA(_l,II).catch(()=>{});const Si=Yb(Tf),xT=RL(Tf),KM=zM(Tf),Js=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý",color:"#2481cc"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên",color:"#d84a35"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên",color:"#3d9b4f"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên",color:"#8e44ad"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối",color:"#c04b9b"}],ar=n=>(Js.find(e=>e.id===n)||{name:n}).name,Zs=n=>(Js.find(e=>e.id===n)||{}).color||"#2481cc",mu={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},ym=["waiting_acceptance","in_progress","waiting_review","completed"],UC={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function bT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function BC(n,e){return e.trim()?bT(n).includes(bT(e)):!0}function qo(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function Od(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function zC(n){if(!n)return"";const e=new Date(typeof n=="number"?n:Date.parse(n));if(Number.isNaN(e.getTime()))return"";const t=e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return e.toDateString()===new Date().toDateString()?t:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")} ${t}`}function QM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function kr(n,{method:e="GET",body:t,token:r}={}){const s=r||(_l.currentUser?await _l.currentUser.getIdToken():"");let a;try{a=await fetch(`${GM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}function Ki(n,e="dữ liệu"){const t=String(n&&n.message||"");return/401|unauthenticated|permission|hết hạn/i.test(t)&&/401/.test(t)?"Phiên đăng nhập đã hết hạn — đăng nhập lại.":/^HTTP 404|HTTP 404/.test(t)?`Không tải được ${e} — thử tải lại trang.`:/HTTP (4\d\d|5\d\d)/.test(t)?`Không tải được ${e} — thử lại sau. Nếu vẫn lỗi, báo quản lý.`:/không kết nối được backend|backend chưa deploy/i.test(t)?"Máy chủ chưa sẵn sàng — tính năng này tạm chưa dùng được.":/failed to fetch|load failed|networkerror|network request failed/i.test(t)?"Không có mạng — kiểm tra mạng rồi thử lại.":/chưa xác định người gửi/i.test(t)?t:t||`Không tải được ${e} — thử lại sau.`}const pn={sendMessage:async({content:n,threadId:e=null,attachments:t=[],clientDocId:r=null,forwarded:s=!1,forwardedFrom:a=null},u)=>{const d=QM(u),f=(n||"").trim();if(!f)throw new Error("Nội dung trống.");try{const w=await kr("/api/messages",{method:"POST",body:{content:f,roomId:"general",threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],forwarded:!!s,forwardedFrom:a||null}});return{id:w.message&&w.message.id}}catch(w){console.error("Gửi qua backend thất bại, fallback ghi trực tiếp Firestore:",w)}const m={roomId:"general",senderId:d.id,senderName:d.name,senderType:"human",content:f,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[d.id],pinned:!1,forwarded:!!s,forwardedFrom:a||null,reactions:{},edited:!1,editedAt:null,deleted:!1,deletedAt:null};return typeof r=="string"&&r.length>0?(await cD(vd(lo(Si,"messages"),r),m),{id:r}):{id:(await hD(lo(Si,"messages"),m)).id}},pinMessage:(n,e,t)=>kr(`/api/messages/${n}/pin`,{method:"POST",body:{pinned:!!e,content:t&&t.content||"",senderName:t&&t.senderName||""}}),toggleReaction:(n,e)=>kr(`/api/messages/${n}/react`,{method:"POST",body:{emoji:e}}),editMessage:(n,e)=>kr(`/api/messages/${n}/edit`,{method:"POST",body:{content:e}}),deleteMessage:n=>kr(`/api/messages/${n}/delete`,{method:"POST"}),markSeen:(n,e)=>e?fS(vd(Si,"messages",n),{seenBy:fD(e)}):Promise.resolve(),listTasks:(n="")=>kr(`/api/tasks${n}`),createTask:n=>kr("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>kr(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>kr("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>kr("/api/jobs"),listUsers:()=>kr("/api/users"),setTelegramChatId:(n,e)=>kr(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})},G_="enteesee-theme",DT={light:"#eef1f5",dark:"#0b0f14"};function Iu(){try{const n=localStorage.getItem(G_);return n==="dark"||n==="light"||n==="system"?n:null}catch{return null}}function $C(){try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Qh(n){return n==="dark"||n==="light"?n:$C()}function Yh(n){document.documentElement.dataset.theme=n;const e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",DT[n]||DT.light)}function YM(){const n=Iu()||"system",e=Qh(n);return Yh(e),e}function XM(n){try{localStorage.setItem(G_,n)}catch{}}function JM(){const[n,e]=q.useState(""),[t,r]=q.useState(""),[s,a]=q.useState(""),[u,d]=q.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await FA(_l,n.trim(),t)}catch(y){y.code==="auth/invalid-credential"?a("Email hoặc mật khẩu chưa đúng."):y.code==="auth/network-request-failed"?a("Không có mạng — kiểm tra mạng rồi thử lại."):y.code==="auth/too-many-requests"?a("Thử quá nhiều lần — đợi một lát rồi thử lại."):a("Đăng nhập chưa được — thử lại sau. Nếu vẫn lỗi, báo quản lý."),console.error("Login failed:",y)}finally{d(!1)}}return E.jsx("div",{className:"login-page",children:E.jsxs("div",{className:"login-card",children:[E.jsx("div",{className:"login-logo",children:"E"}),E.jsx("h1",{children:"Enteesee"}),E.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),E.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&E.jsx("div",{className:"err",children:s}),E.jsxs("form",{onSubmit:f,children:[E.jsx("div",{style:{marginBottom:10},children:E.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),E.jsx("div",{style:{marginBottom:12},children:E.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),E.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),E.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}const ZM=["❤️","👍","👎","🔥","🥰","👏","😆"],eV=["😂","😮","😢","😡","🙏","🎉","👀","💯","😍","🤔"],Vo={width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};function tV(n){return typeof navigator<"u"&&navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(n):new Promise((e,t)=>{try{const r=document.createElement("textarea");r.value=n,r.setAttribute("readonly",""),r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();const s=document.execCommand("copy");document.body.removeChild(r),s?e():t(new Error("Không sao chép được."))}catch(r){t(r)}})}function nV({message:n,anchorRect:e,isMine:t,canEdit:r,canDelete:s,myReaction:a,error:u,busyAction:d,onClose:f,onReact:m,onReply:y,onEdit:w,onTogglePin:I,onForward:N,onDelete:M,onSelect:F}){const[U,ie]=q.useState(!1),[Y,ne]=q.useState(!1),[B,Ie]=q.useState(!1),[_e,x]=q.useState(""),[C,A]=q.useState(null),D=q.useRef(null),O=q.useRef(null);q.useEffect(()=>()=>{O.current&&clearTimeout(O.current)},[]),q.useEffect(()=>{function Se(te){te.key==="Escape"&&(te.preventDefault(),f())}return window.addEventListener("keydown",Se),()=>window.removeEventListener("keydown",Se)},[f]),q.useLayoutEffect(()=>{const Se=D.current;if(!Se||!e)return;const te=window.innerWidth,fe=window.innerHeight,K=12,ue=Se.getBoundingClientRect(),ee=ue.width,L=ue.height;let Q=t?e.right-ee:e.left;Q=Math.max(K,Math.min(Q,te-ee-K));let ye=e.top-58;ye+L>fe-K&&(ye=fe-L-K),ye<K&&(ye=K),A({left:Math.round(Q),top:Math.round(ye)})},[e,t,U,Y,B,u,_e]);async function j(){x("");try{await tV(n.content||""),Ie(!0),O.current&&clearTimeout(O.current),O.current=setTimeout(()=>{f()},850)}catch{x("Không sao chép được — trình duyệt chặn quyền bộ nhớ tạm.")}}const k=u||_e,Be=C?{left:`${C.left}px`,top:`${C.top}px`,visibility:"visible"}:{left:"12px",top:"12px",visibility:"hidden"};return E.jsx("div",{className:"msg-menu-backdrop",role:"presentation",onClick:f,onPointerDown:Se=>{Se.preventDefault(),Se.stopPropagation(),f()},onContextMenu:Se=>{Se.preventDefault(),f()},children:E.jsxs("div",{ref:D,className:`msg-menu-wrap${t?" mine":""}`,style:Be,role:"dialog","aria-label":"Tùy chọn tin nhắn",onClick:Se=>Se.stopPropagation(),onPointerDown:Se=>Se.stopPropagation(),onContextMenu:Se=>Se.stopPropagation(),children:[E.jsxs("div",{className:`msg-menu-reactions${U?" expanded":""}`,role:"group","aria-label":"Thả cảm xúc nhanh",children:[E.jsxs("div",{className:"msg-menu-emoji-row",children:[ZM.map(Se=>E.jsx("button",{type:"button",className:`msg-menu-emoji-btn${a===Se?" active":""}`,"aria-label":`Thả cảm xúc ${Se}`,"aria-pressed":a===Se,disabled:d==="react",onClick:()=>m(Se),children:Se},Se)),E.jsx("button",{type:"button",className:`msg-menu-more-emoji${U?" open":""}`,"aria-label":U?"Thu gọn cảm xúc":"Xem thêm cảm xúc","aria-expanded":U,onClick:()=>ie(Se=>!Se),children:E.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),U&&E.jsx("div",{className:"msg-menu-emoji-extra",children:eV.map(Se=>E.jsx("button",{type:"button",className:`msg-menu-emoji-btn${a===Se?" active":""}`,"aria-label":`Thả cảm xúc ${Se}`,"aria-pressed":a===Se,disabled:d==="react",onClick:()=>m(Se),children:Se},Se))})]}),E.jsxs("div",{className:"msg-menu-card",role:"menu",children:[B&&E.jsx("div",{className:"msg-menu-toast",role:"status",children:"Đã sao chép"}),k&&E.jsx("div",{className:"msg-menu-error",role:"alert",children:k}),E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item",onClick:y,children:[E.jsxs("svg",{...Vo,children:[E.jsx("path",{d:"M9 14 4 9l5-5"}),E.jsx("path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"})]}),E.jsx("span",{children:"Trả lời"})]}),E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item",onClick:j,children:[E.jsxs("svg",{...Vo,children:[E.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),E.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),E.jsx("span",{children:"Sao chép"})]}),r&&E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item",onClick:w,children:[E.jsxs("svg",{...Vo,children:[E.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),E.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"})]}),E.jsx("span",{children:"Sửa"})]}),E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item",onClick:I,children:[E.jsxs("svg",{...Vo,children:[E.jsx("path",{d:"M12 17v5"}),E.jsx("path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16h14v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"})]}),E.jsx("span",{children:n.pinned?"Bỏ ghim":"Ghim"})]}),E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item",onClick:N,disabled:d==="forward",children:[E.jsxs("svg",{...Vo,children:[E.jsx("path",{d:"m15 14 5-5-5-5"}),E.jsx("path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"})]}),E.jsx("span",{children:"Chuyển tiếp"})]}),s&&(Y?E.jsxs("div",{className:"msg-menu-confirm",role:"group","aria-label":"Xác nhận xóa tin nhắn",children:[E.jsx("span",{className:"msg-menu-confirm-label",children:"Xóa tin này?"}),E.jsxs("div",{className:"msg-menu-confirm-btns",children:[E.jsx("button",{type:"button",className:"msg-menu-confirm-del",disabled:d==="delete",onClick:M,children:d==="delete"?"Đang xóa…":"Xóa"}),E.jsx("button",{type:"button",className:"msg-menu-confirm-cancel",disabled:d==="delete",onClick:()=>ne(!1),children:"Hủy"})]})]}):E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item danger",onClick:()=>{x(""),ne(!0)},children:[E.jsxs("svg",{...Vo,children:[E.jsx("path",{d:"M3 6h18"}),E.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),E.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),E.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),E.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),E.jsx("span",{children:"Xóa"})]})),E.jsx("div",{className:"msg-menu-divider",role:"separator"}),E.jsxs("button",{type:"button",role:"menuitem",className:"msg-menu-item",onClick:F,children:[E.jsxs("svg",{...Vo,children:[E.jsx("circle",{cx:"12",cy:"12",r:"9"}),E.jsx("path",{d:"m9 12 2 2 4-4"})]}),E.jsx("span",{children:"Chọn"})]})]})]})})}function rV(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?E.jsx("b",{className:"mention",children:t},r):E.jsx("span",{children:t},r))}function vm(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function OT({status:n}){return n==="sending"||n==="failed"?E.jsxs("svg",{className:`tick tick-sending${n==="failed"?" tick-failed":""}`,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":n==="failed"?"Gửi thất bại":"Đang gửi",children:[E.jsx("circle",{cx:"6",cy:"6",r:"4.6"}),E.jsx("path",{d:"M6 3.5V6l1.8 1.2"})]}):n==="read"?E.jsxs("svg",{className:"tick tick-read",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã đọc",children:[E.jsx("path",{d:"M1 6.5 4 9.5 10 2.5"}),E.jsx("path",{d:"M5.5 6.5 8.5 9.5 14.5 2.5"})]}):E.jsx("svg",{className:"tick",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã gửi",children:E.jsx("path",{d:"M1.5 6.5 4.5 9.5 10.5 2.5"})})}function iV(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`pending-${crypto.randomUUID()}`:`pending-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}const sV=1e4,oV=15e3,aV=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(min-width: 768px)").matches?220:140,lV=220,uV=160,cV=32,hV=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,dV=500;function Em(n,e){return!n||!e?!1:n.senderId===e.id||e.id!=="chung"&&e.id!=="muse"&&n.senderId===`muse_${e.id}`}function fV(n,e,t){const r=n&&typeof n=="object"?n:{},s={};for(const[u,d]of Object.entries(r)){if(!Array.isArray(d))continue;const f=d.filter(m=>m!==e);f.length&&(s[u]=f)}return Array.isArray(r[t])&&r[t].includes(e)||(s[t]=[...s[t]||[],e]),s}function pV(n,e){if(!n||typeof n!="object")return null;for(const[t,r]of Object.entries(n))if(Array.isArray(r)&&r.includes(e))return t;return null}function mV({person:n}){const[e,t]=q.useState([]),[r,s]=q.useState([]),[a,u]=q.useState(""),[d,f]=q.useState(""),[m,y]=q.useState(""),[w,I]=q.useState(!1),[N,M]=q.useState(!1),[F,U]=q.useState(null),[ie,Y]=q.useState(""),[ne,B]=q.useState(""),[Ie,_e]=q.useState(!1),[x,C]=q.useState([]),[A,D]=q.useState(!1),[O,j]=q.useState(null),[k,Be]=q.useState(null),[Se,te]=q.useState(""),[fe,K]=q.useState(""),[ue,ee]=q.useState(null),[L,Q]=q.useState(!1),[ye,be]=q.useState([]),[Le,De]=q.useState(!1),Fe=!!(n&&n.role==="manager"),ze=q.useRef(null),Ge=q.useRef(null),Xe=q.useRef(null),an=q.useRef(null),yn=q.useRef(new Map),Tt=q.useRef(new Map),Qn=q.useRef(null),Nr=q.useRef([]),_t=q.useRef(!1),[xr,Pi]=q.useState(!0),[de,nt]=q.useState(0),xt=q.useRef(!0),cr=q.useRef(!0),hr=q.useRef(null);q.useEffect(()=>Ku(dl(lo(Si,"messages"),qu("createdAt","desc"),Gu(200)),P=>t(P.docs.map(J=>({id:J.id,...J.data(),_pendingWrite:J.metadata.hasPendingWrites})).reverse()),()=>Y("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),q.useEffect(()=>Ku(dl(lo(Si,"aiEvents"),qu("createdAt","desc"),Gu(200)),P=>s(P.docs.map(J=>({id:J.id,...J.data()})))),[]);const br=q.useMemo(()=>{const P=new Map;for(const J of r)J.messageId&&P.set(J.messageId,J);return P},[r]),dr=q.useMemo(()=>new Set(e.filter(P=>!P._pendingWrite).map(P=>P.id)),[e]),bt=q.useMemo(()=>new Set(x.flatMap(P=>[P.docId,P.realId].filter(Boolean))),[x]),at=q.useMemo(()=>e.filter(P=>!(P._pendingWrite&&bt.has(P.id))),[e,bt]),Yn=q.useMemo(()=>{const P=m.trim();return at.filter(J=>BC(`${J.content||""} ${J.senderName||""}`,P))},[at,m]),ti=q.useMemo(()=>{const P=new Map;for(const J of e)P.set(J.id,J);return P},[e]);function fr(P){const J=Ge.current;if(!J||!P)return;const oe=J.querySelector(`[data-message-id="${CSS.escape(P)}"]`);oe&&(oe.scrollIntoView({behavior:"smooth",block:"center"}),oe.classList.add("flash"),setTimeout(()=>oe.classList.remove("flash"),1200))}async function pr(P){try{await pn.pinMessage(P.id,!P.pinned,P),t(J=>J.map(oe=>oe.id===P.id?{...oe,pinned:!P.pinned}:oe))}catch(J){B(Ki(J,"ghim tin nhắn"))}}function mr(P){U(P);const J=Xe.current;J&&(J.focus({preventScroll:!0}),requestAnimationFrame(()=>{document.activeElement!==J&&J.focus({preventScroll:!0})}))}function Dr(P){const J=yn.current.get(P);J&&(clearTimeout(J),yn.current.delete(P))}function Ni(P){Dr(P),C(J=>J.filter(oe=>oe.tempId!==P))}q.useEffect(()=>(_t.current=!1,()=>{_t.current=!0;for(const P of yn.current.values())clearTimeout(P);yn.current.clear();for(const P of Tt.current.values())clearTimeout(P.timeoutId);Tt.current.clear()}),[]),q.useEffect(()=>{Nr.current=e,e.length!==0&&C(P=>{let J=!1;const oe=[];for(const Ae of P)if(Ae.realId&&dr.has(Ae.realId)||Ae.docId&&dr.has(Ae.docId)){Dr(Ae.tempId);const Je=Tt.current.get(Ae.tempId);Je&&(clearTimeout(Je.timeoutId),Tt.current.delete(Ae.tempId)),J=!0}else oe.push(Ae);return J?oe:P})},[e,dr]);const ls=q.useMemo(()=>x.filter(P=>!(P.realId&&dr.has(P.realId)||P.docId&&dr.has(P.docId))),[x,dr]);function _o(){const P=Ge.current;if(!P)return;const J=P.scrollHeight-P.scrollTop-P.clientHeight,oe=xt.current?J<=lV:J<=uV;xt.current=oe,Pi(oe),oe&&nt(0)}function ni(P=!0){const J=Ge.current;J&&(J.scrollTo({top:J.scrollHeight,behavior:P?"smooth":"auto"}),nt(0))}q.useEffect(()=>{const P=Ge.current;if(!P||at.length===0)return;const J=at[at.length-1],oe=hr.current;if(hr.current=J.id,cr.current){P.scrollTo({top:P.scrollHeight,behavior:"auto"}),cr.current=!1;return}if(J.id===oe)return;const Ae=oe?at.findIndex(Ze=>Ze.id===oe):-1,Je=Ae>=0?at.slice(Ae+1):[J],kt=Je.some(Ze=>Ze.senderId===n.id);if(xt.current||kt)P.scrollTo({top:P.scrollHeight,behavior:"smooth"});else{const Ze=Je.filter(st=>st.senderId!==n.id).length;Ze>0&&nt(st=>st+Ze)}},[at,n.id]),q.useEffect(()=>{const P=Ge.current;if(!P||typeof ResizeObserver>"u")return;let J=P.clientHeight;const oe=new ResizeObserver(()=>{const Ae=P.clientHeight;Ae<J&&P.scrollHeight-P.scrollTop-J<=cV&&(P.scrollTop=P.scrollHeight),J=Ae});return oe.observe(P),()=>oe.disconnect()},[]),q.useEffect(()=>{e.slice(-5).forEach(J=>{J.id&&!(J.seenBy||[]).includes(n.id)&&pn.markSeen(J.id,n.id).catch(()=>{})})},[e,n.id]);function ri(){const P=Xe.current;if(!P)return;const J=aV();P.style.height="auto";const oe=P.scrollHeight;P.style.height=`${Math.min(oe,J)}px`,P.style.overflowY=oe>J?"auto":"hidden"}q.useEffect(()=>{ri()},[a]),q.useEffect(()=>{w&&an.current&&an.current.focus()},[w]);function us(P){u(P);const J=P.match(/@([A-Za-zÀ-ỹ]*)$/);J?(f(J[1]),M(!0)):M(!1)}function cs(P){u(J=>J.replace(/@[A-Za-zÀ-ỹ]*$/,`@${P.name} `)),M(!1),Xe.current&&Xe.current.focus()}async function vn(P=null){const J=typeof P=="string";if(Ie)return;let oe,Ae,Je;if(J){const st=x.find(Rt=>Rt.tempId===P);if(!st||st.status!=="failed")return;oe=st.tempId,Ae=st.content,Je=st.threadId||null,Dr(oe),C(Rt=>Rt.map(Gt=>Gt.tempId===oe?{...Gt,status:"sending",realId:null}:Gt))}else{if(Ae=a.trim(),!Ae)return;Je=F?F.id:null,oe=iV();const st={tempId:oe,id:oe,docId:oe,realId:null,senderId:n.id,senderName:n.name,senderType:"human",content:Ae,threadId:Je,createdAt:new Date().toISOString(),seenBy:[n.id],status:"sending"};C(Rt=>[...Rt,st]),u(""),U(null),requestAnimationFrame(()=>{ni()})}const kt=Tt.current.get(oe);kt&&clearTimeout(kt.timeoutId),Qn.current=oe,_e(!0),B("");const Ze={timeoutId:null};Tt.current.set(oe,Ze),Ze.timeoutId=setTimeout(()=>{_t.current||Tt.current.get(oe)===Ze&&(C(st=>st.map(Rt=>Rt.tempId===oe?{...Rt,status:"failed"}:Rt)),B("Không gửi được tin nhắn — kiểm tra mạng rồi thử lại."),Qn.current===oe&&_e(!1))},oV);try{const st=await pn.sendMessage({content:Ae,threadId:Je,clientDocId:oe},n);clearTimeout(Ze.timeoutId);const Rt=Tt.current.get(oe);if(Rt&&(clearTimeout(Rt.timeoutId),Tt.current.delete(oe)),_t.current)return;const Gt=st&&st.id?st.id:null;if(Gt&&Nr.current.some(Qe=>Qe.id===Gt&&!Qe._pendingWrite))Ni(oe);else if(Gt)t(Qe=>Qe.some(fs=>fs.id===Gt)?Qe:[...Qe,{id:Gt,docId:Gt,roomId:"general",senderId:n.id,senderName:n.name,senderType:"human",content:Ae,threadId:Je||null,replyToMessageId:Je||null,attachments:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[n.id],pinned:!1}]),Ni(oe);else{C(fs=>fs.map(Lr=>Lr.tempId===oe?{...Lr,status:"sent",realId:Gt}:Lr)),Dr(oe);const Qe=setTimeout(()=>{Ni(oe)},sV);yn.current.set(oe,Qe)}requestAnimationFrame(()=>{ri(),Xe.current&&Xe.current.focus()})}catch(st){if(clearTimeout(Ze.timeoutId),_t.current||Tt.current.get(oe)!==Ze)return;Tt.current.delete(oe),Dr(oe),C(Rt=>Rt.map(Gt=>Gt.tempId===oe?{...Gt,status:"failed"}:Gt)),B(vm(st))}finally{!_t.current&&Qn.current===oe&&(!Tt.current.has(oe)||Tt.current.get(oe)===Ze)&&_e(!1)}}async function gr(P){if(P){D(!0),B("");try{const J=`rooms/general/${Date.now()}_${P.name}`,oe=await jM(BM(KM,J),P),Ae=await UM(oe.ref);await pn.sendMessage({content:`Đã gửi file: ${P.name}`,attachments:[{name:P.name,size:P.size,type:P.type,url:Ae,path:J}]},n)}catch(J){B(/load failed|failed to fetch|networkerror/i.test(String(J.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${J.message}`)}finally{D(!1)}}}const ln=O?Js.find(P=>P.id===O):null,dt=k&&ti.get(k.messageId)||null,ii=q.useMemo(()=>new Set(ye),[ye]),On=q.useMemo(()=>at.filter(P=>ii.has(P.id)&&!P.deleted),[at,ii]),Or=q.useMemo(()=>On.filter(P=>Fe||Em(P,n)),[On,Fe,n]),Xn=q.useRef(0),un=q.useCallback(()=>{Xn.current=Date.now(),Be(null),te(""),K("")},[]);q.useEffect(()=>{k&&(!dt||dt.deleted)&&un()},[k,dt,un]),q.useEffect(()=>{if(!L||k)return;function P(J){J.key==="Escape"&&(J.preventDefault(),Q(!1),be([]))}return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[L,k]);function It(P,J){if(!(!P||P.tempId||P.deleted||L||!J)){if(k&&k.messageId===P.id){un();return}te(""),K(""),Be({messageId:P.id,anchorRect:J})}}async function si(P,J,oe=!1){if(!P||P.tempId||P.deleted)return;const Ae=P.reactions||{},Je=fV(Ae,n.id,J);t(kt=>kt.map(Ze=>Ze.id===P.id?{...Ze,reactions:Je}:Ze)),oe?(te(""),K("react")):B("");try{const kt=await pn.toggleReaction(P.id,J);kt&&kt.reactions&&!_t.current&&t(Ze=>Ze.map(st=>st.id===P.id?{...st,reactions:kt.reactions}:st)),oe&&!_t.current&&un()}catch(kt){if(_t.current)return;t(st=>st.map(Rt=>Rt.id===P.id?{...Rt,reactions:Ae}:Rt));const Ze=Ki(kt,"thả cảm xúc");oe?(te(Ze),K("")):B(Ze)}}async function Ln(P,J){const oe=String(J||"").trim();if(!oe)throw new Error("Nội dung tin nhắn không được để trống.");if(oe===(P.content||"").trim()){ee(null);return}try{const Ae=await pn.editMessage(P.id,oe);if(_t.current)return;const Je=Ae&&Ae.message&&Ae.message.editedAt||new Date().toISOString();t(kt=>kt.map(Ze=>Ze.id===P.id?{...Ze,content:oe,edited:!0,editedAt:Je}:Ze)),ee(null)}catch(Ae){throw new Error(Ki(Ae,"sửa tin nhắn"))}}async function xi(P){if(!(!P||P.tempId||P.deleted)){te(""),K("delete");try{const J=await pn.deleteMessage(P.id);if(_t.current)return;const oe=J&&J.message&&J.message.deletedAt||new Date().toISOString();t(Ae=>Ae.map(Je=>Je.id===P.id?{...Je,content:"Tin nhắn đã xóa",deleted:!0,deletedAt:oe,reactions:{},attachments:[],linkPreview:null,edited:!1,editedAt:null}:Je)),ue===P.id&&ee(null),un()}catch(J){if(_t.current)return;te(Ki(J,"xóa tin nhắn")),K("")}}}async function oi(P){const J={id:P.id,senderName:P.senderName||ar(P.senderId),content:P.content||""},oe=await pn.sendMessage({content:P.content||"",forwarded:!0,forwardedFrom:J},n),Ae=oe&&oe.id?oe.id:null;return Ae&&!_t.current&&t(Je=>Je.some(kt=>kt.id===Ae)?Je:[...Je,{id:Ae,docId:Ae,roomId:"general",senderId:n.id,senderName:n.name,senderType:"human",content:P.content||"",threadId:null,replyToMessageId:null,attachments:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[n.id],pinned:!1,forwarded:!0,forwardedFrom:J,reactions:{},edited:!1,editedAt:null,deleted:!1,deletedAt:null}]),oe}async function hs(P){if(!(!P||P.tempId||P.deleted)){un(),B("");try{await oi(P),_t.current||requestAnimationFrame(()=>ni())}catch(J){_t.current||B(vm(J))}}}function Jn(P){un(),ee(null),Q(!0),be(P&&P.id&&!P.tempId&&!P.deleted?[P.id]:[])}function bi(){Q(!1),be([])}function aa(P){be(J=>J.includes(P)?J.filter(oe=>oe!==P):[...J,P])}async function ds(){if(Le||Or.length===0)return;De(!0),B("");const P=new Set;let J=null;for(const oe of Or)try{await pn.deleteMessage(oe.id),P.add(oe.id)}catch(Ae){J||(J=Ae)}if(!_t.current){if(P.size>0){const oe=new Date().toISOString();t(Ae=>Ae.map(Je=>P.has(Je.id)?{...Je,content:"Tin nhắn đã xóa",deleted:!0,deletedAt:oe,reactions:{},attachments:[],linkPreview:null,edited:!1,editedAt:null}:Je))}J&&B(Ki(J,"xóa tin nhắn")),De(!1),bi()}}async function la(){if(Le||On.length===0)return;De(!0),B("");let P=0,J=null;for(const oe of On)if(String(oe.content||"").trim())try{await oi(oe),P+=1}catch(Ae){J||(J=Ae)}_t.current||(P>0&&requestAnimationFrame(()=>ni()),J&&B(vm(J)),De(!1),bi())}return E.jsxs("div",{className:"chat",children:[E.jsxs("div",{className:`search-wrap${w?" open":""}`,children:[E.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>I(P=>!P),children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("circle",{cx:"11",cy:"11",r:"8"}),E.jsx("path",{d:"m21 21-4.3-4.3"})]})}),E.jsx("input",{ref:an,className:"search",value:m,onChange:P=>y(P.target.value),placeholder:"Tìm tin nhắn…","aria-label":"Tìm tin nhắn"})]}),ie&&E.jsx("div",{className:"err-load",children:ie}),E.jsxs("div",{className:"chat-list-wrap",children:[E.jsxs("div",{className:"chat-list",ref:Ge,onScroll:_o,children:[Yn.length===0&&ls.length===0&&E.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),Yn.filter(P=>P.pinned).map(P=>E.jsx(wm,{m:P,person:n,event:br.get(P.id),onReply:mr,parent:P.threadId?ti.get(P.threadId):null,onQuoteClick:fr,pinned:!0,onAvatar:j,onTogglePin:pr,onOpenMenu:It,menuClosedAtRef:Xn,onToggleReaction:si,isEditing:ue===P.id,onEditSave:Ln,onEditCancel:()=>ee(null),selectMode:L,selected:ii.has(P.id),onToggleSelect:aa},`pin-${P.id}`)),Yn.filter(P=>!P.pinned).map(P=>E.jsx(wm,{m:P,person:n,event:br.get(P.id),onReply:mr,parent:P.threadId?ti.get(P.threadId):null,onQuoteClick:fr,onAvatar:j,onTogglePin:pr,onOpenMenu:It,menuClosedAtRef:Xn,onToggleReaction:si,isEditing:ue===P.id,onEditSave:Ln,onEditCancel:()=>ee(null),selectMode:L,selected:ii.has(P.id),onToggleSelect:aa},P.id)),ls.map(P=>E.jsx(wm,{m:P,person:n,event:null,onReply:mr,parent:P.threadId?ti.get(P.threadId):null,onQuoteClick:fr,onAvatar:j,onTogglePin:pr,status:P.status,onRetry:P.status==="failed"?()=>vn(P.tempId):void 0,selectMode:L},P.tempId))]}),E.jsxs("button",{type:"button",className:`scroll-bottom-btn${xr?"":" visible"}${de>0?" has-new":""}`,"aria-label":de>0?`Cuộn xuống — có ${de>99?"hơn 99":de} tin mới`:"Cuộn xuống tin mới nhất","aria-hidden":xr,tabIndex:xr?-1:0,onClick:()=>ni(!0),children:[E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("polyline",{points:"6 9 12 15 18 9"})}),de>0&&E.jsxs("span",{className:"scroll-bottom-label",children:[de>99?"99+":de," tin mới"]})]})]}),k&&dt&&!dt.deleted&&E.jsx(nV,{message:dt,anchorRect:k.anchorRect,isMine:dt.senderId===n.id,canEdit:Em(dt,n),canDelete:Fe||Em(dt,n),myReaction:pV(dt.reactions,n.id),error:Se,busyAction:fe,onClose:un,onReact:P=>si(dt,P,!0),onReply:()=>{un(),mr(dt)},onEdit:()=>{un(),ee(dt.id)},onTogglePin:()=>{un(),pr(dt)},onForward:()=>hs(dt),onDelete:()=>xi(dt),onSelect:()=>Jn(dt)}),O&&ln&&E.jsx("div",{className:"member-detail-overlay",onClick:()=>j(null),children:E.jsxs("div",{className:"member-detail",onClick:P=>P.stopPropagation(),role:"dialog","aria-label":`Thông tin ${ln.name}`,children:[E.jsx("span",{className:"avatar",style:{backgroundColor:Zs(ln.id),color:"#fff"},children:ln.name.charAt(0)}),E.jsx("h3",{children:ln.name}),E.jsxs("div",{className:"muted",children:[ln.roleVi," · ID: ",ln.id]}),E.jsx("div",{className:"muted",style:{marginTop:4},children:ln.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":"Thành viên phòng giao việc Enteesee."}),E.jsxs("div",{className:"row",style:{marginTop:12},children:[E.jsxs("button",{type:"button",onClick:()=>{u(P=>`${P}@${ln.name} `),j(null),Xe.current&&Xe.current.focus()},children:["Nhắc @",ln.name]}),E.jsx("button",{type:"button",onClick:()=>j(null),children:"Đóng"})]})]})}),F&&E.jsxs("div",{className:"reply-bar",children:[E.jsxs("div",{className:"reply-bar-text",children:[E.jsxs("span",{className:"reply-bar-title",children:["Đang trả lời ",F.senderName||ar(F.senderId)]}),E.jsx("span",{className:"reply-bar-snippet",children:(F.content||"").slice(0,80)})]}),E.jsx("button",{type:"button",className:"reply-bar-close","aria-label":"Hủy trả lời",onClick:()=>U(null),children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[E.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),E.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),N&&E.jsx("div",{className:"mention-list",children:Js.filter(P=>P.name.toLowerCase().startsWith(d.toLowerCase())).map(P=>E.jsxs("button",{type:"button",onClick:()=>cs(P),children:["@",P.name," — ",P.roleVi]},P.id))}),ne&&E.jsx("div",{className:"err",children:ne}),L&&E.jsxs("div",{className:"select-bar",role:"region","aria-label":"Hành động với tin nhắn đã chọn",children:[E.jsxs("span",{className:"select-bar-count",children:["Đã chọn ",On.length," tin"]}),E.jsxs("div",{className:"select-bar-actions",children:[E.jsxs("button",{type:"button",className:"select-bar-btn",disabled:Le||On.length===0,onClick:la,children:[E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("path",{d:"m15 14 5-5-5-5"}),E.jsx("path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"})]}),E.jsx("span",{children:"Chuyển tiếp"})]}),E.jsxs("button",{type:"button",className:"select-bar-btn danger",disabled:Le||Or.length===0,title:Or.length===0?"Chỉ xóa được tin của mình":`Xóa ${Or.length} tin`,onClick:ds,children:[E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("path",{d:"M3 6h18"}),E.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),E.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),E.jsx("span",{children:"Xóa"})]}),E.jsx("button",{type:"button",className:"select-bar-btn",disabled:Le,onClick:bi,children:"Hủy"})]})]}),E.jsxs("div",{className:"composer",children:[E.jsxs("div",{className:"composer-box",children:[E.jsx("button",{type:"button",className:"attach-btn",onClick:()=>ze.current&&ze.current.click(),disabled:A,title:"Đính kèm file","aria-label":"Đính kèm file",children:E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),E.jsx("textarea",{ref:Xe,value:a,onChange:P=>us(P.target.value),placeholder:"Nhắn tin…","aria-label":"Nhắn tin",rows:1,onKeyDown:P=>{P.key==="Enter"&&!P.shiftKey&&!P.nativeEvent.isComposing&&!hV()&&(P.preventDefault(),vn())}})]}),E.jsx("input",{ref:ze,type:"file",style:{display:"none"},onChange:P=>{gr(P.target.files[0]),P.target.value=""}}),E.jsx("button",{className:"send-btn",type:"button",onMouseDown:P=>P.preventDefault(),onClick:()=>vn(),disabled:Ie||!a.trim(),title:"Gửi","aria-label":"Gửi",children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),E.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),A&&E.jsx("div",{className:"composer-note",children:"Đang tải file lên…"})]})}function gV(n){if(!n||n.length===0)return"Chưa ai xem tin này.";const e=n.map(ar);return e.length===1?`${e[0]} đã xem`:`${e.slice(0,-1).join(", ")} & ${e[e.length-1]} đã xem`}function wm({m:n,person:e,event:t,onReply:r,parent:s,onQuoteClick:a,pinned:u,onAvatar:d,status:f,onRetry:m,onTogglePin:y,onOpenMenu:w,menuClosedAtRef:I,onToggleReaction:N,isEditing:M,onEditSave:F,onEditCancel:U,selectMode:ie,selected:Y,onToggleSelect:ne}){const[B,Ie]=q.useState(!1),[_e,x]=q.useState(n.content||""),[C,A]=q.useState(""),[D,O]=q.useState(!1),j=q.useRef(null),k=q.useRef(null),Be=q.useRef(null),Se=q.useRef(null),te=q.useRef(!1),fe=!!n.tempId,K=!!n.deleted,ue=!fe&&!K,ee=n.senderId===e.id,L=t,Q=(n.senderName||ar(n.senderId)||"?").charAt(0),ye=Zs(n.senderId),be=(n.seenBy||[]).filter(de=>de!==e.id),Le=be.length>0,De=f||(Le?"read":"sent"),Fe=!K&&(De==="sent"||De==="read"),ze=!K&&L?`${L.museRepliedAt?`Muse đã phản hồi ${qo(L.museRepliedAt)}`:"Muse đang phản hồi…"} · ${L.employeeAcknowledgedAt?`Nhân viên đã xác nhận ${qo(L.employeeAcknowledgedAt)}`:"Chờ nhân viên xác nhận"}`:null,Ge=q.useMemo(()=>K||!n.reactions||typeof n.reactions!="object"?[]:Object.entries(n.reactions).filter(([,de])=>Array.isArray(de)&&de.length>0),[n.reactions,K]);q.useEffect(()=>()=>{Be.current&&clearTimeout(Be.current)},[]),q.useEffect(()=>{M&&(x(n.content||""),A(""),O(!1),requestAnimationFrame(()=>{const de=k.current;de&&(de.focus(),de.setSelectionRange(de.value.length,de.value.length))}))},[M,n.content]);function Xe(){Be.current&&(clearTimeout(Be.current),Be.current=null),Se.current=null}function an(){return!!I&&Date.now()-I.current<200}function yn(){if(!w||fe||K||ie||M||an())return;const de=j.current?j.current.getBoundingClientRect():null;de&&w(n,de)}function Tt(de){if(fe||K||ie||M||de.touches.length!==1||de.target.closest("button, a, textarea"))return;const nt=de.touches[0];Xe(),Se.current={x:nt.clientX,y:nt.clientY},Be.current=setTimeout(()=>{if(Be.current=null,te.current=!0,typeof navigator<"u"&&typeof navigator.vibrate=="function")try{navigator.vibrate(10)}catch{}yn()},dV)}function Qn(de){if(!Be.current)return;if(!Se.current||de.touches.length!==1){Xe();return}const nt=de.touches[0],xt=nt.clientX-Se.current.x,cr=nt.clientY-Se.current.y;Math.hypot(xt,cr)>10&&Xe()}function Nr(de){fe||K||ie||M||(de.preventDefault(),yn())}function _t(de){if(te.current){te.current=!1;return}ie||an()||fe||K||M||de.target.closest("button, a, textarea")||ee&&Fe&&Ie(nt=>!nt)}function xr(){!ie||!ue||ne&&ne(n.id)}async function Pi(){if(D||!F)return;const de=_e.trim();if(!de){A("Nội dung tin nhắn không được để trống.");return}O(!0),A("");try{await F(n,de)}catch(nt){A(nt&&nt.message||"Không sửa được tin nhắn — thử lại sau."),O(!1)}}return E.jsxs("div",{className:`msg-row ${ee?"mine":""}${ie?" select-mode":""}${Y?" selected":""}`,"data-message-id":n.id,onClick:xr,children:[ie&&E.jsx("span",{className:`msg-select-check${Y?" checked":""}${ue?"":" disabled"}`,role:"checkbox","aria-checked":!!Y,"aria-disabled":!ue,"aria-label":Y?"Bỏ chọn tin nhắn":"Chọn tin nhắn",children:Y&&E.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("polyline",{points:"20 6 9 17 4 12"})})}),E.jsxs("div",{className:`msg-row-body ${ee?"mine":""}`,children:[!ee&&E.jsx("button",{type:"button",className:"msg-avatar-btn","aria-label":`Xem thông tin ${n.senderName||ar(n.senderId)}`,onClick:de=>{ie||(de.stopPropagation(),d&&d(n.senderId))},children:E.jsx("span",{className:"avatar",style:{backgroundColor:ye},children:Q})}),E.jsxs("div",{ref:j,className:`msg ${ee?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||u?"pinned":""}${K?" deleted":""}`,onClick:_t,onTouchStart:Tt,onTouchMove:Qn,onTouchEnd:Xe,onTouchCancel:Xe,onContextMenu:Nr,children:[!ee&&E.jsx("div",{className:"sender-name",style:{color:ye},children:n.senderName||ar(n.senderId)}),K?E.jsxs("div",{className:"content msg-deleted",children:["Tin nhắn đã xóa",E.jsx("span",{className:"msg-time",children:Od(n.createdAt)})]}):E.jsxs(E.Fragment,{children:[n.threadId&&s&&E.jsxs("button",{type:"button",className:"reply-quote",onClick:de=>{ie||(de.stopPropagation(),a&&a(s.id))},"aria-label":"Xem tin gốc",children:[E.jsx("span",{className:"reply-quote-name",style:{color:Zs(s.senderId)},children:s.senderName||ar(s.senderId)}),E.jsx("span",{className:"reply-quote-text",children:s.deleted?"Tin nhắn đã xóa":s.content})]}),n.forwarded&&n.forwardedFrom&&E.jsxs("button",{type:"button",className:"reply-quote",onClick:de=>{ie||(de.stopPropagation(),a&&a(n.forwardedFrom.id))},"aria-label":"Xem tin gốc",children:[E.jsx("span",{className:"reply-quote-label",children:"Đã chuyển tiếp"}),E.jsx("span",{className:"reply-quote-name",children:n.forwardedFrom.senderName}),E.jsx("span",{className:"reply-quote-text",children:n.forwardedFrom.content})]}),n.senderType==="ai"&&E.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||u)&&E.jsx("span",{className:"tag status",children:"Đã ghim"}),M?E.jsxs("div",{className:"msg-edit-box",onClick:de=>de.stopPropagation(),children:[E.jsx("textarea",{ref:k,className:"msg-edit-input",value:_e,rows:3,"aria-label":"Sửa nội dung tin nhắn",onChange:de=>x(de.target.value),onKeyDown:de=>{de.key==="Escape"?(de.preventDefault(),U&&U()):de.key==="Enter"&&(de.ctrlKey||de.metaKey)&&(de.preventDefault(),Pi())}}),C&&E.jsx("div",{className:"form-error",children:C}),E.jsxs("div",{className:"msg-edit-actions",children:[E.jsx("button",{type:"button",className:"primary msg-edit-btn",disabled:D,onClick:Pi,children:D?"Đang lưu…":"Lưu"}),E.jsx("button",{type:"button",className:"msg-edit-btn",disabled:D,onClick:()=>U&&U(),children:"Hủy"})]})]}):E.jsxs("div",{className:"content",children:[rV(n.content),E.jsxs("span",{className:"msg-time",children:[Od(n.createdAt),ee&&E.jsx("span",{className:"msg-time-wrap",children:Fe?E.jsx("button",{type:"button",className:"tick-btn","aria-label":De==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái","aria-expanded":B,title:De==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái",onClick:de=>{ie||an()||(de.stopPropagation(),Ie(nt=>!nt))},children:E.jsx(OT,{status:De})}):E.jsxs(E.Fragment,{children:[E.jsx(OT,{status:De}),De==="failed"&&m&&E.jsx("button",{type:"button",className:"retry-inline-btn",onClick:de=>{de.stopPropagation(),m()},children:"Thử lại"})]})})]})]}),n.edited&&!M&&E.jsx("div",{className:"msg-edited",children:"Đã chỉnh sửa"}),n.linkPreview&&E.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",onClick:de=>{ie&&de.preventDefault()},children:[n.linkPreview.image&&E.jsx("img",{src:n.linkPreview.image,alt:""}),E.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&E.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((de,nt)=>E.jsx("div",{children:(de.type||"").startsWith("image/")?E.jsx("a",{href:de.url,target:"_blank",rel:"noreferrer",onClick:xt=>{ie&&xt.preventDefault()},children:E.jsx("img",{className:"attachment-img",src:de.url,alt:de.name})}):E.jsxs("span",{className:"attachment-file",children:[E.jsx("a",{href:de.url,target:"_blank",rel:"noreferrer",onClick:xt=>{ie&&xt.preventDefault()},children:de.name})," ",E.jsxs("span",{className:"muted",children:["(",Math.round((de.size||0)/1024)," KB)"]})]})},nt)),Ge.length>0&&E.jsx("div",{className:"msg-reactions",role:"group","aria-label":"Cảm xúc",children:Ge.map(([de,nt])=>{const xt=nt.includes(e.id),cr=nt.map(ar).join(", "),hr=`${de} ${nt.length} — ${cr}`;return E.jsxs("button",{type:"button",className:`reaction-chip${xt?" active":""}`,title:hr,"aria-label":hr,"aria-pressed":xt,onClick:br=>{ie||(br.stopPropagation(),N&&N(n,de,!1))},children:[E.jsx("span",{className:"reaction-emoji",children:de}),E.jsx("span",{className:"reaction-count",children:nt.length})]},de)})}),ze&&E.jsx("div",{className:"msg-status-wrap",children:E.jsx("span",{className:"tag ai-replied",children:ze})}),!fe&&!M&&!ie&&E.jsx("button",{type:"button",className:"msg-more-btn","aria-label":"Thêm tùy chọn",title:"Thêm tùy chọn",onClick:de=>{de.stopPropagation(),yn()},children:E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("circle",{cx:"5",cy:"12",r:"1.4"}),E.jsx("circle",{cx:"12",cy:"12",r:"1.4"}),E.jsx("circle",{cx:"19",cy:"12",r:"1.4"})]})})]})]}),ee&&B&&Fe&&!ie&&E.jsx("div",{className:"seen-line",role:"status",children:gV(be)})]})]})}const _V=E.jsx("svg",{className:"combo-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("polyline",{points:"6 9 12 15 18 9"})}),yV=E.jsx("svg",{className:"combo-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("polyline",{points:"20 6 9 17 4 12"})});function vV({id:n,label:e,options:t,value:r,onChange:s}){const[a,u]=q.useState(!1),[d,f]=q.useState(-1),m=q.useRef(null),y=q.useRef({text:"",at:0}),w=t.find(F=>F.value===r)||t[0],I=`${n}-listbox`;q.useEffect(()=>{if(!a)return;const F=U=>{m.current&&!m.current.contains(U.target)&&u(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[a]);function N(F){const U=t[F];U&&(s(U.value),u(!1),f(-1))}function M(F){if(F.key==="ArrowDown"){if(F.preventDefault(),!a){u(!0),f(0);return}f(U=>Math.min(t.length-1,U+1))}else if(F.key==="ArrowUp"){if(F.preventDefault(),!a){u(!0),f(t.length-1);return}f(U=>Math.max(0,U-1))}else if(F.key==="Enter"||F.key===" ")F.preventDefault(),a&&d>=0?N(d):u(U=>!U);else if(F.key==="Escape")F.preventDefault(),u(!1),f(-1);else if(F.key==="Home")F.preventDefault(),u(!0),f(0);else if(F.key==="End")F.preventDefault(),u(!0),f(t.length-1);else if(F.key.length===1){const U=Date.now(),ie=y.current;ie.text=U-ie.at>800?F.key:ie.text+F.key,ie.at=U;const Y=t.findIndex(ne=>ne.label.toLowerCase().startsWith(ie.text.toLowerCase()));Y>=0&&(u(!0),f(Y))}}return E.jsxs("div",{className:"combo",ref:m,children:[e&&E.jsx("span",{className:"combo-label",id:`${n}-label`,children:e}),E.jsxs("button",{type:"button",id:n,className:"combo-trigger","aria-haspopup":"listbox","aria-expanded":a,"aria-labelledby":e?`${n}-label ${n}`:void 0,"aria-activedescendant":a&&d>=0?`${n}-opt-${d}`:void 0,onClick:()=>{u(F=>!F),f(t.findIndex(F=>F.value===r))},onKeyDown:M,children:[E.jsx("span",{className:"combo-value",children:w?w.label:""}),_V]}),a&&E.jsx("div",{className:"combo-panel",role:"listbox",id:I,"aria-labelledby":e?`${n}-label`:void 0,children:t.map((F,U)=>E.jsxs("button",{type:"button",id:`${n}-opt-${U}`,role:"option","aria-selected":F.value===r,className:`combo-option${F.value===r?" selected":""}${d===U?" highlighted":""}`,onClick:()=>N(U),onMouseEnter:()=>f(U),children:[F.value===r?yV:E.jsx("span",{className:"combo-check placeholder","aria-hidden":"true"}),F.label]},F.value))})]})}const EV=["urgent","high","normal","low"];function wV({person:n}){const[e,t]=q.useState([]),[r,s]=q.useState("all"),[a,u]=q.useState(""),[d,f]=q.useState(!1),[m,y]=q.useState(""),[w,I]=q.useState(null),[N,M]=q.useState("");async function F(){try{const B=n.role==="manager"?"":`?assignee=${n.id}`,Ie=await pn.listTasks(B);t(Ie.tasks||[]),y("")}catch(B){y(Ki(B,"danh sách công việc"))}}q.useEffect(()=>{F();const B=setInterval(F,15e3);return()=>clearInterval(B)},[n.id,n.role]);const U=q.useMemo(()=>e.filter(B=>r!=="all"&&B.status!==r?!1:BC(`${B.title} ${B.description||""} ${(B.assignees||[]).map(ar).join(" ")}`,a)),[e,r,a]);async function ie(B,Ie,_e){y("");try{await pn.setTaskStatus(B.id,Ie,_e),await F()}catch(x){y(Ki(x,"danh sách công việc"))}}const Y=n.role==="manager",ne=ym.reduce((B,Ie)=>({...B,[Ie]:e.filter(_e=>_e.status===Ie).length}),{});return E.jsxs("div",{children:[E.jsx("div",{className:"row",style:{marginBottom:10},children:ym.map(B=>E.jsxs("span",{className:"tag status",children:[mu[B],": ",ne[B]||0]},B))}),E.jsx("input",{className:"search",value:a,onChange:B=>u(B.target.value),placeholder:"Tìm công việc…","aria-label":"Tìm công việc"}),E.jsxs("div",{className:"row",style:{marginBottom:10,alignItems:"flex-end"},children:[E.jsx("div",{style:{flex:1,minWidth:180},children:E.jsx(vV,{id:"task-status-filter",label:"Trạng thái",options:[{value:"all",label:"Tất cả trạng thái"},...ym.map(B=>({value:B,label:mu[B]}))],value:r,onChange:s})}),Y&&E.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&E.jsxs("div",{className:"err",role:"alert",children:[m,E.jsx("button",{type:"button",className:"retry-btn",onClick:F,children:"Thử lại"})]}),d&&Y&&E.jsx(TV,{onDone:()=>{f(!1),F()},onCancel:()=>f(!1)}),U.length===0&&!m&&E.jsx("div",{className:"empty",children:Y?E.jsxs(E.Fragment,{children:[E.jsx("div",{children:"Chưa có công việc nào — bấm để giao việc đầu tiên."}),E.jsx("div",{style:{marginTop:12},children:E.jsx("button",{type:"button",onClick:()=>f(!0),children:"+ Giao việc mới"})})]}):"Chưa có dữ liệu — chưa có công việc nào."}),U.map(B=>{const Ie=(B.assignees||[]).includes(n.id);return E.jsxs("div",{className:"card",children:[E.jsx("h3",{children:B.title}),E.jsx("div",{className:"muted",children:B.description||""}),E.jsxs("div",{className:"row",style:{marginTop:6},children:[E.jsx("span",{className:"tag status",children:mu[B.status]}),E.jsxs("span",{className:"tag status",children:["Ưu tiên: ",UC[B.priority]||B.priority]}),E.jsxs("span",{className:"muted",children:["Người nhận: ",(B.assignees||[]).map(ar).join(", ")]}),B.dueAt&&E.jsxs("span",{className:"muted",children:["Hạn: ",qo(B.dueAt)]})]}),B.reviewNote&&E.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",B.reviewNote]}),E.jsxs("div",{className:"row",style:{marginTop:10},children:[B.status==="waiting_acceptance"&&Ie&&E.jsx("button",{className:"primary",onClick:()=>ie(B,"in_progress"),children:"Xác nhận nhận việc"}),B.status==="in_progress"&&Ie&&E.jsx("button",{className:"primary",onClick:()=>ie(B,"waiting_review"),children:"Trình duyệt"}),B.status==="waiting_review"&&Y&&E.jsx("button",{className:"primary",onClick:()=>ie(B,"completed"),children:"Duyệt — Hoàn thành"}),B.status==="waiting_review"&&Y&&E.jsx("button",{className:"danger",onClick:()=>I(B.id),children:"Yêu cầu sửa"}),B.status==="completed"&&E.jsxs("span",{className:"tag acked",children:["Đã duyệt ",qo(B.approvedAt)]})]}),w===B.id&&E.jsxs("div",{style:{marginTop:8},children:[E.jsx("label",{htmlFor:"reject-reason",style:{fontSize:13,fontWeight:600},children:"Lý do yêu cầu sửa (bắt buộc)"}),E.jsx("input",{id:"reject-reason",value:N,onChange:_e=>M(_e.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),E.jsxs("div",{className:"row",style:{marginTop:6},children:[E.jsx("button",{disabled:!N.trim(),onClick:()=>{ie(B,"in_progress",N.trim()),I(null),M("")},children:"Gửi yêu cầu sửa"}),E.jsx("button",{onClick:()=>I(null),children:"Hủy"})]})]}),(B.history||[]).length>0&&E.jsxs("details",{style:{marginTop:8},children:[E.jsxs("summary",{className:"muted",children:["Lịch sử (",B.history.length,")"]}),(B.history||[]).map((_e,x)=>E.jsxs("div",{className:"muted",children:[qo(_e.at)," — ",ar(_e.by),": ",_e.from?mu[_e.from]:"—"," → ",mu[_e.to],_e.reason?` — ${_e.reason}`:""]},x))]})]},B.id)})]})}function TV({onDone:n,onCancel:e}){const[t,r]=q.useState(""),[s,a]=q.useState(""),[u,d]=q.useState([]),[f,m]=q.useState(""),[y,w]=q.useState("normal"),[I,N]=q.useState(""),[M,F]=q.useState(!1);async function U(Y){if(Y.preventDefault(),!t.trim()||u.length===0){N("Nhập tiêu đề và chọn ít nhất một người nhận.");return}F(!0),N("");try{await pn.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:y}),n()}catch(ne){N(Ki(ne,"công việc"))}finally{F(!1)}}function ie(Y){d(ne=>ne.includes(Y)?ne.filter(B=>B!==Y):[...ne,Y])}return E.jsxs("form",{className:"card task-form",onSubmit:U,children:[E.jsx("h3",{style:{margin:0},children:"Giao việc mới"}),E.jsxs("div",{className:"form-field",children:[E.jsx("label",{htmlFor:"task-title",children:"Tiêu đề công việc"}),E.jsx("input",{id:"task-title",value:t,onChange:Y=>r(Y.target.value),placeholder:"vd: Chuẩn bị báo cáo tuần",required:!0})]}),E.jsxs("div",{className:"form-field",children:[E.jsx("label",{htmlFor:"task-desc",children:"Mô tả"}),E.jsx("textarea",{id:"task-desc",value:s,onChange:Y=>a(Y.target.value),placeholder:"Mô tả ngắn: làm gì, kết quả mong muốn là gì",rows:3})]}),E.jsxs("div",{className:"form-field",children:[E.jsx("label",{id:"assignees-label",children:"Người nhận"}),E.jsx("div",{className:"assignee-chips",role:"group","aria-labelledby":"assignees-label",children:Js.filter(Y=>Y.role==="staff").map(Y=>E.jsxs("label",{className:`assignee-chip${u.includes(Y.id)?" selected":""}`,children:[E.jsx("input",{type:"checkbox",checked:u.includes(Y.id),onChange:()=>ie(Y.id),"aria-label":`Chọn ${Y.name}`}),E.jsx("span",{className:"assignee-check","aria-hidden":"true",children:u.includes(Y.id)&&E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:E.jsx("polyline",{points:"20 6 9 17 4 12"})})}),E.jsx("span",{className:"avatar sm",style:{backgroundColor:Zs(Y.id),color:"#fff"},children:Y.name.charAt(0)}),Y.name]},Y.id))}),E.jsx("div",{className:"form-helper",children:"Chọn một hoặc nhiều người nhận."})]}),E.jsxs("div",{className:"form-field",children:[E.jsx("label",{htmlFor:"task-due",children:"Hạn hoàn thành"}),E.jsx("input",{id:"task-due",type:"datetime-local",value:f,onChange:Y=>m(Y.target.value)}),E.jsx("div",{className:"form-helper",children:"Để trống nếu không có hạn."})]}),E.jsxs("div",{className:"form-field",children:[E.jsx("label",{id:"priority-label",children:"Ưu tiên"}),E.jsx("div",{className:"segmented",role:"group","aria-labelledby":"priority-label",children:EV.map(Y=>E.jsx("button",{type:"button","aria-pressed":y===Y,className:`${y===Y?"selected":""}${Y==="urgent"&&y===Y?" danger-opt":""}`,onClick:()=>w(Y),children:UC[Y]},Y))})]}),I&&E.jsx("div",{className:"err",role:"alert",style:{margin:0},children:I}),E.jsxs("div",{className:"row",children:[E.jsx("button",{className:"primary",type:"submit",disabled:M,children:M?"Đang giao…":"Giao việc"}),E.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const IV={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận",pin:"Ghim"};function SV({person:n,onUnread:e}){const[t,r]=q.useState([]),[s,a]=q.useState(""),[u,d]=q.useState(0),f=q.useCallback(()=>{a(""),d(y=>y+1)},[]);q.useEffect(()=>Ku(dl(lo(Si,"notifications"),cS("recipientId","==",n.id),qu("createdAt","desc"),Gu(100)),y=>{const w=y.docs.map(I=>({id:I.id,...I.data()}));r(w),a(""),e(w.filter(I=>!I.read).length)},y=>{console.error("Notifications load failed:",y),a("Không tải được thông báo — thử lại sau.")}),[n.id,e,u]);async function m(){await Promise.all(t.filter(y=>!y.read).map(y=>fS(vd(Si,"notifications",y.id),{read:!0}).catch(()=>{})))}return E.jsxs("div",{children:[E.jsxs("div",{className:"row",style:{marginBottom:10},children:[E.jsx("b",{children:"Thông báo của bạn"}),E.jsx("button",{onClick:m,children:"Đánh dấu đã đọc hết"})]}),s&&E.jsxs("div",{className:"err",role:"alert",children:[s,E.jsx("button",{type:"button",className:"retry-btn",onClick:f,children:"Thử lại"})]}),t.length===0&&!s&&E.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(y=>E.jsxs("div",{className:`card${y.read?"":" unread"}`,style:y.read?{opacity:.65}:{},children:[!y.read&&E.jsx("span",{className:"unread-dot","aria-hidden":"true"}),E.jsxs("div",{className:"row",children:[E.jsx("span",{className:"tag status",children:IV[y.type]||y.type}),E.jsx("span",{className:"muted",children:qo(y.createdAt)})]}),E.jsxs("div",{style:{marginTop:6},children:[ar(y.senderId),": ",y.content]}),y.replyToContent&&E.jsxs("div",{className:"muted",style:{marginTop:4},children:["Trả lời ",y.replyToSenderName||"tin nhắn",": ",(y.replyToContent||"").slice(0,150)]})]},y.id))]})}const CV=[{value:"system",label:"Theo hệ thống"},{value:"light",label:"Sáng"},{value:"dark",label:"Tối"}];function kV({person:n,onlineByPerson:e,onSignOut:t,themeMode:r="system",onThemeModeChange:s}){const[a,u]=q.useState([]),[d,f]=q.useState([]),[m,y]=q.useState(""),[w,I]=q.useState([]),[N,M]=q.useState({}),[F,U]=q.useState("");q.useEffect(()=>Ku(dl(lo(Si,"aiEvents"),qu("createdAt","desc"),Gu(20)),B=>u(B.docs.map(Ie=>({id:Ie.id,...Ie.data()})))),[]),q.useEffect(()=>{n.role==="manager"&&(pn.listJobs().then(B=>f(B.jobs||[])).catch(B=>y(Ki(B,"hàng đợi AI"))),pn.listUsers().then(B=>I(B.users||[])).catch(()=>{}))},[n.role]);const Y=a.filter(B=>(B.mentions||[]).includes(n.id)).find(B=>B.museRepliedAt),ne=d.filter(B=>B.deadLetter);return E.jsxs("div",{children:[E.jsxs("div",{className:"card",children:[E.jsx("h3",{children:n.name}),E.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),E.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),E.jsxs("div",{className:"muted",children:["Muse của bạn: ",Y?`đã phản hồi lần cuối ${qo(Y.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),E.jsx("div",{className:"row",style:{marginTop:10},children:E.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),E.jsxs("div",{className:"card",children:[E.jsx("h3",{children:"Giao diện"}),E.jsx("div",{className:"segmented",role:"group","aria-label":"Chọn giao diện",children:CV.map(B=>{const Ie=r===B.value;return E.jsx("button",{type:"button",className:Ie?"selected":"","aria-pressed":Ie,onClick:()=>s&&s(B.value),children:B.label},B.value)})}),E.jsx("div",{className:"muted",style:{marginTop:8},children:"Theo hệ thống: tự đổi sáng/tối theo chế độ của điện thoại/máy tính."})]}),E.jsxs("div",{className:"card",children:[E.jsx("h3",{children:"Kênh Telegram"}),E.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),E.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),E.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),E.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&E.jsxs("div",{className:"card",children:[E.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),w.length===0&&E.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),w.map(B=>E.jsxs("div",{className:"form-field",style:{marginBottom:8},children:[E.jsxs("label",{htmlFor:`tg-${B.id}`,children:[B.name," — chat_id Telegram"]}),E.jsxs("div",{className:"row",children:[E.jsx("input",{id:`tg-${B.id}`,value:N[B.id]!==void 0?N[B.id]:B.telegramChatId||"",onChange:Ie=>M({...N,[B.id]:Ie.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),E.jsx("button",{onClick:async()=>{await pn.setTelegramChatId(B.id,N[B.id]!==void 0?N[B.id]:B.telegramChatId||""),U(`Đã lưu chat_id của ${B.name}.`),pn.listUsers().then(Ie=>I(Ie.users||[]))},children:"Lưu"})]})]},B.id)),F&&E.jsx("div",{className:"muted",children:F})]}),n.role==="manager"&&E.jsxs("div",{className:"card",children:[E.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),m&&E.jsx("div",{className:"err",children:m}),d.length===0&&E.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),ne.length>0&&E.jsxs("div",{className:"err",children:["Có ",ne.length," job vào dead-letter (gửi thất bại nhiều lần): ",ne.map(B=>B.eventId).join(", ")]}),d.slice(0,20).map(B=>E.jsxs("div",{className:"muted",children:[B.eventId," → ",ar(B.recipientId),": ",B.status," (lần thử ",B.attempt,")",B.lastError?` — ${B.lastError}`:""]},B.jobId))]})]})}const $a={chat:E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("path",{d:"M9 11l3 3L22 4"}),E.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),E.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),E.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),menu:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[E.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),E.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),E.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[E.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),E.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),moon:E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:E.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),sun:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[E.jsx("circle",{cx:"12",cy:"12",r:"4"}),E.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),E.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),E.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),E.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),E.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),E.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),E.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),E.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},LT=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function MT({p:n,online:e,lastSeen:t,lastMsg:r,task:s,isAi:a,onSelect:u}){const d=r&&r.content||"";return E.jsxs("li",{className:"member-row-btn",role:"button",tabIndex:0,onClick:()=>u&&u(n),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&u&&(f.preventDefault(),u(n))},title:`Xem thông tin ${n.name}`,children:[E.jsxs("span",{className:"avatar-wrap",children:[E.jsx("span",{className:"avatar sm",style:{backgroundColor:Zs(n.id),color:"#fff"},children:n.name.charAt(0)}),E.jsx("span",{className:e?"online-dot":"offline-dot"})]}),E.jsxs("span",{className:"side-person",children:[E.jsxs("span",{className:"side-name",children:[n.name," ",E.jsxs("span",{className:"side-role",children:["· ",n.roleVi]})]}),E.jsx("span",{className:`side-status${e?" online":""}`,children:e?"Đang online":t?`Hoạt động lần cuối ${zC(t)}`:"Chưa có dữ liệu hoạt động"}),r?E.jsxs("span",{className:"side-last",children:["“",d.slice(0,48),d.length>48?"…":"","” · ",Od(r.createdAt)]}):E.jsx("span",{className:"side-last",children:"Chưa có tin nhắn gần đây"}),s&&E.jsxs("span",{className:"side-task",children:["Đang làm: ",s]})]})]})}function RV(){const[n,e]=q.useState(null),[t,r]=q.useState(!1),s=q.useRef(!1),[a,u]=q.useState(null),[d,f]=q.useState("chat"),[m,y]=q.useState({}),[w,I]=q.useState(0),[N,M]=q.useState(!1),[F,U]=q.useState({}),[ie,Y]=q.useState({}),[ne,B]=q.useState(null),[Ie,_e]=q.useState(()=>Iu()||"system"),[x,C]=q.useState(()=>document.documentElement.dataset.theme||Qh(Iu()||"system"));function A(te){const fe=te==="dark"||te==="light"||te==="system"?te:"system",K=Qh(fe);_e(fe),C(K),Yh(K),XM(fe)}function D(){A(x==="dark"?"light":"dark")}q.useEffect(()=>{const te=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,fe=()=>{const ue=Iu();if(ue==="light"||ue==="dark")return;const ee=$C();Yh(ee),C(ee)},K=ue=>{if(ue.key!==null&&ue.key!==G_)return;const ee=Iu()||"system",L=Qh(ee);_e(ee),Yh(L),C(L)};return te&&(te.addEventListener?te.addEventListener("change",fe):te.addListener&&te.addListener(fe)),window.addEventListener("storage",K),()=>{te&&(te.removeEventListener?te.removeEventListener("change",fe):te.removeListener&&te.removeListener(fe)),window.removeEventListener("storage",K)}},[]),q.useEffect(()=>zA(_l,async te=>{if(s.current||(s.current=!0,r(!0)),e(te),!te){u(null);return}const fe=(te.email||"").toLowerCase();let K=null;try{const ue=dl(lo(Si,"users"),cS("email","==",fe)),ee=await uD(ue);if(!ee.empty){const L=ee.docs[0].data();K=Js.find(Q=>Q.id===L.id)||{id:L.id,name:L.name||fe,role:L.role||"staff",roleVi:L.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!K&&fe==="teddyssk559@gmail.com"&&(K=Js.find(ue=>ue.id==="chung")),K||(K={id:te.uid,name:te.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(K)}),[]),q.useEffect(()=>{if(!n||!a)return;const te=ST(xT,`presence/${n.uid}`),fe=()=>CT(te,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(ee=>console.error("Presence write failed:",ee));fe(),_L(te).remove().catch(ee=>console.error("Presence onDisconnect failed:",ee));const K=setInterval(fe,6e4),ue=vL(ST(xT,"presence"),ee=>y(ee.val()||{}),ee=>console.error("Presence read failed:",ee));return()=>{clearInterval(K),ue(),CT(te,null).catch(ee=>console.error("Presence clear failed:",ee))}},[n,a]);const O=q.useMemo(()=>{const te={};for(const fe of Object.values(m||{})){if(!fe||!fe.personId)continue;const K=typeof fe.lastSeen=="number"?fe.lastSeen:Date.parse(fe.lastSeen||"");te[fe.personId]=fe.online===!0&&Number.isFinite(K)&&Date.now()-K<12e4}return te},[m]),j=q.useMemo(()=>{const te={};for(const fe of Object.values(m||{})){if(!fe||!fe.personId)continue;const K=typeof fe.lastSeen=="number"?fe.lastSeen:Date.parse(fe.lastSeen||"");Number.isFinite(K)&&(te[fe.personId]=K)}return te},[m]);if(q.useEffect(()=>{if(n)return Ku(dl(lo(Si,"messages"),qu("createdAt","desc"),Gu(60)),te=>{const fe={};for(const K of te.docs){const ue=K.data();ue&&ue.senderId&&!fe[ue.senderId]&&(fe[ue.senderId]={content:ue.content||"",createdAt:ue.createdAt})}U(fe)},()=>{})},[n]),q.useEffect(()=>{if(!n)return;let te=!1;return pn.listTasks("").then(fe=>{if(te)return;const K={};for(const ue of fe.tasks||[])if(ue.status==="in_progress")for(const ee of ue.assignees||[])K[ee]||(K[ee]=ue.title);Y(K)}).catch(()=>{}),()=>{te=!0}},[n]),!t)return E.jsx("div",{className:"app",children:E.jsxs("div",{className:"loading",children:[E.jsx("span",{className:"avatar avatar-group",children:"E"}),E.jsx("div",{className:"brand-title",children:"Enteesee"}),E.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})});if(!n)return E.jsx(JM,{});if(!a)return E.jsx("div",{className:"app",children:E.jsx("div",{className:"content",children:E.jsx("div",{className:"main",children:E.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})});const k=Js.filter(te=>te.id!=="muse"),Be=k.filter(te=>O[te.id]).length,Se={id:"muse",name:"Muse",roleVi:"AI điều phối"};return E.jsxs("div",{className:`app${d==="chat"?" app-chat":""}`,children:[E.jsxs("aside",{className:`sidebar${N?" open":""}`,children:[E.jsxs("div",{className:"side-brand",children:[E.jsx("span",{className:"avatar avatar-group",children:"E"}),E.jsxs("div",{children:[E.jsx("div",{className:"brand-title",children:"Enteesee"}),E.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]}),E.jsx("button",{type:"button",className:"drawer-close","aria-label":"Đóng menu",onClick:()=>M(!1),children:$a.close})]}),E.jsx("nav",{className:"side-nav",children:LT.map(te=>E.jsxs("button",{className:d===te.id?"active":"",onClick:()=>{f(te.id),M(!1)},children:[E.jsxs("span",{className:"nav-icon",children:[$a[te.id],te.id==="notifs"&&w>0&&E.jsx("span",{className:"badge",children:w})]}),E.jsx("span",{children:te.label})]},te.id))}),E.jsx("div",{className:"side-section",children:"Thành viên · Hoạt động"}),E.jsxs("ul",{className:"side-people",children:[k.map(te=>E.jsx(MT,{p:te,online:!!O[te.id],lastSeen:j[te.id],lastMsg:F[te.id],task:ie[te.id],onSelect:B},te.id)),E.jsx(MT,{p:Se,isAi:!0,online:!0,lastSeen:j.muse,lastMsg:F.muse,task:ie.muse,onSelect:B})]}),E.jsxs("div",{className:"side-user",children:[E.jsx("span",{className:"avatar",style:{backgroundColor:Zs(a.id),color:"#fff"},children:a.name.charAt(0)}),E.jsxs("div",{children:[E.jsx("div",{className:"side-name",children:a.name}),E.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),N&&E.jsx("div",{className:"drawer-backdrop",onClick:()=>M(!1)}),E.jsxs("div",{className:"content",children:[E.jsxs("header",{className:"header",children:[E.jsx("button",{type:"button",className:"menu-btn","aria-label":"Mở menu",onClick:()=>M(!0),children:$a.menu}),E.jsxs("div",{className:"chat-peer",onClick:()=>M(!0),title:"Mở menu",children:[E.jsx("span",{className:"avatar avatar-group",children:"E"}),E.jsxs("div",{className:"peer-info",children:[E.jsx("div",{className:"brand-title",children:"Enteesee"}),E.jsxs("div",{className:"peer-status",children:[k.length," thành viên",Be>0&&E.jsxs("span",{className:"online-count",children:[" · ",Be," đang online"]})]})]})]}),E.jsx("button",{type:"button",className:"header-avatars",onClick:()=>M(!0),"aria-label":"Mở danh sách thành viên",title:"Danh sách thành viên",children:k.map(te=>E.jsxs("span",{className:"avatar-wrap",title:`${te.name} — ${O[te.id]?"đang online":"offline"}`,children:[E.jsx("span",{className:"avatar",style:{backgroundColor:Zs(te.id),color:"#fff"},children:te.name.charAt(0)}),E.jsx("span",{className:O[te.id]?"online-dot":"offline-dot"})]},te.id))}),E.jsx("button",{type:"button",className:"theme-btn",onClick:D,"aria-label":x==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối",title:x==="dark"?"Giao diện sáng":"Giao diện tối",children:x==="dark"?$a.sun:$a.moon})]}),E.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&E.jsx(mV,{person:a}),d==="tasks"&&E.jsx(wV,{person:a}),d==="notifs"&&E.jsx(SV,{person:a,onUnread:I}),d==="account"&&E.jsx(kV,{person:a,onlineByPerson:O,onSignOut:()=>$A(_l),themeMode:Ie,onThemeModeChange:A})]})]}),E.jsx("nav",{className:"nav",children:LT.map(te=>E.jsxs("button",{className:d===te.id?"active":"",onClick:()=>{f(te.id),M(!1)},children:[E.jsxs("span",{className:"nav-icon",children:[$a[te.id],te.id==="notifs"&&w>0&&E.jsx("span",{className:"badge",children:w})]}),E.jsx("span",{children:te.label})]},te.id))}),ne&&E.jsx("div",{className:"member-detail-overlay",onClick:()=>B(null),children:E.jsxs("div",{className:"member-detail",onClick:te=>te.stopPropagation(),role:"dialog","aria-label":`Thông tin ${ne.name}`,children:[E.jsx("span",{className:"avatar",style:{backgroundColor:Zs(ne.id),color:"#fff"},children:ne.name.charAt(0)}),E.jsx("h3",{children:ne.name}),E.jsxs("div",{className:"muted",children:[ne.roleVi," · ID: ",ne.id]}),E.jsx("div",{className:"muted",style:{marginTop:4},children:ne.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":O[ne.id]?"Đang online.":j[ne.id]?`Hoạt động lần cuối ${zC(j[ne.id])}.`:"Chưa có dữ liệu hoạt động."}),F[ne.id]&&E.jsxs("div",{className:"muted",style:{marginTop:4},children:["Tin mới nhất: “",(F[ne.id].content||"").slice(0,80),"” · ",Od(F[ne.id].createdAt)]}),ie[ne.id]&&E.jsxs("div",{className:"muted",style:{marginTop:4},children:["Đang làm: ",ie[ne.id]]}),E.jsxs("div",{className:"row",style:{marginTop:12},children:[E.jsx("button",{type:"button",onClick:()=>{B(null),M(!1),f("chat")},children:"Nhắn trong phòng"}),E.jsx("button",{type:"button",onClick:()=>B(null),children:"Đóng"})]})]})})]})}YM();rR.createRoot(document.getElementById("root")).render(E.jsx(Yk.StrictMode,{children:E.jsx(RV,{})}));
