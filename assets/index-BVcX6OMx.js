(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function OT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qp={exports:{}},tu={},Gp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function WR(){if(Xv)return Ve;Xv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,M={};function U(V,Q,Te){this.props=V,this.context=Q,this.refs=M,this.updater=Te||P}U.prototype.isReactComponent={},U.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=U.prototype;function K(V,Q,Te){this.props=V,this.context=Q,this.refs=M,this.updater=Te||P}var te=K.prototype=new ae;te.constructor=K,F(te,U.prototype),te.isPureReactComponent=!0;var j=Array.isArray,we=Object.prototype.hasOwnProperty,me={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function C(V,Q,Te){var Pe,De={},Me=null,We=null;if(Q!=null)for(Pe in Q.ref!==void 0&&(We=Q.ref),Q.key!==void 0&&(Me=""+Q.key),Q)we.call(Q,Pe)&&!N.hasOwnProperty(Pe)&&(De[Pe]=Q[Pe]);var He=arguments.length-2;if(He===1)De.children=Te;else if(1<He){for(var nt=Array(He),ct=0;ct<He;ct++)nt[ct]=arguments[ct+2];De.children=nt}if(V&&V.defaultProps)for(Pe in He=V.defaultProps,He)De[Pe]===void 0&&(De[Pe]=He[Pe]);return{$$typeof:n,type:V,key:Me,ref:We,props:De,_owner:me.current}}function k(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function D(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Te){return Q[Te]})}var L=/\/+/g;function A(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):Q.toString(36)}function $e(V,Q,Te,Pe,De){var Me=typeof V;(Me==="undefined"||Me==="boolean")&&(V=null);var We=!1;if(V===null)We=!0;else switch(Me){case"string":case"number":We=!0;break;case"object":switch(V.$$typeof){case n:case e:We=!0}}if(We)return We=V,De=De(We),V=Pe===""?"."+A(We,0):Pe,j(De)?(Te="",V!=null&&(Te=V.replace(L,"$&/")+"/"),$e(De,Q,Te,"",function(ct){return ct})):De!=null&&(b(De)&&(De=k(De,Te+(!De.key||We&&We.key===De.key?"":(""+De.key).replace(L,"$&/")+"/")+V)),Q.push(De)),1;if(We=0,Pe=Pe===""?".":Pe+":",j(V))for(var He=0;He<V.length;He++){Me=V[He];var nt=Pe+A(Me,He);We+=$e(Me,Q,Te,nt,De)}else if(nt=T(V),typeof nt=="function")for(V=nt.call(V),He=0;!(Me=V.next()).done;)Me=Me.value,nt=Pe+A(Me,He++),We+=$e(Me,Q,Te,nt,De);else if(Me==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return We}function tt(V,Q,Te){if(V==null)return V;var Pe=[],De=0;return $e(V,Pe,"","",function(Me){return Q.call(Te,Me,De++)}),Pe}function se(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(Te){(V._status===0||V._status===-1)&&(V._status=1,V._result=Te)},function(Te){(V._status===0||V._status===-1)&&(V._status=2,V._result=Te)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var Z={current:null},G={transition:null},le={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:G,ReactCurrentOwner:me};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:tt,forEach:function(V,Q,Te){tt(V,function(){Q.apply(this,arguments)},Te)},count:function(V){var Q=0;return tt(V,function(){Q++}),Q},toArray:function(V){return tt(V,function(Q){return Q})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ve.Component=U,Ve.Fragment=t,Ve.Profiler=s,Ve.PureComponent=K,Ve.StrictMode=r,Ve.Suspense=f,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ve.act=re,Ve.cloneElement=function(V,Q,Te){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Pe=F({},V.props),De=V.key,Me=V.ref,We=V._owner;if(Q!=null){if(Q.ref!==void 0&&(Me=Q.ref,We=me.current),Q.key!==void 0&&(De=""+Q.key),V.type&&V.type.defaultProps)var He=V.type.defaultProps;for(nt in Q)we.call(Q,nt)&&!N.hasOwnProperty(nt)&&(Pe[nt]=Q[nt]===void 0&&He!==void 0?He[nt]:Q[nt])}var nt=arguments.length-2;if(nt===1)Pe.children=Te;else if(1<nt){He=Array(nt);for(var ct=0;ct<nt;ct++)He[ct]=arguments[ct+2];Pe.children=He}return{$$typeof:n,type:V.type,key:De,ref:Me,props:Pe,_owner:We}},Ve.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Ve.createElement=C,Ve.createFactory=function(V){var Q=C.bind(null,V);return Q.type=V,Q},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(V){return{$$typeof:d,render:V}},Ve.isValidElement=b,Ve.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:se}},Ve.memo=function(V,Q){return{$$typeof:m,type:V,compare:Q===void 0?null:Q}},Ve.startTransition=function(V){var Q=G.transition;G.transition={};try{V()}finally{G.transition=Q}},Ve.unstable_act=re,Ve.useCallback=function(V,Q){return Z.current.useCallback(V,Q)},Ve.useContext=function(V){return Z.current.useContext(V)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(V){return Z.current.useDeferredValue(V)},Ve.useEffect=function(V,Q){return Z.current.useEffect(V,Q)},Ve.useId=function(){return Z.current.useId()},Ve.useImperativeHandle=function(V,Q,Te){return Z.current.useImperativeHandle(V,Q,Te)},Ve.useInsertionEffect=function(V,Q){return Z.current.useInsertionEffect(V,Q)},Ve.useLayoutEffect=function(V,Q){return Z.current.useLayoutEffect(V,Q)},Ve.useMemo=function(V,Q){return Z.current.useMemo(V,Q)},Ve.useReducer=function(V,Q,Te){return Z.current.useReducer(V,Q,Te)},Ve.useRef=function(V){return Z.current.useRef(V)},Ve.useState=function(V){return Z.current.useState(V)},Ve.useSyncExternalStore=function(V,Q,Te){return Z.current.useSyncExternalStore(V,Q,Te)},Ve.useTransition=function(){return Z.current.useTransition()},Ve.version="18.3.1",Ve}var Jv;function lg(){return Jv||(Jv=1,Gp.exports=WR()),Gp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function HR(){if(Zv)return tu;Zv=1;var n=lg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,E={},T=null,P=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(P=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:d,key:T,ref:P,props:E,_owner:s.current}}return tu.Fragment=t,tu.jsx=u,tu.jsxs=u,tu}var eE;function qR(){return eE||(eE=1,qp.exports=HR()),qp.exports}var I=qR(),J=lg();const GR=OT(J);var Ih={},Kp={exports:{}},Nn={},Qp={exports:{}},Yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE;function KR(){return tE||(tE=1,(function(n){function e(G,le){var re=G.length;G.push(le);e:for(;0<re;){var V=re-1>>>1,Q=G[V];if(0<s(Q,le))G[V]=le,G[re]=Q,re=V;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var le=G[0],re=G.pop();if(re!==le){G[0]=re;e:for(var V=0,Q=G.length,Te=Q>>>1;V<Te;){var Pe=2*(V+1)-1,De=G[Pe],Me=Pe+1,We=G[Me];if(0>s(De,re))Me<Q&&0>s(We,De)?(G[V]=We,G[Me]=re,V=Me):(G[V]=De,G[Pe]=re,V=Pe);else if(Me<Q&&0>s(We,re))G[V]=We,G[Me]=re,V=Me;else break e}}return le}function s(G,le){var re=G.sortIndex-le.sortIndex;return re!==0?re:G.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,E=null,T=3,P=!1,F=!1,M=!1,U=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(G){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=G)r(m),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(m)}}function j(G){if(M=!1,te(G),!F)if(t(f)!==null)F=!0,se(we);else{var le=t(m);le!==null&&Z(j,le.startTime-G)}}function we(G,le){F=!1,M&&(M=!1,ae(C),C=-1),P=!0;var re=T;try{for(te(le),E=t(f);E!==null&&(!(E.expirationTime>le)||G&&!D());){var V=E.callback;if(typeof V=="function"){E.callback=null,T=E.priorityLevel;var Q=V(E.expirationTime<=le);le=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(f)&&r(f),te(le)}else r(f);E=t(f)}if(E!==null)var Te=!0;else{var Pe=t(m);Pe!==null&&Z(j,Pe.startTime-le),Te=!1}return Te}finally{E=null,T=re,P=!1}}var me=!1,N=null,C=-1,k=5,b=-1;function D(){return!(n.unstable_now()-b<k)}function L(){if(N!==null){var G=n.unstable_now();b=G;var le=!0;try{le=N(!0,G)}finally{le?A():(me=!1,N=null)}}else me=!1}var A;if(typeof K=="function")A=function(){K(L)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,tt=$e.port2;$e.port1.onmessage=L,A=function(){tt.postMessage(null)}}else A=function(){U(L,0)};function se(G){N=G,me||(me=!0,A())}function Z(G,le){C=U(function(){G(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){F||P||(F=!0,se(we))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(G){switch(T){case 1:case 2:case 3:var le=3;break;default:le=T}var re=T;T=le;try{return G()}finally{T=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,le){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=T;T=G;try{return le()}finally{T=re}},n.unstable_scheduleCallback=function(G,le,re){var V=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=re+Q,G={id:y++,callback:le,priorityLevel:G,startTime:re,expirationTime:Q,sortIndex:-1},re>V?(G.sortIndex=re,e(m,G),t(f)===null&&G===t(m)&&(M?(ae(C),C=-1):M=!0,Z(j,re-V))):(G.sortIndex=Q,e(f,G),F||P||(F=!0,se(we))),G},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(G){var le=T;return function(){var re=T;T=le;try{return G.apply(this,arguments)}finally{T=re}}}})(Yp)),Yp}var nE;function QR(){return nE||(nE=1,Qp.exports=KR()),Qp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rE;function YR(){if(rE)return Nn;rE=1;var n=lg(),e=QR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function T(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function P(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function F(i,o,l,h){if(o===null||typeof o>"u"||P(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){U[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];U[o]=new M(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){U[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){U[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){U[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){U[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){U[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){U[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){U[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function K(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(ae,K);U[o]=new M(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(ae,K);U[o]=new M(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(ae,K);U[o]=new M(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){U[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),U.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){U[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function te(i,o,l,h){var p=U.hasOwnProperty(o)?U[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(F(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var j=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),me=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),G=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,V;function Q(i){if(V===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+i}var Te=!1;function Pe(i,o){if(!i||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(H){var h=H}Reflect.construct(i,[],o)}else{try{o.call()}catch(H){h=H}i.call(o.prototype)}else{try{throw Error()}catch(H){h=H}i()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var p=H.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,R=_.length-1;1<=w&&0<=R&&p[w]!==_[R];)R--;for(;1<=w&&0<=R;w--,R--)if(p[w]!==_[R]){if(w!==1||R!==1)do if(w--,R--,0>R||p[w]!==_[R]){var x=`
`+p[w].replace(" at new "," at ");return i.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",i.displayName)),x}while(1<=w&&0<=R);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function De(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case me:return"Portal";case k:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case $e:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case L:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case tt:return o=i.displayName||null,o!==null?o:Me(i.type)||"Memo";case se:o=i._payload,i=i._init;try{return Me(i(o))}catch{}}return null}function We(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function He(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function nt(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function ct(i){var o=nt(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Mn(i){i._valueTracker||(i._valueTracker=ct(i))}function _n(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=nt(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Gn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ur(i,o){var l=o.checked;return re({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function zi(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=He(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ui(i,o){o=o.checked,o!=null&&te(i,"checked",o,!1)}function cr(i,o){ui(i,o);var l=He(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?ci(i,o.type,l):o.hasOwnProperty("defaultValue")&&ci(i,o.type,He(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function $i(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ci(i,o,l){(o!=="number"||Gn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var hr=Array.isArray;function Kn(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+He(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Wi(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Hi(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(hr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:He(l)}}function qi(i,o){var l=He(o.value),h=He(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function hi(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Je(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var W,he=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(W=W||document.createElement("div"),W.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=W.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function ge(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wt=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(i){wt.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ye[o]=Ye[i]})});function Lr(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ye.hasOwnProperty(i)&&Ye[i]?(""+o).trim():o+"px"}function bt(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Lr(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var ht=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dt(i,o){if(o){if(ht[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Rt(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var an=null;function Mr(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Vr=null,Qn=null,Fr=null;function $o(i){if(i=jl(i)){if(typeof Vr!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Fc(o),Vr(i.stateNode,i.type,o))}}function Ur(i){Qn?Fr?Fr.push(i):Fr=[i]:Qn=i}function _l(){if(Qn){var i=Qn,o=Fr;if(Fr=Qn=null,$o(i),o)for(i=0;i<o.length;i++)$o(o[i])}}function Qs(i,o){return i(o)}function yl(){}var di=!1;function vl(i,o,l){if(di)return i(o,l);di=!0;try{return Qs(i,o,l)}finally{di=!1,(Qn!==null||Fr!==null)&&(yl(),_l())}}function At(i,o){var l=i.stateNode;if(l===null)return null;var h=Fc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Wo=!1;if(d)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Wo=!1}function Ys(i,o,l,h,p,_,w,R,x){var H=Array.prototype.slice.call(arguments,3);try{o.apply(l,H)}catch(ne){this.onError(ne)}}var Xs=!1,Ho=null,fr=!1,El=null,Ef={onError:function(i){Xs=!0,Ho=i}};function qo(i,o,l,h,p,_,w,R,x){Xs=!1,Ho=null,Ys.apply(Ef,arguments)}function uc(i,o,l,h,p,_,w,R,x){if(qo.apply(this,arguments),Xs){if(Xs){var H=Ho;Xs=!1,Ho=null}else throw Error(t(198));fr||(fr=!0,El=H)}}function pr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Js(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function mr(i){if(pr(i)!==i)throw Error(t(188))}function cc(i){var o=i.alternate;if(!o){if(o=pr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return mr(p),i;if(_===h)return mr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,R=p.child;R;){if(R===l){w=!0,l=p,h=_;break}if(R===h){w=!0,h=p,l=_;break}R=R.sibling}if(!w){for(R=_.child;R;){if(R===l){w=!0,l=_,h=p;break}if(R===h){w=!0,h=_,l=p;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function wl(i){return i=cc(i),i!==null?Go(i):null}function Go(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Go(i);if(o!==null)return o;i=i.sibling}return null}var Ko=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,hc=e.unstable_shouldYield,wf=e.unstable_requestPaint,at=e.unstable_now,dc=e.unstable_getCurrentPriorityLevel,Zs=e.unstable_ImmediatePriority,Gi=e.unstable_UserBlockingPriority,Yn=e.unstable_NormalPriority,Il=e.unstable_LowPriority,fc=e.unstable_IdlePriority,eo=null,Vn=null;function pc(i){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(eo,i,void 0,(i.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:gc,Sl=Math.log,mc=Math.LN2;function gc(i){return i>>>=0,i===0?32:31-(Sl(i)/mc|0)|0}var Qo=64,Yo=4194304;function Ki(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function to(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var R=w&~p;R!==0?h=Ki(R):(_&=w,_!==0&&(h=Ki(_)))}else w=l&~p,w!==0?h=Ki(w):_!==0&&(h=Ki(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-yn(o),p=1<<l,h|=i[l],o&=~p;return h}function Tf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fi(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-yn(_),R=1<<w,x=p[w];x===-1?((R&l)===0||(R&h)!==0)&&(p[w]=Tf(R,o)):x<=o&&(i.expiredLanes|=R),_&=~R}}function Fn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function no(){var i=Qo;return Qo<<=1,(Qo&4194240)===0&&(Qo=64),i}function Qi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Yi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-yn(o),i[o]=l}function st(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-yn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Xi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-yn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var ze=0;function Ji(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var _c,Xo,yc,vc,Ec,Cl=!1,jr=[],Zt=null,gr=null,_r=null,Zi=new Map,Xn=new Map,Br=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(i,o){switch(i){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Zi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(o.pointerId)}}function In(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=jl(o),o!==null&&Xo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Sf(i,o,l,h,p){switch(o){case"focusin":return Zt=In(Zt,i,o,l,h,p),!0;case"dragenter":return gr=In(gr,i,o,l,h,p),!0;case"mouseover":return _r=In(_r,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Zi.set(_,In(Zi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Xn.set(_,In(Xn.get(_)||null,i,o,l,h,p)),!0}return!1}function Tc(i){var o=ao(i.target);if(o!==null){var l=pr(o);if(l!==null){if(o=l.tag,o===13){if(o=Js(l),o!==null){i.blockedOn=o,Ec(i.priority,function(){yc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function pi(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Jo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);an=h,l.target.dispatchEvent(h),an=null}else return o=jl(l),o!==null&&Xo(o),i.blockedOn=l,!1;o.shift()}return!0}function ro(i,o,l){pi(i)&&l.delete(o)}function Ic(){Cl=!1,Zt!==null&&pi(Zt)&&(Zt=null),gr!==null&&pi(gr)&&(gr=null),_r!==null&&pi(_r)&&(_r=null),Zi.forEach(ro),Xn.forEach(ro)}function yr(i,o){i.blockedOn===o&&(i.blockedOn=null,Cl||(Cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ic)))}function vr(i){function o(p){return yr(p,i)}if(0<jr.length){yr(jr[0],i);for(var l=1;l<jr.length;l++){var h=jr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Zt!==null&&yr(Zt,i),gr!==null&&yr(gr,i),_r!==null&&yr(_r,i),Zi.forEach(o),Xn.forEach(o),l=0;l<Br.length;l++)h=Br[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<Br.length&&(l=Br[0],l.blockedOn===null);)Tc(l),l.blockedOn===null&&Br.shift()}var mi=j.ReactCurrentBatchConfig,es=!0;function gt(i,o,l,h){var p=ze,_=mi.transition;mi.transition=null;try{ze=1,Rl(i,o,l,h)}finally{ze=p,mi.transition=_}}function Cf(i,o,l,h){var p=ze,_=mi.transition;mi.transition=null;try{ze=4,Rl(i,o,l,h)}finally{ze=p,mi.transition=_}}function Rl(i,o,l,h){if(es){var p=Jo(i,o,l,h);if(p===null)Mf(i,o,h,io,l),wc(i,h);else if(Sf(p,i,o,l,h))h.stopPropagation();else if(wc(i,h),o&4&&-1<If.indexOf(i)){for(;p!==null;){var _=jl(p);if(_!==null&&_c(_),_=Jo(i,o,l,h),_===null&&Mf(i,o,h,io,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Mf(i,o,h,null,l)}}var io=null;function Jo(i,o,l,h){if(io=null,i=Mr(h),i=ao(i),i!==null)if(o=pr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Js(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return io=i,null}function Al(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case Zs:return 1;case Gi:return 4;case Yn:case Il:return 16;case fc:return 536870912;default:return 16}default:return 16}}var Un=null,Zo=null,Sn=null;function kl(){if(Sn)return Sn;var i,o=Zo,l=o.length,h,p="value"in Un?Un.value:Un.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return Sn=p.slice(i,1<h?1-h:void 0)}function ea(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function zr(){return!0}function Pl(){return!1}function en(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?zr:Pl,this.isPropagationStopped=Pl,this}return re(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),o}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=en(Er),$r=re({},Er,{view:0,detail:0}),Rf=en($r),na,gi,ts,so=re({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ts&&(ts&&i.type==="mousemove"?(na=i.screenX-ts.screenX,gi=i.screenY-ts.screenY):gi=na=0,ts=i),na)},movementY:function(i){return"movementY"in i?i.movementY:gi}}),ra=en(so),Nl=re({},so,{dataTransfer:0}),Sc=en(Nl),ia=re({},$r,{relatedTarget:0}),sa=en(ia),Cc=re({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),_i=en(Cc),Rc=re({},Er,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ac=en(Rc),kc=re({},Er,{data:0}),xl=en(kc),oa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Pc[i])?!!o[i]:!1}function Wr(){return Nc}var c=re({},$r,{key:function(i){if(i.key){var o=oa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ea(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?vn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wr,charCode:function(i){return i.type==="keypress"?ea(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ea(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=en(c),v=re({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=en(v),B=re({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wr}),q=en(B),ce=re({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),rt=en(ce),Bt=re({},so,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=en(Bt),Ht=[9,13,27,32],Ot=d&&"CompositionEvent"in window,Jn=null;d&&"documentMode"in document&&(Jn=document.documentMode);var jn=d&&"TextEvent"in window&&!Jn,oo=d&&(!Ot||Jn&&8<Jn&&11>=Jn),aa=" ",H_=!1;function q_(i,o){switch(i){case"keyup":return Ht.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var la=!1;function BC(i,o){switch(i){case"compositionend":return G_(o);case"keypress":return o.which!==32?null:(H_=!0,aa);case"textInput":return i=o.data,i===aa&&H_?null:i;default:return null}}function zC(i,o){if(la)return i==="compositionend"||!Ot&&q_(i,o)?(i=kl(),Sn=Zo=Un=null,la=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return oo&&o.locale!=="ko"?null:o.data;default:return null}}var $C={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!$C[i.type]:o==="textarea"}function Q_(i,o,l,h){Ur(h),o=Lc(o,"onChange"),0<o.length&&(l=new ta("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var bl=null,Dl=null;function WC(i){fy(i,0)}function xc(i){var o=fa(i);if(_n(o))return i}function HC(i,o){if(i==="change")return o}var Y_=!1;if(d){var Af;if(d){var kf="oninput"in document;if(!kf){var X_=document.createElement("div");X_.setAttribute("oninput","return;"),kf=typeof X_.oninput=="function"}Af=kf}else Af=!1;Y_=Af&&(!document.documentMode||9<document.documentMode)}function J_(){bl&&(bl.detachEvent("onpropertychange",Z_),Dl=bl=null)}function Z_(i){if(i.propertyName==="value"&&xc(Dl)){var o=[];Q_(o,Dl,i,Mr(i)),vl(WC,o)}}function qC(i,o,l){i==="focusin"?(J_(),bl=o,Dl=l,bl.attachEvent("onpropertychange",Z_)):i==="focusout"&&J_()}function GC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return xc(Dl)}function KC(i,o){if(i==="click")return xc(o)}function QC(i,o){if(i==="input"||i==="change")return xc(o)}function YC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var wr=typeof Object.is=="function"?Object.is:YC;function Ol(i,o){if(wr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!wr(i[p],o[p]))return!1}return!0}function ey(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ty(i,o){var l=ey(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ey(l)}}function ny(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?ny(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function ry(){for(var i=window,o=Gn();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Gn(i.document)}return o}function Pf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function XC(i){var o=ry(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&ny(l.ownerDocument.documentElement,l)){if(h!==null&&Pf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=ty(l,_);var w=ty(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var JC=d&&"documentMode"in document&&11>=document.documentMode,ua=null,Nf=null,Ll=null,xf=!1;function iy(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;xf||ua==null||ua!==Gn(h)||(h=ua,"selectionStart"in h&&Pf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ll&&Ol(Ll,h)||(Ll=h,h=Lc(Nf,"onSelect"),0<h.length&&(o=new ta("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=ua)))}function bc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ca={animationend:bc("Animation","AnimationEnd"),animationiteration:bc("Animation","AnimationIteration"),animationstart:bc("Animation","AnimationStart"),transitionend:bc("Transition","TransitionEnd")},bf={},sy={};d&&(sy=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Dc(i){if(bf[i])return bf[i];if(!ca[i])return i;var o=ca[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in sy)return bf[i]=o[l];return i}var oy=Dc("animationend"),ay=Dc("animationiteration"),ly=Dc("animationstart"),uy=Dc("transitionend"),cy=new Map,hy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(i,o){cy.set(i,o),a(o,[i])}for(var Df=0;Df<hy.length;Df++){var Of=hy[Df],ZC=Of.toLowerCase(),eR=Of[0].toUpperCase()+Of.slice(1);ns(ZC,"on"+eR)}ns(oy,"onAnimationEnd"),ns(ay,"onAnimationIteration"),ns(ly,"onAnimationStart"),ns("dblclick","onDoubleClick"),ns("focusin","onFocus"),ns("focusout","onBlur"),ns(uy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function dy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,uc(h,o,void 0,i),i.currentTarget=null}function fy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var R=h[w],x=R.instance,H=R.currentTarget;if(R=R.listener,x!==_&&p.isPropagationStopped())break e;dy(p,R,H),_=x}else for(w=0;w<h.length;w++){if(R=h[w],x=R.instance,H=R.currentTarget,R=R.listener,x!==_&&p.isPropagationStopped())break e;dy(p,R,H),_=x}}}if(fr)throw i=El,fr=!1,El=null,i}function dt(i,o){var l=o[zf];l===void 0&&(l=o[zf]=new Set);var h=i+"__bubble";l.has(h)||(py(o,i,2,!1),l.add(h))}function Lf(i,o,l){var h=0;o&&(h|=4),py(l,i,h,o)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Vl(i){if(!i[Oc]){i[Oc]=!0,r.forEach(function(l){l!=="selectionchange"&&(tR.has(l)||Lf(l,!1,i),Lf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Oc]||(o[Oc]=!0,Lf("selectionchange",!1,o))}}function py(i,o,l,h){switch(Al(o)){case 1:var p=gt;break;case 4:p=Cf;break;default:p=Rl}l=p.bind(null,o,l,i),p=void 0,!Wo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Mf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;w=w.return}for(;R!==null;){if(w=ao(R),w===null)return;if(x=w.tag,x===5||x===6){h=_=w;continue e}R=R.parentNode}}h=h.return}vl(function(){var H=_,ne=Mr(l),ie=[];e:{var ee=cy.get(i);if(ee!==void 0){var fe=ta,ye=i;switch(i){case"keypress":if(ea(l)===0)break e;case"keydown":case"keyup":fe=g;break;case"focusin":ye="focus",fe=sa;break;case"focusout":ye="blur",fe=sa;break;case"beforeblur":case"afterblur":fe=sa;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=q;break;case oy:case ay:case ly:fe=_i;break;case uy:fe=rt;break;case"scroll":fe=Rf;break;case"wheel":fe=qe;break;case"copy":case"cut":case"paste":fe=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=S}var ve=(o&4)!==0,kt=!ve&&i==="scroll",z=ve?ee!==null?ee+"Capture":null:ee;ve=[];for(var O=H,$;O!==null;){$=O;var oe=$.stateNode;if($.tag===5&&oe!==null&&($=oe,z!==null&&(oe=At(O,z),oe!=null&&ve.push(Fl(O,oe,$)))),kt)break;O=O.return}0<ve.length&&(ee=new fe(ee,ye,null,l,ne),ie.push({event:ee,listeners:ve}))}}if((o&7)===0){e:{if(ee=i==="mouseover"||i==="pointerover",fe=i==="mouseout"||i==="pointerout",ee&&l!==an&&(ye=l.relatedTarget||l.fromElement)&&(ao(ye)||ye[yi]))break e;if((fe||ee)&&(ee=ne.window===ne?ne:(ee=ne.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(ye=l.relatedTarget||l.toElement,fe=H,ye=ye?ao(ye):null,ye!==null&&(kt=pr(ye),ye!==kt||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(fe=null,ye=H),fe!==ye)){if(ve=ra,oe="onMouseLeave",z="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ve=S,oe="onPointerLeave",z="onPointerEnter",O="pointer"),kt=fe==null?ee:fa(fe),$=ye==null?ee:fa(ye),ee=new ve(oe,O+"leave",fe,l,ne),ee.target=kt,ee.relatedTarget=$,oe=null,ao(ne)===H&&(ve=new ve(z,O+"enter",ye,l,ne),ve.target=$,ve.relatedTarget=kt,oe=ve),kt=oe,fe&&ye)t:{for(ve=fe,z=ye,O=0,$=ve;$;$=ha($))O++;for($=0,oe=z;oe;oe=ha(oe))$++;for(;0<O-$;)ve=ha(ve),O--;for(;0<$-O;)z=ha(z),$--;for(;O--;){if(ve===z||z!==null&&ve===z.alternate)break t;ve=ha(ve),z=ha(z)}ve=null}else ve=null;fe!==null&&my(ie,ee,fe,ve,!1),ye!==null&&kt!==null&&my(ie,kt,ye,ve,!0)}}e:{if(ee=H?fa(H):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var Ee=HC;else if(K_(ee))if(Y_)Ee=QC;else{Ee=GC;var Se=qC}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(Ee=KC);if(Ee&&(Ee=Ee(i,H))){Q_(ie,Ee,l,ne);break e}Se&&Se(i,ee,H),i==="focusout"&&(Se=ee._wrapperState)&&Se.controlled&&ee.type==="number"&&ci(ee,"number",ee.value)}switch(Se=H?fa(H):window,i){case"focusin":(K_(Se)||Se.contentEditable==="true")&&(ua=Se,Nf=H,Ll=null);break;case"focusout":Ll=Nf=ua=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,iy(ie,l,ne);break;case"selectionchange":if(JC)break;case"keydown":case"keyup":iy(ie,l,ne)}var Ce;if(Ot)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else la?q_(i,l)&&(Ne="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(oo&&l.locale!=="ko"&&(la||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&la&&(Ce=kl()):(Un=ne,Zo="value"in Un?Un.value:Un.textContent,la=!0)),Se=Lc(H,Ne),0<Se.length&&(Ne=new xl(Ne,i,null,l,ne),ie.push({event:Ne,listeners:Se}),Ce?Ne.data=Ce:(Ce=G_(l),Ce!==null&&(Ne.data=Ce)))),(Ce=jn?BC(i,l):zC(i,l))&&(H=Lc(H,"onBeforeInput"),0<H.length&&(ne=new xl("onBeforeInput","beforeinput",null,l,ne),ie.push({event:ne,listeners:H}),ne.data=Ce))}fy(ie,o)})}function Fl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Lc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=At(i,l),_!=null&&h.unshift(Fl(i,_,p)),_=At(i,o),_!=null&&h.push(Fl(i,_,p))),i=i.return}return h}function ha(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function my(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var R=l,x=R.alternate,H=R.stateNode;if(x!==null&&x===h)break;R.tag===5&&H!==null&&(R=H,p?(x=At(l,_),x!=null&&w.unshift(Fl(l,x,R))):p||(x=At(l,_),x!=null&&w.push(Fl(l,x,R)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var nR=/\r\n?/g,rR=/\u0000|\uFFFD/g;function gy(i){return(typeof i=="string"?i:""+i).replace(nR,`
`).replace(rR,"")}function Mc(i,o,l){if(o=gy(o),gy(i)!==o&&l)throw Error(t(425))}function Vc(){}var Vf=null,Ff=null;function Uf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,iR=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,sR=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(i){return _y.resolve(null).then(i).catch(oR)}:jf;function oR(i){setTimeout(function(){throw i})}function Bf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),vr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);vr(o)}function rs(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function yy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var da=Math.random().toString(36).slice(2),Hr="__reactFiber$"+da,Ul="__reactProps$"+da,yi="__reactContainer$"+da,zf="__reactEvents$"+da,aR="__reactListeners$"+da,lR="__reactHandles$"+da;function ao(i){var o=i[Hr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[yi]||l[Hr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=yy(i);i!==null;){if(l=i[Hr])return l;i=yy(i)}return o}i=l,l=i.parentNode}return null}function jl(i){return i=i[Hr]||i[yi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function fa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Fc(i){return i[Ul]||null}var $f=[],pa=-1;function is(i){return{current:i}}function ft(i){0>pa||(i.current=$f[pa],$f[pa]=null,pa--)}function lt(i,o){pa++,$f[pa]=i.current,i.current=o}var ss={},ln=is(ss),Cn=is(!1),lo=ss;function ma(i,o){var l=i.type.contextTypes;if(!l)return ss;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Rn(i){return i=i.childContextTypes,i!=null}function Uc(){ft(Cn),ft(ln)}function vy(i,o,l){if(ln.current!==ss)throw Error(t(168));lt(ln,o),lt(Cn,l)}function Ey(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,We(i)||"Unknown",p));return re({},l,h)}function jc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ss,lo=ln.current,lt(ln,i),lt(Cn,Cn.current),!0}function wy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Ey(i,o,lo),h.__reactInternalMemoizedMergedChildContext=i,ft(Cn),ft(ln),lt(ln,i)):ft(Cn),lt(Cn,l)}var vi=null,Bc=!1,Wf=!1;function Ty(i){vi===null?vi=[i]:vi.push(i)}function uR(i){Bc=!0,Ty(i)}function os(){if(!Wf&&vi!==null){Wf=!0;var i=0,o=ze;try{var l=vi;for(ze=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}vi=null,Bc=!1}catch(p){throw vi!==null&&(vi=vi.slice(i+1)),Ko(Zs,os),p}finally{ze=o,Wf=!1}}return null}var ga=[],_a=0,zc=null,$c=0,Zn=[],er=0,uo=null,Ei=1,wi="";function co(i,o){ga[_a++]=$c,ga[_a++]=zc,zc=i,$c=o}function Iy(i,o,l){Zn[er++]=Ei,Zn[er++]=wi,Zn[er++]=uo,uo=i;var h=Ei;i=wi;var p=32-yn(h)-1;h&=~(1<<p),l+=1;var _=32-yn(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Ei=1<<32-yn(o)+p|l<<p|h,wi=_+i}else Ei=1<<_|l<<p|h,wi=i}function Hf(i){i.return!==null&&(co(i,1),Iy(i,1,0))}function qf(i){for(;i===zc;)zc=ga[--_a],ga[_a]=null,$c=ga[--_a],ga[_a]=null;for(;i===uo;)uo=Zn[--er],Zn[er]=null,wi=Zn[--er],Zn[er]=null,Ei=Zn[--er],Zn[er]=null}var Bn=null,zn=null,_t=!1,Tr=null;function Sy(i,o){var l=ir(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Cy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Bn=i,zn=rs(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Bn=i,zn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=uo!==null?{id:Ei,overflow:wi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=ir(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Bn=i,zn=null,!0):!1;default:return!1}}function Gf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Kf(i){if(_t){var o=zn;if(o){var l=o;if(!Cy(i,o)){if(Gf(i))throw Error(t(418));o=rs(l.nextSibling);var h=Bn;o&&Cy(i,o)?Sy(h,l):(i.flags=i.flags&-4097|2,_t=!1,Bn=i)}}else{if(Gf(i))throw Error(t(418));i.flags=i.flags&-4097|2,_t=!1,Bn=i}}}function Ry(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Bn=i}function Wc(i){if(i!==Bn)return!1;if(!_t)return Ry(i),_t=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Uf(i.type,i.memoizedProps)),o&&(o=zn)){if(Gf(i))throw Ay(),Error(t(418));for(;o;)Sy(i,o),o=rs(o.nextSibling)}if(Ry(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){zn=rs(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}zn=null}}else zn=Bn?rs(i.stateNode.nextSibling):null;return!0}function Ay(){for(var i=zn;i;)i=rs(i.nextSibling)}function ya(){zn=Bn=null,_t=!1}function Qf(i){Tr===null?Tr=[i]:Tr.push(i)}var cR=j.ReactCurrentBatchConfig;function Bl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var R=p.refs;w===null?delete R[_]:R[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Hc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function ky(i){var o=i._init;return o(i._payload)}function Py(i){function o(z,O){if(i){var $=z.deletions;$===null?(z.deletions=[O],z.flags|=16):$.push(O)}}function l(z,O){if(!i)return null;for(;O!==null;)o(z,O),O=O.sibling;return null}function h(z,O){for(z=new Map;O!==null;)O.key!==null?z.set(O.key,O):z.set(O.index,O),O=O.sibling;return z}function p(z,O){return z=ps(z,O),z.index=0,z.sibling=null,z}function _(z,O,$){return z.index=$,i?($=z.alternate,$!==null?($=$.index,$<O?(z.flags|=2,O):$):(z.flags|=2,O)):(z.flags|=1048576,O)}function w(z){return i&&z.alternate===null&&(z.flags|=2),z}function R(z,O,$,oe){return O===null||O.tag!==6?(O=jp($,z.mode,oe),O.return=z,O):(O=p(O,$),O.return=z,O)}function x(z,O,$,oe){var Ee=$.type;return Ee===N?ne(z,O,$.props.children,oe,$.key):O!==null&&(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===se&&ky(Ee)===O.type)?(oe=p(O,$.props),oe.ref=Bl(z,O,$),oe.return=z,oe):(oe=mh($.type,$.key,$.props,null,z.mode,oe),oe.ref=Bl(z,O,$),oe.return=z,oe)}function H(z,O,$,oe){return O===null||O.tag!==4||O.stateNode.containerInfo!==$.containerInfo||O.stateNode.implementation!==$.implementation?(O=Bp($,z.mode,oe),O.return=z,O):(O=p(O,$.children||[]),O.return=z,O)}function ne(z,O,$,oe,Ee){return O===null||O.tag!==7?(O=vo($,z.mode,oe,Ee),O.return=z,O):(O=p(O,$),O.return=z,O)}function ie(z,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return O=jp(""+O,z.mode,$),O.return=z,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case we:return $=mh(O.type,O.key,O.props,null,z.mode,$),$.ref=Bl(z,null,O),$.return=z,$;case me:return O=Bp(O,z.mode,$),O.return=z,O;case se:var oe=O._init;return ie(z,oe(O._payload),$)}if(hr(O)||le(O))return O=vo(O,z.mode,$,null),O.return=z,O;Hc(z,O)}return null}function ee(z,O,$,oe){var Ee=O!==null?O.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ee!==null?null:R(z,O,""+$,oe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case we:return $.key===Ee?x(z,O,$,oe):null;case me:return $.key===Ee?H(z,O,$,oe):null;case se:return Ee=$._init,ee(z,O,Ee($._payload),oe)}if(hr($)||le($))return Ee!==null?null:ne(z,O,$,oe,null);Hc(z,$)}return null}function fe(z,O,$,oe,Ee){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return z=z.get($)||null,R(O,z,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case we:return z=z.get(oe.key===null?$:oe.key)||null,x(O,z,oe,Ee);case me:return z=z.get(oe.key===null?$:oe.key)||null,H(O,z,oe,Ee);case se:var Se=oe._init;return fe(z,O,$,Se(oe._payload),Ee)}if(hr(oe)||le(oe))return z=z.get($)||null,ne(O,z,oe,Ee,null);Hc(O,oe)}return null}function ye(z,O,$,oe){for(var Ee=null,Se=null,Ce=O,Ne=O=0,Kt=null;Ce!==null&&Ne<$.length;Ne++){Ce.index>Ne?(Kt=Ce,Ce=null):Kt=Ce.sibling;var Qe=ee(z,Ce,$[Ne],oe);if(Qe===null){Ce===null&&(Ce=Kt);break}i&&Ce&&Qe.alternate===null&&o(z,Ce),O=_(Qe,O,Ne),Se===null?Ee=Qe:Se.sibling=Qe,Se=Qe,Ce=Kt}if(Ne===$.length)return l(z,Ce),_t&&co(z,Ne),Ee;if(Ce===null){for(;Ne<$.length;Ne++)Ce=ie(z,$[Ne],oe),Ce!==null&&(O=_(Ce,O,Ne),Se===null?Ee=Ce:Se.sibling=Ce,Se=Ce);return _t&&co(z,Ne),Ee}for(Ce=h(z,Ce);Ne<$.length;Ne++)Kt=fe(Ce,z,Ne,$[Ne],oe),Kt!==null&&(i&&Kt.alternate!==null&&Ce.delete(Kt.key===null?Ne:Kt.key),O=_(Kt,O,Ne),Se===null?Ee=Kt:Se.sibling=Kt,Se=Kt);return i&&Ce.forEach(function(ms){return o(z,ms)}),_t&&co(z,Ne),Ee}function ve(z,O,$,oe){var Ee=le($);if(typeof Ee!="function")throw Error(t(150));if($=Ee.call($),$==null)throw Error(t(151));for(var Se=Ee=null,Ce=O,Ne=O=0,Kt=null,Qe=$.next();Ce!==null&&!Qe.done;Ne++,Qe=$.next()){Ce.index>Ne?(Kt=Ce,Ce=null):Kt=Ce.sibling;var ms=ee(z,Ce,Qe.value,oe);if(ms===null){Ce===null&&(Ce=Kt);break}i&&Ce&&ms.alternate===null&&o(z,Ce),O=_(ms,O,Ne),Se===null?Ee=ms:Se.sibling=ms,Se=ms,Ce=Kt}if(Qe.done)return l(z,Ce),_t&&co(z,Ne),Ee;if(Ce===null){for(;!Qe.done;Ne++,Qe=$.next())Qe=ie(z,Qe.value,oe),Qe!==null&&(O=_(Qe,O,Ne),Se===null?Ee=Qe:Se.sibling=Qe,Se=Qe);return _t&&co(z,Ne),Ee}for(Ce=h(z,Ce);!Qe.done;Ne++,Qe=$.next())Qe=fe(Ce,z,Ne,Qe.value,oe),Qe!==null&&(i&&Qe.alternate!==null&&Ce.delete(Qe.key===null?Ne:Qe.key),O=_(Qe,O,Ne),Se===null?Ee=Qe:Se.sibling=Qe,Se=Qe);return i&&Ce.forEach(function($R){return o(z,$R)}),_t&&co(z,Ne),Ee}function kt(z,O,$,oe){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case we:e:{for(var Ee=$.key,Se=O;Se!==null;){if(Se.key===Ee){if(Ee=$.type,Ee===N){if(Se.tag===7){l(z,Se.sibling),O=p(Se,$.props.children),O.return=z,z=O;break e}}else if(Se.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===se&&ky(Ee)===Se.type){l(z,Se.sibling),O=p(Se,$.props),O.ref=Bl(z,Se,$),O.return=z,z=O;break e}l(z,Se);break}else o(z,Se);Se=Se.sibling}$.type===N?(O=vo($.props.children,z.mode,oe,$.key),O.return=z,z=O):(oe=mh($.type,$.key,$.props,null,z.mode,oe),oe.ref=Bl(z,O,$),oe.return=z,z=oe)}return w(z);case me:e:{for(Se=$.key;O!==null;){if(O.key===Se)if(O.tag===4&&O.stateNode.containerInfo===$.containerInfo&&O.stateNode.implementation===$.implementation){l(z,O.sibling),O=p(O,$.children||[]),O.return=z,z=O;break e}else{l(z,O);break}else o(z,O);O=O.sibling}O=Bp($,z.mode,oe),O.return=z,z=O}return w(z);case se:return Se=$._init,kt(z,O,Se($._payload),oe)}if(hr($))return ye(z,O,$,oe);if(le($))return ve(z,O,$,oe);Hc(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,O!==null&&O.tag===6?(l(z,O.sibling),O=p(O,$),O.return=z,z=O):(l(z,O),O=jp($,z.mode,oe),O.return=z,z=O),w(z)):l(z,O)}return kt}var va=Py(!0),Ny=Py(!1),qc=is(null),Gc=null,Ea=null,Yf=null;function Xf(){Yf=Ea=Gc=null}function Jf(i){var o=qc.current;ft(qc),i._currentValue=o}function Zf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function wa(i,o){Gc=i,Yf=Ea=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(An=!0),i.firstContext=null)}function tr(i){var o=i._currentValue;if(Yf!==i)if(i={context:i,memoizedValue:o,next:null},Ea===null){if(Gc===null)throw Error(t(308));Ea=i,Gc.dependencies={lanes:0,firstContext:i}}else Ea=Ea.next=i;return o}var ho=null;function ep(i){ho===null?ho=[i]:ho.push(i)}function xy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,ep(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ti(i,h)}function Ti(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var as=!1;function tp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function by(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ii(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ls(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ke&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ti(i,l)}return p=h.interleaved,p===null?(o.next=o,ep(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ti(i,l)}function Kc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Xi(i,l)}}function Dy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Qc(i,o,l,h){var p=i.updateQueue;as=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var x=R,H=x.next;x.next=null,w===null?_=H:w.next=H,w=x;var ne=i.alternate;ne!==null&&(ne=ne.updateQueue,R=ne.lastBaseUpdate,R!==w&&(R===null?ne.firstBaseUpdate=H:R.next=H,ne.lastBaseUpdate=x))}if(_!==null){var ie=p.baseState;w=0,ne=H=x=null,R=_;do{var ee=R.lane,fe=R.eventTime;if((h&ee)===ee){ne!==null&&(ne=ne.next={eventTime:fe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ye=i,ve=R;switch(ee=o,fe=l,ve.tag){case 1:if(ye=ve.payload,typeof ye=="function"){ie=ye.call(fe,ie,ee);break e}ie=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=ve.payload,ee=typeof ye=="function"?ye.call(fe,ie,ee):ye,ee==null)break e;ie=re({},ie,ee);break e;case 2:as=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,ee=p.effects,ee===null?p.effects=[R]:ee.push(R))}else fe={eventTime:fe,lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ne===null?(H=ne=fe,x=ie):ne=ne.next=fe,w|=ee;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;ee=R,R=ee.next,ee.next=null,p.lastBaseUpdate=ee,p.shared.pending=null}}while(!0);if(ne===null&&(x=ie),p.baseState=x,p.firstBaseUpdate=H,p.lastBaseUpdate=ne,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);mo|=w,i.lanes=w,i.memoizedState=ie}}function Oy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var zl={},qr=is(zl),$l=is(zl),Wl=is(zl);function fo(i){if(i===zl)throw Error(t(174));return i}function np(i,o){switch(lt(Wl,o),lt($l,i),lt(qr,zl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Je(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Je(o,i)}ft(qr),lt(qr,o)}function Ta(){ft(qr),ft($l),ft(Wl)}function Ly(i){fo(Wl.current);var o=fo(qr.current),l=Je(o,i.type);o!==l&&(lt($l,i),lt(qr,l))}function rp(i){$l.current===i&&(ft(qr),ft($l))}var yt=is(0);function Yc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var ip=[];function sp(){for(var i=0;i<ip.length;i++)ip[i]._workInProgressVersionPrimary=null;ip.length=0}var Xc=j.ReactCurrentDispatcher,op=j.ReactCurrentBatchConfig,po=0,vt=null,zt=null,qt=null,Jc=!1,Hl=!1,ql=0,hR=0;function un(){throw Error(t(321))}function ap(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!wr(i[l],o[l]))return!1;return!0}function lp(i,o,l,h,p,_){if(po=_,vt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Xc.current=i===null||i.memoizedState===null?mR:gR,i=l(h,p),Hl){_=0;do{if(Hl=!1,ql=0,25<=_)throw Error(t(301));_+=1,qt=zt=null,o.updateQueue=null,Xc.current=_R,i=l(h,p)}while(Hl)}if(Xc.current=th,o=zt!==null&&zt.next!==null,po=0,qt=zt=vt=null,Jc=!1,o)throw Error(t(300));return i}function up(){var i=ql!==0;return ql=0,i}function Gr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?vt.memoizedState=qt=i:qt=qt.next=i,qt}function nr(){if(zt===null){var i=vt.alternate;i=i!==null?i.memoizedState:null}else i=zt.next;var o=qt===null?vt.memoizedState:qt.next;if(o!==null)qt=o,zt=i;else{if(i===null)throw Error(t(310));zt=i,i={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},qt===null?vt.memoizedState=qt=i:qt=qt.next=i}return qt}function Gl(i,o){return typeof o=="function"?o(i):o}function cp(i){var o=nr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=zt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var R=w=null,x=null,H=_;do{var ne=H.lane;if((po&ne)===ne)x!==null&&(x=x.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:i(h,H.action);else{var ie={lane:ne,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};x===null?(R=x=ie,w=h):x=x.next=ie,vt.lanes|=ne,mo|=ne}H=H.next}while(H!==null&&H!==_);x===null?w=h:x.next=R,wr(h,o.memoizedState)||(An=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=x,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,vt.lanes|=_,mo|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function hp(i){var o=nr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);wr(_,o.memoizedState)||(An=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function My(){}function Vy(i,o){var l=vt,h=nr(),p=o(),_=!wr(h.memoizedState,p);if(_&&(h.memoizedState=p,An=!0),h=h.queue,dp(jy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||qt!==null&&qt.memoizedState.tag&1){if(l.flags|=2048,Kl(9,Uy.bind(null,l,h,p,o),void 0,null),Gt===null)throw Error(t(349));(po&30)!==0||Fy(l,o,p)}return p}function Fy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=vt.updateQueue,o===null?(o={lastEffect:null,stores:null},vt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Uy(i,o,l,h){o.value=l,o.getSnapshot=h,By(o)&&zy(i)}function jy(i,o,l){return l(function(){By(o)&&zy(i)})}function By(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!wr(i,l)}catch{return!0}}function zy(i){var o=Ti(i,1);o!==null&&Rr(o,i,1,-1)}function $y(i){var o=Gr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:i},o.queue=i,i=i.dispatch=pR.bind(null,vt,i),[o.memoizedState,i]}function Kl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=vt.updateQueue,o===null?(o={lastEffect:null,stores:null},vt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Wy(){return nr().memoizedState}function Zc(i,o,l,h){var p=Gr();vt.flags|=i,p.memoizedState=Kl(1|o,l,void 0,h===void 0?null:h)}function eh(i,o,l,h){var p=nr();h=h===void 0?null:h;var _=void 0;if(zt!==null){var w=zt.memoizedState;if(_=w.destroy,h!==null&&ap(h,w.deps)){p.memoizedState=Kl(o,l,_,h);return}}vt.flags|=i,p.memoizedState=Kl(1|o,l,_,h)}function Hy(i,o){return Zc(8390656,8,i,o)}function dp(i,o){return eh(2048,8,i,o)}function qy(i,o){return eh(4,2,i,o)}function Gy(i,o){return eh(4,4,i,o)}function Ky(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Qy(i,o,l){return l=l!=null?l.concat([i]):null,eh(4,4,Ky.bind(null,o,i),l)}function fp(){}function Yy(i,o){var l=nr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ap(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Xy(i,o){var l=nr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ap(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Jy(i,o,l){return(po&21)===0?(i.baseState&&(i.baseState=!1,An=!0),i.memoizedState=l):(wr(l,o)||(l=no(),vt.lanes|=l,mo|=l,i.baseState=!0),o)}function dR(i,o){var l=ze;ze=l!==0&&4>l?l:4,i(!0);var h=op.transition;op.transition={};try{i(!1),o()}finally{ze=l,op.transition=h}}function Zy(){return nr().memoizedState}function fR(i,o,l){var h=ds(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},ev(i))tv(o,l);else if(l=xy(i,o,l,h),l!==null){var p=wn();Rr(l,i,h,p),nv(l,o,h)}}function pR(i,o,l){var h=ds(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(ev(i))tv(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,R=_(w,l);if(p.hasEagerState=!0,p.eagerState=R,wr(R,w)){var x=o.interleaved;x===null?(p.next=p,ep(o)):(p.next=x.next,x.next=p),o.interleaved=p;return}}catch{}finally{}l=xy(i,o,p,h),l!==null&&(p=wn(),Rr(l,i,h,p),nv(l,o,h))}}function ev(i){var o=i.alternate;return i===vt||o!==null&&o===vt}function tv(i,o){Hl=Jc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function nv(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Xi(i,l)}}var th={readContext:tr,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},mR={readContext:tr,useCallback:function(i,o){return Gr().memoizedState=[i,o===void 0?null:o],i},useContext:tr,useEffect:Hy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Zc(4194308,4,Ky.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Zc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Zc(4,2,i,o)},useMemo:function(i,o){var l=Gr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Gr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=fR.bind(null,vt,i),[h.memoizedState,i]},useRef:function(i){var o=Gr();return i={current:i},o.memoizedState=i},useState:$y,useDebugValue:fp,useDeferredValue:function(i){return Gr().memoizedState=i},useTransition:function(){var i=$y(!1),o=i[0];return i=dR.bind(null,i[1]),Gr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=vt,p=Gr();if(_t){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Gt===null)throw Error(t(349));(po&30)!==0||Fy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Hy(jy.bind(null,h,_,i),[i]),h.flags|=2048,Kl(9,Uy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Gr(),o=Gt.identifierPrefix;if(_t){var l=wi,h=Ei;l=(h&~(1<<32-yn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ql++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=hR++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},gR={readContext:tr,useCallback:Yy,useContext:tr,useEffect:dp,useImperativeHandle:Qy,useInsertionEffect:qy,useLayoutEffect:Gy,useMemo:Xy,useReducer:cp,useRef:Wy,useState:function(){return cp(Gl)},useDebugValue:fp,useDeferredValue:function(i){var o=nr();return Jy(o,zt.memoizedState,i)},useTransition:function(){var i=cp(Gl)[0],o=nr().memoizedState;return[i,o]},useMutableSource:My,useSyncExternalStore:Vy,useId:Zy,unstable_isNewReconciler:!1},_R={readContext:tr,useCallback:Yy,useContext:tr,useEffect:dp,useImperativeHandle:Qy,useInsertionEffect:qy,useLayoutEffect:Gy,useMemo:Xy,useReducer:hp,useRef:Wy,useState:function(){return hp(Gl)},useDebugValue:fp,useDeferredValue:function(i){var o=nr();return zt===null?o.memoizedState=i:Jy(o,zt.memoizedState,i)},useTransition:function(){var i=hp(Gl)[0],o=nr().memoizedState;return[i,o]},useMutableSource:My,useSyncExternalStore:Vy,useId:Zy,unstable_isNewReconciler:!1};function Ir(i,o){if(i&&i.defaultProps){o=re({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function pp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:re({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var nh={isMounted:function(i){return(i=i._reactInternals)?pr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=wn(),p=ds(i),_=Ii(h,p);_.payload=o,l!=null&&(_.callback=l),o=ls(i,_,p),o!==null&&(Rr(o,i,p,h),Kc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=wn(),p=ds(i),_=Ii(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ls(i,_,p),o!==null&&(Rr(o,i,p,h),Kc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=wn(),h=ds(i),p=Ii(l,h);p.tag=2,o!=null&&(p.callback=o),o=ls(i,p,h),o!==null&&(Rr(o,i,h,l),Kc(o,i,h))}};function rv(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!Ol(l,h)||!Ol(p,_):!0}function iv(i,o,l){var h=!1,p=ss,_=o.contextType;return typeof _=="object"&&_!==null?_=tr(_):(p=Rn(o)?lo:ln.current,h=o.contextTypes,_=(h=h!=null)?ma(i,p):ss),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function sv(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&nh.enqueueReplaceState(o,o.state,null)}function mp(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},tp(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=tr(_):(_=Rn(o)?lo:ln.current,p.context=ma(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(pp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&nh.enqueueReplaceState(p,p.state,null),Qc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ia(i,o){try{var l="",h=o;do l+=De(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function gp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function _p(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var yR=typeof WeakMap=="function"?WeakMap:Map;function ov(i,o,l){l=Ii(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){uh||(uh=!0,bp=h),_p(i,o)},l}function av(i,o,l){l=Ii(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){_p(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){_p(i,o),typeof h!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function lv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new yR;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=bR.bind(null,i,o,l),o.then(i,i))}function uv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function cv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ii(-1,1),o.tag=2,ls(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var vR=j.ReactCurrentOwner,An=!1;function En(i,o,l,h){o.child=i===null?Ny(o,null,l,h):va(o,i.child,l,h)}function hv(i,o,l,h,p){l=l.render;var _=o.ref;return wa(o,p),h=lp(i,o,l,h,_,p),l=up(),i!==null&&!An?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Si(i,o,p)):(_t&&l&&Hf(o),o.flags|=1,En(i,o,h,p),o.child)}function dv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Up(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,fv(i,o,_,h,p)):(i=mh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ol,l(w,h)&&i.ref===o.ref)return Si(i,o,p)}return o.flags|=1,i=ps(_,h),i.ref=o.ref,i.return=o,o.child=i}function fv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Ol(_,h)&&i.ref===o.ref)if(An=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(An=!0);else return o.lanes=i.lanes,Si(i,o,p)}return yp(i,o,l,h,p)}function pv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ca,$n),$n|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,lt(Ca,$n),$n|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,lt(Ca,$n),$n|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,lt(Ca,$n),$n|=h;return En(i,o,p,l),o.child}function mv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function yp(i,o,l,h,p){var _=Rn(l)?lo:ln.current;return _=ma(o,_),wa(o,p),l=lp(i,o,l,h,_,p),h=up(),i!==null&&!An?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Si(i,o,p)):(_t&&h&&Hf(o),o.flags|=1,En(i,o,l,p),o.child)}function gv(i,o,l,h,p){if(Rn(l)){var _=!0;jc(o)}else _=!1;if(wa(o,p),o.stateNode===null)ih(i,o),iv(o,l,h),mp(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,R=o.memoizedProps;w.props=R;var x=w.context,H=l.contextType;typeof H=="object"&&H!==null?H=tr(H):(H=Rn(l)?lo:ln.current,H=ma(o,H));var ne=l.getDerivedStateFromProps,ie=typeof ne=="function"||typeof w.getSnapshotBeforeUpdate=="function";ie||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||x!==H)&&sv(o,w,h,H),as=!1;var ee=o.memoizedState;w.state=ee,Qc(o,h,w,p),x=o.memoizedState,R!==h||ee!==x||Cn.current||as?(typeof ne=="function"&&(pp(o,l,ne,h),x=o.memoizedState),(R=as||rv(o,l,R,h,ee,x,H))?(ie||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=x),w.props=h,w.state=x,w.context=H,h=R):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,by(i,o),R=o.memoizedProps,H=o.type===o.elementType?R:Ir(o.type,R),w.props=H,ie=o.pendingProps,ee=w.context,x=l.contextType,typeof x=="object"&&x!==null?x=tr(x):(x=Rn(l)?lo:ln.current,x=ma(o,x));var fe=l.getDerivedStateFromProps;(ne=typeof fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==ie||ee!==x)&&sv(o,w,h,x),as=!1,ee=o.memoizedState,w.state=ee,Qc(o,h,w,p);var ye=o.memoizedState;R!==ie||ee!==ye||Cn.current||as?(typeof fe=="function"&&(pp(o,l,fe,h),ye=o.memoizedState),(H=as||rv(o,l,H,h,ee,ye,x)||!1)?(ne||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ye,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ye,x)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ye),w.props=h,w.state=ye,w.context=x,h=H):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=1024),h=!1)}return vp(i,o,l,h,_,p)}function vp(i,o,l,h,p,_){mv(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&wy(o,l,!1),Si(i,o,_);h=o.stateNode,vR.current=o;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=va(o,i.child,null,_),o.child=va(o,null,R,_)):En(i,o,R,_),o.memoizedState=h.state,p&&wy(o,l,!0),o.child}function _v(i){var o=i.stateNode;o.pendingContext?vy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&vy(i,o.context,!1),np(i,o.containerInfo)}function yv(i,o,l,h,p){return ya(),Qf(p),o.flags|=256,En(i,o,l,h),o.child}var Ep={dehydrated:null,treeContext:null,retryLane:0};function wp(i){return{baseLanes:i,cachePool:null,transitions:null}}function vv(i,o,l){var h=o.pendingProps,p=yt.current,_=!1,w=(o.flags&128)!==0,R;if((R=w)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),lt(yt,p&1),i===null)return Kf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=gh(w,h,0,null),i=vo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=wp(l),o.memoizedState=Ep,i):Tp(o,w));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return ER(i,o,w,h,R,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,R=p.sibling;var x={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=x,o.deletions=null):(h=ps(p,x),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?_=ps(R,_):(_=vo(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?wp(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=Ep,h}return _=i.child,i=_.sibling,h=ps(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Tp(i,o){return o=gh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function rh(i,o,l,h){return h!==null&&Qf(h),va(o,i.child,null,l),i=Tp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function ER(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=gp(Error(t(422))),rh(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=gh({mode:"visible",children:h.children},p,0,null),_=vo(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&va(o,i.child,null,w),o.child.memoizedState=wp(w),o.memoizedState=Ep,_);if((o.mode&1)===0)return rh(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,_=Error(t(419)),h=gp(_,h,void 0),rh(i,o,w,h)}if(R=(w&i.childLanes)!==0,An||R){if(h=Gt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ti(i,p),Rr(h,i,p,-1))}return Fp(),h=gp(Error(t(421))),rh(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=DR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,zn=rs(p.nextSibling),Bn=o,_t=!0,Tr=null,i!==null&&(Zn[er++]=Ei,Zn[er++]=wi,Zn[er++]=uo,Ei=i.id,wi=i.overflow,uo=o),o=Tp(o,h.children),o.flags|=4096,o)}function Ev(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Zf(i.return,o,l)}function Ip(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function wv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(En(i,o,h.children,l),h=yt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ev(i,l,o);else if(i.tag===19)Ev(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(lt(yt,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Yc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Ip(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Yc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Ip(o,!0,l,null,_);break;case"together":Ip(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ih(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Si(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),mo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=ps(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=ps(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function wR(i,o,l){switch(o.tag){case 3:_v(o),ya();break;case 5:Ly(o);break;case 1:Rn(o.type)&&jc(o);break;case 4:np(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;lt(qc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(lt(yt,yt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?vv(i,o,l):(lt(yt,yt.current&1),i=Si(i,o,l),i!==null?i.sibling:null);lt(yt,yt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return wv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),lt(yt,yt.current),h)break;return null;case 22:case 23:return o.lanes=0,pv(i,o,l)}return Si(i,o,l)}var Tv,Sp,Iv,Sv;Tv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sp=function(){},Iv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,fo(qr.current);var _=null;switch(l){case"input":p=ur(i,p),h=ur(i,h),_=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),_=[];break;case"textarea":p=Wi(i,p),h=Wi(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Vc)}Dt(l,h);var w;l=null;for(H in p)if(!h.hasOwnProperty(H)&&p.hasOwnProperty(H)&&p[H]!=null)if(H==="style"){var R=p[H];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(s.hasOwnProperty(H)?_||(_=[]):(_=_||[]).push(H,null));for(H in h){var x=h[H];if(R=p!=null?p[H]:void 0,h.hasOwnProperty(H)&&x!==R&&(x!=null||R!=null))if(H==="style")if(R){for(w in R)!R.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in x)x.hasOwnProperty(w)&&R[w]!==x[w]&&(l||(l={}),l[w]=x[w])}else l||(_||(_=[]),_.push(H,l)),l=x;else H==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,R=R?R.__html:void 0,x!=null&&R!==x&&(_=_||[]).push(H,x)):H==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push(H,""+x):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(s.hasOwnProperty(H)?(x!=null&&H==="onScroll"&&dt("scroll",i),_||R===x||(_=[])):(_=_||[]).push(H,x))}l&&(_=_||[]).push("style",l);var H=_;(o.updateQueue=H)&&(o.flags|=4)}},Sv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Ql(i,o){if(!_t)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function cn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function TR(i,o,l){var h=o.pendingProps;switch(qf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(o),null;case 1:return Rn(o.type)&&Uc(),cn(o),null;case 3:return h=o.stateNode,Ta(),ft(Cn),ft(ln),sp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Wc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Tr!==null&&(Lp(Tr),Tr=null))),Sp(i,o),cn(o),null;case 5:rp(o);var p=fo(Wl.current);if(l=o.type,i!==null&&o.stateNode!=null)Iv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return cn(o),null}if(i=fo(qr.current),Wc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Hr]=o,h[Ul]=_,i=(o.mode&1)!==0,l){case"dialog":dt("cancel",h),dt("close",h);break;case"iframe":case"object":case"embed":dt("load",h);break;case"video":case"audio":for(p=0;p<Ml.length;p++)dt(Ml[p],h);break;case"source":dt("error",h);break;case"img":case"image":case"link":dt("error",h),dt("load",h);break;case"details":dt("toggle",h);break;case"input":zi(h,_),dt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},dt("invalid",h);break;case"textarea":Hi(h,_),dt("invalid",h)}Dt(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var R=_[w];w==="children"?typeof R=="string"?h.textContent!==R&&(_.suppressHydrationWarning!==!0&&Mc(h.textContent,R,i),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(_.suppressHydrationWarning!==!0&&Mc(h.textContent,R,i),p=["children",""+R]):s.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&dt("scroll",h)}switch(l){case"input":Mn(h),$i(h,_,!0);break;case"textarea":Mn(h),hi(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Vc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Hr]=o,i[Ul]=h,Tv(i,o,!1,!1),o.stateNode=i;e:{switch(w=Rt(l,h),l){case"dialog":dt("cancel",i),dt("close",i),p=h;break;case"iframe":case"object":case"embed":dt("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ml.length;p++)dt(Ml[p],i);p=h;break;case"source":dt("error",i),p=h;break;case"img":case"image":case"link":dt("error",i),dt("load",i),p=h;break;case"details":dt("toggle",i),p=h;break;case"input":zi(i,h),p=ur(i,h),dt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),dt("invalid",i);break;case"textarea":Hi(i,h),p=Wi(i,h),dt("invalid",i);break;default:p=h}Dt(l,p),R=p;for(_ in R)if(R.hasOwnProperty(_)){var x=R[_];_==="style"?bt(i,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&he(i,x)):_==="children"?typeof x=="string"?(l!=="textarea"||x!=="")&&ge(i,x):typeof x=="number"&&ge(i,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?x!=null&&_==="onScroll"&&dt("scroll",i):x!=null&&te(i,_,x,w))}switch(l){case"input":Mn(i),$i(i,h,!1);break;case"textarea":Mn(i),hi(i);break;case"option":h.value!=null&&i.setAttribute("value",""+He(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Kn(i,!!h.multiple,_,!1):h.defaultValue!=null&&Kn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Vc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return cn(o),null;case 6:if(i&&o.stateNode!=null)Sv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=fo(Wl.current),fo(qr.current),Wc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Hr]=o,(_=h.nodeValue!==l)&&(i=Bn,i!==null))switch(i.tag){case 3:Mc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Mc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Hr]=o,o.stateNode=h}return cn(o),null;case 13:if(ft(yt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(_t&&zn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ay(),ya(),o.flags|=98560,_=!1;else if(_=Wc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Hr]=o}else ya(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;cn(o),_=!1}else Tr!==null&&(Lp(Tr),Tr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(yt.current&1)!==0?$t===0&&($t=3):Fp())),o.updateQueue!==null&&(o.flags|=4),cn(o),null);case 4:return Ta(),Sp(i,o),i===null&&Vl(o.stateNode.containerInfo),cn(o),null;case 10:return Jf(o.type._context),cn(o),null;case 17:return Rn(o.type)&&Uc(),cn(o),null;case 19:if(ft(yt),_=o.memoizedState,_===null)return cn(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)Ql(_,!1);else{if($t!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=Yc(i),w!==null){for(o.flags|=128,Ql(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return lt(yt,yt.current&1|2),o.child}i=i.sibling}_.tail!==null&&at()>Ra&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304)}else{if(!h)if(i=Yc(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!_t)return cn(o),null}else 2*at()-_.renderingStartTime>Ra&&l!==1073741824&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=at(),o.sibling=null,l=yt.current,lt(yt,h?l&1|2:l&1),o):(cn(o),null);case 22:case 23:return Vp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?($n&1073741824)!==0&&(cn(o),o.subtreeFlags&6&&(o.flags|=8192)):cn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function IR(i,o){switch(qf(o),o.tag){case 1:return Rn(o.type)&&Uc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ta(),ft(Cn),ft(ln),sp(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return rp(o),null;case 13:if(ft(yt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ya()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return ft(yt),null;case 4:return Ta(),null;case 10:return Jf(o.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var sh=!1,hn=!1,SR=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Sa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Tt(i,o,h)}else l.current=null}function Cp(i,o,l){try{l()}catch(h){Tt(i,o,h)}}var Cv=!1;function CR(i,o){if(Vf=es,i=ry(),Pf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,R=-1,x=-1,H=0,ne=0,ie=i,ee=null;t:for(;;){for(var fe;ie!==l||p!==0&&ie.nodeType!==3||(R=w+p),ie!==_||h!==0&&ie.nodeType!==3||(x=w+h),ie.nodeType===3&&(w+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)ee=ie,ie=fe;for(;;){if(ie===i)break t;if(ee===l&&++H===p&&(R=w),ee===_&&++ne===h&&(x=w),(fe=ie.nextSibling)!==null)break;ie=ee,ee=ie.parentNode}ie=fe}l=R===-1||x===-1?null:{start:R,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ff={focusedElem:i,selectionRange:l},es=!1,_e=o;_e!==null;)if(o=_e,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,_e=i;else for(;_e!==null;){o=_e;try{var ye=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var ve=ye.memoizedProps,kt=ye.memoizedState,z=o.stateNode,O=z.getSnapshotBeforeUpdate(o.elementType===o.type?ve:Ir(o.type,ve),kt);z.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(oe){Tt(o,o.return,oe)}if(i=o.sibling,i!==null){i.return=o.return,_e=i;break}_e=o.return}return ye=Cv,Cv=!1,ye}function Yl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Cp(o,l,_)}p=p.next}while(p!==h)}}function oh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Rp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Rv(i){var o=i.alternate;o!==null&&(i.alternate=null,Rv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Hr],delete o[Ul],delete o[zf],delete o[aR],delete o[lR])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Av(i){return i.tag===5||i.tag===3||i.tag===4}function kv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Av(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ap(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Vc));else if(h!==4&&(i=i.child,i!==null))for(Ap(i,o,l),i=i.sibling;i!==null;)Ap(i,o,l),i=i.sibling}function kp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(kp(i,o,l),i=i.sibling;i!==null;)kp(i,o,l),i=i.sibling}var tn=null,Sr=!1;function us(i,o,l){for(l=l.child;l!==null;)Pv(i,o,l),l=l.sibling}function Pv(i,o,l){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(eo,l)}catch{}switch(l.tag){case 5:hn||Sa(l,o);case 6:var h=tn,p=Sr;tn=null,us(i,o,l),tn=h,Sr=p,tn!==null&&(Sr?(i=tn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):tn.removeChild(l.stateNode));break;case 18:tn!==null&&(Sr?(i=tn,l=l.stateNode,i.nodeType===8?Bf(i.parentNode,l):i.nodeType===1&&Bf(i,l),vr(i)):Bf(tn,l.stateNode));break;case 4:h=tn,p=Sr,tn=l.stateNode.containerInfo,Sr=!0,us(i,o,l),tn=h,Sr=p;break;case 0:case 11:case 14:case 15:if(!hn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Cp(l,o,w),p=p.next}while(p!==h)}us(i,o,l);break;case 1:if(!hn&&(Sa(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){Tt(l,o,R)}us(i,o,l);break;case 21:us(i,o,l);break;case 22:l.mode&1?(hn=(h=hn)||l.memoizedState!==null,us(i,o,l),hn=h):us(i,o,l);break;default:us(i,o,l)}}function Nv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new SR),o.forEach(function(h){var p=OR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Cr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,R=w;e:for(;R!==null;){switch(R.tag){case 5:tn=R.stateNode,Sr=!1;break e;case 3:tn=R.stateNode.containerInfo,Sr=!0;break e;case 4:tn=R.stateNode.containerInfo,Sr=!0;break e}R=R.return}if(tn===null)throw Error(t(160));Pv(_,w,p),tn=null,Sr=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(H){Tt(p,o,H)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)xv(o,i),o=o.sibling}function xv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Cr(o,i),Kr(i),h&4){try{Yl(3,i,i.return),oh(3,i)}catch(ve){Tt(i,i.return,ve)}try{Yl(5,i,i.return)}catch(ve){Tt(i,i.return,ve)}}break;case 1:Cr(o,i),Kr(i),h&512&&l!==null&&Sa(l,l.return);break;case 5:if(Cr(o,i),Kr(i),h&512&&l!==null&&Sa(l,l.return),i.flags&32){var p=i.stateNode;try{ge(p,"")}catch(ve){Tt(i,i.return,ve)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,R=i.type,x=i.updateQueue;if(i.updateQueue=null,x!==null)try{R==="input"&&_.type==="radio"&&_.name!=null&&ui(p,_),Rt(R,w);var H=Rt(R,_);for(w=0;w<x.length;w+=2){var ne=x[w],ie=x[w+1];ne==="style"?bt(p,ie):ne==="dangerouslySetInnerHTML"?he(p,ie):ne==="children"?ge(p,ie):te(p,ne,ie,H)}switch(R){case"input":cr(p,_);break;case"textarea":qi(p,_);break;case"select":var ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var fe=_.value;fe!=null?Kn(p,!!_.multiple,fe,!1):ee!==!!_.multiple&&(_.defaultValue!=null?Kn(p,!!_.multiple,_.defaultValue,!0):Kn(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ul]=_}catch(ve){Tt(i,i.return,ve)}}break;case 6:if(Cr(o,i),Kr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(ve){Tt(i,i.return,ve)}}break;case 3:if(Cr(o,i),Kr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{vr(o.containerInfo)}catch(ve){Tt(i,i.return,ve)}break;case 4:Cr(o,i),Kr(i);break;case 13:Cr(o,i),Kr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(xp=at())),h&4&&Nv(i);break;case 22:if(ne=l!==null&&l.memoizedState!==null,i.mode&1?(hn=(H=hn)||ne,Cr(o,i),hn=H):Cr(o,i),Kr(i),h&8192){if(H=i.memoizedState!==null,(i.stateNode.isHidden=H)&&!ne&&(i.mode&1)!==0)for(_e=i,ne=i.child;ne!==null;){for(ie=_e=ne;_e!==null;){switch(ee=_e,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:Yl(4,ee,ee.return);break;case 1:Sa(ee,ee.return);var ye=ee.stateNode;if(typeof ye.componentWillUnmount=="function"){h=ee,l=ee.return;try{o=h,ye.props=o.memoizedProps,ye.state=o.memoizedState,ye.componentWillUnmount()}catch(ve){Tt(h,l,ve)}}break;case 5:Sa(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Ov(ie);continue}}fe!==null?(fe.return=ee,_e=fe):Ov(ie)}ne=ne.sibling}e:for(ne=null,ie=i;;){if(ie.tag===5){if(ne===null){ne=ie;try{p=ie.stateNode,H?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(R=ie.stateNode,x=ie.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,R.style.display=Lr("display",w))}catch(ve){Tt(i,i.return,ve)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=H?"":ie.memoizedProps}catch(ve){Tt(i,i.return,ve)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===i)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===i)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===i)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Cr(o,i),Kr(i),h&4&&Nv(i);break;case 21:break;default:Cr(o,i),Kr(i)}}function Kr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Av(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ge(p,""),h.flags&=-33);var _=kv(i);kp(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,R=kv(i);Ap(i,R,w);break;default:throw Error(t(161))}}catch(x){Tt(i,i.return,x)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function RR(i,o,l){_e=i,bv(i)}function bv(i,o,l){for(var h=(i.mode&1)!==0;_e!==null;){var p=_e,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||sh;if(!w){var R=p.alternate,x=R!==null&&R.memoizedState!==null||hn;R=sh;var H=hn;if(sh=w,(hn=x)&&!H)for(_e=p;_e!==null;)w=_e,x=w.child,w.tag===22&&w.memoizedState!==null?Lv(p):x!==null?(x.return=w,_e=x):Lv(p);for(;_!==null;)_e=_,bv(_),_=_.sibling;_e=p,sh=R,hn=H}Dv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,_e=_):Dv(i)}}function Dv(i){for(;_e!==null;){var o=_e;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:hn||oh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!hn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Ir(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Oy(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Oy(o,w,l)}break;case 5:var R=o.stateNode;if(l===null&&o.flags&4){l=R;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&l.focus();break;case"img":x.src&&(l.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var H=o.alternate;if(H!==null){var ne=H.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&vr(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||o.flags&512&&Rp(o)}catch(ee){Tt(o,o.return,ee)}}if(o===i){_e=null;break}if(l=o.sibling,l!==null){l.return=o.return,_e=l;break}_e=o.return}}function Ov(i){for(;_e!==null;){var o=_e;if(o===i){_e=null;break}var l=o.sibling;if(l!==null){l.return=o.return,_e=l;break}_e=o.return}}function Lv(i){for(;_e!==null;){var o=_e;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{oh(4,o)}catch(x){Tt(o,l,x)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(x){Tt(o,p,x)}}var _=o.return;try{Rp(o)}catch(x){Tt(o,_,x)}break;case 5:var w=o.return;try{Rp(o)}catch(x){Tt(o,w,x)}}}catch(x){Tt(o,o.return,x)}if(o===i){_e=null;break}var R=o.sibling;if(R!==null){R.return=o.return,_e=R;break}_e=o.return}}var AR=Math.ceil,ah=j.ReactCurrentDispatcher,Pp=j.ReactCurrentOwner,rr=j.ReactCurrentBatchConfig,Ke=0,Gt=null,Lt=null,nn=0,$n=0,Ca=is(0),$t=0,Xl=null,mo=0,lh=0,Np=0,Jl=null,kn=null,xp=0,Ra=1/0,Ci=null,uh=!1,bp=null,cs=null,ch=!1,hs=null,hh=0,Zl=0,Dp=null,dh=-1,fh=0;function wn(){return(Ke&6)!==0?at():dh!==-1?dh:dh=at()}function ds(i){return(i.mode&1)===0?1:(Ke&2)!==0&&nn!==0?nn&-nn:cR.transition!==null?(fh===0&&(fh=no()),fh):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Al(i.type)),i)}function Rr(i,o,l,h){if(50<Zl)throw Zl=0,Dp=null,Error(t(185));Yi(i,l,h),((Ke&2)===0||i!==Gt)&&(i===Gt&&((Ke&2)===0&&(lh|=l),$t===4&&fs(i,nn)),Pn(i,h),l===1&&Ke===0&&(o.mode&1)===0&&(Ra=at()+500,Bc&&os()))}function Pn(i,o){var l=i.callbackNode;fi(i,o);var h=to(i,i===Gt?nn:0);if(h===0)l!==null&&Tl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Tl(l),o===1)i.tag===0?uR(Vv.bind(null,i)):Ty(Vv.bind(null,i)),sR(function(){(Ke&6)===0&&os()}),l=null;else{switch(Ji(h)){case 1:l=Zs;break;case 4:l=Gi;break;case 16:l=Yn;break;case 536870912:l=fc;break;default:l=Yn}l=Hv(l,Mv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Mv(i,o){if(dh=-1,fh=0,(Ke&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Aa()&&i.callbackNode!==l)return null;var h=to(i,i===Gt?nn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ph(i,h);else{o=h;var p=Ke;Ke|=2;var _=Uv();(Gt!==i||nn!==o)&&(Ci=null,Ra=at()+500,_o(i,o));do try{NR();break}catch(R){Fv(i,R)}while(!0);Xf(),ah.current=_,Ke=p,Lt!==null?o=0:(Gt=null,nn=0,o=$t)}if(o!==0){if(o===2&&(p=Fn(i),p!==0&&(h=p,o=Op(i,p))),o===1)throw l=Xl,_o(i,0),fs(i,h),Pn(i,at()),l;if(o===6)fs(i,h);else{if(p=i.current.alternate,(h&30)===0&&!kR(p)&&(o=ph(i,h),o===2&&(_=Fn(i),_!==0&&(h=_,o=Op(i,_))),o===1))throw l=Xl,_o(i,0),fs(i,h),Pn(i,at()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:yo(i,kn,Ci);break;case 3:if(fs(i,h),(h&130023424)===h&&(o=xp+500-at(),10<o)){if(to(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){wn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=jf(yo.bind(null,i,kn,Ci),o);break}yo(i,kn,Ci);break;case 4:if(fs(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-yn(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=at()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*AR(h/1960))-h,10<h){i.timeoutHandle=jf(yo.bind(null,i,kn,Ci),h);break}yo(i,kn,Ci);break;case 5:yo(i,kn,Ci);break;default:throw Error(t(329))}}}return Pn(i,at()),i.callbackNode===l?Mv.bind(null,i):null}function Op(i,o){var l=Jl;return i.current.memoizedState.isDehydrated&&(_o(i,o).flags|=256),i=ph(i,o),i!==2&&(o=kn,kn=l,o!==null&&Lp(o)),i}function Lp(i){kn===null?kn=i:kn.push.apply(kn,i)}function kR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!wr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function fs(i,o){for(o&=~Np,o&=~lh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-yn(o),h=1<<l;i[l]=-1,o&=~h}}function Vv(i){if((Ke&6)!==0)throw Error(t(327));Aa();var o=to(i,0);if((o&1)===0)return Pn(i,at()),null;var l=ph(i,o);if(i.tag!==0&&l===2){var h=Fn(i);h!==0&&(o=h,l=Op(i,h))}if(l===1)throw l=Xl,_o(i,0),fs(i,o),Pn(i,at()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,yo(i,kn,Ci),Pn(i,at()),null}function Mp(i,o){var l=Ke;Ke|=1;try{return i(o)}finally{Ke=l,Ke===0&&(Ra=at()+500,Bc&&os())}}function go(i){hs!==null&&hs.tag===0&&(Ke&6)===0&&Aa();var o=Ke;Ke|=1;var l=rr.transition,h=ze;try{if(rr.transition=null,ze=1,i)return i()}finally{ze=h,rr.transition=l,Ke=o,(Ke&6)===0&&os()}}function Vp(){$n=Ca.current,ft(Ca)}function _o(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,iR(l)),Lt!==null)for(l=Lt.return;l!==null;){var h=l;switch(qf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Uc();break;case 3:Ta(),ft(Cn),ft(ln),sp();break;case 5:rp(h);break;case 4:Ta();break;case 13:ft(yt);break;case 19:ft(yt);break;case 10:Jf(h.type._context);break;case 22:case 23:Vp()}l=l.return}if(Gt=i,Lt=i=ps(i.current,null),nn=$n=o,$t=0,Xl=null,Np=lh=mo=0,kn=Jl=null,ho!==null){for(o=0;o<ho.length;o++)if(l=ho[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}ho=null}return i}function Fv(i,o){do{var l=Lt;try{if(Xf(),Xc.current=th,Jc){for(var h=vt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Jc=!1}if(po=0,qt=zt=vt=null,Hl=!1,ql=0,Pp.current=null,l===null||l.return===null){$t=1,Xl=o,Lt=null;break}e:{var _=i,w=l.return,R=l,x=o;if(o=nn,R.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var H=x,ne=R,ie=ne.tag;if((ne.mode&1)===0&&(ie===0||ie===11||ie===15)){var ee=ne.alternate;ee?(ne.updateQueue=ee.updateQueue,ne.memoizedState=ee.memoizedState,ne.lanes=ee.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var fe=uv(w);if(fe!==null){fe.flags&=-257,cv(fe,w,R,_,o),fe.mode&1&&lv(_,H,o),o=fe,x=H;var ye=o.updateQueue;if(ye===null){var ve=new Set;ve.add(x),o.updateQueue=ve}else ye.add(x);break e}else{if((o&1)===0){lv(_,H,o),Fp();break e}x=Error(t(426))}}else if(_t&&R.mode&1){var kt=uv(w);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),cv(kt,w,R,_,o),Qf(Ia(x,R));break e}}_=x=Ia(x,R),$t!==4&&($t=2),Jl===null?Jl=[_]:Jl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var z=ov(_,x,o);Dy(_,z);break e;case 1:R=x;var O=_.type,$=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(cs===null||!cs.has($)))){_.flags|=65536,o&=-o,_.lanes|=o;var oe=av(_,R,o);Dy(_,oe);break e}}_=_.return}while(_!==null)}Bv(l)}catch(Ee){o=Ee,Lt===l&&l!==null&&(Lt=l=l.return);continue}break}while(!0)}function Uv(){var i=ah.current;return ah.current=th,i===null?th:i}function Fp(){($t===0||$t===3||$t===2)&&($t=4),Gt===null||(mo&268435455)===0&&(lh&268435455)===0||fs(Gt,nn)}function ph(i,o){var l=Ke;Ke|=2;var h=Uv();(Gt!==i||nn!==o)&&(Ci=null,_o(i,o));do try{PR();break}catch(p){Fv(i,p)}while(!0);if(Xf(),Ke=l,ah.current=h,Lt!==null)throw Error(t(261));return Gt=null,nn=0,$t}function PR(){for(;Lt!==null;)jv(Lt)}function NR(){for(;Lt!==null&&!hc();)jv(Lt)}function jv(i){var o=Wv(i.alternate,i,$n);i.memoizedProps=i.pendingProps,o===null?Bv(i):Lt=o,Pp.current=null}function Bv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=TR(l,o,$n),l!==null){Lt=l;return}}else{if(l=IR(l,o),l!==null){l.flags&=32767,Lt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{$t=6,Lt=null;return}}if(o=o.sibling,o!==null){Lt=o;return}Lt=o=i}while(o!==null);$t===0&&($t=5)}function yo(i,o,l){var h=ze,p=rr.transition;try{rr.transition=null,ze=1,xR(i,o,l,h)}finally{rr.transition=p,ze=h}return null}function xR(i,o,l,h){do Aa();while(hs!==null);if((Ke&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(st(i,_),i===Gt&&(Lt=Gt=null,nn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ch||(ch=!0,Hv(Yn,function(){return Aa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=rr.transition,rr.transition=null;var w=ze;ze=1;var R=Ke;Ke|=4,Pp.current=null,CR(i,l),xv(l,i),XC(Ff),es=!!Vf,Ff=Vf=null,i.current=l,RR(l),wf(),Ke=R,ze=w,rr.transition=_}else i.current=l;if(ch&&(ch=!1,hs=i,hh=p),_=i.pendingLanes,_===0&&(cs=null),pc(l.stateNode),Pn(i,at()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(uh)throw uh=!1,i=bp,bp=null,i;return(hh&1)!==0&&i.tag!==0&&Aa(),_=i.pendingLanes,(_&1)!==0?i===Dp?Zl++:(Zl=0,Dp=i):Zl=0,os(),null}function Aa(){if(hs!==null){var i=Ji(hh),o=rr.transition,l=ze;try{if(rr.transition=null,ze=16>i?16:i,hs===null)var h=!1;else{if(i=hs,hs=null,hh=0,(Ke&6)!==0)throw Error(t(331));var p=Ke;for(Ke|=4,_e=i.current;_e!==null;){var _=_e,w=_.child;if((_e.flags&16)!==0){var R=_.deletions;if(R!==null){for(var x=0;x<R.length;x++){var H=R[x];for(_e=H;_e!==null;){var ne=_e;switch(ne.tag){case 0:case 11:case 15:Yl(8,ne,_)}var ie=ne.child;if(ie!==null)ie.return=ne,_e=ie;else for(;_e!==null;){ne=_e;var ee=ne.sibling,fe=ne.return;if(Rv(ne),ne===H){_e=null;break}if(ee!==null){ee.return=fe,_e=ee;break}_e=fe}}}var ye=_.alternate;if(ye!==null){var ve=ye.child;if(ve!==null){ye.child=null;do{var kt=ve.sibling;ve.sibling=null,ve=kt}while(ve!==null)}}_e=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,_e=w;else e:for(;_e!==null;){if(_=_e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Yl(9,_,_.return)}var z=_.sibling;if(z!==null){z.return=_.return,_e=z;break e}_e=_.return}}var O=i.current;for(_e=O;_e!==null;){w=_e;var $=w.child;if((w.subtreeFlags&2064)!==0&&$!==null)$.return=w,_e=$;else e:for(w=O;_e!==null;){if(R=_e,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:oh(9,R)}}catch(Ee){Tt(R,R.return,Ee)}if(R===w){_e=null;break e}var oe=R.sibling;if(oe!==null){oe.return=R.return,_e=oe;break e}_e=R.return}}if(Ke=p,os(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(eo,i)}catch{}h=!0}return h}finally{ze=l,rr.transition=o}}return!1}function zv(i,o,l){o=Ia(l,o),o=ov(i,o,1),i=ls(i,o,1),o=wn(),i!==null&&(Yi(i,1,o),Pn(i,o))}function Tt(i,o,l){if(i.tag===3)zv(i,i,l);else for(;o!==null;){if(o.tag===3){zv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(cs===null||!cs.has(h))){i=Ia(l,i),i=av(o,i,1),o=ls(o,i,1),i=wn(),o!==null&&(Yi(o,1,i),Pn(o,i));break}}o=o.return}}function bR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=wn(),i.pingedLanes|=i.suspendedLanes&l,Gt===i&&(nn&l)===l&&($t===4||$t===3&&(nn&130023424)===nn&&500>at()-xp?_o(i,0):Np|=l),Pn(i,o)}function $v(i,o){o===0&&((i.mode&1)===0?o=1:(o=Yo,Yo<<=1,(Yo&130023424)===0&&(Yo=4194304)));var l=wn();i=Ti(i,o),i!==null&&(Yi(i,o,l),Pn(i,l))}function DR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),$v(i,l)}function OR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),$v(i,l)}var Wv;Wv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Cn.current)An=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return An=!1,wR(i,o,l);An=(i.flags&131072)!==0}else An=!1,_t&&(o.flags&1048576)!==0&&Iy(o,$c,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;ih(i,o),i=o.pendingProps;var p=ma(o,ln.current);wa(o,l),p=lp(null,o,h,i,p,l);var _=up();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Rn(h)?(_=!0,jc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,tp(o),p.updater=nh,o.stateNode=p,p._reactInternals=o,mp(o,h,i,l),o=vp(null,o,h,!0,_,l)):(o.tag=0,_t&&_&&Hf(o),En(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(ih(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=MR(h),i=Ir(h,i),p){case 0:o=yp(null,o,h,i,l);break e;case 1:o=gv(null,o,h,i,l);break e;case 11:o=hv(null,o,h,i,l);break e;case 14:o=dv(null,o,h,Ir(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ir(h,p),yp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ir(h,p),gv(i,o,h,p,l);case 3:e:{if(_v(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,by(i,o),Qc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ia(Error(t(423)),o),o=yv(i,o,h,l,p);break e}else if(h!==p){p=Ia(Error(t(424)),o),o=yv(i,o,h,l,p);break e}else for(zn=rs(o.stateNode.containerInfo.firstChild),Bn=o,_t=!0,Tr=null,l=Ny(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ya(),h===p){o=Si(i,o,l);break e}En(i,o,h,l)}o=o.child}return o;case 5:return Ly(o),i===null&&Kf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Uf(h,p)?w=null:_!==null&&Uf(h,_)&&(o.flags|=32),mv(i,o),En(i,o,w,l),o.child;case 6:return i===null&&Kf(o),null;case 13:return vv(i,o,l);case 4:return np(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=va(o,null,h,l):En(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ir(h,p),hv(i,o,h,p,l);case 7:return En(i,o,o.pendingProps,l),o.child;case 8:return En(i,o,o.pendingProps.children,l),o.child;case 12:return En(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,lt(qc,h._currentValue),h._currentValue=w,_!==null)if(wr(_.value,w)){if(_.children===p.children&&!Cn.current){o=Si(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var R=_.dependencies;if(R!==null){w=_.child;for(var x=R.firstContext;x!==null;){if(x.context===h){if(_.tag===1){x=Ii(-1,l&-l),x.tag=2;var H=_.updateQueue;if(H!==null){H=H.shared;var ne=H.pending;ne===null?x.next=x:(x.next=ne.next,ne.next=x),H.pending=x}}_.lanes|=l,x=_.alternate,x!==null&&(x.lanes|=l),Zf(_.return,l,o),R.lanes|=l;break}x=x.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),Zf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}En(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,wa(o,l),p=tr(p),h=h(p),o.flags|=1,En(i,o,h,l),o.child;case 14:return h=o.type,p=Ir(h,o.pendingProps),p=Ir(h.type,p),dv(i,o,h,p,l);case 15:return fv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ir(h,p),ih(i,o),o.tag=1,Rn(h)?(i=!0,jc(o)):i=!1,wa(o,l),iv(o,h,p),mp(o,h,p,l),vp(null,o,h,!0,i,l);case 19:return wv(i,o,l);case 22:return pv(i,o,l)}throw Error(t(156,o.tag))};function Hv(i,o){return Ko(i,o)}function LR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ir(i,o,l,h){return new LR(i,o,l,h)}function Up(i){return i=i.prototype,!(!i||!i.isReactComponent)}function MR(i){if(typeof i=="function")return Up(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===tt)return 14}return 2}function ps(i,o){var l=i.alternate;return l===null?(l=ir(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function mh(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")Up(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case N:return vo(l.children,p,_,o);case C:w=8,p|=8;break;case k:return i=ir(12,l,o,p|2),i.elementType=k,i.lanes=_,i;case A:return i=ir(13,l,o,p),i.elementType=A,i.lanes=_,i;case $e:return i=ir(19,l,o,p),i.elementType=$e,i.lanes=_,i;case Z:return gh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:w=10;break e;case D:w=9;break e;case L:w=11;break e;case tt:w=14;break e;case se:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=ir(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function vo(i,o,l,h){return i=ir(7,i,h,o),i.lanes=l,i}function gh(i,o,l,h){return i=ir(22,i,h,o),i.elementType=Z,i.lanes=l,i.stateNode={isHidden:!1},i}function jp(i,o,l){return i=ir(6,i,null,o),i.lanes=l,i}function Bp(i,o,l){return o=ir(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function VR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zp(i,o,l,h,p,_,w,R,x){return i=new VR(i,o,l,R,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=ir(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(_),i}function FR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function qv(i){if(!i)return ss;i=i._reactInternals;e:{if(pr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Rn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Rn(l))return Ey(i,l,o)}return o}function Gv(i,o,l,h,p,_,w,R,x){return i=zp(l,h,!0,i,p,_,w,R,x),i.context=qv(null),l=i.current,h=wn(),p=ds(l),_=Ii(h,p),_.callback=o??null,ls(l,_,p),i.current.lanes=p,Yi(i,p,h),Pn(i,h),i}function _h(i,o,l,h){var p=o.current,_=wn(),w=ds(p);return l=qv(l),o.context===null?o.context=l:o.pendingContext=l,o=Ii(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ls(p,o,w),i!==null&&(Rr(i,p,w,_),Kc(i,p,w)),w}function yh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Kv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function $p(i,o){Kv(i,o),(i=i.alternate)&&Kv(i,o)}function UR(){return null}var Qv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Wp(i){this._internalRoot=i}vh.prototype.render=Wp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));_h(i,o,null,null)},vh.prototype.unmount=Wp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;go(function(){_h(null,i,null,null)}),o[yi]=null}};function vh(i){this._internalRoot=i}vh.prototype.unstable_scheduleHydration=function(i){if(i){var o=vc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Br.length&&o!==0&&o<Br[l].priority;l++);Br.splice(l,0,i),l===0&&Tc(i)}};function Hp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Eh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Yv(){}function jR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var H=yh(w);_.call(H)}}var w=Gv(o,h,i,0,null,!1,!1,"",Yv);return i._reactRootContainer=w,i[yi]=w.current,Vl(i.nodeType===8?i.parentNode:i),go(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var H=yh(x);R.call(H)}}var x=zp(i,0,!1,null,null,!1,!1,"",Yv);return i._reactRootContainer=x,i[yi]=x.current,Vl(i.nodeType===8?i.parentNode:i),go(function(){_h(o,x,l,h)}),x}function wh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var R=p;p=function(){var x=yh(w);R.call(x)}}_h(o,w,i,p)}else w=jR(l,o,i,p,h);return yh(w)}_c=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ki(o.pendingLanes);l!==0&&(Xi(o,l|1),Pn(o,at()),(Ke&6)===0&&(Ra=at()+500,os()))}break;case 13:go(function(){var h=Ti(i,1);if(h!==null){var p=wn();Rr(h,i,1,p)}}),$p(i,1)}},Xo=function(i){if(i.tag===13){var o=Ti(i,134217728);if(o!==null){var l=wn();Rr(o,i,134217728,l)}$p(i,134217728)}},yc=function(i){if(i.tag===13){var o=ds(i),l=Ti(i,o);if(l!==null){var h=wn();Rr(l,i,o,h)}$p(i,o)}},vc=function(){return ze},Ec=function(i,o){var l=ze;try{return ze=i,o()}finally{ze=l}},Vr=function(i,o,l){switch(o){case"input":if(cr(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Fc(h);if(!p)throw Error(t(90));_n(h),cr(h,p)}}}break;case"textarea":qi(i,l);break;case"select":o=l.value,o!=null&&Kn(i,!!l.multiple,o,!1)}},Qs=Mp,yl=go;var BR={usingClientEntryPoint:!1,Events:[jl,fa,Fc,Ur,_l,Mp]},eu={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zR={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wl(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||UR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Th.isDisabled&&Th.supportsFiber)try{eo=Th.inject(zR),Vn=Th}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BR,Nn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(o))throw Error(t(200));return FR(i,o,null,l)},Nn.createRoot=function(i,o){if(!Hp(i))throw Error(t(299));var l=!1,h="",p=Qv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=zp(i,1,!1,null,null,l,!1,h,p),i[yi]=o.current,Vl(i.nodeType===8?i.parentNode:i),new Wp(o)},Nn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wl(o),i=i===null?null:i.stateNode,i},Nn.flushSync=function(i){return go(i)},Nn.hydrate=function(i,o,l){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!0,l)},Nn.hydrateRoot=function(i,o,l){if(!Hp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=Qv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=Gv(o,null,i,1,l??null,p,!1,_,w),i[yi]=o.current,Vl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new vh(o)},Nn.render=function(i,o,l){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!1,l)},Nn.unmountComponentAtNode=function(i){if(!Eh(i))throw Error(t(40));return i._reactRootContainer?(go(function(){wh(null,null,i,!1,function(){i._reactRootContainer=null,i[yi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Mp,Nn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Eh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return wh(i,o,l,!1,h)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var iE;function XR(){if(iE)return Kp.exports;iE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kp.exports=YR(),Kp.exports}var sE;function JR(){if(sE)return Ih;sE=1;var n=XR();return Ih.createRoot=n.createRoot,Ih.hydrateRoot=n.hydrateRoot,Ih}var ZR=JR();const eA=OT(ZR),tA=()=>{};var oE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ue=function(n,e){if(!n)throw il(e)},il=function(n){return new Error("Firebase Database ("+LT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},nA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,P=m&63;f||(P=64,u||(T=64)),r.push(t[y],t[E],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(MT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new rA;const T=a<<2|d>>4;if(r.push(T),m!==64){const P=d<<4&240|m>>2;if(r.push(P),E!==64){const F=m<<6&192|E;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VT=function(n){const e=MT(n);return ug.encodeByteArray(e,!0)},Gh=function(n){return VT(n).replace(/\./g,"")},Kh=function(n){try{return ug.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const aA=()=>oA().__FIREBASE_DEFAULTS__,lA=()=>{if(typeof process>"u"||typeof oE>"u")return;const n=oE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kh(n[1]);return e&&JSON.parse(e)},bd=()=>{try{return tA()||aA()||lA()||uA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},UT=n=>{var e,t;return(t=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cg=n=>{const e=UT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},jT=()=>{var n;return(n=bd())===null||n===void 0?void 0:n.config},BT=n=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function oi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gh(JSON.stringify(t)),Gh(JSON.stringify(u)),""].join(".")}const gu={};function cA(){const n={prod:[],emulator:[]};for(const e of Object.keys(gu))gu[e]?n.emulator.push(e):n.prod.push(e);return n}function hA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let aE=!1;function Od(n,e){if(typeof window>"u"||typeof document>"u"||!oi(window.location.host)||gu[n]===e||gu[n]||aE)return;gu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=cA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{aE=!0,u()},T}function y(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=hA(r),P=t("text"),F=document.getElementById(P)||document.createElement("span"),M=t("learnmore"),U=document.getElementById(M)||document.createElement("a"),ae=t("preprendIcon"),K=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const te=T.element;d(te),y(U,M);const j=m();f(K,ae),te.append(K,F,U,j),document.body.appendChild(te)}a?(F.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function dA(){var n;const e=(n=bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const n=mn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gA(){return LT.NODE_ADMIN===!0}function _A(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function vA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FirebaseError";class ai extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=EA,Object.setPrototypeOf(this,ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ku.prototype.create)}}class Ku{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?wA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new ai(s,d,r)}}function wA(n,e){return n.replace(TA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){return JSON.parse(n)}function Jt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=ku(Kh(a[0])||""),t=ku(Kh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},IA=function(n){const e=$T(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},SA=function(n){const e=$T(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $a(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Di(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(lE(a)&&lE(u)){if(!Di(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function lE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):E<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const T=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function RA(n,e){const t=new AA(n,e);return t.subscribe.bind(t)}class AA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xp),s.error===void 0&&(s.error=Xp),s.complete===void 0&&(s.complete=Xp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xp(){}function Wa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ue(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ld=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Oi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class NA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ki;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:Eo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Eo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Eo){return this.instances.has(e)}getOptions(e=Eo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Eo){return this.component?this.component.multipleInstances?e:Eo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xA(n){return n===Eo?void 0:n}function bA(n){return n.instantiationMode==="EAGER"}/**
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
 */var je;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(je||(je={}));const OA={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},LA=je.INFO,MA={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},VA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=MA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=LA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const FA=(n,e)=>e.some(t=>n instanceof t);let uE,cE;function UA(){return uE||(uE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return cE||(cE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WT=new WeakMap,vm=new WeakMap,HT=new WeakMap,Jp=new WeakMap,fg=new WeakMap;function BA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Is(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&WT.set(t,n)}).catch(()=>{}),fg.set(e,n),e}function zA(n){if(vm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});vm.set(n,e)}let Em={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||HT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Is(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $A(n){Em=n(Em)}function WA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zp(this),e,...t);return HT.set(r,e.sort?e.sort():[e]),Is(r)}:jA().includes(n)?function(...e){return n.apply(Zp(this),e),Is(WT.get(this))}:function(...e){return Is(n.apply(Zp(this),e))}}function HA(n){return typeof n=="function"?WA(n):(n instanceof IDBTransaction&&zA(n),FA(n,UA())?new Proxy(n,Em):n)}function Is(n){if(n instanceof IDBRequest)return BA(n);if(Jp.has(n))return Jp.get(n);const e=HA(n);return e!==n&&(Jp.set(n,e),fg.set(e,n)),e}const Zp=n=>fg.get(n);function qA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Is(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Is(u.result),f.oldVersion,f.newVersion,Is(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const GA=["get","getKey","getAll","getAllKeys","count"],KA=["put","add","delete","clear"],em=new Map;function hE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(em.get(e))return em.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=KA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return em.set(e,a),a}$A(n=>({...n,get:(e,t,r)=>hE(e,t)||n.get(e,t,r),has:(e,t)=>!!hE(e,t)||n.has(e,t)}));/**
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
 */class QA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function YA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wm="@firebase/app",dE="0.13.2";/**
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
 */const Li=new Md("@firebase/app"),XA="@firebase/app-compat",JA="@firebase/analytics-compat",ZA="@firebase/analytics",ek="@firebase/app-check-compat",tk="@firebase/app-check",nk="@firebase/auth",rk="@firebase/auth-compat",ik="@firebase/database",sk="@firebase/data-connect",ok="@firebase/database-compat",ak="@firebase/functions",lk="@firebase/functions-compat",uk="@firebase/installations",ck="@firebase/installations-compat",hk="@firebase/messaging",dk="@firebase/messaging-compat",fk="@firebase/performance",pk="@firebase/performance-compat",mk="@firebase/remote-config",gk="@firebase/remote-config-compat",_k="@firebase/storage",yk="@firebase/storage-compat",vk="@firebase/firestore",Ek="@firebase/ai",wk="@firebase/firestore-compat",Tk="firebase",Ik="11.10.0";/**
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
 */const Tm="[DEFAULT]",Sk={[wm]:"fire-core",[XA]:"fire-core-compat",[ZA]:"fire-analytics",[JA]:"fire-analytics-compat",[tk]:"fire-app-check",[ek]:"fire-app-check-compat",[nk]:"fire-auth",[rk]:"fire-auth-compat",[ik]:"fire-rtdb",[sk]:"fire-data-connect",[ok]:"fire-rtdb-compat",[ak]:"fire-fn",[lk]:"fire-fn-compat",[uk]:"fire-iid",[ck]:"fire-iid-compat",[hk]:"fire-fcm",[dk]:"fire-fcm-compat",[fk]:"fire-perf",[pk]:"fire-perf-compat",[mk]:"fire-rc",[gk]:"fire-rc-compat",[_k]:"fire-gcs",[yk]:"fire-gcs-compat",[vk]:"fire-fst",[wk]:"fire-fst-compat",[Ek]:"fire-vertex","fire-js":"fire-js",[Tk]:"fire-js-all"};/**
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
 */const Xh=new Map,Ck=new Map,Im=new Map;function fE(n,e){try{n.container.addComponent(e)}catch(t){Li.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ds(n){const e=n.name;if(Im.has(e))return Li.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,n);for(const t of Xh.values())fE(t,n);for(const t of Ck.values())fE(t,n);return!0}function Qu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Rk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ss=new Ku("app","Firebase",Rk);/**
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
 */class Ak{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=Ik;function qT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ss.create("bad-app-name",{appName:String(s)});if(t||(t=jT()),!t)throw Ss.create("no-options");const a=Xh.get(s);if(a){if(Di(t,a.options)&&Di(r,a.config))return a;throw Ss.create("duplicate-app",{appName:s})}const u=new DA(s);for(const f of Im.values())u.addComponent(f);const d=new Ak(t,r,u);return Xh.set(s,d),d}function Vd(n=Tm){const e=Xh.get(n);if(!e&&n===Tm&&jT())return qT();if(!e)throw Ss.create("no-app",{appName:n});return e}function lr(n,e,t){var r;let s=(r=Sk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Li.warn(d.join(" "));return}Ds(new Oi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kk="firebase-heartbeat-database",Pk=1,Pu="firebase-heartbeat-store";let tm=null;function GT(){return tm||(tm=qA(kk,Pk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ss.create("idb-open",{originalErrorMessage:n.message})})),tm}async function Nk(n){try{const t=(await GT()).transaction(Pu),r=await t.objectStore(Pu).get(KT(n));return await t.done,r}catch(e){if(e instanceof ai)Li.warn(e.message);else{const t=Ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Li.warn(t.message)}}}async function pE(n,e){try{const r=(await GT()).transaction(Pu,"readwrite");await r.objectStore(Pu).put(e,KT(n)),await r.done}catch(t){if(t instanceof ai)Li.warn(t.message);else{const r=Ss.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Li.warn(r.message)}}}function KT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xk=1024,bk=30;class Dk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=mE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>bk){const u=Mk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Li.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mE(),{heartbeatsToSend:r,unsentEntries:s}=Ok(this._heartbeatsCache.heartbeats),a=Gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Li.warn(t),""}}}function mE(){return new Date().toISOString().substring(0,10)}function Ok(n,e=xk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),gE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Lk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?vA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return pE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return pE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gE(n){return Gh(JSON.stringify({version:2,heartbeats:n})).length}function Mk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Vk(n){Ds(new Oi("platform-logger",e=>new QA(e),"PRIVATE")),Ds(new Oi("heartbeat",e=>new Dk(e),"PRIVATE")),lr(wm,dE,n),lr(wm,dE,"esm2017"),lr("fire-js","")}Vk("");function pg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function QT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=QT,YT=new Ku("auth","Firebase",QT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Md("@firebase/auth");function Uk(n,...e){Jh.logLevel<=je.WARN&&Jh.warn(`Auth (${Ws}): ${n}`,...e)}function Oh(n,...e){Jh.logLevel<=je.ERROR&&Jh.error(`Auth (${Ws}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,...e){throw mg(n,...e)}function Jr(n,...e){return mg(n,...e)}function XT(n,e,t){const r=Object.assign(Object.assign({},Fk()),{[e]:t});return new Ku("auth","Firebase",r).create(e,{appName:n.name})}function Cs(n){return XT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return YT.create(n,...e)}function Re(n,e,...t){if(!n)throw mg(e,...t)}function Pi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oh(e),new Error(e)}function Mi(n,e){n||Pi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jk(){return _E()==="http:"||_E()==="https:"}function _E(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mi(t>e,"Short delay should be less than long delay!"),this.isMobile=dg()||zT()}get(){return Bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){Mi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hk=new Yu(3e4,6e4);function Fo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hs(n,e,t,r,s={}){return ZT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=sl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return fA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&oi(n.emulatorConfig.host)&&(m.credentials="include"),JT.fetch()(await eI(n,n.config.apiHost,t,d),m)})}async function ZT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},$k),e);try{const s=new Gk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Sh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Sh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Sh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw XT(n,y,m);Dr(n,y)}}catch(s){if(s instanceof ai)throw s;Dr(n,"network-request-failed",{message:String(s)})}}async function Fd(n,e,t,r,s={}){const a=await Hs(n,e,t,r,s);return"mfaPendingCredential"in a&&Dr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function eI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?gg(n.config,s):`${n.config.apiScheme}://${s}`;return Wk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function qk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jr(this.auth,"network-request-failed")),Hk.get())})}}function Sh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Jr(n,e,r);return s.customData._tokenResponse=t,s}function yE(n){return n!==void 0&&n.enterprise!==void 0}class Kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qk(n,e){return Hs(n,"GET","/v2/recaptchaConfig",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(n,e){return Hs(n,"POST","/v1/accounts:delete",e)}async function Zh(n,e){return Hs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(n,e=!1){const t=et(n),r=await t.getIdToken(e),s=_g(r);Re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:_u(nm(s.auth_time)),issuedAtTime:_u(nm(s.iat)),expirationTime:_u(nm(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function nm(n){return Number(n)*1e3}function _g(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Oh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kh(t);return s?JSON.parse(s):(Oh("Failed to decode base64 JWT payload"),null)}catch(s){return Oh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vE(n){const e=_g(n);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ai&&Jk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Jk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ed(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Nu(n,Zh(t,{idToken:r}));Re(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?tI(a.providerUserInfo):[],d=t1(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Cm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function e1(n){const e=et(n);await ed(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tI(n){return n.map(e=>{var{providerId:t}=e,r=pg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(n,e){const t=await ZT(n,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await eI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&oi(n.emulatorConfig.host)&&(f.credentials="include"),JT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function r1(n,e){return Hs(n,"POST","/v2/accounts:revokeToken",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=vE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await n1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ma;return r&&(Re(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Re(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Re(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return Pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e){Re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Nu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xk(this,e)}reload(){return e1(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ed(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(Cs(this.auth));const e=await this.getIdToken();return await Nu(this,Yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,F=(u=t.photoURL)!==null&&u!==void 0?u:void 0,M=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ae=(m=t.createdAt)!==null&&m!==void 0?m:void 0,K=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:j,isAnonymous:we,providerData:me,stsTokenManager:N}=t;Re(te&&N,e,"internal-error");const C=Ma.fromJSON(this.name,N);Re(typeof te=="string",e,"internal-error"),gs(E,e.name),gs(T,e.name),Re(typeof j=="boolean",e,"internal-error"),Re(typeof we=="boolean",e,"internal-error"),gs(P,e.name),gs(F,e.name),gs(M,e.name),gs(U,e.name),gs(ae,e.name),gs(K,e.name);const k=new kr({uid:te,auth:e,email:T,emailVerified:j,displayName:E,isAnonymous:we,photoURL:F,phoneNumber:P,tenantId:M,stsTokenManager:C,createdAt:ae,lastLoginAt:K});return me&&Array.isArray(me)&&(k.providerData=me.map(b=>Object.assign({},b))),U&&(k._redirectEventId=U),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ma;s.updateFromServerResponse(t);const a=new kr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ed(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Re(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?tI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Ma;d.updateFromIdToken(r);const f=new kr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Map;function Ni(n){Mi(n instanceof Function,"Expected a class definition");let e=EE.get(n);return e?(Mi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,EE.set(n,e),e)}/**
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
 */function Lh(n,e,t){return`firebase:${n}:${e}:${t}`}class Va{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Lh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Lh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zh(this.auth,{idToken:e}).catch(()=>{});return t?kr._fromGetAccountInfoResponse(this.auth,t,e):null}return kr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Va(Ni(wE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Ni(wE);const u=Lh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const T=await Zh(e,{idToken:y}).catch(()=>{});if(!T)break;E=await kr._fromGetAccountInfoResponse(e,T,y)}else E=kr._fromJSON(e,y);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Va(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Va(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lI(e))return"Blackberry";if(uI(e))return"Webos";if(iI(e))return"Safari";if((e.includes("chrome/")||sI(e))&&!e.includes("edge/"))return"Chrome";if(aI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rI(n=mn()){return/firefox\//i.test(n)}function iI(n=mn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sI(n=mn()){return/crios\//i.test(n)}function oI(n=mn()){return/iemobile/i.test(n)}function aI(n=mn()){return/android/i.test(n)}function lI(n=mn()){return/blackberry/i.test(n)}function uI(n=mn()){return/webos/i.test(n)}function yg(n=mn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function i1(n=mn()){var e;return yg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s1(){return mA()&&document.documentMode===10}function cI(n=mn()){return yg(n)||aI(n)||uI(n)||lI(n)||/windows phone/i.test(n)||oI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e=[]){let t;switch(n){case"Browser":t=TE(mn());break;case"Worker":t=`${TE(mn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ws}/${r}`}/**
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
 */async function a1(n,e={}){return Hs(n,"GET","/v2/passwordPolicy",Fo(n,e))}/**
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
 */class c1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new IE(this),this.idTokenSubscription=new IE(this),this.beforeStateQueue=new o1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ni(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Va.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zh(this,{idToken:e}),r=await kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Wn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ed(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(Cs(this));const t=e?et(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(Cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(Cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ni(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a1(this),t=new u1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ku("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await r1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ni(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await Va.create(this,[Ni(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Uk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ol(n){return et(n)}class IE{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h1(n){Ud=n}function dI(n){return Ud.loadJS(n)}function d1(){return Ud.recaptchaEnterpriseScript}function f1(){return Ud.gapiScript}function p1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class m1{constructor(){this.enterprise=new g1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class g1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _1="recaptcha-enterprise",fI="NO_RECAPTCHA";class y1{constructor(e){this.type=_1,this.auth=ol(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Qk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Kk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;yE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(fI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&yE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=d1();f.length!==0&&(f+=d),dI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function SE(n,e,t,r=!1,s=!1){const a=new y1(n);let u;if(s)u=fI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function CE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await SE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await SE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(n,e){const t=Qu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Di(a,e??{}))return s;Dr(s,"already-initialized")}return t.initialize({options:e})}function E1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ni);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function w1(n,e,t){const r=ol(n);Re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=pI(e),{host:u,port:d}=T1(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Re(Di(m,r.config.emulator)&&Di(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,oi(u)?(Dd(`${a}//${u}${f}`),Od("Auth",!0)):I1()}function pI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function T1(n){const e=pI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:RE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:RE(u)}}}function RE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function I1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pi("not implemented")}_getIdTokenResponse(e){return Pi("not implemented")}_linkToIdToken(e,t){return Pi("not implemented")}_getReauthenticationResolver(e){return Pi("not implemented")}}async function S1(n,e){return Hs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(n,e){return Fd(n,"POST","/v1/accounts:signInWithPassword",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return Fd(n,"POST","/v1/accounts:signInWithEmailLink",Fo(n,e))}async function A1(n,e){return Fd(n,"POST","/v1/accounts:signInWithEmailLink",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends vg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new xu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CE(e,t,"signInWithPassword",C1);case"emailLink":return R1(e,{email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CE(e,r,"signUpPassword",S1);case"emailLink":return A1(e,{idToken:t,email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(n,e){return Fd(n,"POST","/v1/accounts:signInWithIdp",Fo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="http://localhost";class Po extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Po(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=pg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Po(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Fa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fa(e,t)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N1(n){const e=lu(uu(n)).link,t=e?lu(uu(e)).deep_link_id:null,r=lu(uu(n)).deep_link_id;return(r?lu(uu(r)).link:null)||r||t||e||n}class Eg{constructor(e){var t,r,s,a,u,d;const f=lu(uu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=P1((s=f.mode)!==null&&s!==void 0?s:null);Re(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=N1(e);try{return new Eg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.providerId=al.PROVIDER_ID}static credential(e,t){return xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Eg.parseLink(t);return Re(r,"argument-error"),xu._fromEmailAndCode(e,r.code,r.tenantId)}}al.PROVIDER_ID="password";al.EMAIL_PASSWORD_SIGN_IN_METHOD="password";al.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xu extends mI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Xu{constructor(){super("facebook.com")}static credential(e){return Po._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Xu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Po._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ys.credential(t,r)}catch{return null}}}ys.GOOGLE_SIGN_IN_METHOD="google.com";ys.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Xu{constructor(){super("github.com")}static credential(e){return Po._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.GITHUB_SIGN_IN_METHOD="github.com";vs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Xu{constructor(){super("twitter.com")}static credential(e,t){return Po._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Es.credential(t,r)}catch{return null}}}Es.TWITTER_SIGN_IN_METHOD="twitter.com";Es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await kr._fromIdTokenResponse(e,r,s),u=AE(r);return new Ha({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=AE(r);return new Ha({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function AE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends ai{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,td.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new td(e,t,r,s)}}function gI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?td._fromErrorAndOperation(n,a,e,r):a})}async function x1(n,e,t=!1){const r=await Nu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ha._forOperation(n,"link",r)}/**
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
 */async function b1(n,e,t=!1){const{auth:r}=n;if(Wn(r.app))return Promise.reject(Cs(r));const s="reauthenticate";try{const a=await Nu(n,gI(r,s,e,n),t);Re(a.idToken,r,"internal-error");const u=_g(a.idToken);Re(u,r,"internal-error");const{sub:d}=u;return Re(n.uid===d,r,"user-mismatch"),Ha._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Dr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(n,e,t=!1){if(Wn(n.app))return Promise.reject(Cs(n));const r="signIn",s=await gI(n,r,e),a=await Ha._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function D1(n,e){return _I(ol(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(n){const e=ol(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function L1(n,e,t){return Wn(n.app)?Promise.reject(Cs(n)):D1(et(n),al.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&O1(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(n,e){return et(n).setPersistence(e)}function V1(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function F1(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function U1(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}function j1(n){return et(n).signOut()}const nd="__sak";/**
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
 */class yI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nd,"1"),this.storage.removeItem(nd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new jd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await $1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=wg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return window}function H1(n){Zr().location.href=n}/**
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
 */function II(){return typeof Zr().WorkerGlobalScope<"u"&&typeof Zr().importScripts=="function"}async function q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function K1(){return II()?self:null}/**
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
 */const SI="firebaseLocalStorageDb",Q1=1,rd="firebaseLocalStorage",CI="fbase_key";class Ju{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bd(n,e){return n.transaction([rd],e?"readwrite":"readonly").objectStore(rd)}function Y1(){const n=indexedDB.deleteDatabase(SI);return new Ju(n).toPromise()}function Rm(){const n=indexedDB.open(SI,Q1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(rd,{keyPath:CI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(rd)?e(r):(r.close(),await Y1(),e(await Rm()))})})}async function kE(n,e,t){const r=Bd(n,!0).put({[CI]:e,value:t});return new Ju(r).toPromise()}async function X1(n,e){const t=Bd(n,!1).get(e),r=await new Ju(t).toPromise();return r===void 0?null:r.value}function PE(n,e){const t=Bd(n,!0).delete(e);return new Ju(t).toPromise()}const J1=800,Z1=3;class RI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Z1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return II()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance(K1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await q1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await kE(e,nd,"1"),await PE(e,nd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>X1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>PE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Bd(s,!1).getAll();return new Ju(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RI.type="LOCAL";const eP=RI;new Yu(3e4,6e4);/**
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
 */function tP(n,e){return e?Ni(e):(Re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Tg extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nP(n){return _I(n.auth,new Tg(n),n.bypassAuthState)}function rP(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),b1(t,new Tg(n),n.bypassAuthState)}async function iP(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),x1(t,new Tg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nP;case"linkViaPopup":case"linkViaRedirect":return iP;case"reauthViaPopup":case"reauthViaRedirect":return rP;default:Dr(this.auth,"internal-error")}}resolve(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=new Yu(2e3,1e4);class Oa extends AI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Oa.currentPopupAction&&Oa.currentPopupAction.cancel(),Oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Mi(this.filter.length===1,"Popup operations only handle one event");const e=wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sP.get())};e()}}Oa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="pendingRedirect",Mh=new Map;class aP extends AI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mh.get(this.auth._key());if(!e){try{const r=await lP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mh.set(this.auth._key(),e)}return this.bypassAuthState||Mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lP(n,e){const t=hP(e),r=cP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function uP(n,e){Mh.set(n._key(),e)}function cP(n){return Ni(n._redirectPersistence)}function hP(n){return Lh(oP,n.config.apiKey,n.name)}async function dP(n,e,t=!1){if(Wn(n.app))return Promise.reject(Cs(n));const r=ol(n),s=tP(r,e),u=await new aP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=600*1e3;class pP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Jr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fP&&this.cachedEventUids.clear(),this.cachedEventUids.has(NE(e))}saveEventToCache(e){this.cachedEventUids.add(NE(e)),this.lastProcessedEventTime=Date.now()}}function NE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(n,e={}){return Hs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yP=/^https?/;async function vP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gP(n);for(const t of e)try{if(EP(t))return}catch{}Dr(n,"unauthorized-domain")}function EP(n){const e=Sm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!yP.test(t))return!1;if(_P.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wP=new Yu(3e4,6e4);function xE(){const n=Zr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TP(n){return new Promise((e,t)=>{var r,s,a;function u(){xE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xE(),t(Jr(n,"network-request-failed"))},timeout:wP.get()})}if(!((s=(r=Zr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Zr().gapi)===null||a===void 0)&&a.load)u();else{const d=p1("iframefcb");return Zr()[d]=()=>{gapi.load?u():t(Jr(n,"network-request-failed"))},dI(`${f1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Vh=null,e})}let Vh=null;function IP(n){return Vh=Vh||TP(n),Vh}/**
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
 */const SP=new Yu(5e3,15e3),CP="__/auth/iframe",RP="emulator/auth/iframe",AP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PP(n){const e=n.config;Re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gg(e,RP):`https://${n.config.authDomain}/${CP}`,r={apiKey:e.apiKey,appName:n.name,v:Ws},s=kP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${sl(r).slice(1)}`}async function NP(n){const e=await IP(n),t=Zr().gapi;return Re(t,n,"internal-error"),e.open({where:document.body,url:PP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Jr(n,"network-request-failed"),d=Zr().setTimeout(()=>{a(u)},SP.get());function f(){Zr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const xP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bP=500,DP=600,OP="_blank",LP="http://localhost";class bE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MP(n,e,t,r=bP,s=DP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},xP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=mn().toLowerCase();t&&(d=sI(m)?OP:t),rI(m)&&(e=e||LP,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[P,F])=>`${T}${P}=${F},`,"");if(i1(m)&&d!=="_self")return VP(e||"",d),new bE(null);const E=window.open(e||"",d,y);Re(E,n,"popup-blocked");try{E.focus()}catch{}return new bE(E)}function VP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const FP="__/auth/handler",UP="emulator/auth/handler",jP=encodeURIComponent("fac");async function DE(n,e,t,r,s,a){Re(n.config.authDomain,n,"auth-domain-config-required"),Re(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ws,eventId:s};if(e instanceof mI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Qh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Xu){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${jP}=${encodeURIComponent(f)}`:"";return`${BP(n)}?${sl(d).slice(1)}${m}`}function BP({config:n}){return n.emulator?gg(n,UP):`https://${n.authDomain}/${FP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="webStorageSupport";class zP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TI,this._completeRedirectFn=dP,this._overrideRedirectResult=uP}async _openPopup(e,t,r,s){var a;Mi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await DE(e,t,r,Sm(),s);return MP(e,u,wg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await DE(e,t,r,Sm(),s);return H1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Mi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await NP(e),r=new pP(e);return t.register("authEvent",s=>(Re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rm,{type:rm},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[rm];u!==void 0&&t(!!u),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cI()||iI()||yg()}}const $P=zP;var OE="@firebase/auth",LE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function HP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qP(n){Ds(new Oi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Re(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hI(n)},m=new c1(r,s,a,f);return E1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Oi("auth-internal",e=>{const t=ol(e.getProvider("auth").getImmediate());return(r=>new WP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(OE,LE,HP(n)),lr(OE,LE,"esm2017")}/**
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
 */const GP=300,KP=BT("authIdTokenMaxAge")||GP;let ME=null;const QP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>KP)return;const s=t==null?void 0:t.token;ME!==s&&(ME=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YP(n=Vd()){const e=Qu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=v1(n,{popupRedirectResolver:$P,persistence:[eP,EI,TI]}),r=BT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=QP(a.toString());F1(t,u,()=>u(t.currentUser)),V1(t,d=>u(d))}}const s=UT("auth");return s&&w1(t,`http://${s}`),t}function XP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}h1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Jr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",XP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qP("Browser");var VE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,PI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,C){function k(){}k.prototype=C.prototype,N.D=C.prototype,N.prototype=new k,N.prototype.constructor=N,N.C=function(b,D,L){for(var A=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)A[$e-2]=arguments[$e];return C.prototype[D].apply(b,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(N,C,k){k||(k=0);var b=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)b[D]=C.charCodeAt(k++)|C.charCodeAt(k++)<<8|C.charCodeAt(k++)<<16|C.charCodeAt(k++)<<24;else for(D=0;16>D;++D)b[D]=C[k++]|C[k++]<<8|C[k++]<<16|C[k++]<<24;C=N.g[0],k=N.g[1],D=N.g[2];var L=N.g[3],A=C+(L^k&(D^L))+b[0]+3614090360&4294967295;C=k+(A<<7&4294967295|A>>>25),A=L+(D^C&(k^D))+b[1]+3905402710&4294967295,L=C+(A<<12&4294967295|A>>>20),A=D+(k^L&(C^k))+b[2]+606105819&4294967295,D=L+(A<<17&4294967295|A>>>15),A=k+(C^D&(L^C))+b[3]+3250441966&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(L^k&(D^L))+b[4]+4118548399&4294967295,C=k+(A<<7&4294967295|A>>>25),A=L+(D^C&(k^D))+b[5]+1200080426&4294967295,L=C+(A<<12&4294967295|A>>>20),A=D+(k^L&(C^k))+b[6]+2821735955&4294967295,D=L+(A<<17&4294967295|A>>>15),A=k+(C^D&(L^C))+b[7]+4249261313&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(L^k&(D^L))+b[8]+1770035416&4294967295,C=k+(A<<7&4294967295|A>>>25),A=L+(D^C&(k^D))+b[9]+2336552879&4294967295,L=C+(A<<12&4294967295|A>>>20),A=D+(k^L&(C^k))+b[10]+4294925233&4294967295,D=L+(A<<17&4294967295|A>>>15),A=k+(C^D&(L^C))+b[11]+2304563134&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(L^k&(D^L))+b[12]+1804603682&4294967295,C=k+(A<<7&4294967295|A>>>25),A=L+(D^C&(k^D))+b[13]+4254626195&4294967295,L=C+(A<<12&4294967295|A>>>20),A=D+(k^L&(C^k))+b[14]+2792965006&4294967295,D=L+(A<<17&4294967295|A>>>15),A=k+(C^D&(L^C))+b[15]+1236535329&4294967295,k=D+(A<<22&4294967295|A>>>10),A=C+(D^L&(k^D))+b[1]+4129170786&4294967295,C=k+(A<<5&4294967295|A>>>27),A=L+(k^D&(C^k))+b[6]+3225465664&4294967295,L=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(L^C))+b[11]+643717713&4294967295,D=L+(A<<14&4294967295|A>>>18),A=k+(L^C&(D^L))+b[0]+3921069994&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(D^L&(k^D))+b[5]+3593408605&4294967295,C=k+(A<<5&4294967295|A>>>27),A=L+(k^D&(C^k))+b[10]+38016083&4294967295,L=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(L^C))+b[15]+3634488961&4294967295,D=L+(A<<14&4294967295|A>>>18),A=k+(L^C&(D^L))+b[4]+3889429448&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(D^L&(k^D))+b[9]+568446438&4294967295,C=k+(A<<5&4294967295|A>>>27),A=L+(k^D&(C^k))+b[14]+3275163606&4294967295,L=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(L^C))+b[3]+4107603335&4294967295,D=L+(A<<14&4294967295|A>>>18),A=k+(L^C&(D^L))+b[8]+1163531501&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(D^L&(k^D))+b[13]+2850285829&4294967295,C=k+(A<<5&4294967295|A>>>27),A=L+(k^D&(C^k))+b[2]+4243563512&4294967295,L=C+(A<<9&4294967295|A>>>23),A=D+(C^k&(L^C))+b[7]+1735328473&4294967295,D=L+(A<<14&4294967295|A>>>18),A=k+(L^C&(D^L))+b[12]+2368359562&4294967295,k=D+(A<<20&4294967295|A>>>12),A=C+(k^D^L)+b[5]+4294588738&4294967295,C=k+(A<<4&4294967295|A>>>28),A=L+(C^k^D)+b[8]+2272392833&4294967295,L=C+(A<<11&4294967295|A>>>21),A=D+(L^C^k)+b[11]+1839030562&4294967295,D=L+(A<<16&4294967295|A>>>16),A=k+(D^L^C)+b[14]+4259657740&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(k^D^L)+b[1]+2763975236&4294967295,C=k+(A<<4&4294967295|A>>>28),A=L+(C^k^D)+b[4]+1272893353&4294967295,L=C+(A<<11&4294967295|A>>>21),A=D+(L^C^k)+b[7]+4139469664&4294967295,D=L+(A<<16&4294967295|A>>>16),A=k+(D^L^C)+b[10]+3200236656&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(k^D^L)+b[13]+681279174&4294967295,C=k+(A<<4&4294967295|A>>>28),A=L+(C^k^D)+b[0]+3936430074&4294967295,L=C+(A<<11&4294967295|A>>>21),A=D+(L^C^k)+b[3]+3572445317&4294967295,D=L+(A<<16&4294967295|A>>>16),A=k+(D^L^C)+b[6]+76029189&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(k^D^L)+b[9]+3654602809&4294967295,C=k+(A<<4&4294967295|A>>>28),A=L+(C^k^D)+b[12]+3873151461&4294967295,L=C+(A<<11&4294967295|A>>>21),A=D+(L^C^k)+b[15]+530742520&4294967295,D=L+(A<<16&4294967295|A>>>16),A=k+(D^L^C)+b[2]+3299628645&4294967295,k=D+(A<<23&4294967295|A>>>9),A=C+(D^(k|~L))+b[0]+4096336452&4294967295,C=k+(A<<6&4294967295|A>>>26),A=L+(k^(C|~D))+b[7]+1126891415&4294967295,L=C+(A<<10&4294967295|A>>>22),A=D+(C^(L|~k))+b[14]+2878612391&4294967295,D=L+(A<<15&4294967295|A>>>17),A=k+(L^(D|~C))+b[5]+4237533241&4294967295,k=D+(A<<21&4294967295|A>>>11),A=C+(D^(k|~L))+b[12]+1700485571&4294967295,C=k+(A<<6&4294967295|A>>>26),A=L+(k^(C|~D))+b[3]+2399980690&4294967295,L=C+(A<<10&4294967295|A>>>22),A=D+(C^(L|~k))+b[10]+4293915773&4294967295,D=L+(A<<15&4294967295|A>>>17),A=k+(L^(D|~C))+b[1]+2240044497&4294967295,k=D+(A<<21&4294967295|A>>>11),A=C+(D^(k|~L))+b[8]+1873313359&4294967295,C=k+(A<<6&4294967295|A>>>26),A=L+(k^(C|~D))+b[15]+4264355552&4294967295,L=C+(A<<10&4294967295|A>>>22),A=D+(C^(L|~k))+b[6]+2734768916&4294967295,D=L+(A<<15&4294967295|A>>>17),A=k+(L^(D|~C))+b[13]+1309151649&4294967295,k=D+(A<<21&4294967295|A>>>11),A=C+(D^(k|~L))+b[4]+4149444226&4294967295,C=k+(A<<6&4294967295|A>>>26),A=L+(k^(C|~D))+b[11]+3174756917&4294967295,L=C+(A<<10&4294967295|A>>>22),A=D+(C^(L|~k))+b[2]+718787259&4294967295,D=L+(A<<15&4294967295|A>>>17),A=k+(L^(D|~C))+b[9]+3951481745&4294967295,N.g[0]=N.g[0]+C&4294967295,N.g[1]=N.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+L&4294967295}r.prototype.u=function(N,C){C===void 0&&(C=N.length);for(var k=C-this.blockSize,b=this.B,D=this.h,L=0;L<C;){if(D==0)for(;L<=k;)s(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<C;)if(b[D++]=N.charCodeAt(L++),D==this.blockSize){s(this,b),D=0;break}}else for(;L<C;)if(b[D++]=N[L++],D==this.blockSize){s(this,b),D=0;break}}this.h=D,this.o+=C},r.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var C=1;C<N.length-8;++C)N[C]=0;var k=8*this.o;for(C=N.length-8;C<N.length;++C)N[C]=k&255,k/=256;for(this.u(N),N=Array(16),C=k=0;4>C;++C)for(var b=0;32>b;b+=8)N[k++]=this.g[C]>>>b&255;return N};function a(N,C){var k=d;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=C(N)}function u(N,C){this.h=C;for(var k=[],b=!0,D=N.length-1;0<=D;D--){var L=N[D]|0;b&&L==C||(k[D]=L,b=!1)}this.g=k}var d={};function f(N){return-128<=N&&128>N?a(N,function(C){return new u([C|0],0>C?-1:0)}):new u([N|0],0>N?-1:0)}function m(N){if(isNaN(N)||!isFinite(N))return E;if(0>N)return U(m(-N));for(var C=[],k=1,b=0;N>=k;b++)C[b]=N/k|0,k*=4294967296;return new u(C,0)}function y(N,C){if(N.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(N.charAt(0)=="-")return U(y(N.substring(1),C));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=m(Math.pow(C,8)),b=E,D=0;D<N.length;D+=8){var L=Math.min(8,N.length-D),A=parseInt(N.substring(D,D+L),C);8>L?(L=m(Math.pow(C,L)),b=b.j(L).add(m(A))):(b=b.j(k),b=b.add(m(A)))}return b}var E=f(0),T=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(M(this))return-U(this).m();for(var N=0,C=1,k=0;k<this.g.length;k++){var b=this.i(k);N+=(0<=b?b:4294967296+b)*C,C*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(F(this))return"0";if(M(this))return"-"+U(this).toString(N);for(var C=m(Math.pow(N,6)),k=this,b="";;){var D=j(k,C).g;k=ae(k,D.j(C));var L=((0<k.g.length?k.g[0]:k.h)>>>0).toString(N);if(k=D,F(k))return L+b;for(;6>L.length;)L="0"+L;b=L+b}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function F(N){if(N.h!=0)return!1;for(var C=0;C<N.g.length;C++)if(N.g[C]!=0)return!1;return!0}function M(N){return N.h==-1}n.l=function(N){return N=ae(this,N),M(N)?-1:F(N)?0:1};function U(N){for(var C=N.g.length,k=[],b=0;b<C;b++)k[b]=~N.g[b];return new u(k,~N.h).add(T)}n.abs=function(){return M(this)?U(this):this},n.add=function(N){for(var C=Math.max(this.g.length,N.g.length),k=[],b=0,D=0;D<=C;D++){var L=b+(this.i(D)&65535)+(N.i(D)&65535),A=(L>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);b=A>>>16,L&=65535,A&=65535,k[D]=A<<16|L}return new u(k,k[k.length-1]&-2147483648?-1:0)};function ae(N,C){return N.add(U(C))}n.j=function(N){if(F(this)||F(N))return E;if(M(this))return M(N)?U(this).j(U(N)):U(U(this).j(N));if(M(N))return U(this.j(U(N)));if(0>this.l(P)&&0>N.l(P))return m(this.m()*N.m());for(var C=this.g.length+N.g.length,k=[],b=0;b<2*C;b++)k[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<N.g.length;D++){var L=this.i(b)>>>16,A=this.i(b)&65535,$e=N.i(D)>>>16,tt=N.i(D)&65535;k[2*b+2*D]+=A*tt,K(k,2*b+2*D),k[2*b+2*D+1]+=L*tt,K(k,2*b+2*D+1),k[2*b+2*D+1]+=A*$e,K(k,2*b+2*D+1),k[2*b+2*D+2]+=L*$e,K(k,2*b+2*D+2)}for(b=0;b<C;b++)k[b]=k[2*b+1]<<16|k[2*b];for(b=C;b<2*C;b++)k[b]=0;return new u(k,0)};function K(N,C){for(;(N[C]&65535)!=N[C];)N[C+1]+=N[C]>>>16,N[C]&=65535,C++}function te(N,C){this.g=N,this.h=C}function j(N,C){if(F(C))throw Error("division by zero");if(F(N))return new te(E,E);if(M(N))return C=j(U(N),C),new te(U(C.g),U(C.h));if(M(C))return C=j(N,U(C)),new te(U(C.g),C.h);if(30<N.g.length){if(M(N)||M(C))throw Error("slowDivide_ only works with positive integers.");for(var k=T,b=C;0>=b.l(N);)k=we(k),b=we(b);var D=me(k,1),L=me(b,1);for(b=me(b,2),k=me(k,2);!F(b);){var A=L.add(b);0>=A.l(N)&&(D=D.add(k),L=A),b=me(b,1),k=me(k,1)}return C=ae(N,D.j(C)),new te(D,C)}for(D=E;0<=N.l(C);){for(k=Math.max(1,Math.floor(N.m()/C.m())),b=Math.ceil(Math.log(k)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),L=m(k),A=L.j(C);M(A)||0<A.l(N);)k-=b,L=m(k),A=L.j(C);F(L)&&(L=T),D=D.add(L),N=ae(N,A)}return new te(D,N)}n.A=function(N){return j(this,N).h},n.and=function(N){for(var C=Math.max(this.g.length,N.g.length),k=[],b=0;b<C;b++)k[b]=this.i(b)&N.i(b);return new u(k,this.h&N.h)},n.or=function(N){for(var C=Math.max(this.g.length,N.g.length),k=[],b=0;b<C;b++)k[b]=this.i(b)|N.i(b);return new u(k,this.h|N.h)},n.xor=function(N){for(var C=Math.max(this.g.length,N.g.length),k=[],b=0;b<C;b++)k[b]=this.i(b)^N.i(b);return new u(k,this.h^N.h)};function we(N){for(var C=N.g.length+1,k=[],b=0;b<C;b++)k[b]=N.i(b)<<1|N.i(b-1)>>>31;return new u(k,N.h)}function me(N,C){var k=C>>5;C%=32;for(var b=N.g.length-k,D=[],L=0;L<b;L++)D[L]=0<C?N.i(L+k)>>>C|N.i(L+k+1)<<32-C:N.i(L+k);return new u(D,N.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,PI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Rs=u}).apply(typeof VE<"u"?VE:typeof self<"u"?self:typeof window<"u"?window:{});var Ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NI,cu,xI,Fh,Am,bI,DI,OI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ch=="object"&&Ch];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var B=c[S];if(!(B in v))break e;v=v[B]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,S=!1,B={next:function(){if(!S&&v<c.length){var q=v++;return{value:g(q,c[q]),done:!1}}return S=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,S),c.apply(g,B)}}return function(){return c.apply(g,arguments)}}function T(c,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,T.apply(null,arguments)}function P(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function F(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,B,q){for(var ce=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)ce[rt-2]=arguments[rt];return g.prototype[B].apply(S,ce)}}function M(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function U(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(f(S)){const B=c.length||0,q=S.length||0;c.length=B+q;for(let ce=0;ce<q;ce++)c[B+ce]=S[ce]}else c.push(S)}}class ae{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function j(c){return j[" "](c),c}j[" "]=function(){};var we=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function me(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function N(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function C(c){const g={};for(const v in c)g[v]=c[v];return g}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,g){let v,S;for(let B=1;B<arguments.length;B++){S=arguments[B];for(v in S)c[v]=S[v];for(let q=0;q<k.length;q++)v=k[q],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function D(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function L(c){d.setTimeout(()=>{throw c},0)}function A(){var c=le;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class $e{constructor(){this.h=this.g=null}add(g,v){const S=tt.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var tt=new ae(()=>new se,c=>c.reset());class se{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,G=!1,le=new $e,re=()=>{const c=d.Promise.resolve(void 0);Z=()=>{c.then(V)}};var V=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(v){L(v)}var g=tt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}G=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Pe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function De(c,g){if(Te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(we){e:{try{j(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Me[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.aa.h.call(this)}}F(De,Te);var Me={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),He=0;function nt(c,g,v,S,B){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=B,this.key=++He,this.da=this.fa=!1}function ct(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Mn(c){this.src=c,this.g={},this.h=0}Mn.prototype.add=function(c,g,v,S,B){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ce=Gn(c,g,S,B);return-1<ce?(g=c[ce],v||(g.fa=!1)):(g=new nt(g,this.src,q,!!S,B),g.fa=v,c.push(g)),g};function _n(c,g){var v=g.type;if(v in c.g){var S=c.g[v],B=Array.prototype.indexOf.call(S,g,void 0),q;(q=0<=B)&&Array.prototype.splice.call(S,B,1),q&&(ct(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Gn(c,g,v,S){for(var B=0;B<c.length;++B){var q=c[B];if(!q.da&&q.listener==g&&q.capture==!!v&&q.ha==S)return B}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),zi={};function ui(c,g,v,S,B){if(Array.isArray(g)){for(var q=0;q<g.length;q++)ui(c,g[q],v,S,B);return null}return v=hi(v),c&&c[We]?c.K(g,v,m(S)?!!S.capture:!1,B):cr(c,g,v,!1,S,B)}function cr(c,g,v,S,B,q){if(!g)throw Error("Invalid event type");var ce=m(B)?!!B.capture:!!B,rt=Hi(c);if(rt||(c[ur]=rt=new Mn(c)),v=rt.add(g,v,S,ce,q),v.proxy)return v;if(S=$i(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)Pe||(B=ce),B===void 0&&(B=!1),c.addEventListener(g.toString(),S,B);else if(c.attachEvent)c.attachEvent(Kn(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $i(){function c(v){return g.call(c.src,c.listener,v)}const g=Wi;return c}function ci(c,g,v,S,B){if(Array.isArray(g))for(var q=0;q<g.length;q++)ci(c,g[q],v,S,B);else S=m(S)?!!S.capture:!!S,v=hi(v),c&&c[We]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],v=Gn(q,v,S,B),-1<v&&(ct(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Hi(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Gn(g,v,S,B)),(v=-1<c?g[c]:null)&&hr(v))}function hr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[We])_n(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(Kn(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=Hi(g))?(_n(v,c),v.h==0&&(v.src=null,g[ur]=null)):ct(c)}}}function Kn(c){return c in zi?zi[c]:zi[c]="on"+c}function Wi(c,g){if(c.da)c=!0;else{g=new De(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&hr(c),c=v.call(S,g)}return c}function Hi(c){return c=c[ur],c instanceof Mn?c:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(c){return typeof c=="function"?c:(c[qi]||(c[qi]=function(g){return c.handleEvent(g)}),c[qi])}function Ct(){Q.call(this),this.i=new Mn(this),this.M=this,this.F=null}F(Ct,Q),Ct.prototype[We]=!0,Ct.prototype.removeEventListener=function(c,g,v,S){ci(this,c,g,v,S)};function Je(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new Te(g,c);else if(g instanceof Te)g.target=g.target||c;else{var B=g;g=new Te(S,c),b(g,B)}if(B=!0,v)for(var q=v.length-1;0<=q;q--){var ce=g.g=v[q];B=W(ce,S,!0,g)&&B}if(ce=g.g=c,B=W(ce,S,!0,g)&&B,B=W(ce,S,!1,g)&&B,v)for(q=0;q<v.length;q++)ce=g.g=v[q],B=W(ce,S,!1,g)&&B}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)ct(v[S]);delete c.g[g],c.h--}}this.F=null},Ct.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},Ct.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function W(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,q=0;q<g.length;++q){var ce=g[q];if(ce&&!ce.da&&ce.capture==v){var rt=ce.listener,Bt=ce.ha||ce.src;ce.fa&&_n(c.i,ce),B=rt.call(Bt,S)!==!1&&B}}return B&&!S.defaultPrevented}function he(c,g,v){if(typeof c=="function")v&&(c=T(c,v));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function ge(c){c.g=he(()=>{c.g=null,c.i&&(c.i=!1,ge(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ye extends Q{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ge(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(c){Q.call(this),this.h=c,this.g={}}F(wt,Q);var Lr=[];function bt(c){me(c.g,function(g,v){this.g.hasOwnProperty(v)&&hr(g)},c),c.g={}}wt.prototype.N=function(){wt.aa.N.call(this),bt(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=d.JSON.stringify,Dt=d.JSON.parse,Rt=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function an(){}an.prototype.h=null;function Mr(c){return c.h||(c.h=c.i())}function Vr(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){Te.call(this,"d")}F(Fr,Te);function $o(){Te.call(this,"c")}F($o,Te);var Ur={},_l=null;function Qs(){return _l=_l||new Ct}Ur.La="serverreachability";function yl(c){Te.call(this,Ur.La,c)}F(yl,Te);function di(c){const g=Qs();Je(g,new yl(g))}Ur.STAT_EVENT="statevent";function vl(c,g){Te.call(this,Ur.STAT_EVENT,c),this.stat=g}F(vl,Te);function At(c){const g=Qs();Je(g,new vl(g,c))}Ur.Ma="timingevent";function Wo(c,g){Te.call(this,Ur.Ma,c),this.size=g}F(Wo,Te);function dr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Ys(){this.g=!0}Ys.prototype.xa=function(){this.g=!1};function Xs(c,g,v,S,B,q){c.info(function(){if(c.g)if(q)for(var ce="",rt=q.split("&"),Bt=0;Bt<rt.length;Bt++){var qe=rt[Bt].split("=");if(1<qe.length){var Ht=qe[0];qe=qe[1];var Ot=Ht.split("_");ce=2<=Ot.length&&Ot[1]=="type"?ce+(Ht+"="+qe+"&"):ce+(Ht+"=redacted&")}}else ce=null;else ce=q;return"XMLHTTP REQ ("+S+") [attempt "+B+"]: "+g+`
`+v+`
`+ce})}function Ho(c,g,v,S,B,q,ce){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+B+"]: "+g+`
`+v+`
`+q+" "+ce})}function fr(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ef(c,v)+(S?" "+S:"")})}function El(c,g){c.info(function(){return"TIMEOUT: "+g})}Ys.prototype.info=function(){};function Ef(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var B=S[1];if(Array.isArray(B)&&!(1>B.length)){var q=B[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ce=1;ce<B.length;ce++)B[ce]=""}}}}return ht(v)}catch{return g}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function Js(){}F(Js,an),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},pr=new Js;function mr(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var wl={},Go={};function Ko(c,g,v){c.L=1,c.v=Xi(Fn(g)),c.m=v,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),at(c),c.A=Fn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Zi(v.i,"t",S),c.C=0,v=c.j.J,c.h=new cc,c.g=kc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new Ye(T(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Lr[0]=B.toString()),B=Lr);for(var q=0;q<B.length;q++){var ce=ui(v,B[q],S||g.handleEvent,!1,g.h||g);if(!ce)break;g.g[ce.key]=ce}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),di(),Xs(c.i,c.u,c.A,c.l,c.R,c.m)}mr.prototype.ca=function(c){c=c.target;const g=this.M;g&&Sn(c)==3?g.j():this.Y(c)},mr.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=Sn(this.g);var g=this.g.Ba();const Jn=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||Ot!=4||g==7||(g==8||0>=Jn?di(3):di(2)),Zs(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var S=kl(this.g);c="";var B=S.length,q=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Gi(this);var ce="";break t}this.h.i=new d.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(q&&g==B-1)});S.length=0,this.h.g+=c,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=v==200,Ho(this.i,this.u,this.A,this.l,this.R,Ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var rt,Bt=this.g;if((rt=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(rt)){var qe=rt;break t}}qe=null}if(v=qe)fr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,v);else{this.o=!1,this.s=3,At(12),Yn(this),Gi(this);break e}}if(this.P){v=!0;let jn;for(;!this.J&&this.C<ce.length;)if(jn=wf(this,ce),jn==Go){Ot==4&&(this.s=4,At(14),v=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(jn==wl){this.s=4,At(15),fr(this.i,this.l,ce,"[Invalid Chunk]"),v=!1;break}else fr(this.i,this.l,jn,null),Il(this,jn);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ce.length!=0||this.h.h||(this.s=1,At(16),v=!1),this.o=this.o&&v,!v)fr(this.i,this.l,ce,"[Invalid Chunked Response]"),Yn(this),Gi(this);else if(0<ce.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Nl(Ht),Ht.M=!0,At(11))}}else fr(this.i,this.l,ce,null),Il(this,ce);Ot==4&&Yn(this),this.o&&!this.J&&(Ot==4?sa(this.j,this):(this.o=!1,at(this)))}else ea(this.g),v==400&&0<ce.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Yn(this),Gi(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function wf(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?Go:(v=Number(g.substring(v,S)),isNaN(v)?wl:(S+=1,S+v>g.length?Go:(g=g.slice(S,S+v),c.C=S+v,g)))}mr.prototype.cancel=function(){this.J=!0,Yn(this)};function at(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=dr(T(c.ba,c),g)}function Zs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}mr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(El(this.i,this.A),this.L!=2&&(di(),At(17)),Yn(this),this.s=2,Gi(this)):dc(this,this.S-c)};function Gi(c){c.j.G==0||c.J||sa(c.j,c)}function Yn(c){Zs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,bt(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Il(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||yn(v.h,c))){if(!c.K&&yn(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var B=S;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ia(v),Er(v);else break e;ra(v),At(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=dr(T(v.Za,v),6e3));if(1>=pc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else _i(v,11)}else if((c.K||v.g==c)&&ia(v),!K(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let qe=B[g];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const Ht=qe[3];Ht!=null&&(v.la=Ht,v.j.info("VER="+v.la));const Ot=qe[4];Ot!=null&&(v.Aa=Ot,v.j.info("SVER="+v.Aa));const Jn=qe[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(S=1.5*Jn,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const jn=c.g;if(jn){const oo=jn.g?jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var q=S.h;q.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Sl(q,q.h),q.h=null))}if(S.D){const aa=jn.g?jn.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(S.ya=aa,st(S.I,S.D,aa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var ce=c;if(S.qa=Ac(S,S.J?S.ia:null,S.W),ce.K){mc(S.h,ce);var rt=ce,Bt=S.L;Bt&&(rt.I=Bt),rt.B&&(Zs(rt),at(rt)),S.g=ce}else so(S);0<v.i.length&&$r(v)}else qe[0]!="stop"&&qe[0]!="close"||_i(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?_i(v,7):en(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}di(4)}catch{}}var fc=class{constructor(c,g){this.g=c,this.map=g}};function eo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pc(c){return c.h?1:c.g?c.g.size:0}function yn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Sl(c,g){c.g?c.g.add(g):c.h=g}function mc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}eo.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return M(c.i)}function Qo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function Yo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function Ki(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Yo(c),S=Qo(c),B=S.length,q=0;q<B;q++)g.call(void 0,S[q],v&&v[q],c)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),B=null;if(0<=S){var q=c[v].substring(0,S);B=c[v].substring(S+1)}else q=c[v];g(q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function fi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof fi){this.h=c.h,no(this,c.j),this.o=c.o,this.g=c.g,Qi(this,c.s),this.l=c.l;var g=c.i,v=new jr;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Yi(this,v),this.m=c.m}else c&&(g=String(c).match(to))?(this.h=!1,no(this,g[1]||"",!0),this.o=ze(g[2]||""),this.g=ze(g[3]||"",!0),Qi(this,g[4]),this.l=ze(g[5]||"",!0),Yi(this,g[6]||"",!0),this.m=ze(g[7]||"")):(this.h=!1,this.i=new jr(null,this.h))}fi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ji(g,Xo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ji(g,Xo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ji(v,v.charAt(0)=="/"?vc:yc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ji(v,Cl)),c.join("")};function Fn(c){return new fi(c)}function no(c,g,v){c.j=v?ze(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Qi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Yi(c,g,v){g instanceof jr?(c.i=g,Br(c.i,c.h)):(v||(g=Ji(g,Ec)),c.i=new jr(g,c.h))}function st(c,g,v){c.i.set(g,v)}function Xi(c){return st(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ze(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ji(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,_c),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _c(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Xo=/[#\/\?@]/g,yc=/[#\?:]/g,vc=/[#\?]/g,Ec=/[#\?@]/g,Cl=/#/g;function jr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Zt(c){c.g||(c.g=new Map,c.h=0,c.i&&Tf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=jr.prototype,n.add=function(c,g){Zt(this),this.i=null,c=Xn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function gr(c,g){Zt(c),g=Xn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function _r(c,g){return Zt(c),g=Xn(c,g),c.g.has(g)}n.forEach=function(c,g){Zt(this),this.g.forEach(function(v,S){v.forEach(function(B){c.call(g,B,S,this)},this)},this)},n.na=function(){Zt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const B=c[S];for(let q=0;q<B.length;q++)v.push(g[S])}return v},n.V=function(c){Zt(this);let g=[];if(typeof c=="string")_r(this,c)&&(g=g.concat(this.g.get(Xn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Zt(this),this.i=null,c=Xn(this,c),_r(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Zi(c,g,v){gr(c,g),0<v.length&&(c.i=null,c.g.set(Xn(c,g),M(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const q=encodeURIComponent(String(S)),ce=this.V(S);for(S=0;S<ce.length;S++){var B=q;ce[S]!==""&&(B+="="+encodeURIComponent(String(ce[S]))),c.push(B)}}return this.i=c.join("&")};function Xn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Br(c,g){g&&!c.j&&(Zt(c),c.i=null,c.g.forEach(function(v,S){var B=S.toLowerCase();S!=B&&(gr(this,S),Zi(this,B,v))},c)),c.j=g}function If(c,g){const v=new Ys;if(d.Image){const S=new Image;S.onload=P(In,v,"TestLoadImage: loaded",!0,g,S),S.onerror=P(In,v,"TestLoadImage: error",!1,g,S),S.onabort=P(In,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=P(In,v,"TestLoadImage: timeout",!1,g,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function wc(c,g){const v=new Ys,S=new AbortController,B=setTimeout(()=>{S.abort(),In(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(q=>{clearTimeout(B),q.ok?In(v,"TestPingServer: ok",!0,g):In(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),In(v,"TestPingServer: error",!1,g)})}function In(c,g,v,S,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),S(v)}catch{}}function Sf(){this.g=new Rt}function Tc(c,g,v){const S=v||"";try{Ki(c,function(B,q){let ce=B;m(B)&&(ce=ht(B)),g.push(S+q+"="+encodeURIComponent(ce))})}catch(B){throw g.push(S+"type="+encodeURIComponent("_badmap")),B}}function pi(c){this.l=c.Ub||null,this.j=c.eb||!1}F(pi,an),pi.prototype.g=function(){return new ro(this.l,this.j)},pi.prototype.i=(function(c){return function(){return c}})({});function ro(c,g){Ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(ro,Ct),n=ro.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,vr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?yr(this):vr(this),this.readyState==3&&Ic(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,yr(this))},n.Qa=function(c){this.g&&(this.response=c,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,vr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function vr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function mi(c){let g="";return me(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function es(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=mi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):st(c,g,v))}function gt(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(gt,Ct);var Cf=/^https?$/i,Rl=["POST","PUT"];n=gt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?Mr(this.o):Mr(pr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){io(this,q);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var B in S)v.set(B,S[B]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const q of S.keys())v.set(q,S.get(q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),B=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||S||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ce]of v)this.g.setRequestHeader(q,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zo(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){io(this,q)}};function io(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Jo(c),Un(c)}function Jo(c){c.A||(c.A=!0,Je(c,"complete"),Je(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Je(this,"complete"),Je(this,"abort"),Un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Un(this,!0)),gt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)he(c.Ea,0,c);else if(Je(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const ce=c.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=ce===0){var B=String(c.D).match(to)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),S=!Cf.test(B?B.toLowerCase():"")}v=S}if(v)Je(c,"complete"),Je(c,"success");else{c.m=6;try{var q=2<Sn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Jo(c)}}finally{Un(c)}}}}function Un(c,g){if(c.g){Zo(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Je(c,"ready");try{v.onreadystatechange=S}catch{}}}function Zo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Dt(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(c){const g={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(K(c[S]))continue;var v=D(c[S]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=g[B]||[];g[B]=q,q.push(v)}N(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Pl(c){this.Aa=0,this.i=[],this.j=new Ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zr("baseRetryDelayMs",5e3,c),this.cb=zr("retryDelaySeedMs",1e4,c),this.Wa=zr("forwardChannelMaxRetries",2,c),this.wa=zr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new eo(c&&c.concurrentRequestLimit),this.Da=new Sf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,S){At(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Ac(this,null,this.W),$r(this)};function en(c){if(ta(c),c.G==3){var g=c.U++,v=Fn(c.I);if(st(v,"SID",c.K),st(v,"RID",g),st(v,"TYPE","terminate"),gi(c,v),g=new mr(c,c.j,g),g.L=2,g.v=Xi(Fn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=kc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),at(g)}Rc(c)}function Er(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function ta(c){Er(c),c.u&&(d.clearTimeout(c.u),c.u=null),ia(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function $r(c){if(!Vn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Z||re(),G||(Z(),G=!0),le.add(g,c),c.B=0}}function Rf(c,g){return pc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=dr(T(c.Ga,c,g),Cc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new mr(this,this.j,c);let q=this.o;if(this.S&&(q?(q=C(q),b(q,this.S)):q=this.S),this.m!==null||this.O||(B.H=q,q=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=ts(this,B,g),v=Fn(this.I),st(v,"RID",c),st(v,"CVER",22),this.D&&st(v,"X-HTTP-Session-Id",this.D),gi(this,v),q&&(this.O?g="headers="+encodeURIComponent(String(mi(q)))+"&"+g:this.m&&es(v,this.m,q)),Sl(this.h,B),this.Ua&&st(v,"TYPE","init"),this.P?(st(v,"$req",g),st(v,"SID","null"),B.T=!0,Ko(B,v,null)):Ko(B,v,g),this.G=2}}else this.G==3&&(c?na(this,c):this.i.length==0||Vn(this.h)||na(this))};function na(c,g){var v;g?v=g.l:v=c.U++;const S=Fn(c.I);st(S,"SID",c.K),st(S,"RID",v),st(S,"AID",c.T),gi(c,S),c.m&&c.o&&es(S,c.m,c.o),v=new mr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=ts(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sl(c.h,v),Ko(v,S,g)}function gi(c,g){c.H&&me(c.H,function(v,S){st(g,S,v)}),c.l&&Ki({},function(v,S){st(g,S,v)})}function ts(c,g,v){v=Math.min(c.i.length,v);var S=c.l?T(c.l.Na,c.l,c):null;e:{var B=c.i;let q=-1;for(;;){const ce=["count="+v];q==-1?0<v?(q=B[0].g,ce.push("ofs="+q)):q=0:ce.push("ofs="+q);let rt=!0;for(let Bt=0;Bt<v;Bt++){let qe=B[Bt].g;const Ht=B[Bt].map;if(qe-=q,0>qe)q=Math.max(0,B[Bt].g-100),rt=!1;else try{Tc(Ht,ce,"req"+qe+"_")}catch{S&&S(Ht)}}if(rt){S=ce.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function so(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Z||re(),G||(Z(),G=!0),le.add(g,c),c.v=0}}function ra(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=dr(T(c.Fa,c),Cc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=dr(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Er(this),Sc(this))};function Nl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new mr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Fn(c.qa);st(g,"RID","rpc"),st(g,"SID",c.K),st(g,"AID",c.T),st(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&st(g,"TO",c.ja),st(g,"TYPE","xmlhttp"),gi(c,g),c.m&&c.o&&es(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Xi(Fn(g)),v.m=null,v.P=!0,Tl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Er(this),ra(this),At(19))};function ia(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function sa(c,g){var v=null;if(c.g==g){ia(c),Nl(c),c.g=null;var S=2}else if(yn(c.h,g))v=g.D,mc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=c.B;S=Qs(),Je(S,new Wo(S,v)),$r(c)}else so(c);else if(B=g.s,B==3||B==0&&0<g.X||!(S==1&&Rf(c,g)||S==2&&ra(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),B){case 1:_i(c,5);break;case 4:_i(c,10);break;case 3:_i(c,6);break;default:_i(c,2)}}}function Cc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function _i(c,g){if(c.j.info("Error code "+g),g==2){var v=T(c.fb,c),S=c.Xa;const B=!S;S=new fi(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||no(S,"https"),Xi(S),B?If(S.toString(),v):wc(S.toString(),v)}else At(2);c.G=0,c.l&&c.l.sa(g),Rc(c),ta(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Rc(c){if(c.G=0,c.ka=[],c.l){const g=gc(c.h);(g.length!=0||c.i.length!=0)&&(U(c.ka,g),U(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function Ac(c,g,v){var S=v instanceof fi?Fn(v):new fi(v);if(S.g!="")g&&(S.g=g+"."+S.g),Qi(S,S.s);else{var B=d.location;S=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var q=new fi(null);S&&no(q,S),g&&(q.g=g),B&&Qi(q,B),v&&(q.l=v),S=q}return v=c.D,g=c.ya,v&&g&&st(S,v,g),st(S,"VER",c.la),gi(c,S),S}function kc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new gt(new pi({eb:v})):new gt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(c,g){return new vn(c,g)};function vn(c,g){Ct.call(this),this.g=new Pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!K(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!K(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Wr(this)}F(vn,Ct),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){en(this.g)},vn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=ht(c),c=v);g.i.push(new fc(g.Ya++,c)),g.G==3&&$r(g)},vn.prototype.N=function(){this.g.l=null,delete this.j,en(this.g),delete this.g,vn.aa.N.call(this)};function Pc(c){Fr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}F(Pc,Fr);function Nc(){$o.call(this),this.status=1}F(Nc,$o);function Wr(c){this.g=c}F(Wr,xl),Wr.prototype.ua=function(){Je(this.g,"a")},Wr.prototype.ta=function(c){Je(this.g,new Pc(c))},Wr.prototype.sa=function(c){Je(this.g,new Nc)},Wr.prototype.ra=function(){Je(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,OI=function(){return new oa},DI=function(){return Qs()},bI=Ur,Am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Fh=qo,uc.COMPLETE="complete",xI=uc,Vr.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,cu=Vr,gt.prototype.listenOnce=gt.prototype.L,gt.prototype.getLastError=gt.prototype.Ka,gt.prototype.getLastErrorCode=gt.prototype.Ba,gt.prototype.getStatus=gt.prototype.Z,gt.prototype.getResponseJson=gt.prototype.Oa,gt.prototype.getResponseText=gt.prototype.oa,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Ha,NI=gt}).apply(typeof Ch<"u"?Ch:typeof self<"u"?self:typeof window<"u"?window:{});const FE="@firebase/firestore",UE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fn.UNAUTHENTICATED=new fn(null),fn.GOOGLE_CREDENTIALS=new fn("google-credentials-uid"),fn.FIRST_PARTY=new fn("first-party-uid"),fn.MOCK_USER=new fn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const No=new Md("@firebase/firestore");function Na(){return No.logLevel}function pe(n,...e){if(No.logLevel<=je.DEBUG){const t=e.map(Ig);No.debug(`Firestore (${ll}): ${n}`,...t)}}function Vi(n,...e){if(No.logLevel<=je.ERROR){const t=e.map(Ig);No.error(`Firestore (${ll}): ${n}`,...t)}}function Os(n,...e){if(No.logLevel<=je.WARN){const t=e.map(Ig);No.warn(`Firestore (${ll}): ${n}`,...t)}}function Ig(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,LI(n,r,t)}function LI(n,e,t){let r=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vi(r),new Error(r)}function Ze(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||LI(e,s,r)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends ai{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(fn.UNAUTHENTICATED)))}shutdown(){}}class ZP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eN{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new As;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new As,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new As)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ze(typeof r.accessToken=="string",31837,{l:r}),new MI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class tN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(fn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const r=a=>{a.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,pe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Oe(n,e){return n<e?-1:n>e?1:0}function km(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Oe(r,s);{const a=VI(),u=sN(a.encode(BE(n,t)),a.encode(BE(e,t)));return u!==0?u:Oe(r,s)}}t+=r>65535?2:1}return Oe(n.length,e.length)}function BE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Oe(n[t],e[t]);return Oe(n.length,e.length)}function qa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="__name__";class Qr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Qr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Oe(e.length,t.length)}static compareSegments(e,t){const r=Qr.isNumericId(e),s=Qr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Qr.extractNumericId(e).compare(Qr.extractNumericId(t)):km(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rs.fromString(e.substring(4,e.length-2))}}class ut extends Qr{construct(e,t,r){return new ut(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(Y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const oN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends Qr{construct(e,t,r){return new sn(e,t,r)}static isValidIdentifier(e){return oN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zE}static keyField(){return new sn([zE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new de(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new de(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new de(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new de(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(ut.fromString(e))}static fromName(e){return new Ie(ut.fromString(e).popFirst(5))}static empty(){return new Ie(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new ut(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n,e,t){if(!t)throw new de(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aN(n,e,t,r){if(e===!0&&r===!0)throw new de(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $E(n){if(!Ie.isDocumentKey(n))throw new de(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function WE(n){if(Ie.isDocumentKey(n))throw new de(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function UI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Nr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zd(n);throw new de(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function lN(n,e){if(e<=0)throw new de(Y.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ut(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zu(n,e){if(!UI(n))throw new de(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new de(Y.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=-62135596800,qE=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qE);return new mt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HE)throw new de(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zu(e,mt._jsonSchema))return new mt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-HE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:Ut("string",mt._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new mt(0,0))}static max(){return new xe(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bu=-1;function uN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=xe.fromTimestamp(r===1e9?new mt(t+1,0):new mt(t,r));return new Ls(s,Ie.empty(),e)}function cN(n){return new Ls(n.readTime,n.key,bu)}class Ls{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ls(xe.min(),Ie.empty(),bu)}static max(){return new Ls(xe.max(),Ie.empty(),bu)}}function hN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ie.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ul(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==dN)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $d{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}$d.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=-1;function Wd(n){return n==null}function id(n){return n===0&&1/n==-1/0}function mN(n){return typeof n=="number"&&Number.isInteger(n)&&!id(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function KE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function BI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=class Pm{constructor(e,t){this.comparator=e,this.root=t||ks.EMPTY}insert(e,t){return new Pm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ks.BLACK,null,null))}remove(e){return new Pm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ks.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rh(this.root,e,this.comparator,!0)}},Rh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ks=class Ai{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ai.RED,this.left=s??Ai.EMPTY,this.right=a??Ai.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Ai(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ai.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ai.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ai.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ai.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};ks.EMPTY=null,ks.RED=!0,ks.BLACK=!1;ks.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new ks(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hn{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new Wt(sn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new zI("Invalid base64 string: "+a):a}})(e);return new on(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const yN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(n){if(Ze(!!n,39018),typeof n=="string"){let e=0;const t=yN.exec(n);if(Ze(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vs(n){return typeof n=="string"?on.fromBase64String(n):on.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="server_timestamp",WI="__type__",HI="__previous_value__",qI="__local_write_time__";function Rg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[WI])===null||t===void 0?void 0:t.stringValue)===$I}function Hd(n){const e=n.mapValue.fields[HI];return Rg(e)?Hd(e):e}function Du(n){const e=Ms(n.mapValue.fields[qI].timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const sd="(default)";class Ou{constructor(e,t){this.projectId=e,this.database=t||sd}static empty(){return new Ou("","")}get isDefaultDatabase(){return this.database===sd}isEqual(e){return e instanceof Ou&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="__type__",EN="__max__",Ah={mapValue:{}},KI="__vector__",od="value";function Fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rg(n)?4:TN(n)?9007199254740991:wN(n)?10:11:Ae(28295,{value:n})}function si(n,e){if(n===e)return!0;const t=Fs(n);if(t!==Fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Du(n).isEqual(Du(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ms(s.timestampValue),d=Ms(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Vs(s.bytesValue).isEqual(Vs(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return Pt(s.geoPointValue.latitude)===Pt(a.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return Pt(s.integerValue)===Pt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Pt(s.doubleValue),d=Pt(a.doubleValue);return u===d?id(u)===id(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return qa(n.arrayValue.values||[],e.arrayValue.values||[],si);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(KE(u)!==KE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!si(u[f],d[f])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function Lu(n,e){return(n.values||[]).find((t=>si(t,e)))!==void 0}function Ga(n,e){if(n===e)return 0;const t=Fs(n),r=Fs(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=Pt(a.integerValue||a.doubleValue),f=Pt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return YE(n.timestampValue,e.timestampValue);case 4:return YE(Du(n),Du(e));case 5:return km(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Vs(a),f=Vs(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Oe(d[m],f[m]);if(y!==0)return y}return Oe(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Oe(Pt(a.latitude),Pt(u.latitude));return d!==0?d:Oe(Pt(a.longitude),Pt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return XE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const E=a.fields||{},T=u.fields||{},P=(d=E[od])===null||d===void 0?void 0:d.arrayValue,F=(f=T[od])===null||f===void 0?void 0:f.arrayValue,M=Oe(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((y=F==null?void 0:F.values)===null||y===void 0?void 0:y.length)||0);return M!==0?M:XE(P,F)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Ah.mapValue&&u===Ah.mapValue)return 0;if(a===Ah.mapValue)return 1;if(u===Ah.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const T=km(f[E],y[E]);if(T!==0)return T;const P=Ga(d[f[E]],m[y[E]]);if(P!==0)return P}return Oe(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function YE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=Ms(n),r=Ms(e),s=Oe(t.seconds,r.seconds);return s!==0?s:Oe(t.nanos,r.nanos)}function XE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ga(t[s],r[s]);if(a)return a}return Oe(t.length,r.length)}function Ka(n){return Nm(n)}function Nm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ms(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ie.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Nm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Nm(t.fields[u])}`;return s+"}"})(n.mapValue):Ae(61005,{value:n})}function Uh(n){switch(Fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hd(n);return e?16+Uh(e):16;case 5:return 2*n.stringValue.length;case 6:return Vs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Uh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return qs(r.fields,((a,u)=>{s+=a.length+Uh(u)})),s})(n.mapValue);default:throw Ae(13486,{value:n})}}function JE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xm(n){return!!n&&"integerValue"in n}function Ag(n){return!!n&&"arrayValue"in n}function ZE(n){return!!n&&"nullValue"in n}function ew(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jh(n){return!!n&&"mapValue"in n}function wN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[GI])===null||t===void 0?void 0:t.stringValue)===KI}function yu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qs(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=yu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function TN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===EN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yu(t)}setAll(e){let t=sn.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=yu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return si(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];jh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){qs(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new bn(yu(this.value))}}function QI(n){const e=[];return qs(n.fields,((t,r)=>{const s=new sn([t]);if(jh(r)){const a=QI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new pn(e,0,xe.min(),xe.min(),xe.min(),bn.empty(),0)}static newFoundDocument(e,t,r,s){return new pn(e,1,t,xe.min(),r,s,0)}static newNoDocument(e,t){return new pn(e,2,t,xe.min(),xe.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,xe.min(),xe.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ad{constructor(e,t){this.position=e,this.inclusive=t}}function tw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=Ie.comparator(Ie.fromName(u.referenceValue),t.key):r=Ga(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function nw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!si(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class YI{}class Ft extends YI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new CN(e,t,r):t==="array-contains"?new kN(e,r):t==="in"?new PN(e,r):t==="not-in"?new NN(e,r):t==="array-contains-any"?new xN(e,r):new Ft(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new RN(e,r):new AN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ga(t,this.value)):t!==null&&Fs(this.value)===Fs(t)&&this.matchesComparison(Ga(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Or extends YI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Or(e,t)}matches(e){return XI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function XI(n){return n.op==="and"}function JI(n){return SN(n)&&XI(n)}function SN(n){for(const e of n.filters)if(e instanceof Or)return!1;return!0}function bm(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+Ka(n.value);if(JI(n))return n.filters.map((e=>bm(e))).join(",");{const e=n.filters.map((t=>bm(t))).join(",");return`${n.op}(${e})`}}function ZI(n,e){return n instanceof Ft?(function(r,s){return s instanceof Ft&&r.op===s.op&&r.field.isEqual(s.field)&&si(r.value,s.value)})(n,e):n instanceof Or?(function(r,s){return s instanceof Or&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&ZI(u,s.filters[d])),!0):!1})(n,e):void Ae(19439)}function e0(n){return n instanceof Ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ka(t.value)}`})(n):n instanceof Or?(function(t){return t.op.toString()+" {"+t.getFilters().map(e0).join(" ,")+"}"})(n):"Filter"}class CN extends Ft{constructor(e,t,r){super(e,t,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const t=Ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class RN extends Ft{constructor(e,t){super(e,"in",t),this.keys=t0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AN extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=t0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function t0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ie.fromName(r.referenceValue)))}class kN extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ag(t)&&Lu(t.arrayValue,this.value)}}class PN extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Lu(this.value.arrayValue,t)}}class NN extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Lu(this.value.arrayValue,t)}}class xN extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ag(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Lu(this.value.arrayValue,r)))}}/**
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
 */class bN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function rw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new bN(n,e,t,r,s,a,u)}function kg(n){const e=be(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>bm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Wd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ka(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ka(r))).join(",")),e.Pe=t}return e.Pe}function Pg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!IN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ZI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nw(n.startAt,e.startAt)&&nw(n.endAt,e.endAt)}function Dm(n){return Ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DN(n,e,t,r,s,a,u,d){return new hl(n,e,t,r,s,a,u,d)}function Ng(n){return new hl(n)}function iw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function n0(n){return n.collectionGroup!==null}function vu(n){const e=be(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Wt(sn.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Mu(a,r))})),t.has(sn.keyField().canonicalString())||e.Te.push(new Mu(sn.keyField(),r))}return e.Te}function ei(n){const e=be(n);return e.Ie||(e.Ie=ON(e,vu(n))),e.Ie}function ON(n,e){if(n.limitType==="F")return rw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Mu(s.field,a)}));const t=n.endAt?new ad(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ad(n.startAt.position,n.startAt.inclusive):null;return rw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Om(n,e){const t=n.filters.concat([e]);return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ld(n,e,t){return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qd(n,e){return Pg(ei(n),ei(e))&&n.limitType===e.limitType}function r0(n){return`${kg(ei(n))}|lt:${n.limitType}`}function xa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>e0(s))).join(", ")}]`),Wd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ka(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ka(s))).join(",")),`Target(${r})`})(ei(n))}; limitType=${n.limitType})`}function Gd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ie.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of vu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=tw(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,vu(r),s)||r.endAt&&!(function(u,d,f){const m=tw(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,vu(r),s))})(n,e)}function LN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function i0(n){return(e,t)=>{let r=!1;for(const s of vu(n)){const a=MN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function MN(n,e,t){const r=n.field.isKeyField()?Ie.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Ga(f,m):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return BI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new jt(Ie.comparator);function Fi(){return VN}const s0=new jt(Ie.comparator);function hu(...n){let e=s0;for(const t of n)e=e.insert(t.key,t);return e}function o0(n){let e=s0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function To(){return Eu()}function a0(){return Eu()}function Eu(){return new Uo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const FN=new jt(Ie.comparator),UN=new Wt(Ie.comparator);function Be(...n){let e=UN;for(const t of n)e=e.add(t);return e}const jN=new Wt(Oe);function BN(){return jN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:id(e)?"-0":e}}function l0(n){return{integerValue:""+n}}function zN(n,e){return mN(e)?l0(e):xg(n,e)}/**
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
 */class Kd{constructor(){this._=void 0}}function $N(n,e,t){return n instanceof ud?(function(s,a){const u={fields:{[WI]:{stringValue:$I},[qI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Rg(a)&&(a=Hd(a)),a&&(u.fields[HI]=a),{mapValue:u}})(t,e):n instanceof Qa?c0(n,e):n instanceof Vu?h0(n,e):(function(s,a){const u=u0(s,a),d=sw(u)+sw(s.Ee);return xm(u)&&xm(s.Ee)?l0(d):xg(s.serializer,d)})(n,e)}function WN(n,e,t){return n instanceof Qa?c0(n,e):n instanceof Vu?h0(n,e):t}function u0(n,e){return n instanceof cd?(function(r){return xm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class ud extends Kd{}class Qa extends Kd{constructor(e){super(),this.elements=e}}function c0(n,e){const t=d0(e);for(const r of n.elements)t.some((s=>si(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Vu extends Kd{constructor(e){super(),this.elements=e}}function h0(n,e){let t=d0(e);for(const r of n.elements)t=t.filter((s=>!si(s,r)));return{arrayValue:{values:t}}}class cd extends Kd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function sw(n){return Pt(n.integerValue||n.doubleValue)}function d0(n){return Ag(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,t){this.field=e,this.transform=t}}function qN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Qa&&s instanceof Qa||r instanceof Vu&&s instanceof Vu?qa(r.elements,s.elements,si):r instanceof cd&&s instanceof cd?si(r.Ee,s.Ee):r instanceof ud&&s instanceof ud})(n.transform,e.transform)}class GN{constructor(e,t){this.version=e,this.transformResults=t}}class xr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xr}static exists(e){return new xr(void 0,e)}static updateTime(e){return new xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qd{}function f0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new m0(n.key,xr.none()):new ec(n.key,n.data,xr.none());{const t=n.data,r=bn.empty();let s=new Wt(sn.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Gs(n.key,r,new Hn(s.toArray()),xr.none())}}function KN(n,e,t){n instanceof ec?(function(s,a,u){const d=s.value.clone(),f=aw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Gs?(function(s,a,u){if(!Bh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=aw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(p0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function wu(n,e,t,r){return n instanceof ec?(function(a,u,d,f){if(!Bh(a.precondition,u))return d;const m=a.value.clone(),y=lw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof Gs?(function(a,u,d,f){if(!Bh(a.precondition,u))return d;const m=lw(a.fieldTransforms,f,u),y=u.data;return y.setAll(p0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Bh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function QN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=u0(r.transform,s||null);a!=null&&(t===null&&(t=bn.empty()),t.set(r.field,a))}return t||null}function ow(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qa(r,s,((a,u)=>qN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ec extends Qd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gs extends Qd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function p0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function aw(n,e,t){const r=new Map;Ze(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,WN(u,d,t[s]))}return r}function lw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,$N(a,u,e))}return r}class m0 extends Qd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YN extends Qd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&KN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=wu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=wu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=a0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=f0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&qa(this.mutations,e.mutations,((t,r)=>ow(t,r)))&&qa(this.baseMutations,e.baseMutations,((t,r)=>ow(t,r)))}}class bg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return FN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new bg(e,t,r,s)}}/**
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
 */var Mt,Ge;function ex(n){switch(n){case Y.OK:return Ae(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function g0(n){if(n===void 0)return Vi("GRPC error has no .code"),Y.UNKNOWN;switch(n){case Mt.OK:return Y.OK;case Mt.CANCELLED:return Y.CANCELLED;case Mt.UNKNOWN:return Y.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return Y.INTERNAL;case Mt.UNAVAILABLE:return Y.UNAVAILABLE;case Mt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Mt.NOT_FOUND:return Y.NOT_FOUND;case Mt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Mt.ABORTED:return Y.ABORTED;case Mt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Mt.DATA_LOSS:return Y.DATA_LOSS;default:return Ae(39323,{code:n})}}(Ge=Mt||(Mt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const tx=new Rs([4294967295,4294967295],0);function uw(n){const e=VI().encode(n),t=new PI;return t.update(e),new Uint8Array(t.digest())}function cw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Rs([t,r],0),new Rs([s,a],0)]}class Dg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new du(`Invalid padding: ${t}`);if(r<0)throw new du(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new du(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new du(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Rs.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Rs.fromNumber(r)));return s.compare(tx)===1&&(s=new Rs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=uw(e),[r,s]=cw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Dg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=uw(e),[r,s]=cw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yd(xe.min(),s,new jt(Oe),Fi(),Be())}}class tc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tc(r,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class _0{constructor(e,t){this.targetId=e,this.De=t}}class y0{constructor(e,t,r=on.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class hw{constructor(){this.ve=0,this.Ce=dw(),this.Fe=on.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Be(),t=Be(),r=Be();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ae(38017,{changeType:a})}})),new tc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=dw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class nx{constructor(e){this.We=e,this.Ge=new Map,this.ze=Fi(),this.je=kh(),this.Je=kh(),this.He=new jt(Oe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Dm(a))if(r===0){const u=new Ie(a.path);this.Xe(t,u,pn.newNoDocument(u,xe.min()))}else Ze(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Vs(r).toUint8Array()}catch(f){if(f instanceof zI)return Os("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Dg(u,s,a)}catch(f){return Os(f instanceof du?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Dm(d.target)){const f=new Ie(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,pn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Be();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Yd(e,t,this.He,this.ze,r);return this.ze=Fi(),this.je=kh(),this.Je=kh(),this.He=new jt(Oe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new hw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Wt(Oe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Wt(Oe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new hw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function kh(){return new jt(Ie.comparator)}function dw(){return new jt(Ie.comparator)}const rx={asc:"ASCENDING",desc:"DESCENDING"},ix={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sx={and:"AND",or:"OR"};class ox{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lm(n,e){return n.useProto3Json||Wd(e)?e:{value:e}}function hd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ax(n,e){return hd(n,e.toTimestamp())}function ti(n){return Ze(!!n,49232),xe.fromTimestamp((function(t){const r=Ms(t);return new mt(r.seconds,r.nanos)})(n))}function Og(n,e){return Mm(n,e).canonicalString()}function Mm(n,e){const t=(function(s){return new ut(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function E0(n){const e=ut.fromString(n);return Ze(C0(e),10190,{key:e.toString()}),e}function Vm(n,e){return Og(n.databaseId,e.path)}function im(n,e){const t=E0(e);if(t.get(1)!==n.databaseId.projectId)throw new de(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new de(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ie(T0(t))}function w0(n,e){return Og(n.databaseId,e)}function lx(n){const e=E0(n);return e.length===4?ut.emptyPath():T0(e)}function Fm(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function T0(n){return Ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fw(n,e,t){return{name:Vm(n,e),fields:t.value.mapValue.fields}}function ux(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(Ze(y===void 0||typeof y=="string",58123),on.fromBase64String(y||"")):(Ze(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),on.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?Y.UNKNOWN:g0(m.code);return new de(y,m.message||"")})(u);t=new y0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=im(n,r.document.name),a=ti(r.document.updateTime),u=r.document.createTime?ti(r.document.createTime):xe.min(),d=new bn({mapValue:{fields:r.document.fields}}),f=pn.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new zh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=im(n,r.document),a=r.readTime?ti(r.readTime):xe.min(),u=pn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new zh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=im(n,r.document),a=r.removedTargetIds||[];t=new zh([],a,s,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ZN(s,a),d=r.targetId;t=new _0(d,u)}}return t}function cx(n,e){let t;if(e instanceof ec)t={update:fw(n,e.key,e.value)};else if(e instanceof m0)t={delete:Vm(n,e.key)};else if(e instanceof Gs)t={update:fw(n,e.key,e.data),updateMask:vx(e.fieldMask)};else{if(!(e instanceof YN))return Ae(16599,{Rt:e.type});t={verify:Vm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof ud)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Qa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Vu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof cd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ae(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:ax(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)})(n,e.precondition)),t}function hx(n,e){return n&&n.length>0?(Ze(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ti(s.updateTime):ti(a);return u.isEqual(xe.min())&&(u=ti(a)),new GN(u,s.transformResults||[])})(t,e)))):[]}function dx(n,e){return{documents:[w0(n,e.path)]}}function fx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=w0(n,s);const a=(function(m){if(m.length!==0)return S0(Or.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(T){return{field:ba(T.field),direction:gx(T.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Lm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function px(n){let e=lx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ze(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(E){const T=I0(E);return T instanceof Or&&JI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(F){return new Mu(Da(F.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(F.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,Wd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,P=E.values||[];return new ad(P,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,P=E.values||[];return new ad(P,T)})(t.endAt)),DN(e,s,u,a,d,"F",f,m)}function mx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function I0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Da(t.unaryFilter.field);return Ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Da(t.unaryFilter.field);return Ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Da(t.unaryFilter.field);return Ft.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Da(t.unaryFilter.field);return Ft.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ft.create(Da(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Or.create(t.compositeFilter.filters.map((r=>I0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function gx(n){return rx[n]}function _x(n){return ix[n]}function yx(n){return sx[n]}function ba(n){return{fieldPath:n.canonicalString()}}function Da(n){return sn.fromServerFormat(n.fieldPath)}function S0(n){return n instanceof Ft?(function(t){if(t.op==="=="){if(ew(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NAN"}};if(ZE(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ew(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NAN"}};if(ZE(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(t.field),op:_x(t.op),value:t.value}}})(n):n instanceof Or?(function(t){const r=t.getFilters().map((s=>S0(s)));return r.length===1?r[0]:{compositeFilter:{op:yx(t.op),filters:r}}})(n):Ae(54877,{filter:n})}function vx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function C0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,r,s,a=xe.min(),u=xe.min(),d=on.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.gt=e}}function wx(n){const e=px({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ld(e,e.limit,"L"):e}/**
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
 */class Tx{constructor(){this.Dn=new Ix}addToCollectionParentIndex(e,t){return this.Dn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(Ls.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(Ls.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class Ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Wt(ut.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Wt(ut.comparator)).toArray()}}/**
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
 */const pw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},R0=41943040;class xn{static withCacheSize(e){return new xn(e,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.DEFAULT_COLLECTION_PERCENTILE=10,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xn.DEFAULT=new xn(R0,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xn.DISABLED=new xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mw="LruGarbageCollector",Sx=1048576;function gw([n,e],[t,r]){const s=Oe(n,t);return s===0?Oe(e,r):s}class Cx{constructor(e){this.Tr=e,this.buffer=new Wt(gw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){pe(mw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?pe(mw,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.Rr(3e5)}))}}class Ax{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return X.resolve($d.ue);const r=new Cx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(pw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Na()<=je.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
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
 */class Px{constructor(){this.changes=new Uo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&wu(r.mutation,s,Hn.empty(),mt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Be()){const s=To();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=hu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=To();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Be())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Fi();const u=Eu(),d=(function(){return Eu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof Gs)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),wu(y.mutation,m,y.mutation.getFieldMask(),mt.now())):u.set(m.key,Hn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var E;return d.set(m,new Nx(y,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Eu();let s=new jt(((u,d)=>u-d)),a=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||Hn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const E=(s.get(d.batchId)||Be()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,E=a0();y.forEach((T=>{if(!a.has(T)){const P=f0(t.get(T),r.get(T));P!==null&&E.set(T,P),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return X.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return Ie.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):n0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):X.resolve(To());let d=bu,f=a;return u.next((m=>X.forEach(m,((y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(y)?X.resolve():this.remoteDocumentCache.getEntry(e,y).next((T=>{f=f.insert(y,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Be()))).next((y=>({batchId:d,changes:o0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ie(t)).next((r=>{let s=hu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=hu();return this.indexManager.getCollectionParents(e,a).next((d=>X.forEach(d,(f=>{const m=(function(E,T){return new hl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,pn.newInvalidDocument(y)))}));let d=hu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&wu(y.mutation,m,Hn.empty(),mt.now()),Gd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return X.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ti(s.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:wx(s.bundledQuery),readTime:ti(s.readTime)}})(t)),X.resolve()}}/**
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
 */class Ox{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.qr=new Wt(Yt.Qr),this.$r=new Wt(Yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Yt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Yt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ie(new ut([])),r=new Yt(t,e),s=new Yt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ie(new ut([])),r=new Yt(t,e),s=new Yt(t,e+1);let a=Be();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Yt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Yt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ie.comparator(e.key,t.key)||Oe(e.Hr,t.Hr)}static Ur(e,t){return Oe(e.Hr,t.Hr)||Ie.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Wt(Yt.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new XN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Yt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return X.resolve(u)}lookupMutationBatch(e,t){return X.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return X.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Cg:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Yt(t,0),s=new Yt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),X.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Wt(Oe);return t.forEach((s=>{const a=new Yt(s,0),u=new Yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),X.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;Ie.isDocumentKey(a)||(a=a.child(""));const u=new Yt(new Ie(a),0);let d=new Wt(Oe);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),X.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return X.forEach(t.mutations,(s=>{const a=new Yt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Yt(t,0),s=this.Yr.firstAfterOrEqual(r);return X.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.ni=e,this.docs=(function(){return new jt(Ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let r=Fi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():pn.newInvalidDocument(s))})),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Fi();const u=t.path,d=new Ie(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||hN(cN(y),r)<=0||(s.has(y.key)||Gd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return X.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ae(9500)}ri(e,t){return X.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Vx(this)}getSize(e){return X.resolve(this.size)}}class Vx extends Px{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),X.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.persistence=e,this.ii=new Uo((t=>kg(t)),Pg),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.si=0,this.oi=new Lg,this.targetCount=0,this._i=Ya.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),X.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.hr(t),X.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),X.waitFor(a).next((()=>s))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),X.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t){this.ai={},this.overlays={},this.ui=new $d(0),this.ci=!1,this.ci=!0,this.li=new Ox,this.referenceDelegate=e(this),this.hi=new Fx(this),this.indexManager=new Tx,this.remoteDocumentCache=(function(s){return new Mx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Ex(t),this.Ti=new bx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Dx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Lx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){pe("MemoryPersistence","Starting transaction:",e);const s=new Ux(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return X.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Ux extends fN{constructor(e){super(),this.currentSequenceNumber=e}}class Mg{constructor(e){this.persistence=e,this.Ai=new Lg,this.Ri=null}static Vi(e){return new Mg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,(r=>{const s=Ie.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,xe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return X.or([()=>X.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class dd{constructor(e,t){this.persistence=e,this.gi=new Uo((r=>gN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=kx(this,t)}static Vi(e,t){return new dd(e,t)}Ii(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return X.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?X.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,xe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uh(e.data.value)),t}Sr(e,t,r){return X.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return X.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Be(),s=Be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Vg(e,t.fromCache,r,s)}}/**
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
 */class Bx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return _A()?8:pN(mn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new jx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Na()<=je.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",xa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(Na()<=je.DEBUG&&pe("QueryEngine","Query:",xa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Na()<=je.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",xa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ei(t))):X.resolve())}ps(e,t){if(iw(t))return X.resolve(null);let r=ei(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ld(t,null,"F"),r=ei(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Be(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,ld(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return iw(t)||s.isEqual(xe.min())?X.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?X.resolve(null):(Na()<=je.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xa(t)),this.vs(e,u,t,uN(s,bu)).next((d=>d)))}))}bs(e,t){let r=new Wt(i0(e));return t.forEach(((s,a)=>{Gd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Na()<=je.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",xa(t)),this.gs.getDocumentsMatchingQuery(e,t,Ls.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="LocalStore",zx=3e8;class $x{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new jt(Oe),this.Ms=new Uo((a=>kg(a)),Pg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Wx(n,e,t,r){return new $x(n,e,t,r)}async function k0(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Be();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Hx(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const E=m.batch,T=E.keys();let P=X.resolve();return T.forEach((F=>{P=P.next((()=>y.getEntry(f,F))).next((M=>{const U=m.docVersions.get(F);Ze(U!==null,48541),M.version.compareTo(U)<0&&(E.applyToRemoteDocument(M,m),M.isValidDocument()&&(M.setReadTime(m.commitVersion),y.addEntry(M)))}))})),P.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function P0(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function qx(n,e){const t=be(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,E))));let P=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(on.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):y.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(y.resumeToken,r)),s=s.insert(E,P),(function(M,U,ae){return M.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=zx?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(T,P,y)&&d.push(t.hi.updateTargetData(a,P))}));let f=Fi(),m=Be();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Gx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(xe.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return X.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Gx(n,e,t){let r=Be(),s=Be();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Fi();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(xe.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):pe(Fg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Kx(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Cg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Qx(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,X.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new Ts(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Um(n,e,t){const r=be(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!cl(u))throw u;pe(Fg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function _w(n,e,t){const r=be(n);let s=xe.min(),a=Be();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const E=be(f),T=E.Ms.get(y);return T!==void 0?X.resolve(E.Fs.get(T)):E.hi.getTargetData(m,y)})(r,u,ei(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:xe.min(),t?a:Be()))).next((d=>(Yx(r,LN(e),d),{documents:d,qs:a})))))}function Yx(n,e,t){let r=n.xs.get(e)||xe.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class yw{constructor(){this.activeTargetIds=BN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xx{constructor(){this.Fo=new yw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new yw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const vw="ConnectivityMonitor";class Ew{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){pe(vw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){pe(vw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ph=null;function jm(){return Ph===null?Ph=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ph++,"0x"+Ph.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="RestConnection",Zx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===sd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=jm(),d=this.Go(e,t.toUriEncodedString());pe(sm,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=oi(m);return this.jo(e,d,f,r,y).then((E=>(pe(sm,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Os(sm,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ll})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Zx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dn="WebChannelConnection";class nb extends eb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=jm();return new Promise(((d,f)=>{const m=new NI;m.setWithCredentials(!0),m.listenOnce(xI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Fh.NO_ERROR:const E=m.getResponseJson();pe(dn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Fh.TIMEOUT:pe(dn,`RPC '${e}' ${u} timed out`),f(new de(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Fh.HTTP_ERROR:const T=m.getStatus();if(pe(dn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let P=m.getResponseJson();Array.isArray(P)&&(P=P[0]);const F=P==null?void 0:P.error;if(F&&F.status&&F.message){const M=(function(ae){const K=ae.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(K)>=0?K:Y.UNKNOWN})(F.status);f(new de(M,F.message))}else f(new de(Y.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new de(Y.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{pe(dn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);pe(dn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=jm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=OI(),d=DI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");pe(dn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);this.T_(E);let T=!1,P=!1;const F=new tb({Ho:U=>{P?pe(dn,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(T||(pe(dn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),pe(dn,`RPC '${e}' stream ${s} sending:`,U),E.send(U))},Yo:()=>E.close()}),M=(U,ae,K)=>{U.listen(ae,(te=>{try{K(te)}catch(j){setTimeout((()=>{throw j}),0)}}))};return M(E,cu.EventType.OPEN,(()=>{P||(pe(dn,`RPC '${e}' stream ${s} transport opened.`),F.s_())})),M(E,cu.EventType.CLOSE,(()=>{P||(P=!0,pe(dn,`RPC '${e}' stream ${s} transport closed`),F.__(),this.I_(E))})),M(E,cu.EventType.ERROR,(U=>{P||(P=!0,Os(dn,`RPC '${e}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),F.__(new de(Y.UNAVAILABLE,"The operation could not be completed")))})),M(E,cu.EventType.MESSAGE,(U=>{var ae;if(!P){const K=U.data[0];Ze(!!K,16349);const te=K,j=(te==null?void 0:te.error)||((ae=te[0])===null||ae===void 0?void 0:ae.error);if(j){pe(dn,`RPC '${e}' stream ${s} received error:`,j);const we=j.status;let me=(function(k){const b=Mt[k];if(b!==void 0)return g0(b)})(we),N=j.message;me===void 0&&(me=Y.INTERNAL,N="Unknown error status: "+we+" with message "+j.message),P=!0,F.__(new de(me,N)),E.close()}else pe(dn,`RPC '${e}' stream ${s} received:`,K),F.a_(K)}})),M(d,bI.STAT_EVENT,(U=>{U.stat===Am.PROXY?pe(dn,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===Am.NOPROXY&&pe(dn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{F.o_()}),0),F}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function om(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){return new ox(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&pe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="PersistentStream";class x0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new N0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Vi(t.toString()),Vi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new de(Y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return pe(ww,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(pe(ww,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rb extends x0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ux(this.serializer,e),r=(function(a){if(!("targetChange"in a))return xe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?xe.min():u.readTime?ti(u.readTime):xe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Fm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Dm(f)?{documents:dx(a,f)}:{query:fx(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=v0(a,u.resumeToken);const m=Lm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(xe.min())>0){d.readTime=hd(a,u.snapshotVersion.toTimestamp());const m=Lm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=mx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Fm(this.serializer),t.removeTarget=e,this.k_(t)}}class ib extends x0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=hx(e.writeResults,e.commitTime),r=ti(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Fm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>cx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{}class ob extends sb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new de(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Mm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(Y.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Mm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(Y.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class ab{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vi(t),this._a=!1):pe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="RemoteStore";class lb{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{jo(this)&&(pe(xo,"Restarting streams for network reachability change."),await(async function(f){const m=be(f);m.Ia.add(4),await nc(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Jd(m)})(this))}))})),this.Aa=new ab(r,s)}}async function Jd(n){if(jo(n))for(const e of n.da)await e(!0)}async function nc(n){for(const e of n.da)await e(!1)}function b0(n,e){const t=be(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),zg(t)?Bg(t):dl(t).x_()&&jg(t,e))}function Ug(n,e){const t=be(n),r=dl(t);t.Ta.delete(e),r.x_()&&D0(t,e),t.Ta.size===0&&(r.x_()?r.B_():jo(t)&&t.Aa.set("Unknown"))}function jg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dl(n).H_(e)}function D0(n,e){n.Ra.$e(e),dl(n).Y_(e)}function Bg(n){n.Ra=new nx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),dl(n).start(),n.Aa.aa()}function zg(n){return jo(n)&&!dl(n).M_()&&n.Ta.size>0}function jo(n){return be(n).Ia.size===0}function O0(n){n.Ra=void 0}async function ub(n){n.Aa.set("Online")}async function cb(n){n.Ta.forEach(((e,t)=>{jg(n,e)}))}async function hb(n,e){O0(n),zg(n)?(n.Aa.la(e),Bg(n)):n.Aa.set("Unknown")}async function db(n,e,t){if(n.Aa.set("Online"),e instanceof y0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){pe(xo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fd(n,r)}else if(e instanceof zh?n.Ra.Ye(e):e instanceof _0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(xe.min()))try{const r=await P0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(on.EMPTY_BYTE_STRING,y.snapshotVersion)),D0(a,f);const E=new Ts(y.target,f,m,y.sequenceNumber);jg(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){pe(xo,"Failed to raise snapshot:",r),await fd(n,r)}}async function fd(n,e,t){if(!cl(e))throw e;n.Ia.add(1),await nc(n),n.Aa.set("Offline"),t||(t=()=>P0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pe(xo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Jd(n)}))}function L0(n,e){return e().catch((t=>fd(n,t,e)))}async function Zd(n){const e=be(n),t=Us(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Cg;for(;fb(e);)try{const s=await Kx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,pb(e,s)}catch(s){await fd(e,s)}M0(e)&&V0(e)}function fb(n){return jo(n)&&n.Pa.length<10}function pb(n,e){n.Pa.push(e);const t=Us(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function M0(n){return jo(n)&&!Us(n).M_()&&n.Pa.length>0}function V0(n){Us(n).start()}async function mb(n){Us(n).na()}async function gb(n){const e=Us(n);for(const t of n.Pa)e.X_(t.mutations)}async function _b(n,e,t){const r=n.Pa.shift(),s=bg.from(r,e,t);await L0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Zd(n)}async function yb(n,e){e&&Us(n).Z_&&await(async function(r,s){if((function(u){return ex(u)&&u!==Y.ABORTED})(s.code)){const a=r.Pa.shift();Us(r).N_(),await L0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Zd(r)}})(n,e),M0(n)&&V0(n)}async function Tw(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),pe(xo,"RemoteStore received new credentials");const r=jo(t);t.Ia.add(3),await nc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Jd(t)}async function vb(n,e){const t=be(n);e?(t.Ia.delete(2),await Jd(t)):e||(t.Ia.add(2),await nc(t),t.Aa.set("Unknown"))}function dl(n){return n.Va||(n.Va=(function(t,r,s){const a=be(t);return a.ia(),new rb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:ub.bind(null,n),e_:cb.bind(null,n),n_:hb.bind(null,n),J_:db.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),zg(n)?Bg(n):n.Aa.set("Unknown")):(await n.Va.stop(),O0(n))}))),n.Va}function Us(n){return n.ma||(n.ma=(function(t,r,s){const a=be(t);return a.ia(),new ib(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:mb.bind(null,n),n_:yb.bind(null,n),ea:gb.bind(null,n),ta:_b.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Zd(n)):(await n.ma.stop(),n.Pa.length>0&&(pe(xo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new As,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new $g(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wg(n,e){if(Vi("AsyncQueue",`${e}: ${n}`),cl(n))return new de(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Iw{constructor(){this.fa=new jt(Ie.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xa{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Xa(e,t,Ua.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class wb{constructor(){this.queries=Sw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=be(t),a=s.queries;s.queries=Sw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new de(Y.ABORTED,"Firestore shutting down"))}}function Sw(){return new Uo((n=>r0(n)),qd)}async function F0(n,e){const t=be(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new Eb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Wg(u,`Initialization of query '${xa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Hg(t)}async function U0(n,e){const t=be(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Tb(n,e){const t=be(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Hg(t)}function Ib(n,e,t){const r=be(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Hg(n){n.Da.forEach((e=>{e.next()}))}var Bm,Cw;(Cw=Bm||(Bm={})).Fa="default",Cw.Cache="cache";class j0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Bm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.key=e}}class z0{constructor(e){this.key=e}}class Sb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Be(),this.mutatedKeys=Be(),this.Xa=i0(e),this.eu=new Ua(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Iw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,E)=>{const T=s.get(y),P=Gd(this.query,E)?E:null,F=!!T&&this.mutatedKeys.has(T.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let U=!1;T&&P?T.data.isEqual(P.data)?F!==M&&(r.track({type:3,doc:P}),U=!0):this.iu(T,P)||(r.track({type:2,doc:P}),U=!0,(f&&this.Xa(P,f)>0||m&&this.Xa(P,m)<0)&&(d=!0)):!T&&P?(r.track({type:0,doc:P}),U=!0):T&&!P&&(r.track({type:1,doc:T}),U=!0,(f||m)&&(d=!0)),U&&(P?(u=u.add(P),a=M?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,E)=>(function(P,F){const M=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:U})}};return M(P)-M(F)})(y.type,E.type)||this.Xa(y.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Xa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Iw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Be(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new z0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new B0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const qg="SyncEngine";class Cb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Rb{constructor(e){this.key=e,this.lu=!1}}class Ab{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Uo((d=>r0(d)),qd),this.Tu=new Map,this.Iu=new Set,this.du=new jt(Ie.comparator),this.Eu=new Map,this.Au=new Lg,this.Ru={},this.Vu=new Map,this.mu=Ya.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function kb(n,e,t=!0){const r=K0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await $0(r,e,t,!0),s}async function Pb(n,e){const t=K0(n);await $0(t,e,!0,!1)}async function $0(n,e,t,r){const s=await Qx(n.localStore,ei(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await Nb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&b0(n.remoteStore,s),d}async function Nb(n,e,t,r,s){n.gu=(E,T,P)=>(async function(M,U,ae,K){let te=U.view.nu(ae);te.Ds&&(te=await _w(M.localStore,U.query,!1).then((({documents:N})=>U.view.nu(N,te))));const j=K&&K.targetChanges.get(U.targetId),we=K&&K.targetMismatches.get(U.targetId)!=null,me=U.view.applyChanges(te,M.isPrimaryClient,j,we);return Aw(M,U.targetId,me._u),me.snapshot})(n,E,T,P);const a=await _w(n.localStore,e,!0),u=new Sb(e,a.qs),d=u.nu(a.documents),f=tc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);Aw(n,t,m._u);const y=new Cb(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function xb(n,e,t){const r=be(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!qd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Um(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ug(r.remoteStore,s.targetId),zm(r,s.targetId)})).catch(ul)):(zm(r,s.targetId),await Um(r.localStore,s.targetId,!0))}async function bb(n,e){const t=be(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ug(t.remoteStore,r.targetId))}async function Db(n,e,t){const r=jb(n);try{const s=await(function(u,d){const f=be(u),m=mt.now(),y=d.reduce(((P,F)=>P.add(F.key)),Be());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let F=Fi(),M=Be();return f.Os.getEntries(P,y).next((U=>{F=U,F.forEach(((ae,K)=>{K.isValidDocument()||(M=M.add(ae))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,F))).next((U=>{E=U;const ae=[];for(const K of d){const te=QN(K,E.get(K.key).overlayedDocument);te!=null&&ae.push(new Gs(K.key,te,QI(te.value.mapValue),xr.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,ae,d)})).next((U=>{T=U;const ae=U.applyToLocalDocumentSet(E,M);return f.documentOverlayCache.saveOverlays(P,U.batchId,ae)}))})).then((()=>({batchId:T.batchId,changes:o0(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new jt(Oe)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await rc(r,s.changes),await Zd(r.remoteStore)}catch(s){const a=Wg(s,"Failed to persist write");t.reject(a)}}async function W0(n,e){const t=be(n);try{const r=await qx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(Ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?Ze(u.lu,14607):s.removedDocuments.size>0&&(Ze(u.lu,42227),u.lu=!1))})),await rc(t,r,e)}catch(r){await ul(r)}}function Rw(n,e,t){const r=be(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=be(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&Hg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ob(n,e,t){const r=be(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new jt(Ie.comparator);u=u.insert(a,pn.newNoDocument(a,xe.min()));const d=Be().add(a),f=new Yd(xe.min(),new Map,new jt(Oe),u,d);await W0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Gg(r)}else await Um(r.localStore,e,!1).then((()=>zm(r,e,t))).catch(ul)}async function Lb(n,e){const t=be(n),r=e.batch.batchId;try{const s=await Hx(t.localStore,e);q0(t,r,null),H0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await rc(t,s)}catch(s){await ul(s)}}async function Mb(n,e,t){const r=be(n);try{const s=await(function(u,d){const f=be(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(Ze(E!==null,37113),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);q0(r,e,t),H0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await rc(r,s)}catch(s){await ul(s)}}function H0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function q0(n,e,t){const r=be(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function zm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||G0(n,r)}))}function G0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ug(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Gg(n))}function Aw(n,e,t){for(const r of t)r instanceof B0?(n.Au.addReference(r.key,e),Vb(n,r)):r instanceof z0?(pe(qg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||G0(n,r.key)):Ae(19791,{yu:r})}function Vb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(pe(qg,"New document in limbo: "+t),n.Iu.add(r),Gg(n))}function Gg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ie(ut.fromString(e)),r=n.mu.next();n.Eu.set(r,new Rb(t)),n.du=n.du.insert(t,r),b0(n.remoteStore,new Ts(ei(Ng(t.path)),r,"TargetPurposeLimboResolution",$d.ue))}}async function rc(n,e,t){const r=be(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Vg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=be(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>X.forEach(m,(T=>X.forEach(T.Is,(P=>y.persistence.referenceDelegate.addReference(E,T.targetId,P))).next((()=>X.forEach(T.ds,(P=>y.persistence.referenceDelegate.removeReference(E,T.targetId,P)))))))))}catch(E){if(!cl(E))throw E;pe(Fg,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const P=y.Fs.get(T),F=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(F);y.Fs=y.Fs.insert(T,M)}}})(r.localStore,a))}async function Fb(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){pe(qg,"User change. New user:",e.toKey());const r=await k0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new de(Y.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rc(t,r.Bs)}}function Ub(n,e){const t=be(n),r=t.Eu.get(e);if(r&&r.lu)return Be().add(r.key);{let s=Be();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function K0(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ob.bind(null,e),e.hu.J_=Tb.bind(null,e.eventManager),e.hu.pu=Ib.bind(null,e.eventManager),e}function jb(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mb.bind(null,e),e}class pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Wx(this.persistence,new Bx,e.initialUser,this.serializer)}Du(e){return new A0(Mg.Vi,this.serializer)}bu(e){return new Xx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pd.provider={build:()=>new pd};class Bb extends pd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ze(this.persistence.referenceDelegate instanceof dd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Rx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?xn.withCacheSize(this.cacheSizeBytes):xn.DEFAULT;return new A0((r=>dd.Vi(r,t)),this.serializer)}}class $m{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fb.bind(null,this.syncEngine),await vb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wb})()}createDatastore(e){const t=Xd(e.databaseInfo.databaseId),r=(function(a){return new nb(a)})(e.databaseInfo);return(function(a,u,d,f){return new ob(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new lb(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Rw(this.syncEngine,t,0)),(function(){return Ew.C()?new Ew:new Jx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const E=new Ab(s,a,u,d,f,m);return y&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=be(s);pe(xo,"RemoteStore shutting down."),a.Ia.add(5),await nc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$m.provider={build:()=>new $m};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="FirestoreClient";class zb{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=fn.UNAUTHENTICATED,this.clientId=Sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{pe(js,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(pe(js,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new As;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function am(n,e){n.asyncQueue.verifyOperationInProgress(),pe(js,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await k0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Os("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{pe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Os("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function kw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $b(n);pe(js,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Tw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Tw(e.remoteStore,s))),n._onlineComponents=e}async function $b(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe(js,"Using user provided OfflineComponentProvider");try{await am(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Y.FAILED_PRECONDITION||s.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Os("Error using user provided cache. Falling back to memory cache: "+t),await am(n,new pd)}}else pe(js,"Using default OfflineComponentProvider"),await am(n,new Bb(void 0));return n._offlineComponents}async function Y0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe(js,"Using user provided OnlineComponentProvider"),await kw(n,n._uninitializedComponentsProvider._online)):(pe(js,"Using default OnlineComponentProvider"),await kw(n,new $m))),n._onlineComponents}function Wb(n){return Y0(n).then((e=>e.syncEngine))}async function Wm(n){const e=await Y0(n),t=e.eventManager;return t.onListen=kb.bind(null,e.syncEngine),t.onUnlisten=xb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bb.bind(null,e.syncEngine),t}function Hb(n,e,t={}){const r=new As;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new Q0({next:T=>{y.Ou(),u.enqueueAndForget((()=>U0(a,E))),T.fromCache&&f.source==="server"?m.reject(new de(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new j0(d,y,{includeMetadataChanges:!0,ka:!0});return F0(a,E)})(await Wm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */const J0="firestore.googleapis.com",Nw=!0;class xw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new de(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=J0,this.ssl=Nw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Nw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=R0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sx)throw new de(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new JP;switch(r.type){case"firstParty":return new nN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Pw.get(t);r&&(pe("ComponentProvider","Removing Datastore"),Pw.delete(t),r.terminate())})(this),Promise.resolve()}}function qb(n,e,t,r={}){var s;n=Nr(n,ef);const a=oi(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Dd(`https://${f}`),Od("Firestore",!0)),u.host!==J0&&u.host!==f&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Di(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=fn.MOCK_USER;else{y=hg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new de(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new fn(T)}n._authCredentials=new ZP(new MI(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class xt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}toJSON(){return{type:xt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zu(t,xt._jsonSchema))return new xt(e,r||null,new Ie(ut.fromString(t.referencePath)))}}xt._jsonSchemaVersion="firestore/documentReference/1.0",xt._jsonSchema={type:Ut("string",xt._jsonSchemaVersion),referencePath:Ut("string")};class Ps extends Bi{constructor(e,t,r){super(e,t,Ng(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new Ie(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function Bs(n,e,...t){if(n=et(n),FI("collection","path",e),n instanceof ef){const r=ut.fromString(e,...t);return WE(r),new Ps(n,null,r)}{if(!(n instanceof xt||n instanceof Ps))throw new de(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return WE(r),new Ps(n.firestore,null,r)}}function md(n,e,...t){if(n=et(n),arguments.length===1&&(e=Sg.newId()),FI("doc","path",e),n instanceof ef){const r=ut.fromString(e,...t);return $E(r),new xt(n,null,new Ie(r))}{if(!(n instanceof xt||n instanceof Ps))throw new de(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return $E(r),new xt(n.firestore,n instanceof Ps?n.converter:null,new Ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="AsyncQueue";class Dw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new N0(this,"async_queue_retry"),this.oc=()=>{const r=om();r&&pe(bw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=om();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=om();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new As;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!cl(e))throw e;pe(bw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Vi("INTERNAL UNHANDLED ERROR: ",Ow(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=$g.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ae(47125,{hc:Ow(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ow(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Lw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class bo extends ef{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Dw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dw(e),this._firestoreClient=void 0,await e}}}function Gb(n,e){const t=typeof n=="object"?n:Vd(),r=typeof n=="string"?n:sd,s=Qu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=cg("firestore");a&&qb(s,...a)}return s}function Kg(n){if(n._terminated)throw new de(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kb(n),n._firestoreClient}function Kb(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new vN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,X0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new zb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sr(on.fromBase64String(e))}catch(t){throw new de(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sr(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zu(e,sr._jsonSchema))return sr.fromBase64String(e.bytes)}}sr._jsonSchemaVersion="firestore/bytes/1.0",sr._jsonSchema={type:Ut("string",sr._jsonSchemaVersion),bytes:Ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ni._jsonSchemaVersion}}static fromJSON(e){if(Zu(e,ni._jsonSchema))return new ni(e.latitude,e.longitude)}}ni._jsonSchemaVersion="firestore/geoPoint/1.0",ni._jsonSchema={type:Ut("string",ni._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
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
 */class ri{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zu(e,ri._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ri(e.vectorValues);throw new de(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ri._jsonSchemaVersion="firestore/vectorValue/1.0",ri._jsonSchema={type:Ut("string",ri._jsonSchemaVersion),vectorValues:Ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=/^__.*__$/;class Yb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ec(e,this.data,t,this.fieldTransforms)}}class Z0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Gs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function eS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class rf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return gd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(eS(this.Ec)&&Qb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Xb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xd(e)}Dc(e,t,r,s=!1){return new rf({Ec:e,methodName:t,bc:r,path:sn.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sf(n){const e=n._freezeSettings(),t=Xd(n._databaseId);return new Xb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tS(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Yg("Data must be an object, but it was:",u,r);const d=nS(r,u);let f,m;if(a.merge)f=new Hn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const T=Hm(e,E,t);if(!u.contains(T))throw new de(Y.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);iS(y,T)||y.push(T)}f=new Hn(y),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new Yb(new bn(d),f,m)}class of extends nf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof of}}function Jb(n,e,t){return new rf({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Qg extends nf{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Jb(this,e,!0),r=this.vc.map((a=>fl(a,t))),s=new Qa(r);return new HN(e.path,s)}isEqual(e){return e instanceof Qg&&Di(this.vc,e.vc)}}function Zb(n,e,t,r){const s=n.Dc(1,e,t);Yg("Data must be an object, but it was:",s,r);const a=[],u=bn.empty();qs(r,((f,m)=>{const y=Xg(e,f,t);m=et(m);const E=s.gc(y);if(m instanceof of)a.push(y);else{const T=fl(m,E);T!=null&&(a.push(y),u.set(y,T))}}));const d=new Hn(a);return new Z0(u,d,s.fieldTransforms)}function eD(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Hm(e,r,t)],f=[s];if(a.length%2!=0)throw new de(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Hm(e,a[T])),f.push(a[T+1]);const m=[],y=bn.empty();for(let T=d.length-1;T>=0;--T)if(!iS(m,d[T])){const P=d[T];let F=f[T];F=et(F);const M=u.gc(P);if(F instanceof of)m.push(P);else{const U=fl(F,M);U!=null&&(m.push(P),y.set(P,U))}}const E=new Hn(m);return new Z0(y,E,u.fieldTransforms)}function tD(n,e,t,r=!1){return fl(t,n.Dc(r?4:3,e))}function fl(n,e){if(rS(n=et(n)))return Yg("Unsupported field value:",e,n),nS(n,e);if(n instanceof nf)return(function(r,s){if(!eS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=fl(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=mt.fromDate(r);return{timestampValue:hd(s.serializer,a)}}if(r instanceof mt){const a=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hd(s.serializer,a)}}if(r instanceof ni)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sr)return{bytesValue:v0(s.serializer,r._byteString)};if(r instanceof xt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Og(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ri)return(function(u,d){return{mapValue:{fields:{[GI]:{stringValue:KI},[od]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return xg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${zd(r)}`)})(n,e)}function nS(n,e){const t={};return BI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(n,((r,s)=>{const a=fl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function rS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof ni||n instanceof sr||n instanceof xt||n instanceof nf||n instanceof ri)}function Yg(n,e,t){if(!rS(t)||!UI(t)){const r=zd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Hm(n,e,t){if((e=et(e))instanceof tf)return e._internalPath;if(typeof e=="string")return Xg(n,e);throw gd("Field path arguments must be of type string or ",n,!1,void 0,t)}const nD=new RegExp("[~\\*/\\[\\]]");function Xg(n,e,t){if(e.search(nD)>=0)throw gd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new tf(...e.split("."))._internalPath}catch{throw gd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new de(Y.INVALID_ARGUMENT,d+n+f)}function iS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(af("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rD extends sS{data(){return super.data()}}function af(n,e){return typeof e=="string"?Xg(n,e):e instanceof tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jg{}class Zg extends Jg{}function Ja(n,e,...t){let r=[];e instanceof Jg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof e_)).length,d=a.filter((f=>f instanceof lf)).length;if(u>1||u>0&&d>0)throw new de(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class lf extends Zg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new lf(e,t,r)}_apply(e){const t=this._parse(e);return lS(e._query,t),new Bi(e.firestore,e.converter,Om(e._query,t))}_parse(e){const t=sf(e.firestore);return(function(a,u,d,f,m,y,E){let T;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new de(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Vw(E,y);const F=[];for(const M of E)F.push(Mw(f,a,M));T={arrayValue:{values:F}}}else T=Mw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Vw(E,y),T=tD(d,u,E,y==="in"||y==="not-in");return Ft.create(m,y,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aS(n,e,t){const r=e,s=af("where",n);return lf._create(s,r,t)}class e_ extends Jg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new e_(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Or.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)lS(u,f),u=Om(u,f)})(e._query,t),new Bi(e.firestore,e.converter,Om(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class t_ extends Zg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new t_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new de(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new de(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mu(a,u)})(e._query,this._field,this._direction);return new Bi(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new hl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Fu(n,e="asc"){const t=e,r=af("orderBy",n);return t_._create(r,t)}class n_ extends Zg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n_(e,t,r)}_apply(e){return new Bi(e.firestore,e.converter,ld(e._query,this._limit,this._limitType))}}function Uu(n){return lN("limit",n),n_._create("limit",n,"F")}function Mw(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new de(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n0(e)&&t.indexOf("/")!==-1)throw new de(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ut.fromString(t));if(!Ie.isDocumentKey(r))throw new de(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return JE(n,new Ie(r))}if(t instanceof xt)return JE(n,t._key);throw new de(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(t)}.`)}function Vw(n,e){if(!Array.isArray(n)||n.length===0)throw new de(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lS(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new de(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iD{convertValue(e,t="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return qs(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[od].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>Pt(u.doubleValue)));return new ri(a)}convertGeoPoint(e){return new ni(Pt(e.latitude),Pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Hd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Du(e));default:return null}}convertTimestamp(e){const t=Ms(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ut.fromString(e);Ze(C0(r),9688,{name:e});const s=new Ou(r.get(1),r.get(3)),a=new Ie(r.popFirst(5));return s.isEqual(t)||Vi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Co extends sS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(af("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Co._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Co._jsonSchemaVersion="firestore/documentSnapshot/1.0",Co._jsonSchema={type:Ut("string",Co._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class $h extends Co{data(e={}){return super.data(e)}}class Ro{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new $h(this._firestore,this._userDataWriter,r.key,r,new fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new $h(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new $h(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:sD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Sg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:Ut("string",Ro._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class r_ extends iD{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}function oD(n){n=Nr(n,Bi);const e=Nr(n.firestore,bo),t=Kg(e),r=new r_(e);return oS(n._query),Hb(t,n._query).then((s=>new Ro(e,r,n,s)))}function aD(n,e,t){n=Nr(n,xt);const r=Nr(n.firestore,bo),s=uS(n.converter,e);return i_(r,[tS(sf(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,xr.none())])}function cS(n,e,t,...r){n=Nr(n,xt);const s=Nr(n.firestore,bo),a=sf(s);let u;return u=typeof(e=et(e))=="string"||e instanceof tf?eD(a,"updateDoc",n._key,e,t,r):Zb(a,"updateDoc",n._key,e),i_(s,[u.toMutation(n._key,xr.exists(!0))])}function lD(n,e){const t=Nr(n.firestore,bo),r=md(n),s=uS(n.converter,e);return i_(t,[tS(sf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,xr.exists(!1))]).then((()=>r))}function ju(n,...e){var t,r,s;n=et(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Lw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Lw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof xt)m=Nr(n.firestore,bo),y=Ng(n._key.path),f={next:E=>{e[u]&&e[u](uD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=Nr(n,Bi);m=Nr(E.firestore,bo),y=E._query;const T=new r_(m);f={next:P=>{e[u]&&e[u](new Ro(m,T,E,P))},error:e[u+1],complete:e[u+2]},oS(n._query)}return(function(T,P,F,M){const U=new Q0(M),ae=new j0(P,U,F);return T.asyncQueue.enqueueAndForget((async()=>F0(await Wm(T),ae))),()=>{U.Ou(),T.asyncQueue.enqueueAndForget((async()=>U0(await Wm(T),ae)))}})(Kg(m),y,d,f)}function i_(n,e){return(function(r,s){const a=new As;return r.asyncQueue.enqueueAndForget((async()=>Db(await Wb(r),s,a))),a.promise})(Kg(n),e)}function uD(n,e,t){const r=t.docs.get(e._key),s=new r_(n);return new Co(n,s,e._key,r,new fu(t.hasPendingWrites,t.fromCache),e.converter)}function cD(...n){return new Qg("arrayUnion",n)}(function(e,t=!0){(function(s){ll=s})(Ws),Ds(new Oi("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new bo(new eN(r.getProvider("auth-internal")),new rN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new de(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ou(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),lr(FE,UE,e),lr(FE,UE,"esm2017")})();var Fw={};const Uw="@firebase/database",jw="1.0.20";/**
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
 */class dD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ku(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return li(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ja=new Md("@firebase/database"),mD=(function(){let n=1;return function(){return n++}})(),fS=function(n){const e=PA(n),t=new CA;t.update(e);const r=t.digest();return ug.encodeByteArray(r)},ic=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ic.apply(null,r):typeof r=="object"?e+=Jt(r):e+=r,e+=" "}return e};let Tu=null,Bw=!0;const gD=function(n,e){ue(!0,"Can't turn on custom loggers persistently."),ja.logLevel=je.VERBOSE,Tu=ja.log.bind(ja)},rn=function(...n){if(Bw===!0&&(Bw=!1,Tu===null&&pD.get("logging_enabled")===!0&&gD()),Tu){const e=ic.apply(null,n);Tu(e)}},sc=function(n){return function(...e){rn(n,...e)}},qm=function(...n){const e="FIREBASE INTERNAL ERROR: "+ic(...n);ja.error(e)},Ui=function(...n){const e=`FIREBASE FATAL ERROR: ${ic(...n)}`;throw ja.error(e),new Error(e)},Ln=function(...n){const e="FIREBASE WARNING: "+ic(...n);ja.warn(e)},_D=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},yD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Za="[MIN_NAME]",Do="[MAX_NAME]",Bo=function(n,e){if(n===e)return 0;if(n===Za||e===Do)return-1;if(e===Za||n===Do)return 1;{const t=zw(n),r=zw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},vD=function(n,e){return n===e?0:n<e?-1:1},nu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Jt(e))},s_=function(n){if(typeof n!="object"||n===null)return Jt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Jt(e[r]),t+=":",t+=s_(n[e[r]]);return t+="}",t},pS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function gn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const mS=function(n){ue(!uf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},ED=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const ID=new RegExp("^-?(0*)\\d{1,10}$"),SD=-2147483648,CD=2147483647,zw=function(n){if(ID.test(n)){const e=Number(n);if(e>=SD&&e<=CD)return e}return null},pl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ln("Exception was thrown by user callback.",t),e},Math.floor(0))}},RD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Iu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class AD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ln(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ln(e)}}class Wh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="5",gS="v",_S="s",yS="r",vS="f",ES=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wS="ls",TS="p",Gm="ac",IS="websocket",SS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function PD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function RS(n,e,t){ue(typeof e=="string","typeof type must == string"),ue(typeof t=="object","typeof params must == object");let r;if(e===IS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===SS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PD(n)&&(t.ns=n.namespace);const s=[];return gn(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.counters_={}}incrementCounter(e,t=1){li(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return iA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={},um={};function a_(n){const e=n.toString();return lm[e]||(lm[e]=new ND),lm[e]}function xD(n,e){const t=n.toString();return um[t]||(um[t]=e()),um[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $w="start",DD="close",OD="pLPCommand",LD="pRTLPCB",AS="id",kS="pw",PS="ser",MD="cb",VD="seg",FD="ts",UD="d",jD="dframe",NS=1870,xS=30,BD=NS-xS,zD=25e3,$D=3e4;class La{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sc(e),this.stats_=a_(t),this.urlFn=f=>(this.appCheckToken&&(f[Gm]=this.appCheckToken),RS(t,SS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new bD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($D)),yD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new l_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===$w)this.id=d,this.password=f;else if(u===DD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[$w]="t",r[PS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[MD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gS]=o_,this.transportSessionId&&(r[_S]=this.transportSessionId),this.lastSessionId&&(r[wS]=this.lastSessionId),this.applicationId&&(r[TS]=this.applicationId),this.appCheckToken&&(r[Gm]=this.appCheckToken),typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(r[yS]=vS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){La.forceAllow_=!0}static forceDisallow(){La.forceDisallow_=!0}static isAvailable(){return La.forceAllow_?!0:!La.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ED()&&!wD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=VT(t),s=pS(r,BD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[jD]="t",r[AS]=e,r[kS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class l_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mD(),window[OD+this.uniqueCallbackIdentifier]=e,window[LD+this.uniqueCallbackIdentifier]=t,this.myIFrame=l_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){rn("frame writing exception"),d.stack&&rn(d.stack),rn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AS]=this.myID,e[kS]=this.myPW,e[PS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xS+r.length<=NS;){const u=this.pendingSegs.shift();r=r+"&"+VD+s+"="+u.seg+"&"+FD+s+"="+u.ts+"&"+UD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(zD)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=16384,HD=45e3;let _d=null;typeof MozWebSocket<"u"?_d=MozWebSocket:typeof WebSocket<"u"&&(_d=WebSocket);class Ar{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sc(this.connId),this.stats_=a_(t),this.connURL=Ar.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[gS]=o_,typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(u[yS]=vS),t&&(u[_S]=t),r&&(u[wS]=r),s&&(u[Gm]=s),a&&(u[TS]=a),RS(e,IS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Io.set("previous_websocket_failure",!0);try{let r;gA(),this.mySock=new _d(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ar.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_d!==null&&!Ar.forceDisallow_}static previouslyFailed(){return Io.isInMemoryStorage||Io.get("previous_websocket_failure")===!0}markConnectionHealthy(){Io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ku(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=pS(t,WD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ar.responsesRequiredToBeHealthy=2;Ar.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static get ALL_TRANSPORTS(){return[La,Ar]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ar&&Ar.isAvailable();let r=t&&!Ar.previouslyFailed();if(e.webSocketOnly&&(t||Ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ar];else{const s=this.transports_=[];for(const a of Bu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Bu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=6e4,GD=5e3,KD=10*1024,QD=100*1024,cm="t",Ww="d",YD="s",Hw="r",XD="e",qw="o",Gw="a",Kw="n",Qw="p",JD="h";class ZD{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sc("c:"+this.id+":"),this.transportManager_=new Bu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Iu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cm in e){const t=e[cm];t===Gw?this.upgradeIfSecondaryHealthy_():t===Hw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nu(cm,e);if(Ww in e){const r=e[Ww];if(t===JD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Kw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===YD?this.onConnectionShutdown_(r):t===Hw?this.onReset_(r):t===XD?qm("Server Error: "+r):t===qw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),o_!==r&&Ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Iu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Iu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DS{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ue(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends DS{static getInstance(){return new yd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ue(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=32,Xw=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new it("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function zs(n){return n.pieces_.length-n.pieceNum_}function ot(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function u_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function eO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function zu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function OS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function Nt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof it)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new it(t,0)}function Fe(n){return n.pieceNum_>=n.pieces_.length}function Dn(n,e){const t=Le(n),r=Le(e);if(t===null)return e;if(t===r)return Dn(ot(n),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function tO(n,e){const t=zu(n,0),r=zu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Bo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function c_(n,e){if(zs(n)!==zs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function or(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(zs(n)>zs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class nO{constructor(e,t){this.errorPrefix_=t,this.parts_=zu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ld(this.parts_[r]);LS(this)}}function rO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ld(e),LS(n)}function iO(n){const e=n.parts_.pop();n.byteLength_-=Ld(e),n.parts_.length>0&&(n.byteLength_-=1)}function LS(n){if(n.byteLength_>Xw)throw new Error(n.errorPrefix_+"has a key path longer than "+Xw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Yw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yw+") or object contains a cycle "+wo(n))}function wo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends DS{static getInstance(){return new h_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ue(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1e3,sO=300*1e3,Jw=30*1e3,oO=1.3,aO=3e4,lO="server_kill",Zw=3;class bi extends bS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=bi.nextPersistentConnectionId_++,this.log_=sc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ru,this.maxReconnectDelay_=sO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");h_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Jt(a)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new ki,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;bi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&li(e,"w")){const r=$a(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=IA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Jt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qm("Unrecognized action received from server: "+Jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aO&&(this.reconnectDelay_=ru),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+bi.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){ue(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new ZD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,P=>{Ln(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(lO)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Ln(E),f())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qh(this.interruptReasons_)&&(this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>s_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new it(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zw&&(this.reconnectDelay_=Jw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hS.replace(/\./g,"-")]=1,dg()?e["framework.cordova"]=1:zT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yd.getInstance().currentlyOnline();return Qh(this.interruptReasons_)&&e}}bi.nextPersistentConnectionId_=0;bi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ue(Za,e),s=new Ue(Za,t);return this.compare(r,s)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh;class MS extends cf{static get __EMPTY_NODE(){return Nh}static set __EMPTY_NODE(e){Nh=e}compare(e,t){return Bo(e.name,t.name)}isDefinedOn(e){throw il("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(Do,Nh)}makePost(e,t){return ue(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,Nh)}toString(){return".key"}}const Ba=new MS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Xt.RED,this.left=s??On.EMPTY_NODE,this.right=a??On.EMPTY_NODE}copy(e,t,r,s,a){return new Xt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return On.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class uO{copy(e,t,r,s,a){return this}insert(e,t,r){return new Xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class On{constructor(e,t=On.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new On(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new On(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xh(this.root_,null,this.comparator_,!0,e)}}On.EMPTY_NODE=new uO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(n,e){return Bo(n.name,e.name)}function d_(n,e){return Bo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Km;function hO(n){Km=n}const VS=function(n){return typeof n=="number"?"number:"+mS(n):"string:"+n},FS=function(n){if(n.isLeafNode()){const e=n.val();ue(typeof e=="string"||typeof e=="number"||typeof e=="object"&&li(e,".sv"),"Priority must be a string or number.")}else ue(n===Km||n.isEmpty(),"priority of unexpected type.");ue(n===Km||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT;class Qt{static set __childrenNodeConstructor(e){eT=e}static get __childrenNodeConstructor(){return eT}constructor(e,t=Qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fe(e)?this:Le(e)===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Le(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ue(r!==".priority"||zs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=mS(this.value_):e+=this.value_,this.lazyHash_=fS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qt.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Qt.VALUE_TYPE_ORDER.indexOf(t),a=Qt.VALUE_TYPE_ORDER.indexOf(r);return ue(s>=0,"Unknown leaf type: "+t),ue(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let US,jS;function dO(n){US=n}function fO(n){jS=n}class pO extends cf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Bo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(Do,new Qt("[PRIORITY-POST]",jS))}makePost(e,t){const r=US(e);return new Ue(t,new Qt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Et=new pO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=Math.log(2);class gO{constructor(e){const t=a=>parseInt(Math.log(a)/mO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,T;if(y===0)return null;if(y===1)return E=n[f],T=t?t(E):E,new Xt(T,E.node,Xt.BLACK,null,null);{const P=parseInt(y/2,10)+f,F=s(f,P),M=s(P+1,m);return E=n[P],T=t?t(E):E,new Xt(T,E.node,Xt.BLACK,F,M)}},a=function(f){let m=null,y=null,E=n.length;const T=function(F,M){const U=E-F,ae=E;E-=F;const K=s(U+1,ae),te=n[U],j=t?t(te):te;P(new Xt(j,te.node,M,null,K))},P=function(F){m?(m.left=F,m=F):(y=F,m=F)};for(let F=0;F<f.count;++F){const M=f.nextBitIsOne(),U=Math.pow(2,f.count-(F+1));M?T(U,Xt.BLACK):(T(U,Xt.BLACK),T(U,Xt.RED))}return y},u=new gO(n.length),d=a(u);return new On(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;const ka={};class xi{static get Default(){return ue(ka&&Et,"ChildrenNode.ts has not been loaded"),hm=hm||new xi({".priority":ka},{".priority":Et}),hm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$a(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof On?t:null}hasIndex(e){return li(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==Ba,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Ue.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=vd(r,e.getCompare()):d=ka;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new xi(y,m)}addToIndexes(e,t){const r=Yh(this.indexes_,(s,a)=>{const u=$a(this.indexSet_,a);if(ue(u,"Missing index implementation for "+a),s===ka)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Ue.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),vd(d,u.getCompare())}else return ka;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Ue(e.name,d))),f.insert(e,e.node)}});return new xi(r,this.indexSet_)}removeFromIndexes(e,t){const r=Yh(this.indexes_,s=>{if(s===ka)return s;{const a=t.get(e.name);return a?s.remove(new Ue(e.name,a)):s}});return new xi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;class ke{static get EMPTY_NODE(){return iu||(iu=new ke(new On(d_),null,xi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&FS(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||iu}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?iu:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ue(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?iu:this.priorityNode_;return new ke(s,u,a)}}updateChild(e,t){const r=Le(e);if(r===null)return t;{ue(Le(e)!==".priority"||zs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ot(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(Et,(u,d)=>{t[u]=d.val(e),r++,a&&ke.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VS(this.getPriority().val())+":"),this.forEachChild(Et,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":fS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Ue(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oc?-1:0}withIndex(e){if(e===Ba||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ba||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Et),s=t.getIterator(Et);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ba?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _O extends ke{constructor(){super(new On(d_),ke.EMPTY_NODE,xi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const oc=new _O;Object.defineProperties(Ue,{MIN:{value:new Ue(Za,ke.EMPTY_NODE)},MAX:{value:new Ue(Do,oc)}});MS.__EMPTY_NODE=ke.EMPTY_NODE;Qt.__childrenNodeConstructor=ke;hO(oc);fO(oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=!0;function Vt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ue(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qt(t,Vt(e))}if(!(n instanceof Array)&&yO){const t=[];let r=!1;if(gn(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Vt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Ue(u,f)))}}),t.length===0)return ke.EMPTY_NODE;const a=vd(t,cO,u=>u.name,d_);if(r){const u=vd(t,Et.getCompare());return new ke(a,Vt(e),new xi({".priority":u},{".priority":Et}))}else return new ke(a,Vt(e),xi.Default)}else{let t=ke.EMPTY_NODE;return gn(n,(r,s)=>{if(li(n,r)&&r.substring(0,1)!=="."){const a=Vt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Vt(e))}}dO(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends cf{constructor(e){super(),this.indexPath_=e,ue(!Fe(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Bo(e.name,t.name):a}makePost(e,t){const r=Vt(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ue(t,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,oc);return new Ue(Do,e)}toString(){return zu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO extends cf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Bo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const r=Vt(e);return new Ue(t,r)}toString(){return".value"}}const wO=new EO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class f_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ue(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange($u(t,d)):ue(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(el(t,r)):u.trackChildChange(Wu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Et,(s,a)=>{t.hasChild(s)||r.trackChildChange($u(s,a))}),t.isLeafNode()||t.forEachChild(Et,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Wu(s,a,u))}else r.trackChildChange(el(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ke.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.indexedFilter_=new f_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hu.getStartPost_(e),this.endPost_=Hu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Ue(t,r))||(r=ke.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ke.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ke.EMPTY_NODE);const a=this;return t.forEachChild(Et,(u,d)=>{a.matches(new Ue(u,d))||(s=s.updateImmediateChild(u,ke.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Hu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Ue(t,r))||(r=ke.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=ke.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ke.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ke.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,ke.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,P)=>E(P,T)}else u=this.index_.getCompare();const d=e;ue(d.numChildren()===this.limit_,"");const f=new Ue(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const P=T==null?1:u(T,f);if(y&&!r.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(Wu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange($u(t,E));const M=d.updateImmediateChild(t,ke.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(el(T.name,T.node)),M.updateImmediateChild(T.name,T.node)):M}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange($u(m.name,m.node)),a.trackChildChange(el(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,ke.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Za}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Do}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new p_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SO(n){return n.loadsAllData()?new f_(n.getIndex()):n.hasLimit()?new IO(n):new Hu(n)}function tT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Et?t="$priority":n.index_===wO?t="$value":n.index_===Ba?t="$key":(ue(n.index_ instanceof vO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Jt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Jt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Jt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Jt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Et&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends bS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=sc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Ed.getListenId_(e,r),d={};this.listens_[u]=d;const f=tT(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),$a(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=Ed.getListenId_(e,t);delete this.listens_[r]}get(e){const t=tT(e._queryParams),r=e._path.toString(),s=new ki;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=ku(d.responseText)}catch{Ln("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Ln("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function wd(){return{value:null,children:new Map}}function ml(n,e,t){if(Fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Le(e);n.children.has(r)||n.children.set(r,wd());const s=n.children.get(r);e=ot(e),ml(s,e,t)}}function Qm(n,e){if(Fe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Et,(r,s)=>{ml(n,new it(r),s)}),Qm(n,e)}}else if(n.children.size>0){const t=Le(e);return e=ot(e),n.children.has(t)&&Qm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Ym(n,e,t){n.value!==null?t(e,n.value):RO(n,(r,s)=>{const a=new it(e.toString()+"/"+r);Ym(s,a,t)})}function RO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&gn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=10*1e3,kO=30*1e3,PO=300*1e3;class NO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new AO(e);const r=rT+(kO-rT)*Math.random();Iu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;gn(e,(s,a)=>{a>0&&li(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Iu(this.reportStats_.bind(this),Math.floor(Math.random()*2*PO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pr||(Pr={}));function zS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function m_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function g_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Pr.ACK_USER_WRITE,this.source=zS()}operationForChild(e){if(Fe(this.path)){if(this.affectedTree.value!=null)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new Td(Xe(),t,this.revert)}}else return ue(Le(this.path)===e,"operationForChild called for unrelated child."),new Td(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.source=e,this.path=t,this.type=Pr.LISTEN_COMPLETE}operationForChild(e){return Fe(this.path)?new qu(this.source,Xe()):new qu(this.source,ot(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Pr.OVERWRITE}operationForChild(e){return Fe(this.path)?new Oo(this.source,Xe(),this.snap.getImmediateChild(e)):new Oo(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Pr.MERGE}operationForChild(e){if(Fe(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Oo(this.source,Xe(),t.value):new Gu(this.source,Xe(),t)}else return ue(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gu(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function hf(n,e){return{eventCache:n,serverCache:e}}function Su(n,e,t,r){return hf(new Lo(e,t,r),n.serverCache)}function $S(n,e,t,r){return hf(n.eventCache,new Lo(e,t,r))}function Xm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Mo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dm;const LO=()=>(dm||(dm=new On(vD)),dm);class pt{static fromObject(e){let t=new pt(null);return gn(e,(r,s)=>{t=t.set(new it(r),s)}),t}constructor(e,t=LO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Fe(e))return null;{const r=Le(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(ot(e),t);return a!=null?{path:Nt(new it(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Fe(e))return this;{const t=Le(e),r=this.children.get(t);return r!==null?r.subtree(ot(e)):new pt(null)}}set(e,t){if(Fe(e))return new pt(t,this.children);{const r=Le(e),a=(this.children.get(r)||new pt(null)).set(ot(e),t),u=this.children.insert(r,a);return new pt(this.value,u)}}remove(e){if(Fe(e))return this.children.isEmpty()?new pt(null):new pt(null,this.children);{const t=Le(e),r=this.children.get(t);if(r){const s=r.remove(ot(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new pt(null):new pt(this.value,a)}else return this}}get(e){if(Fe(e))return this.value;{const t=Le(e),r=this.children.get(t);return r?r.get(ot(e)):null}}setTree(e,t){if(Fe(e))return t;{const r=Le(e),a=(this.children.get(r)||new pt(null)).setTree(ot(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new pt(this.value,u)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(Nt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Fe(e))return null;{const a=Le(e),u=this.children.get(a);return u?u.findOnPath_(ot(e),Nt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,r){if(Fe(e))return this;{this.value&&r(t,this.value);const s=Le(e),a=this.children.get(s);return a?a.foreachOnPath_(ot(e),Nt(t,s),r):new pt(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Nt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.writeTree_=e}static empty(){return new br(new pt(null))}}function Cu(n,e,t){if(Fe(e))return new br(new pt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Dn(s,e);return a=a.updateChild(u,t),new br(n.writeTree_.set(s,a))}else{const s=new pt(t),a=n.writeTree_.setTree(e,s);return new br(a)}}}function iT(n,e,t){let r=n;return gn(t,(s,a)=>{r=Cu(r,Nt(e,s),a)}),r}function sT(n,e){if(Fe(e))return br.empty();{const t=n.writeTree_.setTree(e,new pt(null));return new br(t)}}function Jm(n,e){return zo(n,e)!=null}function zo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Dn(t.path,e)):null}function oT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Et,(r,s)=>{e.push(new Ue(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ue(r,s.value))}),e}function Ns(n,e){if(Fe(e))return n;{const t=zo(n,e);return t!=null?new br(new pt(t)):new br(n.writeTree_.subtree(e))}}function Zm(n){return n.writeTree_.isEmpty()}function tl(n,e){return WS(Xe(),n.writeTree_,e)}function WS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ue(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=WS(Nt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Nt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n,e){return KS(e,n)}function MO(n,e,t,r,s){ue(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Cu(n.visibleWrites,e,t)),n.lastWriteId=r}function VO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function FO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ue(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&UO(d,r.path)?s=!1:or(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return jO(n),!0;if(r.snap)n.visibleWrites=sT(n.visibleWrites,r.path);else{const d=r.children;gn(d,f=>{n.visibleWrites=sT(n.visibleWrites,Nt(r.path,f))})}return!0}else return!1}function UO(n,e){if(n.snap)return or(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&or(Nt(n.path,t),e))return!0;return!1}function jO(n){n.visibleWrites=HS(n.allWrites,BO,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function BO(n){return n.visible}function HS(n,e,t){let r=br.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)or(t,u)?(d=Dn(t,u),r=Cu(r,d,a.snap)):or(u,t)&&(d=Dn(u,t),r=Cu(r,Xe(),a.snap.getChild(d)));else if(a.children){if(or(t,u))d=Dn(t,u),r=iT(r,d,a.children);else if(or(u,t))if(d=Dn(u,t),Fe(d))r=iT(r,Xe(),a.children);else{const f=$a(a.children,Le(d));if(f){const m=f.getChild(ot(d));r=Cu(r,Xe(),m)}}}else throw il("WriteRecord should have .snap or .children")}}return r}function qS(n,e,t,r,s){if(!r&&!s){const a=zo(n.visibleWrites,e);if(a!=null)return a;{const u=Ns(n.visibleWrites,e);if(Zm(u))return t;if(t==null&&!Jm(u,Xe()))return null;{const d=t||ke.EMPTY_NODE;return tl(u,d)}}}else{const a=Ns(n.visibleWrites,e);if(!s&&Zm(a))return t;if(!s&&t==null&&!Jm(a,Xe()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(or(m.path,e)||or(e,m.path))},d=HS(n.allWrites,u,e),f=t||ke.EMPTY_NODE;return tl(d,f)}}}function zO(n,e,t){let r=ke.EMPTY_NODE;const s=zo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Et,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Ns(n.visibleWrites,e);return t.forEachChild(Et,(u,d)=>{const f=tl(Ns(a,new it(u)),d);r=r.updateImmediateChild(u,f)}),oT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Ns(n.visibleWrites,e);return oT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function $O(n,e,t,r,s){ue(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=Nt(e,t);if(Jm(n.visibleWrites,a))return null;{const u=Ns(n.visibleWrites,a);return Zm(u)?s.getChild(t):tl(u,s.getChild(t))}}function WO(n,e,t,r){const s=Nt(e,t),a=zo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Ns(n.visibleWrites,s);return tl(u,r.getNode().getImmediateChild(t))}else return null}function HO(n,e){return zo(n.visibleWrites,e)}function qO(n,e,t,r,s,a,u){let d;const f=Ns(n.visibleWrites,e),m=zo(f,Xe());if(m!=null)d=m;else if(t!=null)d=tl(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let P=T.getNext();for(;P&&y.length<s;)E(P,r)!==0&&y.push(P),P=T.getNext();return y}else return[]}function GO(){return{visibleWrites:br.empty(),allWrites:[],lastWriteId:-1}}function Id(n,e,t,r){return qS(n.writeTree,n.treePath,e,t,r)}function y_(n,e){return zO(n.writeTree,n.treePath,e)}function aT(n,e,t,r){return $O(n.writeTree,n.treePath,e,t,r)}function Sd(n,e){return HO(n.writeTree,Nt(n.treePath,e))}function KO(n,e,t,r,s,a){return qO(n.writeTree,n.treePath,e,t,r,s,a)}function v_(n,e,t){return WO(n.writeTree,n.treePath,e,t)}function GS(n,e){return KS(Nt(n.treePath,e),n.writeTree)}function KS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ue(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ue(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Wu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,$u(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,el(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Wu(r,e.snapshotNode,s.oldSnap));else throw il("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const QS=new YO;class E_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Lo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return v_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mo(this.viewCache_),a=KO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(n){return{filter:n}}function JO(n,e){ue(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ue(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ZO(n,e,t,r,s){const a=new QO;let u,d;if(t.type===Pr.OVERWRITE){const m=t;m.source.fromUser?u=eg(n,e,m.path,m.snap,r,s,a):(ue(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Fe(m.path),u=Cd(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===Pr.MERGE){const m=t;m.source.fromUser?u=t2(n,e,m.path,m.children,r,s,a):(ue(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=tg(n,e,m.path,m.children,r,s,d,a))}else if(t.type===Pr.ACK_USER_WRITE){const m=t;m.revert?u=i2(n,e,m.path,r,s,a):u=n2(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Pr.LISTEN_COMPLETE)u=r2(n,e,t.path,r,a);else throw il("Unknown operation type: "+t.type);const f=a.getChanges();return e2(e,u,f),{viewCache:u,changes:f}}function e2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Xm(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(BS(Xm(e)))}}function YS(n,e,t,r,s,a){const u=e.eventCache;if(Sd(r,t)!=null)return e;{let d,f;if(Fe(t))if(ue(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Mo(e),y=m instanceof ke?m:ke.EMPTY_NODE,E=y_(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=Id(r,Mo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Le(t);if(m===".priority"){ue(zs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=aT(r,t,y,f);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=ot(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=aT(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(y,T):E=u.getNode().getImmediateChild(m)}else E=v_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,s,a):d=u.getNode()}}return Su(e,d,u.isFullyInitialized()||Fe(t),n.filter.filtersNodes())}}function Cd(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Fe(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const P=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),P,null)}else{const P=Le(t);if(!f.isCompleteForPath(t)&&zs(t)>1)return e;const F=ot(t),U=f.getNode().getImmediateChild(P).updateChild(F,r);P===".priority"?m=y.updatePriority(f.getNode(),U):m=y.updateChild(f.getNode(),P,U,F,QS,null)}const E=$S(e,m,f.isFullyInitialized()||Fe(t),y.filtersNodes()),T=new E_(s,E,a);return YS(n,E,t,s,T,d)}function eg(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new E_(s,e,a);if(Fe(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Su(e,m,!0,n.filter.filtersNodes());else{const E=Le(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Su(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=ot(t),P=d.getNode().getImmediateChild(E);let F;if(Fe(T))F=r;else{const M=y.getCompleteChild(E);M!=null?u_(T)===".priority"&&M.getChild(OS(T)).isEmpty()?F=M:F=M.updateChild(T,r):F=ke.EMPTY_NODE}if(P.equals(F))f=e;else{const M=n.filter.updateChild(d.getNode(),E,F,T,y,u);f=Su(e,M,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function lT(n,e){return n.eventCache.isCompleteForChild(e)}function t2(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=Nt(t,f);lT(e,Le(y))&&(d=eg(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=Nt(t,f);lT(e,Le(y))||(d=eg(n,d,y,m,s,a,u))}),d}function uT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function tg(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Fe(t)?m=r:m=new pt(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(y.hasChild(E)){const P=e.serverCache.getNode().getImmediateChild(E),F=uT(n,P,T);f=Cd(n,f,new it(E),F,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const P=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!y.hasChild(E)&&!P){const F=e.serverCache.getNode().getImmediateChild(E),M=uT(n,F,T);f=Cd(n,f,new it(E),M,s,a,u,d)}}),f}function n2(n,e,t,r,s,a,u){if(Sd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Fe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Cd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Fe(t)){let m=new pt(null);return f.getNode().forEachChild(Ba,(y,E)=>{m=m.set(new it(y),E)}),tg(n,e,t,m,s,a,d,u)}else return e}else{let m=new pt(null);return r.foreach((y,E)=>{const T=Nt(t,y);f.isCompleteForPath(T)&&(m=m.set(y,f.getNode().getChild(T)))}),tg(n,e,t,m,s,a,d,u)}}function r2(n,e,t,r,s){const a=e.serverCache,u=$S(e,a.getNode(),a.isFullyInitialized()||Fe(t),a.isFiltered());return YS(n,u,t,r,QS,s)}function i2(n,e,t,r,s,a){let u;if(Sd(r,t)!=null)return e;{const d=new E_(r,e,s),f=e.eventCache.getNode();let m;if(Fe(t)||Le(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Id(r,Mo(e));else{const E=e.serverCache.getNode();ue(E instanceof ke,"serverChildren would be complete if leaf node"),y=y_(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Le(t);let E=v_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,ot(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,ke.EMPTY_NODE,ot(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Id(r,Mo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Sd(r,Xe())!=null,Su(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new f_(r.getIndex()),a=SO(r);this.processor_=XO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(ke.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(ke.EMPTY_NODE,d.getNode(),null),y=new Lo(f,u.isFullyInitialized(),s.filtersNodes()),E=new Lo(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=hf(E,y),this.eventGenerator_=new xO(this.query_)}get query(){return this.query_}}function o2(n){return n.viewCache_.serverCache.getNode()}function a2(n,e){const t=Mo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Fe(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function cT(n){return n.eventRegistrations_.length===0}function l2(n,e){n.eventRegistrations_.push(e)}function hT(n,e,t){const r=[];if(t){ue(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function dT(n,e,t,r){e.type===Pr.MERGE&&e.source.queryId!==null&&(ue(Mo(n.viewCache_),"We should always have a full cache before handling merges"),ue(Xm(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=ZO(n.processor_,s,e,t,r);return JO(n.processor_,a.viewCache),ue(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,XS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function u2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Et,(a,u)=>{r.push(el(a,u))}),t.isFullyInitialized()&&r.push(BS(t.getNode())),XS(n,r,t.getNode(),e)}function XS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return bO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd;class c2{constructor(){this.views=new Map}}function h2(n){ue(!Rd,"__referenceConstructor has already been defined"),Rd=n}function d2(){return ue(Rd,"Reference.ts has not been loaded"),Rd}function f2(n){return n.views.size===0}function w_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ue(a!=null,"SyncTree gave us an op for an invalid query."),dT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(dT(u,e,t,r));return a}}function p2(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Id(t,s?r:null),f=!1;d?f=!0:r instanceof ke?(d=y_(t,r),f=!1):(d=ke.EMPTY_NODE,f=!1);const m=hf(new Lo(d,f,!1),new Lo(r,s,!1));return new s2(e,m)}return u}function m2(n,e,t,r,s,a){const u=p2(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),l2(u,t),u2(u,t)}function g2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=$s(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(hT(m,t,r)),cT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(hT(f,t,r)),cT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!$s(n)&&a.push(new(d2())(e._repo,e._path)),{removed:a,events:u}}function JS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function za(n,e){let t=null;for(const r of n.views.values())t=t||a2(r,e);return t}function ZS(n,e){if(e._queryParams.loadsAllData())return df(n);{const r=e._queryIdentifier;return n.views.get(r)}}function eC(n,e){return ZS(n,e)!=null}function $s(n){return df(n)!=null}function df(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;function _2(n){ue(!Ad,"__referenceConstructor has already been defined"),Ad=n}function y2(){return ue(Ad,"Reference.ts has not been loaded"),Ad}let v2=1;class fT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pt(null),this.pendingWriteTree_=GO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tC(n,e,t,r,s){return MO(n.pendingWriteTree_,e,t,r,s),s?ac(n,new Oo(zS(),e,t)):[]}function So(n,e,t=!1){const r=VO(n.pendingWriteTree_,e);if(FO(n.pendingWriteTree_,e)){let a=new pt(null);return r.snap!=null?a=a.set(Xe(),!0):gn(r.children,u=>{a=a.set(new it(u),!0)}),ac(n,new Td(r.path,a,t))}else return[]}function ff(n,e,t){return ac(n,new Oo(m_(),e,t))}function E2(n,e,t){const r=pt.fromObject(t);return ac(n,new Gu(m_(),e,r))}function w2(n,e){return ac(n,new qu(m_(),e))}function T2(n,e,t){const r=I_(n,t);if(r){const s=S_(r),a=s.path,u=s.queryId,d=Dn(a,e),f=new qu(g_(u),d);return C_(n,a,f)}else return[]}function ng(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||eC(u,e))){const f=g2(u,e,t,r);f2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,P)=>$s(P));if(y&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const P=C2(T);for(let F=0;F<P.length;++F){const M=P[F],U=M.query,ae=iC(n,M);n.listenProvider_.startListening(Ru(U),kd(n,U),ae.hashFn,ae.onComplete)}}}!E&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Ru(e),null):m.forEach(T=>{const P=n.queryToTagMap.get(pf(T));n.listenProvider_.stopListening(Ru(T),P)}))}R2(n,m)}return d}function I2(n,e,t,r){const s=I_(n,r);if(s!=null){const a=S_(s),u=a.path,d=a.queryId,f=Dn(u,e),m=new Oo(g_(d),f,t);return C_(n,u,m)}else return[]}function S2(n,e,t,r){const s=I_(n,r);if(s){const a=S_(s),u=a.path,d=a.queryId,f=Dn(u,e),m=pt.fromObject(t),y=new Gu(g_(d),f,m);return C_(n,u,y)}else return[]}function pT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,P)=>{const F=Dn(T,s);a=a||za(P,F),u=u||$s(P)});let d=n.syncPointTree_.get(s);d?(u=u||$s(d),a=a||za(d,Xe())):(d=new c2,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=ke.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((P,F)=>{const M=za(F,Xe());M&&(a=a.updateImmediateChild(P,M))}));const m=eC(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=pf(e);ue(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const P=A2();n.queryToTagMap.set(T,P),n.tagToQueryMap.set(P,T)}const y=__(n.pendingWriteTree_,s);let E=m2(d,e,t,y,a,f);if(!m&&!u&&!r){const T=ZS(d,e);E=E.concat(k2(n,e,T))}return E}function T_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Dn(u,e),m=za(d,f);if(m)return m});return qS(s,e,a,t,!0)}function ac(n,e){return nC(e,n.syncPointTree_,null,__(n.pendingWriteTree_,Xe()))}function nC(n,e,t,r){if(Fe(n.path))return rC(n,e,t,r);{const s=e.get(Xe());t==null&&s!=null&&(t=za(s,Xe()));let a=[];const u=Le(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=GS(r,u);a=a.concat(nC(d,f,m,y))}return s&&(a=a.concat(w_(s,n,r,t))),a}}function rC(n,e,t,r){const s=e.get(Xe());t==null&&s!=null&&(t=za(s,Xe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=GS(r,u),y=n.operationForChild(u);y&&(a=a.concat(rC(y,d,f,m)))}),s&&(a=a.concat(w_(s,n,r,t))),a}function iC(n,e){const t=e.query,r=kd(n,t);return{hashFn:()=>(o2(e)||ke.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?T2(n,t._path,r):w2(n,t._path);{const a=TD(s,t);return ng(n,t,null,a)}}}}function kd(n,e){const t=pf(e);return n.queryToTagMap.get(t)}function pf(n){return n._path.toString()+"$"+n._queryIdentifier}function I_(n,e){return n.tagToQueryMap.get(e)}function S_(n){const e=n.indexOf("$");return ue(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function C_(n,e,t){const r=n.syncPointTree_.get(e);ue(r,"Missing sync point for query tag that we're tracking");const s=__(n.pendingWriteTree_,e);return w_(r,t,s,null)}function C2(n){return n.fold((e,t,r)=>{if(t&&$s(t))return[df(t)];{let s=[];return t&&(s=JS(t)),gn(r,(a,u)=>{s=s.concat(u)}),s}})}function Ru(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(y2())(n._repo,n._path):n}function R2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=pf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function A2(){return v2++}function k2(n,e,t){const r=e._path,s=kd(n,e),a=iC(n,t),u=n.listenProvider_.startListening(Ru(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ue(!$s(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,E)=>{if(!Fe(m)&&y&&$s(y))return[df(y).query];{let T=[];return y&&(T=T.concat(JS(y).map(P=>P.query))),gn(E,(P,F)=>{T=T.concat(F)}),T}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Ru(y),kd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new R_(t)}node(){return this.node_}}class A_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Nt(this.path_,e);return new A_(this.syncTree_,t)}node(){return T_(this.syncTree_,this.path_)}}const P2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},mT=function(n,e,t){if(!n||typeof n!="object")return n;if(ue(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return N2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return x2(n[".sv"],e);ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},N2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ue(!1,"Unexpected server value: "+n)}},x2=function(n,e,t){n.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ue(!1,"Unexpected increment value: "+r);const s=e.node();if(ue(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},b2=function(n,e,t,r){return k_(e,new A_(t,n),r)},sC=function(n,e,t){return k_(n,new R_(e),t)};function k_(n,e,t){const r=n.getPriority().val(),s=mT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=mT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Qt(d,Vt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Qt(s))),u.forEachChild(Et,(d,f)=>{const m=k_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function N_(n,e){let t=e instanceof it?e:new it(e),r=n,s=Le(t);for(;s!==null;){const a=$a(r.node.children,s)||{children:{},childCount:0};r=new P_(s,r,a),t=ot(t),s=Le(t)}return r}function gl(n){return n.node.value}function oC(n,e){n.node.value=e,rg(n)}function aC(n){return n.node.childCount>0}function D2(n){return gl(n)===void 0&&!aC(n)}function mf(n,e){gn(n.node.children,(t,r)=>{e(new P_(t,n,r))})}function lC(n,e,t,r){t&&e(n),mf(n,s=>{lC(s,e,!0)})}function O2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lc(n){return new it(n.parent===null?n.name:lc(n.parent)+"/"+n.name)}function rg(n){n.parent!==null&&L2(n.parent,n.name,n)}function L2(n,e,t){const r=D2(t),s=li(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,rg(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,rg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=/[\[\].#$\/\u0000-\u001F\u007F]/,V2=/[\[\].#$\u0000-\u001F\u007F]/,fm=10*1024*1024,x_=function(n){return typeof n=="string"&&n.length!==0&&!M2.test(n)},uC=function(n){return typeof n=="string"&&n.length!==0&&!V2.test(n)},F2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uC(n)},cC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!uf(n)||n&&typeof n=="object"&&li(n,".sv")},ig=function(n,e,t,r){gf(Wa(n,"value"),e,t)},gf=function(n,e,t){const r=t instanceof it?new nO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wo(r));if(typeof e=="function")throw new Error(n+"contains a function "+wo(r)+" with contents = "+e.toString());if(uf(e))throw new Error(n+"contains "+e.toString()+" "+wo(r));if(typeof e=="string"&&e.length>fm/3&&Ld(e)>fm)throw new Error(n+"contains a string greater than "+fm+" utf8 bytes "+wo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(gn(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!x_(u)))throw new Error(n+" contains an invalid key ("+u+") "+wo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rO(r,u),gf(n,d,r),iO(r)}),s&&a)throw new Error(n+' contains ".value" child '+wo(r)+" in addition to actual children.")}},U2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=zu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!x_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&or(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},j2=function(n,e,t,r){const s=Wa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];gn(e,(u,d)=>{const f=new it(u);if(gf(s,d,Nt(t,f)),u_(f)===".priority"&&!cC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),U2(s,a)},B2=function(n,e,t){if(uf(e))throw new Error(Wa(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cC(e))throw new Error(Wa(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},hC=function(n,e,t,r){if(!uC(t))throw new Error(Wa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},z2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hC(n,e,t)},pu=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},$2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!x_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!F2(t))throw new Error(Wa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function b_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!c_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function dC(n,e,t){b_(n,t),fC(n,r=>c_(r,e))}function ji(n,e,t){b_(n,t),fC(n,r=>or(r,e)||or(e,r))}function fC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(H2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function H2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Tu&&rn("event: "+t.toString()),pl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="repo_interrupt",G2=25;class K2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new W2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wd(),this.transactionQueueTree_=new P_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Q2(n,e,t){if(n.stats_=a_(n.repoInfo_),n.forceRestClient_||RD())n.server_=new Ed(n.repoInfo_,(r,s,a,u)=>{gT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_T(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new bi(n.repoInfo_,e,(r,s,a,u)=>{gT(n,r,s,a,u)},r=>{_T(n,r)},r=>{X2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=xD(n.repoInfo_,()=>new NO(n.stats_,n.server_)),n.infoData_=new CO,n.infoSyncTree_=new fT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=ff(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),O_(n,"connected",!1),n.serverSyncTree_=new fT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);ji(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function Y2(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function D_(n){return P2({timestamp:Y2(n)})}function gT(n,e,t,r,s){n.dataUpdateCount++;const a=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Yh(t,m=>Vt(m));u=S2(n.serverSyncTree_,a,f,s)}else{const f=Vt(t);u=I2(n.serverSyncTree_,a,f,s)}else if(r){const f=Yh(t,m=>Vt(m));u=E2(n.serverSyncTree_,a,f)}else{const f=Vt(t);u=ff(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=_f(n,a)),ji(n.eventQueue_,d,u)}function _T(n,e){O_(n,"connected",e),e===!1&&Z2(n)}function X2(n,e){gn(e,(t,r)=>{O_(n,t,r)})}function O_(n,e,t){const r=new it("/.info/"+e),s=Vt(t);n.infoData_.updateSnapshot(r,s);const a=ff(n.infoSyncTree_,r,s);ji(n.eventQueue_,r,a)}function pC(n){return n.nextWriteId_++}function J2(n,e,t,r,s){L_(n,"set",{path:e.toString(),value:t,priority:r});const a=D_(n),u=Vt(t,r),d=T_(n.serverSyncTree_,e),f=sC(u,d,a),m=pC(n),y=tC(n.serverSyncTree_,e,f,m,!0);b_(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(T,P)=>{const F=T==="ok";F||Ln("set at "+e+" failed: "+T);const M=So(n.serverSyncTree_,m,!F);ji(n.eventQueue_,e,M),nl(n,s,T,P)});const E=vC(n,e);_f(n,E),ji(n.eventQueue_,E,[])}function Z2(n){L_(n,"onDisconnectEvents");const e=D_(n),t=wd();Ym(n.onDisconnect_,Xe(),(s,a)=>{const u=b2(s,a,n.serverSyncTree_,e);ml(t,s,u)});let r=[];Ym(t,Xe(),(s,a)=>{r=r.concat(ff(n.serverSyncTree_,s,a));const u=vC(n,s);_f(n,u)}),n.onDisconnect_=wd(),ji(n.eventQueue_,Xe(),r)}function eL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Qm(n.onDisconnect_,e),nl(n,t,r,s)})}function yT(n,e,t,r){const s=Vt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&ml(n.onDisconnect_,e,s),nl(n,r,a,u)})}function tL(n,e,t,r,s){const a=Vt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&ml(n.onDisconnect_,e,a),nl(n,s,u,d)})}function nL(n,e,t,r){if(Qh(t)){rn("onDisconnect().update() called with empty data.  Don't do anything."),nl(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&gn(t,(u,d)=>{const f=Vt(d);ml(n.onDisconnect_,Nt(e,u),f)}),nl(n,r,s,a)})}function rL(n,e,t){let r;Le(e._path)===".info"?r=pT(n.infoSyncTree_,e,t):r=pT(n.serverSyncTree_,e,t),dC(n.eventQueue_,e._path,r)}function vT(n,e,t){let r;Le(e._path)===".info"?r=ng(n.infoSyncTree_,e,t):r=ng(n.serverSyncTree_,e,t),dC(n.eventQueue_,e._path,r)}function iL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(q2)}function L_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),rn(t,...e)}function nl(n,e,t,r){e&&pl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function mC(n,e,t){return T_(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function M_(n,e=n.transactionQueueTree_){if(e||yf(n,e),gl(e)){const t=_C(n,e);ue(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&sL(n,lc(e),t)}else aC(e)&&mf(e,t=>{M_(n,t)})}function sL(n,e,t){const r=t.map(m=>m.currentWriteId),s=mC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ue(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=Dn(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{L_(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(So(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();yf(n,N_(n.transactionQueueTree_,e)),M_(n,n.transactionQueueTree_),ji(n.eventQueue_,e,y);for(let T=0;T<E.length;T++)pl(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Ln("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}_f(n,e)}},u)}function _f(n,e){const t=gC(n,e),r=lc(t),s=_C(n,t);return oL(n,s,r),r}function oL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=Dn(t,f.path);let y=!1,E;if(ue(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(So(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=G2)y=!0,E="maxretry",s=s.concat(So(n.serverSyncTree_,f.currentWriteId,!0));else{const T=mC(n,f.path,u);f.currentInputSnapshot=T;const P=e[d].update(T.val());if(P!==void 0){gf("transaction failed: Data returned ",P,f.path);let F=Vt(P);typeof P=="object"&&P!=null&&li(P,".priority")||(F=F.updatePriority(T.getPriority()));const U=f.currentWriteId,ae=D_(n),K=sC(F,T,ae);f.currentOutputSnapshotRaw=F,f.currentOutputSnapshotResolved=K,f.currentWriteId=pC(n),u.splice(u.indexOf(U),1),s=s.concat(tC(n.serverSyncTree_,f.path,K,f.currentWriteId,f.applyLocally)),s=s.concat(So(n.serverSyncTree_,U,!0))}else y=!0,E="nodata",s=s.concat(So(n.serverSyncTree_,f.currentWriteId,!0))}ji(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}yf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)pl(r[d]);M_(n,n.transactionQueueTree_)}function gC(n,e){let t,r=n.transactionQueueTree_;for(t=Le(e);t!==null&&gl(r)===void 0;)r=N_(r,t),e=ot(e),t=Le(e);return r}function _C(n,e){const t=[];return yC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function yC(n,e,t){const r=gl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);mf(e,s=>{yC(n,s,t)})}function yf(n,e){const t=gl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,oC(e,t.length>0?t:void 0)}mf(e,r=>{yf(n,r)})}function vC(n,e){const t=lc(gC(n,e)),r=N_(n.transactionQueueTree_,e);return O2(r,s=>{pm(n,s)}),pm(n,r),lC(r,s=>{pm(n,s)}),t}function pm(n,e){const t=gl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ue(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ue(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(So(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?oC(e,void 0):t.length=a+1,ji(n.eventQueue_,lc(e),s);for(let u=0;u<r.length;u++)pl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function lL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ln(`Invalid query segment '${t}' in query '${n}'`)}return e}const ET=function(n,e){const t=uL(n),r=t.namespace;t.domain==="firebase.com"&&Ui(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Ui("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_D();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new CS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new it(t.pathString)}},uL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=aL(n.substring(y,E)));const T=lL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const F=e.indexOf(".");r=e.substring(0,F).toLowerCase(),t=e.substring(F+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Jt(this.snapshot.exportVal())}}class hL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ue(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ki;return eL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pu("OnDisconnect.remove",this._path);const e=new ki;return yT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pu("OnDisconnect.set",this._path),ig("OnDisconnect.set",e,this._path);const t=new ki;return yT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){pu("OnDisconnect.setWithPriority",this._path),ig("OnDisconnect.setWithPriority",e,this._path),B2("OnDisconnect.setWithPriority",t);const r=new ki;return tL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){pu("OnDisconnect.update",this._path),j2("OnDisconnect.update",e,this._path);const t=new ki;return nL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Fe(this._path)?null:u_(this._path)}get ref(){return new Ks(this._repo,this._path)}get _queryIdentifier(){const e=nT(this._queryParams),t=s_(e);return t==="{}"?"default":t}get _queryObject(){return nT(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof V_))return!1;const t=this._repo===e._repo,r=c_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+eO(this._path)}}class Ks extends V_{constructor(e,t){super(e,t,new p_,!1)}get parent(){const e=OS(this._path);return e===null?null:new Ks(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new it(e),r=sg(this.ref,e);return new Pd(this._node.getChild(t),r,Et)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Pd(s,sg(this.ref,r),Et)))}hasChild(e){const t=new it(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wT(n,e){return n=et(n),n._checkNotDeleted("ref"),e!==void 0?sg(n._root,e):n._root}function sg(n,e){return n=et(n),Le(n._path)===null?z2("child","path",e):hC("child","path",e),new Ks(n._repo,Nt(n._path,e))}function pL(n){return n=et(n),new fL(n._repo,n._path)}function TT(n,e){n=et(n),pu("set",n._path),ig("set",e,n._path);const t=new ki;return J2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class F_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new cL("value",this,new Pd(e.snapshotNode,new Ks(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hL(this,e,t):null}matches(e){return e instanceof F_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mL(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,E)=>{vT(n._repo,n,d),f(y,E)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new dL(t,a||void 0),d=new F_(u);return rL(n._repo,n,d),()=>vT(n._repo,n,d)}function gL(n,e,t,r){return mL(n,"value",e,t,r)}h2(Ks);_2(Ks);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="FIREBASE_DATABASE_EMULATOR_HOST",og={};let yL=!1;function vL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=oi(a);n.repoInfo_=new CS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function EL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Ui("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=ET(a,s),d=u.repoInfo,f;typeof process<"u"&&Fw&&(f=Fw[_L]),f?(a=`http://${f}?ns=${d.namespace}`,u=ET(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new kD(n.name,n.options,e);$2("Invalid Firebase Database URL",u),Fe(u.path)||Ui("Database URL must point to the root of a Firebase Database (not including a child path).");const y=TL(d,n,m,new AD(n,t));return new IL(y,n)}function wL(n,e){const t=og[e];(!t||t[n.key]!==n)&&Ui(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iL(n),delete t[n.key]}function TL(n,e,t,r){let s=og[e.name];s||(s={},og[e.name]=s);let a=s[n.toURLString()];return a&&Ui("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new K2(n,yL,t,r),s[n.toURLString()]=a,a}class IL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Q2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ks(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ui("Cannot call "+e+" on a deleted database.")}}function SL(n=Vd(),e){const t=Qu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=cg("database");r&&CL(t,...r)}return t}function CL(n,e,t,r={}){n=et(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Di(r,a.repoInfo_.emulatorOptions))return;Ui("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Ui('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Wh(Wh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:hg(r.mockUserToken,n.app.options.projectId);u=new Wh(d)}oi(e)&&(Dd(e),Od("Database",!0)),vL(a,s,r,u)}/**
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
 */function RL(n){hD(Ws),Ds(new Oi("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return EL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),lr(Uw,jw,n),lr(Uw,jw,"esm2017")}bi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};bi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};RL();var AL="firebase",kL="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(AL,kL,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class St extends ai{constructor(e,t,r=0){super(mm(e),`Firebase Storage: ${t} (${mm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,St.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function mm(n){return"storage/"+n}function U_(){const n="An unknown error occurred, please check the error payload for server response.";return new St(It.UNKNOWN,n)}function xL(n){return new St(It.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bL(n){return new St(It.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new St(It.UNAUTHENTICATED,n)}function OL(){return new St(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LL(n){return new St(It.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ML(){return new St(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VL(){return new St(It.CANCELED,"User canceled the upload/download.")}function FL(n){return new St(It.INVALID_URL,"Invalid URL '"+n+"'.")}function UL(n){return new St(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jL(){return new St(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wC+"' property when initializing the app?")}function BL(){return new St(It.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zL(){return new St(It.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $L(n){return new St(It.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ag(n){return new St(It.INVALID_ARGUMENT,n)}function TC(){return new St(It.APP_DELETED,"The Firebase app was deleted.")}function WL(n){return new St(It.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Au(n,e){return new St(It.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ou(n){throw new St(It.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=qn.makeFromUrl(e,t)}catch{return new qn(e,"")}if(r.path==="")return r;throw UL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(j){j.path_=decodeURIComponent(j.path)}const y="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",P=new RegExp(`^https?://${E}/${y}/b/${s}/o${T}`,"i"),F={bucket:1,path:3},M=t===EC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",ae=new RegExp(`^https?://${M}/${s}/${U}`,"i"),te=[{regex:d,indices:f,postModify:a},{regex:P,indices:F,postModify:m},{regex:ae,indices:{bucket:1,path:2},postModify:m}];for(let j=0;j<te.length;j++){const we=te[j],me=we.regex.exec(e);if(me){const N=me[we.indices.bucket];let C=me[we.indices.path];C||(C=""),r=new qn(N,C),we.postModify(r);break}}if(r==null)throw FL(e);return r}}class HL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function y(...U){m||(m=!0,e.apply(null,U))}function E(U){s=setTimeout(()=>{s=null,n(P,f())},U)}function T(){a&&clearTimeout(a)}function P(U,...ae){if(m){T();return}if(U){T(),y.call(null,U,...ae);return}if(f()||u){T(),y.call(null,U,...ae);return}r<64&&(r*=2);let te;d===1?(d=2,te=0):te=(r+Math.random())*1e3,E(te)}let F=!1;function M(U){F||(F=!0,T(),!m&&(s!==null?(U||(d=2),clearTimeout(s),E(0)):U||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,M(!0)},t),M}function GL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(n){return n!==void 0}function QL(n){return typeof n=="object"&&!Array.isArray(n)}function j_(n){return typeof n=="string"||n instanceof String}function IT(n){return B_()&&n instanceof Blob}function B_(){return typeof Blob<"u"}function ST(n,e,t,r){if(r<e)throw ag(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ag(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function IC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ao;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ao||(Ao={}));/**
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
 */class XL{constructor(e,t,r,s,a,u,d,f,m,y,E,T=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((F,M)=>{this.resolve_=F,this.reject_=M,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Ao.NO_ERROR,f=a.getStatus();if(!d||YL(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Ao.ABORT;r(!1,new bh(!1,null,y));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new bh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());KL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=U_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?TC():VL();u(f)}else{const f=ML();u(f)}};this.canceled_?t(!1,new bh(!1,null,!0)):this.backoffId_=qL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function JL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ZL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function tM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function nM(n,e,t,r,s,a,u=!0,d=!1){const f=IC(n.urlParams),m=n.url+f,y=Object.assign({},n.headers);return eM(y,e),JL(y,t),ZL(y,a),tM(y,r),new XL(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iM(...n){const e=rM();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(B_())return new Blob(n);throw new St(It.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sM(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */const Xr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gm{constructor(e,t){this.data=e,this.contentType=t||null}}function aM(n,e){switch(n){case Xr.RAW:return new gm(SC(e));case Xr.BASE64:case Xr.BASE64URL:return new gm(CC(n,e));case Xr.DATA_URL:return new gm(uM(e),cM(e))}throw U_()}function SC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lM(n){let e;try{e=decodeURIComponent(n)}catch{throw Au(Xr.DATA_URL,"Malformed data URL.")}return SC(e)}function CC(n,e){switch(n){case Xr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Au(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Au(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=oM(e)}catch(s){throw s.message.includes("polyfill")?s:Au(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class RC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Au(Xr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=hM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uM(n){const e=new RC(n);return e.base64?CC(Xr.BASE64,e.rest):lM(e.rest)}function cM(n){return new RC(n).contentType}function hM(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){let r=0,s="";IT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(IT(this.data_)){const r=this.data_,s=sM(r,e,t);return s===null?null:new ws(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new ws(r,!0)}}static getBlob(...e){if(B_()){const t=e.map(r=>r instanceof ws?r.data_:r);return new ws(iM.apply(null,t))}else{const t=e.map(u=>j_(u)?aM(Xr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new ws(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function pM(n,e){return e}class Tn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||pM}}let Dh=null;function mM(n){return!j_(n)||n.length<2?n:kC(n)}function PC(){if(Dh)return Dh;const n=[];n.push(new Tn("bucket")),n.push(new Tn("generation")),n.push(new Tn("metageneration")),n.push(new Tn("name","fullPath",!0));function e(a,u){return mM(u)}const t=new Tn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new Tn("size");return s.xform=r,n.push(s),n.push(new Tn("timeCreated")),n.push(new Tn("updated")),n.push(new Tn("md5Hash",null,!0)),n.push(new Tn("cacheControl",null,!0)),n.push(new Tn("contentDisposition",null,!0)),n.push(new Tn("contentEncoding",null,!0)),n.push(new Tn("contentLanguage",null,!0)),n.push(new Tn("contentType",null,!0)),n.push(new Tn("metadata","customMetadata",!0)),Dh=n,Dh}function gM(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new qn(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function _M(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return gM(r,n),r}function NC(n,e,t){const r=AC(e);return r===null?null:_M(n,r,t)}function yM(n,e,t,r){const s=AC(e);if(s===null||!j_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const y=n.bucket,E=n.fullPath,T="/b/"+u(y)+"/o/"+u(E),P=z_(T,t,r),F=IC({alt:"media",token:m});return P+F})[0]}function vM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class xC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(n){if(!n)throw U_()}function EM(n,e){function t(r,s){const a=NC(n,s,e);return bC(a!==null),a}return t}function wM(n,e){function t(r,s){const a=NC(n,s,e);return bC(a!==null),yM(a,s,n.host,n._protocol)}return t}function DC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=OL():s=DL():t.getStatus()===402?s=bL(n.bucket):t.getStatus()===403?s=LL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function TM(n){const e=DC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=xL(n.path)),a.serverResponse=s.serverResponse,a}return t}function IM(n,e,t){const r=e.fullServerUrl(),s=z_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new xC(s,a,wM(n,t),u);return d.errorHandler=TM(e),d}function SM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function CM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=SM(null,e)),r}function RM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let te="";for(let j=0;j<2;j++)te=te+Math.random().toString().slice(2);return te}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=CM(e,r,s),y=vM(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",P=ws.getBlob(E,r,T);if(P===null)throw BL();const F={name:m.fullPath},M=z_(a,n.host,n._protocol),U="POST",ae=n.maxUploadRetryTime,K=new xC(M,U,EM(n,t),ae);return K.urlParams=F,K.headers=u,K.body=P.uploadData(),K.errorHandler=DC(e),K}class AM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ao.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ao.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ao.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw ou("cannot .send() more than once");if(oi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ou("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ou("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ou("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ou("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kM extends AM{initXhr(){this.xhr_.responseType="text"}}function OC(){return new kM}/**
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
 */class Vo{constructor(e,t){this._service=e,t instanceof qn?this._location=t:this._location=qn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Vo(e,t)}get root(){const e=new qn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kC(this._location.path)}get storage(){return this._service}get parent(){const e=dM(this._location.path);if(e===null)return null;const t=new qn(this._location.bucket,e);return new Vo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw WL(e)}}function PM(n,e,t){n._throwIfRoot("uploadBytes");const r=RM(n.storage,n._location,PC(),new ws(e,!0),t);return n.storage.makeRequestWithTokens(r,OC).then(s=>({metadata:s,ref:n}))}function NM(n){n._throwIfRoot("getDownloadURL");const e=IM(n.storage,n._location,PC());return n.storage.makeRequestWithTokens(e,OC).then(t=>{if(t===null)throw zL();return t})}function xM(n,e){const t=fM(n._location.path,e),r=new qn(n._location.bucket,t);return new Vo(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(n){return/^[A-Za-z]+:\/\//.test(n)}function DM(n,e){return new Vo(n,e)}function LC(n,e){if(n instanceof $_){const t=n;if(t._bucket==null)throw jL();const r=new Vo(t,t._bucket);return e!=null?LC(r,e):r}else return e!==void 0?xM(n,e):n}function OM(n,e){if(e&&bM(e)){if(n instanceof $_)return DM(n,e);throw ag("To use ref(service, url), the first argument must be a Storage instance.")}else return LC(n,e)}function CT(n,e){const t=e==null?void 0:e[wC];return t==null?null:qn.makeFromBucketSpec(t,n)}function LM(n,e,t,r={}){n.host=`${e}:${t}`;const s=oi(e);s&&(Dd(`https://${n.host}/b`),Od("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:hg(a,n.app.options.projectId))}class $_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=EC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PL,this._maxUploadRetryTime=NL,this._requests=new Set,s!=null?this._bucket=qn.makeFromBucketSpec(s,this._host):this._bucket=CT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qn.makeFromBucketSpec(this._url,e):this._bucket=CT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ST("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ST("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vo(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new HL(TC());{const u=nM(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const RT="@firebase/storage",AT="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="storage";function MM(n,e,t){return n=et(n),PM(n,e,t)}function VM(n){return n=et(n),NM(n)}function FM(n,e){return n=et(n),OM(n,e)}function UM(n=Vd(),e){n=et(n);const r=Qu(n,MC).getImmediate({identifier:e}),s=cg("storage");return s&&jM(r,...s),r}function jM(n,e,t,r={}){LM(n,e,t,r)}function BM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new $_(t,r,s,e,Ws)}function zM(){Ds(new Oi(MC,BM,"PUBLIC").setMultipleInstances(!0)),lr(RT,AT,""),lr(RT,AT,"esm2017")}zM();const $M={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},WM="",vf=qT($M),rl=YP(vf);M1(rl,EI).catch(()=>{});const ii=Gb(vf),kT=SL(vf),HM=UM(vf),xs=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý",color:"#2481cc"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên",color:"#d84a35"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên",color:"#3d9b4f"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên",color:"#8e44ad"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối",color:"#c04b9b"}],Yr=n=>(xs.find(e=>e.id===n)||{name:n}).name,bs=n=>(xs.find(e=>e.id===n)||{}).color||"#2481cc",au={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},_m=["waiting_acceptance","in_progress","waiting_review","completed"],VC={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function PT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function FC(n,e){return e.trim()?PT(n).includes(PT(e)):!0}function ko(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function Nd(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function UC(n){if(!n)return"";const e=new Date(typeof n=="number"?n:Date.parse(n));if(Number.isNaN(e.getTime()))return"";const t=e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return e.toDateString()===new Date().toDateString()?t:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")} ${t}`}function qM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function Ri(n,{method:e="GET",body:t,token:r}={}){const s=r||(rl.currentUser?await rl.currentUser.getIdToken():"");let a;try{a=await fetch(`${WM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}function xd(n,e="dữ liệu"){const t=String(n&&n.message||"");return/401|unauthenticated|permission|hết hạn/i.test(t)&&/401/.test(t)?"Phiên đăng nhập đã hết hạn — đăng nhập lại.":/^HTTP 404|HTTP 404/.test(t)?`Không tải được ${e} — thử tải lại trang.`:/HTTP (4\d\d|5\d\d)/.test(t)?`Không tải được ${e} — thử lại sau. Nếu vẫn lỗi, báo quản lý.`:/không kết nối được backend|backend chưa deploy/i.test(t)?"Máy chủ chưa sẵn sàng — tính năng này tạm chưa dùng được.":/failed to fetch|load failed|networkerror|network request failed/i.test(t)?"Không có mạng — kiểm tra mạng rồi thử lại.":/chưa xác định người gửi/i.test(t)?t:t||`Không tải được ${e} — thử lại sau.`}const ar={sendMessage:async({content:n,threadId:e=null,attachments:t=[],clientDocId:r=null},s)=>{const a=qM(s),u=(n||"").trim();if(!u)throw new Error("Nội dung trống.");try{const m=await Ri("/api/messages",{method:"POST",body:{content:u,roomId:"general",threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[]}});return{id:m.message&&m.message.id}}catch(m){console.error("Gửi qua backend thất bại, fallback ghi trực tiếp Firestore:",m)}const d={roomId:"general",senderId:a.id,senderName:a.name,senderType:"human",content:u,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[a.id],pinned:!1};return typeof r=="string"&&r.length>0?(await aD(md(Bs(ii,"messages"),r),d),{id:r}):{id:(await lD(Bs(ii,"messages"),d)).id}},pinMessage:(n,e,t)=>Ri(`/api/messages/${n}/pin`,{method:"POST",body:{pinned:!!e,content:t&&t.content||"",senderName:t&&t.senderName||""}}),markSeen:(n,e)=>e?cS(md(ii,"messages",n),{seenBy:cD(e)}):Promise.resolve(),listTasks:(n="")=>Ri(`/api/tasks${n}`),createTask:n=>Ri("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>Ri(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>Ri("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>Ri("/api/jobs"),listUsers:()=>Ri("/api/users"),setTelegramChatId:(n,e)=>Ri(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})},W_="enteesee-theme",NT={light:"#eef1f5",dark:"#0b0f14"};function mu(){try{const n=localStorage.getItem(W_);return n==="dark"||n==="light"||n==="system"?n:null}catch{return null}}function jC(){try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Hh(n){return n==="dark"||n==="light"?n:jC()}function qh(n){document.documentElement.dataset.theme=n;const e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",NT[n]||NT.light)}function GM(){const n=mu()||"system",e=Hh(n);return qh(e),e}function KM(n){try{localStorage.setItem(W_,n)}catch{}}function QM(){const[n,e]=J.useState(""),[t,r]=J.useState(""),[s,a]=J.useState(""),[u,d]=J.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await L1(rl,n.trim(),t)}catch(y){y.code==="auth/invalid-credential"?a("Email hoặc mật khẩu chưa đúng."):y.code==="auth/network-request-failed"?a("Không có mạng — kiểm tra mạng rồi thử lại."):y.code==="auth/too-many-requests"?a("Thử quá nhiều lần — đợi một lát rồi thử lại."):a("Đăng nhập chưa được — thử lại sau. Nếu vẫn lỗi, báo quản lý."),console.error("Login failed:",y)}finally{d(!1)}}return I.jsx("div",{className:"login-page",children:I.jsxs("div",{className:"login-card",children:[I.jsx("div",{className:"login-logo",children:"E"}),I.jsx("h1",{children:"Enteesee"}),I.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),I.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&I.jsx("div",{className:"err",children:s}),I.jsxs("form",{onSubmit:f,children:[I.jsx("div",{style:{marginBottom:10},children:I.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),I.jsx("div",{style:{marginBottom:12},children:I.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),I.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),I.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}function YM(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?I.jsx("b",{className:"mention",children:t},r):I.jsx("span",{children:t},r))}function XM(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function xT({status:n}){return n==="sending"||n==="failed"?I.jsxs("svg",{className:`tick tick-sending${n==="failed"?" tick-failed":""}`,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":n==="failed"?"Gửi thất bại":"Đang gửi",children:[I.jsx("circle",{cx:"6",cy:"6",r:"4.6"}),I.jsx("path",{d:"M6 3.5V6l1.8 1.2"})]}):n==="read"?I.jsxs("svg",{className:"tick tick-read",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã đọc",children:[I.jsx("path",{d:"M1 6.5 4 9.5 10 2.5"}),I.jsx("path",{d:"M5.5 6.5 8.5 9.5 14.5 2.5"})]}):I.jsx("svg",{className:"tick",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã gửi",children:I.jsx("path",{d:"M1.5 6.5 4.5 9.5 10.5 2.5"})})}function JM(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`pending-${crypto.randomUUID()}`:`pending-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}const ZM=1e4,eV=15e3,tV=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(min-width: 768px)").matches?220:140,nV=220,rV=160,iV=32,sV=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;function oV({person:n}){const[e,t]=J.useState([]),[r,s]=J.useState([]),[a,u]=J.useState(""),[d,f]=J.useState(""),[m,y]=J.useState(""),[E,T]=J.useState(!1),[P,F]=J.useState(!1),[M,U]=J.useState(null),[ae,K]=J.useState(""),[te,j]=J.useState(""),[we,me]=J.useState(!1),[N,C]=J.useState([]),[k,b]=J.useState(!1),[D,L]=J.useState(null),A=J.useRef(null),$e=J.useRef(null),tt=J.useRef(null),se=J.useRef(null),Z=J.useRef(new Map),G=J.useRef(new Map),le=J.useRef(null),re=J.useRef([]),V=J.useRef(!1),[Q,Te]=J.useState(!0),[Pe,De]=J.useState(0),Me=J.useRef(!0),We=J.useRef(!0),He=J.useRef(null);J.useEffect(()=>ju(Ja(Bs(ii,"messages"),Fu("createdAt","desc"),Uu(200)),W=>t(W.docs.map(he=>({id:he.id,...he.data(),_pendingWrite:he.metadata.hasPendingWrites})).reverse()),()=>K("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),J.useEffect(()=>ju(Ja(Bs(ii,"aiEvents"),Fu("createdAt","desc"),Uu(200)),W=>s(W.docs.map(he=>({id:he.id,...he.data()})))),[]);const nt=J.useMemo(()=>{const W=new Map;for(const he of r)he.messageId&&W.set(he.messageId,he);return W},[r]),ct=J.useMemo(()=>new Set(e.filter(W=>!W._pendingWrite).map(W=>W.id)),[e]),Mn=J.useMemo(()=>new Set(N.flatMap(W=>[W.docId,W.realId].filter(Boolean))),[N]),_n=J.useMemo(()=>e.filter(W=>!W.threadId&&!(W._pendingWrite&&Mn.has(W.id))),[e,Mn]),Gn=J.useMemo(()=>{const W=m.trim();return _n.filter(he=>FC(`${he.content||""} ${he.senderName||""}`,W))},[_n,m]),ur=W=>e.filter(he=>he.threadId===W&&!(he._pendingWrite&&Mn.has(he.id)));function zi(W){const he=$e.current;if(!he||!W)return;const ge=he.querySelector(`[data-message-id="${CSS.escape(W)}"]`);ge&&(ge.scrollIntoView({behavior:"smooth",block:"center"}),ge.classList.add("flash"),setTimeout(()=>ge.classList.remove("flash"),1200))}async function ui(W){try{await ar.pinMessage(W.id,!W.pinned,W),t(he=>he.map(ge=>ge.id===W.id?{...ge,pinned:!W.pinned}:ge))}catch{j("Không ghim được tin này — thử lại sau.")}}function cr(W){const he=Z.current.get(W);he&&(clearTimeout(he),Z.current.delete(W))}function $i(W){cr(W),C(he=>he.filter(ge=>ge.tempId!==W))}J.useEffect(()=>(V.current=!1,()=>{V.current=!0;for(const W of Z.current.values())clearTimeout(W);Z.current.clear();for(const W of G.current.values())clearTimeout(W.timeoutId);G.current.clear()}),[]),J.useEffect(()=>{re.current=e,e.length!==0&&C(W=>{let he=!1;const ge=[];for(const Ye of W)if(Ye.realId&&ct.has(Ye.realId)||Ye.docId&&ct.has(Ye.docId)){cr(Ye.tempId);const wt=G.current.get(Ye.tempId);wt&&(clearTimeout(wt.timeoutId),G.current.delete(Ye.tempId)),he=!0}else ge.push(Ye);return he?ge:W})},[e,ct]);const ci=J.useMemo(()=>N.filter(W=>!(W.realId&&ct.has(W.realId)||W.docId&&ct.has(W.docId))),[N,ct]);function hr(){const W=$e.current;if(!W)return;const he=W.scrollHeight-W.scrollTop-W.clientHeight,ge=Me.current?he<=nV:he<=rV;Me.current=ge,Te(ge),ge&&De(0)}function Kn(W=!0){const he=$e.current;he&&(he.scrollTo({top:he.scrollHeight,behavior:W?"smooth":"auto"}),De(0))}J.useEffect(()=>{const W=$e.current;if(!W||_n.length===0)return;const he=_n[_n.length-1],ge=He.current;if(He.current=he.id,We.current){W.scrollTo({top:W.scrollHeight,behavior:"auto"}),We.current=!1;return}if(he.id===ge)return;const Ye=ge?_n.findIndex(bt=>bt.id===ge):-1,wt=Ye>=0?_n.slice(Ye+1):[he],Lr=wt.some(bt=>bt.senderId===n.id);if(Me.current||Lr)W.scrollTo({top:W.scrollHeight,behavior:"smooth"});else{const bt=wt.filter(ht=>ht.senderId!==n.id).length;bt>0&&De(ht=>ht+bt)}},[_n,n.id]),J.useEffect(()=>{const W=$e.current;if(!W||typeof ResizeObserver>"u")return;let he=W.clientHeight;const ge=new ResizeObserver(()=>{const Ye=W.clientHeight;Ye<he&&W.scrollHeight-W.scrollTop-he<=iV&&(W.scrollTop=W.scrollHeight),he=Ye});return ge.observe(W),()=>ge.disconnect()},[]),J.useEffect(()=>{e.slice(-5).forEach(he=>{he.id&&!(he.seenBy||[]).includes(n.id)&&ar.markSeen(he.id,n.id).catch(()=>{})})},[e,n.id]);function Wi(){const W=tt.current;if(!W)return;const he=tV();W.style.height="auto";const ge=W.scrollHeight;W.style.height=`${Math.min(ge,he)}px`,W.style.overflowY=ge>he?"auto":"hidden"}J.useEffect(()=>{Wi()},[a]),J.useEffect(()=>{E&&se.current&&se.current.focus()},[E]);function Hi(W){u(W);const he=W.match(/@([A-Za-zÀ-ỹ]*)$/);he?(f(he[1]),F(!0)):F(!1)}function qi(W){u(he=>he.replace(/@[A-Za-zÀ-ỹ]*$/,`@${W.name} `)),F(!1),tt.current&&tt.current.focus()}async function hi(W=null){const he=typeof W=="string";if(we)return;let ge,Ye,wt;if(he){const ht=N.find(Dt=>Dt.tempId===W);if(!ht||ht.status!=="failed")return;ge=ht.tempId,Ye=ht.content,wt=ht.threadId||null,cr(ge),C(Dt=>Dt.map(Rt=>Rt.tempId===ge?{...Rt,status:"sending",realId:null}:Rt))}else{if(Ye=a.trim(),!Ye)return;wt=M?M.id:null,ge=JM();const ht={tempId:ge,id:ge,docId:ge,realId:null,senderId:n.id,senderName:n.name,senderType:"human",content:Ye,threadId:wt,createdAt:new Date().toISOString(),seenBy:[n.id],status:"sending"};C(Dt=>[...Dt,ht]),u(""),U(null),requestAnimationFrame(()=>{wt?zi(wt):Kn()})}const Lr=G.current.get(ge);Lr&&clearTimeout(Lr.timeoutId),le.current=ge,me(!0),j("");const bt={timeoutId:null};G.current.set(ge,bt),bt.timeoutId=setTimeout(()=>{V.current||G.current.get(ge)===bt&&(C(ht=>ht.map(Dt=>Dt.tempId===ge?{...Dt,status:"failed"}:Dt)),j("Không gửi được tin nhắn — kiểm tra mạng rồi thử lại."),le.current===ge&&me(!1))},eV);try{const ht=await ar.sendMessage({content:Ye,threadId:wt,clientDocId:ge},n);clearTimeout(bt.timeoutId);const Dt=G.current.get(ge);if(Dt&&(clearTimeout(Dt.timeoutId),G.current.delete(ge)),V.current)return;const Rt=ht&&ht.id?ht.id:null;if(Rt&&re.current.some(an=>an.id===Rt&&!an._pendingWrite))$i(ge);else if(Rt)t(an=>an.some(Mr=>Mr.id===Rt)?an:[...an,{id:Rt,docId:Rt,roomId:"general",senderId:n.id,senderName:n.name,senderType:"human",content:Ye,threadId:wt||null,replyToMessageId:wt||null,attachments:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[n.id],pinned:!1}]),$i(ge);else{C(Mr=>Mr.map(Vr=>Vr.tempId===ge?{...Vr,status:"sent",realId:Rt}:Vr)),cr(ge);const an=setTimeout(()=>{$i(ge)},ZM);Z.current.set(ge,an)}requestAnimationFrame(()=>{Wi(),tt.current&&tt.current.focus()})}catch(ht){if(clearTimeout(bt.timeoutId),V.current||G.current.get(ge)!==bt)return;G.current.delete(ge),cr(ge),C(Dt=>Dt.map(Rt=>Rt.tempId===ge?{...Rt,status:"failed"}:Rt)),j(XM(ht))}finally{!V.current&&le.current===ge&&(!G.current.has(ge)||G.current.get(ge)===bt)&&me(!1)}}async function Ct(W){if(W){b(!0),j("");try{const he=`rooms/general/${Date.now()}_${W.name}`,ge=await MM(FM(HM,he),W),Ye=await VM(ge.ref);await ar.sendMessage({content:`Đã gửi file: ${W.name}`,attachments:[{name:W.name,size:W.size,type:W.type,url:Ye,path:he}]},n)}catch(he){j(/load failed|failed to fetch|networkerror/i.test(String(he.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${he.message}`)}finally{b(!1)}}}const Je=D?xs.find(W=>W.id===D):null;return I.jsxs("div",{className:"chat",children:[I.jsxs("div",{className:`search-wrap${E?" open":""}`,children:[I.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>T(W=>!W),children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"11",cy:"11",r:"8"}),I.jsx("path",{d:"m21 21-4.3-4.3"})]})}),I.jsx("input",{ref:se,className:"search",value:m,onChange:W=>y(W.target.value),placeholder:"Tìm tin nhắn…","aria-label":"Tìm tin nhắn"})]}),ae&&I.jsx("div",{className:"err-load",children:ae}),I.jsxs("div",{className:"chat-list-wrap",children:[I.jsxs("div",{className:"chat-list",ref:$e,onScroll:hr,children:[Gn.length===0&&ci.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),Gn.filter(W=>W.pinned).map(W=>I.jsx(ym,{m:W,person:n,event:nt.get(W.id),onReply:U,threadReplies:ur,pinned:!0,onAvatar:L,onTogglePin:ui},`pin-${W.id}`)),Gn.filter(W=>!W.pinned).map(W=>I.jsx(ym,{m:W,person:n,event:nt.get(W.id),onReply:U,threadReplies:ur,onAvatar:L,onTogglePin:ui},W.id)),ci.map(W=>I.jsx(ym,{m:W,person:n,event:null,onReply:U,threadReplies:ur,onAvatar:L,onTogglePin:ui,status:W.status,onRetry:W.status==="failed"?()=>hi(W.tempId):void 0},W.tempId))]}),I.jsxs("button",{type:"button",className:`scroll-bottom-btn${Q?"":" visible"}${Pe>0?" has-new":""}`,"aria-label":Pe>0?`Cuộn xuống — có ${Pe>99?"hơn 99":Pe} tin mới`:"Cuộn xuống tin mới nhất","aria-hidden":Q,tabIndex:Q?-1:0,onClick:()=>Kn(!0),children:[I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),Pe>0&&I.jsxs("span",{className:"scroll-bottom-label",children:[Pe>99?"99+":Pe," tin mới"]})]})]}),D&&Je&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>L(null),children:I.jsxs("div",{className:"member-detail",onClick:W=>W.stopPropagation(),role:"dialog","aria-label":`Thông tin ${Je.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:bs(Je.id),color:"#fff"},children:Je.name.charAt(0)}),I.jsx("h3",{children:Je.name}),I.jsxs("div",{className:"muted",children:[Je.roleVi," · ID: ",Je.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:Je.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":"Thành viên phòng giao việc Enteesee."}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsxs("button",{type:"button",onClick:()=>{u(W=>`${W}@${Je.name} `),L(null),tt.current&&tt.current.focus()},children:["Nhắc @",Je.name]}),I.jsx("button",{type:"button",onClick:()=>L(null),children:"Đóng"})]})]})}),M&&I.jsxs("div",{className:"reply-bar",children:[I.jsxs("span",{className:"muted",children:["Đang trả lời ",M.senderName,": ",(M.content||"").slice(0,80)]}),I.jsx("button",{onClick:()=>U(null),children:"Hủy"})]}),P&&I.jsx("div",{className:"mention-list",children:xs.filter(W=>W.name.toLowerCase().startsWith(d.toLowerCase())).map(W=>I.jsxs("button",{type:"button",onClick:()=>qi(W),children:["@",W.name," — ",W.roleVi]},W.id))}),te&&I.jsx("div",{className:"err",children:te}),I.jsxs("div",{className:"composer",children:[I.jsxs("div",{className:"composer-box",children:[I.jsx("button",{type:"button",className:"attach-btn",onClick:()=>A.current&&A.current.click(),disabled:k,title:"Đính kèm file","aria-label":"Đính kèm file",children:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),I.jsx("textarea",{ref:tt,value:a,onChange:W=>Hi(W.target.value),placeholder:"Nhắn tin…","aria-label":"Nhắn tin",rows:1,onKeyDown:W=>{W.key==="Enter"&&!W.shiftKey&&!W.nativeEvent.isComposing&&!sV()&&(W.preventDefault(),hi())}})]}),I.jsx("input",{ref:A,type:"file",style:{display:"none"},onChange:W=>{Ct(W.target.files[0]),W.target.value=""}}),I.jsx("button",{className:"send-btn",type:"button",onMouseDown:W=>W.preventDefault(),onClick:()=>hi(),disabled:we||!a.trim(),title:"Gửi","aria-label":"Gửi",children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),I.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),k&&I.jsx("div",{className:"composer-note",children:"Đang tải file lên…"})]})}function ym({m:n,person:e,event:t,onReply:r,threadReplies:s,pinned:a,onAvatar:u,status:d,onRetry:f,onTogglePin:m}){const[y,E]=J.useState(!1),[T,P]=J.useState(null),[F,M]=J.useState(!1),[U,ae]=J.useState(null),K=J.useRef(null),te=J.useRef(null),j=!!n.tempId,we=j?[]:s(n.id),me=n.senderId===e.id,N=t,C=(n.senderName||Yr(n.senderId)||"?").charAt(0),k=bs(n.senderId),b=(n.seenBy||[]).filter(Z=>Z!==e.id),D=b.length>0,L=d||(D?"read":"sent"),A=L==="sent"||L==="read",$e=N?`${N.museRepliedAt?`Muse đã phản hồi ${ko(N.museRepliedAt)}`:"Muse đang phản hồi…"} · ${N.employeeAcknowledgedAt?`Nhân viên đã xác nhận ${ko(N.employeeAcknowledgedAt)}`:"Chờ nhân viên xác nhận"}`:null;function tt(Z){if(Z.stopPropagation(),U){ae(null);return}const G=K.current?K.current.getBoundingClientRect():null;if(!G)return;const le=Math.max(8,window.innerWidth-G.right);ae(G.top>=96?{bottom:window.innerHeight-G.top+6,right:le}:{top:G.bottom+6,right:le})}J.useEffect(()=>{if(!U)return;const Z=()=>ae(null),G=re=>{te.current&&te.current.contains(re.target)||K.current&&K.current.contains(re.target)||Z()},le=re=>{re.key==="Escape"&&Z()};return document.addEventListener("pointerdown",G,!0),document.addEventListener("keydown",le),window.addEventListener("scroll",Z,!0),window.addEventListener("resize",Z),()=>{document.removeEventListener("pointerdown",G,!0),document.removeEventListener("keydown",le),window.removeEventListener("scroll",Z,!0),window.removeEventListener("resize",Z)}},[U]);function se(Z){j||Z.target.closest("button, a")||E(G=>!G)}return I.jsxs("div",{className:`msg-row ${me?"mine":""}`,"data-message-id":n.id,children:[!me&&I.jsx("button",{type:"button",className:"msg-avatar-btn","aria-label":`Xem thông tin ${n.senderName||Yr(n.senderId)}`,onClick:()=>u&&u(n.senderId),children:I.jsx("span",{className:"avatar",style:{backgroundColor:k,color:"#fff"},children:C})}),I.jsxs("div",{className:`msg ${me?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||a?"pinned":""}${y?" show-actions":""}`,onClick:se,children:[!me&&I.jsx("div",{className:"sender-name",style:{color:k},children:n.senderName||Yr(n.senderId)}),n.senderType==="ai"&&I.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||a)&&I.jsx("span",{className:"tag status",children:"Đã ghim"}),I.jsxs("div",{className:"content",children:[YM(n.content),I.jsxs("span",{className:"msg-time",children:[Nd(n.createdAt),me&&I.jsx("span",{className:"msg-time-wrap",children:A?I.jsxs(I.Fragment,{children:[I.jsx("button",{ref:K,type:"button",className:"tick-btn","aria-label":L==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái","aria-expanded":!!U,title:L==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái",onClick:tt,children:I.jsx(xT,{status:L})}),U&&I.jsx("span",{ref:te,className:"seen-popover",role:"status",style:U,onClick:Z=>Z.stopPropagation(),children:L==="read"?`Đã xem: ${b.map(Yr).join(", ")}`:"Chưa ai xem tin này."})]}):I.jsxs(I.Fragment,{children:[I.jsx(xT,{status:L}),L==="failed"&&f&&I.jsx("button",{type:"button",className:"retry-inline-btn",onClick:Z=>{Z.stopPropagation(),f()},children:"Thử lại"})]})})]})]}),n.linkPreview&&I.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&I.jsx("img",{src:n.linkPreview.image,alt:""}),I.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&I.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((Z,G)=>I.jsx("div",{children:(Z.type||"").startsWith("image/")?I.jsx("a",{href:Z.url,target:"_blank",rel:"noreferrer",children:I.jsx("img",{className:"attachment-img",src:Z.url,alt:Z.name})}):I.jsxs("span",{className:"attachment-file",children:[I.jsx("a",{href:Z.url,target:"_blank",rel:"noreferrer",children:Z.name})," ",I.jsxs("span",{className:"muted",children:["(",Math.round((Z.size||0)/1024)," KB)"]})]})},G)),$e&&I.jsx("div",{style:{marginTop:6},children:I.jsx("span",{className:"tag ai-replied",children:$e})}),!j&&I.jsxs("div",{className:"row",children:[I.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),I.jsx("button",{type:"button",onClick:()=>m(n),children:n.pinned?"Bỏ ghim":"Ghim"})]}),we.length>0&&I.jsxs("div",{className:"reply-previews",children:[we.slice(0,F?void 0:3).map(Z=>I.jsxs("button",{type:"button",className:`reply-preview${T===Z.id?" open":""}`,onClick:G=>{G.stopPropagation(),P(T===Z.id?null:Z.id)},children:[I.jsx("span",{className:"reply-preview-name",style:{color:bs(Z.senderId)},children:Z.senderName||Yr(Z.senderId)}),I.jsx("span",{className:"reply-preview-text",children:Z.content}),I.jsx("span",{className:"reply-preview-time",children:Nd(Z.createdAt)})]},Z.id)),we.length>3&&I.jsx("button",{type:"button",className:"reply-more",onClick:Z=>{Z.stopPropagation(),M(G=>!G)},children:F?"Thu gọn":`Xem thêm ${we.length-3} trả lời`})]})]})]})}const aV=I.jsx("svg",{className:"combo-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),lV=I.jsx("svg",{className:"combo-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})});function uV({id:n,label:e,options:t,value:r,onChange:s}){const[a,u]=J.useState(!1),[d,f]=J.useState(-1),m=J.useRef(null),y=J.useRef({text:"",at:0}),E=t.find(M=>M.value===r)||t[0],T=`${n}-listbox`;J.useEffect(()=>{if(!a)return;const M=U=>{m.current&&!m.current.contains(U.target)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[a]);function P(M){const U=t[M];U&&(s(U.value),u(!1),f(-1))}function F(M){if(M.key==="ArrowDown"){if(M.preventDefault(),!a){u(!0),f(0);return}f(U=>Math.min(t.length-1,U+1))}else if(M.key==="ArrowUp"){if(M.preventDefault(),!a){u(!0),f(t.length-1);return}f(U=>Math.max(0,U-1))}else if(M.key==="Enter"||M.key===" ")M.preventDefault(),a&&d>=0?P(d):u(U=>!U);else if(M.key==="Escape")M.preventDefault(),u(!1),f(-1);else if(M.key==="Home")M.preventDefault(),u(!0),f(0);else if(M.key==="End")M.preventDefault(),u(!0),f(t.length-1);else if(M.key.length===1){const U=Date.now(),ae=y.current;ae.text=U-ae.at>800?M.key:ae.text+M.key,ae.at=U;const K=t.findIndex(te=>te.label.toLowerCase().startsWith(ae.text.toLowerCase()));K>=0&&(u(!0),f(K))}}return I.jsxs("div",{className:"combo",ref:m,children:[e&&I.jsx("span",{className:"combo-label",id:`${n}-label`,children:e}),I.jsxs("button",{type:"button",id:n,className:"combo-trigger","aria-haspopup":"listbox","aria-expanded":a,"aria-labelledby":e?`${n}-label ${n}`:void 0,"aria-activedescendant":a&&d>=0?`${n}-opt-${d}`:void 0,onClick:()=>{u(M=>!M),f(t.findIndex(M=>M.value===r))},onKeyDown:F,children:[I.jsx("span",{className:"combo-value",children:E?E.label:""}),aV]}),a&&I.jsx("div",{className:"combo-panel",role:"listbox",id:T,"aria-labelledby":e?`${n}-label`:void 0,children:t.map((M,U)=>I.jsxs("button",{type:"button",id:`${n}-opt-${U}`,role:"option","aria-selected":M.value===r,className:`combo-option${M.value===r?" selected":""}${d===U?" highlighted":""}`,onClick:()=>P(U),onMouseEnter:()=>f(U),children:[M.value===r?lV:I.jsx("span",{className:"combo-check placeholder","aria-hidden":"true"}),M.label]},M.value))})]})}const cV=["urgent","high","normal","low"];function hV({person:n}){const[e,t]=J.useState([]),[r,s]=J.useState("all"),[a,u]=J.useState(""),[d,f]=J.useState(!1),[m,y]=J.useState(""),[E,T]=J.useState(null),[P,F]=J.useState("");async function M(){try{const j=n.role==="manager"?"":`?assignee=${n.id}`,we=await ar.listTasks(j);t(we.tasks||[]),y("")}catch(j){y(xd(j,"danh sách công việc"))}}J.useEffect(()=>{M();const j=setInterval(M,15e3);return()=>clearInterval(j)},[n.id,n.role]);const U=J.useMemo(()=>e.filter(j=>r!=="all"&&j.status!==r?!1:FC(`${j.title} ${j.description||""} ${(j.assignees||[]).map(Yr).join(" ")}`,a)),[e,r,a]);async function ae(j,we,me){y("");try{await ar.setTaskStatus(j.id,we,me),await M()}catch(N){y(xd(N,"danh sách công việc"))}}const K=n.role==="manager",te=_m.reduce((j,we)=>({...j,[we]:e.filter(me=>me.status===we).length}),{});return I.jsxs("div",{children:[I.jsx("div",{className:"row",style:{marginBottom:10},children:_m.map(j=>I.jsxs("span",{className:"tag status",children:[au[j],": ",te[j]||0]},j))}),I.jsx("input",{className:"search",value:a,onChange:j=>u(j.target.value),placeholder:"Tìm công việc…","aria-label":"Tìm công việc"}),I.jsxs("div",{className:"row",style:{marginBottom:10,alignItems:"flex-end"},children:[I.jsx("div",{style:{flex:1,minWidth:180},children:I.jsx(uV,{id:"task-status-filter",label:"Trạng thái",options:[{value:"all",label:"Tất cả trạng thái"},..._m.map(j=>({value:j,label:au[j]}))],value:r,onChange:s})}),K&&I.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&I.jsxs("div",{className:"err",role:"alert",children:[m,I.jsx("button",{type:"button",className:"retry-btn",onClick:M,children:"Thử lại"})]}),d&&K&&I.jsx(dV,{onDone:()=>{f(!1),M()},onCancel:()=>f(!1)}),U.length===0&&!m&&I.jsx("div",{className:"empty",children:K?I.jsxs(I.Fragment,{children:[I.jsx("div",{children:"Chưa có công việc nào — bấm để giao việc đầu tiên."}),I.jsx("div",{style:{marginTop:12},children:I.jsx("button",{type:"button",onClick:()=>f(!0),children:"+ Giao việc mới"})})]}):"Chưa có dữ liệu — chưa có công việc nào."}),U.map(j=>{const we=(j.assignees||[]).includes(n.id);return I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:j.title}),I.jsx("div",{className:"muted",children:j.description||""}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("span",{className:"tag status",children:au[j.status]}),I.jsxs("span",{className:"tag status",children:["Ưu tiên: ",VC[j.priority]||j.priority]}),I.jsxs("span",{className:"muted",children:["Người nhận: ",(j.assignees||[]).map(Yr).join(", ")]}),j.dueAt&&I.jsxs("span",{className:"muted",children:["Hạn: ",ko(j.dueAt)]})]}),j.reviewNote&&I.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",j.reviewNote]}),I.jsxs("div",{className:"row",style:{marginTop:10},children:[j.status==="waiting_acceptance"&&we&&I.jsx("button",{className:"primary",onClick:()=>ae(j,"in_progress"),children:"Xác nhận nhận việc"}),j.status==="in_progress"&&we&&I.jsx("button",{className:"primary",onClick:()=>ae(j,"waiting_review"),children:"Trình duyệt"}),j.status==="waiting_review"&&K&&I.jsx("button",{className:"primary",onClick:()=>ae(j,"completed"),children:"Duyệt — Hoàn thành"}),j.status==="waiting_review"&&K&&I.jsx("button",{className:"danger",onClick:()=>T(j.id),children:"Yêu cầu sửa"}),j.status==="completed"&&I.jsxs("span",{className:"tag acked",children:["Đã duyệt ",ko(j.approvedAt)]})]}),E===j.id&&I.jsxs("div",{style:{marginTop:8},children:[I.jsx("label",{htmlFor:"reject-reason",style:{fontSize:13,fontWeight:600},children:"Lý do yêu cầu sửa (bắt buộc)"}),I.jsx("input",{id:"reject-reason",value:P,onChange:me=>F(me.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("button",{disabled:!P.trim(),onClick:()=>{ae(j,"in_progress",P.trim()),T(null),F("")},children:"Gửi yêu cầu sửa"}),I.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(j.history||[]).length>0&&I.jsxs("details",{style:{marginTop:8},children:[I.jsxs("summary",{className:"muted",children:["Lịch sử (",j.history.length,")"]}),(j.history||[]).map((me,N)=>I.jsxs("div",{className:"muted",children:[ko(me.at)," — ",Yr(me.by),": ",me.from?au[me.from]:"—"," → ",au[me.to],me.reason?` — ${me.reason}`:""]},N))]})]},j.id)})]})}function dV({onDone:n,onCancel:e}){const[t,r]=J.useState(""),[s,a]=J.useState(""),[u,d]=J.useState([]),[f,m]=J.useState(""),[y,E]=J.useState("normal"),[T,P]=J.useState(""),[F,M]=J.useState(!1);async function U(K){if(K.preventDefault(),!t.trim()||u.length===0){P("Nhập tiêu đề và chọn ít nhất một người nhận.");return}M(!0),P("");try{await ar.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:y}),n()}catch(te){P(xd(te,"công việc"))}finally{M(!1)}}function ae(K){d(te=>te.includes(K)?te.filter(j=>j!==K):[...te,K])}return I.jsxs("form",{className:"card task-form",onSubmit:U,children:[I.jsx("h3",{style:{margin:0},children:"Giao việc mới"}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-title",children:"Tiêu đề công việc"}),I.jsx("input",{id:"task-title",value:t,onChange:K=>r(K.target.value),placeholder:"vd: Chuẩn bị báo cáo tuần",required:!0})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-desc",children:"Mô tả"}),I.jsx("textarea",{id:"task-desc",value:s,onChange:K=>a(K.target.value),placeholder:"Mô tả ngắn: làm gì, kết quả mong muốn là gì",rows:3})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"assignees-label",children:"Người nhận"}),I.jsx("div",{className:"assignee-chips",role:"group","aria-labelledby":"assignees-label",children:xs.filter(K=>K.role==="staff").map(K=>I.jsxs("label",{className:`assignee-chip${u.includes(K.id)?" selected":""}`,children:[I.jsx("input",{type:"checkbox",checked:u.includes(K.id),onChange:()=>ae(K.id),"aria-label":`Chọn ${K.name}`}),I.jsx("span",{className:"assignee-check","aria-hidden":"true",children:u.includes(K.id)&&I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})})}),I.jsx("span",{className:"avatar sm",style:{backgroundColor:bs(K.id),color:"#fff"},children:K.name.charAt(0)}),K.name]},K.id))}),I.jsx("div",{className:"form-helper",children:"Chọn một hoặc nhiều người nhận."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-due",children:"Hạn hoàn thành"}),I.jsx("input",{id:"task-due",type:"datetime-local",value:f,onChange:K=>m(K.target.value)}),I.jsx("div",{className:"form-helper",children:"Để trống nếu không có hạn."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"priority-label",children:"Ưu tiên"}),I.jsx("div",{className:"segmented",role:"group","aria-labelledby":"priority-label",children:cV.map(K=>I.jsx("button",{type:"button","aria-pressed":y===K,className:`${y===K?"selected":""}${K==="urgent"&&y===K?" danger-opt":""}`,onClick:()=>E(K),children:VC[K]},K))})]}),T&&I.jsx("div",{className:"err",role:"alert",style:{margin:0},children:T}),I.jsxs("div",{className:"row",children:[I.jsx("button",{className:"primary",type:"submit",disabled:F,children:F?"Đang giao…":"Giao việc"}),I.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const fV={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận",pin:"Ghim"};function pV({person:n,onUnread:e}){const[t,r]=J.useState([]),[s,a]=J.useState(""),[u,d]=J.useState(0),f=J.useCallback(()=>{a(""),d(y=>y+1)},[]);J.useEffect(()=>ju(Ja(Bs(ii,"notifications"),aS("recipientId","==",n.id),Fu("createdAt","desc"),Uu(100)),y=>{const E=y.docs.map(T=>({id:T.id,...T.data()}));r(E),a(""),e(E.filter(T=>!T.read).length)},y=>{console.error("Notifications load failed:",y),a("Không tải được thông báo — thử lại sau.")}),[n.id,e,u]);async function m(){await Promise.all(t.filter(y=>!y.read).map(y=>cS(md(ii,"notifications",y.id),{read:!0}).catch(()=>{})))}return I.jsxs("div",{children:[I.jsxs("div",{className:"row",style:{marginBottom:10},children:[I.jsx("b",{children:"Thông báo của bạn"}),I.jsx("button",{onClick:m,children:"Đánh dấu đã đọc hết"})]}),s&&I.jsxs("div",{className:"err",role:"alert",children:[s,I.jsx("button",{type:"button",className:"retry-btn",onClick:f,children:"Thử lại"})]}),t.length===0&&!s&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(y=>I.jsxs("div",{className:`card${y.read?"":" unread"}`,style:y.read?{opacity:.65}:{},children:[!y.read&&I.jsx("span",{className:"unread-dot","aria-hidden":"true"}),I.jsxs("div",{className:"row",children:[I.jsx("span",{className:"tag status",children:fV[y.type]||y.type}),I.jsx("span",{className:"muted",children:ko(y.createdAt)})]}),I.jsxs("div",{style:{marginTop:6},children:[Yr(y.senderId),": ",y.content]}),y.replyToContent&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Trả lời ",y.replyToSenderName||"tin nhắn",": ",(y.replyToContent||"").slice(0,150)]})]},y.id))]})}const mV=[{value:"system",label:"Theo hệ thống"},{value:"light",label:"Sáng"},{value:"dark",label:"Tối"}];function gV({person:n,onlineByPerson:e,onSignOut:t,themeMode:r="system",onThemeModeChange:s}){const[a,u]=J.useState([]),[d,f]=J.useState([]),[m,y]=J.useState(""),[E,T]=J.useState([]),[P,F]=J.useState({}),[M,U]=J.useState("");J.useEffect(()=>ju(Ja(Bs(ii,"aiEvents"),Fu("createdAt","desc"),Uu(20)),j=>u(j.docs.map(we=>({id:we.id,...we.data()})))),[]),J.useEffect(()=>{n.role==="manager"&&(ar.listJobs().then(j=>f(j.jobs||[])).catch(j=>y(xd(j,"hàng đợi AI"))),ar.listUsers().then(j=>T(j.users||[])).catch(()=>{}))},[n.role]);const K=a.filter(j=>(j.mentions||[]).includes(n.id)).find(j=>j.museRepliedAt),te=d.filter(j=>j.deadLetter);return I.jsxs("div",{children:[I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:n.name}),I.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),I.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),I.jsxs("div",{className:"muted",children:["Muse của bạn: ",K?`đã phản hồi lần cuối ${ko(K.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),I.jsx("div",{className:"row",style:{marginTop:10},children:I.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Giao diện"}),I.jsx("div",{className:"segmented",role:"group","aria-label":"Chọn giao diện",children:mV.map(j=>{const we=r===j.value;return I.jsx("button",{type:"button",className:we?"selected":"","aria-pressed":we,onClick:()=>s&&s(j.value),children:j.label},j.value)})}),I.jsx("div",{className:"muted",style:{marginTop:8},children:"Theo hệ thống: tự đổi sáng/tối theo chế độ của điện thoại/máy tính."})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Kênh Telegram"}),I.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),I.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),I.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),I.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),E.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),E.map(j=>I.jsxs("div",{className:"form-field",style:{marginBottom:8},children:[I.jsxs("label",{htmlFor:`tg-${j.id}`,children:[j.name," — chat_id Telegram"]}),I.jsxs("div",{className:"row",children:[I.jsx("input",{id:`tg-${j.id}`,value:P[j.id]!==void 0?P[j.id]:j.telegramChatId||"",onChange:we=>F({...P,[j.id]:we.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),I.jsx("button",{onClick:async()=>{await ar.setTelegramChatId(j.id,P[j.id]!==void 0?P[j.id]:j.telegramChatId||""),U(`Đã lưu chat_id của ${j.name}.`),ar.listUsers().then(we=>T(we.users||[]))},children:"Lưu"})]})]},j.id)),M&&I.jsx("div",{className:"muted",children:M})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),m&&I.jsx("div",{className:"err",children:m}),d.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),te.length>0&&I.jsxs("div",{className:"err",children:["Có ",te.length," job vào dead-letter (gửi thất bại nhiều lần): ",te.map(j=>j.eventId).join(", ")]}),d.slice(0,20).map(j=>I.jsxs("div",{className:"muted",children:[j.eventId," → ",Yr(j.recipientId),": ",j.status," (lần thử ",j.attempt,")",j.lastError?` — ${j.lastError}`:""]},j.jobId))]})]})}const Pa={chat:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M9 11l3 3L22 4"}),I.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),I.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),I.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),menu:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),I.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),I.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),moon:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),sun:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"12",cy:"12",r:"4"}),I.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),I.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),I.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),I.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),I.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),I.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),I.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),I.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},bT=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function DT({p:n,online:e,lastSeen:t,lastMsg:r,task:s,isAi:a,onSelect:u}){const d=r&&r.content||"";return I.jsxs("li",{className:"member-row-btn",role:"button",tabIndex:0,onClick:()=>u&&u(n),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&u&&(f.preventDefault(),u(n))},title:`Xem thông tin ${n.name}`,children:[I.jsxs("span",{className:"avatar-wrap",children:[I.jsx("span",{className:"avatar sm",style:{backgroundColor:bs(n.id),color:"#fff"},children:n.name.charAt(0)}),I.jsx("span",{className:e?"online-dot":"offline-dot"})]}),I.jsxs("span",{className:"side-person",children:[I.jsxs("span",{className:"side-name",children:[n.name," ",I.jsxs("span",{className:"side-role",children:["· ",n.roleVi]})]}),I.jsx("span",{className:`side-status${e?" online":""}`,children:e?"Đang online":t?`Hoạt động lần cuối ${UC(t)}`:"Chưa có dữ liệu hoạt động"}),r?I.jsxs("span",{className:"side-last",children:["“",d.slice(0,48),d.length>48?"…":"","” · ",Nd(r.createdAt)]}):I.jsx("span",{className:"side-last",children:"Chưa có tin nhắn gần đây"}),s&&I.jsxs("span",{className:"side-task",children:["Đang làm: ",s]})]})]})}function _V(){const[n,e]=J.useState(null),[t,r]=J.useState(!1),s=J.useRef(!1),[a,u]=J.useState(null),[d,f]=J.useState("chat"),[m,y]=J.useState({}),[E,T]=J.useState(0),[P,F]=J.useState(!1),[M,U]=J.useState({}),[ae,K]=J.useState({}),[te,j]=J.useState(null),[we,me]=J.useState(()=>mu()||"system"),[N,C]=J.useState(()=>document.documentElement.dataset.theme||Hh(mu()||"system"));function k(se){const Z=se==="dark"||se==="light"||se==="system"?se:"system",G=Hh(Z);me(Z),C(G),qh(G),KM(Z)}function b(){k(N==="dark"?"light":"dark")}J.useEffect(()=>{const se=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,Z=()=>{const le=mu();if(le==="light"||le==="dark")return;const re=jC();qh(re),C(re)},G=le=>{if(le.key!==null&&le.key!==W_)return;const re=mu()||"system",V=Hh(re);me(re),qh(V),C(V)};return se&&(se.addEventListener?se.addEventListener("change",Z):se.addListener&&se.addListener(Z)),window.addEventListener("storage",G),()=>{se&&(se.removeEventListener?se.removeEventListener("change",Z):se.removeListener&&se.removeListener(Z)),window.removeEventListener("storage",G)}},[]),J.useEffect(()=>U1(rl,async se=>{if(s.current||(s.current=!0,r(!0)),e(se),!se){u(null);return}const Z=(se.email||"").toLowerCase();let G=null;try{const le=Ja(Bs(ii,"users"),aS("email","==",Z)),re=await oD(le);if(!re.empty){const V=re.docs[0].data();G=xs.find(Q=>Q.id===V.id)||{id:V.id,name:V.name||Z,role:V.role||"staff",roleVi:V.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!G&&Z==="teddyssk559@gmail.com"&&(G=xs.find(le=>le.id==="chung")),G||(G={id:se.uid,name:se.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(G)}),[]),J.useEffect(()=>{if(!n||!a)return;const se=wT(kT,`presence/${n.uid}`),Z=()=>TT(se,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(re=>console.error("Presence write failed:",re));Z(),pL(se).remove().catch(re=>console.error("Presence onDisconnect failed:",re));const G=setInterval(Z,6e4),le=gL(wT(kT,"presence"),re=>y(re.val()||{}),re=>console.error("Presence read failed:",re));return()=>{clearInterval(G),le(),TT(se,null).catch(re=>console.error("Presence clear failed:",re))}},[n,a]);const D=J.useMemo(()=>{const se={};for(const Z of Object.values(m||{})){if(!Z||!Z.personId)continue;const G=typeof Z.lastSeen=="number"?Z.lastSeen:Date.parse(Z.lastSeen||"");se[Z.personId]=Z.online===!0&&Number.isFinite(G)&&Date.now()-G<12e4}return se},[m]),L=J.useMemo(()=>{const se={};for(const Z of Object.values(m||{})){if(!Z||!Z.personId)continue;const G=typeof Z.lastSeen=="number"?Z.lastSeen:Date.parse(Z.lastSeen||"");Number.isFinite(G)&&(se[Z.personId]=G)}return se},[m]);if(J.useEffect(()=>{if(n)return ju(Ja(Bs(ii,"messages"),Fu("createdAt","desc"),Uu(60)),se=>{const Z={};for(const G of se.docs){const le=G.data();le&&le.senderId&&!Z[le.senderId]&&(Z[le.senderId]={content:le.content||"",createdAt:le.createdAt})}U(Z)},()=>{})},[n]),J.useEffect(()=>{if(!n)return;let se=!1;return ar.listTasks("").then(Z=>{if(se)return;const G={};for(const le of Z.tasks||[])if(le.status==="in_progress")for(const re of le.assignees||[])G[re]||(G[re]=le.title);K(G)}).catch(()=>{}),()=>{se=!0}},[n]),!t)return I.jsx("div",{className:"app",children:I.jsxs("div",{className:"loading",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})});if(!n)return I.jsx(QM,{});if(!a)return I.jsx("div",{className:"app",children:I.jsx("div",{className:"content",children:I.jsx("div",{className:"main",children:I.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})});const A=xs.filter(se=>se.id!=="muse"),$e=A.filter(se=>D[se.id]).length,tt={id:"muse",name:"Muse",roleVi:"AI điều phối"};return I.jsxs("div",{className:`app${d==="chat"?" app-chat":""}`,children:[I.jsxs("aside",{className:`sidebar${P?" open":""}`,children:[I.jsxs("div",{className:"side-brand",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]}),I.jsx("button",{type:"button",className:"drawer-close","aria-label":"Đóng menu",onClick:()=>F(!1),children:Pa.close})]}),I.jsx("nav",{className:"side-nav",children:bT.map(se=>I.jsxs("button",{className:d===se.id?"active":"",onClick:()=>{f(se.id),F(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[Pa[se.id],se.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:se.label})]},se.id))}),I.jsx("div",{className:"side-section",children:"Thành viên · Hoạt động"}),I.jsxs("ul",{className:"side-people",children:[A.map(se=>I.jsx(DT,{p:se,online:!!D[se.id],lastSeen:L[se.id],lastMsg:M[se.id],task:ae[se.id],onSelect:j},se.id)),I.jsx(DT,{p:tt,isAi:!0,online:!0,lastSeen:L.muse,lastMsg:M.muse,task:ae.muse,onSelect:j})]}),I.jsxs("div",{className:"side-user",children:[I.jsx("span",{className:"avatar",style:{backgroundColor:bs(a.id),color:"#fff"},children:a.name.charAt(0)}),I.jsxs("div",{children:[I.jsx("div",{className:"side-name",children:a.name}),I.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),P&&I.jsx("div",{className:"drawer-backdrop",onClick:()=>F(!1)}),I.jsxs("div",{className:"content",children:[I.jsxs("header",{className:"header",children:[I.jsx("button",{type:"button",className:"menu-btn","aria-label":"Mở menu",onClick:()=>F(!0),children:Pa.menu}),I.jsxs("div",{className:"chat-peer",onClick:()=>F(!0),title:"Mở menu",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{className:"peer-info",children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsxs("div",{className:"peer-status",children:[A.length," thành viên",$e>0&&I.jsxs("span",{className:"online-count",children:[" · ",$e," đang online"]})]})]})]}),I.jsx("button",{type:"button",className:"header-avatars",onClick:()=>F(!0),"aria-label":"Mở danh sách thành viên",title:"Danh sách thành viên",children:A.map(se=>I.jsxs("span",{className:"avatar-wrap",title:`${se.name} — ${D[se.id]?"đang online":"offline"}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:bs(se.id),color:"#fff"},children:se.name.charAt(0)}),I.jsx("span",{className:D[se.id]?"online-dot":"offline-dot"})]},se.id))}),I.jsx("button",{type:"button",className:"theme-btn",onClick:b,"aria-label":N==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối",title:N==="dark"?"Giao diện sáng":"Giao diện tối",children:N==="dark"?Pa.sun:Pa.moon})]}),I.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&I.jsx(oV,{person:a}),d==="tasks"&&I.jsx(hV,{person:a}),d==="notifs"&&I.jsx(pV,{person:a,onUnread:T}),d==="account"&&I.jsx(gV,{person:a,onlineByPerson:D,onSignOut:()=>j1(rl),themeMode:we,onThemeModeChange:k})]})]}),I.jsx("nav",{className:"nav",children:bT.map(se=>I.jsxs("button",{className:d===se.id?"active":"",onClick:()=>{f(se.id),F(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[Pa[se.id],se.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:se.label})]},se.id))}),te&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>j(null),children:I.jsxs("div",{className:"member-detail",onClick:se=>se.stopPropagation(),role:"dialog","aria-label":`Thông tin ${te.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:bs(te.id),color:"#fff"},children:te.name.charAt(0)}),I.jsx("h3",{children:te.name}),I.jsxs("div",{className:"muted",children:[te.roleVi," · ID: ",te.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:te.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":D[te.id]?"Đang online.":L[te.id]?`Hoạt động lần cuối ${UC(L[te.id])}.`:"Chưa có dữ liệu hoạt động."}),M[te.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Tin mới nhất: “",(M[te.id].content||"").slice(0,80),"” · ",Nd(M[te.id].createdAt)]}),ae[te.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Đang làm: ",ae[te.id]]}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsx("button",{type:"button",onClick:()=>{j(null),F(!1),f("chat")},children:"Nhắn trong phòng"}),I.jsx("button",{type:"button",onClick:()=>j(null),children:"Đóng"})]})]})})]})}GM();eA.createRoot(document.getElementById("root")).render(I.jsx(GR.StrictMode,{children:I.jsx(_V,{})}));
