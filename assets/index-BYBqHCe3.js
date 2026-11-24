(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function ST(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fp={exports:{}},Xl={},Up={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function PR(){if(Wv)return xe;Wv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,W={};function U(V,M,te){this.props=V,this.context=M,this.refs=W,this.updater=te||P}U.prototype.isReactComponent={},U.prototype.setState=function(V,M){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,M,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function J(){}J.prototype=U.prototype;function H(V,M,te){this.props=V,this.context=M,this.refs=W,this.updater=te||P}var re=H.prototype=new J;re.constructor=H,x(re,U.prototype),re.isPureReactComponent=!0;var G=Array.isArray,Ae=Object.prototype.hasOwnProperty,me={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(V,M,te){var Se,ke={},Ve=null,We=null;if(M!=null)for(Se in M.ref!==void 0&&(We=M.ref),M.key!==void 0&&(Ve=""+M.key),M)Ae.call(M,Se)&&!D.hasOwnProperty(Se)&&(ke[Se]=M[Se]);var $e=arguments.length-2;if($e===1)ke.children=te;else if(1<$e){for(var Je=Array($e),Lt=0;Lt<$e;Lt++)Je[Lt]=arguments[Lt+2];ke.children=Je}if(V&&V.defaultProps)for(Se in $e=V.defaultProps,$e)ke[Se]===void 0&&(ke[Se]=$e[Se]);return{$$typeof:n,type:V,key:Ve,ref:We,props:ke,_owner:me.current}}function k(V,M){return{$$typeof:n,type:V.type,key:M,ref:V.ref,props:V.props,_owner:V._owner}}function O(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function L(V){var M={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(te){return M[te]})}var F=/\/+/g;function A(V,M){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):M.toString(36)}function ot(V,M,te,Se,ke){var Ve=typeof V;(Ve==="undefined"||Ve==="boolean")&&(V=null);var We=!1;if(V===null)We=!0;else switch(Ve){case"string":case"number":We=!0;break;case"object":switch(V.$$typeof){case n:case e:We=!0}}if(We)return We=V,ke=ke(We),V=Se===""?"."+A(We,0):Se,G(ke)?(te="",V!=null&&(te=V.replace(F,"$&/")+"/"),ot(ke,M,te,"",function(Lt){return Lt})):ke!=null&&(O(ke)&&(ke=k(ke,te+(!ke.key||We&&We.key===ke.key?"":(""+ke.key).replace(F,"$&/")+"/")+V)),M.push(ke)),1;if(We=0,Se=Se===""?".":Se+":",G(V))for(var $e=0;$e<V.length;$e++){Ve=V[$e];var Je=Se+A(Ve,$e);We+=ot(Ve,M,te,Je,ke)}else if(Je=T(V),typeof Je=="function")for(V=Je.call(V),$e=0;!(Ve=V.next()).done;)Ve=Ve.value,Je=Se+A(Ve,$e++),We+=ot(Ve,M,te,Je,ke);else if(Ve==="object")throw M=String(V),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return We}function dt(V,M,te){if(V==null)return V;var Se=[],ke=0;return ot(V,Se,"","",function(Ve){return M.call(te,Ve,ke++)}),Se}function kt(V){if(V._status===-1){var M=V._result;M=M(),M.then(function(te){(V._status===0||V._status===-1)&&(V._status=1,V._result=te)},function(te){(V._status===0||V._status===-1)&&(V._status=2,V._result=te)}),V._status===-1&&(V._status=0,V._result=M)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},se={transition:null},ge={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:se,ReactCurrentOwner:me};function ae(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:dt,forEach:function(V,M,te){dt(V,function(){M.apply(this,arguments)},te)},count:function(V){var M=0;return dt(V,function(){M++}),M},toArray:function(V){return dt(V,function(M){return M})||[]},only:function(V){if(!O(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xe.Component=U,xe.Fragment=t,xe.Profiler=s,xe.PureComponent=H,xe.StrictMode=r,xe.Suspense=f,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,xe.act=ae,xe.cloneElement=function(V,M,te){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=x({},V.props),ke=V.key,Ve=V.ref,We=V._owner;if(M!=null){if(M.ref!==void 0&&(Ve=M.ref,We=me.current),M.key!==void 0&&(ke=""+M.key),V.type&&V.type.defaultProps)var $e=V.type.defaultProps;for(Je in M)Ae.call(M,Je)&&!D.hasOwnProperty(Je)&&(Se[Je]=M[Je]===void 0&&$e!==void 0?$e[Je]:M[Je])}var Je=arguments.length-2;if(Je===1)Se.children=te;else if(1<Je){$e=Array(Je);for(var Lt=0;Lt<Je;Lt++)$e[Lt]=arguments[Lt+2];Se.children=$e}return{$$typeof:n,type:V.type,key:ke,ref:Ve,props:Se,_owner:We}},xe.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},xe.createElement=S,xe.createFactory=function(V){var M=S.bind(null,V);return M.type=V,M},xe.createRef=function(){return{current:null}},xe.forwardRef=function(V){return{$$typeof:d,render:V}},xe.isValidElement=O,xe.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:kt}},xe.memo=function(V,M){return{$$typeof:m,type:V,compare:M===void 0?null:M}},xe.startTransition=function(V){var M=se.transition;se.transition={};try{V()}finally{se.transition=M}},xe.unstable_act=ae,xe.useCallback=function(V,M){return ze.current.useCallback(V,M)},xe.useContext=function(V){return ze.current.useContext(V)},xe.useDebugValue=function(){},xe.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},xe.useEffect=function(V,M){return ze.current.useEffect(V,M)},xe.useId=function(){return ze.current.useId()},xe.useImperativeHandle=function(V,M,te){return ze.current.useImperativeHandle(V,M,te)},xe.useInsertionEffect=function(V,M){return ze.current.useInsertionEffect(V,M)},xe.useLayoutEffect=function(V,M){return ze.current.useLayoutEffect(V,M)},xe.useMemo=function(V,M){return ze.current.useMemo(V,M)},xe.useReducer=function(V,M,te){return ze.current.useReducer(V,M,te)},xe.useRef=function(V){return ze.current.useRef(V)},xe.useState=function(V){return ze.current.useState(V)},xe.useSyncExternalStore=function(V,M,te){return ze.current.useSyncExternalStore(V,M,te)},xe.useTransition=function(){return ze.current.useTransition()},xe.version="18.3.1",xe}var $v;function tg(){return $v||($v=1,Up.exports=PR()),Up.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function NR(){if(qv)return Xl;qv=1;var n=tg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,E={},T=null,P=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(P=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:P,props:E,_owner:s.current}}return Xl.Fragment=t,Xl.jsx=u,Xl.jsxs=u,Xl}var Hv;function xR(){return Hv||(Hv=1,Fp.exports=NR()),Fp.exports}var R=xR(),de=tg();const DR=ST(de);var _h={},jp={exports:{}},vn={},Bp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function OR(){return Gv||(Gv=1,(function(n){function e(se,ge){var ae=se.length;se.push(ge);e:for(;0<ae;){var V=ae-1>>>1,M=se[V];if(0<s(M,ge))se[V]=ge,se[ae]=M,ae=V;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var ge=se[0],ae=se.pop();if(ae!==ge){se[0]=ae;e:for(var V=0,M=se.length,te=M>>>1;V<te;){var Se=2*(V+1)-1,ke=se[Se],Ve=Se+1,We=se[Ve];if(0>s(ke,ae))Ve<M&&0>s(We,ke)?(se[V]=We,se[Ve]=ae,V=Ve):(se[V]=ke,se[Se]=ae,V=Se);else if(Ve<M&&0>s(We,ae))se[V]=We,se[Ve]=ae,V=Ve;else break e}}return ge}function s(se,ge){var ae=se.sortIndex-ge.sortIndex;return ae!==0?ae:se.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,E=null,T=3,P=!1,x=!1,W=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(se){for(var ge=t(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=se)r(m),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(m)}}function G(se){if(W=!1,re(se),!x)if(t(f)!==null)x=!0,kt(Ae);else{var ge=t(m);ge!==null&&ze(G,ge.startTime-se)}}function Ae(se,ge){x=!1,W&&(W=!1,J(S),S=-1),P=!0;var ae=T;try{for(re(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||se&&!L());){var V=E.callback;if(typeof V=="function"){E.callback=null,T=E.priorityLevel;var M=V(E.expirationTime<=ge);ge=n.unstable_now(),typeof M=="function"?E.callback=M:E===t(f)&&r(f),re(ge)}else r(f);E=t(f)}if(E!==null)var te=!0;else{var Se=t(m);Se!==null&&ze(G,Se.startTime-ge),te=!1}return te}finally{E=null,T=ae,P=!1}}var me=!1,D=null,S=-1,k=5,O=-1;function L(){return!(n.unstable_now()-O<k)}function F(){if(D!==null){var se=n.unstable_now();O=se;var ge=!0;try{ge=D(!0,se)}finally{ge?A():(me=!1,D=null)}}else me=!1}var A;if(typeof H=="function")A=function(){H(F)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=F,A=function(){dt.postMessage(null)}}else A=function(){U(F,0)};function kt(se){D=se,me||(me=!0,A())}function ze(se,ge){S=U(function(){se(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){x||P||(x=!0,kt(Ae))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(se){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var ae=T;T=ge;try{return se()}finally{T=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ge){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ae=T;T=se;try{return ge()}finally{T=ae}},n.unstable_scheduleCallback=function(se,ge,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,se){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=ae+M,se={id:v++,callback:ge,priorityLevel:se,startTime:ae,expirationTime:M,sortIndex:-1},ae>V?(se.sortIndex=ae,e(m,se),t(f)===null&&se===t(m)&&(W?(J(S),S=-1):W=!0,ze(G,ae-V))):(se.sortIndex=M,e(f,se),x||P||(x=!0,kt(Ae))),se},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(se){var ge=T;return function(){var ae=T;T=ge;try{return se.apply(this,arguments)}finally{T=ae}}}})(zp)),zp}var Kv;function bR(){return Kv||(Kv=1,Bp.exports=OR()),Bp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function LR(){if(Qv)return vn;Qv=1;var n=tg(),e=bR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function T(i){return f.call(E,i)?!0:f.call(v,i)?!1:m.test(i)?E[i]=!0:(v[i]=!0,!1)}function P(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function x(i,o,l,h){if(o===null||typeof o>"u"||P(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function W(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){U[i]=new W(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];U[o]=new W(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){U[i]=new W(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){U[i]=new W(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){U[i]=new W(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){U[i]=new W(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){U[i]=new W(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){U[i]=new W(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){U[i]=new W(i,5,!1,i.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function H(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(J,H);U[o]=new W(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(J,H);U[o]=new W(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(J,H);U[o]=new W(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){U[i]=new W(i,1,!1,i.toLowerCase(),null,!1,!1)}),U.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){U[i]=new W(i,1,!1,i.toLowerCase(),null,!0,!0)});function re(i,o,l,h){var p=U.hasOwnProperty(o)?U[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var G=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ae=Symbol.for("react.element"),me=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),se=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=se&&i[se]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,V;function M(i){if(V===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+i}var te=!1;function Se(i,o){if(!i||te)return"";te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var h=$}Reflect.construct(i,[],o)}else{try{o.call()}catch($){h=$}i.call(o.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,C=_.length-1;1<=w&&0<=C&&p[w]!==_[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==_[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==_[C]){var N=`
`+p[w].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=w&&0<=C);break}}}finally{te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?M(i):""}function ke(i){switch(i.tag){case 5:return M(i.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return i=Se(i.type,!1),i;case 11:return i=Se(i.type.render,!1),i;case 1:return i=Se(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case me:return"Portal";case k:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case ot:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case L:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case F:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case dt:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case kt:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function We(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Lt(i){var o=Je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function jr(i){i._valueTracker||(i._valueTracker=Lt(i))}function To(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Je(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Ii(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ss(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Io(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function rl(i,o){o=o.checked,o!=null&&re(i,"checked",o,!1)}function il(i,o){rl(i,o);var l=$e(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?So(i,o.type,l):o.hasOwnProperty("defaultValue")&&So(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function nc(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function So(i,o,l){(o!=="number"||Ii(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Br=Array.isArray;function zr(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function sl(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Co(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Br(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function Ro(i,o){var l=$e(o.value),h=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ol(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Pt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Pt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Wr,al=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Wr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Si(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rs=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(i){Rs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Cs[o]=Cs[i]})});function ll(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Cs.hasOwnProperty(i)&&Cs[i]?(""+o).trim():o+"px"}function ul(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=ll(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var cl=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(i,o){if(o){if(cl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function dl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Ao(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ko=null,Ln=null,gr=null;function Po(i){if(i=Ml(i)){if(typeof ko!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Dc(o),ko(i.stateNode,i.type,o))}}function _r(i){Ln?gr?gr.push(i):gr=[i]:Ln=i}function fl(){if(Ln){var i=Ln,o=gr;if(gr=Ln=null,Po(i),o)for(i=0;i<o.length;i++)Po(o[i])}}function ks(i,o){return i(o)}function pl(){}var $r=!1;function ml(i,o,l){if($r)return i(o,l);$r=!0;try{return ks(i,o,l)}finally{$r=!1,(Ln!==null||gr!==null)&&(pl(),fl())}}function gt(i,o){var l=i.stateNode;if(l===null)return null;var h=Dc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var No=!1;if(d)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){No=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{No=!1}function Ps(i,o,l,h,p,_,w,C,N){var $=Array.prototype.slice.call(arguments,3);try{o.apply(l,$)}catch(X){this.onError(X)}}var Ns=!1,xo=null,Qn=!1,gl=null,df={onError:function(i){Ns=!0,xo=i}};function Do(i,o,l,h,p,_,w,C,N){Ns=!1,xo=null,Ps.apply(df,arguments)}function rc(i,o,l,h,p,_,w,C,N){if(Do.apply(this,arguments),Ns){if(Ns){var $=xo;Ns=!1,xo=null}else throw Error(t(198));Qn||(Qn=!0,gl=$)}}function Yn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function xs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Xn(i){if(Yn(i)!==i)throw Error(t(188))}function ic(i){var o=i.alternate;if(!o){if(o=Yn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Xn(p),i;if(_===h)return Xn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,C=p.child;C;){if(C===l){w=!0,l=p,h=_;break}if(C===h){w=!0,h=p,l=_;break}C=C.sibling}if(!w){for(C=_.child;C;){if(C===l){w=!0,l=_,h=p;break}if(C===h){w=!0,h=_,l=p;break}C=C.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function _l(i){return i=ic(i),i!==null?Oo(i):null}function Oo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Oo(i);if(o!==null)return o;i=i.sibling}return null}var bo=e.unstable_scheduleCallback,yl=e.unstable_cancelCallback,sc=e.unstable_shouldYield,ff=e.unstable_requestPaint,Ze=e.unstable_now,oc=e.unstable_getCurrentPriorityLevel,Ds=e.unstable_ImmediatePriority,Ci=e.unstable_UserBlockingPriority,Mn=e.unstable_NormalPriority,vl=e.unstable_LowPriority,ac=e.unstable_IdlePriority,Os=null,Cn=null;function lc(i){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Os,i,void 0,(i.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:cc,El=Math.log,uc=Math.LN2;function cc(i){return i>>>=0,i===0?32:31-(El(i)/uc|0)|0}var Lo=64,Mo=4194304;function Ri(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function bs(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var C=w&~p;C!==0?h=Ri(C):(_&=w,_!==0&&(h=Ri(_)))}else w=l&~p,w!==0?h=Ri(w):_!==0&&(h=Ri(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-an(o),p=1<<l,h|=i[l],o&=~p;return h}function pf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-an(_),C=1<<w,N=p[w];N===-1?((C&l)===0||(C&h)!==0)&&(p[w]=pf(C,o)):N<=o&&(i.expiredLanes|=C),_&=~C}}function Rn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ls(){var i=Lo;return Lo<<=1,(Lo&4194240)===0&&(Lo=64),i}function Ai(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function ki(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-an(o),i[o]=l}function Ye(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-an(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Pi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-an(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Me=0;function Ni(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var hc,Vo,dc,fc,pc,wl=!1,yr=[],$t=null,Jn=null,Zn=null,xi=new Map,Vn=new Map,vr=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(i,o){switch(i){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":xi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(o.pointerId)}}function dn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Ml(o),o!==null&&Vo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function gf(i,o,l,h,p){switch(o){case"focusin":return $t=dn($t,i,o,l,h,p),!0;case"dragenter":return Jn=dn(Jn,i,o,l,h,p),!0;case"mouseover":return Zn=dn(Zn,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return xi.set(_,dn(xi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Vn.set(_,dn(Vn.get(_)||null,i,o,l,h,p)),!0}return!1}function gc(i){var o=js(i.target);if(o!==null){var l=Yn(o);if(l!==null){if(o=l.tag,o===13){if(o=xs(l),o!==null){i.blockedOn=o,pc(i.priority,function(){dc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Hr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Fo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);As=h,l.target.dispatchEvent(h),As=null}else return o=Ml(l),o!==null&&Vo(o),i.blockedOn=l,!1;o.shift()}return!0}function Ms(i,o,l){Hr(i)&&l.delete(o)}function _c(){wl=!1,$t!==null&&Hr($t)&&($t=null),Jn!==null&&Hr(Jn)&&(Jn=null),Zn!==null&&Hr(Zn)&&(Zn=null),xi.forEach(Ms),Vn.forEach(Ms)}function er(i,o){i.blockedOn===o&&(i.blockedOn=null,wl||(wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_c)))}function tr(i){function o(p){return er(p,i)}if(0<yr.length){er(yr[0],i);for(var l=1;l<yr.length;l++){var h=yr[l];h.blockedOn===i&&(h.blockedOn=null)}}for($t!==null&&er($t,i),Jn!==null&&er(Jn,i),Zn!==null&&er(Zn,i),xi.forEach(o),Vn.forEach(o),l=0;l<vr.length;l++)h=vr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)gc(l),l.blockedOn===null&&vr.shift()}var Gr=G.ReactCurrentBatchConfig,Di=!0;function at(i,o,l,h){var p=Me,_=Gr.transition;Gr.transition=null;try{Me=1,Tl(i,o,l,h)}finally{Me=p,Gr.transition=_}}function _f(i,o,l,h){var p=Me,_=Gr.transition;Gr.transition=null;try{Me=4,Tl(i,o,l,h)}finally{Me=p,Gr.transition=_}}function Tl(i,o,l,h){if(Di){var p=Fo(i,o,l,h);if(p===null)kf(i,o,h,Vs,l),mc(i,h);else if(gf(p,i,o,l,h))h.stopPropagation();else if(mc(i,h),o&4&&-1<mf.indexOf(i)){for(;p!==null;){var _=Ml(p);if(_!==null&&hc(_),_=Fo(i,o,l,h),_===null&&kf(i,o,h,Vs,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else kf(i,o,h,null,l)}}var Vs=null;function Fo(i,o,l,h){if(Vs=null,i=Ao(h),i=js(i),i!==null)if(o=Yn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=xs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Vs=i,null}function Il(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oc()){case Ds:return 1;case Ci:return 4;case Mn:case vl:return 16;case ac:return 536870912;default:return 16}default:return 16}}var An=null,Uo=null,fn=null;function Sl(){if(fn)return fn;var i,o=Uo,l=o.length,h,p="value"in An?An.value:An.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return fn=p.slice(i,1<h?1-h:void 0)}function jo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Er(){return!0}function Cl(){return!1}function qt(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(l=i[C],this[C]=l?l(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Er:Cl,this.isPropagationStopped=Cl,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),o}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=qt(nr),wr=ae({},nr,{view:0,detail:0}),yf=qt(wr),zo,Kr,Oi,Fs=ae({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Oi&&(Oi&&i.type==="mousemove"?(zo=i.screenX-Oi.screenX,Kr=i.screenY-Oi.screenY):Kr=zo=0,Oi=i),zo)},movementY:function(i){return"movementY"in i?i.movementY:Kr}}),Wo=qt(Fs),Rl=ae({},Fs,{dataTransfer:0}),yc=qt(Rl),$o=ae({},wr,{relatedTarget:0}),qo=qt($o),vc=ae({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qr=qt(vc),Ec=ae({},nr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),wc=qt(Ec),Tc=ae({},nr,{data:0}),Al=qt(Tc),Ho={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Ic[i])?!!o[i]:!1}function Tr(){return Sc}var c=ae({},wr,{key:function(i){if(i.key){var o=Ho[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=jo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ln[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(i){return i.type==="keypress"?jo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?jo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=qt(c),y=ae({},Fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=qt(y),j=ae({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),q=qt(j),ie=ae({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ke=qt(ie),xt=ae({},Fs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=qt(xt),Mt=[9,13,27,32],Et=d&&"CompositionEvent"in window,Fn=null;d&&"documentMode"in document&&(Fn=document.documentMode);var kn=d&&"TextEvent"in window&&!Fn,Us=d&&(!Et||Fn&&8<Fn&&11>=Fn),Go=" ",V_=!1;function F_(i,o){switch(i){case"keyup":return Mt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ko=!1;function RC(i,o){switch(i){case"compositionend":return U_(o);case"keypress":return o.which!==32?null:(V_=!0,Go);case"textInput":return i=o.data,i===Go&&V_?null:i;default:return null}}function AC(i,o){if(Ko)return i==="compositionend"||!Et&&F_(i,o)?(i=Sl(),fn=Uo=An=null,Ko=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Us&&o.locale!=="ko"?null:o.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!kC[i.type]:o==="textarea"}function B_(i,o,l,h){_r(h),o=Pc(o,"onChange"),0<o.length&&(l=new Bo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var kl=null,Pl=null;function PC(i){sy(i,0)}function Cc(i){var o=Zo(i);if(To(o))return i}function NC(i,o){if(i==="change")return o}var z_=!1;if(d){var vf;if(d){var Ef="oninput"in document;if(!Ef){var W_=document.createElement("div");W_.setAttribute("oninput","return;"),Ef=typeof W_.oninput=="function"}vf=Ef}else vf=!1;z_=vf&&(!document.documentMode||9<document.documentMode)}function $_(){kl&&(kl.detachEvent("onpropertychange",q_),Pl=kl=null)}function q_(i){if(i.propertyName==="value"&&Cc(Pl)){var o=[];B_(o,Pl,i,Ao(i)),ml(PC,o)}}function xC(i,o,l){i==="focusin"?($_(),kl=o,Pl=l,kl.attachEvent("onpropertychange",q_)):i==="focusout"&&$_()}function DC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Cc(Pl)}function OC(i,o){if(i==="click")return Cc(o)}function bC(i,o){if(i==="input"||i==="change")return Cc(o)}function LC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var rr=typeof Object.is=="function"?Object.is:LC;function Nl(i,o){if(rr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!rr(i[p],o[p]))return!1}return!0}function H_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function G_(i,o){var l=H_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=H_(l)}}function K_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?K_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Q_(){for(var i=window,o=Ii();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Ii(i.document)}return o}function wf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function MC(i){var o=Q_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&K_(l.ownerDocument.documentElement,l)){if(h!==null&&wf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=G_(l,_);var w=G_(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var VC=d&&"documentMode"in document&&11>=document.documentMode,Qo=null,Tf=null,xl=null,If=!1;function Y_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;If||Qo==null||Qo!==Ii(h)||(h=Qo,"selectionStart"in h&&wf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),xl&&Nl(xl,h)||(xl=h,h=Pc(Tf,"onSelect"),0<h.length&&(o=new Bo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Qo)))}function Rc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Yo={animationend:Rc("Animation","AnimationEnd"),animationiteration:Rc("Animation","AnimationIteration"),animationstart:Rc("Animation","AnimationStart"),transitionend:Rc("Transition","TransitionEnd")},Sf={},X_={};d&&(X_=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function Ac(i){if(Sf[i])return Sf[i];if(!Yo[i])return i;var o=Yo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in X_)return Sf[i]=o[l];return i}var J_=Ac("animationend"),Z_=Ac("animationiteration"),ey=Ac("animationstart"),ty=Ac("transitionend"),ny=new Map,ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(i,o){ny.set(i,o),a(o,[i])}for(var Cf=0;Cf<ry.length;Cf++){var Rf=ry[Cf],FC=Rf.toLowerCase(),UC=Rf[0].toUpperCase()+Rf.slice(1);bi(FC,"on"+UC)}bi(J_,"onAnimationEnd"),bi(Z_,"onAnimationIteration"),bi(ey,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ty,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function iy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,rc(h,o,void 0,i),i.currentTarget=null}function sy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var C=h[w],N=C.instance,$=C.currentTarget;if(C=C.listener,N!==_&&p.isPropagationStopped())break e;iy(p,C,$),_=N}else for(w=0;w<h.length;w++){if(C=h[w],N=C.instance,$=C.currentTarget,C=C.listener,N!==_&&p.isPropagationStopped())break e;iy(p,C,$),_=N}}}if(Qn)throw i=gl,Qn=!1,gl=null,i}function nt(i,o){var l=o[bf];l===void 0&&(l=o[bf]=new Set);var h=i+"__bubble";l.has(h)||(oy(o,i,2,!1),l.add(h))}function Af(i,o,l){var h=0;o&&(h|=4),oy(l,i,h,o)}var kc="_reactListening"+Math.random().toString(36).slice(2);function Ol(i){if(!i[kc]){i[kc]=!0,r.forEach(function(l){l!=="selectionchange"&&(jC.has(l)||Af(l,!1,i),Af(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[kc]||(o[kc]=!0,Af("selectionchange",!1,o))}}function oy(i,o,l,h){switch(Il(o)){case 1:var p=at;break;case 4:p=_f;break;default:p=Tl}l=p.bind(null,o,l,i),p=void 0,!No||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function kf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;w=w.return}for(;C!==null;){if(w=js(C),w===null)return;if(N=w.tag,N===5||N===6){h=_=w;continue e}C=C.parentNode}}h=h.return}ml(function(){var $=_,X=Ao(l),Z=[];e:{var Y=ny.get(i);if(Y!==void 0){var le=Bo,he=i;switch(i){case"keypress":if(jo(l)===0)break e;case"keydown":case"keyup":le=g;break;case"focusin":he="focus",le=qo;break;case"focusout":he="blur",le=qo;break;case"beforeblur":case"afterblur":le=qo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=yc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=q;break;case J_:case Z_:case ey:le=Qr;break;case ty:le=Ke;break;case"scroll":le=yf;break;case"wheel":le=Fe;break;case"copy":case"cut":case"paste":le=wc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=I}var fe=(o&4)!==0,_t=!fe&&i==="scroll",B=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var b=$,z;b!==null;){z=b;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,B!==null&&(ee=gt(b,B),ee!=null&&fe.push(bl(b,ee,z)))),_t)break;b=b.return}0<fe.length&&(Y=new le(Y,he,null,l,X),Z.push({event:Y,listeners:fe}))}}if((o&7)===0){e:{if(Y=i==="mouseover"||i==="pointerover",le=i==="mouseout"||i==="pointerout",Y&&l!==As&&(he=l.relatedTarget||l.fromElement)&&(js(he)||he[Yr]))break e;if((le||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,le?(he=l.relatedTarget||l.toElement,le=$,he=he?js(he):null,he!==null&&(_t=Yn(he),he!==_t||he.tag!==5&&he.tag!==6)&&(he=null)):(le=null,he=$),le!==he)){if(fe=Wo,ee="onMouseLeave",B="onMouseEnter",b="mouse",(i==="pointerout"||i==="pointerover")&&(fe=I,ee="onPointerLeave",B="onPointerEnter",b="pointer"),_t=le==null?Y:Zo(le),z=he==null?Y:Zo(he),Y=new fe(ee,b+"leave",le,l,X),Y.target=_t,Y.relatedTarget=z,ee=null,js(X)===$&&(fe=new fe(B,b+"enter",he,l,X),fe.target=z,fe.relatedTarget=_t,ee=fe),_t=ee,le&&he)t:{for(fe=le,B=he,b=0,z=fe;z;z=Xo(z))b++;for(z=0,ee=B;ee;ee=Xo(ee))z++;for(;0<b-z;)fe=Xo(fe),b--;for(;0<z-b;)B=Xo(B),z--;for(;b--;){if(fe===B||B!==null&&fe===B.alternate)break t;fe=Xo(fe),B=Xo(B)}fe=null}else fe=null;le!==null&&ay(Z,Y,le,fe,!1),he!==null&&_t!==null&&ay(Z,_t,he,fe,!0)}}e:{if(Y=$?Zo($):window,le=Y.nodeName&&Y.nodeName.toLowerCase(),le==="select"||le==="input"&&Y.type==="file")var pe=NC;else if(j_(Y))if(z_)pe=bC;else{pe=DC;var ye=xC}else(le=Y.nodeName)&&le.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(pe=OC);if(pe&&(pe=pe(i,$))){B_(Z,pe,l,X);break e}ye&&ye(i,Y,$),i==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&So(Y,"number",Y.value)}switch(ye=$?Zo($):window,i){case"focusin":(j_(ye)||ye.contentEditable==="true")&&(Qo=ye,Tf=$,xl=null);break;case"focusout":xl=Tf=Qo=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,Y_(Z,l,X);break;case"selectionchange":if(VC)break;case"keydown":case"keyup":Y_(Z,l,X)}var ve;if(Et)e:{switch(i){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Ko?F_(i,l)&&(Ie="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ie="onCompositionStart");Ie&&(Us&&l.locale!=="ko"&&(Ko||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Ko&&(ve=Sl()):(An=X,Uo="value"in An?An.value:An.textContent,Ko=!0)),ye=Pc($,Ie),0<ye.length&&(Ie=new Al(Ie,i,null,l,X),Z.push({event:Ie,listeners:ye}),ve?Ie.data=ve:(ve=U_(l),ve!==null&&(Ie.data=ve)))),(ve=kn?RC(i,l):AC(i,l))&&($=Pc($,"onBeforeInput"),0<$.length&&(X=new Al("onBeforeInput","beforeinput",null,l,X),Z.push({event:X,listeners:$}),X.data=ve))}sy(Z,o)})}function bl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Pc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=gt(i,l),_!=null&&h.unshift(bl(i,_,p)),_=gt(i,o),_!=null&&h.push(bl(i,_,p))),i=i.return}return h}function Xo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ay(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var C=l,N=C.alternate,$=C.stateNode;if(N!==null&&N===h)break;C.tag===5&&$!==null&&(C=$,p?(N=gt(l,_),N!=null&&w.unshift(bl(l,N,C))):p||(N=gt(l,_),N!=null&&w.push(bl(l,N,C)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var BC=/\r\n?/g,zC=/\u0000|\uFFFD/g;function ly(i){return(typeof i=="string"?i:""+i).replace(BC,`
`).replace(zC,"")}function Nc(i,o,l){if(o=ly(o),ly(i)!==o&&l)throw Error(t(425))}function xc(){}var Pf=null,Nf=null;function xf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,WC=typeof clearTimeout=="function"?clearTimeout:void 0,uy=typeof Promise=="function"?Promise:void 0,$C=typeof queueMicrotask=="function"?queueMicrotask:typeof uy<"u"?function(i){return uy.resolve(null).then(i).catch(qC)}:Df;function qC(i){setTimeout(function(){throw i})}function Of(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),tr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);tr(o)}function Li(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function cy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Ir="__reactFiber$"+Jo,Ll="__reactProps$"+Jo,Yr="__reactContainer$"+Jo,bf="__reactEvents$"+Jo,HC="__reactListeners$"+Jo,GC="__reactHandles$"+Jo;function js(i){var o=i[Ir];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Yr]||l[Ir]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=cy(i);i!==null;){if(l=i[Ir])return l;i=cy(i)}return o}i=l,l=i.parentNode}return null}function Ml(i){return i=i[Ir]||i[Yr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Zo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Dc(i){return i[Ll]||null}var Lf=[],ea=-1;function Mi(i){return{current:i}}function rt(i){0>ea||(i.current=Lf[ea],Lf[ea]=null,ea--)}function et(i,o){ea++,Lf[ea]=i.current,i.current=o}var Vi={},Xt=Mi(Vi),pn=Mi(!1),Bs=Vi;function ta(i,o){var l=i.type.contextTypes;if(!l)return Vi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function mn(i){return i=i.childContextTypes,i!=null}function Oc(){rt(pn),rt(Xt)}function hy(i,o,l){if(Xt.current!==Vi)throw Error(t(168));et(Xt,o),et(pn,l)}function dy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,We(i)||"Unknown",p));return ae({},l,h)}function bc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Vi,Bs=Xt.current,et(Xt,i),et(pn,pn.current),!0}function fy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=dy(i,o,Bs),h.__reactInternalMemoizedMergedChildContext=i,rt(pn),rt(Xt),et(Xt,i)):rt(pn),et(pn,l)}var Xr=null,Lc=!1,Mf=!1;function py(i){Xr===null?Xr=[i]:Xr.push(i)}function KC(i){Lc=!0,py(i)}function Fi(){if(!Mf&&Xr!==null){Mf=!0;var i=0,o=Me;try{var l=Xr;for(Me=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Xr=null,Lc=!1}catch(p){throw Xr!==null&&(Xr=Xr.slice(i+1)),bo(Ds,Fi),p}finally{Me=o,Mf=!1}}return null}var na=[],ra=0,Mc=null,Vc=0,Un=[],jn=0,zs=null,Jr=1,Zr="";function Ws(i,o){na[ra++]=Vc,na[ra++]=Mc,Mc=i,Vc=o}function my(i,o,l){Un[jn++]=Jr,Un[jn++]=Zr,Un[jn++]=zs,zs=i;var h=Jr;i=Zr;var p=32-an(h)-1;h&=~(1<<p),l+=1;var _=32-an(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Jr=1<<32-an(o)+p|l<<p|h,Zr=_+i}else Jr=1<<_|l<<p|h,Zr=i}function Vf(i){i.return!==null&&(Ws(i,1),my(i,1,0))}function Ff(i){for(;i===Mc;)Mc=na[--ra],na[ra]=null,Vc=na[--ra],na[ra]=null;for(;i===zs;)zs=Un[--jn],Un[jn]=null,Zr=Un[--jn],Un[jn]=null,Jr=Un[--jn],Un[jn]=null}var Pn=null,Nn=null,lt=!1,ir=null;function gy(i,o){var l=$n(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function _y(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Pn=i,Nn=Li(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Pn=i,Nn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=zs!==null?{id:Jr,overflow:Zr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=$n(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Pn=i,Nn=null,!0):!1;default:return!1}}function Uf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function jf(i){if(lt){var o=Nn;if(o){var l=o;if(!_y(i,o)){if(Uf(i))throw Error(t(418));o=Li(l.nextSibling);var h=Pn;o&&_y(i,o)?gy(h,l):(i.flags=i.flags&-4097|2,lt=!1,Pn=i)}}else{if(Uf(i))throw Error(t(418));i.flags=i.flags&-4097|2,lt=!1,Pn=i}}}function yy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Pn=i}function Fc(i){if(i!==Pn)return!1;if(!lt)return yy(i),lt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!xf(i.type,i.memoizedProps)),o&&(o=Nn)){if(Uf(i))throw vy(),Error(t(418));for(;o;)gy(i,o),o=Li(o.nextSibling)}if(yy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Nn=Li(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Nn=null}}else Nn=Pn?Li(i.stateNode.nextSibling):null;return!0}function vy(){for(var i=Nn;i;)i=Li(i.nextSibling)}function ia(){Nn=Pn=null,lt=!1}function Bf(i){ir===null?ir=[i]:ir.push(i)}var QC=G.ReactCurrentBatchConfig;function Vl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var C=p.refs;w===null?delete C[_]:C[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Uc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Ey(i){var o=i._init;return o(i._payload)}function wy(i){function o(B,b){if(i){var z=B.deletions;z===null?(B.deletions=[b],B.flags|=16):z.push(b)}}function l(B,b){if(!i)return null;for(;b!==null;)o(B,b),b=b.sibling;return null}function h(B,b){for(B=new Map;b!==null;)b.key!==null?B.set(b.key,b):B.set(b.index,b),b=b.sibling;return B}function p(B,b){return B=Hi(B,b),B.index=0,B.sibling=null,B}function _(B,b,z){return B.index=z,i?(z=B.alternate,z!==null?(z=z.index,z<b?(B.flags|=2,b):z):(B.flags|=2,b)):(B.flags|=1048576,b)}function w(B){return i&&B.alternate===null&&(B.flags|=2),B}function C(B,b,z,ee){return b===null||b.tag!==6?(b=Dp(z,B.mode,ee),b.return=B,b):(b=p(b,z),b.return=B,b)}function N(B,b,z,ee){var pe=z.type;return pe===D?X(B,b,z.props.children,ee,z.key):b!==null&&(b.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===kt&&Ey(pe)===b.type)?(ee=p(b,z.props),ee.ref=Vl(B,b,z),ee.return=B,ee):(ee=uh(z.type,z.key,z.props,null,B.mode,ee),ee.ref=Vl(B,b,z),ee.return=B,ee)}function $(B,b,z,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==z.containerInfo||b.stateNode.implementation!==z.implementation?(b=Op(z,B.mode,ee),b.return=B,b):(b=p(b,z.children||[]),b.return=B,b)}function X(B,b,z,ee,pe){return b===null||b.tag!==7?(b=Xs(z,B.mode,ee,pe),b.return=B,b):(b=p(b,z),b.return=B,b)}function Z(B,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Dp(""+b,B.mode,z),b.return=B,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ae:return z=uh(b.type,b.key,b.props,null,B.mode,z),z.ref=Vl(B,null,b),z.return=B,z;case me:return b=Op(b,B.mode,z),b.return=B,b;case kt:var ee=b._init;return Z(B,ee(b._payload),z)}if(Br(b)||ge(b))return b=Xs(b,B.mode,z,null),b.return=B,b;Uc(B,b)}return null}function Y(B,b,z,ee){var pe=b!==null?b.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return pe!==null?null:C(B,b,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ae:return z.key===pe?N(B,b,z,ee):null;case me:return z.key===pe?$(B,b,z,ee):null;case kt:return pe=z._init,Y(B,b,pe(z._payload),ee)}if(Br(z)||ge(z))return pe!==null?null:X(B,b,z,ee,null);Uc(B,z)}return null}function le(B,b,z,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return B=B.get(z)||null,C(b,B,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ae:return B=B.get(ee.key===null?z:ee.key)||null,N(b,B,ee,pe);case me:return B=B.get(ee.key===null?z:ee.key)||null,$(b,B,ee,pe);case kt:var ye=ee._init;return le(B,b,z,ye(ee._payload),pe)}if(Br(ee)||ge(ee))return B=B.get(z)||null,X(b,B,ee,pe,null);Uc(b,ee)}return null}function he(B,b,z,ee){for(var pe=null,ye=null,ve=b,Ie=b=0,Ut=null;ve!==null&&Ie<z.length;Ie++){ve.index>Ie?(Ut=ve,ve=null):Ut=ve.sibling;var Be=Y(B,ve,z[Ie],ee);if(Be===null){ve===null&&(ve=Ut);break}i&&ve&&Be.alternate===null&&o(B,ve),b=_(Be,b,Ie),ye===null?pe=Be:ye.sibling=Be,ye=Be,ve=Ut}if(Ie===z.length)return l(B,ve),lt&&Ws(B,Ie),pe;if(ve===null){for(;Ie<z.length;Ie++)ve=Z(B,z[Ie],ee),ve!==null&&(b=_(ve,b,Ie),ye===null?pe=ve:ye.sibling=ve,ye=ve);return lt&&Ws(B,Ie),pe}for(ve=h(B,ve);Ie<z.length;Ie++)Ut=le(ve,B,Ie,z[Ie],ee),Ut!==null&&(i&&Ut.alternate!==null&&ve.delete(Ut.key===null?Ie:Ut.key),b=_(Ut,b,Ie),ye===null?pe=Ut:ye.sibling=Ut,ye=Ut);return i&&ve.forEach(function(Gi){return o(B,Gi)}),lt&&Ws(B,Ie),pe}function fe(B,b,z,ee){var pe=ge(z);if(typeof pe!="function")throw Error(t(150));if(z=pe.call(z),z==null)throw Error(t(151));for(var ye=pe=null,ve=b,Ie=b=0,Ut=null,Be=z.next();ve!==null&&!Be.done;Ie++,Be=z.next()){ve.index>Ie?(Ut=ve,ve=null):Ut=ve.sibling;var Gi=Y(B,ve,Be.value,ee);if(Gi===null){ve===null&&(ve=Ut);break}i&&ve&&Gi.alternate===null&&o(B,ve),b=_(Gi,b,Ie),ye===null?pe=Gi:ye.sibling=Gi,ye=Gi,ve=Ut}if(Be.done)return l(B,ve),lt&&Ws(B,Ie),pe;if(ve===null){for(;!Be.done;Ie++,Be=z.next())Be=Z(B,Be.value,ee),Be!==null&&(b=_(Be,b,Ie),ye===null?pe=Be:ye.sibling=Be,ye=Be);return lt&&Ws(B,Ie),pe}for(ve=h(B,ve);!Be.done;Ie++,Be=z.next())Be=le(ve,B,Ie,Be.value,ee),Be!==null&&(i&&Be.alternate!==null&&ve.delete(Be.key===null?Ie:Be.key),b=_(Be,b,Ie),ye===null?pe=Be:ye.sibling=Be,ye=Be);return i&&ve.forEach(function(kR){return o(B,kR)}),lt&&Ws(B,Ie),pe}function _t(B,b,z,ee){if(typeof z=="object"&&z!==null&&z.type===D&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Ae:e:{for(var pe=z.key,ye=b;ye!==null;){if(ye.key===pe){if(pe=z.type,pe===D){if(ye.tag===7){l(B,ye.sibling),b=p(ye,z.props.children),b.return=B,B=b;break e}}else if(ye.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===kt&&Ey(pe)===ye.type){l(B,ye.sibling),b=p(ye,z.props),b.ref=Vl(B,ye,z),b.return=B,B=b;break e}l(B,ye);break}else o(B,ye);ye=ye.sibling}z.type===D?(b=Xs(z.props.children,B.mode,ee,z.key),b.return=B,B=b):(ee=uh(z.type,z.key,z.props,null,B.mode,ee),ee.ref=Vl(B,b,z),ee.return=B,B=ee)}return w(B);case me:e:{for(ye=z.key;b!==null;){if(b.key===ye)if(b.tag===4&&b.stateNode.containerInfo===z.containerInfo&&b.stateNode.implementation===z.implementation){l(B,b.sibling),b=p(b,z.children||[]),b.return=B,B=b;break e}else{l(B,b);break}else o(B,b);b=b.sibling}b=Op(z,B.mode,ee),b.return=B,B=b}return w(B);case kt:return ye=z._init,_t(B,b,ye(z._payload),ee)}if(Br(z))return he(B,b,z,ee);if(ge(z))return fe(B,b,z,ee);Uc(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,b!==null&&b.tag===6?(l(B,b.sibling),b=p(b,z),b.return=B,B=b):(l(B,b),b=Dp(z,B.mode,ee),b.return=B,B=b),w(B)):l(B,b)}return _t}var sa=wy(!0),Ty=wy(!1),jc=Mi(null),Bc=null,oa=null,zf=null;function Wf(){zf=oa=Bc=null}function $f(i){var o=jc.current;rt(jc),i._currentValue=o}function qf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function aa(i,o){Bc=i,zf=oa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(gn=!0),i.firstContext=null)}function Bn(i){var o=i._currentValue;if(zf!==i)if(i={context:i,memoizedValue:o,next:null},oa===null){if(Bc===null)throw Error(t(308));oa=i,Bc.dependencies={lanes:0,firstContext:i}}else oa=oa.next=i;return o}var $s=null;function Hf(i){$s===null?$s=[i]:$s.push(i)}function Iy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Hf(o)):(l.next=p.next,p.next=l),o.interleaved=l,ei(i,h)}function ei(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ui=!1;function Gf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ti(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ji(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(je&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,ei(i,l)}return p=h.interleaved,p===null?(o.next=o,Hf(h)):(o.next=p.next,p.next=o),h.interleaved=o,ei(i,l)}function zc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Pi(i,l)}}function Cy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Wc(i,o,l,h){var p=i.updateQueue;Ui=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var N=C,$=N.next;N.next=null,w===null?_=$:w.next=$,w=N;var X=i.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==w&&(C===null?X.firstBaseUpdate=$:C.next=$,X.lastBaseUpdate=N))}if(_!==null){var Z=p.baseState;w=0,X=$=N=null,C=_;do{var Y=C.lane,le=C.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:le,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var he=i,fe=C;switch(Y=o,le=l,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){Z=he.call(le,Z,Y);break e}Z=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,Y=typeof he=="function"?he.call(le,Z,Y):he,Y==null)break e;Z=ae({},Z,Y);break e;case 2:Ui=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,Y=p.effects,Y===null?p.effects=[C]:Y.push(C))}else le={eventTime:le,lane:Y,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?($=X=le,N=Z):X=X.next=le,w|=Y;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;Y=C,C=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(X===null&&(N=Z),p.baseState=N,p.firstBaseUpdate=$,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);Gs|=w,i.lanes=w,i.memoizedState=Z}}function Ry(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Fl={},Sr=Mi(Fl),Ul=Mi(Fl),jl=Mi(Fl);function qs(i){if(i===Fl)throw Error(t(174));return i}function Kf(i,o){switch(et(jl,o),et(Ul,i),et(Sr,Fl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Nt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Nt(o,i)}rt(Sr),et(Sr,o)}function la(){rt(Sr),rt(Ul),rt(jl)}function Ay(i){qs(jl.current);var o=qs(Sr.current),l=Nt(o,i.type);o!==l&&(et(Ul,i),et(Sr,l))}function Qf(i){Ul.current===i&&(rt(Sr),rt(Ul))}var ut=Mi(0);function $c(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Yf=[];function Xf(){for(var i=0;i<Yf.length;i++)Yf[i]._workInProgressVersionPrimary=null;Yf.length=0}var qc=G.ReactCurrentDispatcher,Jf=G.ReactCurrentBatchConfig,Hs=0,ct=null,Dt=null,Vt=null,Hc=!1,Bl=!1,zl=0,YC=0;function Jt(){throw Error(t(321))}function Zf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!rr(i[l],o[l]))return!1;return!0}function ep(i,o,l,h,p,_){if(Hs=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,qc.current=i===null||i.memoizedState===null?eR:tR,i=l(h,p),Bl){_=0;do{if(Bl=!1,zl=0,25<=_)throw Error(t(301));_+=1,Vt=Dt=null,o.updateQueue=null,qc.current=nR,i=l(h,p)}while(Bl)}if(qc.current=Qc,o=Dt!==null&&Dt.next!==null,Hs=0,Vt=Dt=ct=null,Hc=!1,o)throw Error(t(300));return i}function tp(){var i=zl!==0;return zl=0,i}function Cr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i,Vt}function zn(){if(Dt===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=Dt.next;var o=Vt===null?ct.memoizedState:Vt.next;if(o!==null)Vt=o,Dt=i;else{if(i===null)throw Error(t(310));Dt=i,i={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i}return Vt}function Wl(i,o){return typeof o=="function"?o(i):o}function np(i){var o=zn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Dt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var C=w=null,N=null,$=_;do{var X=$.lane;if((Hs&X)===X)N!==null&&(N=N.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var Z={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};N===null?(C=N=Z,w=h):N=N.next=Z,ct.lanes|=X,Gs|=X}$=$.next}while($!==null&&$!==_);N===null?w=h:N.next=C,rr(h,o.memoizedState)||(gn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,ct.lanes|=_,Gs|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function rp(i){var o=zn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);rr(_,o.memoizedState)||(gn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function ky(){}function Py(i,o){var l=ct,h=zn(),p=o(),_=!rr(h.memoizedState,p);if(_&&(h.memoizedState=p,gn=!0),h=h.queue,ip(Dy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,$l(9,xy.bind(null,l,h,p,o),void 0,null),Ft===null)throw Error(t(349));(Hs&30)!==0||Ny(l,o,p)}return p}function Ny(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function xy(i,o,l,h){o.value=l,o.getSnapshot=h,Oy(o)&&by(i)}function Dy(i,o,l){return l(function(){Oy(o)&&by(i)})}function Oy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!rr(i,l)}catch{return!0}}function by(i){var o=ei(i,1);o!==null&&lr(o,i,1,-1)}function Ly(i){var o=Cr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:i},o.queue=i,i=i.dispatch=ZC.bind(null,ct,i),[o.memoizedState,i]}function $l(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function My(){return zn().memoizedState}function Gc(i,o,l,h){var p=Cr();ct.flags|=i,p.memoizedState=$l(1|o,l,void 0,h===void 0?null:h)}function Kc(i,o,l,h){var p=zn();h=h===void 0?null:h;var _=void 0;if(Dt!==null){var w=Dt.memoizedState;if(_=w.destroy,h!==null&&Zf(h,w.deps)){p.memoizedState=$l(o,l,_,h);return}}ct.flags|=i,p.memoizedState=$l(1|o,l,_,h)}function Vy(i,o){return Gc(8390656,8,i,o)}function ip(i,o){return Kc(2048,8,i,o)}function Fy(i,o){return Kc(4,2,i,o)}function Uy(i,o){return Kc(4,4,i,o)}function jy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function By(i,o,l){return l=l!=null?l.concat([i]):null,Kc(4,4,jy.bind(null,o,i),l)}function sp(){}function zy(i,o){var l=zn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Zf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Wy(i,o){var l=zn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Zf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function $y(i,o,l){return(Hs&21)===0?(i.baseState&&(i.baseState=!1,gn=!0),i.memoizedState=l):(rr(l,o)||(l=Ls(),ct.lanes|=l,Gs|=l,i.baseState=!0),o)}function XC(i,o){var l=Me;Me=l!==0&&4>l?l:4,i(!0);var h=Jf.transition;Jf.transition={};try{i(!1),o()}finally{Me=l,Jf.transition=h}}function qy(){return zn().memoizedState}function JC(i,o,l){var h=$i(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Hy(i))Gy(o,l);else if(l=Iy(i,o,l,h),l!==null){var p=cn();lr(l,i,h,p),Ky(l,o,h)}}function ZC(i,o,l){var h=$i(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hy(i))Gy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,C=_(w,l);if(p.hasEagerState=!0,p.eagerState=C,rr(C,w)){var N=o.interleaved;N===null?(p.next=p,Hf(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=Iy(i,o,p,h),l!==null&&(p=cn(),lr(l,i,h,p),Ky(l,o,h))}}function Hy(i){var o=i.alternate;return i===ct||o!==null&&o===ct}function Gy(i,o){Bl=Hc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Ky(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Pi(i,l)}}var Qc={readContext:Bn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},eR={readContext:Bn,useCallback:function(i,o){return Cr().memoizedState=[i,o===void 0?null:o],i},useContext:Bn,useEffect:Vy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Gc(4194308,4,jy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Gc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Gc(4,2,i,o)},useMemo:function(i,o){var l=Cr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Cr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=JC.bind(null,ct,i),[h.memoizedState,i]},useRef:function(i){var o=Cr();return i={current:i},o.memoizedState=i},useState:Ly,useDebugValue:sp,useDeferredValue:function(i){return Cr().memoizedState=i},useTransition:function(){var i=Ly(!1),o=i[0];return i=XC.bind(null,i[1]),Cr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=ct,p=Cr();if(lt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ft===null)throw Error(t(349));(Hs&30)!==0||Ny(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Vy(Dy.bind(null,h,_,i),[i]),h.flags|=2048,$l(9,xy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Cr(),o=Ft.identifierPrefix;if(lt){var l=Zr,h=Jr;l=(h&~(1<<32-an(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=zl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=YC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},tR={readContext:Bn,useCallback:zy,useContext:Bn,useEffect:ip,useImperativeHandle:By,useInsertionEffect:Fy,useLayoutEffect:Uy,useMemo:Wy,useReducer:np,useRef:My,useState:function(){return np(Wl)},useDebugValue:sp,useDeferredValue:function(i){var o=zn();return $y(o,Dt.memoizedState,i)},useTransition:function(){var i=np(Wl)[0],o=zn().memoizedState;return[i,o]},useMutableSource:ky,useSyncExternalStore:Py,useId:qy,unstable_isNewReconciler:!1},nR={readContext:Bn,useCallback:zy,useContext:Bn,useEffect:ip,useImperativeHandle:By,useInsertionEffect:Fy,useLayoutEffect:Uy,useMemo:Wy,useReducer:rp,useRef:My,useState:function(){return rp(Wl)},useDebugValue:sp,useDeferredValue:function(i){var o=zn();return Dt===null?o.memoizedState=i:$y(o,Dt.memoizedState,i)},useTransition:function(){var i=rp(Wl)[0],o=zn().memoizedState;return[i,o]},useMutableSource:ky,useSyncExternalStore:Py,useId:qy,unstable_isNewReconciler:!1};function sr(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function op(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Yc={isMounted:function(i){return(i=i._reactInternals)?Yn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=cn(),p=$i(i),_=ti(h,p);_.payload=o,l!=null&&(_.callback=l),o=ji(i,_,p),o!==null&&(lr(o,i,p,h),zc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=cn(),p=$i(i),_=ti(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ji(i,_,p),o!==null&&(lr(o,i,p,h),zc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=cn(),h=$i(i),p=ti(l,h);p.tag=2,o!=null&&(p.callback=o),o=ji(i,p,h),o!==null&&(lr(o,i,h,l),zc(o,i,h))}};function Qy(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!Nl(l,h)||!Nl(p,_):!0}function Yy(i,o,l){var h=!1,p=Vi,_=o.contextType;return typeof _=="object"&&_!==null?_=Bn(_):(p=mn(o)?Bs:Xt.current,h=o.contextTypes,_=(h=h!=null)?ta(i,p):Vi),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Yc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Xy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Yc.enqueueReplaceState(o,o.state,null)}function ap(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Gf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Bn(_):(_=mn(o)?Bs:Xt.current,p.context=ta(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(op(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Yc.enqueueReplaceState(p,p.state,null),Wc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ua(i,o){try{var l="",h=o;do l+=ke(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function lp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function up(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var rR=typeof WeakMap=="function"?WeakMap:Map;function Jy(i,o,l){l=ti(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){rh||(rh=!0,Sp=h),up(i,o)},l}function Zy(i,o,l){l=ti(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){up(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){up(i,o),typeof h!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function ev(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new rR;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=_R.bind(null,i,o,l),o.then(i,i))}function tv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function nv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ti(-1,1),o.tag=2,ji(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var iR=G.ReactCurrentOwner,gn=!1;function un(i,o,l,h){o.child=i===null?Ty(o,null,l,h):sa(o,i.child,l,h)}function rv(i,o,l,h,p){l=l.render;var _=o.ref;return aa(o,p),h=ep(i,o,l,h,_,p),l=tp(),i!==null&&!gn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ni(i,o,p)):(lt&&l&&Vf(o),o.flags|=1,un(i,o,h,p),o.child)}function iv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!xp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,sv(i,o,_,h,p)):(i=uh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Nl,l(w,h)&&i.ref===o.ref)return ni(i,o,p)}return o.flags|=1,i=Hi(_,h),i.ref=o.ref,i.return=o,o.child=i}function sv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Nl(_,h)&&i.ref===o.ref)if(gn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(gn=!0);else return o.lanes=i.lanes,ni(i,o,p)}return cp(i,o,l,h,p)}function ov(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ha,xn),xn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,et(ha,xn),xn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,et(ha,xn),xn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,et(ha,xn),xn|=h;return un(i,o,p,l),o.child}function av(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function cp(i,o,l,h,p){var _=mn(l)?Bs:Xt.current;return _=ta(o,_),aa(o,p),l=ep(i,o,l,h,_,p),h=tp(),i!==null&&!gn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ni(i,o,p)):(lt&&h&&Vf(o),o.flags|=1,un(i,o,l,p),o.child)}function lv(i,o,l,h,p){if(mn(l)){var _=!0;bc(o)}else _=!1;if(aa(o,p),o.stateNode===null)Jc(i,o),Yy(o,l,h),ap(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var N=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=Bn($):($=mn(l)?Bs:Xt.current,$=ta(o,$));var X=l.getDerivedStateFromProps,Z=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||N!==$)&&Xy(o,w,h,$),Ui=!1;var Y=o.memoizedState;w.state=Y,Wc(o,h,w,p),N=o.memoizedState,C!==h||Y!==N||pn.current||Ui?(typeof X=="function"&&(op(o,l,X,h),N=o.memoizedState),(C=Ui||Qy(o,l,C,h,Y,N,$))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=N),w.props=h,w.state=N,w.context=$,h=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,Sy(i,o),C=o.memoizedProps,$=o.type===o.elementType?C:sr(o.type,C),w.props=$,Z=o.pendingProps,Y=w.context,N=l.contextType,typeof N=="object"&&N!==null?N=Bn(N):(N=mn(l)?Bs:Xt.current,N=ta(o,N));var le=l.getDerivedStateFromProps;(X=typeof le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==Z||Y!==N)&&Xy(o,w,h,N),Ui=!1,Y=o.memoizedState,w.state=Y,Wc(o,h,w,p);var he=o.memoizedState;C!==Z||Y!==he||pn.current||Ui?(typeof le=="function"&&(op(o,l,le,h),he=o.memoizedState),($=Ui||Qy(o,l,$,h,Y,he,N)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,he,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,he,N)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=he),w.props=h,w.state=he,w.context=N,h=$):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),h=!1)}return hp(i,o,l,h,_,p)}function hp(i,o,l,h,p,_){av(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&fy(o,l,!1),ni(i,o,_);h=o.stateNode,iR.current=o;var C=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=sa(o,i.child,null,_),o.child=sa(o,null,C,_)):un(i,o,C,_),o.memoizedState=h.state,p&&fy(o,l,!0),o.child}function uv(i){var o=i.stateNode;o.pendingContext?hy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&hy(i,o.context,!1),Kf(i,o.containerInfo)}function cv(i,o,l,h,p){return ia(),Bf(p),o.flags|=256,un(i,o,l,h),o.child}var dp={dehydrated:null,treeContext:null,retryLane:0};function fp(i){return{baseLanes:i,cachePool:null,transitions:null}}function hv(i,o,l){var h=o.pendingProps,p=ut.current,_=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=i!==null&&i.memoizedState===null?!1:(p&2)!==0),C?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),et(ut,p&1),i===null)return jf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=ch(w,h,0,null),i=Xs(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=fp(l),o.memoizedState=dp,i):pp(o,w));if(p=i.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return sR(i,o,w,h,C,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,C=p.sibling;var N={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=N,o.deletions=null):(h=Hi(p,N),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?_=Hi(C,_):(_=Xs(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?fp(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=dp,h}return _=i.child,i=_.sibling,h=Hi(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function pp(i,o){return o=ch({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Xc(i,o,l,h){return h!==null&&Bf(h),sa(o,i.child,null,l),i=pp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function sR(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=lp(Error(t(422))),Xc(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=ch({mode:"visible",children:h.children},p,0,null),_=Xs(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&sa(o,i.child,null,w),o.child.memoizedState=fp(w),o.memoizedState=dp,_);if((o.mode&1)===0)return Xc(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,_=Error(t(419)),h=lp(_,h,void 0),Xc(i,o,w,h)}if(C=(w&i.childLanes)!==0,gn||C){if(h=Ft,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ei(i,p),lr(h,i,p,-1))}return Np(),h=lp(Error(t(421))),Xc(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=yR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Nn=Li(p.nextSibling),Pn=o,lt=!0,ir=null,i!==null&&(Un[jn++]=Jr,Un[jn++]=Zr,Un[jn++]=zs,Jr=i.id,Zr=i.overflow,zs=o),o=pp(o,h.children),o.flags|=4096,o)}function dv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),qf(i.return,o,l)}function mp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function fv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(un(i,o,h.children,l),h=ut.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&dv(i,l,o);else if(i.tag===19)dv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(et(ut,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&$c(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),mp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&$c(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}mp(o,!0,l,null,_);break;case"together":mp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Jc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ni(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Gs|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Hi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Hi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function oR(i,o,l){switch(o.tag){case 3:uv(o),ia();break;case 5:Ay(o);break;case 1:mn(o.type)&&bc(o);break;case 4:Kf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;et(jc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(et(ut,ut.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?hv(i,o,l):(et(ut,ut.current&1),i=ni(i,o,l),i!==null?i.sibling:null);et(ut,ut.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return fv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),et(ut,ut.current),h)break;return null;case 22:case 23:return o.lanes=0,ov(i,o,l)}return ni(i,o,l)}var pv,gp,mv,gv;pv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},gp=function(){},mv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,qs(Sr.current);var _=null;switch(l){case"input":p=Ss(i,p),h=Ss(i,h),_=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),_=[];break;case"textarea":p=sl(i,p),h=sl(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=xc)}hl(l,h);var w;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var C=p[$];for(w in C)C.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(s.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in h){var N=h[$];if(C=p!=null?p[$]:void 0,h.hasOwnProperty($)&&N!==C&&(N!=null||C!=null))if($==="style")if(C){for(w in C)!C.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in N)N.hasOwnProperty(w)&&C[w]!==N[w]&&(l||(l={}),l[w]=N[w])}else l||(_||(_=[]),_.push($,l)),l=N;else $==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,C=C?C.__html:void 0,N!=null&&C!==N&&(_=_||[]).push($,N)):$==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push($,""+N):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(s.hasOwnProperty($)?(N!=null&&$==="onScroll"&&nt("scroll",i),_||C===N||(_=[])):(_=_||[]).push($,N))}l&&(_=_||[]).push("style",l);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},gv=function(i,o,l,h){l!==h&&(o.flags|=4)};function ql(i,o){if(!lt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function aR(i,o,l){var h=o.pendingProps;switch(Ff(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(o),null;case 1:return mn(o.type)&&Oc(),Zt(o),null;case 3:return h=o.stateNode,la(),rt(pn),rt(Xt),Xf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Fc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ir!==null&&(Ap(ir),ir=null))),gp(i,o),Zt(o),null;case 5:Qf(o);var p=qs(jl.current);if(l=o.type,i!==null&&o.stateNode!=null)mv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Zt(o),null}if(i=qs(Sr.current),Fc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Ir]=o,h[Ll]=_,i=(o.mode&1)!==0,l){case"dialog":nt("cancel",h),nt("close",h);break;case"iframe":case"object":case"embed":nt("load",h);break;case"video":case"audio":for(p=0;p<Dl.length;p++)nt(Dl[p],h);break;case"source":nt("error",h);break;case"img":case"image":case"link":nt("error",h),nt("load",h);break;case"details":nt("toggle",h);break;case"input":Io(h,_),nt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},nt("invalid",h);break;case"textarea":Co(h,_),nt("invalid",h)}hl(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var C=_[w];w==="children"?typeof C=="string"?h.textContent!==C&&(_.suppressHydrationWarning!==!0&&Nc(h.textContent,C,i),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&Nc(h.textContent,C,i),p=["children",""+C]):s.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&nt("scroll",h)}switch(l){case"input":jr(h),nc(h,_,!0);break;case"textarea":jr(h),ol(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=xc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Pt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Ir]=o,i[Ll]=h,pv(i,o,!1,!1),o.stateNode=i;e:{switch(w=dl(l,h),l){case"dialog":nt("cancel",i),nt("close",i),p=h;break;case"iframe":case"object":case"embed":nt("load",i),p=h;break;case"video":case"audio":for(p=0;p<Dl.length;p++)nt(Dl[p],i);p=h;break;case"source":nt("error",i),p=h;break;case"img":case"image":case"link":nt("error",i),nt("load",i),p=h;break;case"details":nt("toggle",i),p=h;break;case"input":Io(i,h),p=Ss(i,h),nt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),nt("invalid",i);break;case"textarea":Co(i,h),p=sl(i,h),nt("invalid",i);break;default:p=h}hl(l,p),C=p;for(_ in C)if(C.hasOwnProperty(_)){var N=C[_];_==="style"?ul(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&al(i,N)):_==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&Si(i,N):typeof N=="number"&&Si(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&nt("scroll",i):N!=null&&re(i,_,N,w))}switch(l){case"input":jr(i),nc(i,h,!1);break;case"textarea":jr(i),ol(i);break;case"option":h.value!=null&&i.setAttribute("value",""+$e(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?zr(i,!!h.multiple,_,!1):h.defaultValue!=null&&zr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=xc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Zt(o),null;case 6:if(i&&o.stateNode!=null)gv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=qs(jl.current),qs(Sr.current),Fc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Ir]=o,(_=h.nodeValue!==l)&&(i=Pn,i!==null))switch(i.tag){case 3:Nc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Nc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ir]=o,o.stateNode=h}return Zt(o),null;case 13:if(rt(ut),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(lt&&Nn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)vy(),ia(),o.flags|=98560,_=!1;else if(_=Fc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ir]=o}else ia(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Zt(o),_=!1}else ir!==null&&(Ap(ir),ir=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(ut.current&1)!==0?Ot===0&&(Ot=3):Np())),o.updateQueue!==null&&(o.flags|=4),Zt(o),null);case 4:return la(),gp(i,o),i===null&&Ol(o.stateNode.containerInfo),Zt(o),null;case 10:return $f(o.type._context),Zt(o),null;case 17:return mn(o.type)&&Oc(),Zt(o),null;case 19:if(rt(ut),_=o.memoizedState,_===null)return Zt(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)ql(_,!1);else{if(Ot!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=$c(i),w!==null){for(o.flags|=128,ql(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return et(ut,ut.current&1|2),o.child}i=i.sibling}_.tail!==null&&Ze()>da&&(o.flags|=128,h=!0,ql(_,!1),o.lanes=4194304)}else{if(!h)if(i=$c(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!lt)return Zt(o),null}else 2*Ze()-_.renderingStartTime>da&&l!==1073741824&&(o.flags|=128,h=!0,ql(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Ze(),o.sibling=null,l=ut.current,et(ut,h?l&1|2:l&1),o):(Zt(o),null);case 22:case 23:return Pp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(xn&1073741824)!==0&&(Zt(o),o.subtreeFlags&6&&(o.flags|=8192)):Zt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function lR(i,o){switch(Ff(o),o.tag){case 1:return mn(o.type)&&Oc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return la(),rt(pn),rt(Xt),Xf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Qf(o),null;case 13:if(rt(ut),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ia()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return rt(ut),null;case 4:return la(),null;case 10:return $f(o.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Zc=!1,en=!1,uR=typeof WeakSet=="function"?WeakSet:Set,ce=null;function ca(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ft(i,o,h)}else l.current=null}function _p(i,o,l){try{l()}catch(h){ft(i,o,h)}}var _v=!1;function cR(i,o){if(Pf=Di,i=Q_(),wf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,C=-1,N=-1,$=0,X=0,Z=i,Y=null;t:for(;;){for(var le;Z!==l||p!==0&&Z.nodeType!==3||(C=w+p),Z!==_||h!==0&&Z.nodeType!==3||(N=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(le=Z.firstChild)!==null;)Y=Z,Z=le;for(;;){if(Z===i)break t;if(Y===l&&++$===p&&(C=w),Y===_&&++X===h&&(N=w),(le=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=le}l=C===-1||N===-1?null:{start:C,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nf={focusedElem:i,selectionRange:l},Di=!1,ce=o;ce!==null;)if(o=ce,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ce=i;else for(;ce!==null;){o=ce;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,_t=he.memoizedState,B=o.stateNode,b=B.getSnapshotBeforeUpdate(o.elementType===o.type?fe:sr(o.type,fe),_t);B.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var z=o.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){ft(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,ce=i;break}ce=o.return}return he=_v,_v=!1,he}function Hl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&_p(o,l,_)}p=p.next}while(p!==h)}}function eh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function yp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function yv(i){var o=i.alternate;o!==null&&(i.alternate=null,yv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Ir],delete o[Ll],delete o[bf],delete o[HC],delete o[GC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function vv(i){return i.tag===5||i.tag===3||i.tag===4}function Ev(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||vv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function vp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=xc));else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,l),i=i.sibling;i!==null;)vp(i,o,l),i=i.sibling}function Ep(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ep(i,o,l),i=i.sibling;i!==null;)Ep(i,o,l),i=i.sibling}var Ht=null,or=!1;function Bi(i,o,l){for(l=l.child;l!==null;)wv(i,o,l),l=l.sibling}function wv(i,o,l){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Os,l)}catch{}switch(l.tag){case 5:en||ca(l,o);case 6:var h=Ht,p=or;Ht=null,Bi(i,o,l),Ht=h,or=p,Ht!==null&&(or?(i=Ht,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ht.removeChild(l.stateNode));break;case 18:Ht!==null&&(or?(i=Ht,l=l.stateNode,i.nodeType===8?Of(i.parentNode,l):i.nodeType===1&&Of(i,l),tr(i)):Of(Ht,l.stateNode));break;case 4:h=Ht,p=or,Ht=l.stateNode.containerInfo,or=!0,Bi(i,o,l),Ht=h,or=p;break;case 0:case 11:case 14:case 15:if(!en&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&_p(l,o,w),p=p.next}while(p!==h)}Bi(i,o,l);break;case 1:if(!en&&(ca(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){ft(l,o,C)}Bi(i,o,l);break;case 21:Bi(i,o,l);break;case 22:l.mode&1?(en=(h=en)||l.memoizedState!==null,Bi(i,o,l),en=h):Bi(i,o,l);break;default:Bi(i,o,l)}}function Tv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new uR),o.forEach(function(h){var p=vR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function ar(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:Ht=C.stateNode,or=!1;break e;case 3:Ht=C.stateNode.containerInfo,or=!0;break e;case 4:Ht=C.stateNode.containerInfo,or=!0;break e}C=C.return}if(Ht===null)throw Error(t(160));wv(_,w,p),Ht=null,or=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch($){ft(p,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Iv(o,i),o=o.sibling}function Iv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ar(o,i),Rr(i),h&4){try{Hl(3,i,i.return),eh(3,i)}catch(fe){ft(i,i.return,fe)}try{Hl(5,i,i.return)}catch(fe){ft(i,i.return,fe)}}break;case 1:ar(o,i),Rr(i),h&512&&l!==null&&ca(l,l.return);break;case 5:if(ar(o,i),Rr(i),h&512&&l!==null&&ca(l,l.return),i.flags&32){var p=i.stateNode;try{Si(p,"")}catch(fe){ft(i,i.return,fe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,C=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&rl(p,_),dl(C,w);var $=dl(C,_);for(w=0;w<N.length;w+=2){var X=N[w],Z=N[w+1];X==="style"?ul(p,Z):X==="dangerouslySetInnerHTML"?al(p,Z):X==="children"?Si(p,Z):re(p,X,Z,$)}switch(C){case"input":il(p,_);break;case"textarea":Ro(p,_);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var le=_.value;le!=null?zr(p,!!_.multiple,le,!1):Y!==!!_.multiple&&(_.defaultValue!=null?zr(p,!!_.multiple,_.defaultValue,!0):zr(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ll]=_}catch(fe){ft(i,i.return,fe)}}break;case 6:if(ar(o,i),Rr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(fe){ft(i,i.return,fe)}}break;case 3:if(ar(o,i),Rr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{tr(o.containerInfo)}catch(fe){ft(i,i.return,fe)}break;case 4:ar(o,i),Rr(i);break;case 13:ar(o,i),Rr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Ip=Ze())),h&4&&Tv(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(en=($=en)||X,ar(o,i),en=$):ar(o,i),Rr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!X&&(i.mode&1)!==0)for(ce=i,X=i.child;X!==null;){for(Z=ce=X;ce!==null;){switch(Y=ce,le=Y.child,Y.tag){case 0:case 11:case 14:case 15:Hl(4,Y,Y.return);break;case 1:ca(Y,Y.return);var he=Y.stateNode;if(typeof he.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(fe){ft(h,l,fe)}}break;case 5:ca(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Rv(Z);continue}}le!==null?(le.return=Y,ce=le):Rv(Z)}X=X.sibling}e:for(X=null,Z=i;;){if(Z.tag===5){if(X===null){X=Z;try{p=Z.stateNode,$?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=Z.stateNode,N=Z.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,C.style.display=ll("display",w))}catch(fe){ft(i,i.return,fe)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=$?"":Z.memoizedProps}catch(fe){ft(i,i.return,fe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===i)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===i)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===i)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:ar(o,i),Rr(i),h&4&&Tv(i);break;case 21:break;default:ar(o,i),Rr(i)}}function Rr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(vv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Si(p,""),h.flags&=-33);var _=Ev(i);Ep(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,C=Ev(i);vp(i,C,w);break;default:throw Error(t(161))}}catch(N){ft(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function hR(i,o,l){ce=i,Sv(i)}function Sv(i,o,l){for(var h=(i.mode&1)!==0;ce!==null;){var p=ce,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Zc;if(!w){var C=p.alternate,N=C!==null&&C.memoizedState!==null||en;C=Zc;var $=en;if(Zc=w,(en=N)&&!$)for(ce=p;ce!==null;)w=ce,N=w.child,w.tag===22&&w.memoizedState!==null?Av(p):N!==null?(N.return=w,ce=N):Av(p);for(;_!==null;)ce=_,Sv(_),_=_.sibling;ce=p,Zc=C,en=$}Cv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ce=_):Cv(i)}}function Cv(i){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:en||eh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!en)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:sr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Ry(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Ry(o,w,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&tr(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}en||o.flags&512&&yp(o)}catch(Y){ft(o,o.return,Y)}}if(o===i){ce=null;break}if(l=o.sibling,l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Rv(i){for(;ce!==null;){var o=ce;if(o===i){ce=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Av(i){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{eh(4,o)}catch(N){ft(o,l,N)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(N){ft(o,p,N)}}var _=o.return;try{yp(o)}catch(N){ft(o,_,N)}break;case 5:var w=o.return;try{yp(o)}catch(N){ft(o,w,N)}}}catch(N){ft(o,o.return,N)}if(o===i){ce=null;break}var C=o.sibling;if(C!==null){C.return=o.return,ce=C;break}ce=o.return}}var dR=Math.ceil,th=G.ReactCurrentDispatcher,wp=G.ReactCurrentOwner,Wn=G.ReactCurrentBatchConfig,je=0,Ft=null,wt=null,Gt=0,xn=0,ha=Mi(0),Ot=0,Gl=null,Gs=0,nh=0,Tp=0,Kl=null,_n=null,Ip=0,da=1/0,ri=null,rh=!1,Sp=null,zi=null,ih=!1,Wi=null,sh=0,Ql=0,Cp=null,oh=-1,ah=0;function cn(){return(je&6)!==0?Ze():oh!==-1?oh:oh=Ze()}function $i(i){return(i.mode&1)===0?1:(je&2)!==0&&Gt!==0?Gt&-Gt:QC.transition!==null?(ah===0&&(ah=Ls()),ah):(i=Me,i!==0||(i=window.event,i=i===void 0?16:Il(i.type)),i)}function lr(i,o,l,h){if(50<Ql)throw Ql=0,Cp=null,Error(t(185));ki(i,l,h),((je&2)===0||i!==Ft)&&(i===Ft&&((je&2)===0&&(nh|=l),Ot===4&&qi(i,Gt)),yn(i,h),l===1&&je===0&&(o.mode&1)===0&&(da=Ze()+500,Lc&&Fi()))}function yn(i,o){var l=i.callbackNode;qr(i,o);var h=bs(i,i===Ft?Gt:0);if(h===0)l!==null&&yl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&yl(l),o===1)i.tag===0?KC(Pv.bind(null,i)):py(Pv.bind(null,i)),$C(function(){(je&6)===0&&Fi()}),l=null;else{switch(Ni(h)){case 1:l=Ds;break;case 4:l=Ci;break;case 16:l=Mn;break;case 536870912:l=ac;break;default:l=Mn}l=Vv(l,kv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function kv(i,o){if(oh=-1,ah=0,(je&6)!==0)throw Error(t(327));var l=i.callbackNode;if(fa()&&i.callbackNode!==l)return null;var h=bs(i,i===Ft?Gt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=lh(i,h);else{o=h;var p=je;je|=2;var _=xv();(Ft!==i||Gt!==o)&&(ri=null,da=Ze()+500,Qs(i,o));do try{mR();break}catch(C){Nv(i,C)}while(!0);Wf(),th.current=_,je=p,wt!==null?o=0:(Ft=null,Gt=0,o=Ot)}if(o!==0){if(o===2&&(p=Rn(i),p!==0&&(h=p,o=Rp(i,p))),o===1)throw l=Gl,Qs(i,0),qi(i,h),yn(i,Ze()),l;if(o===6)qi(i,h);else{if(p=i.current.alternate,(h&30)===0&&!fR(p)&&(o=lh(i,h),o===2&&(_=Rn(i),_!==0&&(h=_,o=Rp(i,_))),o===1))throw l=Gl,Qs(i,0),qi(i,h),yn(i,Ze()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Ys(i,_n,ri);break;case 3:if(qi(i,h),(h&130023424)===h&&(o=Ip+500-Ze(),10<o)){if(bs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){cn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Df(Ys.bind(null,i,_n,ri),o);break}Ys(i,_n,ri);break;case 4:if(qi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-an(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=Ze()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*dR(h/1960))-h,10<h){i.timeoutHandle=Df(Ys.bind(null,i,_n,ri),h);break}Ys(i,_n,ri);break;case 5:Ys(i,_n,ri);break;default:throw Error(t(329))}}}return yn(i,Ze()),i.callbackNode===l?kv.bind(null,i):null}function Rp(i,o){var l=Kl;return i.current.memoizedState.isDehydrated&&(Qs(i,o).flags|=256),i=lh(i,o),i!==2&&(o=_n,_n=l,o!==null&&Ap(o)),i}function Ap(i){_n===null?_n=i:_n.push.apply(_n,i)}function fR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!rr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function qi(i,o){for(o&=~Tp,o&=~nh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-an(o),h=1<<l;i[l]=-1,o&=~h}}function Pv(i){if((je&6)!==0)throw Error(t(327));fa();var o=bs(i,0);if((o&1)===0)return yn(i,Ze()),null;var l=lh(i,o);if(i.tag!==0&&l===2){var h=Rn(i);h!==0&&(o=h,l=Rp(i,h))}if(l===1)throw l=Gl,Qs(i,0),qi(i,o),yn(i,Ze()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Ys(i,_n,ri),yn(i,Ze()),null}function kp(i,o){var l=je;je|=1;try{return i(o)}finally{je=l,je===0&&(da=Ze()+500,Lc&&Fi())}}function Ks(i){Wi!==null&&Wi.tag===0&&(je&6)===0&&fa();var o=je;je|=1;var l=Wn.transition,h=Me;try{if(Wn.transition=null,Me=1,i)return i()}finally{Me=h,Wn.transition=l,je=o,(je&6)===0&&Fi()}}function Pp(){xn=ha.current,rt(ha)}function Qs(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,WC(l)),wt!==null)for(l=wt.return;l!==null;){var h=l;switch(Ff(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Oc();break;case 3:la(),rt(pn),rt(Xt),Xf();break;case 5:Qf(h);break;case 4:la();break;case 13:rt(ut);break;case 19:rt(ut);break;case 10:$f(h.type._context);break;case 22:case 23:Pp()}l=l.return}if(Ft=i,wt=i=Hi(i.current,null),Gt=xn=o,Ot=0,Gl=null,Tp=nh=Gs=0,_n=Kl=null,$s!==null){for(o=0;o<$s.length;o++)if(l=$s[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}$s=null}return i}function Nv(i,o){do{var l=wt;try{if(Wf(),qc.current=Qc,Hc){for(var h=ct.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Hc=!1}if(Hs=0,Vt=Dt=ct=null,Bl=!1,zl=0,wp.current=null,l===null||l.return===null){Ot=1,Gl=o,wt=null;break}e:{var _=i,w=l.return,C=l,N=o;if(o=Gt,C.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var $=N,X=C,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var le=tv(w);if(le!==null){le.flags&=-257,nv(le,w,C,_,o),le.mode&1&&ev(_,$,o),o=le,N=$;var he=o.updateQueue;if(he===null){var fe=new Set;fe.add(N),o.updateQueue=fe}else he.add(N);break e}else{if((o&1)===0){ev(_,$,o),Np();break e}N=Error(t(426))}}else if(lt&&C.mode&1){var _t=tv(w);if(_t!==null){(_t.flags&65536)===0&&(_t.flags|=256),nv(_t,w,C,_,o),Bf(ua(N,C));break e}}_=N=ua(N,C),Ot!==4&&(Ot=2),Kl===null?Kl=[_]:Kl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var B=Jy(_,N,o);Cy(_,B);break e;case 1:C=N;var b=_.type,z=_.stateNode;if((_.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(zi===null||!zi.has(z)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=Zy(_,C,o);Cy(_,ee);break e}}_=_.return}while(_!==null)}Ov(l)}catch(pe){o=pe,wt===l&&l!==null&&(wt=l=l.return);continue}break}while(!0)}function xv(){var i=th.current;return th.current=Qc,i===null?Qc:i}function Np(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Ft===null||(Gs&268435455)===0&&(nh&268435455)===0||qi(Ft,Gt)}function lh(i,o){var l=je;je|=2;var h=xv();(Ft!==i||Gt!==o)&&(ri=null,Qs(i,o));do try{pR();break}catch(p){Nv(i,p)}while(!0);if(Wf(),je=l,th.current=h,wt!==null)throw Error(t(261));return Ft=null,Gt=0,Ot}function pR(){for(;wt!==null;)Dv(wt)}function mR(){for(;wt!==null&&!sc();)Dv(wt)}function Dv(i){var o=Mv(i.alternate,i,xn);i.memoizedProps=i.pendingProps,o===null?Ov(i):wt=o,wp.current=null}function Ov(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=aR(l,o,xn),l!==null){wt=l;return}}else{if(l=lR(l,o),l!==null){l.flags&=32767,wt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ot=6,wt=null;return}}if(o=o.sibling,o!==null){wt=o;return}wt=o=i}while(o!==null);Ot===0&&(Ot=5)}function Ys(i,o,l){var h=Me,p=Wn.transition;try{Wn.transition=null,Me=1,gR(i,o,l,h)}finally{Wn.transition=p,Me=h}return null}function gR(i,o,l,h){do fa();while(Wi!==null);if((je&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ye(i,_),i===Ft&&(wt=Ft=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ih||(ih=!0,Vv(Mn,function(){return fa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Wn.transition,Wn.transition=null;var w=Me;Me=1;var C=je;je|=4,wp.current=null,cR(i,l),Iv(l,i),MC(Nf),Di=!!Pf,Nf=Pf=null,i.current=l,hR(l),ff(),je=C,Me=w,Wn.transition=_}else i.current=l;if(ih&&(ih=!1,Wi=i,sh=p),_=i.pendingLanes,_===0&&(zi=null),lc(l.stateNode),yn(i,Ze()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(rh)throw rh=!1,i=Sp,Sp=null,i;return(sh&1)!==0&&i.tag!==0&&fa(),_=i.pendingLanes,(_&1)!==0?i===Cp?Ql++:(Ql=0,Cp=i):Ql=0,Fi(),null}function fa(){if(Wi!==null){var i=Ni(sh),o=Wn.transition,l=Me;try{if(Wn.transition=null,Me=16>i?16:i,Wi===null)var h=!1;else{if(i=Wi,Wi=null,sh=0,(je&6)!==0)throw Error(t(331));var p=je;for(je|=4,ce=i.current;ce!==null;){var _=ce,w=_.child;if((ce.flags&16)!==0){var C=_.deletions;if(C!==null){for(var N=0;N<C.length;N++){var $=C[N];for(ce=$;ce!==null;){var X=ce;switch(X.tag){case 0:case 11:case 15:Hl(8,X,_)}var Z=X.child;if(Z!==null)Z.return=X,ce=Z;else for(;ce!==null;){X=ce;var Y=X.sibling,le=X.return;if(yv(X),X===$){ce=null;break}if(Y!==null){Y.return=le,ce=Y;break}ce=le}}}var he=_.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var _t=fe.sibling;fe.sibling=null,fe=_t}while(fe!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ce=w;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Hl(9,_,_.return)}var B=_.sibling;if(B!==null){B.return=_.return,ce=B;break e}ce=_.return}}var b=i.current;for(ce=b;ce!==null;){w=ce;var z=w.child;if((w.subtreeFlags&2064)!==0&&z!==null)z.return=w,ce=z;else e:for(w=b;ce!==null;){if(C=ce,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:eh(9,C)}}catch(pe){ft(C,C.return,pe)}if(C===w){ce=null;break e}var ee=C.sibling;if(ee!==null){ee.return=C.return,ce=ee;break e}ce=C.return}}if(je=p,Fi(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Os,i)}catch{}h=!0}return h}finally{Me=l,Wn.transition=o}}return!1}function bv(i,o,l){o=ua(l,o),o=Jy(i,o,1),i=ji(i,o,1),o=cn(),i!==null&&(ki(i,1,o),yn(i,o))}function ft(i,o,l){if(i.tag===3)bv(i,i,l);else for(;o!==null;){if(o.tag===3){bv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(zi===null||!zi.has(h))){i=ua(l,i),i=Zy(o,i,1),o=ji(o,i,1),i=cn(),o!==null&&(ki(o,1,i),yn(o,i));break}}o=o.return}}function _R(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=cn(),i.pingedLanes|=i.suspendedLanes&l,Ft===i&&(Gt&l)===l&&(Ot===4||Ot===3&&(Gt&130023424)===Gt&&500>Ze()-Ip?Qs(i,0):Tp|=l),yn(i,o)}function Lv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Mo,Mo<<=1,(Mo&130023424)===0&&(Mo=4194304)));var l=cn();i=ei(i,o),i!==null&&(ki(i,o,l),yn(i,l))}function yR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Lv(i,l)}function vR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Lv(i,l)}var Mv;Mv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||pn.current)gn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return gn=!1,oR(i,o,l);gn=(i.flags&131072)!==0}else gn=!1,lt&&(o.flags&1048576)!==0&&my(o,Vc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Jc(i,o),i=o.pendingProps;var p=ta(o,Xt.current);aa(o,l),p=ep(null,o,h,i,p,l);var _=tp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,mn(h)?(_=!0,bc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Gf(o),p.updater=Yc,o.stateNode=p,p._reactInternals=o,ap(o,h,i,l),o=hp(null,o,h,!0,_,l)):(o.tag=0,lt&&_&&Vf(o),un(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Jc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=wR(h),i=sr(h,i),p){case 0:o=cp(null,o,h,i,l);break e;case 1:o=lv(null,o,h,i,l);break e;case 11:o=rv(null,o,h,i,l);break e;case 14:o=iv(null,o,h,sr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),cp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),lv(i,o,h,p,l);case 3:e:{if(uv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Sy(i,o),Wc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=ua(Error(t(423)),o),o=cv(i,o,h,l,p);break e}else if(h!==p){p=ua(Error(t(424)),o),o=cv(i,o,h,l,p);break e}else for(Nn=Li(o.stateNode.containerInfo.firstChild),Pn=o,lt=!0,ir=null,l=Ty(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ia(),h===p){o=ni(i,o,l);break e}un(i,o,h,l)}o=o.child}return o;case 5:return Ay(o),i===null&&jf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,xf(h,p)?w=null:_!==null&&xf(h,_)&&(o.flags|=32),av(i,o),un(i,o,w,l),o.child;case 6:return i===null&&jf(o),null;case 13:return hv(i,o,l);case 4:return Kf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=sa(o,null,h,l):un(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),rv(i,o,h,p,l);case 7:return un(i,o,o.pendingProps,l),o.child;case 8:return un(i,o,o.pendingProps.children,l),o.child;case 12:return un(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,et(jc,h._currentValue),h._currentValue=w,_!==null)if(rr(_.value,w)){if(_.children===p.children&&!pn.current){o=ni(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){w=_.child;for(var N=C.firstContext;N!==null;){if(N.context===h){if(_.tag===1){N=ti(-1,l&-l),N.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?N.next=N:(N.next=X.next,X.next=N),$.pending=N}}_.lanes|=l,N=_.alternate,N!==null&&(N.lanes|=l),qf(_.return,l,o),C.lanes|=l;break}N=N.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,C=w.alternate,C!==null&&(C.lanes|=l),qf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}un(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,aa(o,l),p=Bn(p),h=h(p),o.flags|=1,un(i,o,h,l),o.child;case 14:return h=o.type,p=sr(h,o.pendingProps),p=sr(h.type,p),iv(i,o,h,p,l);case 15:return sv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),Jc(i,o),o.tag=1,mn(h)?(i=!0,bc(o)):i=!1,aa(o,l),Yy(o,h,p),ap(o,h,p,l),hp(null,o,h,!0,i,l);case 19:return fv(i,o,l);case 22:return ov(i,o,l)}throw Error(t(156,o.tag))};function Vv(i,o){return bo(i,o)}function ER(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(i,o,l,h){return new ER(i,o,l,h)}function xp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function wR(i){if(typeof i=="function")return xp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===F)return 11;if(i===dt)return 14}return 2}function Hi(i,o){var l=i.alternate;return l===null?(l=$n(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function uh(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")xp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case D:return Xs(l.children,p,_,o);case S:w=8,p|=8;break;case k:return i=$n(12,l,o,p|2),i.elementType=k,i.lanes=_,i;case A:return i=$n(13,l,o,p),i.elementType=A,i.lanes=_,i;case ot:return i=$n(19,l,o,p),i.elementType=ot,i.lanes=_,i;case ze:return ch(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:w=10;break e;case L:w=9;break e;case F:w=11;break e;case dt:w=14;break e;case kt:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=$n(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Xs(i,o,l,h){return i=$n(7,i,h,o),i.lanes=l,i}function ch(i,o,l,h){return i=$n(22,i,h,o),i.elementType=ze,i.lanes=l,i.stateNode={isHidden:!1},i}function Dp(i,o,l){return i=$n(6,i,null,o),i.lanes=l,i}function Op(i,o,l){return o=$n(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function TR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function bp(i,o,l,h,p,_,w,C,N){return i=new TR(i,o,l,C,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=$n(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(_),i}function IR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Fv(i){if(!i)return Vi;i=i._reactInternals;e:{if(Yn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(mn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(mn(l))return dy(i,l,o)}return o}function Uv(i,o,l,h,p,_,w,C,N){return i=bp(l,h,!0,i,p,_,w,C,N),i.context=Fv(null),l=i.current,h=cn(),p=$i(l),_=ti(h,p),_.callback=o??null,ji(l,_,p),i.current.lanes=p,ki(i,p,h),yn(i,h),i}function hh(i,o,l,h){var p=o.current,_=cn(),w=$i(p);return l=Fv(l),o.context===null?o.context=l:o.pendingContext=l,o=ti(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ji(p,o,w),i!==null&&(lr(i,p,w,_),zc(i,p,w)),w}function dh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function jv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Lp(i,o){jv(i,o),(i=i.alternate)&&jv(i,o)}function SR(){return null}var Bv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Mp(i){this._internalRoot=i}fh.prototype.render=Mp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));hh(i,o,null,null)},fh.prototype.unmount=Mp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Ks(function(){hh(null,i,null,null)}),o[Yr]=null}};function fh(i){this._internalRoot=i}fh.prototype.unstable_scheduleHydration=function(i){if(i){var o=fc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<vr.length&&o!==0&&o<vr[l].priority;l++);vr.splice(l,0,i),l===0&&gc(i)}};function Vp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ph(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function zv(){}function CR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var $=dh(w);_.call($)}}var w=Uv(o,h,i,0,null,!1,!1,"",zv);return i._reactRootContainer=w,i[Yr]=w.current,Ol(i.nodeType===8?i.parentNode:i),Ks(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var $=dh(N);C.call($)}}var N=bp(i,0,!1,null,null,!1,!1,"",zv);return i._reactRootContainer=N,i[Yr]=N.current,Ol(i.nodeType===8?i.parentNode:i),Ks(function(){hh(o,N,l,h)}),N}function mh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var C=p;p=function(){var N=dh(w);C.call(N)}}hh(o,w,i,p)}else w=CR(l,o,i,p,h);return dh(w)}hc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ri(o.pendingLanes);l!==0&&(Pi(o,l|1),yn(o,Ze()),(je&6)===0&&(da=Ze()+500,Fi()))}break;case 13:Ks(function(){var h=ei(i,1);if(h!==null){var p=cn();lr(h,i,1,p)}}),Lp(i,1)}},Vo=function(i){if(i.tag===13){var o=ei(i,134217728);if(o!==null){var l=cn();lr(o,i,134217728,l)}Lp(i,134217728)}},dc=function(i){if(i.tag===13){var o=$i(i),l=ei(i,o);if(l!==null){var h=cn();lr(l,i,o,h)}Lp(i,o)}},fc=function(){return Me},pc=function(i,o){var l=Me;try{return Me=i,o()}finally{Me=l}},ko=function(i,o,l){switch(o){case"input":if(il(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Dc(h);if(!p)throw Error(t(90));To(h),il(h,p)}}}break;case"textarea":Ro(i,l);break;case"select":o=l.value,o!=null&&zr(i,!!l.multiple,o,!1)}},ks=kp,pl=Ks;var RR={usingClientEntryPoint:!1,Events:[Ml,Zo,Dc,_r,fl,kp]},Yl={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AR={bundleType:Yl.bundleType,version:Yl.version,rendererPackageName:Yl.rendererPackageName,rendererConfig:Yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=_l(i),i===null?null:i.stateNode},findFiberByHostInstance:Yl.findFiberByHostInstance||SR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gh.isDisabled&&gh.supportsFiber)try{Os=gh.inject(AR),Cn=gh}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RR,vn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(o))throw Error(t(200));return IR(i,o,null,l)},vn.createRoot=function(i,o){if(!Vp(i))throw Error(t(299));var l=!1,h="",p=Bv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=bp(i,1,!1,null,null,l,!1,h,p),i[Yr]=o.current,Ol(i.nodeType===8?i.parentNode:i),new Mp(o)},vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=_l(o),i=i===null?null:i.stateNode,i},vn.flushSync=function(i){return Ks(i)},vn.hydrate=function(i,o,l){if(!ph(o))throw Error(t(200));return mh(null,i,o,!0,l)},vn.hydrateRoot=function(i,o,l){if(!Vp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=Bv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=Uv(o,null,i,1,l??null,p,!1,_,w),i[Yr]=o.current,Ol(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new fh(o)},vn.render=function(i,o,l){if(!ph(o))throw Error(t(200));return mh(null,i,o,!1,l)},vn.unmountComponentAtNode=function(i){if(!ph(i))throw Error(t(40));return i._reactRootContainer?(Ks(function(){mh(null,null,i,!1,function(){i._reactRootContainer=null,i[Yr]=null})}),!0):!1},vn.unstable_batchedUpdates=kp,vn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!ph(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return mh(i,o,l,!1,h)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var Yv;function MR(){if(Yv)return jp.exports;Yv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),jp.exports=LR(),jp.exports}var Xv;function VR(){if(Xv)return _h;Xv=1;var n=MR();return _h.createRoot=n.createRoot,_h.hydrateRoot=n.hydrateRoot,_h}var FR=VR();const UR=ST(FR),jR=()=>{};var Jv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw $a(e)},$a=function(n){return new Error("Firebase Database ("+CT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},BR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,P=m&63;f||(P=64,u||(T=64)),r.push(t[v],t[E],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(RT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):BR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new zR;const T=a<<2|d>>4;if(r.push(T),m!==64){const P=d<<4&240|m>>2;if(r.push(P),E!==64){const x=m<<6&192|E;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AT=function(n){const e=RT(n);return ng.encodeByteArray(e,!0)},Uh=function(n){return AT(n).replace(/\./g,"")},jh=function(n){try{return ng.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(n){return kT(void 0,n)}function kT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$R(t)||(n[t]=kT(n[t],e[t]));return n}function $R(n){return n!=="__proto__"}/**
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
 */function qR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HR=()=>qR().__FIREBASE_DEFAULTS__,GR=()=>{if(typeof process>"u"||typeof Jv>"u")return;const n=Jv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},KR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jh(n[1]);return e&&JSON.parse(e)},Cd=()=>{try{return jR()||HR()||GR()||KR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},PT=n=>{var e,t;return(t=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rg=n=>{const e=PT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},NT=()=>{var n;return(n=Cd())===null||n===void 0?void 0:n.config},xT=n=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Vr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ig(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Uh(JSON.stringify(t)),Uh(JSON.stringify(u)),""].join(".")}const hu={};function QR(){const n={prod:[],emulator:[]};for(const e of Object.keys(hu))hu[e]?n.emulator.push(e):n.prod.push(e);return n}function YR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Zv=!1;function Ad(n,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||hu[n]===e||hu[n]||Zv)return;hu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=QR().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Zv=!0,u()},T}function v(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=YR(r),P=t("text"),x=document.getElementById(P)||document.createElement("span"),W=t("learnmore"),U=document.getElementById(W)||document.createElement("a"),J=t("preprendIcon"),H=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const re=T.element;d(re),v(U,W);const G=m();f(H,J),re.append(H,x,U,G),document.body.appendChild(re)}a?(x.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function XR(){var n;const e=(n=Cd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function DT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eA(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tA(){return CT.NODE_ADMIN===!0}function nA(){return!XR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rA(){try{return typeof indexedDB=="object"}catch{return!1}}function iA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="FirebaseError";class Fr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=sA,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bu.prototype.create)}}class Bu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?oA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Fr(s,d,r)}}function oA(n,e){return n.replace(aA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){return JSON.parse(n)}function Wt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Iu(jh(a[0])||""),t=Iu(jh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},lA=function(n){const e=OT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},uA=function(n){const e=OT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ka(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function pi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(eE(a)&&eE(u)){if(!pi(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function eE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function iu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function su(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,v;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),v=1518500249):(m=a^u^d,v=1859775393):E<60?(m=a&u|d&(a|u),v=2400959708):(m=a^u^d,v=3395469782);const T=(s<<5|s>>>27)+m+f+v+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function hA(n,e){const t=new dA(n,e);return t.subscribe.bind(t)}class dA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Wp),s.error===void 0&&(s.error=Wp),s.complete===void 0&&(s.complete=Wp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wp(){}function Pa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class mi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zs="[DEFAULT]";/**
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
 */class mA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new si;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_A(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gA(n){return n===Zs?void 0:n}function _A(n){return n.instantiationMode==="EAGER"}/**
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
 */class yA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const vA={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},EA=be.INFO,wA={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},TA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=wA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=EA,this._logHandler=TA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const IA=(n,e)=>e.some(t=>n instanceof t);let tE,nE;function SA(){return tE||(tE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CA(){return nE||(nE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bT=new WeakMap,hm=new WeakMap,LT=new WeakMap,$p=new WeakMap,og=new WeakMap;function RA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(ts(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&bT.set(t,n)}).catch(()=>{}),og.set(e,n),e}function AA(n){if(hm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});hm.set(n,e)}let dm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||LT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ts(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kA(n){dm=n(dm)}function PA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qp(this),e,...t);return LT.set(r,e.sort?e.sort():[e]),ts(r)}:CA().includes(n)?function(...e){return n.apply(qp(this),e),ts(bT.get(this))}:function(...e){return ts(n.apply(qp(this),e))}}function NA(n){return typeof n=="function"?PA(n):(n instanceof IDBTransaction&&AA(n),IA(n,SA())?new Proxy(n,dm):n)}function ts(n){if(n instanceof IDBRequest)return RA(n);if($p.has(n))return $p.get(n);const e=NA(n);return e!==n&&($p.set(n,e),og.set(e,n)),e}const qp=n=>og.get(n);function xA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=ts(u);return r&&u.addEventListener("upgradeneeded",f=>{r(ts(u.result),f.oldVersion,f.newVersion,ts(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const DA=["get","getKey","getAll","getAllKeys","count"],OA=["put","add","delete","clear"],Hp=new Map;function rE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hp.get(e))return Hp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=OA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||DA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Hp.set(e,a),a}kA(n=>({...n,get:(e,t,r)=>rE(e,t)||n.get(e,t,r),has:(e,t)=>!!rE(e,t)||n.has(e,t)}));/**
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
 */class bA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function LA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fm="@firebase/app",iE="0.13.2";/**
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
 */const gi=new Pd("@firebase/app"),MA="@firebase/app-compat",VA="@firebase/analytics-compat",FA="@firebase/analytics",UA="@firebase/app-check-compat",jA="@firebase/app-check",BA="@firebase/auth",zA="@firebase/auth-compat",WA="@firebase/database",$A="@firebase/data-connect",qA="@firebase/database-compat",HA="@firebase/functions",GA="@firebase/functions-compat",KA="@firebase/installations",QA="@firebase/installations-compat",YA="@firebase/messaging",XA="@firebase/messaging-compat",JA="@firebase/performance",ZA="@firebase/performance-compat",ek="@firebase/remote-config",tk="@firebase/remote-config-compat",nk="@firebase/storage",rk="@firebase/storage-compat",ik="@firebase/firestore",sk="@firebase/ai",ok="@firebase/firestore-compat",ak="firebase",lk="11.10.0";/**
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
 */const pm="[DEFAULT]",uk={[fm]:"fire-core",[MA]:"fire-core-compat",[FA]:"fire-analytics",[VA]:"fire-analytics-compat",[jA]:"fire-app-check",[UA]:"fire-app-check-compat",[BA]:"fire-auth",[zA]:"fire-auth-compat",[WA]:"fire-rtdb",[$A]:"fire-data-connect",[qA]:"fire-rtdb-compat",[HA]:"fire-fn",[GA]:"fire-fn-compat",[KA]:"fire-iid",[QA]:"fire-iid-compat",[YA]:"fire-fcm",[XA]:"fire-fcm-compat",[JA]:"fire-perf",[ZA]:"fire-perf-compat",[ek]:"fire-rc",[tk]:"fire-rc-compat",[nk]:"fire-gcs",[rk]:"fire-gcs-compat",[ik]:"fire-fst",[ok]:"fire-fst-compat",[sk]:"fire-vertex","fire-js":"fire-js",[ak]:"fire-js-all"};/**
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
 */const Wh=new Map,ck=new Map,mm=new Map;function sE(n,e){try{n.container.addComponent(e)}catch(t){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function us(n){const e=n.name;if(mm.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;mm.set(e,n);for(const t of Wh.values())sE(t,n);for(const t of ck.values())sE(t,n);return!0}function zu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new Bu("app","Firebase",hk);/**
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
 */class dk{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=lk;function MT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ns.create("bad-app-name",{appName:String(s)});if(t||(t=NT()),!t)throw ns.create("no-options");const a=Wh.get(s);if(a){if(pi(t,a.options)&&pi(r,a.config))return a;throw ns.create("duplicate-app",{appName:s})}const u=new yA(s);for(const f of mm.values())u.addComponent(f);const d=new dk(t,r,u);return Wh.set(s,d),d}function Nd(n=pm){const e=Wh.get(n);if(!e&&n===pm&&NT())return MT();if(!e)throw ns.create("no-app",{appName:n});return e}function Gn(n,e,t){var r;let s=(r=uk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(d.join(" "));return}us(new mi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fk="firebase-heartbeat-database",pk=1,Su="firebase-heartbeat-store";let Gp=null;function VT(){return Gp||(Gp=xA(fk,pk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Su)}catch(t){console.warn(t)}}}}).catch(n=>{throw ns.create("idb-open",{originalErrorMessage:n.message})})),Gp}async function mk(n){try{const t=(await VT()).transaction(Su),r=await t.objectStore(Su).get(FT(n));return await t.done,r}catch(e){if(e instanceof Fr)gi.warn(e.message);else{const t=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gi.warn(t.message)}}}async function oE(n,e){try{const r=(await VT()).transaction(Su,"readwrite");await r.objectStore(Su).put(e,FT(n)),await r.done}catch(t){if(t instanceof Fr)gi.warn(t.message);else{const r=ns.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gi.warn(r.message)}}}function FT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gk=1024,_k=30;class yk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ek(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=aE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>_k){const u=wk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=aE(),{heartbeatsToSend:r,unsentEntries:s}=vk(this._heartbeatsCache.heartbeats),a=Uh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return gi.warn(t),""}}}function aE(){return new Date().toISOString().substring(0,10)}function vk(n,e=gk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),lE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),lE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rA()?iA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return oE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return oE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lE(n){return Uh(JSON.stringify({version:2,heartbeats:n})).length}function wk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Tk(n){us(new mi("platform-logger",e=>new bA(e),"PRIVATE")),us(new mi("heartbeat",e=>new yk(e),"PRIVATE")),Gn(fm,iE,n),Gn(fm,iE,"esm2017"),Gn("fire-js","")}Tk("");function ag(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function UT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ik=UT,jT=new Bu("auth","Firebase",UT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Pd("@firebase/auth");function Sk(n,...e){$h.logLevel<=be.WARN&&$h.warn(`Auth (${vs}): ${n}`,...e)}function kh(n,...e){$h.logLevel<=be.ERROR&&$h.error(`Auth (${vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,...e){throw lg(n,...e)}function Pr(n,...e){return lg(n,...e)}function BT(n,e,t){const r=Object.assign(Object.assign({},Ik()),{[e]:t});return new Bu("auth","Firebase",r).create(e,{appName:n.name})}function rs(n){return BT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return jT.create(n,...e)}function Ee(n,e,...t){if(!n)throw lg(e,...t)}function oi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kh(e),new Error(e)}function _i(n,e){n||oi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ck(){return uE()==="http:"||uE()==="https:"}function uE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ck()||ZR()||"connection"in navigator)?navigator.onLine:!0}function Ak(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.shortDelay=e,this.longDelay=t,_i(t>e,"Short delay should be less than long delay!"),this.isMobile=sg()||DT()}get(){return Rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n,e){_i(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nk=new Wu(3e4,6e4);function _o(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Es(n,e,t,r,s={}){return WT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=qa(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return JR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(m.credentials="include"),zT.fetch()(await $T(n,n.config.apiHost,t,d),m)})}async function WT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kk),e);try{const s=new Dk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw yh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw yh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw yh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw yh(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw BT(n,v,m);pr(n,v)}}catch(s){if(s instanceof Fr)throw s;pr(n,"network-request-failed",{message:String(s)})}}async function xd(n,e,t,r,s={}){const a=await Es(n,e,t,r,s);return"mfaPendingCredential"in a&&pr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function $T(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?ug(n.config,s):`${n.config.apiScheme}://${s}`;return Pk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function xk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Dk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Pr(this.auth,"network-request-failed")),Nk.get())})}}function yh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Pr(n,e,r);return s.customData._tokenResponse=t,s}function cE(n){return n!==void 0&&n.enterprise!==void 0}class Ok{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bk(n,e){return Es(n,"GET","/v2/recaptchaConfig",_o(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(n,e){return Es(n,"POST","/v1/accounts:delete",e)}async function qh(n,e){return Es(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mk(n,e=!1){const t=Ge(n),r=await t.getIdToken(e),s=cg(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:du(Kp(s.auth_time)),issuedAtTime:du(Kp(s.iat)),expirationTime:du(Kp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Kp(n){return Number(n)*1e3}function cg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return kh("JWT malformed, contained fewer than 3 sections"),null;try{const s=jh(t);return s?JSON.parse(s):(kh("Failed to decode base64 JWT payload"),null)}catch(s){return kh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hE(n){const e=cg(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fr&&Vk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=du(this.lastLoginAt),this.creationTime=du(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Cu(n,qh(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?qT(a.providerUserInfo):[],d=jk(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new _m(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function Uk(n){const e=Ge(n);await Hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jk(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qT(n){return n.map(e=>{var{providerId:t}=e,r=ag(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(n,e){const t=await WT(n,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await $T(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(f.credentials="include"),zT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zk(n,e){return Es(n,"POST","/v2/accounts:revokeToken",_o(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=hE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await Bk(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new wa;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wa,this.toJSON())}_performRefresh(){return oi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new _m(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Cu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mk(this,e)}reload(){return Uk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Hh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await Cu(this,Lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,W=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,J=(m=t.createdAt)!==null&&m!==void 0?m:void 0,H=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:re,emailVerified:G,isAnonymous:Ae,providerData:me,stsTokenManager:D}=t;Ee(re&&D,e,"internal-error");const S=wa.fromJSON(this.name,D);Ee(typeof re=="string",e,"internal-error"),Ki(E,e.name),Ki(T,e.name),Ee(typeof G=="boolean",e,"internal-error"),Ee(typeof Ae=="boolean",e,"internal-error"),Ki(P,e.name),Ki(x,e.name),Ki(W,e.name),Ki(U,e.name),Ki(J,e.name),Ki(H,e.name);const k=new cr({uid:re,auth:e,email:T,emailVerified:G,displayName:E,isAnonymous:Ae,photoURL:x,phoneNumber:P,tenantId:W,stsTokenManager:S,createdAt:J,lastLoginAt:H});return me&&Array.isArray(me)&&(k.providerData=me.map(O=>Object.assign({},O))),U&&(k._redirectEventId=U),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new wa;s.updateFromServerResponse(t);const a=new cr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?qT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new wa;d.updateFromIdToken(r);const f=new cr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Map;function ai(n){_i(n instanceof Function,"Expected a class definition");let e=dE.get(n);return e?(_i(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dE.set(n,e),e)}/**
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
 */class HT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}HT.type="NONE";const fE=HT;/**
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
 */function Ph(n,e,t){return`firebase:${n}:${e}:${t}`}class Ta{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Ph(this.userKey,s.apiKey,a),this.fullPersistenceKey=Ph("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qh(this.auth,{idToken:e}).catch(()=>{});return t?cr._fromGetAccountInfoResponse(this.auth,t,e):null}return cr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ta(ai(fE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||ai(fE);const u=Ph(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){let E;if(typeof v=="string"){const T=await qh(e,{idToken:v}).catch(()=>{});if(!T)break;E=await cr._fromGetAccountInfoResponse(e,T,v)}else E=cr._fromJSON(e,v);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ta(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Ta(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JT(e))return"Blackberry";if(ZT(e))return"Webos";if(KT(e))return"Safari";if((e.includes("chrome/")||QT(e))&&!e.includes("edge/"))return"Chrome";if(XT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GT(n=sn()){return/firefox\//i.test(n)}function KT(n=sn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QT(n=sn()){return/crios\//i.test(n)}function YT(n=sn()){return/iemobile/i.test(n)}function XT(n=sn()){return/android/i.test(n)}function JT(n=sn()){return/blackberry/i.test(n)}function ZT(n=sn()){return/webos/i.test(n)}function hg(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wk(n=sn()){var e;return hg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $k(){return eA()&&document.documentMode===10}function eI(n=sn()){return hg(n)||XT(n)||ZT(n)||JT(n)||/windows phone/i.test(n)||YT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e=[]){let t;switch(n){case"Browser":t=pE(sn());break;case"Worker":t=`${pE(sn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vs}/${r}`}/**
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
 */class qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hk(n,e={}){return Es(n,"GET","/v2/passwordPolicy",_o(n,e))}/**
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
 */const Gk=6;class Kk{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Gk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mE(this),this.idTokenSubscription=new mE(this),this.beforeStateQueue=new qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ai(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Ta.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qh(this,{idToken:e}),r=await cr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ak()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(rs(this));const t=e?Ge(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hk(this),t=new Kk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ai(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ta.create(this,[ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ha(n){return Ge(n)}class mE{constructor(e){this.auth=e,this.observer=null,this.addObserver=hA(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yk(n){Dd=n}function nI(n){return Dd.loadJS(n)}function Xk(){return Dd.recaptchaEnterpriseScript}function Jk(){return Dd.gapiScript}function Zk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eP{constructor(){this.enterprise=new tP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nP="recaptcha-enterprise",rI="NO_RECAPTCHA";class rP{constructor(e){this.type=nP,this.auth=Ha(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{bk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Ok(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;cE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(rI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&cE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Xk();f.length!==0&&(f+=d),nI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function gE(n,e,t,r=!1,s=!1){const a=new rP(n);let u;if(s)u=rI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function _E(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await gE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await gE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(n,e){const t=zu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(pi(a,e??{}))return s;pr(s,"already-initialized")}return t.initialize({options:e})}function sP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ai);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oP(n,e,t){const r=Ha(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=iI(e),{host:u,port:d}=aP(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(pi(m,r.config.emulator)&&pi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Vr(u)?(Rd(`${a}//${u}${f}`),Ad("Auth",!0)):lP()}function iI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aP(n){const e=iI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:yE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:yE(u)}}}function yE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return oi("not implemented")}_getIdTokenResponse(e){return oi("not implemented")}_linkToIdToken(e,t){return oi("not implemented")}_getReauthenticationResolver(e){return oi("not implemented")}}async function uP(n,e){return Es(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(n,e){return xd(n,"POST","/v1/accounts:signInWithPassword",_o(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(n,e){return xd(n,"POST","/v1/accounts:signInWithEmailLink",_o(n,e))}async function dP(n,e){return xd(n,"POST","/v1/accounts:signInWithEmailLink",_o(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends dg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ru(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ru(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _E(e,t,"signInWithPassword",cP);case"emailLink":return hP(e,{email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _E(e,r,"signUpPassword",uP);case"emailLink":return dP(e,{idToken:t,email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(n,e){return xd(n,"POST","/v1/accounts:signInWithIdp",_o(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="http://localhost";class lo extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=ag(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new lo(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ia(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ia(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ia(e,t)}buildRequest(){const e={requestUri:fP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mP(n){const e=iu(su(n)).link,t=e?iu(su(e)).deep_link_id:null,r=iu(su(n)).deep_link_id;return(r?iu(su(r)).link:null)||r||t||e||n}class fg{constructor(e){var t,r,s,a,u,d;const f=iu(su(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,E=pP((s=f.mode)!==null&&s!==void 0?s:null);Ee(m&&v&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=mP(e);try{return new fg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.providerId=Ga.PROVIDER_ID}static credential(e,t){return Ru._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=fg.parseLink(t);return Ee(r,"argument-error"),Ru._fromEmailAndCode(e,r.code,r.tenantId)}}Ga.PROVIDER_ID="password";Ga.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ga.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $u extends sI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends $u{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends $u{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lo._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Yi.credential(t,r)}catch{return null}}}Yi.GOOGLE_SIGN_IN_METHOD="google.com";Yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends $u{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xi.credentialFromTaggedObject(e)}static credentialFromError(e){return Xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xi.credential(e.oauthAccessToken)}catch{return null}}}Xi.GITHUB_SIGN_IN_METHOD="github.com";Xi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends $u{constructor(){super("twitter.com")}static credential(e,t){return lo._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ji.credentialFromTaggedObject(e)}static credentialFromError(e){return Ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ji.credential(t,r)}catch{return null}}}Ji.TWITTER_SIGN_IN_METHOD="twitter.com";Ji.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await cr._fromIdTokenResponse(e,r,s),u=vE(r);return new Na({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vE(r);return new Na({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Fr{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Gh(e,t,r,s)}}function oI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Gh._fromErrorAndOperation(n,a,e,r):a})}async function gP(n,e,t=!1){const r=await Cu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Na._forOperation(n,"link",r)}/**
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
 */async function _P(n,e,t=!1){const{auth:r}=n;if(Dn(r.app))return Promise.reject(rs(r));const s="reauthenticate";try{const a=await Cu(n,oI(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const u=cg(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),Na._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&pr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(n,e,t=!1){if(Dn(n.app))return Promise.reject(rs(n));const r="signIn",s=await oI(n,r,e),a=await Na._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function yP(n,e){return aI(Ha(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(n){const e=Ha(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function EP(n,e,t){return Dn(n.app)?Promise.reject(rs(n)):yP(Ge(n),Ga.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vP(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n,e){return Ge(n).setPersistence(e)}function TP(n,e,t,r){return Ge(n).onIdTokenChanged(e,t,r)}function IP(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function SP(n,e,t,r){return Ge(n).onAuthStateChanged(e,t,r)}function CP(n){return Ge(n).signOut()}const Kh="__sak";/**
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
 */class lI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kh,"1"),this.storage.removeItem(Kh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=1e3,AP=10;class uI extends lI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);$k()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uI.type="LOCAL";const cI=uI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI extends lI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hI.type="SESSION";const dI=hI;/**
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
 */function kP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Od{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Od(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await kP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Od.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class PP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=pg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}function NP(n){Nr().location.href=n}/**
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
 */function fI(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function xP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function OP(){return fI()?self:null}/**
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
 */const pI="firebaseLocalStorageDb",bP=1,Qh="firebaseLocalStorage",mI="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([Qh],e?"readwrite":"readonly").objectStore(Qh)}function LP(){const n=indexedDB.deleteDatabase(pI);return new qu(n).toPromise()}function ym(){const n=indexedDB.open(pI,bP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Qh,{keyPath:mI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Qh)?e(r):(r.close(),await LP(),e(await ym()))})})}async function EE(n,e,t){const r=bd(n,!0).put({[mI]:e,value:t});return new qu(r).toPromise()}async function MP(n,e){const t=bd(n,!1).get(e),r=await new qu(t).toPromise();return r===void 0?null:r.value}function wE(n,e){const t=bd(n,!0).delete(e);return new qu(t).toPromise()}const VP=800,FP=3;class gI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ym(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>FP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Od._getInstance(OP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xP(),!this.activeServiceWorker)return;this.sender=new PP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await EE(e,Kh,"1"),await wE(e,Kh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>EE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>MP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=bd(s,!1).getAll();return new qu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gI.type="LOCAL";const UP=gI;new Wu(3e4,6e4);/**
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
 */function jP(n,e){return e?ai(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class mg extends dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ia(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ia(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ia(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BP(n){return aI(n.auth,new mg(n),n.bypassAuthState)}function zP(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),_P(t,new mg(n),n.bypassAuthState)}async function WP(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),gP(t,new mg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BP;case"linkViaPopup":case"linkViaRedirect":return WP;case"reauthViaPopup":case"reauthViaRedirect":return zP;default:pr(this.auth,"internal-error")}}resolve(e){_i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Wu(2e3,1e4);class va extends _I{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,va.currentPopupAction&&va.currentPopupAction.cancel(),va.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){_i(this.filter.length===1,"Popup operations only handle one event");const e=pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,va.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$P.get())};e()}}va.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="pendingRedirect",Nh=new Map;class HP extends _I{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Nh.get(this.auth._key());if(!e){try{const r=await GP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Nh.set(this.auth._key(),e)}return this.bypassAuthState||Nh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GP(n,e){const t=YP(e),r=QP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function KP(n,e){Nh.set(n._key(),e)}function QP(n){return ai(n._redirectPersistence)}function YP(n){return Ph(qP,n.config.apiKey,n.name)}async function XP(n,e,t=!1){if(Dn(n.app))return Promise.reject(rs(n));const r=Ha(n),s=jP(r,e),u=await new HP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=600*1e3;class ZP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Pr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JP&&this.cachedEventUids.clear(),this.cachedEventUids.has(TE(e))}saveEventToCache(e){this.cachedEventUids.add(TE(e)),this.lastProcessedEventTime=Date.now()}}function TE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(n,e={}){return Es(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r1=/^https?/;async function i1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await t1(n);for(const t of e)try{if(s1(t))return}catch{}pr(n,"unauthorized-domain")}function s1(n){const e=gm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!r1.test(t))return!1;if(n1.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const o1=new Wu(3e4,6e4);function IE(){const n=Nr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function a1(n){return new Promise((e,t)=>{var r,s,a;function u(){IE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{IE(),t(Pr(n,"network-request-failed"))},timeout:o1.get()})}if(!((s=(r=Nr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Nr().gapi)===null||a===void 0)&&a.load)u();else{const d=Zk("iframefcb");return Nr()[d]=()=>{gapi.load?u():t(Pr(n,"network-request-failed"))},nI(`${Jk()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw xh=null,e})}let xh=null;function l1(n){return xh=xh||a1(n),xh}/**
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
 */const u1=new Wu(5e3,15e3),c1="__/auth/iframe",h1="emulator/auth/iframe",d1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p1(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ug(e,h1):`https://${n.config.authDomain}/${c1}`,r={apiKey:e.apiKey,appName:n.name,v:vs},s=f1.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${qa(r).slice(1)}`}async function m1(n){const e=await l1(n),t=Nr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:p1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d1,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Pr(n,"network-request-failed"),d=Nr().setTimeout(()=>{a(u)},u1.get());function f(){Nr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const g1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_1=500,y1=600,v1="_blank",E1="http://localhost";class SE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w1(n,e,t,r=_1,s=y1){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},g1),{width:r.toString(),height:s.toString(),top:a,left:u}),m=sn().toLowerCase();t&&(d=QT(m)?v1:t),GT(m)&&(e=e||E1,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[P,x])=>`${T}${P}=${x},`,"");if(Wk(m)&&d!=="_self")return T1(e||"",d),new SE(null);const E=window.open(e||"",d,v);Ee(E,n,"popup-blocked");try{E.focus()}catch{}return new SE(E)}function T1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const I1="__/auth/handler",S1="emulator/auth/handler",C1=encodeURIComponent("fac");async function CE(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vs,eventId:s};if(e instanceof sI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Bh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof $u){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${C1}=${encodeURIComponent(f)}`:"";return`${R1(n)}?${qa(d).slice(1)}${m}`}function R1({config:n}){return n.emulator?ug(n,S1):`https://${n.authDomain}/${I1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="webStorageSupport";class A1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dI,this._completeRedirectFn=XP,this._overrideRedirectResult=KP}async _openPopup(e,t,r,s){var a;_i((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await CE(e,t,r,gm(),s);return w1(e,u,pg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await CE(e,t,r,gm(),s);return NP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(_i(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await m1(e),r=new ZP(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qp,{type:Qp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Qp];u!==void 0&&t(!!u),pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=i1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eI()||KT()||hg()}}const k1=A1;var RE="@firebase/auth",AE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x1(n){us(new mi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tI(n)},m=new Qk(r,s,a,f);return sP(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),us(new mi("auth-internal",e=>{const t=Ha(e.getProvider("auth").getImmediate());return(r=>new P1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(RE,AE,N1(n)),Gn(RE,AE,"esm2017")}/**
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
 */const D1=300,O1=xT("authIdTokenMaxAge")||D1;let kE=null;const b1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>O1)return;const s=t==null?void 0:t.token;kE!==s&&(kE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function L1(n=Nd()){const e=zu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iP(n,{popupRedirectResolver:k1,persistence:[UP,cI,dI]}),r=xT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=b1(a.toString());IP(t,u,()=>u(t.currentUser)),TP(t,d=>u(d))}}const s=PT("auth");return s&&oP(t,`http://${s}`),t}function M1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Yk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Pr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",M1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x1("Browser");var PE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,vI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function k(){}k.prototype=S.prototype,D.D=S.prototype,D.prototype=new k,D.prototype.constructor=D,D.C=function(O,L,F){for(var A=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)A[ot-2]=arguments[ot];return S.prototype[L].apply(O,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,S,k){k||(k=0);var O=Array(16);if(typeof S=="string")for(var L=0;16>L;++L)O[L]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(L=0;16>L;++L)O[L]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=D.g[0],k=D.g[1],L=D.g[2];var F=D.g[3],A=S+(F^k&(L^F))+O[0]+3614090360&4294967295;S=k+(A<<7&4294967295|A>>>25),A=F+(L^S&(k^L))+O[1]+3905402710&4294967295,F=S+(A<<12&4294967295|A>>>20),A=L+(k^F&(S^k))+O[2]+606105819&4294967295,L=F+(A<<17&4294967295|A>>>15),A=k+(S^L&(F^S))+O[3]+3250441966&4294967295,k=L+(A<<22&4294967295|A>>>10),A=S+(F^k&(L^F))+O[4]+4118548399&4294967295,S=k+(A<<7&4294967295|A>>>25),A=F+(L^S&(k^L))+O[5]+1200080426&4294967295,F=S+(A<<12&4294967295|A>>>20),A=L+(k^F&(S^k))+O[6]+2821735955&4294967295,L=F+(A<<17&4294967295|A>>>15),A=k+(S^L&(F^S))+O[7]+4249261313&4294967295,k=L+(A<<22&4294967295|A>>>10),A=S+(F^k&(L^F))+O[8]+1770035416&4294967295,S=k+(A<<7&4294967295|A>>>25),A=F+(L^S&(k^L))+O[9]+2336552879&4294967295,F=S+(A<<12&4294967295|A>>>20),A=L+(k^F&(S^k))+O[10]+4294925233&4294967295,L=F+(A<<17&4294967295|A>>>15),A=k+(S^L&(F^S))+O[11]+2304563134&4294967295,k=L+(A<<22&4294967295|A>>>10),A=S+(F^k&(L^F))+O[12]+1804603682&4294967295,S=k+(A<<7&4294967295|A>>>25),A=F+(L^S&(k^L))+O[13]+4254626195&4294967295,F=S+(A<<12&4294967295|A>>>20),A=L+(k^F&(S^k))+O[14]+2792965006&4294967295,L=F+(A<<17&4294967295|A>>>15),A=k+(S^L&(F^S))+O[15]+1236535329&4294967295,k=L+(A<<22&4294967295|A>>>10),A=S+(L^F&(k^L))+O[1]+4129170786&4294967295,S=k+(A<<5&4294967295|A>>>27),A=F+(k^L&(S^k))+O[6]+3225465664&4294967295,F=S+(A<<9&4294967295|A>>>23),A=L+(S^k&(F^S))+O[11]+643717713&4294967295,L=F+(A<<14&4294967295|A>>>18),A=k+(F^S&(L^F))+O[0]+3921069994&4294967295,k=L+(A<<20&4294967295|A>>>12),A=S+(L^F&(k^L))+O[5]+3593408605&4294967295,S=k+(A<<5&4294967295|A>>>27),A=F+(k^L&(S^k))+O[10]+38016083&4294967295,F=S+(A<<9&4294967295|A>>>23),A=L+(S^k&(F^S))+O[15]+3634488961&4294967295,L=F+(A<<14&4294967295|A>>>18),A=k+(F^S&(L^F))+O[4]+3889429448&4294967295,k=L+(A<<20&4294967295|A>>>12),A=S+(L^F&(k^L))+O[9]+568446438&4294967295,S=k+(A<<5&4294967295|A>>>27),A=F+(k^L&(S^k))+O[14]+3275163606&4294967295,F=S+(A<<9&4294967295|A>>>23),A=L+(S^k&(F^S))+O[3]+4107603335&4294967295,L=F+(A<<14&4294967295|A>>>18),A=k+(F^S&(L^F))+O[8]+1163531501&4294967295,k=L+(A<<20&4294967295|A>>>12),A=S+(L^F&(k^L))+O[13]+2850285829&4294967295,S=k+(A<<5&4294967295|A>>>27),A=F+(k^L&(S^k))+O[2]+4243563512&4294967295,F=S+(A<<9&4294967295|A>>>23),A=L+(S^k&(F^S))+O[7]+1735328473&4294967295,L=F+(A<<14&4294967295|A>>>18),A=k+(F^S&(L^F))+O[12]+2368359562&4294967295,k=L+(A<<20&4294967295|A>>>12),A=S+(k^L^F)+O[5]+4294588738&4294967295,S=k+(A<<4&4294967295|A>>>28),A=F+(S^k^L)+O[8]+2272392833&4294967295,F=S+(A<<11&4294967295|A>>>21),A=L+(F^S^k)+O[11]+1839030562&4294967295,L=F+(A<<16&4294967295|A>>>16),A=k+(L^F^S)+O[14]+4259657740&4294967295,k=L+(A<<23&4294967295|A>>>9),A=S+(k^L^F)+O[1]+2763975236&4294967295,S=k+(A<<4&4294967295|A>>>28),A=F+(S^k^L)+O[4]+1272893353&4294967295,F=S+(A<<11&4294967295|A>>>21),A=L+(F^S^k)+O[7]+4139469664&4294967295,L=F+(A<<16&4294967295|A>>>16),A=k+(L^F^S)+O[10]+3200236656&4294967295,k=L+(A<<23&4294967295|A>>>9),A=S+(k^L^F)+O[13]+681279174&4294967295,S=k+(A<<4&4294967295|A>>>28),A=F+(S^k^L)+O[0]+3936430074&4294967295,F=S+(A<<11&4294967295|A>>>21),A=L+(F^S^k)+O[3]+3572445317&4294967295,L=F+(A<<16&4294967295|A>>>16),A=k+(L^F^S)+O[6]+76029189&4294967295,k=L+(A<<23&4294967295|A>>>9),A=S+(k^L^F)+O[9]+3654602809&4294967295,S=k+(A<<4&4294967295|A>>>28),A=F+(S^k^L)+O[12]+3873151461&4294967295,F=S+(A<<11&4294967295|A>>>21),A=L+(F^S^k)+O[15]+530742520&4294967295,L=F+(A<<16&4294967295|A>>>16),A=k+(L^F^S)+O[2]+3299628645&4294967295,k=L+(A<<23&4294967295|A>>>9),A=S+(L^(k|~F))+O[0]+4096336452&4294967295,S=k+(A<<6&4294967295|A>>>26),A=F+(k^(S|~L))+O[7]+1126891415&4294967295,F=S+(A<<10&4294967295|A>>>22),A=L+(S^(F|~k))+O[14]+2878612391&4294967295,L=F+(A<<15&4294967295|A>>>17),A=k+(F^(L|~S))+O[5]+4237533241&4294967295,k=L+(A<<21&4294967295|A>>>11),A=S+(L^(k|~F))+O[12]+1700485571&4294967295,S=k+(A<<6&4294967295|A>>>26),A=F+(k^(S|~L))+O[3]+2399980690&4294967295,F=S+(A<<10&4294967295|A>>>22),A=L+(S^(F|~k))+O[10]+4293915773&4294967295,L=F+(A<<15&4294967295|A>>>17),A=k+(F^(L|~S))+O[1]+2240044497&4294967295,k=L+(A<<21&4294967295|A>>>11),A=S+(L^(k|~F))+O[8]+1873313359&4294967295,S=k+(A<<6&4294967295|A>>>26),A=F+(k^(S|~L))+O[15]+4264355552&4294967295,F=S+(A<<10&4294967295|A>>>22),A=L+(S^(F|~k))+O[6]+2734768916&4294967295,L=F+(A<<15&4294967295|A>>>17),A=k+(F^(L|~S))+O[13]+1309151649&4294967295,k=L+(A<<21&4294967295|A>>>11),A=S+(L^(k|~F))+O[4]+4149444226&4294967295,S=k+(A<<6&4294967295|A>>>26),A=F+(k^(S|~L))+O[11]+3174756917&4294967295,F=S+(A<<10&4294967295|A>>>22),A=L+(S^(F|~k))+O[2]+718787259&4294967295,L=F+(A<<15&4294967295|A>>>17),A=k+(F^(L|~S))+O[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(L+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+L&4294967295,D.g[3]=D.g[3]+F&4294967295}r.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var k=S-this.blockSize,O=this.B,L=this.h,F=0;F<S;){if(L==0)for(;F<=k;)s(this,D,F),F+=this.blockSize;if(typeof D=="string"){for(;F<S;)if(O[L++]=D.charCodeAt(F++),L==this.blockSize){s(this,O),L=0;break}}else for(;F<S;)if(O[L++]=D[F++],L==this.blockSize){s(this,O),L=0;break}}this.h=L,this.o+=S},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var k=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=k&255,k/=256;for(this.u(D),D=Array(16),S=k=0;4>S;++S)for(var O=0;32>O;O+=8)D[k++]=this.g[S]>>>O&255;return D};function a(D,S){var k=d;return Object.prototype.hasOwnProperty.call(k,D)?k[D]:k[D]=S(D)}function u(D,S){this.h=S;for(var k=[],O=!0,L=D.length-1;0<=L;L--){var F=D[L]|0;O&&F==S||(k[L]=F,O=!1)}this.g=k}var d={};function f(D){return-128<=D&&128>D?a(D,function(S){return new u([S|0],0>S?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return U(m(-D));for(var S=[],k=1,O=0;D>=k;O++)S[O]=D/k|0,k*=4294967296;return new u(S,0)}function v(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return U(v(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=m(Math.pow(S,8)),O=E,L=0;L<D.length;L+=8){var F=Math.min(8,D.length-L),A=parseInt(D.substring(L,L+F),S);8>F?(F=m(Math.pow(S,F)),O=O.j(F).add(m(A))):(O=O.j(k),O=O.add(m(A)))}return O}var E=f(0),T=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(W(this))return-U(this).m();for(var D=0,S=1,k=0;k<this.g.length;k++){var O=this.i(k);D+=(0<=O?O:4294967296+O)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(x(this))return"0";if(W(this))return"-"+U(this).toString(D);for(var S=m(Math.pow(D,6)),k=this,O="";;){var L=G(k,S).g;k=J(k,L.j(S));var F=((0<k.g.length?k.g[0]:k.h)>>>0).toString(D);if(k=L,x(k))return F+O;for(;6>F.length;)F="0"+F;O=F+O}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function x(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function W(D){return D.h==-1}n.l=function(D){return D=J(this,D),W(D)?-1:x(D)?0:1};function U(D){for(var S=D.g.length,k=[],O=0;O<S;O++)k[O]=~D.g[O];return new u(k,~D.h).add(T)}n.abs=function(){return W(this)?U(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],O=0,L=0;L<=S;L++){var F=O+(this.i(L)&65535)+(D.i(L)&65535),A=(F>>>16)+(this.i(L)>>>16)+(D.i(L)>>>16);O=A>>>16,F&=65535,A&=65535,k[L]=A<<16|F}return new u(k,k[k.length-1]&-2147483648?-1:0)};function J(D,S){return D.add(U(S))}n.j=function(D){if(x(this)||x(D))return E;if(W(this))return W(D)?U(this).j(U(D)):U(U(this).j(D));if(W(D))return U(this.j(U(D)));if(0>this.l(P)&&0>D.l(P))return m(this.m()*D.m());for(var S=this.g.length+D.g.length,k=[],O=0;O<2*S;O++)k[O]=0;for(O=0;O<this.g.length;O++)for(var L=0;L<D.g.length;L++){var F=this.i(O)>>>16,A=this.i(O)&65535,ot=D.i(L)>>>16,dt=D.i(L)&65535;k[2*O+2*L]+=A*dt,H(k,2*O+2*L),k[2*O+2*L+1]+=F*dt,H(k,2*O+2*L+1),k[2*O+2*L+1]+=A*ot,H(k,2*O+2*L+1),k[2*O+2*L+2]+=F*ot,H(k,2*O+2*L+2)}for(O=0;O<S;O++)k[O]=k[2*O+1]<<16|k[2*O];for(O=S;O<2*S;O++)k[O]=0;return new u(k,0)};function H(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function re(D,S){this.g=D,this.h=S}function G(D,S){if(x(S))throw Error("division by zero");if(x(D))return new re(E,E);if(W(D))return S=G(U(D),S),new re(U(S.g),U(S.h));if(W(S))return S=G(D,U(S)),new re(U(S.g),S.h);if(30<D.g.length){if(W(D)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var k=T,O=S;0>=O.l(D);)k=Ae(k),O=Ae(O);var L=me(k,1),F=me(O,1);for(O=me(O,2),k=me(k,2);!x(O);){var A=F.add(O);0>=A.l(D)&&(L=L.add(k),F=A),O=me(O,1),k=me(k,1)}return S=J(D,L.j(S)),new re(L,S)}for(L=E;0<=D.l(S);){for(k=Math.max(1,Math.floor(D.m()/S.m())),O=Math.ceil(Math.log(k)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),F=m(k),A=F.j(S);W(A)||0<A.l(D);)k-=O,F=m(k),A=F.j(S);x(F)&&(F=T),L=L.add(F),D=J(D,A)}return new re(L,D)}n.A=function(D){return G(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],O=0;O<S;O++)k[O]=this.i(O)&D.i(O);return new u(k,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],O=0;O<S;O++)k[O]=this.i(O)|D.i(O);return new u(k,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],O=0;O<S;O++)k[O]=this.i(O)^D.i(O);return new u(k,this.h^D.h)};function Ae(D){for(var S=D.g.length+1,k=[],O=0;O<S;O++)k[O]=D.i(O)<<1|D.i(O-1)>>>31;return new u(k,D.h)}function me(D,S){var k=S>>5;S%=32;for(var O=D.g.length-k,L=[],F=0;F<O;F++)L[F]=0<S?D.i(F+k)>>>S|D.i(F+k+1)<<32-S:D.i(F+k);return new u(L,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,is=u}).apply(typeof PE<"u"?PE:typeof self<"u"?self:typeof window<"u"?window:{});var vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var EI,ou,wI,Dh,vm,TI,II,SI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof vh=="object"&&vh];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var j=c[I];if(!(j in y))break e;y=y[j]}c=c[c.length-1],I=y[c],g=g(I),g!=I&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,I=!1,j={next:function(){if(!I&&y<c.length){var q=y++;return{value:g(q,c[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function E(c,g,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,I),c.apply(g,j)}}return function(){return c.apply(g,arguments)}}function T(c,g,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function P(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function x(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,j,q){for(var ie=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ie[Ke-2]=arguments[Ke];return g.prototype[j].apply(I,ie)}}function W(c){const g=c.length;if(0<g){const y=Array(g);for(let I=0;I<g;I++)y[I]=c[I];return y}return[]}function U(c,g){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const j=c.length||0,q=I.length||0;c.length=j+q;for(let ie=0;ie<q;ie++)c[j+ie]=I[ie]}else c.push(I)}}class J{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function H(c){return/^[\s\xa0]*$/.test(c)}function re(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function G(c){return G[" "](c),c}G[" "]=function(){};var Ae=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function me(c,g,y){for(const I in c)g.call(y,c[I],I,c)}function D(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function S(c){const g={};for(const y in c)g[y]=c[y];return g}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,g){let y,I;for(let j=1;j<arguments.length;j++){I=arguments[j];for(y in I)c[y]=I[y];for(let q=0;q<k.length;q++)y=k[q],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function L(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function F(c){d.setTimeout(()=>{throw c},0)}function A(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ot{constructor(){this.h=this.g=null}add(g,y){const I=dt.get();I.set(g,y),this.h?this.h.next=I:this.g=I,this.h=I}}var dt=new J(()=>new kt,c=>c.reset());class kt{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,se=!1,ge=new ot,ae=()=>{const c=d.Promise.resolve(void 0);ze=()=>{c.then(V)}};var V=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(y){F(y)}var g=dt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}se=!1};function M(){this.s=this.s,this.C=this.C}M.prototype.s=!1,M.prototype.ma=function(){this.s||(this.s=!0,this.N())},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c})();function ke(c,g){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ae){e:{try{G(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ke.aa.h.call(this)}}x(ke,te);var Ve={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Je(c,g,y,I,j){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!I,this.ha=j,this.key=++$e,this.da=this.fa=!1}function Lt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function jr(c){this.src=c,this.g={},this.h=0}jr.prototype.add=function(c,g,y,I,j){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ie=Ii(c,g,I,j);return-1<ie?(g=c[ie],y||(g.fa=!1)):(g=new Je(g,this.src,q,!!I,j),g.fa=y,c.push(g)),g};function To(c,g){var y=g.type;if(y in c.g){var I=c.g[y],j=Array.prototype.indexOf.call(I,g,void 0),q;(q=0<=j)&&Array.prototype.splice.call(I,j,1),q&&(Lt(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Ii(c,g,y,I){for(var j=0;j<c.length;++j){var q=c[j];if(!q.da&&q.listener==g&&q.capture==!!y&&q.ha==I)return j}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),Io={};function rl(c,g,y,I,j){if(Array.isArray(g)){for(var q=0;q<g.length;q++)rl(c,g[q],y,I,j);return null}return y=ol(y),c&&c[We]?c.K(g,y,m(I)?!!I.capture:!1,j):il(c,g,y,!1,I,j)}function il(c,g,y,I,j,q){if(!g)throw Error("Invalid event type");var ie=m(j)?!!j.capture:!!j,Ke=Co(c);if(Ke||(c[Ss]=Ke=new jr(c)),y=Ke.add(g,y,I,ie,q),y.proxy)return y;if(I=nc(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Se||(j=ie),j===void 0&&(j=!1),c.addEventListener(g.toString(),I,j);else if(c.attachEvent)c.attachEvent(zr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function nc(){function c(y){return g.call(c.src,c.listener,y)}const g=sl;return c}function So(c,g,y,I,j){if(Array.isArray(g))for(var q=0;q<g.length;q++)So(c,g[q],y,I,j);else I=m(I)?!!I.capture:!!I,y=ol(y),c&&c[We]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],y=Ii(q,y,I,j),-1<y&&(Lt(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Co(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ii(g,y,I,j)),(y=-1<c?g[c]:null)&&Br(y))}function Br(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[We])To(g.i,c);else{var y=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(y,I,c.capture):g.detachEvent?g.detachEvent(zr(y),I):g.addListener&&g.removeListener&&g.removeListener(I),(y=Co(g))?(To(y,c),y.h==0&&(y.src=null,g[Ss]=null)):Lt(c)}}}function zr(c){return c in Io?Io[c]:Io[c]="on"+c}function sl(c,g){if(c.da)c=!0;else{g=new ke(g,this);var y=c.listener,I=c.ha||c.src;c.fa&&Br(c),c=y.call(I,g)}return c}function Co(c){return c=c[Ss],c instanceof jr?c:null}var Ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function ol(c){return typeof c=="function"?c:(c[Ro]||(c[Ro]=function(g){return c.handleEvent(g)}),c[Ro])}function Pt(){M.call(this),this.i=new jr(this),this.M=this,this.F=null}x(Pt,M),Pt.prototype[We]=!0,Pt.prototype.removeEventListener=function(c,g,y,I){So(this,c,g,y,I)};function Nt(c,g){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new te(g,c);else if(g instanceof te)g.target=g.target||c;else{var j=g;g=new te(I,c),O(g,j)}if(j=!0,y)for(var q=y.length-1;0<=q;q--){var ie=g.g=y[q];j=Wr(ie,I,!0,g)&&j}if(ie=g.g=c,j=Wr(ie,I,!0,g)&&j,j=Wr(ie,I,!1,g)&&j,y)for(q=0;q<y.length;q++)ie=g.g=y[q],j=Wr(ie,I,!1,g)&&j}Pt.prototype.N=function(){if(Pt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],I=0;I<y.length;I++)Lt(y[I]);delete c.g[g],c.h--}}this.F=null},Pt.prototype.K=function(c,g,y,I){return this.i.add(String(c),g,!1,y,I)},Pt.prototype.L=function(c,g,y,I){return this.i.add(String(c),g,!0,y,I)};function Wr(c,g,y,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,q=0;q<g.length;++q){var ie=g[q];if(ie&&!ie.da&&ie.capture==y){var Ke=ie.listener,xt=ie.ha||ie.src;ie.fa&&To(c.i,ie),j=Ke.call(xt,I)!==!1&&j}}return j&&!I.defaultPrevented}function al(c,g,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Si(c){c.g=al(()=>{c.g=null,c.i&&(c.i=!1,Si(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Cs extends M{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Si(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rs(c){M.call(this),this.h=c,this.g={}}x(Rs,M);var ll=[];function ul(c){me(c.g,function(g,y){this.g.hasOwnProperty(y)&&Br(g)},c),c.g={}}Rs.prototype.N=function(){Rs.aa.N.call(this),ul(this)},Rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cl=d.JSON.stringify,hl=d.JSON.parse,dl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function As(){}As.prototype.h=null;function Ao(c){return c.h||(c.h=c.i())}function ko(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){te.call(this,"d")}x(gr,te);function Po(){te.call(this,"c")}x(Po,te);var _r={},fl=null;function ks(){return fl=fl||new Pt}_r.La="serverreachability";function pl(c){te.call(this,_r.La,c)}x(pl,te);function $r(c){const g=ks();Nt(g,new pl(g))}_r.STAT_EVENT="statevent";function ml(c,g){te.call(this,_r.STAT_EVENT,c),this.stat=g}x(ml,te);function gt(c){const g=ks();Nt(g,new ml(g,c))}_r.Ma="timingevent";function No(c,g){te.call(this,_r.Ma,c),this.size=g}x(No,te);function Kn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function Ns(c,g,y,I,j,q){c.info(function(){if(c.g)if(q)for(var ie="",Ke=q.split("&"),xt=0;xt<Ke.length;xt++){var Fe=Ke[xt].split("=");if(1<Fe.length){var Mt=Fe[0];Fe=Fe[1];var Et=Mt.split("_");ie=2<=Et.length&&Et[1]=="type"?ie+(Mt+"="+Fe+"&"):ie+(Mt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+I+") [attempt "+j+"]: "+g+`
`+y+`
`+ie})}function xo(c,g,y,I,j,q,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+j+"]: "+g+`
`+y+`
`+q+" "+ie})}function Qn(c,g,y,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+df(c,y)+(I?" "+I:"")})}function gl(c,g){c.info(function(){return"TIMEOUT: "+g})}Ps.prototype.info=function(){};function df(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var j=I[1];if(Array.isArray(j)&&!(1>j.length)){var q=j[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return cl(y)}catch{return g}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function xs(){}x(xs,As),xs.prototype.g=function(){return new XMLHttpRequest},xs.prototype.i=function(){return{}},Yn=new xs;function Xn(c,g,y,I){this.j=c,this.i=g,this.l=y,this.R=I||1,this.U=new Rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var _l={},Oo={};function bo(c,g,y){c.L=1,c.v=Pi(Rn(g)),c.m=y,c.P=!0,yl(c,null)}function yl(c,g){c.F=Date.now(),Ze(c),c.A=Rn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),xi(y.i,"t",I),c.C=0,y=c.j.J,c.h=new ic,c.g=Tc(c.j,y?g:null,!c.m),0<c.O&&(c.M=new Cs(T(c.Y,c,c.g),c.O)),g=c.U,y=c.g,I=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(ll[0]=j.toString()),j=ll);for(var q=0;q<j.length;q++){var ie=rl(y,j[q],I||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),$r(),Ns(c.i,c.u,c.A,c.l,c.R,c.m)}Xn.prototype.ca=function(c){c=c.target;const g=this.M;g&&fn(c)==3?g.j():this.Y(c)},Xn.prototype.Y=function(c){try{if(c==this.g)e:{const Et=fn(this.g);var g=this.g.Ba();const Fn=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Sl(this.g)))){this.J||Et!=4||g==7||(g==8||0>=Fn?$r(3):$r(2)),Ds(this);var y=this.g.Z();this.X=y;t:if(sc(this)){var I=Sl(this.g);c="";var j=I.length,q=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),Ci(this);var ie="";break t}this.h.i=new d.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(q&&g==j-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,xo(this.i,this.u,this.A,this.l,this.R,Et,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,xt=this.g;if((Ke=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Ke)){var Fe=Ke;break t}}Fe=null}if(y=Fe)Qn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vl(this,y);else{this.o=!1,this.s=3,gt(12),Mn(this),Ci(this);break e}}if(this.P){y=!0;let kn;for(;!this.J&&this.C<ie.length;)if(kn=ff(this,ie),kn==Oo){Et==4&&(this.s=4,gt(14),y=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==_l){this.s=4,gt(15),Qn(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else Qn(this.i,this.l,kn,null),vl(this,kn);if(sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||ie.length!=0||this.h.h||(this.s=1,gt(16),y=!1),this.o=this.o&&y,!y)Qn(this.i,this.l,ie,"[Invalid Chunked Response]"),Mn(this),Ci(this);else if(0<ie.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Rl(Mt),Mt.M=!0,gt(11))}}else Qn(this.i,this.l,ie,null),vl(this,ie);Et==4&&Mn(this),this.o&&!this.J&&(Et==4?qo(this.j,this):(this.o=!1,Ze(this)))}else jo(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Mn(this),Ci(this)}}}catch{}finally{}};function sc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ff(c,g){var y=c.C,I=g.indexOf(`
`,y);return I==-1?Oo:(y=Number(g.substring(y,I)),isNaN(y)?_l:(I+=1,I+y>g.length?Oo:(g=g.slice(I,I+y),c.C=I+y,g)))}Xn.prototype.cancel=function(){this.J=!0,Mn(this)};function Ze(c){c.S=Date.now()+c.I,oc(c,c.I)}function oc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Kn(T(c.ba,c),g)}function Ds(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Xn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(gl(this.i,this.A),this.L!=2&&($r(),gt(17)),Mn(this),this.s=2,Ci(this)):oc(this,this.S-c)};function Ci(c){c.j.G==0||c.J||qo(c.j,c)}function Mn(c){Ds(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ul(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function vl(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||an(y.h,c))){if(!c.K&&an(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var j=I;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)$o(y),nr(y);else break e;Wo(y),gt(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=Kn(T(y.Za,y),6e3));if(1>=lc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Qr(y,11)}else if((c.K||y.g==c)&&$o(y),!H(g))for(j=y.Da.g.parse(g),g=0;g<j.length;g++){let Fe=j[g];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Mt=Fe[3];Mt!=null&&(y.la=Mt,y.j.info("VER="+y.la));const Et=Fe[4];Et!=null&&(y.Aa=Et,y.j.info("SVER="+y.Aa));const Fn=Fe[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(I=1.5*Fn,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const kn=c.g;if(kn){const Us=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var q=I.h;q.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(El(q,q.h),q.h=null))}if(I.D){const Go=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(I.ya=Go,Ye(I.I,I.D,Go))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var ie=c;if(I.qa=wc(I,I.J?I.ia:null,I.W),ie.K){uc(I.h,ie);var Ke=ie,xt=I.L;xt&&(Ke.I=xt),Ke.B&&(Ds(Ke),Ze(Ke)),I.g=ie}else Fs(I);0<y.i.length&&wr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Qr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Qr(y,7):qt(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}$r(4)}catch{}}var ac=class{constructor(c,g){this.g=c,this.map=g}};function Os(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function lc(c){return c.h?1:c.g?c.g.size:0}function an(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function El(c,g){c.g?c.g.add(g):c.h=g}function uc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Os.prototype.cancel=function(){if(this.i=cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return W(c.i)}function Lo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,I=0;I<y;I++)g.push(c[I]);return g}g=[],y=0;for(I in c)g[y++]=c[I];return g}function Mo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const I in c)g[y++]=I;return g}}}function Ri(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=Mo(c),I=Lo(c),j=I.length,q=0;q<j;q++)g.call(void 0,I[q],y&&y[q],c)}var bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),j=null;if(0<=I){var q=c[y].substring(0,I);j=c[y].substring(I+1)}else q=c[y];g(q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function qr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof qr){this.h=c.h,Ls(this,c.j),this.o=c.o,this.g=c.g,Ai(this,c.s),this.l=c.l;var g=c.i,y=new yr;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),ki(this,y),this.m=c.m}else c&&(g=String(c).match(bs))?(this.h=!1,Ls(this,g[1]||"",!0),this.o=Me(g[2]||""),this.g=Me(g[3]||"",!0),Ai(this,g[4]),this.l=Me(g[5]||"",!0),ki(this,g[6]||"",!0),this.m=Me(g[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}qr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ni(g,Vo,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ni(g,Vo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Ni(y,y.charAt(0)=="/"?fc:dc,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Ni(y,wl)),c.join("")};function Rn(c){return new qr(c)}function Ls(c,g,y){c.j=y?Me(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ai(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function ki(c,g,y){g instanceof yr?(c.i=g,vr(c.i,c.h)):(y||(g=Ni(g,pc)),c.i=new yr(g,c.h))}function Ye(c,g,y){c.i.set(g,y)}function Pi(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ni(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,hc),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function hc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,dc=/[#\?:]/g,fc=/[#\?]/g,pc=/[#\?@]/g,wl=/#/g;function yr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function $t(c){c.g||(c.g=new Map,c.h=0,c.i&&pf(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=yr.prototype,n.add=function(c,g){$t(this),this.i=null,c=Vn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Jn(c,g){$t(c),g=Vn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Zn(c,g){return $t(c),g=Vn(c,g),c.g.has(g)}n.forEach=function(c,g){$t(this),this.g.forEach(function(y,I){y.forEach(function(j){c.call(g,j,I,this)},this)},this)},n.na=function(){$t(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let I=0;I<g.length;I++){const j=c[I];for(let q=0;q<j.length;q++)y.push(g[I])}return y},n.V=function(c){$t(this);let g=[];if(typeof c=="string")Zn(this,c)&&(g=g.concat(this.g.get(Vn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},n.set=function(c,g){return $t(this),this.i=null,c=Vn(this,c),Zn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function xi(c,g,y){Jn(c,g),0<y.length&&(c.i=null,c.g.set(Vn(c,g),W(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var I=g[y];const q=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var j=q;ie[I]!==""&&(j+="="+encodeURIComponent(String(ie[I]))),c.push(j)}}return this.i=c.join("&")};function Vn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function vr(c,g){g&&!c.j&&($t(c),c.i=null,c.g.forEach(function(y,I){var j=I.toLowerCase();I!=j&&(Jn(this,I),xi(this,j,y))},c)),c.j=g}function mf(c,g){const y=new Ps;if(d.Image){const I=new Image;I.onload=P(dn,y,"TestLoadImage: loaded",!0,g,I),I.onerror=P(dn,y,"TestLoadImage: error",!1,g,I),I.onabort=P(dn,y,"TestLoadImage: abort",!1,g,I),I.ontimeout=P(dn,y,"TestLoadImage: timeout",!1,g,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function mc(c,g){const y=new Ps,I=new AbortController,j=setTimeout(()=>{I.abort(),dn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(q=>{clearTimeout(j),q.ok?dn(y,"TestPingServer: ok",!0,g):dn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),dn(y,"TestPingServer: error",!1,g)})}function dn(c,g,y,I,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),I(y)}catch{}}function gf(){this.g=new dl}function gc(c,g,y){const I=y||"";try{Ri(c,function(j,q){let ie=j;m(j)&&(ie=cl(j)),g.push(I+q+"="+encodeURIComponent(ie))})}catch(j){throw g.push(I+"type="+encodeURIComponent("_badmap")),j}}function Hr(c){this.l=c.Ub||null,this.j=c.eb||!1}x(Hr,As),Hr.prototype.g=function(){return new Ms(this.l,this.j)},Hr.prototype.i=(function(c){return function(){return c}})({});function Ms(c,g){Pt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ms,Pt),n=Ms.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,tr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_c(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function _c(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?er(this):tr(this),this.readyState==3&&_c(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,er(this))},n.Qa=function(c){this.g&&(this.response=c,er(this))},n.ga=function(){this.g&&er(this)};function er(c){c.readyState=4,c.l=null,c.j=null,c.v=null,tr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function tr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gr(c){let g="";return me(c,function(y,I){g+=I,g+=":",g+=y,g+=`\r
`}),g}function Di(c,g,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=Gr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Ye(c,g,y))}function at(c){Pt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(at,Pt);var _f=/^https?$/i,Tl=["POST","PUT"];n=at.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?Ao(this.o):Ao(Yn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){Vs(this,q);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var j in I)y.set(j,I[j]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())y.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),j=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Tl,g,void 0))||I||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of y)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uo(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){Vs(this,q)}};function Vs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Fo(c),An(c)}function Fo(c){c.A||(c.A=!0,Nt(c,"complete"),Nt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Nt(this,"complete"),Nt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Il(this):this.bb())},n.bb=function(){Il(this)};function Il(c){if(c.h&&typeof u<"u"&&(!c.v[1]||fn(c)!=4||c.Z()!=2)){if(c.u&&fn(c)==4)al(c.Ea,0,c);else if(Nt(c,"readystatechange"),fn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var I;if(I=ie===0){var j=String(c.D).match(bs)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),I=!_f.test(j?j.toLowerCase():"")}y=I}if(y)Nt(c,"complete"),Nt(c,"success");else{c.m=6;try{var q=2<fn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Fo(c)}}finally{An(c)}}}}function An(c,g){if(c.g){Uo(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Nt(c,"ready");try{y.onreadystatechange=I}catch{}}}function Uo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function fn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),hl(g)}};function Sl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function jo(c){const g={};c=(c.g&&2<=fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(H(c[I]))continue;var y=L(c[I]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=g[j]||[];g[j]=q,q.push(y)}D(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function Cl(c){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,c),this.cb=Er("retryDelaySeedMs",1e4,c),this.Wa=Er("forwardChannelMaxRetries",2,c),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Os(c&&c.concurrentRequestLimit),this.Da=new gf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cl.prototype,n.la=8,n.G=1,n.connect=function(c,g,y,I){gt(0),this.W=c,this.H=g||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=wc(this,null,this.W),wr(this)};function qt(c){if(Bo(c),c.G==3){var g=c.U++,y=Rn(c.I);if(Ye(y,"SID",c.K),Ye(y,"RID",g),Ye(y,"TYPE","terminate"),Kr(c,y),g=new Xn(c,c.j,g),g.L=2,g.v=Pi(Rn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=Tc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ze(g)}Ec(c)}function nr(c){c.g&&(Rl(c),c.g.cancel(),c.g=null)}function Bo(c){nr(c),c.u&&(d.clearTimeout(c.u),c.u=null),$o(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function wr(c){if(!Cn(c.h)&&!c.s){c.s=!0;var g=c.Ga;ze||ae(),se||(ze(),se=!0),ge.add(g,c),c.B=0}}function yf(c,g){return lc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Kn(T(c.Ga,c,g),vc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new Xn(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),O(q,this.S)):q=this.S),this.m!==null||this.O||(j.H=q,q=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Oi(this,j,g),y=Rn(this.I),Ye(y,"RID",c),Ye(y,"CVER",22),this.D&&Ye(y,"X-HTTP-Session-Id",this.D),Kr(this,y),q&&(this.O?g="headers="+encodeURIComponent(String(Gr(q)))+"&"+g:this.m&&Di(y,this.m,q)),El(this.h,j),this.Ua&&Ye(y,"TYPE","init"),this.P?(Ye(y,"$req",g),Ye(y,"SID","null"),j.T=!0,bo(j,y,null)):bo(j,y,g),this.G=2}}else this.G==3&&(c?zo(this,c):this.i.length==0||Cn(this.h)||zo(this))};function zo(c,g){var y;g?y=g.l:y=c.U++;const I=Rn(c.I);Ye(I,"SID",c.K),Ye(I,"RID",y),Ye(I,"AID",c.T),Kr(c,I),c.m&&c.o&&Di(I,c.m,c.o),y=new Xn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Oi(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),El(c.h,y),bo(y,I,g)}function Kr(c,g){c.H&&me(c.H,function(y,I){Ye(g,I,y)}),c.l&&Ri({},function(y,I){Ye(g,I,y)})}function Oi(c,g,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var j=c.i;let q=-1;for(;;){const ie=["count="+y];q==-1?0<y?(q=j[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let Ke=!0;for(let xt=0;xt<y;xt++){let Fe=j[xt].g;const Mt=j[xt].map;if(Fe-=q,0>Fe)q=Math.max(0,j[xt].g-100),Ke=!1;else try{gc(Mt,ie,"req"+Fe+"_")}catch{I&&I(Mt)}}if(Ke){I=ie.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,I}function Fs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ze||ae(),se||(ze(),se=!0),ge.add(g,c),c.v=0}}function Wo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Kn(T(c.Fa,c),vc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Kn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),nr(this),yc(this))};function Rl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function yc(c){c.g=new Xn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Rn(c.qa);Ye(g,"RID","rpc"),Ye(g,"SID",c.K),Ye(g,"AID",c.T),Ye(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(g,"TO",c.ja),Ye(g,"TYPE","xmlhttp"),Kr(c,g),c.m&&c.o&&Di(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Pi(Rn(g)),y.m=null,y.P=!0,yl(y,c)}n.Za=function(){this.C!=null&&(this.C=null,nr(this),Wo(this),gt(19))};function $o(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function qo(c,g){var y=null;if(c.g==g){$o(c),Rl(c),c.g=null;var I=2}else if(an(c.h,g))y=g.D,uc(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var j=c.B;I=ks(),Nt(I,new No(I,y)),wr(c)}else Fs(c);else if(j=g.s,j==3||j==0&&0<g.X||!(I==1&&yf(c,g)||I==2&&Wo(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),j){case 1:Qr(c,5);break;case 4:Qr(c,10);break;case 3:Qr(c,6);break;default:Qr(c,2)}}}function vc(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function Qr(c,g){if(c.j.info("Error code "+g),g==2){var y=T(c.fb,c),I=c.Xa;const j=!I;I=new qr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ls(I,"https"),Pi(I),j?mf(I.toString(),y):mc(I.toString(),y)}else gt(2);c.G=0,c.l&&c.l.sa(g),Ec(c),Bo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Ec(c){if(c.G=0,c.ka=[],c.l){const g=cc(c.h);(g.length!=0||c.i.length!=0)&&(U(c.ka,g),U(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function wc(c,g,y){var I=y instanceof qr?Rn(y):new qr(y);if(I.g!="")g&&(I.g=g+"."+I.g),Ai(I,I.s);else{var j=d.location;I=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var q=new qr(null);I&&Ls(q,I),g&&(q.g=g),j&&Ai(q,j),y&&(q.l=y),I=q}return y=c.D,g=c.ya,y&&g&&Ye(I,y,g),Ye(I,"VER",c.la),Kr(c,I),I}function Tc(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new at(new Hr({eb:y})):new at(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Al(){}n=Al.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ho(){}Ho.prototype.g=function(c,g){return new ln(c,g)};function ln(c,g){Pt.call(this),this.g=new Cl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!H(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!H(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Tr(this)}x(ln,Pt),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){qt(this.g)},ln.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=cl(c),c=y);g.i.push(new ac(g.Ya++,c)),g.G==3&&wr(g)},ln.prototype.N=function(){this.g.l=null,delete this.j,qt(this.g),delete this.g,ln.aa.N.call(this)};function Ic(c){gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}x(Ic,gr);function Sc(){Po.call(this),this.status=1}x(Sc,Po);function Tr(c){this.g=c}x(Tr,Al),Tr.prototype.ua=function(){Nt(this.g,"a")},Tr.prototype.ta=function(c){Nt(this.g,new Ic(c))},Tr.prototype.sa=function(c){Nt(this.g,new Sc)},Tr.prototype.ra=function(){Nt(this.g,"b")},Ho.prototype.createWebChannel=Ho.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,SI=function(){return new Ho},II=function(){return ks()},TI=_r,vm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,Dh=Do,rc.COMPLETE="complete",wI=rc,ko.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",Pt.prototype.listen=Pt.prototype.K,ou=ko,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,EI=at}).apply(typeof vh<"u"?vh:typeof self<"u"?self:typeof window<"u"?window:{});const NE="@firebase/firestore",xE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ka="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Pd("@firebase/firestore");function ma(){return uo.logLevel}function ue(n,...e){if(uo.logLevel<=be.DEBUG){const t=e.map(gg);uo.debug(`Firestore (${Ka}): ${n}`,...t)}}function yi(n,...e){if(uo.logLevel<=be.ERROR){const t=e.map(gg);uo.error(`Firestore (${Ka}): ${n}`,...t)}}function cs(n,...e){if(uo.logLevel<=be.WARN){const t=e.map(gg);uo.warn(`Firestore (${Ka}): ${n}`,...t)}}function gg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function we(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,CI(n,r,t)}function CI(n,e,t){let r=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw yi(r),new Error(r)}function He(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||CI(e,s,r)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(nn.UNAUTHENTICATED)))}shutdown(){}}class F1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class U1{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){He(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ss,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ss)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new RI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class j1{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class B1{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new j1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(nn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class DE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){He(this.o===void 0,3512);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new DE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(He(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new DE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function AI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=W1(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Pe(n,e){return n<e?-1:n>e?1:0}function Em(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Pe(r,s);{const a=AI(),u=$1(a.encode(OE(n,t)),a.encode(OE(e,t)));return u!==0?u:Pe(r,s)}}t+=r>65535?2:1}return Pe(n.length,e.length)}function OE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function $1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Pe(n[t],e[t]);return Pe(n.length,e.length)}function xa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="__name__";class Ar{constructor(e,t,r){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&we(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Ar.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Pe(e.length,t.length)}static compareSegments(e,t){const r=Ar.isNumericId(e),s=Ar.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ar.extractNumericId(e).compare(Ar.extractNumericId(t)):Em(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return is.fromString(e.substring(4,e.length-2))}}class tt extends Ar{construct(e,t,r){return new tt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const q1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Ar{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return q1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bE}static keyField(){return new Qt([bE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(tt.fromString(e))}static fromName(e){return new _e(tt.fromString(e).popFirst(5))}static empty(){return new _e(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new tt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,e,t){if(!t)throw new oe(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function H1(n,e,t,r){if(e===!0&&r===!0)throw new oe(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function LE(n){if(!_e.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ME(n){if(_e.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function PI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ld(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function hi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ld(n);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function G1(n,e){if(e<=0)throw new oe(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ct(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hu(n,e){if(!PI(n))throw new oe(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=-62135596800,FE=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*FE);return new st(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<VE)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/FE}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hu(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-VE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:Ct("string",st._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new st(0,0))}static max(){return new Ce(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Au=-1;function K1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ce.fromTimestamp(r===1e9?new st(t+1,0):new st(t,r));return new hs(s,_e.empty(),e)}function Q1(n){return new hs(n.readTime,n.key,Au)}class hs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hs(Ce.min(),_e.empty(),Au)}static max(){return new hs(Ce.max(),_e.empty(),Au)}}function Y1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==X1)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,r)=>{t(e)}))}static reject(e){return new Q(((t,r)=>{r(e)}))}static waitFor(e){return new Q(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Q.resolve(!1);for(const r of e)t=t.next((s=>s?Q.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Q(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((v=>{u[m]=v,++d,d===a&&r(u)}),(v=>s(v)))}}))}static doWhile(e,t){return new Q(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function Z1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ya(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Md{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Md.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=-1;function Vd(n){return n==null}function Yh(n){return n===0&&1/n==-1/0}function eN(n){return typeof n=="number"&&Number.isInteger(n)&&!Yh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="";function tN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=UE(e)),e=nN(n.get(t),e);return UE(e)}function nN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case NI:t+="";break;default:t+=a}}return t}function UE(n){return n+NI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At=class wm{constructor(e,t){this.comparator=e,this.root=t||os.EMPTY}insert(e,t){return new wm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,os.BLACK,null,null))}remove(e){return new wm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,os.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eh(this.root,e,this.comparator,!0)}},Eh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},os=class ii{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??ii.RED,this.left=s??ii.EMPTY,this.right=a??ii.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new ii(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ii.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ii.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ii.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ii.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}};os.EMPTY=null,os.RED=!0,os.BLACK=!1;os.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new os(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new BE(this.data.getIterator())}getIteratorFrom(e){return new BE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class BE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new On([])}unionWith(e){let t=new bt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class DI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new DI("Invalid base64 string: "+a):a}})(e);return new Yt(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const rN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(n){if(He(!!n,39018),typeof n=="string"){let e=0;const t=rN.exec(n);if(He(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fs(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="server_timestamp",bI="__type__",LI="__previous_value__",MI="__local_write_time__";function vg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[bI])===null||t===void 0?void 0:t.stringValue)===OI}function Fd(n){const e=n.mapValue.fields[LI];return vg(e)?Fd(e):e}function ku(n){const e=ds(n.mapValue.fields[MI].timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,t,r,s,a,u,d,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=v}}const Xh="(default)";class Pu{constructor(e,t){this.projectId=e,this.database=t||Xh}static empty(){return new Pu("","")}get isDefaultDatabase(){return this.database===Xh}isEqual(e){return e instanceof Pu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="__type__",sN="__max__",wh={mapValue:{}},FI="__vector__",Jh="value";function ps(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vg(n)?4:aN(n)?9007199254740991:oN(n)?10:11:we(28295,{value:n})}function Mr(n,e){if(n===e)return!0;const t=ps(n);if(t!==ps(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ku(n).isEqual(ku(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ds(s.timestampValue),d=ds(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return fs(s.bytesValue).isEqual(fs(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return yt(s.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return yt(s.integerValue)===yt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=yt(s.doubleValue),d=yt(a.doubleValue);return u===d?Yh(u)===Yh(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return xa(n.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(jE(u)!==jE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Mr(u[f],d[f])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function Nu(n,e){return(n.values||[]).find((t=>Mr(t,e)))!==void 0}function Da(n,e){if(n===e)return 0;const t=ps(n),r=ps(e);if(t!==r)return Pe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=yt(a.integerValue||a.doubleValue),f=yt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return zE(n.timestampValue,e.timestampValue);case 4:return zE(ku(n),ku(e));case 5:return Em(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=fs(a),f=fs(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=Pe(d[m],f[m]);if(v!==0)return v}return Pe(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Pe(yt(a.latitude),yt(u.latitude));return d!==0?d:Pe(yt(a.longitude),yt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return WE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,v;const E=a.fields||{},T=u.fields||{},P=(d=E[Jh])===null||d===void 0?void 0:d.arrayValue,x=(f=T[Jh])===null||f===void 0?void 0:f.arrayValue,W=Pe(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((v=x==null?void 0:x.values)===null||v===void 0?void 0:v.length)||0);return W!==0?W:WE(P,x)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===wh.mapValue&&u===wh.mapValue)return 0;if(a===wh.mapValue)return 1;if(u===wh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const T=Em(f[E],v[E]);if(T!==0)return T;const P=Da(d[f[E]],m[v[E]]);if(P!==0)return P}return Pe(f.length,v.length)})(n.mapValue,e.mapValue);default:throw we(23264,{le:t})}}function zE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=ds(n),r=ds(e),s=Pe(t.seconds,r.seconds);return s!==0?s:Pe(t.nanos,r.nanos)}function WE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Da(t[s],r[s]);if(a)return a}return Pe(t.length,r.length)}function Oa(n){return Tm(n)}function Tm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ds(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Tm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Tm(t.fields[u])}`;return s+"}"})(n.mapValue):we(61005,{value:n})}function Oh(n){switch(ps(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fd(n);return e?16+Oh(e):16;case 5:return 2*n.stringValue.length;case 6:return fs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Oh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ws(r.fields,((a,u)=>{s+=a.length+Oh(u)})),s})(n.mapValue);default:throw we(13486,{value:n})}}function $E(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Im(n){return!!n&&"integerValue"in n}function Eg(n){return!!n&&"arrayValue"in n}function qE(n){return!!n&&"nullValue"in n}function HE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bh(n){return!!n&&"mapValue"in n}function oN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[VI])===null||t===void 0?void 0:t.stringValue)===FI}function fu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ws(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=fu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function aN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fu(t)}setAll(e){let t=Qt.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=fu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());bh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];bh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ws(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new wn(fu(this.value))}}function UI(n){const e=[];return ws(n.fields,((t,r)=>{const s=new Qt([t]);if(bh(r)){const a=UI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zh{constructor(e,t){this.position=e,this.inclusive=t}}function GE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=Da(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function KE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function lN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class jI{}class St extends jI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cN(e,t,r):t==="array-contains"?new fN(e,r):t==="in"?new pN(e,r):t==="not-in"?new mN(e,r):t==="array-contains-any"?new gN(e,r):new St(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hN(e,r):new dN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Da(t,this.value)):t!==null&&ps(this.value)===ps(t)&&this.matchesComparison(Da(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends jI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new mr(e,t)}matches(e){return BI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function BI(n){return n.op==="and"}function zI(n){return uN(n)&&BI(n)}function uN(n){for(const e of n.filters)if(e instanceof mr)return!1;return!0}function Sm(n){if(n instanceof St)return n.field.canonicalString()+n.op.toString()+Oa(n.value);if(zI(n))return n.filters.map((e=>Sm(e))).join(",");{const e=n.filters.map((t=>Sm(t))).join(",");return`${n.op}(${e})`}}function WI(n,e){return n instanceof St?(function(r,s){return s instanceof St&&r.op===s.op&&r.field.isEqual(s.field)&&Mr(r.value,s.value)})(n,e):n instanceof mr?(function(r,s){return s instanceof mr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&WI(u,s.filters[d])),!0):!1})(n,e):void we(19439)}function $I(n){return n instanceof St?(function(t){return`${t.field.canonicalString()} ${t.op} ${Oa(t.value)}`})(n):n instanceof mr?(function(t){return t.op.toString()+" {"+t.getFilters().map($I).join(" ,")+"}"})(n):"Filter"}class cN extends St{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class hN extends St{constructor(e,t){super(e,"in",t),this.keys=qI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dN extends St{constructor(e,t){super(e,"not-in",t),this.keys=qI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function qI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class fN extends St{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Eg(t)&&Nu(t.arrayValue,this.value)}}class pN extends St{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nu(this.value.arrayValue,t)}}class mN extends St{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nu(this.value.arrayValue,t)}}class gN extends St{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Eg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nu(this.value.arrayValue,r)))}}/**
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
 */class _N{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function QE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new _N(n,e,t,r,s,a,u)}function wg(n){const e=Re(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Sm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Vd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Oa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Oa(r))).join(",")),e.Pe=t}return e.Pe}function Tg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!WI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!KE(n.startAt,e.startAt)&&KE(n.endAt,e.endAt)}function Cm(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function yN(n,e,t,r,s,a,u,d){return new Xa(n,e,t,r,s,a,u,d)}function Ig(n){return new Xa(n)}function YE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function HI(n){return n.collectionGroup!==null}function pu(n){const e=Re(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new bt(Qt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new xu(a,r))})),t.has(Qt.keyField().canonicalString())||e.Te.push(new xu(Qt.keyField(),r))}return e.Te}function xr(n){const e=Re(n);return e.Ie||(e.Ie=vN(e,pu(n))),e.Ie}function vN(n,e){if(n.limitType==="F")return QE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new xu(s.field,a)}));const t=n.endAt?new Zh(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zh(n.startAt.position,n.startAt.inclusive):null;return QE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Rm(n,e){const t=n.filters.concat([e]);return new Xa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ed(n,e,t){return new Xa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ud(n,e){return Tg(xr(n),xr(e))&&n.limitType===e.limitType}function GI(n){return`${wg(xr(n))}|lt:${n.limitType}`}function ga(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>$I(s))).join(", ")}]`),Vd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Oa(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Oa(s))).join(",")),`Target(${r})`})(xr(n))}; limitType=${n.limitType})`}function jd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of pu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=GE(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,pu(r),s)||r.endAt&&!(function(u,d,f){const m=GE(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,pu(r),s))})(n,e)}function EN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function KI(n){return(e,t)=>{let r=!1;for(const s of pu(n)){const a=wN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function wN(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Da(f,m):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return xI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=new At(_e.comparator);function vi(){return TN}const QI=new At(_e.comparator);function au(...n){let e=QI;for(const t of n)e=e.insert(t.key,t);return e}function YI(n){let e=QI;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function to(){return mu()}function XI(){return mu()}function mu(){return new yo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const IN=new At(_e.comparator),SN=new bt(_e.comparator);function Le(...n){let e=SN;for(const t of n)e=e.add(t);return e}const CN=new bt(Pe);function RN(){return CN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yh(e)?"-0":e}}function JI(n){return{integerValue:""+n}}function AN(n,e){return eN(e)?JI(e):Sg(n,e)}/**
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
 */class Bd{constructor(){this._=void 0}}function kN(n,e,t){return n instanceof td?(function(s,a){const u={fields:{[bI]:{stringValue:OI},[MI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&vg(a)&&(a=Fd(a)),a&&(u.fields[LI]=a),{mapValue:u}})(t,e):n instanceof ba?e0(n,e):n instanceof Du?t0(n,e):(function(s,a){const u=ZI(s,a),d=XE(u)+XE(s.Ee);return Im(u)&&Im(s.Ee)?JI(d):Sg(s.serializer,d)})(n,e)}function PN(n,e,t){return n instanceof ba?e0(n,e):n instanceof Du?t0(n,e):t}function ZI(n,e){return n instanceof nd?(function(r){return Im(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class td extends Bd{}class ba extends Bd{constructor(e){super(),this.elements=e}}function e0(n,e){const t=n0(e);for(const r of n.elements)t.some((s=>Mr(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Du extends Bd{constructor(e){super(),this.elements=e}}function t0(n,e){let t=n0(e);for(const r of n.elements)t=t.filter((s=>!Mr(s,r)));return{arrayValue:{values:t}}}class nd extends Bd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function XE(n){return yt(n.integerValue||n.doubleValue)}function n0(n){return Eg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,t){this.field=e,this.transform=t}}function xN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ba&&s instanceof ba||r instanceof Du&&s instanceof Du?xa(r.elements,s.elements,Mr):r instanceof nd&&s instanceof nd?Mr(r.Ee,s.Ee):r instanceof td&&s instanceof td})(n.transform,e.transform)}class DN{constructor(e,t){this.version=e,this.transformResults=t}}class Dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zd{}function r0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new s0(n.key,Dr.none()):new Gu(n.key,n.data,Dr.none());{const t=n.data,r=wn.empty();let s=new bt(Qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Ts(n.key,r,new On(s.toArray()),Dr.none())}}function ON(n,e,t){n instanceof Gu?(function(s,a,u){const d=s.value.clone(),f=ZE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Ts?(function(s,a,u){if(!Lh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=ZE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(i0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function gu(n,e,t,r){return n instanceof Gu?(function(a,u,d,f){if(!Lh(a.precondition,u))return d;const m=a.value.clone(),v=ew(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ts?(function(a,u,d,f){if(!Lh(a.precondition,u))return d;const m=ew(a.fieldTransforms,f,u),v=u.data;return v.setAll(i0(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Lh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function bN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=ZI(r.transform,s||null);a!=null&&(t===null&&(t=wn.empty()),t.set(r.field,a))}return t||null}function JE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xa(r,s,((a,u)=>xN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gu extends zd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ts extends zd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function i0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ZE(n,e,t){const r=new Map;He(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,PN(u,d,t[s]))}return r}function ew(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,kN(a,u,e))}return r}class s0 extends zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LN extends zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&ON(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=XI();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=r0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ce.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&xa(this.mutations,e.mutations,((t,r)=>JE(t,r)))&&xa(this.baseMutations,e.baseMutations,((t,r)=>JE(t,r)))}}class Cg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){He(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return IN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Cg(e,t,r,s)}}/**
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
 */class VN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt,Ue;function UN(n){switch(n){case K.OK:return we(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function o0(n){if(n===void 0)return yi("GRPC error has no .code"),K.UNKNOWN;switch(n){case Tt.OK:return K.OK;case Tt.CANCELLED:return K.CANCELLED;case Tt.UNKNOWN:return K.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return K.INTERNAL;case Tt.UNAVAILABLE:return K.UNAVAILABLE;case Tt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Tt.NOT_FOUND:return K.NOT_FOUND;case Tt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Tt.ABORTED:return K.ABORTED;case Tt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Tt.DATA_LOSS:return K.DATA_LOSS;default:return we(39323,{code:n})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const jN=new is([4294967295,4294967295],0);function tw(n){const e=AI().encode(n),t=new vI;return t.update(e),new Uint8Array(t.digest())}function nw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new is([t,r],0),new is([s,a],0)]}class Rg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new lu(`Invalid padding: ${t}`);if(r<0)throw new lu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new lu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=is.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(is.fromNumber(r)));return s.compare(jN)===1&&(s=new is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=tw(e),[r,s]=nw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Rg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=tw(e),[r,s]=nw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class lu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wd(Ce.min(),s,new At(Pe),vi(),Le())}}class Ku{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ku(r,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class a0{constructor(e,t){this.targetId=e,this.De=t}}class l0{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class rw{constructor(){this.ve=0,this.Ce=iw(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),r=Le();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:we(38017,{changeType:a})}})),new Ku(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=iw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class BN{constructor(e){this.We=e,this.Ge=new Map,this.ze=vi(),this.je=Th(),this.Je=Th(),this.He=new At(Pe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Cm(a))if(r===0){const u=new _e(a.path);this.Xe(t,u,rn.newNoDocument(u,Ce.min()))}else He(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=fs(r).toUint8Array()}catch(f){if(f instanceof DI)return cs("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Rg(u,s,a)}catch(f){return cs(f instanceof lu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Cm(d.target)){const f=new _e(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,rn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Le();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Wd(e,t,this.He,this.ze,r);return this.ze=vi(),this.je=Th(),this.Je=Th(),this.He=new At(Pe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new rw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new bt(Pe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new bt(Pe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new rw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Th(){return new At(_e.comparator)}function iw(){return new At(_e.comparator)}const zN={asc:"ASCENDING",desc:"DESCENDING"},WN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$N={and:"AND",or:"OR"};class qN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Am(n,e){return n.useProto3Json||Vd(e)?e:{value:e}}function rd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function HN(n,e){return rd(n,e.toTimestamp())}function Or(n){return He(!!n,49232),Ce.fromTimestamp((function(t){const r=ds(t);return new st(r.seconds,r.nanos)})(n))}function Ag(n,e){return km(n,e).canonicalString()}function km(n,e){const t=(function(s){return new tt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function c0(n){const e=tt.fromString(n);return He(m0(e),10190,{key:e.toString()}),e}function Pm(n,e){return Ag(n.databaseId,e.path)}function Yp(n,e){const t=c0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(d0(t))}function h0(n,e){return Ag(n.databaseId,e)}function GN(n){const e=c0(n);return e.length===4?tt.emptyPath():d0(e)}function Nm(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function d0(n){return He(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function sw(n,e,t){return{name:Pm(n,e),fields:t.value.mapValue.fields}}function KN(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:we(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,v){return m.useProto3Json?(He(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):(He(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const v=m.code===void 0?K.UNKNOWN:o0(m.code);return new oe(v,m.message||"")})(u);t=new l0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yp(n,r.document.name),a=Or(r.document.updateTime),u=r.document.createTime?Or(r.document.createTime):Ce.min(),d=new wn({mapValue:{fields:r.document.fields}}),f=rn.newFoundDocument(s,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Mh(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yp(n,r.document),a=r.readTime?Or(r.readTime):Ce.min(),u=rn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Mh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yp(n,r.document),a=r.removedTargetIds||[];t=new Mh([],a,s,null)}else{if(!("filter"in e))return we(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new FN(s,a),d=r.targetId;t=new a0(d,u)}}return t}function QN(n,e){let t;if(e instanceof Gu)t={update:sw(n,e.key,e.value)};else if(e instanceof s0)t={delete:Pm(n,e.key)};else if(e instanceof Ts)t={update:sw(n,e.key,e.data),updateMask:ix(e.fieldMask)};else{if(!(e instanceof LN))return we(16599,{Rt:e.type});t={verify:Pm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof td)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ba)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Du)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof nd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw we(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:HN(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:we(27497)})(n,e.precondition)),t}function YN(n,e){return n&&n.length>0?(He(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?Or(s.updateTime):Or(a);return u.isEqual(Ce.min())&&(u=Or(a)),new DN(u,s.transformResults||[])})(t,e)))):[]}function XN(n,e){return{documents:[h0(n,e.path)]}}function JN(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=h0(n,s);const a=(function(m){if(m.length!==0)return p0(mr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((v=>(function(T){return{field:_a(T.field),direction:tx(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Am(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function ZN(n){let e=GN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){He(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(E){const T=f0(E);return T instanceof mr&&zI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(x){return new xu(ya(x.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,Vd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,P=E.values||[];return new Zh(P,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,P=E.values||[];return new Zh(P,T)})(t.endAt)),yN(e,s,u,a,d,"F",f,m)}function ex(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function f0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ya(t.unaryFilter.field);return St.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ya(t.unaryFilter.field);return St.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ya(t.unaryFilter.field);return St.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ya(t.unaryFilter.field);return St.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return St.create(ya(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return mr.create(t.compositeFilter.filters.map((r=>f0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function tx(n){return zN[n]}function nx(n){return WN[n]}function rx(n){return $N[n]}function _a(n){return{fieldPath:n.canonicalString()}}function ya(n){return Qt.fromServerFormat(n.fieldPath)}function p0(n){return n instanceof St?(function(t){if(t.op==="=="){if(HE(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NAN"}};if(qE(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(HE(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NOT_NAN"}};if(qE(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_a(t.field),op:nx(t.op),value:t.value}}})(n):n instanceof mr?(function(t){const r=t.getFilters().map((s=>p0(s)));return r.length===1?r[0]:{compositeFilter:{op:rx(t.op),filters:r}}})(n):we(54877,{filter:n})}function ix(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function m0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,r,s,a=Ce.min(),u=Ce.min(),d=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.gt=e}}function ox(n){const e=ZN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ed(e,e.limit,"L"):e}/**
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
 */class ax{constructor(){this.Dn=new lx}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(hs.min())}updateCollectionGroup(e,t,r){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class lx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new bt(tt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bt(tt.comparator)).toArray()}}/**
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
 */const ow={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g0=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(g0,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new La(0)}static ur(){return new La(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="LruGarbageCollector",ux=1048576;function lw([n,e],[t,r]){const s=Pe(n,t);return s===0?Pe(e,r):s}class cx{constructor(e){this.Tr=e,this.buffer=new bt(lw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();lw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(aw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ya(t)?ue(aw,"Ignoring IndexedDB error during garbage collection: ",t):await Qa(t)}await this.Rr(3e5)}))}}class dx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Md.ue);const r=new cx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(ow)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ow):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),ma()<=be.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function fx(n,e){return new dx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.changes=new yo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&gu(r.mutation,s,On.empty(),st.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Le()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Le()){const s=to();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=au();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=to();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Le())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=vi();const u=mu(),d=(function(){return mu()})();return t.forEach(((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof Ts)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),gu(v.mutation,m,v.mutation.getFieldMask(),st.now())):u.set(m.key,On.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,v)=>u.set(m,v))),t.forEach(((m,v)=>{var E;return d.set(m,new mx(v,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=mu();let s=new At(((u,d)=>u-d)),a=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||On.empty();v=d.applyToLocalView(m,v),r.set(f,v);const E=(s.get(d.batchId)||Le()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,E=XI();v.forEach((T=>{if(!a.has(T)){const P=r0(t.get(T),r.get(T));P!==null&&E.set(T,P),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return Q.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):HI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Q.resolve(to());let d=Au,f=a;return u.next((m=>Q.forEach(m,((v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Le()))).next((v=>({batchId:d,changes:YI(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let s=au();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=au();return this.indexManager.getCollectionParents(e,a).next((d=>Q.forEach(d,(f=>{const m=(function(E,T){return new Xa(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((v=>{v.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,rn.newInvalidDocument(v)))}));let d=au();return u.forEach(((f,m)=>{const v=a.get(f);v!==void 0&&gu(v.mutation,m,On.empty(),st.now()),jd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Or(s.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:ox(s.bundledQuery),readTime:Or(s.readTime)}})(t)),Q.resolve()}}/**
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
 */class yx{constructor(){this.overlays=new At(_e.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=to();return Q.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Q.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Q.resolve()}getOverlaysForCollection(e,t,r){const s=to(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new At(((m,v)=>m-v));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=to(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=to(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,v)=>d.set(m,v))),!(d.size()>=s)););return Q.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new VN(t,r));let a=this.kr.get(t);a===void 0&&(a=Le(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class vx{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.qr=new bt(Bt.Qr),this.$r=new bt(Bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Bt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Bt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new _e(new tt([])),r=new Bt(t,e),s=new Bt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new tt([])),r=new Bt(t,e),s=new Bt(t,e+1);let a=Le();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Bt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new bt(Bt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new MN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Bt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(u)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?yg:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Bt(t,0),s=new Bt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new bt(Pe);return t.forEach((s=>{const a=new Bt(s,0),u=new Bt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Bt(new _e(a),0);let d=new bt(Pe);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),Q.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){He(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Q.forEach(t.mutations,(s=>{const a=new Bt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Bt(t,0),s=this.Yr.firstAfterOrEqual(r);return Q.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.ni=e,this.docs=(function(){return new At(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Q.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let r=vi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():rn.newInvalidDocument(s))})),Q.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=vi();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Y1(Q1(v),r)<=0||(s.has(v.key)||jd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Q.resolve(a)}getAllFromCollectionGroup(e,t,r,s){we(9500)}ri(e,t){return Q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Tx(this)}getSize(e){return Q.resolve(this.size)}}class Tx extends px{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.persistence=e,this.ii=new yo((t=>wg(t)),Tg),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new kg,this.targetCount=0,this._i=La.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new La(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Q.waitFor(a).next((()=>s))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Q.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Q.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Q.resolve(r)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Md(0),this.ci=!1,this.ci=!0,this.li=new vx,this.referenceDelegate=e(this),this.hi=new Ix(this),this.indexManager=new ax,this.remoteDocumentCache=(function(s){return new wx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new sx(t),this.Ti=new _x(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ex(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const s=new Sx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Sx extends J1{constructor(e){super(),this.currentSequenceNumber=e}}class Pg{constructor(e){this.persistence=e,this.Ai=new kg,this.Ri=null}static Vi(e){return new Pg(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Q.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(r=>{const s=_e.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Ce.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class id{constructor(e,t){this.persistence=e,this.gi=new yo((r=>tN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=fx(this,t)}static Vi(e,t){return new id(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Q.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Ce.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Oh(e.data.value)),t}Sr(e,t,r){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Le(),s=Le();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ng(e,t.fromCache,r,s)}}/**
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
 */class Cx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Rx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return nA()?8:Z1(sn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Cx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ma()<=be.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",ga(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(ma()<=be.DEBUG&&ue("QueryEngine","Query:",ga(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ma()<=be.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",ga(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xr(t))):Q.resolve())}ps(e,t){if(YE(t))return Q.resolve(null);let r=xr(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ed(t,null,"F"),r=xr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Le(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,ed(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return YE(t)||s.isEqual(Ce.min())?Q.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Q.resolve(null):(ma()<=be.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ga(t)),this.vs(e,u,t,K1(s,Au)).next((d=>d)))}))}bs(e,t){let r=new bt(KI(e));return t.forEach(((s,a)=>{jd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return ma()<=be.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",ga(t)),this.gs.getDocumentsMatchingQuery(e,t,hs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="LocalStore",Ax=3e8;class kx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new At(Pe),this.Ms=new yo((a=>wg(a)),Tg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Px(n,e,t,r){return new kx(n,e,t,r)}async function y0(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Le();for(const m of s){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Nx(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,v){const E=m.batch,T=E.keys();let P=Q.resolve();return T.forEach((x=>{P=P.next((()=>v.getEntry(f,x))).next((W=>{const U=m.docVersions.get(x);He(U!==null,48541),W.version.compareTo(U)<0&&(E.applyToRemoteDocument(W,m),W.isValidDocument()&&(W.setReadTime(m.commitVersion),v.addEntry(W)))}))})),P.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Le();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function v0(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function xx(n,e){const t=Re(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((v,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,E))));let P=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(Yt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):v.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(v.resumeToken,r)),s=s.insert(E,P),(function(W,U,J){return W.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=Ax?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(T,P,v)&&d.push(t.hi.updateTargetData(a,P))}));let f=vi(),m=Le();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(Dx(a,u,e.documentUpdates).next((v=>{f=v.Ls,m=v.ks}))),!r.isEqual(Ce.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return Q.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Dx(n,e,t){let r=Le(),s=Le();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=vi();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Ce.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ue(xg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Ox(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=yg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bx(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Q.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new es(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function xm(n,e,t){const r=Re(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!Ya(u))throw u;ue(xg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function uw(n,e,t){const r=Re(n);let s=Ce.min(),a=Le();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,v){const E=Re(f),T=E.Ms.get(v);return T!==void 0?Q.resolve(E.Fs.get(T)):E.hi.getTargetData(m,v)})(r,u,xr(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Ce.min(),t?a:Le()))).next((d=>(Lx(r,EN(e),d),{documents:d,qs:a})))))}function Lx(n,e,t){let r=n.xs.get(e)||Ce.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class cw{constructor(){this.activeTargetIds=RN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mx{constructor(){this.Fo=new cw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vx{xo(e){}shutdown(){}}/**
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
 */const hw="ConnectivityMonitor";class dw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(hw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(hw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ih=null;function Dm(){return Ih===null?Ih=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ih++,"0x"+Ih.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="RestConnection",Fx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ux{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Xh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Dm(),d=this.Go(e,t.toUriEncodedString());ue(Xp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),v=Vr(m);return this.jo(e,d,f,r,v).then((E=>(ue(Xp,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw cs(Xp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ka})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Fx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="WebChannelConnection";class Bx extends Ux{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Dm();return new Promise(((d,f)=>{const m=new EI;m.setWithCredentials(!0),m.listenOnce(wI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Dh.NO_ERROR:const E=m.getResponseJson();ue(tn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Dh.TIMEOUT:ue(tn,`RPC '${e}' ${u} timed out`),f(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case Dh.HTTP_ERROR:const T=m.getStatus();if(ue(tn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let P=m.getResponseJson();Array.isArray(P)&&(P=P[0]);const x=P==null?void 0:P.error;if(x&&x.status&&x.message){const W=(function(J){const H=J.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(H)>=0?H:K.UNKNOWN})(x.status);f(new oe(W,x.message))}else f(new oe(K.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new oe(K.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ue(tn,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(s);ue(tn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",v,r,15)}))}P_(e,t,r){const s=Dm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=SI(),d=II(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ue(tn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const E=u.createWebChannel(v,f);this.T_(E);let T=!1,P=!1;const x=new jx({Ho:U=>{P?ue(tn,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(T||(ue(tn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),ue(tn,`RPC '${e}' stream ${s} sending:`,U),E.send(U))},Yo:()=>E.close()}),W=(U,J,H)=>{U.listen(J,(re=>{try{H(re)}catch(G){setTimeout((()=>{throw G}),0)}}))};return W(E,ou.EventType.OPEN,(()=>{P||(ue(tn,`RPC '${e}' stream ${s} transport opened.`),x.s_())})),W(E,ou.EventType.CLOSE,(()=>{P||(P=!0,ue(tn,`RPC '${e}' stream ${s} transport closed`),x.__(),this.I_(E))})),W(E,ou.EventType.ERROR,(U=>{P||(P=!0,cs(tn,`RPC '${e}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),x.__(new oe(K.UNAVAILABLE,"The operation could not be completed")))})),W(E,ou.EventType.MESSAGE,(U=>{var J;if(!P){const H=U.data[0];He(!!H,16349);const re=H,G=(re==null?void 0:re.error)||((J=re[0])===null||J===void 0?void 0:J.error);if(G){ue(tn,`RPC '${e}' stream ${s} received error:`,G);const Ae=G.status;let me=(function(k){const O=Tt[k];if(O!==void 0)return o0(O)})(Ae),D=G.message;me===void 0&&(me=K.INTERNAL,D="Unknown error status: "+Ae+" with message "+G.message),P=!0,x.__(new oe(me,D)),E.close()}else ue(tn,`RPC '${e}' stream ${s} received:`,H),x.a_(H)}})),W(d,TI.STAT_EVENT,(U=>{U.stat===vm.PROXY?ue(tn,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===vm.NOPROXY&&ue(tn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{x.o_()}),0),x}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Jp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n){return new qN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="PersistentStream";class w0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new E0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(yi(t.toString()),yi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(fw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(fw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zx extends w0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=KN(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ce.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ce.min():u.readTime?Or(u.readTime):Ce.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Nm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Cm(f)?{documents:XN(a,f)}:{query:JN(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=u0(a,u.resumeToken);const m=Am(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ce.min())>0){d.readTime=rd(a,u.snapshotVersion.toTimestamp());const m=Am(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=ex(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Nm(this.serializer),t.removeTarget=e,this.k_(t)}}class Wx extends w0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=YN(e.writeResults,e.commitTime),r=Or(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Nm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>QN(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{}class qx extends $x{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,km(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(K.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,km(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(K.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Hx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(yi(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="RemoteStore";class Gx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{vo(this)&&(ue(co,"Restarting streams for network reachability change."),await(async function(f){const m=Re(f);m.Ia.add(4),await Qu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await qd(m)})(this))}))})),this.Aa=new Hx(r,s)}}async function qd(n){if(vo(n))for(const e of n.da)await e(!0)}async function Qu(n){for(const e of n.da)await e(!1)}function T0(n,e){const t=Re(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Lg(t)?bg(t):Ja(t).x_()&&Og(t,e))}function Dg(n,e){const t=Re(n),r=Ja(t);t.Ta.delete(e),r.x_()&&I0(t,e),t.Ta.size===0&&(r.x_()?r.B_():vo(t)&&t.Aa.set("Unknown"))}function Og(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ja(n).H_(e)}function I0(n,e){n.Ra.$e(e),Ja(n).Y_(e)}function bg(n){n.Ra=new BN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ja(n).start(),n.Aa.aa()}function Lg(n){return vo(n)&&!Ja(n).M_()&&n.Ta.size>0}function vo(n){return Re(n).Ia.size===0}function S0(n){n.Ra=void 0}async function Kx(n){n.Aa.set("Online")}async function Qx(n){n.Ta.forEach(((e,t)=>{Og(n,e)}))}async function Yx(n,e){S0(n),Lg(n)?(n.Aa.la(e),bg(n)):n.Aa.set("Unknown")}async function Xx(n,e,t){if(n.Aa.set("Online"),e instanceof l0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ue(co,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sd(n,r)}else if(e instanceof Mh?n.Ra.Ye(e):e instanceof a0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ce.min()))try{const r=await v0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(m);v&&a.Ta.set(m,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(Yt.EMPTY_BYTE_STRING,v.snapshotVersion)),I0(a,f);const E=new es(v.target,f,m,v.sequenceNumber);Og(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ue(co,"Failed to raise snapshot:",r),await sd(n,r)}}async function sd(n,e,t){if(!Ya(e))throw e;n.Ia.add(1),await Qu(n),n.Aa.set("Offline"),t||(t=()=>v0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(co,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qd(n)}))}function C0(n,e){return e().catch((t=>sd(n,t,e)))}async function Hd(n){const e=Re(n),t=ms(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:yg;for(;Jx(e);)try{const s=await Ox(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Zx(e,s)}catch(s){await sd(e,s)}R0(e)&&A0(e)}function Jx(n){return vo(n)&&n.Pa.length<10}function Zx(n,e){n.Pa.push(e);const t=ms(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function R0(n){return vo(n)&&!ms(n).M_()&&n.Pa.length>0}function A0(n){ms(n).start()}async function eD(n){ms(n).na()}async function tD(n){const e=ms(n);for(const t of n.Pa)e.X_(t.mutations)}async function nD(n,e,t){const r=n.Pa.shift(),s=Cg.from(r,e,t);await C0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Hd(n)}async function rD(n,e){e&&ms(n).Z_&&await(async function(r,s){if((function(u){return UN(u)&&u!==K.ABORTED})(s.code)){const a=r.Pa.shift();ms(r).N_(),await C0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Hd(r)}})(n,e),R0(n)&&A0(n)}async function pw(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ue(co,"RemoteStore received new credentials");const r=vo(t);t.Ia.add(3),await Qu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qd(t)}async function iD(n,e){const t=Re(n);e?(t.Ia.delete(2),await qd(t)):e||(t.Ia.add(2),await Qu(t),t.Aa.set("Unknown"))}function Ja(n){return n.Va||(n.Va=(function(t,r,s){const a=Re(t);return a.ia(),new zx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Kx.bind(null,n),e_:Qx.bind(null,n),n_:Yx.bind(null,n),J_:Xx.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Lg(n)?bg(n):n.Aa.set("Unknown")):(await n.Va.stop(),S0(n))}))),n.Va}function ms(n){return n.ma||(n.ma=(function(t,r,s){const a=Re(t);return a.ia(),new Wx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:eD.bind(null,n),n_:rD.bind(null,n),ea:tD.bind(null,n),ta:nD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Hd(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(co,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Mg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(n,e){if(yi("AsyncQueue",`${e}: ${n}`),Ya(n))return new oe(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static emptySet(e){return new Sa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=au(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.fa=new At(_e.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):we(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ma{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ma(e,t,Sa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ud(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class oD{constructor(){this.queries=gw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Re(t),a=s.queries;s.queries=gw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function gw(){return new yo((n=>GI(n)),Ud)}async function k0(n,e){const t=Re(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new sD,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Vg(u,`Initialization of query '${ga(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Fg(t)}async function P0(n,e){const t=Re(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aD(n,e){const t=Re(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Fg(t)}function lD(n,e,t){const r=Re(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Fg(n){n.Da.forEach((e=>{e.next()}))}var Om,_w;(_w=Om||(Om={})).Fa="default",_w.Cache="cache";class N0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ma(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ma.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Om.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.key=e}}class D0{constructor(e){this.key=e}}class uD{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=KI(e),this.eu=new Sa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new mw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((v,E)=>{const T=s.get(v),P=jd(this.query,E)?E:null,x=!!T&&this.mutatedKeys.has(T.key),W=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let U=!1;T&&P?T.data.isEqual(P.data)?x!==W&&(r.track({type:3,doc:P}),U=!0):this.iu(T,P)||(r.track({type:2,doc:P}),U=!0,(f&&this.Xa(P,f)>0||m&&this.Xa(P,m)<0)&&(d=!0)):!T&&P?(r.track({type:0,doc:P}),U=!0):T&&!P&&(r.track({type:1,doc:T}),U=!0,(f||m)&&(d=!0)),U&&(P?(u=u.add(P),a=W?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,E)=>(function(P,x){const W=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{At:U})}};return W(P)-W(x)})(v.type,E.type)||this.Xa(v.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Ma(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new mw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new D0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new x0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ma.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ug="SyncEngine";class cD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class hD{constructor(e){this.key=e,this.lu=!1}}class dD{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new yo((d=>GI(d)),Ud),this.Tu=new Map,this.Iu=new Set,this.du=new At(_e.comparator),this.Eu=new Map,this.Au=new kg,this.Ru={},this.Vu=new Map,this.mu=La.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function fD(n,e,t=!0){const r=F0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await O0(r,e,t,!0),s}async function pD(n,e){const t=F0(n);await O0(t,e,!0,!1)}async function O0(n,e,t,r){const s=await bx(n.localStore,xr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await mD(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&T0(n.remoteStore,s),d}async function mD(n,e,t,r,s){n.gu=(E,T,P)=>(async function(W,U,J,H){let re=U.view.nu(J);re.Ds&&(re=await uw(W.localStore,U.query,!1).then((({documents:D})=>U.view.nu(D,re))));const G=H&&H.targetChanges.get(U.targetId),Ae=H&&H.targetMismatches.get(U.targetId)!=null,me=U.view.applyChanges(re,W.isPrimaryClient,G,Ae);return vw(W,U.targetId,me._u),me.snapshot})(n,E,T,P);const a=await uw(n.localStore,e,!0),u=new uD(e,a.qs),d=u.nu(a.documents),f=Ku.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);vw(n,t,m._u);const v=new cD(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function gD(n,e,t){const r=Re(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Ud(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Dg(r.remoteStore,s.targetId),bm(r,s.targetId)})).catch(Qa)):(bm(r,s.targetId),await xm(r.localStore,s.targetId,!0))}async function _D(n,e){const t=Re(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Dg(t.remoteStore,r.targetId))}async function yD(n,e,t){const r=CD(n);try{const s=await(function(u,d){const f=Re(u),m=st.now(),v=d.reduce(((P,x)=>P.add(x.key)),Le());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let x=vi(),W=Le();return f.Os.getEntries(P,v).next((U=>{x=U,x.forEach(((J,H)=>{H.isValidDocument()||(W=W.add(J))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,x))).next((U=>{E=U;const J=[];for(const H of d){const re=bN(H,E.get(H.key).overlayedDocument);re!=null&&J.push(new Ts(H.key,re,UI(re.value.mapValue),Dr.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,J,d)})).next((U=>{T=U;const J=U.applyToLocalDocumentSet(E,W);return f.documentOverlayCache.saveOverlays(P,U.batchId,J)}))})).then((()=>({batchId:T.batchId,changes:YI(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new At(Pe)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Yu(r,s.changes),await Hd(r.remoteStore)}catch(s){const a=Vg(s,"Failed to persist write");t.reject(a)}}async function b0(n,e){const t=Re(n);try{const r=await xx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?He(u.lu,14607):s.removedDocuments.size>0&&(He(u.lu,42227),u.lu=!1))})),await Yu(t,r,e)}catch(r){await Qa(r)}}function yw(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Re(u);f.onlineState=d;let m=!1;f.queries.forEach(((v,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&Fg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vD(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new At(_e.comparator);u=u.insert(a,rn.newNoDocument(a,Ce.min()));const d=Le().add(a),f=new Wd(Ce.min(),new Map,new At(Pe),u,d);await b0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),jg(r)}else await xm(r.localStore,e,!1).then((()=>bm(r,e,t))).catch(Qa)}async function ED(n,e){const t=Re(n),r=e.batch.batchId;try{const s=await Nx(t.localStore,e);M0(t,r,null),L0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yu(t,s)}catch(s){await Qa(s)}}async function wD(n,e,t){const r=Re(n);try{const s=await(function(u,d){const f=Re(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(He(E!==null,37113),v=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v))).next((()=>f.localDocuments.getDocuments(m,v)))}))})(r.localStore,e);M0(r,e,t),L0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yu(r,s)}catch(s){await Qa(s)}}function L0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function M0(n,e,t){const r=Re(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function bm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||V0(n,r)}))}function V0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Dg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),jg(n))}function vw(n,e,t){for(const r of t)r instanceof x0?(n.Au.addReference(r.key,e),TD(n,r)):r instanceof D0?(ue(Ug,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||V0(n,r.key)):we(19791,{yu:r})}function TD(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ue(Ug,"New document in limbo: "+t),n.Iu.add(r),jg(n))}function jg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(tt.fromString(e)),r=n.mu.next();n.Eu.set(r,new hD(t)),n.du=n.du.insert(t,r),T0(n.remoteStore,new es(xr(Ig(t.path)),r,"TargetPurposeLimboResolution",Md.ue))}}async function Yu(n,e,t){const r=Re(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var v;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Ng.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const v=Re(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>Q.forEach(m,(T=>Q.forEach(T.Is,(P=>v.persistence.referenceDelegate.addReference(E,T.targetId,P))).next((()=>Q.forEach(T.ds,(P=>v.persistence.referenceDelegate.removeReference(E,T.targetId,P)))))))))}catch(E){if(!Ya(E))throw E;ue(xg,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const P=v.Fs.get(T),x=P.snapshotVersion,W=P.withLastLimboFreeSnapshotVersion(x);v.Fs=v.Fs.insert(T,W)}}})(r.localStore,a))}async function ID(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ue(Ug,"User change. New user:",e.toKey());const r=await y0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new oe(K.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yu(t,r.Bs)}}function SD(n,e){const t=Re(n),r=t.Eu.get(e);if(r&&r.lu)return Le().add(r.key);{let s=Le();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function F0(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=b0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vD.bind(null,e),e.hu.J_=aD.bind(null,e.eventManager),e.hu.pu=lD.bind(null,e.eventManager),e}function CD(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ED.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wD.bind(null,e),e}class od{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$d(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Px(this.persistence,new Rx,e.initialUser,this.serializer)}Du(e){return new _0(Pg.Vi,this.serializer)}bu(e){return new Mx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}od.provider={build:()=>new od};class RD extends od{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){He(this.persistence.referenceDelegate instanceof id,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new _0((r=>id.Vi(r,t)),this.serializer)}}class Lm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ID.bind(null,this.syncEngine),await iD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oD})()}createDatastore(e){const t=$d(e.databaseInfo.databaseId),r=(function(a){return new Bx(a)})(e.databaseInfo);return(function(a,u,d,f){return new qx(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new Gx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>yw(this.syncEngine,t,0)),(function(){return dw.C()?new dw:new Vx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,v){const E=new dD(s,a,u,d,f,m);return v&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Re(s);ue(co,"RemoteStore shutting down."),a.Ia.add(5),await Qu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Lm.provider={build:()=>new Lm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class U0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):yi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="FirestoreClient";class AD{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=nn.UNAUTHENTICATED,this.clientId=_g.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ue(gs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ue(gs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Zp(n,e){n.asyncQueue.verifyOperationInProgress(),ue(gs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await y0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{cs("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{cs("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Ew(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kD(n);ue(gs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>pw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>pw(e.remoteStore,s))),n._onlineComponents=e}async function kD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(gs,"Using user provided OfflineComponentProvider");try{await Zp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;cs("Error using user provided cache. Falling back to memory cache: "+t),await Zp(n,new od)}}else ue(gs,"Using default OfflineComponentProvider"),await Zp(n,new RD(void 0));return n._offlineComponents}async function j0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(gs,"Using user provided OnlineComponentProvider"),await Ew(n,n._uninitializedComponentsProvider._online)):(ue(gs,"Using default OnlineComponentProvider"),await Ew(n,new Lm))),n._onlineComponents}function PD(n){return j0(n).then((e=>e.syncEngine))}async function Mm(n){const e=await j0(n),t=e.eventManager;return t.onListen=fD.bind(null,e.syncEngine),t.onUnlisten=gD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_D.bind(null,e.syncEngine),t}function ND(n,e,t={}){const r=new ss;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const v=new U0({next:T=>{v.Ou(),u.enqueueAndForget((()=>P0(a,E))),T.fromCache&&f.source==="server"?m.reject(new oe(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new N0(d,v,{includeMetadataChanges:!0,ka:!0});return k0(a,E)})(await Mm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function B0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="firestore.googleapis.com",Tw=!0;class Iw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=z0,this.ssl=Tw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Tw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=g0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ux)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new V1;switch(r.type){case"firstParty":return new B1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ww.get(t);r&&(ue("ComponentProvider","Removing Datastore"),ww.delete(t),r.terminate())})(this),Promise.resolve()}}function xD(n,e,t,r={}){var s;n=hi(n,Gd);const a=Vr(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Rd(`https://${f}`),Ad("Firestore",!0)),u.host!==z0&&u.host!==f&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!pi(m,d)&&(n._setSettings(m),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=nn.MOCK_USER;else{v=ig(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new nn(T)}n._authCredentials=new F1(new RI(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class Rt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Hu(t,Rt._jsonSchema))return new Rt(e,r||null,new _e(tt.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Ct("string",Rt._jsonSchemaVersion),referencePath:Ct("string")};class as extends Ti{constructor(e,t,r){super(e,t,Ig(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new _e(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function Va(n,e,...t){if(n=Ge(n),kI("collection","path",e),n instanceof Gd){const r=tt.fromString(e,...t);return ME(r),new as(n,null,r)}{if(!(n instanceof Rt||n instanceof as))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(e,...t));return ME(r),new as(n.firestore,null,r)}}function ad(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=_g.newId()),kI("doc","path",e),n instanceof Gd){const r=tt.fromString(e,...t);return LE(r),new Rt(n,null,new _e(r))}{if(!(n instanceof Rt||n instanceof as))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(e,...t));return LE(r),new Rt(n.firestore,n instanceof as?n.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="AsyncQueue";class Cw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new E0(this,"async_queue_retry"),this.oc=()=>{const r=Jp();r&&ue(Sw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Jp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Jp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ss;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ya(e))throw e;ue(Sw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,yi("INTERNAL UNHANDLED ERROR: ",Rw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Mg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&we(47125,{hc:Rw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Rw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Aw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Fa extends Gd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cw(e),this._firestoreClient=void 0,await e}}}function DD(n,e){const t=typeof n=="object"?n:Nd(),r=typeof n=="string"?n:Xh,s=zu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=rg("firestore");a&&xD(s,...a)}return s}function Bg(n){if(n._terminated)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||OD(n),n._firestoreClient}function OD(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,v){return new iN(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,B0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new AD(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Yt.fromBase64String(e))}catch(t){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hu(e,qn._jsonSchema))return qn.fromBase64String(e.bytes)}}qn._jsonSchemaVersion="firestore/bytes/1.0",qn._jsonSchema={type:Ct("string",qn._jsonSchemaVersion),bytes:Ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:br._jsonSchemaVersion}}static fromJSON(e){if(Hu(e,br._jsonSchema))return new br(e.latitude,e.longitude)}}br._jsonSchemaVersion="firestore/geoPoint/1.0",br._jsonSchema={type:Ct("string",br._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class Lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hu(e,Lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Lr(e.vectorValues);throw new oe(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lr._jsonSchemaVersion="firestore/vectorValue/1.0",Lr._jsonSchema={type:Ct("string",Lr._jsonSchemaVersion),vectorValues:Ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=/^__.*__$/;class LD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gu(e,this.data,t,this.fieldTransforms)}}class W0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ts(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:n})}}class Yd{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ld(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if($0(this.Ec)&&bD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class MD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$d(e)}Dc(e,t,r,s=!1){return new Yd({Ec:e,methodName:t,bc:r,path:Qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(n){const e=n._freezeSettings(),t=$d(n._databaseId);return new MD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function VD(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);$g("Data must be an object, but it was:",u,r);const d=q0(r,u);let f,m;if(a.merge)f=new On(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const T=Vm(e,E,t);if(!u.contains(T))throw new oe(K.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);G0(v,T)||v.push(T)}f=new On(v),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new LD(new wn(d),f,m)}class Xd extends Qd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xd}}function FD(n,e,t){return new Yd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wg extends Qd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=FD(this,e,!0),r=this.vc.map((a=>Za(a,t))),s=new ba(r);return new NN(e.path,s)}isEqual(e){return e instanceof Wg&&pi(this.vc,e.vc)}}function UD(n,e,t,r){const s=n.Dc(1,e,t);$g("Data must be an object, but it was:",s,r);const a=[],u=wn.empty();ws(r,((f,m)=>{const v=qg(e,f,t);m=Ge(m);const E=s.gc(v);if(m instanceof Xd)a.push(v);else{const T=Za(m,E);T!=null&&(a.push(v),u.set(v,T))}}));const d=new On(a);return new W0(u,d,s.fieldTransforms)}function jD(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Vm(e,r,t)],f=[s];if(a.length%2!=0)throw new oe(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Vm(e,a[T])),f.push(a[T+1]);const m=[],v=wn.empty();for(let T=d.length-1;T>=0;--T)if(!G0(m,d[T])){const P=d[T];let x=f[T];x=Ge(x);const W=u.gc(P);if(x instanceof Xd)m.push(P);else{const U=Za(x,W);U!=null&&(m.push(P),v.set(P,U))}}const E=new On(m);return new W0(v,E,u.fieldTransforms)}function BD(n,e,t,r=!1){return Za(t,n.Dc(r?4:3,e))}function Za(n,e){if(H0(n=Ge(n)))return $g("Unsupported field value:",e,n),q0(n,e);if(n instanceof Qd)return(function(r,s){if(!$0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=Za(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=st.fromDate(r);return{timestampValue:rd(s.serializer,a)}}if(r instanceof st){const a=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rd(s.serializer,a)}}if(r instanceof br)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qn)return{bytesValue:u0(s.serializer,r._byteString)};if(r instanceof Rt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Ag(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lr)return(function(u,d){return{mapValue:{fields:{[VI]:{stringValue:FI},[Jh]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Sg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ld(r)}`)})(n,e)}function q0(n,e){const t={};return xI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(n,((r,s)=>{const a=Za(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function H0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof br||n instanceof qn||n instanceof Rt||n instanceof Qd||n instanceof Lr)}function $g(n,e,t){if(!H0(t)||!PI(t)){const r=Ld(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Vm(n,e,t){if((e=Ge(e))instanceof Kd)return e._internalPath;if(typeof e=="string")return qg(n,e);throw ld("Field path arguments must be of type string or ",n,!1,void 0,t)}const zD=new RegExp("[~\\*/\\[\\]]");function qg(n,e,t){if(e.search(zD)>=0)throw ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kd(...e.split("."))._internalPath}catch{throw ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ld(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new oe(K.INVALID_ARGUMENT,d+n+f)}function G0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WD extends K0{data(){return super.data()}}function Jd(n,e){return typeof e=="string"?qg(n,e):e instanceof Kd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hg{}class Gg extends Hg{}function Ou(n,e,...t){let r=[];e instanceof Hg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Kg)).length,d=a.filter((f=>f instanceof Zd)).length;if(u>1||u>0&&d>0)throw new oe(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Zd extends Gg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Zd(e,t,r)}_apply(e){const t=this._parse(e);return X0(e._query,t),new Ti(e.firestore,e.converter,Rm(e._query,t))}_parse(e){const t=zg(e.firestore);return(function(a,u,d,f,m,v,E){let T;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new oe(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Pw(E,v);const x=[];for(const W of E)x.push(kw(f,a,W));T={arrayValue:{values:x}}}else T=kw(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Pw(E,v),T=BD(d,u,E,v==="in"||v==="not-in");return St.create(m,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Y0(n,e,t){const r=e,s=Jd("where",n);return Zd._create(s,r,t)}class Kg extends Hg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)X0(u,f),u=Rm(u,f)})(e._query,t),new Ti(e.firestore,e.converter,Rm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends Gg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xu(a,u)})(e._query,this._field,this._direction);return new Ti(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new Xa(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function ud(n,e="asc"){const t=e,r=Jd("orderBy",n);return Qg._create(r,t)}class Yg extends Gg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Yg(e,t,r)}_apply(e){return new Ti(e.firestore,e.converter,ed(e._query,this._limit,this._limitType))}}function cd(n){return G1("limit",n),Yg._create("limit",n,"F")}function kw(n,e,t){if(typeof(t=Ge(t))=="string"){if(t==="")throw new oe(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HI(e)&&t.indexOf("/")!==-1)throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(tt.fromString(t));if(!_e.isDocumentKey(r))throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $E(n,new _e(r))}if(t instanceof Rt)return $E(n,t._key);throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ld(t)}.`)}function Pw(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X0(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $D{convertValue(e,t="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ws(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Jh].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>yt(u.doubleValue)));return new Lr(a)}convertGeoPoint(e){return new br(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ku(e));default:return null}}convertTimestamp(e){const t=ds(e);return new st(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=tt.fromString(e);He(m0(r),9688,{name:e});const s=new Pu(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return s.isEqual(t)||yi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class uu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class io extends K0{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=io._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}io._jsonSchemaVersion="firestore/documentSnapshot/1.0",io._jsonSchema={type:Ct("string",io._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class Vh extends io{data(e={}){return super.data(e)}}class so{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new uu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Vh(this._firestore,this._userDataWriter,r.key,r,new uu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Vh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new uu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Vh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new uu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:HD(d.type),doc:f,oldIndex:m,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=so._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_g.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}so._jsonSchemaVersion="firestore/querySnapshot/1.0",so._jsonSchema={type:Ct("string",so._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class Xg extends $D{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function GD(n){n=hi(n,Ti);const e=hi(n.firestore,Fa),t=Bg(e),r=new Xg(e);return Q0(n._query),ND(t,n._query).then((s=>new so(e,r,n,s)))}function Fm(n,e,t,...r){n=hi(n,Rt);const s=hi(n.firestore,Fa),a=zg(s);let u;return u=typeof(e=Ge(e))=="string"||e instanceof Kd?jD(a,"updateDoc",n._key,e,t,r):UD(a,"updateDoc",n._key,e),J0(s,[u.toMutation(n._key,Dr.exists(!0))])}function KD(n,e){const t=hi(n.firestore,Fa),r=ad(n),s=qD(n.converter,e);return J0(t,[VD(zg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Dr.exists(!1))]).then((()=>r))}function hd(n,...e){var t,r,s;n=Ge(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Aw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Aw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,v;if(n instanceof Rt)m=hi(n.firestore,Fa),v=Ig(n._key.path),f={next:E=>{e[u]&&e[u](QD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=hi(n,Ti);m=hi(E.firestore,Fa),v=E._query;const T=new Xg(m);f={next:P=>{e[u]&&e[u](new so(m,T,E,P))},error:e[u+1],complete:e[u+2]},Q0(n._query)}return(function(T,P,x,W){const U=new U0(W),J=new N0(P,U,x);return T.asyncQueue.enqueueAndForget((async()=>k0(await Mm(T),J))),()=>{U.Ou(),T.asyncQueue.enqueueAndForget((async()=>P0(await Mm(T),J)))}})(Bg(m),v,d,f)}function J0(n,e){return(function(r,s){const a=new ss;return r.asyncQueue.enqueueAndForget((async()=>yD(await PD(r),s,a))),a.promise})(Bg(n),e)}function QD(n,e,t){const r=t.docs.get(e._key),s=new Xg(n);return new io(n,s,e._key,r,new uu(t.hasPendingWrites,t.fromCache),e.converter)}function YD(...n){return new Wg("arrayUnion",n)}(function(e,t=!0){(function(s){Ka=s})(vs),us(new mi("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Fa(new U1(r.getProvider("auth-internal")),new z1(u,r.getProvider("app-check-internal")),(function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pu(m.options.projectId,v)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Gn(NE,xE,e),Gn(NE,xE,"esm2017")})();var Nw={};const xw="@firebase/database",Dw="1.0.20";/**
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
 */let Z0="";function XD(n){Z0=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Iu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JD(e)}}catch{}return new ZD},no=eS("localStorage"),eO=eS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Pd("@firebase/database"),tO=(function(){let n=1;return function(){return n++}})(),tS=function(n){const e=pA(n),t=new cA;t.update(e);const r=t.digest();return ng.encodeByteArray(r)},Xu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xu.apply(null,r):typeof r=="object"?e+=Wt(r):e+=r,e+=" "}return e};let _u=null,Ow=!0;const nO=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Ca.logLevel=be.VERBOSE,_u=Ca.log.bind(Ca)},Kt=function(...n){if(Ow===!0&&(Ow=!1,_u===null&&eO.get("logging_enabled")===!0&&nO()),_u){const e=Xu.apply(null,n);_u(e)}},Ju=function(n){return function(...e){Kt(n,...e)}},Um=function(...n){const e="FIREBASE INTERNAL ERROR: "+Xu(...n);Ca.error(e)},Ei=function(...n){const e=`FIREBASE FATAL ERROR: ${Xu(...n)}`;throw Ca.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+Xu(...n);Ca.warn(e)},rO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ef=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},iO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ua="[MIN_NAME]",ho="[MAX_NAME]",Eo=function(n,e){if(n===e)return 0;if(n===Ua||e===ho)return-1;if(e===Ua||n===ho)return 1;{const t=bw(n),r=bw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},sO=function(n,e){return n===e?0:n<e?-1:1},Jl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Wt(e))},Jg=function(n){if(typeof n!="object"||n===null)return Wt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Wt(e[r]),t+=":",t+=Jg(n[e[r]]);return t+="}",t},nS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function on(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const rS=function(n){ne(!ef(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const v=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(v.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},oO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const uO=new RegExp("^-?(0*)\\d{1,10}$"),cO=-2147483648,hO=2147483647,bw=function(n){if(uO.test(n)){const e=Number(n);if(e>=cO&&e<=hO)return e}return null},el=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},dO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class fO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Dn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class Fh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="5",iS="v",sS="s",oS="r",aS="f",lS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uS="ls",cS="p",jm="ac",hS="websocket",dS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=no.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&no.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function mO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pS(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===hS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mO(n)&&(t.ns=n.namespace);const s=[];return on(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.counters_={}}incrementCounter(e,t=1){Ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return WR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={},tm={};function e_(n){const e=n.toString();return em[e]||(em[e]=new gO),em[e]}function _O(n,e){const t=n.toString();return tm[t]||(tm[t]=e()),tm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&el(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="start",vO="close",EO="pLPCommand",wO="pRTLPCB",mS="id",gS="pw",_S="ser",TO="cb",IO="seg",SO="ts",CO="d",RO="dframe",yS=1870,vS=30,AO=yS-vS,kO=25e3,PO=3e4;class Ea{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ju(e),this.stats_=e_(t),this.urlFn=f=>(this.appCheckToken&&(f[jm]=this.appCheckToken),pS(t,dS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PO)),iO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new t_((...a)=>{const[u,d,f,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Lw)this.id=d,this.password=f;else if(u===vO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lw]="t",r[_S]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[TO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iS]=Zg,this.transportSessionId&&(r[sS]=this.transportSessionId),this.lastSessionId&&(r[uS]=this.lastSessionId),this.applicationId&&(r[cS]=this.applicationId),this.appCheckToken&&(r[jm]=this.appCheckToken),typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(r[oS]=aS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ea.forceAllow_=!0}static forceDisallow(){Ea.forceDisallow_=!0}static isAvailable(){return Ea.forceAllow_?!0:!Ea.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oO()&&!aO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=AT(t),s=nS(r,AO);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[RO]="t",r[mS]=e,r[gS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class t_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tO(),window[EO+this.uniqueCallbackIdentifier]=e,window[wO+this.uniqueCallbackIdentifier]=t,this.myIFrame=t_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Kt("frame writing exception"),d.stack&&Kt(d.stack),Kt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mS]=this.myID,e[gS]=this.myPW,e[_S]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vS+r.length<=yS;){const u=this.pendingSegs.shift();r=r+"&"+IO+s+"="+u.seg+"&"+SO+s+"="+u.ts+"&"+CO+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(kO)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=16384,xO=45e3;let dd=null;typeof MozWebSocket<"u"?dd=MozWebSocket:typeof WebSocket<"u"&&(dd=WebSocket);class ur{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ju(this.connId),this.stats_=e_(t),this.connURL=ur.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[iS]=Zg,typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(u[oS]=aS),t&&(u[sS]=t),r&&(u[uS]=r),s&&(u[jm]=s),a&&(u[cS]=a),pS(e,hS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,no.set("previous_websocket_failure",!0);try{let r;tA(),this.mySock=new dd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dd!==null&&!ur.forceDisallow_}static previouslyFailed(){return no.isInMemoryStorage||no.get("previous_websocket_failure")===!0}markConnectionHealthy(){no.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Iu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=nS(t,NO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ur.responsesRequiredToBeHealthy=2;ur.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static get ALL_TRANSPORTS(){return[Ea,ur]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ur&&ur.isAvailable();let r=t&&!ur.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ur];else{const s=this.transports_=[];for(const a of bu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);bu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=6e4,OO=5e3,bO=10*1024,LO=100*1024,nm="t",Mw="d",MO="s",Vw="r",VO="e",Fw="o",Uw="a",jw="n",Bw="p",FO="h";class UO{constructor(e,t,r,s,a,u,d,f,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ju("c:"+this.id+":"),this.transportManager_=new bu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>LO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nm in e){const t=e[nm];t===Uw?this.upgradeIfSecondaryHealthy_():t===Vw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Jl("t",e),r=Jl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Jl("t",e),r=Jl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Jl(nm,e);if(Mw in e){const r=e[Mw];if(t===FO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===jw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===MO?this.onConnectionShutdown_(r):t===Vw?this.onReset_(r):t===VO?Um("Server Error: "+r):t===Fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Um("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zg!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),yu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(OO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(no.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends wS{static getInstance(){return new fd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=32,Ww=768;class Qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function qe(){return new Qe("")}function Ne(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function _s(n){return n.pieces_.length-n.pieceNum_}function Xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Qe(n.pieces_,e)}function n_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function jO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Lu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function TS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Qe(e,0)}function vt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Qe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Qe(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function Tn(n,e){const t=Ne(n),r=Ne(e);if(t===null)return e;if(t===r)return Tn(Xe(n),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function BO(n,e){const t=Lu(n,0),r=Lu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Eo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function r_(n,e){if(_s(n)!==_s(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Hn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(_s(n)>_s(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class zO{constructor(e,t){this.errorPrefix_=t,this.parts_=Lu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kd(this.parts_[r]);IS(this)}}function WO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=kd(e),IS(n)}function $O(n){const e=n.parts_.pop();n.byteLength_-=kd(e),n.parts_.length>0&&(n.byteLength_-=1)}function IS(n){if(n.byteLength_>Ww)throw new Error(n.errorPrefix_+"has a key path longer than "+Ww+" bytes ("+n.byteLength_+").");if(n.parts_.length>zw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zw+") or object contains a cycle "+eo(n))}function eo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends wS{static getInstance(){return new i_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=1e3,qO=300*1e3,$w=30*1e3,HO=1.3,GO=3e4,KO="server_kill",qw=3;class di extends ES{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=di.nextPersistentConnectionId_++,this.log_=Ju("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zl,this.maxReconnectDelay_=qO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");i_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Wt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new si,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;di.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ur(e,"w")){const r=ka(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$w)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=lA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Um("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GO&&(this.reconnectDelay_=Zl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+di.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new UO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,P=>{Sn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(KO)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Sn(E),f())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bh(this.interruptReasons_)&&(this.reconnectDelay_=Zl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Jg(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Qe(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Kt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qw&&(this.reconnectDelay_=$w,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Kt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Z0.replace(/\./g,"-")]=1,sg()?e["framework.cordova"]=1:DT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fd.getInstance().currentlyOnline();return Bh(this.interruptReasons_)&&e}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Oe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Oe(Ua,e),s=new Oe(Ua,t);return this.compare(r,s)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh;class SS extends tf{static get __EMPTY_NODE(){return Sh}static set __EMPTY_NODE(e){Sh=e}compare(e,t){return Eo(e.name,t.name)}isDefinedOn(e){throw $a("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(ho,Sh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,Sh)}toString(){return".key"}}const Ra=new SS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=s??In.EMPTY_NODE,this.right=a??In.EMPTY_NODE}copy(e,t,r,s,a){return new zt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return In.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0;zt.BLACK=!1;class QO{copy(e,t,r,s,a){return this}insert(e,t,r){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class In{constructor(e,t=In.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new In(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new In(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ch(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ch(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ch(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ch(this.root_,null,this.comparator_,!0,e)}}In.EMPTY_NODE=new QO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(n,e){return Eo(n.name,e.name)}function s_(n,e){return Eo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm;function XO(n){Bm=n}const CS=function(n){return typeof n=="number"?"number:"+rS(n):"string:"+n},RS=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ur(e,".sv"),"Priority must be a string or number.")}else ne(n===Bm||n.isEmpty(),"priority of unexpected type.");ne(n===Bm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hw;class jt{static set __childrenNodeConstructor(e){Hw=e}static get __childrenNodeConstructor(){return Hw}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Ne(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ne(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||_s(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=rS(this.value_):e+=this.value_,this.lazyHash_=tS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=jt.VALUE_TYPE_ORDER.indexOf(t),a=jt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AS,kS;function JO(n){AS=n}function ZO(n){kS=n}class eb extends tf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Eo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(ho,new jt("[PRIORITY-POST]",kS))}makePost(e,t){const r=AS(e);return new Oe(t,new jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ht=new eb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=Math.log(2);class nb{constructor(e){const t=a=>parseInt(Math.log(a)/tb,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pd=function(n,e,t,r){n.sort(e);const s=function(f,m){const v=m-f;let E,T;if(v===0)return null;if(v===1)return E=n[f],T=t?t(E):E,new zt(T,E.node,zt.BLACK,null,null);{const P=parseInt(v/2,10)+f,x=s(f,P),W=s(P+1,m);return E=n[P],T=t?t(E):E,new zt(T,E.node,zt.BLACK,x,W)}},a=function(f){let m=null,v=null,E=n.length;const T=function(x,W){const U=E-x,J=E;E-=x;const H=s(U+1,J),re=n[U],G=t?t(re):re;P(new zt(G,re.node,W,null,H))},P=function(x){m?(m.left=x,m=x):(v=x,m=x)};for(let x=0;x<f.count;++x){const W=f.nextBitIsOne(),U=Math.pow(2,f.count-(x+1));W?T(U,zt.BLACK):(T(U,zt.BLACK),T(U,zt.RED))}return v},u=new nb(n.length),d=a(u);return new In(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rm;const pa={};class li{static get Default(){return ne(pa&&ht,"ChildrenNode.ts has not been loaded"),rm=rm||new li({".priority":pa},{".priority":ht}),rm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ka(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return Ur(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Oe.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=pd(r,e.getCompare()):d=pa;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new li(v,m)}addToIndexes(e,t){const r=zh(this.indexes_,(s,a)=>{const u=ka(this.indexSet_,a);if(ne(u,"Missing index implementation for "+a),s===pa)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Oe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),pd(d,u.getCompare())}else return pa;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Oe(e.name,d))),f.insert(e,e.node)}});return new li(r,this.indexSet_)}removeFromIndexes(e,t){const r=zh(this.indexes_,s=>{if(s===pa)return s;{const a=t.get(e.name);return a?s.remove(new Oe(e.name,a)):s}});return new li(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;class Te{static get EMPTY_NODE(){return eu||(eu=new Te(new In(s_),null,li.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&RS(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||eu}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?eu:t}}getChild(e){const t=Ne(e);return t===null?this:this.getImmediateChild(t).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Oe(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?eu:this.priorityNode_;return new Te(s,u,a)}}updateChild(e,t){const r=Ne(e);if(r===null)return t;{ne(Ne(e)!==".priority"||_s(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Xe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(ht,(u,d)=>{t[u]=d.val(e),r++,a&&Te.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CS(this.getPriority().val())+":"),this.forEachChild(ht,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":tS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Oe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Oe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zu?-1:0}withIndex(e){if(e===Ra||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ra||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ht),s=t.getIterator(ht);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ra?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rb extends Te{constructor(){super(new In(s_),Te.EMPTY_NODE,li.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const Zu=new rb;Object.defineProperties(Oe,{MIN:{value:new Oe(Ua,Te.EMPTY_NODE)},MAX:{value:new Oe(ho,Zu)}});SS.__EMPTY_NODE=Te.EMPTY_NODE;jt.__childrenNodeConstructor=Te;XO(Zu);ZO(Zu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=!0;function It(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,It(e))}if(!(n instanceof Array)&&ib){const t=[];let r=!1;if(on(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=It(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Oe(u,f)))}}),t.length===0)return Te.EMPTY_NODE;const a=pd(t,YO,u=>u.name,s_);if(r){const u=pd(t,ht.getCompare());return new Te(a,It(e),new li({".priority":u},{".priority":ht}))}else return new Te(a,It(e),li.Default)}else{let t=Te.EMPTY_NODE;return on(n,(r,s)=>{if(Ur(n,r)&&r.substring(0,1)!=="."){const a=It(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(It(e))}}JO(It);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb extends tf{constructor(e){super(),this.indexPath_=e,ne(!De(e)&&Ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Eo(e.name,t.name):a}makePost(e,t){const r=It(e),s=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new Oe(t,s)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,Zu);return new Oe(ho,e)}toString(){return Lu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob extends tf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Eo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const r=It(e);return new Oe(t,r)}toString(){return".value"}}const ab=new ob;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n){return{type:"value",snapshotNode:n}}function ja(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Mu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lb(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Mu(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(ja(t,r)):u.trackChildChange(Vu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ht,(s,a)=>{t.hasChild(s)||r.trackChildChange(Mu(s,a))}),t.isLeafNode()||t.forEachChild(ht,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Vu(s,a,u))}else r.trackChildChange(ja(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.indexedFilter_=new o_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fu.getStartPost_(e),this.endPost_=Fu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Oe(t,r))||(r=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Te.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Te.EMPTY_NODE);const a=this;return t.forEachChild(ht,(u,d)=>{a.matches(new Oe(u,d))||(s=s.updateImmediateChild(u,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Fu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Oe(t,r))||(r=Te.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Te.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Te.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,P)=>E(P,T)}else u=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const f=new Oe(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const P=T==null?1:u(T,f);if(v&&!r.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(Vu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Mu(t,E));const W=d.updateImmediateChild(t,Te.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(ja(T.name,T.node)),W.updateImmediateChild(T.name,T.node)):W}}else return r.isEmpty()?e:v&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Mu(m.name,m.node)),a.trackChildChange(ja(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ua}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ho}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new a_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cb(n){return n.loadsAllData()?new o_(n.getIndex()):n.hasLimit()?new ub(n):new Fu(n)}function Gw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ht?t="$priority":n.index_===ab?t="$value":n.index_===Ra?t="$key":(ne(n.index_ instanceof sb,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Wt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Wt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Wt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Wt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Wt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Kw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ht&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends ES{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ju("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=md.getListenId_(e,r),d={};this.listens_[u]=d;const f=Gw(e._queryParams);this.restRequest_(a+".json",f,(m,v)=>{let E=v;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),ka(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=md.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Gw(e._queryParams),r=e._path.toString(),s=new si;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qa(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Iu(d.responseText)}catch{Sn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Sn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return{value:null,children:new Map}}function tl(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ne(e);n.children.has(r)||n.children.set(r,gd());const s=n.children.get(r);e=Xe(e),tl(s,e,t)}}function zm(n,e){if(De(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ht,(r,s)=>{tl(n,new Qe(r),s)}),zm(n,e)}}else if(n.children.size>0){const t=Ne(e);return e=Xe(e),n.children.has(t)&&zm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Wm(n,e,t){n.value!==null?t(e,n.value):db(n,(r,s)=>{const a=new Qe(e.toString()+"/"+r);Wm(s,a,t)})}function db(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&on(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=10*1e3,pb=30*1e3,mb=300*1e3;class gb{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new fb(e);const r=Qw+(pb-Qw)*Math.random();yu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;on(e,(s,a)=>{a>0&&Ur(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),yu(this.reportStats_.bind(this),Math.floor(Math.random()*2*mb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hr||(hr={}));function NS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function l_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function u_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=hr.ACK_USER_WRITE,this.source=NS()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Qe(e));return new _d(qe(),t,this.revert)}}else return ne(Ne(this.path)===e,"operationForChild called for unrelated child."),new _d(Xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.source=e,this.path=t,this.type=hr.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new Uu(this.source,qe()):new Uu(this.source,Xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=hr.OVERWRITE}operationForChild(e){return De(this.path)?new fo(this.source,qe(),this.snap.getImmediateChild(e)):new fo(this.source,Xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=hr.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new Qe(e));return t.isEmpty()?null:t.value?new fo(this.source,qe(),t.value):new ju(this.source,qe(),t)}else return ne(Ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ju(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ne(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yb(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(lb(u.childName,u.snapshotNode))}),tu(n,s,"child_removed",e,r,t),tu(n,s,"child_added",e,r,t),tu(n,s,"child_moved",a,r,t),tu(n,s,"child_changed",e,r,t),tu(n,s,"value",e,r,t),s}function tu(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>Eb(n,d,f)),u.forEach(d=>{const f=vb(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function vb(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Eb(n,e,t){if(e.childName==null||t.childName==null)throw $a("Should only compare child_ events.");const r=new Oe(e.childName,e.snapshotNode),s=new Oe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e){return{eventCache:n,serverCache:e}}function vu(n,e,t,r){return nf(new po(e,t,r),n.serverCache)}function xS(n,e,t,r){return nf(n.eventCache,new po(e,t,r))}function $m(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function mo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;const wb=()=>(im||(im=new In(sO)),im);class it{static fromObject(e){let t=new it(null);return on(e,(r,s)=>{t=t.set(new Qe(r),s)}),t}constructor(e,t=wb()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:qe(),value:this.value};if(De(e))return null;{const r=Ne(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(Xe(e),t);return a!=null?{path:vt(new Qe(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Ne(e),r=this.children.get(t);return r!==null?r.subtree(Xe(e)):new it(null)}}set(e,t){if(De(e))return new it(t,this.children);{const r=Ne(e),a=(this.children.get(r)||new it(null)).set(Xe(e),t),u=this.children.insert(r,a);return new it(this.value,u)}}remove(e){if(De(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const t=Ne(e),r=this.children.get(t);if(r){const s=r.remove(Xe(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new it(null):new it(this.value,a)}else return this}}get(e){if(De(e))return this.value;{const t=Ne(e),r=this.children.get(t);return r?r.get(Xe(e)):null}}setTree(e,t){if(De(e))return t;{const r=Ne(e),a=(this.children.get(r)||new it(null)).setTree(Xe(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new it(this.value,u)}}fold(e){return this.fold_(qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(vt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,qe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(De(e))return null;{const a=Ne(e),u=this.children.get(a);return u?u.findOnPath_(Xe(e),vt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,qe(),t)}foreachOnPath_(e,t,r){if(De(e))return this;{this.value&&r(t,this.value);const s=Ne(e),a=this.children.get(s);return a?a.foreachOnPath_(Xe(e),vt(t,s),r):new it(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(vt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.writeTree_=e}static empty(){return new fr(new it(null))}}function Eu(n,e,t){if(De(e))return new fr(new it(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Tn(s,e);return a=a.updateChild(u,t),new fr(n.writeTree_.set(s,a))}else{const s=new it(t),a=n.writeTree_.setTree(e,s);return new fr(a)}}}function Yw(n,e,t){let r=n;return on(t,(s,a)=>{r=Eu(r,vt(e,s),a)}),r}function Xw(n,e){if(De(e))return fr.empty();{const t=n.writeTree_.setTree(e,new it(null));return new fr(t)}}function qm(n,e){return wo(n,e)!=null}function wo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Tn(t.path,e)):null}function Jw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ht,(r,s)=>{e.push(new Oe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Oe(r,s.value))}),e}function ls(n,e){if(De(e))return n;{const t=wo(n,e);return t!=null?new fr(new it(t)):new fr(n.writeTree_.subtree(e))}}function Hm(n){return n.writeTree_.isEmpty()}function Ba(n,e){return DS(qe(),n.writeTree_,e)}function DS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=DS(vt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(vt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n,e){return MS(e,n)}function Tb(n,e,t,r,s){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Eu(n.visibleWrites,e,t)),n.lastWriteId=r}function Ib(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Sb(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&Cb(d,r.path)?s=!1:Hn(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return Rb(n),!0;if(r.snap)n.visibleWrites=Xw(n.visibleWrites,r.path);else{const d=r.children;on(d,f=>{n.visibleWrites=Xw(n.visibleWrites,vt(r.path,f))})}return!0}else return!1}function Cb(n,e){if(n.snap)return Hn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Hn(vt(n.path,t),e))return!0;return!1}function Rb(n){n.visibleWrites=OS(n.allWrites,Ab,qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ab(n){return n.visible}function OS(n,e,t){let r=fr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)Hn(t,u)?(d=Tn(t,u),r=Eu(r,d,a.snap)):Hn(u,t)&&(d=Tn(u,t),r=Eu(r,qe(),a.snap.getChild(d)));else if(a.children){if(Hn(t,u))d=Tn(t,u),r=Yw(r,d,a.children);else if(Hn(u,t))if(d=Tn(u,t),De(d))r=Yw(r,qe(),a.children);else{const f=ka(a.children,Ne(d));if(f){const m=f.getChild(Xe(d));r=Eu(r,qe(),m)}}}else throw $a("WriteRecord should have .snap or .children")}}return r}function bS(n,e,t,r,s){if(!r&&!s){const a=wo(n.visibleWrites,e);if(a!=null)return a;{const u=ls(n.visibleWrites,e);if(Hm(u))return t;if(t==null&&!qm(u,qe()))return null;{const d=t||Te.EMPTY_NODE;return Ba(u,d)}}}else{const a=ls(n.visibleWrites,e);if(!s&&Hm(a))return t;if(!s&&t==null&&!qm(a,qe()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(Hn(m.path,e)||Hn(e,m.path))},d=OS(n.allWrites,u,e),f=t||Te.EMPTY_NODE;return Ba(d,f)}}}function kb(n,e,t){let r=Te.EMPTY_NODE;const s=wo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ht,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=ls(n.visibleWrites,e);return t.forEachChild(ht,(u,d)=>{const f=Ba(ls(a,new Qe(u)),d);r=r.updateImmediateChild(u,f)}),Jw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=ls(n.visibleWrites,e);return Jw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function Pb(n,e,t,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=vt(e,t);if(qm(n.visibleWrites,a))return null;{const u=ls(n.visibleWrites,a);return Hm(u)?s.getChild(t):Ba(u,s.getChild(t))}}function Nb(n,e,t,r){const s=vt(e,t),a=wo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=ls(n.visibleWrites,s);return Ba(u,r.getNode().getImmediateChild(t))}else return null}function xb(n,e){return wo(n.visibleWrites,e)}function Db(n,e,t,r,s,a,u){let d;const f=ls(n.visibleWrites,e),m=wo(f,qe());if(m!=null)d=m;else if(t!=null)d=Ba(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let P=T.getNext();for(;P&&v.length<s;)E(P,r)!==0&&v.push(P),P=T.getNext();return v}else return[]}function Ob(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function yd(n,e,t,r){return bS(n.writeTree,n.treePath,e,t,r)}function h_(n,e){return kb(n.writeTree,n.treePath,e)}function Zw(n,e,t,r){return Pb(n.writeTree,n.treePath,e,t,r)}function vd(n,e){return xb(n.writeTree,vt(n.treePath,e))}function bb(n,e,t,r,s,a){return Db(n.writeTree,n.treePath,e,t,r,s,a)}function d_(n,e,t){return Nb(n.writeTree,n.treePath,e,t)}function LS(n,e){return MS(vt(n.treePath,e),n.writeTree)}function MS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Vu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Mu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,ja(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Vu(r,e.snapshotNode,s.oldSnap));else throw $a("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const VS=new Mb;class f_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new po(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return d_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mo(this.viewCache_),a=bb(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n){return{filter:n}}function Fb(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ub(n,e,t,r,s){const a=new Lb;let u,d;if(t.type===hr.OVERWRITE){const m=t;m.source.fromUser?u=Gm(n,e,m.path,m.snap,r,s,a):(ne(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!De(m.path),u=Ed(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===hr.MERGE){const m=t;m.source.fromUser?u=Bb(n,e,m.path,m.children,r,s,a):(ne(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Km(n,e,m.path,m.children,r,s,d,a))}else if(t.type===hr.ACK_USER_WRITE){const m=t;m.revert?u=$b(n,e,m.path,r,s,a):u=zb(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===hr.LISTEN_COMPLETE)u=Wb(n,e,t.path,r,a);else throw $a("Unknown operation type: "+t.type);const f=a.getChanges();return jb(e,u,f),{viewCache:u,changes:f}}function jb(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=$m(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(PS($m(e)))}}function FS(n,e,t,r,s,a){const u=e.eventCache;if(vd(r,t)!=null)return e;{let d,f;if(De(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=mo(e),v=m instanceof Te?m:Te.EMPTY_NODE,E=h_(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=yd(r,mo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Ne(t);if(m===".priority"){ne(_s(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const E=Zw(r,t,v,f);E!=null?d=n.filter.updatePriority(v,E):d=u.getNode()}else{const v=Xe(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=Zw(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(v,T):E=u.getNode().getImmediateChild(m)}else E=d_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,v,s,a):d=u.getNode()}}return vu(e,d,u.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function Ed(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(De(t))m=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const P=f.getNode().updateChild(t,r);m=v.updateFullNode(f.getNode(),P,null)}else{const P=Ne(t);if(!f.isCompleteForPath(t)&&_s(t)>1)return e;const x=Xe(t),U=f.getNode().getImmediateChild(P).updateChild(x,r);P===".priority"?m=v.updatePriority(f.getNode(),U):m=v.updateChild(f.getNode(),P,U,x,VS,null)}const E=xS(e,m,f.isFullyInitialized()||De(t),v.filtersNodes()),T=new f_(s,E,a);return FS(n,E,t,s,T,d)}function Gm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const v=new f_(s,e,a);if(De(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=vu(e,m,!0,n.filter.filtersNodes());else{const E=Ne(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=vu(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=Xe(t),P=d.getNode().getImmediateChild(E);let x;if(De(T))x=r;else{const W=v.getCompleteChild(E);W!=null?n_(T)===".priority"&&W.getChild(TS(T)).isEmpty()?x=W:x=W.updateChild(T,r):x=Te.EMPTY_NODE}if(P.equals(x))f=e;else{const W=n.filter.updateChild(d.getNode(),E,x,T,v,u);f=vu(e,W,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function eT(n,e){return n.eventCache.isCompleteForChild(e)}function Bb(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const v=vt(t,f);eT(e,Ne(v))&&(d=Gm(n,d,v,m,s,a,u))}),r.foreach((f,m)=>{const v=vt(t,f);eT(e,Ne(v))||(d=Gm(n,d,v,m,s,a,u))}),d}function tT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Km(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;De(t)?m=r:m=new it(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(v.hasChild(E)){const P=e.serverCache.getNode().getImmediateChild(E),x=tT(n,P,T);f=Ed(n,f,new Qe(E),x,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const P=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!v.hasChild(E)&&!P){const x=e.serverCache.getNode().getImmediateChild(E),W=tT(n,x,T);f=Ed(n,f,new Qe(E),W,s,a,u,d)}}),f}function zb(n,e,t,r,s,a,u){if(vd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(De(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ed(n,e,t,f.getNode().getChild(t),s,a,d,u);if(De(t)){let m=new it(null);return f.getNode().forEachChild(Ra,(v,E)=>{m=m.set(new Qe(v),E)}),Km(n,e,t,m,s,a,d,u)}else return e}else{let m=new it(null);return r.foreach((v,E)=>{const T=vt(t,v);f.isCompleteForPath(T)&&(m=m.set(v,f.getNode().getChild(T)))}),Km(n,e,t,m,s,a,d,u)}}function Wb(n,e,t,r,s){const a=e.serverCache,u=xS(e,a.getNode(),a.isFullyInitialized()||De(t),a.isFiltered());return FS(n,u,t,r,VS,s)}function $b(n,e,t,r,s,a){let u;if(vd(r,t)!=null)return e;{const d=new f_(r,e,s),f=e.eventCache.getNode();let m;if(De(t)||Ne(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=yd(r,mo(e));else{const E=e.serverCache.getNode();ne(E instanceof Te,"serverChildren would be complete if leaf node"),v=h_(r,E)}v=v,m=n.filter.updateFullNode(f,v,a)}else{const v=Ne(t);let E=d_(r,v,e.serverCache);E==null&&e.serverCache.isCompleteForChild(v)&&(E=f.getImmediateChild(v)),E!=null?m=n.filter.updateChild(f,v,E,Xe(t),d,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(f,v,Te.EMPTY_NODE,Xe(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=yd(r,mo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||vd(r,qe())!=null,vu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new o_(r.getIndex()),a=cb(r);this.processor_=Vb(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Te.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),v=new po(f,u.isFullyInitialized(),s.filtersNodes()),E=new po(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=nf(E,v),this.eventGenerator_=new _b(this.query_)}get query(){return this.query_}}function Hb(n){return n.viewCache_.serverCache.getNode()}function Gb(n,e){const t=mo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Ne(e)).isEmpty())?t.getChild(e):null}function nT(n){return n.eventRegistrations_.length===0}function Kb(n,e){n.eventRegistrations_.push(e)}function rT(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function iT(n,e,t,r){e.type===hr.MERGE&&e.source.queryId!==null&&(ne(mo(n.viewCache_),"We should always have a full cache before handling merges"),ne($m(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=Ub(n.processor_,s,e,t,r);return Fb(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,US(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Qb(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ht,(a,u)=>{r.push(ja(a,u))}),t.isFullyInitialized()&&r.push(PS(t.getNode())),US(n,r,t.getNode(),e)}function US(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return yb(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;class Yb{constructor(){this.views=new Map}}function Xb(n){ne(!wd,"__referenceConstructor has already been defined"),wd=n}function Jb(){return ne(wd,"Reference.ts has not been loaded"),wd}function Zb(n){return n.views.size===0}function p_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ne(a!=null,"SyncTree gave us an op for an invalid query."),iT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(iT(u,e,t,r));return a}}function eL(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=yd(t,s?r:null),f=!1;d?f=!0:r instanceof Te?(d=h_(t,r),f=!1):(d=Te.EMPTY_NODE,f=!1);const m=nf(new po(d,f,!1),new po(r,s,!1));return new qb(e,m)}return u}function tL(n,e,t,r,s,a){const u=eL(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),Kb(u,t),Qb(u,t)}function nL(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=ys(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(rT(m,t,r)),nT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(rT(f,t,r)),nT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!ys(n)&&a.push(new(Jb())(e._repo,e._path)),{removed:a,events:u}}function jS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Aa(n,e){let t=null;for(const r of n.views.values())t=t||Gb(r,e);return t}function BS(n,e){if(e._queryParams.loadsAllData())return rf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function zS(n,e){return BS(n,e)!=null}function ys(n){return rf(n)!=null}function rf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;function rL(n){ne(!Td,"__referenceConstructor has already been defined"),Td=n}function iL(){return ne(Td,"Reference.ts has not been loaded"),Td}let sL=1;class sT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=Ob(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WS(n,e,t,r,s){return Tb(n.pendingWriteTree_,e,t,r,s),s?ec(n,new fo(NS(),e,t)):[]}function ro(n,e,t=!1){const r=Ib(n.pendingWriteTree_,e);if(Sb(n.pendingWriteTree_,e)){let a=new it(null);return r.snap!=null?a=a.set(qe(),!0):on(r.children,u=>{a=a.set(new Qe(u),!0)}),ec(n,new _d(r.path,a,t))}else return[]}function sf(n,e,t){return ec(n,new fo(l_(),e,t))}function oL(n,e,t){const r=it.fromObject(t);return ec(n,new ju(l_(),e,r))}function aL(n,e){return ec(n,new Uu(l_(),e))}function lL(n,e,t){const r=g_(n,t);if(r){const s=__(r),a=s.path,u=s.queryId,d=Tn(a,e),f=new Uu(u_(u),d);return y_(n,a,f)}else return[]}function Qm(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||zS(u,e))){const f=nL(u,e,t,r);Zb(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const v=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,P)=>ys(P));if(v&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const P=hL(T);for(let x=0;x<P.length;++x){const W=P[x],U=W.query,J=HS(n,W);n.listenProvider_.startListening(wu(U),Id(n,U),J.hashFn,J.onComplete)}}}!E&&m.length>0&&!r&&(v?n.listenProvider_.stopListening(wu(e),null):m.forEach(T=>{const P=n.queryToTagMap.get(of(T));n.listenProvider_.stopListening(wu(T),P)}))}dL(n,m)}return d}function uL(n,e,t,r){const s=g_(n,r);if(s!=null){const a=__(s),u=a.path,d=a.queryId,f=Tn(u,e),m=new fo(u_(d),f,t);return y_(n,u,m)}else return[]}function cL(n,e,t,r){const s=g_(n,r);if(s){const a=__(s),u=a.path,d=a.queryId,f=Tn(u,e),m=it.fromObject(t),v=new ju(u_(d),f,m);return y_(n,u,v)}else return[]}function oT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,P)=>{const x=Tn(T,s);a=a||Aa(P,x),u=u||ys(P)});let d=n.syncPointTree_.get(s);d?(u=u||ys(d),a=a||Aa(d,qe())):(d=new Yb,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Te.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((P,x)=>{const W=Aa(x,qe());W&&(a=a.updateImmediateChild(P,W))}));const m=zS(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=of(e);ne(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const P=fL();n.queryToTagMap.set(T,P),n.tagToQueryMap.set(P,T)}const v=c_(n.pendingWriteTree_,s);let E=tL(d,e,t,v,a,f);if(!m&&!u&&!r){const T=BS(d,e);E=E.concat(pL(n,e,T))}return E}function m_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Tn(u,e),m=Aa(d,f);if(m)return m});return bS(s,e,a,t,!0)}function ec(n,e){return $S(e,n.syncPointTree_,null,c_(n.pendingWriteTree_,qe()))}function $S(n,e,t,r){if(De(n.path))return qS(n,e,t,r);{const s=e.get(qe());t==null&&s!=null&&(t=Aa(s,qe()));let a=[];const u=Ne(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,v=LS(r,u);a=a.concat($S(d,f,m,v))}return s&&(a=a.concat(p_(s,n,r,t))),a}}function qS(n,e,t,r){const s=e.get(qe());t==null&&s!=null&&(t=Aa(s,qe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=LS(r,u),v=n.operationForChild(u);v&&(a=a.concat(qS(v,d,f,m)))}),s&&(a=a.concat(p_(s,n,r,t))),a}function HS(n,e){const t=e.query,r=Id(n,t);return{hashFn:()=>(Hb(e)||Te.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?lL(n,t._path,r):aL(n,t._path);{const a=lO(s,t);return Qm(n,t,null,a)}}}}function Id(n,e){const t=of(e);return n.queryToTagMap.get(t)}function of(n){return n._path.toString()+"$"+n._queryIdentifier}function g_(n,e){return n.tagToQueryMap.get(e)}function __(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Qe(n.substr(0,e))}}function y_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=c_(n.pendingWriteTree_,e);return p_(r,t,s,null)}function hL(n){return n.fold((e,t,r)=>{if(t&&ys(t))return[rf(t)];{let s=[];return t&&(s=jS(t)),on(r,(a,u)=>{s=s.concat(u)}),s}})}function wu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(iL())(n._repo,n._path):n}function dL(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=of(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function fL(){return sL++}function pL(n,e,t){const r=e._path,s=Id(n,e),a=HS(n,t),u=n.listenProvider_.startListening(wu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ne(!ys(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,v,E)=>{if(!De(m)&&v&&ys(v))return[rf(v).query];{let T=[];return v&&(T=T.concat(jS(v).map(P=>P.query))),on(E,(P,x)=>{T=T.concat(x)}),T}});for(let m=0;m<f.length;++m){const v=f[m];n.listenProvider_.stopListening(wu(v),Id(n,v))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new v_(t)}node(){return this.node_}}class E_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new E_(this.syncTree_,t)}node(){return m_(this.syncTree_,this.path_)}}const mL=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},aT=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return gL(n[".sv"],e,t);if(typeof n[".sv"]=="object")return _L(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},gL=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},_L=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},yL=function(n,e,t,r){return w_(e,new E_(t,n),r)},GS=function(n,e,t){return w_(n,new v_(e),t)};function w_(n,e,t){const r=n.getPriority().val(),s=aT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=aT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new jt(d,It(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new jt(s))),u.forEachChild(ht,(d,f)=>{const m=w_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function I_(n,e){let t=e instanceof Qe?e:new Qe(e),r=n,s=Ne(t);for(;s!==null;){const a=ka(r.node.children,s)||{children:{},childCount:0};r=new T_(s,r,a),t=Xe(t),s=Ne(t)}return r}function nl(n){return n.node.value}function KS(n,e){n.node.value=e,Ym(n)}function QS(n){return n.node.childCount>0}function vL(n){return nl(n)===void 0&&!QS(n)}function af(n,e){on(n.node.children,(t,r)=>{e(new T_(t,n,r))})}function YS(n,e,t,r){t&&e(n),af(n,s=>{YS(s,e,!0)})}function EL(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tc(n){return new Qe(n.parent===null?n.name:tc(n.parent)+"/"+n.name)}function Ym(n){n.parent!==null&&wL(n.parent,n.name,n)}function wL(n,e,t){const r=vL(t),s=Ur(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Ym(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ym(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=/[\[\].#$\/\u0000-\u001F\u007F]/,IL=/[\[\].#$\u0000-\u001F\u007F]/,sm=10*1024*1024,S_=function(n){return typeof n=="string"&&n.length!==0&&!TL.test(n)},XS=function(n){return typeof n=="string"&&n.length!==0&&!IL.test(n)},SL=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),XS(n)},JS=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ef(n)||n&&typeof n=="object"&&Ur(n,".sv")},Xm=function(n,e,t,r){lf(Pa(n,"value"),e,t)},lf=function(n,e,t){const r=t instanceof Qe?new zO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+eo(r));if(typeof e=="function")throw new Error(n+"contains a function "+eo(r)+" with contents = "+e.toString());if(ef(e))throw new Error(n+"contains "+e.toString()+" "+eo(r));if(typeof e=="string"&&e.length>sm/3&&kd(e)>sm)throw new Error(n+"contains a string greater than "+sm+" utf8 bytes "+eo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(on(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!S_(u)))throw new Error(n+" contains an invalid key ("+u+") "+eo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WO(r,u),lf(n,d,r),$O(r)}),s&&a)throw new Error(n+' contains ".value" child '+eo(r)+" in addition to actual children.")}},CL=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Lu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!S_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(BO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&Hn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},RL=function(n,e,t,r){const s=Pa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];on(e,(u,d)=>{const f=new Qe(u);if(lf(s,d,vt(t,f)),n_(f)===".priority"&&!JS(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),CL(s,a)},AL=function(n,e,t){if(ef(e))throw new Error(Pa(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!JS(e))throw new Error(Pa(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ZS=function(n,e,t,r){if(!XS(t))throw new Error(Pa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kL=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ZS(n,e,t)},cu=function(n,e){if(Ne(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},PL=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!S_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!SL(t))throw new Error(Pa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function C_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!r_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function eC(n,e,t){C_(n,t),tC(n,r=>r_(r,e))}function wi(n,e,t){C_(n,t),tC(n,r=>Hn(r,e)||Hn(e,r))}function tC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(xL(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function xL(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();_u&&Kt("event: "+t.toString()),el(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL="repo_interrupt",OL=25;class bL{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gd(),this.transactionQueueTree_=new T_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LL(n,e,t){if(n.stats_=e_(n.repoInfo_),n.forceRestClient_||dO())n.server_=new md(n.repoInfo_,(r,s,a,u)=>{lT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>uT(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new di(n.repoInfo_,e,(r,s,a,u)=>{lT(n,r,s,a,u)},r=>{uT(n,r)},r=>{VL(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=_O(n.repoInfo_,()=>new gb(n.stats_,n.server_)),n.infoData_=new hb,n.infoSyncTree_=new sT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=sf(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),A_(n,"connected",!1),n.serverSyncTree_=new sT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);wi(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function ML(n){const t=n.infoData_.getNode(new Qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function R_(n){return mL({timestamp:ML(n)})}function lT(n,e,t,r,s){n.dataUpdateCount++;const a=new Qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=zh(t,m=>It(m));u=cL(n.serverSyncTree_,a,f,s)}else{const f=It(t);u=uL(n.serverSyncTree_,a,f,s)}else if(r){const f=zh(t,m=>It(m));u=oL(n.serverSyncTree_,a,f)}else{const f=It(t);u=sf(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=uf(n,a)),wi(n.eventQueue_,d,u)}function uT(n,e){A_(n,"connected",e),e===!1&&UL(n)}function VL(n,e){on(e,(t,r)=>{A_(n,t,r)})}function A_(n,e,t){const r=new Qe("/.info/"+e),s=It(t);n.infoData_.updateSnapshot(r,s);const a=sf(n.infoSyncTree_,r,s);wi(n.eventQueue_,r,a)}function nC(n){return n.nextWriteId_++}function FL(n,e,t,r,s){k_(n,"set",{path:e.toString(),value:t,priority:r});const a=R_(n),u=It(t,r),d=m_(n.serverSyncTree_,e),f=GS(u,d,a),m=nC(n),v=WS(n.serverSyncTree_,e,f,m,!0);C_(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,P)=>{const x=T==="ok";x||Sn("set at "+e+" failed: "+T);const W=ro(n.serverSyncTree_,m,!x);wi(n.eventQueue_,e,W),za(n,s,T,P)});const E=aC(n,e);uf(n,E),wi(n.eventQueue_,E,[])}function UL(n){k_(n,"onDisconnectEvents");const e=R_(n),t=gd();Wm(n.onDisconnect_,qe(),(s,a)=>{const u=yL(s,a,n.serverSyncTree_,e);tl(t,s,u)});let r=[];Wm(t,qe(),(s,a)=>{r=r.concat(sf(n.serverSyncTree_,s,a));const u=aC(n,s);uf(n,u)}),n.onDisconnect_=gd(),wi(n.eventQueue_,qe(),r)}function jL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&zm(n.onDisconnect_,e),za(n,t,r,s)})}function cT(n,e,t,r){const s=It(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&tl(n.onDisconnect_,e,s),za(n,r,a,u)})}function BL(n,e,t,r,s){const a=It(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&tl(n.onDisconnect_,e,a),za(n,s,u,d)})}function zL(n,e,t,r){if(Bh(t)){Kt("onDisconnect().update() called with empty data.  Don't do anything."),za(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&on(t,(u,d)=>{const f=It(d);tl(n.onDisconnect_,vt(e,u),f)}),za(n,r,s,a)})}function WL(n,e,t){let r;Ne(e._path)===".info"?r=oT(n.infoSyncTree_,e,t):r=oT(n.serverSyncTree_,e,t),eC(n.eventQueue_,e._path,r)}function $L(n,e,t){let r;Ne(e._path)===".info"?r=Qm(n.infoSyncTree_,e,t):r=Qm(n.serverSyncTree_,e,t),eC(n.eventQueue_,e._path,r)}function qL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(DL)}function k_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Kt(t,...e)}function za(n,e,t,r){e&&el(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function rC(n,e,t){return m_(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function P_(n,e=n.transactionQueueTree_){if(e||cf(n,e),nl(e)){const t=sC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&HL(n,tc(e),t)}else QS(e)&&af(e,t=>{P_(n,t)})}function HL(n,e,t){const r=t.map(m=>m.currentWriteId),s=rC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const v=t[m];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=Tn(e,v.path);a=a.updateChild(E,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{k_(n,"transaction put response",{path:f.toString(),status:m});let v=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(ro(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();cf(n,I_(n.transactionQueueTree_,e)),P_(n,n.transactionQueueTree_),wi(n.eventQueue_,e,v);for(let T=0;T<E.length;T++)el(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Sn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}uf(n,e)}},u)}function uf(n,e){const t=iC(n,e),r=tc(t),s=sC(n,t);return GL(n,s,r),r}function GL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=Tn(t,f.path);let v=!1,E;if(ne(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,E=f.abortReason,s=s.concat(ro(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=OL)v=!0,E="maxretry",s=s.concat(ro(n.serverSyncTree_,f.currentWriteId,!0));else{const T=rC(n,f.path,u);f.currentInputSnapshot=T;const P=e[d].update(T.val());if(P!==void 0){lf("transaction failed: Data returned ",P,f.path);let x=It(P);typeof P=="object"&&P!=null&&Ur(P,".priority")||(x=x.updatePriority(T.getPriority()));const U=f.currentWriteId,J=R_(n),H=GS(x,T,J);f.currentOutputSnapshotRaw=x,f.currentOutputSnapshotResolved=H,f.currentWriteId=nC(n),u.splice(u.indexOf(U),1),s=s.concat(WS(n.serverSyncTree_,f.path,H,f.currentWriteId,f.applyLocally)),s=s.concat(ro(n.serverSyncTree_,U,!0))}else v=!0,E="nodata",s=s.concat(ro(n.serverSyncTree_,f.currentWriteId,!0))}wi(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}cf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)el(r[d]);P_(n,n.transactionQueueTree_)}function iC(n,e){let t,r=n.transactionQueueTree_;for(t=Ne(e);t!==null&&nl(r)===void 0;)r=I_(r,t),e=Xe(e),t=Ne(e);return r}function sC(n,e){const t=[];return oC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function oC(n,e,t){const r=nl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);af(e,s=>{oC(n,s,t)})}function cf(n,e){const t=nl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,KS(e,t.length>0?t:void 0)}af(e,r=>{cf(n,r)})}function aC(n,e){const t=tc(iC(n,e)),r=I_(n.transactionQueueTree_,e);return EL(r,s=>{om(n,s)}),om(n,r),YS(r,s=>{om(n,s)}),t}function om(n,e){const t=nl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ne(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ne(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(ro(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?KS(e,void 0):t.length=a+1,wi(n.eventQueue_,tc(e),s);for(let u=0;u<r.length;u++)el(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function QL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const hT=function(n,e){const t=YL(n),r=t.namespace;t.domain==="firebase.com"&&Ei(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Ei("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rO();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Qe(t.pathString)}},YL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(v,E)),v<E&&(s=KL(n.substring(v,E)));const T=QL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),t=e.substring(x+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Wt(this.snapshot.exportVal())}}class JL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class e2{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new si;return jL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){cu("OnDisconnect.remove",this._path);const e=new si;return cT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){cu("OnDisconnect.set",this._path),Xm("OnDisconnect.set",e,this._path);const t=new si;return cT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){cu("OnDisconnect.setWithPriority",this._path),Xm("OnDisconnect.setWithPriority",e,this._path),AL("OnDisconnect.setWithPriority",t);const r=new si;return BL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){cu("OnDisconnect.update",this._path),RL("OnDisconnect.update",e,this._path);const t=new si;return zL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return De(this._path)?null:n_(this._path)}get ref(){return new Is(this._repo,this._path)}get _queryIdentifier(){const e=Kw(this._queryParams),t=Jg(e);return t==="{}"?"default":t}get _queryObject(){return Kw(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof N_))return!1;const t=this._repo===e._repo,r=r_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+jO(this._path)}}class Is extends N_{constructor(e,t){super(e,t,new a_,!1)}get parent(){const e=TS(this._path);return e===null?null:new Is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Qe(e),r=Jm(this.ref,e);return new Sd(this._node.getChild(t),r,ht)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Sd(s,Jm(this.ref,r),ht)))}hasChild(e){const t=new Qe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dT(n,e){return n=Ge(n),n._checkNotDeleted("ref"),e!==void 0?Jm(n._root,e):n._root}function Jm(n,e){return n=Ge(n),Ne(n._path)===null?kL("child","path",e):ZS("child","path",e),new Is(n._repo,vt(n._path,e))}function t2(n){return n=Ge(n),new e2(n._repo,n._path)}function fT(n,e){n=Ge(n),cu("set",n._path),Xm("set",e,n._path);const t=new si;return FL(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class x_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new XL("value",this,new Sd(e.snapshotNode,new Is(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new JL(this,e,t):null}matches(e){return e instanceof x_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function n2(n,e,t,r,s){const a=new ZL(t,void 0),u=new x_(a);return WL(n._repo,n,u),()=>$L(n._repo,n,u)}function r2(n,e,t,r){return n2(n,"value",e)}Xb(Is);rL(Is);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2="FIREBASE_DATABASE_EMULATOR_HOST",Zm={};let s2=!1;function o2(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Vr(a);n.repoInfo_=new fS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function a2(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Ei("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=hT(a,s),d=u.repoInfo,f;typeof process<"u"&&Nw&&(f=Nw[i2]),f?(a=`http://${f}?ns=${d.namespace}`,u=hT(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new pO(n.name,n.options,e);PL("Invalid Firebase Database URL",u),De(u.path)||Ei("Database URL must point to the root of a Firebase Database (not including a child path).");const v=u2(d,n,m,new fO(n,t));return new c2(v,n)}function l2(n,e){const t=Zm[e];(!t||t[n.key]!==n)&&Ei(`Database ${e}(${n.repoInfo_}) has already been deleted.`),qL(n),delete t[n.key]}function u2(n,e,t,r){let s=Zm[e.name];s||(s={},Zm[e.name]=s);let a=s[n.toURLString()];return a&&Ei("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new bL(n,s2,t,r),s[n.toURLString()]=a,a}class c2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Is(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(l2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ei("Cannot call "+e+" on a deleted database.")}}function h2(n=Nd(),e){const t=zu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=rg("database");r&&d2(t,...r)}return t}function d2(n,e,t,r={}){n=Ge(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&pi(r,a.repoInfo_.emulatorOptions))return;Ei("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Ei('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Fh(Fh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:ig(r.mockUserToken,n.app.options.projectId);u=new Fh(d)}Vr(e)&&(Rd(e),Ad("Database",!0)),o2(a,s,r,u)}/**
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
 */function f2(n){XD(vs),us(new mi("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return a2(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Gn(xw,Dw,n),Gn(xw,Dw,"esm2017")}di.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};di.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};f2();var p2="firebase",m2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(p2,m2,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="firebasestorage.googleapis.com",uC="storageBucket",g2=120*1e3,_2=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Fr{constructor(e,t,r=0){super(am(e),`Firebase Storage: ${t} (${am(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return am(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function am(n){return"storage/"+n}function D_(){const n="An unknown error occurred, please check the error payload for server response.";return new mt(pt.UNKNOWN,n)}function y2(n){return new mt(pt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function v2(n){return new mt(pt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function E2(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new mt(pt.UNAUTHENTICATED,n)}function w2(){return new mt(pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function T2(n){return new mt(pt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function I2(){return new mt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S2(){return new mt(pt.CANCELED,"User canceled the upload/download.")}function C2(n){return new mt(pt.INVALID_URL,"Invalid URL '"+n+"'.")}function R2(n){return new mt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function A2(){return new mt(pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uC+"' property when initializing the app?")}function k2(){return new mt(pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function P2(){return new mt(pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function N2(n){return new mt(pt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function eg(n){return new mt(pt.INVALID_ARGUMENT,n)}function cC(){return new mt(pt.APP_DELETED,"The Firebase app was deleted.")}function x2(n){return new mt(pt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tu(n,e){return new mt(pt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function nu(n){throw new mt(pt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=bn.makeFromUrl(e,t)}catch{return new bn(e,"")}if(r.path==="")return r;throw R2(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(G){G.path_=decodeURIComponent(G.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",P=new RegExp(`^https?://${E}/${v}/b/${s}/o${T}`,"i"),x={bucket:1,path:3},W=t===lC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",J=new RegExp(`^https?://${W}/${s}/${U}`,"i"),re=[{regex:d,indices:f,postModify:a},{regex:P,indices:x,postModify:m},{regex:J,indices:{bucket:1,path:2},postModify:m}];for(let G=0;G<re.length;G++){const Ae=re[G],me=Ae.regex.exec(e);if(me){const D=me[Ae.indices.bucket];let S=me[Ae.indices.path];S||(S=""),r=new bn(D,S),Ae.postModify(r);break}}if(r==null)throw C2(e);return r}}class D2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function v(...U){m||(m=!0,e.apply(null,U))}function E(U){s=setTimeout(()=>{s=null,n(P,f())},U)}function T(){a&&clearTimeout(a)}function P(U,...J){if(m){T();return}if(U){T(),v.call(null,U,...J);return}if(f()||u){T(),v.call(null,U,...J);return}r<64&&(r*=2);let re;d===1?(d=2,re=0):re=(r+Math.random())*1e3,E(re)}let x=!1;function W(U){x||(x=!0,T(),!m&&(s!==null?(U||(d=2),clearTimeout(s),E(0)):U||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,W(!0)},t),W}function b2(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(n){return n!==void 0}function M2(n){return typeof n=="object"&&!Array.isArray(n)}function O_(n){return typeof n=="string"||n instanceof String}function pT(n){return b_()&&n instanceof Blob}function b_(){return typeof Blob<"u"}function mT(n,e,t,r){if(r<e)throw eg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw eg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function hC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var oo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(oo||(oo={}));/**
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
 */function V2(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,t,r,s,a,u,d,f,m,v,E,T=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,W)=>{this.resolve_=x,this.reject_=W,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===oo.NO_ERROR,f=a.getStatus();if(!d||V2(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===oo.ABORT;r(!1,new Rh(!1,null,v));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Rh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());L2(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=D_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?cC():S2();u(f)}else{const f=I2();u(f)}};this.canceled_?t(!1,new Rh(!1,null,!0)):this.backoffId_=O2(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&b2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function U2(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function j2(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function B2(n,e){e&&(n["X-Firebase-GMPID"]=e)}function z2(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function W2(n,e,t,r,s,a,u=!0,d=!1){const f=hC(n.urlParams),m=n.url+f,v=Object.assign({},n.headers);return B2(v,e),U2(v,t),j2(v,a),z2(v,r),new F2(m,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function q2(...n){const e=$2();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(b_())return new Blob(n);throw new mt(pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function H2(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function G2(n){if(typeof atob>"u")throw N2("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lm{constructor(e,t){this.data=e,this.contentType=t||null}}function K2(n,e){switch(n){case kr.RAW:return new lm(dC(e));case kr.BASE64:case kr.BASE64URL:return new lm(fC(n,e));case kr.DATA_URL:return new lm(Y2(e),X2(e))}throw D_()}function dC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Q2(n){let e;try{e=decodeURIComponent(n)}catch{throw Tu(kr.DATA_URL,"Malformed data URL.")}return dC(e)}function fC(n,e){switch(n){case kr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Tu(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Tu(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=G2(e)}catch(s){throw s.message.includes("polyfill")?s:Tu(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class pC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Tu(kr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=J2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Y2(n){const e=new pC(n);return e.base64?fC(kr.BASE64,e.rest):Q2(e.rest)}function X2(n){return new pC(n).contentType}function J2(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){let r=0,s="";pT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(pT(this.data_)){const r=this.data_,s=H2(r,e,t);return s===null?null:new Zi(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Zi(r,!0)}}static getBlob(...e){if(b_()){const t=e.map(r=>r instanceof Zi?r.data_:r);return new Zi(q2.apply(null,t))}else{const t=e.map(u=>O_(u)?K2(kr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new Zi(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(n){let e;try{e=JSON.parse(n)}catch{return null}return M2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function eM(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function gC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(n,e){return e}class hn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||tM}}let Ah=null;function nM(n){return!O_(n)||n.length<2?n:gC(n)}function _C(){if(Ah)return Ah;const n=[];n.push(new hn("bucket")),n.push(new hn("generation")),n.push(new hn("metageneration")),n.push(new hn("name","fullPath",!0));function e(a,u){return nM(u)}const t=new hn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new hn("size");return s.xform=r,n.push(s),n.push(new hn("timeCreated")),n.push(new hn("updated")),n.push(new hn("md5Hash",null,!0)),n.push(new hn("cacheControl",null,!0)),n.push(new hn("contentDisposition",null,!0)),n.push(new hn("contentEncoding",null,!0)),n.push(new hn("contentLanguage",null,!0)),n.push(new hn("contentType",null,!0)),n.push(new hn("metadata","customMetadata",!0)),Ah=n,Ah}function rM(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new bn(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function iM(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return rM(r,n),r}function yC(n,e,t){const r=mC(e);return r===null?null:iM(n,r,t)}function sM(n,e,t,r){const s=mC(e);if(s===null||!O_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const v=n.bucket,E=n.fullPath,T="/b/"+u(v)+"/o/"+u(E),P=L_(T,t,r),x=hC({alt:"media",token:m});return P+x})[0]}function oM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class vC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(n){if(!n)throw D_()}function aM(n,e){function t(r,s){const a=yC(n,s,e);return EC(a!==null),a}return t}function lM(n,e){function t(r,s){const a=yC(n,s,e);return EC(a!==null),sM(a,s,n.host,n._protocol)}return t}function wC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=w2():s=E2():t.getStatus()===402?s=v2(n.bucket):t.getStatus()===403?s=T2(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function uM(n){const e=wC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=y2(n.path)),a.serverResponse=s.serverResponse,a}return t}function cM(n,e,t){const r=e.fullServerUrl(),s=L_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new vC(s,a,lM(n,t),u);return d.errorHandler=uM(e),d}function hM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function dM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=hM(null,e)),r}function fM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let re="";for(let G=0;G<2;G++)re=re+Math.random().toString().slice(2);return re}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=dM(e,r,s),v=oM(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",P=Zi.getBlob(E,r,T);if(P===null)throw k2();const x={name:m.fullPath},W=L_(a,n.host,n._protocol),U="POST",J=n.maxUploadRetryTime,H=new vC(W,U,aM(n,t),J);return H.urlParams=x,H.headers=u,H.body=P.uploadData(),H.errorHandler=wC(e),H}class pM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw nu("cannot .send() more than once");if(Vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw nu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw nu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw nu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw nu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mM extends pM{initXhr(){this.xhr_.responseType="text"}}function TC(){return new mM}/**
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
 */class go{constructor(e,t){this._service=e,t instanceof bn?this._location=t:this._location=bn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new go(e,t)}get root(){const e=new bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gC(this._location.path)}get storage(){return this._service}get parent(){const e=Z2(this._location.path);if(e===null)return null;const t=new bn(this._location.bucket,e);return new go(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw x2(e)}}function gM(n,e,t){n._throwIfRoot("uploadBytes");const r=fM(n.storage,n._location,_C(),new Zi(e,!0),t);return n.storage.makeRequestWithTokens(r,TC).then(s=>({metadata:s,ref:n}))}function _M(n){n._throwIfRoot("getDownloadURL");const e=cM(n.storage,n._location,_C());return n.storage.makeRequestWithTokens(e,TC).then(t=>{if(t===null)throw P2();return t})}function yM(n,e){const t=eM(n._location.path,e),r=new bn(n._location.bucket,t);return new go(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(n){return/^[A-Za-z]+:\/\//.test(n)}function EM(n,e){return new go(n,e)}function IC(n,e){if(n instanceof M_){const t=n;if(t._bucket==null)throw A2();const r=new go(t,t._bucket);return e!=null?IC(r,e):r}else return e!==void 0?yM(n,e):n}function wM(n,e){if(e&&vM(e)){if(n instanceof M_)return EM(n,e);throw eg("To use ref(service, url), the first argument must be a Storage instance.")}else return IC(n,e)}function gT(n,e){const t=e==null?void 0:e[uC];return t==null?null:bn.makeFromBucketSpec(t,n)}function TM(n,e,t,r={}){n.host=`${e}:${t}`;const s=Vr(e);s&&(Rd(`https://${n.host}/b`),Ad("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:ig(a,n.app.options.projectId))}class M_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=lC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=g2,this._maxUploadRetryTime=_2,this._requests=new Set,s!=null?this._bucket=bn.makeFromBucketSpec(s,this._host):this._bucket=gT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bn.makeFromBucketSpec(this._url,e):this._bucket=gT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new go(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new D2(cC());{const u=W2(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const _T="@firebase/storage",yT="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="storage";function IM(n,e,t){return n=Ge(n),gM(n,e,t)}function SM(n){return n=Ge(n),_M(n)}function CM(n,e){return n=Ge(n),wM(n,e)}function RM(n=Nd(),e){n=Ge(n);const r=zu(n,SC).getImmediate({identifier:e}),s=rg("storage");return s&&AM(r,...s),r}function AM(n,e,t,r={}){TM(n,e,t,r)}function kM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new M_(t,r,s,e,vs)}function PM(){us(new mi(SC,kM,"PUBLIC").setMultipleInstances(!0)),Gn(_T,yT,""),Gn(_T,yT,"esm2017")}PM();const NM={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},xM="",hf=MT(NM),Wa=L1(hf);wP(Wa,cI).catch(()=>{});const fi=DD(hf),vT=h2(hf),DM=RM(hf),ao=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối"}],ui=n=>(ao.find(e=>e.id===n)||{name:n}).name,ru={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},um=["waiting_acceptance","in_progress","waiting_review","completed"],OM={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function ET(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function CC(n,e){return e.trim()?ET(n).includes(ET(e)):!0}function ci(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function bM(){const[n,e]=de.useState(""),[t,r]=de.useState(""),[s,a]=de.useState(""),[u,d]=de.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await EP(Wa,n.trim(),t)}catch(v){a(v.code==="auth/invalid-credential"?"Email hoặc mật khẩu chưa đúng.":`Đăng nhập thất bại: ${v.message}`)}finally{d(!1)}}return R.jsx("div",{className:"login-page",children:R.jsxs("div",{className:"login-card",children:[R.jsx("div",{className:"login-logo",children:"E"}),R.jsx("h1",{children:"Enteesee"}),R.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),R.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&R.jsx("div",{className:"err",children:s}),R.jsxs("form",{onSubmit:f,children:[R.jsx("div",{style:{marginBottom:10},children:R.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),R.jsx("div",{style:{marginBottom:12},children:R.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),R.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),R.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}function LM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function Js(n,{method:e="GET",body:t,token:r}={}){const s=r||(Wa.currentUser?await Wa.currentUser.getIdToken():"");let a;try{a=await fetch(`${xM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}const dr={sendMessage:async({content:n,threadId:e=null,attachments:t=[]},r)=>{const s=LM(r),a=(n||"").trim();if(!a)throw new Error("Nội dung trống.");return{id:(await KD(Va(fi,"messages"),{roomId:"general",senderId:s.id,senderName:s.name,senderType:"human",content:a,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[s.id],pinned:!1})).id}},pinMessage:(n,e)=>Fm(ad(fi,"messages",n),{pinned:!!e}),markSeen:(n,e)=>e?Fm(ad(fi,"messages",n),{seenBy:YD(e)}):Promise.resolve(),listTasks:(n="")=>Js(`/api/tasks${n}`),createTask:n=>Js("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>Js(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>Js("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>Js("/api/jobs"),listUsers:()=>Js("/api/users"),setTelegramChatId:(n,e)=>Js(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})};function wT(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?R.jsx("b",{className:"mention",children:t},r):R.jsx("span",{children:t},r))}function MM(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function VM({person:n,onlineByPerson:e}){const[t,r]=de.useState([]),[s,a]=de.useState([]),[u,d]=de.useState(""),[f,m]=de.useState(""),[v,E]=de.useState(""),[T,P]=de.useState(!1),[x,W]=de.useState(!1),[U,J]=de.useState(null),[H,re]=de.useState(null),[G,Ae]=de.useState(""),[me,D]=de.useState(""),[S,k]=de.useState(!1),[O,L]=de.useState(!1),F=de.useRef(null),A=de.useRef(null);de.useEffect(()=>hd(Ou(Va(fi,"messages"),ud("createdAt","asc"),cd(200)),M=>r(M.docs.map(te=>({id:te.id,...te.data()}))),()=>Ae("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),de.useEffect(()=>hd(Ou(Va(fi,"aiEvents"),ud("createdAt","desc"),cd(200)),M=>a(M.docs.map(te=>({id:te.id,...te.data()})))),[]);const ot=de.useMemo(()=>{const M=new Map;for(const te of s)te.messageId&&M.set(te.messageId,te);return M},[s]),dt=de.useMemo(()=>{const M=t.filter(Se=>!Se.threadId),te=v.trim();return M.filter(Se=>CC(`${Se.content||""} ${Se.senderName||""}`,te))},[t,v]),kt=M=>t.filter(te=>te.threadId===M),ze=de.useRef(!0);de.useEffect(()=>{const M=A.current;!M||dt.length===0||(M.scrollTo({top:M.scrollHeight,behavior:ze.current?"auto":"smooth"}),ze.current=!1)},[dt]),de.useEffect(()=>{t.slice(-5).forEach(te=>{te.id&&!(te.seenBy||[]).includes(n.id)&&dr.markSeen(te.id,n.id).catch(()=>{})})},[t,n.id]);function se(M){d(M);const te=M.match(/@([A-Za-zÀ-ỹ]*)$/);te?(m(te[1]),W(!0)):W(!1)}function ge(M){d(te=>te.replace(/@[A-Za-zÀ-ỹ]*$/,`@${M.name} `)),W(!1)}async function ae(){const M=u.trim();if(!(!M||S)){k(!0),D("");try{await dr.sendMessage({content:M,threadId:U?U.id:null},n),d(""),J(null)}catch(te){D(MM(te))}finally{k(!1)}}}async function V(M){if(M){L(!0),D("");try{const te=`rooms/general/${Date.now()}_${M.name}`,Se=await IM(CM(DM,te),M),ke=await SM(Se.ref);await dr.sendMessage({content:`Đã gửi file: ${M.name}`,attachments:[{name:M.name,size:M.size,type:M.type,url:ke,path:te}]},n)}catch(te){D(/load failed|failed to fetch|networkerror/i.test(String(te.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${te.message}`)}finally{L(!1)}}}return R.jsxs("div",{className:"chat",children:[R.jsxs("div",{className:"presence-row",children:[ao.filter(M=>M.id!=="muse").map(M=>R.jsxs("span",{className:"person-chip",title:M.roleVi,children:[R.jsx("span",{className:"avatar sm",children:M.name.charAt(0)}),M.name,R.jsx("span",{className:e[M.id]?"online-dot":"offline-dot"})]},M.id)),R.jsx("span",{className:"muted",children:"Muse điều phối: @muse_daica_bot"})]}),R.jsxs("div",{className:`search-wrap${T?" open":""}`,children:[R.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>P(M=>!M),children:R.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[R.jsx("circle",{cx:"11",cy:"11",r:"8"}),R.jsx("path",{d:"m21 21-4.3-4.3"})]})}),R.jsx("input",{className:"search",value:v,onChange:M=>E(M.target.value),placeholder:"Tìm tin nhắn…"})]}),G&&R.jsx("div",{className:"err-load",children:G}),R.jsxs("div",{className:"chat-list",ref:A,children:[dt.length===0&&R.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),dt.filter(M=>M.pinned).map(M=>R.jsx(TT,{m:M,person:n,event:ot.get(M.id),onReply:J,threadOpen:H,setThreadOpen:re,threadReplies:kt,pinned:!0},`pin-${M.id}`)),dt.map(M=>R.jsx(TT,{m:M,person:n,event:ot.get(M.id),onReply:J,threadOpen:H,setThreadOpen:re,threadReplies:kt},M.id))]}),U&&R.jsxs("div",{className:"card",children:[R.jsxs("span",{className:"muted",children:["Đang trả lời ",U.senderName,": ",(U.content||"").slice(0,80)]})," ",R.jsx("button",{onClick:()=>J(null),children:"Hủy"})]}),x&&R.jsx("div",{className:"mention-list",children:ao.filter(M=>M.name.toLowerCase().startsWith(f.toLowerCase())).map(M=>R.jsxs("button",{type:"button",onClick:()=>ge(M),children:["@",M.name," — ",M.roleVi]},M.id))}),me&&R.jsx("div",{className:"err",children:me}),R.jsxs("div",{className:"composer",children:[R.jsx("textarea",{value:u,onChange:M=>se(M.target.value),placeholder:"Nhắn tin… gõ @ để tag ai đó",rows:2,onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),ae())}}),R.jsx("button",{type:"button",onClick:()=>F.current&&F.current.click(),disabled:O,title:"Gửi file",children:"File"}),R.jsx("input",{ref:F,type:"file",style:{display:"none"},onChange:M=>{V(M.target.files[0]),M.target.value=""}}),R.jsx("button",{className:"primary",type:"button",onClick:ae,disabled:S||!u.trim(),children:"Gửi"})]}),O&&R.jsx("div",{className:"muted",children:"Đang tải file lên…"}),R.jsx("p",{className:"muted",children:"Tag @tên ai thì người đó nhận được thông báo ngay và Muse của họ trả lời qua API — không cần chờ họ mở app."})]})}function TT({m:n,person:e,event:t,onReply:r,threadOpen:s,setThreadOpen:a,threadReplies:u,pinned:d}){const f=u(n.id),m=n.senderId===e.id,v=t,E=(n.senderName||ui(n.senderId)||"?").charAt(0);return R.jsxs("div",{className:`msg-row ${m?"mine":""}`,children:[!m&&R.jsx("span",{className:`avatar${n.senderType==="ai"?" mine":""}`,children:E}),R.jsxs("div",{className:`msg ${m?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||d?"pinned":""}`,children:[R.jsxs("div",{className:"meta",children:[R.jsx("b",{children:n.senderName||ui(n.senderId)}),n.senderType==="ai"&&R.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||d)&&R.jsx("span",{className:"tag status",children:"Đã ghim"}),R.jsx("span",{children:ci(n.createdAt)}),(n.seenBy||[]).length>0&&R.jsxs("span",{children:["Đã xem: ",(n.seenBy||[]).map(ui).join(", ")]})]}),R.jsx("div",{className:"content",children:wT(n.content)}),n.linkPreview&&R.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&R.jsx("img",{src:n.linkPreview.image,alt:""}),R.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&R.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((T,P)=>R.jsxs("div",{children:[R.jsx("a",{href:T.url,target:"_blank",rel:"noreferrer",children:T.name})," ",R.jsxs("span",{className:"muted",children:["(",Math.round((T.size||0)/1024)," KB)"]})]},P)),v&&R.jsxs("div",{style:{marginTop:6},children:[v.museRepliedAt?R.jsxs("span",{className:"tag ai-replied",children:["Muse đã phản hồi ",ci(v.museRepliedAt)]}):R.jsx("span",{className:"tag wait-ack",children:"Muse đang phản hồi…"}),v.employeeAcknowledgedAt?R.jsxs("span",{className:"tag acked",children:["Nhân viên đã xác nhận ",ci(v.employeeAcknowledgedAt)]}):R.jsx("span",{className:"tag wait-ack",children:"Nhân viên chưa xác nhận"})]}),R.jsxs("div",{className:"row",style:{marginTop:8},children:[R.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),f.length>0&&R.jsxs("button",{type:"button",onClick:()=>a(s===n.id?null:n.id),children:[s===n.id?"Ẩn":"Xem"," ",f.length," trả lời"]}),R.jsx("button",{type:"button",onClick:()=>dr.pinMessage(n.id,!n.pinned).catch(()=>{}),children:n.pinned?"Bỏ ghim":"Ghim"})]}),s===n.id&&f.map(T=>R.jsxs("div",{className:"msg thread-reply",children:[R.jsxs("div",{className:"meta",children:[R.jsx("b",{children:T.senderName||ui(T.senderId)}),R.jsx("span",{children:ci(T.createdAt)})]}),R.jsx("div",{className:"content",children:wT(T.content)})]},T.id))]})]})}function FM({person:n}){const[e,t]=de.useState([]),[r,s]=de.useState("all"),[a,u]=de.useState(""),[d,f]=de.useState(!1),[m,v]=de.useState(""),[E,T]=de.useState(null),[P,x]=de.useState("");async function W(){try{const G=n.role==="manager"?"":`?assignee=${n.id}`,Ae=await dr.listTasks(G);t(Ae.tasks||[])}catch(G){v(G.message)}}de.useEffect(()=>{W();const G=setInterval(W,15e3);return()=>clearInterval(G)},[n.id,n.role]);const U=de.useMemo(()=>e.filter(G=>r!=="all"&&G.status!==r?!1:CC(`${G.title} ${G.description||""} ${(G.assignees||[]).map(ui).join(" ")}`,a)),[e,r,a]);async function J(G,Ae,me){v("");try{await dr.setTaskStatus(G.id,Ae,me),await W()}catch(D){v(D.message)}}const H=n.role==="manager",re=um.reduce((G,Ae)=>({...G,[Ae]:e.filter(me=>me.status===Ae).length}),{});return R.jsxs("div",{children:[R.jsx("div",{className:"row",style:{marginBottom:10},children:um.map(G=>R.jsxs("span",{className:"tag status",children:[ru[G],": ",re[G]||0]},G))}),R.jsx("input",{className:"search",value:a,onChange:G=>u(G.target.value),placeholder:"Tìm công việc…"}),R.jsxs("div",{className:"row",style:{marginBottom:10},children:[R.jsxs("select",{value:r,onChange:G=>s(G.target.value),children:[R.jsx("option",{value:"all",children:"Tất cả trạng thái"}),um.map(G=>R.jsx("option",{value:G,children:ru[G]},G))]}),H&&R.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&R.jsx("div",{className:"err",children:m}),d&&H&&R.jsx(UM,{onDone:()=>{f(!1),W()},onCancel:()=>f(!1)}),U.length===0&&R.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có công việc nào."}),U.map(G=>{const Ae=(G.assignees||[]).includes(n.id);return R.jsxs("div",{className:"card",children:[R.jsx("h3",{children:G.title}),R.jsx("div",{className:"muted",children:G.description||""}),R.jsxs("div",{className:"row",style:{marginTop:6},children:[R.jsx("span",{className:"tag status",children:ru[G.status]}),R.jsxs("span",{className:"tag status",children:["Ưu tiên: ",OM[G.priority]||G.priority]}),R.jsxs("span",{className:"muted",children:["Người nhận: ",(G.assignees||[]).map(ui).join(", ")]}),G.dueAt&&R.jsxs("span",{className:"muted",children:["Hạn: ",ci(G.dueAt)]})]}),G.reviewNote&&R.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",G.reviewNote]}),R.jsxs("div",{className:"row",style:{marginTop:10},children:[G.status==="waiting_acceptance"&&Ae&&R.jsx("button",{className:"primary",onClick:()=>J(G,"in_progress"),children:"Xác nhận nhận việc"}),G.status==="in_progress"&&Ae&&R.jsx("button",{className:"primary",onClick:()=>J(G,"waiting_review"),children:"Trình duyệt"}),G.status==="waiting_review"&&H&&R.jsx("button",{className:"primary",onClick:()=>J(G,"completed"),children:"Duyệt — Hoàn thành"}),G.status==="waiting_review"&&H&&R.jsx("button",{className:"danger",onClick:()=>T(G.id),children:"Yêu cầu sửa"}),G.status==="completed"&&R.jsxs("span",{className:"tag acked",children:["Đã duyệt ",ci(G.approvedAt)]})]}),E===G.id&&R.jsxs("div",{style:{marginTop:8},children:[R.jsx("input",{value:P,onChange:me=>x(me.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),R.jsxs("div",{className:"row",style:{marginTop:6},children:[R.jsx("button",{disabled:!P.trim(),onClick:()=>{J(G,"in_progress",P.trim()),T(null),x("")},children:"Gửi yêu cầu sửa"}),R.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(G.history||[]).length>0&&R.jsxs("details",{style:{marginTop:8},children:[R.jsxs("summary",{className:"muted",children:["Lịch sử (",G.history.length,")"]}),(G.history||[]).map((me,D)=>R.jsxs("div",{className:"muted",children:[ci(me.at)," — ",ui(me.by),": ",me.from?ru[me.from]:"—"," → ",ru[me.to],me.reason?` — ${me.reason}`:""]},D))]})]},G.id)})]})}function UM({onDone:n,onCancel:e}){const[t,r]=de.useState(""),[s,a]=de.useState(""),[u,d]=de.useState([]),[f,m]=de.useState(""),[v,E]=de.useState("normal"),[T,P]=de.useState(""),[x,W]=de.useState(!1);async function U(J){if(J.preventDefault(),!t.trim()||u.length===0){P("Nhập tiêu đề và chọn ít nhất một người nhận.");return}W(!0),P("");try{await dr.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:v}),n()}catch(H){P(H.message)}finally{W(!1)}}return R.jsxs("form",{className:"card",onSubmit:U,children:[R.jsx("input",{value:t,onChange:J=>r(J.target.value),placeholder:"Tiêu đề công việc",required:!0}),R.jsx("div",{style:{height:8}}),R.jsx("textarea",{value:s,onChange:J=>a(J.target.value),placeholder:"Mô tả",rows:3}),R.jsx("div",{style:{height:8}}),R.jsx("div",{className:"muted",children:"Người nhận (chọn một hoặc nhiều):"}),R.jsx("div",{className:"row",children:ao.filter(J=>J.role==="staff").map(J=>R.jsxs("label",{style:{display:"flex",gap:6,alignItems:"center"},children:[R.jsx("input",{type:"checkbox",style:{width:"auto"},checked:u.includes(J.id),onChange:H=>d(H.target.checked?[...u,J.id]:u.filter(re=>re!==J.id))}),J.name]},J.id))}),R.jsx("div",{style:{height:8}}),R.jsxs("div",{className:"row",children:[R.jsx("input",{type:"datetime-local",value:f,onChange:J=>m(J.target.value)}),R.jsxs("select",{value:v,onChange:J=>E(J.target.value),children:[R.jsx("option",{value:"urgent",children:"Khẩn cấp"}),R.jsx("option",{value:"high",children:"Cao"}),R.jsx("option",{value:"normal",children:"Bình thường"}),R.jsx("option",{value:"low",children:"Thấp"})]})]}),T&&R.jsx("div",{className:"err",style:{marginTop:8},children:T}),R.jsxs("div",{className:"row",style:{marginTop:10},children:[R.jsx("button",{className:"primary",type:"submit",disabled:x,children:"Giao việc"}),R.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const jM={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận"};function BM({person:n,onUnread:e}){const[t,r]=de.useState([]),[s,a]=de.useState("");de.useEffect(()=>hd(Ou(Va(fi,"notifications"),Y0("recipientId","==",n.id),ud("createdAt","desc"),cd(100)),d=>{const f=d.docs.map(m=>({id:m.id,...m.data()}));r(f),e(f.filter(m=>!m.read).length)},()=>a("Không tải được thông báo.")),[n.id,e]);async function u(){await Promise.all(t.filter(d=>!d.read).map(d=>Fm(ad(fi,"notifications",d.id),{read:!0}).catch(()=>{})))}return R.jsxs("div",{children:[R.jsxs("div",{className:"row",style:{marginBottom:10},children:[R.jsx("b",{children:"Thông báo của bạn"}),R.jsx("button",{onClick:u,children:"Đánh dấu đã đọc hết"})]}),s&&R.jsx("div",{className:"err",children:s}),t.length===0&&R.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(d=>R.jsxs("div",{className:`card${d.read?"":" unread"}`,style:d.read?{opacity:.65}:{},children:[R.jsxs("div",{className:"row",children:[R.jsx("span",{className:"tag status",children:jM[d.type]||d.type}),R.jsx("span",{className:"muted",children:ci(d.createdAt)})]}),R.jsxs("div",{style:{marginTop:6},children:[ui(d.senderId),": ",d.content]})]},d.id))]})}function zM({person:n,onlineByPerson:e,onSignOut:t}){const[r,s]=de.useState([]),[a,u]=de.useState([]),[d,f]=de.useState(""),[m,v]=de.useState([]),[E,T]=de.useState({}),[P,x]=de.useState("");de.useEffect(()=>hd(Ou(Va(fi,"aiEvents"),ud("createdAt","desc"),cd(20)),H=>s(H.docs.map(re=>({id:re.id,...re.data()})))),[]),de.useEffect(()=>{n.role==="manager"&&(dr.listJobs().then(H=>u(H.jobs||[])).catch(H=>f(H.message)),dr.listUsers().then(H=>v(H.users||[])).catch(()=>{}))},[n.role]);const U=r.filter(H=>(H.mentions||[]).includes(n.id)).find(H=>H.museRepliedAt),J=a.filter(H=>H.deadLetter);return R.jsxs("div",{children:[R.jsxs("div",{className:"card",children:[R.jsx("h3",{children:n.name}),R.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),R.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),R.jsxs("div",{className:"muted",children:["Muse của bạn: ",U?`đã phản hồi lần cuối ${ci(U.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),R.jsx("div",{className:"row",style:{marginTop:10},children:R.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),R.jsxs("div",{className:"card",children:[R.jsx("h3",{children:"Kênh Telegram"}),R.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),R.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),R.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),R.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&R.jsxs("div",{className:"card",children:[R.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),m.length===0&&R.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),m.map(H=>R.jsxs("div",{className:"row",style:{marginBottom:8},children:[R.jsx("span",{style:{minWidth:60},children:H.name}),R.jsx("input",{value:E[H.id]!==void 0?E[H.id]:H.telegramChatId||"",onChange:re=>T({...E,[H.id]:re.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),R.jsx("button",{onClick:async()=>{await dr.setTelegramChatId(H.id,E[H.id]!==void 0?E[H.id]:H.telegramChatId||""),x(`Đã lưu chat_id của ${H.name}.`),dr.listUsers().then(re=>v(re.users||[]))},children:"Lưu"})]},H.id)),P&&R.jsx("div",{className:"muted",children:P})]}),n.role==="manager"&&R.jsxs("div",{className:"card",children:[R.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),d&&R.jsx("div",{className:"err",children:d}),a.length===0&&R.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),J.length>0&&R.jsxs("div",{className:"err",children:["Có ",J.length," job vào dead-letter (gửi thất bại nhiều lần): ",J.map(H=>H.eventId).join(", ")]}),a.slice(0,20).map(H=>R.jsxs("div",{className:"muted",children:[H.eventId," → ",ui(H.recipientId),": ",H.status," (lần thử ",H.attempt,")",H.lastError?` — ${H.lastError}`:""]},H.jobId))]})]})}const IT={chat:R.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:R.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:R.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[R.jsx("path",{d:"M9 11l3 3L22 4"}),R.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:R.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[R.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),R.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:R.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[R.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),R.jsx("circle",{cx:"12",cy:"7",r:"4"})]})},cm=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function WM(){const[n,e]=de.useState(null),[t,r]=de.useState(!1),s=de.useRef(!1),[a,u]=de.useState(null),[d,f]=de.useState("chat"),[m,v]=de.useState({}),[E,T]=de.useState(0);de.useEffect(()=>SP(Wa,async x=>{if(s.current||(s.current=!0,r(!0)),e(x),!x){u(null);return}const W=(x.email||"").toLowerCase();let U=null;try{const J=Ou(Va(fi,"users"),Y0("email","==",W)),H=await GD(J);if(!H.empty){const re=H.docs[0].data();U=ao.find(G=>G.id===re.id)||{id:re.id,name:re.name||W,role:re.role||"staff",roleVi:re.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!U&&W==="teddyssk559@gmail.com"&&(U=ao.find(J=>J.id==="chung")),U||(U={id:x.uid,name:x.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(U)}),[]),de.useEffect(()=>{if(!n||!a)return;const x=dT(vT,`presence/${n.uid}`),W=()=>fT(x,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(H=>console.error("Presence write failed:",H));W(),t2(x).remove().catch(H=>console.error("Presence onDisconnect failed:",H));const U=setInterval(W,6e4),J=r2(dT(vT,"presence"),H=>v(H.val()||{}));return()=>{clearInterval(U),J(),fT(x,null).catch(H=>console.error("Presence clear failed:",H))}},[n,a]);const P=de.useMemo(()=>{const x={};for(const W of Object.values(m||{})){if(!W||!W.personId)continue;const U=typeof W.lastSeen=="number"?W.lastSeen:Date.parse(W.lastSeen||"");x[W.personId]=W.online===!0&&Number.isFinite(U)&&Date.now()-U<12e4}return x},[m]);return t?n?a?R.jsxs("div",{className:"app",children:[R.jsxs("aside",{className:"sidebar",children:[R.jsxs("div",{className:"side-brand",children:[R.jsx("span",{className:"avatar",children:"E"}),R.jsxs("div",{children:[R.jsx("div",{className:"brand-title",children:"Enteesee"}),R.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]})]}),R.jsx("nav",{className:"side-nav",children:cm.map(x=>R.jsxs("button",{className:d===x.id?"active":"",onClick:()=>f(x.id),children:[R.jsxs("span",{className:"nav-icon",children:[IT[x.id],x.id==="notifs"&&E>0&&R.jsx("span",{className:"badge",children:E})]}),R.jsx("span",{children:x.label})]},x.id))}),R.jsx("div",{className:"side-section",children:"Thành viên"}),R.jsxs("ul",{className:"side-people",children:[ao.filter(x=>x.id!=="muse").map(x=>R.jsxs("li",{children:[R.jsx("span",{className:`avatar sm${x.id===a.id?" mine":""}`,children:x.name.charAt(0)}),R.jsx("span",{className:"side-name",children:x.name}),R.jsx("span",{className:"muted",children:x.roleVi}),R.jsx("span",{className:P[x.id]?"online-dot":"offline-dot"})]},x.id)),R.jsxs("li",{children:[R.jsx("span",{className:"avatar sm mine",children:"M"}),R.jsx("span",{className:"side-name",children:"Muse"}),R.jsx("span",{className:"muted",children:"AI điều phối"}),R.jsx("span",{className:"online-dot"})]})]}),R.jsxs("div",{className:"side-user",children:[R.jsx("span",{className:"avatar",children:a.name.charAt(0)}),R.jsxs("div",{children:[R.jsx("div",{className:"side-name",children:a.name}),R.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),R.jsxs("div",{className:"content",children:[R.jsxs("header",{className:"header",children:[R.jsxs("div",{className:"brand",children:[R.jsx("span",{className:"avatar",children:a.name.charAt(0)}),R.jsxs("div",{children:[R.jsx("div",{className:"brand-title",children:"Enteesee"}),R.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]})]}),R.jsx("div",{className:"page-title",children:cm.find(x=>x.id===d).label}),R.jsxs("div",{className:"who",children:[R.jsx("span",{className:P[a.id]?"online-dot":"offline-dot"}),R.jsx("span",{children:a.name}),R.jsxs("span",{className:"muted",children:["· ",a.roleVi]})]})]}),R.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&R.jsx(VM,{person:a,onlineByPerson:P}),d==="tasks"&&R.jsx(FM,{person:a}),d==="notifs"&&R.jsx(BM,{person:a,onUnread:T}),d==="account"&&R.jsx(zM,{person:a,onlineByPerson:P,onSignOut:()=>CP(Wa)})]})]}),R.jsx("nav",{className:"nav",children:cm.map(x=>R.jsxs("button",{className:d===x.id?"active":"",onClick:()=>f(x.id),children:[R.jsxs("span",{className:"nav-icon",children:[IT[x.id],x.id==="notifs"&&E>0&&R.jsx("span",{className:"badge",children:E})]}),R.jsx("span",{children:x.label})]},x.id))})]}):R.jsx("div",{className:"app",children:R.jsx("div",{className:"content",children:R.jsx("div",{className:"main",children:R.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})}):R.jsx(bM,{}):R.jsx("div",{className:"app",children:R.jsxs("div",{className:"loading",children:[R.jsx("span",{className:"avatar",children:"E"}),R.jsx("div",{className:"brand-title",children:"Enteesee"}),R.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})})}UR.createRoot(document.getElementById("root")).render(R.jsx(DR.StrictMode,{children:R.jsx(WM,{})}));
