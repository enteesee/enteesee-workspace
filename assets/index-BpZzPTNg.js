(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function LT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $p={exports:{}},tu={},Wp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function zR(){if(Yv)return Ve;Yv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function T(U){return U===null||typeof U!="object"?null:(U=E&&U[E]||U["@@iterator"],typeof U=="function"?U:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,M={};function V(U,K,ye){this.props=U,this.context=K,this.refs=M,this.updater=ye||P}V.prototype.isReactComponent={},V.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},V.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function re(){}re.prototype=V.prototype;function $(U,K,ye){this.props=U,this.context=K,this.refs=M,this.updater=ye||P}var X=$.prototype=new re;X.constructor=$,L(X,V.prototype),X.isPureReactComponent=!0;var q=Array.isArray,we=Object.prototype.hasOwnProperty,he={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(U,K,ye){var ke,Oe={},je=null,qe=null;if(K!=null)for(ke in K.ref!==void 0&&(qe=K.ref),K.key!==void 0&&(je=""+K.key),K)we.call(K,ke)&&!b.hasOwnProperty(ke)&&(Oe[ke]=K[ke]);var Ge=arguments.length-2;if(Ge===1)Oe.children=ye;else if(1<Ge){for(var Ze=Array(Ge),It=0;It<Ge;It++)Ze[It]=arguments[It+2];Oe.children=Ze}if(U&&U.defaultProps)for(ke in Ge=U.defaultProps,Ge)Oe[ke]===void 0&&(Oe[ke]=Ge[ke]);return{$$typeof:n,type:U,key:je,ref:qe,props:Oe,_owner:he.current}}function R(U,K){return{$$typeof:n,type:U.type,key:K,ref:U.ref,props:U.props,_owner:U._owner}}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function D(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ye){return K[ye]})}var F=/\/+/g;function S(U,K){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):K.toString(36)}function me(U,K,ye,ke,Oe){var je=typeof U;(je==="undefined"||je==="boolean")&&(U=null);var qe=!1;if(U===null)qe=!0;else switch(je){case"string":case"number":qe=!0;break;case"object":switch(U.$$typeof){case n:case e:qe=!0}}if(qe)return qe=U,Oe=Oe(qe),U=ke===""?"."+S(qe,0):ke,q(Oe)?(ye="",U!=null&&(ye=U.replace(F,"$&/")+"/"),me(Oe,K,ye,"",function(It){return It})):Oe!=null&&(N(Oe)&&(Oe=R(Oe,ye+(!Oe.key||qe&&qe.key===Oe.key?"":(""+Oe.key).replace(F,"$&/")+"/")+U)),K.push(Oe)),1;if(qe=0,ke=ke===""?".":ke+":",q(U))for(var Ge=0;Ge<U.length;Ge++){je=U[Ge];var Ze=ke+S(je,Ge);qe+=me(je,K,ye,Ze,Oe)}else if(Ze=T(U),typeof Ze=="function")for(U=Ze.call(U),Ge=0;!(je=U.next()).done;)je=je.value,Ze=ke+S(je,Ge++),qe+=me(je,K,ye,Ze,Oe);else if(je==="object")throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return qe}function Ce(U,K,ye){if(U==null)return U;var ke=[],Oe=0;return me(U,ke,"","",function(je){return K.call(ye,je,Oe++)}),ke}function De(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(ye){(U._status===0||U._status===-1)&&(U._status=1,U._result=ye)},function(ye){(U._status===0||U._status===-1)&&(U._status=2,U._result=ye)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var Se={current:null},ne={transition:null},_e={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:ne,ReactCurrentOwner:he};function le(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:Ce,forEach:function(U,K,ye){Ce(U,function(){K.apply(this,arguments)},ye)},count:function(U){var K=0;return Ce(U,function(){K++}),K},toArray:function(U){return Ce(U,function(K){return K})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ve.Component=V,Ve.Fragment=t,Ve.Profiler=s,Ve.PureComponent=$,Ve.StrictMode=r,Ve.Suspense=f,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Ve.act=le,Ve.cloneElement=function(U,K,ye){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ke=L({},U.props),Oe=U.key,je=U.ref,qe=U._owner;if(K!=null){if(K.ref!==void 0&&(je=K.ref,qe=he.current),K.key!==void 0&&(Oe=""+K.key),U.type&&U.type.defaultProps)var Ge=U.type.defaultProps;for(Ze in K)we.call(K,Ze)&&!b.hasOwnProperty(Ze)&&(ke[Ze]=K[Ze]===void 0&&Ge!==void 0?Ge[Ze]:K[Ze])}var Ze=arguments.length-2;if(Ze===1)ke.children=ye;else if(1<Ze){Ge=Array(Ze);for(var It=0;It<Ze;It++)Ge[It]=arguments[It+2];ke.children=Ge}return{$$typeof:n,type:U.type,key:Oe,ref:je,props:ke,_owner:qe}},Ve.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Ve.createElement=A,Ve.createFactory=function(U){var K=A.bind(null,U);return K.type=U,K},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(U){return{$$typeof:d,render:U}},Ve.isValidElement=N,Ve.lazy=function(U){return{$$typeof:y,_payload:{_status:-1,_result:U},_init:De}},Ve.memo=function(U,K){return{$$typeof:m,type:U,compare:K===void 0?null:K}},Ve.startTransition=function(U){var K=ne.transition;ne.transition={};try{U()}finally{ne.transition=K}},Ve.unstable_act=le,Ve.useCallback=function(U,K){return Se.current.useCallback(U,K)},Ve.useContext=function(U){return Se.current.useContext(U)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(U){return Se.current.useDeferredValue(U)},Ve.useEffect=function(U,K){return Se.current.useEffect(U,K)},Ve.useId=function(){return Se.current.useId()},Ve.useImperativeHandle=function(U,K,ye){return Se.current.useImperativeHandle(U,K,ye)},Ve.useInsertionEffect=function(U,K){return Se.current.useInsertionEffect(U,K)},Ve.useLayoutEffect=function(U,K){return Se.current.useLayoutEffect(U,K)},Ve.useMemo=function(U,K){return Se.current.useMemo(U,K)},Ve.useReducer=function(U,K,ye){return Se.current.useReducer(U,K,ye)},Ve.useRef=function(U){return Se.current.useRef(U)},Ve.useState=function(U){return Se.current.useState(U)},Ve.useSyncExternalStore=function(U,K,ye){return Se.current.useSyncExternalStore(U,K,ye)},Ve.useTransition=function(){return Se.current.useTransition()},Ve.version="18.3.1",Ve}var Xv;function ag(){return Xv||(Xv=1,Wp.exports=zR()),Wp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function $R(){if(Jv)return tu;Jv=1;var n=ag(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,E={},T=null,P=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(P=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:d,key:T,ref:P,props:E,_owner:s.current}}return tu.Fragment=t,tu.jsx=u,tu.jsxs=u,tu}var Zv;function WR(){return Zv||(Zv=1,$p.exports=$R()),$p.exports}var I=WR(),te=ag();const HR=LT(te);var Th={},Hp={exports:{}},Cn={},qp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function qR(){return eE||(eE=1,(function(n){function e(ne,_e){var le=ne.length;ne.push(_e);e:for(;0<le;){var U=le-1>>>1,K=ne[U];if(0<s(K,_e))ne[U]=_e,ne[le]=K,le=U;else break e}}function t(ne){return ne.length===0?null:ne[0]}function r(ne){if(ne.length===0)return null;var _e=ne[0],le=ne.pop();if(le!==_e){ne[0]=le;e:for(var U=0,K=ne.length,ye=K>>>1;U<ye;){var ke=2*(U+1)-1,Oe=ne[ke],je=ke+1,qe=ne[je];if(0>s(Oe,le))je<K&&0>s(qe,Oe)?(ne[U]=qe,ne[je]=le,U=je):(ne[U]=Oe,ne[ke]=le,U=ke);else if(je<K&&0>s(qe,le))ne[U]=qe,ne[je]=le,U=je;else break e}}return _e}function s(ne,_e){var le=ne.sortIndex-_e.sortIndex;return le!==0?le:ne.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,E=null,T=3,P=!1,L=!1,M=!1,V=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(ne){for(var _e=t(m);_e!==null;){if(_e.callback===null)r(m);else if(_e.startTime<=ne)r(m),_e.sortIndex=_e.expirationTime,e(f,_e);else break;_e=t(m)}}function q(ne){if(M=!1,X(ne),!L)if(t(f)!==null)L=!0,De(we);else{var _e=t(m);_e!==null&&Se(q,_e.startTime-ne)}}function we(ne,_e){L=!1,M&&(M=!1,re(A),A=-1),P=!0;var le=T;try{for(X(_e),E=t(f);E!==null&&(!(E.expirationTime>_e)||ne&&!D());){var U=E.callback;if(typeof U=="function"){E.callback=null,T=E.priorityLevel;var K=U(E.expirationTime<=_e);_e=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(f)&&r(f),X(_e)}else r(f);E=t(f)}if(E!==null)var ye=!0;else{var ke=t(m);ke!==null&&Se(q,ke.startTime-_e),ye=!1}return ye}finally{E=null,T=le,P=!1}}var he=!1,b=null,A=-1,R=5,N=-1;function D(){return!(n.unstable_now()-N<R)}function F(){if(b!==null){var ne=n.unstable_now();N=ne;var _e=!0;try{_e=b(!0,ne)}finally{_e?S():(he=!1,b=null)}}else he=!1}var S;if(typeof $=="function")S=function(){$(F)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Ce=me.port2;me.port1.onmessage=F,S=function(){Ce.postMessage(null)}}else S=function(){V(F,0)};function De(ne){b=ne,he||(he=!0,S())}function Se(ne,_e){A=V(function(){ne(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){L||P||(L=!0,De(we))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ne){switch(T){case 1:case 2:case 3:var _e=3;break;default:_e=T}var le=T;T=_e;try{return ne()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,_e){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var le=T;T=ne;try{return _e()}finally{T=le}},n.unstable_scheduleCallback=function(ne,_e,le){var U=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,ne){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,ne={id:y++,callback:_e,priorityLevel:ne,startTime:le,expirationTime:K,sortIndex:-1},le>U?(ne.sortIndex=le,e(m,ne),t(f)===null&&ne===t(m)&&(M?(re(A),A=-1):M=!0,Se(q,le-U))):(ne.sortIndex=K,e(f,ne),L||P||(L=!0,De(we))),ne},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ne){var _e=T;return function(){var le=T;T=_e;try{return ne.apply(this,arguments)}finally{T=le}}}})(Gp)),Gp}var tE;function GR(){return tE||(tE=1,qp.exports=qR()),qp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function KR(){if(nE)return Cn;nE=1;var n=ag(),e=GR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function T(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function P(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function L(i,o,l,h){if(o===null||typeof o>"u"||P(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){V[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];V[o]=new M(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){V[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){V[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){V[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){V[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){V[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){V[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){V[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function $(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(re,$);V[o]=new M(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(re,$);V[o]=new M(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(re,$);V[o]=new M(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){V[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),V.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){V[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function X(i,o,l,h){var p=V.hasOwnProperty(o)?V[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(L(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),he=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),ne=Symbol.iterator;function _e(i){return i===null||typeof i!="object"?null:(i=ne&&i[ne]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,U;function K(i){if(U===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);U=o&&o[1]||""}return`
`+U+i}var ye=!1;function ke(i,o){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){h=W}i.call(o.prototype)}else{try{throw Error()}catch(W){h=W}i()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,k=_.length-1;1<=w&&0<=k&&p[w]!==_[k];)k--;for(;1<=w&&0<=k;w--,k--)if(p[w]!==_[k]){if(w!==1||k!==1)do if(w--,k--,0>k||p[w]!==_[k]){var x=`
`+p[w].replace(" at new "," at ");return i.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",i.displayName)),x}while(1<=w&&0<=k);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?K(i):""}function Oe(i){switch(i.tag){case 5:return K(i.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return i=ke(i.type,!1),i;case 11:return i=ke(i.type.render,!1),i;case 1:return i=ke(i.type,!0),i;default:return""}}function je(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case he:return"Portal";case R:return"Profiler";case A:return"StrictMode";case S:return"Suspense";case me:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case F:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ce:return o=i.displayName||null,o!==null?o:je(i.type)||"Memo";case De:o=i._payload,i=i._init;try{return je(i(o))}catch{}}return null}function qe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(o);case 8:return o===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ge(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ze(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function It(i){var o=Ze(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function tr(i){i._valueTracker||(i._valueTracker=It(i))}function Xr(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ze(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Cr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ft(i,o){var l=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Y(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ge(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Ee(i,o){o=o.checked,o!=null&&X(i,"checked",o,!1)}function Ut(i,o){Ee(i,o);var l=Ge(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Jr(i,o.type,l):o.hasOwnProperty("defaultValue")&&Jr(i,o.type,Ge(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function jn(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Jr(i,o,l){(o!=="number"||Cr(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var nr=Array.isArray;function tn(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ge(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Zr(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function xo(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(nr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Ge(l)}}function bo(i,o){var l=Ge(o.value),h=Ge(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function cl(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function bt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?bt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ei,hl=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=ei.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function xi(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ls=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(i){Ls.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Os[o]=Os[i]})});function dl(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Os.hasOwnProperty(i)&&Os[i]?(""+o).trim():o+"px"}function fl(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=dl(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var pl=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(i,o){if(o){if(pl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function gl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=null;function Do(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Oo=null,Bn=null,Sr=null;function Lo(i){if(i=jl(i)){if(typeof Oo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Vc(o),Oo(i.stateNode,i.type,o))}}function Rr(i){Bn?Sr?Sr.push(i):Sr=[i]:Bn=i}function _l(){if(Bn){var i=Bn,o=Sr;if(Sr=Bn=null,Lo(i),o)for(i=0;i<o.length;i++)Lo(o[i])}}function Vs(i,o){return i(o)}function yl(){}var ti=!1;function vl(i,o,l){if(ti)return i(o,l);ti=!0;try{return Vs(i,o,l)}finally{ti=!1,(Bn!==null||Sr!==null)&&(yl(),_l())}}function vt(i,o){var l=i.stateNode;if(l===null)return null;var h=Vc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Mo=!1;if(d)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Mo=!1}function Fs(i,o,l,h,p,_,w,k,x){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(Z){this.onError(Z)}}var Us=!1,Vo=null,ir=!1,El=null,_f={onError:function(i){Us=!0,Vo=i}};function Fo(i,o,l,h,p,_,w,k,x){Us=!1,Vo=null,Fs.apply(_f,arguments)}function lc(i,o,l,h,p,_,w,k,x){if(Fo.apply(this,arguments),Us){if(Us){var W=Vo;Us=!1,Vo=null}else throw Error(t(198));ir||(ir=!0,El=W)}}function sr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function js(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function or(i){if(sr(i)!==i)throw Error(t(188))}function uc(i){var o=i.alternate;if(!o){if(o=sr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return or(p),i;if(_===h)return or(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,k=p.child;k;){if(k===l){w=!0,l=p,h=_;break}if(k===h){w=!0,h=p,l=_;break}k=k.sibling}if(!w){for(k=_.child;k;){if(k===l){w=!0,l=_,h=p;break}if(k===h){w=!0,h=_,l=p;break}k=k.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function wl(i){return i=uc(i),i!==null?Uo(i):null}function Uo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Uo(i);if(o!==null)return o;i=i.sibling}return null}var jo=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,cc=e.unstable_shouldYield,yf=e.unstable_requestPaint,it=e.unstable_now,hc=e.unstable_getCurrentPriorityLevel,Bs=e.unstable_ImmediatePriority,bi=e.unstable_UserBlockingPriority,zn=e.unstable_NormalPriority,Il=e.unstable_LowPriority,dc=e.unstable_IdlePriority,zs=null,Nn=null;function fc(i){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(zs,i,void 0,(i.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:mc,Cl=Math.log,pc=Math.LN2;function mc(i){return i>>>=0,i===0?32:31-(Cl(i)/pc|0)|0}var Bo=64,zo=4194304;function Di(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function $s(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var k=w&~p;k!==0?h=Di(k):(_&=w,_!==0&&(h=Di(_)))}else w=l&~p,w!==0?h=Di(w):_!==0&&(h=Di(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-dn(o),p=1<<l,h|=i[l],o&=~p;return h}function vf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-dn(_),k=1<<w,x=p[w];x===-1?((k&l)===0||(k&h)!==0)&&(p[w]=vf(k,o)):x<=o&&(i.expiredLanes|=k),_&=~k}}function xn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ws(){var i=Bo;return Bo<<=1,(Bo&4194240)===0&&(Bo=64),i}function Oi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Li(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-dn(o),i[o]=l}function nt(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-dn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Mi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-dn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var $e=0;function Vi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gc,$o,_c,yc,vc,Sl=!1,Ar=[],Kt=null,ar=null,lr=null,Fi=new Map,$n=new Map,kr=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(i,o){switch(i){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Fi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(o.pointerId)}}function _n(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=jl(o),o!==null&&$o(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function wf(i,o,l,h,p){switch(o){case"focusin":return Kt=_n(Kt,i,o,l,h,p),!0;case"dragenter":return ar=_n(ar,i,o,l,h,p),!0;case"mouseover":return lr=_n(lr,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Fi.set(_,_n(Fi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,$n.set(_,_n($n.get(_)||null,i,o,l,h,p)),!0}return!1}function wc(i){var o=Qs(i.target);if(o!==null){var l=sr(o);if(l!==null){if(o=l.tag,o===13){if(o=js(l),o!==null){i.blockedOn=o,vc(i.priority,function(){_c(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ri(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Wo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Ms=h,l.target.dispatchEvent(h),Ms=null}else return o=jl(l),o!==null&&$o(o),i.blockedOn=l,!1;o.shift()}return!0}function Hs(i,o,l){ri(i)&&l.delete(o)}function Tc(){Sl=!1,Kt!==null&&ri(Kt)&&(Kt=null),ar!==null&&ri(ar)&&(ar=null),lr!==null&&ri(lr)&&(lr=null),Fi.forEach(Hs),$n.forEach(Hs)}function ur(i,o){i.blockedOn===o&&(i.blockedOn=null,Sl||(Sl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tc)))}function cr(i){function o(p){return ur(p,i)}if(0<Ar.length){ur(Ar[0],i);for(var l=1;l<Ar.length;l++){var h=Ar[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Kt!==null&&ur(Kt,i),ar!==null&&ur(ar,i),lr!==null&&ur(lr,i),Fi.forEach(o),$n.forEach(o),l=0;l<kr.length;l++)h=kr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<kr.length&&(l=kr[0],l.blockedOn===null);)wc(l),l.blockedOn===null&&kr.shift()}var ii=q.ReactCurrentBatchConfig,Ui=!0;function ht(i,o,l,h){var p=$e,_=ii.transition;ii.transition=null;try{$e=1,Rl(i,o,l,h)}finally{$e=p,ii.transition=_}}function Tf(i,o,l,h){var p=$e,_=ii.transition;ii.transition=null;try{$e=4,Rl(i,o,l,h)}finally{$e=p,ii.transition=_}}function Rl(i,o,l,h){if(Ui){var p=Wo(i,o,l,h);if(p===null)Df(i,o,h,qs,l),Ec(i,h);else if(wf(p,i,o,l,h))h.stopPropagation();else if(Ec(i,h),o&4&&-1<Ef.indexOf(i)){for(;p!==null;){var _=jl(p);if(_!==null&&gc(_),_=Wo(i,o,l,h),_===null&&Df(i,o,h,qs,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Df(i,o,h,null,l)}}var qs=null;function Wo(i,o,l,h){if(qs=null,i=Do(h),i=Qs(i),i!==null)if(o=sr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=js(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return qs=i,null}function Al(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hc()){case Bs:return 1;case bi:return 4;case zn:case Il:return 16;case dc:return 536870912;default:return 16}default:return 16}}var bn=null,Ho=null,yn=null;function kl(){if(yn)return yn;var i,o=Ho,l=o.length,h,p="value"in bn?bn.value:bn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return yn=p.slice(i,1<h?1-h:void 0)}function qo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Pr(){return!0}function Pl(){return!1}function Qt(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(_):_[k]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Pr:Pl,this.isPropagationStopped=Pl,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),o}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Qt(hr),Nr=le({},hr,{view:0,detail:0}),If=Qt(Nr),Ko,si,ji,Gs=le({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ji&&(ji&&i.type==="mousemove"?(Ko=i.screenX-ji.screenX,si=i.screenY-ji.screenY):si=Ko=0,ji=i),Ko)},movementY:function(i){return"movementY"in i?i.movementY:si}}),Qo=Qt(Gs),Nl=le({},Gs,{dataTransfer:0}),Ic=Qt(Nl),Yo=le({},Nr,{relatedTarget:0}),Xo=Qt(Yo),Cc=le({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),oi=Qt(Cc),Sc=le({},hr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Rc=Qt(Sc),Ac=le({},hr,{data:0}),xl=Qt(Ac),Jo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=kc[i])?!!o[i]:!1}function xr(){return Pc}var c=le({},Nr,{key:function(i){if(i.key){var o=Jo[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=qo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?fn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xr,charCode:function(i){return i.type==="keypress"?qo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?qo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Qt(c),v=le({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C=Qt(v),j=le({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xr}),H=Qt(j),oe=le({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),et=Qt(oe),Ot=le({},Gs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=Qt(Ot),jt=[9,13,27,32],Ct=d&&"CompositionEvent"in window,Wn=null;d&&"documentMode"in document&&(Wn=document.documentMode);var Dn=d&&"TextEvent"in window&&!Wn,Ks=d&&(!Ct||Wn&&8<Wn&&11>=Wn),Zo=" ",W_=!1;function H_(i,o){switch(i){case"keyup":return jt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ea=!1;function US(i,o){switch(i){case"compositionend":return q_(o);case"keypress":return o.which!==32?null:(W_=!0,Zo);case"textInput":return i=o.data,i===Zo&&W_?null:i;default:return null}}function jS(i,o){if(ea)return i==="compositionend"||!Ct&&H_(i,o)?(i=kl(),yn=Ho=bn=null,ea=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ks&&o.locale!=="ko"?null:o.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!BS[i.type]:o==="textarea"}function K_(i,o,l,h){Rr(h),o=Oc(o,"onChange"),0<o.length&&(l=new Go("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var bl=null,Dl=null;function zS(i){dy(i,0)}function Nc(i){var o=sa(i);if(Xr(o))return i}function $S(i,o){if(i==="change")return o}var Q_=!1;if(d){var Cf;if(d){var Sf="oninput"in document;if(!Sf){var Y_=document.createElement("div");Y_.setAttribute("oninput","return;"),Sf=typeof Y_.oninput=="function"}Cf=Sf}else Cf=!1;Q_=Cf&&(!document.documentMode||9<document.documentMode)}function X_(){bl&&(bl.detachEvent("onpropertychange",J_),Dl=bl=null)}function J_(i){if(i.propertyName==="value"&&Nc(Dl)){var o=[];K_(o,Dl,i,Do(i)),vl(zS,o)}}function WS(i,o,l){i==="focusin"?(X_(),bl=o,Dl=l,bl.attachEvent("onpropertychange",J_)):i==="focusout"&&X_()}function HS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Nc(Dl)}function qS(i,o){if(i==="click")return Nc(o)}function GS(i,o){if(i==="input"||i==="change")return Nc(o)}function KS(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var dr=typeof Object.is=="function"?Object.is:KS;function Ol(i,o){if(dr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!dr(i[p],o[p]))return!1}return!0}function Z_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ey(i,o){var l=Z_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Z_(l)}}function ty(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?ty(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function ny(){for(var i=window,o=Cr();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Cr(i.document)}return o}function Rf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function QS(i){var o=ny(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&ty(l.ownerDocument.documentElement,l)){if(h!==null&&Rf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=ey(l,_);var w=ey(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var YS=d&&"documentMode"in document&&11>=document.documentMode,ta=null,Af=null,Ll=null,kf=!1;function ry(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;kf||ta==null||ta!==Cr(h)||(h=ta,"selectionStart"in h&&Rf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ll&&Ol(Ll,h)||(Ll=h,h=Oc(Af,"onSelect"),0<h.length&&(o=new Go("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=ta)))}function xc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var na={animationend:xc("Animation","AnimationEnd"),animationiteration:xc("Animation","AnimationIteration"),animationstart:xc("Animation","AnimationStart"),transitionend:xc("Transition","TransitionEnd")},Pf={},iy={};d&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function bc(i){if(Pf[i])return Pf[i];if(!na[i])return i;var o=na[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in iy)return Pf[i]=o[l];return i}var sy=bc("animationend"),oy=bc("animationiteration"),ay=bc("animationstart"),ly=bc("transitionend"),uy=new Map,cy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(i,o){uy.set(i,o),a(o,[i])}for(var Nf=0;Nf<cy.length;Nf++){var xf=cy[Nf],XS=xf.toLowerCase(),JS=xf[0].toUpperCase()+xf.slice(1);Bi(XS,"on"+JS)}Bi(sy,"onAnimationEnd"),Bi(oy,"onAnimationIteration"),Bi(ay,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(ly,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function hy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,lc(h,o,void 0,i),i.currentTarget=null}function dy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var k=h[w],x=k.instance,W=k.currentTarget;if(k=k.listener,x!==_&&p.isPropagationStopped())break e;hy(p,k,W),_=x}else for(w=0;w<h.length;w++){if(k=h[w],x=k.instance,W=k.currentTarget,k=k.listener,x!==_&&p.isPropagationStopped())break e;hy(p,k,W),_=x}}}if(ir)throw i=El,ir=!1,El=null,i}function at(i,o){var l=o[Uf];l===void 0&&(l=o[Uf]=new Set);var h=i+"__bubble";l.has(h)||(fy(o,i,2,!1),l.add(h))}function bf(i,o,l){var h=0;o&&(h|=4),fy(l,i,h,o)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Vl(i){if(!i[Dc]){i[Dc]=!0,r.forEach(function(l){l!=="selectionchange"&&(ZS.has(l)||bf(l,!1,i),bf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Dc]||(o[Dc]=!0,bf("selectionchange",!1,o))}}function fy(i,o,l,h){switch(Al(o)){case 1:var p=ht;break;case 4:p=Tf;break;default:p=Rl}l=p.bind(null,o,l,i),p=void 0,!Mo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Df(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var k=h.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;w=w.return}for(;k!==null;){if(w=Qs(k),w===null)return;if(x=w.tag,x===5||x===6){h=_=w;continue e}k=k.parentNode}}h=h.return}vl(function(){var W=_,Z=Do(l),ee=[];e:{var J=uy.get(i);if(J!==void 0){var ue=Go,fe=i;switch(i){case"keypress":if(qo(l)===0)break e;case"keydown":case"keyup":ue=g;break;case"focusin":fe="focus",ue=Xo;break;case"focusout":fe="blur",ue=Xo;break;case"beforeblur":case"afterblur":ue=Xo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=H;break;case sy:case oy:case ay:ue=oi;break;case ly:ue=et;break;case"scroll":ue=If;break;case"wheel":ue=We;break;case"copy":case"cut":case"paste":ue=Rc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=C}var pe=(o&4)!==0,Et=!pe&&i==="scroll",B=pe?J!==null?J+"Capture":null:J;pe=[];for(var O=W,z;O!==null;){z=O;var ie=z.stateNode;if(z.tag===5&&ie!==null&&(z=ie,B!==null&&(ie=vt(O,B),ie!=null&&pe.push(Fl(O,ie,z)))),Et)break;O=O.return}0<pe.length&&(J=new ue(J,fe,null,l,Z),ee.push({event:J,listeners:pe}))}}if((o&7)===0){e:{if(J=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",J&&l!==Ms&&(fe=l.relatedTarget||l.fromElement)&&(Qs(fe)||fe[ai]))break e;if((ue||J)&&(J=Z.window===Z?Z:(J=Z.ownerDocument)?J.defaultView||J.parentWindow:window,ue?(fe=l.relatedTarget||l.toElement,ue=W,fe=fe?Qs(fe):null,fe!==null&&(Et=sr(fe),fe!==Et||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ue=null,fe=W),ue!==fe)){if(pe=Qo,ie="onMouseLeave",B="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(pe=C,ie="onPointerLeave",B="onPointerEnter",O="pointer"),Et=ue==null?J:sa(ue),z=fe==null?J:sa(fe),J=new pe(ie,O+"leave",ue,l,Z),J.target=Et,J.relatedTarget=z,ie=null,Qs(Z)===W&&(pe=new pe(B,O+"enter",fe,l,Z),pe.target=z,pe.relatedTarget=Et,ie=pe),Et=ie,ue&&fe)t:{for(pe=ue,B=fe,O=0,z=pe;z;z=ra(z))O++;for(z=0,ie=B;ie;ie=ra(ie))z++;for(;0<O-z;)pe=ra(pe),O--;for(;0<z-O;)B=ra(B),z--;for(;O--;){if(pe===B||B!==null&&pe===B.alternate)break t;pe=ra(pe),B=ra(B)}pe=null}else pe=null;ue!==null&&py(ee,J,ue,pe,!1),fe!==null&&Et!==null&&py(ee,Et,fe,pe,!0)}}e:{if(J=W?sa(W):window,ue=J.nodeName&&J.nodeName.toLowerCase(),ue==="select"||ue==="input"&&J.type==="file")var ge=$S;else if(G_(J))if(Q_)ge=GS;else{ge=HS;var Te=WS}else(ue=J.nodeName)&&ue.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(ge=qS);if(ge&&(ge=ge(i,W))){K_(ee,ge,l,Z);break e}Te&&Te(i,J,W),i==="focusout"&&(Te=J._wrapperState)&&Te.controlled&&J.type==="number"&&Jr(J,"number",J.value)}switch(Te=W?sa(W):window,i){case"focusin":(G_(Te)||Te.contentEditable==="true")&&(ta=Te,Af=W,Ll=null);break;case"focusout":Ll=Af=ta=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,ry(ee,l,Z);break;case"selectionchange":if(YS)break;case"keydown":case"keyup":ry(ee,l,Z)}var Ie;if(Ct)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else ea?H_(i,l)&&(Ne="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(Ks&&l.locale!=="ko"&&(ea||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&ea&&(Ie=kl()):(bn=Z,Ho="value"in bn?bn.value:bn.textContent,ea=!0)),Te=Oc(W,Ne),0<Te.length&&(Ne=new xl(Ne,i,null,l,Z),ee.push({event:Ne,listeners:Te}),Ie?Ne.data=Ie:(Ie=q_(l),Ie!==null&&(Ne.data=Ie)))),(Ie=Dn?US(i,l):jS(i,l))&&(W=Oc(W,"onBeforeInput"),0<W.length&&(Z=new xl("onBeforeInput","beforeinput",null,l,Z),ee.push({event:Z,listeners:W}),Z.data=Ie))}dy(ee,o)})}function Fl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Oc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=vt(i,l),_!=null&&h.unshift(Fl(i,_,p)),_=vt(i,o),_!=null&&h.push(Fl(i,_,p))),i=i.return}return h}function ra(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function py(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var k=l,x=k.alternate,W=k.stateNode;if(x!==null&&x===h)break;k.tag===5&&W!==null&&(k=W,p?(x=vt(l,_),x!=null&&w.unshift(Fl(l,x,k))):p||(x=vt(l,_),x!=null&&w.push(Fl(l,x,k)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var eR=/\r\n?/g,tR=/\u0000|\uFFFD/g;function my(i){return(typeof i=="string"?i:""+i).replace(eR,`
`).replace(tR,"")}function Lc(i,o,l){if(o=my(o),my(i)!==o&&l)throw Error(t(425))}function Mc(){}var Of=null,Lf=null;function Mf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Vf=typeof setTimeout=="function"?setTimeout:void 0,nR=typeof clearTimeout=="function"?clearTimeout:void 0,gy=typeof Promise=="function"?Promise:void 0,rR=typeof queueMicrotask=="function"?queueMicrotask:typeof gy<"u"?function(i){return gy.resolve(null).then(i).catch(iR)}:Vf;function iR(i){setTimeout(function(){throw i})}function Ff(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),cr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);cr(o)}function zi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function _y(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ia=Math.random().toString(36).slice(2),br="__reactFiber$"+ia,Ul="__reactProps$"+ia,ai="__reactContainer$"+ia,Uf="__reactEvents$"+ia,sR="__reactListeners$"+ia,oR="__reactHandles$"+ia;function Qs(i){var o=i[br];if(o)return o;for(var l=i.parentNode;l;){if(o=l[ai]||l[br]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=_y(i);i!==null;){if(l=i[br])return l;i=_y(i)}return o}i=l,l=i.parentNode}return null}function jl(i){return i=i[br]||i[ai],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function sa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Vc(i){return i[Ul]||null}var jf=[],oa=-1;function $i(i){return{current:i}}function lt(i){0>oa||(i.current=jf[oa],jf[oa]=null,oa--)}function st(i,o){oa++,jf[oa]=i.current,i.current=o}var Wi={},nn=$i(Wi),vn=$i(!1),Ys=Wi;function aa(i,o){var l=i.type.contextTypes;if(!l)return Wi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function En(i){return i=i.childContextTypes,i!=null}function Fc(){lt(vn),lt(nn)}function yy(i,o,l){if(nn.current!==Wi)throw Error(t(168));st(nn,o),st(vn,l)}function vy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,qe(i)||"Unknown",p));return le({},l,h)}function Uc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Wi,Ys=nn.current,st(nn,i),st(vn,vn.current),!0}function Ey(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=vy(i,o,Ys),h.__reactInternalMemoizedMergedChildContext=i,lt(vn),lt(nn),st(nn,i)):lt(vn),st(vn,l)}var li=null,jc=!1,Bf=!1;function wy(i){li===null?li=[i]:li.push(i)}function aR(i){jc=!0,wy(i)}function Hi(){if(!Bf&&li!==null){Bf=!0;var i=0,o=$e;try{var l=li;for($e=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}li=null,jc=!1}catch(p){throw li!==null&&(li=li.slice(i+1)),jo(Bs,Hi),p}finally{$e=o,Bf=!1}}return null}var la=[],ua=0,Bc=null,zc=0,Hn=[],qn=0,Xs=null,ui=1,ci="";function Js(i,o){la[ua++]=zc,la[ua++]=Bc,Bc=i,zc=o}function Ty(i,o,l){Hn[qn++]=ui,Hn[qn++]=ci,Hn[qn++]=Xs,Xs=i;var h=ui;i=ci;var p=32-dn(h)-1;h&=~(1<<p),l+=1;var _=32-dn(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,ui=1<<32-dn(o)+p|l<<p|h,ci=_+i}else ui=1<<_|l<<p|h,ci=i}function zf(i){i.return!==null&&(Js(i,1),Ty(i,1,0))}function $f(i){for(;i===Bc;)Bc=la[--ua],la[ua]=null,zc=la[--ua],la[ua]=null;for(;i===Xs;)Xs=Hn[--qn],Hn[qn]=null,ci=Hn[--qn],Hn[qn]=null,ui=Hn[--qn],Hn[qn]=null}var On=null,Ln=null,dt=!1,fr=null;function Iy(i,o){var l=Yn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Cy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,On=i,Ln=zi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,On=i,Ln=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Xs!==null?{id:ui,overflow:ci}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Yn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,On=i,Ln=null,!0):!1;default:return!1}}function Wf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Hf(i){if(dt){var o=Ln;if(o){var l=o;if(!Cy(i,o)){if(Wf(i))throw Error(t(418));o=zi(l.nextSibling);var h=On;o&&Cy(i,o)?Iy(h,l):(i.flags=i.flags&-4097|2,dt=!1,On=i)}}else{if(Wf(i))throw Error(t(418));i.flags=i.flags&-4097|2,dt=!1,On=i}}}function Sy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;On=i}function $c(i){if(i!==On)return!1;if(!dt)return Sy(i),dt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Mf(i.type,i.memoizedProps)),o&&(o=Ln)){if(Wf(i))throw Ry(),Error(t(418));for(;o;)Iy(i,o),o=zi(o.nextSibling)}if(Sy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Ln=zi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Ln=null}}else Ln=On?zi(i.stateNode.nextSibling):null;return!0}function Ry(){for(var i=Ln;i;)i=zi(i.nextSibling)}function ca(){Ln=On=null,dt=!1}function qf(i){fr===null?fr=[i]:fr.push(i)}var lR=q.ReactCurrentBatchConfig;function Bl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var k=p.refs;w===null?delete k[_]:k[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Wc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Ay(i){var o=i._init;return o(i._payload)}function ky(i){function o(B,O){if(i){var z=B.deletions;z===null?(B.deletions=[O],B.flags|=16):z.push(O)}}function l(B,O){if(!i)return null;for(;O!==null;)o(B,O),O=O.sibling;return null}function h(B,O){for(B=new Map;O!==null;)O.key!==null?B.set(O.key,O):B.set(O.index,O),O=O.sibling;return B}function p(B,O){return B=Zi(B,O),B.index=0,B.sibling=null,B}function _(B,O,z){return B.index=z,i?(z=B.alternate,z!==null?(z=z.index,z<O?(B.flags|=2,O):z):(B.flags|=2,O)):(B.flags|=1048576,O)}function w(B){return i&&B.alternate===null&&(B.flags|=2),B}function k(B,O,z,ie){return O===null||O.tag!==6?(O=Vp(z,B.mode,ie),O.return=B,O):(O=p(O,z),O.return=B,O)}function x(B,O,z,ie){var ge=z.type;return ge===b?Z(B,O,z.props.children,ie,z.key):O!==null&&(O.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===De&&Ay(ge)===O.type)?(ie=p(O,z.props),ie.ref=Bl(B,O,z),ie.return=B,ie):(ie=ph(z.type,z.key,z.props,null,B.mode,ie),ie.ref=Bl(B,O,z),ie.return=B,ie)}function W(B,O,z,ie){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Fp(z,B.mode,ie),O.return=B,O):(O=p(O,z.children||[]),O.return=B,O)}function Z(B,O,z,ie,ge){return O===null||O.tag!==7?(O=oo(z,B.mode,ie,ge),O.return=B,O):(O=p(O,z),O.return=B,O)}function ee(B,O,z){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Vp(""+O,B.mode,z),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case we:return z=ph(O.type,O.key,O.props,null,B.mode,z),z.ref=Bl(B,null,O),z.return=B,z;case he:return O=Fp(O,B.mode,z),O.return=B,O;case De:var ie=O._init;return ee(B,ie(O._payload),z)}if(nr(O)||_e(O))return O=oo(O,B.mode,z,null),O.return=B,O;Wc(B,O)}return null}function J(B,O,z,ie){var ge=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return ge!==null?null:k(B,O,""+z,ie);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case we:return z.key===ge?x(B,O,z,ie):null;case he:return z.key===ge?W(B,O,z,ie):null;case De:return ge=z._init,J(B,O,ge(z._payload),ie)}if(nr(z)||_e(z))return ge!==null?null:Z(B,O,z,ie,null);Wc(B,z)}return null}function ue(B,O,z,ie,ge){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return B=B.get(z)||null,k(O,B,""+ie,ge);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case we:return B=B.get(ie.key===null?z:ie.key)||null,x(O,B,ie,ge);case he:return B=B.get(ie.key===null?z:ie.key)||null,W(O,B,ie,ge);case De:var Te=ie._init;return ue(B,O,z,Te(ie._payload),ge)}if(nr(ie)||_e(ie))return B=B.get(z)||null,Z(O,B,ie,ge,null);Wc(O,ie)}return null}function fe(B,O,z,ie){for(var ge=null,Te=null,Ie=O,Ne=O=0,$t=null;Ie!==null&&Ne<z.length;Ne++){Ie.index>Ne?($t=Ie,Ie=null):$t=Ie.sibling;var Qe=J(B,Ie,z[Ne],ie);if(Qe===null){Ie===null&&(Ie=$t);break}i&&Ie&&Qe.alternate===null&&o(B,Ie),O=_(Qe,O,Ne),Te===null?ge=Qe:Te.sibling=Qe,Te=Qe,Ie=$t}if(Ne===z.length)return l(B,Ie),dt&&Js(B,Ne),ge;if(Ie===null){for(;Ne<z.length;Ne++)Ie=ee(B,z[Ne],ie),Ie!==null&&(O=_(Ie,O,Ne),Te===null?ge=Ie:Te.sibling=Ie,Te=Ie);return dt&&Js(B,Ne),ge}for(Ie=h(B,Ie);Ne<z.length;Ne++)$t=ue(Ie,B,Ne,z[Ne],ie),$t!==null&&(i&&$t.alternate!==null&&Ie.delete($t.key===null?Ne:$t.key),O=_($t,O,Ne),Te===null?ge=$t:Te.sibling=$t,Te=$t);return i&&Ie.forEach(function(es){return o(B,es)}),dt&&Js(B,Ne),ge}function pe(B,O,z,ie){var ge=_e(z);if(typeof ge!="function")throw Error(t(150));if(z=ge.call(z),z==null)throw Error(t(151));for(var Te=ge=null,Ie=O,Ne=O=0,$t=null,Qe=z.next();Ie!==null&&!Qe.done;Ne++,Qe=z.next()){Ie.index>Ne?($t=Ie,Ie=null):$t=Ie.sibling;var es=J(B,Ie,Qe.value,ie);if(es===null){Ie===null&&(Ie=$t);break}i&&Ie&&es.alternate===null&&o(B,Ie),O=_(es,O,Ne),Te===null?ge=es:Te.sibling=es,Te=es,Ie=$t}if(Qe.done)return l(B,Ie),dt&&Js(B,Ne),ge;if(Ie===null){for(;!Qe.done;Ne++,Qe=z.next())Qe=ee(B,Qe.value,ie),Qe!==null&&(O=_(Qe,O,Ne),Te===null?ge=Qe:Te.sibling=Qe,Te=Qe);return dt&&Js(B,Ne),ge}for(Ie=h(B,Ie);!Qe.done;Ne++,Qe=z.next())Qe=ue(Ie,B,Ne,Qe.value,ie),Qe!==null&&(i&&Qe.alternate!==null&&Ie.delete(Qe.key===null?Ne:Qe.key),O=_(Qe,O,Ne),Te===null?ge=Qe:Te.sibling=Qe,Te=Qe);return i&&Ie.forEach(function(BR){return o(B,BR)}),dt&&Js(B,Ne),ge}function Et(B,O,z,ie){if(typeof z=="object"&&z!==null&&z.type===b&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case we:e:{for(var ge=z.key,Te=O;Te!==null;){if(Te.key===ge){if(ge=z.type,ge===b){if(Te.tag===7){l(B,Te.sibling),O=p(Te,z.props.children),O.return=B,B=O;break e}}else if(Te.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===De&&Ay(ge)===Te.type){l(B,Te.sibling),O=p(Te,z.props),O.ref=Bl(B,Te,z),O.return=B,B=O;break e}l(B,Te);break}else o(B,Te);Te=Te.sibling}z.type===b?(O=oo(z.props.children,B.mode,ie,z.key),O.return=B,B=O):(ie=ph(z.type,z.key,z.props,null,B.mode,ie),ie.ref=Bl(B,O,z),ie.return=B,B=ie)}return w(B);case he:e:{for(Te=z.key;O!==null;){if(O.key===Te)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){l(B,O.sibling),O=p(O,z.children||[]),O.return=B,B=O;break e}else{l(B,O);break}else o(B,O);O=O.sibling}O=Fp(z,B.mode,ie),O.return=B,B=O}return w(B);case De:return Te=z._init,Et(B,O,Te(z._payload),ie)}if(nr(z))return fe(B,O,z,ie);if(_e(z))return pe(B,O,z,ie);Wc(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,O!==null&&O.tag===6?(l(B,O.sibling),O=p(O,z),O.return=B,B=O):(l(B,O),O=Vp(z,B.mode,ie),O.return=B,B=O),w(B)):l(B,O)}return Et}var ha=ky(!0),Py=ky(!1),Hc=$i(null),qc=null,da=null,Gf=null;function Kf(){Gf=da=qc=null}function Qf(i){var o=Hc.current;lt(Hc),i._currentValue=o}function Yf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function fa(i,o){qc=i,Gf=da=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(wn=!0),i.firstContext=null)}function Gn(i){var o=i._currentValue;if(Gf!==i)if(i={context:i,memoizedValue:o,next:null},da===null){if(qc===null)throw Error(t(308));da=i,qc.dependencies={lanes:0,firstContext:i}}else da=da.next=i;return o}var Zs=null;function Xf(i){Zs===null?Zs=[i]:Zs.push(i)}function Ny(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Xf(o)):(l.next=p.next,p.next=l),o.interleaved=l,hi(i,h)}function hi(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var qi=!1;function Jf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function di(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Gi(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ke&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,hi(i,l)}return p=h.interleaved,p===null?(o.next=o,Xf(h)):(o.next=p.next,p.next=o),h.interleaved=o,hi(i,l)}function Gc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Mi(i,l)}}function by(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Kc(i,o,l,h){var p=i.updateQueue;qi=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var x=k,W=x.next;x.next=null,w===null?_=W:w.next=W,w=x;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,k=Z.lastBaseUpdate,k!==w&&(k===null?Z.firstBaseUpdate=W:k.next=W,Z.lastBaseUpdate=x))}if(_!==null){var ee=p.baseState;w=0,Z=W=x=null,k=_;do{var J=k.lane,ue=k.eventTime;if((h&J)===J){Z!==null&&(Z=Z.next={eventTime:ue,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var fe=i,pe=k;switch(J=o,ue=l,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){ee=fe.call(ue,ee,J);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,J=typeof fe=="function"?fe.call(ue,ee,J):fe,J==null)break e;ee=le({},ee,J);break e;case 2:qi=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,J=p.effects,J===null?p.effects=[k]:J.push(k))}else ue={eventTime:ue,lane:J,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Z===null?(W=Z=ue,x=ee):Z=Z.next=ue,w|=J;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;J=k,k=J.next,J.next=null,p.lastBaseUpdate=J,p.shared.pending=null}}while(!0);if(Z===null&&(x=ee),p.baseState=x,p.firstBaseUpdate=W,p.lastBaseUpdate=Z,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);no|=w,i.lanes=w,i.memoizedState=ee}}function Dy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var zl={},Dr=$i(zl),$l=$i(zl),Wl=$i(zl);function eo(i){if(i===zl)throw Error(t(174));return i}function Zf(i,o){switch(st(Wl,o),st($l,i),st(Dr,zl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Dt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Dt(o,i)}lt(Dr),st(Dr,o)}function pa(){lt(Dr),lt($l),lt(Wl)}function Oy(i){eo(Wl.current);var o=eo(Dr.current),l=Dt(o,i.type);o!==l&&(st($l,i),st(Dr,l))}function ep(i){$l.current===i&&(lt(Dr),lt($l))}var ft=$i(0);function Qc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var tp=[];function np(){for(var i=0;i<tp.length;i++)tp[i]._workInProgressVersionPrimary=null;tp.length=0}var Yc=q.ReactCurrentDispatcher,rp=q.ReactCurrentBatchConfig,to=0,pt=null,Lt=null,Bt=null,Xc=!1,Hl=!1,ql=0,uR=0;function rn(){throw Error(t(321))}function ip(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!dr(i[l],o[l]))return!1;return!0}function sp(i,o,l,h,p,_){if(to=_,pt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Yc.current=i===null||i.memoizedState===null?fR:pR,i=l(h,p),Hl){_=0;do{if(Hl=!1,ql=0,25<=_)throw Error(t(301));_+=1,Bt=Lt=null,o.updateQueue=null,Yc.current=mR,i=l(h,p)}while(Hl)}if(Yc.current=eh,o=Lt!==null&&Lt.next!==null,to=0,Bt=Lt=pt=null,Xc=!1,o)throw Error(t(300));return i}function op(){var i=ql!==0;return ql=0,i}function Or(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?pt.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function Kn(){if(Lt===null){var i=pt.alternate;i=i!==null?i.memoizedState:null}else i=Lt.next;var o=Bt===null?pt.memoizedState:Bt.next;if(o!==null)Bt=o,Lt=i;else{if(i===null)throw Error(t(310));Lt=i,i={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?pt.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}function Gl(i,o){return typeof o=="function"?o(i):o}function ap(i){var o=Kn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Lt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var k=w=null,x=null,W=_;do{var Z=W.lane;if((to&Z)===Z)x!==null&&(x=x.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:i(h,W.action);else{var ee={lane:Z,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};x===null?(k=x=ee,w=h):x=x.next=ee,pt.lanes|=Z,no|=Z}W=W.next}while(W!==null&&W!==_);x===null?w=h:x.next=k,dr(h,o.memoizedState)||(wn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=x,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,pt.lanes|=_,no|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function lp(i){var o=Kn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);dr(_,o.memoizedState)||(wn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Ly(){}function My(i,o){var l=pt,h=Kn(),p=o(),_=!dr(h.memoizedState,p);if(_&&(h.memoizedState=p,wn=!0),h=h.queue,up(Uy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Bt!==null&&Bt.memoizedState.tag&1){if(l.flags|=2048,Kl(9,Fy.bind(null,l,h,p,o),void 0,null),zt===null)throw Error(t(349));(to&30)!==0||Vy(l,o,p)}return p}function Vy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=pt.updateQueue,o===null?(o={lastEffect:null,stores:null},pt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Fy(i,o,l,h){o.value=l,o.getSnapshot=h,jy(o)&&By(i)}function Uy(i,o,l){return l(function(){jy(o)&&By(i)})}function jy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!dr(i,l)}catch{return!0}}function By(i){var o=hi(i,1);o!==null&&_r(o,i,1,-1)}function zy(i){var o=Or();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:i},o.queue=i,i=i.dispatch=dR.bind(null,pt,i),[o.memoizedState,i]}function Kl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=pt.updateQueue,o===null?(o={lastEffect:null,stores:null},pt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function $y(){return Kn().memoizedState}function Jc(i,o,l,h){var p=Or();pt.flags|=i,p.memoizedState=Kl(1|o,l,void 0,h===void 0?null:h)}function Zc(i,o,l,h){var p=Kn();h=h===void 0?null:h;var _=void 0;if(Lt!==null){var w=Lt.memoizedState;if(_=w.destroy,h!==null&&ip(h,w.deps)){p.memoizedState=Kl(o,l,_,h);return}}pt.flags|=i,p.memoizedState=Kl(1|o,l,_,h)}function Wy(i,o){return Jc(8390656,8,i,o)}function up(i,o){return Zc(2048,8,i,o)}function Hy(i,o){return Zc(4,2,i,o)}function qy(i,o){return Zc(4,4,i,o)}function Gy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Ky(i,o,l){return l=l!=null?l.concat([i]):null,Zc(4,4,Gy.bind(null,o,i),l)}function cp(){}function Qy(i,o){var l=Kn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ip(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Yy(i,o){var l=Kn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ip(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Xy(i,o,l){return(to&21)===0?(i.baseState&&(i.baseState=!1,wn=!0),i.memoizedState=l):(dr(l,o)||(l=Ws(),pt.lanes|=l,no|=l,i.baseState=!0),o)}function cR(i,o){var l=$e;$e=l!==0&&4>l?l:4,i(!0);var h=rp.transition;rp.transition={};try{i(!1),o()}finally{$e=l,rp.transition=h}}function Jy(){return Kn().memoizedState}function hR(i,o,l){var h=Xi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Zy(i))ev(o,l);else if(l=Ny(i,o,l,h),l!==null){var p=mn();_r(l,i,h,p),tv(l,o,h)}}function dR(i,o,l){var h=Xi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Zy(i))ev(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,k=_(w,l);if(p.hasEagerState=!0,p.eagerState=k,dr(k,w)){var x=o.interleaved;x===null?(p.next=p,Xf(o)):(p.next=x.next,x.next=p),o.interleaved=p;return}}catch{}finally{}l=Ny(i,o,p,h),l!==null&&(p=mn(),_r(l,i,h,p),tv(l,o,h))}}function Zy(i){var o=i.alternate;return i===pt||o!==null&&o===pt}function ev(i,o){Hl=Xc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function tv(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Mi(i,l)}}var eh={readContext:Gn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},fR={readContext:Gn,useCallback:function(i,o){return Or().memoizedState=[i,o===void 0?null:o],i},useContext:Gn,useEffect:Wy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Jc(4194308,4,Gy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Jc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Jc(4,2,i,o)},useMemo:function(i,o){var l=Or();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Or();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=hR.bind(null,pt,i),[h.memoizedState,i]},useRef:function(i){var o=Or();return i={current:i},o.memoizedState=i},useState:zy,useDebugValue:cp,useDeferredValue:function(i){return Or().memoizedState=i},useTransition:function(){var i=zy(!1),o=i[0];return i=cR.bind(null,i[1]),Or().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=pt,p=Or();if(dt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),zt===null)throw Error(t(349));(to&30)!==0||Vy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Wy(Uy.bind(null,h,_,i),[i]),h.flags|=2048,Kl(9,Fy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Or(),o=zt.identifierPrefix;if(dt){var l=ci,h=ui;l=(h&~(1<<32-dn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ql++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=uR++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},pR={readContext:Gn,useCallback:Qy,useContext:Gn,useEffect:up,useImperativeHandle:Ky,useInsertionEffect:Hy,useLayoutEffect:qy,useMemo:Yy,useReducer:ap,useRef:$y,useState:function(){return ap(Gl)},useDebugValue:cp,useDeferredValue:function(i){var o=Kn();return Xy(o,Lt.memoizedState,i)},useTransition:function(){var i=ap(Gl)[0],o=Kn().memoizedState;return[i,o]},useMutableSource:Ly,useSyncExternalStore:My,useId:Jy,unstable_isNewReconciler:!1},mR={readContext:Gn,useCallback:Qy,useContext:Gn,useEffect:up,useImperativeHandle:Ky,useInsertionEffect:Hy,useLayoutEffect:qy,useMemo:Yy,useReducer:lp,useRef:$y,useState:function(){return lp(Gl)},useDebugValue:cp,useDeferredValue:function(i){var o=Kn();return Lt===null?o.memoizedState=i:Xy(o,Lt.memoizedState,i)},useTransition:function(){var i=lp(Gl)[0],o=Kn().memoizedState;return[i,o]},useMutableSource:Ly,useSyncExternalStore:My,useId:Jy,unstable_isNewReconciler:!1};function pr(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function hp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:le({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var th={isMounted:function(i){return(i=i._reactInternals)?sr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=mn(),p=Xi(i),_=di(h,p);_.payload=o,l!=null&&(_.callback=l),o=Gi(i,_,p),o!==null&&(_r(o,i,p,h),Gc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=mn(),p=Xi(i),_=di(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Gi(i,_,p),o!==null&&(_r(o,i,p,h),Gc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=mn(),h=Xi(i),p=di(l,h);p.tag=2,o!=null&&(p.callback=o),o=Gi(i,p,h),o!==null&&(_r(o,i,h,l),Gc(o,i,h))}};function nv(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!Ol(l,h)||!Ol(p,_):!0}function rv(i,o,l){var h=!1,p=Wi,_=o.contextType;return typeof _=="object"&&_!==null?_=Gn(_):(p=En(o)?Ys:nn.current,h=o.contextTypes,_=(h=h!=null)?aa(i,p):Wi),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=th,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function iv(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&th.enqueueReplaceState(o,o.state,null)}function dp(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Jf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Gn(_):(_=En(o)?Ys:nn.current,p.context=aa(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(hp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&th.enqueueReplaceState(p,p.state,null),Kc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ma(i,o){try{var l="",h=o;do l+=Oe(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function fp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function pp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var gR=typeof WeakMap=="function"?WeakMap:Map;function sv(i,o,l){l=di(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){lh||(lh=!0,Pp=h),pp(i,o)},l}function ov(i,o,l){l=di(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){pp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){pp(i,o),typeof h!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function av(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new gR;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=NR.bind(null,i,o,l),o.then(i,i))}function lv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function uv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=di(-1,1),o.tag=2,Gi(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var _R=q.ReactCurrentOwner,wn=!1;function pn(i,o,l,h){o.child=i===null?Py(o,null,l,h):ha(o,i.child,l,h)}function cv(i,o,l,h,p){l=l.render;var _=o.ref;return fa(o,p),h=sp(i,o,l,h,_,p),l=op(),i!==null&&!wn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,fi(i,o,p)):(dt&&l&&zf(o),o.flags|=1,pn(i,o,h,p),o.child)}function hv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Mp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,dv(i,o,_,h,p)):(i=ph(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ol,l(w,h)&&i.ref===o.ref)return fi(i,o,p)}return o.flags|=1,i=Zi(_,h),i.ref=o.ref,i.return=o,o.child=i}function dv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Ol(_,h)&&i.ref===o.ref)if(wn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(wn=!0);else return o.lanes=i.lanes,fi(i,o,p)}return mp(i,o,l,h,p)}function fv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(_a,Mn),Mn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,st(_a,Mn),Mn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,st(_a,Mn),Mn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,st(_a,Mn),Mn|=h;return pn(i,o,p,l),o.child}function pv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function mp(i,o,l,h,p){var _=En(l)?Ys:nn.current;return _=aa(o,_),fa(o,p),l=sp(i,o,l,h,_,p),h=op(),i!==null&&!wn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,fi(i,o,p)):(dt&&h&&zf(o),o.flags|=1,pn(i,o,l,p),o.child)}function mv(i,o,l,h,p){if(En(l)){var _=!0;Uc(o)}else _=!1;if(fa(o,p),o.stateNode===null)rh(i,o),rv(o,l,h),dp(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,k=o.memoizedProps;w.props=k;var x=w.context,W=l.contextType;typeof W=="object"&&W!==null?W=Gn(W):(W=En(l)?Ys:nn.current,W=aa(o,W));var Z=l.getDerivedStateFromProps,ee=typeof Z=="function"||typeof w.getSnapshotBeforeUpdate=="function";ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==h||x!==W)&&iv(o,w,h,W),qi=!1;var J=o.memoizedState;w.state=J,Kc(o,h,w,p),x=o.memoizedState,k!==h||J!==x||vn.current||qi?(typeof Z=="function"&&(hp(o,l,Z,h),x=o.memoizedState),(k=qi||nv(o,l,k,h,J,x,W))?(ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=x),w.props=h,w.state=x,w.context=W,h=k):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,xy(i,o),k=o.memoizedProps,W=o.type===o.elementType?k:pr(o.type,k),w.props=W,ee=o.pendingProps,J=w.context,x=l.contextType,typeof x=="object"&&x!==null?x=Gn(x):(x=En(l)?Ys:nn.current,x=aa(o,x));var ue=l.getDerivedStateFromProps;(Z=typeof ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==ee||J!==x)&&iv(o,w,h,x),qi=!1,J=o.memoizedState,w.state=J,Kc(o,h,w,p);var fe=o.memoizedState;k!==ee||J!==fe||vn.current||qi?(typeof ue=="function"&&(hp(o,l,ue,h),fe=o.memoizedState),(W=qi||nv(o,l,W,h,J,fe,x)||!1)?(Z||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,fe,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,fe,x)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===i.memoizedProps&&J===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&J===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=fe),w.props=h,w.state=fe,w.context=x,h=W):(typeof w.componentDidUpdate!="function"||k===i.memoizedProps&&J===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&J===i.memoizedState||(o.flags|=1024),h=!1)}return gp(i,o,l,h,_,p)}function gp(i,o,l,h,p,_){pv(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&Ey(o,l,!1),fi(i,o,_);h=o.stateNode,_R.current=o;var k=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=ha(o,i.child,null,_),o.child=ha(o,null,k,_)):pn(i,o,k,_),o.memoizedState=h.state,p&&Ey(o,l,!0),o.child}function gv(i){var o=i.stateNode;o.pendingContext?yy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&yy(i,o.context,!1),Zf(i,o.containerInfo)}function _v(i,o,l,h,p){return ca(),qf(p),o.flags|=256,pn(i,o,l,h),o.child}var _p={dehydrated:null,treeContext:null,retryLane:0};function yp(i){return{baseLanes:i,cachePool:null,transitions:null}}function yv(i,o,l){var h=o.pendingProps,p=ft.current,_=!1,w=(o.flags&128)!==0,k;if((k=w)||(k=i!==null&&i.memoizedState===null?!1:(p&2)!==0),k?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),st(ft,p&1),i===null)return Hf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=mh(w,h,0,null),i=oo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=yp(l),o.memoizedState=_p,i):vp(o,w));if(p=i.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return yR(i,o,w,h,k,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,k=p.sibling;var x={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=x,o.deletions=null):(h=Zi(p,x),h.subtreeFlags=p.subtreeFlags&14680064),k!==null?_=Zi(k,_):(_=oo(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?yp(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=_p,h}return _=i.child,i=_.sibling,h=Zi(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function vp(i,o){return o=mh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function nh(i,o,l,h){return h!==null&&qf(h),ha(o,i.child,null,l),i=vp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function yR(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=fp(Error(t(422))),nh(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=mh({mode:"visible",children:h.children},p,0,null),_=oo(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&ha(o,i.child,null,w),o.child.memoizedState=yp(w),o.memoizedState=_p,_);if((o.mode&1)===0)return nh(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var k=h.dgst;return h=k,_=Error(t(419)),h=fp(_,h,void 0),nh(i,o,w,h)}if(k=(w&i.childLanes)!==0,wn||k){if(h=zt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,hi(i,p),_r(h,i,p,-1))}return Lp(),h=fp(Error(t(421))),nh(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=xR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Ln=zi(p.nextSibling),On=o,dt=!0,fr=null,i!==null&&(Hn[qn++]=ui,Hn[qn++]=ci,Hn[qn++]=Xs,ui=i.id,ci=i.overflow,Xs=o),o=vp(o,h.children),o.flags|=4096,o)}function vv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Yf(i.return,o,l)}function Ep(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function Ev(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(pn(i,o,h.children,l),h=ft.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&vv(i,l,o);else if(i.tag===19)vv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(st(ft,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Qc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Ep(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Qc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Ep(o,!0,l,null,_);break;case"together":Ep(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function rh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function fi(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),no|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Zi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Zi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function vR(i,o,l){switch(o.tag){case 3:gv(o),ca();break;case 5:Oy(o);break;case 1:En(o.type)&&Uc(o);break;case 4:Zf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;st(Hc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(st(ft,ft.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?yv(i,o,l):(st(ft,ft.current&1),i=fi(i,o,l),i!==null?i.sibling:null);st(ft,ft.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Ev(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),st(ft,ft.current),h)break;return null;case 22:case 23:return o.lanes=0,fv(i,o,l)}return fi(i,o,l)}var wv,wp,Tv,Iv;wv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},wp=function(){},Tv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,eo(Dr.current);var _=null;switch(l){case"input":p=Ft(i,p),h=Ft(i,h),_=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),_=[];break;case"textarea":p=Zr(i,p),h=Zr(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Mc)}ml(l,h);var w;l=null;for(W in p)if(!h.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var k=p[W];for(w in k)k.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?_||(_=[]):(_=_||[]).push(W,null));for(W in h){var x=h[W];if(k=p!=null?p[W]:void 0,h.hasOwnProperty(W)&&x!==k&&(x!=null||k!=null))if(W==="style")if(k){for(w in k)!k.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in x)x.hasOwnProperty(w)&&k[w]!==x[w]&&(l||(l={}),l[w]=x[w])}else l||(_||(_=[]),_.push(W,l)),l=x;else W==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,k=k?k.__html:void 0,x!=null&&k!==x&&(_=_||[]).push(W,x)):W==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push(W,""+x):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(x!=null&&W==="onScroll"&&at("scroll",i),_||k===x||(_=[])):(_=_||[]).push(W,x))}l&&(_=_||[]).push("style",l);var W=_;(o.updateQueue=W)&&(o.flags|=4)}},Iv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Ql(i,o){if(!dt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function sn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function ER(i,o,l){var h=o.pendingProps;switch($f(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(o),null;case 1:return En(o.type)&&Fc(),sn(o),null;case 3:return h=o.stateNode,pa(),lt(vn),lt(nn),np(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&($c(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,fr!==null&&(bp(fr),fr=null))),wp(i,o),sn(o),null;case 5:ep(o);var p=eo(Wl.current);if(l=o.type,i!==null&&o.stateNode!=null)Tv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return sn(o),null}if(i=eo(Dr.current),$c(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[br]=o,h[Ul]=_,i=(o.mode&1)!==0,l){case"dialog":at("cancel",h),at("close",h);break;case"iframe":case"object":case"embed":at("load",h);break;case"video":case"audio":for(p=0;p<Ml.length;p++)at(Ml[p],h);break;case"source":at("error",h);break;case"img":case"image":case"link":at("error",h),at("load",h);break;case"details":at("toggle",h);break;case"input":Y(h,_),at("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},at("invalid",h);break;case"textarea":xo(h,_),at("invalid",h)}ml(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var k=_[w];w==="children"?typeof k=="string"?h.textContent!==k&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,k,i),p=["children",k]):typeof k=="number"&&h.textContent!==""+k&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,k,i),p=["children",""+k]):s.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&at("scroll",h)}switch(l){case"input":tr(h),jn(h,_,!0);break;case"textarea":tr(h),cl(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Mc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=bt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[br]=o,i[Ul]=h,wv(i,o,!1,!1),o.stateNode=i;e:{switch(w=gl(l,h),l){case"dialog":at("cancel",i),at("close",i),p=h;break;case"iframe":case"object":case"embed":at("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ml.length;p++)at(Ml[p],i);p=h;break;case"source":at("error",i),p=h;break;case"img":case"image":case"link":at("error",i),at("load",i),p=h;break;case"details":at("toggle",i),p=h;break;case"input":Y(i,h),p=Ft(i,h),at("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),at("invalid",i);break;case"textarea":xo(i,h),p=Zr(i,h),at("invalid",i);break;default:p=h}ml(l,p),k=p;for(_ in k)if(k.hasOwnProperty(_)){var x=k[_];_==="style"?fl(i,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&hl(i,x)):_==="children"?typeof x=="string"?(l!=="textarea"||x!=="")&&xi(i,x):typeof x=="number"&&xi(i,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?x!=null&&_==="onScroll"&&at("scroll",i):x!=null&&X(i,_,x,w))}switch(l){case"input":tr(i),jn(i,h,!1);break;case"textarea":tr(i),cl(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ge(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?tn(i,!!h.multiple,_,!1):h.defaultValue!=null&&tn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Mc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return sn(o),null;case 6:if(i&&o.stateNode!=null)Iv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=eo(Wl.current),eo(Dr.current),$c(o)){if(h=o.stateNode,l=o.memoizedProps,h[br]=o,(_=h.nodeValue!==l)&&(i=On,i!==null))switch(i.tag){case 3:Lc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Lc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[br]=o,o.stateNode=h}return sn(o),null;case 13:if(lt(ft),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(dt&&Ln!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ry(),ca(),o.flags|=98560,_=!1;else if(_=$c(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[br]=o}else ca(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;sn(o),_=!1}else fr!==null&&(bp(fr),fr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(ft.current&1)!==0?Mt===0&&(Mt=3):Lp())),o.updateQueue!==null&&(o.flags|=4),sn(o),null);case 4:return pa(),wp(i,o),i===null&&Vl(o.stateNode.containerInfo),sn(o),null;case 10:return Qf(o.type._context),sn(o),null;case 17:return En(o.type)&&Fc(),sn(o),null;case 19:if(lt(ft),_=o.memoizedState,_===null)return sn(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)Ql(_,!1);else{if(Mt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=Qc(i),w!==null){for(o.flags|=128,Ql(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return st(ft,ft.current&1|2),o.child}i=i.sibling}_.tail!==null&&it()>ya&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304)}else{if(!h)if(i=Qc(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!dt)return sn(o),null}else 2*it()-_.renderingStartTime>ya&&l!==1073741824&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=it(),o.sibling=null,l=ft.current,st(ft,h?l&1|2:l&1),o):(sn(o),null);case 22:case 23:return Op(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Mn&1073741824)!==0&&(sn(o),o.subtreeFlags&6&&(o.flags|=8192)):sn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function wR(i,o){switch($f(o),o.tag){case 1:return En(o.type)&&Fc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return pa(),lt(vn),lt(nn),np(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return ep(o),null;case 13:if(lt(ft),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ca()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return lt(ft),null;case 4:return pa(),null;case 10:return Qf(o.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var ih=!1,on=!1,TR=typeof WeakSet=="function"?WeakSet:Set,de=null;function ga(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){gt(i,o,h)}else l.current=null}function Tp(i,o,l){try{l()}catch(h){gt(i,o,h)}}var Cv=!1;function IR(i,o){if(Of=Ui,i=ny(),Rf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,k=-1,x=-1,W=0,Z=0,ee=i,J=null;t:for(;;){for(var ue;ee!==l||p!==0&&ee.nodeType!==3||(k=w+p),ee!==_||h!==0&&ee.nodeType!==3||(x=w+h),ee.nodeType===3&&(w+=ee.nodeValue.length),(ue=ee.firstChild)!==null;)J=ee,ee=ue;for(;;){if(ee===i)break t;if(J===l&&++W===p&&(k=w),J===_&&++Z===h&&(x=w),(ue=ee.nextSibling)!==null)break;ee=J,J=ee.parentNode}ee=ue}l=k===-1||x===-1?null:{start:k,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(Lf={focusedElem:i,selectionRange:l},Ui=!1,de=o;de!==null;)if(o=de,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,de=i;else for(;de!==null;){o=de;try{var fe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,Et=fe.memoizedState,B=o.stateNode,O=B.getSnapshotBeforeUpdate(o.elementType===o.type?pe:pr(o.type,pe),Et);B.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var z=o.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ie){gt(o,o.return,ie)}if(i=o.sibling,i!==null){i.return=o.return,de=i;break}de=o.return}return fe=Cv,Cv=!1,fe}function Yl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Tp(o,l,_)}p=p.next}while(p!==h)}}function sh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Ip(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Sv(i){var o=i.alternate;o!==null&&(i.alternate=null,Sv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[br],delete o[Ul],delete o[Uf],delete o[sR],delete o[oR])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Rv(i){return i.tag===5||i.tag===3||i.tag===4}function Av(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Rv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Cp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Mc));else if(h!==4&&(i=i.child,i!==null))for(Cp(i,o,l),i=i.sibling;i!==null;)Cp(i,o,l),i=i.sibling}function Sp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Sp(i,o,l),i=i.sibling;i!==null;)Sp(i,o,l),i=i.sibling}var Yt=null,mr=!1;function Ki(i,o,l){for(l=l.child;l!==null;)kv(i,o,l),l=l.sibling}function kv(i,o,l){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(zs,l)}catch{}switch(l.tag){case 5:on||ga(l,o);case 6:var h=Yt,p=mr;Yt=null,Ki(i,o,l),Yt=h,mr=p,Yt!==null&&(mr?(i=Yt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Yt.removeChild(l.stateNode));break;case 18:Yt!==null&&(mr?(i=Yt,l=l.stateNode,i.nodeType===8?Ff(i.parentNode,l):i.nodeType===1&&Ff(i,l),cr(i)):Ff(Yt,l.stateNode));break;case 4:h=Yt,p=mr,Yt=l.stateNode.containerInfo,mr=!0,Ki(i,o,l),Yt=h,mr=p;break;case 0:case 11:case 14:case 15:if(!on&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Tp(l,o,w),p=p.next}while(p!==h)}Ki(i,o,l);break;case 1:if(!on&&(ga(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(k){gt(l,o,k)}Ki(i,o,l);break;case 21:Ki(i,o,l);break;case 22:l.mode&1?(on=(h=on)||l.memoizedState!==null,Ki(i,o,l),on=h):Ki(i,o,l);break;default:Ki(i,o,l)}}function Pv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new TR),o.forEach(function(h){var p=bR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function gr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,k=w;e:for(;k!==null;){switch(k.tag){case 5:Yt=k.stateNode,mr=!1;break e;case 3:Yt=k.stateNode.containerInfo,mr=!0;break e;case 4:Yt=k.stateNode.containerInfo,mr=!0;break e}k=k.return}if(Yt===null)throw Error(t(160));kv(_,w,p),Yt=null,mr=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(W){gt(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Nv(o,i),o=o.sibling}function Nv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gr(o,i),Lr(i),h&4){try{Yl(3,i,i.return),sh(3,i)}catch(pe){gt(i,i.return,pe)}try{Yl(5,i,i.return)}catch(pe){gt(i,i.return,pe)}}break;case 1:gr(o,i),Lr(i),h&512&&l!==null&&ga(l,l.return);break;case 5:if(gr(o,i),Lr(i),h&512&&l!==null&&ga(l,l.return),i.flags&32){var p=i.stateNode;try{xi(p,"")}catch(pe){gt(i,i.return,pe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,k=i.type,x=i.updateQueue;if(i.updateQueue=null,x!==null)try{k==="input"&&_.type==="radio"&&_.name!=null&&Ee(p,_),gl(k,w);var W=gl(k,_);for(w=0;w<x.length;w+=2){var Z=x[w],ee=x[w+1];Z==="style"?fl(p,ee):Z==="dangerouslySetInnerHTML"?hl(p,ee):Z==="children"?xi(p,ee):X(p,Z,ee,W)}switch(k){case"input":Ut(p,_);break;case"textarea":bo(p,_);break;case"select":var J=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ue=_.value;ue!=null?tn(p,!!_.multiple,ue,!1):J!==!!_.multiple&&(_.defaultValue!=null?tn(p,!!_.multiple,_.defaultValue,!0):tn(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ul]=_}catch(pe){gt(i,i.return,pe)}}break;case 6:if(gr(o,i),Lr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(pe){gt(i,i.return,pe)}}break;case 3:if(gr(o,i),Lr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{cr(o.containerInfo)}catch(pe){gt(i,i.return,pe)}break;case 4:gr(o,i),Lr(i);break;case 13:gr(o,i),Lr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(kp=it())),h&4&&Pv(i);break;case 22:if(Z=l!==null&&l.memoizedState!==null,i.mode&1?(on=(W=on)||Z,gr(o,i),on=W):gr(o,i),Lr(i),h&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!Z&&(i.mode&1)!==0)for(de=i,Z=i.child;Z!==null;){for(ee=de=Z;de!==null;){switch(J=de,ue=J.child,J.tag){case 0:case 11:case 14:case 15:Yl(4,J,J.return);break;case 1:ga(J,J.return);var fe=J.stateNode;if(typeof fe.componentWillUnmount=="function"){h=J,l=J.return;try{o=h,fe.props=o.memoizedProps,fe.state=o.memoizedState,fe.componentWillUnmount()}catch(pe){gt(h,l,pe)}}break;case 5:ga(J,J.return);break;case 22:if(J.memoizedState!==null){Dv(ee);continue}}ue!==null?(ue.return=J,de=ue):Dv(ee)}Z=Z.sibling}e:for(Z=null,ee=i;;){if(ee.tag===5){if(Z===null){Z=ee;try{p=ee.stateNode,W?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(k=ee.stateNode,x=ee.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,k.style.display=dl("display",w))}catch(pe){gt(i,i.return,pe)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=W?"":ee.memoizedProps}catch(pe){gt(i,i.return,pe)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===i)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===i)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===i)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:gr(o,i),Lr(i),h&4&&Pv(i);break;case 21:break;default:gr(o,i),Lr(i)}}function Lr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Rv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(xi(p,""),h.flags&=-33);var _=Av(i);Sp(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,k=Av(i);Cp(i,k,w);break;default:throw Error(t(161))}}catch(x){gt(i,i.return,x)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function CR(i,o,l){de=i,xv(i)}function xv(i,o,l){for(var h=(i.mode&1)!==0;de!==null;){var p=de,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||ih;if(!w){var k=p.alternate,x=k!==null&&k.memoizedState!==null||on;k=ih;var W=on;if(ih=w,(on=x)&&!W)for(de=p;de!==null;)w=de,x=w.child,w.tag===22&&w.memoizedState!==null?Ov(p):x!==null?(x.return=w,de=x):Ov(p);for(;_!==null;)de=_,xv(_),_=_.sibling;de=p,ih=k,on=W}bv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,de=_):bv(i)}}function bv(i){for(;de!==null;){var o=de;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:on||sh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!on)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:pr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Dy(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Dy(o,w,l)}break;case 5:var k=o.stateNode;if(l===null&&o.flags&4){l=k;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&l.focus();break;case"img":x.src&&(l.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var Z=W.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&cr(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}on||o.flags&512&&Ip(o)}catch(J){gt(o,o.return,J)}}if(o===i){de=null;break}if(l=o.sibling,l!==null){l.return=o.return,de=l;break}de=o.return}}function Dv(i){for(;de!==null;){var o=de;if(o===i){de=null;break}var l=o.sibling;if(l!==null){l.return=o.return,de=l;break}de=o.return}}function Ov(i){for(;de!==null;){var o=de;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{sh(4,o)}catch(x){gt(o,l,x)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(x){gt(o,p,x)}}var _=o.return;try{Ip(o)}catch(x){gt(o,_,x)}break;case 5:var w=o.return;try{Ip(o)}catch(x){gt(o,w,x)}}}catch(x){gt(o,o.return,x)}if(o===i){de=null;break}var k=o.sibling;if(k!==null){k.return=o.return,de=k;break}de=o.return}}var SR=Math.ceil,oh=q.ReactCurrentDispatcher,Rp=q.ReactCurrentOwner,Qn=q.ReactCurrentBatchConfig,Ke=0,zt=null,St=null,Xt=0,Mn=0,_a=$i(0),Mt=0,Xl=null,no=0,ah=0,Ap=0,Jl=null,Tn=null,kp=0,ya=1/0,pi=null,lh=!1,Pp=null,Qi=null,uh=!1,Yi=null,ch=0,Zl=0,Np=null,hh=-1,dh=0;function mn(){return(Ke&6)!==0?it():hh!==-1?hh:hh=it()}function Xi(i){return(i.mode&1)===0?1:(Ke&2)!==0&&Xt!==0?Xt&-Xt:lR.transition!==null?(dh===0&&(dh=Ws()),dh):(i=$e,i!==0||(i=window.event,i=i===void 0?16:Al(i.type)),i)}function _r(i,o,l,h){if(50<Zl)throw Zl=0,Np=null,Error(t(185));Li(i,l,h),((Ke&2)===0||i!==zt)&&(i===zt&&((Ke&2)===0&&(ah|=l),Mt===4&&Ji(i,Xt)),In(i,h),l===1&&Ke===0&&(o.mode&1)===0&&(ya=it()+500,jc&&Hi()))}function In(i,o){var l=i.callbackNode;ni(i,o);var h=$s(i,i===zt?Xt:0);if(h===0)l!==null&&Tl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Tl(l),o===1)i.tag===0?aR(Mv.bind(null,i)):wy(Mv.bind(null,i)),rR(function(){(Ke&6)===0&&Hi()}),l=null;else{switch(Vi(h)){case 1:l=Bs;break;case 4:l=bi;break;case 16:l=zn;break;case 536870912:l=dc;break;default:l=zn}l=Wv(l,Lv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Lv(i,o){if(hh=-1,dh=0,(Ke&6)!==0)throw Error(t(327));var l=i.callbackNode;if(va()&&i.callbackNode!==l)return null;var h=$s(i,i===zt?Xt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=fh(i,h);else{o=h;var p=Ke;Ke|=2;var _=Fv();(zt!==i||Xt!==o)&&(pi=null,ya=it()+500,io(i,o));do try{kR();break}catch(k){Vv(i,k)}while(!0);Kf(),oh.current=_,Ke=p,St!==null?o=0:(zt=null,Xt=0,o=Mt)}if(o!==0){if(o===2&&(p=xn(i),p!==0&&(h=p,o=xp(i,p))),o===1)throw l=Xl,io(i,0),Ji(i,h),In(i,it()),l;if(o===6)Ji(i,h);else{if(p=i.current.alternate,(h&30)===0&&!RR(p)&&(o=fh(i,h),o===2&&(_=xn(i),_!==0&&(h=_,o=xp(i,_))),o===1))throw l=Xl,io(i,0),Ji(i,h),In(i,it()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:so(i,Tn,pi);break;case 3:if(Ji(i,h),(h&130023424)===h&&(o=kp+500-it(),10<o)){if($s(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){mn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Vf(so.bind(null,i,Tn,pi),o);break}so(i,Tn,pi);break;case 4:if(Ji(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-dn(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=it()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*SR(h/1960))-h,10<h){i.timeoutHandle=Vf(so.bind(null,i,Tn,pi),h);break}so(i,Tn,pi);break;case 5:so(i,Tn,pi);break;default:throw Error(t(329))}}}return In(i,it()),i.callbackNode===l?Lv.bind(null,i):null}function xp(i,o){var l=Jl;return i.current.memoizedState.isDehydrated&&(io(i,o).flags|=256),i=fh(i,o),i!==2&&(o=Tn,Tn=l,o!==null&&bp(o)),i}function bp(i){Tn===null?Tn=i:Tn.push.apply(Tn,i)}function RR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!dr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ji(i,o){for(o&=~Ap,o&=~ah,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-dn(o),h=1<<l;i[l]=-1,o&=~h}}function Mv(i){if((Ke&6)!==0)throw Error(t(327));va();var o=$s(i,0);if((o&1)===0)return In(i,it()),null;var l=fh(i,o);if(i.tag!==0&&l===2){var h=xn(i);h!==0&&(o=h,l=xp(i,h))}if(l===1)throw l=Xl,io(i,0),Ji(i,o),In(i,it()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,so(i,Tn,pi),In(i,it()),null}function Dp(i,o){var l=Ke;Ke|=1;try{return i(o)}finally{Ke=l,Ke===0&&(ya=it()+500,jc&&Hi())}}function ro(i){Yi!==null&&Yi.tag===0&&(Ke&6)===0&&va();var o=Ke;Ke|=1;var l=Qn.transition,h=$e;try{if(Qn.transition=null,$e=1,i)return i()}finally{$e=h,Qn.transition=l,Ke=o,(Ke&6)===0&&Hi()}}function Op(){Mn=_a.current,lt(_a)}function io(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,nR(l)),St!==null)for(l=St.return;l!==null;){var h=l;switch($f(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Fc();break;case 3:pa(),lt(vn),lt(nn),np();break;case 5:ep(h);break;case 4:pa();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Qf(h.type._context);break;case 22:case 23:Op()}l=l.return}if(zt=i,St=i=Zi(i.current,null),Xt=Mn=o,Mt=0,Xl=null,Ap=ah=no=0,Tn=Jl=null,Zs!==null){for(o=0;o<Zs.length;o++)if(l=Zs[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}Zs=null}return i}function Vv(i,o){do{var l=St;try{if(Kf(),Yc.current=eh,Xc){for(var h=pt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Xc=!1}if(to=0,Bt=Lt=pt=null,Hl=!1,ql=0,Rp.current=null,l===null||l.return===null){Mt=1,Xl=o,St=null;break}e:{var _=i,w=l.return,k=l,x=o;if(o=Xt,k.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var W=x,Z=k,ee=Z.tag;if((Z.mode&1)===0&&(ee===0||ee===11||ee===15)){var J=Z.alternate;J?(Z.updateQueue=J.updateQueue,Z.memoizedState=J.memoizedState,Z.lanes=J.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ue=lv(w);if(ue!==null){ue.flags&=-257,uv(ue,w,k,_,o),ue.mode&1&&av(_,W,o),o=ue,x=W;var fe=o.updateQueue;if(fe===null){var pe=new Set;pe.add(x),o.updateQueue=pe}else fe.add(x);break e}else{if((o&1)===0){av(_,W,o),Lp();break e}x=Error(t(426))}}else if(dt&&k.mode&1){var Et=lv(w);if(Et!==null){(Et.flags&65536)===0&&(Et.flags|=256),uv(Et,w,k,_,o),qf(ma(x,k));break e}}_=x=ma(x,k),Mt!==4&&(Mt=2),Jl===null?Jl=[_]:Jl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var B=sv(_,x,o);by(_,B);break e;case 1:k=x;var O=_.type,z=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Qi===null||!Qi.has(z)))){_.flags|=65536,o&=-o,_.lanes|=o;var ie=ov(_,k,o);by(_,ie);break e}}_=_.return}while(_!==null)}jv(l)}catch(ge){o=ge,St===l&&l!==null&&(St=l=l.return);continue}break}while(!0)}function Fv(){var i=oh.current;return oh.current=eh,i===null?eh:i}function Lp(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),zt===null||(no&268435455)===0&&(ah&268435455)===0||Ji(zt,Xt)}function fh(i,o){var l=Ke;Ke|=2;var h=Fv();(zt!==i||Xt!==o)&&(pi=null,io(i,o));do try{AR();break}catch(p){Vv(i,p)}while(!0);if(Kf(),Ke=l,oh.current=h,St!==null)throw Error(t(261));return zt=null,Xt=0,Mt}function AR(){for(;St!==null;)Uv(St)}function kR(){for(;St!==null&&!cc();)Uv(St)}function Uv(i){var o=$v(i.alternate,i,Mn);i.memoizedProps=i.pendingProps,o===null?jv(i):St=o,Rp.current=null}function jv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=ER(l,o,Mn),l!==null){St=l;return}}else{if(l=wR(l,o),l!==null){l.flags&=32767,St=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Mt=6,St=null;return}}if(o=o.sibling,o!==null){St=o;return}St=o=i}while(o!==null);Mt===0&&(Mt=5)}function so(i,o,l){var h=$e,p=Qn.transition;try{Qn.transition=null,$e=1,PR(i,o,l,h)}finally{Qn.transition=p,$e=h}return null}function PR(i,o,l,h){do va();while(Yi!==null);if((Ke&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(nt(i,_),i===zt&&(St=zt=null,Xt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||uh||(uh=!0,Wv(zn,function(){return va(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Qn.transition,Qn.transition=null;var w=$e;$e=1;var k=Ke;Ke|=4,Rp.current=null,IR(i,l),Nv(l,i),QS(Lf),Ui=!!Of,Lf=Of=null,i.current=l,CR(l),yf(),Ke=k,$e=w,Qn.transition=_}else i.current=l;if(uh&&(uh=!1,Yi=i,ch=p),_=i.pendingLanes,_===0&&(Qi=null),fc(l.stateNode),In(i,it()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(lh)throw lh=!1,i=Pp,Pp=null,i;return(ch&1)!==0&&i.tag!==0&&va(),_=i.pendingLanes,(_&1)!==0?i===Np?Zl++:(Zl=0,Np=i):Zl=0,Hi(),null}function va(){if(Yi!==null){var i=Vi(ch),o=Qn.transition,l=$e;try{if(Qn.transition=null,$e=16>i?16:i,Yi===null)var h=!1;else{if(i=Yi,Yi=null,ch=0,(Ke&6)!==0)throw Error(t(331));var p=Ke;for(Ke|=4,de=i.current;de!==null;){var _=de,w=_.child;if((de.flags&16)!==0){var k=_.deletions;if(k!==null){for(var x=0;x<k.length;x++){var W=k[x];for(de=W;de!==null;){var Z=de;switch(Z.tag){case 0:case 11:case 15:Yl(8,Z,_)}var ee=Z.child;if(ee!==null)ee.return=Z,de=ee;else for(;de!==null;){Z=de;var J=Z.sibling,ue=Z.return;if(Sv(Z),Z===W){de=null;break}if(J!==null){J.return=ue,de=J;break}de=ue}}}var fe=_.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var Et=pe.sibling;pe.sibling=null,pe=Et}while(pe!==null)}}de=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,de=w;else e:for(;de!==null;){if(_=de,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Yl(9,_,_.return)}var B=_.sibling;if(B!==null){B.return=_.return,de=B;break e}de=_.return}}var O=i.current;for(de=O;de!==null;){w=de;var z=w.child;if((w.subtreeFlags&2064)!==0&&z!==null)z.return=w,de=z;else e:for(w=O;de!==null;){if(k=de,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:sh(9,k)}}catch(ge){gt(k,k.return,ge)}if(k===w){de=null;break e}var ie=k.sibling;if(ie!==null){ie.return=k.return,de=ie;break e}de=k.return}}if(Ke=p,Hi(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(zs,i)}catch{}h=!0}return h}finally{$e=l,Qn.transition=o}}return!1}function Bv(i,o,l){o=ma(l,o),o=sv(i,o,1),i=Gi(i,o,1),o=mn(),i!==null&&(Li(i,1,o),In(i,o))}function gt(i,o,l){if(i.tag===3)Bv(i,i,l);else for(;o!==null;){if(o.tag===3){Bv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Qi===null||!Qi.has(h))){i=ma(l,i),i=ov(o,i,1),o=Gi(o,i,1),i=mn(),o!==null&&(Li(o,1,i),In(o,i));break}}o=o.return}}function NR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=mn(),i.pingedLanes|=i.suspendedLanes&l,zt===i&&(Xt&l)===l&&(Mt===4||Mt===3&&(Xt&130023424)===Xt&&500>it()-kp?io(i,0):Ap|=l),In(i,o)}function zv(i,o){o===0&&((i.mode&1)===0?o=1:(o=zo,zo<<=1,(zo&130023424)===0&&(zo=4194304)));var l=mn();i=hi(i,o),i!==null&&(Li(i,o,l),In(i,l))}function xR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),zv(i,l)}function bR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),zv(i,l)}var $v;$v=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||vn.current)wn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return wn=!1,vR(i,o,l);wn=(i.flags&131072)!==0}else wn=!1,dt&&(o.flags&1048576)!==0&&Ty(o,zc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;rh(i,o),i=o.pendingProps;var p=aa(o,nn.current);fa(o,l),p=sp(null,o,h,i,p,l);var _=op();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,En(h)?(_=!0,Uc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Jf(o),p.updater=th,o.stateNode=p,p._reactInternals=o,dp(o,h,i,l),o=gp(null,o,h,!0,_,l)):(o.tag=0,dt&&_&&zf(o),pn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(rh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=OR(h),i=pr(h,i),p){case 0:o=mp(null,o,h,i,l);break e;case 1:o=mv(null,o,h,i,l);break e;case 11:o=cv(null,o,h,i,l);break e;case 14:o=hv(null,o,h,pr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:pr(h,p),mp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:pr(h,p),mv(i,o,h,p,l);case 3:e:{if(gv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,xy(i,o),Kc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=ma(Error(t(423)),o),o=_v(i,o,h,l,p);break e}else if(h!==p){p=ma(Error(t(424)),o),o=_v(i,o,h,l,p);break e}else for(Ln=zi(o.stateNode.containerInfo.firstChild),On=o,dt=!0,fr=null,l=Py(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ca(),h===p){o=fi(i,o,l);break e}pn(i,o,h,l)}o=o.child}return o;case 5:return Oy(o),i===null&&Hf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Mf(h,p)?w=null:_!==null&&Mf(h,_)&&(o.flags|=32),pv(i,o),pn(i,o,w,l),o.child;case 6:return i===null&&Hf(o),null;case 13:return yv(i,o,l);case 4:return Zf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=ha(o,null,h,l):pn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:pr(h,p),cv(i,o,h,p,l);case 7:return pn(i,o,o.pendingProps,l),o.child;case 8:return pn(i,o,o.pendingProps.children,l),o.child;case 12:return pn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,st(Hc,h._currentValue),h._currentValue=w,_!==null)if(dr(_.value,w)){if(_.children===p.children&&!vn.current){o=fi(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var k=_.dependencies;if(k!==null){w=_.child;for(var x=k.firstContext;x!==null;){if(x.context===h){if(_.tag===1){x=di(-1,l&-l),x.tag=2;var W=_.updateQueue;if(W!==null){W=W.shared;var Z=W.pending;Z===null?x.next=x:(x.next=Z.next,Z.next=x),W.pending=x}}_.lanes|=l,x=_.alternate,x!==null&&(x.lanes|=l),Yf(_.return,l,o),k.lanes|=l;break}x=x.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,k=w.alternate,k!==null&&(k.lanes|=l),Yf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}pn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,fa(o,l),p=Gn(p),h=h(p),o.flags|=1,pn(i,o,h,l),o.child;case 14:return h=o.type,p=pr(h,o.pendingProps),p=pr(h.type,p),hv(i,o,h,p,l);case 15:return dv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:pr(h,p),rh(i,o),o.tag=1,En(h)?(i=!0,Uc(o)):i=!1,fa(o,l),rv(o,h,p),dp(o,h,p,l),gp(null,o,h,!0,i,l);case 19:return Ev(i,o,l);case 22:return fv(i,o,l)}throw Error(t(156,o.tag))};function Wv(i,o){return jo(i,o)}function DR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(i,o,l,h){return new DR(i,o,l,h)}function Mp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function OR(i){if(typeof i=="function")return Mp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===F)return 11;if(i===Ce)return 14}return 2}function Zi(i,o){var l=i.alternate;return l===null?(l=Yn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ph(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")Mp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case b:return oo(l.children,p,_,o);case A:w=8,p|=8;break;case R:return i=Yn(12,l,o,p|2),i.elementType=R,i.lanes=_,i;case S:return i=Yn(13,l,o,p),i.elementType=S,i.lanes=_,i;case me:return i=Yn(19,l,o,p),i.elementType=me,i.lanes=_,i;case Se:return mh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:w=10;break e;case D:w=9;break e;case F:w=11;break e;case Ce:w=14;break e;case De:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Yn(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function oo(i,o,l,h){return i=Yn(7,i,h,o),i.lanes=l,i}function mh(i,o,l,h){return i=Yn(22,i,h,o),i.elementType=Se,i.lanes=l,i.stateNode={isHidden:!1},i}function Vp(i,o,l){return i=Yn(6,i,null,o),i.lanes=l,i}function Fp(i,o,l){return o=Yn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function LR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Up(i,o,l,h,p,_,w,k,x){return i=new LR(i,o,l,k,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Yn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(_),i}function MR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Hv(i){if(!i)return Wi;i=i._reactInternals;e:{if(sr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(En(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(En(l))return vy(i,l,o)}return o}function qv(i,o,l,h,p,_,w,k,x){return i=Up(l,h,!0,i,p,_,w,k,x),i.context=Hv(null),l=i.current,h=mn(),p=Xi(l),_=di(h,p),_.callback=o??null,Gi(l,_,p),i.current.lanes=p,Li(i,p,h),In(i,h),i}function gh(i,o,l,h){var p=o.current,_=mn(),w=Xi(p);return l=Hv(l),o.context===null?o.context=l:o.pendingContext=l,o=di(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Gi(p,o,w),i!==null&&(_r(i,p,w,_),Gc(i,p,w)),w}function _h(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Gv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function jp(i,o){Gv(i,o),(i=i.alternate)&&Gv(i,o)}function VR(){return null}var Kv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Bp(i){this._internalRoot=i}yh.prototype.render=Bp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));gh(i,o,null,null)},yh.prototype.unmount=Bp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ro(function(){gh(null,i,null,null)}),o[ai]=null}};function yh(i){this._internalRoot=i}yh.prototype.unstable_scheduleHydration=function(i){if(i){var o=yc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<kr.length&&o!==0&&o<kr[l].priority;l++);kr.splice(l,0,i),l===0&&wc(i)}};function zp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function vh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Qv(){}function FR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var W=_h(w);_.call(W)}}var w=qv(o,h,i,0,null,!1,!1,"",Qv);return i._reactRootContainer=w,i[ai]=w.current,Vl(i.nodeType===8?i.parentNode:i),ro(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var k=h;h=function(){var W=_h(x);k.call(W)}}var x=Up(i,0,!1,null,null,!1,!1,"",Qv);return i._reactRootContainer=x,i[ai]=x.current,Vl(i.nodeType===8?i.parentNode:i),ro(function(){gh(o,x,l,h)}),x}function Eh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var k=p;p=function(){var x=_h(w);k.call(x)}}gh(o,w,i,p)}else w=FR(l,o,i,p,h);return _h(w)}gc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Di(o.pendingLanes);l!==0&&(Mi(o,l|1),In(o,it()),(Ke&6)===0&&(ya=it()+500,Hi()))}break;case 13:ro(function(){var h=hi(i,1);if(h!==null){var p=mn();_r(h,i,1,p)}}),jp(i,1)}},$o=function(i){if(i.tag===13){var o=hi(i,134217728);if(o!==null){var l=mn();_r(o,i,134217728,l)}jp(i,134217728)}},_c=function(i){if(i.tag===13){var o=Xi(i),l=hi(i,o);if(l!==null){var h=mn();_r(l,i,o,h)}jp(i,o)}},yc=function(){return $e},vc=function(i,o){var l=$e;try{return $e=i,o()}finally{$e=l}},Oo=function(i,o,l){switch(o){case"input":if(Ut(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Vc(h);if(!p)throw Error(t(90));Xr(h),Ut(h,p)}}}break;case"textarea":bo(i,l);break;case"select":o=l.value,o!=null&&tn(i,!!l.multiple,o,!1)}},Vs=Dp,yl=ro;var UR={usingClientEntryPoint:!1,Events:[jl,sa,Vc,Rr,_l,Dp]},eu={findFiberByHostInstance:Qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jR={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wl(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||VR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wh.isDisabled&&wh.supportsFiber)try{zs=wh.inject(jR),Nn=wh}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UR,Cn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(o))throw Error(t(200));return MR(i,o,null,l)},Cn.createRoot=function(i,o){if(!zp(i))throw Error(t(299));var l=!1,h="",p=Kv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Up(i,1,!1,null,null,l,!1,h,p),i[ai]=o.current,Vl(i.nodeType===8?i.parentNode:i),new Bp(o)},Cn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wl(o),i=i===null?null:i.stateNode,i},Cn.flushSync=function(i){return ro(i)},Cn.hydrate=function(i,o,l){if(!vh(o))throw Error(t(200));return Eh(null,i,o,!0,l)},Cn.hydrateRoot=function(i,o,l){if(!zp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=Kv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=qv(o,null,i,1,l??null,p,!1,_,w),i[ai]=o.current,Vl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new yh(o)},Cn.render=function(i,o,l){if(!vh(o))throw Error(t(200));return Eh(null,i,o,!1,l)},Cn.unmountComponentAtNode=function(i){if(!vh(i))throw Error(t(40));return i._reactRootContainer?(ro(function(){Eh(null,null,i,!1,function(){i._reactRootContainer=null,i[ai]=null})}),!0):!1},Cn.unstable_batchedUpdates=Dp,Cn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!vh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Eh(i,o,l,!1,h)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var rE;function QR(){if(rE)return Hp.exports;rE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Hp.exports=KR(),Hp.exports}var iE;function YR(){if(iE)return Th;iE=1;var n=QR();return Th.createRoot=n.createRoot,Th.hydrateRoot=n.hydrateRoot,Th}var XR=YR();const JR=LT(XR),ZR=()=>{};var sE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=function(n,e){if(!n)throw Xa(e)},Xa=function(n){return new Error("Firebase Database ("+MT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},eA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,P=m&63;f||(P=64,u||(T=64)),r.push(t[y],t[E],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(VT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new tA;const T=a<<2|d>>4;if(r.push(T),m!==64){const P=d<<4&240|m>>2;if(r.push(P),E!==64){const L=m<<6&192|E;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FT=function(n){const e=VT(n);return lg.encodeByteArray(e,!0)},Hh=function(n){return FT(n).replace(/\./g,"")},qh=function(n){try{return lg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(n){return UT(void 0,n)}function UT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rA(t)||(n[t]=UT(n[t],e[t]));return n}function rA(n){return n!=="__proto__"}/**
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
 */function iA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sA=()=>iA().__FIREBASE_DEFAULTS__,oA=()=>{if(typeof process>"u"||typeof sE>"u")return;const n=sE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qh(n[1]);return e&&JSON.parse(e)},Nd=()=>{try{return ZR()||sA()||oA()||aA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jT=n=>{var e,t;return(t=(e=Nd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ug=n=>{const e=jT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},BT=()=>{var n;return(n=Nd())===null||n===void 0?void 0:n.config},zT=n=>{var e;return(e=Nd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Kr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function cg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hh(JSON.stringify(t)),Hh(JSON.stringify(u)),""].join(".")}const mu={};function lA(){const n={prod:[],emulator:[]};for(const e of Object.keys(mu))mu[e]?n.emulator.push(e):n.prod.push(e);return n}function uA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let oE=!1;function bd(n,e){if(typeof window>"u"||typeof document>"u"||!Kr(window.location.host)||mu[n]===e||mu[n]||oE)return;mu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=lA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{oE=!0,u()},T}function y(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=uA(r),P=t("text"),L=document.getElementById(P)||document.createElement("span"),M=t("learnmore"),V=document.getElementById(M)||document.createElement("a"),re=t("preprendIcon"),$=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const X=T.element;d(X),y(V,M);const q=m();f($,re),X.append($,L,V,q),document.body.appendChild(X)}a?(L.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function cA(){var n;const e=(n=Nd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fA(){const n=cn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pA(){return MT.NODE_ADMIN===!0}function mA(){return!cA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gA(){try{return typeof indexedDB=="object"}catch{return!1}}function _A(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="FirebaseError";class Qr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yA,Object.setPrototypeOf(this,Qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gu.prototype.create)}}class Gu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?vA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Qr(s,d,r)}}function vA(n,e){return n.replace(EA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const EA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){return JSON.parse(n)}function Gt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Au(qh(a[0])||""),t=Au(qh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},wA=function(n){const e=WT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},TA=function(n){const e=WT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function La(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Ti(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(aE(a)&&aE(u)){if(!Ti(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function aE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function uu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):E<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const T=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function CA(n,e){const t=new SA(n,e);return t.subscribe.bind(t)}class SA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");RA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Kp),s.error===void 0&&(s.error=Kp),s.complete===void 0&&(s.complete=Kp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kp(){}function Ma(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,se(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Je(n){return n&&n._delegate?n._delegate:n}class Ii{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ao="[DEFAULT]";/**
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
 */class kA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new gi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NA(e))try{this.getOrInitializeService({instanceIdentifier:ao})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=ao){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ao){return this.instances.has(e)}getOptions(e=ao){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ao){return this.component?this.component.multipleInstances?e:ao:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PA(n){return n===ao?void 0:n}function NA(n){return n.instantiationMode==="EAGER"}/**
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
 */class xA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const bA={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},DA=Be.INFO,OA={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},LA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=OA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=DA,this._logHandler=LA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const MA=(n,e)=>e.some(t=>n instanceof t);let lE,uE;function VA(){return lE||(lE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FA(){return uE||(uE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HT=new WeakMap,mm=new WeakMap,qT=new WeakMap,Qp=new WeakMap,dg=new WeakMap;function UA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(us(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&HT.set(t,n)}).catch(()=>{}),dg.set(e,n),e}function jA(n){if(mm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});mm.set(n,e)}let gm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return us(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BA(n){gm=n(gm)}function zA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Yp(this),e,...t);return qT.set(r,e.sort?e.sort():[e]),us(r)}:FA().includes(n)?function(...e){return n.apply(Yp(this),e),us(HT.get(this))}:function(...e){return us(n.apply(Yp(this),e))}}function $A(n){return typeof n=="function"?zA(n):(n instanceof IDBTransaction&&jA(n),MA(n,VA())?new Proxy(n,gm):n)}function us(n){if(n instanceof IDBRequest)return UA(n);if(Qp.has(n))return Qp.get(n);const e=$A(n);return e!==n&&(Qp.set(n,e),dg.set(e,n)),e}const Yp=n=>dg.get(n);function WA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=us(u);return r&&u.addEventListener("upgradeneeded",f=>{r(us(u.result),f.oldVersion,f.newVersion,us(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const HA=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],Xp=new Map;function cE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xp.get(e))return Xp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||HA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Xp.set(e,a),a}BA(n=>({...n,get:(e,t,r)=>cE(e,t)||n.get(e,t,r),has:(e,t)=>!!cE(e,t)||n.has(e,t)}));/**
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
 */class GA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function KA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _m="@firebase/app",hE="0.13.2";/**
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
 */const Ci=new Od("@firebase/app"),QA="@firebase/app-compat",YA="@firebase/analytics-compat",XA="@firebase/analytics",JA="@firebase/app-check-compat",ZA="@firebase/app-check",ek="@firebase/auth",tk="@firebase/auth-compat",nk="@firebase/database",rk="@firebase/data-connect",ik="@firebase/database-compat",sk="@firebase/functions",ok="@firebase/functions-compat",ak="@firebase/installations",lk="@firebase/installations-compat",uk="@firebase/messaging",ck="@firebase/messaging-compat",hk="@firebase/performance",dk="@firebase/performance-compat",fk="@firebase/remote-config",pk="@firebase/remote-config-compat",mk="@firebase/storage",gk="@firebase/storage-compat",_k="@firebase/firestore",yk="@firebase/ai",vk="@firebase/firestore-compat",Ek="firebase",wk="11.10.0";/**
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
 */const ym="[DEFAULT]",Tk={[_m]:"fire-core",[QA]:"fire-core-compat",[XA]:"fire-analytics",[YA]:"fire-analytics-compat",[ZA]:"fire-app-check",[JA]:"fire-app-check-compat",[ek]:"fire-auth",[tk]:"fire-auth-compat",[nk]:"fire-rtdb",[rk]:"fire-data-connect",[ik]:"fire-rtdb-compat",[sk]:"fire-fn",[ok]:"fire-fn-compat",[ak]:"fire-iid",[lk]:"fire-iid-compat",[uk]:"fire-fcm",[ck]:"fire-fcm-compat",[hk]:"fire-perf",[dk]:"fire-perf-compat",[fk]:"fire-rc",[pk]:"fire-rc-compat",[mk]:"fire-gcs",[gk]:"fire-gcs-compat",[_k]:"fire-fst",[vk]:"fire-fst-compat",[yk]:"fire-vertex","fire-js":"fire-js",[Ek]:"fire-js-all"};/**
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
 */const Qh=new Map,Ik=new Map,vm=new Map;function dE(n,e){try{n.container.addComponent(e)}catch(t){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vs(n){const e=n.name;if(vm.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;vm.set(e,n);for(const t of Qh.values())dE(t,n);for(const t of Ik.values())dE(t,n);return!0}function Ku(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ck={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cs=new Gu("app","Firebase",Ck);/**
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
 */class Sk{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=wk;function GT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ym,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw cs.create("bad-app-name",{appName:String(s)});if(t||(t=BT()),!t)throw cs.create("no-options");const a=Qh.get(s);if(a){if(Ti(t,a.options)&&Ti(r,a.config))return a;throw cs.create("duplicate-app",{appName:s})}const u=new xA(s);for(const f of vm.values())u.addComponent(f);const d=new Sk(t,r,u);return Qh.set(s,d),d}function Ld(n=ym){const e=Qh.get(n);if(!e&&n===ym&&BT())return GT();if(!e)throw cs.create("no-app",{appName:n});return e}function er(n,e,t){var r;let s=(r=Tk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(d.join(" "));return}vs(new Ii(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rk="firebase-heartbeat-database",Ak=1,ku="firebase-heartbeat-store";let Jp=null;function KT(){return Jp||(Jp=WA(Rk,Ak,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ku)}catch(t){console.warn(t)}}}}).catch(n=>{throw cs.create("idb-open",{originalErrorMessage:n.message})})),Jp}async function kk(n){try{const t=(await KT()).transaction(ku),r=await t.objectStore(ku).get(QT(n));return await t.done,r}catch(e){if(e instanceof Qr)Ci.warn(e.message);else{const t=cs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(t.message)}}}async function fE(n,e){try{const r=(await KT()).transaction(ku,"readwrite");await r.objectStore(ku).put(e,QT(n)),await r.done}catch(t){if(t instanceof Qr)Ci.warn(t.message);else{const r=cs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ci.warn(r.message)}}}function QT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pk=1024,Nk=30;class xk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=pE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>Nk){const u=Ok(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ci.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pE(),{heartbeatsToSend:r,unsentEntries:s}=bk(this._heartbeatsCache.heartbeats),a=Hh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ci.warn(t),""}}}function pE(){return new Date().toISOString().substring(0,10)}function bk(n,e=Pk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),mE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),mE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Dk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gA()?_A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mE(n){return Hh(JSON.stringify({version:2,heartbeats:n})).length}function Ok(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Lk(n){vs(new Ii("platform-logger",e=>new GA(e),"PRIVATE")),vs(new Ii("heartbeat",e=>new xk(e),"PRIVATE")),er(_m,hE,n),er(_m,hE,"esm2017"),er("fire-js","")}Lk("");function fg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function YT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mk=YT,XT=new Gu("auth","Firebase",YT());/**
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
 */const Yh=new Od("@firebase/auth");function Vk(n,...e){Yh.logLevel<=Be.WARN&&Yh.warn(`Auth (${Ps}): ${n}`,...e)}function Dh(n,...e){Yh.logLevel<=Be.ERROR&&Yh.error(`Auth (${Ps}): ${n}`,...e)}/**
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
 */function Tr(n,...e){throw pg(n,...e)}function Ur(n,...e){return pg(n,...e)}function JT(n,e,t){const r=Object.assign(Object.assign({},Mk()),{[e]:t});return new Gu("auth","Firebase",r).create(e,{appName:n.name})}function hs(n){return JT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return XT.create(n,...e)}function Re(n,e,...t){if(!n)throw pg(e,...t)}function _i(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dh(e),new Error(e)}function Si(n,e){n||_i(e)}/**
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
 */function Em(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Fk(){return gE()==="http:"||gE()==="https:"}function gE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fk()||dA()||"connection"in navigator)?navigator.onLine:!0}function jk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Qu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Si(t>e,"Short delay should be less than long delay!"),this.isMobile=hg()||$T()}get(){return Uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mg(n,e){Si(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ZT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$k=new Qu(3e4,6e4);function Ro(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ns(n,e,t,r,s={}){return eI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Ja(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return hA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Kr(n.emulatorConfig.host)&&(m.credentials="include"),ZT.fetch()(await tI(n,n.config.apiHost,t,d),m)})}async function eI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bk),e);try{const s=new Hk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ih(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ih(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Ih(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Ih(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw JT(n,y,m);Tr(n,y)}}catch(s){if(s instanceof Qr)throw s;Tr(n,"network-request-failed",{message:String(s)})}}async function Md(n,e,t,r,s={}){const a=await Ns(n,e,t,r,s);return"mfaPendingCredential"in a&&Tr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function tI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?mg(n.config,s):`${n.config.apiScheme}://${s}`;return zk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Wk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ur(this.auth,"network-request-failed")),$k.get())})}}function Ih(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ur(n,e,r);return s.customData._tokenResponse=t,s}function _E(n){return n!==void 0&&n.enterprise!==void 0}class qk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Wk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gk(n,e){return Ns(n,"GET","/v2/recaptchaConfig",Ro(n,e))}/**
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
 */async function Kk(n,e){return Ns(n,"POST","/v1/accounts:delete",e)}async function Xh(n,e){return Ns(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(n,e=!1){const t=Je(n),r=await t.getIdToken(e),s=gg(r);Re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:gu(Zp(s.auth_time)),issuedAtTime:gu(Zp(s.iat)),expirationTime:gu(Zp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Zp(n){return Number(n)*1e3}function gg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const s=qh(t);return s?JSON.parse(s):(Dh("Failed to decode base64 JWT payload"),null)}catch(s){return Dh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yE(n){const e=gg(n);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qr&&Yk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Yk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Pu(n,Xh(t,{idToken:r}));Re(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?nI(a.providerUserInfo):[],d=Zk(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new wm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function Jk(n){const e=Je(n);await Jh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zk(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nI(n){return n.map(e=>{var{providerId:t}=e,r=fg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function e1(n,e){const t=await eI(n,{},async()=>{const r=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await tI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Kr(n.emulatorConfig.host)&&(f.credentials="include"),ZT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function t1(n,e){return Ns(n,"POST","/v2/accounts:revokeToken",Ro(n,e))}/**
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
 */class ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=yE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await e1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new ka;return r&&(Re(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Re(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Re(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ka,this.toJSON())}_performRefresh(){return _i("not implemented")}}/**
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
 */function ts(n,e){Re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new wm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Pu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qk(this,e)}reload(){return Jk(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Jh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(hs(this.auth));const e=await this.getIdToken();return await Pu(this,Kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,L=(u=t.photoURL)!==null&&u!==void 0?u:void 0,M=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,re=(m=t.createdAt)!==null&&m!==void 0?m:void 0,$=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:X,emailVerified:q,isAnonymous:we,providerData:he,stsTokenManager:b}=t;Re(X&&b,e,"internal-error");const A=ka.fromJSON(this.name,b);Re(typeof X=="string",e,"internal-error"),ts(E,e.name),ts(T,e.name),Re(typeof q=="boolean",e,"internal-error"),Re(typeof we=="boolean",e,"internal-error"),ts(P,e.name),ts(L,e.name),ts(M,e.name),ts(V,e.name),ts(re,e.name),ts($,e.name);const R=new vr({uid:X,auth:e,email:T,emailVerified:q,displayName:E,isAnonymous:we,photoURL:L,phoneNumber:P,tenantId:M,stsTokenManager:A,createdAt:re,lastLoginAt:$});return he&&Array.isArray(he)&&(R.providerData=he.map(N=>Object.assign({},N))),V&&(R._redirectEventId=V),R}static async _fromIdTokenResponse(e,t,r=!1){const s=new ka;s.updateFromServerResponse(t);const a=new vr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Re(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?nI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new ka;d.updateFromIdToken(r);const f=new vr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const vE=new Map;function yi(n){Si(n instanceof Function,"Expected a class definition");let e=vE.get(n);return e?(Si(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vE.set(n,e),e)}/**
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
 */class rI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rI.type="NONE";const EE=rI;/**
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
 */function Oh(n,e,t){return`firebase:${n}:${e}:${t}`}class Pa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Oh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Oh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xh(this.auth,{idToken:e}).catch(()=>{});return t?vr._fromGetAccountInfoResponse(this.auth,t,e):null}return vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pa(yi(EE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||yi(EE);const u=Oh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const T=await Xh(e,{idToken:y}).catch(()=>{});if(!T)break;E=await vr._fromGetAccountInfoResponse(e,T,y)}else E=vr._fromJSON(e,y);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Pa(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Pa(a,e,r))}}/**
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
 */function wE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uI(e))return"Blackberry";if(cI(e))return"Webos";if(sI(e))return"Safari";if((e.includes("chrome/")||oI(e))&&!e.includes("edge/"))return"Chrome";if(lI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iI(n=cn()){return/firefox\//i.test(n)}function sI(n=cn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oI(n=cn()){return/crios\//i.test(n)}function aI(n=cn()){return/iemobile/i.test(n)}function lI(n=cn()){return/android/i.test(n)}function uI(n=cn()){return/blackberry/i.test(n)}function cI(n=cn()){return/webos/i.test(n)}function _g(n=cn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function n1(n=cn()){var e;return _g(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function r1(){return fA()&&document.documentMode===10}function hI(n=cn()){return _g(n)||lI(n)||cI(n)||uI(n)||/windows phone/i.test(n)||aI(n)}/**
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
 */function dI(n,e=[]){let t;switch(n){case"Browser":t=wE(cn());break;case"Worker":t=`${wE(cn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ps}/${r}`}/**
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
 */class i1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function s1(n,e={}){return Ns(n,"GET","/v2/passwordPolicy",Ro(n,e))}/**
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
 */const o1=6;class a1{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:o1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class l1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new TE(this),this.idTokenSubscription=new TE(this),this.beforeStateQueue=new i1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yi(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Pa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xh(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(hs(this));const t=e?Je(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s1(this),t=new a1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await t1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yi(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await Pa.create(this,[yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Vk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Za(n){return Je(n)}class TE{constructor(e){this.auth=e,this.observer=null,this.addObserver=CA(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u1(n){Vd=n}function fI(n){return Vd.loadJS(n)}function c1(){return Vd.recaptchaEnterpriseScript}function h1(){return Vd.gapiScript}function d1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class f1{constructor(){this.enterprise=new p1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class p1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const m1="recaptcha-enterprise",pI="NO_RECAPTCHA";class g1{constructor(e){this.type=m1,this.auth=Za(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Gk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new qk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;_E(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(pI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new f1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&_E(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=c1();f.length!==0&&(f+=d),fI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function IE(n,e,t,r=!1,s=!1){const a=new g1(n);let u;if(s)u=pI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function CE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await IE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await IE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function _1(n,e){const t=Ku(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ti(a,e??{}))return s;Tr(s,"already-initialized")}return t.initialize({options:e})}function y1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function v1(n,e,t){const r=Za(n);Re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=mI(e),{host:u,port:d}=E1(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Re(Ti(m,r.config.emulator)&&Ti(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Kr(u)?(xd(`${a}//${u}${f}`),bd("Auth",!0)):w1()}function mI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function E1(n){const e=mI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:SE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:SE(u)}}}function SE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function w1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class yg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _i("not implemented")}_getIdTokenResponse(e){return _i("not implemented")}_linkToIdToken(e,t){return _i("not implemented")}_getReauthenticationResolver(e){return _i("not implemented")}}async function T1(n,e){return Ns(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function I1(n,e){return Md(n,"POST","/v1/accounts:signInWithPassword",Ro(n,e))}/**
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
 */async function C1(n,e){return Md(n,"POST","/v1/accounts:signInWithEmailLink",Ro(n,e))}async function S1(n,e){return Md(n,"POST","/v1/accounts:signInWithEmailLink",Ro(n,e))}/**
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
 */class Nu extends yg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Nu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CE(e,t,"signInWithPassword",I1);case"emailLink":return C1(e,{email:this._email,oobCode:this._password});default:Tr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CE(e,r,"signUpPassword",T1);case"emailLink":return S1(e,{idToken:t,email:this._email,oobCode:this._password});default:Tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Na(n,e){return Md(n,"POST","/v1/accounts:signInWithIdp",Ro(n,e))}/**
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
 */const R1="http://localhost";class _o extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _o(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=fg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new _o(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Na(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Na(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Na(e,t)}buildRequest(){const e={requestUri:R1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
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
 */function A1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function k1(n){const e=lu(uu(n)).link,t=e?lu(uu(e)).deep_link_id:null,r=lu(uu(n)).deep_link_id;return(r?lu(uu(r)).link:null)||r||t||e||n}class vg{constructor(e){var t,r,s,a,u,d;const f=lu(uu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=A1((s=f.mode)!==null&&s!==void 0?s:null);Re(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=k1(e);try{return new vg(t)}catch{return null}}}/**
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
 */class el{constructor(){this.providerId=el.PROVIDER_ID}static credential(e,t){return Nu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vg.parseLink(t);return Re(r,"argument-error"),Nu._fromEmailAndCode(e,r.code,r.tenantId)}}el.PROVIDER_ID="password";el.EMAIL_PASSWORD_SIGN_IN_METHOD="password";el.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yu extends gI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rs extends Yu{constructor(){super("facebook.com")}static credential(e){return _o._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
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
 */class is extends Yu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _o._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return is.credential(t,r)}catch{return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com";is.PROVIDER_ID="google.com";/**
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
 */class ss extends Yu{constructor(){super("github.com")}static credential(e){return _o._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
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
 */class os extends Yu{constructor(){super("twitter.com")}static credential(e,t){return _o._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return os.credential(t,r)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
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
 */class Va{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await vr._fromIdTokenResponse(e,r,s),u=RE(r);return new Va({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=RE(r);return new Va({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function RE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Zh extends Qr{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Zh(e,t,r,s)}}function _I(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Zh._fromErrorAndOperation(n,a,e,r):a})}async function P1(n,e,t=!1){const r=await Pu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Va._forOperation(n,"link",r)}/**
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
 */async function N1(n,e,t=!1){const{auth:r}=n;if(Vn(r.app))return Promise.reject(hs(r));const s="reauthenticate";try{const a=await Pu(n,_I(r,s,e,n),t);Re(a.idToken,r,"internal-error");const u=gg(a.idToken);Re(u,r,"internal-error");const{sub:d}=u;return Re(n.uid===d,r,"user-mismatch"),Va._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Tr(r,"user-mismatch"),a}}/**
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
 */async function yI(n,e,t=!1){if(Vn(n.app))return Promise.reject(hs(n));const r="signIn",s=await _I(n,r,e),a=await Va._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function x1(n,e){return yI(Za(n),e)}/**
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
 */async function b1(n){const e=Za(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function D1(n,e,t){return Vn(n.app)?Promise.reject(hs(n)):x1(Je(n),el.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&b1(n),r})}/**
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
 */function O1(n,e){return Je(n).setPersistence(e)}function L1(n,e,t,r){return Je(n).onIdTokenChanged(e,t,r)}function M1(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}function V1(n,e,t,r){return Je(n).onAuthStateChanged(e,t,r)}function F1(n){return Je(n).signOut()}const ed="__sak";/**
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
 */class vI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ed,"1"),this.storage.removeItem(ed),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const U1=1e3,j1=10;class EI extends vI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);r1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,j1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},U1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}EI.type="LOCAL";const wI=EI;/**
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
 */class TI extends vI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}TI.type="SESSION";const II=TI;/**
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
 */function B1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await B1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fd.receivers=[];/**
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
 */class z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Eg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function jr(){return window}function $1(n){jr().location.href=n}/**
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
 */function CI(){return typeof jr().WorkerGlobalScope<"u"&&typeof jr().importScripts=="function"}async function W1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function q1(){return CI()?self:null}/**
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
 */const SI="firebaseLocalStorageDb",G1=1,td="firebaseLocalStorage",RI="fbase_key";class Xu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ud(n,e){return n.transaction([td],e?"readwrite":"readonly").objectStore(td)}function K1(){const n=indexedDB.deleteDatabase(SI);return new Xu(n).toPromise()}function Tm(){const n=indexedDB.open(SI,G1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(td,{keyPath:RI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(td)?e(r):(r.close(),await K1(),e(await Tm()))})})}async function AE(n,e,t){const r=Ud(n,!0).put({[RI]:e,value:t});return new Xu(r).toPromise()}async function Q1(n,e){const t=Ud(n,!1).get(e),r=await new Xu(t).toPromise();return r===void 0?null:r.value}function kE(n,e){const t=Ud(n,!0).delete(e);return new Xu(t).toPromise()}const Y1=800,X1=3;class AI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>X1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fd._getInstance(q1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await W1(),!this.activeServiceWorker)return;this.sender=new z1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tm();return await AE(e,ed,"1"),await kE(e,ed),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>AE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Q1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Ud(s,!1).getAll();return new Xu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AI.type="LOCAL";const J1=AI;new Qu(3e4,6e4);/**
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
 */function Z1(n,e){return e?yi(e):(Re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Na(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Na(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Na(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eP(n){return yI(n.auth,new wg(n),n.bypassAuthState)}function tP(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),N1(t,new wg(n),n.bypassAuthState)}async function nP(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),P1(t,new wg(n),n.bypassAuthState)}/**
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
 */class kI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:Tr(this.auth,"internal-error")}}resolve(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rP=new Qu(2e3,1e4);class Ra extends kI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Ra.currentPopupAction&&Ra.currentPopupAction.cancel(),Ra.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ra.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}Ra.currentPopupAction=null;/**
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
 */const iP="pendingRedirect",Lh=new Map;class sP extends kI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Lh.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Lh.set(this.auth._key(),e)}return this.bypassAuthState||Lh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(n,e){const t=uP(e),r=lP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function aP(n,e){Lh.set(n._key(),e)}function lP(n){return yi(n._redirectPersistence)}function uP(n){return Oh(iP,n.config.apiKey,n.name)}async function cP(n,e,t=!1){if(Vn(n.app))return Promise.reject(hs(n));const r=Za(n),s=Z1(r,e),u=await new sP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const hP=600*1e3;class dP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!PI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ur(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hP&&this.cachedEventUids.clear(),this.cachedEventUids.has(PE(e))}saveEventToCache(e){this.cachedEventUids.add(PE(e)),this.lastProcessedEventTime=Date.now()}}function PE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function PI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PI(n);default:return!1}}/**
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
 */async function pP(n,e={}){return Ns(n,"GET","/v1/projects",e)}/**
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
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gP=/^https?/;async function _P(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pP(n);for(const t of e)try{if(yP(t))return}catch{}Tr(n,"unauthorized-domain")}function yP(n){const e=Em(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!gP.test(t))return!1;if(mP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vP=new Qu(3e4,6e4);function NE(){const n=jr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function EP(n){return new Promise((e,t)=>{var r,s,a;function u(){NE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NE(),t(Ur(n,"network-request-failed"))},timeout:vP.get()})}if(!((s=(r=jr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=jr().gapi)===null||a===void 0)&&a.load)u();else{const d=d1("iframefcb");return jr()[d]=()=>{gapi.load?u():t(Ur(n,"network-request-failed"))},fI(`${h1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Mh=null,e})}let Mh=null;function wP(n){return Mh=Mh||EP(n),Mh}/**
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
 */const TP=new Qu(5e3,15e3),IP="__/auth/iframe",CP="emulator/auth/iframe",SP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AP(n){const e=n.config;Re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mg(e,CP):`https://${n.config.authDomain}/${IP}`,r={apiKey:e.apiKey,appName:n.name,v:Ps},s=RP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ja(r).slice(1)}`}async function kP(n){const e=await wP(n),t=jr().gapi;return Re(t,n,"internal-error"),e.open({where:document.body,url:AP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ur(n,"network-request-failed"),d=jr().setTimeout(()=>{a(u)},TP.get());function f(){jr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const PP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,xP=600,bP="_blank",DP="http://localhost";class xE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OP(n,e,t,r=NP,s=xP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},PP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=cn().toLowerCase();t&&(d=oI(m)?bP:t),iI(m)&&(e=e||DP,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[P,L])=>`${T}${P}=${L},`,"");if(n1(m)&&d!=="_self")return LP(e||"",d),new xE(null);const E=window.open(e||"",d,y);Re(E,n,"popup-blocked");try{E.focus()}catch{}return new xE(E)}function LP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const MP="__/auth/handler",VP="emulator/auth/handler",FP=encodeURIComponent("fac");async function bE(n,e,t,r,s,a){Re(n.config.authDomain,n,"auth-domain-config-required"),Re(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ps,eventId:s};if(e instanceof gI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Gh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Yu){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${FP}=${encodeURIComponent(f)}`:"";return`${UP(n)}?${Ja(d).slice(1)}${m}`}function UP({config:n}){return n.emulator?mg(n,VP):`https://${n.authDomain}/${MP}`}/**
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
 */const em="webStorageSupport";class jP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=II,this._completeRedirectFn=cP,this._overrideRedirectResult=aP}async _openPopup(e,t,r,s){var a;Si((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await bE(e,t,r,Em(),s);return OP(e,u,Eg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await bE(e,t,r,Em(),s);return $1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Si(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kP(e),r=new dP(e);return t.register("authEvent",s=>(Re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(em,{type:em},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[em];u!==void 0&&t(!!u),Tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_P(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hI()||sI()||_g()}}const BP=jP;var DE="@firebase/auth",OE="1.10.8";/**
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
 */class zP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $P(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WP(n){vs(new Ii("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Re(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dI(n)},m=new l1(r,s,a,f);return y1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vs(new Ii("auth-internal",e=>{const t=Za(e.getProvider("auth").getImmediate());return(r=>new zP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(DE,OE,$P(n)),er(DE,OE,"esm2017")}/**
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
 */const HP=300,qP=zT("authIdTokenMaxAge")||HP;let LE=null;const GP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qP)return;const s=t==null?void 0:t.token;LE!==s&&(LE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KP(n=Ld()){const e=Ku(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_1(n,{popupRedirectResolver:BP,persistence:[J1,wI,II]}),r=zT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=GP(a.toString());M1(t,u,()=>u(t.currentUser)),L1(t,d=>u(d))}}const s=jT("auth");return s&&v1(t,`http://${s}`),t}function QP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}u1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Ur("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",QP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WP("Browser");var ME=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,NI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function R(){}R.prototype=A.prototype,b.D=A.prototype,b.prototype=new R,b.prototype.constructor=b,b.C=function(N,D,F){for(var S=Array(arguments.length-2),me=2;me<arguments.length;me++)S[me-2]=arguments[me];return A.prototype[D].apply(N,S)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,A,R){R||(R=0);var N=Array(16);if(typeof A=="string")for(var D=0;16>D;++D)N[D]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(D=0;16>D;++D)N[D]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=b.g[0],R=b.g[1],D=b.g[2];var F=b.g[3],S=A+(F^R&(D^F))+N[0]+3614090360&4294967295;A=R+(S<<7&4294967295|S>>>25),S=F+(D^A&(R^D))+N[1]+3905402710&4294967295,F=A+(S<<12&4294967295|S>>>20),S=D+(R^F&(A^R))+N[2]+606105819&4294967295,D=F+(S<<17&4294967295|S>>>15),S=R+(A^D&(F^A))+N[3]+3250441966&4294967295,R=D+(S<<22&4294967295|S>>>10),S=A+(F^R&(D^F))+N[4]+4118548399&4294967295,A=R+(S<<7&4294967295|S>>>25),S=F+(D^A&(R^D))+N[5]+1200080426&4294967295,F=A+(S<<12&4294967295|S>>>20),S=D+(R^F&(A^R))+N[6]+2821735955&4294967295,D=F+(S<<17&4294967295|S>>>15),S=R+(A^D&(F^A))+N[7]+4249261313&4294967295,R=D+(S<<22&4294967295|S>>>10),S=A+(F^R&(D^F))+N[8]+1770035416&4294967295,A=R+(S<<7&4294967295|S>>>25),S=F+(D^A&(R^D))+N[9]+2336552879&4294967295,F=A+(S<<12&4294967295|S>>>20),S=D+(R^F&(A^R))+N[10]+4294925233&4294967295,D=F+(S<<17&4294967295|S>>>15),S=R+(A^D&(F^A))+N[11]+2304563134&4294967295,R=D+(S<<22&4294967295|S>>>10),S=A+(F^R&(D^F))+N[12]+1804603682&4294967295,A=R+(S<<7&4294967295|S>>>25),S=F+(D^A&(R^D))+N[13]+4254626195&4294967295,F=A+(S<<12&4294967295|S>>>20),S=D+(R^F&(A^R))+N[14]+2792965006&4294967295,D=F+(S<<17&4294967295|S>>>15),S=R+(A^D&(F^A))+N[15]+1236535329&4294967295,R=D+(S<<22&4294967295|S>>>10),S=A+(D^F&(R^D))+N[1]+4129170786&4294967295,A=R+(S<<5&4294967295|S>>>27),S=F+(R^D&(A^R))+N[6]+3225465664&4294967295,F=A+(S<<9&4294967295|S>>>23),S=D+(A^R&(F^A))+N[11]+643717713&4294967295,D=F+(S<<14&4294967295|S>>>18),S=R+(F^A&(D^F))+N[0]+3921069994&4294967295,R=D+(S<<20&4294967295|S>>>12),S=A+(D^F&(R^D))+N[5]+3593408605&4294967295,A=R+(S<<5&4294967295|S>>>27),S=F+(R^D&(A^R))+N[10]+38016083&4294967295,F=A+(S<<9&4294967295|S>>>23),S=D+(A^R&(F^A))+N[15]+3634488961&4294967295,D=F+(S<<14&4294967295|S>>>18),S=R+(F^A&(D^F))+N[4]+3889429448&4294967295,R=D+(S<<20&4294967295|S>>>12),S=A+(D^F&(R^D))+N[9]+568446438&4294967295,A=R+(S<<5&4294967295|S>>>27),S=F+(R^D&(A^R))+N[14]+3275163606&4294967295,F=A+(S<<9&4294967295|S>>>23),S=D+(A^R&(F^A))+N[3]+4107603335&4294967295,D=F+(S<<14&4294967295|S>>>18),S=R+(F^A&(D^F))+N[8]+1163531501&4294967295,R=D+(S<<20&4294967295|S>>>12),S=A+(D^F&(R^D))+N[13]+2850285829&4294967295,A=R+(S<<5&4294967295|S>>>27),S=F+(R^D&(A^R))+N[2]+4243563512&4294967295,F=A+(S<<9&4294967295|S>>>23),S=D+(A^R&(F^A))+N[7]+1735328473&4294967295,D=F+(S<<14&4294967295|S>>>18),S=R+(F^A&(D^F))+N[12]+2368359562&4294967295,R=D+(S<<20&4294967295|S>>>12),S=A+(R^D^F)+N[5]+4294588738&4294967295,A=R+(S<<4&4294967295|S>>>28),S=F+(A^R^D)+N[8]+2272392833&4294967295,F=A+(S<<11&4294967295|S>>>21),S=D+(F^A^R)+N[11]+1839030562&4294967295,D=F+(S<<16&4294967295|S>>>16),S=R+(D^F^A)+N[14]+4259657740&4294967295,R=D+(S<<23&4294967295|S>>>9),S=A+(R^D^F)+N[1]+2763975236&4294967295,A=R+(S<<4&4294967295|S>>>28),S=F+(A^R^D)+N[4]+1272893353&4294967295,F=A+(S<<11&4294967295|S>>>21),S=D+(F^A^R)+N[7]+4139469664&4294967295,D=F+(S<<16&4294967295|S>>>16),S=R+(D^F^A)+N[10]+3200236656&4294967295,R=D+(S<<23&4294967295|S>>>9),S=A+(R^D^F)+N[13]+681279174&4294967295,A=R+(S<<4&4294967295|S>>>28),S=F+(A^R^D)+N[0]+3936430074&4294967295,F=A+(S<<11&4294967295|S>>>21),S=D+(F^A^R)+N[3]+3572445317&4294967295,D=F+(S<<16&4294967295|S>>>16),S=R+(D^F^A)+N[6]+76029189&4294967295,R=D+(S<<23&4294967295|S>>>9),S=A+(R^D^F)+N[9]+3654602809&4294967295,A=R+(S<<4&4294967295|S>>>28),S=F+(A^R^D)+N[12]+3873151461&4294967295,F=A+(S<<11&4294967295|S>>>21),S=D+(F^A^R)+N[15]+530742520&4294967295,D=F+(S<<16&4294967295|S>>>16),S=R+(D^F^A)+N[2]+3299628645&4294967295,R=D+(S<<23&4294967295|S>>>9),S=A+(D^(R|~F))+N[0]+4096336452&4294967295,A=R+(S<<6&4294967295|S>>>26),S=F+(R^(A|~D))+N[7]+1126891415&4294967295,F=A+(S<<10&4294967295|S>>>22),S=D+(A^(F|~R))+N[14]+2878612391&4294967295,D=F+(S<<15&4294967295|S>>>17),S=R+(F^(D|~A))+N[5]+4237533241&4294967295,R=D+(S<<21&4294967295|S>>>11),S=A+(D^(R|~F))+N[12]+1700485571&4294967295,A=R+(S<<6&4294967295|S>>>26),S=F+(R^(A|~D))+N[3]+2399980690&4294967295,F=A+(S<<10&4294967295|S>>>22),S=D+(A^(F|~R))+N[10]+4293915773&4294967295,D=F+(S<<15&4294967295|S>>>17),S=R+(F^(D|~A))+N[1]+2240044497&4294967295,R=D+(S<<21&4294967295|S>>>11),S=A+(D^(R|~F))+N[8]+1873313359&4294967295,A=R+(S<<6&4294967295|S>>>26),S=F+(R^(A|~D))+N[15]+4264355552&4294967295,F=A+(S<<10&4294967295|S>>>22),S=D+(A^(F|~R))+N[6]+2734768916&4294967295,D=F+(S<<15&4294967295|S>>>17),S=R+(F^(D|~A))+N[13]+1309151649&4294967295,R=D+(S<<21&4294967295|S>>>11),S=A+(D^(R|~F))+N[4]+4149444226&4294967295,A=R+(S<<6&4294967295|S>>>26),S=F+(R^(A|~D))+N[11]+3174756917&4294967295,F=A+(S<<10&4294967295|S>>>22),S=D+(A^(F|~R))+N[2]+718787259&4294967295,D=F+(S<<15&4294967295|S>>>17),S=R+(F^(D|~A))+N[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,b.g[2]=b.g[2]+D&4294967295,b.g[3]=b.g[3]+F&4294967295}r.prototype.u=function(b,A){A===void 0&&(A=b.length);for(var R=A-this.blockSize,N=this.B,D=this.h,F=0;F<A;){if(D==0)for(;F<=R;)s(this,b,F),F+=this.blockSize;if(typeof b=="string"){for(;F<A;)if(N[D++]=b.charCodeAt(F++),D==this.blockSize){s(this,N),D=0;break}}else for(;F<A;)if(N[D++]=b[F++],D==this.blockSize){s(this,N),D=0;break}}this.h=D,this.o+=A},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;var R=8*this.o;for(A=b.length-8;A<b.length;++A)b[A]=R&255,R/=256;for(this.u(b),b=Array(16),A=R=0;4>A;++A)for(var N=0;32>N;N+=8)b[R++]=this.g[A]>>>N&255;return b};function a(b,A){var R=d;return Object.prototype.hasOwnProperty.call(R,b)?R[b]:R[b]=A(b)}function u(b,A){this.h=A;for(var R=[],N=!0,D=b.length-1;0<=D;D--){var F=b[D]|0;N&&F==A||(R[D]=F,N=!1)}this.g=R}var d={};function f(b){return-128<=b&&128>b?a(b,function(A){return new u([A|0],0>A?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return V(m(-b));for(var A=[],R=1,N=0;b>=R;N++)A[N]=b/R|0,R*=4294967296;return new u(A,0)}function y(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return V(y(b.substring(1),A));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=m(Math.pow(A,8)),N=E,D=0;D<b.length;D+=8){var F=Math.min(8,b.length-D),S=parseInt(b.substring(D,D+F),A);8>F?(F=m(Math.pow(A,F)),N=N.j(F).add(m(S))):(N=N.j(R),N=N.add(m(S)))}return N}var E=f(0),T=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(M(this))return-V(this).m();for(var b=0,A=1,R=0;R<this.g.length;R++){var N=this.i(R);b+=(0<=N?N:4294967296+N)*A,A*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(L(this))return"0";if(M(this))return"-"+V(this).toString(b);for(var A=m(Math.pow(b,6)),R=this,N="";;){var D=q(R,A).g;R=re(R,D.j(A));var F=((0<R.g.length?R.g[0]:R.h)>>>0).toString(b);if(R=D,L(R))return F+N;for(;6>F.length;)F="0"+F;N=F+N}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function L(b){if(b.h!=0)return!1;for(var A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function M(b){return b.h==-1}n.l=function(b){return b=re(this,b),M(b)?-1:L(b)?0:1};function V(b){for(var A=b.g.length,R=[],N=0;N<A;N++)R[N]=~b.g[N];return new u(R,~b.h).add(T)}n.abs=function(){return M(this)?V(this):this},n.add=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],N=0,D=0;D<=A;D++){var F=N+(this.i(D)&65535)+(b.i(D)&65535),S=(F>>>16)+(this.i(D)>>>16)+(b.i(D)>>>16);N=S>>>16,F&=65535,S&=65535,R[D]=S<<16|F}return new u(R,R[R.length-1]&-2147483648?-1:0)};function re(b,A){return b.add(V(A))}n.j=function(b){if(L(this)||L(b))return E;if(M(this))return M(b)?V(this).j(V(b)):V(V(this).j(b));if(M(b))return V(this.j(V(b)));if(0>this.l(P)&&0>b.l(P))return m(this.m()*b.m());for(var A=this.g.length+b.g.length,R=[],N=0;N<2*A;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<b.g.length;D++){var F=this.i(N)>>>16,S=this.i(N)&65535,me=b.i(D)>>>16,Ce=b.i(D)&65535;R[2*N+2*D]+=S*Ce,$(R,2*N+2*D),R[2*N+2*D+1]+=F*Ce,$(R,2*N+2*D+1),R[2*N+2*D+1]+=S*me,$(R,2*N+2*D+1),R[2*N+2*D+2]+=F*me,$(R,2*N+2*D+2)}for(N=0;N<A;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=A;N<2*A;N++)R[N]=0;return new u(R,0)};function $(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function X(b,A){this.g=b,this.h=A}function q(b,A){if(L(A))throw Error("division by zero");if(L(b))return new X(E,E);if(M(b))return A=q(V(b),A),new X(V(A.g),V(A.h));if(M(A))return A=q(b,V(A)),new X(V(A.g),A.h);if(30<b.g.length){if(M(b)||M(A))throw Error("slowDivide_ only works with positive integers.");for(var R=T,N=A;0>=N.l(b);)R=we(R),N=we(N);var D=he(R,1),F=he(N,1);for(N=he(N,2),R=he(R,2);!L(N);){var S=F.add(N);0>=S.l(b)&&(D=D.add(R),F=S),N=he(N,1),R=he(R,1)}return A=re(b,D.j(A)),new X(D,A)}for(D=E;0<=b.l(A);){for(R=Math.max(1,Math.floor(b.m()/A.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),F=m(R),S=F.j(A);M(S)||0<S.l(b);)R-=N,F=m(R),S=F.j(A);L(F)&&(F=T),D=D.add(F),b=re(b,S)}return new X(D,b)}n.A=function(b){return q(this,b).h},n.and=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)&b.i(N);return new u(R,this.h&b.h)},n.or=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)|b.i(N);return new u(R,this.h|b.h)},n.xor=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)^b.i(N);return new u(R,this.h^b.h)};function we(b){for(var A=b.g.length+1,R=[],N=0;N<A;N++)R[N]=b.i(N)<<1|b.i(N-1)>>>31;return new u(R,b.h)}function he(b,A){var R=A>>5;A%=32;for(var N=b.g.length-R,D=[],F=0;F<N;F++)D[F]=0<A?b.i(F+R)>>>A|b.i(F+R+1)<<32-A:b.i(F+R);return new u(D,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,ds=u}).apply(typeof ME<"u"?ME:typeof self<"u"?self:typeof window<"u"?window:{});var Ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xI,cu,bI,Vh,Im,DI,OI,LI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ch=="object"&&Ch];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var C=0;C<c.length-1;C++){var j=c[C];if(!(j in v))break e;v=v[j]}c=c[c.length-1],C=v[c],g=g(C),g!=C&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,C=!1,j={next:function(){if(!C&&v<c.length){var H=v++;return{value:g(H,c[H]),done:!1}}return C=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,C),c.apply(g,j)}}return function(){return c.apply(g,arguments)}}function T(c,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,T.apply(null,arguments)}function P(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),c.apply(this,C)}}function L(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(C,j,H){for(var oe=Array(arguments.length-2),et=2;et<arguments.length;et++)oe[et-2]=arguments[et];return g.prototype[j].apply(C,oe)}}function M(c){const g=c.length;if(0<g){const v=Array(g);for(let C=0;C<g;C++)v[C]=c[C];return v}return[]}function V(c,g){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(f(C)){const j=c.length||0,H=C.length||0;c.length=j+H;for(let oe=0;oe<H;oe++)c[j+oe]=C[oe]}else c.push(C)}}class re{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function $(c){return/^[\s\xa0]*$/.test(c)}function X(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function q(c){return q[" "](c),c}q[" "]=function(){};var we=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function he(c,g,v){for(const C in c)g.call(v,c[C],C,c)}function b(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function A(c){const g={};for(const v in c)g[v]=c[v];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let v,C;for(let j=1;j<arguments.length;j++){C=arguments[j];for(v in C)c[v]=C[v];for(let H=0;H<R.length;H++)v=R[H],Object.prototype.hasOwnProperty.call(C,v)&&(c[v]=C[v])}}function D(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function F(c){d.setTimeout(()=>{throw c},0)}function S(){var c=_e;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class me{constructor(){this.h=this.g=null}add(g,v){const C=Ce.get();C.set(g,v),this.h?this.h.next=C:this.g=C,this.h=C}}var Ce=new re(()=>new De,c=>c.reset());class De{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,ne=!1,_e=new me,le=()=>{const c=d.Promise.resolve(void 0);Se=()=>{c.then(U)}};var U=()=>{for(var c;c=S();){try{c.h.call(c.g)}catch(v){F(v)}var g=Ce;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ne=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var ke=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function Oe(c,g){if(ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,C=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(we){e:{try{q(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:je[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Oe.aa.h.call(this)}}L(Oe,ye);var je={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),Ge=0;function Ze(c,g,v,C,j){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!C,this.ha=j,this.key=++Ge,this.da=this.fa=!1}function It(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function tr(c){this.src=c,this.g={},this.h=0}tr.prototype.add=function(c,g,v,C,j){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var oe=Cr(c,g,C,j);return-1<oe?(g=c[oe],v||(g.fa=!1)):(g=new Ze(g,this.src,H,!!C,j),g.fa=v,c.push(g)),g};function Xr(c,g){var v=g.type;if(v in c.g){var C=c.g[v],j=Array.prototype.indexOf.call(C,g,void 0),H;(H=0<=j)&&Array.prototype.splice.call(C,j,1),H&&(It(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Cr(c,g,v,C){for(var j=0;j<c.length;++j){var H=c[j];if(!H.da&&H.listener==g&&H.capture==!!v&&H.ha==C)return j}return-1}var Ft="closure_lm_"+(1e6*Math.random()|0),Y={};function Ee(c,g,v,C,j){if(Array.isArray(g)){for(var H=0;H<g.length;H++)Ee(c,g[H],v,C,j);return null}return v=cl(v),c&&c[qe]?c.K(g,v,m(C)?!!C.capture:!1,j):Ut(c,g,v,!1,C,j)}function Ut(c,g,v,C,j,H){if(!g)throw Error("Invalid event type");var oe=m(j)?!!j.capture:!!j,et=xo(c);if(et||(c[Ft]=et=new tr(c)),v=et.add(g,v,C,oe,H),v.proxy)return v;if(C=jn(),v.proxy=C,C.src=c,C.listener=v,c.addEventListener)ke||(j=oe),j===void 0&&(j=!1),c.addEventListener(g.toString(),C,j);else if(c.attachEvent)c.attachEvent(tn(g.toString()),C);else if(c.addListener&&c.removeListener)c.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function jn(){function c(v){return g.call(c.src,c.listener,v)}const g=Zr;return c}function Jr(c,g,v,C,j){if(Array.isArray(g))for(var H=0;H<g.length;H++)Jr(c,g[H],v,C,j);else C=m(C)?!!C.capture:!!C,v=cl(v),c&&c[qe]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],v=Cr(H,v,C,j),-1<v&&(It(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=xo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Cr(g,v,C,j)),(v=-1<c?g[c]:null)&&nr(v))}function nr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[qe])Xr(g.i,c);else{var v=c.type,C=c.proxy;g.removeEventListener?g.removeEventListener(v,C,c.capture):g.detachEvent?g.detachEvent(tn(v),C):g.addListener&&g.removeListener&&g.removeListener(C),(v=xo(g))?(Xr(v,c),v.h==0&&(v.src=null,g[Ft]=null)):It(c)}}}function tn(c){return c in Y?Y[c]:Y[c]="on"+c}function Zr(c,g){if(c.da)c=!0;else{g=new Oe(g,this);var v=c.listener,C=c.ha||c.src;c.fa&&nr(c),c=v.call(C,g)}return c}function xo(c){return c=c[Ft],c instanceof tr?c:null}var bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(c){return typeof c=="function"?c:(c[bo]||(c[bo]=function(g){return c.handleEvent(g)}),c[bo])}function bt(){K.call(this),this.i=new tr(this),this.M=this,this.F=null}L(bt,K),bt.prototype[qe]=!0,bt.prototype.removeEventListener=function(c,g,v,C){Jr(this,c,g,v,C)};function Dt(c,g){var v,C=c.F;if(C)for(v=[];C;C=C.F)v.push(C);if(c=c.M,C=g.type||g,typeof g=="string")g=new ye(g,c);else if(g instanceof ye)g.target=g.target||c;else{var j=g;g=new ye(C,c),N(g,j)}if(j=!0,v)for(var H=v.length-1;0<=H;H--){var oe=g.g=v[H];j=ei(oe,C,!0,g)&&j}if(oe=g.g=c,j=ei(oe,C,!0,g)&&j,j=ei(oe,C,!1,g)&&j,v)for(H=0;H<v.length;H++)oe=g.g=v[H],j=ei(oe,C,!1,g)&&j}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],C=0;C<v.length;C++)It(v[C]);delete c.g[g],c.h--}}this.F=null},bt.prototype.K=function(c,g,v,C){return this.i.add(String(c),g,!1,v,C)},bt.prototype.L=function(c,g,v,C){return this.i.add(String(c),g,!0,v,C)};function ei(c,g,v,C){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,H=0;H<g.length;++H){var oe=g[H];if(oe&&!oe.da&&oe.capture==v){var et=oe.listener,Ot=oe.ha||oe.src;oe.fa&&Xr(c.i,oe),j=et.call(Ot,C)!==!1&&j}}return j&&!C.defaultPrevented}function hl(c,g,v){if(typeof c=="function")v&&(c=T(c,v));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function xi(c){c.g=hl(()=>{c.g=null,c.i&&(c.i=!1,xi(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Os extends K{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:xi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(c){K.call(this),this.h=c,this.g={}}L(Ls,K);var dl=[];function fl(c){he(c.g,function(g,v){this.g.hasOwnProperty(v)&&nr(g)},c),c.g={}}Ls.prototype.N=function(){Ls.aa.N.call(this),fl(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pl=d.JSON.stringify,ml=d.JSON.parse,gl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Ms(){}Ms.prototype.h=null;function Do(c){return c.h||(c.h=c.i())}function Oo(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){ye.call(this,"d")}L(Sr,ye);function Lo(){ye.call(this,"c")}L(Lo,ye);var Rr={},_l=null;function Vs(){return _l=_l||new bt}Rr.La="serverreachability";function yl(c){ye.call(this,Rr.La,c)}L(yl,ye);function ti(c){const g=Vs();Dt(g,new yl(g))}Rr.STAT_EVENT="statevent";function vl(c,g){ye.call(this,Rr.STAT_EVENT,c),this.stat=g}L(vl,ye);function vt(c){const g=Vs();Dt(g,new vl(g,c))}Rr.Ma="timingevent";function Mo(c,g){ye.call(this,Rr.Ma,c),this.size=g}L(Mo,ye);function rr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function Us(c,g,v,C,j,H){c.info(function(){if(c.g)if(H)for(var oe="",et=H.split("&"),Ot=0;Ot<et.length;Ot++){var We=et[Ot].split("=");if(1<We.length){var jt=We[0];We=We[1];var Ct=jt.split("_");oe=2<=Ct.length&&Ct[1]=="type"?oe+(jt+"="+We+"&"):oe+(jt+"=redacted&")}}else oe=null;else oe=H;return"XMLHTTP REQ ("+C+") [attempt "+j+"]: "+g+`
`+v+`
`+oe})}function Vo(c,g,v,C,j,H,oe){c.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+j+"]: "+g+`
`+v+`
`+H+" "+oe})}function ir(c,g,v,C){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+_f(c,v)+(C?" "+C:"")})}function El(c,g){c.info(function(){return"TIMEOUT: "+g})}Fs.prototype.info=function(){};function _f(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var C=v[c];if(!(2>C.length)){var j=C[1];if(Array.isArray(j)&&!(1>j.length)){var H=j[0];if(H!="noop"&&H!="stop"&&H!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return pl(v)}catch{return g}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},lc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sr;function js(){}L(js,Ms),js.prototype.g=function(){return new XMLHttpRequest},js.prototype.i=function(){return{}},sr=new js;function or(c,g,v,C){this.j=c,this.i=g,this.l=v,this.R=C||1,this.U=new Ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var wl={},Uo={};function jo(c,g,v){c.L=1,c.v=Mi(xn(g)),c.m=v,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),it(c),c.A=xn(c.v);var v=c.A,C=c.R;Array.isArray(C)||(C=[String(C)]),Fi(v.i,"t",C),c.C=0,v=c.j.J,c.h=new uc,c.g=Ac(c.j,v?g:null,!c.m),0<c.O&&(c.M=new Os(T(c.Y,c,c.g),c.O)),g=c.U,v=c.g,C=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(dl[0]=j.toString()),j=dl);for(var H=0;H<j.length;H++){var oe=Ee(v,j[H],C||g.handleEvent,!1,g.h||g);if(!oe)break;g.g[oe.key]=oe}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ti(),Us(c.i,c.u,c.A,c.l,c.R,c.m)}or.prototype.ca=function(c){c=c.target;const g=this.M;g&&yn(c)==3?g.j():this.Y(c)},or.prototype.Y=function(c){try{if(c==this.g)e:{const Ct=yn(this.g);var g=this.g.Ba();const Wn=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||Ct!=4||g==7||(g==8||0>=Wn?ti(3):ti(2)),Bs(this);var v=this.g.Z();this.X=v;t:if(cc(this)){var C=kl(this.g);c="";var j=C.length,H=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),bi(this);var oe="";break t}this.h.i=new d.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,c+=this.h.i.decode(C[g],{stream:!(H&&g==j-1)});C.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,Vo(this.i,this.u,this.A,this.l,this.R,Ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var et,Ot=this.g;if((et=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(et)){var We=et;break t}}We=null}if(v=We)ir(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,v);else{this.o=!1,this.s=3,vt(12),zn(this),bi(this);break e}}if(this.P){v=!0;let Dn;for(;!this.J&&this.C<oe.length;)if(Dn=yf(this,oe),Dn==Uo){Ct==4&&(this.s=4,vt(14),v=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Dn==wl){this.s=4,vt(15),ir(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else ir(this.i,this.l,Dn,null),Il(this,Dn);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||oe.length!=0||this.h.h||(this.s=1,vt(16),v=!1),this.o=this.o&&v,!v)ir(this.i,this.l,oe,"[Invalid Chunked Response]"),zn(this),bi(this);else if(0<oe.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Nl(jt),jt.M=!0,vt(11))}}else ir(this.i,this.l,oe,null),Il(this,oe);Ct==4&&zn(this),this.o&&!this.J&&(Ct==4?Xo(this.j,this):(this.o=!1,it(this)))}else qo(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),zn(this),bi(this)}}}catch{}finally{}};function cc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function yf(c,g){var v=c.C,C=g.indexOf(`
`,v);return C==-1?Uo:(v=Number(g.substring(v,C)),isNaN(v)?wl:(C+=1,C+v>g.length?Uo:(g=g.slice(C,C+v),c.C=C+v,g)))}or.prototype.cancel=function(){this.J=!0,zn(this)};function it(c){c.S=Date.now()+c.I,hc(c,c.I)}function hc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=rr(T(c.ba,c),g)}function Bs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}or.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(El(this.i,this.A),this.L!=2&&(ti(),vt(17)),zn(this),this.s=2,bi(this)):hc(this,this.S-c)};function bi(c){c.j.G==0||c.J||Xo(c.j,c)}function zn(c){Bs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,fl(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Il(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||dn(v.h,c))){if(!c.K&&dn(v.h,c)&&v.G==3){try{var C=v.Da.g.parse(g)}catch{C=null}if(Array.isArray(C)&&C.length==3){var j=C;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Yo(v),hr(v);else break e;Qo(v),vt(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=rr(T(v.Za,v),6e3));if(1>=fc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else oi(v,11)}else if((c.K||v.g==c)&&Yo(v),!$(g))for(j=v.Da.g.parse(g),g=0;g<j.length;g++){let We=j[g];if(v.T=We[0],We=We[1],v.G==2)if(We[0]=="c"){v.K=We[1],v.ia=We[2];const jt=We[3];jt!=null&&(v.la=jt,v.j.info("VER="+v.la));const Ct=We[4];Ct!=null&&(v.Aa=Ct,v.j.info("SVER="+v.Aa));const Wn=We[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(C=1.5*Wn,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const Dn=c.g;if(Dn){const Ks=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var H=C.h;H.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Cl(H,H.h),H.h=null))}if(C.D){const Zo=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(C.ya=Zo,nt(C.I,C.D,Zo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var oe=c;if(C.qa=Rc(C,C.J?C.ia:null,C.W),oe.K){pc(C.h,oe);var et=oe,Ot=C.L;Ot&&(et.I=Ot),et.B&&(Bs(et),it(et)),C.g=oe}else Gs(C);0<v.i.length&&Nr(v)}else We[0]!="stop"&&We[0]!="close"||oi(v,7);else v.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?oi(v,7):Qt(v):We[0]!="noop"&&v.l&&v.l.ta(We),v.v=0)}}ti(4)}catch{}}var dc=class{constructor(c,g){this.g=c,this.map=g}};function zs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function fc(c){return c.h?1:c.g?c.g.size:0}function dn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Cl(c,g){c.g?c.g.add(g):c.h=g}function pc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}zs.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function mc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return M(c.i)}function Bo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,C=0;C<v;C++)g.push(c[C]);return g}g=[],v=0;for(C in c)g[v++]=c[C];return g}function zo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const C in c)g[v++]=C;return g}}}function Di(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=zo(c),C=Bo(c),j=C.length,H=0;H<j;H++)g.call(void 0,C[H],v&&v[H],c)}var $s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var C=c[v].indexOf("="),j=null;if(0<=C){var H=c[v].substring(0,C);j=c[v].substring(C+1)}else H=c[v];g(H,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ni(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ni){this.h=c.h,Ws(this,c.j),this.o=c.o,this.g=c.g,Oi(this,c.s),this.l=c.l;var g=c.i,v=new Ar;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Li(this,v),this.m=c.m}else c&&(g=String(c).match($s))?(this.h=!1,Ws(this,g[1]||"",!0),this.o=$e(g[2]||""),this.g=$e(g[3]||"",!0),Oi(this,g[4]),this.l=$e(g[5]||"",!0),Li(this,g[6]||"",!0),this.m=$e(g[7]||"")):(this.h=!1,this.i=new Ar(null,this.h))}ni.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Vi(g,$o,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Vi(g,$o,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Vi(v,v.charAt(0)=="/"?yc:_c,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Vi(v,Sl)),c.join("")};function xn(c){return new ni(c)}function Ws(c,g,v){c.j=v?$e(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Oi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Li(c,g,v){g instanceof Ar?(c.i=g,kr(c.i,c.h)):(v||(g=Vi(g,vc)),c.i=new Ar(g,c.h))}function nt(c,g,v){c.i.set(g,v)}function Mi(c){return nt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function $e(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Vi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,gc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var $o=/[#\/\?@]/g,_c=/[#\?:]/g,yc=/[#\?]/g,vc=/[#\?@]/g,Sl=/#/g;function Ar(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Kt(c){c.g||(c.g=new Map,c.h=0,c.i&&vf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Ar.prototype,n.add=function(c,g){Kt(this),this.i=null,c=$n(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function ar(c,g){Kt(c),g=$n(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function lr(c,g){return Kt(c),g=$n(c,g),c.g.has(g)}n.forEach=function(c,g){Kt(this),this.g.forEach(function(v,C){v.forEach(function(j){c.call(g,j,C,this)},this)},this)},n.na=function(){Kt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let C=0;C<g.length;C++){const j=c[C];for(let H=0;H<j.length;H++)v.push(g[C])}return v},n.V=function(c){Kt(this);let g=[];if(typeof c=="string")lr(this,c)&&(g=g.concat(this.g.get($n(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Kt(this),this.i=null,c=$n(this,c),lr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Fi(c,g,v){ar(c,g),0<v.length&&(c.i=null,c.g.set($n(c,g),M(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var C=g[v];const H=encodeURIComponent(String(C)),oe=this.V(C);for(C=0;C<oe.length;C++){var j=H;oe[C]!==""&&(j+="="+encodeURIComponent(String(oe[C]))),c.push(j)}}return this.i=c.join("&")};function $n(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function kr(c,g){g&&!c.j&&(Kt(c),c.i=null,c.g.forEach(function(v,C){var j=C.toLowerCase();C!=j&&(ar(this,C),Fi(this,j,v))},c)),c.j=g}function Ef(c,g){const v=new Fs;if(d.Image){const C=new Image;C.onload=P(_n,v,"TestLoadImage: loaded",!0,g,C),C.onerror=P(_n,v,"TestLoadImage: error",!1,g,C),C.onabort=P(_n,v,"TestLoadImage: abort",!1,g,C),C.ontimeout=P(_n,v,"TestLoadImage: timeout",!1,g,C),d.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=c}else g(!1)}function Ec(c,g){const v=new Fs,C=new AbortController,j=setTimeout(()=>{C.abort(),_n(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:C.signal}).then(H=>{clearTimeout(j),H.ok?_n(v,"TestPingServer: ok",!0,g):_n(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),_n(v,"TestPingServer: error",!1,g)})}function _n(c,g,v,C,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),C(v)}catch{}}function wf(){this.g=new gl}function wc(c,g,v){const C=v||"";try{Di(c,function(j,H){let oe=j;m(j)&&(oe=pl(j)),g.push(C+H+"="+encodeURIComponent(oe))})}catch(j){throw g.push(C+"type="+encodeURIComponent("_badmap")),j}}function ri(c){this.l=c.Ub||null,this.j=c.eb||!1}L(ri,Ms),ri.prototype.g=function(){return new Hs(this.l,this.j)},ri.prototype.i=(function(c){return function(){return c}})({});function Hs(c,g){bt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Hs,bt),n=Hs.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,cr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,cr(this)),this.g&&(this.readyState=3,cr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ur(this):cr(this),this.readyState==3&&Tc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,ur(this))},n.Qa=function(c){this.g&&(this.response=c,ur(this))},n.ga=function(){this.g&&ur(this)};function ur(c){c.readyState=4,c.l=null,c.j=null,c.v=null,cr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function cr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ii(c){let g="";return he(c,function(v,C){g+=C,g+=":",g+=v,g+=`\r
`}),g}function Ui(c,g,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=ii(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):nt(c,g,v))}function ht(c){bt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(ht,bt);var Tf=/^https?$/i,Rl=["POST","PUT"];n=ht.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sr.g(),this.v=this.o?Do(this.o):Do(sr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){qs(this,H);return}if(c=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var j in C)v.set(j,C[j]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const H of C.keys())v.set(H,C.get(H));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),j=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||C||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,oe]of v)this.g.setRequestHeader(H,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ho(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){qs(this,H)}};function qs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Wo(c),bn(c)}function Wo(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Dt(this,"complete"),Dt(this,"abort"),bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(c){if(c.h&&typeof u<"u"&&(!c.v[1]||yn(c)!=4||c.Z()!=2)){if(c.u&&yn(c)==4)hl(c.Ea,0,c);else if(Dt(c,"readystatechange"),yn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var C;if(C=oe===0){var j=String(c.D).match($s)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),C=!Tf.test(j?j.toLowerCase():"")}v=C}if(v)Dt(c,"complete"),Dt(c,"success");else{c.m=6;try{var H=2<yn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",Wo(c)}}finally{bn(c)}}}}function bn(c,g){if(c.g){Ho(c);const v=c.g,C=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Dt(c,"ready");try{v.onreadystatechange=C}catch{}}}function Ho(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function yn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ml(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function qo(c){const g={};c=(c.g&&2<=yn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<c.length;C++){if($(c[C]))continue;var v=D(c[C]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=g[j]||[];g[j]=H,H.push(v)}b(g,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Pl(c){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pr("baseRetryDelayMs",5e3,c),this.cb=Pr("retryDelaySeedMs",1e4,c),this.Wa=Pr("forwardChannelMaxRetries",2,c),this.wa=Pr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new zs(c&&c.concurrentRequestLimit),this.Da=new wf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,C){vt(0),this.W=c,this.H=g||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=Rc(this,null,this.W),Nr(this)};function Qt(c){if(Go(c),c.G==3){var g=c.U++,v=xn(c.I);if(nt(v,"SID",c.K),nt(v,"RID",g),nt(v,"TYPE","terminate"),si(c,v),g=new or(c,c.j,g),g.L=2,g.v=Mi(xn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Ac(g.j,null),g.g.ea(g.v)),g.F=Date.now(),it(g)}Sc(c)}function hr(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function Go(c){hr(c),c.u&&(d.clearTimeout(c.u),c.u=null),Yo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Nr(c){if(!Nn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Se||le(),ne||(Se(),ne=!0),_e.add(g,c),c.B=0}}function If(c,g){return fc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=rr(T(c.Ga,c,g),Cc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new or(this,this.j,c);let H=this.o;if(this.S&&(H?(H=A(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(j.H=H,H=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(g+=C,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=ji(this,j,g),v=xn(this.I),nt(v,"RID",c),nt(v,"CVER",22),this.D&&nt(v,"X-HTTP-Session-Id",this.D),si(this,v),H&&(this.O?g="headers="+encodeURIComponent(String(ii(H)))+"&"+g:this.m&&Ui(v,this.m,H)),Cl(this.h,j),this.Ua&&nt(v,"TYPE","init"),this.P?(nt(v,"$req",g),nt(v,"SID","null"),j.T=!0,jo(j,v,null)):jo(j,v,g),this.G=2}}else this.G==3&&(c?Ko(this,c):this.i.length==0||Nn(this.h)||Ko(this))};function Ko(c,g){var v;g?v=g.l:v=c.U++;const C=xn(c.I);nt(C,"SID",c.K),nt(C,"RID",v),nt(C,"AID",c.T),si(c,C),c.m&&c.o&&Ui(C,c.m,c.o),v=new or(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=ji(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Cl(c.h,v),jo(v,C,g)}function si(c,g){c.H&&he(c.H,function(v,C){nt(g,C,v)}),c.l&&Di({},function(v,C){nt(g,C,v)})}function ji(c,g,v){v=Math.min(c.i.length,v);var C=c.l?T(c.l.Na,c.l,c):null;e:{var j=c.i;let H=-1;for(;;){const oe=["count="+v];H==-1?0<v?(H=j[0].g,oe.push("ofs="+H)):H=0:oe.push("ofs="+H);let et=!0;for(let Ot=0;Ot<v;Ot++){let We=j[Ot].g;const jt=j[Ot].map;if(We-=H,0>We)H=Math.max(0,j[Ot].g-100),et=!1;else try{wc(jt,oe,"req"+We+"_")}catch{C&&C(jt)}}if(et){C=oe.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,C}function Gs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Se||le(),ne||(Se(),ne=!0),_e.add(g,c),c.v=0}}function Qo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=rr(T(c.Fa,c),Cc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Ic(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=rr(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),hr(this),Ic(this))};function Nl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Ic(c){c.g=new or(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=xn(c.qa);nt(g,"RID","rpc"),nt(g,"SID",c.K),nt(g,"AID",c.T),nt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&nt(g,"TO",c.ja),nt(g,"TYPE","xmlhttp"),si(c,g),c.m&&c.o&&Ui(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Mi(xn(g)),v.m=null,v.P=!0,Tl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,hr(this),Qo(this),vt(19))};function Yo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Xo(c,g){var v=null;if(c.g==g){Yo(c),Nl(c),c.g=null;var C=2}else if(dn(c.h,g))v=g.D,pc(c.h,g),C=1;else return;if(c.G!=0){if(g.o)if(C==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var j=c.B;C=Vs(),Dt(C,new Mo(C,v)),Nr(c)}else Gs(c);else if(j=g.s,j==3||j==0&&0<g.X||!(C==1&&If(c,g)||C==2&&Qo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),j){case 1:oi(c,5);break;case 4:oi(c,10);break;case 3:oi(c,6);break;default:oi(c,2)}}}function Cc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function oi(c,g){if(c.j.info("Error code "+g),g==2){var v=T(c.fb,c),C=c.Xa;const j=!C;C=new ni(C||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ws(C,"https"),Mi(C),j?Ef(C.toString(),v):Ec(C.toString(),v)}else vt(2);c.G=0,c.l&&c.l.sa(g),Sc(c),Go(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Sc(c){if(c.G=0,c.ka=[],c.l){const g=mc(c.h);(g.length!=0||c.i.length!=0)&&(V(c.ka,g),V(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function Rc(c,g,v){var C=v instanceof ni?xn(v):new ni(v);if(C.g!="")g&&(C.g=g+"."+C.g),Oi(C,C.s);else{var j=d.location;C=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var H=new ni(null);C&&Ws(H,C),g&&(H.g=g),j&&Oi(H,j),v&&(H.l=v),C=H}return v=c.D,g=c.ya,v&&g&&nt(C,v,g),nt(C,"VER",c.la),si(c,C),C}function Ac(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ht(new ri({eb:v})):new ht(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jo(){}Jo.prototype.g=function(c,g){return new fn(c,g)};function fn(c,g){bt.call(this),this.g=new Pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!$(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!$(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new xr(this)}L(fn,bt),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Qt(this.g)},fn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=pl(c),c=v);g.i.push(new dc(g.Ya++,c)),g.G==3&&Nr(g)},fn.prototype.N=function(){this.g.l=null,delete this.j,Qt(this.g),delete this.g,fn.aa.N.call(this)};function kc(c){Sr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}L(kc,Sr);function Pc(){Lo.call(this),this.status=1}L(Pc,Lo);function xr(c){this.g=c}L(xr,xl),xr.prototype.ua=function(){Dt(this.g,"a")},xr.prototype.ta=function(c){Dt(this.g,new kc(c))},xr.prototype.sa=function(c){Dt(this.g,new Pc)},xr.prototype.ra=function(){Dt(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,LI=function(){return new Jo},OI=function(){return Vs()},DI=Rr,Im={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,Vh=Fo,lc.COMPLETE="complete",bI=lc,Oo.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,cu=Oo,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,xI=ht}).apply(typeof Ch<"u"?Ch:typeof self<"u"?self:typeof window<"u"?window:{});const VE="@firebase/firestore",FE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Od("@firebase/firestore");function Ta(){return yo.logLevel}function ce(n,...e){if(yo.logLevel<=Be.DEBUG){const t=e.map(Tg);yo.debug(`Firestore (${tl}): ${n}`,...t)}}function Ri(n,...e){if(yo.logLevel<=Be.ERROR){const t=e.map(Tg);yo.error(`Firestore (${tl}): ${n}`,...t)}}function Es(n,...e){if(yo.logLevel<=Be.WARN){const t=e.map(Tg);yo.warn(`Firestore (${tl}): ${n}`,...t)}}function Tg(n){if(typeof n=="string")return n;try{/**
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
 */function Ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,MI(n,r,t)}function MI(n,e,t){let r=`FIRESTORE (${tl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ri(r),new Error(r)}function Xe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||MI(e,s,r)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Qr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ln.UNAUTHENTICATED)))}shutdown(){}}class XP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class JP{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new fs,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new fs)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string",31837,{l:r}),new VI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class ZP{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ZP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ln.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class UE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new UE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new UE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function FI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Le(n,e){return n<e?-1:n>e?1:0}function Cm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Le(r,s);{const a=FI(),u=rN(a.encode(jE(n,t)),a.encode(jE(e,t)));return u!==0?u:Le(r,s)}}t+=r>65535?2:1}return Le(n.length,e.length)}function jE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function rN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Le(n[t],e[t]);return Le(n.length,e.length)}function Fa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="__name__";class Mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Mr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Le(e.length,t.length)}static compareSegments(e,t){const r=Mr.isNumericId(e),s=Mr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Mr.extractNumericId(e).compare(Mr.extractNumericId(t)):Cm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ds.fromString(e.substring(4,e.length-2))}}class ot extends Mr{construct(e,t,r){return new ot(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ot(t)}static emptyPath(){return new ot([])}}const iN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends Mr{construct(e,t,r){return new Zt(e,t,r)}static isValidIdentifier(e){return iN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===BE}static keyField(){return new Zt([BE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ae(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ae(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ae(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(t)}static emptyPath(){return new Zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(ot.fromString(e))}static fromName(e){return new ve(ot.fromString(e).popFirst(5))}static empty(){return new ve(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new ot(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n,e,t){if(!t)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sN(n,e,t,r){if(e===!0&&r===!0)throw new ae(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zE(n){if(!ve.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $E(n){if(ve.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Ei(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jd(n);throw new ae(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function oN(n,e){if(e<=0)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ju(n,e){if(!jI(n))throw new ae(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ae(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=-62135596800,HE=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*HE);return new ct(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<WE)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/HE}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ju(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-WE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Pt("string",ct._jsonSchemaVersion),seconds:Pt("number"),nanoseconds:Pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new ct(0,0))}static max(){return new xe(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xu=-1;function aN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=xe.fromTimestamp(r===1e9?new ct(t+1,0):new ct(t,r));return new ws(s,ve.empty(),e)}function lN(n){return new ws(n.readTime,n.key,xu)}class ws{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ws(xe.min(),ve.empty(),xu)}static max(){return new ws(xe.max(),ve.empty(),xu)}}function uN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const cN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==cN)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,r)=>{t(e)}))}static reject(e){return new Q(((t,r)=>{r(e)}))}static waitFor(e){return new Q(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Q.resolve(!1);for(const r of e)t=t.next((s=>s?Q.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Q(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new Q(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function dN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Bd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Bd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=-1;function zd(n){return n==null}function nd(n){return n===0&&1/n==-1/0}function fN(n){return typeof n=="number"&&Number.isInteger(n)&&!nd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="";function pN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qE(e)),e=mN(n.get(t),e);return qE(e)}function mN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case BI:t+="";break;default:t+=a}}return t}function qE(n){return n+BI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt=class Sm{constructor(e,t){this.comparator=e,this.root=t||ps.EMPTY}insert(e,t){return new Sm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ps.BLACK,null,null))}remove(e){return new Sm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ps.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sh(this.root,e,this.comparator,!0)}},Sh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ps=class mi{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??mi.RED,this.left=s??mi.EMPTY,this.right=a??mi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new mi(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return mi.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};ps.EMPTY=null,ps.RED=!0,ps.BLACK=!1;ps.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new ps(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new KE(this.data.getIterator())}getIteratorFrom(e){return new KE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class KE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fn{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new Vt(Zt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class $I extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new $I("Invalid base64 string: "+a):a}})(e);return new en(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const gN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=gN.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Is(n){return typeof n=="string"?en.fromBase64String(n):en.fromUint8Array(n)}/**
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
 */const WI="server_timestamp",HI="__type__",qI="__previous_value__",GI="__local_write_time__";function Sg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[HI])===null||t===void 0?void 0:t.stringValue)===WI}function $d(n){const e=n.mapValue.fields[qI];return Sg(e)?$d(e):e}function bu(n){const e=Ts(n.mapValue.fields[GI].timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const rd="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||rd}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===rd}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const KI="__type__",yN="__max__",Rh={mapValue:{}},QI="__vector__",id="value";function Cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sg(n)?4:EN(n)?9007199254740991:vN(n)?10:11:Ae(28295,{value:n})}function Gr(n,e){if(n===e)return!0;const t=Cs(n);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bu(n).isEqual(bu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ts(s.timestampValue),d=Ts(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Is(s.bytesValue).isEqual(Is(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return wt(s.geoPointValue.latitude)===wt(a.geoPointValue.latitude)&&wt(s.geoPointValue.longitude)===wt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return wt(s.integerValue)===wt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=wt(s.doubleValue),d=wt(a.doubleValue);return u===d?nd(u)===nd(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Fa(n.arrayValue.values||[],e.arrayValue.values||[],Gr);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(GE(u)!==GE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Gr(u[f],d[f])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function Ou(n,e){return(n.values||[]).find((t=>Gr(t,e)))!==void 0}function Ua(n,e){if(n===e)return 0;const t=Cs(n),r=Cs(e);if(t!==r)return Le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=wt(a.integerValue||a.doubleValue),f=wt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return QE(n.timestampValue,e.timestampValue);case 4:return QE(bu(n),bu(e));case 5:return Cm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Is(a),f=Is(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Le(d[m],f[m]);if(y!==0)return y}return Le(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Le(wt(a.latitude),wt(u.latitude));return d!==0?d:Le(wt(a.longitude),wt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return YE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const E=a.fields||{},T=u.fields||{},P=(d=E[id])===null||d===void 0?void 0:d.arrayValue,L=(f=T[id])===null||f===void 0?void 0:f.arrayValue,M=Le(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0);return M!==0?M:YE(P,L)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Rh.mapValue&&u===Rh.mapValue)return 0;if(a===Rh.mapValue)return 1;if(u===Rh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const T=Cm(f[E],y[E]);if(T!==0)return T;const P=Ua(d[f[E]],m[y[E]]);if(P!==0)return P}return Le(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function QE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Ts(n),r=Ts(e),s=Le(t.seconds,r.seconds);return s!==0?s:Le(t.nanos,r.nanos)}function YE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ua(t[s],r[s]);if(a)return a}return Le(t.length,r.length)}function ja(n){return Rm(n)}function Rm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ts(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Is(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ve.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Rm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Rm(t.fields[u])}`;return s+"}"})(n.mapValue):Ae(61005,{value:n})}function Fh(n){switch(Cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$d(n);return e?16+Fh(e):16;case 5:return 2*n.stringValue.length;case 6:return Is(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Fh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return xs(r.fields,((a,u)=>{s+=a.length+Fh(u)})),s})(n.mapValue);default:throw Ae(13486,{value:n})}}function XE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Am(n){return!!n&&"integerValue"in n}function Rg(n){return!!n&&"arrayValue"in n}function JE(n){return!!n&&"nullValue"in n}function ZE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Uh(n){return!!n&&"mapValue"in n}function vN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[KI])===null||t===void 0?void 0:t.stringValue)===QI}function _u(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return xs(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=_u(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_u(n.arrayValue.values[t]);return e}return Object.assign({},n)}function EN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Uh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_u(t)}setAll(e){let t=Zt.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=_u(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Uh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Uh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){xs(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Rn(_u(this.value))}}function YI(n){const e=[];return xs(n.fields,((t,r)=>{const s=new Zt([t]);if(Uh(r)){const a=YI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new un(e,0,xe.min(),xe.min(),xe.min(),Rn.empty(),0)}static newFoundDocument(e,t,r,s){return new un(e,1,t,xe.min(),r,s,0)}static newNoDocument(e,t){return new un(e,2,t,xe.min(),xe.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new un(e,3,t,xe.min(),xe.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sd{constructor(e,t){this.position=e,this.inclusive=t}}function ew(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=ve.comparator(ve.fromName(u.referenceValue),t.key):r=Ua(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function tw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Lu{constructor(e,t="asc"){this.field=e,this.dir=t}}function wN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class XI{}class kt extends XI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new IN(e,t,r):t==="array-contains"?new RN(e,r):t==="in"?new AN(e,r):t==="not-in"?new kN(e,r):t==="array-contains-any"?new PN(e,r):new kt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new CN(e,r):new SN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ua(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(Ua(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ir extends XI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ir(e,t)}matches(e){return JI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function JI(n){return n.op==="and"}function ZI(n){return TN(n)&&JI(n)}function TN(n){for(const e of n.filters)if(e instanceof Ir)return!1;return!0}function km(n){if(n instanceof kt)return n.field.canonicalString()+n.op.toString()+ja(n.value);if(ZI(n))return n.filters.map((e=>km(e))).join(",");{const e=n.filters.map((t=>km(t))).join(",");return`${n.op}(${e})`}}function e0(n,e){return n instanceof kt?(function(r,s){return s instanceof kt&&r.op===s.op&&r.field.isEqual(s.field)&&Gr(r.value,s.value)})(n,e):n instanceof Ir?(function(r,s){return s instanceof Ir&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&e0(u,s.filters[d])),!0):!1})(n,e):void Ae(19439)}function t0(n){return n instanceof kt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ja(t.value)}`})(n):n instanceof Ir?(function(t){return t.op.toString()+" {"+t.getFilters().map(t0).join(" ,")+"}"})(n):"Filter"}class IN extends kt{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class CN extends kt{constructor(e,t){super(e,"in",t),this.keys=n0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class SN extends kt{constructor(e,t){super(e,"not-in",t),this.keys=n0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function n0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ve.fromName(r.referenceValue)))}class RN extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rg(t)&&Ou(t.arrayValue,this.value)}}class AN extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ou(this.value.arrayValue,t)}}class kN extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ou(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ou(this.value.arrayValue,t)}}class PN extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ou(this.value.arrayValue,r)))}}/**
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
 */class NN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function nw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new NN(n,e,t,r,s,a,u)}function Ag(n){const e=be(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>km(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),zd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ja(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ja(r))).join(",")),e.Pe=t}return e.Pe}function kg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!wN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!e0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tw(n.startAt,e.startAt)&&tw(n.endAt,e.endAt)}function Pm(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function xN(n,e,t,r,s,a,u,d){return new il(n,e,t,r,s,a,u,d)}function Pg(n){return new il(n)}function rw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function r0(n){return n.collectionGroup!==null}function yu(n){const e=be(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Vt(Zt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Lu(a,r))})),t.has(Zt.keyField().canonicalString())||e.Te.push(new Lu(Zt.keyField(),r))}return e.Te}function Br(n){const e=be(n);return e.Ie||(e.Ie=bN(e,yu(n))),e.Ie}function bN(n,e){if(n.limitType==="F")return nw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Lu(s.field,a)}));const t=n.endAt?new sd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new sd(n.startAt.position,n.startAt.inclusive):null;return nw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Nm(n,e){const t=n.filters.concat([e]);return new il(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function od(n,e,t){return new il(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wd(n,e){return kg(Br(n),Br(e))&&n.limitType===e.limitType}function i0(n){return`${Ag(Br(n))}|lt:${n.limitType}`}function Ia(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>t0(s))).join(", ")}]`),zd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ja(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ja(s))).join(",")),`Target(${r})`})(Br(n))}; limitType=${n.limitType})`}function Hd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ve.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of yu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=ew(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,yu(r),s)||r.endAt&&!(function(u,d,f){const m=ew(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,yu(r),s))})(n,e)}function DN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function s0(n){return(e,t)=>{let r=!1;for(const s of yu(n)){const a=ON(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function ON(n,e,t){const r=n.field.isKeyField()?ve.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Ua(f,m):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return zI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new xt(ve.comparator);function Ai(){return LN}const o0=new xt(ve.comparator);function hu(...n){let e=o0;for(const t of n)e=e.insert(t.key,t);return e}function a0(n){let e=o0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function uo(){return vu()}function l0(){return vu()}function vu(){return new Ao((n=>n.toString()),((n,e)=>n.isEqual(e)))}const MN=new xt(ve.comparator),VN=new Vt(ve.comparator);function ze(...n){let e=VN;for(const t of n)e=e.add(t);return e}const FN=new Vt(Le);function UN(){return FN}/**
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
 */function Ng(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nd(e)?"-0":e}}function u0(n){return{integerValue:""+n}}function jN(n,e){return fN(e)?u0(e):Ng(n,e)}/**
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
 */class qd{constructor(){this._=void 0}}function BN(n,e,t){return n instanceof ad?(function(s,a){const u={fields:{[HI]:{stringValue:WI},[GI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Sg(a)&&(a=$d(a)),a&&(u.fields[qI]=a),{mapValue:u}})(t,e):n instanceof Ba?h0(n,e):n instanceof Mu?d0(n,e):(function(s,a){const u=c0(s,a),d=iw(u)+iw(s.Ee);return Am(u)&&Am(s.Ee)?u0(d):Ng(s.serializer,d)})(n,e)}function zN(n,e,t){return n instanceof Ba?h0(n,e):n instanceof Mu?d0(n,e):t}function c0(n,e){return n instanceof ld?(function(r){return Am(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class ad extends qd{}class Ba extends qd{constructor(e){super(),this.elements=e}}function h0(n,e){const t=f0(e);for(const r of n.elements)t.some((s=>Gr(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Mu extends qd{constructor(e){super(),this.elements=e}}function d0(n,e){let t=f0(e);for(const r of n.elements)t=t.filter((s=>!Gr(s,r)));return{arrayValue:{values:t}}}class ld extends qd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iw(n){return wt(n.integerValue||n.doubleValue)}function f0(n){return Rg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,t){this.field=e,this.transform=t}}function WN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Ba&&s instanceof Ba||r instanceof Mu&&s instanceof Mu?Fa(r.elements,s.elements,Gr):r instanceof ld&&s instanceof ld?Gr(r.Ee,s.Ee):r instanceof ad&&s instanceof ad})(n.transform,e.transform)}class HN{constructor(e,t){this.version=e,this.transformResults=t}}class zr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zr}static exists(e){return new zr(void 0,e)}static updateTime(e){return new zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gd{}function p0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new g0(n.key,zr.none()):new Zu(n.key,n.data,zr.none());{const t=n.data,r=Rn.empty();let s=new Vt(Zt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new bs(n.key,r,new Fn(s.toArray()),zr.none())}}function qN(n,e,t){n instanceof Zu?(function(s,a,u){const d=s.value.clone(),f=ow(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof bs?(function(s,a,u){if(!jh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=ow(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(m0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Eu(n,e,t,r){return n instanceof Zu?(function(a,u,d,f){if(!jh(a.precondition,u))return d;const m=a.value.clone(),y=aw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof bs?(function(a,u,d,f){if(!jh(a.precondition,u))return d;const m=aw(a.fieldTransforms,f,u),y=u.data;return y.setAll(m0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return jh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function GN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=c0(r.transform,s||null);a!=null&&(t===null&&(t=Rn.empty()),t.set(r.field,a))}return t||null}function sw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fa(r,s,((a,u)=>WN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zu extends Gd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bs extends Gd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function m0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ow(n,e,t){const r=new Map;Xe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,zN(u,d,t[s]))}return r}function aw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,BN(a,u,e))}return r}class g0 extends Gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KN extends Gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&qN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Eu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Eu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=l0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=p0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&Fa(this.mutations,e.mutations,((t,r)=>sw(t,r)))&&Fa(this.baseMutations,e.baseMutations,((t,r)=>sw(t,r)))}}class xg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Xe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return MN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new xg(e,t,r,s)}}/**
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
 */class YN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,He;function JN(n){switch(n){case G.OK:return Ae(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function _0(n){if(n===void 0)return Ri("GRPC error has no .code"),G.UNKNOWN;switch(n){case Rt.OK:return G.OK;case Rt.CANCELLED:return G.CANCELLED;case Rt.UNKNOWN:return G.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return G.INTERNAL;case Rt.UNAVAILABLE:return G.UNAVAILABLE;case Rt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case Rt.NOT_FOUND:return G.NOT_FOUND;case Rt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case Rt.ABORTED:return G.ABORTED;case Rt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case Rt.DATA_LOSS:return G.DATA_LOSS;default:return Ae(39323,{code:n})}}(He=Rt||(Rt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZN=new ds([4294967295,4294967295],0);function lw(n){const e=FI().encode(n),t=new NI;return t.update(e),new Uint8Array(t.digest())}function uw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ds([t,r],0),new ds([s,a],0)]}class bg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new du(`Invalid padding: ${t}`);if(r<0)throw new du(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new du(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new du(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ds.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(ds.fromNumber(r)));return s.compare(ZN)===1&&(s=new ds([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=lw(e),[r,s]=uw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new bg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=lw(e),[r,s]=uw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ec.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Kd(xe.min(),s,new xt(Le),Ai(),ze())}}class ec{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ec(r,t,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class y0{constructor(e,t){this.targetId=e,this.De=t}}class v0{constructor(e,t,r=en.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cw{constructor(){this.ve=0,this.Ce=hw(),this.Fe=en.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ze(),t=ze(),r=ze();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ae(38017,{changeType:a})}})),new ec(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=hw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ex{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ai(),this.je=Ah(),this.Je=Ah(),this.He=new xt(Le)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Pm(a))if(r===0){const u=new ve(a.path);this.Xe(t,u,un.newNoDocument(u,xe.min()))}else Xe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Is(r).toUint8Array()}catch(f){if(f instanceof $I)return Es("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new bg(u,s,a)}catch(f){return Es(f instanceof du?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Pm(d.target)){const f=new ve(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,un.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=ze();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Kd(e,t,this.He,this.ze,r);return this.ze=Ai(),this.je=Ah(),this.Je=Ah(),this.He=new xt(Le),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new cw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Vt(Le),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Vt(Le),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new cw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ah(){return new xt(ve.comparator)}function hw(){return new xt(ve.comparator)}const tx={asc:"ASCENDING",desc:"DESCENDING"},nx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rx={and:"AND",or:"OR"};class ix{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xm(n,e){return n.useProto3Json||zd(e)?e:{value:e}}function ud(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sx(n,e){return ud(n,e.toTimestamp())}function $r(n){return Xe(!!n,49232),xe.fromTimestamp((function(t){const r=Ts(t);return new ct(r.seconds,r.nanos)})(n))}function Dg(n,e){return bm(n,e).canonicalString()}function bm(n,e){const t=(function(s){return new ot(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function w0(n){const e=ot.fromString(n);return Xe(R0(e),10190,{key:e.toString()}),e}function Dm(n,e){return Dg(n.databaseId,e.path)}function tm(n,e){const t=w0(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(I0(t))}function T0(n,e){return Dg(n.databaseId,e)}function ox(n){const e=w0(n);return e.length===4?ot.emptyPath():I0(e)}function Om(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function I0(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function dw(n,e,t){return{name:Dm(n,e),fields:t.value.mapValue.fields}}function ax(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(Xe(y===void 0||typeof y=="string",58123),en.fromBase64String(y||"")):(Xe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),en.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?G.UNKNOWN:_0(m.code);return new ae(y,m.message||"")})(u);t=new v0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tm(n,r.document.name),a=$r(r.document.updateTime),u=r.document.createTime?$r(r.document.createTime):xe.min(),d=new Rn({mapValue:{fields:r.document.fields}}),f=un.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Bh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tm(n,r.document),a=r.readTime?$r(r.readTime):xe.min(),u=un.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Bh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tm(n,r.document),a=r.removedTargetIds||[];t=new Bh([],a,s,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new XN(s,a),d=r.targetId;t=new y0(d,u)}}return t}function lx(n,e){let t;if(e instanceof Zu)t={update:dw(n,e.key,e.value)};else if(e instanceof g0)t={delete:Dm(n,e.key)};else if(e instanceof bs)t={update:dw(n,e.key,e.data),updateMask:_x(e.fieldMask)};else{if(!(e instanceof KN))return Ae(16599,{Rt:e.type});t={verify:Dm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof ad)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ba)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Mu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ld)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ae(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:sx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)})(n,e.precondition)),t}function ux(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?$r(s.updateTime):$r(a);return u.isEqual(xe.min())&&(u=$r(a)),new HN(u,s.transformResults||[])})(t,e)))):[]}function cx(n,e){return{documents:[T0(n,e.path)]}}function hx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=T0(n,s);const a=(function(m){if(m.length!==0)return S0(Ir.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(T){return{field:Ca(T.field),direction:px(T.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=xm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function dx(n){let e=ox(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Xe(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(E){const T=C0(E);return T instanceof Ir&&ZI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(L){return new Lu(Sa(L.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,zd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,P=E.values||[];return new sd(P,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,P=E.values||[];return new sd(P,T)})(t.endAt)),xN(e,s,u,a,d,"F",f,m)}function fx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function C0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Sa(t.unaryFilter.field);return kt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Sa(t.unaryFilter.field);return kt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Sa(t.unaryFilter.field);return kt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Sa(t.unaryFilter.field);return kt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return kt.create(Sa(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ir.create(t.compositeFilter.filters.map((r=>C0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function px(n){return tx[n]}function mx(n){return nx[n]}function gx(n){return rx[n]}function Ca(n){return{fieldPath:n.canonicalString()}}function Sa(n){return Zt.fromServerFormat(n.fieldPath)}function S0(n){return n instanceof kt?(function(t){if(t.op==="=="){if(ZE(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NAN"}};if(JE(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ZE(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NAN"}};if(JE(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(t.field),op:mx(t.op),value:t.value}}})(n):n instanceof Ir?(function(t){const r=t.getFilters().map((s=>S0(s)));return r.length===1?r[0]:{compositeFilter:{op:gx(t.op),filters:r}}})(n):Ae(54877,{filter:n})}function _x(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function R0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r,s,a=xe.min(),u=xe.min(),d=en.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.gt=e}}function vx(n){const e=dx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?od(e,e.limit,"L"):e}/**
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
 */class Ex{constructor(){this.Dn=new wx}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(ws.min())}updateCollectionGroup(e,t,r){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class wx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Vt(ot.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Vt(ot.comparator)).toArray()}}/**
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
 */const fw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},A0=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.DEFAULT_COLLECTION_PERCENTILE=10,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sn.DEFAULT=new Sn(A0,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sn.DISABLED=new Sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new za(0)}static ur(){return new za(-1)}}/**
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
 */const pw="LruGarbageCollector",Tx=1048576;function mw([n,e],[t,r]){const s=Le(n,t);return s===0?Le(e,r):s}class Ix{constructor(e){this.Tr=e,this.buffer=new Vt(mw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();mw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(pw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rl(t)?ce(pw,"Ignoring IndexedDB error during garbage collection: ",t):await nl(t)}await this.Rr(3e5)}))}}class Sx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Bd.ue);const r=new Ix(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(fw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Ta()<=Be.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function Rx(n,e){return new Sx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.changes=new Ao((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,un.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Eu(r.mutation,s,Fn.empty(),ct.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ze()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ze()){const s=uo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=hu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=uo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ze())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Ai();const u=vu(),d=(function(){return vu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof bs)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Eu(y.mutation,m,y.mutation.getFieldMask(),ct.now())):u.set(m.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var E;return d.set(m,new kx(y,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=vu();let s=new xt(((u,d)=>u-d)),a=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||Fn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const E=(s.get(d.batchId)||ze()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,E=l0();y.forEach((T=>{if(!a.has(T)){const P=p0(t.get(T),r.get(T));P!==null&&E.set(T,P),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return Q.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):r0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Q.resolve(uo());let d=xu,f=a;return u.next((m=>Q.forEach(m,((y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(y)?Q.resolve():this.remoteDocumentCache.getEntry(e,y).next((T=>{f=f.insert(y,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,ze()))).next((y=>({batchId:d,changes:a0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next((r=>{let s=hu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=hu();return this.indexManager.getCollectionParents(e,a).next((d=>Q.forEach(d,(f=>{const m=(function(E,T){return new il(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,un.newInvalidDocument(y)))}));let d=hu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&Eu(y.mutation,m,Fn.empty(),ct.now()),Hd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
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
 */class Nx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:$r(s.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:vx(s.bundledQuery),readTime:$r(s.readTime)}})(t)),Q.resolve()}}/**
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
 */class xx{constructor(){this.overlays=new xt(ve.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=uo();return Q.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Q.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Q.resolve()}getOverlaysForCollection(e,t,r){const s=uo(),a=t.length+1,u=new ve(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new xt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=uo(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=uo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return Q.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new YN(t,r));let a=this.kr.get(t);a===void 0&&(a=ze(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class bx{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.qr=new Vt(Ht.Qr),this.$r=new Vt(Ht.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ht(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ht(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ve(new ot([])),r=new Ht(t,e),s=new Ht(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ve(new ot([])),r=new Ht(t,e),s=new Ht(t,e+1);let a=ze();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Ht(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ht{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ve.comparator(e.key,t.key)||Le(e.Hr,t.Hr)}static Ur(e,t){return Le(e.Hr,t.Hr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Vt(Ht.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new QN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Ht(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(u)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Cg:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ht(t,0),s=new Ht(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Vt(Le);return t.forEach((s=>{const a=new Ht(s,0),u=new Ht(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;ve.isDocumentKey(a)||(a=a.child(""));const u=new Ht(new ve(a),0);let d=new Vt(Le);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),Q.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Xe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Q.forEach(t.mutations,(s=>{const a=new Ht(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ht(t,0),s=this.Yr.firstAfterOrEqual(r);return Q.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.ni=e,this.docs=(function(){return new xt(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Q.resolve(r?r.document.mutableCopy():un.newInvalidDocument(t))}getEntries(e,t){let r=Ai();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():un.newInvalidDocument(s))})),Q.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Ai();const u=t.path,d=new ve(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||uN(lN(y),r)<=0||(s.has(y.key)||Hd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return Q.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ae(9500)}ri(e,t){return Q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Lx(this)}getSize(e){return Q.resolve(this.size)}}class Lx extends Ax{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.persistence=e,this.ii=new Ao((t=>Ag(t)),kg),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.si=0,this.oi=new Og,this.targetCount=0,this._i=za.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new za(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Q.waitFor(a).next((()=>s))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Q.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Q.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Q.resolve(r)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Bd(0),this.ci=!1,this.ci=!0,this.li=new bx,this.referenceDelegate=e(this),this.hi=new Mx(this),this.indexManager=new Ex,this.remoteDocumentCache=(function(s){return new Ox(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new yx(t),this.Ti=new Nx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Dx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const s=new Vx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Vx extends hN{constructor(e){super(),this.currentSequenceNumber=e}}class Lg{constructor(e){this.persistence=e,this.Ai=new Og,this.Ri=null}static Vi(e){return new Lg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Q.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(r=>{const s=ve.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,xe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class cd{constructor(e,t){this.persistence=e,this.gi=new Ao((r=>pN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Rx(this,t)}static Vi(e,t){return new cd(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Q.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,xe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fh(e.data.value)),t}Sr(e,t,r){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ze(),s=ze();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Mg(e,t.fromCache,r,s)}}/**
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
 */class Fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ux{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return mA()?8:dN(cn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Fx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Ta()<=Be.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ia(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(Ta()<=Be.DEBUG&&ce("QueryEngine","Query:",Ia(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ta()<=Be.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ia(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Br(t))):Q.resolve())}ps(e,t){if(rw(t))return Q.resolve(null);let r=Br(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=od(t,null,"F"),r=Br(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=ze(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,od(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return rw(t)||s.isEqual(xe.min())?Q.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Q.resolve(null):(Ta()<=Be.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ia(t)),this.vs(e,u,t,aN(s,xu)).next((d=>d)))}))}bs(e,t){let r=new Vt(s0(e));return t.forEach(((s,a)=>{Hd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Ta()<=Be.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ia(t)),this.gs.getDocumentsMatchingQuery(e,t,ws.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Vg="LocalStore",jx=3e8;class Bx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new xt(Le),this.Ms=new Ao((a=>Ag(a)),kg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Px(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function zx(n,e,t,r){return new Bx(n,e,t,r)}async function P0(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=ze();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function $x(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const E=m.batch,T=E.keys();let P=Q.resolve();return T.forEach((L=>{P=P.next((()=>y.getEntry(f,L))).next((M=>{const V=m.docVersions.get(L);Xe(V!==null,48541),M.version.compareTo(V)<0&&(E.applyToRemoteDocument(M,m),M.isValidDocument()&&(M.setReadTime(m.commitVersion),y.addEntry(M)))}))})),P.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=ze();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function N0(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Wx(n,e){const t=be(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,E))));let P=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(en.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):y.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(y.resumeToken,r)),s=s.insert(E,P),(function(M,V,re){return M.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=jx?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(T,P,y)&&d.push(t.hi.updateTargetData(a,P))}));let f=Ai(),m=ze();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Hx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(xe.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return Q.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Hx(n,e,t){let r=ze(),s=ze();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Ai();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(xe.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ce(Vg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function qx(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Cg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Gx(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Q.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new ls(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Lm(n,e,t){const r=be(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!rl(u))throw u;ce(Vg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function gw(n,e,t){const r=be(n);let s=xe.min(),a=ze();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const E=be(f),T=E.Ms.get(y);return T!==void 0?Q.resolve(E.Fs.get(T)):E.hi.getTargetData(m,y)})(r,u,Br(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:xe.min(),t?a:ze()))).next((d=>(Kx(r,DN(e),d),{documents:d,qs:a})))))}function Kx(n,e,t){let r=n.xs.get(e)||xe.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class _w{constructor(){this.activeTargetIds=UN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qx{constructor(){this.Fo=new _w,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new _w,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yx{xo(e){}shutdown(){}}/**
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
 */const yw="ConnectivityMonitor";class vw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(yw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(yw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kh=null;function Mm(){return kh===null?kh=(function(){return 268435456+Math.round(2147483648*Math.random())})():kh++,"0x"+kh.toString(16)}/**
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
 */const nm="RestConnection",Xx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===rd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Mm(),d=this.Go(e,t.toUriEncodedString());ce(nm,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=Kr(m);return this.jo(e,d,f,r,y).then((E=>(ce(nm,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Es(nm,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+tl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Xx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class eb extends Jx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Mm();return new Promise(((d,f)=>{const m=new xI;m.setWithCredentials(!0),m.listenOnce(bI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Vh.NO_ERROR:const E=m.getResponseJson();ce(an,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Vh.TIMEOUT:ce(an,`RPC '${e}' ${u} timed out`),f(new ae(G.DEADLINE_EXCEEDED,"Request time out"));break;case Vh.HTTP_ERROR:const T=m.getStatus();if(ce(an,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let P=m.getResponseJson();Array.isArray(P)&&(P=P[0]);const L=P==null?void 0:P.error;if(L&&L.status&&L.message){const M=(function(re){const $=re.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf($)>=0?$:G.UNKNOWN})(L.status);f(new ae(M,L.message))}else f(new ae(G.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new ae(G.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ce(an,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ce(an,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=Mm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=LI(),d=OI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ce(an,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);this.T_(E);let T=!1,P=!1;const L=new Zx({Ho:V=>{P?ce(an,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(T||(ce(an,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),ce(an,`RPC '${e}' stream ${s} sending:`,V),E.send(V))},Yo:()=>E.close()}),M=(V,re,$)=>{V.listen(re,(X=>{try{$(X)}catch(q){setTimeout((()=>{throw q}),0)}}))};return M(E,cu.EventType.OPEN,(()=>{P||(ce(an,`RPC '${e}' stream ${s} transport opened.`),L.s_())})),M(E,cu.EventType.CLOSE,(()=>{P||(P=!0,ce(an,`RPC '${e}' stream ${s} transport closed`),L.__(),this.I_(E))})),M(E,cu.EventType.ERROR,(V=>{P||(P=!0,Es(an,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),L.__(new ae(G.UNAVAILABLE,"The operation could not be completed")))})),M(E,cu.EventType.MESSAGE,(V=>{var re;if(!P){const $=V.data[0];Xe(!!$,16349);const X=$,q=(X==null?void 0:X.error)||((re=X[0])===null||re===void 0?void 0:re.error);if(q){ce(an,`RPC '${e}' stream ${s} received error:`,q);const we=q.status;let he=(function(R){const N=Rt[R];if(N!==void 0)return _0(N)})(we),b=q.message;he===void 0&&(he=G.INTERNAL,b="Unknown error status: "+we+" with message "+q.message),P=!0,L.__(new ae(he,b)),E.close()}else ce(an,`RPC '${e}' stream ${s} received:`,$),L.a_($)}})),M(d,DI.STAT_EVENT,(V=>{V.stat===Im.PROXY?ce(an,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Im.NOPROXY&&ce(an,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{L.o_()}),0),L}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function rm(){return typeof document<"u"?document:null}/**
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
 */function Qd(n){return new ix(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="PersistentStream";class b0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new x0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Ri(t.toString()),Ri("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new ae(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(Ew,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(Ew,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tb extends b0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ax(this.serializer,e),r=(function(a){if(!("targetChange"in a))return xe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?xe.min():u.readTime?$r(u.readTime):xe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Om(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Pm(f)?{documents:cx(a,f)}:{query:hx(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=E0(a,u.resumeToken);const m=xm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(xe.min())>0){d.readTime=ud(a,u.snapshotVersion.toTimestamp());const m=xm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=fx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Om(this.serializer),t.removeTarget=e,this.k_(t)}}class nb extends b0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=ux(e.writeResults,e.commitTime),r=$r(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Om(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>lx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{}class ib extends rb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,bm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ae(G.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,bm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(G.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class sb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ri(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="RemoteStore";class ob{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{ko(this)&&(ce(vo,"Restarting streams for network reachability change."),await(async function(f){const m=be(f);m.Ia.add(4),await tc(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Yd(m)})(this))}))})),this.Aa=new sb(r,s)}}async function Yd(n){if(ko(n))for(const e of n.da)await e(!0)}async function tc(n){for(const e of n.da)await e(!1)}function D0(n,e){const t=be(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Bg(t)?jg(t):sl(t).x_()&&Ug(t,e))}function Fg(n,e){const t=be(n),r=sl(t);t.Ta.delete(e),r.x_()&&O0(t,e),t.Ta.size===0&&(r.x_()?r.B_():ko(t)&&t.Aa.set("Unknown"))}function Ug(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sl(n).H_(e)}function O0(n,e){n.Ra.$e(e),sl(n).Y_(e)}function jg(n){n.Ra=new ex({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),sl(n).start(),n.Aa.aa()}function Bg(n){return ko(n)&&!sl(n).M_()&&n.Ta.size>0}function ko(n){return be(n).Ia.size===0}function L0(n){n.Ra=void 0}async function ab(n){n.Aa.set("Online")}async function lb(n){n.Ta.forEach(((e,t)=>{Ug(n,e)}))}async function ub(n,e){L0(n),Bg(n)?(n.Aa.la(e),jg(n)):n.Aa.set("Unknown")}async function cb(n,e,t){if(n.Aa.set("Online"),e instanceof v0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ce(vo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hd(n,r)}else if(e instanceof Bh?n.Ra.Ye(e):e instanceof y0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(xe.min()))try{const r=await N0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(en.EMPTY_BYTE_STRING,y.snapshotVersion)),O0(a,f);const E=new ls(y.target,f,m,y.sequenceNumber);Ug(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ce(vo,"Failed to raise snapshot:",r),await hd(n,r)}}async function hd(n,e,t){if(!rl(e))throw e;n.Ia.add(1),await tc(n),n.Aa.set("Offline"),t||(t=()=>N0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(vo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Yd(n)}))}function M0(n,e){return e().catch((t=>hd(n,t,e)))}async function Xd(n){const e=be(n),t=Ss(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Cg;for(;hb(e);)try{const s=await qx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,db(e,s)}catch(s){await hd(e,s)}V0(e)&&F0(e)}function hb(n){return ko(n)&&n.Pa.length<10}function db(n,e){n.Pa.push(e);const t=Ss(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function V0(n){return ko(n)&&!Ss(n).M_()&&n.Pa.length>0}function F0(n){Ss(n).start()}async function fb(n){Ss(n).na()}async function pb(n){const e=Ss(n);for(const t of n.Pa)e.X_(t.mutations)}async function mb(n,e,t){const r=n.Pa.shift(),s=xg.from(r,e,t);await M0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Xd(n)}async function gb(n,e){e&&Ss(n).Z_&&await(async function(r,s){if((function(u){return JN(u)&&u!==G.ABORTED})(s.code)){const a=r.Pa.shift();Ss(r).N_(),await M0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Xd(r)}})(n,e),V0(n)&&F0(n)}async function ww(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),ce(vo,"RemoteStore received new credentials");const r=ko(t);t.Ia.add(3),await tc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yd(t)}async function _b(n,e){const t=be(n);e?(t.Ia.delete(2),await Yd(t)):e||(t.Ia.add(2),await tc(t),t.Aa.set("Unknown"))}function sl(n){return n.Va||(n.Va=(function(t,r,s){const a=be(t);return a.ia(),new tb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:ab.bind(null,n),e_:lb.bind(null,n),n_:ub.bind(null,n),J_:cb.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Bg(n)?jg(n):n.Aa.set("Unknown")):(await n.Va.stop(),L0(n))}))),n.Va}function Ss(n){return n.ma||(n.ma=(function(t,r,s){const a=be(t);return a.ia(),new nb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:fb.bind(null,n),n_:gb.bind(null,n),ea:pb.bind(null,n),ta:mb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Xd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(vo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new zg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $g(n,e){if(Ri("AsyncQueue",`${e}: ${n}`),rl(n))return new ae(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{static emptySet(e){return new xa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=hu(),this.sortedSet=new xt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new xa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.fa=new xt(ve.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class $a{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new $a(e,t,xa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vb{constructor(){this.queries=Iw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=be(t),a=s.queries;s.queries=Iw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new ae(G.ABORTED,"Firestore shutting down"))}}function Iw(){return new Ao((n=>i0(n)),Wd)}async function U0(n,e){const t=be(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new yb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=$g(u,`Initialization of query '${Ia(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Wg(t)}async function j0(n,e){const t=be(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Eb(n,e){const t=be(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Wg(t)}function wb(n,e,t){const r=be(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Wg(n){n.Da.forEach((e=>{e.next()}))}var Vm,Cw;(Cw=Vm||(Vm={})).Fa="default",Cw.Cache="cache";class B0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=$a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Vm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.key=e}}class $0{constructor(e){this.key=e}}class Tb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ze(),this.mutatedKeys=ze(),this.Xa=s0(e),this.eu=new xa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Tw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,E)=>{const T=s.get(y),P=Hd(this.query,E)?E:null,L=!!T&&this.mutatedKeys.has(T.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;T&&P?T.data.isEqual(P.data)?L!==M&&(r.track({type:3,doc:P}),V=!0):this.iu(T,P)||(r.track({type:2,doc:P}),V=!0,(f&&this.Xa(P,f)>0||m&&this.Xa(P,m)<0)&&(d=!0)):!T&&P?(r.track({type:0,doc:P}),V=!0):T&&!P&&(r.track({type:1,doc:T}),V=!0,(f||m)&&(d=!0)),V&&(P?(u=u.add(P),a=M?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,E)=>(function(P,L){const M=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:V})}};return M(P)-M(L)})(y.type,E.type)||this.Xa(y.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new $a(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Tw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ze(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new $0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new z0(r))})),t}uu(e){this.Ha=e.qs,this.Za=ze();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return $a.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Hg="SyncEngine";class Ib{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Cb{constructor(e){this.key=e,this.lu=!1}}class Sb{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Ao((d=>i0(d)),Wd),this.Tu=new Map,this.Iu=new Set,this.du=new xt(ve.comparator),this.Eu=new Map,this.Au=new Og,this.Ru={},this.Vu=new Map,this.mu=za.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Rb(n,e,t=!0){const r=Q0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await W0(r,e,t,!0),s}async function Ab(n,e){const t=Q0(n);await W0(t,e,!0,!1)}async function W0(n,e,t,r){const s=await Gx(n.localStore,Br(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await kb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&D0(n.remoteStore,s),d}async function kb(n,e,t,r,s){n.gu=(E,T,P)=>(async function(M,V,re,$){let X=V.view.nu(re);X.Ds&&(X=await gw(M.localStore,V.query,!1).then((({documents:b})=>V.view.nu(b,X))));const q=$&&$.targetChanges.get(V.targetId),we=$&&$.targetMismatches.get(V.targetId)!=null,he=V.view.applyChanges(X,M.isPrimaryClient,q,we);return Rw(M,V.targetId,he._u),he.snapshot})(n,E,T,P);const a=await gw(n.localStore,e,!0),u=new Tb(e,a.qs),d=u.nu(a.documents),f=ec.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);Rw(n,t,m._u);const y=new Ib(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function Pb(n,e,t){const r=be(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Wd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Fg(r.remoteStore,s.targetId),Fm(r,s.targetId)})).catch(nl)):(Fm(r,s.targetId),await Lm(r.localStore,s.targetId,!0))}async function Nb(n,e){const t=be(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Fg(t.remoteStore,r.targetId))}async function xb(n,e,t){const r=Fb(n);try{const s=await(function(u,d){const f=be(u),m=ct.now(),y=d.reduce(((P,L)=>P.add(L.key)),ze());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let L=Ai(),M=ze();return f.Os.getEntries(P,y).next((V=>{L=V,L.forEach(((re,$)=>{$.isValidDocument()||(M=M.add(re))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,L))).next((V=>{E=V;const re=[];for(const $ of d){const X=GN($,E.get($.key).overlayedDocument);X!=null&&re.push(new bs($.key,X,YI(X.value.mapValue),zr.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,re,d)})).next((V=>{T=V;const re=V.applyToLocalDocumentSet(E,M);return f.documentOverlayCache.saveOverlays(P,V.batchId,re)}))})).then((()=>({batchId:T.batchId,changes:a0(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new xt(Le)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await nc(r,s.changes),await Xd(r.remoteStore)}catch(s){const a=$g(s,"Failed to persist write");t.reject(a)}}async function H0(n,e){const t=be(n);try{const r=await Wx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?Xe(u.lu,14607):s.removedDocuments.size>0&&(Xe(u.lu,42227),u.lu=!1))})),await nc(t,r,e)}catch(r){await nl(r)}}function Sw(n,e,t){const r=be(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=be(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&Wg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bb(n,e,t){const r=be(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new xt(ve.comparator);u=u.insert(a,un.newNoDocument(a,xe.min()));const d=ze().add(a),f=new Kd(xe.min(),new Map,new xt(Le),u,d);await H0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),qg(r)}else await Lm(r.localStore,e,!1).then((()=>Fm(r,e,t))).catch(nl)}async function Db(n,e){const t=be(n),r=e.batch.batchId;try{const s=await $x(t.localStore,e);G0(t,r,null),q0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await nc(t,s)}catch(s){await nl(s)}}async function Ob(n,e,t){const r=be(n);try{const s=await(function(u,d){const f=be(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(Xe(E!==null,37113),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);G0(r,e,t),q0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await nc(r,s)}catch(s){await nl(s)}}function q0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function G0(n,e,t){const r=be(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Fm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||K0(n,r)}))}function K0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Fg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),qg(n))}function Rw(n,e,t){for(const r of t)r instanceof z0?(n.Au.addReference(r.key,e),Lb(n,r)):r instanceof $0?(ce(Hg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||K0(n,r.key)):Ae(19791,{yu:r})}function Lb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ce(Hg,"New document in limbo: "+t),n.Iu.add(r),qg(n))}function qg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ve(ot.fromString(e)),r=n.mu.next();n.Eu.set(r,new Cb(t)),n.du=n.du.insert(t,r),D0(n.remoteStore,new ls(Br(Pg(t.path)),r,"TargetPurposeLimboResolution",Bd.ue))}}async function nc(n,e,t){const r=be(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Mg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=be(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>Q.forEach(m,(T=>Q.forEach(T.Is,(P=>y.persistence.referenceDelegate.addReference(E,T.targetId,P))).next((()=>Q.forEach(T.ds,(P=>y.persistence.referenceDelegate.removeReference(E,T.targetId,P)))))))))}catch(E){if(!rl(E))throw E;ce(Vg,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const P=y.Fs.get(T),L=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(L);y.Fs=y.Fs.insert(T,M)}}})(r.localStore,a))}async function Mb(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){ce(Hg,"User change. New user:",e.toKey());const r=await P0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new ae(G.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nc(t,r.Bs)}}function Vb(n,e){const t=be(n),r=t.Eu.get(e);if(r&&r.lu)return ze().add(r.key);{let s=ze();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function Q0(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=H0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bb.bind(null,e),e.hu.J_=Eb.bind(null,e.eventManager),e.hu.pu=wb.bind(null,e.eventManager),e}function Fb(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}class dd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return zx(this.persistence,new Ux,e.initialUser,this.serializer)}Du(e){return new k0(Lg.Vi,this.serializer)}bu(e){return new Qx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dd.provider={build:()=>new dd};class Ub extends dd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Xe(this.persistence.referenceDelegate instanceof cd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Cx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new k0((r=>cd.Vi(r,t)),this.serializer)}}class Um{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mb.bind(null,this.syncEngine),await _b(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vb})()}createDatastore(e){const t=Qd(e.databaseInfo.databaseId),r=(function(a){return new eb(a)})(e.databaseInfo);return(function(a,u,d,f){return new ib(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new ob(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Sw(this.syncEngine,t,0)),(function(){return vw.C()?new vw:new Yx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const E=new Sb(s,a,u,d,f,m);return y&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=be(s);ce(vo,"RemoteStore shutting down."),a.Ia.add(5),await tc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Um.provider={build:()=>new Um};/**
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
 */class Y0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ri("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="FirestoreClient";class jb{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ln.UNAUTHENTICATED,this.clientId=Ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(Rs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(Rs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$g(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function im(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Rs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await P0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Es("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Es("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Aw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Bb(n);ce(Rs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ww(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ww(e.remoteStore,s))),n._onlineComponents=e}async function Bb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Rs,"Using user provided OfflineComponentProvider");try{await im(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Es("Error using user provided cache. Falling back to memory cache: "+t),await im(n,new dd)}}else ce(Rs,"Using default OfflineComponentProvider"),await im(n,new Ub(void 0));return n._offlineComponents}async function X0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Rs,"Using user provided OnlineComponentProvider"),await Aw(n,n._uninitializedComponentsProvider._online)):(ce(Rs,"Using default OnlineComponentProvider"),await Aw(n,new Um))),n._onlineComponents}function zb(n){return X0(n).then((e=>e.syncEngine))}async function jm(n){const e=await X0(n),t=e.eventManager;return t.onListen=Rb.bind(null,e.syncEngine),t.onUnlisten=Pb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ab.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Nb.bind(null,e.syncEngine),t}function $b(n,e,t={}){const r=new fs;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new Y0({next:T=>{y.Ou(),u.enqueueAndForget((()=>j0(a,E))),T.fromCache&&f.source==="server"?m.reject(new ae(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new B0(d,y,{includeMetadataChanges:!0,ka:!0});return U0(a,E)})(await jm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function J0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const kw=new Map;/**
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
 */const Z0="firestore.googleapis.com",Pw=!0;class Nw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Z0,this.ssl=Pw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Pw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=A0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Tx)throw new ae(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new YP;switch(r.type){case"firstParty":return new eN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=kw.get(t);r&&(ce("ComponentProvider","Removing Datastore"),kw.delete(t),r.terminate())})(this),Promise.resolve()}}function Wb(n,e,t,r={}){var s;n=Ei(n,Jd);const a=Kr(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(xd(`https://${f}`),bd("Firestore",!0)),u.host!==Z0&&u.host!==f&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Ti(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=ln.MOCK_USER;else{y=cg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ae(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new ln(T)}n._authCredentials=new XP(new VI(y,E))}}/**
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
 */class Ni{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ju(t,Nt._jsonSchema))return new Nt(e,r||null,new ve(ot.fromString(t.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:Pt("string",Nt._jsonSchemaVersion),referencePath:Pt("string")};class ms extends Ni{constructor(e,t,r){super(e,t,Pg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new ve(e))}withConverter(e){return new ms(this.firestore,e,this._path)}}function Eo(n,e,...t){if(n=Je(n),UI("collection","path",e),n instanceof Jd){const r=ot.fromString(e,...t);return $E(r),new ms(n,null,r)}{if(!(n instanceof Nt||n instanceof ms))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(e,...t));return $E(r),new ms(n.firestore,null,r)}}function fd(n,e,...t){if(n=Je(n),arguments.length===1&&(e=Ig.newId()),UI("doc","path",e),n instanceof Jd){const r=ot.fromString(e,...t);return zE(r),new Nt(n,null,new ve(r))}{if(!(n instanceof Nt||n instanceof ms))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(e,...t));return zE(r),new Nt(n.firestore,n instanceof ms?n.converter:null,new ve(r))}}/**
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
 */const xw="AsyncQueue";class bw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new x0(this,"async_queue_retry"),this.oc=()=>{const r=rm();r&&ce(xw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=rm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=rm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new fs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rl(e))throw e;ce(xw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ri("INTERNAL UNHANDLED ERROR: ",Dw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=zg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ae(47125,{hc:Dw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Dw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Ow(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Wa extends Jd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bw(e),this._firestoreClient=void 0,await e}}}function Hb(n,e){const t=typeof n=="object"?n:Ld(),r=typeof n=="string"?n:rd,s=Ku(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=ug("firestore");a&&Wb(s,...a)}return s}function Gg(n){if(n._terminated)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qb(n),n._firestoreClient}function qb(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new _N(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,J0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new jb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(en.fromBase64String(e))}catch(t){throw new ae(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ju(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Pt("string",Xn._jsonSchemaVersion),bytes:Pt("string")};/**
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
 */class Zd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ef{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wr._jsonSchemaVersion}}static fromJSON(e){if(Ju(e,Wr._jsonSchema))return new Wr(e.latitude,e.longitude)}}Wr._jsonSchemaVersion="firestore/geoPoint/1.0",Wr._jsonSchema={type:Pt("string",Wr._jsonSchemaVersion),latitude:Pt("number"),longitude:Pt("number")};/**
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
 */class Hr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Hr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ju(e,Hr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Hr(e.vectorValues);throw new ae(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hr._jsonSchemaVersion="firestore/vectorValue/1.0",Hr._jsonSchema={type:Pt("string",Hr._jsonSchemaVersion),vectorValues:Pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^__.*__$/;class Kb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zu(e,this.data,t,this.fieldTransforms)}}class eC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new bs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class tf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return pd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(tC(this.Ec)&&Gb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Qb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qd(e)}Dc(e,t,r,s=!1){return new tf({Ec:e,methodName:t,bc:r,path:Zt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kg(n){const e=n._freezeSettings(),t=Qd(n._databaseId);return new Qb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yb(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Yg("Data must be an object, but it was:",u,r);const d=nC(r,u);let f,m;if(a.merge)f=new Fn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const T=Bm(e,E,t);if(!u.contains(T))throw new ae(G.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);iC(y,T)||y.push(T)}f=new Fn(y),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new Kb(new Rn(d),f,m)}class nf extends ef{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nf}}function Xb(n,e,t){return new tf({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Qg extends ef{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Xb(this,e,!0),r=this.vc.map((a=>ol(a,t))),s=new Ba(r);return new $N(e.path,s)}isEqual(e){return e instanceof Qg&&Ti(this.vc,e.vc)}}function Jb(n,e,t,r){const s=n.Dc(1,e,t);Yg("Data must be an object, but it was:",s,r);const a=[],u=Rn.empty();xs(r,((f,m)=>{const y=Xg(e,f,t);m=Je(m);const E=s.gc(y);if(m instanceof nf)a.push(y);else{const T=ol(m,E);T!=null&&(a.push(y),u.set(y,T))}}));const d=new Fn(a);return new eC(u,d,s.fieldTransforms)}function Zb(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Bm(e,r,t)],f=[s];if(a.length%2!=0)throw new ae(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Bm(e,a[T])),f.push(a[T+1]);const m=[],y=Rn.empty();for(let T=d.length-1;T>=0;--T)if(!iC(m,d[T])){const P=d[T];let L=f[T];L=Je(L);const M=u.gc(P);if(L instanceof nf)m.push(P);else{const V=ol(L,M);V!=null&&(m.push(P),y.set(P,V))}}const E=new Fn(m);return new eC(y,E,u.fieldTransforms)}function eD(n,e,t,r=!1){return ol(t,n.Dc(r?4:3,e))}function ol(n,e){if(rC(n=Je(n)))return Yg("Unsupported field value:",e,n),nC(n,e);if(n instanceof ef)return(function(r,s){if(!tC(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=ol(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ct.fromDate(r);return{timestampValue:ud(s.serializer,a)}}if(r instanceof ct){const a=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ud(s.serializer,a)}}if(r instanceof Wr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xn)return{bytesValue:E0(s.serializer,r._byteString)};if(r instanceof Nt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Dg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hr)return(function(u,d){return{mapValue:{fields:{[KI]:{stringValue:QI},[id]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Ng(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${jd(r)}`)})(n,e)}function nC(n,e){const t={};return zI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(n,((r,s)=>{const a=ol(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function rC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof Wr||n instanceof Xn||n instanceof Nt||n instanceof ef||n instanceof Hr)}function Yg(n,e,t){if(!rC(t)||!jI(t)){const r=jd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Bm(n,e,t){if((e=Je(e))instanceof Zd)return e._internalPath;if(typeof e=="string")return Xg(n,e);throw pd("Field path arguments must be of type string or ",n,!1,void 0,t)}const tD=new RegExp("[~\\*/\\[\\]]");function Xg(n,e,t){if(e.search(tD)>=0)throw pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zd(...e.split("."))._internalPath}catch{throw pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ae(G.INVALID_ARGUMENT,d+n+f)}function iC(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class sC{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nD extends sC{data(){return super.data()}}function rf(n,e){return typeof e=="string"?Xg(n,e):e instanceof Zd?e._internalPath:e._delegate._internalPath}/**
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
 */function oC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jg{}class Zg extends Jg{}function Ha(n,e,...t){let r=[];e instanceof Jg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof e_)).length,d=a.filter((f=>f instanceof sf)).length;if(u>1||u>0&&d>0)throw new ae(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class sf extends Zg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sf(e,t,r)}_apply(e){const t=this._parse(e);return lC(e._query,t),new Ni(e.firestore,e.converter,Nm(e._query,t))}_parse(e){const t=Kg(e.firestore);return(function(a,u,d,f,m,y,E){let T;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ae(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Mw(E,y);const L=[];for(const M of E)L.push(Lw(f,a,M));T={arrayValue:{values:L}}}else T=Lw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Mw(E,y),T=eD(d,u,E,y==="in"||y==="not-in");return kt.create(m,y,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aC(n,e,t){const r=e,s=rf("where",n);return sf._create(s,r,t)}class e_ extends Jg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new e_(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ir.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)lC(u,f),u=Nm(u,f)})(e._query,t),new Ni(e.firestore,e.converter,Nm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class t_ extends Zg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new t_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Lu(a,u)})(e._query,this._field,this._direction);return new Ni(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new il(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Vu(n,e="asc"){const t=e,r=rf("orderBy",n);return t_._create(r,t)}class n_ extends Zg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n_(e,t,r)}_apply(e){return new Ni(e.firestore,e.converter,od(e._query,this._limit,this._limitType))}}function Fu(n){return oN("limit",n),n_._create("limit",n,"F")}function Lw(n,e,t){if(typeof(t=Je(t))=="string"){if(t==="")throw new ae(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r0(e)&&t.indexOf("/")!==-1)throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ot.fromString(t));if(!ve.isDocumentKey(r))throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return XE(n,new ve(r))}if(t instanceof Nt)return XE(n,t._key);throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jd(t)}.`)}function Mw(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lC(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rD{convertValue(e,t="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return xs(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[id].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>wt(u.doubleValue)));return new Hr(a)}convertGeoPoint(e){return new Wr(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$d(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bu(e));default:return null}}convertTimestamp(e){const t=Ts(e);return new ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ot.fromString(e);Xe(R0(r),9688,{name:e});const s=new Du(r.get(1),r.get(3)),a=new ve(r.popFirst(5));return s.isEqual(t)||Ri(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function iD(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fo extends sC{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fo._jsonSchemaVersion="firestore/documentSnapshot/1.0",fo._jsonSchema={type:Pt("string",fo._jsonSchemaVersion),bundleSource:Pt("string","DocumentSnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class zh extends fo{data(e={}){return super.data(e)}}class po{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new zh(this._firestore,this._userDataWriter,r.key,r,new fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new zh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new zh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:sD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ig.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:Pt("string",po._jsonSchemaVersion),bundleSource:Pt("string","QuerySnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class r_ extends rD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,t)}}function oD(n){n=Ei(n,Ni);const e=Ei(n.firestore,Wa),t=Gg(e),r=new r_(e);return oC(n._query),$b(t,n._query).then((s=>new po(e,r,n,s)))}function zm(n,e,t,...r){n=Ei(n,Nt);const s=Ei(n.firestore,Wa),a=Kg(s);let u;return u=typeof(e=Je(e))=="string"||e instanceof Zd?Zb(a,"updateDoc",n._key,e,t,r):Jb(a,"updateDoc",n._key,e),uC(s,[u.toMutation(n._key,zr.exists(!0))])}function aD(n,e){const t=Ei(n.firestore,Wa),r=fd(n),s=iD(n.converter,e);return uC(t,[Yb(Kg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,zr.exists(!1))]).then((()=>r))}function Uu(n,...e){var t,r,s;n=Je(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Ow(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Ow(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof Nt)m=Ei(n.firestore,Wa),y=Pg(n._key.path),f={next:E=>{e[u]&&e[u](lD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=Ei(n,Ni);m=Ei(E.firestore,Wa),y=E._query;const T=new r_(m);f={next:P=>{e[u]&&e[u](new po(m,T,E,P))},error:e[u+1],complete:e[u+2]},oC(n._query)}return(function(T,P,L,M){const V=new Y0(M),re=new B0(P,V,L);return T.asyncQueue.enqueueAndForget((async()=>U0(await jm(T),re))),()=>{V.Ou(),T.asyncQueue.enqueueAndForget((async()=>j0(await jm(T),re)))}})(Gg(m),y,d,f)}function uC(n,e){return(function(r,s){const a=new fs;return r.asyncQueue.enqueueAndForget((async()=>xb(await zb(r),s,a))),a.promise})(Gg(n),e)}function lD(n,e,t){const r=t.docs.get(e._key),s=new r_(n);return new fo(n,s,e._key,r,new fu(t.hasPendingWrites,t.fromCache),e.converter)}function uD(...n){return new Qg("arrayUnion",n)}(function(e,t=!0){(function(s){tl=s})(Ps),vs(new Ii("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Wa(new JP(r.getProvider("auth-internal")),new tN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ae(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),er(VE,FE,e),er(VE,FE,"esm2017")})();var Vw={};const Fw="@firebase/database",Uw="1.0.20";/**
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
 */let cC="";function cD(n){cC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Gt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Au(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Yr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hD(e)}}catch{}return new dD},co=hC("localStorage"),fD=hC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Od("@firebase/database"),pD=(function(){let n=1;return function(){return n++}})(),dC=function(n){const e=AA(n),t=new IA;t.update(e);const r=t.digest();return lg.encodeByteArray(r)},rc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=rc.apply(null,r):typeof r=="object"?e+=Gt(r):e+=r,e+=" "}return e};let wu=null,jw=!0;const mD=function(n,e){se(!0,"Can't turn on custom loggers persistently."),ba.logLevel=Be.VERBOSE,wu=ba.log.bind(ba)},Jt=function(...n){if(jw===!0&&(jw=!1,wu===null&&fD.get("logging_enabled")===!0&&mD()),wu){const e=rc.apply(null,n);wu(e)}},ic=function(n){return function(...e){Jt(n,...e)}},$m=function(...n){const e="FIREBASE INTERNAL ERROR: "+rc(...n);ba.error(e)},ki=function(...n){const e=`FIREBASE FATAL ERROR: ${rc(...n)}`;throw ba.error(e),new Error(e)},Pn=function(...n){const e="FIREBASE WARNING: "+rc(...n);ba.warn(e)},gD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},of=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_D=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},qa="[MIN_NAME]",wo="[MAX_NAME]",Po=function(n,e){if(n===e)return 0;if(n===qa||e===wo)return-1;if(e===qa||n===wo)return 1;{const t=Bw(n),r=Bw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},yD=function(n,e){return n===e?0:n<e?-1:1},nu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Gt(e))},i_=function(n){if(typeof n!="object"||n===null)return Gt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Gt(e[r]),t+=":",t+=i_(n[e[r]]);return t+="}",t},fC=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function hn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const pC=function(n){se(!of(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},vD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ED=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const TD=new RegExp("^-?(0*)\\d{1,10}$"),ID=-2147483648,CD=2147483647,Bw=function(n){if(TD.test(n)){const e=Number(n);if(e>=ID&&e<=CD)return e}return null},al=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Pn("Exception was thrown by user callback.",t),e},Math.floor(0))}},SD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class RD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Vn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pn(e)}}class $h{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$h.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="5",mC="v",gC="s",_C="r",yC="f",vC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,EC="ls",wC="p",Wm="ac",TC="websocket",IC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=co.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&co.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function kD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function SC(n,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let r;if(e===TC)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===IC)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kD(n)&&(t.ns=n.namespace);const s=[];return hn(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.counters_={}}incrementCounter(e,t=1){Yr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return nA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={},om={};function o_(n){const e=n.toString();return sm[e]||(sm[e]=new PD),sm[e]}function ND(n,e){const t=n.toString();return om[t]||(om[t]=e()),om[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&al(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="start",bD="close",DD="pLPCommand",OD="pRTLPCB",RC="id",AC="pw",kC="ser",LD="cb",MD="seg",VD="ts",FD="d",UD="dframe",PC=1870,NC=30,jD=PC-NC,BD=25e3,zD=3e4;class Aa{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ic(e),this.stats_=o_(t),this.urlFn=f=>(this.appCheckToken&&(f[Wm]=this.appCheckToken),SC(t,IC,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zD)),_D(()=>{if(this.isClosed_)return;this.scriptTagHolder=new a_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===zw)this.id=d,this.password=f;else if(u===bD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[zw]="t",r[kC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mC]=s_,this.transportSessionId&&(r[gC]=this.transportSessionId),this.lastSessionId&&(r[EC]=this.lastSessionId),this.applicationId&&(r[wC]=this.applicationId),this.appCheckToken&&(r[Wm]=this.appCheckToken),typeof location<"u"&&location.hostname&&vC.test(location.hostname)&&(r[_C]=yC);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Aa.forceAllow_=!0}static forceDisallow(){Aa.forceDisallow_=!0}static isAvailable(){return Aa.forceAllow_?!0:!Aa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vD()&&!ED()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Gt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=FT(t),s=fC(r,jD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[UD]="t",r[RC]=e,r[AC]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Gt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class a_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pD(),window[DD+this.uniqueCallbackIdentifier]=e,window[OD+this.uniqueCallbackIdentifier]=t,this.myIFrame=a_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Jt("frame writing exception"),d.stack&&Jt(d.stack),Jt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[RC]=this.myID,e[AC]=this.myPW,e[kC]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+NC+r.length<=PC;){const u=this.pendingSegs.shift();r=r+"&"+MD+s+"="+u.seg+"&"+VD+s+"="+u.ts+"&"+FD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(BD)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=16384,WD=45e3;let md=null;typeof MozWebSocket<"u"?md=MozWebSocket:typeof WebSocket<"u"&&(md=WebSocket);class yr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ic(this.connId),this.stats_=o_(t),this.connURL=yr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[mC]=s_,typeof location<"u"&&location.hostname&&vC.test(location.hostname)&&(u[_C]=yC),t&&(u[gC]=t),r&&(u[EC]=r),s&&(u[Wm]=s),a&&(u[wC]=a),SC(e,TC,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,co.set("previous_websocket_failure",!0);try{let r;pA(),this.mySock=new md(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){yr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&md!==null&&!yr.forceDisallow_}static previouslyFailed(){return co.isInMemoryStorage||co.get("previous_websocket_failure")===!0}markConnectionHealthy(){co.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Au(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Gt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=fC(t,$D);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yr.responsesRequiredToBeHealthy=2;yr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static get ALL_TRANSPORTS(){return[Aa,yr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=yr&&yr.isAvailable();let r=t&&!yr.previouslyFailed();if(e.webSocketOnly&&(t||Pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[yr];else{const s=this.transports_=[];for(const a of ju.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);ju.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ju.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=6e4,qD=5e3,GD=10*1024,KD=100*1024,am="t",$w="d",QD="s",Ww="r",YD="e",Hw="o",qw="a",Gw="n",Kw="p",XD="h";class JD{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ic("c:"+this.id+":"),this.transportManager_=new ju(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Tu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(am in e){const t=e[am];t===qw?this.upgradeIfSecondaryHealthy_():t===Ww?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Hw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nu(am,e);if($w in e){const r=e[$w];if(t===XD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Gw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===QD?this.onConnectionShutdown_(r):t===Ww?this.onReset_(r):t===YD?$m("Server Error: "+r):t===Hw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$m("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),s_!==r&&Pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Tu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(co.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends bC{static getInstance(){return new gd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=32,Yw=768;class tt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new tt("")}function Me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function As(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new tt(n.pieces_,e)}function l_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ZD(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Bu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function DC(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new tt(e,0)}function Tt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new tt(t,0)}function Fe(n){return n.pieceNum_>=n.pieces_.length}function An(n,e){const t=Me(n),r=Me(e);if(t===null)return e;if(t===r)return An(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eO(n,e){const t=Bu(n,0),r=Bu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Po(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function u_(n,e){if(As(n)!==As(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Jn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(As(n)>As(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class tO{constructor(e,t){this.errorPrefix_=t,this.parts_=Bu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dd(this.parts_[r]);OC(this)}}function nO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Dd(e),OC(n)}function rO(n){const e=n.parts_.pop();n.byteLength_-=Dd(e),n.parts_.length>0&&(n.byteLength_-=1)}function OC(n){if(n.byteLength_>Yw)throw new Error(n.errorPrefix_+"has a key path longer than "+Yw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Qw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qw+") or object contains a cycle "+lo(n))}function lo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends bC{static getInstance(){return new c_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1e3,iO=300*1e3,Xw=30*1e3,sO=1.3,oO=3e4,aO="server_kill",Jw=3;class wi extends xC{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=wi.nextPersistentConnectionId_++,this.log_=ic("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ru,this.maxReconnectDelay_=iO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");c_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Gt(a)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new gi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;wi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Yr(e,"w")){const r=La(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||TA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=wA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Gt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):$m("Unrecognized action received from server: "+Gt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oO&&(this.reconnectDelay_=ru),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+wi.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){se(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new JD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,P=>{Pn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(aO)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Pn(E),f())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gh(this.interruptReasons_)&&(this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>i_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new tt(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jw&&(this.reconnectDelay_=Xw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+cC.replace(/\./g,"-")]=1,hg()?e["framework.cordova"]=1:$T()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gd.getInstance().currentlyOnline();return Gh(this.interruptReasons_)&&e}}wi.nextPersistentConnectionId_=0;wi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class af{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ue(qa,e),s=new Ue(qa,t);return this.compare(r,s)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;class LC extends af{static get __EMPTY_NODE(){return Ph}static set __EMPTY_NODE(e){Ph=e}compare(e,t){return Po(e.name,t.name)}isDefinedOn(e){throw Xa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(wo,Ph)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,Ph)}toString(){return".key"}}const Da=new LC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??qt.RED,this.left=s??kn.EMPTY_NODE,this.right=a??kn.EMPTY_NODE}copy(e,t,r,s,a){return new qt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return kn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qt.RED=!0;qt.BLACK=!1;class lO{copy(e,t,r,s,a){return this}insert(e,t,r){return new qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kn{constructor(e,t=kn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new kn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new kn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nh(this.root_,null,this.comparator_,!0,e)}}kn.EMPTY_NODE=new lO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(n,e){return Po(n.name,e.name)}function h_(n,e){return Po(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm;function cO(n){Hm=n}const MC=function(n){return typeof n=="number"?"number:"+pC(n):"string:"+n},VC=function(n){if(n.isLeafNode()){const e=n.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yr(e,".sv"),"Priority must be a string or number.")}else se(n===Hm||n.isEmpty(),"priority of unexpected type.");se(n===Hm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zw;class Wt{static set __childrenNodeConstructor(e){Zw=e}static get __childrenNodeConstructor(){return Zw}constructor(e,t=Wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),VC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fe(e)?this:Me(e)===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Me(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(se(r!==".priority"||As(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+MC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pC(this.value_):e+=this.value_,this.lazyHash_=dC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Wt.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Wt.VALUE_TYPE_ORDER.indexOf(t),a=Wt.VALUE_TYPE_ORDER.indexOf(r);return se(s>=0,"Unknown leaf type: "+t),se(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FC,UC;function hO(n){FC=n}function dO(n){UC=n}class fO extends af{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Po(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(wo,new Wt("[PRIORITY-POST]",UC))}makePost(e,t){const r=FC(e);return new Ue(t,new Wt("[PRIORITY-POST]",r))}toString(){return".priority"}}const mt=new fO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=Math.log(2);class mO{constructor(e){const t=a=>parseInt(Math.log(a)/pO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _d=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,T;if(y===0)return null;if(y===1)return E=n[f],T=t?t(E):E,new qt(T,E.node,qt.BLACK,null,null);{const P=parseInt(y/2,10)+f,L=s(f,P),M=s(P+1,m);return E=n[P],T=t?t(E):E,new qt(T,E.node,qt.BLACK,L,M)}},a=function(f){let m=null,y=null,E=n.length;const T=function(L,M){const V=E-L,re=E;E-=L;const $=s(V+1,re),X=n[V],q=t?t(X):X;P(new qt(q,X.node,M,null,$))},P=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<f.count;++L){const M=f.nextBitIsOne(),V=Math.pow(2,f.count-(L+1));M?T(V,qt.BLACK):(T(V,qt.BLACK),T(V,qt.RED))}return y},u=new mO(n.length),d=a(u);return new kn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lm;const Ea={};class vi{static get Default(){return se(Ea&&mt,"ChildrenNode.ts has not been loaded"),lm=lm||new vi({".priority":Ea},{".priority":mt}),lm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=La(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof kn?t:null}hasIndex(e){return Yr(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Da,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Ue.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=_d(r,e.getCompare()):d=Ea;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new vi(y,m)}addToIndexes(e,t){const r=Kh(this.indexes_,(s,a)=>{const u=La(this.indexSet_,a);if(se(u,"Missing index implementation for "+a),s===Ea)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Ue.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),_d(d,u.getCompare())}else return Ea;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Ue(e.name,d))),f.insert(e,e.node)}});return new vi(r,this.indexSet_)}removeFromIndexes(e,t){const r=Kh(this.indexes_,s=>{if(s===Ea)return s;{const a=t.get(e.name);return a?s.remove(new Ue(e.name,a)):s}});return new vi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;class Pe{static get EMPTY_NODE(){return iu||(iu=new Pe(new kn(h_),null,vi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&VC(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||iu}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?iu:t}}getChild(e){const t=Me(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ue(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?iu:this.priorityNode_;return new Pe(s,u,a)}}updateChild(e,t){const r=Me(e);if(r===null)return t;{se(Me(e)!==".priority"||As(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(mt,(u,d)=>{t[u]=d.val(e),r++,a&&Pe.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+MC(this.getPriority().val())+":"),this.forEachChild(mt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":dC(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Ue(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sc?-1:0}withIndex(e){if(e===Da||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Da||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(mt),s=t.getIterator(mt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Da?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gO extends Pe{constructor(){super(new kn(h_),Pe.EMPTY_NODE,vi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const sc=new gO;Object.defineProperties(Ue,{MIN:{value:new Ue(qa,Pe.EMPTY_NODE)},MAX:{value:new Ue(wo,sc)}});LC.__EMPTY_NODE=Pe.EMPTY_NODE;Wt.__childrenNodeConstructor=Pe;cO(sc);dO(sc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=!0;function At(n,e=null){if(n===null)return Pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Wt(t,At(e))}if(!(n instanceof Array)&&_O){const t=[];let r=!1;if(hn(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=At(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Ue(u,f)))}}),t.length===0)return Pe.EMPTY_NODE;const a=_d(t,uO,u=>u.name,h_);if(r){const u=_d(t,mt.getCompare());return new Pe(a,At(e),new vi({".priority":u},{".priority":mt}))}else return new Pe(a,At(e),vi.Default)}else{let t=Pe.EMPTY_NODE;return hn(n,(r,s)=>{if(Yr(n,r)&&r.substring(0,1)!=="."){const a=At(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(At(e))}}hO(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO extends af{constructor(e){super(),this.indexPath_=e,se(!Fe(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Po(e.name,t.name):a}makePost(e,t){const r=At(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ue(t,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,sc);return new Ue(wo,e)}toString(){return Bu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends af{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Po(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const r=At(e);return new Ue(t,r)}toString(){return".value"}}const EO=new vO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(n){return{type:"value",snapshotNode:n}}function Ga(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function zu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function $u(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){se(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(zu(t,d)):se(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Ga(t,r)):u.trackChildChange($u(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(mt,(s,a)=>{t.hasChild(s)||r.trackChildChange(zu(s,a))}),t.isLeafNode()||t.forEachChild(mt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange($u(s,a,u))}else r.trackChildChange(Ga(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Pe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.indexedFilter_=new d_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wu.getStartPost_(e),this.endPost_=Wu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Ue(t,r))||(r=Pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Pe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Pe.EMPTY_NODE);const a=this;return t.forEachChild(mt,(u,d)=>{a.matches(new Ue(u,d))||(s=s.updateImmediateChild(u,Pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Wu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Ue(t,r))||(r=Pe.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Pe.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Pe.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,P)=>E(P,T)}else u=this.index_.getCompare();const d=e;se(d.numChildren()===this.limit_,"");const f=new Ue(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const P=T==null?1:u(T,f);if(y&&!r.isEmpty()&&P>=0)return a!=null&&a.trackChildChange($u(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(zu(t,E));const M=d.updateImmediateChild(t,Pe.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(Ga(T.name,T.node)),M.updateImmediateChild(T.name,T.node)):M}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(zu(m.name,m.node)),a.trackChildChange(Ga(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Pe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qa}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new f_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IO(n){return n.loadsAllData()?new d_(n.getIndex()):n.hasLimit()?new TO(n):new Wu(n)}function eT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===mt?t="$priority":n.index_===EO?t="$value":n.index_===Da?t="$key":(se(n.index_ instanceof yO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Gt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Gt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Gt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Gt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Gt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function tT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==mt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends xC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ic("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=yd.getListenId_(e,r),d={};this.listens_[u]=d;const f=eT(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),La(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=yd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=eT(e._queryParams),r=e._path.toString(),s=new gi;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ja(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Au(d.responseText)}catch{Pn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Pn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return{value:null,children:new Map}}function ll(n,e,t){if(Fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Me(e);n.children.has(r)||n.children.set(r,vd());const s=n.children.get(r);e=rt(e),ll(s,e,t)}}function qm(n,e){if(Fe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(mt,(r,s)=>{ll(n,new tt(r),s)}),qm(n,e)}}else if(n.children.size>0){const t=Me(e);return e=rt(e),n.children.has(t)&&qm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Gm(n,e,t){n.value!==null?t(e,n.value):SO(n,(r,s)=>{const a=new tt(e.toString()+"/"+r);Gm(s,a,t)})}function SO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&hn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=10*1e3,AO=30*1e3,kO=300*1e3;class PO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new RO(e);const r=nT+(AO-nT)*Math.random();Tu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;hn(e,(s,a)=>{a>0&&Yr(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Tu(this.reportStats_.bind(this),Math.floor(Math.random()*2*kO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Er||(Er={}));function BC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Er.ACK_USER_WRITE,this.source=BC()}operationForChild(e){if(Fe(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new tt(e));return new Ed(Ye(),t,this.revert)}}else return se(Me(this.path)===e,"operationForChild called for unrelated child."),new Ed(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.source=e,this.path=t,this.type=Er.LISTEN_COMPLETE}operationForChild(e){return Fe(this.path)?new Hu(this.source,Ye()):new Hu(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Er.OVERWRITE}operationForChild(e){return Fe(this.path)?new To(this.source,Ye(),this.snap.getImmediateChild(e)):new To(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Er.MERGE}operationForChild(e){if(Fe(this.path)){const t=this.children.subtree(new tt(e));return t.isEmpty()?null:t.value?new To(this.source,Ye(),t.value):new qu(this.source,Ye(),t)}else return se(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qu(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(wO(u.childName,u.snapshotNode))}),su(n,s,"child_removed",e,r,t),su(n,s,"child_added",e,r,t),su(n,s,"child_moved",a,r,t),su(n,s,"child_changed",e,r,t),su(n,s,"value",e,r,t),s}function su(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>DO(n,d,f)),u.forEach(d=>{const f=bO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function bO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function DO(n,e,t){if(e.childName==null||t.childName==null)throw Xa("Should only compare child_ events.");const r=new Ue(e.childName,e.snapshotNode),s=new Ue(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,e){return{eventCache:n,serverCache:e}}function Iu(n,e,t,r){return lf(new Io(e,t,r),n.serverCache)}function zC(n,e,t,r){return lf(n.eventCache,new Io(e,t,r))}function Km(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Co(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let um;const OO=()=>(um||(um=new kn(yD)),um);class ut{static fromObject(e){let t=new ut(null);return hn(e,(r,s)=>{t=t.set(new tt(r),s)}),t}constructor(e,t=OO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Fe(e))return null;{const r=Me(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(rt(e),t);return a!=null?{path:Tt(new tt(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Fe(e))return this;{const t=Me(e),r=this.children.get(t);return r!==null?r.subtree(rt(e)):new ut(null)}}set(e,t){if(Fe(e))return new ut(t,this.children);{const r=Me(e),a=(this.children.get(r)||new ut(null)).set(rt(e),t),u=this.children.insert(r,a);return new ut(this.value,u)}}remove(e){if(Fe(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Me(e),r=this.children.get(t);if(r){const s=r.remove(rt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new ut(null):new ut(this.value,a)}else return this}}get(e){if(Fe(e))return this.value;{const t=Me(e),r=this.children.get(t);return r?r.get(rt(e)):null}}setTree(e,t){if(Fe(e))return t;{const r=Me(e),a=(this.children.get(r)||new ut(null)).setTree(rt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new ut(this.value,u)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(Tt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Fe(e))return null;{const a=Me(e),u=this.children.get(a);return u?u.findOnPath_(rt(e),Tt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,r){if(Fe(e))return this;{this.value&&r(t,this.value);const s=Me(e),a=this.children.get(s);return a?a.foreachOnPath_(rt(e),Tt(t,s),r):new ut(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Tt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.writeTree_=e}static empty(){return new wr(new ut(null))}}function Cu(n,e,t){if(Fe(e))return new wr(new ut(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=An(s,e);return a=a.updateChild(u,t),new wr(n.writeTree_.set(s,a))}else{const s=new ut(t),a=n.writeTree_.setTree(e,s);return new wr(a)}}}function rT(n,e,t){let r=n;return hn(t,(s,a)=>{r=Cu(r,Tt(e,s),a)}),r}function iT(n,e){if(Fe(e))return wr.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new wr(t)}}function Qm(n,e){return No(n,e)!=null}function No(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(An(t.path,e)):null}function sT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mt,(r,s)=>{e.push(new Ue(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ue(r,s.value))}),e}function gs(n,e){if(Fe(e))return n;{const t=No(n,e);return t!=null?new wr(new ut(t)):new wr(n.writeTree_.subtree(e))}}function Ym(n){return n.writeTree_.isEmpty()}function Ka(n,e){return $C(Ye(),n.writeTree_,e)}function $C(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(se(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=$C(Tt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Tt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n,e){return GC(e,n)}function LO(n,e,t,r,s){se(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Cu(n.visibleWrites,e,t)),n.lastWriteId=r}function MO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function VO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&FO(d,r.path)?s=!1:Jn(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return UO(n),!0;if(r.snap)n.visibleWrites=iT(n.visibleWrites,r.path);else{const d=r.children;hn(d,f=>{n.visibleWrites=iT(n.visibleWrites,Tt(r.path,f))})}return!0}else return!1}function FO(n,e){if(n.snap)return Jn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Jn(Tt(n.path,t),e))return!0;return!1}function UO(n){n.visibleWrites=WC(n.allWrites,jO,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jO(n){return n.visible}function WC(n,e,t){let r=wr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)Jn(t,u)?(d=An(t,u),r=Cu(r,d,a.snap)):Jn(u,t)&&(d=An(u,t),r=Cu(r,Ye(),a.snap.getChild(d)));else if(a.children){if(Jn(t,u))d=An(t,u),r=rT(r,d,a.children);else if(Jn(u,t))if(d=An(u,t),Fe(d))r=rT(r,Ye(),a.children);else{const f=La(a.children,Me(d));if(f){const m=f.getChild(rt(d));r=Cu(r,Ye(),m)}}}else throw Xa("WriteRecord should have .snap or .children")}}return r}function HC(n,e,t,r,s){if(!r&&!s){const a=No(n.visibleWrites,e);if(a!=null)return a;{const u=gs(n.visibleWrites,e);if(Ym(u))return t;if(t==null&&!Qm(u,Ye()))return null;{const d=t||Pe.EMPTY_NODE;return Ka(u,d)}}}else{const a=gs(n.visibleWrites,e);if(!s&&Ym(a))return t;if(!s&&t==null&&!Qm(a,Ye()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(Jn(m.path,e)||Jn(e,m.path))},d=WC(n.allWrites,u,e),f=t||Pe.EMPTY_NODE;return Ka(d,f)}}}function BO(n,e,t){let r=Pe.EMPTY_NODE;const s=No(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(mt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=gs(n.visibleWrites,e);return t.forEachChild(mt,(u,d)=>{const f=Ka(gs(a,new tt(u)),d);r=r.updateImmediateChild(u,f)}),sT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=gs(n.visibleWrites,e);return sT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function zO(n,e,t,r,s){se(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=Tt(e,t);if(Qm(n.visibleWrites,a))return null;{const u=gs(n.visibleWrites,a);return Ym(u)?s.getChild(t):Ka(u,s.getChild(t))}}function $O(n,e,t,r){const s=Tt(e,t),a=No(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=gs(n.visibleWrites,s);return Ka(u,r.getNode().getImmediateChild(t))}else return null}function WO(n,e){return No(n.visibleWrites,e)}function HO(n,e,t,r,s,a,u){let d;const f=gs(n.visibleWrites,e),m=No(f,Ye());if(m!=null)d=m;else if(t!=null)d=Ka(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let P=T.getNext();for(;P&&y.length<s;)E(P,r)!==0&&y.push(P),P=T.getNext();return y}else return[]}function qO(){return{visibleWrites:wr.empty(),allWrites:[],lastWriteId:-1}}function wd(n,e,t,r){return HC(n.writeTree,n.treePath,e,t,r)}function __(n,e){return BO(n.writeTree,n.treePath,e)}function oT(n,e,t,r){return zO(n.writeTree,n.treePath,e,t,r)}function Td(n,e){return WO(n.writeTree,Tt(n.treePath,e))}function GO(n,e,t,r,s,a){return HO(n.writeTree,n.treePath,e,t,r,s,a)}function y_(n,e,t){return $O(n.writeTree,n.treePath,e,t)}function qC(n,e){return GC(Tt(n.treePath,e),n.writeTree)}function GC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,$u(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,zu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Ga(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,$u(r,e.snapshotNode,s.oldSnap));else throw Xa("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const KC=new QO;class v_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Io(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return y_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Co(this.viewCache_),a=GO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(n){return{filter:n}}function XO(n,e){se(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function JO(n,e,t,r,s){const a=new KO;let u,d;if(t.type===Er.OVERWRITE){const m=t;m.source.fromUser?u=Xm(n,e,m.path,m.snap,r,s,a):(se(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Fe(m.path),u=Id(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===Er.MERGE){const m=t;m.source.fromUser?u=e2(n,e,m.path,m.children,r,s,a):(se(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Jm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===Er.ACK_USER_WRITE){const m=t;m.revert?u=r2(n,e,m.path,r,s,a):u=t2(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Er.LISTEN_COMPLETE)u=n2(n,e,t.path,r,a);else throw Xa("Unknown operation type: "+t.type);const f=a.getChanges();return ZO(e,u,f),{viewCache:u,changes:f}}function ZO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Km(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(jC(Km(e)))}}function QC(n,e,t,r,s,a){const u=e.eventCache;if(Td(r,t)!=null)return e;{let d,f;if(Fe(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Co(e),y=m instanceof Pe?m:Pe.EMPTY_NODE,E=__(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=wd(r,Co(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Me(t);if(m===".priority"){se(As(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=oT(r,t,y,f);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=rt(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=oT(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(y,T):E=u.getNode().getImmediateChild(m)}else E=y_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,s,a):d=u.getNode()}}return Iu(e,d,u.isFullyInitialized()||Fe(t),n.filter.filtersNodes())}}function Id(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Fe(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const P=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),P,null)}else{const P=Me(t);if(!f.isCompleteForPath(t)&&As(t)>1)return e;const L=rt(t),V=f.getNode().getImmediateChild(P).updateChild(L,r);P===".priority"?m=y.updatePriority(f.getNode(),V):m=y.updateChild(f.getNode(),P,V,L,KC,null)}const E=zC(e,m,f.isFullyInitialized()||Fe(t),y.filtersNodes()),T=new v_(s,E,a);return QC(n,E,t,s,T,d)}function Xm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new v_(s,e,a);if(Fe(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Iu(e,m,!0,n.filter.filtersNodes());else{const E=Me(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Iu(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=rt(t),P=d.getNode().getImmediateChild(E);let L;if(Fe(T))L=r;else{const M=y.getCompleteChild(E);M!=null?l_(T)===".priority"&&M.getChild(DC(T)).isEmpty()?L=M:L=M.updateChild(T,r):L=Pe.EMPTY_NODE}if(P.equals(L))f=e;else{const M=n.filter.updateChild(d.getNode(),E,L,T,y,u);f=Iu(e,M,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function aT(n,e){return n.eventCache.isCompleteForChild(e)}function e2(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=Tt(t,f);aT(e,Me(y))&&(d=Xm(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=Tt(t,f);aT(e,Me(y))||(d=Xm(n,d,y,m,s,a,u))}),d}function lT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Jm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Fe(t)?m=r:m=new ut(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(y.hasChild(E)){const P=e.serverCache.getNode().getImmediateChild(E),L=lT(n,P,T);f=Id(n,f,new tt(E),L,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const P=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!y.hasChild(E)&&!P){const L=e.serverCache.getNode().getImmediateChild(E),M=lT(n,L,T);f=Id(n,f,new tt(E),M,s,a,u,d)}}),f}function t2(n,e,t,r,s,a,u){if(Td(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Fe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Id(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Fe(t)){let m=new ut(null);return f.getNode().forEachChild(Da,(y,E)=>{m=m.set(new tt(y),E)}),Jm(n,e,t,m,s,a,d,u)}else return e}else{let m=new ut(null);return r.foreach((y,E)=>{const T=Tt(t,y);f.isCompleteForPath(T)&&(m=m.set(y,f.getNode().getChild(T)))}),Jm(n,e,t,m,s,a,d,u)}}function n2(n,e,t,r,s){const a=e.serverCache,u=zC(e,a.getNode(),a.isFullyInitialized()||Fe(t),a.isFiltered());return QC(n,u,t,r,KC,s)}function r2(n,e,t,r,s,a){let u;if(Td(r,t)!=null)return e;{const d=new v_(r,e,s),f=e.eventCache.getNode();let m;if(Fe(t)||Me(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=wd(r,Co(e));else{const E=e.serverCache.getNode();se(E instanceof Pe,"serverChildren would be complete if leaf node"),y=__(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Me(t);let E=y_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,rt(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Pe.EMPTY_NODE,rt(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=wd(r,Co(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Td(r,Ye())!=null,Iu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new d_(r.getIndex()),a=IO(r);this.processor_=YO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Pe.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Pe.EMPTY_NODE,d.getNode(),null),y=new Io(f,u.isFullyInitialized(),s.filtersNodes()),E=new Io(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=lf(E,y),this.eventGenerator_=new NO(this.query_)}get query(){return this.query_}}function s2(n){return n.viewCache_.serverCache.getNode()}function o2(n,e){const t=Co(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Fe(e)&&!t.getImmediateChild(Me(e)).isEmpty())?t.getChild(e):null}function uT(n){return n.eventRegistrations_.length===0}function a2(n,e){n.eventRegistrations_.push(e)}function cT(n,e,t){const r=[];if(t){se(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function hT(n,e,t,r){e.type===Er.MERGE&&e.source.queryId!==null&&(se(Co(n.viewCache_),"We should always have a full cache before handling merges"),se(Km(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=JO(n.processor_,s,e,t,r);return XO(n.processor_,a.viewCache),se(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,YC(n,a.changes,a.viewCache.eventCache.getNode(),null)}function l2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(mt,(a,u)=>{r.push(Ga(a,u))}),t.isFullyInitialized()&&r.push(jC(t.getNode())),YC(n,r,t.getNode(),e)}function YC(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return xO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd;class u2{constructor(){this.views=new Map}}function c2(n){se(!Cd,"__referenceConstructor has already been defined"),Cd=n}function h2(){return se(Cd,"Reference.ts has not been loaded"),Cd}function d2(n){return n.views.size===0}function E_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return se(a!=null,"SyncTree gave us an op for an invalid query."),hT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(hT(u,e,t,r));return a}}function f2(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=wd(t,s?r:null),f=!1;d?f=!0:r instanceof Pe?(d=__(t,r),f=!1):(d=Pe.EMPTY_NODE,f=!1);const m=lf(new Io(d,f,!1),new Io(r,s,!1));return new i2(e,m)}return u}function p2(n,e,t,r,s,a){const u=f2(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),a2(u,t),l2(u,t)}function m2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=ks(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(cT(m,t,r)),uT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(cT(f,t,r)),uT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!ks(n)&&a.push(new(h2())(e._repo,e._path)),{removed:a,events:u}}function XC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Oa(n,e){let t=null;for(const r of n.views.values())t=t||o2(r,e);return t}function JC(n,e){if(e._queryParams.loadsAllData())return uf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function ZC(n,e){return JC(n,e)!=null}function ks(n){return uf(n)!=null}function uf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;function g2(n){se(!Sd,"__referenceConstructor has already been defined"),Sd=n}function _2(){return se(Sd,"Reference.ts has not been loaded"),Sd}let y2=1;class dT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=qO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eS(n,e,t,r,s){return LO(n.pendingWriteTree_,e,t,r,s),s?oc(n,new To(BC(),e,t)):[]}function ho(n,e,t=!1){const r=MO(n.pendingWriteTree_,e);if(VO(n.pendingWriteTree_,e)){let a=new ut(null);return r.snap!=null?a=a.set(Ye(),!0):hn(r.children,u=>{a=a.set(new tt(u),!0)}),oc(n,new Ed(r.path,a,t))}else return[]}function cf(n,e,t){return oc(n,new To(p_(),e,t))}function v2(n,e,t){const r=ut.fromObject(t);return oc(n,new qu(p_(),e,r))}function E2(n,e){return oc(n,new Hu(p_(),e))}function w2(n,e,t){const r=T_(n,t);if(r){const s=I_(r),a=s.path,u=s.queryId,d=An(a,e),f=new Hu(m_(u),d);return C_(n,a,f)}else return[]}function Zm(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||ZC(u,e))){const f=m2(u,e,t,r);d2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,P)=>ks(P));if(y&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const P=C2(T);for(let L=0;L<P.length;++L){const M=P[L],V=M.query,re=rS(n,M);n.listenProvider_.startListening(Su(V),Rd(n,V),re.hashFn,re.onComplete)}}}!E&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Su(e),null):m.forEach(T=>{const P=n.queryToTagMap.get(hf(T));n.listenProvider_.stopListening(Su(T),P)}))}S2(n,m)}return d}function T2(n,e,t,r){const s=T_(n,r);if(s!=null){const a=I_(s),u=a.path,d=a.queryId,f=An(u,e),m=new To(m_(d),f,t);return C_(n,u,m)}else return[]}function I2(n,e,t,r){const s=T_(n,r);if(s){const a=I_(s),u=a.path,d=a.queryId,f=An(u,e),m=ut.fromObject(t),y=new qu(m_(d),f,m);return C_(n,u,y)}else return[]}function fT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,P)=>{const L=An(T,s);a=a||Oa(P,L),u=u||ks(P)});let d=n.syncPointTree_.get(s);d?(u=u||ks(d),a=a||Oa(d,Ye())):(d=new u2,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Pe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((P,L)=>{const M=Oa(L,Ye());M&&(a=a.updateImmediateChild(P,M))}));const m=ZC(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=hf(e);se(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const P=R2();n.queryToTagMap.set(T,P),n.tagToQueryMap.set(P,T)}const y=g_(n.pendingWriteTree_,s);let E=p2(d,e,t,y,a,f);if(!m&&!u&&!r){const T=JC(d,e);E=E.concat(A2(n,e,T))}return E}function w_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=An(u,e),m=Oa(d,f);if(m)return m});return HC(s,e,a,t,!0)}function oc(n,e){return tS(e,n.syncPointTree_,null,g_(n.pendingWriteTree_,Ye()))}function tS(n,e,t,r){if(Fe(n.path))return nS(n,e,t,r);{const s=e.get(Ye());t==null&&s!=null&&(t=Oa(s,Ye()));let a=[];const u=Me(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=qC(r,u);a=a.concat(tS(d,f,m,y))}return s&&(a=a.concat(E_(s,n,r,t))),a}}function nS(n,e,t,r){const s=e.get(Ye());t==null&&s!=null&&(t=Oa(s,Ye()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=qC(r,u),y=n.operationForChild(u);y&&(a=a.concat(nS(y,d,f,m)))}),s&&(a=a.concat(E_(s,n,r,t))),a}function rS(n,e){const t=e.query,r=Rd(n,t);return{hashFn:()=>(s2(e)||Pe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?w2(n,t._path,r):E2(n,t._path);{const a=wD(s,t);return Zm(n,t,null,a)}}}}function Rd(n,e){const t=hf(e);return n.queryToTagMap.get(t)}function hf(n){return n._path.toString()+"$"+n._queryIdentifier}function T_(n,e){return n.tagToQueryMap.get(e)}function I_(n){const e=n.indexOf("$");return se(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new tt(n.substr(0,e))}}function C_(n,e,t){const r=n.syncPointTree_.get(e);se(r,"Missing sync point for query tag that we're tracking");const s=g_(n.pendingWriteTree_,e);return E_(r,t,s,null)}function C2(n){return n.fold((e,t,r)=>{if(t&&ks(t))return[uf(t)];{let s=[];return t&&(s=XC(t)),hn(r,(a,u)=>{s=s.concat(u)}),s}})}function Su(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_2())(n._repo,n._path):n}function S2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=hf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function R2(){return y2++}function A2(n,e,t){const r=e._path,s=Rd(n,e),a=rS(n,t),u=n.listenProvider_.startListening(Su(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)se(!ks(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,E)=>{if(!Fe(m)&&y&&ks(y))return[uf(y).query];{let T=[];return y&&(T=T.concat(XC(y).map(P=>P.query))),hn(E,(P,L)=>{T=T.concat(L)}),T}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Su(y),Rd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new S_(t)}node(){return this.node_}}class R_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Tt(this.path_,e);return new R_(this.syncTree_,t)}node(){return w_(this.syncTree_,this.path_)}}const k2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},pT=function(n,e,t){if(!n||typeof n!="object")return n;if(se(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return P2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return N2(n[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},P2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+n)}},N2=function(n,e,t){n.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&se(!1,"Unexpected increment value: "+r);const s=e.node();if(se(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},x2=function(n,e,t,r){return A_(e,new R_(t,n),r)},iS=function(n,e,t){return A_(n,new S_(e),t)};function A_(n,e,t){const r=n.getPriority().val(),s=pT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=pT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Wt(d,At(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Wt(s))),u.forEachChild(mt,(d,f)=>{const m=A_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function P_(n,e){let t=e instanceof tt?e:new tt(e),r=n,s=Me(t);for(;s!==null;){const a=La(r.node.children,s)||{children:{},childCount:0};r=new k_(s,r,a),t=rt(t),s=Me(t)}return r}function ul(n){return n.node.value}function sS(n,e){n.node.value=e,eg(n)}function oS(n){return n.node.childCount>0}function b2(n){return ul(n)===void 0&&!oS(n)}function df(n,e){hn(n.node.children,(t,r)=>{e(new k_(t,n,r))})}function aS(n,e,t,r){t&&e(n),df(n,s=>{aS(s,e,!0)})}function D2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ac(n){return new tt(n.parent===null?n.name:ac(n.parent)+"/"+n.name)}function eg(n){n.parent!==null&&O2(n.parent,n.name,n)}function O2(n,e,t){const r=b2(t),s=Yr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,eg(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,eg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=/[\[\].#$\/\u0000-\u001F\u007F]/,M2=/[\[\].#$\u0000-\u001F\u007F]/,cm=10*1024*1024,N_=function(n){return typeof n=="string"&&n.length!==0&&!L2.test(n)},lS=function(n){return typeof n=="string"&&n.length!==0&&!M2.test(n)},V2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lS(n)},uS=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!of(n)||n&&typeof n=="object"&&Yr(n,".sv")},tg=function(n,e,t,r){ff(Ma(n,"value"),e,t)},ff=function(n,e,t){const r=t instanceof tt?new tO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+lo(r));if(typeof e=="function")throw new Error(n+"contains a function "+lo(r)+" with contents = "+e.toString());if(of(e))throw new Error(n+"contains "+e.toString()+" "+lo(r));if(typeof e=="string"&&e.length>cm/3&&Dd(e)>cm)throw new Error(n+"contains a string greater than "+cm+" utf8 bytes "+lo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(hn(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!N_(u)))throw new Error(n+" contains an invalid key ("+u+") "+lo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nO(r,u),ff(n,d,r),rO(r)}),s&&a)throw new Error(n+' contains ".value" child '+lo(r)+" in addition to actual children.")}},F2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Bu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!N_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&Jn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},U2=function(n,e,t,r){const s=Ma(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];hn(e,(u,d)=>{const f=new tt(u);if(ff(s,d,Tt(t,f)),l_(f)===".priority"&&!uS(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),F2(s,a)},j2=function(n,e,t){if(of(e))throw new Error(Ma(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!uS(e))throw new Error(Ma(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},cS=function(n,e,t,r){if(!lS(t))throw new Error(Ma(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cS(n,e,t)},pu=function(n,e){if(Me(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},z2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!N_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!V2(t))throw new Error(Ma(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function x_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!u_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function hS(n,e,t){x_(n,t),dS(n,r=>u_(r,e))}function Pi(n,e,t){x_(n,t),dS(n,r=>Jn(r,e)||Jn(e,r))}function dS(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(W2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function W2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();wu&&Jt("event: "+t.toString()),al(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="repo_interrupt",q2=25;class G2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vd(),this.transactionQueueTree_=new k_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function K2(n,e,t){if(n.stats_=o_(n.repoInfo_),n.forceRestClient_||SD())n.server_=new yd(n.repoInfo_,(r,s,a,u)=>{mT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>gT(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Gt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new wi(n.repoInfo_,e,(r,s,a,u)=>{mT(n,r,s,a,u)},r=>{gT(n,r)},r=>{Y2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=ND(n.repoInfo_,()=>new PO(n.stats_,n.server_)),n.infoData_=new CO,n.infoSyncTree_=new dT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=cf(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),D_(n,"connected",!1),n.serverSyncTree_=new dT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);Pi(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function Q2(n){const t=n.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function b_(n){return k2({timestamp:Q2(n)})}function mT(n,e,t,r,s){n.dataUpdateCount++;const a=new tt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Kh(t,m=>At(m));u=I2(n.serverSyncTree_,a,f,s)}else{const f=At(t);u=T2(n.serverSyncTree_,a,f,s)}else if(r){const f=Kh(t,m=>At(m));u=v2(n.serverSyncTree_,a,f)}else{const f=At(t);u=cf(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=pf(n,a)),Pi(n.eventQueue_,d,u)}function gT(n,e){D_(n,"connected",e),e===!1&&J2(n)}function Y2(n,e){hn(e,(t,r)=>{D_(n,t,r)})}function D_(n,e,t){const r=new tt("/.info/"+e),s=At(t);n.infoData_.updateSnapshot(r,s);const a=cf(n.infoSyncTree_,r,s);Pi(n.eventQueue_,r,a)}function fS(n){return n.nextWriteId_++}function X2(n,e,t,r,s){O_(n,"set",{path:e.toString(),value:t,priority:r});const a=b_(n),u=At(t,r),d=w_(n.serverSyncTree_,e),f=iS(u,d,a),m=fS(n),y=eS(n.serverSyncTree_,e,f,m,!0);x_(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(T,P)=>{const L=T==="ok";L||Pn("set at "+e+" failed: "+T);const M=ho(n.serverSyncTree_,m,!L);Pi(n.eventQueue_,e,M),Qa(n,s,T,P)});const E=yS(n,e);pf(n,E),Pi(n.eventQueue_,E,[])}function J2(n){O_(n,"onDisconnectEvents");const e=b_(n),t=vd();Gm(n.onDisconnect_,Ye(),(s,a)=>{const u=x2(s,a,n.serverSyncTree_,e);ll(t,s,u)});let r=[];Gm(t,Ye(),(s,a)=>{r=r.concat(cf(n.serverSyncTree_,s,a));const u=yS(n,s);pf(n,u)}),n.onDisconnect_=vd(),Pi(n.eventQueue_,Ye(),r)}function Z2(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&qm(n.onDisconnect_,e),Qa(n,t,r,s)})}function _T(n,e,t,r){const s=At(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&ll(n.onDisconnect_,e,s),Qa(n,r,a,u)})}function eL(n,e,t,r,s){const a=At(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&ll(n.onDisconnect_,e,a),Qa(n,s,u,d)})}function tL(n,e,t,r){if(Gh(t)){Jt("onDisconnect().update() called with empty data.  Don't do anything."),Qa(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&hn(t,(u,d)=>{const f=At(d);ll(n.onDisconnect_,Tt(e,u),f)}),Qa(n,r,s,a)})}function nL(n,e,t){let r;Me(e._path)===".info"?r=fT(n.infoSyncTree_,e,t):r=fT(n.serverSyncTree_,e,t),hS(n.eventQueue_,e._path,r)}function yT(n,e,t){let r;Me(e._path)===".info"?r=Zm(n.infoSyncTree_,e,t):r=Zm(n.serverSyncTree_,e,t),hS(n.eventQueue_,e._path,r)}function rL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(H2)}function O_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Jt(t,...e)}function Qa(n,e,t,r){e&&al(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function pS(n,e,t){return w_(n.serverSyncTree_,e,t)||Pe.EMPTY_NODE}function L_(n,e=n.transactionQueueTree_){if(e||mf(n,e),ul(e)){const t=gS(n,e);se(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&iL(n,ac(e),t)}else oS(e)&&df(e,t=>{L_(n,t)})}function iL(n,e,t){const r=t.map(m=>m.currentWriteId),s=pS(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];se(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=An(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{O_(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(ho(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();mf(n,P_(n.transactionQueueTree_,e)),L_(n,n.transactionQueueTree_),Pi(n.eventQueue_,e,y);for(let T=0;T<E.length;T++)al(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Pn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}pf(n,e)}},u)}function pf(n,e){const t=mS(n,e),r=ac(t),s=gS(n,t);return sL(n,s,r),r}function sL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=An(t,f.path);let y=!1,E;if(se(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(ho(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=q2)y=!0,E="maxretry",s=s.concat(ho(n.serverSyncTree_,f.currentWriteId,!0));else{const T=pS(n,f.path,u);f.currentInputSnapshot=T;const P=e[d].update(T.val());if(P!==void 0){ff("transaction failed: Data returned ",P,f.path);let L=At(P);typeof P=="object"&&P!=null&&Yr(P,".priority")||(L=L.updatePriority(T.getPriority()));const V=f.currentWriteId,re=b_(n),$=iS(L,T,re);f.currentOutputSnapshotRaw=L,f.currentOutputSnapshotResolved=$,f.currentWriteId=fS(n),u.splice(u.indexOf(V),1),s=s.concat(eS(n.serverSyncTree_,f.path,$,f.currentWriteId,f.applyLocally)),s=s.concat(ho(n.serverSyncTree_,V,!0))}else y=!0,E="nodata",s=s.concat(ho(n.serverSyncTree_,f.currentWriteId,!0))}Pi(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}mf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)al(r[d]);L_(n,n.transactionQueueTree_)}function mS(n,e){let t,r=n.transactionQueueTree_;for(t=Me(e);t!==null&&ul(r)===void 0;)r=P_(r,t),e=rt(e),t=Me(e);return r}function gS(n,e){const t=[];return _S(n,e,t),t.sort((r,s)=>r.order-s.order),t}function _S(n,e,t){const r=ul(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);df(e,s=>{_S(n,s,t)})}function mf(n,e){const t=ul(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,sS(e,t.length>0?t:void 0)}df(e,r=>{mf(n,r)})}function yS(n,e){const t=ac(mS(n,e)),r=P_(n.transactionQueueTree_,e);return D2(r,s=>{hm(n,s)}),hm(n,r),aS(r,s=>{hm(n,s)}),t}function hm(n,e){const t=ul(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(se(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(se(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(ho(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?sS(e,void 0):t.length=a+1,Pi(n.eventQueue_,ac(e),s);for(let u=0;u<r.length;u++)al(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function aL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pn(`Invalid query segment '${t}' in query '${n}'`)}return e}const vT=function(n,e){const t=lL(n),r=t.namespace;t.domain==="firebase.com"&&ki(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ki("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||gD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new CC(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new tt(t.pathString)}},lL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=oL(n.substring(y,E)));const T=aL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const L=e.indexOf(".");r=e.substring(0,L).toLowerCase(),t=e.substring(L+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Gt(this.snapshot.exportVal())}}class cL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return se(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new gi;return Z2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pu("OnDisconnect.remove",this._path);const e=new gi;return _T(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pu("OnDisconnect.set",this._path),tg("OnDisconnect.set",e,this._path);const t=new gi;return _T(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){pu("OnDisconnect.setWithPriority",this._path),tg("OnDisconnect.setWithPriority",e,this._path),j2("OnDisconnect.setWithPriority",t);const r=new gi;return eL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){pu("OnDisconnect.update",this._path),U2("OnDisconnect.update",e,this._path);const t=new gi;return tL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class M_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Fe(this._path)?null:l_(this._path)}get ref(){return new Ds(this._repo,this._path)}get _queryIdentifier(){const e=tT(this._queryParams),t=i_(e);return t==="{}"?"default":t}get _queryObject(){return tT(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof M_))return!1;const t=this._repo===e._repo,r=u_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZD(this._path)}}class Ds extends M_{constructor(e,t){super(e,t,new f_,!1)}get parent(){const e=DC(this._path);return e===null?null:new Ds(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ad{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new tt(e),r=ng(this.ref,e);return new Ad(this._node.getChild(t),r,mt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ad(s,ng(this.ref,r),mt)))}hasChild(e){const t=new tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ET(n,e){return n=Je(n),n._checkNotDeleted("ref"),e!==void 0?ng(n._root,e):n._root}function ng(n,e){return n=Je(n),Me(n._path)===null?B2("child","path",e):cS("child","path",e),new Ds(n._repo,Tt(n._path,e))}function fL(n){return n=Je(n),new dL(n._repo,n._path)}function wT(n,e){n=Je(n),pu("set",n._path),tg("set",e,n._path);const t=new gi;return X2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class V_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new uL("value",this,new Ad(e.snapshotNode,new Ds(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new cL(this,e,t):null}matches(e){return e instanceof V_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pL(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,E)=>{yT(n._repo,n,d),f(y,E)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new hL(t,a||void 0),d=new V_(u);return nL(n._repo,n,d),()=>yT(n._repo,n,d)}function mL(n,e,t,r){return pL(n,"value",e,t,r)}c2(Ds);g2(Ds);/**
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
 */const gL="FIREBASE_DATABASE_EMULATOR_HOST",rg={};let _L=!1;function yL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Kr(a);n.repoInfo_=new CC(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function vL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ki("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=vT(a,s),d=u.repoInfo,f;typeof process<"u"&&Vw&&(f=Vw[gL]),f?(a=`http://${f}?ns=${d.namespace}`,u=vT(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new AD(n.name,n.options,e);z2("Invalid Firebase Database URL",u),Fe(u.path)||ki("Database URL must point to the root of a Firebase Database (not including a child path).");const y=wL(d,n,m,new RD(n,t));return new TL(y,n)}function EL(n,e){const t=rg[e];(!t||t[n.key]!==n)&&ki(`Database ${e}(${n.repoInfo_}) has already been deleted.`),rL(n),delete t[n.key]}function wL(n,e,t,r){let s=rg[e.name];s||(s={},rg[e.name]=s);let a=s[n.toURLString()];return a&&ki("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new G2(n,_L,t,r),s[n.toURLString()]=a,a}class TL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(K2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ds(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ki("Cannot call "+e+" on a deleted database.")}}function IL(n=Ld(),e){const t=Ku(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=ug("database");r&&CL(t,...r)}return t}function CL(n,e,t,r={}){n=Je(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ti(r,a.repoInfo_.emulatorOptions))return;ki("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ki('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new $h($h.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:cg(r.mockUserToken,n.app.options.projectId);u=new $h(d)}Kr(e)&&(xd(e),bd("Database",!0)),yL(a,s,r,u)}/**
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
 */function SL(n){cD(Ps),vs(new Ii("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return vL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),er(Fw,Uw,n),er(Fw,Uw,"esm2017")}wi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};wi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};SL();var RL="firebase",AL="11.10.0";/**
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
 */er(RL,AL,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="firebasestorage.googleapis.com",ES="storageBucket",kL=120*1e3,PL=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Qr{constructor(e,t,r=0){super(dm(e),`Firebase Storage: ${t} (${dm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _t;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_t||(_t={}));function dm(n){return"storage/"+n}function F_(){const n="An unknown error occurred, please check the error payload for server response.";return new yt(_t.UNKNOWN,n)}function NL(n){return new yt(_t.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function xL(n){return new yt(_t.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yt(_t.UNAUTHENTICATED,n)}function DL(){return new yt(_t.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OL(n){return new yt(_t.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function LL(){return new yt(_t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ML(){return new yt(_t.CANCELED,"User canceled the upload/download.")}function VL(n){return new yt(_t.INVALID_URL,"Invalid URL '"+n+"'.")}function FL(n){return new yt(_t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function UL(){return new yt(_t.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ES+"' property when initializing the app?")}function jL(){return new yt(_t.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BL(){return new yt(_t.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zL(n){return new yt(_t.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ig(n){return new yt(_t.INVALID_ARGUMENT,n)}function wS(){return new yt(_t.APP_DELETED,"The Firebase app was deleted.")}function $L(n){return new yt(_t.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ru(n,e){return new yt(_t.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ou(n){throw new yt(_t.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Un.makeFromUrl(e,t)}catch{return new Un(e,"")}if(r.path==="")return r;throw FL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(q){q.path_=decodeURIComponent(q.path)}const y="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",P=new RegExp(`^https?://${E}/${y}/b/${s}/o${T}`,"i"),L={bucket:1,path:3},M=t===vS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",re=new RegExp(`^https?://${M}/${s}/${V}`,"i"),X=[{regex:d,indices:f,postModify:a},{regex:P,indices:L,postModify:m},{regex:re,indices:{bucket:1,path:2},postModify:m}];for(let q=0;q<X.length;q++){const we=X[q],he=we.regex.exec(e);if(he){const b=he[we.indices.bucket];let A=he[we.indices.path];A||(A=""),r=new Un(b,A),we.postModify(r);break}}if(r==null)throw VL(e);return r}}class WL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function y(...V){m||(m=!0,e.apply(null,V))}function E(V){s=setTimeout(()=>{s=null,n(P,f())},V)}function T(){a&&clearTimeout(a)}function P(V,...re){if(m){T();return}if(V){T(),y.call(null,V,...re);return}if(f()||u){T(),y.call(null,V,...re);return}r<64&&(r*=2);let X;d===1?(d=2,X=0):X=(r+Math.random())*1e3,E(X)}let L=!1;function M(V){L||(L=!0,T(),!m&&(s!==null?(V||(d=2),clearTimeout(s),E(0)):V||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,M(!0)},t),M}function qL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n){return n!==void 0}function KL(n){return typeof n=="object"&&!Array.isArray(n)}function U_(n){return typeof n=="string"||n instanceof String}function TT(n){return j_()&&n instanceof Blob}function j_(){return typeof Blob<"u"}function IT(n,e,t,r){if(r<e)throw ig(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ig(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function TS(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var mo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(mo||(mo={}));/**
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
 */function QL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,t,r,s,a,u,d,f,m,y,E,T=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,M)=>{this.resolve_=L,this.reject_=M,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===mo.NO_ERROR,f=a.getStatus();if(!d||QL(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===mo.ABORT;r(!1,new xh(!1,null,y));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new xh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());GL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=F_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?wS():ML();u(f)}else{const f=LL();u(f)}};this.canceled_?t(!1,new xh(!1,null,!0)):this.backoffId_=HL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function XL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function JL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZL(n,e){e&&(n["X-Firebase-GMPID"]=e)}function eM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tM(n,e,t,r,s,a,u=!0,d=!1){const f=TS(n.urlParams),m=n.url+f,y=Object.assign({},n.headers);return ZL(y,e),XL(y,t),JL(y,a),eM(y,r),new YL(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rM(...n){const e=nM();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(j_())return new Blob(n);throw new yt(_t.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iM(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function sM(n){if(typeof atob>"u")throw zL("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fm{constructor(e,t){this.data=e,this.contentType=t||null}}function oM(n,e){switch(n){case Fr.RAW:return new fm(IS(e));case Fr.BASE64:case Fr.BASE64URL:return new fm(CS(n,e));case Fr.DATA_URL:return new fm(lM(e),uM(e))}throw F_()}function IS(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aM(n){let e;try{e=decodeURIComponent(n)}catch{throw Ru(Fr.DATA_URL,"Malformed data URL.")}return IS(e)}function CS(n,e){switch(n){case Fr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Ru(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Fr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Ru(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=sM(e)}catch(s){throw s.message.includes("polyfill")?s:Ru(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class SS{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ru(Fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=cM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lM(n){const e=new SS(n);return e.base64?CS(Fr.BASE64,e.rest):aM(e.rest)}function uM(n){return new SS(n).contentType}function cM(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){let r=0,s="";TT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(TT(this.data_)){const r=this.data_,s=iM(r,e,t);return s===null?null:new as(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new as(r,!0)}}static getBlob(...e){if(j_()){const t=e.map(r=>r instanceof as?r.data_:r);return new as(rM.apply(null,t))}else{const t=e.map(u=>U_(u)?oM(Fr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new as(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n){let e;try{e=JSON.parse(n)}catch{return null}return KL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function dM(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function AS(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(n,e){return e}class gn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||fM}}let bh=null;function pM(n){return!U_(n)||n.length<2?n:AS(n)}function kS(){if(bh)return bh;const n=[];n.push(new gn("bucket")),n.push(new gn("generation")),n.push(new gn("metageneration")),n.push(new gn("name","fullPath",!0));function e(a,u){return pM(u)}const t=new gn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new gn("size");return s.xform=r,n.push(s),n.push(new gn("timeCreated")),n.push(new gn("updated")),n.push(new gn("md5Hash",null,!0)),n.push(new gn("cacheControl",null,!0)),n.push(new gn("contentDisposition",null,!0)),n.push(new gn("contentEncoding",null,!0)),n.push(new gn("contentLanguage",null,!0)),n.push(new gn("contentType",null,!0)),n.push(new gn("metadata","customMetadata",!0)),bh=n,bh}function mM(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new Un(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function gM(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return mM(r,n),r}function PS(n,e,t){const r=RS(e);return r===null?null:gM(n,r,t)}function _M(n,e,t,r){const s=RS(e);if(s===null||!U_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const y=n.bucket,E=n.fullPath,T="/b/"+u(y)+"/o/"+u(E),P=B_(T,t,r),L=TS({alt:"media",token:m});return P+L})[0]}function yM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class NS{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(n){if(!n)throw F_()}function vM(n,e){function t(r,s){const a=PS(n,s,e);return xS(a!==null),a}return t}function EM(n,e){function t(r,s){const a=PS(n,s,e);return xS(a!==null),_M(a,s,n.host,n._protocol)}return t}function bS(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=DL():s=bL():t.getStatus()===402?s=xL(n.bucket):t.getStatus()===403?s=OL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function wM(n){const e=bS(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=NL(n.path)),a.serverResponse=s.serverResponse,a}return t}function TM(n,e,t){const r=e.fullServerUrl(),s=B_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new NS(s,a,EM(n,t),u);return d.errorHandler=wM(e),d}function IM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function CM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=IM(null,e)),r}function SM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let X="";for(let q=0;q<2;q++)X=X+Math.random().toString().slice(2);return X}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=CM(e,r,s),y=yM(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",P=as.getBlob(E,r,T);if(P===null)throw jL();const L={name:m.fullPath},M=B_(a,n.host,n._protocol),V="POST",re=n.maxUploadRetryTime,$=new NS(M,V,vM(n,t),re);return $.urlParams=L,$.headers=u,$.body=P.uploadData(),$.errorHandler=bS(e),$}class RM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw ou("cannot .send() more than once");if(Kr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ou("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ou("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ou("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ou("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AM extends RM{initXhr(){this.xhr_.responseType="text"}}function DS(){return new AM}/**
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
 */class So{constructor(e,t){this._service=e,t instanceof Un?this._location=t:this._location=Un.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new So(e,t)}get root(){const e=new Un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AS(this._location.path)}get storage(){return this._service}get parent(){const e=hM(this._location.path);if(e===null)return null;const t=new Un(this._location.bucket,e);return new So(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $L(e)}}function kM(n,e,t){n._throwIfRoot("uploadBytes");const r=SM(n.storage,n._location,kS(),new as(e,!0),t);return n.storage.makeRequestWithTokens(r,DS).then(s=>({metadata:s,ref:n}))}function PM(n){n._throwIfRoot("getDownloadURL");const e=TM(n.storage,n._location,kS());return n.storage.makeRequestWithTokens(e,DS).then(t=>{if(t===null)throw BL();return t})}function NM(n,e){const t=dM(n._location.path,e),r=new Un(n._location.bucket,t);return new So(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(n){return/^[A-Za-z]+:\/\//.test(n)}function bM(n,e){return new So(n,e)}function OS(n,e){if(n instanceof z_){const t=n;if(t._bucket==null)throw UL();const r=new So(t,t._bucket);return e!=null?OS(r,e):r}else return e!==void 0?NM(n,e):n}function DM(n,e){if(e&&xM(e)){if(n instanceof z_)return bM(n,e);throw ig("To use ref(service, url), the first argument must be a Storage instance.")}else return OS(n,e)}function CT(n,e){const t=e==null?void 0:e[ES];return t==null?null:Un.makeFromBucketSpec(t,n)}function OM(n,e,t,r={}){n.host=`${e}:${t}`;const s=Kr(e);s&&(xd(`https://${n.host}/b`),bd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:cg(a,n.app.options.projectId))}class z_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=vS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kL,this._maxUploadRetryTime=PL,this._requests=new Set,s!=null?this._bucket=Un.makeFromBucketSpec(s,this._host):this._bucket=CT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Un.makeFromBucketSpec(this._url,e):this._bucket=CT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){IT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){IT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new So(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new WL(wS());{const u=tM(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const ST="@firebase/storage",RT="0.13.14";/**
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
 */const LS="storage";function LM(n,e,t){return n=Je(n),kM(n,e,t)}function MM(n){return n=Je(n),PM(n)}function VM(n,e){return n=Je(n),DM(n,e)}function FM(n=Ld(),e){n=Je(n);const r=Ku(n,LS).getImmediate({identifier:e}),s=ug("storage");return s&&UM(r,...s),r}function UM(n,e,t,r={}){OM(n,e,t,r)}function jM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new z_(t,r,s,e,Ps)}function BM(){vs(new Ii(LS,jM,"PUBLIC").setMultipleInstances(!0)),er(ST,RT,""),er(ST,RT,"esm2017")}BM();const zM={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},$M="https://enteesee-api.vnhairmarket.com",gf=GT(zM),Ya=KP(gf);O1(Ya,wI).catch(()=>{});const qr=Hb(gf),AT=IL(gf),WM=FM(gf),_s=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý",color:"#2481cc"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên",color:"#d84a35"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên",color:"#3d9b4f"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên",color:"#8e44ad"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối",color:"#c04b9b"}],Vr=n=>(_s.find(e=>e.id===n)||{name:n}).name,ys=n=>(_s.find(e=>e.id===n)||{}).color||"#2481cc",au={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},pm=["waiting_acceptance","in_progress","waiting_review","completed"],MS={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function kT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function VS(n,e){return e.trim()?kT(n).includes(kT(e)):!0}function go(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function kd(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function FS(n){if(!n)return"";const e=new Date(typeof n=="number"?n:Date.parse(n));if(Number.isNaN(e.getTime()))return"";const t=e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return e.toDateString()===new Date().toDateString()?t:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")} ${t}`}function HM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function ns(n,{method:e="GET",body:t,token:r}={}){const s=r||(Ya.currentUser?await Ya.currentUser.getIdToken():"");let a;try{a=await fetch(`${$M}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}function Pd(n,e="dữ liệu"){const t=String(n&&n.message||"");return/401|unauthenticated|permission|hết hạn/i.test(t)&&/401/.test(t)?"Phiên đăng nhập đã hết hạn — đăng nhập lại.":/^HTTP 404|HTTP 404/.test(t)?`Không tải được ${e} — thử tải lại trang.`:/HTTP (4\d\d|5\d\d)/.test(t)?`Không tải được ${e} — thử lại sau. Nếu vẫn lỗi, báo quản lý.`:/không kết nối được backend|backend chưa deploy/i.test(t)?"Máy chủ chưa sẵn sàng — tính năng này tạm chưa dùng được.":/failed to fetch|load failed|networkerror|network request failed/i.test(t)?"Không có mạng — kiểm tra mạng rồi thử lại.":/chưa xác định người gửi/i.test(t)?t:t||`Không tải được ${e} — thử lại sau.`}const Zn={sendMessage:async({content:n,threadId:e=null,attachments:t=[]},r)=>{const s=HM(r),a=(n||"").trim();if(!a)throw new Error("Nội dung trống.");try{const d=await ns("/api/messages",{method:"POST",body:{content:a,roomId:"general",threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[]}});return{id:d.message&&d.message.id}}catch(d){console.error("Gửi qua backend thất bại, fallback ghi trực tiếp Firestore:",d)}return{id:(await aD(Eo(qr,"messages"),{roomId:"general",senderId:s.id,senderName:s.name,senderType:"human",content:a,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[s.id],pinned:!1})).id}},pinMessage:(n,e)=>zm(fd(qr,"messages",n),{pinned:!!e}),markSeen:(n,e)=>e?zm(fd(qr,"messages",n),{seenBy:uD(e)}):Promise.resolve(),listTasks:(n="")=>ns(`/api/tasks${n}`),createTask:n=>ns("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>ns(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>ns("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>ns("/api/jobs"),listUsers:()=>ns("/api/users"),setTelegramChatId:(n,e)=>ns(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})},$_="enteesee-theme",PT={light:"#eef1f5",dark:"#0b0f14"};function sg(){try{const n=localStorage.getItem($_);return n==="dark"||n==="light"?n:null}catch{return null}}function og(){try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Wh(n){document.documentElement.dataset.theme=n;const e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",PT[n]||PT.light)}function qM(){const n=sg()||og();return Wh(n),n}function GM(n){try{localStorage.setItem($_,n)}catch{}}function KM(){const[n,e]=te.useState(""),[t,r]=te.useState(""),[s,a]=te.useState(""),[u,d]=te.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await D1(Ya,n.trim(),t)}catch(y){y.code==="auth/invalid-credential"?a("Email hoặc mật khẩu chưa đúng."):y.code==="auth/network-request-failed"?a("Không có mạng — kiểm tra mạng rồi thử lại."):y.code==="auth/too-many-requests"?a("Thử quá nhiều lần — đợi một lát rồi thử lại."):a("Đăng nhập chưa được — thử lại sau. Nếu vẫn lỗi, báo quản lý."),console.error("Login failed:",y)}finally{d(!1)}}return I.jsx("div",{className:"login-page",children:I.jsxs("div",{className:"login-card",children:[I.jsx("div",{className:"login-logo",children:"E"}),I.jsx("h1",{children:"Enteesee"}),I.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),I.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&I.jsx("div",{className:"err",children:s}),I.jsxs("form",{onSubmit:f,children:[I.jsx("div",{style:{marginBottom:10},children:I.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),I.jsx("div",{style:{marginBottom:12},children:I.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),I.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),I.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}function NT(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?I.jsx("b",{className:"mention",children:t},r):I.jsx("span",{children:t},r))}function QM(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function YM({read:n}){return n?I.jsxs("svg",{className:"tick tick-read",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã đọc",children:[I.jsx("path",{d:"M1 6.5 4 9.5 10 2.5"}),I.jsx("path",{d:"M5.5 6.5 8.5 9.5 14.5 2.5"})]}):I.jsx("svg",{className:"tick",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã gửi",children:I.jsx("path",{d:"M1.5 6.5 4.5 9.5 10.5 2.5"})})}const xT=140,XM=200,JM=32,ZM=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;function eV({person:n}){const[e,t]=te.useState([]),[r,s]=te.useState([]),[a,u]=te.useState(""),[d,f]=te.useState(""),[m,y]=te.useState(""),[E,T]=te.useState(!1),[P,L]=te.useState(!1),[M,V]=te.useState(null),[re,$]=te.useState(null),[X,q]=te.useState(""),[we,he]=te.useState(""),[b,A]=te.useState(!1),[R,N]=te.useState(!1),[D,F]=te.useState(null),S=te.useRef(null),me=te.useRef(null),Ce=te.useRef(null),[De,Se]=te.useState(!0),[ne,_e]=te.useState(0),le=te.useRef(!0),U=te.useRef(!0),K=te.useRef(null);te.useEffect(()=>Uu(Ha(Eo(qr,"messages"),Vu("createdAt","desc"),Fu(200)),Y=>t(Y.docs.map(Ee=>({id:Ee.id,...Ee.data()})).reverse()),()=>q("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),te.useEffect(()=>Uu(Ha(Eo(qr,"aiEvents"),Vu("createdAt","desc"),Fu(200)),Y=>s(Y.docs.map(Ee=>({id:Ee.id,...Ee.data()})))),[]);const ye=te.useMemo(()=>{const Y=new Map;for(const Ee of r)Ee.messageId&&Y.set(Ee.messageId,Ee);return Y},[r]),ke=te.useMemo(()=>e.filter(Y=>!Y.threadId),[e]),Oe=te.useMemo(()=>{const Y=m.trim();return ke.filter(Ee=>VS(`${Ee.content||""} ${Ee.senderName||""}`,Y))},[ke,m]),je=Y=>e.filter(Ee=>Ee.threadId===Y);function qe(){const Y=me.current;if(!Y)return;const Ut=Y.scrollHeight-Y.scrollTop-Y.clientHeight<=XM;le.current=Ut,Se(Ut),Ut&&_e(0)}function Ge(Y=!0){const Ee=me.current;Ee&&(Ee.scrollTo({top:Ee.scrollHeight,behavior:Y?"smooth":"auto"}),_e(0))}te.useEffect(()=>{const Y=me.current;if(!Y||ke.length===0)return;const Ee=ke[ke.length-1],Ut=K.current;if(K.current=Ee.id,U.current){Y.scrollTo({top:Y.scrollHeight,behavior:"auto"}),U.current=!1;return}if(Ee.id===Ut)return;const jn=Ut?ke.findIndex(tn=>tn.id===Ut):-1,Jr=jn>=0?ke.slice(jn+1):[Ee],nr=Jr.some(tn=>tn.senderId===n.id);if(le.current||nr)Y.scrollTo({top:Y.scrollHeight,behavior:"smooth"});else{const tn=Jr.filter(Zr=>Zr.senderId!==n.id).length;tn>0&&_e(Zr=>Zr+tn)}},[ke,n.id]),te.useEffect(()=>{const Y=me.current;if(!Y||typeof ResizeObserver>"u")return;let Ee=Y.clientHeight;const Ut=new ResizeObserver(()=>{const jn=Y.clientHeight;jn<Ee&&Y.scrollHeight-Y.scrollTop-Ee<=JM&&(Y.scrollTop=Y.scrollHeight),Ee=jn});return Ut.observe(Y),()=>Ut.disconnect()},[]),te.useEffect(()=>{e.slice(-5).forEach(Ee=>{Ee.id&&!(Ee.seenBy||[]).includes(n.id)&&Zn.markSeen(Ee.id,n.id).catch(()=>{})})},[e,n.id]);function Ze(){const Y=Ce.current;if(!Y)return;Y.style.height="auto";const Ee=Y.scrollHeight;Y.style.height=`${Math.min(Ee,xT)}px`,Y.style.overflowY=Ee>xT?"auto":"hidden"}te.useEffect(()=>{Ze()},[a]);function It(Y){u(Y);const Ee=Y.match(/@([A-Za-zÀ-ỹ]*)$/);Ee?(f(Ee[1]),L(!0)):L(!1)}function tr(Y){u(Ee=>Ee.replace(/@[A-Za-zÀ-ỹ]*$/,`@${Y.name} `)),L(!1),Ce.current&&Ce.current.focus()}async function Xr(){const Y=a.trim();if(!(!Y||b)){A(!0),he("");try{await Zn.sendMessage({content:Y,threadId:M?M.id:null},n),u(""),V(null),requestAnimationFrame(()=>{Ze(),Ce.current&&Ce.current.focus()})}catch(Ee){he(QM(Ee))}finally{A(!1)}}}async function Cr(Y){if(Y){N(!0),he("");try{const Ee=`rooms/general/${Date.now()}_${Y.name}`,Ut=await LM(VM(WM,Ee),Y),jn=await MM(Ut.ref);await Zn.sendMessage({content:`Đã gửi file: ${Y.name}`,attachments:[{name:Y.name,size:Y.size,type:Y.type,url:jn,path:Ee}]},n)}catch(Ee){he(/load failed|failed to fetch|networkerror/i.test(String(Ee.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${Ee.message}`)}finally{N(!1)}}}const Ft=D?_s.find(Y=>Y.id===D):null;return I.jsxs("div",{className:"chat",children:[I.jsxs("div",{className:`search-wrap${E?" open":""}`,children:[I.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>T(Y=>!Y),children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"11",cy:"11",r:"8"}),I.jsx("path",{d:"m21 21-4.3-4.3"})]})}),I.jsx("input",{className:"search",value:m,onChange:Y=>y(Y.target.value),placeholder:"Tìm tin nhắn…","aria-label":"Tìm tin nhắn"})]}),X&&I.jsx("div",{className:"err-load",children:X}),I.jsxs("div",{className:"chat-list-wrap",children:[I.jsxs("div",{className:"chat-list",ref:me,onScroll:qe,children:[Oe.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),Oe.filter(Y=>Y.pinned).map(Y=>I.jsx(bT,{m:Y,person:n,event:ye.get(Y.id),onReply:V,threadOpen:re,setThreadOpen:$,threadReplies:je,pinned:!0,onAvatar:F},`pin-${Y.id}`)),Oe.filter(Y=>!Y.pinned).map(Y=>I.jsx(bT,{m:Y,person:n,event:ye.get(Y.id),onReply:V,threadOpen:re,setThreadOpen:$,threadReplies:je,onAvatar:F},Y.id))]}),I.jsxs("button",{type:"button",className:`scroll-bottom-btn${De?"":" visible"}${ne>0?" has-new":""}`,"aria-label":ne>0?`Cuộn xuống — có ${ne>99?"hơn 99":ne} tin mới`:"Cuộn xuống tin mới nhất","aria-hidden":De,tabIndex:De?-1:0,onClick:()=>Ge(!0),children:[I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),ne>0&&I.jsxs("span",{className:"scroll-bottom-label",children:[ne>99?"99+":ne," tin mới"]})]})]}),D&&Ft&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>F(null),children:I.jsxs("div",{className:"member-detail",onClick:Y=>Y.stopPropagation(),role:"dialog","aria-label":`Thông tin ${Ft.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ys(Ft.id),color:"#fff"},children:Ft.name.charAt(0)}),I.jsx("h3",{children:Ft.name}),I.jsxs("div",{className:"muted",children:[Ft.roleVi," · ID: ",Ft.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:Ft.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":"Thành viên phòng giao việc Enteesee."}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsxs("button",{type:"button",onClick:()=>{u(Y=>`${Y}@${Ft.name} `),F(null),Ce.current&&Ce.current.focus()},children:["Nhắc @",Ft.name]}),I.jsx("button",{type:"button",onClick:()=>F(null),children:"Đóng"})]})]})}),M&&I.jsxs("div",{className:"reply-bar",children:[I.jsxs("span",{className:"muted",children:["Đang trả lời ",M.senderName,": ",(M.content||"").slice(0,80)]}),I.jsx("button",{onClick:()=>V(null),children:"Hủy"})]}),P&&I.jsx("div",{className:"mention-list",children:_s.filter(Y=>Y.name.toLowerCase().startsWith(d.toLowerCase())).map(Y=>I.jsxs("button",{type:"button",onClick:()=>tr(Y),children:["@",Y.name," — ",Y.roleVi]},Y.id))}),we&&I.jsx("div",{className:"err",children:we}),I.jsxs("div",{className:"composer",children:[I.jsxs("div",{className:"composer-box",children:[I.jsx("button",{type:"button",className:"attach-btn",onClick:()=>S.current&&S.current.click(),disabled:R,title:"Đính kèm file","aria-label":"Đính kèm file",children:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),I.jsx("textarea",{ref:Ce,value:a,onChange:Y=>It(Y.target.value),placeholder:"Nhắn tin…","aria-label":"Nhắn tin",rows:1,onKeyDown:Y=>{Y.key==="Enter"&&!Y.shiftKey&&!Y.nativeEvent.isComposing&&!ZM()&&(Y.preventDefault(),Xr())}})]}),I.jsx("input",{ref:S,type:"file",style:{display:"none"},onChange:Y=>{Cr(Y.target.files[0]),Y.target.value=""}}),I.jsx("button",{className:"send-btn",type:"button",onMouseDown:Y=>Y.preventDefault(),onClick:Xr,disabled:b||!a.trim(),title:"Gửi","aria-label":"Gửi",children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),I.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),R&&I.jsx("div",{className:"composer-note",children:"Đang tải file lên…"})]})}function bT({m:n,person:e,event:t,onReply:r,threadOpen:s,setThreadOpen:a,threadReplies:u,pinned:d,onAvatar:f}){const[m,y]=te.useState(!1),[E,T]=te.useState(null),P=te.useRef(null),L=te.useRef(null),M=u(n.id),V=n.senderId===e.id,re=t,$=(n.senderName||Vr(n.senderId)||"?").charAt(0),X=ys(n.senderId),q=(n.seenBy||[]).filter(R=>R!==e.id),we=q.length>0,he=re?`${re.museRepliedAt?`Muse đã phản hồi ${go(re.museRepliedAt)}`:"Muse đang phản hồi…"} · ${re.employeeAcknowledgedAt?`Nhân viên đã xác nhận ${go(re.employeeAcknowledgedAt)}`:"Chờ nhân viên xác nhận"}`:null;function b(R){if(R.stopPropagation(),E){T(null);return}const N=P.current?P.current.getBoundingClientRect():null;if(!N)return;const D=Math.max(8,window.innerWidth-N.right);T(N.top>=96?{bottom:window.innerHeight-N.top+6,right:D}:{top:N.bottom+6,right:D})}te.useEffect(()=>{if(!E)return;const R=()=>T(null),N=F=>{L.current&&L.current.contains(F.target)||P.current&&P.current.contains(F.target)||R()},D=F=>{F.key==="Escape"&&R()};return document.addEventListener("pointerdown",N,!0),document.addEventListener("keydown",D),window.addEventListener("scroll",R,!0),window.addEventListener("resize",R),()=>{document.removeEventListener("pointerdown",N,!0),document.removeEventListener("keydown",D),window.removeEventListener("scroll",R,!0),window.removeEventListener("resize",R)}},[E]);function A(R){R.target.closest("button, a")||y(N=>!N)}return I.jsxs("div",{className:`msg-row ${V?"mine":""}`,children:[!V&&I.jsx("button",{type:"button",className:"msg-avatar-btn","aria-label":`Xem thông tin ${n.senderName||Vr(n.senderId)}`,onClick:()=>f&&f(n.senderId),children:I.jsx("span",{className:"avatar",style:{backgroundColor:X,color:"#fff"},children:$})}),I.jsxs("div",{className:`msg ${V?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||d?"pinned":""}${m?" show-actions":""}`,onClick:A,children:[!V&&I.jsx("div",{className:"sender-name",style:{color:X},children:n.senderName||Vr(n.senderId)}),n.senderType==="ai"&&I.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||d)&&I.jsx("span",{className:"tag status",children:"Đã ghim"}),I.jsxs("div",{className:"content",children:[NT(n.content),I.jsxs("span",{className:"msg-time",children:[kd(n.createdAt),V&&I.jsxs("span",{className:"msg-time-wrap",children:[I.jsx("button",{ref:P,type:"button",className:"tick-btn","aria-label":we?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái","aria-expanded":!!E,title:we?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái",onClick:b,children:I.jsx(YM,{read:we})}),E&&I.jsx("span",{ref:L,className:"seen-popover",role:"status",style:E,onClick:R=>R.stopPropagation(),children:we?`Đã xem: ${q.map(Vr).join(", ")}`:"Chưa ai xem tin này."})]})]})]}),n.linkPreview&&I.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&I.jsx("img",{src:n.linkPreview.image,alt:""}),I.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&I.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((R,N)=>I.jsx("div",{children:(R.type||"").startsWith("image/")?I.jsx("a",{href:R.url,target:"_blank",rel:"noreferrer",children:I.jsx("img",{className:"attachment-img",src:R.url,alt:R.name})}):I.jsxs("span",{className:"attachment-file",children:[I.jsx("a",{href:R.url,target:"_blank",rel:"noreferrer",children:R.name})," ",I.jsxs("span",{className:"muted",children:["(",Math.round((R.size||0)/1024)," KB)"]})]})},N)),he&&I.jsx("div",{style:{marginTop:6},children:I.jsx("span",{className:"tag ai-replied",children:he})}),I.jsxs("div",{className:"row",children:[I.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),M.length>0&&I.jsxs("button",{type:"button",onClick:()=>a(s===n.id?null:n.id),children:[s===n.id?"Ẩn":"Xem"," ",M.length," trả lời"]}),I.jsx("button",{type:"button",onClick:()=>Zn.pinMessage(n.id,!n.pinned).catch(()=>{}),children:n.pinned?"Bỏ ghim":"Ghim"})]}),s===n.id&&M.map(R=>I.jsxs("div",{className:"msg thread-reply",children:[I.jsx("div",{className:"sender-name",style:{color:ys(R.senderId)},children:R.senderName||Vr(R.senderId)}),I.jsxs("div",{className:"content",children:[NT(R.content),I.jsx("span",{className:"msg-time",children:kd(R.createdAt)})]})]},R.id))]})]})}const tV=I.jsx("svg",{className:"combo-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),nV=I.jsx("svg",{className:"combo-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})});function rV({id:n,label:e,options:t,value:r,onChange:s}){const[a,u]=te.useState(!1),[d,f]=te.useState(-1),m=te.useRef(null),y=te.useRef({text:"",at:0}),E=t.find(M=>M.value===r)||t[0],T=`${n}-listbox`;te.useEffect(()=>{if(!a)return;const M=V=>{m.current&&!m.current.contains(V.target)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[a]);function P(M){const V=t[M];V&&(s(V.value),u(!1),f(-1))}function L(M){if(M.key==="ArrowDown"){if(M.preventDefault(),!a){u(!0),f(0);return}f(V=>Math.min(t.length-1,V+1))}else if(M.key==="ArrowUp"){if(M.preventDefault(),!a){u(!0),f(t.length-1);return}f(V=>Math.max(0,V-1))}else if(M.key==="Enter"||M.key===" ")M.preventDefault(),a&&d>=0?P(d):u(V=>!V);else if(M.key==="Escape")M.preventDefault(),u(!1),f(-1);else if(M.key==="Home")M.preventDefault(),u(!0),f(0);else if(M.key==="End")M.preventDefault(),u(!0),f(t.length-1);else if(M.key.length===1){const V=Date.now(),re=y.current;re.text=V-re.at>800?M.key:re.text+M.key,re.at=V;const $=t.findIndex(X=>X.label.toLowerCase().startsWith(re.text.toLowerCase()));$>=0&&(u(!0),f($))}}return I.jsxs("div",{className:"combo",ref:m,children:[e&&I.jsx("span",{className:"combo-label",id:`${n}-label`,children:e}),I.jsxs("button",{type:"button",id:n,className:"combo-trigger","aria-haspopup":"listbox","aria-expanded":a,"aria-labelledby":e?`${n}-label ${n}`:void 0,"aria-activedescendant":a&&d>=0?`${n}-opt-${d}`:void 0,onClick:()=>{u(M=>!M),f(t.findIndex(M=>M.value===r))},onKeyDown:L,children:[I.jsx("span",{className:"combo-value",children:E?E.label:""}),tV]}),a&&I.jsx("div",{className:"combo-panel",role:"listbox",id:T,"aria-labelledby":e?`${n}-label`:void 0,children:t.map((M,V)=>I.jsxs("button",{type:"button",id:`${n}-opt-${V}`,role:"option","aria-selected":M.value===r,className:`combo-option${M.value===r?" selected":""}${d===V?" highlighted":""}`,onClick:()=>P(V),onMouseEnter:()=>f(V),children:[M.value===r?nV:I.jsx("span",{className:"combo-check placeholder","aria-hidden":"true"}),M.label]},M.value))})]})}const iV=["urgent","high","normal","low"];function sV({person:n}){const[e,t]=te.useState([]),[r,s]=te.useState("all"),[a,u]=te.useState(""),[d,f]=te.useState(!1),[m,y]=te.useState(""),[E,T]=te.useState(null),[P,L]=te.useState("");async function M(){try{const q=n.role==="manager"?"":`?assignee=${n.id}`,we=await Zn.listTasks(q);t(we.tasks||[]),y("")}catch(q){y(Pd(q,"danh sách công việc"))}}te.useEffect(()=>{M();const q=setInterval(M,15e3);return()=>clearInterval(q)},[n.id,n.role]);const V=te.useMemo(()=>e.filter(q=>r!=="all"&&q.status!==r?!1:VS(`${q.title} ${q.description||""} ${(q.assignees||[]).map(Vr).join(" ")}`,a)),[e,r,a]);async function re(q,we,he){y("");try{await Zn.setTaskStatus(q.id,we,he),await M()}catch(b){y(Pd(b,"danh sách công việc"))}}const $=n.role==="manager",X=pm.reduce((q,we)=>({...q,[we]:e.filter(he=>he.status===we).length}),{});return I.jsxs("div",{children:[I.jsx("div",{className:"row",style:{marginBottom:10},children:pm.map(q=>I.jsxs("span",{className:"tag status",children:[au[q],": ",X[q]||0]},q))}),I.jsx("input",{className:"search",value:a,onChange:q=>u(q.target.value),placeholder:"Tìm công việc…","aria-label":"Tìm công việc"}),I.jsxs("div",{className:"row",style:{marginBottom:10,alignItems:"flex-end"},children:[I.jsx("div",{style:{flex:1,minWidth:180},children:I.jsx(rV,{id:"task-status-filter",label:"Trạng thái",options:[{value:"all",label:"Tất cả trạng thái"},...pm.map(q=>({value:q,label:au[q]}))],value:r,onChange:s})}),$&&I.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&I.jsxs("div",{className:"err",role:"alert",children:[m,I.jsx("button",{type:"button",className:"retry-btn",onClick:M,children:"Thử lại"})]}),d&&$&&I.jsx(oV,{onDone:()=>{f(!1),M()},onCancel:()=>f(!1)}),V.length===0&&!m&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có công việc nào."}),V.map(q=>{const we=(q.assignees||[]).includes(n.id);return I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:q.title}),I.jsx("div",{className:"muted",children:q.description||""}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("span",{className:"tag status",children:au[q.status]}),I.jsxs("span",{className:"tag status",children:["Ưu tiên: ",MS[q.priority]||q.priority]}),I.jsxs("span",{className:"muted",children:["Người nhận: ",(q.assignees||[]).map(Vr).join(", ")]}),q.dueAt&&I.jsxs("span",{className:"muted",children:["Hạn: ",go(q.dueAt)]})]}),q.reviewNote&&I.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",q.reviewNote]}),I.jsxs("div",{className:"row",style:{marginTop:10},children:[q.status==="waiting_acceptance"&&we&&I.jsx("button",{className:"primary",onClick:()=>re(q,"in_progress"),children:"Xác nhận nhận việc"}),q.status==="in_progress"&&we&&I.jsx("button",{className:"primary",onClick:()=>re(q,"waiting_review"),children:"Trình duyệt"}),q.status==="waiting_review"&&$&&I.jsx("button",{className:"primary",onClick:()=>re(q,"completed"),children:"Duyệt — Hoàn thành"}),q.status==="waiting_review"&&$&&I.jsx("button",{className:"danger",onClick:()=>T(q.id),children:"Yêu cầu sửa"}),q.status==="completed"&&I.jsxs("span",{className:"tag acked",children:["Đã duyệt ",go(q.approvedAt)]})]}),E===q.id&&I.jsxs("div",{style:{marginTop:8},children:[I.jsx("label",{htmlFor:"reject-reason",style:{fontSize:13,fontWeight:600},children:"Lý do yêu cầu sửa (bắt buộc)"}),I.jsx("input",{id:"reject-reason",value:P,onChange:he=>L(he.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("button",{disabled:!P.trim(),onClick:()=>{re(q,"in_progress",P.trim()),T(null),L("")},children:"Gửi yêu cầu sửa"}),I.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(q.history||[]).length>0&&I.jsxs("details",{style:{marginTop:8},children:[I.jsxs("summary",{className:"muted",children:["Lịch sử (",q.history.length,")"]}),(q.history||[]).map((he,b)=>I.jsxs("div",{className:"muted",children:[go(he.at)," — ",Vr(he.by),": ",he.from?au[he.from]:"—"," → ",au[he.to],he.reason?` — ${he.reason}`:""]},b))]})]},q.id)})]})}function oV({onDone:n,onCancel:e}){const[t,r]=te.useState(""),[s,a]=te.useState(""),[u,d]=te.useState([]),[f,m]=te.useState(""),[y,E]=te.useState("normal"),[T,P]=te.useState(""),[L,M]=te.useState(!1);async function V($){if($.preventDefault(),!t.trim()||u.length===0){P("Nhập tiêu đề và chọn ít nhất một người nhận.");return}M(!0),P("");try{await Zn.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:y}),n()}catch(X){P(Pd(X,"công việc"))}finally{M(!1)}}function re($){d(X=>X.includes($)?X.filter(q=>q!==$):[...X,$])}return I.jsxs("form",{className:"card task-form",onSubmit:V,children:[I.jsx("h3",{style:{margin:0},children:"Giao việc mới"}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-title",children:"Tiêu đề công việc"}),I.jsx("input",{id:"task-title",value:t,onChange:$=>r($.target.value),placeholder:"vd: Chuẩn bị báo cáo tuần",required:!0})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-desc",children:"Mô tả"}),I.jsx("textarea",{id:"task-desc",value:s,onChange:$=>a($.target.value),placeholder:"Mô tả ngắn: làm gì, kết quả mong muốn là gì",rows:3})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"assignees-label",children:"Người nhận"}),I.jsx("div",{className:"assignee-chips",role:"group","aria-labelledby":"assignees-label",children:_s.filter($=>$.role==="staff").map($=>I.jsxs("label",{className:`assignee-chip${u.includes($.id)?" selected":""}`,children:[I.jsx("input",{type:"checkbox",checked:u.includes($.id),onChange:()=>re($.id),"aria-label":`Chọn ${$.name}`}),I.jsx("span",{className:"assignee-check","aria-hidden":"true",children:u.includes($.id)&&I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})})}),I.jsx("span",{className:"avatar sm",style:{backgroundColor:ys($.id),color:"#fff"},children:$.name.charAt(0)}),$.name]},$.id))}),I.jsx("div",{className:"form-helper",children:"Chọn một hoặc nhiều người nhận."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-due",children:"Hạn hoàn thành"}),I.jsx("input",{id:"task-due",type:"datetime-local",value:f,onChange:$=>m($.target.value)}),I.jsx("div",{className:"form-helper",children:"Để trống nếu không có hạn."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"priority-label",children:"Ưu tiên"}),I.jsx("div",{className:"segmented",role:"group","aria-labelledby":"priority-label",children:iV.map($=>I.jsx("button",{type:"button","aria-pressed":y===$,className:`${y===$?"selected":""}${$==="urgent"&&y===$?" danger-opt":""}`,onClick:()=>E($),children:MS[$]},$))})]}),T&&I.jsx("div",{className:"err",role:"alert",style:{margin:0},children:T}),I.jsxs("div",{className:"row",children:[I.jsx("button",{className:"primary",type:"submit",disabled:L,children:L?"Đang giao…":"Giao việc"}),I.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const aV={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận"};function lV({person:n,onUnread:e}){const[t,r]=te.useState([]),[s,a]=te.useState(""),[u,d]=te.useState(0),f=te.useCallback(()=>{a(""),d(y=>y+1)},[]);te.useEffect(()=>Uu(Ha(Eo(qr,"notifications"),aC("recipientId","==",n.id),Vu("createdAt","desc"),Fu(100)),y=>{const E=y.docs.map(T=>({id:T.id,...T.data()}));r(E),a(""),e(E.filter(T=>!T.read).length)},y=>{console.error("Notifications load failed:",y),a("Không tải được thông báo — thử lại sau.")}),[n.id,e,u]);async function m(){await Promise.all(t.filter(y=>!y.read).map(y=>zm(fd(qr,"notifications",y.id),{read:!0}).catch(()=>{})))}return I.jsxs("div",{children:[I.jsxs("div",{className:"row",style:{marginBottom:10},children:[I.jsx("b",{children:"Thông báo của bạn"}),I.jsx("button",{onClick:m,children:"Đánh dấu đã đọc hết"})]}),s&&I.jsxs("div",{className:"err",role:"alert",children:[s,I.jsx("button",{type:"button",className:"retry-btn",onClick:f,children:"Thử lại"})]}),t.length===0&&!s&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(y=>I.jsxs("div",{className:`card${y.read?"":" unread"}`,style:y.read?{opacity:.65}:{},children:[!y.read&&I.jsx("span",{className:"unread-dot","aria-hidden":"true"}),I.jsxs("div",{className:"row",children:[I.jsx("span",{className:"tag status",children:aV[y.type]||y.type}),I.jsx("span",{className:"muted",children:go(y.createdAt)})]}),I.jsxs("div",{style:{marginTop:6},children:[Vr(y.senderId),": ",y.content]})]},y.id))]})}function uV({person:n,onlineByPerson:e,onSignOut:t}){const[r,s]=te.useState([]),[a,u]=te.useState([]),[d,f]=te.useState(""),[m,y]=te.useState([]),[E,T]=te.useState({}),[P,L]=te.useState("");te.useEffect(()=>Uu(Ha(Eo(qr,"aiEvents"),Vu("createdAt","desc"),Fu(20)),$=>s($.docs.map(X=>({id:X.id,...X.data()})))),[]),te.useEffect(()=>{n.role==="manager"&&(Zn.listJobs().then($=>u($.jobs||[])).catch($=>f(Pd($,"hàng đợi AI"))),Zn.listUsers().then($=>y($.users||[])).catch(()=>{}))},[n.role]);const V=r.filter($=>($.mentions||[]).includes(n.id)).find($=>$.museRepliedAt),re=a.filter($=>$.deadLetter);return I.jsxs("div",{children:[I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:n.name}),I.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),I.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),I.jsxs("div",{className:"muted",children:["Muse của bạn: ",V?`đã phản hồi lần cuối ${go(V.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),I.jsx("div",{className:"row",style:{marginTop:10},children:I.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Kênh Telegram"}),I.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),I.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),I.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),I.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),m.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),m.map($=>I.jsxs("div",{className:"form-field",style:{marginBottom:8},children:[I.jsxs("label",{htmlFor:`tg-${$.id}`,children:[$.name," — chat_id Telegram"]}),I.jsxs("div",{className:"row",children:[I.jsx("input",{id:`tg-${$.id}`,value:E[$.id]!==void 0?E[$.id]:$.telegramChatId||"",onChange:X=>T({...E,[$.id]:X.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),I.jsx("button",{onClick:async()=>{await Zn.setTelegramChatId($.id,E[$.id]!==void 0?E[$.id]:$.telegramChatId||""),L(`Đã lưu chat_id của ${$.name}.`),Zn.listUsers().then(X=>y(X.users||[]))},children:"Lưu"})]})]},$.id)),P&&I.jsx("div",{className:"muted",children:P})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),d&&I.jsx("div",{className:"err",children:d}),a.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),re.length>0&&I.jsxs("div",{className:"err",children:["Có ",re.length," job vào dead-letter (gửi thất bại nhiều lần): ",re.map($=>$.eventId).join(", ")]}),a.slice(0,20).map($=>I.jsxs("div",{className:"muted",children:[$.eventId," → ",Vr($.recipientId),": ",$.status," (lần thử ",$.attempt,")",$.lastError?` — ${$.lastError}`:""]},$.jobId))]})]})}const wa={chat:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M9 11l3 3L22 4"}),I.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),I.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),I.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),menu:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),I.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),I.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),moon:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),sun:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"12",cy:"12",r:"4"}),I.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),I.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),I.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),I.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),I.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),I.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),I.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),I.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},DT=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function OT({p:n,online:e,lastSeen:t,lastMsg:r,task:s,isAi:a,onSelect:u}){const d=r&&r.content||"";return I.jsxs("li",{className:"member-row-btn",role:"button",tabIndex:0,onClick:()=>u&&u(n),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&u&&(f.preventDefault(),u(n))},title:`Xem thông tin ${n.name}`,children:[I.jsxs("span",{className:"avatar-wrap",children:[I.jsx("span",{className:"avatar sm",style:{backgroundColor:ys(n.id),color:"#fff"},children:n.name.charAt(0)}),I.jsx("span",{className:e?"online-dot":"offline-dot"})]}),I.jsxs("span",{className:"side-person",children:[I.jsxs("span",{className:"side-name",children:[n.name," ",I.jsxs("span",{className:"side-role",children:["· ",n.roleVi]})]}),I.jsx("span",{className:`side-status${e?" online":""}`,children:e?"Đang online":t?`Hoạt động lần cuối ${FS(t)}`:"Chưa có dữ liệu hoạt động"}),r?I.jsxs("span",{className:"side-last",children:["“",d.slice(0,48),d.length>48?"…":"","” · ",kd(r.createdAt)]}):I.jsx("span",{className:"side-last",children:"Chưa có tin nhắn gần đây"}),s&&I.jsxs("span",{className:"side-task",children:["Đang làm: ",s]})]})]})}function cV(){const[n,e]=te.useState(null),[t,r]=te.useState(!1),s=te.useRef(!1),[a,u]=te.useState(null),[d,f]=te.useState("chat"),[m,y]=te.useState({}),[E,T]=te.useState(0),[P,L]=te.useState(!1),[M,V]=te.useState({}),[re,$]=te.useState({}),[X,q]=te.useState(null),[we,he]=te.useState(()=>document.documentElement.dataset.theme||"light");function b(){const S=we==="dark"?"light":"dark";he(S),Wh(S),GM(S)}te.useEffect(()=>{const S=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,me=()=>{if(sg())return;const De=og();Wh(De),he(De)},Ce=De=>{if(De.key!==$_)return;const Se=sg()||og();Wh(Se),he(Se)};return S&&(S.addEventListener?S.addEventListener("change",me):S.addListener&&S.addListener(me)),window.addEventListener("storage",Ce),()=>{S&&(S.removeEventListener?S.removeEventListener("change",me):S.removeListener&&S.removeListener(me)),window.removeEventListener("storage",Ce)}},[]),te.useEffect(()=>V1(Ya,async S=>{if(s.current||(s.current=!0,r(!0)),e(S),!S){u(null);return}const me=(S.email||"").toLowerCase();let Ce=null;try{const De=Ha(Eo(qr,"users"),aC("email","==",me)),Se=await oD(De);if(!Se.empty){const ne=Se.docs[0].data();Ce=_s.find(_e=>_e.id===ne.id)||{id:ne.id,name:ne.name||me,role:ne.role||"staff",roleVi:ne.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!Ce&&me==="teddyssk559@gmail.com"&&(Ce=_s.find(De=>De.id==="chung")),Ce||(Ce={id:S.uid,name:S.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(Ce)}),[]),te.useEffect(()=>{if(!n||!a)return;const S=ET(AT,`presence/${n.uid}`),me=()=>wT(S,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(Se=>console.error("Presence write failed:",Se));me(),fL(S).remove().catch(Se=>console.error("Presence onDisconnect failed:",Se));const Ce=setInterval(me,6e4),De=mL(ET(AT,"presence"),Se=>y(Se.val()||{}),Se=>console.error("Presence read failed:",Se));return()=>{clearInterval(Ce),De(),wT(S,null).catch(Se=>console.error("Presence clear failed:",Se))}},[n,a]);const A=te.useMemo(()=>{const S={};for(const me of Object.values(m||{})){if(!me||!me.personId)continue;const Ce=typeof me.lastSeen=="number"?me.lastSeen:Date.parse(me.lastSeen||"");S[me.personId]=me.online===!0&&Number.isFinite(Ce)&&Date.now()-Ce<12e4}return S},[m]),R=te.useMemo(()=>{const S={};for(const me of Object.values(m||{})){if(!me||!me.personId)continue;const Ce=typeof me.lastSeen=="number"?me.lastSeen:Date.parse(me.lastSeen||"");Number.isFinite(Ce)&&(S[me.personId]=Ce)}return S},[m]);if(te.useEffect(()=>{if(n)return Uu(Ha(Eo(qr,"messages"),Vu("createdAt","desc"),Fu(60)),S=>{const me={};for(const Ce of S.docs){const De=Ce.data();De&&De.senderId&&!me[De.senderId]&&(me[De.senderId]={content:De.content||"",createdAt:De.createdAt})}V(me)},()=>{})},[n]),te.useEffect(()=>{if(!n)return;let S=!1;return Zn.listTasks("").then(me=>{if(S)return;const Ce={};for(const De of me.tasks||[])if(De.status==="in_progress")for(const Se of De.assignees||[])Ce[Se]||(Ce[Se]=De.title);$(Ce)}).catch(()=>{}),()=>{S=!0}},[n]),!t)return I.jsx("div",{className:"app",children:I.jsxs("div",{className:"loading",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})});if(!n)return I.jsx(KM,{});if(!a)return I.jsx("div",{className:"app",children:I.jsx("div",{className:"content",children:I.jsx("div",{className:"main",children:I.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})});const N=_s.filter(S=>S.id!=="muse"),D=N.filter(S=>A[S.id]).length,F={id:"muse",name:"Muse",roleVi:"AI điều phối"};return I.jsxs("div",{className:`app${d==="chat"?" app-chat":""}`,children:[I.jsxs("aside",{className:`sidebar${P?" open":""}`,children:[I.jsxs("div",{className:"side-brand",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]}),I.jsx("button",{type:"button",className:"drawer-close","aria-label":"Đóng menu",onClick:()=>L(!1),children:wa.close})]}),I.jsx("nav",{className:"side-nav",children:DT.map(S=>I.jsxs("button",{className:d===S.id?"active":"",onClick:()=>{f(S.id),L(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[wa[S.id],S.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:S.label})]},S.id))}),I.jsx("div",{className:"side-section",children:"Thành viên · Hoạt động"}),I.jsxs("ul",{className:"side-people",children:[N.map(S=>I.jsx(OT,{p:S,online:!!A[S.id],lastSeen:R[S.id],lastMsg:M[S.id],task:re[S.id],onSelect:q},S.id)),I.jsx(OT,{p:F,isAi:!0,online:!0,lastSeen:R.muse,lastMsg:M.muse,task:re.muse,onSelect:q})]}),I.jsxs("div",{className:"side-user",children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ys(a.id),color:"#fff"},children:a.name.charAt(0)}),I.jsxs("div",{children:[I.jsx("div",{className:"side-name",children:a.name}),I.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),P&&I.jsx("div",{className:"drawer-backdrop",onClick:()=>L(!1)}),I.jsxs("div",{className:"content",children:[I.jsxs("header",{className:"header",children:[I.jsx("button",{type:"button",className:"menu-btn","aria-label":"Mở menu",onClick:()=>L(!0),children:wa.menu}),I.jsxs("div",{className:"chat-peer",onClick:()=>L(!0),title:"Mở menu",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{className:"peer-info",children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsxs("div",{className:"peer-status",children:[N.length," thành viên",D>0&&I.jsxs("span",{className:"online-count",children:[" · ",D," đang online"]})]})]})]}),I.jsx("button",{type:"button",className:"header-avatars",onClick:()=>L(!0),"aria-label":"Mở danh sách thành viên",title:"Danh sách thành viên",children:N.map(S=>I.jsxs("span",{className:"avatar-wrap",title:`${S.name} — ${A[S.id]?"đang online":"offline"}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ys(S.id),color:"#fff"},children:S.name.charAt(0)}),I.jsx("span",{className:A[S.id]?"online-dot":"offline-dot"})]},S.id))}),I.jsx("button",{type:"button",className:"theme-btn",onClick:b,"aria-label":we==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối",title:we==="dark"?"Giao diện sáng":"Giao diện tối",children:we==="dark"?wa.sun:wa.moon})]}),I.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&I.jsx(eV,{person:a}),d==="tasks"&&I.jsx(sV,{person:a}),d==="notifs"&&I.jsx(lV,{person:a,onUnread:T}),d==="account"&&I.jsx(uV,{person:a,onlineByPerson:A,onSignOut:()=>F1(Ya)})]})]}),I.jsx("nav",{className:"nav",children:DT.map(S=>I.jsxs("button",{className:d===S.id?"active":"",onClick:()=>{f(S.id),L(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[wa[S.id],S.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:S.label})]},S.id))}),X&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>q(null),children:I.jsxs("div",{className:"member-detail",onClick:S=>S.stopPropagation(),role:"dialog","aria-label":`Thông tin ${X.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ys(X.id),color:"#fff"},children:X.name.charAt(0)}),I.jsx("h3",{children:X.name}),I.jsxs("div",{className:"muted",children:[X.roleVi," · ID: ",X.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:X.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":A[X.id]?"Đang online.":R[X.id]?`Hoạt động lần cuối ${FS(R[X.id])}.`:"Chưa có dữ liệu hoạt động."}),M[X.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Tin mới nhất: “",(M[X.id].content||"").slice(0,80),"” · ",kd(M[X.id].createdAt)]}),re[X.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Đang làm: ",re[X.id]]}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsx("button",{type:"button",onClick:()=>{q(null),L(!1),f("chat")},children:"Nhắn trong phòng"}),I.jsx("button",{type:"button",onClick:()=>q(null),children:"Đóng"})]})]})})]})}qM();JR.createRoot(document.getElementById("root")).render(I.jsx(HR.StrictMode,{children:I.jsx(cV,{})}));
