(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function _T(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vp={exports:{}},ql={},Fp={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function ER(){if(Fv)return xe;Fv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,z={};function B(M,Y,ge){this.props=M,this.context=Y,this.refs=z,this.updater=ge||k}B.prototype.isReactComponent={},B.prototype.setState=function(M,Y){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Y,"setState")},B.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ee(){}ee.prototype=B.prototype;function K(M,Y,ge){this.props=M,this.context=Y,this.refs=z,this.updater=ge||k}var se=K.prototype=new ee;se.constructor=K,L(se,B.prototype),se.isPureReactComponent=!0;var q=Array.isArray,Re=Object.prototype.hasOwnProperty,pe={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(M,Y,ge){var Ae,Ne={},Ve=null,ze=null;if(Y!=null)for(Ae in Y.ref!==void 0&&(ze=Y.ref),Y.key!==void 0&&(Ve=""+Y.key),Y)Re.call(Y,Ae)&&!x.hasOwnProperty(Ae)&&(Ne[Ae]=Y[Ae]);var $e=arguments.length-2;if($e===1)Ne.children=ge;else if(1<$e){for(var Je=Array($e),Lt=0;Lt<$e;Lt++)Je[Lt]=arguments[Lt+2];Ne.children=Je}if(M&&M.defaultProps)for(Ae in $e=M.defaultProps,$e)Ne[Ae]===void 0&&(Ne[Ae]=$e[Ae]);return{$$typeof:n,type:M,key:Ve,ref:ze,props:Ne,_owner:pe.current}}function A(M,Y){return{$$typeof:n,type:M.type,key:Y,ref:M.ref,props:M.props,_owner:M._owner}}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function b(M){var Y={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ge){return Y[ge]})}var V=/\/+/g;function R(M,Y){return typeof M=="object"&&M!==null&&M.key!=null?b(""+M.key):Y.toString(36)}function lt(M,Y,ge,Ae,Ne){var Ve=typeof M;(Ve==="undefined"||Ve==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(Ve){case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case n:case e:ze=!0}}if(ze)return ze=M,Ne=Ne(ze),M=Ae===""?"."+R(ze,0):Ae,q(Ne)?(ge="",M!=null&&(ge=M.replace(V,"$&/")+"/"),lt(Ne,Y,ge,"",function(Lt){return Lt})):Ne!=null&&(D(Ne)&&(Ne=A(Ne,ge+(!Ne.key||ze&&ze.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+M)),Y.push(Ne)),1;if(ze=0,Ae=Ae===""?".":Ae+":",q(M))for(var $e=0;$e<M.length;$e++){Ve=M[$e];var Je=Ae+R(Ve,$e);ze+=lt(Ve,Y,ge,Je,Ne)}else if(Je=T(M),typeof Je=="function")for(M=Je.call(M),$e=0;!(Ve=M.next()).done;)Ve=Ve.value,Je=Ae+R(Ve,$e++),ze+=lt(Ve,Y,ge,Je,Ne);else if(Ve==="object")throw Y=String(M),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return ze}function At(M,Y,ge){if(M==null)return M;var Ae=[],Ne=0;return lt(M,Ae,"","",function(Ve){return Y.call(ge,Ve,Ne++)}),Ae}function bt(M){if(M._status===-1){var Y=M._result;Y=Y(),Y.then(function(ge){(M._status===0||M._status===-1)&&(M._status=1,M._result=ge)},function(ge){(M._status===0||M._status===-1)&&(M._status=2,M._result=ge)}),M._status===-1&&(M._status=0,M._result=Y)}if(M._status===1)return M._result.default;throw M._result}var He={current:null},W={transition:null},ne={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:W,ReactCurrentOwner:pe};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:At,forEach:function(M,Y,ge){At(M,function(){Y.apply(this,arguments)},ge)},count:function(M){var Y=0;return At(M,function(){Y++}),Y},toArray:function(M){return At(M,function(Y){return Y})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},xe.Component=B,xe.Fragment=t,xe.Profiler=s,xe.PureComponent=K,xe.StrictMode=r,xe.Suspense=f,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,xe.act=oe,xe.cloneElement=function(M,Y,ge){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=L({},M.props),Ne=M.key,Ve=M.ref,ze=M._owner;if(Y!=null){if(Y.ref!==void 0&&(Ve=Y.ref,ze=pe.current),Y.key!==void 0&&(Ne=""+Y.key),M.type&&M.type.defaultProps)var $e=M.type.defaultProps;for(Je in Y)Re.call(Y,Je)&&!x.hasOwnProperty(Je)&&(Ae[Je]=Y[Je]===void 0&&$e!==void 0?$e[Je]:Y[Je])}var Je=arguments.length-2;if(Je===1)Ae.children=ge;else if(1<Je){$e=Array(Je);for(var Lt=0;Lt<Je;Lt++)$e[Lt]=arguments[Lt+2];Ae.children=$e}return{$$typeof:n,type:M.type,key:Ne,ref:Ve,props:Ae,_owner:ze}},xe.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},xe.createElement=S,xe.createFactory=function(M){var Y=S.bind(null,M);return Y.type=M,Y},xe.createRef=function(){return{current:null}},xe.forwardRef=function(M){return{$$typeof:d,render:M}},xe.isValidElement=D,xe.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:bt}},xe.memo=function(M,Y){return{$$typeof:m,type:M,compare:Y===void 0?null:Y}},xe.startTransition=function(M){var Y=W.transition;W.transition={};try{M()}finally{W.transition=Y}},xe.unstable_act=oe,xe.useCallback=function(M,Y){return He.current.useCallback(M,Y)},xe.useContext=function(M){return He.current.useContext(M)},xe.useDebugValue=function(){},xe.useDeferredValue=function(M){return He.current.useDeferredValue(M)},xe.useEffect=function(M,Y){return He.current.useEffect(M,Y)},xe.useId=function(){return He.current.useId()},xe.useImperativeHandle=function(M,Y,ge){return He.current.useImperativeHandle(M,Y,ge)},xe.useInsertionEffect=function(M,Y){return He.current.useInsertionEffect(M,Y)},xe.useLayoutEffect=function(M,Y){return He.current.useLayoutEffect(M,Y)},xe.useMemo=function(M,Y){return He.current.useMemo(M,Y)},xe.useReducer=function(M,Y,ge){return He.current.useReducer(M,Y,ge)},xe.useRef=function(M){return He.current.useRef(M)},xe.useState=function(M){return He.current.useState(M)},xe.useSyncExternalStore=function(M,Y,ge){return He.current.useSyncExternalStore(M,Y,ge)},xe.useTransition=function(){return He.current.useTransition()},xe.version="18.3.1",xe}var Uv;function Xm(){return Uv||(Uv=1,Fp.exports=ER()),Fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function wR(){if(jv)return ql;jv=1;var n=Xm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,E={},T=null,k=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(k=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:k,props:E,_owner:s.current}}return ql.Fragment=t,ql.jsx=u,ql.jsxs=u,ql}var Bv;function TR(){return Bv||(Bv=1,Vp.exports=wR()),Vp.exports}var N=TR(),me=Xm();const IR=_T(me);var gh={},Up={exports:{}},vn={},jp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function SR(){return zv||(zv=1,(function(n){function e(W,ne){var oe=W.length;W.push(ne);e:for(;0<oe;){var M=oe-1>>>1,Y=W[M];if(0<s(Y,ne))W[M]=ne,W[oe]=Y,oe=M;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ne=W[0],oe=W.pop();if(oe!==ne){W[0]=oe;e:for(var M=0,Y=W.length,ge=Y>>>1;M<ge;){var Ae=2*(M+1)-1,Ne=W[Ae],Ve=Ae+1,ze=W[Ve];if(0>s(Ne,oe))Ve<Y&&0>s(ze,Ne)?(W[M]=ze,W[Ve]=oe,M=Ve):(W[M]=Ne,W[Ae]=oe,M=Ae);else if(Ve<Y&&0>s(ze,oe))W[M]=ze,W[Ve]=oe,M=Ve;else break e}}return ne}function s(W,ne){var oe=W.sortIndex-ne.sortIndex;return oe!==0?oe:W.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,E=null,T=3,k=!1,L=!1,z=!1,B=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(W){for(var ne=t(m);ne!==null;){if(ne.callback===null)r(m);else if(ne.startTime<=W)r(m),ne.sortIndex=ne.expirationTime,e(f,ne);else break;ne=t(m)}}function q(W){if(z=!1,se(W),!L)if(t(f)!==null)L=!0,bt(Re);else{var ne=t(m);ne!==null&&He(q,ne.startTime-W)}}function Re(W,ne){L=!1,z&&(z=!1,ee(S),S=-1),k=!0;var oe=T;try{for(se(ne),E=t(f);E!==null&&(!(E.expirationTime>ne)||W&&!b());){var M=E.callback;if(typeof M=="function"){E.callback=null,T=E.priorityLevel;var Y=M(E.expirationTime<=ne);ne=n.unstable_now(),typeof Y=="function"?E.callback=Y:E===t(f)&&r(f),se(ne)}else r(f);E=t(f)}if(E!==null)var ge=!0;else{var Ae=t(m);Ae!==null&&He(q,Ae.startTime-ne),ge=!1}return ge}finally{E=null,T=oe,k=!1}}var pe=!1,x=null,S=-1,A=5,D=-1;function b(){return!(n.unstable_now()-D<A)}function V(){if(x!==null){var W=n.unstable_now();D=W;var ne=!0;try{ne=x(!0,W)}finally{ne?R():(pe=!1,x=null)}}else pe=!1}var R;if(typeof K=="function")R=function(){K(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,At=lt.port2;lt.port1.onmessage=V,R=function(){At.postMessage(null)}}else R=function(){B(V,0)};function bt(W){x=W,pe||(pe=!0,R())}function He(W,ne){S=B(function(){W(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){L||k||(L=!0,bt(Re))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(W){switch(T){case 1:case 2:case 3:var ne=3;break;default:ne=T}var oe=T;T=ne;try{return W()}finally{T=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,ne){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var oe=T;T=W;try{return ne()}finally{T=oe}},n.unstable_scheduleCallback=function(W,ne,oe){var M=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?M+oe:M):oe=M,W){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=oe+Y,W={id:v++,callback:ne,priorityLevel:W,startTime:oe,expirationTime:Y,sortIndex:-1},oe>M?(W.sortIndex=oe,e(m,W),t(f)===null&&W===t(m)&&(z?(ee(S),S=-1):z=!0,He(q,oe-M))):(W.sortIndex=Y,e(f,W),L||k||(L=!0,bt(Re))),W},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(W){var ne=T;return function(){var oe=T;T=ne;try{return W.apply(this,arguments)}finally{T=oe}}}})(Bp)),Bp}var $v;function CR(){return $v||($v=1,jp.exports=SR()),jp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function RR(){if(Wv)return vn;Wv=1;var n=Xm(),e=CR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function T(i){return f.call(E,i)?!0:f.call(v,i)?!1:m.test(i)?E[i]=!0:(v[i]=!0,!1)}function k(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function L(i,o,l,h){if(o===null||typeof o>"u"||k(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function z(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new z(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];B[o]=new z(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new z(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new z(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new z(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new z(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new z(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new z(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new z(i,5,!1,i.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function K(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(ee,K);B[o]=new z(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(ee,K);B[o]=new z(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(ee,K);B[o]=new z(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new z(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new z(i,1,!1,i.toLowerCase(),null,!0,!0)});function se(i,o,l,h){var p=B.hasOwnProperty(o)?B[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(L(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),pe=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),b=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),W=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=W&&i[W]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,M;function Y(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var ge=!1;function Ae(i,o){if(!i||ge)return"";ge=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var h=$}Reflect.construct(i,[],o)}else{try{o.call()}catch($){h=$}i.call(o.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,C=_.length-1;1<=w&&0<=C&&p[w]!==_[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==_[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==_[C]){var P=`
`+p[w].replace(" at new "," at ");return i.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",i.displayName)),P}while(1<=w&&0<=C);break}}}finally{ge=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Y(i):""}function Ne(i){switch(i.tag){case 5:return Y(i.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return i=Ae(i.type,!1),i;case 11:return i=Ae(i.type.render,!1),i;case 1:return i=Ae(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case pe:return"Portal";case A:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case lt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case b:return(i.displayName||"Context")+".Consumer";case D:return(i._context.displayName||"Context")+".Provider";case V:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case At:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case bt:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Lt(i){var o=Je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function jr(i){i._valueTracker||(i._valueTracker=Lt(i))}function Eo(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Je(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function wi(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Is(i,o){var l=o.checked;return oe({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function wo(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Ja(i,o){o=o.checked,o!=null&&se(i,"checked",o,!1)}function Za(i,o){Ja(i,o);var l=$e(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?To(i,o.type,l):o.hasOwnProperty("defaultValue")&&To(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function tc(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function To(i,o,l){(o!=="number"||wi(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Br=Array.isArray;function zr(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function el(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Io(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Br(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function So(i,o){var l=$e(o.value),h=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function tl(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function kt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?kt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var $r,nl=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=$r.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ti(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cs=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(i){Cs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ss[o]=Ss[i]})});function rl(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ss.hasOwnProperty(i)&&Ss[i]?(""+o).trim():o+"px"}function il(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=rl(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var sl=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(i,o){if(o){if(sl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function al(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function Co(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ro=null,bn=null,gr=null;function Ao(i){if(i=xl(i)){if(typeof Ro!="function")throw Error(t(280));var o=i.stateNode;o&&(o=xc(o),Ro(i.stateNode,i.type,o))}}function _r(i){bn?gr?gr.push(i):gr=[i]:bn=i}function ll(){if(bn){var i=bn,o=gr;if(gr=bn=null,Ao(i),o)for(i=0;i<o.length;i++)Ao(o[i])}}function As(i,o){return i(o)}function ul(){}var Wr=!1;function cl(i,o,l){if(Wr)return i(o,l);Wr=!0;try{return As(i,o,l)}finally{Wr=!1,(bn!==null||gr!==null)&&(ul(),ll())}}function mt(i,o){var l=i.stateNode;if(l===null)return null;var h=xc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var ko=!1;if(d)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{ko=!1}function ks(i,o,l,h,p,_,w,C,P){var $=Array.prototype.slice.call(arguments,3);try{o.apply(l,$)}catch(J){this.onError(J)}}var Ps=!1,Po=null,Kn=!1,hl=null,hf={onError:function(i){Ps=!0,Po=i}};function No(i,o,l,h,p,_,w,C,P){Ps=!1,Po=null,ks.apply(hf,arguments)}function nc(i,o,l,h,p,_,w,C,P){if(No.apply(this,arguments),Ps){if(Ps){var $=Po;Ps=!1,Po=null}else throw Error(t(198));Kn||(Kn=!0,hl=$)}}function Qn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Ns(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Yn(i){if(Qn(i)!==i)throw Error(t(188))}function rc(i){var o=i.alternate;if(!o){if(o=Qn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Yn(p),i;if(_===h)return Yn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,C=p.child;C;){if(C===l){w=!0,l=p,h=_;break}if(C===h){w=!0,h=p,l=_;break}C=C.sibling}if(!w){for(C=_.child;C;){if(C===l){w=!0,l=_,h=p;break}if(C===h){w=!0,h=_,l=p;break}C=C.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function dl(i){return i=rc(i),i!==null?xo(i):null}function xo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=xo(i);if(o!==null)return o;i=i.sibling}return null}var Do=e.unstable_scheduleCallback,fl=e.unstable_cancelCallback,ic=e.unstable_shouldYield,df=e.unstable_requestPaint,Ze=e.unstable_now,sc=e.unstable_getCurrentPriorityLevel,xs=e.unstable_ImmediatePriority,Ii=e.unstable_UserBlockingPriority,Ln=e.unstable_NormalPriority,pl=e.unstable_LowPriority,oc=e.unstable_IdlePriority,Ds=null,Sn=null;function ac(i){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Ds,i,void 0,(i.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:uc,ml=Math.log,lc=Math.LN2;function uc(i){return i>>>=0,i===0?32:31-(ml(i)/lc|0)|0}var Oo=64,bo=4194304;function Si(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Os(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var C=w&~p;C!==0?h=Si(C):(_&=w,_!==0&&(h=Si(_)))}else w=l&~p,w!==0?h=Si(w):_!==0&&(h=Si(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-an(o),p=1<<l,h|=i[l],o&=~p;return h}function ff(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-an(_),C=1<<w,P=p[w];P===-1?((C&l)===0||(C&h)!==0)&&(p[w]=ff(C,o)):P<=o&&(i.expiredLanes|=C),_&=~C}}function Cn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function bs(){var i=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),i}function Ci(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Ri(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-an(o),i[o]=l}function Ye(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-an(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ai(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-an(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Me=0;function ki(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var cc,Lo,hc,dc,fc,gl=!1,yr=[],Wt=null,Xn=null,Jn=null,Pi=new Map,Mn=new Map,vr=[],pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(i,o){switch(i){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Pi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(o.pointerId)}}function dn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=xl(o),o!==null&&Lo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function mf(i,o,l,h,p){switch(o){case"focusin":return Wt=dn(Wt,i,o,l,h,p),!0;case"dragenter":return Xn=dn(Xn,i,o,l,h,p),!0;case"mouseover":return Jn=dn(Jn,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Pi.set(_,dn(Pi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Mn.set(_,dn(Mn.get(_)||null,i,o,l,h,p)),!0}return!1}function mc(i){var o=Us(i.target);if(o!==null){var l=Qn(o);if(l!==null){if(o=l.tag,o===13){if(o=Ns(l),o!==null){i.blockedOn=o,fc(i.priority,function(){hc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function qr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Mo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Rs=h,l.target.dispatchEvent(h),Rs=null}else return o=xl(l),o!==null&&Lo(o),i.blockedOn=l,!1;o.shift()}return!0}function Ls(i,o,l){qr(i)&&l.delete(o)}function gc(){gl=!1,Wt!==null&&qr(Wt)&&(Wt=null),Xn!==null&&qr(Xn)&&(Xn=null),Jn!==null&&qr(Jn)&&(Jn=null),Pi.forEach(Ls),Mn.forEach(Ls)}function Zn(i,o){i.blockedOn===o&&(i.blockedOn=null,gl||(gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gc)))}function er(i){function o(p){return Zn(p,i)}if(0<yr.length){Zn(yr[0],i);for(var l=1;l<yr.length;l++){var h=yr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Wt!==null&&Zn(Wt,i),Xn!==null&&Zn(Xn,i),Jn!==null&&Zn(Jn,i),Pi.forEach(o),Mn.forEach(o),l=0;l<vr.length;l++)h=vr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)mc(l),l.blockedOn===null&&vr.shift()}var Gr=q.ReactCurrentBatchConfig,Ni=!0;function ot(i,o,l,h){var p=Me,_=Gr.transition;Gr.transition=null;try{Me=1,_l(i,o,l,h)}finally{Me=p,Gr.transition=_}}function gf(i,o,l,h){var p=Me,_=Gr.transition;Gr.transition=null;try{Me=4,_l(i,o,l,h)}finally{Me=p,Gr.transition=_}}function _l(i,o,l,h){if(Ni){var p=Mo(i,o,l,h);if(p===null)Af(i,o,h,Ms,l),pc(i,h);else if(mf(p,i,o,l,h))h.stopPropagation();else if(pc(i,h),o&4&&-1<pf.indexOf(i)){for(;p!==null;){var _=xl(p);if(_!==null&&cc(_),_=Mo(i,o,l,h),_===null&&Af(i,o,h,Ms,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Af(i,o,h,null,l)}}var Ms=null;function Mo(i,o,l,h){if(Ms=null,i=Co(h),i=Us(i),i!==null)if(o=Qn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Ns(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ms=i,null}function yl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sc()){case xs:return 1;case Ii:return 4;case Ln:case pl:return 16;case oc:return 536870912;default:return 16}default:return 16}}var Rn=null,Vo=null,fn=null;function vl(){if(fn)return fn;var i,o=Vo,l=o.length,h,p="value"in Rn?Rn.value:Rn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return fn=p.slice(i,1<h?1-h:void 0)}function Fo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Er(){return!0}function El(){return!1}function Ht(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(l=i[C],this[C]=l?l(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Er:El,this.isPropagationStopped=El,this}return oe(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),o}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=Ht(tr),wr=oe({},tr,{view:0,detail:0}),_f=Ht(wr),jo,Kr,xi,Vs=oe({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==xi&&(xi&&i.type==="mousemove"?(jo=i.screenX-xi.screenX,Kr=i.screenY-xi.screenY):Kr=jo=0,xi=i),jo)},movementY:function(i){return"movementY"in i?i.movementY:Kr}}),Bo=Ht(Vs),wl=oe({},Vs,{dataTransfer:0}),_c=Ht(wl),zo=oe({},wr,{relatedTarget:0}),$o=Ht(zo),yc=oe({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qr=Ht(yc),vc=oe({},tr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ec=Ht(vc),wc=oe({},tr,{data:0}),Tl=Ht(wc),Wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ic(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Tc[i])?!!o[i]:!1}function Tr(){return Ic}var c=oe({},wr,{key:function(i){if(i.key){var o=Wo[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Fo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ln[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(i){return i.type==="keypress"?Fo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Ht(c),y=oe({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ht(y),F=oe({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),H=Ht(F),ie=oe({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ge=Ht(ie),Nt=oe({},Vs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Ht(Nt),Mt=[9,13,27,32],vt=d&&"CompositionEvent"in window,Vn=null;d&&"documentMode"in document&&(Vn=document.documentMode);var An=d&&"TextEvent"in window&&!Vn,Fs=d&&(!vt||Vn&&8<Vn&&11>=Vn),Ho=" ",D_=!1;function O_(i,o){switch(i){case"keyup":return Mt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qo=!1;function _C(i,o){switch(i){case"compositionend":return b_(o);case"keypress":return o.which!==32?null:(D_=!0,Ho);case"textInput":return i=o.data,i===Ho&&D_?null:i;default:return null}}function yC(i,o){if(qo)return i==="compositionend"||!vt&&O_(i,o)?(i=vl(),fn=Vo=Rn=null,qo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Fs&&o.locale!=="ko"?null:o.data;default:return null}}var vC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!vC[i.type]:o==="textarea"}function M_(i,o,l,h){_r(h),o=kc(o,"onChange"),0<o.length&&(l=new Uo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var Il=null,Sl=null;function EC(i){ey(i,0)}function Sc(i){var o=Xo(i);if(Eo(o))return i}function wC(i,o){if(i==="change")return o}var V_=!1;if(d){var yf;if(d){var vf="oninput"in document;if(!vf){var F_=document.createElement("div");F_.setAttribute("oninput","return;"),vf=typeof F_.oninput=="function"}yf=vf}else yf=!1;V_=yf&&(!document.documentMode||9<document.documentMode)}function U_(){Il&&(Il.detachEvent("onpropertychange",j_),Sl=Il=null)}function j_(i){if(i.propertyName==="value"&&Sc(Sl)){var o=[];M_(o,Sl,i,Co(i)),cl(EC,o)}}function TC(i,o,l){i==="focusin"?(U_(),Il=o,Sl=l,Il.attachEvent("onpropertychange",j_)):i==="focusout"&&U_()}function IC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Sc(Sl)}function SC(i,o){if(i==="click")return Sc(o)}function CC(i,o){if(i==="input"||i==="change")return Sc(o)}function RC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var nr=typeof Object.is=="function"?Object.is:RC;function Cl(i,o){if(nr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!nr(i[p],o[p]))return!1}return!0}function B_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function z_(i,o){var l=B_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=B_(l)}}function $_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?$_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function W_(){for(var i=window,o=wi();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=wi(i.document)}return o}function Ef(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function AC(i){var o=W_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&$_(l.ownerDocument.documentElement,l)){if(h!==null&&Ef(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=z_(l,_);var w=z_(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var kC=d&&"documentMode"in document&&11>=document.documentMode,Go=null,wf=null,Rl=null,Tf=!1;function H_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tf||Go==null||Go!==wi(h)||(h=Go,"selectionStart"in h&&Ef(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Rl&&Cl(Rl,h)||(Rl=h,h=kc(wf,"onSelect"),0<h.length&&(o=new Uo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Go)))}function Cc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Ko={animationend:Cc("Animation","AnimationEnd"),animationiteration:Cc("Animation","AnimationIteration"),animationstart:Cc("Animation","AnimationStart"),transitionend:Cc("Transition","TransitionEnd")},If={},q_={};d&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete Ko.animationend.animation,delete Ko.animationiteration.animation,delete Ko.animationstart.animation),"TransitionEvent"in window||delete Ko.transitionend.transition);function Rc(i){if(If[i])return If[i];if(!Ko[i])return i;var o=Ko[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in q_)return If[i]=o[l];return i}var G_=Rc("animationend"),K_=Rc("animationiteration"),Q_=Rc("animationstart"),Y_=Rc("transitionend"),X_=new Map,J_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(i,o){X_.set(i,o),a(o,[i])}for(var Sf=0;Sf<J_.length;Sf++){var Cf=J_[Sf],PC=Cf.toLowerCase(),NC=Cf[0].toUpperCase()+Cf.slice(1);Di(PC,"on"+NC)}Di(G_,"onAnimationEnd"),Di(K_,"onAnimationIteration"),Di(Q_,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(Y_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Al));function Z_(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,nc(h,o,void 0,i),i.currentTarget=null}function ey(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var C=h[w],P=C.instance,$=C.currentTarget;if(C=C.listener,P!==_&&p.isPropagationStopped())break e;Z_(p,C,$),_=P}else for(w=0;w<h.length;w++){if(C=h[w],P=C.instance,$=C.currentTarget,C=C.listener,P!==_&&p.isPropagationStopped())break e;Z_(p,C,$),_=P}}}if(Kn)throw i=hl,Kn=!1,hl=null,i}function nt(i,o){var l=o[Of];l===void 0&&(l=o[Of]=new Set);var h=i+"__bubble";l.has(h)||(ty(o,i,2,!1),l.add(h))}function Rf(i,o,l){var h=0;o&&(h|=4),ty(l,i,h,o)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function kl(i){if(!i[Ac]){i[Ac]=!0,r.forEach(function(l){l!=="selectionchange"&&(xC.has(l)||Rf(l,!1,i),Rf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Ac]||(o[Ac]=!0,Rf("selectionchange",!1,o))}}function ty(i,o,l,h){switch(yl(o)){case 1:var p=ot;break;case 4:p=gf;break;default:p=_l}l=p.bind(null,o,l,i),p=void 0,!ko||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Af(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===p||P.nodeType===8&&P.parentNode===p))return;w=w.return}for(;C!==null;){if(w=Us(C),w===null)return;if(P=w.tag,P===5||P===6){h=_=w;continue e}C=C.parentNode}}h=h.return}cl(function(){var $=_,J=Co(l),Z=[];e:{var X=X_.get(i);if(X!==void 0){var le=Uo,he=i;switch(i){case"keypress":if(Fo(l)===0)break e;case"keydown":case"keyup":le=g;break;case"focusin":he="focus",le=$o;break;case"focusout":he="blur",le=$o;break;case"beforeblur":case"afterblur":le=$o;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=_c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=H;break;case G_:case K_:case Q_:le=Qr;break;case Y_:le=Ge;break;case"scroll":le=_f;break;case"wheel":le=Fe;break;case"copy":case"cut":case"paste":le=Ec;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=I}var de=(o&4)!==0,gt=!de&&i==="scroll",U=de?X!==null?X+"Capture":null:X;de=[];for(var O=$,j;O!==null;){j=O;var te=j.stateNode;if(j.tag===5&&te!==null&&(j=te,U!==null&&(te=mt(O,U),te!=null&&de.push(Pl(O,te,j)))),gt)break;O=O.return}0<de.length&&(X=new le(X,he,null,l,J),Z.push({event:X,listeners:de}))}}if((o&7)===0){e:{if(X=i==="mouseover"||i==="pointerover",le=i==="mouseout"||i==="pointerout",X&&l!==Rs&&(he=l.relatedTarget||l.fromElement)&&(Us(he)||he[Yr]))break e;if((le||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,le?(he=l.relatedTarget||l.toElement,le=$,he=he?Us(he):null,he!==null&&(gt=Qn(he),he!==gt||he.tag!==5&&he.tag!==6)&&(he=null)):(le=null,he=$),le!==he)){if(de=Bo,te="onMouseLeave",U="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(de=I,te="onPointerLeave",U="onPointerEnter",O="pointer"),gt=le==null?X:Xo(le),j=he==null?X:Xo(he),X=new de(te,O+"leave",le,l,J),X.target=gt,X.relatedTarget=j,te=null,Us(J)===$&&(de=new de(U,O+"enter",he,l,J),de.target=j,de.relatedTarget=gt,te=de),gt=te,le&&he)t:{for(de=le,U=he,O=0,j=de;j;j=Qo(j))O++;for(j=0,te=U;te;te=Qo(te))j++;for(;0<O-j;)de=Qo(de),O--;for(;0<j-O;)U=Qo(U),j--;for(;O--;){if(de===U||U!==null&&de===U.alternate)break t;de=Qo(de),U=Qo(U)}de=null}else de=null;le!==null&&ny(Z,X,le,de,!1),he!==null&&gt!==null&&ny(Z,gt,he,de,!0)}}e:{if(X=$?Xo($):window,le=X.nodeName&&X.nodeName.toLowerCase(),le==="select"||le==="input"&&X.type==="file")var fe=wC;else if(L_(X))if(V_)fe=CC;else{fe=IC;var ye=TC}else(le=X.nodeName)&&le.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(fe=SC);if(fe&&(fe=fe(i,$))){M_(Z,fe,l,J);break e}ye&&ye(i,X,$),i==="focusout"&&(ye=X._wrapperState)&&ye.controlled&&X.type==="number"&&To(X,"number",X.value)}switch(ye=$?Xo($):window,i){case"focusin":(L_(ye)||ye.contentEditable==="true")&&(Go=ye,wf=$,Rl=null);break;case"focusout":Rl=wf=Go=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,H_(Z,l,J);break;case"selectionchange":if(kC)break;case"keydown":case"keyup":H_(Z,l,J)}var ve;if(vt)e:{switch(i){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else qo?O_(i,l)&&(Ie="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ie="onCompositionStart");Ie&&(Fs&&l.locale!=="ko"&&(qo||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&qo&&(ve=vl()):(Rn=J,Vo="value"in Rn?Rn.value:Rn.textContent,qo=!0)),ye=kc($,Ie),0<ye.length&&(Ie=new Tl(Ie,i,null,l,J),Z.push({event:Ie,listeners:ye}),ve?Ie.data=ve:(ve=b_(l),ve!==null&&(Ie.data=ve)))),(ve=An?_C(i,l):yC(i,l))&&($=kc($,"onBeforeInput"),0<$.length&&(J=new Tl("onBeforeInput","beforeinput",null,l,J),Z.push({event:J,listeners:$}),J.data=ve))}ey(Z,o)})}function Pl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function kc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=mt(i,l),_!=null&&h.unshift(Pl(i,_,p)),_=mt(i,o),_!=null&&h.push(Pl(i,_,p))),i=i.return}return h}function Qo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ny(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var C=l,P=C.alternate,$=C.stateNode;if(P!==null&&P===h)break;C.tag===5&&$!==null&&(C=$,p?(P=mt(l,_),P!=null&&w.unshift(Pl(l,P,C))):p||(P=mt(l,_),P!=null&&w.push(Pl(l,P,C)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var DC=/\r\n?/g,OC=/\u0000|\uFFFD/g;function ry(i){return(typeof i=="string"?i:""+i).replace(DC,`
`).replace(OC,"")}function Pc(i,o,l){if(o=ry(o),ry(i)!==o&&l)throw Error(t(425))}function Nc(){}var kf=null,Pf=null;function Nf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,iy=typeof Promise=="function"?Promise:void 0,LC=typeof queueMicrotask=="function"?queueMicrotask:typeof iy<"u"?function(i){return iy.resolve(null).then(i).catch(MC)}:xf;function MC(i){setTimeout(function(){throw i})}function Df(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),er(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);er(o)}function Oi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function sy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),Ir="__reactFiber$"+Yo,Nl="__reactProps$"+Yo,Yr="__reactContainer$"+Yo,Of="__reactEvents$"+Yo,VC="__reactListeners$"+Yo,FC="__reactHandles$"+Yo;function Us(i){var o=i[Ir];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Yr]||l[Ir]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=sy(i);i!==null;){if(l=i[Ir])return l;i=sy(i)}return o}i=l,l=i.parentNode}return null}function xl(i){return i=i[Ir]||i[Yr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Xo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function xc(i){return i[Nl]||null}var bf=[],Jo=-1;function bi(i){return{current:i}}function rt(i){0>Jo||(i.current=bf[Jo],bf[Jo]=null,Jo--)}function et(i,o){Jo++,bf[Jo]=i.current,i.current=o}var Li={},Xt=bi(Li),pn=bi(!1),js=Li;function Zo(i,o){var l=i.type.contextTypes;if(!l)return Li;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function mn(i){return i=i.childContextTypes,i!=null}function Dc(){rt(pn),rt(Xt)}function oy(i,o,l){if(Xt.current!==Li)throw Error(t(168));et(Xt,o),et(pn,l)}function ay(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return oe({},l,h)}function Oc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Li,js=Xt.current,et(Xt,i),et(pn,pn.current),!0}function ly(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=ay(i,o,js),h.__reactInternalMemoizedMergedChildContext=i,rt(pn),rt(Xt),et(Xt,i)):rt(pn),et(pn,l)}var Xr=null,bc=!1,Lf=!1;function uy(i){Xr===null?Xr=[i]:Xr.push(i)}function UC(i){bc=!0,uy(i)}function Mi(){if(!Lf&&Xr!==null){Lf=!0;var i=0,o=Me;try{var l=Xr;for(Me=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Xr=null,bc=!1}catch(p){throw Xr!==null&&(Xr=Xr.slice(i+1)),Do(xs,Mi),p}finally{Me=o,Lf=!1}}return null}var ea=[],ta=0,Lc=null,Mc=0,Fn=[],Un=0,Bs=null,Jr=1,Zr="";function zs(i,o){ea[ta++]=Mc,ea[ta++]=Lc,Lc=i,Mc=o}function cy(i,o,l){Fn[Un++]=Jr,Fn[Un++]=Zr,Fn[Un++]=Bs,Bs=i;var h=Jr;i=Zr;var p=32-an(h)-1;h&=~(1<<p),l+=1;var _=32-an(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Jr=1<<32-an(o)+p|l<<p|h,Zr=_+i}else Jr=1<<_|l<<p|h,Zr=i}function Mf(i){i.return!==null&&(zs(i,1),cy(i,1,0))}function Vf(i){for(;i===Lc;)Lc=ea[--ta],ea[ta]=null,Mc=ea[--ta],ea[ta]=null;for(;i===Bs;)Bs=Fn[--Un],Fn[Un]=null,Zr=Fn[--Un],Fn[Un]=null,Jr=Fn[--Un],Fn[Un]=null}var kn=null,Pn=null,at=!1,rr=null;function hy(i,o){var l=$n(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function dy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,kn=i,Pn=Oi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,kn=i,Pn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Bs!==null?{id:Jr,overflow:Zr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=$n(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,kn=i,Pn=null,!0):!1;default:return!1}}function Ff(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Uf(i){if(at){var o=Pn;if(o){var l=o;if(!dy(i,o)){if(Ff(i))throw Error(t(418));o=Oi(l.nextSibling);var h=kn;o&&dy(i,o)?hy(h,l):(i.flags=i.flags&-4097|2,at=!1,kn=i)}}else{if(Ff(i))throw Error(t(418));i.flags=i.flags&-4097|2,at=!1,kn=i}}}function fy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;kn=i}function Vc(i){if(i!==kn)return!1;if(!at)return fy(i),at=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Nf(i.type,i.memoizedProps)),o&&(o=Pn)){if(Ff(i))throw py(),Error(t(418));for(;o;)hy(i,o),o=Oi(o.nextSibling)}if(fy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Pn=Oi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Pn=null}}else Pn=kn?Oi(i.stateNode.nextSibling):null;return!0}function py(){for(var i=Pn;i;)i=Oi(i.nextSibling)}function na(){Pn=kn=null,at=!1}function jf(i){rr===null?rr=[i]:rr.push(i)}var jC=q.ReactCurrentBatchConfig;function Dl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var C=p.refs;w===null?delete C[_]:C[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Fc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function my(i){var o=i._init;return o(i._payload)}function gy(i){function o(U,O){if(i){var j=U.deletions;j===null?(U.deletions=[O],U.flags|=16):j.push(O)}}function l(U,O){if(!i)return null;for(;O!==null;)o(U,O),O=O.sibling;return null}function h(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function p(U,O){return U=Wi(U,O),U.index=0,U.sibling=null,U}function _(U,O,j){return U.index=j,i?(j=U.alternate,j!==null?(j=j.index,j<O?(U.flags|=2,O):j):(U.flags|=2,O)):(U.flags|=1048576,O)}function w(U){return i&&U.alternate===null&&(U.flags|=2),U}function C(U,O,j,te){return O===null||O.tag!==6?(O=xp(j,U.mode,te),O.return=U,O):(O=p(O,j),O.return=U,O)}function P(U,O,j,te){var fe=j.type;return fe===x?J(U,O,j.props.children,te,j.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===bt&&my(fe)===O.type)?(te=p(O,j.props),te.ref=Dl(U,O,j),te.return=U,te):(te=lh(j.type,j.key,j.props,null,U.mode,te),te.ref=Dl(U,O,j),te.return=U,te)}function $(U,O,j,te){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=Dp(j,U.mode,te),O.return=U,O):(O=p(O,j.children||[]),O.return=U,O)}function J(U,O,j,te,fe){return O===null||O.tag!==7?(O=Ys(j,U.mode,te,fe),O.return=U,O):(O=p(O,j),O.return=U,O)}function Z(U,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return O=xp(""+O,U.mode,j),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Re:return j=lh(O.type,O.key,O.props,null,U.mode,j),j.ref=Dl(U,null,O),j.return=U,j;case pe:return O=Dp(O,U.mode,j),O.return=U,O;case bt:var te=O._init;return Z(U,te(O._payload),j)}if(Br(O)||ne(O))return O=Ys(O,U.mode,j,null),O.return=U,O;Fc(U,O)}return null}function X(U,O,j,te){var fe=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return fe!==null?null:C(U,O,""+j,te);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:return j.key===fe?P(U,O,j,te):null;case pe:return j.key===fe?$(U,O,j,te):null;case bt:return fe=j._init,X(U,O,fe(j._payload),te)}if(Br(j)||ne(j))return fe!==null?null:J(U,O,j,te,null);Fc(U,j)}return null}function le(U,O,j,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return U=U.get(j)||null,C(O,U,""+te,fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Re:return U=U.get(te.key===null?j:te.key)||null,P(O,U,te,fe);case pe:return U=U.get(te.key===null?j:te.key)||null,$(O,U,te,fe);case bt:var ye=te._init;return le(U,O,j,ye(te._payload),fe)}if(Br(te)||ne(te))return U=U.get(j)||null,J(O,U,te,fe,null);Fc(O,te)}return null}function he(U,O,j,te){for(var fe=null,ye=null,ve=O,Ie=O=0,Ut=null;ve!==null&&Ie<j.length;Ie++){ve.index>Ie?(Ut=ve,ve=null):Ut=ve.sibling;var Be=X(U,ve,j[Ie],te);if(Be===null){ve===null&&(ve=Ut);break}i&&ve&&Be.alternate===null&&o(U,ve),O=_(Be,O,Ie),ye===null?fe=Be:ye.sibling=Be,ye=Be,ve=Ut}if(Ie===j.length)return l(U,ve),at&&zs(U,Ie),fe;if(ve===null){for(;Ie<j.length;Ie++)ve=Z(U,j[Ie],te),ve!==null&&(O=_(ve,O,Ie),ye===null?fe=ve:ye.sibling=ve,ye=ve);return at&&zs(U,Ie),fe}for(ve=h(U,ve);Ie<j.length;Ie++)Ut=le(ve,U,Ie,j[Ie],te),Ut!==null&&(i&&Ut.alternate!==null&&ve.delete(Ut.key===null?Ie:Ut.key),O=_(Ut,O,Ie),ye===null?fe=Ut:ye.sibling=Ut,ye=Ut);return i&&ve.forEach(function(Hi){return o(U,Hi)}),at&&zs(U,Ie),fe}function de(U,O,j,te){var fe=ne(j);if(typeof fe!="function")throw Error(t(150));if(j=fe.call(j),j==null)throw Error(t(151));for(var ye=fe=null,ve=O,Ie=O=0,Ut=null,Be=j.next();ve!==null&&!Be.done;Ie++,Be=j.next()){ve.index>Ie?(Ut=ve,ve=null):Ut=ve.sibling;var Hi=X(U,ve,Be.value,te);if(Hi===null){ve===null&&(ve=Ut);break}i&&ve&&Hi.alternate===null&&o(U,ve),O=_(Hi,O,Ie),ye===null?fe=Hi:ye.sibling=Hi,ye=Hi,ve=Ut}if(Be.done)return l(U,ve),at&&zs(U,Ie),fe;if(ve===null){for(;!Be.done;Ie++,Be=j.next())Be=Z(U,Be.value,te),Be!==null&&(O=_(Be,O,Ie),ye===null?fe=Be:ye.sibling=Be,ye=Be);return at&&zs(U,Ie),fe}for(ve=h(U,ve);!Be.done;Ie++,Be=j.next())Be=le(ve,U,Ie,Be.value,te),Be!==null&&(i&&Be.alternate!==null&&ve.delete(Be.key===null?Ie:Be.key),O=_(Be,O,Ie),ye===null?fe=Be:ye.sibling=Be,ye=Be);return i&&ve.forEach(function(vR){return o(U,vR)}),at&&zs(U,Ie),fe}function gt(U,O,j,te){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:e:{for(var fe=j.key,ye=O;ye!==null;){if(ye.key===fe){if(fe=j.type,fe===x){if(ye.tag===7){l(U,ye.sibling),O=p(ye,j.props.children),O.return=U,U=O;break e}}else if(ye.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===bt&&my(fe)===ye.type){l(U,ye.sibling),O=p(ye,j.props),O.ref=Dl(U,ye,j),O.return=U,U=O;break e}l(U,ye);break}else o(U,ye);ye=ye.sibling}j.type===x?(O=Ys(j.props.children,U.mode,te,j.key),O.return=U,U=O):(te=lh(j.type,j.key,j.props,null,U.mode,te),te.ref=Dl(U,O,j),te.return=U,U=te)}return w(U);case pe:e:{for(ye=j.key;O!==null;){if(O.key===ye)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){l(U,O.sibling),O=p(O,j.children||[]),O.return=U,U=O;break e}else{l(U,O);break}else o(U,O);O=O.sibling}O=Dp(j,U.mode,te),O.return=U,U=O}return w(U);case bt:return ye=j._init,gt(U,O,ye(j._payload),te)}if(Br(j))return he(U,O,j,te);if(ne(j))return de(U,O,j,te);Fc(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,O!==null&&O.tag===6?(l(U,O.sibling),O=p(O,j),O.return=U,U=O):(l(U,O),O=xp(j,U.mode,te),O.return=U,U=O),w(U)):l(U,O)}return gt}var ra=gy(!0),_y=gy(!1),Uc=bi(null),jc=null,ia=null,Bf=null;function zf(){Bf=ia=jc=null}function $f(i){var o=Uc.current;rt(Uc),i._currentValue=o}function Wf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function sa(i,o){jc=i,Bf=ia=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(gn=!0),i.firstContext=null)}function jn(i){var o=i._currentValue;if(Bf!==i)if(i={context:i,memoizedValue:o,next:null},ia===null){if(jc===null)throw Error(t(308));ia=i,jc.dependencies={lanes:0,firstContext:i}}else ia=ia.next=i;return o}var $s=null;function Hf(i){$s===null?$s=[i]:$s.push(i)}function yy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Hf(o)):(l.next=p.next,p.next=l),o.interleaved=l,ei(i,h)}function ei(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Vi=!1;function qf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ti(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Fi(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(je&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,ei(i,l)}return p=h.interleaved,p===null?(o.next=o,Hf(h)):(o.next=p.next,p.next=o),h.interleaved=o,ei(i,l)}function Bc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ai(i,l)}}function Ey(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function zc(i,o,l,h){var p=i.updateQueue;Vi=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var P=C,$=P.next;P.next=null,w===null?_=$:w.next=$,w=P;var J=i.alternate;J!==null&&(J=J.updateQueue,C=J.lastBaseUpdate,C!==w&&(C===null?J.firstBaseUpdate=$:C.next=$,J.lastBaseUpdate=P))}if(_!==null){var Z=p.baseState;w=0,J=$=P=null,C=_;do{var X=C.lane,le=C.eventTime;if((h&X)===X){J!==null&&(J=J.next={eventTime:le,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var he=i,de=C;switch(X=o,le=l,de.tag){case 1:if(he=de.payload,typeof he=="function"){Z=he.call(le,Z,X);break e}Z=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,X=typeof he=="function"?he.call(le,Z,X):he,X==null)break e;Z=oe({},Z,X);break e;case 2:Vi=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,X=p.effects,X===null?p.effects=[C]:X.push(C))}else le={eventTime:le,lane:X,tag:C.tag,payload:C.payload,callback:C.callback,next:null},J===null?($=J=le,P=Z):J=J.next=le,w|=X;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;X=C,C=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);if(J===null&&(P=Z),p.baseState=P,p.firstBaseUpdate=$,p.lastBaseUpdate=J,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);qs|=w,i.lanes=w,i.memoizedState=Z}}function wy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ol={},Sr=bi(Ol),bl=bi(Ol),Ll=bi(Ol);function Ws(i){if(i===Ol)throw Error(t(174));return i}function Gf(i,o){switch(et(Ll,o),et(bl,i),et(Sr,Ol),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Pt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Pt(o,i)}rt(Sr),et(Sr,o)}function oa(){rt(Sr),rt(bl),rt(Ll)}function Ty(i){Ws(Ll.current);var o=Ws(Sr.current),l=Pt(o,i.type);o!==l&&(et(bl,i),et(Sr,l))}function Kf(i){bl.current===i&&(rt(Sr),rt(bl))}var ut=bi(0);function $c(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Qf=[];function Yf(){for(var i=0;i<Qf.length;i++)Qf[i]._workInProgressVersionPrimary=null;Qf.length=0}var Wc=q.ReactCurrentDispatcher,Xf=q.ReactCurrentBatchConfig,Hs=0,ct=null,xt=null,Vt=null,Hc=!1,Ml=!1,Vl=0,BC=0;function Jt(){throw Error(t(321))}function Jf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!nr(i[l],o[l]))return!1;return!0}function Zf(i,o,l,h,p,_){if(Hs=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Wc.current=i===null||i.memoizedState===null?HC:qC,i=l(h,p),Ml){_=0;do{if(Ml=!1,Vl=0,25<=_)throw Error(t(301));_+=1,Vt=xt=null,o.updateQueue=null,Wc.current=GC,i=l(h,p)}while(Ml)}if(Wc.current=Kc,o=xt!==null&&xt.next!==null,Hs=0,Vt=xt=ct=null,Hc=!1,o)throw Error(t(300));return i}function ep(){var i=Vl!==0;return Vl=0,i}function Cr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i,Vt}function Bn(){if(xt===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=xt.next;var o=Vt===null?ct.memoizedState:Vt.next;if(o!==null)Vt=o,xt=i;else{if(i===null)throw Error(t(310));xt=i,i={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i}return Vt}function Fl(i,o){return typeof o=="function"?o(i):o}function tp(i){var o=Bn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=xt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var C=w=null,P=null,$=_;do{var J=$.lane;if((Hs&J)===J)P!==null&&(P=P.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var Z={lane:J,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};P===null?(C=P=Z,w=h):P=P.next=Z,ct.lanes|=J,qs|=J}$=$.next}while($!==null&&$!==_);P===null?w=h:P.next=C,nr(h,o.memoizedState)||(gn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=P,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,ct.lanes|=_,qs|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function np(i){var o=Bn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);nr(_,o.memoizedState)||(gn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Iy(){}function Sy(i,o){var l=ct,h=Bn(),p=o(),_=!nr(h.memoizedState,p);if(_&&(h.memoizedState=p,gn=!0),h=h.queue,rp(Ay.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,Ul(9,Ry.bind(null,l,h,p,o),void 0,null),Ft===null)throw Error(t(349));(Hs&30)!==0||Cy(l,o,p)}return p}function Cy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Ry(i,o,l,h){o.value=l,o.getSnapshot=h,ky(o)&&Py(i)}function Ay(i,o,l){return l(function(){ky(o)&&Py(i)})}function ky(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!nr(i,l)}catch{return!0}}function Py(i){var o=ei(i,1);o!==null&&ar(o,i,1,-1)}function Ny(i){var o=Cr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:i},o.queue=i,i=i.dispatch=WC.bind(null,ct,i),[o.memoizedState,i]}function Ul(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function xy(){return Bn().memoizedState}function qc(i,o,l,h){var p=Cr();ct.flags|=i,p.memoizedState=Ul(1|o,l,void 0,h===void 0?null:h)}function Gc(i,o,l,h){var p=Bn();h=h===void 0?null:h;var _=void 0;if(xt!==null){var w=xt.memoizedState;if(_=w.destroy,h!==null&&Jf(h,w.deps)){p.memoizedState=Ul(o,l,_,h);return}}ct.flags|=i,p.memoizedState=Ul(1|o,l,_,h)}function Dy(i,o){return qc(8390656,8,i,o)}function rp(i,o){return Gc(2048,8,i,o)}function Oy(i,o){return Gc(4,2,i,o)}function by(i,o){return Gc(4,4,i,o)}function Ly(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function My(i,o,l){return l=l!=null?l.concat([i]):null,Gc(4,4,Ly.bind(null,o,i),l)}function ip(){}function Vy(i,o){var l=Bn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Jf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Fy(i,o){var l=Bn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Jf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Uy(i,o,l){return(Hs&21)===0?(i.baseState&&(i.baseState=!1,gn=!0),i.memoizedState=l):(nr(l,o)||(l=bs(),ct.lanes|=l,qs|=l,i.baseState=!0),o)}function zC(i,o){var l=Me;Me=l!==0&&4>l?l:4,i(!0);var h=Xf.transition;Xf.transition={};try{i(!1),o()}finally{Me=l,Xf.transition=h}}function jy(){return Bn().memoizedState}function $C(i,o,l){var h=zi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},By(i))zy(o,l);else if(l=yy(i,o,l,h),l!==null){var p=cn();ar(l,i,h,p),$y(l,o,h)}}function WC(i,o,l){var h=zi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(By(i))zy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,C=_(w,l);if(p.hasEagerState=!0,p.eagerState=C,nr(C,w)){var P=o.interleaved;P===null?(p.next=p,Hf(o)):(p.next=P.next,P.next=p),o.interleaved=p;return}}catch{}finally{}l=yy(i,o,p,h),l!==null&&(p=cn(),ar(l,i,h,p),$y(l,o,h))}}function By(i){var o=i.alternate;return i===ct||o!==null&&o===ct}function zy(i,o){Ml=Hc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function $y(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ai(i,l)}}var Kc={readContext:jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},HC={readContext:jn,useCallback:function(i,o){return Cr().memoizedState=[i,o===void 0?null:o],i},useContext:jn,useEffect:Dy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,qc(4194308,4,Ly.bind(null,o,i),l)},useLayoutEffect:function(i,o){return qc(4194308,4,i,o)},useInsertionEffect:function(i,o){return qc(4,2,i,o)},useMemo:function(i,o){var l=Cr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Cr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=$C.bind(null,ct,i),[h.memoizedState,i]},useRef:function(i){var o=Cr();return i={current:i},o.memoizedState=i},useState:Ny,useDebugValue:ip,useDeferredValue:function(i){return Cr().memoizedState=i},useTransition:function(){var i=Ny(!1),o=i[0];return i=zC.bind(null,i[1]),Cr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=ct,p=Cr();if(at){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ft===null)throw Error(t(349));(Hs&30)!==0||Cy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Dy(Ay.bind(null,h,_,i),[i]),h.flags|=2048,Ul(9,Ry.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Cr(),o=Ft.identifierPrefix;if(at){var l=Zr,h=Jr;l=(h&~(1<<32-an(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=Vl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=BC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},qC={readContext:jn,useCallback:Vy,useContext:jn,useEffect:rp,useImperativeHandle:My,useInsertionEffect:Oy,useLayoutEffect:by,useMemo:Fy,useReducer:tp,useRef:xy,useState:function(){return tp(Fl)},useDebugValue:ip,useDeferredValue:function(i){var o=Bn();return Uy(o,xt.memoizedState,i)},useTransition:function(){var i=tp(Fl)[0],o=Bn().memoizedState;return[i,o]},useMutableSource:Iy,useSyncExternalStore:Sy,useId:jy,unstable_isNewReconciler:!1},GC={readContext:jn,useCallback:Vy,useContext:jn,useEffect:rp,useImperativeHandle:My,useInsertionEffect:Oy,useLayoutEffect:by,useMemo:Fy,useReducer:np,useRef:xy,useState:function(){return np(Fl)},useDebugValue:ip,useDeferredValue:function(i){var o=Bn();return xt===null?o.memoizedState=i:Uy(o,xt.memoizedState,i)},useTransition:function(){var i=np(Fl)[0],o=Bn().memoizedState;return[i,o]},useMutableSource:Iy,useSyncExternalStore:Sy,useId:jy,unstable_isNewReconciler:!1};function ir(i,o){if(i&&i.defaultProps){o=oe({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function sp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:oe({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Qc={isMounted:function(i){return(i=i._reactInternals)?Qn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=cn(),p=zi(i),_=ti(h,p);_.payload=o,l!=null&&(_.callback=l),o=Fi(i,_,p),o!==null&&(ar(o,i,p,h),Bc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=cn(),p=zi(i),_=ti(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Fi(i,_,p),o!==null&&(ar(o,i,p,h),Bc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=cn(),h=zi(i),p=ti(l,h);p.tag=2,o!=null&&(p.callback=o),o=Fi(i,p,h),o!==null&&(ar(o,i,h,l),Bc(o,i,h))}};function Wy(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!Cl(l,h)||!Cl(p,_):!0}function Hy(i,o,l){var h=!1,p=Li,_=o.contextType;return typeof _=="object"&&_!==null?_=jn(_):(p=mn(o)?js:Xt.current,h=o.contextTypes,_=(h=h!=null)?Zo(i,p):Li),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Qc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function qy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Qc.enqueueReplaceState(o,o.state,null)}function op(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},qf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=jn(_):(_=mn(o)?js:Xt.current,p.context=Zo(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(sp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Qc.enqueueReplaceState(p,p.state,null),zc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function aa(i,o){try{var l="",h=o;do l+=Ne(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function ap(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function lp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var KC=typeof WeakMap=="function"?WeakMap:Map;function Gy(i,o,l){l=ti(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){nh||(nh=!0,Ip=h),lp(i,o)},l}function Ky(i,o,l){l=ti(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){lp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){lp(i,o),typeof h!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function Qy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new KC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=lR.bind(null,i,o,l),o.then(i,i))}function Yy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Xy(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ti(-1,1),o.tag=2,Fi(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var QC=q.ReactCurrentOwner,gn=!1;function un(i,o,l,h){o.child=i===null?_y(o,null,l,h):ra(o,i.child,l,h)}function Jy(i,o,l,h,p){l=l.render;var _=o.ref;return sa(o,p),h=Zf(i,o,l,h,_,p),l=ep(),i!==null&&!gn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ni(i,o,p)):(at&&l&&Mf(o),o.flags|=1,un(i,o,h,p),o.child)}function Zy(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Np(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,ev(i,o,_,h,p)):(i=lh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Cl,l(w,h)&&i.ref===o.ref)return ni(i,o,p)}return o.flags|=1,i=Wi(_,h),i.ref=o.ref,i.return=o,o.child=i}function ev(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Cl(_,h)&&i.ref===o.ref)if(gn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(gn=!0);else return o.lanes=i.lanes,ni(i,o,p)}return up(i,o,l,h,p)}function tv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ua,Nn),Nn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,et(ua,Nn),Nn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,et(ua,Nn),Nn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,et(ua,Nn),Nn|=h;return un(i,o,p,l),o.child}function nv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function up(i,o,l,h,p){var _=mn(l)?js:Xt.current;return _=Zo(o,_),sa(o,p),l=Zf(i,o,l,h,_,p),h=ep(),i!==null&&!gn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ni(i,o,p)):(at&&h&&Mf(o),o.flags|=1,un(i,o,l,p),o.child)}function rv(i,o,l,h,p){if(mn(l)){var _=!0;Oc(o)}else _=!1;if(sa(o,p),o.stateNode===null)Xc(i,o),Hy(o,l,h),op(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var P=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=jn($):($=mn(l)?js:Xt.current,$=Zo(o,$));var J=l.getDerivedStateFromProps,Z=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||P!==$)&&qy(o,w,h,$),Vi=!1;var X=o.memoizedState;w.state=X,zc(o,h,w,p),P=o.memoizedState,C!==h||X!==P||pn.current||Vi?(typeof J=="function"&&(sp(o,l,J,h),P=o.memoizedState),(C=Vi||Wy(o,l,C,h,X,P,$))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=P),w.props=h,w.state=P,w.context=$,h=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,vy(i,o),C=o.memoizedProps,$=o.type===o.elementType?C:ir(o.type,C),w.props=$,Z=o.pendingProps,X=w.context,P=l.contextType,typeof P=="object"&&P!==null?P=jn(P):(P=mn(l)?js:Xt.current,P=Zo(o,P));var le=l.getDerivedStateFromProps;(J=typeof le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==Z||X!==P)&&qy(o,w,h,P),Vi=!1,X=o.memoizedState,w.state=X,zc(o,h,w,p);var he=o.memoizedState;C!==Z||X!==he||pn.current||Vi?(typeof le=="function"&&(sp(o,l,le,h),he=o.memoizedState),($=Vi||Wy(o,l,$,h,X,he,P)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,he,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,he,P)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=he),w.props=h,w.state=he,w.context=P,h=$):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),h=!1)}return cp(i,o,l,h,_,p)}function cp(i,o,l,h,p,_){nv(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&ly(o,l,!1),ni(i,o,_);h=o.stateNode,QC.current=o;var C=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=ra(o,i.child,null,_),o.child=ra(o,null,C,_)):un(i,o,C,_),o.memoizedState=h.state,p&&ly(o,l,!0),o.child}function iv(i){var o=i.stateNode;o.pendingContext?oy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&oy(i,o.context,!1),Gf(i,o.containerInfo)}function sv(i,o,l,h,p){return na(),jf(p),o.flags|=256,un(i,o,l,h),o.child}var hp={dehydrated:null,treeContext:null,retryLane:0};function dp(i){return{baseLanes:i,cachePool:null,transitions:null}}function ov(i,o,l){var h=o.pendingProps,p=ut.current,_=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=i!==null&&i.memoizedState===null?!1:(p&2)!==0),C?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),et(ut,p&1),i===null)return Uf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=uh(w,h,0,null),i=Ys(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=dp(l),o.memoizedState=hp,i):fp(o,w));if(p=i.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return YC(i,o,w,h,C,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,C=p.sibling;var P={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=P,o.deletions=null):(h=Wi(p,P),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?_=Wi(C,_):(_=Ys(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?dp(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=hp,h}return _=i.child,i=_.sibling,h=Wi(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function fp(i,o){return o=uh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Yc(i,o,l,h){return h!==null&&jf(h),ra(o,i.child,null,l),i=fp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function YC(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=ap(Error(t(422))),Yc(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=uh({mode:"visible",children:h.children},p,0,null),_=Ys(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&ra(o,i.child,null,w),o.child.memoizedState=dp(w),o.memoizedState=hp,_);if((o.mode&1)===0)return Yc(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,_=Error(t(419)),h=ap(_,h,void 0),Yc(i,o,w,h)}if(C=(w&i.childLanes)!==0,gn||C){if(h=Ft,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ei(i,p),ar(h,i,p,-1))}return Pp(),h=ap(Error(t(421))),Yc(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=uR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Pn=Oi(p.nextSibling),kn=o,at=!0,rr=null,i!==null&&(Fn[Un++]=Jr,Fn[Un++]=Zr,Fn[Un++]=Bs,Jr=i.id,Zr=i.overflow,Bs=o),o=fp(o,h.children),o.flags|=4096,o)}function av(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Wf(i.return,o,l)}function pp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function lv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(un(i,o,h.children,l),h=ut.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&av(i,l,o);else if(i.tag===19)av(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(et(ut,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&$c(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),pp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&$c(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}pp(o,!0,l,null,_);break;case"together":pp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Xc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ni(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),qs|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Wi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Wi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function XC(i,o,l){switch(o.tag){case 3:iv(o),na();break;case 5:Ty(o);break;case 1:mn(o.type)&&Oc(o);break;case 4:Gf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;et(Uc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(et(ut,ut.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?ov(i,o,l):(et(ut,ut.current&1),i=ni(i,o,l),i!==null?i.sibling:null);et(ut,ut.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return lv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),et(ut,ut.current),h)break;return null;case 22:case 23:return o.lanes=0,tv(i,o,l)}return ni(i,o,l)}var uv,mp,cv,hv;uv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},mp=function(){},cv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Ws(Sr.current);var _=null;switch(l){case"input":p=Is(i,p),h=Is(i,h),_=[];break;case"select":p=oe({},p,{value:void 0}),h=oe({},h,{value:void 0}),_=[];break;case"textarea":p=el(i,p),h=el(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Nc)}ol(l,h);var w;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var C=p[$];for(w in C)C.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(s.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in h){var P=h[$];if(C=p!=null?p[$]:void 0,h.hasOwnProperty($)&&P!==C&&(P!=null||C!=null))if($==="style")if(C){for(w in C)!C.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in P)P.hasOwnProperty(w)&&C[w]!==P[w]&&(l||(l={}),l[w]=P[w])}else l||(_||(_=[]),_.push($,l)),l=P;else $==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(_=_||[]).push($,P)):$==="children"?typeof P!="string"&&typeof P!="number"||(_=_||[]).push($,""+P):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(s.hasOwnProperty($)?(P!=null&&$==="onScroll"&&nt("scroll",i),_||C===P||(_=[])):(_=_||[]).push($,P))}l&&(_=_||[]).push("style",l);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},hv=function(i,o,l,h){l!==h&&(o.flags|=4)};function jl(i,o){if(!at)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function JC(i,o,l){var h=o.pendingProps;switch(Vf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(o),null;case 1:return mn(o.type)&&Dc(),Zt(o),null;case 3:return h=o.stateNode,oa(),rt(pn),rt(Xt),Yf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Vc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,rr!==null&&(Rp(rr),rr=null))),mp(i,o),Zt(o),null;case 5:Kf(o);var p=Ws(Ll.current);if(l=o.type,i!==null&&o.stateNode!=null)cv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Zt(o),null}if(i=Ws(Sr.current),Vc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Ir]=o,h[Nl]=_,i=(o.mode&1)!==0,l){case"dialog":nt("cancel",h),nt("close",h);break;case"iframe":case"object":case"embed":nt("load",h);break;case"video":case"audio":for(p=0;p<Al.length;p++)nt(Al[p],h);break;case"source":nt("error",h);break;case"img":case"image":case"link":nt("error",h),nt("load",h);break;case"details":nt("toggle",h);break;case"input":wo(h,_),nt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},nt("invalid",h);break;case"textarea":Io(h,_),nt("invalid",h)}ol(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var C=_[w];w==="children"?typeof C=="string"?h.textContent!==C&&(_.suppressHydrationWarning!==!0&&Pc(h.textContent,C,i),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&Pc(h.textContent,C,i),p=["children",""+C]):s.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&nt("scroll",h)}switch(l){case"input":jr(h),tc(h,_,!0);break;case"textarea":jr(h),tl(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Nc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=kt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Ir]=o,i[Nl]=h,uv(i,o,!1,!1),o.stateNode=i;e:{switch(w=al(l,h),l){case"dialog":nt("cancel",i),nt("close",i),p=h;break;case"iframe":case"object":case"embed":nt("load",i),p=h;break;case"video":case"audio":for(p=0;p<Al.length;p++)nt(Al[p],i);p=h;break;case"source":nt("error",i),p=h;break;case"img":case"image":case"link":nt("error",i),nt("load",i),p=h;break;case"details":nt("toggle",i),p=h;break;case"input":wo(i,h),p=Is(i,h),nt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=oe({},h,{value:void 0}),nt("invalid",i);break;case"textarea":Io(i,h),p=el(i,h),nt("invalid",i);break;default:p=h}ol(l,p),C=p;for(_ in C)if(C.hasOwnProperty(_)){var P=C[_];_==="style"?il(i,P):_==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&nl(i,P)):_==="children"?typeof P=="string"?(l!=="textarea"||P!=="")&&Ti(i,P):typeof P=="number"&&Ti(i,""+P):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?P!=null&&_==="onScroll"&&nt("scroll",i):P!=null&&se(i,_,P,w))}switch(l){case"input":jr(i),tc(i,h,!1);break;case"textarea":jr(i),tl(i);break;case"option":h.value!=null&&i.setAttribute("value",""+$e(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?zr(i,!!h.multiple,_,!1):h.defaultValue!=null&&zr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Nc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Zt(o),null;case 6:if(i&&o.stateNode!=null)hv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ws(Ll.current),Ws(Sr.current),Vc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Ir]=o,(_=h.nodeValue!==l)&&(i=kn,i!==null))switch(i.tag){case 3:Pc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Pc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ir]=o,o.stateNode=h}return Zt(o),null;case 13:if(rt(ut),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(at&&Pn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)py(),na(),o.flags|=98560,_=!1;else if(_=Vc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ir]=o}else na(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Zt(o),_=!1}else rr!==null&&(Rp(rr),rr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(ut.current&1)!==0?Dt===0&&(Dt=3):Pp())),o.updateQueue!==null&&(o.flags|=4),Zt(o),null);case 4:return oa(),mp(i,o),i===null&&kl(o.stateNode.containerInfo),Zt(o),null;case 10:return $f(o.type._context),Zt(o),null;case 17:return mn(o.type)&&Dc(),Zt(o),null;case 19:if(rt(ut),_=o.memoizedState,_===null)return Zt(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)jl(_,!1);else{if(Dt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=$c(i),w!==null){for(o.flags|=128,jl(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return et(ut,ut.current&1|2),o.child}i=i.sibling}_.tail!==null&&Ze()>ca&&(o.flags|=128,h=!0,jl(_,!1),o.lanes=4194304)}else{if(!h)if(i=$c(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),jl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!at)return Zt(o),null}else 2*Ze()-_.renderingStartTime>ca&&l!==1073741824&&(o.flags|=128,h=!0,jl(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Ze(),o.sibling=null,l=ut.current,et(ut,h?l&1|2:l&1),o):(Zt(o),null);case 22:case 23:return kp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Nn&1073741824)!==0&&(Zt(o),o.subtreeFlags&6&&(o.flags|=8192)):Zt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function ZC(i,o){switch(Vf(o),o.tag){case 1:return mn(o.type)&&Dc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return oa(),rt(pn),rt(Xt),Yf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Kf(o),null;case 13:if(rt(ut),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));na()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return rt(ut),null;case 4:return oa(),null;case 10:return $f(o.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var Jc=!1,en=!1,eR=typeof WeakSet=="function"?WeakSet:Set,ce=null;function la(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){dt(i,o,h)}else l.current=null}function gp(i,o,l){try{l()}catch(h){dt(i,o,h)}}var dv=!1;function tR(i,o){if(kf=Ni,i=W_(),Ef(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,C=-1,P=-1,$=0,J=0,Z=i,X=null;t:for(;;){for(var le;Z!==l||p!==0&&Z.nodeType!==3||(C=w+p),Z!==_||h!==0&&Z.nodeType!==3||(P=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(le=Z.firstChild)!==null;)X=Z,Z=le;for(;;){if(Z===i)break t;if(X===l&&++$===p&&(C=w),X===_&&++J===h&&(P=w),(le=Z.nextSibling)!==null)break;Z=X,X=Z.parentNode}Z=le}l=C===-1||P===-1?null:{start:C,end:P}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pf={focusedElem:i,selectionRange:l},Ni=!1,ce=o;ce!==null;)if(o=ce,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ce=i;else for(;ce!==null;){o=ce;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,gt=he.memoizedState,U=o.stateNode,O=U.getSnapshotBeforeUpdate(o.elementType===o.type?de:ir(o.type,de),gt);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){dt(o,o.return,te)}if(i=o.sibling,i!==null){i.return=o.return,ce=i;break}ce=o.return}return he=dv,dv=!1,he}function Bl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&gp(o,l,_)}p=p.next}while(p!==h)}}function Zc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function _p(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function fv(i){var o=i.alternate;o!==null&&(i.alternate=null,fv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Ir],delete o[Nl],delete o[Of],delete o[VC],delete o[FC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function pv(i){return i.tag===5||i.tag===3||i.tag===4}function mv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||pv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function yp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Nc));else if(h!==4&&(i=i.child,i!==null))for(yp(i,o,l),i=i.sibling;i!==null;)yp(i,o,l),i=i.sibling}function vp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,l),i=i.sibling;i!==null;)vp(i,o,l),i=i.sibling}var qt=null,sr=!1;function Ui(i,o,l){for(l=l.child;l!==null;)gv(i,o,l),l=l.sibling}function gv(i,o,l){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Ds,l)}catch{}switch(l.tag){case 5:en||la(l,o);case 6:var h=qt,p=sr;qt=null,Ui(i,o,l),qt=h,sr=p,qt!==null&&(sr?(i=qt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):qt.removeChild(l.stateNode));break;case 18:qt!==null&&(sr?(i=qt,l=l.stateNode,i.nodeType===8?Df(i.parentNode,l):i.nodeType===1&&Df(i,l),er(i)):Df(qt,l.stateNode));break;case 4:h=qt,p=sr,qt=l.stateNode.containerInfo,sr=!0,Ui(i,o,l),qt=h,sr=p;break;case 0:case 11:case 14:case 15:if(!en&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&gp(l,o,w),p=p.next}while(p!==h)}Ui(i,o,l);break;case 1:if(!en&&(la(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){dt(l,o,C)}Ui(i,o,l);break;case 21:Ui(i,o,l);break;case 22:l.mode&1?(en=(h=en)||l.memoizedState!==null,Ui(i,o,l),en=h):Ui(i,o,l);break;default:Ui(i,o,l)}}function _v(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new eR),o.forEach(function(h){var p=cR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function or(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:qt=C.stateNode,sr=!1;break e;case 3:qt=C.stateNode.containerInfo,sr=!0;break e;case 4:qt=C.stateNode.containerInfo,sr=!0;break e}C=C.return}if(qt===null)throw Error(t(160));gv(_,w,p),qt=null,sr=!1;var P=p.alternate;P!==null&&(P.return=null),p.return=null}catch($){dt(p,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)yv(o,i),o=o.sibling}function yv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(or(o,i),Rr(i),h&4){try{Bl(3,i,i.return),Zc(3,i)}catch(de){dt(i,i.return,de)}try{Bl(5,i,i.return)}catch(de){dt(i,i.return,de)}}break;case 1:or(o,i),Rr(i),h&512&&l!==null&&la(l,l.return);break;case 5:if(or(o,i),Rr(i),h&512&&l!==null&&la(l,l.return),i.flags&32){var p=i.stateNode;try{Ti(p,"")}catch(de){dt(i,i.return,de)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,C=i.type,P=i.updateQueue;if(i.updateQueue=null,P!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&Ja(p,_),al(C,w);var $=al(C,_);for(w=0;w<P.length;w+=2){var J=P[w],Z=P[w+1];J==="style"?il(p,Z):J==="dangerouslySetInnerHTML"?nl(p,Z):J==="children"?Ti(p,Z):se(p,J,Z,$)}switch(C){case"input":Za(p,_);break;case"textarea":So(p,_);break;case"select":var X=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var le=_.value;le!=null?zr(p,!!_.multiple,le,!1):X!==!!_.multiple&&(_.defaultValue!=null?zr(p,!!_.multiple,_.defaultValue,!0):zr(p,!!_.multiple,_.multiple?[]:"",!1))}p[Nl]=_}catch(de){dt(i,i.return,de)}}break;case 6:if(or(o,i),Rr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(de){dt(i,i.return,de)}}break;case 3:if(or(o,i),Rr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{er(o.containerInfo)}catch(de){dt(i,i.return,de)}break;case 4:or(o,i),Rr(i);break;case 13:or(o,i),Rr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Tp=Ze())),h&4&&_v(i);break;case 22:if(J=l!==null&&l.memoizedState!==null,i.mode&1?(en=($=en)||J,or(o,i),en=$):or(o,i),Rr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!J&&(i.mode&1)!==0)for(ce=i,J=i.child;J!==null;){for(Z=ce=J;ce!==null;){switch(X=ce,le=X.child,X.tag){case 0:case 11:case 14:case 15:Bl(4,X,X.return);break;case 1:la(X,X.return);var he=X.stateNode;if(typeof he.componentWillUnmount=="function"){h=X,l=X.return;try{o=h,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(de){dt(h,l,de)}}break;case 5:la(X,X.return);break;case 22:if(X.memoizedState!==null){wv(Z);continue}}le!==null?(le.return=X,ce=le):wv(Z)}J=J.sibling}e:for(J=null,Z=i;;){if(Z.tag===5){if(J===null){J=Z;try{p=Z.stateNode,$?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=Z.stateNode,P=Z.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=rl("display",w))}catch(de){dt(i,i.return,de)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=$?"":Z.memoizedProps}catch(de){dt(i,i.return,de)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===i)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===i)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===i)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:or(o,i),Rr(i),h&4&&_v(i);break;case 21:break;default:or(o,i),Rr(i)}}function Rr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(pv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Ti(p,""),h.flags&=-33);var _=mv(i);vp(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,C=mv(i);yp(i,C,w);break;default:throw Error(t(161))}}catch(P){dt(i,i.return,P)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function nR(i,o,l){ce=i,vv(i)}function vv(i,o,l){for(var h=(i.mode&1)!==0;ce!==null;){var p=ce,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Jc;if(!w){var C=p.alternate,P=C!==null&&C.memoizedState!==null||en;C=Jc;var $=en;if(Jc=w,(en=P)&&!$)for(ce=p;ce!==null;)w=ce,P=w.child,w.tag===22&&w.memoizedState!==null?Tv(p):P!==null?(P.return=w,ce=P):Tv(p);for(;_!==null;)ce=_,vv(_),_=_.sibling;ce=p,Jc=C,en=$}Ev(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ce=_):Ev(i)}}function Ev(i){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:en||Zc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!en)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:ir(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&wy(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}wy(o,w,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var P=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&l.focus();break;case"img":P.src&&(l.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var J=$.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&er(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}en||o.flags&512&&_p(o)}catch(X){dt(o,o.return,X)}}if(o===i){ce=null;break}if(l=o.sibling,l!==null){l.return=o.return,ce=l;break}ce=o.return}}function wv(i){for(;ce!==null;){var o=ce;if(o===i){ce=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Tv(i){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Zc(4,o)}catch(P){dt(o,l,P)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(P){dt(o,p,P)}}var _=o.return;try{_p(o)}catch(P){dt(o,_,P)}break;case 5:var w=o.return;try{_p(o)}catch(P){dt(o,w,P)}}}catch(P){dt(o,o.return,P)}if(o===i){ce=null;break}var C=o.sibling;if(C!==null){C.return=o.return,ce=C;break}ce=o.return}}var rR=Math.ceil,eh=q.ReactCurrentDispatcher,Ep=q.ReactCurrentOwner,zn=q.ReactCurrentBatchConfig,je=0,Ft=null,Et=null,Gt=0,Nn=0,ua=bi(0),Dt=0,zl=null,qs=0,th=0,wp=0,$l=null,_n=null,Tp=0,ca=1/0,ri=null,nh=!1,Ip=null,ji=null,rh=!1,Bi=null,ih=0,Wl=0,Sp=null,sh=-1,oh=0;function cn(){return(je&6)!==0?Ze():sh!==-1?sh:sh=Ze()}function zi(i){return(i.mode&1)===0?1:(je&2)!==0&&Gt!==0?Gt&-Gt:jC.transition!==null?(oh===0&&(oh=bs()),oh):(i=Me,i!==0||(i=window.event,i=i===void 0?16:yl(i.type)),i)}function ar(i,o,l,h){if(50<Wl)throw Wl=0,Sp=null,Error(t(185));Ri(i,l,h),((je&2)===0||i!==Ft)&&(i===Ft&&((je&2)===0&&(th|=l),Dt===4&&$i(i,Gt)),yn(i,h),l===1&&je===0&&(o.mode&1)===0&&(ca=Ze()+500,bc&&Mi()))}function yn(i,o){var l=i.callbackNode;Hr(i,o);var h=Os(i,i===Ft?Gt:0);if(h===0)l!==null&&fl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&fl(l),o===1)i.tag===0?UC(Sv.bind(null,i)):uy(Sv.bind(null,i)),LC(function(){(je&6)===0&&Mi()}),l=null;else{switch(ki(h)){case 1:l=xs;break;case 4:l=Ii;break;case 16:l=Ln;break;case 536870912:l=oc;break;default:l=Ln}l=Dv(l,Iv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Iv(i,o){if(sh=-1,oh=0,(je&6)!==0)throw Error(t(327));var l=i.callbackNode;if(ha()&&i.callbackNode!==l)return null;var h=Os(i,i===Ft?Gt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ah(i,h);else{o=h;var p=je;je|=2;var _=Rv();(Ft!==i||Gt!==o)&&(ri=null,ca=Ze()+500,Ks(i,o));do try{oR();break}catch(C){Cv(i,C)}while(!0);zf(),eh.current=_,je=p,Et!==null?o=0:(Ft=null,Gt=0,o=Dt)}if(o!==0){if(o===2&&(p=Cn(i),p!==0&&(h=p,o=Cp(i,p))),o===1)throw l=zl,Ks(i,0),$i(i,h),yn(i,Ze()),l;if(o===6)$i(i,h);else{if(p=i.current.alternate,(h&30)===0&&!iR(p)&&(o=ah(i,h),o===2&&(_=Cn(i),_!==0&&(h=_,o=Cp(i,_))),o===1))throw l=zl,Ks(i,0),$i(i,h),yn(i,Ze()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Qs(i,_n,ri);break;case 3:if($i(i,h),(h&130023424)===h&&(o=Tp+500-Ze(),10<o)){if(Os(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){cn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=xf(Qs.bind(null,i,_n,ri),o);break}Qs(i,_n,ri);break;case 4:if($i(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-an(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=Ze()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*rR(h/1960))-h,10<h){i.timeoutHandle=xf(Qs.bind(null,i,_n,ri),h);break}Qs(i,_n,ri);break;case 5:Qs(i,_n,ri);break;default:throw Error(t(329))}}}return yn(i,Ze()),i.callbackNode===l?Iv.bind(null,i):null}function Cp(i,o){var l=$l;return i.current.memoizedState.isDehydrated&&(Ks(i,o).flags|=256),i=ah(i,o),i!==2&&(o=_n,_n=l,o!==null&&Rp(o)),i}function Rp(i){_n===null?_n=i:_n.push.apply(_n,i)}function iR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!nr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function $i(i,o){for(o&=~wp,o&=~th,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-an(o),h=1<<l;i[l]=-1,o&=~h}}function Sv(i){if((je&6)!==0)throw Error(t(327));ha();var o=Os(i,0);if((o&1)===0)return yn(i,Ze()),null;var l=ah(i,o);if(i.tag!==0&&l===2){var h=Cn(i);h!==0&&(o=h,l=Cp(i,h))}if(l===1)throw l=zl,Ks(i,0),$i(i,o),yn(i,Ze()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Qs(i,_n,ri),yn(i,Ze()),null}function Ap(i,o){var l=je;je|=1;try{return i(o)}finally{je=l,je===0&&(ca=Ze()+500,bc&&Mi())}}function Gs(i){Bi!==null&&Bi.tag===0&&(je&6)===0&&ha();var o=je;je|=1;var l=zn.transition,h=Me;try{if(zn.transition=null,Me=1,i)return i()}finally{Me=h,zn.transition=l,je=o,(je&6)===0&&Mi()}}function kp(){Nn=ua.current,rt(ua)}function Ks(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,bC(l)),Et!==null)for(l=Et.return;l!==null;){var h=l;switch(Vf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Dc();break;case 3:oa(),rt(pn),rt(Xt),Yf();break;case 5:Kf(h);break;case 4:oa();break;case 13:rt(ut);break;case 19:rt(ut);break;case 10:$f(h.type._context);break;case 22:case 23:kp()}l=l.return}if(Ft=i,Et=i=Wi(i.current,null),Gt=Nn=o,Dt=0,zl=null,wp=th=qs=0,_n=$l=null,$s!==null){for(o=0;o<$s.length;o++)if(l=$s[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}$s=null}return i}function Cv(i,o){do{var l=Et;try{if(zf(),Wc.current=Kc,Hc){for(var h=ct.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Hc=!1}if(Hs=0,Vt=xt=ct=null,Ml=!1,Vl=0,Ep.current=null,l===null||l.return===null){Dt=1,zl=o,Et=null;break}e:{var _=i,w=l.return,C=l,P=o;if(o=Gt,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var $=P,J=C,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var le=Yy(w);if(le!==null){le.flags&=-257,Xy(le,w,C,_,o),le.mode&1&&Qy(_,$,o),o=le,P=$;var he=o.updateQueue;if(he===null){var de=new Set;de.add(P),o.updateQueue=de}else he.add(P);break e}else{if((o&1)===0){Qy(_,$,o),Pp();break e}P=Error(t(426))}}else if(at&&C.mode&1){var gt=Yy(w);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),Xy(gt,w,C,_,o),jf(aa(P,C));break e}}_=P=aa(P,C),Dt!==4&&(Dt=2),$l===null?$l=[_]:$l.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=Gy(_,P,o);Ey(_,U);break e;case 1:C=P;var O=_.type,j=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ji===null||!ji.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var te=Ky(_,C,o);Ey(_,te);break e}}_=_.return}while(_!==null)}kv(l)}catch(fe){o=fe,Et===l&&l!==null&&(Et=l=l.return);continue}break}while(!0)}function Rv(){var i=eh.current;return eh.current=Kc,i===null?Kc:i}function Pp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ft===null||(qs&268435455)===0&&(th&268435455)===0||$i(Ft,Gt)}function ah(i,o){var l=je;je|=2;var h=Rv();(Ft!==i||Gt!==o)&&(ri=null,Ks(i,o));do try{sR();break}catch(p){Cv(i,p)}while(!0);if(zf(),je=l,eh.current=h,Et!==null)throw Error(t(261));return Ft=null,Gt=0,Dt}function sR(){for(;Et!==null;)Av(Et)}function oR(){for(;Et!==null&&!ic();)Av(Et)}function Av(i){var o=xv(i.alternate,i,Nn);i.memoizedProps=i.pendingProps,o===null?kv(i):Et=o,Ep.current=null}function kv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=JC(l,o,Nn),l!==null){Et=l;return}}else{if(l=ZC(l,o),l!==null){l.flags&=32767,Et=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Dt=6,Et=null;return}}if(o=o.sibling,o!==null){Et=o;return}Et=o=i}while(o!==null);Dt===0&&(Dt=5)}function Qs(i,o,l){var h=Me,p=zn.transition;try{zn.transition=null,Me=1,aR(i,o,l,h)}finally{zn.transition=p,Me=h}return null}function aR(i,o,l,h){do ha();while(Bi!==null);if((je&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ye(i,_),i===Ft&&(Et=Ft=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||rh||(rh=!0,Dv(Ln,function(){return ha(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=zn.transition,zn.transition=null;var w=Me;Me=1;var C=je;je|=4,Ep.current=null,tR(i,l),yv(l,i),AC(Pf),Ni=!!kf,Pf=kf=null,i.current=l,nR(l),df(),je=C,Me=w,zn.transition=_}else i.current=l;if(rh&&(rh=!1,Bi=i,ih=p),_=i.pendingLanes,_===0&&(ji=null),ac(l.stateNode),yn(i,Ze()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(nh)throw nh=!1,i=Ip,Ip=null,i;return(ih&1)!==0&&i.tag!==0&&ha(),_=i.pendingLanes,(_&1)!==0?i===Sp?Wl++:(Wl=0,Sp=i):Wl=0,Mi(),null}function ha(){if(Bi!==null){var i=ki(ih),o=zn.transition,l=Me;try{if(zn.transition=null,Me=16>i?16:i,Bi===null)var h=!1;else{if(i=Bi,Bi=null,ih=0,(je&6)!==0)throw Error(t(331));var p=je;for(je|=4,ce=i.current;ce!==null;){var _=ce,w=_.child;if((ce.flags&16)!==0){var C=_.deletions;if(C!==null){for(var P=0;P<C.length;P++){var $=C[P];for(ce=$;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:Bl(8,J,_)}var Z=J.child;if(Z!==null)Z.return=J,ce=Z;else for(;ce!==null;){J=ce;var X=J.sibling,le=J.return;if(fv(J),J===$){ce=null;break}if(X!==null){X.return=le,ce=X;break}ce=le}}}var he=_.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var gt=de.sibling;de.sibling=null,de=gt}while(de!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ce=w;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Bl(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,ce=U;break e}ce=_.return}}var O=i.current;for(ce=O;ce!==null;){w=ce;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,ce=j;else e:for(w=O;ce!==null;){if(C=ce,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Zc(9,C)}}catch(fe){dt(C,C.return,fe)}if(C===w){ce=null;break e}var te=C.sibling;if(te!==null){te.return=C.return,ce=te;break e}ce=C.return}}if(je=p,Mi(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Ds,i)}catch{}h=!0}return h}finally{Me=l,zn.transition=o}}return!1}function Pv(i,o,l){o=aa(l,o),o=Gy(i,o,1),i=Fi(i,o,1),o=cn(),i!==null&&(Ri(i,1,o),yn(i,o))}function dt(i,o,l){if(i.tag===3)Pv(i,i,l);else for(;o!==null;){if(o.tag===3){Pv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ji===null||!ji.has(h))){i=aa(l,i),i=Ky(o,i,1),o=Fi(o,i,1),i=cn(),o!==null&&(Ri(o,1,i),yn(o,i));break}}o=o.return}}function lR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=cn(),i.pingedLanes|=i.suspendedLanes&l,Ft===i&&(Gt&l)===l&&(Dt===4||Dt===3&&(Gt&130023424)===Gt&&500>Ze()-Tp?Ks(i,0):wp|=l),yn(i,o)}function Nv(i,o){o===0&&((i.mode&1)===0?o=1:(o=bo,bo<<=1,(bo&130023424)===0&&(bo=4194304)));var l=cn();i=ei(i,o),i!==null&&(Ri(i,o,l),yn(i,l))}function uR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Nv(i,l)}function cR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Nv(i,l)}var xv;xv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||pn.current)gn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return gn=!1,XC(i,o,l);gn=(i.flags&131072)!==0}else gn=!1,at&&(o.flags&1048576)!==0&&cy(o,Mc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Xc(i,o),i=o.pendingProps;var p=Zo(o,Xt.current);sa(o,l),p=Zf(null,o,h,i,p,l);var _=ep();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,mn(h)?(_=!0,Oc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,qf(o),p.updater=Qc,o.stateNode=p,p._reactInternals=o,op(o,h,i,l),o=cp(null,o,h,!0,_,l)):(o.tag=0,at&&_&&Mf(o),un(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Xc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=dR(h),i=ir(h,i),p){case 0:o=up(null,o,h,i,l);break e;case 1:o=rv(null,o,h,i,l);break e;case 11:o=Jy(null,o,h,i,l);break e;case 14:o=Zy(null,o,h,ir(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:ir(h,p),up(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:ir(h,p),rv(i,o,h,p,l);case 3:e:{if(iv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,vy(i,o),zc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=aa(Error(t(423)),o),o=sv(i,o,h,l,p);break e}else if(h!==p){p=aa(Error(t(424)),o),o=sv(i,o,h,l,p);break e}else for(Pn=Oi(o.stateNode.containerInfo.firstChild),kn=o,at=!0,rr=null,l=_y(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(na(),h===p){o=ni(i,o,l);break e}un(i,o,h,l)}o=o.child}return o;case 5:return Ty(o),i===null&&Uf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Nf(h,p)?w=null:_!==null&&Nf(h,_)&&(o.flags|=32),nv(i,o),un(i,o,w,l),o.child;case 6:return i===null&&Uf(o),null;case 13:return ov(i,o,l);case 4:return Gf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=ra(o,null,h,l):un(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:ir(h,p),Jy(i,o,h,p,l);case 7:return un(i,o,o.pendingProps,l),o.child;case 8:return un(i,o,o.pendingProps.children,l),o.child;case 12:return un(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,et(Uc,h._currentValue),h._currentValue=w,_!==null)if(nr(_.value,w)){if(_.children===p.children&&!pn.current){o=ni(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){w=_.child;for(var P=C.firstContext;P!==null;){if(P.context===h){if(_.tag===1){P=ti(-1,l&-l),P.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var J=$.pending;J===null?P.next=P:(P.next=J.next,J.next=P),$.pending=P}}_.lanes|=l,P=_.alternate,P!==null&&(P.lanes|=l),Wf(_.return,l,o),C.lanes|=l;break}P=P.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,C=w.alternate,C!==null&&(C.lanes|=l),Wf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}un(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,sa(o,l),p=jn(p),h=h(p),o.flags|=1,un(i,o,h,l),o.child;case 14:return h=o.type,p=ir(h,o.pendingProps),p=ir(h.type,p),Zy(i,o,h,p,l);case 15:return ev(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:ir(h,p),Xc(i,o),o.tag=1,mn(h)?(i=!0,Oc(o)):i=!1,sa(o,l),Hy(o,h,p),op(o,h,p,l),cp(null,o,h,!0,i,l);case 19:return lv(i,o,l);case 22:return tv(i,o,l)}throw Error(t(156,o.tag))};function Dv(i,o){return Do(i,o)}function hR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(i,o,l,h){return new hR(i,o,l,h)}function Np(i){return i=i.prototype,!(!i||!i.isReactComponent)}function dR(i){if(typeof i=="function")return Np(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===At)return 14}return 2}function Wi(i,o){var l=i.alternate;return l===null?(l=$n(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function lh(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")Np(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case x:return Ys(l.children,p,_,o);case S:w=8,p|=8;break;case A:return i=$n(12,l,o,p|2),i.elementType=A,i.lanes=_,i;case R:return i=$n(13,l,o,p),i.elementType=R,i.lanes=_,i;case lt:return i=$n(19,l,o,p),i.elementType=lt,i.lanes=_,i;case He:return uh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case D:w=10;break e;case b:w=9;break e;case V:w=11;break e;case At:w=14;break e;case bt:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=$n(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Ys(i,o,l,h){return i=$n(7,i,h,o),i.lanes=l,i}function uh(i,o,l,h){return i=$n(22,i,h,o),i.elementType=He,i.lanes=l,i.stateNode={isHidden:!1},i}function xp(i,o,l){return i=$n(6,i,null,o),i.lanes=l,i}function Dp(i,o,l){return o=$n(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function fR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Op(i,o,l,h,p,_,w,C,P){return i=new fR(i,o,l,C,P),o===1?(o=1,_===!0&&(o|=8)):o=0,_=$n(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(_),i}function pR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Ov(i){if(!i)return Li;i=i._reactInternals;e:{if(Qn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(mn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(mn(l))return ay(i,l,o)}return o}function bv(i,o,l,h,p,_,w,C,P){return i=Op(l,h,!0,i,p,_,w,C,P),i.context=Ov(null),l=i.current,h=cn(),p=zi(l),_=ti(h,p),_.callback=o??null,Fi(l,_,p),i.current.lanes=p,Ri(i,p,h),yn(i,h),i}function ch(i,o,l,h){var p=o.current,_=cn(),w=zi(p);return l=Ov(l),o.context===null?o.context=l:o.pendingContext=l,o=ti(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Fi(p,o,w),i!==null&&(ar(i,p,w,_),Bc(i,p,w)),w}function hh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Lv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function bp(i,o){Lv(i,o),(i=i.alternate)&&Lv(i,o)}function mR(){return null}var Mv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Lp(i){this._internalRoot=i}dh.prototype.render=Lp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));ch(i,o,null,null)},dh.prototype.unmount=Lp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Gs(function(){ch(null,i,null,null)}),o[Yr]=null}};function dh(i){this._internalRoot=i}dh.prototype.unstable_scheduleHydration=function(i){if(i){var o=dc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<vr.length&&o!==0&&o<vr[l].priority;l++);vr.splice(l,0,i),l===0&&mc(i)}};function Mp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function fh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Vv(){}function gR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var $=hh(w);_.call($)}}var w=bv(o,h,i,0,null,!1,!1,"",Vv);return i._reactRootContainer=w,i[Yr]=w.current,kl(i.nodeType===8?i.parentNode:i),Gs(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var $=hh(P);C.call($)}}var P=Op(i,0,!1,null,null,!1,!1,"",Vv);return i._reactRootContainer=P,i[Yr]=P.current,kl(i.nodeType===8?i.parentNode:i),Gs(function(){ch(o,P,l,h)}),P}function ph(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var C=p;p=function(){var P=hh(w);C.call(P)}}ch(o,w,i,p)}else w=gR(l,o,i,p,h);return hh(w)}cc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Si(o.pendingLanes);l!==0&&(Ai(o,l|1),yn(o,Ze()),(je&6)===0&&(ca=Ze()+500,Mi()))}break;case 13:Gs(function(){var h=ei(i,1);if(h!==null){var p=cn();ar(h,i,1,p)}}),bp(i,1)}},Lo=function(i){if(i.tag===13){var o=ei(i,134217728);if(o!==null){var l=cn();ar(o,i,134217728,l)}bp(i,134217728)}},hc=function(i){if(i.tag===13){var o=zi(i),l=ei(i,o);if(l!==null){var h=cn();ar(l,i,o,h)}bp(i,o)}},dc=function(){return Me},fc=function(i,o){var l=Me;try{return Me=i,o()}finally{Me=l}},Ro=function(i,o,l){switch(o){case"input":if(Za(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=xc(h);if(!p)throw Error(t(90));Eo(h),Za(h,p)}}}break;case"textarea":So(i,l);break;case"select":o=l.value,o!=null&&zr(i,!!l.multiple,o,!1)}},As=Ap,ul=Gs;var _R={usingClientEntryPoint:!1,Events:[xl,Xo,xc,_r,ll,Ap]},Hl={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yR={bundleType:Hl.bundleType,version:Hl.version,rendererPackageName:Hl.rendererPackageName,rendererConfig:Hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=dl(i),i===null?null:i.stateNode},findFiberByHostInstance:Hl.findFiberByHostInstance||mR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mh.isDisabled&&mh.supportsFiber)try{Ds=mh.inject(yR),Sn=mh}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_R,vn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(o))throw Error(t(200));return pR(i,o,null,l)},vn.createRoot=function(i,o){if(!Mp(i))throw Error(t(299));var l=!1,h="",p=Mv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Op(i,1,!1,null,null,l,!1,h,p),i[Yr]=o.current,kl(i.nodeType===8?i.parentNode:i),new Lp(o)},vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=dl(o),i=i===null?null:i.stateNode,i},vn.flushSync=function(i){return Gs(i)},vn.hydrate=function(i,o,l){if(!fh(o))throw Error(t(200));return ph(null,i,o,!0,l)},vn.hydrateRoot=function(i,o,l){if(!Mp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=Mv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=bv(o,null,i,1,l??null,p,!1,_,w),i[Yr]=o.current,kl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new dh(o)},vn.render=function(i,o,l){if(!fh(o))throw Error(t(200));return ph(null,i,o,!1,l)},vn.unmountComponentAtNode=function(i){if(!fh(i))throw Error(t(40));return i._reactRootContainer?(Gs(function(){ph(null,null,i,!1,function(){i._reactRootContainer=null,i[Yr]=null})}),!0):!1},vn.unstable_batchedUpdates=Ap,vn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!fh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ph(i,o,l,!1,h)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var Hv;function AR(){if(Hv)return Up.exports;Hv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Up.exports=RR(),Up.exports}var qv;function kR(){if(qv)return gh;qv=1;var n=AR();return gh.createRoot=n.createRoot,gh.hydrateRoot=n.hydrateRoot,gh}var PR=kR();const NR=_T(PR),xR=()=>{};var Gv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(n,e){if(!n)throw ja(e)},ja=function(n){return new Error("Firebase Database ("+yT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},DR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Jm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,k=m&63;f||(k=64,u||(T=64)),r.push(t[v],t[E],t[T],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):DR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new OR;const T=a<<2|d>>4;if(r.push(T),m!==64){const k=d<<4&240|m>>2;if(r.push(k),E!==64){const L=m<<6&192|E;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class OR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ET=function(n){const e=vT(n);return Jm.encodeByteArray(e,!0)},jh=function(n){return ET(n).replace(/\./g,"")},Bh=function(n){try{return Jm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n){return wT(void 0,n)}function wT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LR(t)||(n[t]=wT(n[t],e[t]));return n}function LR(n){return n!=="__proto__"}/**
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
 */function MR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VR=()=>MR().__FIREBASE_DEFAULTS__,FR=()=>{if(typeof process>"u"||typeof Gv>"u")return;const n=Gv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},UR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bh(n[1]);return e&&JSON.parse(e)},Cd=()=>{try{return xR()||VR()||FR()||UR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},TT=n=>{var e,t;return(t=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zm=n=>{const e=TT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},IT=()=>{var n;return(n=Cd())===null||n===void 0?void 0:n.config},ST=n=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function eg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jh(JSON.stringify(t)),jh(JSON.stringify(u)),""].join(".")}const ou={};function jR(){const n={prod:[],emulator:[]};for(const e of Object.keys(ou))ou[e]?n.emulator.push(e):n.prod.push(e);return n}function BR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Kv=!1;function Ad(n,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||ou[n]===e||ou[n]||Kv)return;ou[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=jR().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,k){T.setAttribute("width","24"),T.setAttribute("id",k),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Kv=!0,u()},T}function v(T,k){T.setAttribute("id",k),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=BR(r),k=t("text"),L=document.getElementById(k)||document.createElement("span"),z=t("learnmore"),B=document.getElementById(z)||document.createElement("a"),ee=t("preprendIcon"),K=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const se=T.element;d(se),v(B,z);const q=m();f(K,ee),se.append(K,L,B,q),document.body.appendChild(se)}a?(L.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function zR(){var n;const e=(n=Cd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $R(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function CT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HR(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qR(){return yT.NODE_ADMIN===!0}function GR(){return!zR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KR(){try{return typeof indexedDB=="object"}catch{return!1}}function QR(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="FirebaseError";class Fr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=YR,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ju.prototype.create)}}class ju{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?XR(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Fr(s,d,r)}}function XR(n,e){return n.replace(JR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){return JSON.parse(n)}function $t(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=yu(Bh(a[0])||""),t=yu(Bh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},ZR=function(n){const e=RT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},eA=function(n){const e=RT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ra(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function zh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $h(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function ls(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Qv(a)&&Qv(u)){if(!ls(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Qv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function eu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,v;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),v=1518500249):(m=a^u^d,v=1859775393):E<60?(m=a&u|d&(a|u),v=2400959708):(m=a^u^d,v=3395469782);const T=(s<<5|s>>>27)+m+f+v+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function nA(n,e){const t=new rA(n,e);return t.subscribe.bind(t)}class rA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");iA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=zp),s.error===void 0&&(s.error=zp),s.complete===void 0&&(s.complete=zp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zp(){}function Aa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,re(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class fi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xs="[DEFAULT]";/**
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
 */class oA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new si;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lA(e))try{this.getOrInitializeService({instanceIdentifier:Xs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xs){return this.instances.has(e)}getOptions(e=Xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xs){return this.component?this.component.multipleInstances?e:Xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aA(n){return n===Xs?void 0:n}function lA(n){return n.instantiationMode==="EAGER"}/**
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
 */class uA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const cA={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},hA=be.INFO,dA={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},fA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=dA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=hA,this._logHandler=fA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const pA=(n,e)=>e.some(t=>n instanceof t);let Yv,Xv;function mA(){return Yv||(Yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gA(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AT=new WeakMap,um=new WeakMap,kT=new WeakMap,$p=new WeakMap,ng=new WeakMap;function _A(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Zi(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&AT.set(t,n)}).catch(()=>{}),ng.set(e,n),e}function yA(n){if(um.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});um.set(n,e)}let cm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return um.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vA(n){cm=n(cm)}function EA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Wp(this),e,...t);return kT.set(r,e.sort?e.sort():[e]),Zi(r)}:gA().includes(n)?function(...e){return n.apply(Wp(this),e),Zi(AT.get(this))}:function(...e){return Zi(n.apply(Wp(this),e))}}function wA(n){return typeof n=="function"?EA(n):(n instanceof IDBTransaction&&yA(n),pA(n,mA())?new Proxy(n,cm):n)}function Zi(n){if(n instanceof IDBRequest)return _A(n);if($p.has(n))return $p.get(n);const e=wA(n);return e!==n&&($p.set(n,e),ng.set(e,n)),e}const Wp=n=>ng.get(n);function TA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Zi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Zi(u.result),f.oldVersion,f.newVersion,Zi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const IA=["get","getKey","getAll","getAllKeys","count"],SA=["put","add","delete","clear"],Hp=new Map;function Jv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hp.get(e))return Hp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=SA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Hp.set(e,a),a}vA(n=>({...n,get:(e,t,r)=>Jv(e,t)||n.get(e,t,r),has:(e,t)=>!!Jv(e,t)||n.has(e,t)}));/**
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
 */class CA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(RA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function RA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hm="@firebase/app",Zv="0.13.2";/**
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
 */const pi=new Pd("@firebase/app"),AA="@firebase/app-compat",kA="@firebase/analytics-compat",PA="@firebase/analytics",NA="@firebase/app-check-compat",xA="@firebase/app-check",DA="@firebase/auth",OA="@firebase/auth-compat",bA="@firebase/database",LA="@firebase/data-connect",MA="@firebase/database-compat",VA="@firebase/functions",FA="@firebase/functions-compat",UA="@firebase/installations",jA="@firebase/installations-compat",BA="@firebase/messaging",zA="@firebase/messaging-compat",$A="@firebase/performance",WA="@firebase/performance-compat",HA="@firebase/remote-config",qA="@firebase/remote-config-compat",GA="@firebase/storage",KA="@firebase/storage-compat",QA="@firebase/firestore",YA="@firebase/ai",XA="@firebase/firestore-compat",JA="firebase",ZA="11.10.0";/**
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
 */const dm="[DEFAULT]",ek={[hm]:"fire-core",[AA]:"fire-core-compat",[PA]:"fire-analytics",[kA]:"fire-analytics-compat",[xA]:"fire-app-check",[NA]:"fire-app-check-compat",[DA]:"fire-auth",[OA]:"fire-auth-compat",[bA]:"fire-rtdb",[LA]:"fire-data-connect",[MA]:"fire-rtdb-compat",[VA]:"fire-fn",[FA]:"fire-fn-compat",[UA]:"fire-iid",[jA]:"fire-iid-compat",[BA]:"fire-fcm",[zA]:"fire-fcm-compat",[$A]:"fire-perf",[WA]:"fire-perf-compat",[HA]:"fire-rc",[qA]:"fire-rc-compat",[GA]:"fire-gcs",[KA]:"fire-gcs-compat",[QA]:"fire-fst",[XA]:"fire-fst-compat",[YA]:"fire-vertex","fire-js":"fire-js",[JA]:"fire-js-all"};/**
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
 */const Wh=new Map,tk=new Map,fm=new Map;function eE(n,e){try{n.container.addComponent(e)}catch(t){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function us(n){const e=n.name;if(fm.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;fm.set(e,n);for(const t of Wh.values())eE(t,n);for(const t of tk.values())eE(t,n);return!0}function Bu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const nk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new ju("app","Firebase",nk);/**
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
 */class rk{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=ZA;function PT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw es.create("bad-app-name",{appName:String(s)});if(t||(t=IT()),!t)throw es.create("no-options");const a=Wh.get(s);if(a){if(ls(t,a.options)&&ls(r,a.config))return a;throw es.create("duplicate-app",{appName:s})}const u=new uA(s);for(const f of fm.values())u.addComponent(f);const d=new rk(t,r,u);return Wh.set(s,d),d}function Nd(n=dm){const e=Wh.get(n);if(!e&&n===dm&&IT())return PT();if(!e)throw es.create("no-app",{appName:n});return e}function qn(n,e,t){var r;let s=(r=ek[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(d.join(" "));return}us(new fi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ik="firebase-heartbeat-database",sk=1,vu="firebase-heartbeat-store";let qp=null;function NT(){return qp||(qp=TA(ik,sk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vu)}catch(t){console.warn(t)}}}}).catch(n=>{throw es.create("idb-open",{originalErrorMessage:n.message})})),qp}async function ok(n){try{const t=(await NT()).transaction(vu),r=await t.objectStore(vu).get(xT(n));return await t.done,r}catch(e){if(e instanceof Fr)pi.warn(e.message);else{const t=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(t.message)}}}async function tE(n,e){try{const r=(await NT()).transaction(vu,"readwrite");await r.objectStore(vu).put(e,xT(n)),await r.done}catch(t){if(t instanceof Fr)pi.warn(t.message);else{const r=es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pi.warn(r.message)}}}function xT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ak=1024,lk=30;class uk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=nE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>lk){const u=dk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nE(),{heartbeatsToSend:r,unsentEntries:s}=ck(this._heartbeatsCache.heartbeats),a=jh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return pi.warn(t),""}}}function nE(){return new Date().toISOString().substring(0,10)}function ck(n,e=ak){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),rE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KR()?QR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ok(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return tE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return tE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rE(n){return jh(JSON.stringify({version:2,heartbeats:n})).length}function dk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function fk(n){us(new fi("platform-logger",e=>new CA(e),"PRIVATE")),us(new fi("heartbeat",e=>new uk(e),"PRIVATE")),qn(hm,Zv,n),qn(hm,Zv,"esm2017"),qn("fire-js","")}fk("");function rg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function DT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pk=DT,OT=new ju("auth","Firebase",DT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new Pd("@firebase/auth");function mk(n,...e){Hh.logLevel<=be.WARN&&Hh.warn(`Auth (${vs}): ${n}`,...e)}function Ph(n,...e){Hh.logLevel<=be.ERROR&&Hh.error(`Auth (${vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,...e){throw ig(n,...e)}function Nr(n,...e){return ig(n,...e)}function bT(n,e,t){const r=Object.assign(Object.assign({},pk()),{[e]:t});return new ju("auth","Firebase",r).create(e,{appName:n.name})}function ts(n){return bT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ig(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return OT.create(n,...e)}function Ee(n,e,...t){if(!n)throw ig(e,...t)}function oi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ph(e),new Error(e)}function mi(n,e){n||oi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gk(){return iE()==="http:"||iE()==="https:"}function iE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||WR()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.shortDelay=e,this.longDelay=t,mi(t>e,"Short delay should be less than long delay!"),this.isMobile=tg()||CT()}get(){return _k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n,e){mi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wk=new zu(3e4,6e4);function po(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Es(n,e,t,r,s={}){return MT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Ba(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return $R()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(m.credentials="include"),LT.fetch()(await VT(n,n.config.apiHost,t,d),m)})}async function MT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},vk),e);try{const s=new Ik(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw _h(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw _h(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw _h(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw _h(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw bT(n,v,m);pr(n,v)}}catch(s){if(s instanceof Fr)throw s;pr(n,"network-request-failed",{message:String(s)})}}async function xd(n,e,t,r,s={}){const a=await Es(n,e,t,r,s);return"mfaPendingCredential"in a&&pr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function VT(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?sg(n.config,s):`${n.config.apiScheme}://${s}`;return Ek.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Tk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ik{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nr(this.auth,"network-request-failed")),wk.get())})}}function _h(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Nr(n,e,r);return s.customData._tokenResponse=t,s}function sE(n){return n!==void 0&&n.enterprise!==void 0}class Sk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Tk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ck(n,e){return Es(n,"GET","/v2/recaptchaConfig",po(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(n,e){return Es(n,"POST","/v1/accounts:delete",e)}async function qh(n,e){return Es(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ak(n,e=!1){const t=Ke(n),r=await t.getIdToken(e),s=og(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:au(Gp(s.auth_time)),issuedAtTime:au(Gp(s.iat)),expirationTime:au(Gp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Gp(n){return Number(n)*1e3}function og(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ph("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bh(t);return s?JSON.parse(s):(Ph("Failed to decode base64 JWT payload"),null)}catch(s){return Ph("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oE(n){const e=og(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fr&&kk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=au(this.lastLoginAt),this.creationTime=au(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Eu(n,qh(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?FT(a.providerUserInfo):[],d=xk(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new mm(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function Nk(n){const e=Ke(n);await Gh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xk(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function FT(n){return n.map(e=>{var{providerId:t}=e,r=rg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(n,e){const t=await MT(n,{},async()=>{const r=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await VT(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(f.credentials="include"),LT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ok(n,e){return Es(n,"POST","/v2/accounts:revokeToken",po(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=oE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await Dk(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new va;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new va,this.toJSON())}_performRefresh(){return oi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new mm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Eu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ak(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Gh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(ts(this.auth));const e=await this.getIdToken();return await Eu(this,Rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,k=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,L=(u=t.photoURL)!==null&&u!==void 0?u:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ee=(m=t.createdAt)!==null&&m!==void 0?m:void 0,K=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:se,emailVerified:q,isAnonymous:Re,providerData:pe,stsTokenManager:x}=t;Ee(se&&x,e,"internal-error");const S=va.fromJSON(this.name,x);Ee(typeof se=="string",e,"internal-error"),qi(E,e.name),qi(T,e.name),Ee(typeof q=="boolean",e,"internal-error"),Ee(typeof Re=="boolean",e,"internal-error"),qi(k,e.name),qi(L,e.name),qi(z,e.name),qi(B,e.name),qi(ee,e.name),qi(K,e.name);const A=new ur({uid:se,auth:e,email:T,emailVerified:q,displayName:E,isAnonymous:Re,photoURL:L,phoneNumber:k,tenantId:z,stsTokenManager:S,createdAt:ee,lastLoginAt:K});return pe&&Array.isArray(pe)&&(A.providerData=pe.map(D=>Object.assign({},D))),B&&(A._redirectEventId=B),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new va;s.updateFromServerResponse(t);const a=new ur({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Gh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?FT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new va;d.updateFromIdToken(r);const f=new ur({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=new Map;function ai(n){mi(n instanceof Function,"Expected a class definition");let e=aE.get(n);return e?(mi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,aE.set(n,e),e)}/**
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
 */class UT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}UT.type="NONE";const lE=UT;/**
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
 */function Nh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ea{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Nh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Nh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qh(this.auth,{idToken:e}).catch(()=>{});return t?ur._fromGetAccountInfoResponse(this.auth,t,e):null}return ur._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ea(ai(lE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||ai(lE);const u=Nh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){let E;if(typeof v=="string"){const T=await qh(e,{idToken:v}).catch(()=>{});if(!T)break;E=await ur._fromGetAccountInfoResponse(e,T,v)}else E=ur._fromJSON(e,v);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ea(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Ea(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($T(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HT(e))return"Blackberry";if(qT(e))return"Webos";if(BT(e))return"Safari";if((e.includes("chrome/")||zT(e))&&!e.includes("edge/"))return"Chrome";if(WT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jT(n=sn()){return/firefox\//i.test(n)}function BT(n=sn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zT(n=sn()){return/crios\//i.test(n)}function $T(n=sn()){return/iemobile/i.test(n)}function WT(n=sn()){return/android/i.test(n)}function HT(n=sn()){return/blackberry/i.test(n)}function qT(n=sn()){return/webos/i.test(n)}function ag(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bk(n=sn()){var e;return ag(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lk(){return HR()&&document.documentMode===10}function GT(n=sn()){return ag(n)||WT(n)||qT(n)||HT(n)||/windows phone/i.test(n)||$T(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n,e=[]){let t;switch(n){case"Browser":t=uE(sn());break;case"Worker":t=`${uE(sn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vs}/${r}`}/**
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
 */class Mk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Vk(n,e={}){return Es(n,"GET","/v2/passwordPolicy",po(n,e))}/**
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
 */const Fk=6;class Uk{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Fk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cE(this),this.idTokenSubscription=new cE(this),this.beforeStateQueue=new Mk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ai(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Ea.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qh(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(xn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(ts(this));const t=e?Ke(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vk(this),t=new Uk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ju("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ai(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ea.create(this,[ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function za(n){return Ke(n)}class cE{constructor(e){this.auth=e,this.observer=null,this.addObserver=nA(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bk(n){Dd=n}function QT(n){return Dd.loadJS(n)}function zk(){return Dd.recaptchaEnterpriseScript}function $k(){return Dd.gapiScript}function Wk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Hk{constructor(){this.enterprise=new qk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Gk="recaptcha-enterprise",YT="NO_RECAPTCHA";class Kk{constructor(e){this.type=Gk,this.auth=za(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Ck(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Sk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;sE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(YT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hk().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&sE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=zk();f.length!==0&&(f+=d),QT(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function hE(n,e,t,r=!1,s=!1){const a=new Kk(n);let u;if(s)u=YT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function dE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await hE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await hE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(n,e){const t=Bu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(ls(a,e??{}))return s;pr(s,"already-initialized")}return t.initialize({options:e})}function Yk(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ai);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xk(n,e,t){const r=za(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=XT(e),{host:u,port:d}=Jk(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(ls(m,r.config.emulator)&&ls(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Vr(u)?(Rd(`${a}//${u}${f}`),Ad("Auth",!0)):Zk()}function XT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jk(n){const e=XT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:fE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:fE(u)}}}function fE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return oi("not implemented")}_getIdTokenResponse(e){return oi("not implemented")}_linkToIdToken(e,t){return oi("not implemented")}_getReauthenticationResolver(e){return oi("not implemented")}}async function eP(n,e){return Es(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(n,e){return xd(n,"POST","/v1/accounts:signInWithPassword",po(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(n,e){return xd(n,"POST","/v1/accounts:signInWithEmailLink",po(n,e))}async function rP(n,e){return xd(n,"POST","/v1/accounts:signInWithEmailLink",po(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends lg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new wu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new wu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dE(e,t,"signInWithPassword",tP);case"emailLink":return nP(e,{email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dE(e,r,"signUpPassword",eP);case"emailLink":return rP(e,{idToken:t,email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(n,e){return xd(n,"POST","/v1/accounts:signInWithIdp",po(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="http://localhost";class so extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new so(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=rg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new so(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return wa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wa(e,t)}buildRequest(){const e={requestUri:iP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ba(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oP(n){const e=Zl(eu(n)).link,t=e?Zl(eu(e)).deep_link_id:null,r=Zl(eu(n)).deep_link_id;return(r?Zl(eu(r)).link:null)||r||t||e||n}class ug{constructor(e){var t,r,s,a,u,d;const f=Zl(eu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,E=sP((s=f.mode)!==null&&s!==void 0?s:null);Ee(m&&v&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=oP(e);try{return new ug(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.providerId=$a.PROVIDER_ID}static credential(e,t){return wu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ug.parseLink(t);return Ee(r,"argument-error"),wu._fromEmailAndCode(e,r.code,r.tenantId)}}$a.PROVIDER_ID="password";$a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $u extends JT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends $u{constructor(){super("facebook.com")}static credential(e){return so._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gi.credential(e.oauthAccessToken)}catch{return null}}}Gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends $u{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return so._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ki.credential(t,r)}catch{return null}}}Ki.GOOGLE_SIGN_IN_METHOD="google.com";Ki.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends $u{constructor(){super("github.com")}static credential(e){return so._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.GITHUB_SIGN_IN_METHOD="github.com";Qi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends $u{constructor(){super("twitter.com")}static credential(e,t){return so._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yi.credential(t,r)}catch{return null}}}Yi.TWITTER_SIGN_IN_METHOD="twitter.com";Yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await ur._fromIdTokenResponse(e,r,s),u=pE(r);return new ka({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=pE(r);return new ka({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function pE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Fr{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Kh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Kh(e,t,r,s)}}function ZT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Kh._fromErrorAndOperation(n,a,e,r):a})}async function aP(n,e,t=!1){const r=await Eu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ka._forOperation(n,"link",r)}/**
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
 */async function lP(n,e,t=!1){const{auth:r}=n;if(xn(r.app))return Promise.reject(ts(r));const s="reauthenticate";try{const a=await Eu(n,ZT(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const u=og(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),ka._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&pr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(n,e,t=!1){if(xn(n.app))return Promise.reject(ts(n));const r="signIn",s=await ZT(n,r,e),a=await ka._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function uP(n,e){return eI(za(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(n){const e=za(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hP(n,e,t){return xn(n.app)?Promise.reject(ts(n)):uP(Ke(n),$a.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cP(n),r})}function dP(n,e,t,r){return Ke(n).onIdTokenChanged(e,t,r)}function fP(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function pP(n,e,t,r){return Ke(n).onAuthStateChanged(e,t,r)}function mP(n){return Ke(n).signOut()}const Qh="__sak";/**
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
 */class tI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qh,"1"),this.storage.removeItem(Qh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=1e3,_P=10;class nI extends tI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);Lk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_P):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nI.type="LOCAL";const yP=nI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI extends tI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rI.type="SESSION";const iI=rI;/**
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
 */function vP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Od{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Od(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await vP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Od.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class EP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=cg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return window}function wP(n){xr().location.href=n}/**
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
 */function sI(){return typeof xr().WorkerGlobalScope<"u"&&typeof xr().importScripts=="function"}async function TP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function SP(){return sI()?self:null}/**
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
 */const oI="firebaseLocalStorageDb",CP=1,Yh="firebaseLocalStorage",aI="fbase_key";class Wu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([Yh],e?"readwrite":"readonly").objectStore(Yh)}function RP(){const n=indexedDB.deleteDatabase(oI);return new Wu(n).toPromise()}function gm(){const n=indexedDB.open(oI,CP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Yh,{keyPath:aI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Yh)?e(r):(r.close(),await RP(),e(await gm()))})})}async function mE(n,e,t){const r=bd(n,!0).put({[aI]:e,value:t});return new Wu(r).toPromise()}async function AP(n,e){const t=bd(n,!1).get(e),r=await new Wu(t).toPromise();return r===void 0?null:r.value}function gE(n,e){const t=bd(n,!0).delete(e);return new Wu(t).toPromise()}const kP=800,PP=3;class lI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>PP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Od._getInstance(SP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TP(),!this.activeServiceWorker)return;this.sender=new EP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gm();return await mE(e,Qh,"1"),await gE(e,Qh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>mE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>AP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=bd(s,!1).getAll();return new Wu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lI.type="LOCAL";const NP=lI;new zu(3e4,6e4);/**
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
 */function xP(n,e){return e?ai(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hg extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function DP(n){return eI(n.auth,new hg(n),n.bypassAuthState)}function OP(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),lP(t,new hg(n),n.bypassAuthState)}async function bP(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),aP(t,new hg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DP;case"linkViaPopup":case"linkViaRedirect":return bP;case"reauthViaPopup":case"reauthViaRedirect":return OP;default:pr(this.auth,"internal-error")}}resolve(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new zu(2e3,1e4);class _a extends uI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,_a.currentPopupAction&&_a.currentPopupAction.cancel(),_a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){mi(this.filter.length===1,"Popup operations only handle one event");const e=cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LP.get())};e()}}_a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="pendingRedirect",xh=new Map;class VP extends uI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xh.get(this.auth._key());if(!e){try{const r=await FP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xh.set(this.auth._key(),e)}return this.bypassAuthState||xh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FP(n,e){const t=BP(e),r=jP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function UP(n,e){xh.set(n._key(),e)}function jP(n){return ai(n._redirectPersistence)}function BP(n){return Nh(MP,n.config.apiKey,n.name)}async function zP(n,e,t=!1){if(xn(n.app))return Promise.reject(ts(n));const r=za(n),s=xP(r,e),u=await new VP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=600*1e3;class WP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Nr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$P&&this.cachedEventUids.clear(),this.cachedEventUids.has(_E(e))}saveEventToCache(e){this.cachedEventUids.add(_E(e)),this.lastProcessedEventTime=Date.now()}}function _E(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(n,e={}){return Es(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KP=/^https?/;async function QP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qP(n);for(const t of e)try{if(YP(t))return}catch{}pr(n,"unauthorized-domain")}function YP(n){const e=pm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!KP.test(t))return!1;if(GP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const XP=new zu(3e4,6e4);function yE(){const n=xr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function JP(n){return new Promise((e,t)=>{var r,s,a;function u(){yE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yE(),t(Nr(n,"network-request-failed"))},timeout:XP.get()})}if(!((s=(r=xr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=xr().gapi)===null||a===void 0)&&a.load)u();else{const d=Wk("iframefcb");return xr()[d]=()=>{gapi.load?u():t(Nr(n,"network-request-failed"))},QT(`${$k()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Dh=null,e})}let Dh=null;function ZP(n){return Dh=Dh||JP(n),Dh}/**
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
 */const e1=new zu(5e3,15e3),t1="__/auth/iframe",n1="emulator/auth/iframe",r1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s1(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sg(e,n1):`https://${n.config.authDomain}/${t1}`,r={apiKey:e.apiKey,appName:n.name,v:vs},s=i1.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ba(r).slice(1)}`}async function o1(n){const e=await ZP(n),t=xr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:s1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r1,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Nr(n,"network-request-failed"),d=xr().setTimeout(()=>{a(u)},e1.get());function f(){xr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const a1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l1=500,u1=600,c1="_blank",h1="http://localhost";class vE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d1(n,e,t,r=l1,s=u1){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},a1),{width:r.toString(),height:s.toString(),top:a,left:u}),m=sn().toLowerCase();t&&(d=zT(m)?c1:t),jT(m)&&(e=e||h1,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[k,L])=>`${T}${k}=${L},`,"");if(bk(m)&&d!=="_self")return f1(e||"",d),new vE(null);const E=window.open(e||"",d,v);Ee(E,n,"popup-blocked");try{E.focus()}catch{}return new vE(E)}function f1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const p1="__/auth/handler",m1="emulator/auth/handler",g1=encodeURIComponent("fac");async function EE(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vs,eventId:s};if(e instanceof JT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",zh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof $u){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${g1}=${encodeURIComponent(f)}`:"";return`${_1(n)}?${Ba(d).slice(1)}${m}`}function _1({config:n}){return n.emulator?sg(n,m1):`https://${n.authDomain}/${p1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="webStorageSupport";class y1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iI,this._completeRedirectFn=zP,this._overrideRedirectResult=UP}async _openPopup(e,t,r,s){var a;mi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await EE(e,t,r,pm(),s);return d1(e,u,cg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await EE(e,t,r,pm(),s);return wP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(mi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await o1(e),r=new WP(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kp,{type:Kp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Kp];u!==void 0&&t(!!u),pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return GT()||BT()||ag()}}const v1=y1;var wE="@firebase/auth",TE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T1(n){us(new fi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KT(n)},m=new jk(r,s,a,f);return Yk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),us(new fi("auth-internal",e=>{const t=za(e.getProvider("auth").getImmediate());return(r=>new E1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(wE,TE,w1(n)),qn(wE,TE,"esm2017")}/**
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
 */const I1=300,S1=ST("authIdTokenMaxAge")||I1;let IE=null;const C1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>S1)return;const s=t==null?void 0:t.token;IE!==s&&(IE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function R1(n=Nd()){const e=Bu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qk(n,{popupRedirectResolver:v1,persistence:[NP,yP,iI]}),r=ST("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=C1(a.toString());fP(t,u,()=>u(t.currentUser)),dP(t,d=>u(d))}}const s=TT("auth");return s&&Xk(t,`http://${s}`),t}function A1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Bk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Nr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",A1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T1("Browser");var SE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,hI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function A(){}A.prototype=S.prototype,x.D=S.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(D,b,V){for(var R=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)R[lt-2]=arguments[lt];return S.prototype[b].apply(D,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,S,A){A||(A=0);var D=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)D[b]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(b=0;16>b;++b)D[b]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=x.g[0],A=x.g[1],b=x.g[2];var V=x.g[3],R=S+(V^A&(b^V))+D[0]+3614090360&4294967295;S=A+(R<<7&4294967295|R>>>25),R=V+(b^S&(A^b))+D[1]+3905402710&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(A^V&(S^A))+D[2]+606105819&4294967295,b=V+(R<<17&4294967295|R>>>15),R=A+(S^b&(V^S))+D[3]+3250441966&4294967295,A=b+(R<<22&4294967295|R>>>10),R=S+(V^A&(b^V))+D[4]+4118548399&4294967295,S=A+(R<<7&4294967295|R>>>25),R=V+(b^S&(A^b))+D[5]+1200080426&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(A^V&(S^A))+D[6]+2821735955&4294967295,b=V+(R<<17&4294967295|R>>>15),R=A+(S^b&(V^S))+D[7]+4249261313&4294967295,A=b+(R<<22&4294967295|R>>>10),R=S+(V^A&(b^V))+D[8]+1770035416&4294967295,S=A+(R<<7&4294967295|R>>>25),R=V+(b^S&(A^b))+D[9]+2336552879&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(A^V&(S^A))+D[10]+4294925233&4294967295,b=V+(R<<17&4294967295|R>>>15),R=A+(S^b&(V^S))+D[11]+2304563134&4294967295,A=b+(R<<22&4294967295|R>>>10),R=S+(V^A&(b^V))+D[12]+1804603682&4294967295,S=A+(R<<7&4294967295|R>>>25),R=V+(b^S&(A^b))+D[13]+4254626195&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(A^V&(S^A))+D[14]+2792965006&4294967295,b=V+(R<<17&4294967295|R>>>15),R=A+(S^b&(V^S))+D[15]+1236535329&4294967295,A=b+(R<<22&4294967295|R>>>10),R=S+(b^V&(A^b))+D[1]+4129170786&4294967295,S=A+(R<<5&4294967295|R>>>27),R=V+(A^b&(S^A))+D[6]+3225465664&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^A&(V^S))+D[11]+643717713&4294967295,b=V+(R<<14&4294967295|R>>>18),R=A+(V^S&(b^V))+D[0]+3921069994&4294967295,A=b+(R<<20&4294967295|R>>>12),R=S+(b^V&(A^b))+D[5]+3593408605&4294967295,S=A+(R<<5&4294967295|R>>>27),R=V+(A^b&(S^A))+D[10]+38016083&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^A&(V^S))+D[15]+3634488961&4294967295,b=V+(R<<14&4294967295|R>>>18),R=A+(V^S&(b^V))+D[4]+3889429448&4294967295,A=b+(R<<20&4294967295|R>>>12),R=S+(b^V&(A^b))+D[9]+568446438&4294967295,S=A+(R<<5&4294967295|R>>>27),R=V+(A^b&(S^A))+D[14]+3275163606&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^A&(V^S))+D[3]+4107603335&4294967295,b=V+(R<<14&4294967295|R>>>18),R=A+(V^S&(b^V))+D[8]+1163531501&4294967295,A=b+(R<<20&4294967295|R>>>12),R=S+(b^V&(A^b))+D[13]+2850285829&4294967295,S=A+(R<<5&4294967295|R>>>27),R=V+(A^b&(S^A))+D[2]+4243563512&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^A&(V^S))+D[7]+1735328473&4294967295,b=V+(R<<14&4294967295|R>>>18),R=A+(V^S&(b^V))+D[12]+2368359562&4294967295,A=b+(R<<20&4294967295|R>>>12),R=S+(A^b^V)+D[5]+4294588738&4294967295,S=A+(R<<4&4294967295|R>>>28),R=V+(S^A^b)+D[8]+2272392833&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^A)+D[11]+1839030562&4294967295,b=V+(R<<16&4294967295|R>>>16),R=A+(b^V^S)+D[14]+4259657740&4294967295,A=b+(R<<23&4294967295|R>>>9),R=S+(A^b^V)+D[1]+2763975236&4294967295,S=A+(R<<4&4294967295|R>>>28),R=V+(S^A^b)+D[4]+1272893353&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^A)+D[7]+4139469664&4294967295,b=V+(R<<16&4294967295|R>>>16),R=A+(b^V^S)+D[10]+3200236656&4294967295,A=b+(R<<23&4294967295|R>>>9),R=S+(A^b^V)+D[13]+681279174&4294967295,S=A+(R<<4&4294967295|R>>>28),R=V+(S^A^b)+D[0]+3936430074&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^A)+D[3]+3572445317&4294967295,b=V+(R<<16&4294967295|R>>>16),R=A+(b^V^S)+D[6]+76029189&4294967295,A=b+(R<<23&4294967295|R>>>9),R=S+(A^b^V)+D[9]+3654602809&4294967295,S=A+(R<<4&4294967295|R>>>28),R=V+(S^A^b)+D[12]+3873151461&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^A)+D[15]+530742520&4294967295,b=V+(R<<16&4294967295|R>>>16),R=A+(b^V^S)+D[2]+3299628645&4294967295,A=b+(R<<23&4294967295|R>>>9),R=S+(b^(A|~V))+D[0]+4096336452&4294967295,S=A+(R<<6&4294967295|R>>>26),R=V+(A^(S|~b))+D[7]+1126891415&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~A))+D[14]+2878612391&4294967295,b=V+(R<<15&4294967295|R>>>17),R=A+(V^(b|~S))+D[5]+4237533241&4294967295,A=b+(R<<21&4294967295|R>>>11),R=S+(b^(A|~V))+D[12]+1700485571&4294967295,S=A+(R<<6&4294967295|R>>>26),R=V+(A^(S|~b))+D[3]+2399980690&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~A))+D[10]+4293915773&4294967295,b=V+(R<<15&4294967295|R>>>17),R=A+(V^(b|~S))+D[1]+2240044497&4294967295,A=b+(R<<21&4294967295|R>>>11),R=S+(b^(A|~V))+D[8]+1873313359&4294967295,S=A+(R<<6&4294967295|R>>>26),R=V+(A^(S|~b))+D[15]+4264355552&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~A))+D[6]+2734768916&4294967295,b=V+(R<<15&4294967295|R>>>17),R=A+(V^(b|~S))+D[13]+1309151649&4294967295,A=b+(R<<21&4294967295|R>>>11),R=S+(b^(A|~V))+D[4]+4149444226&4294967295,S=A+(R<<6&4294967295|R>>>26),R=V+(A^(S|~b))+D[11]+3174756917&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~A))+D[2]+718787259&4294967295,b=V+(R<<15&4294967295|R>>>17),R=A+(V^(b|~S))+D[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+V&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var A=S-this.blockSize,D=this.B,b=this.h,V=0;V<S;){if(b==0)for(;V<=A;)s(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<S;)if(D[b++]=x.charCodeAt(V++),b==this.blockSize){s(this,D),b=0;break}}else for(;V<S;)if(D[b++]=x[V++],b==this.blockSize){s(this,D),b=0;break}}this.h=b,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var A=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=A&255,A/=256;for(this.u(x),x=Array(16),S=A=0;4>S;++S)for(var D=0;32>D;D+=8)x[A++]=this.g[S]>>>D&255;return x};function a(x,S){var A=d;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=S(x)}function u(x,S){this.h=S;for(var A=[],D=!0,b=x.length-1;0<=b;b--){var V=x[b]|0;D&&V==S||(A[b]=V,D=!1)}this.g=A}var d={};function f(x){return-128<=x&&128>x?a(x,function(S){return new u([S|0],0>S?-1:0)}):new u([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return E;if(0>x)return B(m(-x));for(var S=[],A=1,D=0;x>=A;D++)S[D]=x/A|0,A*=4294967296;return new u(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return B(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(S,8)),D=E,b=0;b<x.length;b+=8){var V=Math.min(8,x.length-b),R=parseInt(x.substring(b,b+V),S);8>V?(V=m(Math.pow(S,V)),D=D.j(V).add(m(R))):(D=D.j(A),D=D.add(m(R)))}return D}var E=f(0),T=f(1),k=f(16777216);n=u.prototype,n.m=function(){if(z(this))return-B(this).m();for(var x=0,S=1,A=0;A<this.g.length;A++){var D=this.i(A);x+=(0<=D?D:4294967296+D)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(L(this))return"0";if(z(this))return"-"+B(this).toString(x);for(var S=m(Math.pow(x,6)),A=this,D="";;){var b=q(A,S).g;A=ee(A,b.j(S));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=b,L(A))return V+D;for(;6>V.length;)V="0"+V;D=V+D}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function L(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function z(x){return x.h==-1}n.l=function(x){return x=ee(this,x),z(x)?-1:L(x)?0:1};function B(x){for(var S=x.g.length,A=[],D=0;D<S;D++)A[D]=~x.g[D];return new u(A,~x.h).add(T)}n.abs=function(){return z(this)?B(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],D=0,b=0;b<=S;b++){var V=D+(this.i(b)&65535)+(x.i(b)&65535),R=(V>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);D=R>>>16,V&=65535,R&=65535,A[b]=R<<16|V}return new u(A,A[A.length-1]&-2147483648?-1:0)};function ee(x,S){return x.add(B(S))}n.j=function(x){if(L(this)||L(x))return E;if(z(this))return z(x)?B(this).j(B(x)):B(B(this).j(x));if(z(x))return B(this.j(B(x)));if(0>this.l(k)&&0>x.l(k))return m(this.m()*x.m());for(var S=this.g.length+x.g.length,A=[],D=0;D<2*S;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(var b=0;b<x.g.length;b++){var V=this.i(D)>>>16,R=this.i(D)&65535,lt=x.i(b)>>>16,At=x.i(b)&65535;A[2*D+2*b]+=R*At,K(A,2*D+2*b),A[2*D+2*b+1]+=V*At,K(A,2*D+2*b+1),A[2*D+2*b+1]+=R*lt,K(A,2*D+2*b+1),A[2*D+2*b+2]+=V*lt,K(A,2*D+2*b+2)}for(D=0;D<S;D++)A[D]=A[2*D+1]<<16|A[2*D];for(D=S;D<2*S;D++)A[D]=0;return new u(A,0)};function K(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function se(x,S){this.g=x,this.h=S}function q(x,S){if(L(S))throw Error("division by zero");if(L(x))return new se(E,E);if(z(x))return S=q(B(x),S),new se(B(S.g),B(S.h));if(z(S))return S=q(x,B(S)),new se(B(S.g),S.h);if(30<x.g.length){if(z(x)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var A=T,D=S;0>=D.l(x);)A=Re(A),D=Re(D);var b=pe(A,1),V=pe(D,1);for(D=pe(D,2),A=pe(A,2);!L(D);){var R=V.add(D);0>=R.l(x)&&(b=b.add(A),V=R),D=pe(D,1),A=pe(A,1)}return S=ee(x,b.j(S)),new se(b,S)}for(b=E;0<=x.l(S);){for(A=Math.max(1,Math.floor(x.m()/S.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),V=m(A),R=V.j(S);z(R)||0<R.l(x);)A-=D,V=m(A),R=V.j(S);L(V)&&(V=T),b=b.add(V),x=ee(x,R)}return new se(b,x)}n.A=function(x){return q(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],D=0;D<S;D++)A[D]=this.i(D)&x.i(D);return new u(A,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],D=0;D<S;D++)A[D]=this.i(D)|x.i(D);return new u(A,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],D=0;D<S;D++)A[D]=this.i(D)^x.i(D);return new u(A,this.h^x.h)};function Re(x){for(var S=x.g.length+1,A=[],D=0;D<S;D++)A[D]=x.i(D)<<1|x.i(D-1)>>>31;return new u(A,x.h)}function pe(x,S){var A=S>>5;S%=32;for(var D=x.g.length-A,b=[],V=0;V<D;V++)b[V]=0<S?x.i(V+A)>>>S|x.i(V+A+1)<<32-S:x.i(V+A);return new u(b,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,ns=u}).apply(typeof SE<"u"?SE:typeof self<"u"?self:typeof window<"u"?window:{});var yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dI,tu,fI,Oh,_m,pI,mI,gI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof yh=="object"&&yh];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var F=c[I];if(!(F in y))break e;y=y[F]}c=c[c.length-1],I=y[c],g=g(I),g!=I&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,I=!1,F={next:function(){if(!I&&y<c.length){var H=y++;return{value:g(H,c[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function E(c,g,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function T(c,g,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function k(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function L(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,F,H){for(var ie=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)ie[Ge-2]=arguments[Ge];return g.prototype[F].apply(I,ie)}}function z(c){const g=c.length;if(0<g){const y=Array(g);for(let I=0;I<g;I++)y[I]=c[I];return y}return[]}function B(c,g){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const F=c.length||0,H=I.length||0;c.length=F+H;for(let ie=0;ie<H;ie++)c[F+ie]=I[ie]}else c.push(I)}}class ee{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(c){return/^[\s\xa0]*$/.test(c)}function se(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function q(c){return q[" "](c),c}q[" "]=function(){};var Re=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function pe(c,g,y){for(const I in c)g.call(y,c[I],I,c)}function x(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function S(c){const g={};for(const y in c)g[y]=c[y];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,g){let y,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(y in I)c[y]=I[y];for(let H=0;H<A.length;H++)y=A[H],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function b(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function V(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ne;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class lt{constructor(){this.h=this.g=null}add(g,y){const I=At.get();I.set(g,y),this.h?this.h.next=I:this.g=I,this.h=I}}var At=new ee(()=>new bt,c=>c.reset());class bt{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let He,W=!1,ne=new lt,oe=()=>{const c=d.Promise.resolve(void 0);He=()=>{c.then(M)}};var M=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){V(y)}var g=At;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}W=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c})();function Ne(c,g){if(ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Re){e:{try{q(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ne.aa.h.call(this)}}L(Ne,ge);var Ve={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Je(c,g,y,I,F){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!I,this.ha=F,this.key=++$e,this.da=this.fa=!1}function Lt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function jr(c){this.src=c,this.g={},this.h=0}jr.prototype.add=function(c,g,y,I,F){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var ie=wi(c,g,I,F);return-1<ie?(g=c[ie],y||(g.fa=!1)):(g=new Je(g,this.src,H,!!I,F),g.fa=y,c.push(g)),g};function Eo(c,g){var y=g.type;if(y in c.g){var I=c.g[y],F=Array.prototype.indexOf.call(I,g,void 0),H;(H=0<=F)&&Array.prototype.splice.call(I,F,1),H&&(Lt(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function wi(c,g,y,I){for(var F=0;F<c.length;++F){var H=c[F];if(!H.da&&H.listener==g&&H.capture==!!y&&H.ha==I)return F}return-1}var Is="closure_lm_"+(1e6*Math.random()|0),wo={};function Ja(c,g,y,I,F){if(Array.isArray(g)){for(var H=0;H<g.length;H++)Ja(c,g[H],y,I,F);return null}return y=tl(y),c&&c[ze]?c.K(g,y,m(I)?!!I.capture:!1,F):Za(c,g,y,!1,I,F)}function Za(c,g,y,I,F,H){if(!g)throw Error("Invalid event type");var ie=m(F)?!!F.capture:!!F,Ge=Io(c);if(Ge||(c[Is]=Ge=new jr(c)),y=Ge.add(g,y,I,ie,H),y.proxy)return y;if(I=tc(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Ae||(F=ie),F===void 0&&(F=!1),c.addEventListener(g.toString(),I,F);else if(c.attachEvent)c.attachEvent(zr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function tc(){function c(y){return g.call(c.src,c.listener,y)}const g=el;return c}function To(c,g,y,I,F){if(Array.isArray(g))for(var H=0;H<g.length;H++)To(c,g[H],y,I,F);else I=m(I)?!!I.capture:!!I,y=tl(y),c&&c[ze]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],y=wi(H,y,I,F),-1<y&&(Lt(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=Io(c))&&(g=c.g[g.toString()],c=-1,g&&(c=wi(g,y,I,F)),(y=-1<c?g[c]:null)&&Br(y))}function Br(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ze])Eo(g.i,c);else{var y=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(y,I,c.capture):g.detachEvent?g.detachEvent(zr(y),I):g.addListener&&g.removeListener&&g.removeListener(I),(y=Io(g))?(Eo(y,c),y.h==0&&(y.src=null,g[Is]=null)):Lt(c)}}}function zr(c){return c in wo?wo[c]:wo[c]="on"+c}function el(c,g){if(c.da)c=!0;else{g=new Ne(g,this);var y=c.listener,I=c.ha||c.src;c.fa&&Br(c),c=y.call(I,g)}return c}function Io(c){return c=c[Is],c instanceof jr?c:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function tl(c){return typeof c=="function"?c:(c[So]||(c[So]=function(g){return c.handleEvent(g)}),c[So])}function kt(){Y.call(this),this.i=new jr(this),this.M=this,this.F=null}L(kt,Y),kt.prototype[ze]=!0,kt.prototype.removeEventListener=function(c,g,y,I){To(this,c,g,y,I)};function Pt(c,g){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new ge(g,c);else if(g instanceof ge)g.target=g.target||c;else{var F=g;g=new ge(I,c),D(g,F)}if(F=!0,y)for(var H=y.length-1;0<=H;H--){var ie=g.g=y[H];F=$r(ie,I,!0,g)&&F}if(ie=g.g=c,F=$r(ie,I,!0,g)&&F,F=$r(ie,I,!1,g)&&F,y)for(H=0;H<y.length;H++)ie=g.g=y[H],F=$r(ie,I,!1,g)&&F}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],I=0;I<y.length;I++)Lt(y[I]);delete c.g[g],c.h--}}this.F=null},kt.prototype.K=function(c,g,y,I){return this.i.add(String(c),g,!1,y,I)},kt.prototype.L=function(c,g,y,I){return this.i.add(String(c),g,!0,y,I)};function $r(c,g,y,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,H=0;H<g.length;++H){var ie=g[H];if(ie&&!ie.da&&ie.capture==y){var Ge=ie.listener,Nt=ie.ha||ie.src;ie.fa&&Eo(c.i,ie),F=Ge.call(Nt,I)!==!1&&F}}return F&&!I.defaultPrevented}function nl(c,g,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Ti(c){c.g=nl(()=>{c.g=null,c.i&&(c.i=!1,Ti(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ss extends Y{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ti(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(c){Y.call(this),this.h=c,this.g={}}L(Cs,Y);var rl=[];function il(c){pe(c.g,function(g,y){this.g.hasOwnProperty(y)&&Br(g)},c),c.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),il(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sl=d.JSON.stringify,ol=d.JSON.parse,al=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Rs(){}Rs.prototype.h=null;function Co(c){return c.h||(c.h=c.i())}function Ro(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){ge.call(this,"d")}L(gr,ge);function Ao(){ge.call(this,"c")}L(Ao,ge);var _r={},ll=null;function As(){return ll=ll||new kt}_r.La="serverreachability";function ul(c){ge.call(this,_r.La,c)}L(ul,ge);function Wr(c){const g=As();Pt(g,new ul(g))}_r.STAT_EVENT="statevent";function cl(c,g){ge.call(this,_r.STAT_EVENT,c),this.stat=g}L(cl,ge);function mt(c){const g=As();Pt(g,new cl(g,c))}_r.Ma="timingevent";function ko(c,g){ge.call(this,_r.Ma,c),this.size=g}L(ko,ge);function Gn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function Ps(c,g,y,I,F,H){c.info(function(){if(c.g)if(H)for(var ie="",Ge=H.split("&"),Nt=0;Nt<Ge.length;Nt++){var Fe=Ge[Nt].split("=");if(1<Fe.length){var Mt=Fe[0];Fe=Fe[1];var vt=Mt.split("_");ie=2<=vt.length&&vt[1]=="type"?ie+(Mt+"="+Fe+"&"):ie+(Mt+"=redacted&")}}else ie=null;else ie=H;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+g+`
`+y+`
`+ie})}function Po(c,g,y,I,F,H,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+g+`
`+y+`
`+H+" "+ie})}function Kn(c,g,y,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+hf(c,y)+(I?" "+I:"")})}function hl(c,g){c.info(function(){return"TIMEOUT: "+g})}ks.prototype.info=function(){};function hf(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var H=F[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return sl(y)}catch{return g}}var No={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qn;function Ns(){}L(Ns,Rs),Ns.prototype.g=function(){return new XMLHttpRequest},Ns.prototype.i=function(){return{}},Qn=new Ns;function Yn(c,g,y,I){this.j=c,this.i=g,this.l=y,this.R=I||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rc}function rc(){this.i=null,this.g="",this.h=!1}var dl={},xo={};function Do(c,g,y){c.L=1,c.v=Ai(Cn(g)),c.m=y,c.P=!0,fl(c,null)}function fl(c,g){c.F=Date.now(),Ze(c),c.A=Cn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Pi(y.i,"t",I),c.C=0,y=c.j.J,c.h=new rc,c.g=wc(c.j,y?g:null,!c.m),0<c.O&&(c.M=new Ss(T(c.Y,c,c.g),c.O)),g=c.U,y=c.g,I=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(rl[0]=F.toString()),F=rl);for(var H=0;H<F.length;H++){var ie=Ja(y,F[H],I||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Wr(),Ps(c.i,c.u,c.A,c.l,c.R,c.m)}Yn.prototype.ca=function(c){c=c.target;const g=this.M;g&&fn(c)==3?g.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)e:{const vt=fn(this.g);var g=this.g.Ba();const Vn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||vl(this.g)))){this.J||vt!=4||g==7||(g==8||0>=Vn?Wr(3):Wr(2)),xs(this);var y=this.g.Z();this.X=y;t:if(ic(this)){var I=vl(this.g);c="";var F=I.length,H=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Ii(this);var ie="";break t}this.h.i=new d.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(H&&g==F-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,Po(this.i,this.u,this.A,this.l,this.R,vt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,Nt=this.g;if((Ge=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ge)){var Fe=Ge;break t}}Fe=null}if(y=Fe)Kn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pl(this,y);else{this.o=!1,this.s=3,mt(12),Ln(this),Ii(this);break e}}if(this.P){y=!0;let An;for(;!this.J&&this.C<ie.length;)if(An=df(this,ie),An==xo){vt==4&&(this.s=4,mt(14),y=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(An==dl){this.s=4,mt(15),Kn(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else Kn(this.i,this.l,An,null),pl(this,An);if(ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||ie.length!=0||this.h.h||(this.s=1,mt(16),y=!1),this.o=this.o&&y,!y)Kn(this.i,this.l,ie,"[Invalid Chunked Response]"),Ln(this),Ii(this);else if(0<ie.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),wl(Mt),Mt.M=!0,mt(11))}}else Kn(this.i,this.l,ie,null),pl(this,ie);vt==4&&Ln(this),this.o&&!this.J&&(vt==4?$o(this.j,this):(this.o=!1,Ze(this)))}else Fo(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Ln(this),Ii(this)}}}catch{}finally{}};function ic(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function df(c,g){var y=c.C,I=g.indexOf(`
`,y);return I==-1?xo:(y=Number(g.substring(y,I)),isNaN(y)?dl:(I+=1,I+y>g.length?xo:(g=g.slice(I,I+y),c.C=I+y,g)))}Yn.prototype.cancel=function(){this.J=!0,Ln(this)};function Ze(c){c.S=Date.now()+c.I,sc(c,c.I)}function sc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Gn(T(c.ba,c),g)}function xs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Yn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hl(this.i,this.A),this.L!=2&&(Wr(),mt(17)),Ln(this),this.s=2,Ii(this)):sc(this,this.S-c)};function Ii(c){c.j.G==0||c.J||$o(c.j,c)}function Ln(c){xs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,il(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function pl(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||an(y.h,c))){if(!c.K&&an(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)zo(y),tr(y);else break e;Bo(y),mt(18)}}else y.za=F[1],0<y.za-y.T&&37500>F[2]&&y.F&&y.v==0&&!y.C&&(y.C=Gn(T(y.Za,y),6e3));if(1>=ac(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Qr(y,11)}else if((c.K||y.g==c)&&zo(y),!K(g))for(F=y.Da.g.parse(g),g=0;g<F.length;g++){let Fe=F[g];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Mt=Fe[3];Mt!=null&&(y.la=Mt,y.j.info("VER="+y.la));const vt=Fe[4];vt!=null&&(y.Aa=vt,y.j.info("SVER="+y.Aa));const Vn=Fe[5];Vn!=null&&typeof Vn=="number"&&0<Vn&&(I=1.5*Vn,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const An=c.g;if(An){const Fs=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var H=I.h;H.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ml(H,H.h),H.h=null))}if(I.D){const Ho=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(I.ya=Ho,Ye(I.I,I.D,Ho))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var ie=c;if(I.qa=Ec(I,I.J?I.ia:null,I.W),ie.K){lc(I.h,ie);var Ge=ie,Nt=I.L;Nt&&(Ge.I=Nt),Ge.B&&(xs(Ge),Ze(Ge)),I.g=ie}else Vs(I);0<y.i.length&&wr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Qr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Qr(y,7):Ht(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}Wr(4)}catch{}}var oc=class{constructor(c,g){this.g=c,this.map=g}};function Ds(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ac(c){return c.h?1:c.g?c.g.size:0}function an(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ml(c,g){c.g?c.g.add(g):c.h=g}function lc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ds.prototype.cancel=function(){if(this.i=uc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function uc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return z(c.i)}function Oo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,I=0;I<y;I++)g.push(c[I]);return g}g=[],y=0;for(I in c)g[y++]=c[I];return g}function bo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const I in c)g[y++]=I;return g}}}function Si(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=bo(c),I=Oo(c),F=I.length,H=0;H<F;H++)g.call(void 0,I[H],y&&y[H],c)}var Os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),F=null;if(0<=I){var H=c[y].substring(0,I);F=c[y].substring(I+1)}else H=c[y];g(H,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Hr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Hr){this.h=c.h,bs(this,c.j),this.o=c.o,this.g=c.g,Ci(this,c.s),this.l=c.l;var g=c.i,y=new yr;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),Ri(this,y),this.m=c.m}else c&&(g=String(c).match(Os))?(this.h=!1,bs(this,g[1]||"",!0),this.o=Me(g[2]||""),this.g=Me(g[3]||"",!0),Ci(this,g[4]),this.l=Me(g[5]||"",!0),Ri(this,g[6]||"",!0),this.m=Me(g[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}Hr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ki(g,Lo,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ki(g,Lo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(ki(y,y.charAt(0)=="/"?dc:hc,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",ki(y,gl)),c.join("")};function Cn(c){return new Hr(c)}function bs(c,g,y){c.j=y?Me(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ci(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ri(c,g,y){g instanceof yr?(c.i=g,vr(c.i,c.h)):(y||(g=ki(g,fc)),c.i=new yr(g,c.h))}function Ye(c,g,y){c.i.set(g,y)}function Ai(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ki(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,cc),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Lo=/[#\/\?@]/g,hc=/[#\?:]/g,dc=/[#\?]/g,fc=/[#\?@]/g,gl=/#/g;function yr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Wt(c){c.g||(c.g=new Map,c.h=0,c.i&&ff(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=yr.prototype,n.add=function(c,g){Wt(this),this.i=null,c=Mn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Xn(c,g){Wt(c),g=Mn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Jn(c,g){return Wt(c),g=Mn(c,g),c.g.has(g)}n.forEach=function(c,g){Wt(this),this.g.forEach(function(y,I){y.forEach(function(F){c.call(g,F,I,this)},this)},this)},n.na=function(){Wt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let I=0;I<g.length;I++){const F=c[I];for(let H=0;H<F.length;H++)y.push(g[I])}return y},n.V=function(c){Wt(this);let g=[];if(typeof c=="string")Jn(this,c)&&(g=g.concat(this.g.get(Mn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},n.set=function(c,g){return Wt(this),this.i=null,c=Mn(this,c),Jn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Pi(c,g,y){Xn(c,g),0<y.length&&(c.i=null,c.g.set(Mn(c,g),z(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var I=g[y];const H=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var F=H;ie[I]!==""&&(F+="="+encodeURIComponent(String(ie[I]))),c.push(F)}}return this.i=c.join("&")};function Mn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function vr(c,g){g&&!c.j&&(Wt(c),c.i=null,c.g.forEach(function(y,I){var F=I.toLowerCase();I!=F&&(Xn(this,I),Pi(this,F,y))},c)),c.j=g}function pf(c,g){const y=new ks;if(d.Image){const I=new Image;I.onload=k(dn,y,"TestLoadImage: loaded",!0,g,I),I.onerror=k(dn,y,"TestLoadImage: error",!1,g,I),I.onabort=k(dn,y,"TestLoadImage: abort",!1,g,I),I.ontimeout=k(dn,y,"TestLoadImage: timeout",!1,g,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function pc(c,g){const y=new ks,I=new AbortController,F=setTimeout(()=>{I.abort(),dn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(H=>{clearTimeout(F),H.ok?dn(y,"TestPingServer: ok",!0,g):dn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),dn(y,"TestPingServer: error",!1,g)})}function dn(c,g,y,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(y)}catch{}}function mf(){this.g=new al}function mc(c,g,y){const I=y||"";try{Si(c,function(F,H){let ie=F;m(F)&&(ie=sl(F)),g.push(I+H+"="+encodeURIComponent(ie))})}catch(F){throw g.push(I+"type="+encodeURIComponent("_badmap")),F}}function qr(c){this.l=c.Ub||null,this.j=c.eb||!1}L(qr,Rs),qr.prototype.g=function(){return new Ls(this.l,this.j)},qr.prototype.i=(function(c){return function(){return c}})({});function Ls(c,g){kt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Ls,kt),n=Ls.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,er(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function gc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Zn(this):er(this),this.readyState==3&&gc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Zn(this))},n.Qa=function(c){this.g&&(this.response=c,Zn(this))},n.ga=function(){this.g&&Zn(this)};function Zn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,er(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function er(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gr(c){let g="";return pe(c,function(y,I){g+=I,g+=":",g+=y,g+=`\r
`}),g}function Ni(c,g,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=Gr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Ye(c,g,y))}function ot(c){kt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(ot,kt);var gf=/^https?$/i,_l=["POST","PUT"];n=ot.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qn.g(),this.v=this.o?Co(this.o):Co(Qn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){Ms(this,H);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)y.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())y.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(_l,g,void 0))||I||F||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of y)this.g.setRequestHeader(H,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vo(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){Ms(this,H)}};function Ms(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Mo(c),Rn(c)}function Mo(c){c.A||(c.A=!0,Pt(c,"complete"),Pt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Pt(this,"complete"),Pt(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yl(this):this.bb())},n.bb=function(){yl(this)};function yl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||fn(c)!=4||c.Z()!=2)){if(c.u&&fn(c)==4)nl(c.Ea,0,c);else if(Pt(c,"readystatechange"),fn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var I;if(I=ie===0){var F=String(c.D).match(Os)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!gf.test(F?F.toLowerCase():"")}y=I}if(y)Pt(c,"complete"),Pt(c,"success");else{c.m=6;try{var H=2<fn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",Mo(c)}}finally{Rn(c)}}}}function Rn(c,g){if(c.g){Vo(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Pt(c,"ready");try{y.onreadystatechange=I}catch{}}}function Vo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function fn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ol(g)}};function vl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Fo(c){const g={};c=(c.g&&2<=fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(K(c[I]))continue;var y=b(c[I]);const F=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=g[F]||[];g[F]=H,H.push(y)}x(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function El(c){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,c),this.cb=Er("retryDelaySeedMs",1e4,c),this.Wa=Er("forwardChannelMaxRetries",2,c),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ds(c&&c.concurrentRequestLimit),this.Da=new mf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=El.prototype,n.la=8,n.G=1,n.connect=function(c,g,y,I){mt(0),this.W=c,this.H=g||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=Ec(this,null,this.W),wr(this)};function Ht(c){if(Uo(c),c.G==3){var g=c.U++,y=Cn(c.I);if(Ye(y,"SID",c.K),Ye(y,"RID",g),Ye(y,"TYPE","terminate"),Kr(c,y),g=new Yn(c,c.j,g),g.L=2,g.v=Ai(Cn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=wc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ze(g)}vc(c)}function tr(c){c.g&&(wl(c),c.g.cancel(),c.g=null)}function Uo(c){tr(c),c.u&&(d.clearTimeout(c.u),c.u=null),zo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function wr(c){if(!Sn(c.h)&&!c.s){c.s=!0;var g=c.Ga;He||oe(),W||(He(),W=!0),ne.add(g,c),c.B=0}}function _f(c,g){return ac(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Gn(T(c.Ga,c,g),yc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Yn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),D(H,this.S)):H=this.S),this.m!==null||this.O||(F.H=H,H=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=xi(this,F,g),y=Cn(this.I),Ye(y,"RID",c),Ye(y,"CVER",22),this.D&&Ye(y,"X-HTTP-Session-Id",this.D),Kr(this,y),H&&(this.O?g="headers="+encodeURIComponent(String(Gr(H)))+"&"+g:this.m&&Ni(y,this.m,H)),ml(this.h,F),this.Ua&&Ye(y,"TYPE","init"),this.P?(Ye(y,"$req",g),Ye(y,"SID","null"),F.T=!0,Do(F,y,null)):Do(F,y,g),this.G=2}}else this.G==3&&(c?jo(this,c):this.i.length==0||Sn(this.h)||jo(this))};function jo(c,g){var y;g?y=g.l:y=c.U++;const I=Cn(c.I);Ye(I,"SID",c.K),Ye(I,"RID",y),Ye(I,"AID",c.T),Kr(c,I),c.m&&c.o&&Ni(I,c.m,c.o),y=new Yn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=xi(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ml(c.h,y),Do(y,I,g)}function Kr(c,g){c.H&&pe(c.H,function(y,I){Ye(g,I,y)}),c.l&&Si({},function(y,I){Ye(g,I,y)})}function xi(c,g,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var F=c.i;let H=-1;for(;;){const ie=["count="+y];H==-1?0<y?(H=F[0].g,ie.push("ofs="+H)):H=0:ie.push("ofs="+H);let Ge=!0;for(let Nt=0;Nt<y;Nt++){let Fe=F[Nt].g;const Mt=F[Nt].map;if(Fe-=H,0>Fe)H=Math.max(0,F[Nt].g-100),Ge=!1;else try{mc(Mt,ie,"req"+Fe+"_")}catch{I&&I(Mt)}}if(Ge){I=ie.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,I}function Vs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;He||oe(),W||(He(),W=!0),ne.add(g,c),c.v=0}}function Bo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Gn(T(c.Fa,c),yc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,_c(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Gn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),tr(this),_c(this))};function wl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function _c(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Cn(c.qa);Ye(g,"RID","rpc"),Ye(g,"SID",c.K),Ye(g,"AID",c.T),Ye(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(g,"TO",c.ja),Ye(g,"TYPE","xmlhttp"),Kr(c,g),c.m&&c.o&&Ni(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Ai(Cn(g)),y.m=null,y.P=!0,fl(y,c)}n.Za=function(){this.C!=null&&(this.C=null,tr(this),Bo(this),mt(19))};function zo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function $o(c,g){var y=null;if(c.g==g){zo(c),wl(c),c.g=null;var I=2}else if(an(c.h,g))y=g.D,lc(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;I=As(),Pt(I,new ko(I,y)),wr(c)}else Vs(c);else if(F=g.s,F==3||F==0&&0<g.X||!(I==1&&_f(c,g)||I==2&&Bo(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),F){case 1:Qr(c,5);break;case 4:Qr(c,10);break;case 3:Qr(c,6);break;default:Qr(c,2)}}}function yc(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function Qr(c,g){if(c.j.info("Error code "+g),g==2){var y=T(c.fb,c),I=c.Xa;const F=!I;I=new Hr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||bs(I,"https"),Ai(I),F?pf(I.toString(),y):pc(I.toString(),y)}else mt(2);c.G=0,c.l&&c.l.sa(g),vc(c),Uo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function vc(c){if(c.G=0,c.ka=[],c.l){const g=uc(c.h);(g.length!=0||c.i.length!=0)&&(B(c.ka,g),B(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function Ec(c,g,y){var I=y instanceof Hr?Cn(y):new Hr(y);if(I.g!="")g&&(I.g=g+"."+I.g),Ci(I,I.s);else{var F=d.location;I=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var H=new Hr(null);I&&bs(H,I),g&&(H.g=g),F&&Ci(H,F),y&&(H.l=y),I=H}return y=c.D,g=c.ya,y&&g&&Ye(I,y,g),Ye(I,"VER",c.la),Kr(c,I),I}function wc(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ot(new qr({eb:y})):new ot(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tl(){}n=Tl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wo(){}Wo.prototype.g=function(c,g){return new ln(c,g)};function ln(c,g){kt.call(this),this.g=new El(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!K(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!K(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Tr(this)}L(ln,kt),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){Ht(this.g)},ln.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=sl(c),c=y);g.i.push(new oc(g.Ya++,c)),g.G==3&&wr(g)},ln.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,ln.aa.N.call(this)};function Tc(c){gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}L(Tc,gr);function Ic(){Ao.call(this),this.status=1}L(Ic,Ao);function Tr(c){this.g=c}L(Tr,Tl),Tr.prototype.ua=function(){Pt(this.g,"a")},Tr.prototype.ta=function(c){Pt(this.g,new Tc(c))},Tr.prototype.sa=function(c){Pt(this.g,new Ic)},Tr.prototype.ra=function(){Pt(this.g,"b")},Wo.prototype.createWebChannel=Wo.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,gI=function(){return new Wo},mI=function(){return As()},pI=_r,_m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},No.NO_ERROR=0,No.TIMEOUT=8,No.HTTP_ERROR=6,Oh=No,nc.COMPLETE="complete",fI=nc,Ro.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",kt.prototype.listen=kt.prototype.K,tu=Ro,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,dI=ot}).apply(typeof yh<"u"?yh:typeof self<"u"?self:typeof window<"u"?window:{});const CE="@firebase/firestore",RE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Wa="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Pd("@firebase/firestore");function fa(){return oo.logLevel}function ue(n,...e){if(oo.logLevel<=be.DEBUG){const t=e.map(dg);oo.debug(`Firestore (${Wa}): ${n}`,...t)}}function gi(n,...e){if(oo.logLevel<=be.ERROR){const t=e.map(dg);oo.error(`Firestore (${Wa}): ${n}`,...t)}}function cs(n,...e){if(oo.logLevel<=be.WARN){const t=e.map(dg);oo.warn(`Firestore (${Wa}): ${n}`,...t)}}function dg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function we(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_I(n,r,t)}function _I(n,e,t){let r=`FIRESTORE (${Wa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw gi(r),new Error(r)}function qe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||_I(e,s,r)}function Ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(nn.UNAUTHENTICATED)))}shutdown(){}}class P1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class N1{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new rs,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new rs)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string",31837,{l:r}),new yI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class x1{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class D1{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new x1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(nn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class AE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new AE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new AE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function vI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=b1(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function ym(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ke(r,s);{const a=vI(),u=L1(a.encode(kE(n,t)),a.encode(kE(e,t)));return u!==0?u:ke(r,s)}}t+=r>65535?2:1}return ke(n.length,e.length)}function kE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function L1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ke(n[t],e[t]);return ke(n.length,e.length)}function Pa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="__name__";class kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&we(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=kr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return ke(e.length,t.length)}static compareSegments(e,t){const r=kr.isNumericId(e),s=kr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?kr.extractNumericId(e).compare(kr.extractNumericId(t)):ym(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ns.fromString(e.substring(4,e.length-2))}}class tt extends kr{construct(e,t,r){return new tt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const M1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends kr{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return M1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===PE}static keyField(){return new Qt([PE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ae(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ae(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ae(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function EI(n,e,t){if(!t)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function V1(n,e,t,r){if(e===!0&&r===!0)throw new ae(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function NE(n){if(!_e.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xE(n){if(_e.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ld(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function is(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ld(n);throw new ae(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function F1(n,e){if(e<=0)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function St(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hu(n,e){if(!wI(n))throw new ae(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ae(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=-62135596800,OE=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*OE);return new st(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<DE)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/OE}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hu(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-DE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:St("string",st._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new st(0,0))}static max(){return new Se(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tu=-1;function U1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Se.fromTimestamp(r===1e9?new st(t+1,0):new st(t,r));return new hs(s,_e.empty(),e)}function j1(n){return new hs(n.readTime,n.key,Tu)}class hs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hs(Se.min(),_e.empty(),Tu)}static max(){return new hs(Se.max(),_e.empty(),Tu)}}function B1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==z1)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,r)=>{t(e)}))}static reject(e){return new Q(((t,r)=>{r(e)}))}static waitFor(e){return new Q(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Q.resolve(!1);for(const r of e)t=t.next((s=>s?Q.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Q(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((v=>{u[m]=v,++d,d===a&&r(u)}),(v=>s(v)))}}))}static doWhile(e,t){return new Q(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function W1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const pg=-1;function Vd(n){return n==null}function Xh(n){return n===0&&1/n==-1/0}function H1(n){return typeof n=="number"&&Number.isInteger(n)&&!Xh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="";function q1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bE(e)),e=G1(n.get(t),e);return bE(e)}function G1(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case TI:t+="";break;default:t+=a}}return t}function bE(n){return n+TI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function II(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt=class vm{constructor(e,t){this.comparator=e,this.root=t||ss.EMPTY}insert(e,t){return new vm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ss.BLACK,null,null))}remove(e){return new vm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ss.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vh(this.root,e,this.comparator,!1)}getReverseIterator(){return new vh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vh(this.root,e,this.comparator,!0)}},vh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ss=class ii{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??ii.RED,this.left=s??ii.EMPTY,this.right=a??ii.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new ii(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ii.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ii.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ii.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ii.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}};ss.EMPTY=null,ss.RED=!0,ss.BLACK=!1;ss.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new ss(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ME(this.data.getIterator())}getIteratorFrom(e){return new ME(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ot(this.comparator);return t.data=e,t}}class ME{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new cr([])}unionWith(e){let t=new Ot(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new cr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class SI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new SI("Invalid base64 string: "+a):a}})(e);return new Yt(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const K1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(n){if(qe(!!n,39018),typeof n=="string"){let e=0;const t=K1.exec(n);if(qe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fs(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="server_timestamp",RI="__type__",AI="__previous_value__",kI="__local_write_time__";function mg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[RI])===null||t===void 0?void 0:t.stringValue)===CI}function Fd(n){const e=n.mapValue.fields[AI];return mg(e)?Fd(e):e}function Iu(n){const e=ds(n.mapValue.fields[kI].timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,t,r,s,a,u,d,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=v}}const Jh="(default)";class Su{constructor(e,t){this.projectId=e,this.database=t||Jh}static empty(){return new Su("","")}get isDefaultDatabase(){return this.database===Jh}isEqual(e){return e instanceof Su&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="__type__",Y1="__max__",Eh={mapValue:{}},NI="__vector__",Zh="value";function ps(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mg(n)?4:J1(n)?9007199254740991:X1(n)?10:11:we(28295,{value:n})}function Mr(n,e){if(n===e)return!0;const t=ps(n);if(t!==ps(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Iu(n).isEqual(Iu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ds(s.timestampValue),d=ds(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return fs(s.bytesValue).isEqual(fs(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return _t(s.geoPointValue.latitude)===_t(a.geoPointValue.latitude)&&_t(s.geoPointValue.longitude)===_t(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return _t(s.integerValue)===_t(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=_t(s.doubleValue),d=_t(a.doubleValue);return u===d?Xh(u)===Xh(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Pa(n.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(LE(u)!==LE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Mr(u[f],d[f])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function Cu(n,e){return(n.values||[]).find((t=>Mr(t,e)))!==void 0}function Na(n,e){if(n===e)return 0;const t=ps(n),r=ps(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=_t(a.integerValue||a.doubleValue),f=_t(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return VE(n.timestampValue,e.timestampValue);case 4:return VE(Iu(n),Iu(e));case 5:return ym(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=fs(a),f=fs(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=ke(d[m],f[m]);if(v!==0)return v}return ke(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=ke(_t(a.latitude),_t(u.latitude));return d!==0?d:ke(_t(a.longitude),_t(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return FE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,v;const E=a.fields||{},T=u.fields||{},k=(d=E[Zh])===null||d===void 0?void 0:d.arrayValue,L=(f=T[Zh])===null||f===void 0?void 0:f.arrayValue,z=ke(((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0,((v=L==null?void 0:L.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:FE(k,L)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Eh.mapValue&&u===Eh.mapValue)return 0;if(a===Eh.mapValue)return 1;if(u===Eh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const T=ym(f[E],v[E]);if(T!==0)return T;const k=Na(d[f[E]],m[v[E]]);if(k!==0)return k}return ke(f.length,v.length)})(n.mapValue,e.mapValue);default:throw we(23264,{le:t})}}function VE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=ds(n),r=ds(e),s=ke(t.seconds,r.seconds);return s!==0?s:ke(t.nanos,r.nanos)}function FE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Na(t[s],r[s]);if(a)return a}return ke(t.length,r.length)}function xa(n){return Em(n)}function Em(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ds(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Em(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Em(t.fields[u])}`;return s+"}"})(n.mapValue):we(61005,{value:n})}function bh(n){switch(ps(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fd(n);return e?16+bh(e):16;case 5:return 2*n.stringValue.length;case 6:return fs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+bh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ws(r.fields,((a,u)=>{s+=a.length+bh(u)})),s})(n.mapValue);default:throw we(13486,{value:n})}}function UE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wm(n){return!!n&&"integerValue"in n}function gg(n){return!!n&&"arrayValue"in n}function jE(n){return!!n&&"nullValue"in n}function BE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Lh(n){return!!n&&"mapValue"in n}function X1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[PI])===null||t===void 0?void 0:t.stringValue)===NI}function lu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ws(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=lu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function J1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Y1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Lh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lu(t)}setAll(e){let t=Qt.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=lu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Lh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Lh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ws(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Dn(lu(this.value))}}function xI(n){const e=[];return ws(n.fields,((t,r)=>{const s=new Qt([t]);if(Lh(r)){const a=xI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new cr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new rn(e,0,Se.min(),Se.min(),Se.min(),Dn.empty(),0)}static newFoundDocument(e,t,r,s){return new rn(e,1,t,Se.min(),r,s,0)}static newNoDocument(e,t){return new rn(e,2,t,Se.min(),Se.min(),Dn.empty(),0)}static newUnknownDocument(e,t){return new rn(e,3,t,Se.min(),Se.min(),Dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ed{constructor(e,t){this.position=e,this.inclusive=t}}function zE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=Na(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function $E(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ru{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class DI{}class It extends DI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tN(e,t,r):t==="array-contains"?new iN(e,r):t==="in"?new sN(e,r):t==="not-in"?new oN(e,r):t==="array-contains-any"?new aN(e,r):new It(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nN(e,r):new rN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Na(t,this.value)):t!==null&&ps(this.value)===ps(t)&&this.matchesComparison(Na(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends DI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new mr(e,t)}matches(e){return OI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function OI(n){return n.op==="and"}function bI(n){return eN(n)&&OI(n)}function eN(n){for(const e of n.filters)if(e instanceof mr)return!1;return!0}function Tm(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+xa(n.value);if(bI(n))return n.filters.map((e=>Tm(e))).join(",");{const e=n.filters.map((t=>Tm(t))).join(",");return`${n.op}(${e})`}}function LI(n,e){return n instanceof It?(function(r,s){return s instanceof It&&r.op===s.op&&r.field.isEqual(s.field)&&Mr(r.value,s.value)})(n,e):n instanceof mr?(function(r,s){return s instanceof mr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&LI(u,s.filters[d])),!0):!1})(n,e):void we(19439)}function MI(n){return n instanceof It?(function(t){return`${t.field.canonicalString()} ${t.op} ${xa(t.value)}`})(n):n instanceof mr?(function(t){return t.op.toString()+" {"+t.getFilters().map(MI).join(" ,")+"}"})(n):"Filter"}class tN extends It{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class nN extends It{constructor(e,t){super(e,"in",t),this.keys=VI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class rN extends It{constructor(e,t){super(e,"not-in",t),this.keys=VI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function VI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class iN extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gg(t)&&Cu(t.arrayValue,this.value)}}class sN extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cu(this.value.arrayValue,t)}}class oN extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cu(this.value.arrayValue,t)}}class aN extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Cu(this.value.arrayValue,r)))}}/**
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
 */class lN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function WE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new lN(n,e,t,r,s,a,u)}function _g(n){const e=Ce(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Tm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Vd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>xa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>xa(r))).join(",")),e.Pe=t}return e.Pe}function yg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Z1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!LI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$E(n.startAt,e.startAt)&&$E(n.endAt,e.endAt)}function Im(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function uN(n,e,t,r,s,a,u,d){return new Ga(n,e,t,r,s,a,u,d)}function vg(n){return new Ga(n)}function HE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function FI(n){return n.collectionGroup!==null}function uu(n){const e=Ce(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ot(Qt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Ru(a,r))})),t.has(Qt.keyField().canonicalString())||e.Te.push(new Ru(Qt.keyField(),r))}return e.Te}function Dr(n){const e=Ce(n);return e.Ie||(e.Ie=cN(e,uu(n))),e.Ie}function cN(n,e){if(n.limitType==="F")return WE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Ru(s.field,a)}));const t=n.endAt?new ed(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ed(n.startAt.position,n.startAt.inclusive):null;return WE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Sm(n,e){const t=n.filters.concat([e]);return new Ga(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function td(n,e,t){return new Ga(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ud(n,e){return yg(Dr(n),Dr(e))&&n.limitType===e.limitType}function UI(n){return`${_g(Dr(n))}|lt:${n.limitType}`}function pa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>MI(s))).join(", ")}]`),Vd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>xa(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>xa(s))).join(",")),`Target(${r})`})(Dr(n))}; limitType=${n.limitType})`}function jd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of uu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=zE(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,uu(r),s)||r.endAt&&!(function(u,d,f){const m=zE(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,uu(r),s))})(n,e)}function hN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jI(n){return(e,t)=>{let r=!1;for(const s of uu(n)){const a=dN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function dN(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Na(f,m):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return II(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Rt(_e.comparator);function _i(){return fN}const BI=new Rt(_e.comparator);function nu(...n){let e=BI;for(const t of n)e=e.insert(t.key,t);return e}function zI(n){let e=BI;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Zs(){return cu()}function $I(){return cu()}function cu(){return new mo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pN=new Rt(_e.comparator),mN=new Ot(_e.comparator);function Le(...n){let e=mN;for(const t of n)e=e.add(t);return e}const gN=new Ot(ke);function _N(){return gN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xh(e)?"-0":e}}function WI(n){return{integerValue:""+n}}function yN(n,e){return H1(e)?WI(e):Eg(n,e)}/**
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
 */class Bd{constructor(){this._=void 0}}function vN(n,e,t){return n instanceof nd?(function(s,a){const u={fields:{[RI]:{stringValue:CI},[kI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&mg(a)&&(a=Fd(a)),a&&(u.fields[AI]=a),{mapValue:u}})(t,e):n instanceof Au?qI(n,e):n instanceof ku?GI(n,e):(function(s,a){const u=HI(s,a),d=qE(u)+qE(s.Ee);return wm(u)&&wm(s.Ee)?WI(d):Eg(s.serializer,d)})(n,e)}function EN(n,e,t){return n instanceof Au?qI(n,e):n instanceof ku?GI(n,e):t}function HI(n,e){return n instanceof rd?(function(r){return wm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class nd extends Bd{}class Au extends Bd{constructor(e){super(),this.elements=e}}function qI(n,e){const t=KI(e);for(const r of n.elements)t.some((s=>Mr(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ku extends Bd{constructor(e){super(),this.elements=e}}function GI(n,e){let t=KI(e);for(const r of n.elements)t=t.filter((s=>!Mr(s,r)));return{arrayValue:{values:t}}}class rd extends Bd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function qE(n){return _t(n.integerValue||n.doubleValue)}function KI(n){return gg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Au&&s instanceof Au||r instanceof ku&&s instanceof ku?Pa(r.elements,s.elements,Mr):r instanceof rd&&s instanceof rd?Mr(r.Ee,s.Ee):r instanceof nd&&s instanceof nd})(n.transform,e.transform)}class TN{constructor(e,t){this.version=e,this.transformResults=t}}class hi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hi}static exists(e){return new hi(void 0,e)}static updateTime(e){return new hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zd{}function QI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new XI(n.key,hi.none()):new $d(n.key,n.data,hi.none());{const t=n.data,r=Dn.empty();let s=new Ot(Qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new go(n.key,r,new cr(s.toArray()),hi.none())}}function IN(n,e,t){n instanceof $d?(function(s,a,u){const d=s.value.clone(),f=KE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof go?(function(s,a,u){if(!Mh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=KE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(YI(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function hu(n,e,t,r){return n instanceof $d?(function(a,u,d,f){if(!Mh(a.precondition,u))return d;const m=a.value.clone(),v=QE(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof go?(function(a,u,d,f){if(!Mh(a.precondition,u))return d;const m=QE(a.fieldTransforms,f,u),v=u.data;return v.setAll(YI(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Mh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function SN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=HI(r.transform,s||null);a!=null&&(t===null&&(t=Dn.empty()),t.set(r.field,a))}return t||null}function GE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pa(r,s,((a,u)=>wN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $d extends zd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class go extends zd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function YI(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function KE(n,e,t){const r=new Map;qe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,EN(u,d,t[s]))}return r}function QE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,vN(a,u,e))}return r}class XI extends zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CN extends zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&IN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$I();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=QI(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&Pa(this.mutations,e.mutations,((t,r)=>GE(t,r)))&&Pa(this.baseMutations,e.baseMutations,((t,r)=>GE(t,r)))}}class wg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){qe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return pN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new wg(e,t,r,s)}}/**
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
 */class AN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Ue;function PN(n){switch(n){case G.OK:return we(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function JI(n){if(n===void 0)return gi("GRPC error has no .code"),G.UNKNOWN;switch(n){case wt.OK:return G.OK;case wt.CANCELLED:return G.CANCELLED;case wt.UNKNOWN:return G.UNKNOWN;case wt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case wt.INTERNAL:return G.INTERNAL;case wt.UNAVAILABLE:return G.UNAVAILABLE;case wt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case wt.NOT_FOUND:return G.NOT_FOUND;case wt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case wt.ABORTED:return G.ABORTED;case wt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case wt.DATA_LOSS:return G.DATA_LOSS;default:return we(39323,{code:n})}}(Ue=wt||(wt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const NN=new ns([4294967295,4294967295],0);function YE(n){const e=vI().encode(n),t=new hI;return t.update(e),new Uint8Array(t.digest())}function XE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ns([t,r],0),new ns([s,a],0)]}class Tg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ru(`Invalid padding: ${t}`);if(r<0)throw new ru(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ru(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ru(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ns.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(ns.fromNumber(r)));return s.compare(NN)===1&&(s=new ns([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=YE(e),[r,s]=XE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Tg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=YE(e),[r,s]=XE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ru extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,qu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wd(Se.min(),s,new Rt(ke),_i(),Le())}}class qu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qu(r,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class ZI{constructor(e,t){this.targetId=e,this.De=t}}class e0{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class JE{constructor(){this.ve=0,this.Ce=ZE(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),r=Le();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:we(38017,{changeType:a})}})),new qu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ZE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class xN{constructor(e){this.We=e,this.Ge=new Map,this.ze=_i(),this.je=wh(),this.Je=wh(),this.He=new Rt(ke)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Im(a))if(r===0){const u=new _e(a.path);this.Xe(t,u,rn.newNoDocument(u,Se.min()))}else qe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=fs(r).toUint8Array()}catch(f){if(f instanceof SI)return cs("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Tg(u,s,a)}catch(f){return cs(f instanceof ru?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Im(d.target)){const f=new _e(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,rn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Le();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Wd(e,t,this.He,this.ze,r);return this.ze=_i(),this.je=wh(),this.Je=wh(),this.He=new Rt(ke),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new JE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ot(ke),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ot(ke),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new JE),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function wh(){return new Rt(_e.comparator)}function ZE(){return new Rt(_e.comparator)}const DN={asc:"ASCENDING",desc:"DESCENDING"},ON={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bN={and:"AND",or:"OR"};class LN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cm(n,e){return n.useProto3Json||Vd(e)?e:{value:e}}function id(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function MN(n,e){return id(n,e.toTimestamp())}function Or(n){return qe(!!n,49232),Se.fromTimestamp((function(t){const r=ds(t);return new st(r.seconds,r.nanos)})(n))}function Ig(n,e){return Rm(n,e).canonicalString()}function Rm(n,e){const t=(function(s){return new tt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function n0(n){const e=tt.fromString(n);return qe(a0(e),10190,{key:e.toString()}),e}function Am(n,e){return Ig(n.databaseId,e.path)}function Qp(n,e){const t=n0(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(i0(t))}function r0(n,e){return Ig(n.databaseId,e)}function VN(n){const e=n0(n);return e.length===4?tt.emptyPath():i0(e)}function km(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function i0(n){return qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ew(n,e,t){return{name:Am(n,e),fields:t.value.mapValue.fields}}function FN(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:we(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,v){return m.useProto3Json?(qe(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const v=m.code===void 0?G.UNKNOWN:JI(m.code);return new ae(v,m.message||"")})(u);t=new e0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qp(n,r.document.name),a=Or(r.document.updateTime),u=r.document.createTime?Or(r.document.createTime):Se.min(),d=new Dn({mapValue:{fields:r.document.fields}}),f=rn.newFoundDocument(s,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Vh(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qp(n,r.document),a=r.readTime?Or(r.readTime):Se.min(),u=rn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Vh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qp(n,r.document),a=r.removedTargetIds||[];t=new Vh([],a,s,null)}else{if(!("filter"in e))return we(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new kN(s,a),d=r.targetId;t=new ZI(d,u)}}return t}function UN(n,e){let t;if(e instanceof $d)t={update:ew(n,e.key,e.value)};else if(e instanceof XI)t={delete:Am(n,e.key)};else if(e instanceof go)t={update:ew(n,e.key,e.data),updateMask:KN(e.fieldMask)};else{if(!(e instanceof CN))return we(16599,{Rt:e.type});t={verify:Am(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof nd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Au)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ku)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof rd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw we(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:MN(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:we(27497)})(n,e.precondition)),t}function jN(n,e){return n&&n.length>0?(qe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?Or(s.updateTime):Or(a);return u.isEqual(Se.min())&&(u=Or(a)),new TN(u,s.transformResults||[])})(t,e)))):[]}function BN(n,e){return{documents:[r0(n,e.path)]}}function zN(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=r0(n,s);const a=(function(m){if(m.length!==0)return o0(mr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((v=>(function(T){return{field:ma(T.field),direction:HN(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Cm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function $N(n){let e=VN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){qe(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(E){const T=s0(E);return T instanceof mr&&bI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(L){return new Ru(ga(L.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,Vd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,k=E.values||[];return new ed(k,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,k=E.values||[];return new ed(k,T)})(t.endAt)),uN(e,s,u,a,d,"F",f,m)}function WN(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function s0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ga(t.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ga(t.unaryFilter.field);return It.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ga(t.unaryFilter.field);return It.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ga(t.unaryFilter.field);return It.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return It.create(ga(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return mr.create(t.compositeFilter.filters.map((r=>s0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function HN(n){return DN[n]}function qN(n){return ON[n]}function GN(n){return bN[n]}function ma(n){return{fieldPath:n.canonicalString()}}function ga(n){return Qt.fromServerFormat(n.fieldPath)}function o0(n){return n instanceof It?(function(t){if(t.op==="=="){if(BE(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NAN"}};if(jE(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(BE(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NOT_NAN"}};if(jE(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ma(t.field),op:qN(t.op),value:t.value}}})(n):n instanceof mr?(function(t){const r=t.getFilters().map((s=>o0(s)));return r.length===1?r[0]:{compositeFilter:{op:GN(t.op),filters:r}}})(n):we(54877,{filter:n})}function KN(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function a0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r,s,a=Se.min(),u=Se.min(),d=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.gt=e}}function YN(n){const e=$N({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?td(e,e.limit,"L"):e}/**
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
 */class XN{constructor(){this.Dn=new JN}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(hs.min())}updateCollectionGroup(e,t,r){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class JN{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ot(tt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ot(tt.comparator)).toArray()}}/**
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
 */const tw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l0=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(l0,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Da(0)}static ur(){return new Da(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="LruGarbageCollector",ZN=1048576;function rw([n,e],[t,r]){const s=ke(n,t);return s===0?ke(e,r):s}class ex{constructor(e){this.Tr=e,this.buffer=new Ot(rw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();rw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(nw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qa(t)?ue(nw,"Ignoring IndexedDB error during garbage collection: ",t):await Ha(t)}await this.Rr(3e5)}))}}class nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Md.ue);const r=new ex(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(tw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),fa()<=be.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function rx(n,e){return new nx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.changes=new mo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&hu(r.mutation,s,cr.empty(),st.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Le()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Le()){const s=Zs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=nu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Zs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Le())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=_i();const u=cu(),d=(function(){return cu()})();return t.forEach(((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof go)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),hu(v.mutation,m,v.mutation.getFieldMask(),st.now())):u.set(m.key,cr.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,v)=>u.set(m,v))),t.forEach(((m,v)=>{var E;return d.set(m,new sx(v,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=cu();let s=new Rt(((u,d)=>u-d)),a=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||cr.empty();v=d.applyToLocalView(m,v),r.set(f,v);const E=(s.get(d.batchId)||Le()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,E=$I();v.forEach((T=>{if(!a.has(T)){const k=QI(t.get(T),r.get(T));k!==null&&E.set(T,k),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return Q.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):FI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Q.resolve(Zs());let d=Tu,f=a;return u.next((m=>Q.forEach(m,((v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Le()))).next((v=>({batchId:d,changes:zI(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let s=nu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=nu();return this.indexManager.getCollectionParents(e,a).next((d=>Q.forEach(d,(f=>{const m=(function(E,T){return new Ga(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((v=>{v.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,rn.newInvalidDocument(v)))}));let d=nu();return u.forEach(((f,m)=>{const v=a.get(f);v!==void 0&&hu(v.mutation,m,cr.empty(),st.now()),jd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Or(s.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:YN(s.bundledQuery),readTime:Or(s.readTime)}})(t)),Q.resolve()}}/**
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
 */class lx{constructor(){this.overlays=new Rt(_e.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zs();return Q.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Q.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Q.resolve()}getOverlaysForCollection(e,t,r){const s=Zs(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Rt(((m,v)=>m-v));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=Zs(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Zs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,v)=>d.set(m,v))),!(d.size()>=s)););return Q.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new AN(t,r));let a=this.kr.get(t);a===void 0&&(a=Le(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class ux{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.qr=new Ot(Bt.Qr),this.$r=new Ot(Bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Bt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Bt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new _e(new tt([])),r=new Bt(t,e),s=new Bt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new tt([])),r=new Bt(t,e),s=new Bt(t,e+1);let a=Le();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Bt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||ke(e.Hr,t.Hr)}static Ur(e,t){return ke(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ot(Bt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new RN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Bt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(u)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?pg:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Bt(t,0),s=new Bt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ot(ke);return t.forEach((s=>{const a=new Bt(s,0),u=new Bt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Bt(new _e(a),0);let d=new Ot(ke);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),Q.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){qe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Q.forEach(t.mutations,(s=>{const a=new Bt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Bt(t,0),s=this.Yr.firstAfterOrEqual(r);return Q.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.ni=e,this.docs=(function(){return new Rt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Q.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let r=_i();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():rn.newInvalidDocument(s))})),Q.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=_i();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||B1(j1(v),r)<=0||(s.has(v.key)||jd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Q.resolve(a)}getAllFromCollectionGroup(e,t,r,s){we(9500)}ri(e,t){return Q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new dx(this)}getSize(e){return Q.resolve(this.size)}}class dx extends ix{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.persistence=e,this.ii=new mo((t=>_g(t)),yg),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new Sg,this.targetCount=0,this._i=Da.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Da(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Q.waitFor(a).next((()=>s))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Q.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Q.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Q.resolve(r)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Md(0),this.ci=!1,this.ci=!0,this.li=new ux,this.referenceDelegate=e(this),this.hi=new fx(this),this.indexManager=new XN,this.remoteDocumentCache=(function(s){return new hx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new QN(t),this.Ti=new ax(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new cx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const s=new px(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class px extends $1{constructor(e){super(),this.currentSequenceNumber=e}}class Cg{constructor(e){this.persistence=e,this.Ai=new Sg,this.Ri=null}static Vi(e){return new Cg(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Q.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(r=>{const s=_e.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class sd{constructor(e,t){this.persistence=e,this.gi=new mo((r=>q1(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=rx(this,t)}static Vi(e,t){return new sd(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Q.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Se.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bh(e.data.value)),t}Sr(e,t,r){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Le(),s=Le();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Rg(e,t.fromCache,r,s)}}/**
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
 */class mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return GR()?8:W1(sn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new mx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(fa()<=be.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",pa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(fa()<=be.DEBUG&&ue("QueryEngine","Query:",pa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(fa()<=be.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",pa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(t))):Q.resolve())}ps(e,t){if(HE(t))return Q.resolve(null);let r=Dr(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=td(t,null,"F"),r=Dr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Le(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,td(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return HE(t)||s.isEqual(Se.min())?Q.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Q.resolve(null):(fa()<=be.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pa(t)),this.vs(e,u,t,U1(s,Tu)).next((d=>d)))}))}bs(e,t){let r=new Ot(jI(e));return t.forEach(((s,a)=>{jd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return fa()<=be.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",pa(t)),this.gs.getDocumentsMatchingQuery(e,t,hs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="LocalStore",_x=3e8;class yx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Rt(ke),this.Ms=new mo((a=>_g(a)),yg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ox(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function vx(n,e,t,r){return new yx(n,e,t,r)}async function c0(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Le();for(const m of s){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Ex(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,v){const E=m.batch,T=E.keys();let k=Q.resolve();return T.forEach((L=>{k=k.next((()=>v.getEntry(f,L))).next((z=>{const B=m.docVersions.get(L);qe(B!==null,48541),z.version.compareTo(B)<0&&(E.applyToRemoteDocument(z,m),z.isValidDocument()&&(z.setReadTime(m.commitVersion),v.addEntry(z)))}))})),k.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Le();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function h0(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function wx(n,e){const t=Ce(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((v,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,E))));let k=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?k=k.withResumeToken(Yt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(v.resumeToken,r)),s=s.insert(E,k),(function(z,B,ee){return z.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=_x?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(T,k,v)&&d.push(t.hi.updateTargetData(a,k))}));let f=_i(),m=Le();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(Tx(a,u,e.documentUpdates).next((v=>{f=v.Ls,m=v.ks}))),!r.isEqual(Se.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return Q.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Tx(n,e,t){let r=Le(),s=Le();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=_i();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Se.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ue(Ag,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Ix(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=pg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Sx(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Q.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new Ji(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Pm(n,e,t){const r=Ce(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!qa(u))throw u;ue(Ag,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function iw(n,e,t){const r=Ce(n);let s=Se.min(),a=Le();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,v){const E=Ce(f),T=E.Ms.get(v);return T!==void 0?Q.resolve(E.Fs.get(T)):E.hi.getTargetData(m,v)})(r,u,Dr(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Se.min(),t?a:Le()))).next((d=>(Cx(r,hN(e),d),{documents:d,qs:a})))))}function Cx(n,e,t){let r=n.xs.get(e)||Se.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class sw{constructor(){this.activeTargetIds=_N()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rx{constructor(){this.Fo=new sw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new sw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ax{xo(e){}shutdown(){}}/**
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
 */const ow="ConnectivityMonitor";class aw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(ow,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(ow,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Th=null;function Nm(){return Th===null?Th=(function(){return 268435456+Math.round(2147483648*Math.random())})():Th++,"0x"+Th.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="RestConnection",kx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Px{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Jh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Nm(),d=this.Go(e,t.toUriEncodedString());ue(Yp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),v=Vr(m);return this.jo(e,d,f,r,v).then((E=>(ue(Yp,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw cs(Yp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=kx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="WebChannelConnection";class xx extends Px{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Nm();return new Promise(((d,f)=>{const m=new dI;m.setWithCredentials(!0),m.listenOnce(fI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Oh.NO_ERROR:const E=m.getResponseJson();ue(tn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Oh.TIMEOUT:ue(tn,`RPC '${e}' ${u} timed out`),f(new ae(G.DEADLINE_EXCEEDED,"Request time out"));break;case Oh.HTTP_ERROR:const T=m.getStatus();if(ue(tn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let k=m.getResponseJson();Array.isArray(k)&&(k=k[0]);const L=k==null?void 0:k.error;if(L&&L.status&&L.message){const z=(function(ee){const K=ee.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(K)>=0?K:G.UNKNOWN})(L.status);f(new ae(z,L.message))}else f(new ae(G.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new ae(G.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ue(tn,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(s);ue(tn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",v,r,15)}))}P_(e,t,r){const s=Nm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=gI(),d=mI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ue(tn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const E=u.createWebChannel(v,f);this.T_(E);let T=!1,k=!1;const L=new Nx({Ho:B=>{k?ue(tn,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(T||(ue(tn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),ue(tn,`RPC '${e}' stream ${s} sending:`,B),E.send(B))},Yo:()=>E.close()}),z=(B,ee,K)=>{B.listen(ee,(se=>{try{K(se)}catch(q){setTimeout((()=>{throw q}),0)}}))};return z(E,tu.EventType.OPEN,(()=>{k||(ue(tn,`RPC '${e}' stream ${s} transport opened.`),L.s_())})),z(E,tu.EventType.CLOSE,(()=>{k||(k=!0,ue(tn,`RPC '${e}' stream ${s} transport closed`),L.__(),this.I_(E))})),z(E,tu.EventType.ERROR,(B=>{k||(k=!0,cs(tn,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),L.__(new ae(G.UNAVAILABLE,"The operation could not be completed")))})),z(E,tu.EventType.MESSAGE,(B=>{var ee;if(!k){const K=B.data[0];qe(!!K,16349);const se=K,q=(se==null?void 0:se.error)||((ee=se[0])===null||ee===void 0?void 0:ee.error);if(q){ue(tn,`RPC '${e}' stream ${s} received error:`,q);const Re=q.status;let pe=(function(A){const D=wt[A];if(D!==void 0)return JI(D)})(Re),x=q.message;pe===void 0&&(pe=G.INTERNAL,x="Unknown error status: "+Re+" with message "+q.message),k=!0,L.__(new ae(pe,x)),E.close()}else ue(tn,`RPC '${e}' stream ${s} received:`,K),L.a_(K)}})),z(d,pI.STAT_EVENT,(B=>{B.stat===_m.PROXY?ue(tn,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===_m.NOPROXY&&ue(tn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{L.o_()}),0),L}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Xp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){return new LN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="PersistentStream";class f0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new d0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(gi(t.toString()),gi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new ae(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(lw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(lw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dx extends f0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=FN(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Se.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Se.min():u.readTime?Or(u.readTime):Se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=km(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Im(f)?{documents:BN(a,f)}:{query:zN(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=t0(a,u.resumeToken);const m=Cm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Se.min())>0){d.readTime=id(a,u.snapshotVersion.toTimestamp());const m=Cm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=WN(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=km(this.serializer),t.removeTarget=e,this.k_(t)}}class Ox extends f0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=jN(e.writeResults,e.commitTime),r=Or(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=km(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>UN(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{}class Lx extends bx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Rm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ae(G.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Rm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(G.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Mx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gi(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="RemoteStore";class Vx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{_o(this)&&(ue(ao,"Restarting streams for network reachability change."),await(async function(f){const m=Ce(f);m.Ia.add(4),await Gu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await qd(m)})(this))}))})),this.Aa=new Mx(r,s)}}async function qd(n){if(_o(n))for(const e of n.da)await e(!0)}async function Gu(n){for(const e of n.da)await e(!1)}function p0(n,e){const t=Ce(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),xg(t)?Ng(t):Ka(t).x_()&&Pg(t,e))}function kg(n,e){const t=Ce(n),r=Ka(t);t.Ta.delete(e),r.x_()&&m0(t,e),t.Ta.size===0&&(r.x_()?r.B_():_o(t)&&t.Aa.set("Unknown"))}function Pg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ka(n).H_(e)}function m0(n,e){n.Ra.$e(e),Ka(n).Y_(e)}function Ng(n){n.Ra=new xN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ka(n).start(),n.Aa.aa()}function xg(n){return _o(n)&&!Ka(n).M_()&&n.Ta.size>0}function _o(n){return Ce(n).Ia.size===0}function g0(n){n.Ra=void 0}async function Fx(n){n.Aa.set("Online")}async function Ux(n){n.Ta.forEach(((e,t)=>{Pg(n,e)}))}async function jx(n,e){g0(n),xg(n)?(n.Aa.la(e),Ng(n)):n.Aa.set("Unknown")}async function Bx(n,e,t){if(n.Aa.set("Online"),e instanceof e0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ue(ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await od(n,r)}else if(e instanceof Vh?n.Ra.Ye(e):e instanceof ZI?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Se.min()))try{const r=await h0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(m);v&&a.Ta.set(m,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(Yt.EMPTY_BYTE_STRING,v.snapshotVersion)),m0(a,f);const E=new Ji(v.target,f,m,v.sequenceNumber);Pg(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ue(ao,"Failed to raise snapshot:",r),await od(n,r)}}async function od(n,e,t){if(!qa(e))throw e;n.Ia.add(1),await Gu(n),n.Aa.set("Offline"),t||(t=()=>h0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(ao,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qd(n)}))}function _0(n,e){return e().catch((t=>od(n,t,e)))}async function Gd(n){const e=Ce(n),t=ms(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:pg;for(;zx(e);)try{const s=await Ix(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,$x(e,s)}catch(s){await od(e,s)}y0(e)&&v0(e)}function zx(n){return _o(n)&&n.Pa.length<10}function $x(n,e){n.Pa.push(e);const t=ms(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function y0(n){return _o(n)&&!ms(n).M_()&&n.Pa.length>0}function v0(n){ms(n).start()}async function Wx(n){ms(n).na()}async function Hx(n){const e=ms(n);for(const t of n.Pa)e.X_(t.mutations)}async function qx(n,e,t){const r=n.Pa.shift(),s=wg.from(r,e,t);await _0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Gd(n)}async function Gx(n,e){e&&ms(n).Z_&&await(async function(r,s){if((function(u){return PN(u)&&u!==G.ABORTED})(s.code)){const a=r.Pa.shift();ms(r).N_(),await _0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Gd(r)}})(n,e),y0(n)&&v0(n)}async function uw(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),ue(ao,"RemoteStore received new credentials");const r=_o(t);t.Ia.add(3),await Gu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qd(t)}async function Kx(n,e){const t=Ce(n);e?(t.Ia.delete(2),await qd(t)):e||(t.Ia.add(2),await Gu(t),t.Aa.set("Unknown"))}function Ka(n){return n.Va||(n.Va=(function(t,r,s){const a=Ce(t);return a.ia(),new Dx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Fx.bind(null,n),e_:Ux.bind(null,n),n_:jx.bind(null,n),J_:Bx.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),xg(n)?Ng(n):n.Aa.set("Unknown")):(await n.Va.stop(),g0(n))}))),n.Va}function ms(n){return n.ma||(n.ma=(function(t,r,s){const a=Ce(t);return a.ia(),new Ox(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Wx.bind(null,n),n_:Gx.bind(null,n),ea:Hx.bind(null,n),ta:qx.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Gd(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(ao,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Dg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Og(n,e){if(gi("AsyncQueue",`${e}: ${n}`),qa(n))return new ae(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{static emptySet(e){return new Ta(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=nu(),this.sortedSet=new Rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ta)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ta;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.fa=new Rt(_e.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):we(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Oa{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Oa(e,t,Ta.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ud(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Yx{constructor(){this.queries=hw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Ce(t),a=s.queries;s.queries=hw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new ae(G.ABORTED,"Firestore shutting down"))}}function hw(){return new mo((n=>UI(n)),Ud)}async function E0(n,e){const t=Ce(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new Qx,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Og(u,`Initialization of query '${pa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&bg(t)}async function w0(n,e){const t=Ce(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Xx(n,e){const t=Ce(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&bg(t)}function Jx(n,e,t){const r=Ce(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function bg(n){n.Da.forEach((e=>{e.next()}))}var xm,dw;(dw=xm||(xm={})).Fa="default",dw.Cache="cache";class T0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Oa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Oa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.key=e}}class S0{constructor(e){this.key=e}}class Zx{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=jI(e),this.eu=new Ta(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new cw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((v,E)=>{const T=s.get(v),k=jd(this.query,E)?E:null,L=!!T&&this.mutatedKeys.has(T.key),z=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let B=!1;T&&k?T.data.isEqual(k.data)?L!==z&&(r.track({type:3,doc:k}),B=!0):this.iu(T,k)||(r.track({type:2,doc:k}),B=!0,(f&&this.Xa(k,f)>0||m&&this.Xa(k,m)<0)&&(d=!0)):!T&&k?(r.track({type:0,doc:k}),B=!0):T&&!k&&(r.track({type:1,doc:T}),B=!0,(f||m)&&(d=!0)),B&&(k?(u=u.add(k),a=z?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,E)=>(function(k,L){const z=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{At:B})}};return z(k)-z(L)})(v.type,E.type)||this.Xa(v.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Oa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new cw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new S0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new I0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Oa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Lg="SyncEngine";class eD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tD{constructor(e){this.key=e,this.lu=!1}}class nD{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new mo((d=>UI(d)),Ud),this.Tu=new Map,this.Iu=new Set,this.du=new Rt(_e.comparator),this.Eu=new Map,this.Au=new Sg,this.Ru={},this.Vu=new Map,this.mu=Da.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rD(n,e,t=!0){const r=N0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await C0(r,e,t,!0),s}async function iD(n,e){const t=N0(n);await C0(t,e,!0,!1)}async function C0(n,e,t,r){const s=await Sx(n.localStore,Dr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await sD(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&p0(n.remoteStore,s),d}async function sD(n,e,t,r,s){n.gu=(E,T,k)=>(async function(z,B,ee,K){let se=B.view.nu(ee);se.Ds&&(se=await iw(z.localStore,B.query,!1).then((({documents:x})=>B.view.nu(x,se))));const q=K&&K.targetChanges.get(B.targetId),Re=K&&K.targetMismatches.get(B.targetId)!=null,pe=B.view.applyChanges(se,z.isPrimaryClient,q,Re);return pw(z,B.targetId,pe._u),pe.snapshot})(n,E,T,k);const a=await iw(n.localStore,e,!0),u=new Zx(e,a.qs),d=u.nu(a.documents),f=qu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);pw(n,t,m._u);const v=new eD(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function oD(n,e,t){const r=Ce(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Ud(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&kg(r.remoteStore,s.targetId),Dm(r,s.targetId)})).catch(Ha)):(Dm(r,s.targetId),await Pm(r.localStore,s.targetId,!0))}async function aD(n,e){const t=Ce(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),kg(t.remoteStore,r.targetId))}async function lD(n,e,t){const r=mD(n);try{const s=await(function(u,d){const f=Ce(u),m=st.now(),v=d.reduce(((k,L)=>k.add(L.key)),Le());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let L=_i(),z=Le();return f.Os.getEntries(k,v).next((B=>{L=B,L.forEach(((ee,K)=>{K.isValidDocument()||(z=z.add(ee))}))})).next((()=>f.localDocuments.getOverlayedDocuments(k,L))).next((B=>{E=B;const ee=[];for(const K of d){const se=SN(K,E.get(K.key).overlayedDocument);se!=null&&ee.push(new go(K.key,se,xI(se.value.mapValue),hi.exists(!0)))}return f.mutationQueue.addMutationBatch(k,m,ee,d)})).next((B=>{T=B;const ee=B.applyToLocalDocumentSet(E,z);return f.documentOverlayCache.saveOverlays(k,B.batchId,ee)}))})).then((()=>({batchId:T.batchId,changes:zI(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Rt(ke)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Ku(r,s.changes),await Gd(r.remoteStore)}catch(s){const a=Og(s,"Failed to persist write");t.reject(a)}}async function R0(n,e){const t=Ce(n);try{const r=await wx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?qe(u.lu,14607):s.removedDocuments.size>0&&(qe(u.lu,42227),u.lu=!1))})),await Ku(t,r,e)}catch(r){await Ha(r)}}function fw(n,e,t){const r=Ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Ce(u);f.onlineState=d;let m=!1;f.queries.forEach(((v,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&bg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uD(n,e,t){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Rt(_e.comparator);u=u.insert(a,rn.newNoDocument(a,Se.min()));const d=Le().add(a),f=new Wd(Se.min(),new Map,new Rt(ke),u,d);await R0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Mg(r)}else await Pm(r.localStore,e,!1).then((()=>Dm(r,e,t))).catch(Ha)}async function cD(n,e){const t=Ce(n),r=e.batch.batchId;try{const s=await Ex(t.localStore,e);k0(t,r,null),A0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ku(t,s)}catch(s){await Ha(s)}}async function hD(n,e,t){const r=Ce(n);try{const s=await(function(u,d){const f=Ce(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(qe(E!==null,37113),v=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v))).next((()=>f.localDocuments.getDocuments(m,v)))}))})(r.localStore,e);k0(r,e,t),A0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ku(r,s)}catch(s){await Ha(s)}}function A0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function k0(n,e,t){const r=Ce(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Dm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||P0(n,r)}))}function P0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(kg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Mg(n))}function pw(n,e,t){for(const r of t)r instanceof I0?(n.Au.addReference(r.key,e),dD(n,r)):r instanceof S0?(ue(Lg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||P0(n,r.key)):we(19791,{yu:r})}function dD(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ue(Lg,"New document in limbo: "+t),n.Iu.add(r),Mg(n))}function Mg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(tt.fromString(e)),r=n.mu.next();n.Eu.set(r,new tD(t)),n.du=n.du.insert(t,r),p0(n.remoteStore,new Ji(Dr(vg(t.path)),r,"TargetPurposeLimboResolution",Md.ue))}}async function Ku(n,e,t){const r=Ce(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var v;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Rg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const v=Ce(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>Q.forEach(m,(T=>Q.forEach(T.Is,(k=>v.persistence.referenceDelegate.addReference(E,T.targetId,k))).next((()=>Q.forEach(T.ds,(k=>v.persistence.referenceDelegate.removeReference(E,T.targetId,k)))))))))}catch(E){if(!qa(E))throw E;ue(Ag,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const k=v.Fs.get(T),L=k.snapshotVersion,z=k.withLastLimboFreeSnapshotVersion(L);v.Fs=v.Fs.insert(T,z)}}})(r.localStore,a))}async function fD(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){ue(Lg,"User change. New user:",e.toKey());const r=await c0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new ae(G.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ku(t,r.Bs)}}function pD(n,e){const t=Ce(n),r=t.Eu.get(e);if(r&&r.lu)return Le().add(r.key);{let s=Le();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function N0(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=R0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uD.bind(null,e),e.hu.J_=Xx.bind(null,e.eventManager),e.hu.pu=Jx.bind(null,e.eventManager),e}function mD(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hD.bind(null,e),e}class ad{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return vx(this.persistence,new gx,e.initialUser,this.serializer)}Du(e){return new u0(Cg.Vi,this.serializer)}bu(e){return new Rx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ad.provider={build:()=>new ad};class gD extends ad{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){qe(this.persistence.referenceDelegate instanceof sd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new tx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new u0((r=>sd.Vi(r,t)),this.serializer)}}class Om{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fD.bind(null,this.syncEngine),await Kx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Yx})()}createDatastore(e){const t=Hd(e.databaseInfo.databaseId),r=(function(a){return new xx(a)})(e.databaseInfo);return(function(a,u,d,f){return new Lx(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new Vx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>fw(this.syncEngine,t,0)),(function(){return aw.C()?new aw:new Ax})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,v){const E=new nD(s,a,u,d,f,m);return v&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Ce(s);ue(ao,"RemoteStore shutting down."),a.Ia.add(5),await Gu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Om.provider={build:()=>new Om};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class x0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):gi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="FirestoreClient";class _D{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=nn.UNAUTHENTICATED,this.clientId=fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ue(gs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ue(gs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Og(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Jp(n,e){n.asyncQueue.verifyOperationInProgress(),ue(gs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await c0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{cs("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{cs("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function mw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yD(n);ue(gs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>uw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>uw(e.remoteStore,s))),n._onlineComponents=e}async function yD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(gs,"Using user provided OfflineComponentProvider");try{await Jp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;cs("Error using user provided cache. Falling back to memory cache: "+t),await Jp(n,new ad)}}else ue(gs,"Using default OfflineComponentProvider"),await Jp(n,new gD(void 0));return n._offlineComponents}async function D0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(gs,"Using user provided OnlineComponentProvider"),await mw(n,n._uninitializedComponentsProvider._online)):(ue(gs,"Using default OnlineComponentProvider"),await mw(n,new Om))),n._onlineComponents}function vD(n){return D0(n).then((e=>e.syncEngine))}async function bm(n){const e=await D0(n),t=e.eventManager;return t.onListen=rD.bind(null,e.syncEngine),t.onUnlisten=oD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aD.bind(null,e.syncEngine),t}function ED(n,e,t={}){const r=new rs;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const v=new x0({next:T=>{v.Ou(),u.enqueueAndForget((()=>w0(a,E))),T.fromCache&&f.source==="server"?m.reject(new ae(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new T0(d,v,{includeMetadataChanges:!0,ka:!0});return E0(a,E)})(await bm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function O0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="firestore.googleapis.com",_w=!0;class yw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=b0,this.ssl=_w}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:_w;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZN)throw new ae(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new k1;switch(r.type){case"firstParty":return new D1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=gw.get(t);r&&(ue("ComponentProvider","Removing Datastore"),gw.delete(t),r.terminate())})(this),Promise.resolve()}}function wD(n,e,t,r={}){var s;n=is(n,Kd);const a=Vr(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Rd(`https://${f}`),Ad("Firestore",!0)),u.host!==b0&&u.host!==f&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!ls(m,d)&&(n._setSettings(m),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=nn.MOCK_USER;else{v=eg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ae(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new nn(T)}n._authCredentials=new P1(new yI(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class Ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Hu(t,Ct._jsonSchema))return new Ct(e,r||null,new _e(tt.fromString(t.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:St("string",Ct._jsonSchemaVersion),referencePath:St("string")};class os extends Ei{constructor(e,t,r){super(e,t,vg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new _e(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function Pu(n,e,...t){if(n=Ke(n),EI("collection","path",e),n instanceof Kd){const r=tt.fromString(e,...t);return xE(r),new os(n,null,r)}{if(!(n instanceof Ct||n instanceof os))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(e,...t));return xE(r),new os(n.firestore,null,r)}}function TD(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=fg.newId()),EI("doc","path",e),n instanceof Kd){const r=tt.fromString(e,...t);return NE(r),new Ct(n,null,new _e(r))}{if(!(n instanceof Ct||n instanceof os))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(e,...t));return NE(r),new Ct(n.firestore,n instanceof os?n.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="AsyncQueue";class Ew{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new d0(this,"async_queue_retry"),this.oc=()=>{const r=Xp();r&&ue(vw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new rs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!qa(e))throw e;ue(vw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,gi("INTERNAL UNHANDLED ERROR: ",ww(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Dg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&we(47125,{hc:ww(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ww(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Tw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Nu extends Kd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ew,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ew(e),this._firestoreClient=void 0,await e}}}function ID(n,e){const t=typeof n=="object"?n:Nd(),r=typeof n=="string"?n:Jh,s=Bu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Zm("firestore");a&&wD(s,...a)}return s}function Vg(n){if(n._terminated)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SD(n),n._firestoreClient}function SD(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,v){return new Q1(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,O0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new _D(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(Yt.fromBase64String(e))}catch(t){throw new ae(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hu(e,Wn._jsonSchema))return Wn.fromBase64String(e.bytes)}}Wn._jsonSchemaVersion="firestore/bytes/1.0",Wn._jsonSchema={type:St("string",Wn._jsonSchemaVersion),bytes:St("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:br._jsonSchemaVersion}}static fromJSON(e){if(Hu(e,br._jsonSchema))return new br(e.latitude,e.longitude)}}br._jsonSchemaVersion="firestore/geoPoint/1.0",br._jsonSchema={type:St("string",br._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hu(e,Lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Lr(e.vectorValues);throw new ae(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lr._jsonSchemaVersion="firestore/vectorValue/1.0",Lr._jsonSchema={type:St("string",Lr._jsonSchemaVersion),vectorValues:St("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/^__.*__$/;class L0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new go(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function M0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:n})}}class Ug{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ug(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ld(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(M0(this.Ec)&&CD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class RD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hd(e)}Dc(e,t,r,s=!1){return new Ug({Ec:e,methodName:t,bc:r,path:Qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V0(n){const e=n._freezeSettings(),t=Hd(n._databaseId);return new RD(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Yd extends Fg{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yd}}function AD(n,e,t,r){const s=n.Dc(1,e,t);U0("Data must be an object, but it was:",s,r);const a=[],u=Dn.empty();ws(r,((f,m)=>{const v=jg(e,f,t);m=Ke(m);const E=s.gc(v);if(m instanceof Yd)a.push(v);else{const T=Qu(m,E);T!=null&&(a.push(v),u.set(v,T))}}));const d=new cr(a);return new L0(u,d,s.fieldTransforms)}function kD(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Iw(e,r,t)],f=[s];if(a.length%2!=0)throw new ae(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Iw(e,a[T])),f.push(a[T+1]);const m=[],v=Dn.empty();for(let T=d.length-1;T>=0;--T)if(!DD(m,d[T])){const k=d[T];let L=f[T];L=Ke(L);const z=u.gc(k);if(L instanceof Yd)m.push(k);else{const B=Qu(L,z);B!=null&&(m.push(k),v.set(k,B))}}const E=new cr(m);return new L0(v,E,u.fieldTransforms)}function PD(n,e,t,r=!1){return Qu(t,n.Dc(r?4:3,e))}function Qu(n,e){if(F0(n=Ke(n)))return U0("Unsupported field value:",e,n),ND(n,e);if(n instanceof Fg)return(function(r,s){if(!M0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=Qu(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=st.fromDate(r);return{timestampValue:id(s.serializer,a)}}if(r instanceof st){const a=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:id(s.serializer,a)}}if(r instanceof br)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:t0(s.serializer,r._byteString)};if(r instanceof Ct){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Ig(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lr)return(function(u,d){return{mapValue:{fields:{[PI]:{stringValue:NI},[Zh]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Eg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ld(r)}`)})(n,e)}function ND(n,e){const t={};return II(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(n,((r,s)=>{const a=Qu(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function F0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof br||n instanceof Wn||n instanceof Ct||n instanceof Fg||n instanceof Lr)}function U0(n,e,t){if(!F0(t)||!wI(t)){const r=Ld(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Iw(n,e,t){if((e=Ke(e))instanceof Qd)return e._internalPath;if(typeof e=="string")return jg(n,e);throw ld("Field path arguments must be of type string or ",n,!1,void 0,t)}const xD=new RegExp("[~\\*/\\[\\]]");function jg(n,e,t){if(e.search(xD)>=0)throw ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qd(...e.split("."))._internalPath}catch{throw ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ld(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ae(G.INVALID_ARGUMENT,d+n+f)}function DD(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OD extends j0{data(){return super.data()}}function Xd(n,e){return typeof e=="string"?jg(n,e):e instanceof Qd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bg{}class zg extends Bg{}function xu(n,e,...t){let r=[];e instanceof Bg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof $g)).length,d=a.filter((f=>f instanceof Jd)).length;if(u>1||u>0&&d>0)throw new ae(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Jd extends zg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Jd(e,t,r)}_apply(e){const t=this._parse(e);return $0(e._query,t),new Ei(e.firestore,e.converter,Sm(e._query,t))}_parse(e){const t=V0(e.firestore);return(function(a,u,d,f,m,v,E){let T;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Cw(E,v);const L=[];for(const z of E)L.push(Sw(f,a,z));T={arrayValue:{values:L}}}else T=Sw(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Cw(E,v),T=PD(d,u,E,v==="in"||v==="not-in");return It.create(m,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function z0(n,e,t){const r=e,s=Xd("where",n);return Jd._create(s,r,t)}class $g extends Bg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $g(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)$0(u,f),u=Sm(u,f)})(e._query,t),new Ei(e.firestore,e.converter,Sm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wg extends zg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Wg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ru(a,u)})(e._query,this._field,this._direction);return new Ei(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new Ga(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function ud(n,e="asc"){const t=e,r=Xd("orderBy",n);return Wg._create(r,t)}class Hg extends zg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Hg(e,t,r)}_apply(e){return new Ei(e.firestore,e.converter,td(e._query,this._limit,this._limitType))}}function cd(n){return F1("limit",n),Hg._create("limit",n,"F")}function Sw(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new ae(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FI(e)&&t.indexOf("/")!==-1)throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(tt.fromString(t));if(!_e.isDocumentKey(r))throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return UE(n,new _e(r))}if(t instanceof Ct)return UE(n,t._key);throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ld(t)}.`)}function Cw(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $0(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bD{convertValue(e,t="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ws(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Zh].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>_t(u.doubleValue)));return new Lr(a)}convertGeoPoint(e){return new br(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Iu(e));default:return null}}convertTimestamp(e){const t=ds(e);return new st(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=tt.fromString(e);qe(a0(r),9688,{name:e});const s=new Su(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return s.isEqual(t)||gi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class iu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class no extends j0{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=no._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}no._jsonSchemaVersion="firestore/documentSnapshot/1.0",no._jsonSchema={type:St("string",no._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class Fh extends no{data(e={}){return super.data(e)}}class ro{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new iu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Fh(this._firestore,this._userDataWriter,r.key,r,new iu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Fh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new iu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Fh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new iu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:LD(d.type),doc:f,oldIndex:m,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}ro._jsonSchemaVersion="firestore/querySnapshot/1.0",ro._jsonSchema={type:St("string",ro._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class qg extends bD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,t)}}function MD(n){n=is(n,Ei);const e=is(n.firestore,Nu),t=Vg(e),r=new qg(e);return B0(n._query),ED(t,n._query).then((s=>new ro(e,r,n,s)))}function VD(n,e,t,...r){n=is(n,Ct);const s=is(n.firestore,Nu),a=V0(s);let u;return u=typeof(e=Ke(e))=="string"||e instanceof Qd?kD(a,"updateDoc",n._key,e,t,r):AD(a,"updateDoc",n._key,e),FD(s,[u.toMutation(n._key,hi.exists(!0))])}function hd(n,...e){var t,r,s;n=Ke(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Tw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Tw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,v;if(n instanceof Ct)m=is(n.firestore,Nu),v=vg(n._key.path),f={next:E=>{e[u]&&e[u](UD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=is(n,Ei);m=is(E.firestore,Nu),v=E._query;const T=new qg(m);f={next:k=>{e[u]&&e[u](new ro(m,T,E,k))},error:e[u+1],complete:e[u+2]},B0(n._query)}return(function(T,k,L,z){const B=new x0(z),ee=new T0(k,B,L);return T.asyncQueue.enqueueAndForget((async()=>E0(await bm(T),ee))),()=>{B.Ou(),T.asyncQueue.enqueueAndForget((async()=>w0(await bm(T),ee)))}})(Vg(m),v,d,f)}function FD(n,e){return(function(r,s){const a=new rs;return r.asyncQueue.enqueueAndForget((async()=>lD(await vD(r),s,a))),a.promise})(Vg(n),e)}function UD(n,e,t){const r=t.docs.get(e._key),s=new qg(n);return new no(n,s,e._key,r,new iu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Wa=s})(vs),us(new fi("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Nu(new N1(r.getProvider("auth-internal")),new O1(u,r.getProvider("app-check-internal")),(function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ae(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Su(m.options.projectId,v)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),qn(CE,RE,e),qn(CE,RE,"esm2017")})();var Rw={};const Aw="@firebase/database",kw="1.0.20";/**
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
 */let W0="";function jD(n){W0=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$t(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BD(e)}}catch{}return new zD},eo=H0("localStorage"),$D=H0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Pd("@firebase/database"),WD=(function(){let n=1;return function(){return n++}})(),q0=function(n){const e=sA(n),t=new tA;t.update(e);const r=t.digest();return Jm.encodeByteArray(r)},Yu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yu.apply(null,r):typeof r=="object"?e+=$t(r):e+=r,e+=" "}return e};let du=null,Pw=!0;const HD=function(n,e){re(!0,"Can't turn on custom loggers persistently."),Ia.logLevel=be.VERBOSE,du=Ia.log.bind(Ia)},Kt=function(...n){if(Pw===!0&&(Pw=!1,du===null&&$D.get("logging_enabled")===!0&&HD()),du){const e=Yu.apply(null,n);du(e)}},Xu=function(n){return function(...e){Kt(n,...e)}},Lm=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yu(...n);Ia.error(e)},yi=function(...n){const e=`FIREBASE FATAL ERROR: ${Yu(...n)}`;throw Ia.error(e),new Error(e)},In=function(...n){const e="FIREBASE WARNING: "+Yu(...n);Ia.warn(e)},qD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&In("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},GD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ba="[MIN_NAME]",lo="[MAX_NAME]",yo=function(n,e){if(n===e)return 0;if(n===ba||e===lo)return-1;if(e===ba||n===lo)return 1;{const t=Nw(n),r=Nw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},KD=function(n,e){return n===e?0:n<e?-1:1},Gl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$t(e))},Gg=function(n){if(typeof n!="object"||n===null)return $t(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=$t(e[r]),t+=":",t+=Gg(n[e[r]]);return t+="}",t},G0=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function on(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const K0=function(n){re(!Zd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const v=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(v.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},QD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function XD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const JD=new RegExp("^-?(0*)\\d{1,10}$"),ZD=-2147483648,eO=2147483647,Nw=function(n){if(JD.test(n)){const e=Number(n);if(e>=ZD&&e<=eO)return e}return null},Qa=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw In("Exception was thrown by user callback.",t),e},Math.floor(0))}},tO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class nO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,xn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){In(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',In(e)}}class Uh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="5",Q0="v",Y0="s",X0="r",J0="f",Z0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eS="ls",tS="p",Mm="ac",nS="websocket",rS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=eo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&eo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function iO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function sS(n,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let r;if(e===nS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===rS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);iO(n)&&(t.ns=n.namespace);const s=[];return on(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.counters_={}}incrementCounter(e,t=1){Ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp={},em={};function Qg(n){const e=n.toString();return Zp[e]||(Zp[e]=new sO),Zp[e]}function oO(n,e){const t=n.toString();return em[t]||(em[t]=e()),em[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Qa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="start",lO="close",uO="pLPCommand",cO="pRTLPCB",oS="id",aS="pw",lS="ser",hO="cb",dO="seg",fO="ts",pO="d",mO="dframe",uS=1870,cS=30,gO=uS-cS,_O=25e3,yO=3e4;class ya{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xu(e),this.stats_=Qg(t),this.urlFn=f=>(this.appCheckToken&&(f[Mm]=this.appCheckToken),sS(t,rS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new aO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yO)),GD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yg((...a)=>{const[u,d,f,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===xw)this.id=d,this.password=f;else if(u===lO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[xw]="t",r[lS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Q0]=Kg,this.transportSessionId&&(r[Y0]=this.transportSessionId),this.lastSessionId&&(r[eS]=this.lastSessionId),this.applicationId&&(r[tS]=this.applicationId),this.appCheckToken&&(r[Mm]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(r[X0]=J0);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ya.forceAllow_=!0}static forceDisallow(){ya.forceDisallow_=!0}static isAvailable(){return ya.forceAllow_?!0:!ya.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QD()&&!YD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$t(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=ET(t),s=G0(r,gO);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[mO]="t",r[oS]=e,r[aS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$t(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yg{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WD(),window[uO+this.uniqueCallbackIdentifier]=e,window[cO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yg.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Kt("frame writing exception"),d.stack&&Kt(d.stack),Kt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oS]=this.myID,e[aS]=this.myPW,e[lS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cS+r.length<=uS;){const u=this.pendingSegs.shift();r=r+"&"+dO+s+"="+u.seg+"&"+fO+s+"="+u.ts+"&"+pO+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(_O)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=16384,EO=45e3;let dd=null;typeof MozWebSocket<"u"?dd=MozWebSocket:typeof WebSocket<"u"&&(dd=WebSocket);class lr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xu(this.connId),this.stats_=Qg(t),this.connURL=lr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[Q0]=Kg,typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(u[X0]=J0),t&&(u[Y0]=t),r&&(u[eS]=r),s&&(u[Mm]=s),a&&(u[tS]=a),sS(e,nS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,eo.set("previous_websocket_failure",!0);try{let r;qR(),this.mySock=new dd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){lr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dd!==null&&!lr.forceDisallow_}static previouslyFailed(){return eo.isInMemoryStorage||eo.get("previous_websocket_failure")===!0}markConnectionHealthy(){eo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=yu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=$t(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=G0(t,vO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lr.responsesRequiredToBeHealthy=2;lr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{static get ALL_TRANSPORTS(){return[ya,lr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=lr&&lr.isAvailable();let r=t&&!lr.previouslyFailed();if(e.webSocketOnly&&(t||In("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lr];else{const s=this.transports_=[];for(const a of Du.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Du.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Du.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=6e4,TO=5e3,IO=10*1024,SO=100*1024,tm="t",Dw="d",CO="s",Ow="r",RO="e",bw="o",Lw="a",Mw="n",Vw="p",AO="h";class kO{constructor(e,t,r,s,a,u,d,f,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xu("c:"+this.id+":"),this.transportManager_=new Du(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tm in e){const t=e[tm];t===Lw?this.upgradeIfSecondaryHealthy_():t===Ow?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Gl("t",e),r=Gl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Gl("t",e),r=Gl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Gl(tm,e);if(Dw in e){const r=e[Dw];if(t===AO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Mw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CO?this.onConnectionShutdown_(r):t===Ow?this.onReset_(r):t===RO?Lm("Server Error: "+r):t===bw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Kg!==r&&In("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),fu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(eo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends dS{static getInstance(){return new fd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=32,Uw=768;class Qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function We(){return new Qe("")}function Pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function _s(n){return n.pieces_.length-n.pieceNum_}function Xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Qe(n.pieces_,e)}function Xg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function PO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ou(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function fS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Qe(e,0)}function yt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Qe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Qe(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function wn(n,e){const t=Pe(n),r=Pe(e);if(t===null)return e;if(t===r)return wn(Xe(n),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function NO(n,e){const t=Ou(n,0),r=Ou(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=yo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function Jg(n,e){if(_s(n)!==_s(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Hn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(_s(n)>_s(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class xO{constructor(e,t){this.errorPrefix_=t,this.parts_=Ou(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kd(this.parts_[r]);pS(this)}}function DO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=kd(e),pS(n)}function OO(n){const e=n.parts_.pop();n.byteLength_-=kd(e),n.parts_.length>0&&(n.byteLength_-=1)}function pS(n){if(n.byteLength_>Uw)throw new Error(n.errorPrefix_+"has a key path longer than "+Uw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Fw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fw+") or object contains a cycle "+Js(n))}function Js(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends dS{static getInstance(){return new Zg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=1e3,bO=300*1e3,jw=30*1e3,LO=1.3,MO=3e4,VO="server_kill",Bw=3;class di extends hS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=di.nextPersistentConnectionId_++,this.log_=Xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kl,this.maxReconnectDelay_=bO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_($t(a)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new si,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;di.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ur(e,"w")){const r=Ra(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();In(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ZR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$t(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Lm("Unrecognized action received from server: "+$t(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MO&&(this.reconnectDelay_=Kl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+di.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){re(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new kO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,k=>{In(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(VO)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&In(E),f())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zh(this.interruptReasons_)&&(this.reconnectDelay_=Kl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Gg(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Qe(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Kt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bw&&(this.reconnectDelay_=jw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Kt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+W0.replace(/\./g,"-")]=1,tg()?e["framework.cordova"]=1:CT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fd.getInstance().currentlyOnline();return zh(this.interruptReasons_)&&e}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ef{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Oe(ba,e),s=new Oe(ba,t);return this.compare(r,s)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih;class mS extends ef{static get __EMPTY_NODE(){return Ih}static set __EMPTY_NODE(e){Ih=e}compare(e,t){return yo(e.name,t.name)}isDefinedOn(e){throw ja("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(lo,Ih)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,Ih)}toString(){return".key"}}const Sa=new mS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=s??Tn.EMPTY_NODE,this.right=a??Tn.EMPTY_NODE}copy(e,t,r,s,a){return new zt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Tn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0;zt.BLACK=!1;class FO{copy(e,t,r,s,a){return this}insert(e,t,r){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tn{constructor(e,t=Tn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Tn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new Tn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Sh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Sh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Sh(this.root_,null,this.comparator_,!0,e)}}Tn.EMPTY_NODE=new FO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(n,e){return yo(n.name,e.name)}function e_(n,e){return yo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vm;function jO(n){Vm=n}const gS=function(n){return typeof n=="number"?"number:"+K0(n):"string:"+n},_S=function(n){if(n.isLeafNode()){const e=n.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ur(e,".sv"),"Priority must be a string or number.")}else re(n===Vm||n.isEmpty(),"priority of unexpected type.");re(n===Vm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zw;class jt{static set __childrenNodeConstructor(e){zw=e}static get __childrenNodeConstructor(){return zw}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_S(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Pe(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Pe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(re(r!==".priority"||_s(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=K0(this.value_):e+=this.value_,this.lazyHash_=q0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=jt.VALUE_TYPE_ORDER.indexOf(t),a=jt.VALUE_TYPE_ORDER.indexOf(r);return re(s>=0,"Unknown leaf type: "+t),re(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yS,vS;function BO(n){yS=n}function zO(n){vS=n}class $O extends ef{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?yo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(lo,new jt("[PRIORITY-POST]",vS))}makePost(e,t){const r=yS(e);return new Oe(t,new jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ht=new $O;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=Math.log(2);class HO{constructor(e){const t=a=>parseInt(Math.log(a)/WO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pd=function(n,e,t,r){n.sort(e);const s=function(f,m){const v=m-f;let E,T;if(v===0)return null;if(v===1)return E=n[f],T=t?t(E):E,new zt(T,E.node,zt.BLACK,null,null);{const k=parseInt(v/2,10)+f,L=s(f,k),z=s(k+1,m);return E=n[k],T=t?t(E):E,new zt(T,E.node,zt.BLACK,L,z)}},a=function(f){let m=null,v=null,E=n.length;const T=function(L,z){const B=E-L,ee=E;E-=L;const K=s(B+1,ee),se=n[B],q=t?t(se):se;k(new zt(q,se.node,z,null,K))},k=function(L){m?(m.left=L,m=L):(v=L,m=L)};for(let L=0;L<f.count;++L){const z=f.nextBitIsOne(),B=Math.pow(2,f.count-(L+1));z?T(B,zt.BLACK):(T(B,zt.BLACK),T(B,zt.RED))}return v},u=new HO(n.length),d=a(u);return new Tn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm;const da={};class li{static get Default(){return re(da&&ht,"ChildrenNode.ts has not been loaded"),nm=nm||new li({".priority":da},{".priority":ht}),nm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ra(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Tn?t:null}hasIndex(e){return Ur(this.indexSet_,e.toString())}addIndex(e,t){re(e!==Sa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Oe.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=pd(r,e.getCompare()):d=da;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new li(v,m)}addToIndexes(e,t){const r=$h(this.indexes_,(s,a)=>{const u=Ra(this.indexSet_,a);if(re(u,"Missing index implementation for "+a),s===da)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Oe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),pd(d,u.getCompare())}else return da;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Oe(e.name,d))),f.insert(e,e.node)}});return new li(r,this.indexSet_)}removeFromIndexes(e,t){const r=$h(this.indexes_,s=>{if(s===da)return s;{const a=t.get(e.name);return a?s.remove(new Oe(e.name,a)):s}});return new li(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;class Te{static get EMPTY_NODE(){return Ql||(Ql=new Te(new Tn(e_),null,li.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&_S(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ql}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ql:t}}getChild(e){const t=Pe(e);return t===null?this:this.getImmediateChild(t).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Oe(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?Ql:this.priorityNode_;return new Te(s,u,a)}}updateChild(e,t){const r=Pe(e);if(r===null)return t;{re(Pe(e)!==".priority"||_s(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Xe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(ht,(u,d)=>{t[u]=d.val(e),r++,a&&Te.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gS(this.getPriority().val())+":"),this.forEachChild(ht,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":q0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Oe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Oe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ju?-1:0}withIndex(e){if(e===Sa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ht),s=t.getIterator(ht);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Sa?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qO extends Te{constructor(){super(new Tn(e_),Te.EMPTY_NODE,li.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const Ju=new qO;Object.defineProperties(Oe,{MIN:{value:new Oe(ba,Te.EMPTY_NODE)},MAX:{value:new Oe(lo,Ju)}});mS.__EMPTY_NODE=Te.EMPTY_NODE;jt.__childrenNodeConstructor=Te;jO(Ju);zO(Ju);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=!0;function Tt(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,Tt(e))}if(!(n instanceof Array)&&GO){const t=[];let r=!1;if(on(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Tt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Oe(u,f)))}}),t.length===0)return Te.EMPTY_NODE;const a=pd(t,UO,u=>u.name,e_);if(r){const u=pd(t,ht.getCompare());return new Te(a,Tt(e),new li({".priority":u},{".priority":ht}))}else return new Te(a,Tt(e),li.Default)}else{let t=Te.EMPTY_NODE;return on(n,(r,s)=>{if(Ur(n,r)&&r.substring(0,1)!=="."){const a=Tt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Tt(e))}}BO(Tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO extends ef{constructor(e){super(),this.indexPath_=e,re(!De(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?yo(e.name,t.name):a}makePost(e,t){const r=Tt(e),s=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new Oe(t,s)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,Ju);return new Oe(lo,e)}toString(){return Ou(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO extends ef{compare(e,t){const r=e.node.compareTo(t.node);return r===0?yo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const r=Tt(e);return new Oe(t,r)}toString(){return".value"}}const YO=new QO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(n){return{type:"value",snapshotNode:n}}function La(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Lu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function XO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){re(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(bu(t,d)):re(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(La(t,r)):u.trackChildChange(Lu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ht,(s,a)=>{t.hasChild(s)||r.trackChildChange(bu(s,a))}),t.isLeafNode()||t.forEachChild(ht,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Lu(s,a,u))}else r.trackChildChange(La(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.indexedFilter_=new t_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mu.getStartPost_(e),this.endPost_=Mu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Oe(t,r))||(r=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Te.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Te.EMPTY_NODE);const a=this;return t.forEachChild(ht,(u,d)=>{a.matches(new Oe(u,d))||(s=s.updateImmediateChild(u,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Mu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Oe(t,r))||(r=Te.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Te.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Te.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,k)=>E(k,T)}else u=this.index_.getCompare();const d=e;re(d.numChildren()===this.limit_,"");const f=new Oe(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const k=T==null?1:u(T,f);if(v&&!r.isEmpty()&&k>=0)return a!=null&&a.trackChildChange(Lu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(bu(t,E));const z=d.updateImmediateChild(t,Te.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(La(T.name,T.node)),z.updateImmediateChild(T.name,T.node)):z}}else return r.isEmpty()?e:v&&u(m,f)>=0?(a!=null&&(a.trackChildChange(bu(m.name,m.node)),a.trackChildChange(La(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ba}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new n_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZO(n){return n.loadsAllData()?new t_(n.getIndex()):n.hasLimit()?new JO(n):new Mu(n)}function $w(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ht?t="$priority":n.index_===YO?t="$value":n.index_===Sa?t="$key":(re(n.index_ instanceof KO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$t(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=$t(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+$t(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=$t(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+$t(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ww(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ht&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends hS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Xu("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=md.getListenId_(e,r),d={};this.listens_[u]=d;const f=$w(e._queryParams);this.restRequest_(a+".json",f,(m,v)=>{let E=v;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),Ra(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=md.getListenId_(e,t);delete this.listens_[r]}get(e){const t=$w(e._queryParams),r=e._path.toString(),s=new si;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ba(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=yu(d.responseText)}catch{In("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&In("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return{value:null,children:new Map}}function Ya(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Pe(e);n.children.has(r)||n.children.set(r,gd());const s=n.children.get(r);e=Xe(e),Ya(s,e,t)}}function Fm(n,e){if(De(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ht,(r,s)=>{Ya(n,new Qe(r),s)}),Fm(n,e)}}else if(n.children.size>0){const t=Pe(e);return e=Xe(e),n.children.has(t)&&Fm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Um(n,e,t){n.value!==null?t(e,n.value):tb(n,(r,s)=>{const a=new Qe(e.toString()+"/"+r);Um(s,a,t)})}function tb(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&on(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=10*1e3,rb=30*1e3,ib=300*1e3;class sb{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nb(e);const r=Hw+(rb-Hw)*Math.random();fu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;on(e,(s,a)=>{a>0&&Ur(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),fu(this.reportStats_.bind(this),Math.floor(Math.random()*2*ib))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hr||(hr={}));function wS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function r_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=hr.ACK_USER_WRITE,this.source=wS()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Qe(e));return new _d(We(),t,this.revert)}}else return re(Pe(this.path)===e,"operationForChild called for unrelated child."),new _d(Xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.source=e,this.path=t,this.type=hr.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new Vu(this.source,We()):new Vu(this.source,Xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=hr.OVERWRITE}operationForChild(e){return De(this.path)?new uo(this.source,We(),this.snap.getImmediateChild(e)):new uo(this.source,Xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=hr.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new Qe(e));return t.isEmpty()?null:t.value?new uo(this.source,We(),t.value):new Fu(this.source,We(),t)}else return re(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fu(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ab(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(XO(u.childName,u.snapshotNode))}),Yl(n,s,"child_removed",e,r,t),Yl(n,s,"child_added",e,r,t),Yl(n,s,"child_moved",a,r,t),Yl(n,s,"child_changed",e,r,t),Yl(n,s,"value",e,r,t),s}function Yl(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>ub(n,d,f)),u.forEach(d=>{const f=lb(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function lb(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ub(n,e,t){if(e.childName==null||t.childName==null)throw ja("Should only compare child_ events.");const r=new Oe(e.childName,e.snapshotNode),s=new Oe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n,e){return{eventCache:n,serverCache:e}}function pu(n,e,t,r){return tf(new co(e,t,r),n.serverCache)}function TS(n,e,t,r){return tf(n.eventCache,new co(e,t,r))}function jm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ho(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rm;const cb=()=>(rm||(rm=new Tn(KD)),rm);class it{static fromObject(e){let t=new it(null);return on(e,(r,s)=>{t=t.set(new Qe(r),s)}),t}constructor(e,t=cb()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:We(),value:this.value};if(De(e))return null;{const r=Pe(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(Xe(e),t);return a!=null?{path:yt(new Qe(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Pe(e),r=this.children.get(t);return r!==null?r.subtree(Xe(e)):new it(null)}}set(e,t){if(De(e))return new it(t,this.children);{const r=Pe(e),a=(this.children.get(r)||new it(null)).set(Xe(e),t),u=this.children.insert(r,a);return new it(this.value,u)}}remove(e){if(De(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const t=Pe(e),r=this.children.get(t);if(r){const s=r.remove(Xe(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new it(null):new it(this.value,a)}else return this}}get(e){if(De(e))return this.value;{const t=Pe(e),r=this.children.get(t);return r?r.get(Xe(e)):null}}setTree(e,t){if(De(e))return t;{const r=Pe(e),a=(this.children.get(r)||new it(null)).setTree(Xe(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new it(this.value,u)}}fold(e){return this.fold_(We(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(yt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,We(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(De(e))return null;{const a=Pe(e),u=this.children.get(a);return u?u.findOnPath_(Xe(e),yt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,We(),t)}foreachOnPath_(e,t,r){if(De(e))return this;{this.value&&r(t,this.value);const s=Pe(e),a=this.children.get(s);return a?a.foreachOnPath_(Xe(e),yt(t,s),r):new it(null)}}foreach(e){this.foreach_(We(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(yt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.writeTree_=e}static empty(){return new fr(new it(null))}}function mu(n,e,t){if(De(e))return new fr(new it(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=wn(s,e);return a=a.updateChild(u,t),new fr(n.writeTree_.set(s,a))}else{const s=new it(t),a=n.writeTree_.setTree(e,s);return new fr(a)}}}function qw(n,e,t){let r=n;return on(t,(s,a)=>{r=mu(r,yt(e,s),a)}),r}function Gw(n,e){if(De(e))return fr.empty();{const t=n.writeTree_.setTree(e,new it(null));return new fr(t)}}function Bm(n,e){return vo(n,e)!=null}function vo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(wn(t.path,e)):null}function Kw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ht,(r,s)=>{e.push(new Oe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Oe(r,s.value))}),e}function as(n,e){if(De(e))return n;{const t=vo(n,e);return t!=null?new fr(new it(t)):new fr(n.writeTree_.subtree(e))}}function zm(n){return n.writeTree_.isEmpty()}function Ma(n,e){return IS(We(),n.writeTree_,e)}function IS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(re(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=IS(yt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(yt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n,e){return AS(e,n)}function hb(n,e,t,r,s){re(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=mu(n.visibleWrites,e,t)),n.lastWriteId=r}function db(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function fb(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&pb(d,r.path)?s=!1:Hn(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return mb(n),!0;if(r.snap)n.visibleWrites=Gw(n.visibleWrites,r.path);else{const d=r.children;on(d,f=>{n.visibleWrites=Gw(n.visibleWrites,yt(r.path,f))})}return!0}else return!1}function pb(n,e){if(n.snap)return Hn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Hn(yt(n.path,t),e))return!0;return!1}function mb(n){n.visibleWrites=SS(n.allWrites,gb,We()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gb(n){return n.visible}function SS(n,e,t){let r=fr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)Hn(t,u)?(d=wn(t,u),r=mu(r,d,a.snap)):Hn(u,t)&&(d=wn(u,t),r=mu(r,We(),a.snap.getChild(d)));else if(a.children){if(Hn(t,u))d=wn(t,u),r=qw(r,d,a.children);else if(Hn(u,t))if(d=wn(u,t),De(d))r=qw(r,We(),a.children);else{const f=Ra(a.children,Pe(d));if(f){const m=f.getChild(Xe(d));r=mu(r,We(),m)}}}else throw ja("WriteRecord should have .snap or .children")}}return r}function CS(n,e,t,r,s){if(!r&&!s){const a=vo(n.visibleWrites,e);if(a!=null)return a;{const u=as(n.visibleWrites,e);if(zm(u))return t;if(t==null&&!Bm(u,We()))return null;{const d=t||Te.EMPTY_NODE;return Ma(u,d)}}}else{const a=as(n.visibleWrites,e);if(!s&&zm(a))return t;if(!s&&t==null&&!Bm(a,We()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(Hn(m.path,e)||Hn(e,m.path))},d=SS(n.allWrites,u,e),f=t||Te.EMPTY_NODE;return Ma(d,f)}}}function _b(n,e,t){let r=Te.EMPTY_NODE;const s=vo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ht,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=as(n.visibleWrites,e);return t.forEachChild(ht,(u,d)=>{const f=Ma(as(a,new Qe(u)),d);r=r.updateImmediateChild(u,f)}),Kw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=as(n.visibleWrites,e);return Kw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function yb(n,e,t,r,s){re(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=yt(e,t);if(Bm(n.visibleWrites,a))return null;{const u=as(n.visibleWrites,a);return zm(u)?s.getChild(t):Ma(u,s.getChild(t))}}function vb(n,e,t,r){const s=yt(e,t),a=vo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=as(n.visibleWrites,s);return Ma(u,r.getNode().getImmediateChild(t))}else return null}function Eb(n,e){return vo(n.visibleWrites,e)}function wb(n,e,t,r,s,a,u){let d;const f=as(n.visibleWrites,e),m=vo(f,We());if(m!=null)d=m;else if(t!=null)d=Ma(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let k=T.getNext();for(;k&&v.length<s;)E(k,r)!==0&&v.push(k),k=T.getNext();return v}else return[]}function Tb(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function yd(n,e,t,r){return CS(n.writeTree,n.treePath,e,t,r)}function o_(n,e){return _b(n.writeTree,n.treePath,e)}function Qw(n,e,t,r){return yb(n.writeTree,n.treePath,e,t,r)}function vd(n,e){return Eb(n.writeTree,yt(n.treePath,e))}function Ib(n,e,t,r,s,a){return wb(n.writeTree,n.treePath,e,t,r,s,a)}function a_(n,e,t){return vb(n.writeTree,n.treePath,e,t)}function RS(n,e){return AS(yt(n.treePath,e),n.writeTree)}function AS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Lu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,bu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,La(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Lu(r,e.snapshotNode,s.oldSnap));else throw ja("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const kS=new Cb;class l_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new co(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return a_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ho(this.viewCache_),a=Ib(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(n){return{filter:n}}function Ab(n,e){re(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function kb(n,e,t,r,s){const a=new Sb;let u,d;if(t.type===hr.OVERWRITE){const m=t;m.source.fromUser?u=$m(n,e,m.path,m.snap,r,s,a):(re(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!De(m.path),u=Ed(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===hr.MERGE){const m=t;m.source.fromUser?u=Nb(n,e,m.path,m.children,r,s,a):(re(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Wm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===hr.ACK_USER_WRITE){const m=t;m.revert?u=Ob(n,e,m.path,r,s,a):u=xb(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===hr.LISTEN_COMPLETE)u=Db(n,e,t.path,r,a);else throw ja("Unknown operation type: "+t.type);const f=a.getChanges();return Pb(e,u,f),{viewCache:u,changes:f}}function Pb(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=jm(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(ES(jm(e)))}}function PS(n,e,t,r,s,a){const u=e.eventCache;if(vd(r,t)!=null)return e;{let d,f;if(De(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=ho(e),v=m instanceof Te?m:Te.EMPTY_NODE,E=o_(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=yd(r,ho(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Pe(t);if(m===".priority"){re(_s(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const E=Qw(r,t,v,f);E!=null?d=n.filter.updatePriority(v,E):d=u.getNode()}else{const v=Xe(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=Qw(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(v,T):E=u.getNode().getImmediateChild(m)}else E=a_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,v,s,a):d=u.getNode()}}return pu(e,d,u.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function Ed(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(De(t))m=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const k=f.getNode().updateChild(t,r);m=v.updateFullNode(f.getNode(),k,null)}else{const k=Pe(t);if(!f.isCompleteForPath(t)&&_s(t)>1)return e;const L=Xe(t),B=f.getNode().getImmediateChild(k).updateChild(L,r);k===".priority"?m=v.updatePriority(f.getNode(),B):m=v.updateChild(f.getNode(),k,B,L,kS,null)}const E=TS(e,m,f.isFullyInitialized()||De(t),v.filtersNodes()),T=new l_(s,E,a);return PS(n,E,t,s,T,d)}function $m(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const v=new l_(s,e,a);if(De(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=pu(e,m,!0,n.filter.filtersNodes());else{const E=Pe(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=pu(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=Xe(t),k=d.getNode().getImmediateChild(E);let L;if(De(T))L=r;else{const z=v.getCompleteChild(E);z!=null?Xg(T)===".priority"&&z.getChild(fS(T)).isEmpty()?L=z:L=z.updateChild(T,r):L=Te.EMPTY_NODE}if(k.equals(L))f=e;else{const z=n.filter.updateChild(d.getNode(),E,L,T,v,u);f=pu(e,z,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function Yw(n,e){return n.eventCache.isCompleteForChild(e)}function Nb(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const v=yt(t,f);Yw(e,Pe(v))&&(d=$m(n,d,v,m,s,a,u))}),r.foreach((f,m)=>{const v=yt(t,f);Yw(e,Pe(v))||(d=$m(n,d,v,m,s,a,u))}),d}function Xw(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Wm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;De(t)?m=r:m=new it(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(v.hasChild(E)){const k=e.serverCache.getNode().getImmediateChild(E),L=Xw(n,k,T);f=Ed(n,f,new Qe(E),L,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const k=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!v.hasChild(E)&&!k){const L=e.serverCache.getNode().getImmediateChild(E),z=Xw(n,L,T);f=Ed(n,f,new Qe(E),z,s,a,u,d)}}),f}function xb(n,e,t,r,s,a,u){if(vd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(De(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ed(n,e,t,f.getNode().getChild(t),s,a,d,u);if(De(t)){let m=new it(null);return f.getNode().forEachChild(Sa,(v,E)=>{m=m.set(new Qe(v),E)}),Wm(n,e,t,m,s,a,d,u)}else return e}else{let m=new it(null);return r.foreach((v,E)=>{const T=yt(t,v);f.isCompleteForPath(T)&&(m=m.set(v,f.getNode().getChild(T)))}),Wm(n,e,t,m,s,a,d,u)}}function Db(n,e,t,r,s){const a=e.serverCache,u=TS(e,a.getNode(),a.isFullyInitialized()||De(t),a.isFiltered());return PS(n,u,t,r,kS,s)}function Ob(n,e,t,r,s,a){let u;if(vd(r,t)!=null)return e;{const d=new l_(r,e,s),f=e.eventCache.getNode();let m;if(De(t)||Pe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=yd(r,ho(e));else{const E=e.serverCache.getNode();re(E instanceof Te,"serverChildren would be complete if leaf node"),v=o_(r,E)}v=v,m=n.filter.updateFullNode(f,v,a)}else{const v=Pe(t);let E=a_(r,v,e.serverCache);E==null&&e.serverCache.isCompleteForChild(v)&&(E=f.getImmediateChild(v)),E!=null?m=n.filter.updateChild(f,v,E,Xe(t),d,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(f,v,Te.EMPTY_NODE,Xe(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=yd(r,ho(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||vd(r,We())!=null,pu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new t_(r.getIndex()),a=ZO(r);this.processor_=Rb(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Te.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),v=new co(f,u.isFullyInitialized(),s.filtersNodes()),E=new co(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=tf(E,v),this.eventGenerator_=new ob(this.query_)}get query(){return this.query_}}function Lb(n){return n.viewCache_.serverCache.getNode()}function Mb(n,e){const t=ho(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Pe(e)).isEmpty())?t.getChild(e):null}function Jw(n){return n.eventRegistrations_.length===0}function Vb(n,e){n.eventRegistrations_.push(e)}function Zw(n,e,t){const r=[];if(t){re(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function eT(n,e,t,r){e.type===hr.MERGE&&e.source.queryId!==null&&(re(ho(n.viewCache_),"We should always have a full cache before handling merges"),re(jm(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=kb(n.processor_,s,e,t,r);return Ab(n.processor_,a.viewCache),re(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,NS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Fb(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ht,(a,u)=>{r.push(La(a,u))}),t.isFullyInitialized()&&r.push(ES(t.getNode())),NS(n,r,t.getNode(),e)}function NS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return ab(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;class Ub{constructor(){this.views=new Map}}function jb(n){re(!wd,"__referenceConstructor has already been defined"),wd=n}function Bb(){return re(wd,"Reference.ts has not been loaded"),wd}function zb(n){return n.views.size===0}function u_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return re(a!=null,"SyncTree gave us an op for an invalid query."),eT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(eT(u,e,t,r));return a}}function $b(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=yd(t,s?r:null),f=!1;d?f=!0:r instanceof Te?(d=o_(t,r),f=!1):(d=Te.EMPTY_NODE,f=!1);const m=tf(new co(d,f,!1),new co(r,s,!1));return new bb(e,m)}return u}function Wb(n,e,t,r,s,a){const u=$b(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),Vb(u,t),Fb(u,t)}function Hb(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=ys(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(Zw(m,t,r)),Jw(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(Zw(f,t,r)),Jw(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!ys(n)&&a.push(new(Bb())(e._repo,e._path)),{removed:a,events:u}}function xS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ca(n,e){let t=null;for(const r of n.views.values())t=t||Mb(r,e);return t}function DS(n,e){if(e._queryParams.loadsAllData())return nf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function OS(n,e){return DS(n,e)!=null}function ys(n){return nf(n)!=null}function nf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;function qb(n){re(!Td,"__referenceConstructor has already been defined"),Td=n}function Gb(){return re(Td,"Reference.ts has not been loaded"),Td}let Kb=1;class tT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=Tb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bS(n,e,t,r,s){return hb(n.pendingWriteTree_,e,t,r,s),s?Zu(n,new uo(wS(),e,t)):[]}function to(n,e,t=!1){const r=db(n.pendingWriteTree_,e);if(fb(n.pendingWriteTree_,e)){let a=new it(null);return r.snap!=null?a=a.set(We(),!0):on(r.children,u=>{a=a.set(new Qe(u),!0)}),Zu(n,new _d(r.path,a,t))}else return[]}function rf(n,e,t){return Zu(n,new uo(r_(),e,t))}function Qb(n,e,t){const r=it.fromObject(t);return Zu(n,new Fu(r_(),e,r))}function Yb(n,e){return Zu(n,new Vu(r_(),e))}function Xb(n,e,t){const r=h_(n,t);if(r){const s=d_(r),a=s.path,u=s.queryId,d=wn(a,e),f=new Vu(i_(u),d);return f_(n,a,f)}else return[]}function Hm(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||OS(u,e))){const f=Hb(u,e,t,r);zb(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const v=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,k)=>ys(k));if(v&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const k=eL(T);for(let L=0;L<k.length;++L){const z=k[L],B=z.query,ee=VS(n,z);n.listenProvider_.startListening(gu(B),Id(n,B),ee.hashFn,ee.onComplete)}}}!E&&m.length>0&&!r&&(v?n.listenProvider_.stopListening(gu(e),null):m.forEach(T=>{const k=n.queryToTagMap.get(sf(T));n.listenProvider_.stopListening(gu(T),k)}))}tL(n,m)}return d}function Jb(n,e,t,r){const s=h_(n,r);if(s!=null){const a=d_(s),u=a.path,d=a.queryId,f=wn(u,e),m=new uo(i_(d),f,t);return f_(n,u,m)}else return[]}function Zb(n,e,t,r){const s=h_(n,r);if(s){const a=d_(s),u=a.path,d=a.queryId,f=wn(u,e),m=it.fromObject(t),v=new Fu(i_(d),f,m);return f_(n,u,v)}else return[]}function nT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,k)=>{const L=wn(T,s);a=a||Ca(k,L),u=u||ys(k)});let d=n.syncPointTree_.get(s);d?(u=u||ys(d),a=a||Ca(d,We())):(d=new Ub,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Te.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((k,L)=>{const z=Ca(L,We());z&&(a=a.updateImmediateChild(k,z))}));const m=OS(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=sf(e);re(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const k=nL();n.queryToTagMap.set(T,k),n.tagToQueryMap.set(k,T)}const v=s_(n.pendingWriteTree_,s);let E=Wb(d,e,t,v,a,f);if(!m&&!u&&!r){const T=DS(d,e);E=E.concat(rL(n,e,T))}return E}function c_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=wn(u,e),m=Ca(d,f);if(m)return m});return CS(s,e,a,t,!0)}function Zu(n,e){return LS(e,n.syncPointTree_,null,s_(n.pendingWriteTree_,We()))}function LS(n,e,t,r){if(De(n.path))return MS(n,e,t,r);{const s=e.get(We());t==null&&s!=null&&(t=Ca(s,We()));let a=[];const u=Pe(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,v=RS(r,u);a=a.concat(LS(d,f,m,v))}return s&&(a=a.concat(u_(s,n,r,t))),a}}function MS(n,e,t,r){const s=e.get(We());t==null&&s!=null&&(t=Ca(s,We()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=RS(r,u),v=n.operationForChild(u);v&&(a=a.concat(MS(v,d,f,m)))}),s&&(a=a.concat(u_(s,n,r,t))),a}function VS(n,e){const t=e.query,r=Id(n,t);return{hashFn:()=>(Lb(e)||Te.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?Xb(n,t._path,r):Yb(n,t._path);{const a=XD(s,t);return Hm(n,t,null,a)}}}}function Id(n,e){const t=sf(e);return n.queryToTagMap.get(t)}function sf(n){return n._path.toString()+"$"+n._queryIdentifier}function h_(n,e){return n.tagToQueryMap.get(e)}function d_(n){const e=n.indexOf("$");return re(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Qe(n.substr(0,e))}}function f_(n,e,t){const r=n.syncPointTree_.get(e);re(r,"Missing sync point for query tag that we're tracking");const s=s_(n.pendingWriteTree_,e);return u_(r,t,s,null)}function eL(n){return n.fold((e,t,r)=>{if(t&&ys(t))return[nf(t)];{let s=[];return t&&(s=xS(t)),on(r,(a,u)=>{s=s.concat(u)}),s}})}function gu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Gb())(n._repo,n._path):n}function tL(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=sf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function nL(){return Kb++}function rL(n,e,t){const r=e._path,s=Id(n,e),a=VS(n,t),u=n.listenProvider_.startListening(gu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)re(!ys(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,v,E)=>{if(!De(m)&&v&&ys(v))return[nf(v).query];{let T=[];return v&&(T=T.concat(xS(v).map(k=>k.query))),on(E,(k,L)=>{T=T.concat(L)}),T}});for(let m=0;m<f.length;++m){const v=f[m];n.listenProvider_.stopListening(gu(v),Id(n,v))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new p_(t)}node(){return this.node_}}class m_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new m_(this.syncTree_,t)}node(){return c_(this.syncTree_,this.path_)}}const iL=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},rT=function(n,e,t){if(!n||typeof n!="object")return n;if(re(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return sL(n[".sv"],e,t);if(typeof n[".sv"]=="object")return oL(n[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},sL=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+n)}},oL=function(n,e,t){n.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&re(!1,"Unexpected increment value: "+r);const s=e.node();if(re(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},aL=function(n,e,t,r){return g_(e,new m_(t,n),r)},FS=function(n,e,t){return g_(n,new p_(e),t)};function g_(n,e,t){const r=n.getPriority().val(),s=rT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=rT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new jt(d,Tt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new jt(s))),u.forEachChild(ht,(d,f)=>{const m=g_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function y_(n,e){let t=e instanceof Qe?e:new Qe(e),r=n,s=Pe(t);for(;s!==null;){const a=Ra(r.node.children,s)||{children:{},childCount:0};r=new __(s,r,a),t=Xe(t),s=Pe(t)}return r}function Xa(n){return n.node.value}function US(n,e){n.node.value=e,qm(n)}function jS(n){return n.node.childCount>0}function lL(n){return Xa(n)===void 0&&!jS(n)}function of(n,e){on(n.node.children,(t,r)=>{e(new __(t,n,r))})}function BS(n,e,t,r){t&&e(n),of(n,s=>{BS(s,e,!0)})}function uL(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ec(n){return new Qe(n.parent===null?n.name:ec(n.parent)+"/"+n.name)}function qm(n){n.parent!==null&&cL(n.parent,n.name,n)}function cL(n,e,t){const r=lL(t),s=Ur(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,qm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,qm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=/[\[\].#$\/\u0000-\u001F\u007F]/,dL=/[\[\].#$\u0000-\u001F\u007F]/,im=10*1024*1024,v_=function(n){return typeof n=="string"&&n.length!==0&&!hL.test(n)},zS=function(n){return typeof n=="string"&&n.length!==0&&!dL.test(n)},fL=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zS(n)},$S=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Zd(n)||n&&typeof n=="object"&&Ur(n,".sv")},Gm=function(n,e,t,r){af(Aa(n,"value"),e,t)},af=function(n,e,t){const r=t instanceof Qe?new xO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Js(r));if(typeof e=="function")throw new Error(n+"contains a function "+Js(r)+" with contents = "+e.toString());if(Zd(e))throw new Error(n+"contains "+e.toString()+" "+Js(r));if(typeof e=="string"&&e.length>im/3&&kd(e)>im)throw new Error(n+"contains a string greater than "+im+" utf8 bytes "+Js(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(on(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!v_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Js(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DO(r,u),af(n,d,r),OO(r)}),s&&a)throw new Error(n+' contains ".value" child '+Js(r)+" in addition to actual children.")}},pL=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Ou(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!v_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(NO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&Hn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},mL=function(n,e,t,r){const s=Aa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];on(e,(u,d)=>{const f=new Qe(u);if(af(s,d,yt(t,f)),Xg(f)===".priority"&&!$S(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),pL(s,a)},gL=function(n,e,t){if(Zd(e))throw new Error(Aa(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!$S(e))throw new Error(Aa(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},WS=function(n,e,t,r){if(!zS(t))throw new Error(Aa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_L=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),WS(n,e,t)},su=function(n,e){if(Pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},yL=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!v_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!fL(t))throw new Error(Aa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function E_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!Jg(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function HS(n,e,t){E_(n,t),qS(n,r=>Jg(r,e))}function vi(n,e,t){E_(n,t),qS(n,r=>Hn(r,e)||Hn(e,r))}function qS(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(EL(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function EL(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();du&&Kt("event: "+t.toString()),Qa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="repo_interrupt",TL=25;class IL{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gd(),this.transactionQueueTree_=new __,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SL(n,e,t){if(n.stats_=Qg(n.repoInfo_),n.forceRestClient_||tO())n.server_=new md(n.repoInfo_,(r,s,a,u)=>{iT(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>sT(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new di(n.repoInfo_,e,(r,s,a,u)=>{iT(n,r,s,a,u)},r=>{sT(n,r)},r=>{RL(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=oO(n.repoInfo_,()=>new sb(n.stats_,n.server_)),n.infoData_=new eb,n.infoSyncTree_=new tT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=rf(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),T_(n,"connected",!1),n.serverSyncTree_=new tT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);vi(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function CL(n){const t=n.infoData_.getNode(new Qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function w_(n){return iL({timestamp:CL(n)})}function iT(n,e,t,r,s){n.dataUpdateCount++;const a=new Qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=$h(t,m=>Tt(m));u=Zb(n.serverSyncTree_,a,f,s)}else{const f=Tt(t);u=Jb(n.serverSyncTree_,a,f,s)}else if(r){const f=$h(t,m=>Tt(m));u=Qb(n.serverSyncTree_,a,f)}else{const f=Tt(t);u=rf(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=lf(n,a)),vi(n.eventQueue_,d,u)}function sT(n,e){T_(n,"connected",e),e===!1&&kL(n)}function RL(n,e){on(e,(t,r)=>{T_(n,t,r)})}function T_(n,e,t){const r=new Qe("/.info/"+e),s=Tt(t);n.infoData_.updateSnapshot(r,s);const a=rf(n.infoSyncTree_,r,s);vi(n.eventQueue_,r,a)}function GS(n){return n.nextWriteId_++}function AL(n,e,t,r,s){I_(n,"set",{path:e.toString(),value:t,priority:r});const a=w_(n),u=Tt(t,r),d=c_(n.serverSyncTree_,e),f=FS(u,d,a),m=GS(n),v=bS(n.serverSyncTree_,e,f,m,!0);E_(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,k)=>{const L=T==="ok";L||In("set at "+e+" failed: "+T);const z=to(n.serverSyncTree_,m,!L);vi(n.eventQueue_,e,z),Va(n,s,T,k)});const E=JS(n,e);lf(n,E),vi(n.eventQueue_,E,[])}function kL(n){I_(n,"onDisconnectEvents");const e=w_(n),t=gd();Um(n.onDisconnect_,We(),(s,a)=>{const u=aL(s,a,n.serverSyncTree_,e);Ya(t,s,u)});let r=[];Um(t,We(),(s,a)=>{r=r.concat(rf(n.serverSyncTree_,s,a));const u=JS(n,s);lf(n,u)}),n.onDisconnect_=gd(),vi(n.eventQueue_,We(),r)}function PL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Fm(n.onDisconnect_,e),Va(n,t,r,s)})}function oT(n,e,t,r){const s=Tt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&Ya(n.onDisconnect_,e,s),Va(n,r,a,u)})}function NL(n,e,t,r,s){const a=Tt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&Ya(n.onDisconnect_,e,a),Va(n,s,u,d)})}function xL(n,e,t,r){if(zh(t)){Kt("onDisconnect().update() called with empty data.  Don't do anything."),Va(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&on(t,(u,d)=>{const f=Tt(d);Ya(n.onDisconnect_,yt(e,u),f)}),Va(n,r,s,a)})}function DL(n,e,t){let r;Pe(e._path)===".info"?r=nT(n.infoSyncTree_,e,t):r=nT(n.serverSyncTree_,e,t),HS(n.eventQueue_,e._path,r)}function OL(n,e,t){let r;Pe(e._path)===".info"?r=Hm(n.infoSyncTree_,e,t):r=Hm(n.serverSyncTree_,e,t),HS(n.eventQueue_,e._path,r)}function bL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(wL)}function I_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Kt(t,...e)}function Va(n,e,t,r){e&&Qa(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function KS(n,e,t){return c_(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function S_(n,e=n.transactionQueueTree_){if(e||uf(n,e),Xa(e)){const t=YS(n,e);re(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&LL(n,ec(e),t)}else jS(e)&&of(e,t=>{S_(n,t)})}function LL(n,e,t){const r=t.map(m=>m.currentWriteId),s=KS(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const v=t[m];re(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=wn(e,v.path);a=a.updateChild(E,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{I_(n,"transaction put response",{path:f.toString(),status:m});let v=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(to(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();uf(n,y_(n.transactionQueueTree_,e)),S_(n,n.transactionQueueTree_),vi(n.eventQueue_,e,v);for(let T=0;T<E.length;T++)Qa(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{In("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}lf(n,e)}},u)}function lf(n,e){const t=QS(n,e),r=ec(t),s=YS(n,t);return ML(n,s,r),r}function ML(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=wn(t,f.path);let v=!1,E;if(re(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,E=f.abortReason,s=s.concat(to(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=TL)v=!0,E="maxretry",s=s.concat(to(n.serverSyncTree_,f.currentWriteId,!0));else{const T=KS(n,f.path,u);f.currentInputSnapshot=T;const k=e[d].update(T.val());if(k!==void 0){af("transaction failed: Data returned ",k,f.path);let L=Tt(k);typeof k=="object"&&k!=null&&Ur(k,".priority")||(L=L.updatePriority(T.getPriority()));const B=f.currentWriteId,ee=w_(n),K=FS(L,T,ee);f.currentOutputSnapshotRaw=L,f.currentOutputSnapshotResolved=K,f.currentWriteId=GS(n),u.splice(u.indexOf(B),1),s=s.concat(bS(n.serverSyncTree_,f.path,K,f.currentWriteId,f.applyLocally)),s=s.concat(to(n.serverSyncTree_,B,!0))}else v=!0,E="nodata",s=s.concat(to(n.serverSyncTree_,f.currentWriteId,!0))}vi(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}uf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Qa(r[d]);S_(n,n.transactionQueueTree_)}function QS(n,e){let t,r=n.transactionQueueTree_;for(t=Pe(e);t!==null&&Xa(r)===void 0;)r=y_(r,t),e=Xe(e),t=Pe(e);return r}function YS(n,e){const t=[];return XS(n,e,t),t.sort((r,s)=>r.order-s.order),t}function XS(n,e,t){const r=Xa(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);of(e,s=>{XS(n,s,t)})}function uf(n,e){const t=Xa(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,US(e,t.length>0?t:void 0)}of(e,r=>{uf(n,r)})}function JS(n,e){const t=ec(QS(n,e)),r=y_(n.transactionQueueTree_,e);return uL(r,s=>{sm(n,s)}),sm(n,r),BS(r,s=>{sm(n,s)}),t}function sm(n,e){const t=Xa(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(re(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(re(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(to(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?US(e,void 0):t.length=a+1,vi(n.eventQueue_,ec(e),s);for(let u=0;u<r.length;u++)Qa(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function FL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):In(`Invalid query segment '${t}' in query '${n}'`)}return e}const aT=function(n,e){const t=UL(n),r=t.namespace;t.domain==="firebase.com"&&yi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&yi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||qD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new iS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Qe(t.pathString)}},UL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(v,E)),v<E&&(s=VL(n.substring(v,E)));const T=FL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const L=e.indexOf(".");r=e.substring(0,L).toLowerCase(),t=e.substring(L+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class BL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return re(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $L{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new si;return PL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){su("OnDisconnect.remove",this._path);const e=new si;return oT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){su("OnDisconnect.set",this._path),Gm("OnDisconnect.set",e,this._path);const t=new si;return oT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){su("OnDisconnect.setWithPriority",this._path),Gm("OnDisconnect.setWithPriority",e,this._path),gL("OnDisconnect.setWithPriority",t);const r=new si;return NL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){su("OnDisconnect.update",this._path),mL("OnDisconnect.update",e,this._path);const t=new si;return xL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return De(this._path)?null:Xg(this._path)}get ref(){return new Ts(this._repo,this._path)}get _queryIdentifier(){const e=Ww(this._queryParams),t=Gg(e);return t==="{}"?"default":t}get _queryObject(){return Ww(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof C_))return!1;const t=this._repo===e._repo,r=Jg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+PO(this._path)}}class Ts extends C_{constructor(e,t){super(e,t,new n_,!1)}get parent(){const e=fS(this._path);return e===null?null:new Ts(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Qe(e),r=Km(this.ref,e);return new Sd(this._node.getChild(t),r,ht)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Sd(s,Km(this.ref,r),ht)))}hasChild(e){const t=new Qe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ch(n,e){return n=Ke(n),n._checkNotDeleted("ref"),e!==void 0?Km(n._root,e):n._root}function Km(n,e){return n=Ke(n),Pe(n._path)===null?_L("child","path",e):WS("child","path",e),new Ts(n._repo,yt(n._path,e))}function WL(n){return n=Ke(n),new $L(n._repo,n._path)}function lT(n,e){n=Ke(n),su("set",n._path),Gm("set",e,n._path);const t=new si;return AL(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class R_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new jL("value",this,new Sd(e.snapshotNode,new Ts(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new BL(this,e,t):null}matches(e){return e instanceof R_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function HL(n,e,t,r,s){const a=new zL(t,void 0),u=new R_(a);return DL(n._repo,n,u),()=>OL(n._repo,n,u)}function qL(n,e,t,r){return HL(n,"value",e)}jb(Ts);qb(Ts);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL="FIREBASE_DATABASE_EMULATOR_HOST",Qm={};let KL=!1;function QL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Vr(a);n.repoInfo_=new iS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function YL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||yi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=aT(a,s),d=u.repoInfo,f;typeof process<"u"&&Rw&&(f=Rw[GL]),f?(a=`http://${f}?ns=${d.namespace}`,u=aT(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new rO(n.name,n.options,e);yL("Invalid Firebase Database URL",u),De(u.path)||yi("Database URL must point to the root of a Firebase Database (not including a child path).");const v=JL(d,n,m,new nO(n,t));return new ZL(v,n)}function XL(n,e){const t=Qm[e];(!t||t[n.key]!==n)&&yi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bL(n),delete t[n.key]}function JL(n,e,t,r){let s=Qm[e.name];s||(s={},Qm[e.name]=s);let a=s[n.toURLString()];return a&&yi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new IL(n,KL,t,r),s[n.toURLString()]=a,a}class ZL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ts(this._repo,We())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yi("Cannot call "+e+" on a deleted database.")}}function e2(n=Nd(),e){const t=Bu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Zm("database");r&&t2(t,...r)}return t}function t2(n,e,t,r={}){n=Ke(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&ls(r,a.repoInfo_.emulatorOptions))return;yi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&yi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Uh(Uh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:eg(r.mockUserToken,n.app.options.projectId);u=new Uh(d)}Vr(e)&&(Rd(e),Ad("Database",!0)),QL(a,s,r,u)}/**
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
 */function n2(n){jD(vs),us(new fi("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return YL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),qn(Aw,kw,n),qn(Aw,kw,"esm2017")}di.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};di.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};n2();var r2="firebase",i2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(r2,i2,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="firebasestorage.googleapis.com",eC="storageBucket",s2=120*1e3,o2=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Fr{constructor(e,t,r=0){super(om(e),`Firebase Storage: ${t} (${om(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return om(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function om(n){return"storage/"+n}function A_(){const n="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,n)}function a2(n){return new pt(ft.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function l2(n){return new pt(ft.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function u2(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pt(ft.UNAUTHENTICATED,n)}function c2(){return new pt(ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function h2(n){return new pt(ft.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function d2(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f2(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function p2(n){return new pt(ft.INVALID_URL,"Invalid URL '"+n+"'.")}function m2(n){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function g2(){return new pt(ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eC+"' property when initializing the app?")}function _2(){return new pt(ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function y2(){return new pt(ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function v2(n){return new pt(ft.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ym(n){return new pt(ft.INVALID_ARGUMENT,n)}function tC(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function E2(n){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _u(n,e){return new pt(ft.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xl(n){throw new pt(ft.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=On.makeFromUrl(e,t)}catch{return new On(e,"")}if(r.path==="")return r;throw m2(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(q){q.path_=decodeURIComponent(q.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",k=new RegExp(`^https?://${E}/${v}/b/${s}/o${T}`,"i"),L={bucket:1,path:3},z=t===ZS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",ee=new RegExp(`^https?://${z}/${s}/${B}`,"i"),se=[{regex:d,indices:f,postModify:a},{regex:k,indices:L,postModify:m},{regex:ee,indices:{bucket:1,path:2},postModify:m}];for(let q=0;q<se.length;q++){const Re=se[q],pe=Re.regex.exec(e);if(pe){const x=pe[Re.indices.bucket];let S=pe[Re.indices.path];S||(S=""),r=new On(x,S),Re.postModify(r);break}}if(r==null)throw p2(e);return r}}class w2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function v(...B){m||(m=!0,e.apply(null,B))}function E(B){s=setTimeout(()=>{s=null,n(k,f())},B)}function T(){a&&clearTimeout(a)}function k(B,...ee){if(m){T();return}if(B){T(),v.call(null,B,...ee);return}if(f()||u){T(),v.call(null,B,...ee);return}r<64&&(r*=2);let se;d===1?(d=2,se=0):se=(r+Math.random())*1e3,E(se)}let L=!1;function z(B){L||(L=!0,T(),!m&&(s!==null?(B||(d=2),clearTimeout(s),E(0)):B||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,z(!0)},t),z}function I2(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(n){return n!==void 0}function C2(n){return typeof n=="object"&&!Array.isArray(n)}function k_(n){return typeof n=="string"||n instanceof String}function uT(n){return P_()&&n instanceof Blob}function P_(){return typeof Blob<"u"}function cT(n,e,t,r){if(r<e)throw Ym(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ym(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function nC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var io;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(io||(io={}));/**
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
 */function R2(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,t,r,s,a,u,d,f,m,v,E,T=!0,k=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,z)=>{this.resolve_=L,this.reject_=z,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===io.NO_ERROR,f=a.getStatus();if(!d||R2(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===io.ABORT;r(!1,new Rh(!1,null,v));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Rh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());S2(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=A_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?tC():f2();u(f)}else{const f=d2();u(f)}};this.canceled_?t(!1,new Rh(!1,null,!0)):this.backoffId_=T2(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&I2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function k2(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function P2(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function N2(n,e){e&&(n["X-Firebase-GMPID"]=e)}function x2(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function D2(n,e,t,r,s,a,u=!0,d=!1){const f=nC(n.urlParams),m=n.url+f,v=Object.assign({},n.headers);return N2(v,e),k2(v,t),P2(v,a),x2(v,r),new A2(m,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function b2(...n){const e=O2();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(P_())return new Blob(n);throw new pt(ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function L2(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function M2(n){if(typeof atob>"u")throw v2("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class am{constructor(e,t){this.data=e,this.contentType=t||null}}function V2(n,e){switch(n){case Pr.RAW:return new am(rC(e));case Pr.BASE64:case Pr.BASE64URL:return new am(iC(n,e));case Pr.DATA_URL:return new am(U2(e),j2(e))}throw A_()}function rC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function F2(n){let e;try{e=decodeURIComponent(n)}catch{throw _u(Pr.DATA_URL,"Malformed data URL.")}return rC(e)}function iC(n,e){switch(n){case Pr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw _u(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw _u(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=M2(e)}catch(s){throw s.message.includes("polyfill")?s:_u(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class sC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw _u(Pr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=B2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function U2(n){const e=new sC(n);return e.base64?iC(Pr.BASE64,e.rest):F2(e.rest)}function j2(n){return new sC(n).contentType}function B2(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){let r=0,s="";uT(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(uT(this.data_)){const r=this.data_,s=L2(r,e,t);return s===null?null:new Xi(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Xi(r,!0)}}static getBlob(...e){if(P_()){const t=e.map(r=>r instanceof Xi?r.data_:r);return new Xi(b2.apply(null,t))}else{const t=e.map(u=>k_(u)?V2(Pr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new Xi(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(n){let e;try{e=JSON.parse(n)}catch{return null}return C2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $2(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function aC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(n,e){return e}class hn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||W2}}let Ah=null;function H2(n){return!k_(n)||n.length<2?n:aC(n)}function lC(){if(Ah)return Ah;const n=[];n.push(new hn("bucket")),n.push(new hn("generation")),n.push(new hn("metageneration")),n.push(new hn("name","fullPath",!0));function e(a,u){return H2(u)}const t=new hn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new hn("size");return s.xform=r,n.push(s),n.push(new hn("timeCreated")),n.push(new hn("updated")),n.push(new hn("md5Hash",null,!0)),n.push(new hn("cacheControl",null,!0)),n.push(new hn("contentDisposition",null,!0)),n.push(new hn("contentEncoding",null,!0)),n.push(new hn("contentLanguage",null,!0)),n.push(new hn("contentType",null,!0)),n.push(new hn("metadata","customMetadata",!0)),Ah=n,Ah}function q2(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new On(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function G2(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return q2(r,n),r}function uC(n,e,t){const r=oC(e);return r===null?null:G2(n,r,t)}function K2(n,e,t,r){const s=oC(e);if(s===null||!k_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const v=n.bucket,E=n.fullPath,T="/b/"+u(v)+"/o/"+u(E),k=N_(T,t,r),L=nC({alt:"media",token:m});return k+L})[0]}function Q2(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class cC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n){if(!n)throw A_()}function Y2(n,e){function t(r,s){const a=uC(n,s,e);return hC(a!==null),a}return t}function X2(n,e){function t(r,s){const a=uC(n,s,e);return hC(a!==null),K2(a,s,n.host,n._protocol)}return t}function dC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=c2():s=u2():t.getStatus()===402?s=l2(n.bucket):t.getStatus()===403?s=h2(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function J2(n){const e=dC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=a2(n.path)),a.serverResponse=s.serverResponse,a}return t}function Z2(n,e,t){const r=e.fullServerUrl(),s=N_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new cC(s,a,X2(n,t),u);return d.errorHandler=J2(e),d}function eM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function tM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=eM(null,e)),r}function nM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let se="";for(let q=0;q<2;q++)se=se+Math.random().toString().slice(2);return se}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=tM(e,r,s),v=Q2(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",k=Xi.getBlob(E,r,T);if(k===null)throw _2();const L={name:m.fullPath},z=N_(a,n.host,n._protocol),B="POST",ee=n.maxUploadRetryTime,K=new cC(z,B,Y2(n,t),ee);return K.urlParams=L,K.headers=u,K.body=k.uploadData(),K.errorHandler=dC(e),K}class rM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=io.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=io.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=io.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw Xl("cannot .send() more than once");if(Vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iM extends rM{initXhr(){this.xhr_.responseType="text"}}function fC(){return new iM}/**
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
 */class fo{constructor(e,t){this._service=e,t instanceof On?this._location=t:this._location=On.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fo(e,t)}get root(){const e=new On(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aC(this._location.path)}get storage(){return this._service}get parent(){const e=z2(this._location.path);if(e===null)return null;const t=new On(this._location.bucket,e);return new fo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw E2(e)}}function sM(n,e,t){n._throwIfRoot("uploadBytes");const r=nM(n.storage,n._location,lC(),new Xi(e,!0),t);return n.storage.makeRequestWithTokens(r,fC).then(s=>({metadata:s,ref:n}))}function oM(n){n._throwIfRoot("getDownloadURL");const e=Z2(n.storage,n._location,lC());return n.storage.makeRequestWithTokens(e,fC).then(t=>{if(t===null)throw y2();return t})}function aM(n,e){const t=$2(n._location.path,e),r=new On(n._location.bucket,t);return new fo(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(n){return/^[A-Za-z]+:\/\//.test(n)}function uM(n,e){return new fo(n,e)}function pC(n,e){if(n instanceof x_){const t=n;if(t._bucket==null)throw g2();const r=new fo(t,t._bucket);return e!=null?pC(r,e):r}else return e!==void 0?aM(n,e):n}function cM(n,e){if(e&&lM(e)){if(n instanceof x_)return uM(n,e);throw Ym("To use ref(service, url), the first argument must be a Storage instance.")}else return pC(n,e)}function hT(n,e){const t=e==null?void 0:e[eC];return t==null?null:On.makeFromBucketSpec(t,n)}function hM(n,e,t,r={}){n.host=`${e}:${t}`;const s=Vr(e);s&&(Rd(`https://${n.host}/b`),Ad("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:eg(a,n.app.options.projectId))}class x_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=ZS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=s2,this._maxUploadRetryTime=o2,this._requests=new Set,s!=null?this._bucket=On.makeFromBucketSpec(s,this._host):this._bucket=hT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=On.makeFromBucketSpec(this._url,e):this._bucket=hT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fo(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new w2(tC());{const u=D2(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const dT="@firebase/storage",fT="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="storage";function dM(n,e,t){return n=Ke(n),sM(n,e,t)}function fM(n){return n=Ke(n),oM(n)}function pM(n,e){return n=Ke(n),cM(n,e)}function mM(n=Nd(),e){n=Ke(n);const r=Bu(n,mC).getImmediate({identifier:e}),s=Zm("storage");return s&&gM(r,...s),r}function gM(n,e,t,r={}){hM(n,e,t,r)}function _M(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new x_(t,r,s,e,vs)}function yM(){us(new fi(mC,_M,"PUBLIC").setMultipleInstances(!0)),qn(dT,fT,""),qn(dT,fT,"esm2017")}yM();const vM={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},EM="https://enteesee-api.vnhairmarket.com",cf=PT(vM),Uu=R1(cf),Fa=ID(cf),kh=e2(cf),wM=mM(cf),Ua=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối"}],ui=n=>(Ua.find(e=>e.id===n)||{name:n}).name,Jl={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},lm=["waiting_acceptance","in_progress","waiting_review","completed"],TM={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function pT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function gC(n,e){return e.trim()?pT(n).includes(pT(e)):!0}function ci(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function IM(){const[n,e]=me.useState(""),[t,r]=me.useState(""),[s,a]=me.useState(""),[u,d]=me.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await hP(Uu,n.trim(),t)}catch(v){a(v.code==="auth/invalid-credential"?"Email hoặc mật khẩu chưa đúng.":`Đăng nhập thất bại: ${v.message}`)}finally{d(!1)}}return N.jsx("div",{className:"login-page",children:N.jsxs("div",{className:"login-card",children:[N.jsx("div",{className:"login-logo",children:"E"}),N.jsx("h1",{children:"Enteesee"}),N.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),N.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&N.jsx("div",{className:"err",children:s}),N.jsxs("form",{onSubmit:f,children:[N.jsx("div",{style:{marginBottom:10},children:N.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),N.jsx("div",{style:{marginBottom:12},children:N.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),N.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),N.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}async function Ar(n,{method:e="GET",body:t,token:r}={}){const s=r||(Uu.currentUser?await Uu.currentUser.getIdToken():""),a=await fetch(`${EM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0}),u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}const dr={sendMessage:n=>Ar("/api/messages",{method:"POST",body:n}),pinMessage:(n,e)=>Ar(`/api/messages/${n}/pin`,{method:"POST",body:{pinned:e}}),markSeen:n=>Ar(`/api/messages/${n}/seen`,{method:"POST",body:{}}),listTasks:(n="")=>Ar(`/api/tasks${n}`),createTask:n=>Ar("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>Ar(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>Ar("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>Ar("/api/jobs"),listUsers:()=>Ar("/api/users"),setTelegramChatId:(n,e)=>Ar(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})};function mT(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?N.jsx("b",{className:"mention",children:t},r):N.jsx("span",{children:t},r))}function SM({person:n,presence:e}){const[t,r]=me.useState([]),[s,a]=me.useState([]),[u,d]=me.useState(""),[f,m]=me.useState(""),[v,E]=me.useState(""),[T,k]=me.useState(!1),[L,z]=me.useState(null),[B,ee]=me.useState(null),[K,se]=me.useState(""),[q,Re]=me.useState(!1),[pe,x]=me.useState(!1),S=me.useRef(null),A=me.useRef(null);me.useEffect(()=>hd(xu(Pu(Fa,"messages"),ud("createdAt","asc"),cd(200)),W=>r(W.docs.map(ne=>({id:ne.id,...ne.data()}))),()=>se("Không tải được tin nhắn — kiểm tra mạng hoặc quyền Firestore.")),[]),me.useEffect(()=>hd(xu(Pu(Fa,"aiEvents"),ud("createdAt","desc"),cd(200)),W=>a(W.docs.map(ne=>({id:ne.id,...ne.data()})))),[]);const D=me.useMemo(()=>{const W=new Map;for(const ne of s)ne.messageId&&W.set(ne.messageId,ne);return W},[s]),b=me.useMemo(()=>{const W=t.filter(oe=>!oe.threadId),ne=v.trim();return W.filter(oe=>gC(`${oe.content||""} ${oe.senderName||""}`,ne))},[t,v]),V=W=>t.filter(ne=>ne.threadId===W);me.useEffect(()=>{t.slice(-5).forEach(ne=>{ne.id&&!(ne.seenBy||[]).includes(n.id)&&dr.markSeen(ne.id).catch(()=>{})})},[t,n.id]);function R(W){d(W);const ne=W.match(/@([A-Za-zÀ-ỹ]*)$/);ne?(m(ne[1]),k(!0)):k(!1)}function lt(W){d(ne=>ne.replace(/@[A-Za-zÀ-ỹ]*$/,`@${W.name} `)),k(!1)}async function At(){const W=u.trim();if(!(!W||q)){Re(!0),se("");try{await dr.sendMessage({content:W,threadId:L?L.id:null}),d(""),z(null)}catch(ne){se(ne.message)}finally{Re(!1)}}}async function bt(W){if(W){x(!0),se("");try{const ne=`rooms/general/${Date.now()}_${W.name}`,oe=await dM(pM(wM,ne),W),M=await fM(oe.ref);await dr.sendMessage({content:`Đã gửi file: ${W.name}`,attachments:[{name:W.name,size:W.size,type:W.type,url:M,path:ne}]})}catch(ne){se(`Gửi file thất bại: ${ne.message}`)}finally{x(!1)}}}const He=W=>{const ne=e[W];return!ne||!ne.lastSeen?!1:Date.now()-Date.parse(ne.lastSeen)<12e4};return N.jsxs("div",{children:[N.jsxs("div",{className:"presence-row",children:[Ua.filter(W=>W.id!=="muse").map(W=>N.jsxs("span",{className:"person-chip",title:W.roleVi,children:[N.jsx("span",{className:"avatar sm",children:W.name.charAt(0)}),W.name,N.jsx("span",{className:He(W.id)?"online-dot":"offline-dot"})]},W.id)),N.jsx("span",{className:"muted",children:"Muse điều phối: @muse_daica_bot"})]}),N.jsx("input",{className:"search",value:v,onChange:W=>E(W.target.value),placeholder:"Tìm tin nhắn…"}),N.jsxs("div",{className:"chat-list",ref:A,children:[b.length===0&&N.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),b.filter(W=>W.pinned).map(W=>N.jsx(gT,{m:W,person:n,event:D.get(W.id),onReply:z,threadOpen:B,setThreadOpen:ee,threadReplies:V,pinned:!0},`pin-${W.id}`)),b.map(W=>N.jsx(gT,{m:W,person:n,event:D.get(W.id),onReply:z,threadOpen:B,setThreadOpen:ee,threadReplies:V},W.id))]}),L&&N.jsxs("div",{className:"card",children:[N.jsxs("span",{className:"muted",children:["Đang trả lời ",L.senderName,": ",(L.content||"").slice(0,80)]})," ",N.jsx("button",{onClick:()=>z(null),children:"Hủy"})]}),T&&N.jsx("div",{className:"mention-list",children:Ua.filter(W=>W.name.toLowerCase().startsWith(f.toLowerCase())).map(W=>N.jsxs("button",{type:"button",onClick:()=>lt(W),children:["@",W.name," — ",W.roleVi]},W.id))}),K&&N.jsx("div",{className:"err",children:K}),N.jsxs("div",{className:"composer",children:[N.jsx("textarea",{value:u,onChange:W=>R(W.target.value),placeholder:"Nhắn tin… gõ @ để tag ai đó",rows:2,onKeyDown:W=>{W.key==="Enter"&&!W.shiftKey&&(W.preventDefault(),At())}}),N.jsx("button",{type:"button",onClick:()=>S.current&&S.current.click(),disabled:pe,title:"Gửi file",children:"File"}),N.jsx("input",{ref:S,type:"file",style:{display:"none"},onChange:W=>{bt(W.target.files[0]),W.target.value=""}}),N.jsx("button",{className:"primary",type:"button",onClick:At,disabled:q||!u.trim(),children:"Gửi"})]}),pe&&N.jsx("div",{className:"muted",children:"Đang tải file lên…"}),N.jsx("p",{className:"muted",children:"Tag @tên ai thì người đó nhận được thông báo ngay và Muse của họ trả lời qua API — không cần chờ họ mở app."})]})}function gT({m:n,person:e,event:t,onReply:r,threadOpen:s,setThreadOpen:a,threadReplies:u,pinned:d}){const f=u(n.id),m=n.senderId===e.id,v=t,E=(n.senderName||ui(n.senderId)||"?").charAt(0);return N.jsxs("div",{className:`msg-row ${m?"mine":""}`,children:[!m&&N.jsx("span",{className:`avatar${n.senderType==="ai"?" mine":""}`,children:E}),N.jsxs("div",{className:`msg ${m?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||d?"pinned":""}`,children:[N.jsxs("div",{className:"meta",children:[N.jsx("b",{children:n.senderName||ui(n.senderId)}),n.senderType==="ai"&&N.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||d)&&N.jsx("span",{className:"tag status",children:"Đã ghim"}),N.jsx("span",{children:ci(n.createdAt)}),(n.seenBy||[]).length>0&&N.jsxs("span",{children:["Đã xem: ",(n.seenBy||[]).map(ui).join(", ")]})]}),N.jsx("div",{className:"content",children:mT(n.content)}),n.linkPreview&&N.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&N.jsx("img",{src:n.linkPreview.image,alt:""}),N.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&N.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((T,k)=>N.jsxs("div",{children:[N.jsx("a",{href:T.url,target:"_blank",rel:"noreferrer",children:T.name})," ",N.jsxs("span",{className:"muted",children:["(",Math.round((T.size||0)/1024)," KB)"]})]},k)),v&&N.jsxs("div",{style:{marginTop:6},children:[v.museRepliedAt?N.jsxs("span",{className:"tag ai-replied",children:["Muse đã phản hồi ",ci(v.museRepliedAt)]}):N.jsx("span",{className:"tag wait-ack",children:"Muse đang phản hồi…"}),v.employeeAcknowledgedAt?N.jsxs("span",{className:"tag acked",children:["Nhân viên đã xác nhận ",ci(v.employeeAcknowledgedAt)]}):N.jsx("span",{className:"tag wait-ack",children:"Nhân viên chưa xác nhận"})]}),N.jsxs("div",{className:"row",style:{marginTop:8},children:[N.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),f.length>0&&N.jsxs("button",{type:"button",onClick:()=>a(s===n.id?null:n.id),children:[s===n.id?"Ẩn":"Xem"," ",f.length," trả lời"]}),N.jsx("button",{type:"button",onClick:()=>dr.pinMessage(n.id,!n.pinned).catch(()=>{}),children:n.pinned?"Bỏ ghim":"Ghim"})]}),s===n.id&&f.map(T=>N.jsxs("div",{className:"msg thread-reply",children:[N.jsxs("div",{className:"meta",children:[N.jsx("b",{children:T.senderName||ui(T.senderId)}),N.jsx("span",{children:ci(T.createdAt)})]}),N.jsx("div",{className:"content",children:mT(T.content)})]},T.id))]})]})}function CM({person:n}){const[e,t]=me.useState([]),[r,s]=me.useState("all"),[a,u]=me.useState(""),[d,f]=me.useState(!1),[m,v]=me.useState(""),[E,T]=me.useState(null),[k,L]=me.useState("");async function z(){try{const q=n.role==="manager"?"":`?assignee=${n.id}`,Re=await dr.listTasks(q);t(Re.tasks||[])}catch(q){v(q.message)}}me.useEffect(()=>{z();const q=setInterval(z,15e3);return()=>clearInterval(q)},[n.id,n.role]);const B=me.useMemo(()=>e.filter(q=>r!=="all"&&q.status!==r?!1:gC(`${q.title} ${q.description||""} ${(q.assignees||[]).map(ui).join(" ")}`,a)),[e,r,a]);async function ee(q,Re,pe){v("");try{await dr.setTaskStatus(q.id,Re,pe),await z()}catch(x){v(x.message)}}const K=n.role==="manager",se=lm.reduce((q,Re)=>({...q,[Re]:e.filter(pe=>pe.status===Re).length}),{});return N.jsxs("div",{children:[N.jsx("div",{className:"row",style:{marginBottom:10},children:lm.map(q=>N.jsxs("span",{className:"tag status",children:[Jl[q],": ",se[q]||0]},q))}),N.jsx("input",{className:"search",value:a,onChange:q=>u(q.target.value),placeholder:"Tìm công việc…"}),N.jsxs("div",{className:"row",style:{marginBottom:10},children:[N.jsxs("select",{value:r,onChange:q=>s(q.target.value),children:[N.jsx("option",{value:"all",children:"Tất cả trạng thái"}),lm.map(q=>N.jsx("option",{value:q,children:Jl[q]},q))]}),K&&N.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&N.jsx("div",{className:"err",children:m}),d&&K&&N.jsx(RM,{onDone:()=>{f(!1),z()},onCancel:()=>f(!1)}),B.length===0&&N.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có công việc nào."}),B.map(q=>{const Re=(q.assignees||[]).includes(n.id);return N.jsxs("div",{className:"card",children:[N.jsx("h3",{children:q.title}),N.jsx("div",{className:"muted",children:q.description||""}),N.jsxs("div",{className:"row",style:{marginTop:6},children:[N.jsx("span",{className:"tag status",children:Jl[q.status]}),N.jsxs("span",{className:"tag status",children:["Ưu tiên: ",TM[q.priority]||q.priority]}),N.jsxs("span",{className:"muted",children:["Người nhận: ",(q.assignees||[]).map(ui).join(", ")]}),q.dueAt&&N.jsxs("span",{className:"muted",children:["Hạn: ",ci(q.dueAt)]})]}),q.reviewNote&&N.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",q.reviewNote]}),N.jsxs("div",{className:"row",style:{marginTop:10},children:[q.status==="waiting_acceptance"&&Re&&N.jsx("button",{className:"primary",onClick:()=>ee(q,"in_progress"),children:"Xác nhận nhận việc"}),q.status==="in_progress"&&Re&&N.jsx("button",{className:"primary",onClick:()=>ee(q,"waiting_review"),children:"Trình duyệt"}),q.status==="waiting_review"&&K&&N.jsx("button",{className:"primary",onClick:()=>ee(q,"completed"),children:"Duyệt — Hoàn thành"}),q.status==="waiting_review"&&K&&N.jsx("button",{className:"danger",onClick:()=>T(q.id),children:"Yêu cầu sửa"}),q.status==="completed"&&N.jsxs("span",{className:"tag acked",children:["Đã duyệt ",ci(q.approvedAt)]})]}),E===q.id&&N.jsxs("div",{style:{marginTop:8},children:[N.jsx("input",{value:k,onChange:pe=>L(pe.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),N.jsxs("div",{className:"row",style:{marginTop:6},children:[N.jsx("button",{disabled:!k.trim(),onClick:()=>{ee(q,"in_progress",k.trim()),T(null),L("")},children:"Gửi yêu cầu sửa"}),N.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(q.history||[]).length>0&&N.jsxs("details",{style:{marginTop:8},children:[N.jsxs("summary",{className:"muted",children:["Lịch sử (",q.history.length,")"]}),(q.history||[]).map((pe,x)=>N.jsxs("div",{className:"muted",children:[ci(pe.at)," — ",ui(pe.by),": ",pe.from?Jl[pe.from]:"—"," → ",Jl[pe.to],pe.reason?` — ${pe.reason}`:""]},x))]})]},q.id)})]})}function RM({onDone:n,onCancel:e}){const[t,r]=me.useState(""),[s,a]=me.useState(""),[u,d]=me.useState([]),[f,m]=me.useState(""),[v,E]=me.useState("normal"),[T,k]=me.useState(""),[L,z]=me.useState(!1);async function B(ee){if(ee.preventDefault(),!t.trim()||u.length===0){k("Nhập tiêu đề và chọn ít nhất một người nhận.");return}z(!0),k("");try{await dr.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:v}),n()}catch(K){k(K.message)}finally{z(!1)}}return N.jsxs("form",{className:"card",onSubmit:B,children:[N.jsx("input",{value:t,onChange:ee=>r(ee.target.value),placeholder:"Tiêu đề công việc",required:!0}),N.jsx("div",{style:{height:8}}),N.jsx("textarea",{value:s,onChange:ee=>a(ee.target.value),placeholder:"Mô tả",rows:3}),N.jsx("div",{style:{height:8}}),N.jsx("div",{className:"muted",children:"Người nhận (chọn một hoặc nhiều):"}),N.jsx("div",{className:"row",children:Ua.filter(ee=>ee.role==="staff").map(ee=>N.jsxs("label",{style:{display:"flex",gap:6,alignItems:"center"},children:[N.jsx("input",{type:"checkbox",style:{width:"auto"},checked:u.includes(ee.id),onChange:K=>d(K.target.checked?[...u,ee.id]:u.filter(se=>se!==ee.id))}),ee.name]},ee.id))}),N.jsx("div",{style:{height:8}}),N.jsxs("div",{className:"row",children:[N.jsx("input",{type:"datetime-local",value:f,onChange:ee=>m(ee.target.value)}),N.jsxs("select",{value:v,onChange:ee=>E(ee.target.value),children:[N.jsx("option",{value:"urgent",children:"Khẩn cấp"}),N.jsx("option",{value:"high",children:"Cao"}),N.jsx("option",{value:"normal",children:"Bình thường"}),N.jsx("option",{value:"low",children:"Thấp"})]})]}),T&&N.jsx("div",{className:"err",style:{marginTop:8},children:T}),N.jsxs("div",{className:"row",style:{marginTop:10},children:[N.jsx("button",{className:"primary",type:"submit",disabled:L,children:"Giao việc"}),N.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const AM={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận"};function kM({person:n,onUnread:e}){const[t,r]=me.useState([]),[s,a]=me.useState("");me.useEffect(()=>hd(xu(Pu(Fa,"notifications"),z0("recipientId","==",n.id),ud("createdAt","desc"),cd(100)),d=>{const f=d.docs.map(m=>({id:m.id,...m.data()}));r(f),e(f.filter(m=>!m.read).length)},()=>a("Không tải được thông báo.")),[n.id,e]);async function u(){await Promise.all(t.filter(d=>!d.read).map(d=>VD(TD(Fa,"notifications",d.id),{read:!0}).catch(()=>{})))}return N.jsxs("div",{children:[N.jsxs("div",{className:"row",style:{marginBottom:10},children:[N.jsx("b",{children:"Thông báo của bạn"}),N.jsx("button",{onClick:u,children:"Đánh dấu đã đọc hết"})]}),s&&N.jsx("div",{className:"err",children:s}),t.length===0&&N.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(d=>N.jsxs("div",{className:`card${d.read?"":" unread"}`,style:d.read?{opacity:.65}:{},children:[N.jsxs("div",{className:"row",children:[N.jsx("span",{className:"tag status",children:AM[d.type]||d.type}),N.jsx("span",{className:"muted",children:ci(d.createdAt)})]}),N.jsxs("div",{style:{marginTop:6},children:[ui(d.senderId),": ",d.content]})]},d.id))]})}function PM({person:n,presence:e,onSignOut:t}){const[r,s]=me.useState([]),[a,u]=me.useState([]),[d,f]=me.useState(""),[m,v]=me.useState([]),[E,T]=me.useState({}),[k,L]=me.useState("");me.useEffect(()=>hd(xu(Pu(Fa,"aiEvents"),ud("createdAt","desc"),cd(20)),K=>s(K.docs.map(se=>({id:se.id,...se.data()})))),[]),me.useEffect(()=>{n.role==="manager"&&(dr.listJobs().then(K=>u(K.jobs||[])).catch(K=>f(K.message)),dr.listUsers().then(K=>v(K.users||[])).catch(()=>{}))},[n.role]);const B=r.filter(K=>(K.mentions||[]).includes(n.id)).find(K=>K.museRepliedAt),ee=a.filter(K=>K.deadLetter);return N.jsxs("div",{children:[N.jsxs("div",{className:"card",children:[N.jsx("h3",{children:n.name}),N.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),N.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),N.jsxs("div",{className:"muted",children:["Muse của bạn: ",B?`đã phản hồi lần cuối ${ci(B.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),N.jsx("div",{className:"row",style:{marginTop:10},children:N.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),N.jsxs("div",{className:"card",children:[N.jsx("h3",{children:"Kênh Telegram"}),N.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),N.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),N.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),N.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&N.jsxs("div",{className:"card",children:[N.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),m.length===0&&N.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),m.map(K=>N.jsxs("div",{className:"row",style:{marginBottom:8},children:[N.jsx("span",{style:{minWidth:60},children:K.name}),N.jsx("input",{value:E[K.id]!==void 0?E[K.id]:K.telegramChatId||"",onChange:se=>T({...E,[K.id]:se.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),N.jsx("button",{onClick:async()=>{await dr.setTelegramChatId(K.id,E[K.id]!==void 0?E[K.id]:K.telegramChatId||""),L(`Đã lưu chat_id của ${K.name}.`),dr.listUsers().then(se=>v(se.users||[]))},children:"Lưu"})]},K.id)),k&&N.jsx("div",{className:"muted",children:k})]}),n.role==="manager"&&N.jsxs("div",{className:"card",children:[N.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),d&&N.jsx("div",{className:"err",children:d}),a.length===0&&N.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),ee.length>0&&N.jsxs("div",{className:"err",children:["Có ",ee.length," job vào dead-letter (gửi thất bại nhiều lần): ",ee.map(K=>K.eventId).join(", ")]}),a.slice(0,20).map(K=>N.jsxs("div",{className:"muted",children:[K.eventId," → ",ui(K.recipientId),": ",K.status," (lần thử ",K.attempt,")",K.lastError?` — ${K.lastError}`:""]},K.jobId))]})]})}const NM={chat:N.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:N.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:N.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[N.jsx("path",{d:"M9 11l3 3L22 4"}),N.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:N.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[N.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),N.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:N.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[N.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),N.jsx("circle",{cx:"12",cy:"7",r:"4"})]})},xM=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function DM(){const[n,e]=me.useState(null),[t,r]=me.useState(null),[s,a]=me.useState("chat"),[u,d]=me.useState({}),[f,m]=me.useState(0);return me.useEffect(()=>pP(Uu,async v=>{if(e(v),!v){r(null);return}const E=(v.email||"").toLowerCase();let T=null;try{const k=xu(Pu(Fa,"users"),z0("email","==",E)),L=await MD(k);if(!L.empty){const z=L.docs[0].data();T=Ua.find(B=>B.id===z.id)||{id:z.id,name:z.name||E,role:z.role||"staff",roleVi:z.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!T&&E==="teddyssk559@gmail.com"&&(T=Ua.find(k=>k.id==="chung")),T||(T={id:v.uid,name:v.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),r(T)}),[]),me.useEffect(()=>{if(!n||!t)return;const v=Ch(kh,`presence/${t.id}`),E=()=>lT(Ch(kh,`presence/${t.id}`),{online:!0,lastSeen:new Date().toISOString(),name:t.name}).catch(()=>{});E(),WL(v).remove().catch(()=>{});const T=setInterval(E,45e3),k=qL(Ch(kh,"presence"),L=>d(L.val()||{}));return()=>{clearInterval(T),k(),lT(Ch(kh,`presence/${t.id}`),null).catch(()=>{})}},[n,t]),n?t?N.jsxs("div",{className:"app",children:[N.jsxs("header",{className:"header",children:[N.jsxs("div",{className:"brand",children:[N.jsx("span",{className:"avatar",children:t.name.charAt(0)}),N.jsxs("div",{children:[N.jsx("div",{className:"brand-title",children:"Enteesee"}),N.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]})]}),N.jsxs("div",{className:"who",children:[N.jsx("span",{className:u[t.id]?"online-dot":"offline-dot"}),N.jsx("span",{children:t.name}),N.jsxs("span",{className:"muted",children:["· ",t.roleVi]})]})]}),N.jsxs("main",{className:"main",children:[s==="chat"&&N.jsx(SM,{person:t,presence:u}),s==="tasks"&&N.jsx(CM,{person:t}),s==="notifs"&&N.jsx(kM,{person:t,onUnread:m}),s==="account"&&N.jsx(PM,{person:t,presence:u,onSignOut:()=>mP(Uu)})]}),N.jsx("nav",{className:"nav",children:xM.map(v=>N.jsxs("button",{className:s===v.id?"active":"",onClick:()=>a(v.id),children:[N.jsxs("span",{className:"nav-icon",children:[NM[v.id],v.id==="notifs"&&f>0&&N.jsx("span",{className:"badge",children:f})]}),N.jsx("span",{children:v.label})]},v.id))})]}):N.jsx("div",{className:"app",children:N.jsx("div",{className:"main",children:N.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})}):N.jsx(IM,{})}NR.createRoot(document.getElementById("root")).render(N.jsx(IR.StrictMode,{children:N.jsx(DM,{})}));
