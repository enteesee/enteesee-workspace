(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function MT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qp={exports:{}},tu={},Gp={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function HR(){if(Jv)return Fe;Jv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,L={};function F(V,G,Ee){this.props=V,this.context=G,this.refs=L,this.updater=Ee||P}F.prototype.isReactComponent={},F.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},F.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=F.prototype;function K(V,G,Ee){this.props=V,this.context=G,this.refs=L,this.updater=Ee||P}var Z=K.prototype=new ae;Z.constructor=K,M(Z,F.prototype),Z.isPureReactComponent=!0;var j=Array.isArray,Te=Object.prototype.hasOwnProperty,me={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(V,G,Ee){var Oe,xe={},Ve=null,We=null;if(G!=null)for(Oe in G.ref!==void 0&&(We=G.ref),G.key!==void 0&&(Ve=""+G.key),G)Te.call(G,Oe)&&!b.hasOwnProperty(Oe)&&(xe[Oe]=G[Oe]);var qe=arguments.length-2;if(qe===1)xe.children=Ee;else if(1<qe){for(var nt=Array(qe),It=0;It<qe;It++)nt[It]=arguments[It+2];xe.children=nt}if(V&&V.defaultProps)for(Oe in qe=V.defaultProps,qe)xe[Oe]===void 0&&(xe[Oe]=qe[Oe]);return{$$typeof:n,type:V,key:Ve,ref:We,props:xe,_owner:me.current}}function A(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function D(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ee){return G[Ee]})}var U=/\/+/g;function k(V,G){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):G.toString(36)}function ye(V,G,Ee,Oe,xe){var Ve=typeof V;(Ve==="undefined"||Ve==="boolean")&&(V=null);var We=!1;if(V===null)We=!0;else switch(Ve){case"string":case"number":We=!0;break;case"object":switch(V.$$typeof){case n:case e:We=!0}}if(We)return We=V,xe=xe(We),V=Oe===""?"."+k(We,0):Oe,j(xe)?(Ee="",V!=null&&(Ee=V.replace(U,"$&/")+"/"),ye(xe,G,Ee,"",function(It){return It})):xe!=null&&(x(xe)&&(xe=A(xe,Ee+(!xe.key||We&&We.key===xe.key?"":(""+xe.key).replace(U,"$&/")+"/")+V)),G.push(xe)),1;if(We=0,Oe=Oe===""?".":Oe+":",j(V))for(var qe=0;qe<V.length;qe++){Ve=V[qe];var nt=Oe+k(Ve,qe);We+=ye(Ve,G,Ee,nt,xe)}else if(nt=T(V),typeof nt=="function")for(V=nt.call(V),qe=0;!(Ve=V.next()).done;)Ve=Ve.value,nt=Oe+k(Ve,qe++),We+=ye(Ve,G,Ee,nt,xe);else if(Ve==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return We}function $e(V,G,Ee){if(V==null)return V;var Oe=[],xe=0;return ye(V,Oe,"","",function(Ve){return G.call(Ee,Ve,xe++)}),Oe}function ne(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(Ee){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ee)},function(Ee){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ee)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var ce={current:null},Y={transition:null},se={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Y,ReactCurrentOwner:me};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:$e,forEach:function(V,G,Ee){$e(V,function(){G.apply(this,arguments)},Ee)},count:function(V){var G=0;return $e(V,function(){G++}),G},toArray:function(V){return $e(V,function(G){return G})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Fe.Component=F,Fe.Fragment=t,Fe.Profiler=s,Fe.PureComponent=K,Fe.StrictMode=r,Fe.Suspense=f,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Fe.act=ie,Fe.cloneElement=function(V,G,Ee){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Oe=M({},V.props),xe=V.key,Ve=V.ref,We=V._owner;if(G!=null){if(G.ref!==void 0&&(Ve=G.ref,We=me.current),G.key!==void 0&&(xe=""+G.key),V.type&&V.type.defaultProps)var qe=V.type.defaultProps;for(nt in G)Te.call(G,nt)&&!b.hasOwnProperty(nt)&&(Oe[nt]=G[nt]===void 0&&qe!==void 0?qe[nt]:G[nt])}var nt=arguments.length-2;if(nt===1)Oe.children=Ee;else if(1<nt){qe=Array(nt);for(var It=0;It<nt;It++)qe[It]=arguments[It+2];Oe.children=qe}return{$$typeof:n,type:V.type,key:xe,ref:Ve,props:Oe,_owner:We}},Fe.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Fe.createElement=C,Fe.createFactory=function(V){var G=C.bind(null,V);return G.type=V,G},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(V){return{$$typeof:d,render:V}},Fe.isValidElement=x,Fe.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:ne}},Fe.memo=function(V,G){return{$$typeof:m,type:V,compare:G===void 0?null:G}},Fe.startTransition=function(V){var G=Y.transition;Y.transition={};try{V()}finally{Y.transition=G}},Fe.unstable_act=ie,Fe.useCallback=function(V,G){return ce.current.useCallback(V,G)},Fe.useContext=function(V){return ce.current.useContext(V)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(V){return ce.current.useDeferredValue(V)},Fe.useEffect=function(V,G){return ce.current.useEffect(V,G)},Fe.useId=function(){return ce.current.useId()},Fe.useImperativeHandle=function(V,G,Ee){return ce.current.useImperativeHandle(V,G,Ee)},Fe.useInsertionEffect=function(V,G){return ce.current.useInsertionEffect(V,G)},Fe.useLayoutEffect=function(V,G){return ce.current.useLayoutEffect(V,G)},Fe.useMemo=function(V,G){return ce.current.useMemo(V,G)},Fe.useReducer=function(V,G,Ee){return ce.current.useReducer(V,G,Ee)},Fe.useRef=function(V){return ce.current.useRef(V)},Fe.useState=function(V){return ce.current.useState(V)},Fe.useSyncExternalStore=function(V,G,Ee){return ce.current.useSyncExternalStore(V,G,Ee)},Fe.useTransition=function(){return ce.current.useTransition()},Fe.version="18.3.1",Fe}var Zv;function ug(){return Zv||(Zv=1,Gp.exports=HR()),Gp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function qR(){if(eE)return tu;eE=1;var n=ug(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,E={},T=null,P=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(P=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:d,key:T,ref:P,props:E,_owner:s.current}}return tu.Fragment=t,tu.jsx=u,tu.jsxs=u,tu}var tE;function GR(){return tE||(tE=1,qp.exports=qR()),qp.exports}var I=GR(),J=ug();const KR=MT(J);var Sh={},Kp={exports:{}},Pn={},Qp={exports:{}},Yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function QR(){return nE||(nE=1,(function(n){function e(Y,se){var ie=Y.length;Y.push(se);e:for(;0<ie;){var V=ie-1>>>1,G=Y[V];if(0<s(G,se))Y[V]=se,Y[ie]=G,ie=V;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var se=Y[0],ie=Y.pop();if(ie!==se){Y[0]=ie;e:for(var V=0,G=Y.length,Ee=G>>>1;V<Ee;){var Oe=2*(V+1)-1,xe=Y[Oe],Ve=Oe+1,We=Y[Ve];if(0>s(xe,ie))Ve<G&&0>s(We,xe)?(Y[V]=We,Y[Ve]=ie,V=Ve):(Y[V]=xe,Y[Oe]=ie,V=Oe);else if(Ve<G&&0>s(We,ie))Y[V]=We,Y[Ve]=ie,V=Ve;else break e}}return se}function s(Y,se){var ie=Y.sortIndex-se.sortIndex;return ie!==0?ie:Y.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,E=null,T=3,P=!1,M=!1,L=!1,F=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(Y){for(var se=t(m);se!==null;){if(se.callback===null)r(m);else if(se.startTime<=Y)r(m),se.sortIndex=se.expirationTime,e(f,se);else break;se=t(m)}}function j(Y){if(L=!1,Z(Y),!M)if(t(f)!==null)M=!0,ne(Te);else{var se=t(m);se!==null&&ce(j,se.startTime-Y)}}function Te(Y,se){M=!1,L&&(L=!1,ae(C),C=-1),P=!0;var ie=T;try{for(Z(se),E=t(f);E!==null&&(!(E.expirationTime>se)||Y&&!D());){var V=E.callback;if(typeof V=="function"){E.callback=null,T=E.priorityLevel;var G=V(E.expirationTime<=se);se=n.unstable_now(),typeof G=="function"?E.callback=G:E===t(f)&&r(f),Z(se)}else r(f);E=t(f)}if(E!==null)var Ee=!0;else{var Oe=t(m);Oe!==null&&ce(j,Oe.startTime-se),Ee=!1}return Ee}finally{E=null,T=ie,P=!1}}var me=!1,b=null,C=-1,A=5,x=-1;function D(){return!(n.unstable_now()-x<A)}function U(){if(b!==null){var Y=n.unstable_now();x=Y;var se=!0;try{se=b(!0,Y)}finally{se?k():(me=!1,b=null)}}else me=!1}var k;if(typeof K=="function")k=function(){K(U)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,$e=ye.port2;ye.port1.onmessage=U,k=function(){$e.postMessage(null)}}else k=function(){F(U,0)};function ne(Y){b=Y,me||(me=!0,k())}function ce(Y,se){C=F(function(){Y(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){M||P||(M=!0,ne(Te))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var se=3;break;default:se=T}var ie=T;T=se;try{return Y()}finally{T=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ie=T;T=Y;try{return se()}finally{T=ie}},n.unstable_scheduleCallback=function(Y,se,ie){var V=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,Y){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ie+G,Y={id:y++,callback:se,priorityLevel:Y,startTime:ie,expirationTime:G,sortIndex:-1},ie>V?(Y.sortIndex=ie,e(m,Y),t(f)===null&&Y===t(m)&&(L?(ae(C),C=-1):L=!0,ce(j,ie-V))):(Y.sortIndex=G,e(f,Y),M||P||(M=!0,ne(Te))),Y},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(Y){var se=T;return function(){var ie=T;T=se;try{return Y.apply(this,arguments)}finally{T=ie}}}})(Yp)),Yp}var rE;function YR(){return rE||(rE=1,Qp.exports=QR()),Qp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function XR(){if(iE)return Pn;iE=1;var n=ug(),e=YR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function T(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function P(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,l,h){if(o===null||typeof o>"u"||P(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function L(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){F[i]=new L(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];F[o]=new L(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){F[i]=new L(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){F[i]=new L(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){F[i]=new L(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){F[i]=new L(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){F[i]=new L(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){F[i]=new L(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){F[i]=new L(i,5,!1,i.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function K(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(ae,K);F[o]=new L(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(ae,K);F[o]=new L(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(ae,K);F[o]=new L(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){F[i]=new L(i,1,!1,i.toLowerCase(),null,!1,!1)}),F.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){F[i]=new L(i,1,!1,i.toLowerCase(),null,!0,!0)});function Z(i,o,l,h){var p=F.hasOwnProperty(o)?F[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var j=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),me=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),Y=Symbol.iterator;function se(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var ie=Object.assign,V;function G(i){if(V===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+i}var Ee=!1;function Oe(i,o){if(!i||Ee)return"";Ee=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(H){var h=H}Reflect.construct(i,[],o)}else{try{o.call()}catch(H){h=H}i.call(o.prototype)}else{try{throw Error()}catch(H){h=H}i()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var p=H.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,R=_.length-1;1<=w&&0<=R&&p[w]!==_[R];)R--;for(;1<=w&&0<=R;w--,R--)if(p[w]!==_[R]){if(w!==1||R!==1)do if(w--,R--,0>R||p[w]!==_[R]){var N=`
`+p[w].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=w&&0<=R);break}}}finally{Ee=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function xe(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=Oe(i.type,!1),i;case 11:return i=Oe(i.type.render,!1),i;case 1:return i=Oe(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case me:return"Portal";case A:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case ye:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case U:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $e:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case ne:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function We(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function qe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function nt(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function It(i){var o=nt(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function an(i){i._valueTracker||(i._valueTracker=It(i))}function Or(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=nt(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Xt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function lr(i,o){var l=o.checked;return ie({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Lr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=qe(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ur(i,o){o=o.checked,o!=null&&Z(i,"checked",o,!1)}function Ui(i,o){ur(i,o);var l=qe(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?ji(i,o.type,l):o.hasOwnProperty("defaultValue")&&ji(i,o.type,qe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Hs(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ji(i,o,l){(o!=="number"||Xt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Hn=Array.isArray;function qn(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+qe(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function qs(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Bi(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Hn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:qe(l)}}function Mr(i,o){var l=qe(o.value),h=qe(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Gs(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ze(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function W(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ze(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Ie=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Xe(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gn=["Webkit","ms","Moz","O"];Object.keys(zt).forEach(function(i){Gn.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),zt[o]=zt[i]})});function Pt(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||zt.hasOwnProperty(i)&&zt[i]?(""+o).trim():o+"px"}function ct(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Pt(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Nt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jt(i,o){if(o){if(Nt[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Vr(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function Fr(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var zo=null,Kn=null,Ur=null;function $o(i){if(i=jl(i)){if(typeof zo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Uc(o),zo(i.stateNode,i.type,o))}}function jr(i){Kn?Ur?Ur.push(i):Ur=[i]:Kn=i}function _l(){if(Kn){var i=Kn,o=Ur;if(Ur=Kn=null,$o(i),o)for(i=0;i<o.length;i++)$o(o[i])}}function Ks(i,o){return i(o)}function yl(){}var ci=!1;function vl(i,o,l){if(ci)return i(o,l);ci=!0;try{return Ks(i,o,l)}finally{ci=!1,(Kn!==null||Ur!==null)&&(yl(),_l())}}function St(i,o){var l=i.stateNode;if(l===null)return null;var h=Uc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Wo=!1;if(d)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Wo=!1}function Qs(i,o,l,h,p,_,w,R,N){var H=Array.prototype.slice.call(arguments,3);try{o.apply(l,H)}catch(te){this.onError(te)}}var Ys=!1,Ho=null,hr=!1,El=null,Ef={onError:function(i){Ys=!0,Ho=i}};function qo(i,o,l,h,p,_,w,R,N){Ys=!1,Ho=null,Qs.apply(Ef,arguments)}function cc(i,o,l,h,p,_,w,R,N){if(qo.apply(this,arguments),Ys){if(Ys){var H=Ho;Ys=!1,Ho=null}else throw Error(t(198));hr||(hr=!0,El=H)}}function dr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Xs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function fr(i){if(dr(i)!==i)throw Error(t(188))}function hc(i){var o=i.alternate;if(!o){if(o=dr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return fr(p),i;if(_===h)return fr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,R=p.child;R;){if(R===l){w=!0,l=p,h=_;break}if(R===h){w=!0,h=p,l=_;break}R=R.sibling}if(!w){for(R=_.child;R;){if(R===l){w=!0,l=_,h=p;break}if(R===h){w=!0,h=_,l=p;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function wl(i){return i=hc(i),i!==null?Go(i):null}function Go(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Go(i);if(o!==null)return o;i=i.sibling}return null}var Ko=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,dc=e.unstable_shouldYield,wf=e.unstable_requestPaint,at=e.unstable_now,fc=e.unstable_getCurrentPriorityLevel,Js=e.unstable_ImmediatePriority,zi=e.unstable_UserBlockingPriority,Qn=e.unstable_NormalPriority,Il=e.unstable_LowPriority,pc=e.unstable_IdlePriority,Zs=null,Ln=null;function mc(i){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Zs,i,void 0,(i.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:_c,Sl=Math.log,gc=Math.LN2;function _c(i){return i>>>=0,i===0?32:31-(Sl(i)/gc|0)|0}var Qo=64,Yo=4194304;function $i(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function eo(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var R=w&~p;R!==0?h=$i(R):(_&=w,_!==0&&(h=$i(_)))}else w=l&~p,w!==0?h=$i(w):_!==0&&(h=$i(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-_n(o),p=1<<l,h|=i[l],o&=~p;return h}function Tf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hi(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-_n(_),R=1<<w,N=p[w];N===-1?((R&l)===0||(R&h)!==0)&&(p[w]=Tf(R,o)):N<=o&&(i.expiredLanes|=R),_&=~R}}function Mn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function to(){var i=Qo;return Qo<<=1,(Qo&4194240)===0&&(Qo=64),i}function Wi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Hi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-_n(o),i[o]=l}function st(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-_n(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function qi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-_n(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var He=0;function Gi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var yc,Xo,vc,Ec,wc,Cl=!1,Br=[],Zt=null,pr=null,mr=null,Ki=new Map,Yn=new Map,zr=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(i,o){switch(i){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ki.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(o.pointerId)}}function Tn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=jl(o),o!==null&&Xo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Sf(i,o,l,h,p){switch(o){case"focusin":return Zt=Tn(Zt,i,o,l,h,p),!0;case"dragenter":return pr=Tn(pr,i,o,l,h,p),!0;case"mouseover":return mr=Tn(mr,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Ki.set(_,Tn(Ki.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Yn.set(_,Tn(Yn.get(_)||null,i,o,l,h,p)),!0}return!1}function Ic(i){var o=oo(i.target);if(o!==null){var l=dr(o);if(l!==null){if(o=l.tag,o===13){if(o=Xs(l),o!==null){i.blockedOn=o,wc(i.priority,function(){vc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function di(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Jo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);ui=h,l.target.dispatchEvent(h),ui=null}else return o=jl(l),o!==null&&Xo(o),i.blockedOn=l,!1;o.shift()}return!0}function no(i,o,l){di(i)&&l.delete(o)}function Sc(){Cl=!1,Zt!==null&&di(Zt)&&(Zt=null),pr!==null&&di(pr)&&(pr=null),mr!==null&&di(mr)&&(mr=null),Ki.forEach(no),Yn.forEach(no)}function gr(i,o){i.blockedOn===o&&(i.blockedOn=null,Cl||(Cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sc)))}function _r(i){function o(p){return gr(p,i)}if(0<Br.length){gr(Br[0],i);for(var l=1;l<Br.length;l++){var h=Br[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Zt!==null&&gr(Zt,i),pr!==null&&gr(pr,i),mr!==null&&gr(mr,i),Ki.forEach(o),Yn.forEach(o),l=0;l<zr.length;l++)h=zr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)Ic(l),l.blockedOn===null&&zr.shift()}var fi=j.ReactCurrentBatchConfig,Qi=!0;function mt(i,o,l,h){var p=He,_=fi.transition;fi.transition=null;try{He=1,Rl(i,o,l,h)}finally{He=p,fi.transition=_}}function Cf(i,o,l,h){var p=He,_=fi.transition;fi.transition=null;try{He=4,Rl(i,o,l,h)}finally{He=p,fi.transition=_}}function Rl(i,o,l,h){if(Qi){var p=Jo(i,o,l,h);if(p===null)Mf(i,o,h,ro,l),Tc(i,h);else if(Sf(p,i,o,l,h))h.stopPropagation();else if(Tc(i,h),o&4&&-1<If.indexOf(i)){for(;p!==null;){var _=jl(p);if(_!==null&&yc(_),_=Jo(i,o,l,h),_===null&&Mf(i,o,h,ro,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Mf(i,o,h,null,l)}}var ro=null;function Jo(i,o,l,h){if(ro=null,i=Fr(h),i=oo(i),i!==null)if(o=dr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Xs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return ro=i,null}function Al(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Js:return 1;case zi:return 4;case Qn:case Il:return 16;case pc:return 536870912;default:return 16}default:return 16}}var Vn=null,Zo=null,In=null;function kl(){if(In)return In;var i,o=Zo,l=o.length,h,p="value"in Vn?Vn.value:Vn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return In=p.slice(i,1<h?1-h:void 0)}function ea(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function $r(){return!0}function Pl(){return!1}function en(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?$r:Pl,this.isPropagationStopped=Pl,this}return ie(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),o}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=en(yr),Wr=ie({},yr,{view:0,detail:0}),Rf=en(Wr),na,pi,Yi,io=ie({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Yi&&(Yi&&i.type==="mousemove"?(na=i.screenX-Yi.screenX,pi=i.screenY-Yi.screenY):pi=na=0,Yi=i),na)},movementY:function(i){return"movementY"in i?i.movementY:pi}}),ra=en(io),Nl=ie({},io,{dataTransfer:0}),Cc=en(Nl),ia=ie({},Wr,{relatedTarget:0}),sa=en(ia),Rc=ie({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),mi=en(Rc),Ac=ie({},yr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),kc=en(Ac),Pc=ie({},yr,{data:0}),xl=en(Pc),oa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Nc[i])?!!o[i]:!1}function Hr(){return xc}var c=ie({},Wr,{key:function(i){if(i.key){var o=oa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ea(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?yn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(i){return i.type==="keypress"?ea(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ea(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=en(c),v=ie({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=en(v),B=ie({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),q=en(B),ue=ie({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rt=en(ue),Ft=ie({},io,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ge=en(Ft),$t=[9,13,27,32],xt=d&&"CompositionEvent"in window,Xn=null;d&&"documentMode"in document&&(Xn=document.documentMode);var Fn=d&&"TextEvent"in window&&!Xn,so=d&&(!xt||Xn&&8<Xn&&11>=Xn),aa=" ",q_=!1;function G_(i,o){switch(i){case"keyup":return $t.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var la=!1;function zC(i,o){switch(i){case"compositionend":return K_(o);case"keypress":return o.which!==32?null:(q_=!0,aa);case"textInput":return i=o.data,i===aa&&q_?null:i;default:return null}}function $C(i,o){if(la)return i==="compositionend"||!xt&&G_(i,o)?(i=kl(),In=Zo=Vn=null,la=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return so&&o.locale!=="ko"?null:o.data;default:return null}}var WC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!WC[i.type]:o==="textarea"}function Y_(i,o,l,h){jr(h),o=Mc(o,"onChange"),0<o.length&&(l=new ta("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var bl=null,Dl=null;function HC(i){py(i,0)}function bc(i){var o=fa(i);if(Or(o))return i}function qC(i,o){if(i==="change")return o}var X_=!1;if(d){var Af;if(d){var kf="oninput"in document;if(!kf){var J_=document.createElement("div");J_.setAttribute("oninput","return;"),kf=typeof J_.oninput=="function"}Af=kf}else Af=!1;X_=Af&&(!document.documentMode||9<document.documentMode)}function Z_(){bl&&(bl.detachEvent("onpropertychange",ey),Dl=bl=null)}function ey(i){if(i.propertyName==="value"&&bc(Dl)){var o=[];Y_(o,Dl,i,Fr(i)),vl(HC,o)}}function GC(i,o,l){i==="focusin"?(Z_(),bl=o,Dl=l,bl.attachEvent("onpropertychange",ey)):i==="focusout"&&Z_()}function KC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return bc(Dl)}function QC(i,o){if(i==="click")return bc(o)}function YC(i,o){if(i==="input"||i==="change")return bc(o)}function XC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var vr=typeof Object.is=="function"?Object.is:XC;function Ol(i,o){if(vr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!vr(i[p],o[p]))return!1}return!0}function ty(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ny(i,o){var l=ty(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ty(l)}}function ry(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?ry(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function iy(){for(var i=window,o=Xt();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Xt(i.document)}return o}function Pf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function JC(i){var o=iy(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&ry(l.ownerDocument.documentElement,l)){if(h!==null&&Pf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=ny(l,_);var w=ny(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var ZC=d&&"documentMode"in document&&11>=document.documentMode,ua=null,Nf=null,Ll=null,xf=!1;function sy(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;xf||ua==null||ua!==Xt(h)||(h=ua,"selectionStart"in h&&Pf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ll&&Ol(Ll,h)||(Ll=h,h=Mc(Nf,"onSelect"),0<h.length&&(o=new ta("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=ua)))}function Dc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ca={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},bf={},oy={};d&&(oy=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Oc(i){if(bf[i])return bf[i];if(!ca[i])return i;var o=ca[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in oy)return bf[i]=o[l];return i}var ay=Oc("animationend"),ly=Oc("animationiteration"),uy=Oc("animationstart"),cy=Oc("transitionend"),hy=new Map,dy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(i,o){hy.set(i,o),a(o,[i])}for(var Df=0;Df<dy.length;Df++){var Of=dy[Df],eR=Of.toLowerCase(),tR=Of[0].toUpperCase()+Of.slice(1);Xi(eR,"on"+tR)}Xi(ay,"onAnimationEnd"),Xi(ly,"onAnimationIteration"),Xi(uy,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(cy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function fy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,cc(h,o,void 0,i),i.currentTarget=null}function py(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var R=h[w],N=R.instance,H=R.currentTarget;if(R=R.listener,N!==_&&p.isPropagationStopped())break e;fy(p,R,H),_=N}else for(w=0;w<h.length;w++){if(R=h[w],N=R.instance,H=R.currentTarget,R=R.listener,N!==_&&p.isPropagationStopped())break e;fy(p,R,H),_=N}}}if(hr)throw i=El,hr=!1,El=null,i}function ht(i,o){var l=o[zf];l===void 0&&(l=o[zf]=new Set);var h=i+"__bubble";l.has(h)||(my(o,i,2,!1),l.add(h))}function Lf(i,o,l){var h=0;o&&(h|=4),my(l,i,h,o)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Vl(i){if(!i[Lc]){i[Lc]=!0,r.forEach(function(l){l!=="selectionchange"&&(nR.has(l)||Lf(l,!1,i),Lf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Lc]||(o[Lc]=!0,Lf("selectionchange",!1,o))}}function my(i,o,l,h){switch(Al(o)){case 1:var p=mt;break;case 4:p=Cf;break;default:p=Rl}l=p.bind(null,o,l,i),p=void 0,!Wo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Mf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;w=w.return}for(;R!==null;){if(w=oo(R),w===null)return;if(N=w.tag,N===5||N===6){h=_=w;continue e}R=R.parentNode}}h=h.return}vl(function(){var H=_,te=Fr(l),re=[];e:{var ee=hy.get(i);if(ee!==void 0){var fe=ta,_e=i;switch(i){case"keypress":if(ea(l)===0)break e;case"keydown":case"keyup":fe=g;break;case"focusin":_e="focus",fe=sa;break;case"focusout":_e="blur",fe=sa;break;case"beforeblur":case"afterblur":fe=sa;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=q;break;case ay:case ly:case uy:fe=mi;break;case cy:fe=rt;break;case"scroll":fe=Rf;break;case"wheel":fe=Ge;break;case"copy":case"cut":case"paste":fe=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=S}var ve=(o&4)!==0,Ct=!ve&&i==="scroll",z=ve?ee!==null?ee+"Capture":null:ee;ve=[];for(var O=H,$;O!==null;){$=O;var oe=$.stateNode;if($.tag===5&&oe!==null&&($=oe,z!==null&&(oe=St(O,z),oe!=null&&ve.push(Fl(O,oe,$)))),Ct)break;O=O.return}0<ve.length&&(ee=new fe(ee,_e,null,l,te),re.push({event:ee,listeners:ve}))}}if((o&7)===0){e:{if(ee=i==="mouseover"||i==="pointerover",fe=i==="mouseout"||i==="pointerout",ee&&l!==ui&&(_e=l.relatedTarget||l.fromElement)&&(oo(_e)||_e[gi]))break e;if((fe||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(_e=l.relatedTarget||l.toElement,fe=H,_e=_e?oo(_e):null,_e!==null&&(Ct=dr(_e),_e!==Ct||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(fe=null,_e=H),fe!==_e)){if(ve=ra,oe="onMouseLeave",z="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ve=S,oe="onPointerLeave",z="onPointerEnter",O="pointer"),Ct=fe==null?ee:fa(fe),$=_e==null?ee:fa(_e),ee=new ve(oe,O+"leave",fe,l,te),ee.target=Ct,ee.relatedTarget=$,oe=null,oo(te)===H&&(ve=new ve(z,O+"enter",_e,l,te),ve.target=$,ve.relatedTarget=Ct,oe=ve),Ct=oe,fe&&_e)t:{for(ve=fe,z=_e,O=0,$=ve;$;$=ha($))O++;for($=0,oe=z;oe;oe=ha(oe))$++;for(;0<O-$;)ve=ha(ve),O--;for(;0<$-O;)z=ha(z),$--;for(;O--;){if(ve===z||z!==null&&ve===z.alternate)break t;ve=ha(ve),z=ha(z)}ve=null}else ve=null;fe!==null&&gy(re,ee,fe,ve,!1),_e!==null&&Ct!==null&&gy(re,Ct,_e,ve,!0)}}e:{if(ee=H?fa(H):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var we=qC;else if(Q_(ee))if(X_)we=YC;else{we=KC;var Ce=GC}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(we=QC);if(we&&(we=we(i,H))){Y_(re,we,l,te);break e}Ce&&Ce(i,ee,H),i==="focusout"&&(Ce=ee._wrapperState)&&Ce.controlled&&ee.type==="number"&&ji(ee,"number",ee.value)}switch(Ce=H?fa(H):window,i){case"focusin":(Q_(Ce)||Ce.contentEditable==="true")&&(ua=Ce,Nf=H,Ll=null);break;case"focusout":Ll=Nf=ua=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,sy(re,l,te);break;case"selectionchange":if(ZC)break;case"keydown":case"keyup":sy(re,l,te)}var Re;if(xt)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else la?G_(i,l)&&(Ne="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(so&&l.locale!=="ko"&&(la||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&la&&(Re=kl()):(Vn=te,Zo="value"in Vn?Vn.value:Vn.textContent,la=!0)),Ce=Mc(H,Ne),0<Ce.length&&(Ne=new xl(Ne,i,null,l,te),re.push({event:Ne,listeners:Ce}),Re?Ne.data=Re:(Re=K_(l),Re!==null&&(Ne.data=Re)))),(Re=Fn?zC(i,l):$C(i,l))&&(H=Mc(H,"onBeforeInput"),0<H.length&&(te=new xl("onBeforeInput","beforeinput",null,l,te),re.push({event:te,listeners:H}),te.data=Re))}py(re,o)})}function Fl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Mc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=St(i,l),_!=null&&h.unshift(Fl(i,_,p)),_=St(i,o),_!=null&&h.push(Fl(i,_,p))),i=i.return}return h}function ha(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function gy(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var R=l,N=R.alternate,H=R.stateNode;if(N!==null&&N===h)break;R.tag===5&&H!==null&&(R=H,p?(N=St(l,_),N!=null&&w.unshift(Fl(l,N,R))):p||(N=St(l,_),N!=null&&w.push(Fl(l,N,R)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var rR=/\r\n?/g,iR=/\u0000|\uFFFD/g;function _y(i){return(typeof i=="string"?i:""+i).replace(rR,`
`).replace(iR,"")}function Vc(i,o,l){if(o=_y(o),_y(i)!==o&&l)throw Error(t(425))}function Fc(){}var Vf=null,Ff=null;function Uf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,sR=typeof clearTimeout=="function"?clearTimeout:void 0,yy=typeof Promise=="function"?Promise:void 0,oR=typeof queueMicrotask=="function"?queueMicrotask:typeof yy<"u"?function(i){return yy.resolve(null).then(i).catch(aR)}:jf;function aR(i){setTimeout(function(){throw i})}function Bf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),_r(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);_r(o)}function Ji(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function vy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var da=Math.random().toString(36).slice(2),qr="__reactFiber$"+da,Ul="__reactProps$"+da,gi="__reactContainer$"+da,zf="__reactEvents$"+da,lR="__reactListeners$"+da,uR="__reactHandles$"+da;function oo(i){var o=i[qr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[gi]||l[qr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=vy(i);i!==null;){if(l=i[qr])return l;i=vy(i)}return o}i=l,l=i.parentNode}return null}function jl(i){return i=i[qr]||i[gi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function fa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Uc(i){return i[Ul]||null}var $f=[],pa=-1;function Zi(i){return{current:i}}function dt(i){0>pa||(i.current=$f[pa],$f[pa]=null,pa--)}function lt(i,o){pa++,$f[pa]=i.current,i.current=o}var es={},ln=Zi(es),Sn=Zi(!1),ao=es;function ma(i,o){var l=i.type.contextTypes;if(!l)return es;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Cn(i){return i=i.childContextTypes,i!=null}function jc(){dt(Sn),dt(ln)}function Ey(i,o,l){if(ln.current!==es)throw Error(t(168));lt(ln,o),lt(Sn,l)}function wy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,We(i)||"Unknown",p));return ie({},l,h)}function Bc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||es,ao=ln.current,lt(ln,i),lt(Sn,Sn.current),!0}function Ty(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=wy(i,o,ao),h.__reactInternalMemoizedMergedChildContext=i,dt(Sn),dt(ln),lt(ln,i)):dt(Sn),lt(Sn,l)}var _i=null,zc=!1,Wf=!1;function Iy(i){_i===null?_i=[i]:_i.push(i)}function cR(i){zc=!0,Iy(i)}function ts(){if(!Wf&&_i!==null){Wf=!0;var i=0,o=He;try{var l=_i;for(He=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}_i=null,zc=!1}catch(p){throw _i!==null&&(_i=_i.slice(i+1)),Ko(Js,ts),p}finally{He=o,Wf=!1}}return null}var ga=[],_a=0,$c=null,Wc=0,Jn=[],Zn=0,lo=null,yi=1,vi="";function uo(i,o){ga[_a++]=Wc,ga[_a++]=$c,$c=i,Wc=o}function Sy(i,o,l){Jn[Zn++]=yi,Jn[Zn++]=vi,Jn[Zn++]=lo,lo=i;var h=yi;i=vi;var p=32-_n(h)-1;h&=~(1<<p),l+=1;var _=32-_n(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,yi=1<<32-_n(o)+p|l<<p|h,vi=_+i}else yi=1<<_|l<<p|h,vi=i}function Hf(i){i.return!==null&&(uo(i,1),Sy(i,1,0))}function qf(i){for(;i===$c;)$c=ga[--_a],ga[_a]=null,Wc=ga[--_a],ga[_a]=null;for(;i===lo;)lo=Jn[--Zn],Jn[Zn]=null,vi=Jn[--Zn],Jn[Zn]=null,yi=Jn[--Zn],Jn[Zn]=null}var Un=null,jn=null,gt=!1,Er=null;function Cy(i,o){var l=rr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Ry(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Un=i,jn=Ji(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Un=i,jn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=lo!==null?{id:yi,overflow:vi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=rr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Un=i,jn=null,!0):!1;default:return!1}}function Gf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Kf(i){if(gt){var o=jn;if(o){var l=o;if(!Ry(i,o)){if(Gf(i))throw Error(t(418));o=Ji(l.nextSibling);var h=Un;o&&Ry(i,o)?Cy(h,l):(i.flags=i.flags&-4097|2,gt=!1,Un=i)}}else{if(Gf(i))throw Error(t(418));i.flags=i.flags&-4097|2,gt=!1,Un=i}}}function Ay(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Un=i}function Hc(i){if(i!==Un)return!1;if(!gt)return Ay(i),gt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Uf(i.type,i.memoizedProps)),o&&(o=jn)){if(Gf(i))throw ky(),Error(t(418));for(;o;)Cy(i,o),o=Ji(o.nextSibling)}if(Ay(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){jn=Ji(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}jn=null}}else jn=Un?Ji(i.stateNode.nextSibling):null;return!0}function ky(){for(var i=jn;i;)i=Ji(i.nextSibling)}function ya(){jn=Un=null,gt=!1}function Qf(i){Er===null?Er=[i]:Er.push(i)}var hR=j.ReactCurrentBatchConfig;function Bl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var R=p.refs;w===null?delete R[_]:R[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function qc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Py(i){var o=i._init;return o(i._payload)}function Ny(i){function o(z,O){if(i){var $=z.deletions;$===null?(z.deletions=[O],z.flags|=16):$.push(O)}}function l(z,O){if(!i)return null;for(;O!==null;)o(z,O),O=O.sibling;return null}function h(z,O){for(z=new Map;O!==null;)O.key!==null?z.set(O.key,O):z.set(O.index,O),O=O.sibling;return z}function p(z,O){return z=us(z,O),z.index=0,z.sibling=null,z}function _(z,O,$){return z.index=$,i?($=z.alternate,$!==null?($=$.index,$<O?(z.flags|=2,O):$):(z.flags|=2,O)):(z.flags|=1048576,O)}function w(z){return i&&z.alternate===null&&(z.flags|=2),z}function R(z,O,$,oe){return O===null||O.tag!==6?(O=jp($,z.mode,oe),O.return=z,O):(O=p(O,$),O.return=z,O)}function N(z,O,$,oe){var we=$.type;return we===b?te(z,O,$.props.children,oe,$.key):O!==null&&(O.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ne&&Py(we)===O.type)?(oe=p(O,$.props),oe.ref=Bl(z,O,$),oe.return=z,oe):(oe=gh($.type,$.key,$.props,null,z.mode,oe),oe.ref=Bl(z,O,$),oe.return=z,oe)}function H(z,O,$,oe){return O===null||O.tag!==4||O.stateNode.containerInfo!==$.containerInfo||O.stateNode.implementation!==$.implementation?(O=Bp($,z.mode,oe),O.return=z,O):(O=p(O,$.children||[]),O.return=z,O)}function te(z,O,$,oe,we){return O===null||O.tag!==7?(O=yo($,z.mode,oe,we),O.return=z,O):(O=p(O,$),O.return=z,O)}function re(z,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return O=jp(""+O,z.mode,$),O.return=z,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Te:return $=gh(O.type,O.key,O.props,null,z.mode,$),$.ref=Bl(z,null,O),$.return=z,$;case me:return O=Bp(O,z.mode,$),O.return=z,O;case ne:var oe=O._init;return re(z,oe(O._payload),$)}if(Hn(O)||se(O))return O=yo(O,z.mode,$,null),O.return=z,O;qc(z,O)}return null}function ee(z,O,$,oe){var we=O!==null?O.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return we!==null?null:R(z,O,""+$,oe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Te:return $.key===we?N(z,O,$,oe):null;case me:return $.key===we?H(z,O,$,oe):null;case ne:return we=$._init,ee(z,O,we($._payload),oe)}if(Hn($)||se($))return we!==null?null:te(z,O,$,oe,null);qc(z,$)}return null}function fe(z,O,$,oe,we){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return z=z.get($)||null,R(O,z,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case Te:return z=z.get(oe.key===null?$:oe.key)||null,N(O,z,oe,we);case me:return z=z.get(oe.key===null?$:oe.key)||null,H(O,z,oe,we);case ne:var Ce=oe._init;return fe(z,O,$,Ce(oe._payload),we)}if(Hn(oe)||se(oe))return z=z.get($)||null,te(O,z,oe,we,null);qc(O,oe)}return null}function _e(z,O,$,oe){for(var we=null,Ce=null,Re=O,Ne=O=0,qt=null;Re!==null&&Ne<$.length;Ne++){Re.index>Ne?(qt=Re,Re=null):qt=Re.sibling;var Ye=ee(z,Re,$[Ne],oe);if(Ye===null){Re===null&&(Re=qt);break}i&&Re&&Ye.alternate===null&&o(z,Re),O=_(Ye,O,Ne),Ce===null?we=Ye:Ce.sibling=Ye,Ce=Ye,Re=qt}if(Ne===$.length)return l(z,Re),gt&&uo(z,Ne),we;if(Re===null){for(;Ne<$.length;Ne++)Re=re(z,$[Ne],oe),Re!==null&&(O=_(Re,O,Ne),Ce===null?we=Re:Ce.sibling=Re,Ce=Re);return gt&&uo(z,Ne),we}for(Re=h(z,Re);Ne<$.length;Ne++)qt=fe(Re,z,Ne,$[Ne],oe),qt!==null&&(i&&qt.alternate!==null&&Re.delete(qt.key===null?Ne:qt.key),O=_(qt,O,Ne),Ce===null?we=qt:Ce.sibling=qt,Ce=qt);return i&&Re.forEach(function(cs){return o(z,cs)}),gt&&uo(z,Ne),we}function ve(z,O,$,oe){var we=se($);if(typeof we!="function")throw Error(t(150));if($=we.call($),$==null)throw Error(t(151));for(var Ce=we=null,Re=O,Ne=O=0,qt=null,Ye=$.next();Re!==null&&!Ye.done;Ne++,Ye=$.next()){Re.index>Ne?(qt=Re,Re=null):qt=Re.sibling;var cs=ee(z,Re,Ye.value,oe);if(cs===null){Re===null&&(Re=qt);break}i&&Re&&cs.alternate===null&&o(z,Re),O=_(cs,O,Ne),Ce===null?we=cs:Ce.sibling=cs,Ce=cs,Re=qt}if(Ye.done)return l(z,Re),gt&&uo(z,Ne),we;if(Re===null){for(;!Ye.done;Ne++,Ye=$.next())Ye=re(z,Ye.value,oe),Ye!==null&&(O=_(Ye,O,Ne),Ce===null?we=Ye:Ce.sibling=Ye,Ce=Ye);return gt&&uo(z,Ne),we}for(Re=h(z,Re);!Ye.done;Ne++,Ye=$.next())Ye=fe(Re,z,Ne,Ye.value,oe),Ye!==null&&(i&&Ye.alternate!==null&&Re.delete(Ye.key===null?Ne:Ye.key),O=_(Ye,O,Ne),Ce===null?we=Ye:Ce.sibling=Ye,Ce=Ye);return i&&Re.forEach(function(WR){return o(z,WR)}),gt&&uo(z,Ne),we}function Ct(z,O,$,oe){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Te:e:{for(var we=$.key,Ce=O;Ce!==null;){if(Ce.key===we){if(we=$.type,we===b){if(Ce.tag===7){l(z,Ce.sibling),O=p(Ce,$.props.children),O.return=z,z=O;break e}}else if(Ce.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ne&&Py(we)===Ce.type){l(z,Ce.sibling),O=p(Ce,$.props),O.ref=Bl(z,Ce,$),O.return=z,z=O;break e}l(z,Ce);break}else o(z,Ce);Ce=Ce.sibling}$.type===b?(O=yo($.props.children,z.mode,oe,$.key),O.return=z,z=O):(oe=gh($.type,$.key,$.props,null,z.mode,oe),oe.ref=Bl(z,O,$),oe.return=z,z=oe)}return w(z);case me:e:{for(Ce=$.key;O!==null;){if(O.key===Ce)if(O.tag===4&&O.stateNode.containerInfo===$.containerInfo&&O.stateNode.implementation===$.implementation){l(z,O.sibling),O=p(O,$.children||[]),O.return=z,z=O;break e}else{l(z,O);break}else o(z,O);O=O.sibling}O=Bp($,z.mode,oe),O.return=z,z=O}return w(z);case ne:return Ce=$._init,Ct(z,O,Ce($._payload),oe)}if(Hn($))return _e(z,O,$,oe);if(se($))return ve(z,O,$,oe);qc(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,O!==null&&O.tag===6?(l(z,O.sibling),O=p(O,$),O.return=z,z=O):(l(z,O),O=jp($,z.mode,oe),O.return=z,z=O),w(z)):l(z,O)}return Ct}var va=Ny(!0),xy=Ny(!1),Gc=Zi(null),Kc=null,Ea=null,Yf=null;function Xf(){Yf=Ea=Kc=null}function Jf(i){var o=Gc.current;dt(Gc),i._currentValue=o}function Zf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function wa(i,o){Kc=i,Yf=Ea=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Rn=!0),i.firstContext=null)}function er(i){var o=i._currentValue;if(Yf!==i)if(i={context:i,memoizedValue:o,next:null},Ea===null){if(Kc===null)throw Error(t(308));Ea=i,Kc.dependencies={lanes:0,firstContext:i}}else Ea=Ea.next=i;return o}var co=null;function ep(i){co===null?co=[i]:co.push(i)}function by(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,ep(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ei(i,h)}function Ei(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ns=!1;function tp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function wi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function rs(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Qe&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ei(i,l)}return p=h.interleaved,p===null?(o.next=o,ep(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ei(i,l)}function Qc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,qi(i,l)}}function Oy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Yc(i,o,l,h){var p=i.updateQueue;ns=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var N=R,H=N.next;N.next=null,w===null?_=H:w.next=H,w=N;var te=i.alternate;te!==null&&(te=te.updateQueue,R=te.lastBaseUpdate,R!==w&&(R===null?te.firstBaseUpdate=H:R.next=H,te.lastBaseUpdate=N))}if(_!==null){var re=p.baseState;w=0,te=H=N=null,R=_;do{var ee=R.lane,fe=R.eventTime;if((h&ee)===ee){te!==null&&(te=te.next={eventTime:fe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var _e=i,ve=R;switch(ee=o,fe=l,ve.tag){case 1:if(_e=ve.payload,typeof _e=="function"){re=_e.call(fe,re,ee);break e}re=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=ve.payload,ee=typeof _e=="function"?_e.call(fe,re,ee):_e,ee==null)break e;re=ie({},re,ee);break e;case 2:ns=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,ee=p.effects,ee===null?p.effects=[R]:ee.push(R))}else fe={eventTime:fe,lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},te===null?(H=te=fe,N=re):te=te.next=fe,w|=ee;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;ee=R,R=ee.next,ee.next=null,p.lastBaseUpdate=ee,p.shared.pending=null}}while(!0);if(te===null&&(N=re),p.baseState=N,p.firstBaseUpdate=H,p.lastBaseUpdate=te,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);po|=w,i.lanes=w,i.memoizedState=re}}function Ly(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var zl={},Gr=Zi(zl),$l=Zi(zl),Wl=Zi(zl);function ho(i){if(i===zl)throw Error(t(174));return i}function np(i,o){switch(lt(Wl,o),lt($l,i),lt(Gr,zl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:W(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=W(o,i)}dt(Gr),lt(Gr,o)}function Ta(){dt(Gr),dt($l),dt(Wl)}function My(i){ho(Wl.current);var o=ho(Gr.current),l=W(o,i.type);o!==l&&(lt($l,i),lt(Gr,l))}function rp(i){$l.current===i&&(dt(Gr),dt($l))}var _t=Zi(0);function Xc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var ip=[];function sp(){for(var i=0;i<ip.length;i++)ip[i]._workInProgressVersionPrimary=null;ip.length=0}var Jc=j.ReactCurrentDispatcher,op=j.ReactCurrentBatchConfig,fo=0,yt=null,Ut=null,Wt=null,Zc=!1,Hl=!1,ql=0,dR=0;function un(){throw Error(t(321))}function ap(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!vr(i[l],o[l]))return!1;return!0}function lp(i,o,l,h,p,_){if(fo=_,yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Jc.current=i===null||i.memoizedState===null?gR:_R,i=l(h,p),Hl){_=0;do{if(Hl=!1,ql=0,25<=_)throw Error(t(301));_+=1,Wt=Ut=null,o.updateQueue=null,Jc.current=yR,i=l(h,p)}while(Hl)}if(Jc.current=nh,o=Ut!==null&&Ut.next!==null,fo=0,Wt=Ut=yt=null,Zc=!1,o)throw Error(t(300));return i}function up(){var i=ql!==0;return ql=0,i}function Kr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?yt.memoizedState=Wt=i:Wt=Wt.next=i,Wt}function tr(){if(Ut===null){var i=yt.alternate;i=i!==null?i.memoizedState:null}else i=Ut.next;var o=Wt===null?yt.memoizedState:Wt.next;if(o!==null)Wt=o,Ut=i;else{if(i===null)throw Error(t(310));Ut=i,i={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Wt===null?yt.memoizedState=Wt=i:Wt=Wt.next=i}return Wt}function Gl(i,o){return typeof o=="function"?o(i):o}function cp(i){var o=tr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Ut,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var R=w=null,N=null,H=_;do{var te=H.lane;if((fo&te)===te)N!==null&&(N=N.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:i(h,H.action);else{var re={lane:te,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};N===null?(R=N=re,w=h):N=N.next=re,yt.lanes|=te,po|=te}H=H.next}while(H!==null&&H!==_);N===null?w=h:N.next=R,vr(h,o.memoizedState)||(Rn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,yt.lanes|=_,po|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function hp(i){var o=tr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);vr(_,o.memoizedState)||(Rn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Vy(){}function Fy(i,o){var l=yt,h=tr(),p=o(),_=!vr(h.memoizedState,p);if(_&&(h.memoizedState=p,Rn=!0),h=h.queue,dp(By.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Wt!==null&&Wt.memoizedState.tag&1){if(l.flags|=2048,Kl(9,jy.bind(null,l,h,p,o),void 0,null),Ht===null)throw Error(t(349));(fo&30)!==0||Uy(l,o,p)}return p}function Uy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function jy(i,o,l,h){o.value=l,o.getSnapshot=h,zy(o)&&$y(i)}function By(i,o,l){return l(function(){zy(o)&&$y(i)})}function zy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!vr(i,l)}catch{return!0}}function $y(i){var o=Ei(i,1);o!==null&&Sr(o,i,1,-1)}function Wy(i){var o=Kr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:i},o.queue=i,i=i.dispatch=mR.bind(null,yt,i),[o.memoizedState,i]}function Kl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Hy(){return tr().memoizedState}function eh(i,o,l,h){var p=Kr();yt.flags|=i,p.memoizedState=Kl(1|o,l,void 0,h===void 0?null:h)}function th(i,o,l,h){var p=tr();h=h===void 0?null:h;var _=void 0;if(Ut!==null){var w=Ut.memoizedState;if(_=w.destroy,h!==null&&ap(h,w.deps)){p.memoizedState=Kl(o,l,_,h);return}}yt.flags|=i,p.memoizedState=Kl(1|o,l,_,h)}function qy(i,o){return eh(8390656,8,i,o)}function dp(i,o){return th(2048,8,i,o)}function Gy(i,o){return th(4,2,i,o)}function Ky(i,o){return th(4,4,i,o)}function Qy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Yy(i,o,l){return l=l!=null?l.concat([i]):null,th(4,4,Qy.bind(null,o,i),l)}function fp(){}function Xy(i,o){var l=tr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ap(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Jy(i,o){var l=tr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ap(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Zy(i,o,l){return(fo&21)===0?(i.baseState&&(i.baseState=!1,Rn=!0),i.memoizedState=l):(vr(l,o)||(l=to(),yt.lanes|=l,po|=l,i.baseState=!0),o)}function fR(i,o){var l=He;He=l!==0&&4>l?l:4,i(!0);var h=op.transition;op.transition={};try{i(!1),o()}finally{He=l,op.transition=h}}function ev(){return tr().memoizedState}function pR(i,o,l){var h=as(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},tv(i))nv(o,l);else if(l=by(i,o,l,h),l!==null){var p=En();Sr(l,i,h,p),rv(l,o,h)}}function mR(i,o,l){var h=as(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(tv(i))nv(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,R=_(w,l);if(p.hasEagerState=!0,p.eagerState=R,vr(R,w)){var N=o.interleaved;N===null?(p.next=p,ep(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=by(i,o,p,h),l!==null&&(p=En(),Sr(l,i,h,p),rv(l,o,h))}}function tv(i){var o=i.alternate;return i===yt||o!==null&&o===yt}function nv(i,o){Hl=Zc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function rv(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,qi(i,l)}}var nh={readContext:er,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},gR={readContext:er,useCallback:function(i,o){return Kr().memoizedState=[i,o===void 0?null:o],i},useContext:er,useEffect:qy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,eh(4194308,4,Qy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return eh(4194308,4,i,o)},useInsertionEffect:function(i,o){return eh(4,2,i,o)},useMemo:function(i,o){var l=Kr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Kr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=pR.bind(null,yt,i),[h.memoizedState,i]},useRef:function(i){var o=Kr();return i={current:i},o.memoizedState=i},useState:Wy,useDebugValue:fp,useDeferredValue:function(i){return Kr().memoizedState=i},useTransition:function(){var i=Wy(!1),o=i[0];return i=fR.bind(null,i[1]),Kr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=yt,p=Kr();if(gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ht===null)throw Error(t(349));(fo&30)!==0||Uy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,qy(By.bind(null,h,_,i),[i]),h.flags|=2048,Kl(9,jy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Kr(),o=Ht.identifierPrefix;if(gt){var l=vi,h=yi;l=(h&~(1<<32-_n(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ql++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=dR++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},_R={readContext:er,useCallback:Xy,useContext:er,useEffect:dp,useImperativeHandle:Yy,useInsertionEffect:Gy,useLayoutEffect:Ky,useMemo:Jy,useReducer:cp,useRef:Hy,useState:function(){return cp(Gl)},useDebugValue:fp,useDeferredValue:function(i){var o=tr();return Zy(o,Ut.memoizedState,i)},useTransition:function(){var i=cp(Gl)[0],o=tr().memoizedState;return[i,o]},useMutableSource:Vy,useSyncExternalStore:Fy,useId:ev,unstable_isNewReconciler:!1},yR={readContext:er,useCallback:Xy,useContext:er,useEffect:dp,useImperativeHandle:Yy,useInsertionEffect:Gy,useLayoutEffect:Ky,useMemo:Jy,useReducer:hp,useRef:Hy,useState:function(){return hp(Gl)},useDebugValue:fp,useDeferredValue:function(i){var o=tr();return Ut===null?o.memoizedState=i:Zy(o,Ut.memoizedState,i)},useTransition:function(){var i=hp(Gl)[0],o=tr().memoizedState;return[i,o]},useMutableSource:Vy,useSyncExternalStore:Fy,useId:ev,unstable_isNewReconciler:!1};function wr(i,o){if(i&&i.defaultProps){o=ie({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function pp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ie({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var rh={isMounted:function(i){return(i=i._reactInternals)?dr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=En(),p=as(i),_=wi(h,p);_.payload=o,l!=null&&(_.callback=l),o=rs(i,_,p),o!==null&&(Sr(o,i,p,h),Qc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=En(),p=as(i),_=wi(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=rs(i,_,p),o!==null&&(Sr(o,i,p,h),Qc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=En(),h=as(i),p=wi(l,h);p.tag=2,o!=null&&(p.callback=o),o=rs(i,p,h),o!==null&&(Sr(o,i,h,l),Qc(o,i,h))}};function iv(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!Ol(l,h)||!Ol(p,_):!0}function sv(i,o,l){var h=!1,p=es,_=o.contextType;return typeof _=="object"&&_!==null?_=er(_):(p=Cn(o)?ao:ln.current,h=o.contextTypes,_=(h=h!=null)?ma(i,p):es),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=rh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function ov(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&rh.enqueueReplaceState(o,o.state,null)}function mp(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},tp(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=er(_):(_=Cn(o)?ao:ln.current,p.context=ma(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(pp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&rh.enqueueReplaceState(p,p.state,null),Yc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ia(i,o){try{var l="",h=o;do l+=xe(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function gp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function _p(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var vR=typeof WeakMap=="function"?WeakMap:Map;function av(i,o,l){l=wi(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){ch||(ch=!0,bp=h),_p(i,o)},l}function lv(i,o,l){l=wi(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){_p(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){_p(i,o),typeof h!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function uv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new vR;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=DR.bind(null,i,o,l),o.then(i,i))}function cv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function hv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=wi(-1,1),o.tag=2,rs(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var ER=j.ReactCurrentOwner,Rn=!1;function vn(i,o,l,h){o.child=i===null?xy(o,null,l,h):va(o,i.child,l,h)}function dv(i,o,l,h,p){l=l.render;var _=o.ref;return wa(o,p),h=lp(i,o,l,h,_,p),l=up(),i!==null&&!Rn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ti(i,o,p)):(gt&&l&&Hf(o),o.flags|=1,vn(i,o,h,p),o.child)}function fv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Up(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,pv(i,o,_,h,p)):(i=gh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ol,l(w,h)&&i.ref===o.ref)return Ti(i,o,p)}return o.flags|=1,i=us(_,h),i.ref=o.ref,i.return=o,o.child=i}function pv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Ol(_,h)&&i.ref===o.ref)if(Rn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Rn=!0);else return o.lanes=i.lanes,Ti(i,o,p)}return yp(i,o,l,h,p)}function mv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ca,Bn),Bn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,lt(Ca,Bn),Bn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,lt(Ca,Bn),Bn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,lt(Ca,Bn),Bn|=h;return vn(i,o,p,l),o.child}function gv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function yp(i,o,l,h,p){var _=Cn(l)?ao:ln.current;return _=ma(o,_),wa(o,p),l=lp(i,o,l,h,_,p),h=up(),i!==null&&!Rn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ti(i,o,p)):(gt&&h&&Hf(o),o.flags|=1,vn(i,o,l,p),o.child)}function _v(i,o,l,h,p){if(Cn(l)){var _=!0;Bc(o)}else _=!1;if(wa(o,p),o.stateNode===null)sh(i,o),sv(o,l,h),mp(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,R=o.memoizedProps;w.props=R;var N=w.context,H=l.contextType;typeof H=="object"&&H!==null?H=er(H):(H=Cn(l)?ao:ln.current,H=ma(o,H));var te=l.getDerivedStateFromProps,re=typeof te=="function"||typeof w.getSnapshotBeforeUpdate=="function";re||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||N!==H)&&ov(o,w,h,H),ns=!1;var ee=o.memoizedState;w.state=ee,Yc(o,h,w,p),N=o.memoizedState,R!==h||ee!==N||Sn.current||ns?(typeof te=="function"&&(pp(o,l,te,h),N=o.memoizedState),(R=ns||iv(o,l,R,h,ee,N,H))?(re||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=N),w.props=h,w.state=N,w.context=H,h=R):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,Dy(i,o),R=o.memoizedProps,H=o.type===o.elementType?R:wr(o.type,R),w.props=H,re=o.pendingProps,ee=w.context,N=l.contextType,typeof N=="object"&&N!==null?N=er(N):(N=Cn(l)?ao:ln.current,N=ma(o,N));var fe=l.getDerivedStateFromProps;(te=typeof fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==re||ee!==N)&&ov(o,w,h,N),ns=!1,ee=o.memoizedState,w.state=ee,Yc(o,h,w,p);var _e=o.memoizedState;R!==re||ee!==_e||Sn.current||ns?(typeof fe=="function"&&(pp(o,l,fe,h),_e=o.memoizedState),(H=ns||iv(o,l,H,h,ee,_e,N)||!1)?(te||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,_e,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,_e,N)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=_e),w.props=h,w.state=_e,w.context=N,h=H):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(o.flags|=1024),h=!1)}return vp(i,o,l,h,_,p)}function vp(i,o,l,h,p,_){gv(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&Ty(o,l,!1),Ti(i,o,_);h=o.stateNode,ER.current=o;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=va(o,i.child,null,_),o.child=va(o,null,R,_)):vn(i,o,R,_),o.memoizedState=h.state,p&&Ty(o,l,!0),o.child}function yv(i){var o=i.stateNode;o.pendingContext?Ey(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Ey(i,o.context,!1),np(i,o.containerInfo)}function vv(i,o,l,h,p){return ya(),Qf(p),o.flags|=256,vn(i,o,l,h),o.child}var Ep={dehydrated:null,treeContext:null,retryLane:0};function wp(i){return{baseLanes:i,cachePool:null,transitions:null}}function Ev(i,o,l){var h=o.pendingProps,p=_t.current,_=!1,w=(o.flags&128)!==0,R;if((R=w)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),lt(_t,p&1),i===null)return Kf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=_h(w,h,0,null),i=yo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=wp(l),o.memoizedState=Ep,i):Tp(o,w));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return wR(i,o,w,h,R,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,R=p.sibling;var N={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=N,o.deletions=null):(h=us(p,N),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?_=us(R,_):(_=yo(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?wp(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=Ep,h}return _=i.child,i=_.sibling,h=us(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Tp(i,o){return o=_h({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function ih(i,o,l,h){return h!==null&&Qf(h),va(o,i.child,null,l),i=Tp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function wR(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=gp(Error(t(422))),ih(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=_h({mode:"visible",children:h.children},p,0,null),_=yo(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&va(o,i.child,null,w),o.child.memoizedState=wp(w),o.memoizedState=Ep,_);if((o.mode&1)===0)return ih(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,_=Error(t(419)),h=gp(_,h,void 0),ih(i,o,w,h)}if(R=(w&i.childLanes)!==0,Rn||R){if(h=Ht,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ei(i,p),Sr(h,i,p,-1))}return Fp(),h=gp(Error(t(421))),ih(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=OR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,jn=Ji(p.nextSibling),Un=o,gt=!0,Er=null,i!==null&&(Jn[Zn++]=yi,Jn[Zn++]=vi,Jn[Zn++]=lo,yi=i.id,vi=i.overflow,lo=o),o=Tp(o,h.children),o.flags|=4096,o)}function wv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Zf(i.return,o,l)}function Ip(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function Tv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(vn(i,o,h.children,l),h=_t.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&wv(i,l,o);else if(i.tag===19)wv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(lt(_t,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Xc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Ip(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Xc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Ip(o,!0,l,null,_);break;case"together":Ip(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function sh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ti(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),po|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=us(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=us(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function TR(i,o,l){switch(o.tag){case 3:yv(o),ya();break;case 5:My(o);break;case 1:Cn(o.type)&&Bc(o);break;case 4:np(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;lt(Gc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(lt(_t,_t.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Ev(i,o,l):(lt(_t,_t.current&1),i=Ti(i,o,l),i!==null?i.sibling:null);lt(_t,_t.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Tv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),lt(_t,_t.current),h)break;return null;case 22:case 23:return o.lanes=0,mv(i,o,l)}return Ti(i,o,l)}var Iv,Sp,Sv,Cv;Iv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sp=function(){},Sv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,ho(Gr.current);var _=null;switch(l){case"input":p=lr(i,p),h=lr(i,h),_=[];break;case"select":p=ie({},p,{value:void 0}),h=ie({},h,{value:void 0}),_=[];break;case"textarea":p=qs(i,p),h=qs(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Fc)}Jt(l,h);var w;l=null;for(H in p)if(!h.hasOwnProperty(H)&&p.hasOwnProperty(H)&&p[H]!=null)if(H==="style"){var R=p[H];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(s.hasOwnProperty(H)?_||(_=[]):(_=_||[]).push(H,null));for(H in h){var N=h[H];if(R=p!=null?p[H]:void 0,h.hasOwnProperty(H)&&N!==R&&(N!=null||R!=null))if(H==="style")if(R){for(w in R)!R.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in N)N.hasOwnProperty(w)&&R[w]!==N[w]&&(l||(l={}),l[w]=N[w])}else l||(_||(_=[]),_.push(H,l)),l=N;else H==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,R=R?R.__html:void 0,N!=null&&R!==N&&(_=_||[]).push(H,N)):H==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push(H,""+N):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(s.hasOwnProperty(H)?(N!=null&&H==="onScroll"&&ht("scroll",i),_||R===N||(_=[])):(_=_||[]).push(H,N))}l&&(_=_||[]).push("style",l);var H=_;(o.updateQueue=H)&&(o.flags|=4)}},Cv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Ql(i,o){if(!gt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function cn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function IR(i,o,l){var h=o.pendingProps;switch(qf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(o),null;case 1:return Cn(o.type)&&jc(),cn(o),null;case 3:return h=o.stateNode,Ta(),dt(Sn),dt(ln),sp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Hc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Er!==null&&(Lp(Er),Er=null))),Sp(i,o),cn(o),null;case 5:rp(o);var p=ho(Wl.current);if(l=o.type,i!==null&&o.stateNode!=null)Sv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return cn(o),null}if(i=ho(Gr.current),Hc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[qr]=o,h[Ul]=_,i=(o.mode&1)!==0,l){case"dialog":ht("cancel",h),ht("close",h);break;case"iframe":case"object":case"embed":ht("load",h);break;case"video":case"audio":for(p=0;p<Ml.length;p++)ht(Ml[p],h);break;case"source":ht("error",h);break;case"img":case"image":case"link":ht("error",h),ht("load",h);break;case"details":ht("toggle",h);break;case"input":Lr(h,_),ht("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},ht("invalid",h);break;case"textarea":Bi(h,_),ht("invalid",h)}Jt(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var R=_[w];w==="children"?typeof R=="string"?h.textContent!==R&&(_.suppressHydrationWarning!==!0&&Vc(h.textContent,R,i),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(_.suppressHydrationWarning!==!0&&Vc(h.textContent,R,i),p=["children",""+R]):s.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&ht("scroll",h)}switch(l){case"input":an(h),Hs(h,_,!0);break;case"textarea":an(h),Gs(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Fc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ze(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[qr]=o,i[Ul]=h,Iv(i,o,!1,!1),o.stateNode=i;e:{switch(w=Vr(l,h),l){case"dialog":ht("cancel",i),ht("close",i),p=h;break;case"iframe":case"object":case"embed":ht("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ml.length;p++)ht(Ml[p],i);p=h;break;case"source":ht("error",i),p=h;break;case"img":case"image":case"link":ht("error",i),ht("load",i),p=h;break;case"details":ht("toggle",i),p=h;break;case"input":Lr(i,h),p=lr(i,h),ht("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ie({},h,{value:void 0}),ht("invalid",i);break;case"textarea":Bi(i,h),p=qs(i,h),ht("invalid",i);break;default:p=h}Jt(l,p),R=p;for(_ in R)if(R.hasOwnProperty(_)){var N=R[_];_==="style"?ct(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ie(i,N)):_==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&Xe(i,N):typeof N=="number"&&Xe(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&ht("scroll",i):N!=null&&Z(i,_,N,w))}switch(l){case"input":an(i),Hs(i,h,!1);break;case"textarea":an(i),Gs(i);break;case"option":h.value!=null&&i.setAttribute("value",""+qe(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?qn(i,!!h.multiple,_,!1):h.defaultValue!=null&&qn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Fc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return cn(o),null;case 6:if(i&&o.stateNode!=null)Cv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=ho(Wl.current),ho(Gr.current),Hc(o)){if(h=o.stateNode,l=o.memoizedProps,h[qr]=o,(_=h.nodeValue!==l)&&(i=Un,i!==null))switch(i.tag){case 3:Vc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Vc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[qr]=o,o.stateNode=h}return cn(o),null;case 13:if(dt(_t),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(gt&&jn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)ky(),ya(),o.flags|=98560,_=!1;else if(_=Hc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[qr]=o}else ya(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;cn(o),_=!1}else Er!==null&&(Lp(Er),Er=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(_t.current&1)!==0?jt===0&&(jt=3):Fp())),o.updateQueue!==null&&(o.flags|=4),cn(o),null);case 4:return Ta(),Sp(i,o),i===null&&Vl(o.stateNode.containerInfo),cn(o),null;case 10:return Jf(o.type._context),cn(o),null;case 17:return Cn(o.type)&&jc(),cn(o),null;case 19:if(dt(_t),_=o.memoizedState,_===null)return cn(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)Ql(_,!1);else{if(jt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=Xc(i),w!==null){for(o.flags|=128,Ql(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return lt(_t,_t.current&1|2),o.child}i=i.sibling}_.tail!==null&&at()>Ra&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304)}else{if(!h)if(i=Xc(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!gt)return cn(o),null}else 2*at()-_.renderingStartTime>Ra&&l!==1073741824&&(o.flags|=128,h=!0,Ql(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=at(),o.sibling=null,l=_t.current,lt(_t,h?l&1|2:l&1),o):(cn(o),null);case 22:case 23:return Vp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Bn&1073741824)!==0&&(cn(o),o.subtreeFlags&6&&(o.flags|=8192)):cn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function SR(i,o){switch(qf(o),o.tag){case 1:return Cn(o.type)&&jc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ta(),dt(Sn),dt(ln),sp(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return rp(o),null;case 13:if(dt(_t),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ya()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return dt(_t),null;case 4:return Ta(),null;case 10:return Jf(o.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var oh=!1,hn=!1,CR=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Sa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Et(i,o,h)}else l.current=null}function Cp(i,o,l){try{l()}catch(h){Et(i,o,h)}}var Rv=!1;function RR(i,o){if(Vf=Qi,i=iy(),Pf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,R=-1,N=-1,H=0,te=0,re=i,ee=null;t:for(;;){for(var fe;re!==l||p!==0&&re.nodeType!==3||(R=w+p),re!==_||h!==0&&re.nodeType!==3||(N=w+h),re.nodeType===3&&(w+=re.nodeValue.length),(fe=re.firstChild)!==null;)ee=re,re=fe;for(;;){if(re===i)break t;if(ee===l&&++H===p&&(R=w),ee===_&&++te===h&&(N=w),(fe=re.nextSibling)!==null)break;re=ee,ee=re.parentNode}re=fe}l=R===-1||N===-1?null:{start:R,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ff={focusedElem:i,selectionRange:l},Qi=!1,ge=o;ge!==null;)if(o=ge,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ge=i;else for(;ge!==null;){o=ge;try{var _e=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var ve=_e.memoizedProps,Ct=_e.memoizedState,z=o.stateNode,O=z.getSnapshotBeforeUpdate(o.elementType===o.type?ve:wr(o.type,ve),Ct);z.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(oe){Et(o,o.return,oe)}if(i=o.sibling,i!==null){i.return=o.return,ge=i;break}ge=o.return}return _e=Rv,Rv=!1,_e}function Yl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Cp(o,l,_)}p=p.next}while(p!==h)}}function ah(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Rp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Av(i){var o=i.alternate;o!==null&&(i.alternate=null,Av(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[qr],delete o[Ul],delete o[zf],delete o[lR],delete o[uR])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function kv(i){return i.tag===5||i.tag===3||i.tag===4}function Pv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||kv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ap(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Fc));else if(h!==4&&(i=i.child,i!==null))for(Ap(i,o,l),i=i.sibling;i!==null;)Ap(i,o,l),i=i.sibling}function kp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(kp(i,o,l),i=i.sibling;i!==null;)kp(i,o,l),i=i.sibling}var tn=null,Tr=!1;function is(i,o,l){for(l=l.child;l!==null;)Nv(i,o,l),l=l.sibling}function Nv(i,o,l){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Zs,l)}catch{}switch(l.tag){case 5:hn||Sa(l,o);case 6:var h=tn,p=Tr;tn=null,is(i,o,l),tn=h,Tr=p,tn!==null&&(Tr?(i=tn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):tn.removeChild(l.stateNode));break;case 18:tn!==null&&(Tr?(i=tn,l=l.stateNode,i.nodeType===8?Bf(i.parentNode,l):i.nodeType===1&&Bf(i,l),_r(i)):Bf(tn,l.stateNode));break;case 4:h=tn,p=Tr,tn=l.stateNode.containerInfo,Tr=!0,is(i,o,l),tn=h,Tr=p;break;case 0:case 11:case 14:case 15:if(!hn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Cp(l,o,w),p=p.next}while(p!==h)}is(i,o,l);break;case 1:if(!hn&&(Sa(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){Et(l,o,R)}is(i,o,l);break;case 21:is(i,o,l);break;case 22:l.mode&1?(hn=(h=hn)||l.memoizedState!==null,is(i,o,l),hn=h):is(i,o,l);break;default:is(i,o,l)}}function xv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new CR),o.forEach(function(h){var p=LR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Ir(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,R=w;e:for(;R!==null;){switch(R.tag){case 5:tn=R.stateNode,Tr=!1;break e;case 3:tn=R.stateNode.containerInfo,Tr=!0;break e;case 4:tn=R.stateNode.containerInfo,Tr=!0;break e}R=R.return}if(tn===null)throw Error(t(160));Nv(_,w,p),tn=null,Tr=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch(H){Et(p,o,H)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)bv(o,i),o=o.sibling}function bv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ir(o,i),Qr(i),h&4){try{Yl(3,i,i.return),ah(3,i)}catch(ve){Et(i,i.return,ve)}try{Yl(5,i,i.return)}catch(ve){Et(i,i.return,ve)}}break;case 1:Ir(o,i),Qr(i),h&512&&l!==null&&Sa(l,l.return);break;case 5:if(Ir(o,i),Qr(i),h&512&&l!==null&&Sa(l,l.return),i.flags&32){var p=i.stateNode;try{Xe(p,"")}catch(ve){Et(i,i.return,ve)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,R=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{R==="input"&&_.type==="radio"&&_.name!=null&&ur(p,_),Vr(R,w);var H=Vr(R,_);for(w=0;w<N.length;w+=2){var te=N[w],re=N[w+1];te==="style"?ct(p,re):te==="dangerouslySetInnerHTML"?Ie(p,re):te==="children"?Xe(p,re):Z(p,te,re,H)}switch(R){case"input":Ui(p,_);break;case"textarea":Mr(p,_);break;case"select":var ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var fe=_.value;fe!=null?qn(p,!!_.multiple,fe,!1):ee!==!!_.multiple&&(_.defaultValue!=null?qn(p,!!_.multiple,_.defaultValue,!0):qn(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ul]=_}catch(ve){Et(i,i.return,ve)}}break;case 6:if(Ir(o,i),Qr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(ve){Et(i,i.return,ve)}}break;case 3:if(Ir(o,i),Qr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{_r(o.containerInfo)}catch(ve){Et(i,i.return,ve)}break;case 4:Ir(o,i),Qr(i);break;case 13:Ir(o,i),Qr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(xp=at())),h&4&&xv(i);break;case 22:if(te=l!==null&&l.memoizedState!==null,i.mode&1?(hn=(H=hn)||te,Ir(o,i),hn=H):Ir(o,i),Qr(i),h&8192){if(H=i.memoizedState!==null,(i.stateNode.isHidden=H)&&!te&&(i.mode&1)!==0)for(ge=i,te=i.child;te!==null;){for(re=ge=te;ge!==null;){switch(ee=ge,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:Yl(4,ee,ee.return);break;case 1:Sa(ee,ee.return);var _e=ee.stateNode;if(typeof _e.componentWillUnmount=="function"){h=ee,l=ee.return;try{o=h,_e.props=o.memoizedProps,_e.state=o.memoizedState,_e.componentWillUnmount()}catch(ve){Et(h,l,ve)}}break;case 5:Sa(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Lv(re);continue}}fe!==null?(fe.return=ee,ge=fe):Lv(re)}te=te.sibling}e:for(te=null,re=i;;){if(re.tag===5){if(te===null){te=re;try{p=re.stateNode,H?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(R=re.stateNode,N=re.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,R.style.display=Pt("display",w))}catch(ve){Et(i,i.return,ve)}}}else if(re.tag===6){if(te===null)try{re.stateNode.nodeValue=H?"":re.memoizedProps}catch(ve){Et(i,i.return,ve)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===i)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===i)break e;for(;re.sibling===null;){if(re.return===null||re.return===i)break e;te===re&&(te=null),re=re.return}te===re&&(te=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:Ir(o,i),Qr(i),h&4&&xv(i);break;case 21:break;default:Ir(o,i),Qr(i)}}function Qr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(kv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Xe(p,""),h.flags&=-33);var _=Pv(i);kp(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,R=Pv(i);Ap(i,R,w);break;default:throw Error(t(161))}}catch(N){Et(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function AR(i,o,l){ge=i,Dv(i)}function Dv(i,o,l){for(var h=(i.mode&1)!==0;ge!==null;){var p=ge,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||oh;if(!w){var R=p.alternate,N=R!==null&&R.memoizedState!==null||hn;R=oh;var H=hn;if(oh=w,(hn=N)&&!H)for(ge=p;ge!==null;)w=ge,N=w.child,w.tag===22&&w.memoizedState!==null?Mv(p):N!==null?(N.return=w,ge=N):Mv(p);for(;_!==null;)ge=_,Dv(_),_=_.sibling;ge=p,oh=R,hn=H}Ov(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ge=_):Ov(i)}}function Ov(i){for(;ge!==null;){var o=ge;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:hn||ah(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!hn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:wr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Ly(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Ly(o,w,l)}break;case 5:var R=o.stateNode;if(l===null&&o.flags&4){l=R;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var H=o.alternate;if(H!==null){var te=H.memoizedState;if(te!==null){var re=te.dehydrated;re!==null&&_r(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||o.flags&512&&Rp(o)}catch(ee){Et(o,o.return,ee)}}if(o===i){ge=null;break}if(l=o.sibling,l!==null){l.return=o.return,ge=l;break}ge=o.return}}function Lv(i){for(;ge!==null;){var o=ge;if(o===i){ge=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ge=l;break}ge=o.return}}function Mv(i){for(;ge!==null;){var o=ge;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{ah(4,o)}catch(N){Et(o,l,N)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(N){Et(o,p,N)}}var _=o.return;try{Rp(o)}catch(N){Et(o,_,N)}break;case 5:var w=o.return;try{Rp(o)}catch(N){Et(o,w,N)}}}catch(N){Et(o,o.return,N)}if(o===i){ge=null;break}var R=o.sibling;if(R!==null){R.return=o.return,ge=R;break}ge=o.return}}var kR=Math.ceil,lh=j.ReactCurrentDispatcher,Pp=j.ReactCurrentOwner,nr=j.ReactCurrentBatchConfig,Qe=0,Ht=null,bt=null,nn=0,Bn=0,Ca=Zi(0),jt=0,Xl=null,po=0,uh=0,Np=0,Jl=null,An=null,xp=0,Ra=1/0,Ii=null,ch=!1,bp=null,ss=null,hh=!1,os=null,dh=0,Zl=0,Dp=null,fh=-1,ph=0;function En(){return(Qe&6)!==0?at():fh!==-1?fh:fh=at()}function as(i){return(i.mode&1)===0?1:(Qe&2)!==0&&nn!==0?nn&-nn:hR.transition!==null?(ph===0&&(ph=to()),ph):(i=He,i!==0||(i=window.event,i=i===void 0?16:Al(i.type)),i)}function Sr(i,o,l,h){if(50<Zl)throw Zl=0,Dp=null,Error(t(185));Hi(i,l,h),((Qe&2)===0||i!==Ht)&&(i===Ht&&((Qe&2)===0&&(uh|=l),jt===4&&ls(i,nn)),kn(i,h),l===1&&Qe===0&&(o.mode&1)===0&&(Ra=at()+500,zc&&ts()))}function kn(i,o){var l=i.callbackNode;hi(i,o);var h=eo(i,i===Ht?nn:0);if(h===0)l!==null&&Tl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Tl(l),o===1)i.tag===0?cR(Fv.bind(null,i)):Iy(Fv.bind(null,i)),oR(function(){(Qe&6)===0&&ts()}),l=null;else{switch(Gi(h)){case 1:l=Js;break;case 4:l=zi;break;case 16:l=Qn;break;case 536870912:l=pc;break;default:l=Qn}l=qv(l,Vv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Vv(i,o){if(fh=-1,ph=0,(Qe&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Aa()&&i.callbackNode!==l)return null;var h=eo(i,i===Ht?nn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=mh(i,h);else{o=h;var p=Qe;Qe|=2;var _=jv();(Ht!==i||nn!==o)&&(Ii=null,Ra=at()+500,go(i,o));do try{xR();break}catch(R){Uv(i,R)}while(!0);Xf(),lh.current=_,Qe=p,bt!==null?o=0:(Ht=null,nn=0,o=jt)}if(o!==0){if(o===2&&(p=Mn(i),p!==0&&(h=p,o=Op(i,p))),o===1)throw l=Xl,go(i,0),ls(i,h),kn(i,at()),l;if(o===6)ls(i,h);else{if(p=i.current.alternate,(h&30)===0&&!PR(p)&&(o=mh(i,h),o===2&&(_=Mn(i),_!==0&&(h=_,o=Op(i,_))),o===1))throw l=Xl,go(i,0),ls(i,h),kn(i,at()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:_o(i,An,Ii);break;case 3:if(ls(i,h),(h&130023424)===h&&(o=xp+500-at(),10<o)){if(eo(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){En(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=jf(_o.bind(null,i,An,Ii),o);break}_o(i,An,Ii);break;case 4:if(ls(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-_n(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=at()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*kR(h/1960))-h,10<h){i.timeoutHandle=jf(_o.bind(null,i,An,Ii),h);break}_o(i,An,Ii);break;case 5:_o(i,An,Ii);break;default:throw Error(t(329))}}}return kn(i,at()),i.callbackNode===l?Vv.bind(null,i):null}function Op(i,o){var l=Jl;return i.current.memoizedState.isDehydrated&&(go(i,o).flags|=256),i=mh(i,o),i!==2&&(o=An,An=l,o!==null&&Lp(o)),i}function Lp(i){An===null?An=i:An.push.apply(An,i)}function PR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!vr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ls(i,o){for(o&=~Np,o&=~uh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-_n(o),h=1<<l;i[l]=-1,o&=~h}}function Fv(i){if((Qe&6)!==0)throw Error(t(327));Aa();var o=eo(i,0);if((o&1)===0)return kn(i,at()),null;var l=mh(i,o);if(i.tag!==0&&l===2){var h=Mn(i);h!==0&&(o=h,l=Op(i,h))}if(l===1)throw l=Xl,go(i,0),ls(i,o),kn(i,at()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,_o(i,An,Ii),kn(i,at()),null}function Mp(i,o){var l=Qe;Qe|=1;try{return i(o)}finally{Qe=l,Qe===0&&(Ra=at()+500,zc&&ts())}}function mo(i){os!==null&&os.tag===0&&(Qe&6)===0&&Aa();var o=Qe;Qe|=1;var l=nr.transition,h=He;try{if(nr.transition=null,He=1,i)return i()}finally{He=h,nr.transition=l,Qe=o,(Qe&6)===0&&ts()}}function Vp(){Bn=Ca.current,dt(Ca)}function go(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,sR(l)),bt!==null)for(l=bt.return;l!==null;){var h=l;switch(qf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&jc();break;case 3:Ta(),dt(Sn),dt(ln),sp();break;case 5:rp(h);break;case 4:Ta();break;case 13:dt(_t);break;case 19:dt(_t);break;case 10:Jf(h.type._context);break;case 22:case 23:Vp()}l=l.return}if(Ht=i,bt=i=us(i.current,null),nn=Bn=o,jt=0,Xl=null,Np=uh=po=0,An=Jl=null,co!==null){for(o=0;o<co.length;o++)if(l=co[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}co=null}return i}function Uv(i,o){do{var l=bt;try{if(Xf(),Jc.current=nh,Zc){for(var h=yt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Zc=!1}if(fo=0,Wt=Ut=yt=null,Hl=!1,ql=0,Pp.current=null,l===null||l.return===null){jt=1,Xl=o,bt=null;break}e:{var _=i,w=l.return,R=l,N=o;if(o=nn,R.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var H=N,te=R,re=te.tag;if((te.mode&1)===0&&(re===0||re===11||re===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var fe=cv(w);if(fe!==null){fe.flags&=-257,hv(fe,w,R,_,o),fe.mode&1&&uv(_,H,o),o=fe,N=H;var _e=o.updateQueue;if(_e===null){var ve=new Set;ve.add(N),o.updateQueue=ve}else _e.add(N);break e}else{if((o&1)===0){uv(_,H,o),Fp();break e}N=Error(t(426))}}else if(gt&&R.mode&1){var Ct=cv(w);if(Ct!==null){(Ct.flags&65536)===0&&(Ct.flags|=256),hv(Ct,w,R,_,o),Qf(Ia(N,R));break e}}_=N=Ia(N,R),jt!==4&&(jt=2),Jl===null?Jl=[_]:Jl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var z=av(_,N,o);Oy(_,z);break e;case 1:R=N;var O=_.type,$=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ss===null||!ss.has($)))){_.flags|=65536,o&=-o,_.lanes|=o;var oe=lv(_,R,o);Oy(_,oe);break e}}_=_.return}while(_!==null)}zv(l)}catch(we){o=we,bt===l&&l!==null&&(bt=l=l.return);continue}break}while(!0)}function jv(){var i=lh.current;return lh.current=nh,i===null?nh:i}function Fp(){(jt===0||jt===3||jt===2)&&(jt=4),Ht===null||(po&268435455)===0&&(uh&268435455)===0||ls(Ht,nn)}function mh(i,o){var l=Qe;Qe|=2;var h=jv();(Ht!==i||nn!==o)&&(Ii=null,go(i,o));do try{NR();break}catch(p){Uv(i,p)}while(!0);if(Xf(),Qe=l,lh.current=h,bt!==null)throw Error(t(261));return Ht=null,nn=0,jt}function NR(){for(;bt!==null;)Bv(bt)}function xR(){for(;bt!==null&&!dc();)Bv(bt)}function Bv(i){var o=Hv(i.alternate,i,Bn);i.memoizedProps=i.pendingProps,o===null?zv(i):bt=o,Pp.current=null}function zv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=IR(l,o,Bn),l!==null){bt=l;return}}else{if(l=SR(l,o),l!==null){l.flags&=32767,bt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{jt=6,bt=null;return}}if(o=o.sibling,o!==null){bt=o;return}bt=o=i}while(o!==null);jt===0&&(jt=5)}function _o(i,o,l){var h=He,p=nr.transition;try{nr.transition=null,He=1,bR(i,o,l,h)}finally{nr.transition=p,He=h}return null}function bR(i,o,l,h){do Aa();while(os!==null);if((Qe&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(st(i,_),i===Ht&&(bt=Ht=null,nn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||hh||(hh=!0,qv(Qn,function(){return Aa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=nr.transition,nr.transition=null;var w=He;He=1;var R=Qe;Qe|=4,Pp.current=null,RR(i,l),bv(l,i),JC(Ff),Qi=!!Vf,Ff=Vf=null,i.current=l,AR(l),wf(),Qe=R,He=w,nr.transition=_}else i.current=l;if(hh&&(hh=!1,os=i,dh=p),_=i.pendingLanes,_===0&&(ss=null),mc(l.stateNode),kn(i,at()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(ch)throw ch=!1,i=bp,bp=null,i;return(dh&1)!==0&&i.tag!==0&&Aa(),_=i.pendingLanes,(_&1)!==0?i===Dp?Zl++:(Zl=0,Dp=i):Zl=0,ts(),null}function Aa(){if(os!==null){var i=Gi(dh),o=nr.transition,l=He;try{if(nr.transition=null,He=16>i?16:i,os===null)var h=!1;else{if(i=os,os=null,dh=0,(Qe&6)!==0)throw Error(t(331));var p=Qe;for(Qe|=4,ge=i.current;ge!==null;){var _=ge,w=_.child;if((ge.flags&16)!==0){var R=_.deletions;if(R!==null){for(var N=0;N<R.length;N++){var H=R[N];for(ge=H;ge!==null;){var te=ge;switch(te.tag){case 0:case 11:case 15:Yl(8,te,_)}var re=te.child;if(re!==null)re.return=te,ge=re;else for(;ge!==null;){te=ge;var ee=te.sibling,fe=te.return;if(Av(te),te===H){ge=null;break}if(ee!==null){ee.return=fe,ge=ee;break}ge=fe}}}var _e=_.alternate;if(_e!==null){var ve=_e.child;if(ve!==null){_e.child=null;do{var Ct=ve.sibling;ve.sibling=null,ve=Ct}while(ve!==null)}}ge=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ge=w;else e:for(;ge!==null;){if(_=ge,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Yl(9,_,_.return)}var z=_.sibling;if(z!==null){z.return=_.return,ge=z;break e}ge=_.return}}var O=i.current;for(ge=O;ge!==null;){w=ge;var $=w.child;if((w.subtreeFlags&2064)!==0&&$!==null)$.return=w,ge=$;else e:for(w=O;ge!==null;){if(R=ge,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:ah(9,R)}}catch(we){Et(R,R.return,we)}if(R===w){ge=null;break e}var oe=R.sibling;if(oe!==null){oe.return=R.return,ge=oe;break e}ge=R.return}}if(Qe=p,ts(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Zs,i)}catch{}h=!0}return h}finally{He=l,nr.transition=o}}return!1}function $v(i,o,l){o=Ia(l,o),o=av(i,o,1),i=rs(i,o,1),o=En(),i!==null&&(Hi(i,1,o),kn(i,o))}function Et(i,o,l){if(i.tag===3)$v(i,i,l);else for(;o!==null;){if(o.tag===3){$v(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ss===null||!ss.has(h))){i=Ia(l,i),i=lv(o,i,1),o=rs(o,i,1),i=En(),o!==null&&(Hi(o,1,i),kn(o,i));break}}o=o.return}}function DR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=En(),i.pingedLanes|=i.suspendedLanes&l,Ht===i&&(nn&l)===l&&(jt===4||jt===3&&(nn&130023424)===nn&&500>at()-xp?go(i,0):Np|=l),kn(i,o)}function Wv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Yo,Yo<<=1,(Yo&130023424)===0&&(Yo=4194304)));var l=En();i=Ei(i,o),i!==null&&(Hi(i,o,l),kn(i,l))}function OR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Wv(i,l)}function LR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Wv(i,l)}var Hv;Hv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Sn.current)Rn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return Rn=!1,TR(i,o,l);Rn=(i.flags&131072)!==0}else Rn=!1,gt&&(o.flags&1048576)!==0&&Sy(o,Wc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;sh(i,o),i=o.pendingProps;var p=ma(o,ln.current);wa(o,l),p=lp(null,o,h,i,p,l);var _=up();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Cn(h)?(_=!0,Bc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,tp(o),p.updater=rh,o.stateNode=p,p._reactInternals=o,mp(o,h,i,l),o=vp(null,o,h,!0,_,l)):(o.tag=0,gt&&_&&Hf(o),vn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(sh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=VR(h),i=wr(h,i),p){case 0:o=yp(null,o,h,i,l);break e;case 1:o=_v(null,o,h,i,l);break e;case 11:o=dv(null,o,h,i,l);break e;case 14:o=fv(null,o,h,wr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:wr(h,p),yp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:wr(h,p),_v(i,o,h,p,l);case 3:e:{if(yv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Dy(i,o),Yc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ia(Error(t(423)),o),o=vv(i,o,h,l,p);break e}else if(h!==p){p=Ia(Error(t(424)),o),o=vv(i,o,h,l,p);break e}else for(jn=Ji(o.stateNode.containerInfo.firstChild),Un=o,gt=!0,Er=null,l=xy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ya(),h===p){o=Ti(i,o,l);break e}vn(i,o,h,l)}o=o.child}return o;case 5:return My(o),i===null&&Kf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Uf(h,p)?w=null:_!==null&&Uf(h,_)&&(o.flags|=32),gv(i,o),vn(i,o,w,l),o.child;case 6:return i===null&&Kf(o),null;case 13:return Ev(i,o,l);case 4:return np(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=va(o,null,h,l):vn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:wr(h,p),dv(i,o,h,p,l);case 7:return vn(i,o,o.pendingProps,l),o.child;case 8:return vn(i,o,o.pendingProps.children,l),o.child;case 12:return vn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,lt(Gc,h._currentValue),h._currentValue=w,_!==null)if(vr(_.value,w)){if(_.children===p.children&&!Sn.current){o=Ti(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var R=_.dependencies;if(R!==null){w=_.child;for(var N=R.firstContext;N!==null;){if(N.context===h){if(_.tag===1){N=wi(-1,l&-l),N.tag=2;var H=_.updateQueue;if(H!==null){H=H.shared;var te=H.pending;te===null?N.next=N:(N.next=te.next,te.next=N),H.pending=N}}_.lanes|=l,N=_.alternate,N!==null&&(N.lanes|=l),Zf(_.return,l,o),R.lanes|=l;break}N=N.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),Zf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}vn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,wa(o,l),p=er(p),h=h(p),o.flags|=1,vn(i,o,h,l),o.child;case 14:return h=o.type,p=wr(h,o.pendingProps),p=wr(h.type,p),fv(i,o,h,p,l);case 15:return pv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:wr(h,p),sh(i,o),o.tag=1,Cn(h)?(i=!0,Bc(o)):i=!1,wa(o,l),sv(o,h,p),mp(o,h,p,l),vp(null,o,h,!0,i,l);case 19:return Tv(i,o,l);case 22:return mv(i,o,l)}throw Error(t(156,o.tag))};function qv(i,o){return Ko(i,o)}function MR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(i,o,l,h){return new MR(i,o,l,h)}function Up(i){return i=i.prototype,!(!i||!i.isReactComponent)}function VR(i){if(typeof i=="function")return Up(i)?1:0;if(i!=null){if(i=i.$$typeof,i===U)return 11;if(i===$e)return 14}return 2}function us(i,o){var l=i.alternate;return l===null?(l=rr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function gh(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")Up(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case b:return yo(l.children,p,_,o);case C:w=8,p|=8;break;case A:return i=rr(12,l,o,p|2),i.elementType=A,i.lanes=_,i;case k:return i=rr(13,l,o,p),i.elementType=k,i.lanes=_,i;case ye:return i=rr(19,l,o,p),i.elementType=ye,i.lanes=_,i;case ce:return _h(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:w=10;break e;case D:w=9;break e;case U:w=11;break e;case $e:w=14;break e;case ne:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=rr(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function yo(i,o,l,h){return i=rr(7,i,h,o),i.lanes=l,i}function _h(i,o,l,h){return i=rr(22,i,h,o),i.elementType=ce,i.lanes=l,i.stateNode={isHidden:!1},i}function jp(i,o,l){return i=rr(6,i,null,o),i.lanes=l,i}function Bp(i,o,l){return o=rr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function FR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zp(i,o,l,h,p,_,w,R,N){return i=new FR(i,o,l,R,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=rr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(_),i}function UR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Gv(i){if(!i)return es;i=i._reactInternals;e:{if(dr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Cn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Cn(l))return wy(i,l,o)}return o}function Kv(i,o,l,h,p,_,w,R,N){return i=zp(l,h,!0,i,p,_,w,R,N),i.context=Gv(null),l=i.current,h=En(),p=as(l),_=wi(h,p),_.callback=o??null,rs(l,_,p),i.current.lanes=p,Hi(i,p,h),kn(i,h),i}function yh(i,o,l,h){var p=o.current,_=En(),w=as(p);return l=Gv(l),o.context===null?o.context=l:o.pendingContext=l,o=wi(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=rs(p,o,w),i!==null&&(Sr(i,p,w,_),Qc(i,p,w)),w}function vh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Qv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function $p(i,o){Qv(i,o),(i=i.alternate)&&Qv(i,o)}function jR(){return null}var Yv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Wp(i){this._internalRoot=i}Eh.prototype.render=Wp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));yh(i,o,null,null)},Eh.prototype.unmount=Wp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;mo(function(){yh(null,i,null,null)}),o[gi]=null}};function Eh(i){this._internalRoot=i}Eh.prototype.unstable_scheduleHydration=function(i){if(i){var o=Ec();i={blockedOn:null,target:i,priority:o};for(var l=0;l<zr.length&&o!==0&&o<zr[l].priority;l++);zr.splice(l,0,i),l===0&&Ic(i)}};function Hp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function wh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Xv(){}function BR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var H=vh(w);_.call(H)}}var w=Kv(o,h,i,0,null,!1,!1,"",Xv);return i._reactRootContainer=w,i[gi]=w.current,Vl(i.nodeType===8?i.parentNode:i),mo(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var H=vh(N);R.call(H)}}var N=zp(i,0,!1,null,null,!1,!1,"",Xv);return i._reactRootContainer=N,i[gi]=N.current,Vl(i.nodeType===8?i.parentNode:i),mo(function(){yh(o,N,l,h)}),N}function Th(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var R=p;p=function(){var N=vh(w);R.call(N)}}yh(o,w,i,p)}else w=BR(l,o,i,p,h);return vh(w)}yc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=$i(o.pendingLanes);l!==0&&(qi(o,l|1),kn(o,at()),(Qe&6)===0&&(Ra=at()+500,ts()))}break;case 13:mo(function(){var h=Ei(i,1);if(h!==null){var p=En();Sr(h,i,1,p)}}),$p(i,1)}},Xo=function(i){if(i.tag===13){var o=Ei(i,134217728);if(o!==null){var l=En();Sr(o,i,134217728,l)}$p(i,134217728)}},vc=function(i){if(i.tag===13){var o=as(i),l=Ei(i,o);if(l!==null){var h=En();Sr(l,i,o,h)}$p(i,o)}},Ec=function(){return He},wc=function(i,o){var l=He;try{return He=i,o()}finally{He=l}},zo=function(i,o,l){switch(o){case"input":if(Ui(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Uc(h);if(!p)throw Error(t(90));Or(h),Ui(h,p)}}}break;case"textarea":Mr(i,l);break;case"select":o=l.value,o!=null&&qn(i,!!l.multiple,o,!1)}},Ks=Mp,yl=mo;var zR={usingClientEntryPoint:!1,Events:[jl,fa,Uc,jr,_l,Mp]},eu={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$R={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wl(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||jR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ih.isDisabled&&Ih.supportsFiber)try{Zs=Ih.inject($R),Ln=Ih}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zR,Pn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(o))throw Error(t(200));return UR(i,o,null,l)},Pn.createRoot=function(i,o){if(!Hp(i))throw Error(t(299));var l=!1,h="",p=Yv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=zp(i,1,!1,null,null,l,!1,h,p),i[gi]=o.current,Vl(i.nodeType===8?i.parentNode:i),new Wp(o)},Pn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wl(o),i=i===null?null:i.stateNode,i},Pn.flushSync=function(i){return mo(i)},Pn.hydrate=function(i,o,l){if(!wh(o))throw Error(t(200));return Th(null,i,o,!0,l)},Pn.hydrateRoot=function(i,o,l){if(!Hp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=Yv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=Kv(o,null,i,1,l??null,p,!1,_,w),i[gi]=o.current,Vl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Eh(o)},Pn.render=function(i,o,l){if(!wh(o))throw Error(t(200));return Th(null,i,o,!1,l)},Pn.unmountComponentAtNode=function(i){if(!wh(i))throw Error(t(40));return i._reactRootContainer?(mo(function(){Th(null,null,i,!1,function(){i._reactRootContainer=null,i[gi]=null})}),!0):!1},Pn.unstable_batchedUpdates=Mp,Pn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!wh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Th(i,o,l,!1,h)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var sE;function JR(){if(sE)return Kp.exports;sE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kp.exports=XR(),Kp.exports}var oE;function ZR(){if(oE)return Sh;oE=1;var n=JR();return Sh.createRoot=n.createRoot,Sh.hydrateRoot=n.hydrateRoot,Sh}var eA=ZR();const tA=MT(eA),nA=()=>{};var aE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(n,e){if(!n)throw il(e)},il=function(n){return new Error("Firebase Database ("+VT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,P=m&63;f||(P=64,u||(T=64)),r.push(t[y],t[E],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(FT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new iA;const T=a<<2|d>>4;if(r.push(T),m!==64){const P=d<<4&240|m>>2;if(r.push(P),E!==64){const M=m<<6&192|E;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UT=function(n){const e=FT(n);return cg.encodeByteArray(e,!0)},Kh=function(n){return UT(n).replace(/\./g,"")},Qh=function(n){try{return cg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n){return jT(void 0,n)}function jT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oA(t)||(n[t]=jT(n[t],e[t]));return n}function oA(n){return n!=="__proto__"}/**
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
 */function aA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lA=()=>aA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof aE>"u")return;const n=aE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},bd=()=>{try{return nA()||lA()||uA()||cA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},BT=n=>{var e,t;return(t=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hg=n=>{const e=BT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zT=()=>{var n;return(n=bd())===null||n===void 0?void 0:n.config},$T=n=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kh(JSON.stringify(t)),Kh(JSON.stringify(u)),""].join(".")}const gu={};function hA(){const n={prod:[],emulator:[]};for(const e of Object.keys(gu))gu[e]?n.emulator.push(e):n.prod.push(e);return n}function dA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lE=!1;function Od(n,e){if(typeof window>"u"||typeof document>"u"||!oi(window.location.host)||gu[n]===e||gu[n]||lE)return;gu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=hA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{lE=!0,u()},T}function y(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=dA(r),P=t("text"),M=document.getElementById(P)||document.createElement("span"),L=t("learnmore"),F=document.getElementById(L)||document.createElement("a"),ae=t("preprendIcon"),K=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Z=T.element;d(Z),y(F,L);const j=m();f(K,ae),Z.append(K,M,F,j),document.body.appendChild(Z)}a?(M.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function fA(){var n;const e=(n=bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function WT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const n=mn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _A(){return VT.NODE_ADMIN===!0}function yA(){return!fA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vA(){try{return typeof indexedDB=="object"}catch{return!1}}function EA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="FirebaseError";class ai extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wA,Object.setPrototypeOf(this,ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qu.prototype.create)}}class Qu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?TA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new ai(s,d,r)}}function TA(n,e){return n.replace(IA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const IA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){return JSON.parse(n)}function Yt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Pu(Qh(a[0])||""),t=Pu(Qh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},SA=function(n){const e=HT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},CA=function(n){const e=HT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $a(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Ni(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(uE(a)&&uE(u)){if(!Ni(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function uE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):E<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const T=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function AA(n,e){const t=new kA(n,e);return t.subscribe.bind(t)}class kA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");PA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xp),s.error===void 0&&(s.error=Xp),s.complete===void 0&&(s.complete=Xp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xp(){}function Wa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,le(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ld=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function tt(n){return n&&n._delegate?n._delegate:n}class xi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vo="[DEFAULT]";/**
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
 */class xA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ci;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DA(e))try{this.getOrInitializeService({instanceIdentifier:vo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=vo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vo){return this.instances.has(e)}getOptions(e=vo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vo){return this.component?this.component.multipleInstances?e:vo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bA(n){return n===vo?void 0:n}function DA(n){return n.instantiationMode==="EAGER"}/**
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
 */class OA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const LA={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},MA=Be.INFO,VA={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},FA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=VA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=MA,this._logHandler=FA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const UA=(n,e)=>e.some(t=>n instanceof t);let cE,hE;function jA(){return cE||(cE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BA(){return hE||(hE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qT=new WeakMap,vm=new WeakMap,GT=new WeakMap,Jp=new WeakMap,pg=new WeakMap;function zA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(vs(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&qT.set(t,n)}).catch(()=>{}),pg.set(e,n),e}function $A(n){if(vm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});vm.set(n,e)}let Em={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||GT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function WA(n){Em=n(Em)}function HA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zp(this),e,...t);return GT.set(r,e.sort?e.sort():[e]),vs(r)}:BA().includes(n)?function(...e){return n.apply(Zp(this),e),vs(qT.get(this))}:function(...e){return vs(n.apply(Zp(this),e))}}function qA(n){return typeof n=="function"?HA(n):(n instanceof IDBTransaction&&$A(n),UA(n,jA())?new Proxy(n,Em):n)}function vs(n){if(n instanceof IDBRequest)return zA(n);if(Jp.has(n))return Jp.get(n);const e=qA(n);return e!==n&&(Jp.set(n,e),pg.set(e,n)),e}const Zp=n=>pg.get(n);function GA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=vs(u);return r&&u.addEventListener("upgradeneeded",f=>{r(vs(u.result),f.oldVersion,f.newVersion,vs(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const KA=["get","getKey","getAll","getAllKeys","count"],QA=["put","add","delete","clear"],em=new Map;function dE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(em.get(e))return em.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=QA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return em.set(e,a),a}WA(n=>({...n,get:(e,t,r)=>dE(e,t)||n.get(e,t,r),has:(e,t)=>!!dE(e,t)||n.has(e,t)}));/**
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
 */class YA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(XA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function XA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wm="@firebase/app",fE="0.13.2";/**
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
 */const bi=new Md("@firebase/app"),JA="@firebase/app-compat",ZA="@firebase/analytics-compat",ek="@firebase/analytics",tk="@firebase/app-check-compat",nk="@firebase/app-check",rk="@firebase/auth",ik="@firebase/auth-compat",sk="@firebase/database",ok="@firebase/data-connect",ak="@firebase/database-compat",lk="@firebase/functions",uk="@firebase/functions-compat",ck="@firebase/installations",hk="@firebase/installations-compat",dk="@firebase/messaging",fk="@firebase/messaging-compat",pk="@firebase/performance",mk="@firebase/performance-compat",gk="@firebase/remote-config",_k="@firebase/remote-config-compat",yk="@firebase/storage",vk="@firebase/storage-compat",Ek="@firebase/firestore",wk="@firebase/ai",Tk="@firebase/firestore-compat",Ik="firebase",Sk="11.10.0";/**
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
 */const Tm="[DEFAULT]",Ck={[wm]:"fire-core",[JA]:"fire-core-compat",[ek]:"fire-analytics",[ZA]:"fire-analytics-compat",[nk]:"fire-app-check",[tk]:"fire-app-check-compat",[rk]:"fire-auth",[ik]:"fire-auth-compat",[sk]:"fire-rtdb",[ok]:"fire-data-connect",[ak]:"fire-rtdb-compat",[lk]:"fire-fn",[uk]:"fire-fn-compat",[ck]:"fire-iid",[hk]:"fire-iid-compat",[dk]:"fire-fcm",[fk]:"fire-fcm-compat",[pk]:"fire-perf",[mk]:"fire-perf-compat",[gk]:"fire-rc",[_k]:"fire-rc-compat",[yk]:"fire-gcs",[vk]:"fire-gcs-compat",[Ek]:"fire-fst",[Tk]:"fire-fst-compat",[wk]:"fire-vertex","fire-js":"fire-js",[Ik]:"fire-js-all"};/**
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
 */const Jh=new Map,Rk=new Map,Im=new Map;function pE(n,e){try{n.container.addComponent(e)}catch(t){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ps(n){const e=n.name;if(Im.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,n);for(const t of Jh.values())pE(t,n);for(const t of Rk.values())pE(t,n);return!0}function Yu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ak={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Es=new Qu("app","Firebase",Ak);/**
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
 */class kk{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}}/**
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
 */const js=Sk;function KT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Es.create("bad-app-name",{appName:String(s)});if(t||(t=zT()),!t)throw Es.create("no-options");const a=Jh.get(s);if(a){if(Ni(t,a.options)&&Ni(r,a.config))return a;throw Es.create("duplicate-app",{appName:s})}const u=new OA(s);for(const f of Im.values())u.addComponent(f);const d=new kk(t,r,u);return Jh.set(s,d),d}function Vd(n=Tm){const e=Jh.get(n);if(!e&&n===Tm&&zT())return KT();if(!e)throw Es.create("no-app",{appName:n});return e}function ar(n,e,t){var r;let s=(r=Ck[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(d.join(" "));return}Ps(new xi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Pk="firebase-heartbeat-database",Nk=1,Nu="firebase-heartbeat-store";let tm=null;function QT(){return tm||(tm=GA(Pk,Nk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Es.create("idb-open",{originalErrorMessage:n.message})})),tm}async function xk(n){try{const t=(await QT()).transaction(Nu),r=await t.objectStore(Nu).get(YT(n));return await t.done,r}catch(e){if(e instanceof ai)bi.warn(e.message);else{const t=Es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(t.message)}}}async function mE(n,e){try{const r=(await QT()).transaction(Nu,"readwrite");await r.objectStore(Nu).put(e,YT(n)),await r.done}catch(t){if(t instanceof ai)bi.warn(t.message);else{const r=Es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bi.warn(r.message)}}}function YT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bk=1024,Dk=30;class Ok{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=gE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>Dk){const u=Vk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gE(),{heartbeatsToSend:r,unsentEntries:s}=Lk(this._heartbeatsCache.heartbeats),a=Kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return bi.warn(t),""}}}function gE(){return new Date().toISOString().substring(0,10)}function Lk(n,e=bk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),_E(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),_E(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Mk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vA()?EA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return mE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return mE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _E(n){return Kh(JSON.stringify({version:2,heartbeats:n})).length}function Vk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Fk(n){Ps(new xi("platform-logger",e=>new YA(e),"PRIVATE")),Ps(new xi("heartbeat",e=>new Ok(e),"PRIVATE")),ar(wm,fE,n),ar(wm,fE,"esm2017"),ar("fire-js","")}Fk("");function mg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function XT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uk=XT,JT=new Qu("auth","Firebase",XT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Md("@firebase/auth");function jk(n,...e){Zh.logLevel<=Be.WARN&&Zh.warn(`Auth (${js}): ${n}`,...e)}function Lh(n,...e){Zh.logLevel<=Be.ERROR&&Zh.error(`Auth (${js}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n,...e){throw gg(n,...e)}function Zr(n,...e){return gg(n,...e)}function ZT(n,e,t){const r=Object.assign(Object.assign({},Uk()),{[e]:t});return new Qu("auth","Firebase",r).create(e,{appName:n.name})}function ws(n){return ZT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return JT.create(n,...e)}function Ae(n,e,...t){if(!n)throw gg(e,...t)}function Ri(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lh(e),new Error(e)}function Di(n,e){n||Ri(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Bk(){return yE()==="http:"||yE()==="https:"}function yE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bk()||mA()||"connection"in navigator)?navigator.onLine:!0}function $k(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Di(t>e,"Short delay should be less than long delay!"),this.isMobile=fg()||WT()}get(){return zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n,e){Di(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qk=new Xu(3e4,6e4);function Vo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Bs(n,e,t,r,s={}){return tI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=sl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return pA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&oi(n.emulatorConfig.host)&&(m.credentials="include"),eI.fetch()(await nI(n,n.config.apiHost,t,d),m)})}async function tI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wk),e);try{const s=new Kk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ch(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ch(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Ch(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Ch(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw ZT(n,y,m);br(n,y)}}catch(s){if(s instanceof ai)throw s;br(n,"network-request-failed",{message:String(s)})}}async function Fd(n,e,t,r,s={}){const a=await Bs(n,e,t,r,s);return"mfaPendingCredential"in a&&br(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function nI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?_g(n.config,s):`${n.config.apiScheme}://${s}`;return Hk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Gk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zr(this.auth,"network-request-failed")),qk.get())})}}function Ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Zr(n,e,r);return s.customData._tokenResponse=t,s}function vE(n){return n!==void 0&&n.enterprise!==void 0}class Qk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yk(n,e){return Bs(n,"GET","/v2/recaptchaConfig",Vo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(n,e){return Bs(n,"POST","/v1/accounts:delete",e)}async function ed(n,e){return Bs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jk(n,e=!1){const t=tt(n),r=await t.getIdToken(e),s=yg(r);Ae(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:_u(nm(s.auth_time)),issuedAtTime:_u(nm(s.iat)),expirationTime:_u(nm(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function nm(n){return Number(n)*1e3}function yg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Lh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(Lh("Failed to decode base64 JWT payload"),null)}catch(s){return Lh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function EE(n){const e=yg(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ai&&Zk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function td(n){var e;const t=n.auth,r=await n.getIdToken(),s=await xu(n,ed(t,{idToken:r}));Ae(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?rI(a.providerUserInfo):[],d=n1(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Cm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function t1(n){const e=tt(n);await td(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rI(n){return n.map(e=>{var{providerId:t}=e,r=mg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(n,e){const t=await tI(n,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await nI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&oi(n.emulatorConfig.host)&&(f.credentials="include"),eI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function i1(n,e){return Bs(n,"POST","/v2/accounts:revokeToken",Vo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=EE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await r1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ma;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ae(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ae(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return Ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=mg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new e1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await xu(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jk(this,e)}reload(){return t1(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await td(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(ws(this.auth));const e=await this.getIdToken();return await xu(this,Xk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(u=t.photoURL)!==null&&u!==void 0?u:void 0,L=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ae=(m=t.createdAt)!==null&&m!==void 0?m:void 0,K=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Z,emailVerified:j,isAnonymous:Te,providerData:me,stsTokenManager:b}=t;Ae(Z&&b,e,"internal-error");const C=Ma.fromJSON(this.name,b);Ae(typeof Z=="string",e,"internal-error"),hs(E,e.name),hs(T,e.name),Ae(typeof j=="boolean",e,"internal-error"),Ae(typeof Te=="boolean",e,"internal-error"),hs(P,e.name),hs(M,e.name),hs(L,e.name),hs(F,e.name),hs(ae,e.name),hs(K,e.name);const A=new Rr({uid:Z,auth:e,email:T,emailVerified:j,displayName:E,isAnonymous:Te,photoURL:M,phoneNumber:P,tenantId:L,stsTokenManager:C,createdAt:ae,lastLoginAt:K});return me&&Array.isArray(me)&&(A.providerData=me.map(x=>Object.assign({},x))),F&&(A._redirectEventId=F),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ma;s.updateFromServerResponse(t);const a=new Rr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await td(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ae(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?rI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Ma;d.updateFromIdToken(r);const f=new Rr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Map;function Ai(n){Di(n instanceof Function,"Expected a class definition");let e=wE.get(n);return e?(Di(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wE.set(n,e),e)}/**
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
 */class iI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}iI.type="NONE";const TE=iI;/**
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
 */function Mh(n,e,t){return`firebase:${n}:${e}:${t}`}class Va{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Mh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Mh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ed(this.auth,{idToken:e}).catch(()=>{});return t?Rr._fromGetAccountInfoResponse(this.auth,t,e):null}return Rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Va(Ai(TE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Ai(TE);const u=Mh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const T=await ed(e,{idToken:y}).catch(()=>{});if(!T)break;E=await Rr._fromGetAccountInfoResponse(e,T,y)}else E=Rr._fromJSON(e,y);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Va(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Va(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cI(e))return"Blackberry";if(hI(e))return"Webos";if(oI(e))return"Safari";if((e.includes("chrome/")||aI(e))&&!e.includes("edge/"))return"Chrome";if(uI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sI(n=mn()){return/firefox\//i.test(n)}function oI(n=mn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aI(n=mn()){return/crios\//i.test(n)}function lI(n=mn()){return/iemobile/i.test(n)}function uI(n=mn()){return/android/i.test(n)}function cI(n=mn()){return/blackberry/i.test(n)}function hI(n=mn()){return/webos/i.test(n)}function vg(n=mn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function s1(n=mn()){var e;return vg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function o1(){return gA()&&document.documentMode===10}function dI(n=mn()){return vg(n)||uI(n)||hI(n)||cI(n)||/windows phone/i.test(n)||lI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n,e=[]){let t;switch(n){case"Browser":t=IE(mn());break;case"Worker":t=`${IE(mn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${js}/${r}`}/**
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
 */class a1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function l1(n,e={}){return Bs(n,"GET","/v2/passwordPolicy",Vo(n,e))}/**
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
 */const u1=6;class c1{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:u1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new SE(this),this.idTokenSubscription=new SE(this),this.beforeStateQueue=new a1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ai(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Va.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ed(this,{idToken:e}),r=await Rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await td(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(ws(this));const t=e?tt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l1(this),t=new c1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await i1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ai(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await Va.create(this,[Ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ol(n){return tt(n)}class SE{constructor(e){this.auth=e,this.observer=null,this.addObserver=AA(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function d1(n){Ud=n}function pI(n){return Ud.loadJS(n)}function f1(){return Ud.recaptchaEnterpriseScript}function p1(){return Ud.gapiScript}function m1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class g1{constructor(){this.enterprise=new _1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const y1="recaptcha-enterprise",mI="NO_RECAPTCHA";class v1{constructor(e){this.type=y1,this.auth=ol(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Yk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Qk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;vE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(mI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new g1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&vE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=f1();f.length!==0&&(f+=d),pI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function CE(n,e,t,r=!1,s=!1){const a=new v1(n);let u;if(s)u=mI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function RE(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await CE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await CE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n,e){const t=Yu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ni(a,e??{}))return s;br(s,"already-initialized")}return t.initialize({options:e})}function w1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ai);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function T1(n,e,t){const r=ol(n);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=gI(e),{host:u,port:d}=I1(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(Ni(m,r.config.emulator)&&Ni(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,oi(u)?(Dd(`${a}//${u}${f}`),Od("Auth",!0)):S1()}function gI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function I1(n){const e=gI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:AE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:AE(u)}}}function AE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function S1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ri("not implemented")}_getIdTokenResponse(e){return Ri("not implemented")}_linkToIdToken(e,t){return Ri("not implemented")}_getReauthenticationResolver(e){return Ri("not implemented")}}async function C1(n,e){return Bs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return Fd(n,"POST","/v1/accounts:signInWithPassword",Vo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(n,e){return Fd(n,"POST","/v1/accounts:signInWithEmailLink",Vo(n,e))}async function k1(n,e){return Fd(n,"POST","/v1/accounts:signInWithEmailLink",Vo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Eg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new bu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new bu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return RE(e,t,"signInWithPassword",R1);case"emailLink":return A1(e,{email:this._email,oobCode:this._password});default:br(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return RE(e,r,"signUpPassword",C1);case"emailLink":return k1(e,{idToken:t,email:this._email,oobCode:this._password});default:br(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(n,e){return Fd(n,"POST","/v1/accounts:signInWithIdp",Vo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class ko extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ko(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=mg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new ko(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Fa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fa(e,t)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x1(n){const e=lu(uu(n)).link,t=e?lu(uu(e)).deep_link_id:null,r=lu(uu(n)).deep_link_id;return(r?lu(uu(r)).link:null)||r||t||e||n}class wg{constructor(e){var t,r,s,a,u,d;const f=lu(uu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=N1((s=f.mode)!==null&&s!==void 0?s:null);Ae(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=x1(e);try{return new wg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.providerId=al.PROVIDER_ID}static credential(e,t){return bu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wg.parseLink(t);return Ae(r,"argument-error"),bu._fromEmailAndCode(e,r.code,r.tenantId)}}al.PROVIDER_ID="password";al.EMAIL_PASSWORD_SIGN_IN_METHOD="password";al.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ju extends _I{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Ju{constructor(){super("facebook.com")}static credential(e){return ko._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";fs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Ju{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ko._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ps.credential(t,r)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Ju{constructor(){super("github.com")}static credential(e){return ko._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Ju{constructor(){super("twitter.com")}static credential(e,t){return ko._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gs.credential(t,r)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Rr._fromIdTokenResponse(e,r,s),u=kE(r);return new Ha({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=kE(r);return new Ha({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function kE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends ai{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new nd(e,t,r,s)}}function yI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(n,a,e,r):a})}async function b1(n,e,t=!1){const r=await xu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ha._forOperation(n,"link",r)}/**
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
 */async function D1(n,e,t=!1){const{auth:r}=n;if(zn(r.app))return Promise.reject(ws(r));const s="reauthenticate";try{const a=await xu(n,yI(r,s,e,n),t);Ae(a.idToken,r,"internal-error");const u=yg(a.idToken);Ae(u,r,"internal-error");const{sub:d}=u;return Ae(n.uid===d,r,"user-mismatch"),Ha._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&br(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(n,e,t=!1){if(zn(n.app))return Promise.reject(ws(n));const r="signIn",s=await yI(n,r,e),a=await Ha._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function O1(n,e){return vI(ol(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(n){const e=ol(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function M1(n,e,t){return zn(n.app)?Promise.reject(ws(n)):O1(tt(n),al.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&L1(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(n,e){return tt(n).setPersistence(e)}function F1(n,e,t,r){return tt(n).onIdTokenChanged(e,t,r)}function U1(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}function j1(n,e,t,r){return tt(n).onAuthStateChanged(e,t,r)}function B1(n){return tt(n).signOut()}const rd="__sak";/**
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
 */class EI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=1e3,$1=10;class wI extends EI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);o1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wI.type="LOCAL";const TI=wI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II extends EI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}II.type="SESSION";const SI=II;/**
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
 */function W1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new jd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await W1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class H1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Tg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return window}function q1(n){ei().location.href=n}/**
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
 */function CI(){return typeof ei().WorkerGlobalScope<"u"&&typeof ei().importScripts=="function"}async function G1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Q1(){return CI()?self:null}/**
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
 */const RI="firebaseLocalStorageDb",Y1=1,id="firebaseLocalStorage",AI="fbase_key";class Zu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bd(n,e){return n.transaction([id],e?"readwrite":"readonly").objectStore(id)}function X1(){const n=indexedDB.deleteDatabase(RI);return new Zu(n).toPromise()}function Rm(){const n=indexedDB.open(RI,Y1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(id,{keyPath:AI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(id)?e(r):(r.close(),await X1(),e(await Rm()))})})}async function PE(n,e,t){const r=Bd(n,!0).put({[AI]:e,value:t});return new Zu(r).toPromise()}async function J1(n,e){const t=Bd(n,!1).get(e),r=await new Zu(t).toPromise();return r===void 0?null:r.value}function NE(n,e){const t=Bd(n,!0).delete(e);return new Zu(t).toPromise()}const Z1=800,eP=3;class kI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>eP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance(Q1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new H1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await PE(e,rd,"1"),await NE(e,rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>PE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>J1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>NE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Bd(s,!1).getAll();return new Zu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kI.type="LOCAL";const tP=kI;new Xu(3e4,6e4);/**
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
 */function nP(n,e){return e?Ai(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ig extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rP(n){return vI(n.auth,new Ig(n),n.bypassAuthState)}function iP(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),D1(t,new Ig(n),n.bypassAuthState)}async function sP(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),b1(t,new Ig(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rP;case"linkViaPopup":case"linkViaRedirect":return sP;case"reauthViaPopup":case"reauthViaRedirect":return iP;default:br(this.auth,"internal-error")}}resolve(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new Xu(2e3,1e4);class Oa extends PI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Oa.currentPopupAction&&Oa.currentPopupAction.cancel(),Oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){Di(this.filter.length===1,"Popup operations only handle one event");const e=Tg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oP.get())};e()}}Oa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="pendingRedirect",Vh=new Map;class lP extends PI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vh.get(this.auth._key());if(!e){try{const r=await uP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vh.set(this.auth._key(),e)}return this.bypassAuthState||Vh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uP(n,e){const t=dP(e),r=hP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cP(n,e){Vh.set(n._key(),e)}function hP(n){return Ai(n._redirectPersistence)}function dP(n){return Mh(aP,n.config.apiKey,n.name)}async function fP(n,e,t=!1){if(zn(n.app))return Promise.reject(ws(n));const r=ol(n),s=nP(r,e),u=await new lP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=600*1e3;class mP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!NI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pP&&this.cachedEventUids.clear(),this.cachedEventUids.has(xE(e))}saveEventToCache(e){this.cachedEventUids.add(xE(e)),this.lastProcessedEventTime=Date.now()}}function xE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function NI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(n,e={}){return Bs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vP=/^https?/;async function EP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _P(n);for(const t of e)try{if(wP(t))return}catch{}br(n,"unauthorized-domain")}function wP(n){const e=Sm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!vP.test(t))return!1;if(yP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const TP=new Xu(3e4,6e4);function bE(){const n=ei().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function IP(n){return new Promise((e,t)=>{var r,s,a;function u(){bE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bE(),t(Zr(n,"network-request-failed"))},timeout:TP.get()})}if(!((s=(r=ei().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=ei().gapi)===null||a===void 0)&&a.load)u();else{const d=m1("iframefcb");return ei()[d]=()=>{gapi.load?u():t(Zr(n,"network-request-failed"))},pI(`${p1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Fh=null,e})}let Fh=null;function SP(n){return Fh=Fh||IP(n),Fh}/**
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
 */const CP=new Xu(5e3,15e3),RP="__/auth/iframe",AP="emulator/auth/iframe",kP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NP(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_g(e,AP):`https://${n.config.authDomain}/${RP}`,r={apiKey:e.apiKey,appName:n.name,v:js},s=PP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${sl(r).slice(1)}`}async function xP(n){const e=await SP(n),t=ei().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:NP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Zr(n,"network-request-failed"),d=ei().setTimeout(()=>{a(u)},CP.get());function f(){ei().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DP=500,OP=600,LP="_blank",MP="http://localhost";class DE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VP(n,e,t,r=DP,s=OP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},bP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=mn().toLowerCase();t&&(d=aI(m)?LP:t),sI(m)&&(e=e||MP,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[P,M])=>`${T}${P}=${M},`,"");if(s1(m)&&d!=="_self")return FP(e||"",d),new DE(null);const E=window.open(e||"",d,y);Ae(E,n,"popup-blocked");try{E.focus()}catch{}return new DE(E)}function FP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const UP="__/auth/handler",jP="emulator/auth/handler",BP=encodeURIComponent("fac");async function OE(n,e,t,r,s,a){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:js,eventId:s};if(e instanceof _I){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Yh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Ju){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${BP}=${encodeURIComponent(f)}`:"";return`${zP(n)}?${sl(d).slice(1)}${m}`}function zP({config:n}){return n.emulator?_g(n,jP):`https://${n.authDomain}/${UP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="webStorageSupport";class $P{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SI,this._completeRedirectFn=fP,this._overrideRedirectResult=cP}async _openPopup(e,t,r,s){var a;Di((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await OE(e,t,r,Sm(),s);return VP(e,u,Tg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await OE(e,t,r,Sm(),s);return q1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Di(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xP(e),r=new mP(e);return t.register("authEvent",s=>(Ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rm,{type:rm},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[rm];u!==void 0&&t(!!u),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=EP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dI()||oI()||vg()}}const WP=$P;var LE="@firebase/auth",ME="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GP(n){Ps(new xi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ae(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fI(n)},m=new h1(r,s,a,f);return w1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new xi("auth-internal",e=>{const t=ol(e.getProvider("auth").getImmediate());return(r=>new HP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(LE,ME,qP(n)),ar(LE,ME,"esm2017")}/**
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
 */const KP=300,QP=$T("authIdTokenMaxAge")||KP;let VE=null;const YP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>QP)return;const s=t==null?void 0:t.token;VE!==s&&(VE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XP(n=Vd()){const e=Yu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=E1(n,{popupRedirectResolver:WP,persistence:[tP,TI,SI]}),r=$T("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=YP(a.toString());U1(t,u,()=>u(t.currentUser)),F1(t,d=>u(d))}}const s=BT("auth");return s&&T1(t,`http://${s}`),t}function JP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}d1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Zr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",JP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GP("Browser");var FE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,xI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,C){function A(){}A.prototype=C.prototype,b.D=C.prototype,b.prototype=new A,b.prototype.constructor=b,b.C=function(x,D,U){for(var k=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)k[ye-2]=arguments[ye];return C.prototype[D].apply(x,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,C,A){A||(A=0);var x=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)x[D]=C.charCodeAt(A++)|C.charCodeAt(A++)<<8|C.charCodeAt(A++)<<16|C.charCodeAt(A++)<<24;else for(D=0;16>D;++D)x[D]=C[A++]|C[A++]<<8|C[A++]<<16|C[A++]<<24;C=b.g[0],A=b.g[1],D=b.g[2];var U=b.g[3],k=C+(U^A&(D^U))+x[0]+3614090360&4294967295;C=A+(k<<7&4294967295|k>>>25),k=U+(D^C&(A^D))+x[1]+3905402710&4294967295,U=C+(k<<12&4294967295|k>>>20),k=D+(A^U&(C^A))+x[2]+606105819&4294967295,D=U+(k<<17&4294967295|k>>>15),k=A+(C^D&(U^C))+x[3]+3250441966&4294967295,A=D+(k<<22&4294967295|k>>>10),k=C+(U^A&(D^U))+x[4]+4118548399&4294967295,C=A+(k<<7&4294967295|k>>>25),k=U+(D^C&(A^D))+x[5]+1200080426&4294967295,U=C+(k<<12&4294967295|k>>>20),k=D+(A^U&(C^A))+x[6]+2821735955&4294967295,D=U+(k<<17&4294967295|k>>>15),k=A+(C^D&(U^C))+x[7]+4249261313&4294967295,A=D+(k<<22&4294967295|k>>>10),k=C+(U^A&(D^U))+x[8]+1770035416&4294967295,C=A+(k<<7&4294967295|k>>>25),k=U+(D^C&(A^D))+x[9]+2336552879&4294967295,U=C+(k<<12&4294967295|k>>>20),k=D+(A^U&(C^A))+x[10]+4294925233&4294967295,D=U+(k<<17&4294967295|k>>>15),k=A+(C^D&(U^C))+x[11]+2304563134&4294967295,A=D+(k<<22&4294967295|k>>>10),k=C+(U^A&(D^U))+x[12]+1804603682&4294967295,C=A+(k<<7&4294967295|k>>>25),k=U+(D^C&(A^D))+x[13]+4254626195&4294967295,U=C+(k<<12&4294967295|k>>>20),k=D+(A^U&(C^A))+x[14]+2792965006&4294967295,D=U+(k<<17&4294967295|k>>>15),k=A+(C^D&(U^C))+x[15]+1236535329&4294967295,A=D+(k<<22&4294967295|k>>>10),k=C+(D^U&(A^D))+x[1]+4129170786&4294967295,C=A+(k<<5&4294967295|k>>>27),k=U+(A^D&(C^A))+x[6]+3225465664&4294967295,U=C+(k<<9&4294967295|k>>>23),k=D+(C^A&(U^C))+x[11]+643717713&4294967295,D=U+(k<<14&4294967295|k>>>18),k=A+(U^C&(D^U))+x[0]+3921069994&4294967295,A=D+(k<<20&4294967295|k>>>12),k=C+(D^U&(A^D))+x[5]+3593408605&4294967295,C=A+(k<<5&4294967295|k>>>27),k=U+(A^D&(C^A))+x[10]+38016083&4294967295,U=C+(k<<9&4294967295|k>>>23),k=D+(C^A&(U^C))+x[15]+3634488961&4294967295,D=U+(k<<14&4294967295|k>>>18),k=A+(U^C&(D^U))+x[4]+3889429448&4294967295,A=D+(k<<20&4294967295|k>>>12),k=C+(D^U&(A^D))+x[9]+568446438&4294967295,C=A+(k<<5&4294967295|k>>>27),k=U+(A^D&(C^A))+x[14]+3275163606&4294967295,U=C+(k<<9&4294967295|k>>>23),k=D+(C^A&(U^C))+x[3]+4107603335&4294967295,D=U+(k<<14&4294967295|k>>>18),k=A+(U^C&(D^U))+x[8]+1163531501&4294967295,A=D+(k<<20&4294967295|k>>>12),k=C+(D^U&(A^D))+x[13]+2850285829&4294967295,C=A+(k<<5&4294967295|k>>>27),k=U+(A^D&(C^A))+x[2]+4243563512&4294967295,U=C+(k<<9&4294967295|k>>>23),k=D+(C^A&(U^C))+x[7]+1735328473&4294967295,D=U+(k<<14&4294967295|k>>>18),k=A+(U^C&(D^U))+x[12]+2368359562&4294967295,A=D+(k<<20&4294967295|k>>>12),k=C+(A^D^U)+x[5]+4294588738&4294967295,C=A+(k<<4&4294967295|k>>>28),k=U+(C^A^D)+x[8]+2272392833&4294967295,U=C+(k<<11&4294967295|k>>>21),k=D+(U^C^A)+x[11]+1839030562&4294967295,D=U+(k<<16&4294967295|k>>>16),k=A+(D^U^C)+x[14]+4259657740&4294967295,A=D+(k<<23&4294967295|k>>>9),k=C+(A^D^U)+x[1]+2763975236&4294967295,C=A+(k<<4&4294967295|k>>>28),k=U+(C^A^D)+x[4]+1272893353&4294967295,U=C+(k<<11&4294967295|k>>>21),k=D+(U^C^A)+x[7]+4139469664&4294967295,D=U+(k<<16&4294967295|k>>>16),k=A+(D^U^C)+x[10]+3200236656&4294967295,A=D+(k<<23&4294967295|k>>>9),k=C+(A^D^U)+x[13]+681279174&4294967295,C=A+(k<<4&4294967295|k>>>28),k=U+(C^A^D)+x[0]+3936430074&4294967295,U=C+(k<<11&4294967295|k>>>21),k=D+(U^C^A)+x[3]+3572445317&4294967295,D=U+(k<<16&4294967295|k>>>16),k=A+(D^U^C)+x[6]+76029189&4294967295,A=D+(k<<23&4294967295|k>>>9),k=C+(A^D^U)+x[9]+3654602809&4294967295,C=A+(k<<4&4294967295|k>>>28),k=U+(C^A^D)+x[12]+3873151461&4294967295,U=C+(k<<11&4294967295|k>>>21),k=D+(U^C^A)+x[15]+530742520&4294967295,D=U+(k<<16&4294967295|k>>>16),k=A+(D^U^C)+x[2]+3299628645&4294967295,A=D+(k<<23&4294967295|k>>>9),k=C+(D^(A|~U))+x[0]+4096336452&4294967295,C=A+(k<<6&4294967295|k>>>26),k=U+(A^(C|~D))+x[7]+1126891415&4294967295,U=C+(k<<10&4294967295|k>>>22),k=D+(C^(U|~A))+x[14]+2878612391&4294967295,D=U+(k<<15&4294967295|k>>>17),k=A+(U^(D|~C))+x[5]+4237533241&4294967295,A=D+(k<<21&4294967295|k>>>11),k=C+(D^(A|~U))+x[12]+1700485571&4294967295,C=A+(k<<6&4294967295|k>>>26),k=U+(A^(C|~D))+x[3]+2399980690&4294967295,U=C+(k<<10&4294967295|k>>>22),k=D+(C^(U|~A))+x[10]+4293915773&4294967295,D=U+(k<<15&4294967295|k>>>17),k=A+(U^(D|~C))+x[1]+2240044497&4294967295,A=D+(k<<21&4294967295|k>>>11),k=C+(D^(A|~U))+x[8]+1873313359&4294967295,C=A+(k<<6&4294967295|k>>>26),k=U+(A^(C|~D))+x[15]+4264355552&4294967295,U=C+(k<<10&4294967295|k>>>22),k=D+(C^(U|~A))+x[6]+2734768916&4294967295,D=U+(k<<15&4294967295|k>>>17),k=A+(U^(D|~C))+x[13]+1309151649&4294967295,A=D+(k<<21&4294967295|k>>>11),k=C+(D^(A|~U))+x[4]+4149444226&4294967295,C=A+(k<<6&4294967295|k>>>26),k=U+(A^(C|~D))+x[11]+3174756917&4294967295,U=C+(k<<10&4294967295|k>>>22),k=D+(C^(U|~A))+x[2]+718787259&4294967295,D=U+(k<<15&4294967295|k>>>17),k=A+(U^(D|~C))+x[9]+3951481745&4294967295,b.g[0]=b.g[0]+C&4294967295,b.g[1]=b.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+D&4294967295,b.g[3]=b.g[3]+U&4294967295}r.prototype.u=function(b,C){C===void 0&&(C=b.length);for(var A=C-this.blockSize,x=this.B,D=this.h,U=0;U<C;){if(D==0)for(;U<=A;)s(this,b,U),U+=this.blockSize;if(typeof b=="string"){for(;U<C;)if(x[D++]=b.charCodeAt(U++),D==this.blockSize){s(this,x),D=0;break}}else for(;U<C;)if(x[D++]=b[U++],D==this.blockSize){s(this,x),D=0;break}}this.h=D,this.o+=C},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var C=1;C<b.length-8;++C)b[C]=0;var A=8*this.o;for(C=b.length-8;C<b.length;++C)b[C]=A&255,A/=256;for(this.u(b),b=Array(16),C=A=0;4>C;++C)for(var x=0;32>x;x+=8)b[A++]=this.g[C]>>>x&255;return b};function a(b,C){var A=d;return Object.prototype.hasOwnProperty.call(A,b)?A[b]:A[b]=C(b)}function u(b,C){this.h=C;for(var A=[],x=!0,D=b.length-1;0<=D;D--){var U=b[D]|0;x&&U==C||(A[D]=U,x=!1)}this.g=A}var d={};function f(b){return-128<=b&&128>b?a(b,function(C){return new u([C|0],0>C?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return F(m(-b));for(var C=[],A=1,x=0;b>=A;x++)C[x]=b/A|0,A*=4294967296;return new u(C,0)}function y(b,C){if(b.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(b.charAt(0)=="-")return F(y(b.substring(1),C));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(C,8)),x=E,D=0;D<b.length;D+=8){var U=Math.min(8,b.length-D),k=parseInt(b.substring(D,D+U),C);8>U?(U=m(Math.pow(C,U)),x=x.j(U).add(m(k))):(x=x.j(A),x=x.add(m(k)))}return x}var E=f(0),T=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(L(this))return-F(this).m();for(var b=0,C=1,A=0;A<this.g.length;A++){var x=this.i(A);b+=(0<=x?x:4294967296+x)*C,C*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M(this))return"0";if(L(this))return"-"+F(this).toString(b);for(var C=m(Math.pow(b,6)),A=this,x="";;){var D=j(A,C).g;A=ae(A,D.j(C));var U=((0<A.g.length?A.g[0]:A.h)>>>0).toString(b);if(A=D,M(A))return U+x;for(;6>U.length;)U="0"+U;x=U+x}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function M(b){if(b.h!=0)return!1;for(var C=0;C<b.g.length;C++)if(b.g[C]!=0)return!1;return!0}function L(b){return b.h==-1}n.l=function(b){return b=ae(this,b),L(b)?-1:M(b)?0:1};function F(b){for(var C=b.g.length,A=[],x=0;x<C;x++)A[x]=~b.g[x];return new u(A,~b.h).add(T)}n.abs=function(){return L(this)?F(this):this},n.add=function(b){for(var C=Math.max(this.g.length,b.g.length),A=[],x=0,D=0;D<=C;D++){var U=x+(this.i(D)&65535)+(b.i(D)&65535),k=(U>>>16)+(this.i(D)>>>16)+(b.i(D)>>>16);x=k>>>16,U&=65535,k&=65535,A[D]=k<<16|U}return new u(A,A[A.length-1]&-2147483648?-1:0)};function ae(b,C){return b.add(F(C))}n.j=function(b){if(M(this)||M(b))return E;if(L(this))return L(b)?F(this).j(F(b)):F(F(this).j(b));if(L(b))return F(this.j(F(b)));if(0>this.l(P)&&0>b.l(P))return m(this.m()*b.m());for(var C=this.g.length+b.g.length,A=[],x=0;x<2*C;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var D=0;D<b.g.length;D++){var U=this.i(x)>>>16,k=this.i(x)&65535,ye=b.i(D)>>>16,$e=b.i(D)&65535;A[2*x+2*D]+=k*$e,K(A,2*x+2*D),A[2*x+2*D+1]+=U*$e,K(A,2*x+2*D+1),A[2*x+2*D+1]+=k*ye,K(A,2*x+2*D+1),A[2*x+2*D+2]+=U*ye,K(A,2*x+2*D+2)}for(x=0;x<C;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=C;x<2*C;x++)A[x]=0;return new u(A,0)};function K(b,C){for(;(b[C]&65535)!=b[C];)b[C+1]+=b[C]>>>16,b[C]&=65535,C++}function Z(b,C){this.g=b,this.h=C}function j(b,C){if(M(C))throw Error("division by zero");if(M(b))return new Z(E,E);if(L(b))return C=j(F(b),C),new Z(F(C.g),F(C.h));if(L(C))return C=j(b,F(C)),new Z(F(C.g),C.h);if(30<b.g.length){if(L(b)||L(C))throw Error("slowDivide_ only works with positive integers.");for(var A=T,x=C;0>=x.l(b);)A=Te(A),x=Te(x);var D=me(A,1),U=me(x,1);for(x=me(x,2),A=me(A,2);!M(x);){var k=U.add(x);0>=k.l(b)&&(D=D.add(A),U=k),x=me(x,1),A=me(A,1)}return C=ae(b,D.j(C)),new Z(D,C)}for(D=E;0<=b.l(C);){for(A=Math.max(1,Math.floor(b.m()/C.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),U=m(A),k=U.j(C);L(k)||0<k.l(b);)A-=x,U=m(A),k=U.j(C);M(U)&&(U=T),D=D.add(U),b=ae(b,k)}return new Z(D,b)}n.A=function(b){return j(this,b).h},n.and=function(b){for(var C=Math.max(this.g.length,b.g.length),A=[],x=0;x<C;x++)A[x]=this.i(x)&b.i(x);return new u(A,this.h&b.h)},n.or=function(b){for(var C=Math.max(this.g.length,b.g.length),A=[],x=0;x<C;x++)A[x]=this.i(x)|b.i(x);return new u(A,this.h|b.h)},n.xor=function(b){for(var C=Math.max(this.g.length,b.g.length),A=[],x=0;x<C;x++)A[x]=this.i(x)^b.i(x);return new u(A,this.h^b.h)};function Te(b){for(var C=b.g.length+1,A=[],x=0;x<C;x++)A[x]=b.i(x)<<1|b.i(x-1)>>>31;return new u(A,b.h)}function me(b,C){var A=C>>5;C%=32;for(var x=b.g.length-A,D=[],U=0;U<x;U++)D[U]=0<C?b.i(U+A)>>>C|b.i(U+A+1)<<32-C:b.i(U+A);return new u(D,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Ts=u}).apply(typeof FE<"u"?FE:typeof self<"u"?self:typeof window<"u"?window:{});var Rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bI,cu,DI,Uh,Am,OI,LI,MI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rh=="object"&&Rh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var B=c[S];if(!(B in v))break e;v=v[B]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,S=!1,B={next:function(){if(!S&&v<c.length){var q=v++;return{value:g(q,c[q]),done:!1}}return S=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,S),c.apply(g,B)}}return function(){return c.apply(g,arguments)}}function T(c,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,T.apply(null,arguments)}function P(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function M(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,B,q){for(var ue=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)ue[rt-2]=arguments[rt];return g.prototype[B].apply(S,ue)}}function L(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function F(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(f(S)){const B=c.length||0,q=S.length||0;c.length=B+q;for(let ue=0;ue<q;ue++)c[B+ue]=S[ue]}else c.push(S)}}class ae{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function j(c){return j[" "](c),c}j[" "]=function(){};var Te=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function me(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function b(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function C(c){const g={};for(const v in c)g[v]=c[v];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,g){let v,S;for(let B=1;B<arguments.length;B++){S=arguments[B];for(v in S)c[v]=S[v];for(let q=0;q<A.length;q++)v=A[q],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function D(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function U(c){d.setTimeout(()=>{throw c},0)}function k(){var c=se;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ye{constructor(){this.h=this.g=null}add(g,v){const S=$e.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var $e=new ae(()=>new ne,c=>c.reset());class ne{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,Y=!1,se=new ye,ie=()=>{const c=d.Promise.resolve(void 0);ce=()=>{c.then(V)}};var V=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(v){U(v)}var g=$e;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}Y=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Oe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function xe(c,g){if(Ee.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Te){e:{try{j(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}M(xe,Ee);var Ve={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),qe=0;function nt(c,g,v,S,B){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=B,this.key=++qe,this.da=this.fa=!1}function It(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function an(c){this.src=c,this.g={},this.h=0}an.prototype.add=function(c,g,v,S,B){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ue=Xt(c,g,S,B);return-1<ue?(g=c[ue],v||(g.fa=!1)):(g=new nt(g,this.src,q,!!S,B),g.fa=v,c.push(g)),g};function Or(c,g){var v=g.type;if(v in c.g){var S=c.g[v],B=Array.prototype.indexOf.call(S,g,void 0),q;(q=0<=B)&&Array.prototype.splice.call(S,B,1),q&&(It(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Xt(c,g,v,S){for(var B=0;B<c.length;++B){var q=c[B];if(!q.da&&q.listener==g&&q.capture==!!v&&q.ha==S)return B}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),Lr={};function ur(c,g,v,S,B){if(Array.isArray(g)){for(var q=0;q<g.length;q++)ur(c,g[q],v,S,B);return null}return v=Gs(v),c&&c[We]?c.K(g,v,m(S)?!!S.capture:!1,B):Ui(c,g,v,!1,S,B)}function Ui(c,g,v,S,B,q){if(!g)throw Error("Invalid event type");var ue=m(B)?!!B.capture:!!B,rt=Bi(c);if(rt||(c[lr]=rt=new an(c)),v=rt.add(g,v,S,ue,q),v.proxy)return v;if(S=Hs(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)Oe||(B=ue),B===void 0&&(B=!1),c.addEventListener(g.toString(),S,B);else if(c.attachEvent)c.attachEvent(qn(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Hs(){function c(v){return g.call(c.src,c.listener,v)}const g=qs;return c}function ji(c,g,v,S,B){if(Array.isArray(g))for(var q=0;q<g.length;q++)ji(c,g[q],v,S,B);else S=m(S)?!!S.capture:!!S,v=Gs(v),c&&c[We]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],v=Xt(q,v,S,B),-1<v&&(It(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Bi(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Xt(g,v,S,B)),(v=-1<c?g[c]:null)&&Hn(v))}function Hn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[We])Or(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(qn(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=Bi(g))?(Or(v,c),v.h==0&&(v.src=null,g[lr]=null)):It(c)}}}function qn(c){return c in Lr?Lr[c]:Lr[c]="on"+c}function qs(c,g){if(c.da)c=!0;else{g=new xe(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&Hn(c),c=v.call(S,g)}return c}function Bi(c){return c=c[lr],c instanceof an?c:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gs(c){return typeof c=="function"?c:(c[Mr]||(c[Mr]=function(g){return c.handleEvent(g)}),c[Mr])}function Ze(){G.call(this),this.i=new an(this),this.M=this,this.F=null}M(Ze,G),Ze.prototype[We]=!0,Ze.prototype.removeEventListener=function(c,g,v,S){ji(this,c,g,v,S)};function W(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new Ee(g,c);else if(g instanceof Ee)g.target=g.target||c;else{var B=g;g=new Ee(S,c),x(g,B)}if(B=!0,v)for(var q=v.length-1;0<=q;q--){var ue=g.g=v[q];B=de(ue,S,!0,g)&&B}if(ue=g.g=c,B=de(ue,S,!0,g)&&B,B=de(ue,S,!1,g)&&B,v)for(q=0;q<v.length;q++)ue=g.g=v[q],B=de(ue,S,!1,g)&&B}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)It(v[S]);delete c.g[g],c.h--}}this.F=null},Ze.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},Ze.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function de(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,q=0;q<g.length;++q){var ue=g[q];if(ue&&!ue.da&&ue.capture==v){var rt=ue.listener,Ft=ue.ha||ue.src;ue.fa&&Or(c.i,ue),B=rt.call(Ft,S)!==!1&&B}}return B&&!S.defaultPrevented}function Ie(c,g,v){if(typeof c=="function")v&&(c=T(c,v));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Xe(c){c.g=Ie(()=>{c.g=null,c.i&&(c.i=!1,Xe(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class zt extends G{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(c){G.call(this),this.h=c,this.g={}}M(Gn,G);var Pt=[];function ct(c){me(c.g,function(g,v){this.g.hasOwnProperty(v)&&Hn(g)},c),c.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),ct(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nt=d.JSON.stringify,Jt=d.JSON.parse,Vr=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function ui(){}ui.prototype.h=null;function Fr(c){return c.h||(c.h=c.i())}function zo(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){Ee.call(this,"d")}M(Ur,Ee);function $o(){Ee.call(this,"c")}M($o,Ee);var jr={},_l=null;function Ks(){return _l=_l||new Ze}jr.La="serverreachability";function yl(c){Ee.call(this,jr.La,c)}M(yl,Ee);function ci(c){const g=Ks();W(g,new yl(g))}jr.STAT_EVENT="statevent";function vl(c,g){Ee.call(this,jr.STAT_EVENT,c),this.stat=g}M(vl,Ee);function St(c){const g=Ks();W(g,new vl(g,c))}jr.Ma="timingevent";function Wo(c,g){Ee.call(this,jr.Ma,c),this.size=g}M(Wo,Ee);function cr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function Ys(c,g,v,S,B,q){c.info(function(){if(c.g)if(q)for(var ue="",rt=q.split("&"),Ft=0;Ft<rt.length;Ft++){var Ge=rt[Ft].split("=");if(1<Ge.length){var $t=Ge[0];Ge=Ge[1];var xt=$t.split("_");ue=2<=xt.length&&xt[1]=="type"?ue+($t+"="+Ge+"&"):ue+($t+"=redacted&")}}else ue=null;else ue=q;return"XMLHTTP REQ ("+S+") [attempt "+B+"]: "+g+`
`+v+`
`+ue})}function Ho(c,g,v,S,B,q,ue){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+B+"]: "+g+`
`+v+`
`+q+" "+ue})}function hr(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ef(c,v)+(S?" "+S:"")})}function El(c,g){c.info(function(){return"TIMEOUT: "+g})}Qs.prototype.info=function(){};function Ef(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var B=S[1];if(Array.isArray(B)&&!(1>B.length)){var q=B[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ue=1;ue<B.length;ue++)B[ue]=""}}}}return Nt(v)}catch{return g}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function Xs(){}M(Xs,ui),Xs.prototype.g=function(){return new XMLHttpRequest},Xs.prototype.i=function(){return{}},dr=new Xs;function fr(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var wl={},Go={};function Ko(c,g,v){c.L=1,c.v=qi(Mn(g)),c.m=v,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),at(c),c.A=Mn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Ki(v.i,"t",S),c.C=0,v=c.j.J,c.h=new hc,c.g=Pc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new zt(T(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Pt[0]=B.toString()),B=Pt);for(var q=0;q<B.length;q++){var ue=ur(v,B[q],S||g.handleEvent,!1,g.h||g);if(!ue)break;g.g[ue.key]=ue}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ci(),Ys(c.i,c.u,c.A,c.l,c.R,c.m)}fr.prototype.ca=function(c){c=c.target;const g=this.M;g&&In(c)==3?g.j():this.Y(c)},fr.prototype.Y=function(c){try{if(c==this.g)e:{const xt=In(this.g);var g=this.g.Ba();const Xn=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||xt!=4||g==7||(g==8||0>=Xn?ci(3):ci(2)),Js(this);var v=this.g.Z();this.X=v;t:if(dc(this)){var S=kl(this.g);c="";var B=S.length,q=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),zi(this);var ue="";break t}this.h.i=new d.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(q&&g==B-1)});S.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=v==200,Ho(this.i,this.u,this.A,this.l,this.R,xt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var rt,Ft=this.g;if((rt=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(rt)){var Ge=rt;break t}}Ge=null}if(v=Ge)hr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,v);else{this.o=!1,this.s=3,St(12),Qn(this),zi(this);break e}}if(this.P){v=!0;let Fn;for(;!this.J&&this.C<ue.length;)if(Fn=wf(this,ue),Fn==Go){xt==4&&(this.s=4,St(14),v=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Fn==wl){this.s=4,St(15),hr(this.i,this.l,ue,"[Invalid Chunk]"),v=!1;break}else hr(this.i,this.l,Fn,null),Il(this,Fn);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||ue.length!=0||this.h.h||(this.s=1,St(16),v=!1),this.o=this.o&&v,!v)hr(this.i,this.l,ue,"[Invalid Chunked Response]"),Qn(this),zi(this);else if(0<ue.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Nl($t),$t.M=!0,St(11))}}else hr(this.i,this.l,ue,null),Il(this,ue);xt==4&&Qn(this),this.o&&!this.J&&(xt==4?sa(this.j,this):(this.o=!1,at(this)))}else ea(this.g),v==400&&0<ue.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Qn(this),zi(this)}}}catch{}finally{}};function dc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function wf(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?Go:(v=Number(g.substring(v,S)),isNaN(v)?wl:(S+=1,S+v>g.length?Go:(g=g.slice(S,S+v),c.C=S+v,g)))}fr.prototype.cancel=function(){this.J=!0,Qn(this)};function at(c){c.S=Date.now()+c.I,fc(c,c.I)}function fc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=cr(T(c.ba,c),g)}function Js(c){c.B&&(d.clearTimeout(c.B),c.B=null)}fr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(El(this.i,this.A),this.L!=2&&(ci(),St(17)),Qn(this),this.s=2,zi(this)):fc(this,this.S-c)};function zi(c){c.j.G==0||c.J||sa(c.j,c)}function Qn(c){Js(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ct(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Il(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||_n(v.h,c))){if(!c.K&&_n(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var B=S;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ia(v),yr(v);else break e;ra(v),St(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=cr(T(v.Za,v),6e3));if(1>=mc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else mi(v,11)}else if((c.K||v.g==c)&&ia(v),!K(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let Ge=B[g];if(v.T=Ge[0],Ge=Ge[1],v.G==2)if(Ge[0]=="c"){v.K=Ge[1],v.ia=Ge[2];const $t=Ge[3];$t!=null&&(v.la=$t,v.j.info("VER="+v.la));const xt=Ge[4];xt!=null&&(v.Aa=xt,v.j.info("SVER="+v.Aa));const Xn=Ge[5];Xn!=null&&typeof Xn=="number"&&0<Xn&&(S=1.5*Xn,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Fn=c.g;if(Fn){const so=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var q=S.h;q.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Sl(q,q.h),q.h=null))}if(S.D){const aa=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(S.ya=aa,st(S.I,S.D,aa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var ue=c;if(S.qa=kc(S,S.J?S.ia:null,S.W),ue.K){gc(S.h,ue);var rt=ue,Ft=S.L;Ft&&(rt.I=Ft),rt.B&&(Js(rt),at(rt)),S.g=ue}else io(S);0<v.i.length&&Wr(v)}else Ge[0]!="stop"&&Ge[0]!="close"||mi(v,7);else v.G==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?mi(v,7):en(v):Ge[0]!="noop"&&v.l&&v.l.ta(Ge),v.v=0)}}ci(4)}catch{}}var pc=class{constructor(c,g){this.g=c,this.map=g}};function Zs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ln(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function mc(c){return c.h?1:c.g?c.g.size:0}function _n(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Sl(c,g){c.g?c.g.add(g):c.h=g}function gc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Zs.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _c(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return L(c.i)}function Qo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function Yo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function $i(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Yo(c),S=Qo(c),B=S.length,q=0;q<B;q++)g.call(void 0,S[q],v&&v[q],c)}var eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),B=null;if(0<=S){var q=c[v].substring(0,S);B=c[v].substring(S+1)}else q=c[v];g(q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function hi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof hi){this.h=c.h,to(this,c.j),this.o=c.o,this.g=c.g,Wi(this,c.s),this.l=c.l;var g=c.i,v=new Br;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Hi(this,v),this.m=c.m}else c&&(g=String(c).match(eo))?(this.h=!1,to(this,g[1]||"",!0),this.o=He(g[2]||""),this.g=He(g[3]||"",!0),Wi(this,g[4]),this.l=He(g[5]||"",!0),Hi(this,g[6]||"",!0),this.m=He(g[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}hi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Gi(g,Xo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Gi(g,Xo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Gi(v,v.charAt(0)=="/"?Ec:vc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Gi(v,Cl)),c.join("")};function Mn(c){return new hi(c)}function to(c,g,v){c.j=v?He(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Wi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Hi(c,g,v){g instanceof Br?(c.i=g,zr(c.i,c.h)):(v||(g=Gi(g,wc)),c.i=new Br(g,c.h))}function st(c,g,v){c.i.set(g,v)}function qi(c){return st(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function He(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Gi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,yc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Xo=/[#\/\?@]/g,vc=/[#\?:]/g,Ec=/[#\?]/g,wc=/[#\?@]/g,Cl=/#/g;function Br(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Zt(c){c.g||(c.g=new Map,c.h=0,c.i&&Tf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Br.prototype,n.add=function(c,g){Zt(this),this.i=null,c=Yn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function pr(c,g){Zt(c),g=Yn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function mr(c,g){return Zt(c),g=Yn(c,g),c.g.has(g)}n.forEach=function(c,g){Zt(this),this.g.forEach(function(v,S){v.forEach(function(B){c.call(g,B,S,this)},this)},this)},n.na=function(){Zt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const B=c[S];for(let q=0;q<B.length;q++)v.push(g[S])}return v},n.V=function(c){Zt(this);let g=[];if(typeof c=="string")mr(this,c)&&(g=g.concat(this.g.get(Yn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Zt(this),this.i=null,c=Yn(this,c),mr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ki(c,g,v){pr(c,g),0<v.length&&(c.i=null,c.g.set(Yn(c,g),L(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const q=encodeURIComponent(String(S)),ue=this.V(S);for(S=0;S<ue.length;S++){var B=q;ue[S]!==""&&(B+="="+encodeURIComponent(String(ue[S]))),c.push(B)}}return this.i=c.join("&")};function Yn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function zr(c,g){g&&!c.j&&(Zt(c),c.i=null,c.g.forEach(function(v,S){var B=S.toLowerCase();S!=B&&(pr(this,S),Ki(this,B,v))},c)),c.j=g}function If(c,g){const v=new Qs;if(d.Image){const S=new Image;S.onload=P(Tn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=P(Tn,v,"TestLoadImage: error",!1,g,S),S.onabort=P(Tn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=P(Tn,v,"TestLoadImage: timeout",!1,g,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Tc(c,g){const v=new Qs,S=new AbortController,B=setTimeout(()=>{S.abort(),Tn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(q=>{clearTimeout(B),q.ok?Tn(v,"TestPingServer: ok",!0,g):Tn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),Tn(v,"TestPingServer: error",!1,g)})}function Tn(c,g,v,S,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),S(v)}catch{}}function Sf(){this.g=new Vr}function Ic(c,g,v){const S=v||"";try{$i(c,function(B,q){let ue=B;m(B)&&(ue=Nt(B)),g.push(S+q+"="+encodeURIComponent(ue))})}catch(B){throw g.push(S+"type="+encodeURIComponent("_badmap")),B}}function di(c){this.l=c.Ub||null,this.j=c.eb||!1}M(di,ui),di.prototype.g=function(){return new no(this.l,this.j)},di.prototype.i=(function(c){return function(){return c}})({});function no(c,g){Ze.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(no,Ze),n=no.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,_r(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?gr(this):_r(this),this.readyState==3&&Sc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,gr(this))},n.Qa=function(c){this.g&&(this.response=c,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,_r(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function _r(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(no.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function fi(c){let g="";return me(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function Qi(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=fi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):st(c,g,v))}function mt(c){Ze.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(mt,Ze);var Cf=/^https?$/i,Rl=["POST","PUT"];n=mt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?Fr(this.o):Fr(dr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){ro(this,q);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var B in S)v.set(B,S[B]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const q of S.keys())v.set(q,S.get(q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),B=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||S||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ue]of v)this.g.setRequestHeader(q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zo(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){ro(this,q)}};function ro(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Jo(c),Vn(c)}function Jo(c){c.A||(c.A=!0,W(c,"complete"),W(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,W(this,"complete"),W(this,"abort"),Vn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vn(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(c){if(c.h&&typeof u<"u"&&(!c.v[1]||In(c)!=4||c.Z()!=2)){if(c.u&&In(c)==4)Ie(c.Ea,0,c);else if(W(c,"readystatechange"),In(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=ue===0){var B=String(c.D).match(eo)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),S=!Cf.test(B?B.toLowerCase():"")}v=S}if(v)W(c,"complete"),W(c,"success");else{c.m=6;try{var q=2<In(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Jo(c)}}finally{Vn(c)}}}}function Vn(c,g){if(c.g){Zo(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||W(c,"ready");try{v.onreadystatechange=S}catch{}}}function Zo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function In(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Jt(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(c){const g={};c=(c.g&&2<=In(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(K(c[S]))continue;var v=D(c[S]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=g[B]||[];g[B]=q,q.push(v)}b(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Pl(c){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$r("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$r("baseRetryDelayMs",5e3,c),this.cb=$r("retryDelaySeedMs",1e4,c),this.Wa=$r("forwardChannelMaxRetries",2,c),this.wa=$r("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Zs(c&&c.concurrentRequestLimit),this.Da=new Sf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,S){St(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=kc(this,null,this.W),Wr(this)};function en(c){if(ta(c),c.G==3){var g=c.U++,v=Mn(c.I);if(st(v,"SID",c.K),st(v,"RID",g),st(v,"TYPE","terminate"),pi(c,v),g=new fr(c,c.j,g),g.L=2,g.v=qi(Mn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Pc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),at(g)}Ac(c)}function yr(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function ta(c){yr(c),c.u&&(d.clearTimeout(c.u),c.u=null),ia(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Wr(c){if(!Ln(c.h)&&!c.s){c.s=!0;var g=c.Ga;ce||ie(),Y||(ce(),Y=!0),se.add(g,c),c.B=0}}function Rf(c,g){return mc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=cr(T(c.Ga,c,g),Rc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new fr(this,this.j,c);let q=this.o;if(this.S&&(q?(q=C(q),x(q,this.S)):q=this.S),this.m!==null||this.O||(B.H=q,q=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Yi(this,B,g),v=Mn(this.I),st(v,"RID",c),st(v,"CVER",22),this.D&&st(v,"X-HTTP-Session-Id",this.D),pi(this,v),q&&(this.O?g="headers="+encodeURIComponent(String(fi(q)))+"&"+g:this.m&&Qi(v,this.m,q)),Sl(this.h,B),this.Ua&&st(v,"TYPE","init"),this.P?(st(v,"$req",g),st(v,"SID","null"),B.T=!0,Ko(B,v,null)):Ko(B,v,g),this.G=2}}else this.G==3&&(c?na(this,c):this.i.length==0||Ln(this.h)||na(this))};function na(c,g){var v;g?v=g.l:v=c.U++;const S=Mn(c.I);st(S,"SID",c.K),st(S,"RID",v),st(S,"AID",c.T),pi(c,S),c.m&&c.o&&Qi(S,c.m,c.o),v=new fr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Yi(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sl(c.h,v),Ko(v,S,g)}function pi(c,g){c.H&&me(c.H,function(v,S){st(g,S,v)}),c.l&&$i({},function(v,S){st(g,S,v)})}function Yi(c,g,v){v=Math.min(c.i.length,v);var S=c.l?T(c.l.Na,c.l,c):null;e:{var B=c.i;let q=-1;for(;;){const ue=["count="+v];q==-1?0<v?(q=B[0].g,ue.push("ofs="+q)):q=0:ue.push("ofs="+q);let rt=!0;for(let Ft=0;Ft<v;Ft++){let Ge=B[Ft].g;const $t=B[Ft].map;if(Ge-=q,0>Ge)q=Math.max(0,B[Ft].g-100),rt=!1;else try{Ic($t,ue,"req"+Ge+"_")}catch{S&&S($t)}}if(rt){S=ue.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function io(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ce||ie(),Y||(ce(),Y=!0),se.add(g,c),c.v=0}}function ra(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=cr(T(c.Fa,c),Rc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=cr(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),yr(this),Cc(this))};function Nl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Cc(c){c.g=new fr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Mn(c.qa);st(g,"RID","rpc"),st(g,"SID",c.K),st(g,"AID",c.T),st(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&st(g,"TO",c.ja),st(g,"TYPE","xmlhttp"),pi(c,g),c.m&&c.o&&Qi(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=qi(Mn(g)),v.m=null,v.P=!0,Tl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,yr(this),ra(this),St(19))};function ia(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function sa(c,g){var v=null;if(c.g==g){ia(c),Nl(c),c.g=null;var S=2}else if(_n(c.h,g))v=g.D,gc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=c.B;S=Ks(),W(S,new Wo(S,v)),Wr(c)}else io(c);else if(B=g.s,B==3||B==0&&0<g.X||!(S==1&&Rf(c,g)||S==2&&ra(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),B){case 1:mi(c,5);break;case 4:mi(c,10);break;case 3:mi(c,6);break;default:mi(c,2)}}}function Rc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function mi(c,g){if(c.j.info("Error code "+g),g==2){var v=T(c.fb,c),S=c.Xa;const B=!S;S=new hi(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||to(S,"https"),qi(S),B?If(S.toString(),v):Tc(S.toString(),v)}else St(2);c.G=0,c.l&&c.l.sa(g),Ac(c),ta(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Ac(c){if(c.G=0,c.ka=[],c.l){const g=_c(c.h);(g.length!=0||c.i.length!=0)&&(F(c.ka,g),F(c.ka,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.ra()}}function kc(c,g,v){var S=v instanceof hi?Mn(v):new hi(v);if(S.g!="")g&&(S.g=g+"."+S.g),Wi(S,S.s);else{var B=d.location;S=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var q=new hi(null);S&&to(q,S),g&&(q.g=g),B&&Wi(q,B),v&&(q.l=v),S=q}return v=c.D,g=c.ya,v&&g&&st(S,v,g),st(S,"VER",c.la),pi(c,S),S}function Pc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new mt(new di({eb:v})):new mt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(c,g){return new yn(c,g)};function yn(c,g){Ze.call(this),this.g=new Pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!K(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!K(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Hr(this)}M(yn,Ze),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){en(this.g)},yn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Nt(c),c=v);g.i.push(new pc(g.Ya++,c)),g.G==3&&Wr(g)},yn.prototype.N=function(){this.g.l=null,delete this.j,en(this.g),delete this.g,yn.aa.N.call(this)};function Nc(c){Ur.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}M(Nc,Ur);function xc(){$o.call(this),this.status=1}M(xc,$o);function Hr(c){this.g=c}M(Hr,xl),Hr.prototype.ua=function(){W(this.g,"a")},Hr.prototype.ta=function(c){W(this.g,new Nc(c))},Hr.prototype.sa=function(c){W(this.g,new xc)},Hr.prototype.ra=function(){W(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,MI=function(){return new oa},LI=function(){return Ks()},OI=jr,Am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Uh=qo,cc.COMPLETE="complete",DI=cc,zo.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,cu=zo,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,bI=mt}).apply(typeof Rh<"u"?Rh:typeof self<"u"?self:typeof window<"u"?window:{});const UE="@firebase/firestore",jE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Po=new Md("@firebase/firestore");function Na(){return Po.logLevel}function pe(n,...e){if(Po.logLevel<=Be.DEBUG){const t=e.map(Sg);Po.debug(`Firestore (${ll}): ${n}`,...t)}}function Oi(n,...e){if(Po.logLevel<=Be.ERROR){const t=e.map(Sg);Po.error(`Firestore (${ll}): ${n}`,...t)}}function Ns(n,...e){if(Po.logLevel<=Be.WARN){const t=e.map(Sg);Po.warn(`Firestore (${ll}): ${n}`,...t)}}function Sg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ke(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,VI(n,r,t)}function VI(n,e,t){let r=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Oi(r),new Error(r)}function et(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||VI(e,s,r)}function De(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends ai{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(fn.UNAUTHENTICATED)))}shutdown(){}}class eN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class tN{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Is;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Is,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Is)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string",31837,{l:r}),new FI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class nN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new nN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(fn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class BE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){et(this.o===void 0,3512);const r=a=>{a.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,pe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new BE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(et(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new BE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Cg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Le(n,e){return n<e?-1:n>e?1:0}function km(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Le(r,s);{const a=UI(),u=oN(a.encode(zE(n,t)),a.encode(zE(e,t)));return u!==0?u:Le(r,s)}}t+=r>65535?2:1}return Le(n.length,e.length)}function zE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function oN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Le(n[t],e[t]);return Le(n.length,e.length)}function qa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="__name__";class Yr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ke(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ke(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Yr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Le(e.length,t.length)}static compareSegments(e,t){const r=Yr.isNumericId(e),s=Yr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Yr.extractNumericId(e).compare(Yr.extractNumericId(t)):km(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class ut extends Yr{construct(e,t,r){return new ut(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const aN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends Yr{construct(e,t,r){return new sn(e,t,r)}static isValidIdentifier(e){return aN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$E}static keyField(){return new sn([$E])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new he(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new he(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new he(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new he(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(ut.fromString(e))}static fromName(e){return new Se(ut.fromString(e).popFirst(5))}static empty(){return new Se(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new ut(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(n,e,t){if(!t)throw new he(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lN(n,e,t,r){if(e===!0&&r===!0)throw new he(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function WE(n){if(!Se.isDocumentKey(n))throw new he(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function HE(n){if(Se.isDocumentKey(n))throw new he(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function BI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ke(12329,{type:typeof n})}function Pr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zd(n);throw new he(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function uN(n,e){if(e<=0)throw new he(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function ec(n,e){if(!BI(n))throw new he(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new he(Q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=-62135596800,GE=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*GE);return new pt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qE)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/GE}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Mt("string",pt._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new pt(0,0))}static max(){return new be(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Du=-1;function cN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=be.fromTimestamp(r===1e9?new pt(t+1,0):new pt(t,r));return new xs(s,Se.empty(),e)}function hN(n){return new xs(n.readTime,n.key,Du)}class xs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xs(be.min(),Se.empty(),Du)}static max(){return new xs(be.max(),Se.empty(),Du)}}function dN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Se.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==fN)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ke(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,r)=>{t(e)}))}static reject(e){return new X(((t,r)=>{r(e)}))}static waitFor(e){return new X(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=X.resolve(!1);for(const r of e)t=t.next((s=>s?X.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new X(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new X(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function mN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Rg=-1;function Wd(n){return n==null}function sd(n){return n===0&&1/n==-1/0}function gN(n){return typeof n=="number"&&Number.isInteger(n)&&!sd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="";function _N(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=KE(e)),e=yN(n.get(t),e);return KE(e)}function yN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case zI:t+="";break;default:t+=a}}return t}function KE(n){return n+zI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $I(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt=class Pm{constructor(e,t){this.comparator=e,this.root=t||Ss.EMPTY}insert(e,t){return new Pm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ss.BLACK,null,null))}remove(e){return new Pm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ss.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ah(this.root,e,this.comparator,!0)}},Ah=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ss=class Si{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Si.RED,this.left=s??Si.EMPTY,this.right=a??Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Si(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Si.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ke(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ke(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ke(27949);return e+(this.isRed()?0:1)}};Ss.EMPTY=null,Ss.RED=!0,Ss.BLACK=!1;Ss.EMPTY=new class{constructor(){this.size=0}get key(){throw ke(57766)}get value(){throw ke(16141)}get color(){throw ke(16727)}get left(){throw ke(29726)}get right(){throw ke(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Ss(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new YE(this.data.getIterator())}getIteratorFrom(e){return new YE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class YE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Bt(sn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class WI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new WI("Invalid base64 string: "+a):a}})(e);return new on(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const vN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(n){if(et(!!n,39018),typeof n=="string"){let e=0;const t=vN.exec(n);if(et(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ds(n){return typeof n=="string"?on.fromBase64String(n):on.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="server_timestamp",qI="__type__",GI="__previous_value__",KI="__local_write_time__";function Ag(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qI])===null||t===void 0?void 0:t.stringValue)===HI}function Hd(n){const e=n.mapValue.fields[GI];return Ag(e)?Hd(e):e}function Ou(n){const e=bs(n.mapValue.fields[KI].timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const od="(default)";class Lu{constructor(e,t){this.projectId=e,this.database=t||od}static empty(){return new Lu("","")}get isDefaultDatabase(){return this.database===od}isEqual(e){return e instanceof Lu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="__type__",wN="__max__",kh={mapValue:{}},YI="__vector__",ad="value";function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ag(n)?4:IN(n)?9007199254740991:TN(n)?10:11:ke(28295,{value:n})}function si(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ou(n).isEqual(Ou(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=bs(s.timestampValue),d=bs(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Ds(s.bytesValue).isEqual(Ds(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return Rt(s.geoPointValue.latitude)===Rt(a.geoPointValue.latitude)&&Rt(s.geoPointValue.longitude)===Rt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return Rt(s.integerValue)===Rt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Rt(s.doubleValue),d=Rt(a.doubleValue);return u===d?sd(u)===sd(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return qa(n.arrayValue.values||[],e.arrayValue.values||[],si);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(QE(u)!==QE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!si(u[f],d[f])))return!1;return!0})(n,e);default:return ke(52216,{left:n})}}function Mu(n,e){return(n.values||[]).find((t=>si(t,e)))!==void 0}function Ga(n,e){if(n===e)return 0;const t=Os(n),r=Os(e);if(t!==r)return Le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=Rt(a.integerValue||a.doubleValue),f=Rt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return XE(n.timestampValue,e.timestampValue);case 4:return XE(Ou(n),Ou(e));case 5:return km(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Ds(a),f=Ds(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Le(d[m],f[m]);if(y!==0)return y}return Le(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Le(Rt(a.latitude),Rt(u.latitude));return d!==0?d:Le(Rt(a.longitude),Rt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return JE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const E=a.fields||{},T=u.fields||{},P=(d=E[ad])===null||d===void 0?void 0:d.arrayValue,M=(f=T[ad])===null||f===void 0?void 0:f.arrayValue,L=Le(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((y=M==null?void 0:M.values)===null||y===void 0?void 0:y.length)||0);return L!==0?L:JE(P,M)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===kh.mapValue&&u===kh.mapValue)return 0;if(a===kh.mapValue)return 1;if(u===kh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const T=km(f[E],y[E]);if(T!==0)return T;const P=Ga(d[f[E]],m[y[E]]);if(P!==0)return P}return Le(f.length,y.length)})(n.mapValue,e.mapValue);default:throw ke(23264,{le:t})}}function XE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=bs(n),r=bs(e),s=Le(t.seconds,r.seconds);return s!==0?s:Le(t.nanos,r.nanos)}function JE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ga(t[s],r[s]);if(a)return a}return Le(t.length,r.length)}function Ka(n){return Nm(n)}function Nm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=bs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ds(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Se.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Nm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Nm(t.fields[u])}`;return s+"}"})(n.mapValue):ke(61005,{value:n})}function jh(n){switch(Os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hd(n);return e?16+jh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+jh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return zs(r.fields,((a,u)=>{s+=a.length+jh(u)})),s})(n.mapValue);default:throw ke(13486,{value:n})}}function ZE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xm(n){return!!n&&"integerValue"in n}function kg(n){return!!n&&"arrayValue"in n}function ew(n){return!!n&&"nullValue"in n}function tw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bh(n){return!!n&&"mapValue"in n}function TN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[QI])===null||t===void 0?void 0:t.stringValue)===YI}function yu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zs(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=yu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function IN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yu(t)}setAll(e){let t=sn.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=yu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Bh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return si(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Bh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){zs(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new xn(yu(this.value))}}function XI(n){const e=[];return zs(n.fields,((t,r)=>{const s=new sn([t]);if(Bh(r)){const a=XI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new $n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new pn(e,0,be.min(),be.min(),be.min(),xn.empty(),0)}static newFoundDocument(e,t,r,s){return new pn(e,1,t,be.min(),r,s,0)}static newNoDocument(e,t){return new pn(e,2,t,be.min(),be.min(),xn.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,be.min(),be.min(),xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ld{constructor(e,t){this.position=e,this.inclusive=t}}function nw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=Se.comparator(Se.fromName(u.referenceValue),t.key):r=Ga(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function rw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!si(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vu{constructor(e,t="asc"){this.field=e,this.dir=t}}function SN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class JI{}class Lt extends JI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new RN(e,t,r):t==="array-contains"?new PN(e,r):t==="in"?new NN(e,r):t==="not-in"?new xN(e,r):t==="array-contains-any"?new bN(e,r):new Lt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new AN(e,r):new kN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ga(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison(Ga(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dr extends JI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Dr(e,t)}matches(e){return ZI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ZI(n){return n.op==="and"}function e0(n){return CN(n)&&ZI(n)}function CN(n){for(const e of n.filters)if(e instanceof Dr)return!1;return!0}function bm(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Ka(n.value);if(e0(n))return n.filters.map((e=>bm(e))).join(",");{const e=n.filters.map((t=>bm(t))).join(",");return`${n.op}(${e})`}}function t0(n,e){return n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.field.isEqual(s.field)&&si(r.value,s.value)})(n,e):n instanceof Dr?(function(r,s){return s instanceof Dr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&t0(u,s.filters[d])),!0):!1})(n,e):void ke(19439)}function n0(n){return n instanceof Lt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ka(t.value)}`})(n):n instanceof Dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(n0).join(" ,")+"}"})(n):"Filter"}class RN extends Lt{constructor(e,t,r){super(e,t,r),this.key=Se.fromName(r.referenceValue)}matches(e){const t=Se.comparator(e.key,this.key);return this.matchesComparison(t)}}class AN extends Lt{constructor(e,t){super(e,"in",t),this.keys=r0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class kN extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=r0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function r0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Se.fromName(r.referenceValue)))}class PN extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kg(t)&&Mu(t.arrayValue,this.value)}}class NN extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mu(this.value.arrayValue,t)}}class xN extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Mu(this.value.arrayValue,t)}}class bN extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Mu(this.value.arrayValue,r)))}}/**
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
 */class DN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function iw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new DN(n,e,t,r,s,a,u)}function Pg(n){const e=De(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>bm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Wd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ka(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ka(r))).join(",")),e.Pe=t}return e.Pe}function Ng(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!SN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!t0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rw(n.startAt,e.startAt)&&rw(n.endAt,e.endAt)}function Dm(n){return Se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ON(n,e,t,r,s,a,u,d){return new hl(n,e,t,r,s,a,u,d)}function xg(n){return new hl(n)}function sw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function i0(n){return n.collectionGroup!==null}function vu(n){const e=De(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Bt(sn.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Vu(a,r))})),t.has(sn.keyField().canonicalString())||e.Te.push(new Vu(sn.keyField(),r))}return e.Te}function ti(n){const e=De(n);return e.Ie||(e.Ie=LN(e,vu(n))),e.Ie}function LN(n,e){if(n.limitType==="F")return iw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Vu(s.field,a)}));const t=n.endAt?new ld(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ld(n.startAt.position,n.startAt.inclusive):null;return iw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Om(n,e){const t=n.filters.concat([e]);return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ud(n,e,t){return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qd(n,e){return Ng(ti(n),ti(e))&&n.limitType===e.limitType}function s0(n){return`${Pg(ti(n))}|lt:${n.limitType}`}function xa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>n0(s))).join(", ")}]`),Wd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ka(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ka(s))).join(",")),`Target(${r})`})(ti(n))}; limitType=${n.limitType})`}function Gd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Se.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of vu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=nw(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,vu(r),s)||r.endAt&&!(function(u,d,f){const m=nw(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,vu(r),s))})(n,e)}function MN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function o0(n){return(e,t)=>{let r=!1;for(const s of vu(n)){const a=VN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function VN(n,e,t){const r=n.field.isKeyField()?Se.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Ga(f,m):ke(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ke(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return $I(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Vt(Se.comparator);function Li(){return FN}const a0=new Vt(Se.comparator);function hu(...n){let e=a0;for(const t of n)e=e.insert(t.key,t);return e}function l0(n){let e=a0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function wo(){return Eu()}function u0(){return Eu()}function Eu(){return new Fo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const UN=new Vt(Se.comparator),jN=new Bt(Se.comparator);function ze(...n){let e=jN;for(const t of n)e=e.add(t);return e}const BN=new Bt(Le);function zN(){return BN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sd(e)?"-0":e}}function c0(n){return{integerValue:""+n}}function $N(n,e){return gN(e)?c0(e):bg(n,e)}/**
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
 */class Kd{constructor(){this._=void 0}}function WN(n,e,t){return n instanceof cd?(function(s,a){const u={fields:{[qI]:{stringValue:HI},[KI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Ag(a)&&(a=Hd(a)),a&&(u.fields[GI]=a),{mapValue:u}})(t,e):n instanceof Qa?d0(n,e):n instanceof Fu?f0(n,e):(function(s,a){const u=h0(s,a),d=ow(u)+ow(s.Ee);return xm(u)&&xm(s.Ee)?c0(d):bg(s.serializer,d)})(n,e)}function HN(n,e,t){return n instanceof Qa?d0(n,e):n instanceof Fu?f0(n,e):t}function h0(n,e){return n instanceof hd?(function(r){return xm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class cd extends Kd{}class Qa extends Kd{constructor(e){super(),this.elements=e}}function d0(n,e){const t=p0(e);for(const r of n.elements)t.some((s=>si(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Fu extends Kd{constructor(e){super(),this.elements=e}}function f0(n,e){let t=p0(e);for(const r of n.elements)t=t.filter((s=>!si(s,r)));return{arrayValue:{values:t}}}class hd extends Kd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ow(n){return Rt(n.integerValue||n.doubleValue)}function p0(n){return kg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,t){this.field=e,this.transform=t}}function GN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Qa&&s instanceof Qa||r instanceof Fu&&s instanceof Fu?qa(r.elements,s.elements,si):r instanceof hd&&s instanceof hd?si(r.Ee,s.Ee):r instanceof cd&&s instanceof cd})(n.transform,e.transform)}class KN{constructor(e,t){this.version=e,this.transformResults=t}}class Nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qd{}function m0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _0(n.key,Nr.none()):new tc(n.key,n.data,Nr.none());{const t=n.data,r=xn.empty();let s=new Bt(sn.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new $s(n.key,r,new $n(s.toArray()),Nr.none())}}function QN(n,e,t){n instanceof tc?(function(s,a,u){const d=s.value.clone(),f=lw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof $s?(function(s,a,u){if(!zh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=lw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(g0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function wu(n,e,t,r){return n instanceof tc?(function(a,u,d,f){if(!zh(a.precondition,u))return d;const m=a.value.clone(),y=uw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof $s?(function(a,u,d,f){if(!zh(a.precondition,u))return d;const m=uw(a.fieldTransforms,f,u),y=u.data;return y.setAll(g0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return zh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function YN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=h0(r.transform,s||null);a!=null&&(t===null&&(t=xn.empty()),t.set(r.field,a))}return t||null}function aw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qa(r,s,((a,u)=>GN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tc extends Qd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends Qd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function g0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function lw(n,e,t){const r=new Map;et(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,HN(u,d,t[s]))}return r}function uw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,WN(a,u,e))}return r}class _0 extends Qd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XN extends Qd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&QN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=wu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=wu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=u0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=m0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(be.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&qa(this.mutations,e.mutations,((t,r)=>aw(t,r)))&&qa(this.baseMutations,e.baseMutations,((t,r)=>aw(t,r)))}}class Dg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){et(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return UN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Dg(e,t,r,s)}}/**
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
 */class ZN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ex{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Ke;function tx(n){switch(n){case Q.OK:return ke(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return ke(15467,{code:n})}}function y0(n){if(n===void 0)return Oi("GRPC error has no .code"),Q.UNKNOWN;switch(n){case Dt.OK:return Q.OK;case Dt.CANCELLED:return Q.CANCELLED;case Dt.UNKNOWN:return Q.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return Q.INTERNAL;case Dt.UNAVAILABLE:return Q.UNAVAILABLE;case Dt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Dt.NOT_FOUND:return Q.NOT_FOUND;case Dt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Dt.ABORTED:return Q.ABORTED;case Dt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Dt.DATA_LOSS:return Q.DATA_LOSS;default:return ke(39323,{code:n})}}(Ke=Dt||(Dt={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const nx=new Ts([4294967295,4294967295],0);function cw(n){const e=UI().encode(n),t=new xI;return t.update(e),new Uint8Array(t.digest())}function hw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([s,a],0)]}class Og{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new du(`Invalid padding: ${t}`);if(r<0)throw new du(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new du(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new du(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ts.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ts.fromNumber(r)));return s.compare(nx)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=cw(e),[r,s]=hw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Og(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=cw(e),[r,s]=hw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yd(be.min(),s,new Vt(Le),Li(),ze())}}class nc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nc(r,t,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class v0{constructor(e,t){this.targetId=e,this.De=t}}class E0{constructor(e,t,r=on.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class dw{constructor(){this.ve=0,this.Ce=fw(),this.Fe=on.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ze(),t=ze(),r=ze();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ke(38017,{changeType:a})}})),new nc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=fw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class rx{constructor(e){this.We=e,this.Ge=new Map,this.ze=Li(),this.je=Ph(),this.Je=Ph(),this.He=new Vt(Le)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ke(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Dm(a))if(r===0){const u=new Se(a.path);this.Xe(t,u,pn.newNoDocument(u,be.min()))}else et(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Ds(r).toUint8Array()}catch(f){if(f instanceof WI)return Ns("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Og(u,s,a)}catch(f){return Ns(f instanceof du?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Dm(d.target)){const f=new Se(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,pn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=ze();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Yd(e,t,this.He,this.ze,r);return this.ze=Li(),this.je=Ph(),this.Je=Ph(),this.He=new Vt(Le),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new dw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Bt(Le),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Bt(Le),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new dw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ph(){return new Vt(Se.comparator)}function fw(){return new Vt(Se.comparator)}const ix={asc:"ASCENDING",desc:"DESCENDING"},sx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ox={and:"AND",or:"OR"};class ax{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lm(n,e){return n.useProto3Json||Wd(e)?e:{value:e}}function dd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lx(n,e){return dd(n,e.toTimestamp())}function ni(n){return et(!!n,49232),be.fromTimestamp((function(t){const r=bs(t);return new pt(r.seconds,r.nanos)})(n))}function Lg(n,e){return Mm(n,e).canonicalString()}function Mm(n,e){const t=(function(s){return new ut(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function T0(n){const e=ut.fromString(n);return et(A0(e),10190,{key:e.toString()}),e}function Vm(n,e){return Lg(n.databaseId,e.path)}function im(n,e){const t=T0(e);if(t.get(1)!==n.databaseId.projectId)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Se(S0(t))}function I0(n,e){return Lg(n.databaseId,e)}function ux(n){const e=T0(n);return e.length===4?ut.emptyPath():S0(e)}function Fm(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function S0(n){return et(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pw(n,e,t){return{name:Vm(n,e),fields:t.value.mapValue.fields}}function cx(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ke(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(et(y===void 0||typeof y=="string",58123),on.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),on.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?Q.UNKNOWN:y0(m.code);return new he(y,m.message||"")})(u);t=new E0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=im(n,r.document.name),a=ni(r.document.updateTime),u=r.document.createTime?ni(r.document.createTime):be.min(),d=new xn({mapValue:{fields:r.document.fields}}),f=pn.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new $h(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=im(n,r.document),a=r.readTime?ni(r.readTime):be.min(),u=pn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new $h([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=im(n,r.document),a=r.removedTargetIds||[];t=new $h([],a,s,null)}else{if(!("filter"in e))return ke(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ex(s,a),d=r.targetId;t=new v0(d,u)}}return t}function hx(n,e){let t;if(e instanceof tc)t={update:pw(n,e.key,e.value)};else if(e instanceof _0)t={delete:Vm(n,e.key)};else if(e instanceof $s)t={update:pw(n,e.key,e.data),updateMask:Ex(e.fieldMask)};else{if(!(e instanceof XN))return ke(16599,{Rt:e.type});t={verify:Vm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof cd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Qa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Fu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof hd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw ke(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:lx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ke(27497)})(n,e.precondition)),t}function dx(n,e){return n&&n.length>0?(et(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ni(s.updateTime):ni(a);return u.isEqual(be.min())&&(u=ni(a)),new KN(u,s.transformResults||[])})(t,e)))):[]}function fx(n,e){return{documents:[I0(n,e.path)]}}function px(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=I0(n,s);const a=(function(m){if(m.length!==0)return R0(Dr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(T){return{field:ba(T.field),direction:_x(T.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Lm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function mx(n){let e=ux(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){et(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(E){const T=C0(E);return T instanceof Dr&&e0(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(M){return new Vu(Da(M.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,Wd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(E){const T=!!E.before,P=E.values||[];return new ld(P,T)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const T=!E.before,P=E.values||[];return new ld(P,T)})(t.endAt)),ON(e,s,u,a,d,"F",f,m)}function gx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ke(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function C0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Da(t.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Da(t.unaryFilter.field);return Lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Da(t.unaryFilter.field);return Lt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Da(t.unaryFilter.field);return Lt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ke(61313);default:return ke(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Lt.create(Da(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ke(58110);default:return ke(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Dr.create(t.compositeFilter.filters.map((r=>C0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ke(1026)}})(t.compositeFilter.op))})(n):ke(30097,{filter:n})}function _x(n){return ix[n]}function yx(n){return sx[n]}function vx(n){return ox[n]}function ba(n){return{fieldPath:n.canonicalString()}}function Da(n){return sn.fromServerFormat(n.fieldPath)}function R0(n){return n instanceof Lt?(function(t){if(t.op==="=="){if(tw(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NAN"}};if(ew(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tw(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NAN"}};if(ew(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(t.field),op:yx(t.op),value:t.value}}})(n):n instanceof Dr?(function(t){const r=t.getFilters().map((s=>R0(s)));return r.length===1?r[0]:{compositeFilter:{op:vx(t.op),filters:r}}})(n):ke(54877,{filter:n})}function Ex(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function A0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,r,s,a=be.min(),u=be.min(),d=on.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.gt=e}}function Tx(n){const e=mx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
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
 */class Ix{constructor(){this.Dn=new Sx}addToCollectionParentIndex(e,t){return this.Dn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(xs.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class Sx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Bt(ut.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Bt(ut.comparator)).toArray()}}/**
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
 */const mw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},k0=41943040;class Nn{static withCacheSize(e){return new Nn(e,Nn.DEFAULT_COLLECTION_PERCENTILE,Nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.DEFAULT_COLLECTION_PERCENTILE=10,Nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nn.DEFAULT=new Nn(k0,Nn.DEFAULT_COLLECTION_PERCENTILE,Nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nn.DISABLED=new Nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gw="LruGarbageCollector",Cx=1048576;function _w([n,e],[t,r]){const s=Le(n,t);return s===0?Le(e,r):s}class Rx{constructor(e){this.Tr=e,this.buffer=new Bt(_w),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_w(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ax{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){pe(gw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?pe(gw,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.Rr(3e5)}))}}class kx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return X.resolve($d.ue);const r=new Rx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(mw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Na()<=Be.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function Px(n,e){return new kx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.changes=new Fo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&wu(r.mutation,s,$n.empty(),pt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ze()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ze()){const s=wo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=hu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=wo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ze())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Li();const u=Eu(),d=(function(){return Eu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof $s)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),wu(y.mutation,m,y.mutation.getFieldMask(),pt.now())):u.set(m.key,$n.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var E;return d.set(m,new xx(y,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Eu();let s=new Vt(((u,d)=>u-d)),a=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||$n.empty();y=d.applyToLocalView(m,y),r.set(f,y);const E=(s.get(d.batchId)||ze()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,E=u0();y.forEach((T=>{if(!a.has(T)){const P=m0(t.get(T),r.get(T));P!==null&&E.set(T,P),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return X.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return Se.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):i0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):X.resolve(wo());let d=Du,f=a;return u.next((m=>X.forEach(m,((y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(y)?X.resolve():this.remoteDocumentCache.getEntry(e,y).next((T=>{f=f.insert(y,T)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,ze()))).next((y=>({batchId:d,changes:l0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Se(t)).next((r=>{let s=hu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=hu();return this.indexManager.getCollectionParents(e,a).next((d=>X.forEach(d,(f=>{const m=(function(E,T){return new hl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,pn.newInvalidDocument(y)))}));let d=hu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&wu(y.mutation,m,$n.empty(),pt.now()),Gd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return X.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ni(s.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Tx(s.bundledQuery),readTime:ni(s.readTime)}})(t)),X.resolve()}}/**
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
 */class Ox{constructor(){this.overlays=new Vt(Se.comparator),this.kr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wo();return X.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),X.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),X.resolve()}getOverlaysForCollection(e,t,r){const s=wo(),a=t.length+1,u=new Se(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return X.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Vt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=wo(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=wo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return X.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ZN(t,r));let a=this.kr.get(t);a===void 0&&(a=ze(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class Lx{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.qr=new Bt(Kt.Qr),this.$r=new Bt(Kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Kt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Kt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Se(new ut([])),r=new Kt(t,e),s=new Kt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Se(new ut([])),r=new Kt(t,e),s=new Kt(t,e+1);let a=ze();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Kt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Se.comparator(e.key,t.key)||Le(e.Hr,t.Hr)}static Ur(e,t){return Le(e.Hr,t.Hr)||Se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Bt(Kt.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new JN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Kt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return X.resolve(u)}lookupMutationBatch(e,t){return X.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return X.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Rg:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Kt(t,0),s=new Kt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),X.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Bt(Le);return t.forEach((s=>{const a=new Kt(s,0),u=new Kt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),X.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;Se.isDocumentKey(a)||(a=a.child(""));const u=new Kt(new Se(a),0);let d=new Bt(Le);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),X.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){et(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return X.forEach(t.mutations,(s=>{const a=new Kt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Kt(t,0),s=this.Yr.firstAfterOrEqual(r);return X.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.ni=e,this.docs=(function(){return new Vt(Se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let r=Li();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():pn.newInvalidDocument(s))})),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Li();const u=t.path,d=new Se(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||dN(hN(y),r)<=0||(s.has(y.key)||Gd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return X.resolve(a)}getAllFromCollectionGroup(e,t,r,s){ke(9500)}ri(e,t){return X.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Fx(this)}getSize(e){return X.resolve(this.size)}}class Fx extends Nx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),X.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.persistence=e,this.ii=new Fo((t=>Pg(t)),Ng),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.si=0,this.oi=new Mg,this.targetCount=0,this._i=Ya.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),X.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.hr(t),X.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),X.waitFor(a).next((()=>s))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),X.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,t){this.ai={},this.overlays={},this.ui=new $d(0),this.ci=!1,this.ci=!0,this.li=new Lx,this.referenceDelegate=e(this),this.hi=new Ux(this),this.indexManager=new Ix,this.remoteDocumentCache=(function(s){return new Vx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new wx(t),this.Ti=new Dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ox,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Mx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){pe("MemoryPersistence","Starting transaction:",e);const s=new jx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return X.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class jx extends pN{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.Ai=new Mg,this.Ri=null}static Vi(e){return new Vg(e)}get mi(){if(this.Ri)return this.Ri;throw ke(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,(r=>{const s=Se.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,be.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return X.or([()=>X.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class fd{constructor(e,t){this.persistence=e,this.gi=new Fo((r=>_N(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Px(this,t)}static Vi(e,t){return new fd(e,t)}Ii(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return X.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?X.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,be.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jh(e.data.value)),t}Sr(e,t,r){return X.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return X.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ze(),s=ze();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Fg(e,t.fromCache,r,s)}}/**
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
 */class Bx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return yA()?8:mN(mn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Bx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Na()<=Be.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",xa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(Na()<=Be.DEBUG&&pe("QueryEngine","Query:",xa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Na()<=Be.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",xa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ti(t))):X.resolve())}ps(e,t){if(sw(t))return X.resolve(null);let r=ti(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ud(t,null,"F"),r=ti(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=ze(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,ud(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return sw(t)||s.isEqual(be.min())?X.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?X.resolve(null):(Na()<=Be.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xa(t)),this.vs(e,u,t,cN(s,Du)).next((d=>d)))}))}bs(e,t){let r=new Bt(o0(e));return t.forEach(((s,a)=>{Gd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Na()<=Be.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",xa(t)),this.gs.getDocumentsMatchingQuery(e,t,xs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="LocalStore",$x=3e8;class Wx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Vt(Le),this.Ms=new Fo((a=>Pg(a)),Ng),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Hx(n,e,t,r){return new Wx(n,e,t,r)}async function N0(n,e){const t=De(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=ze();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function qx(n,e){const t=De(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const E=m.batch,T=E.keys();let P=X.resolve();return T.forEach((M=>{P=P.next((()=>y.getEntry(f,M))).next((L=>{const F=m.docVersions.get(M);et(F!==null,48541),L.version.compareTo(F)<0&&(E.applyToRemoteDocument(L,m),L.isValidDocument()&&(L.setReadTime(m.commitVersion),y.addEntry(L)))}))})),P.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=ze();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function x0(n){const e=De(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Gx(n,e){const t=De(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,E))));let P=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(on.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):y.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(y.resumeToken,r)),s=s.insert(E,P),(function(L,F,ae){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=$x?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(T,P,y)&&d.push(t.hi.updateTargetData(a,P))}));let f=Li(),m=ze();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Kx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(be.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return X.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Kx(n,e,t){let r=ze(),s=ze();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Li();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(be.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):pe(Ug,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Qx(n,e){const t=De(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Rg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Yx(n,e){const t=De(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,X.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new ys(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Um(n,e,t){const r=De(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!cl(u))throw u;pe(Ug,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function yw(n,e,t){const r=De(n);let s=be.min(),a=ze();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const E=De(f),T=E.Ms.get(y);return T!==void 0?X.resolve(E.Fs.get(T)):E.hi.getTargetData(m,y)})(r,u,ti(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:be.min(),t?a:ze()))).next((d=>(Xx(r,MN(e),d),{documents:d,qs:a})))))}function Xx(n,e,t){let r=n.xs.get(e)||be.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class vw{constructor(){this.activeTargetIds=zN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jx{constructor(){this.Fo=new vw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new vw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Zx{xo(e){}shutdown(){}}/**
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
 */const Ew="ConnectivityMonitor";class ww{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){pe(Ew,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){pe(Ew,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nh=null;function jm(){return Nh===null?Nh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nh++,"0x"+Nh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="RestConnection",eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===od?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=jm(),d=this.Go(e,t.toUriEncodedString());pe(sm,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=oi(m);return this.jo(e,d,f,r,y).then((E=>(pe(sm,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Ns(sm,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ll})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=eb[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="WebChannelConnection";class rb extends tb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=jm();return new Promise(((d,f)=>{const m=new bI;m.setWithCredentials(!0),m.listenOnce(DI.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Uh.NO_ERROR:const E=m.getResponseJson();pe(dn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Uh.TIMEOUT:pe(dn,`RPC '${e}' ${u} timed out`),f(new he(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Uh.HTTP_ERROR:const T=m.getStatus();if(pe(dn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let P=m.getResponseJson();Array.isArray(P)&&(P=P[0]);const M=P==null?void 0:P.error;if(M&&M.status&&M.message){const L=(function(ae){const K=ae.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(K)>=0?K:Q.UNKNOWN})(M.status);f(new he(L,M.message))}else f(new he(Q.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new he(Q.UNAVAILABLE,"Connection failed."));break;default:ke(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{pe(dn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);pe(dn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=jm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=MI(),d=LI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");pe(dn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);this.T_(E);let T=!1,P=!1;const M=new nb({Ho:F=>{P?pe(dn,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(T||(pe(dn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),pe(dn,`RPC '${e}' stream ${s} sending:`,F),E.send(F))},Yo:()=>E.close()}),L=(F,ae,K)=>{F.listen(ae,(Z=>{try{K(Z)}catch(j){setTimeout((()=>{throw j}),0)}}))};return L(E,cu.EventType.OPEN,(()=>{P||(pe(dn,`RPC '${e}' stream ${s} transport opened.`),M.s_())})),L(E,cu.EventType.CLOSE,(()=>{P||(P=!0,pe(dn,`RPC '${e}' stream ${s} transport closed`),M.__(),this.I_(E))})),L(E,cu.EventType.ERROR,(F=>{P||(P=!0,Ns(dn,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),M.__(new he(Q.UNAVAILABLE,"The operation could not be completed")))})),L(E,cu.EventType.MESSAGE,(F=>{var ae;if(!P){const K=F.data[0];et(!!K,16349);const Z=K,j=(Z==null?void 0:Z.error)||((ae=Z[0])===null||ae===void 0?void 0:ae.error);if(j){pe(dn,`RPC '${e}' stream ${s} received error:`,j);const Te=j.status;let me=(function(A){const x=Dt[A];if(x!==void 0)return y0(x)})(Te),b=j.message;me===void 0&&(me=Q.INTERNAL,b="Unknown error status: "+Te+" with message "+j.message),P=!0,M.__(new he(me,b)),E.close()}else pe(dn,`RPC '${e}' stream ${s} received:`,K),M.a_(K)}})),L(d,OI.STAT_EVENT,(F=>{F.stat===Am.PROXY?pe(dn,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Am.NOPROXY&&pe(dn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function om(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){return new ax(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&pe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="PersistentStream";class D0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new b0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Oi(t.toString()),Oi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new he(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return pe(Tw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(pe(Tw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ib extends D0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=cx(this.serializer,e),r=(function(a){if(!("targetChange"in a))return be.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?be.min():u.readTime?ni(u.readTime):be.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Fm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Dm(f)?{documents:fx(a,f)}:{query:px(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=w0(a,u.resumeToken);const m=Lm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(be.min())>0){d.readTime=dd(a,u.snapshotVersion.toTimestamp());const m=Lm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=gx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Fm(this.serializer),t.removeTarget=e,this.k_(t)}}class sb extends D0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return et(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){et(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=dx(e.writeResults,e.commitTime),r=ni(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Fm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>hx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{}class ab extends ob{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Mm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new he(Q.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Mm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(Q.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class lb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Oi(t),this._a=!1):pe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="RemoteStore";class ub{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Uo(this)&&(pe(No,"Restarting streams for network reachability change."),await(async function(f){const m=De(f);m.Ia.add(4),await rc(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Jd(m)})(this))}))})),this.Aa=new lb(r,s)}}async function Jd(n){if(Uo(n))for(const e of n.da)await e(!0)}async function rc(n){for(const e of n.da)await e(!1)}function O0(n,e){const t=De(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),$g(t)?zg(t):dl(t).x_()&&Bg(t,e))}function jg(n,e){const t=De(n),r=dl(t);t.Ta.delete(e),r.x_()&&L0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Uo(t)&&t.Aa.set("Unknown"))}function Bg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dl(n).H_(e)}function L0(n,e){n.Ra.$e(e),dl(n).Y_(e)}function zg(n){n.Ra=new rx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),dl(n).start(),n.Aa.aa()}function $g(n){return Uo(n)&&!dl(n).M_()&&n.Ta.size>0}function Uo(n){return De(n).Ia.size===0}function M0(n){n.Ra=void 0}async function cb(n){n.Aa.set("Online")}async function hb(n){n.Ta.forEach(((e,t)=>{Bg(n,e)}))}async function db(n,e){M0(n),$g(n)?(n.Aa.la(e),zg(n)):n.Aa.set("Unknown")}async function fb(n,e,t){if(n.Aa.set("Online"),e instanceof E0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){pe(No,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pd(n,r)}else if(e instanceof $h?n.Ra.Ye(e):e instanceof v0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(be.min()))try{const r=await x0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(on.EMPTY_BYTE_STRING,y.snapshotVersion)),L0(a,f);const E=new ys(y.target,f,m,y.sequenceNumber);Bg(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){pe(No,"Failed to raise snapshot:",r),await pd(n,r)}}async function pd(n,e,t){if(!cl(e))throw e;n.Ia.add(1),await rc(n),n.Aa.set("Offline"),t||(t=()=>x0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pe(No,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Jd(n)}))}function V0(n,e){return e().catch((t=>pd(n,t,e)))}async function Zd(n){const e=De(n),t=Ls(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Rg;for(;pb(e);)try{const s=await Qx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,mb(e,s)}catch(s){await pd(e,s)}F0(e)&&U0(e)}function pb(n){return Uo(n)&&n.Pa.length<10}function mb(n,e){n.Pa.push(e);const t=Ls(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function F0(n){return Uo(n)&&!Ls(n).M_()&&n.Pa.length>0}function U0(n){Ls(n).start()}async function gb(n){Ls(n).na()}async function _b(n){const e=Ls(n);for(const t of n.Pa)e.X_(t.mutations)}async function yb(n,e,t){const r=n.Pa.shift(),s=Dg.from(r,e,t);await V0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Zd(n)}async function vb(n,e){e&&Ls(n).Z_&&await(async function(r,s){if((function(u){return tx(u)&&u!==Q.ABORTED})(s.code)){const a=r.Pa.shift();Ls(r).N_(),await V0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Zd(r)}})(n,e),F0(n)&&U0(n)}async function Iw(n,e){const t=De(n);t.asyncQueue.verifyOperationInProgress(),pe(No,"RemoteStore received new credentials");const r=Uo(t);t.Ia.add(3),await rc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Jd(t)}async function Eb(n,e){const t=De(n);e?(t.Ia.delete(2),await Jd(t)):e||(t.Ia.add(2),await rc(t),t.Aa.set("Unknown"))}function dl(n){return n.Va||(n.Va=(function(t,r,s){const a=De(t);return a.ia(),new ib(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:cb.bind(null,n),e_:hb.bind(null,n),n_:db.bind(null,n),J_:fb.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),$g(n)?zg(n):n.Aa.set("Unknown")):(await n.Va.stop(),M0(n))}))),n.Va}function Ls(n){return n.ma||(n.ma=(function(t,r,s){const a=De(t);return a.ia(),new sb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:gb.bind(null,n),n_:vb.bind(null,n),ea:_b.bind(null,n),ta:yb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Zd(n)):(await n.ma.stop(),n.Pa.length>0&&(pe(No,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Wg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hg(n,e){if(Oi("AsyncQueue",`${e}: ${n}`),cl(n))return new he(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{static emptySet(e){return new Ua(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Se.comparator(t.key,r.key):(t,r)=>Se.comparator(t.key,r.key),this.keyedMap=hu(),this.sortedSet=new Vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ua)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Sw{constructor(){this.fa=new Vt(Se.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ke(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xa{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Xa(e,t,Ua.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Tb{constructor(){this.queries=Cw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=De(t),a=s.queries;s.queries=Cw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new he(Q.ABORTED,"Firestore shutting down"))}}function Cw(){return new Fo((n=>s0(n)),qd)}async function j0(n,e){const t=De(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new wb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Hg(u,`Initialization of query '${xa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&qg(t)}async function B0(n,e){const t=De(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ib(n,e){const t=De(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&qg(t)}function Sb(n,e,t){const r=De(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function qg(n){n.Da.forEach((e=>{e.next()}))}var Bm,Rw;(Rw=Bm||(Bm={})).Fa="default",Rw.Cache="cache";class z0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Bm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.key=e}}class W0{constructor(e){this.key=e}}class Cb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ze(),this.mutatedKeys=ze(),this.Xa=o0(e),this.eu=new Ua(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Sw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,E)=>{const T=s.get(y),P=Gd(this.query,E)?E:null,M=!!T&&this.mutatedKeys.has(T.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let F=!1;T&&P?T.data.isEqual(P.data)?M!==L&&(r.track({type:3,doc:P}),F=!0):this.iu(T,P)||(r.track({type:2,doc:P}),F=!0,(f&&this.Xa(P,f)>0||m&&this.Xa(P,m)<0)&&(d=!0)):!T&&P?(r.track({type:0,doc:P}),F=!0):T&&!P&&(r.track({type:1,doc:T}),F=!0,(f||m)&&(d=!0)),F&&(P?(u=u.add(P),a=L?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,E)=>(function(P,M){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ke(20277,{At:F})}};return L(P)-L(M)})(y.type,E.type)||this.Xa(y.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Xa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Sw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ze(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new W0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new $0(r))})),t}uu(e){this.Ha=e.qs,this.Za=ze();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Gg="SyncEngine";class Rb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ab{constructor(e){this.key=e,this.lu=!1}}class kb{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Fo((d=>s0(d)),qd),this.Tu=new Map,this.Iu=new Set,this.du=new Vt(Se.comparator),this.Eu=new Map,this.Au=new Mg,this.Ru={},this.Vu=new Map,this.mu=Ya.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Pb(n,e,t=!0){const r=Y0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await H0(r,e,t,!0),s}async function Nb(n,e){const t=Y0(n);await H0(t,e,!0,!1)}async function H0(n,e,t,r){const s=await Yx(n.localStore,ti(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await xb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&O0(n.remoteStore,s),d}async function xb(n,e,t,r,s){n.gu=(E,T,P)=>(async function(L,F,ae,K){let Z=F.view.nu(ae);Z.Ds&&(Z=await yw(L.localStore,F.query,!1).then((({documents:b})=>F.view.nu(b,Z))));const j=K&&K.targetChanges.get(F.targetId),Te=K&&K.targetMismatches.get(F.targetId)!=null,me=F.view.applyChanges(Z,L.isPrimaryClient,j,Te);return kw(L,F.targetId,me._u),me.snapshot})(n,E,T,P);const a=await yw(n.localStore,e,!0),u=new Cb(e,a.qs),d=u.nu(a.documents),f=nc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);kw(n,t,m._u);const y=new Rb(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function bb(n,e,t){const r=De(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!qd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Um(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&jg(r.remoteStore,s.targetId),zm(r,s.targetId)})).catch(ul)):(zm(r,s.targetId),await Um(r.localStore,s.targetId,!0))}async function Db(n,e){const t=De(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jg(t.remoteStore,r.targetId))}async function Ob(n,e,t){const r=Bb(n);try{const s=await(function(u,d){const f=De(u),m=pt.now(),y=d.reduce(((P,M)=>P.add(M.key)),ze());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let M=Li(),L=ze();return f.Os.getEntries(P,y).next((F=>{M=F,M.forEach(((ae,K)=>{K.isValidDocument()||(L=L.add(ae))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,M))).next((F=>{E=F;const ae=[];for(const K of d){const Z=YN(K,E.get(K.key).overlayedDocument);Z!=null&&ae.push(new $s(K.key,Z,XI(Z.value.mapValue),Nr.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,ae,d)})).next((F=>{T=F;const ae=F.applyToLocalDocumentSet(E,L);return f.documentOverlayCache.saveOverlays(P,F.batchId,ae)}))})).then((()=>({batchId:T.batchId,changes:l0(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Vt(Le)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await ic(r,s.changes),await Zd(r.remoteStore)}catch(s){const a=Hg(s,"Failed to persist write");t.reject(a)}}async function q0(n,e){const t=De(n);try{const r=await Gx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?et(u.lu,14607):s.removedDocuments.size>0&&(et(u.lu,42227),u.lu=!1))})),await ic(t,r,e)}catch(r){await ul(r)}}function Aw(n,e,t){const r=De(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=De(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)})),m&&qg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lb(n,e,t){const r=De(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Vt(Se.comparator);u=u.insert(a,pn.newNoDocument(a,be.min()));const d=ze().add(a),f=new Yd(be.min(),new Map,new Vt(Le),u,d);await q0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Kg(r)}else await Um(r.localStore,e,!1).then((()=>zm(r,e,t))).catch(ul)}async function Mb(n,e){const t=De(n),r=e.batch.batchId;try{const s=await qx(t.localStore,e);K0(t,r,null),G0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ic(t,s)}catch(s){await ul(s)}}async function Vb(n,e,t){const r=De(n);try{const s=await(function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(et(E!==null,37113),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);K0(r,e,t),G0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ic(r,s)}catch(s){await ul(s)}}function G0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function K0(n,e,t){const r=De(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function zm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Q0(n,r)}))}function Q0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(jg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Kg(n))}function kw(n,e,t){for(const r of t)r instanceof $0?(n.Au.addReference(r.key,e),Fb(n,r)):r instanceof W0?(pe(Gg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Q0(n,r.key)):ke(19791,{yu:r})}function Fb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(pe(Gg,"New document in limbo: "+t),n.Iu.add(r),Kg(n))}function Kg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Se(ut.fromString(e)),r=n.mu.next();n.Eu.set(r,new Ab(t)),n.du=n.du.insert(t,r),O0(n.remoteStore,new ys(ti(xg(t.path)),r,"TargetPurposeLimboResolution",$d.ue))}}async function ic(n,e,t){const r=De(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Fg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=De(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>X.forEach(m,(T=>X.forEach(T.Is,(P=>y.persistence.referenceDelegate.addReference(E,T.targetId,P))).next((()=>X.forEach(T.ds,(P=>y.persistence.referenceDelegate.removeReference(E,T.targetId,P)))))))))}catch(E){if(!cl(E))throw E;pe(Ug,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const P=y.Fs.get(T),M=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(M);y.Fs=y.Fs.insert(T,L)}}})(r.localStore,a))}async function Ub(n,e){const t=De(n);if(!t.currentUser.isEqual(e)){pe(Gg,"User change. New user:",e.toKey());const r=await N0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new he(Q.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ic(t,r.Bs)}}function jb(n,e){const t=De(n),r=t.Eu.get(e);if(r&&r.lu)return ze().add(r.key);{let s=ze();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function Y0(n){const e=De(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=q0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lb.bind(null,e),e.hu.J_=Ib.bind(null,e.eventManager),e.hu.pu=Sb.bind(null,e.eventManager),e}function Bb(n){const e=De(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vb.bind(null,e),e}class md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Hx(this.persistence,new zx,e.initialUser,this.serializer)}Du(e){return new P0(Vg.Vi,this.serializer)}bu(e){return new Jx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}md.provider={build:()=>new md};class zb extends md{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){et(this.persistence.referenceDelegate instanceof fd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ax(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Nn.withCacheSize(this.cacheSizeBytes):Nn.DEFAULT;return new P0((r=>fd.Vi(r,t)),this.serializer)}}class $m{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ub.bind(null,this.syncEngine),await Eb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Tb})()}createDatastore(e){const t=Xd(e.databaseInfo.databaseId),r=(function(a){return new rb(a)})(e.databaseInfo);return(function(a,u,d,f){return new ab(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new ub(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Aw(this.syncEngine,t,0)),(function(){return ww.C()?new ww:new Zx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const E=new kb(s,a,u,d,f,m);return y&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=De(s);pe(No,"RemoteStore shutting down."),a.Ia.add(5),await rc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$m.provider={build:()=>new $m};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Oi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="FirestoreClient";class $b{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=fn.UNAUTHENTICATED,this.clientId=Cg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{pe(Ms,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(pe(Ms,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function am(n,e){n.asyncQueue.verifyOperationInProgress(),pe(Ms,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await N0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ns("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{pe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ns("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Pw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Wb(n);pe(Ms,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Iw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Iw(e.remoteStore,s))),n._onlineComponents=e}async function Wb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe(Ms,"Using user provided OfflineComponentProvider");try{await am(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Q.FAILED_PRECONDITION||s.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ns("Error using user provided cache. Falling back to memory cache: "+t),await am(n,new md)}}else pe(Ms,"Using default OfflineComponentProvider"),await am(n,new zb(void 0));return n._offlineComponents}async function J0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe(Ms,"Using user provided OnlineComponentProvider"),await Pw(n,n._uninitializedComponentsProvider._online)):(pe(Ms,"Using default OnlineComponentProvider"),await Pw(n,new $m))),n._onlineComponents}function Hb(n){return J0(n).then((e=>e.syncEngine))}async function Wm(n){const e=await J0(n),t=e.eventManager;return t.onListen=Pb.bind(null,e.syncEngine),t.onUnlisten=bb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Db.bind(null,e.syncEngine),t}function qb(n,e,t={}){const r=new Is;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new X0({next:T=>{y.Ou(),u.enqueueAndForget((()=>B0(a,E))),T.fromCache&&f.source==="server"?m.reject(new he(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new z0(d,y,{includeMetadataChanges:!0,ka:!0});return j0(a,E)})(await Wm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Z0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firestore.googleapis.com",xw=!0;class bw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eS,this.ssl=xw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=k0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Cx)throw new he(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new ZP;switch(r.type){case"firstParty":return new rN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Nw.get(t);r&&(pe("ComponentProvider","Removing Datastore"),Nw.delete(t),r.terminate())})(this),Promise.resolve()}}function Gb(n,e,t,r={}){var s;n=Pr(n,ef);const a=oi(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Dd(`https://${f}`),Od("Firestore",!0)),u.host!==eS&&u.host!==f&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Ni(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=fn.MOCK_USER;else{y=dg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new he(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new fn(T)}n._authCredentials=new eN(new FI(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fi(this.firestore,e,this._query)}}class kt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ec(t,kt._jsonSchema))return new kt(e,r||null,new Se(ut.fromString(t.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Mt("string",kt._jsonSchemaVersion),referencePath:Mt("string")};class Cs extends Fi{constructor(e,t,r){super(e,t,xg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new Se(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function Vs(n,e,...t){if(n=tt(n),jI("collection","path",e),n instanceof ef){const r=ut.fromString(e,...t);return HE(r),new Cs(n,null,r)}{if(!(n instanceof kt||n instanceof Cs))throw new he(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return HE(r),new Cs(n.firestore,null,r)}}function Tu(n,e,...t){if(n=tt(n),arguments.length===1&&(e=Cg.newId()),jI("doc","path",e),n instanceof ef){const r=ut.fromString(e,...t);return WE(r),new kt(n,null,new Se(r))}{if(!(n instanceof kt||n instanceof Cs))throw new he(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return WE(r),new kt(n.firestore,n instanceof Cs?n.converter:null,new Se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="AsyncQueue";class Ow{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new b0(this,"async_queue_retry"),this.oc=()=>{const r=om();r&&pe(Dw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=om();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=om();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Is;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!cl(e))throw e;pe(Dw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Oi("INTERNAL UNHANDLED ERROR: ",Lw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Wg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&ke(47125,{hc:Lw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Lw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Mw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class xo extends ef{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ow,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ow(e),this._firestoreClient=void 0,await e}}}function Kb(n,e){const t=typeof n=="object"?n:Vd(),r=typeof n=="string"?n:od,s=Yu(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=hg("firestore");a&&Gb(s,...a)}return s}function Qg(n){if(n._terminated)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qb(n),n._firestoreClient}function Qb(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new EN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Z0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $b(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(on.fromBase64String(e))}catch(t){throw new he(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ir._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,ir._jsonSchema))return ir.fromBase64String(e.bytes)}}ir._jsonSchemaVersion="firestore/bytes/1.0",ir._jsonSchema={type:Mt("string",ir._jsonSchemaVersion),bytes:Mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ri{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ri._jsonSchemaVersion}}static fromJSON(e){if(ec(e,ri._jsonSchema))return new ri(e.latitude,e.longitude)}}ri._jsonSchemaVersion="firestore/geoPoint/1.0",ri._jsonSchema={type:Mt("string",ri._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
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
 */class ii{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ii(e.vectorValues);throw new he(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ii._jsonSchemaVersion="firestore/vectorValue/1.0",ii._jsonSchema={type:Mt("string",ii._jsonSchemaVersion),vectorValues:Mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=/^__.*__$/;class Xb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class tS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $s(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke(40011,{Ec:n})}}class rf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return gd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(nS(this.Ec)&&Yb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Jb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xd(e)}Dc(e,t,r,s=!1){return new rf({Ec:e,methodName:t,bc:r,path:sn.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sf(n){const e=n._freezeSettings(),t=Xd(n._databaseId);return new Jb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rS(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Xg("Data must be an object, but it was:",u,r);const d=iS(r,u);let f,m;if(a.merge)f=new $n(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const T=Hm(e,E,t);if(!u.contains(T))throw new he(Q.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);oS(y,T)||y.push(T)}f=new $n(y),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new Xb(new xn(d),f,m)}class of extends nf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof of}}function Zb(n,e,t){return new rf({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Yg extends nf{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Zb(this,e,!0),r=this.vc.map((a=>fl(a,t))),s=new Qa(r);return new qN(e.path,s)}isEqual(e){return e instanceof Yg&&Ni(this.vc,e.vc)}}function eD(n,e,t,r){const s=n.Dc(1,e,t);Xg("Data must be an object, but it was:",s,r);const a=[],u=xn.empty();zs(r,((f,m)=>{const y=Jg(e,f,t);m=tt(m);const E=s.gc(y);if(m instanceof of)a.push(y);else{const T=fl(m,E);T!=null&&(a.push(y),u.set(y,T))}}));const d=new $n(a);return new tS(u,d,s.fieldTransforms)}function tD(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Hm(e,r,t)],f=[s];if(a.length%2!=0)throw new he(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Hm(e,a[T])),f.push(a[T+1]);const m=[],y=xn.empty();for(let T=d.length-1;T>=0;--T)if(!oS(m,d[T])){const P=d[T];let M=f[T];M=tt(M);const L=u.gc(P);if(M instanceof of)m.push(P);else{const F=fl(M,L);F!=null&&(m.push(P),y.set(P,F))}}const E=new $n(m);return new tS(y,E,u.fieldTransforms)}function nD(n,e,t,r=!1){return fl(t,n.Dc(r?4:3,e))}function fl(n,e){if(sS(n=tt(n)))return Xg("Unsupported field value:",e,n),iS(n,e);if(n instanceof nf)return(function(r,s){if(!nS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=fl(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $N(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=pt.fromDate(r);return{timestampValue:dd(s.serializer,a)}}if(r instanceof pt){const a=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dd(s.serializer,a)}}if(r instanceof ri)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ir)return{bytesValue:w0(s.serializer,r._byteString)};if(r instanceof kt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Lg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ii)return(function(u,d){return{mapValue:{fields:{[QI]:{stringValue:YI},[ad]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return bg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${zd(r)}`)})(n,e)}function iS(n,e){const t={};return $I(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(n,((r,s)=>{const a=fl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function sS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof ri||n instanceof ir||n instanceof kt||n instanceof nf||n instanceof ii)}function Xg(n,e,t){if(!sS(t)||!BI(t)){const r=zd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Hm(n,e,t){if((e=tt(e))instanceof tf)return e._internalPath;if(typeof e=="string")return Jg(n,e);throw gd("Field path arguments must be of type string or ",n,!1,void 0,t)}const rD=new RegExp("[~\\*/\\[\\]]");function Jg(n,e,t){if(e.search(rD)>=0)throw gd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new tf(...e.split("."))._internalPath}catch{throw gd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new he(Q.INVALID_ARGUMENT,d+n+f)}function oS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(af("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iD extends aS{data(){return super.data()}}function af(n,e){return typeof e=="string"?Jg(n,e):e instanceof tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zg{}class e_ extends Zg{}function Ja(n,e,...t){let r=[];e instanceof Zg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof t_)).length,d=a.filter((f=>f instanceof lf)).length;if(u>1||u>0&&d>0)throw new he(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class lf extends e_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new lf(e,t,r)}_apply(e){const t=this._parse(e);return cS(e._query,t),new Fi(e.firestore,e.converter,Om(e._query,t))}_parse(e){const t=sf(e.firestore);return(function(a,u,d,f,m,y,E){let T;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new he(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Fw(E,y);const M=[];for(const L of E)M.push(Vw(f,a,L));T={arrayValue:{values:M}}}else T=Vw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Fw(E,y),T=nD(d,u,E,y==="in"||y==="not-in");return Lt.create(m,y,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uS(n,e,t){const r=e,s=af("where",n);return lf._create(s,r,t)}class t_ extends Zg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new t_(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Dr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)cS(u,f),u=Om(u,f)})(e._query,t),new Fi(e.firestore,e.converter,Om(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class n_ extends e_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new n_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new he(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new he(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vu(a,u)})(e._query,this._field,this._direction);return new Fi(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new hl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Uu(n,e="asc"){const t=e,r=af("orderBy",n);return n_._create(r,t)}class r_ extends e_{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new r_(e,t,r)}_apply(e){return new Fi(e.firestore,e.converter,ud(e._query,this._limit,this._limitType))}}function ju(n){return uN("limit",n),r_._create("limit",n,"F")}function Vw(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new he(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!i0(e)&&t.indexOf("/")!==-1)throw new he(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ut.fromString(t));if(!Se.isDocumentKey(r))throw new he(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ZE(n,new Se(r))}if(t instanceof kt)return ZE(n,t._key);throw new he(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(t)}.`)}function Fw(n,e){if(!Array.isArray(n)||n.length===0)throw new he(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cS(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new he(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sD{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ke(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return zs(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ad].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>Rt(u.doubleValue)));return new ii(a)}convertGeoPoint(e){return new ri(Rt(e.latitude),Rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Hd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ou(e));default:return null}}convertTimestamp(e){const t=bs(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ut.fromString(e);et(A0(r),9688,{name:e});const s=new Lu(r.get(1),r.get(3)),a=new Se(r.popFirst(5));return s.isEqual(t)||Oi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class So extends aS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(af("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=So._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}So._jsonSchemaVersion="firestore/documentSnapshot/1.0",So._jsonSchema={type:Mt("string",So._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class Wh extends So{data(e={}){return super.data(e)}}class Co{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Wh(this._firestore,this._userDataWriter,r.key,r,new fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Wh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Wh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:oD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ke(61501,{type:n})}}Co._jsonSchemaVersion="firestore/querySnapshot/1.0",Co._jsonSchema={type:Mt("string",Co._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class i_ extends sD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,t)}}function aD(n){n=Pr(n,Fi);const e=Pr(n.firestore,xo),t=Qg(e),r=new i_(e);return lS(n._query),qb(t,n._query).then((s=>new Co(e,r,n,s)))}function lD(n,e,t){n=Pr(n,kt);const r=Pr(n.firestore,xo),s=hS(n.converter,e);return s_(r,[rS(sf(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Nr.none())])}function qm(n,e,t,...r){n=Pr(n,kt);const s=Pr(n.firestore,xo),a=sf(s);let u;return u=typeof(e=tt(e))=="string"||e instanceof tf?tD(a,"updateDoc",n._key,e,t,r):eD(a,"updateDoc",n._key,e),s_(s,[u.toMutation(n._key,Nr.exists(!0))])}function uD(n,e){const t=Pr(n.firestore,xo),r=Tu(n),s=hS(n.converter,e);return s_(t,[rS(sf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Nr.exists(!1))]).then((()=>r))}function Bu(n,...e){var t,r,s;n=tt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Mw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Mw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof kt)m=Pr(n.firestore,xo),y=xg(n._key.path),f={next:E=>{e[u]&&e[u](cD(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=Pr(n,Fi);m=Pr(E.firestore,xo),y=E._query;const T=new i_(m);f={next:P=>{e[u]&&e[u](new Co(m,T,E,P))},error:e[u+1],complete:e[u+2]},lS(n._query)}return(function(T,P,M,L){const F=new X0(L),ae=new z0(P,F,M);return T.asyncQueue.enqueueAndForget((async()=>j0(await Wm(T),ae))),()=>{F.Ou(),T.asyncQueue.enqueueAndForget((async()=>B0(await Wm(T),ae)))}})(Qg(m),y,d,f)}function s_(n,e){return(function(r,s){const a=new Is;return r.asyncQueue.enqueueAndForget((async()=>Ob(await Hb(r),s,a))),a.promise})(Qg(n),e)}function cD(n,e,t){const r=t.docs.get(e._key),s=new i_(n);return new So(n,s,e._key,r,new fu(t.hasPendingWrites,t.fromCache),e.converter)}function hD(...n){return new Yg("arrayUnion",n)}(function(e,t=!0){(function(s){ll=s})(js),Ps(new xi("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new xo(new tN(r.getProvider("auth-internal")),new iN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new he(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lu(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),ar(UE,jE,e),ar(UE,jE,"esm2017")})();var Uw={};const jw="@firebase/database",Bw="1.0.20";/**
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
 */let dS="";function dD(n){dS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Yt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return li(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fD(e)}}catch{}return new pD},To=fS("localStorage"),mD=fS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Md("@firebase/database"),gD=(function(){let n=1;return function(){return n++}})(),pS=function(n){const e=NA(n),t=new RA;t.update(e);const r=t.digest();return cg.encodeByteArray(r)},sc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sc.apply(null,r):typeof r=="object"?e+=Yt(r):e+=r,e+=" "}return e};let Iu=null,zw=!0;const _D=function(n,e){le(!0,"Can't turn on custom loggers persistently."),ja.logLevel=Be.VERBOSE,Iu=ja.log.bind(ja)},rn=function(...n){if(zw===!0&&(zw=!1,Iu===null&&mD.get("logging_enabled")===!0&&_D()),Iu){const e=sc.apply(null,n);Iu(e)}},oc=function(n){return function(...e){rn(n,...e)}},Gm=function(...n){const e="FIREBASE INTERNAL ERROR: "+sc(...n);ja.error(e)},Mi=function(...n){const e=`FIREBASE FATAL ERROR: ${sc(...n)}`;throw ja.error(e),new Error(e)},On=function(...n){const e="FIREBASE WARNING: "+sc(...n);ja.warn(e)},yD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&On("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},vD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Za="[MIN_NAME]",bo="[MAX_NAME]",jo=function(n,e){if(n===e)return 0;if(n===Za||e===bo)return-1;if(e===Za||n===bo)return 1;{const t=$w(n),r=$w(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},ED=function(n,e){return n===e?0:n<e?-1:1},nu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Yt(e))},o_=function(n){if(typeof n!="object"||n===null)return Yt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Yt(e[r]),t+=":",t+=o_(n[e[r]]);return t+="}",t},mS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function gn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gS=function(n){le(!uf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},wD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ID(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const SD=new RegExp("^-?(0*)\\d{1,10}$"),CD=-2147483648,RD=2147483647,$w=function(n){if(SD.test(n)){const e=Number(n);if(e>=CD&&e<=RD)return e}return null},pl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw On("Exception was thrown by user callback.",t),e},Math.floor(0))}},AD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Su=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class kD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,zn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){On(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',On(e)}}class Hh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="5",_S="v",yS="s",vS="r",ES="f",wS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TS="ls",IS="p",Km="ac",SS="websocket",CS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=To.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&To.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ND(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function AS(n,e,t){le(typeof e=="string","typeof type must == string"),le(typeof t=="object","typeof params must == object");let r;if(e===SS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===CS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ND(n)&&(t.ns=n.namespace);const s=[];return gn(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.counters_={}}incrementCounter(e,t=1){li(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={},um={};function l_(n){const e=n.toString();return lm[e]||(lm[e]=new xD),lm[e]}function bD(n,e){const t=n.toString();return um[t]||(um[t]=e()),um[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&pl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="start",OD="close",LD="pLPCommand",MD="pRTLPCB",kS="id",PS="pw",NS="ser",VD="cb",FD="seg",UD="ts",jD="d",BD="dframe",xS=1870,bS=30,zD=xS-bS,$D=25e3,WD=3e4;class La{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oc(e),this.stats_=l_(t),this.urlFn=f=>(this.appCheckToken&&(f[Km]=this.appCheckToken),AS(t,CS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new DD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WD)),vD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new u_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ww)this.id=d,this.password=f;else if(u===OD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ww]="t",r[NS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[VD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_S]=a_,this.transportSessionId&&(r[yS]=this.transportSessionId),this.lastSessionId&&(r[TS]=this.lastSessionId),this.applicationId&&(r[IS]=this.applicationId),this.appCheckToken&&(r[Km]=this.appCheckToken),typeof location<"u"&&location.hostname&&wS.test(location.hostname)&&(r[vS]=ES);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){La.forceAllow_=!0}static forceDisallow(){La.forceDisallow_=!0}static isAvailable(){return La.forceAllow_?!0:!La.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wD()&&!TD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Yt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=UT(t),s=mS(r,zD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[BD]="t",r[kS]=e,r[PS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Yt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class u_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gD(),window[LD+this.uniqueCallbackIdentifier]=e,window[MD+this.uniqueCallbackIdentifier]=t,this.myIFrame=u_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){rn("frame writing exception"),d.stack&&rn(d.stack),rn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kS]=this.myID,e[PS]=this.myPW,e[NS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bS+r.length<=xS;){const u=this.pendingSegs.shift();r=r+"&"+FD+s+"="+u.seg+"&"+UD+s+"="+u.ts+"&"+jD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor($D)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=16384,qD=45e3;let _d=null;typeof MozWebSocket<"u"?_d=MozWebSocket:typeof WebSocket<"u"&&(_d=WebSocket);class Cr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oc(this.connId),this.stats_=l_(t),this.connURL=Cr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[_S]=a_,typeof location<"u"&&location.hostname&&wS.test(location.hostname)&&(u[vS]=ES),t&&(u[yS]=t),r&&(u[TS]=r),s&&(u[Km]=s),a&&(u[IS]=a),AS(e,SS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,To.set("previous_websocket_failure",!0);try{let r;_A(),this.mySock=new _d(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_d!==null&&!Cr.forceDisallow_}static previouslyFailed(){return To.isInMemoryStorage||To.get("previous_websocket_failure")===!0}markConnectionHealthy(){To.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Pu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Yt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=mS(t,HD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cr.responsesRequiredToBeHealthy=2;Cr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{static get ALL_TRANSPORTS(){return[La,Cr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Cr&&Cr.isAvailable();let r=t&&!Cr.previouslyFailed();if(e.webSocketOnly&&(t||On("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Cr];else{const s=this.transports_=[];for(const a of zu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);zu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=6e4,KD=5e3,QD=10*1024,YD=100*1024,cm="t",Hw="d",XD="s",qw="r",JD="e",Gw="o",Kw="a",Qw="n",Yw="p",ZD="h";class eO{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oc("c:"+this.id+":"),this.transportManager_=new zu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Su(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cm in e){const t=e[cm];t===Kw?this.upgradeIfSecondaryHealthy_():t===qw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nu("t",e),r=nu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nu(cm,e);if(Hw in e){const r=e[Hw];if(t===ZD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Qw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===XD?this.onConnectionShutdown_(r):t===qw?this.onReset_(r):t===JD?Gm("Server Error: "+r):t===Gw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),a_!==r&&On("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Su(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Su(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(To.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){le(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends OS{static getInstance(){return new yd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=32,Jw=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Je(){return new it("")}function Me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fs(n){return n.pieces_.length-n.pieceNum_}function ot(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function c_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function tO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $u(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function LS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function At(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof it)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new it(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function bn(n,e){const t=Me(n),r=Me(e);if(t===null)return e;if(t===r)return bn(ot(n),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function nO(n,e){const t=$u(n,0),r=$u(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=jo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function h_(n,e){if(Fs(n)!==Fs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function sr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Fs(n)>Fs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class rO{constructor(e,t){this.errorPrefix_=t,this.parts_=$u(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ld(this.parts_[r]);MS(this)}}function iO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ld(e),MS(n)}function sO(n){const e=n.parts_.pop();n.byteLength_-=Ld(e),n.parts_.length>0&&(n.byteLength_-=1)}function MS(n){if(n.byteLength_>Jw)throw new Error(n.errorPrefix_+"has a key path longer than "+Jw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Xw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xw+") or object contains a cycle "+Eo(n))}function Eo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends OS{static getInstance(){return new d_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1e3,oO=300*1e3,Zw=30*1e3,aO=1.3,lO=3e4,uO="server_kill",eT=3;class Pi extends DS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=Pi.nextPersistentConnectionId_++,this.log_=oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ru,this.maxReconnectDelay_=oO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");d_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Yt(a)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Ci,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;Pi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&li(e,"w")){const r=$a(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();On(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=SA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Yt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gm("Unrecognized action received from server: "+Yt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lO&&(this.reconnectDelay_=ru),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Pi.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){le(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new eO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,P=>{On(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(uO)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&On(E),f())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>o_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new it(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=eT&&(this.reconnectDelay_=Zw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=eT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+dS.replace(/\./g,"-")]=1,fg()?e["framework.cordova"]=1:WT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yd.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}Pi.nextPersistentConnectionId_=0;Pi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new je(Za,e),s=new je(Za,t);return this.compare(r,s)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;class VS extends cf{static get __EMPTY_NODE(){return xh}static set __EMPTY_NODE(e){xh=e}compare(e,t){return jo(e.name,t.name)}isDefinedOn(e){throw il("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(bo,xh)}makePost(e,t){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,xh)}toString(){return".key"}}const Ba=new VS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Qt.RED,this.left=s??Dn.EMPTY_NODE,this.right=a??Dn.EMPTY_NODE}copy(e,t,r,s,a){return new Qt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Dn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qt.RED=!0;Qt.BLACK=!1;class cO{copy(e,t,r,s,a){return this}insert(e,t,r){return new Qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dn{constructor(e,t=Dn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Dn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Dn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bh(this.root_,null,this.comparator_,!0,e)}}Dn.EMPTY_NODE=new cO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(n,e){return jo(n.name,e.name)}function f_(n,e){return jo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qm;function dO(n){Qm=n}const FS=function(n){return typeof n=="number"?"number:"+gS(n):"string:"+n},US=function(n){if(n.isLeafNode()){const e=n.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&li(e,".sv"),"Priority must be a string or number.")}else le(n===Qm||n.isEmpty(),"priority of unexpected type.");le(n===Qm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tT;class Gt{static set __childrenNodeConstructor(e){tT=e}static get __childrenNodeConstructor(){return tT}constructor(e,t=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),US(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Me(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Me(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(le(r!==".priority"||Fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+FS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gS(this.value_):e+=this.value_,this.lazyHash_=pS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Gt.VALUE_TYPE_ORDER.indexOf(t),a=Gt.VALUE_TYPE_ORDER.indexOf(r);return le(s>=0,"Unknown leaf type: "+t),le(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jS,BS;function fO(n){jS=n}function pO(n){BS=n}class mO extends cf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?jo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(bo,new Gt("[PRIORITY-POST]",BS))}makePost(e,t){const r=jS(e);return new je(t,new Gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const vt=new mO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=Math.log(2);class _O{constructor(e){const t=a=>parseInt(Math.log(a)/gO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,T;if(y===0)return null;if(y===1)return E=n[f],T=t?t(E):E,new Qt(T,E.node,Qt.BLACK,null,null);{const P=parseInt(y/2,10)+f,M=s(f,P),L=s(P+1,m);return E=n[P],T=t?t(E):E,new Qt(T,E.node,Qt.BLACK,M,L)}},a=function(f){let m=null,y=null,E=n.length;const T=function(M,L){const F=E-M,ae=E;E-=M;const K=s(F+1,ae),Z=n[F],j=t?t(Z):Z;P(new Qt(j,Z.node,L,null,K))},P=function(M){m?(m.left=M,m=M):(y=M,m=M)};for(let M=0;M<f.count;++M){const L=f.nextBitIsOne(),F=Math.pow(2,f.count-(M+1));L?T(F,Qt.BLACK):(T(F,Qt.BLACK),T(F,Qt.RED))}return y},u=new _O(n.length),d=a(u);return new Dn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;const ka={};class ki{static get Default(){return le(ka&&vt,"ChildrenNode.ts has not been loaded"),hm=hm||new ki({".priority":ka},{".priority":vt}),hm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$a(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dn?t:null}hasIndex(e){return li(this.indexSet_,e.toString())}addIndex(e,t){le(e!==Ba,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(je.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=vd(r,e.getCompare()):d=ka;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new ki(y,m)}addToIndexes(e,t){const r=Xh(this.indexes_,(s,a)=>{const u=$a(this.indexSet_,a);if(le(u,"Missing index implementation for "+a),s===ka)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(je.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),vd(d,u.getCompare())}else return ka;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new je(e.name,d))),f.insert(e,e.node)}});return new ki(r,this.indexSet_)}removeFromIndexes(e,t){const r=Xh(this.indexes_,s=>{if(s===ka)return s;{const a=t.get(e.name);return a?s.remove(new je(e.name,a)):s}});return new ki(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;class Pe{static get EMPTY_NODE(){return iu||(iu=new Pe(new Dn(f_),null,ki.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&US(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||iu}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?iu:t}}getChild(e){const t=Me(e);return t===null?this:this.getImmediateChild(t).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new je(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?iu:this.priorityNode_;return new Pe(s,u,a)}}updateChild(e,t){const r=Me(e);if(r===null)return t;{le(Me(e)!==".priority"||Fs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ot(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(vt,(u,d)=>{t[u]=d.val(e),r++,a&&Pe.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+FS(this.getPriority().val())+":"),this.forEachChild(vt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":pS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new je(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,je.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ac?-1:0}withIndex(e){if(e===Ba||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ba||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(vt),s=t.getIterator(vt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ba?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yO extends Pe{constructor(){super(new Dn(f_),Pe.EMPTY_NODE,ki.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const ac=new yO;Object.defineProperties(je,{MIN:{value:new je(Za,Pe.EMPTY_NODE)},MAX:{value:new je(bo,ac)}});VS.__EMPTY_NODE=Pe.EMPTY_NODE;Gt.__childrenNodeConstructor=Pe;dO(ac);pO(ac);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=!0;function Ot(n,e=null){if(n===null)return Pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Gt(t,Ot(e))}if(!(n instanceof Array)&&vO){const t=[];let r=!1;if(gn(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Ot(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new je(u,f)))}}),t.length===0)return Pe.EMPTY_NODE;const a=vd(t,hO,u=>u.name,f_);if(r){const u=vd(t,vt.getCompare());return new Pe(a,Ot(e),new ki({".priority":u},{".priority":vt}))}else return new Pe(a,Ot(e),ki.Default)}else{let t=Pe.EMPTY_NODE;return gn(n,(r,s)=>{if(li(n,r)&&r.substring(0,1)!=="."){const a=Ot(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Ot(e))}}fO(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO extends cf{constructor(e){super(),this.indexPath_=e,le(!Ue(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?jo(e.name,t.name):a}makePost(e,t){const r=Ot(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,r);return new je(t,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,ac);return new je(bo,e)}toString(){return $u(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO extends cf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?jo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const r=Ot(e);return new je(t,r)}toString(){return".value"}}const TO=new wO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(n){return{type:"value",snapshotNode:n}}function el(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Wu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Hu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function IO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){le(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Wu(t,d)):le(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(el(t,r)):u.trackChildChange(Hu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(vt,(s,a)=>{t.hasChild(s)||r.trackChildChange(Wu(s,a))}),t.isLeafNode()||t.forEachChild(vt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Hu(s,a,u))}else r.trackChildChange(el(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Pe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.indexedFilter_=new p_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qu.getStartPost_(e),this.endPost_=qu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new je(t,r))||(r=Pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Pe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Pe.EMPTY_NODE);const a=this;return t.forEachChild(vt,(u,d)=>{a.matches(new je(u,d))||(s=s.updateImmediateChild(u,Pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new qu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new je(t,r))||(r=Pe.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Pe.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Pe.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,P)=>E(P,T)}else u=this.index_.getCompare();const d=e;le(d.numChildren()===this.limit_,"");const f=new je(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const P=T==null?1:u(T,f);if(y&&!r.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(Hu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Wu(t,E));const L=d.updateImmediateChild(t,Pe.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(el(T.name,T.node)),L.updateImmediateChild(T.name,T.node)):L}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Wu(m.name,m.node)),a.trackChildChange(el(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Pe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Za}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new m_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CO(n){return n.loadsAllData()?new p_(n.getIndex()):n.hasLimit()?new SO(n):new qu(n)}function nT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===vt?t="$priority":n.index_===TO?t="$value":n.index_===Ba?t="$key":(le(n.index_ instanceof EO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Yt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Yt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Yt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Yt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Yt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function rT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==vt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends DS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=oc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Ed.getListenId_(e,r),d={};this.listens_[u]=d;const f=nT(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),$a(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=Ed.getListenId_(e,t);delete this.listens_[r]}get(e){const t=nT(e._queryParams),r=e._path.toString(),s=new Ci;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Pu(d.responseText)}catch{On("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&On("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){return{value:null,children:new Map}}function ml(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Me(e);n.children.has(r)||n.children.set(r,wd());const s=n.children.get(r);e=ot(e),ml(s,e,t)}}function Ym(n,e){if(Ue(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(vt,(r,s)=>{ml(n,new it(r),s)}),Ym(n,e)}}else if(n.children.size>0){const t=Me(e);return e=ot(e),n.children.has(t)&&Ym(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Xm(n,e,t){n.value!==null?t(e,n.value):AO(n,(r,s)=>{const a=new it(e.toString()+"/"+r);Xm(s,a,t)})}function AO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&gn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=10*1e3,PO=30*1e3,NO=300*1e3;class xO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new kO(e);const r=iT+(PO-iT)*Math.random();Su(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;gn(e,(s,a)=>{a>0&&li(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Su(this.reportStats_.bind(this),Math.floor(Math.random()*2*NO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ar||(Ar={}));function $S(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function g_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function __(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Ar.ACK_USER_WRITE,this.source=$S()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new Td(Je(),t,this.revert)}}else return le(Me(this.path)===e,"operationForChild called for unrelated child."),new Td(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.source=e,this.path=t,this.type=Ar.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new Gu(this.source,Je()):new Gu(this.source,ot(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Ar.OVERWRITE}operationForChild(e){return Ue(this.path)?new Do(this.source,Je(),this.snap.getImmediateChild(e)):new Do(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Ar.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Do(this.source,Je(),t.value):new Ku(this.source,Je(),t)}else return le(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ku(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=Me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function DO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(IO(u.childName,u.snapshotNode))}),su(n,s,"child_removed",e,r,t),su(n,s,"child_added",e,r,t),su(n,s,"child_moved",a,r,t),su(n,s,"child_changed",e,r,t),su(n,s,"value",e,r,t),s}function su(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>LO(n,d,f)),u.forEach(d=>{const f=OO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function OO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function LO(n,e,t){if(e.childName==null||t.childName==null)throw il("Should only compare child_ events.");const r=new je(e.childName,e.snapshotNode),s=new je(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e){return{eventCache:n,serverCache:e}}function Cu(n,e,t,r){return hf(new Oo(e,t,r),n.serverCache)}function WS(n,e,t,r){return hf(n.eventCache,new Oo(e,t,r))}function Jm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Lo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dm;const MO=()=>(dm||(dm=new Dn(ED)),dm);class ft{static fromObject(e){let t=new ft(null);return gn(e,(r,s)=>{t=t.set(new it(r),s)}),t}constructor(e,t=MO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Je(),value:this.value};if(Ue(e))return null;{const r=Me(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(ot(e),t);return a!=null?{path:At(new it(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Me(e),r=this.children.get(t);return r!==null?r.subtree(ot(e)):new ft(null)}}set(e,t){if(Ue(e))return new ft(t,this.children);{const r=Me(e),a=(this.children.get(r)||new ft(null)).set(ot(e),t),u=this.children.insert(r,a);return new ft(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const t=Me(e),r=this.children.get(t);if(r){const s=r.remove(ot(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new ft(null):new ft(this.value,a)}else return this}}get(e){if(Ue(e))return this.value;{const t=Me(e),r=this.children.get(t);return r?r.get(ot(e)):null}}setTree(e,t){if(Ue(e))return t;{const r=Me(e),a=(this.children.get(r)||new ft(null)).setTree(ot(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new ft(this.value,u)}}fold(e){return this.fold_(Je(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(At(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Je(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ue(e))return null;{const a=Me(e),u=this.children.get(a);return u?u.findOnPath_(ot(e),At(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Je(),t)}foreachOnPath_(e,t,r){if(Ue(e))return this;{this.value&&r(t,this.value);const s=Me(e),a=this.children.get(s);return a?a.foreachOnPath_(ot(e),At(t,s),r):new ft(null)}}foreach(e){this.foreach_(Je(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(At(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.writeTree_=e}static empty(){return new xr(new ft(null))}}function Ru(n,e,t){if(Ue(e))return new xr(new ft(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=bn(s,e);return a=a.updateChild(u,t),new xr(n.writeTree_.set(s,a))}else{const s=new ft(t),a=n.writeTree_.setTree(e,s);return new xr(a)}}}function sT(n,e,t){let r=n;return gn(t,(s,a)=>{r=Ru(r,At(e,s),a)}),r}function oT(n,e){if(Ue(e))return xr.empty();{const t=n.writeTree_.setTree(e,new ft(null));return new xr(t)}}function Zm(n,e){return Bo(n,e)!=null}function Bo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(bn(t.path,e)):null}function aT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(vt,(r,s)=>{e.push(new je(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new je(r,s.value))}),e}function Rs(n,e){if(Ue(e))return n;{const t=Bo(n,e);return t!=null?new xr(new ft(t)):new xr(n.writeTree_.subtree(e))}}function eg(n){return n.writeTree_.isEmpty()}function tl(n,e){return HS(Je(),n.writeTree_,e)}function HS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(le(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=HS(At(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(At(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n,e){return QS(e,n)}function VO(n,e,t,r,s){le(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Ru(n.visibleWrites,e,t)),n.lastWriteId=r}function FO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function UO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);le(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&jO(d,r.path)?s=!1:sr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return BO(n),!0;if(r.snap)n.visibleWrites=oT(n.visibleWrites,r.path);else{const d=r.children;gn(d,f=>{n.visibleWrites=oT(n.visibleWrites,At(r.path,f))})}return!0}else return!1}function jO(n,e){if(n.snap)return sr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&sr(At(n.path,t),e))return!0;return!1}function BO(n){n.visibleWrites=qS(n.allWrites,zO,Je()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function zO(n){return n.visible}function qS(n,e,t){let r=xr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)sr(t,u)?(d=bn(t,u),r=Ru(r,d,a.snap)):sr(u,t)&&(d=bn(u,t),r=Ru(r,Je(),a.snap.getChild(d)));else if(a.children){if(sr(t,u))d=bn(t,u),r=sT(r,d,a.children);else if(sr(u,t))if(d=bn(u,t),Ue(d))r=sT(r,Je(),a.children);else{const f=$a(a.children,Me(d));if(f){const m=f.getChild(ot(d));r=Ru(r,Je(),m)}}}else throw il("WriteRecord should have .snap or .children")}}return r}function GS(n,e,t,r,s){if(!r&&!s){const a=Bo(n.visibleWrites,e);if(a!=null)return a;{const u=Rs(n.visibleWrites,e);if(eg(u))return t;if(t==null&&!Zm(u,Je()))return null;{const d=t||Pe.EMPTY_NODE;return tl(u,d)}}}else{const a=Rs(n.visibleWrites,e);if(!s&&eg(a))return t;if(!s&&t==null&&!Zm(a,Je()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(sr(m.path,e)||sr(e,m.path))},d=qS(n.allWrites,u,e),f=t||Pe.EMPTY_NODE;return tl(d,f)}}}function $O(n,e,t){let r=Pe.EMPTY_NODE;const s=Bo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(vt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Rs(n.visibleWrites,e);return t.forEachChild(vt,(u,d)=>{const f=tl(Rs(a,new it(u)),d);r=r.updateImmediateChild(u,f)}),aT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Rs(n.visibleWrites,e);return aT(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function WO(n,e,t,r,s){le(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=At(e,t);if(Zm(n.visibleWrites,a))return null;{const u=Rs(n.visibleWrites,a);return eg(u)?s.getChild(t):tl(u,s.getChild(t))}}function HO(n,e,t,r){const s=At(e,t),a=Bo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Rs(n.visibleWrites,s);return tl(u,r.getNode().getImmediateChild(t))}else return null}function qO(n,e){return Bo(n.visibleWrites,e)}function GO(n,e,t,r,s,a,u){let d;const f=Rs(n.visibleWrites,e),m=Bo(f,Je());if(m!=null)d=m;else if(t!=null)d=tl(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let P=T.getNext();for(;P&&y.length<s;)E(P,r)!==0&&y.push(P),P=T.getNext();return y}else return[]}function KO(){return{visibleWrites:xr.empty(),allWrites:[],lastWriteId:-1}}function Id(n,e,t,r){return GS(n.writeTree,n.treePath,e,t,r)}function v_(n,e){return $O(n.writeTree,n.treePath,e)}function lT(n,e,t,r){return WO(n.writeTree,n.treePath,e,t,r)}function Sd(n,e){return qO(n.writeTree,At(n.treePath,e))}function QO(n,e,t,r,s,a){return GO(n.writeTree,n.treePath,e,t,r,s,a)}function E_(n,e,t){return HO(n.writeTree,n.treePath,e,t)}function KS(n,e){return QS(At(n.treePath,e),n.writeTree)}function QS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;le(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),le(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Hu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Wu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,el(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Hu(r,e.snapshotNode,s.oldSnap));else throw il("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const YS=new XO;class w_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Oo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return E_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lo(this.viewCache_),a=QO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(n){return{filter:n}}function ZO(n,e){le(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function e2(n,e,t,r,s){const a=new YO;let u,d;if(t.type===Ar.OVERWRITE){const m=t;m.source.fromUser?u=tg(n,e,m.path,m.snap,r,s,a):(le(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Ue(m.path),u=Cd(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===Ar.MERGE){const m=t;m.source.fromUser?u=n2(n,e,m.path,m.children,r,s,a):(le(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=ng(n,e,m.path,m.children,r,s,d,a))}else if(t.type===Ar.ACK_USER_WRITE){const m=t;m.revert?u=s2(n,e,m.path,r,s,a):u=r2(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Ar.LISTEN_COMPLETE)u=i2(n,e,t.path,r,a);else throw il("Unknown operation type: "+t.type);const f=a.getChanges();return t2(e,u,f),{viewCache:u,changes:f}}function t2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Jm(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(zS(Jm(e)))}}function XS(n,e,t,r,s,a){const u=e.eventCache;if(Sd(r,t)!=null)return e;{let d,f;if(Ue(t))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Lo(e),y=m instanceof Pe?m:Pe.EMPTY_NODE,E=v_(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=Id(r,Lo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Me(t);if(m===".priority"){le(Fs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=lT(r,t,y,f);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=ot(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=lT(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(y,T):E=u.getNode().getImmediateChild(m)}else E=E_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,s,a):d=u.getNode()}}return Cu(e,d,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function Cd(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const P=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),P,null)}else{const P=Me(t);if(!f.isCompleteForPath(t)&&Fs(t)>1)return e;const M=ot(t),F=f.getNode().getImmediateChild(P).updateChild(M,r);P===".priority"?m=y.updatePriority(f.getNode(),F):m=y.updateChild(f.getNode(),P,F,M,YS,null)}const E=WS(e,m,f.isFullyInitialized()||Ue(t),y.filtersNodes()),T=new w_(s,E,a);return XS(n,E,t,s,T,d)}function tg(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new w_(s,e,a);if(Ue(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Cu(e,m,!0,n.filter.filtersNodes());else{const E=Me(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Cu(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=ot(t),P=d.getNode().getImmediateChild(E);let M;if(Ue(T))M=r;else{const L=y.getCompleteChild(E);L!=null?c_(T)===".priority"&&L.getChild(LS(T)).isEmpty()?M=L:M=L.updateChild(T,r):M=Pe.EMPTY_NODE}if(P.equals(M))f=e;else{const L=n.filter.updateChild(d.getNode(),E,M,T,y,u);f=Cu(e,L,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function uT(n,e){return n.eventCache.isCompleteForChild(e)}function n2(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=At(t,f);uT(e,Me(y))&&(d=tg(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=At(t,f);uT(e,Me(y))||(d=tg(n,d,y,m,s,a,u))}),d}function cT(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ng(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Ue(t)?m=r:m=new ft(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(y.hasChild(E)){const P=e.serverCache.getNode().getImmediateChild(E),M=cT(n,P,T);f=Cd(n,f,new it(E),M,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const P=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!y.hasChild(E)&&!P){const M=e.serverCache.getNode().getImmediateChild(E),L=cT(n,M,T);f=Cd(n,f,new it(E),L,s,a,u,d)}}),f}function r2(n,e,t,r,s,a,u){if(Sd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Ue(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Cd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Ue(t)){let m=new ft(null);return f.getNode().forEachChild(Ba,(y,E)=>{m=m.set(new it(y),E)}),ng(n,e,t,m,s,a,d,u)}else return e}else{let m=new ft(null);return r.foreach((y,E)=>{const T=At(t,y);f.isCompleteForPath(T)&&(m=m.set(y,f.getNode().getChild(T)))}),ng(n,e,t,m,s,a,d,u)}}function i2(n,e,t,r,s){const a=e.serverCache,u=WS(e,a.getNode(),a.isFullyInitialized()||Ue(t),a.isFiltered());return XS(n,u,t,r,YS,s)}function s2(n,e,t,r,s,a){let u;if(Sd(r,t)!=null)return e;{const d=new w_(r,e,s),f=e.eventCache.getNode();let m;if(Ue(t)||Me(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Id(r,Lo(e));else{const E=e.serverCache.getNode();le(E instanceof Pe,"serverChildren would be complete if leaf node"),y=v_(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Me(t);let E=E_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,ot(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Pe.EMPTY_NODE,ot(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Id(r,Lo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Sd(r,Je())!=null,Cu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new p_(r.getIndex()),a=CO(r);this.processor_=JO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Pe.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Pe.EMPTY_NODE,d.getNode(),null),y=new Oo(f,u.isFullyInitialized(),s.filtersNodes()),E=new Oo(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=hf(E,y),this.eventGenerator_=new bO(this.query_)}get query(){return this.query_}}function a2(n){return n.viewCache_.serverCache.getNode()}function l2(n,e){const t=Lo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Me(e)).isEmpty())?t.getChild(e):null}function hT(n){return n.eventRegistrations_.length===0}function u2(n,e){n.eventRegistrations_.push(e)}function dT(n,e,t){const r=[];if(t){le(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function fT(n,e,t,r){e.type===Ar.MERGE&&e.source.queryId!==null&&(le(Lo(n.viewCache_),"We should always have a full cache before handling merges"),le(Jm(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=e2(n.processor_,s,e,t,r);return ZO(n.processor_,a.viewCache),le(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,JS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function c2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(vt,(a,u)=>{r.push(el(a,u))}),t.isFullyInitialized()&&r.push(zS(t.getNode())),JS(n,r,t.getNode(),e)}function JS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return DO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd;class h2{constructor(){this.views=new Map}}function d2(n){le(!Rd,"__referenceConstructor has already been defined"),Rd=n}function f2(){return le(Rd,"Reference.ts has not been loaded"),Rd}function p2(n){return n.views.size===0}function T_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return le(a!=null,"SyncTree gave us an op for an invalid query."),fT(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(fT(u,e,t,r));return a}}function m2(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Id(t,s?r:null),f=!1;d?f=!0:r instanceof Pe?(d=v_(t,r),f=!1):(d=Pe.EMPTY_NODE,f=!1);const m=hf(new Oo(d,f,!1),new Oo(r,s,!1));return new o2(e,m)}return u}function g2(n,e,t,r,s,a){const u=m2(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),u2(u,t),c2(u,t)}function _2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=Us(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(dT(m,t,r)),hT(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(dT(f,t,r)),hT(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!Us(n)&&a.push(new(f2())(e._repo,e._path)),{removed:a,events:u}}function ZS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function za(n,e){let t=null;for(const r of n.views.values())t=t||l2(r,e);return t}function eC(n,e){if(e._queryParams.loadsAllData())return df(n);{const r=e._queryIdentifier;return n.views.get(r)}}function tC(n,e){return eC(n,e)!=null}function Us(n){return df(n)!=null}function df(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;function y2(n){le(!Ad,"__referenceConstructor has already been defined"),Ad=n}function v2(){return le(Ad,"Reference.ts has not been loaded"),Ad}let E2=1;class pT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ft(null),this.pendingWriteTree_=KO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nC(n,e,t,r,s){return VO(n.pendingWriteTree_,e,t,r,s),s?lc(n,new Do($S(),e,t)):[]}function Io(n,e,t=!1){const r=FO(n.pendingWriteTree_,e);if(UO(n.pendingWriteTree_,e)){let a=new ft(null);return r.snap!=null?a=a.set(Je(),!0):gn(r.children,u=>{a=a.set(new it(u),!0)}),lc(n,new Td(r.path,a,t))}else return[]}function ff(n,e,t){return lc(n,new Do(g_(),e,t))}function w2(n,e,t){const r=ft.fromObject(t);return lc(n,new Ku(g_(),e,r))}function T2(n,e){return lc(n,new Gu(g_(),e))}function I2(n,e,t){const r=S_(n,t);if(r){const s=C_(r),a=s.path,u=s.queryId,d=bn(a,e),f=new Gu(__(u),d);return R_(n,a,f)}else return[]}function rg(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||tC(u,e))){const f=_2(u,e,t,r);p2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,P)=>Us(P));if(y&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const P=R2(T);for(let M=0;M<P.length;++M){const L=P[M],F=L.query,ae=sC(n,L);n.listenProvider_.startListening(Au(F),kd(n,F),ae.hashFn,ae.onComplete)}}}!E&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Au(e),null):m.forEach(T=>{const P=n.queryToTagMap.get(pf(T));n.listenProvider_.stopListening(Au(T),P)}))}A2(n,m)}return d}function S2(n,e,t,r){const s=S_(n,r);if(s!=null){const a=C_(s),u=a.path,d=a.queryId,f=bn(u,e),m=new Do(__(d),f,t);return R_(n,u,m)}else return[]}function C2(n,e,t,r){const s=S_(n,r);if(s){const a=C_(s),u=a.path,d=a.queryId,f=bn(u,e),m=ft.fromObject(t),y=new Ku(__(d),f,m);return R_(n,u,y)}else return[]}function mT(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,P)=>{const M=bn(T,s);a=a||za(P,M),u=u||Us(P)});let d=n.syncPointTree_.get(s);d?(u=u||Us(d),a=a||za(d,Je())):(d=new h2,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Pe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((P,M)=>{const L=za(M,Je());L&&(a=a.updateImmediateChild(P,L))}));const m=tC(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=pf(e);le(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const P=k2();n.queryToTagMap.set(T,P),n.tagToQueryMap.set(P,T)}const y=y_(n.pendingWriteTree_,s);let E=g2(d,e,t,y,a,f);if(!m&&!u&&!r){const T=eC(d,e);E=E.concat(P2(n,e,T))}return E}function I_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=bn(u,e),m=za(d,f);if(m)return m});return GS(s,e,a,t,!0)}function lc(n,e){return rC(e,n.syncPointTree_,null,y_(n.pendingWriteTree_,Je()))}function rC(n,e,t,r){if(Ue(n.path))return iC(n,e,t,r);{const s=e.get(Je());t==null&&s!=null&&(t=za(s,Je()));let a=[];const u=Me(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=KS(r,u);a=a.concat(rC(d,f,m,y))}return s&&(a=a.concat(T_(s,n,r,t))),a}}function iC(n,e,t,r){const s=e.get(Je());t==null&&s!=null&&(t=za(s,Je()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=KS(r,u),y=n.operationForChild(u);y&&(a=a.concat(iC(y,d,f,m)))}),s&&(a=a.concat(T_(s,n,r,t))),a}function sC(n,e){const t=e.query,r=kd(n,t);return{hashFn:()=>(a2(e)||Pe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?I2(n,t._path,r):T2(n,t._path);{const a=ID(s,t);return rg(n,t,null,a)}}}}function kd(n,e){const t=pf(e);return n.queryToTagMap.get(t)}function pf(n){return n._path.toString()+"$"+n._queryIdentifier}function S_(n,e){return n.tagToQueryMap.get(e)}function C_(n){const e=n.indexOf("$");return le(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function R_(n,e,t){const r=n.syncPointTree_.get(e);le(r,"Missing sync point for query tag that we're tracking");const s=y_(n.pendingWriteTree_,e);return T_(r,t,s,null)}function R2(n){return n.fold((e,t,r)=>{if(t&&Us(t))return[df(t)];{let s=[];return t&&(s=ZS(t)),gn(r,(a,u)=>{s=s.concat(u)}),s}})}function Au(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(v2())(n._repo,n._path):n}function A2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=pf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function k2(){return E2++}function P2(n,e,t){const r=e._path,s=kd(n,e),a=sC(n,t),u=n.listenProvider_.startListening(Au(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)le(!Us(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,E)=>{if(!Ue(m)&&y&&Us(y))return[df(y).query];{let T=[];return y&&(T=T.concat(ZS(y).map(P=>P.query))),gn(E,(P,M)=>{T=T.concat(M)}),T}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Au(y),kd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new A_(t)}node(){return this.node_}}class k_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=At(this.path_,e);return new k_(this.syncTree_,t)}node(){return I_(this.syncTree_,this.path_)}}const N2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gT=function(n,e,t){if(!n||typeof n!="object")return n;if(le(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return x2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return b2(n[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},x2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:le(!1,"Unexpected server value: "+n)}},b2=function(n,e,t){n.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&le(!1,"Unexpected increment value: "+r);const s=e.node();if(le(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},D2=function(n,e,t,r){return P_(e,new k_(t,n),r)},oC=function(n,e,t){return P_(n,new A_(e),t)};function P_(n,e,t){const r=n.getPriority().val(),s=gT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=gT(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Gt(d,Ot(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Gt(s))),u.forEachChild(vt,(d,f)=>{const m=P_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function x_(n,e){let t=e instanceof it?e:new it(e),r=n,s=Me(t);for(;s!==null;){const a=$a(r.node.children,s)||{children:{},childCount:0};r=new N_(s,r,a),t=ot(t),s=Me(t)}return r}function gl(n){return n.node.value}function aC(n,e){n.node.value=e,ig(n)}function lC(n){return n.node.childCount>0}function O2(n){return gl(n)===void 0&&!lC(n)}function mf(n,e){gn(n.node.children,(t,r)=>{e(new N_(t,n,r))})}function uC(n,e,t,r){t&&e(n),mf(n,s=>{uC(s,e,!0)})}function L2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function uc(n){return new it(n.parent===null?n.name:uc(n.parent)+"/"+n.name)}function ig(n){n.parent!==null&&M2(n.parent,n.name,n)}function M2(n,e,t){const r=O2(t),s=li(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,ig(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ig(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=/[\[\].#$\/\u0000-\u001F\u007F]/,F2=/[\[\].#$\u0000-\u001F\u007F]/,fm=10*1024*1024,b_=function(n){return typeof n=="string"&&n.length!==0&&!V2.test(n)},cC=function(n){return typeof n=="string"&&n.length!==0&&!F2.test(n)},U2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cC(n)},hC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!uf(n)||n&&typeof n=="object"&&li(n,".sv")},sg=function(n,e,t,r){gf(Wa(n,"value"),e,t)},gf=function(n,e,t){const r=t instanceof it?new rO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Eo(r));if(typeof e=="function")throw new Error(n+"contains a function "+Eo(r)+" with contents = "+e.toString());if(uf(e))throw new Error(n+"contains "+e.toString()+" "+Eo(r));if(typeof e=="string"&&e.length>fm/3&&Ld(e)>fm)throw new Error(n+"contains a string greater than "+fm+" utf8 bytes "+Eo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(gn(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!b_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Eo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iO(r,u),gf(n,d,r),sO(r)}),s&&a)throw new Error(n+' contains ".value" child '+Eo(r)+" in addition to actual children.")}},j2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=$u(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!b_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&sr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},B2=function(n,e,t,r){const s=Wa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];gn(e,(u,d)=>{const f=new it(u);if(gf(s,d,At(t,f)),c_(f)===".priority"&&!hC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),j2(s,a)},z2=function(n,e,t){if(uf(e))throw new Error(Wa(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!hC(e))throw new Error(Wa(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},dC=function(n,e,t,r){if(!cC(t))throw new Error(Wa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dC(n,e,t)},pu=function(n,e){if(Me(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},W2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!b_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!U2(t))throw new Error(Wa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function D_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!h_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function fC(n,e,t){D_(n,t),pC(n,r=>h_(r,e))}function Vi(n,e,t){D_(n,t),pC(n,r=>sr(r,e)||sr(e,r))}function pC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(q2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function q2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Iu&&rn("event: "+t.toString()),pl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="repo_interrupt",K2=25;class Q2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new H2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wd(),this.transactionQueueTree_=new N_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y2(n,e,t){if(n.stats_=l_(n.repoInfo_),n.forceRestClient_||AD())n.server_=new Ed(n.repoInfo_,(r,s,a,u)=>{_T(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>yT(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Yt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Pi(n.repoInfo_,e,(r,s,a,u)=>{_T(n,r,s,a,u)},r=>{yT(n,r)},r=>{J2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=bD(n.repoInfo_,()=>new xO(n.stats_,n.server_)),n.infoData_=new RO,n.infoSyncTree_=new pT({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=ff(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),L_(n,"connected",!1),n.serverSyncTree_=new pT({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);Vi(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function X2(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function O_(n){return N2({timestamp:X2(n)})}function _T(n,e,t,r,s){n.dataUpdateCount++;const a=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Xh(t,m=>Ot(m));u=C2(n.serverSyncTree_,a,f,s)}else{const f=Ot(t);u=S2(n.serverSyncTree_,a,f,s)}else if(r){const f=Xh(t,m=>Ot(m));u=w2(n.serverSyncTree_,a,f)}else{const f=Ot(t);u=ff(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=_f(n,a)),Vi(n.eventQueue_,d,u)}function yT(n,e){L_(n,"connected",e),e===!1&&eL(n)}function J2(n,e){gn(e,(t,r)=>{L_(n,t,r)})}function L_(n,e,t){const r=new it("/.info/"+e),s=Ot(t);n.infoData_.updateSnapshot(r,s);const a=ff(n.infoSyncTree_,r,s);Vi(n.eventQueue_,r,a)}function mC(n){return n.nextWriteId_++}function Z2(n,e,t,r,s){M_(n,"set",{path:e.toString(),value:t,priority:r});const a=O_(n),u=Ot(t,r),d=I_(n.serverSyncTree_,e),f=oC(u,d,a),m=mC(n),y=nC(n.serverSyncTree_,e,f,m,!0);D_(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(T,P)=>{const M=T==="ok";M||On("set at "+e+" failed: "+T);const L=Io(n.serverSyncTree_,m,!M);Vi(n.eventQueue_,e,L),nl(n,s,T,P)});const E=EC(n,e);_f(n,E),Vi(n.eventQueue_,E,[])}function eL(n){M_(n,"onDisconnectEvents");const e=O_(n),t=wd();Xm(n.onDisconnect_,Je(),(s,a)=>{const u=D2(s,a,n.serverSyncTree_,e);ml(t,s,u)});let r=[];Xm(t,Je(),(s,a)=>{r=r.concat(ff(n.serverSyncTree_,s,a));const u=EC(n,s);_f(n,u)}),n.onDisconnect_=wd(),Vi(n.eventQueue_,Je(),r)}function tL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Ym(n.onDisconnect_,e),nl(n,t,r,s)})}function vT(n,e,t,r){const s=Ot(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&ml(n.onDisconnect_,e,s),nl(n,r,a,u)})}function nL(n,e,t,r,s){const a=Ot(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&ml(n.onDisconnect_,e,a),nl(n,s,u,d)})}function rL(n,e,t,r){if(Yh(t)){rn("onDisconnect().update() called with empty data.  Don't do anything."),nl(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&gn(t,(u,d)=>{const f=Ot(d);ml(n.onDisconnect_,At(e,u),f)}),nl(n,r,s,a)})}function iL(n,e,t){let r;Me(e._path)===".info"?r=mT(n.infoSyncTree_,e,t):r=mT(n.serverSyncTree_,e,t),fC(n.eventQueue_,e._path,r)}function ET(n,e,t){let r;Me(e._path)===".info"?r=rg(n.infoSyncTree_,e,t):r=rg(n.serverSyncTree_,e,t),fC(n.eventQueue_,e._path,r)}function sL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(G2)}function M_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),rn(t,...e)}function nl(n,e,t,r){e&&pl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function gC(n,e,t){return I_(n.serverSyncTree_,e,t)||Pe.EMPTY_NODE}function V_(n,e=n.transactionQueueTree_){if(e||yf(n,e),gl(e)){const t=yC(n,e);le(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&oL(n,uc(e),t)}else lC(e)&&mf(e,t=>{V_(n,t)})}function oL(n,e,t){const r=t.map(m=>m.currentWriteId),s=gC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];le(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=bn(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{M_(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(Io(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();yf(n,x_(n.transactionQueueTree_,e)),V_(n,n.transactionQueueTree_),Vi(n.eventQueue_,e,y);for(let T=0;T<E.length;T++)pl(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{On("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}_f(n,e)}},u)}function _f(n,e){const t=_C(n,e),r=uc(t),s=yC(n,t);return aL(n,s,r),r}function aL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=bn(t,f.path);let y=!1,E;if(le(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(Io(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=K2)y=!0,E="maxretry",s=s.concat(Io(n.serverSyncTree_,f.currentWriteId,!0));else{const T=gC(n,f.path,u);f.currentInputSnapshot=T;const P=e[d].update(T.val());if(P!==void 0){gf("transaction failed: Data returned ",P,f.path);let M=Ot(P);typeof P=="object"&&P!=null&&li(P,".priority")||(M=M.updatePriority(T.getPriority()));const F=f.currentWriteId,ae=O_(n),K=oC(M,T,ae);f.currentOutputSnapshotRaw=M,f.currentOutputSnapshotResolved=K,f.currentWriteId=mC(n),u.splice(u.indexOf(F),1),s=s.concat(nC(n.serverSyncTree_,f.path,K,f.currentWriteId,f.applyLocally)),s=s.concat(Io(n.serverSyncTree_,F,!0))}else y=!0,E="nodata",s=s.concat(Io(n.serverSyncTree_,f.currentWriteId,!0))}Vi(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}yf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)pl(r[d]);V_(n,n.transactionQueueTree_)}function _C(n,e){let t,r=n.transactionQueueTree_;for(t=Me(e);t!==null&&gl(r)===void 0;)r=x_(r,t),e=ot(e),t=Me(e);return r}function yC(n,e){const t=[];return vC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function vC(n,e,t){const r=gl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);mf(e,s=>{vC(n,s,t)})}function yf(n,e){const t=gl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,aC(e,t.length>0?t:void 0)}mf(e,r=>{yf(n,r)})}function EC(n,e){const t=uc(_C(n,e)),r=x_(n.transactionQueueTree_,e);return L2(r,s=>{pm(n,s)}),pm(n,r),uC(r,s=>{pm(n,s)}),t}function pm(n,e){const t=gl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(le(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(le(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Io(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?aC(e,void 0):t.length=a+1,Vi(n.eventQueue_,uc(e),s);for(let u=0;u<r.length;u++)pl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function uL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):On(`Invalid query segment '${t}' in query '${n}'`)}return e}const wT=function(n,e){const t=cL(n),r=t.namespace;t.domain==="firebase.com"&&Mi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Mi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||yD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new RS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new it(t.pathString)}},cL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=lL(n.substring(y,E)));const T=uL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const M=e.indexOf(".");r=e.substring(0,M).toLowerCase(),t=e.substring(M+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Yt(this.snapshot.exportVal())}}class dL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return le(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class pL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ci;return tL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pu("OnDisconnect.remove",this._path);const e=new Ci;return vT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pu("OnDisconnect.set",this._path),sg("OnDisconnect.set",e,this._path);const t=new Ci;return vT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){pu("OnDisconnect.setWithPriority",this._path),sg("OnDisconnect.setWithPriority",e,this._path),z2("OnDisconnect.setWithPriority",t);const r=new Ci;return nL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){pu("OnDisconnect.update",this._path),B2("OnDisconnect.update",e,this._path);const t=new Ci;return rL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ue(this._path)?null:c_(this._path)}get ref(){return new Ws(this._repo,this._path)}get _queryIdentifier(){const e=rT(this._queryParams),t=o_(e);return t==="{}"?"default":t}get _queryObject(){return rT(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof F_))return!1;const t=this._repo===e._repo,r=h_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+tO(this._path)}}class Ws extends F_{constructor(e,t){super(e,t,new m_,!1)}get parent(){const e=LS(this._path);return e===null?null:new Ws(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new it(e),r=og(this.ref,e);return new Pd(this._node.getChild(t),r,vt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Pd(s,og(this.ref,r),vt)))}hasChild(e){const t=new it(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function TT(n,e){return n=tt(n),n._checkNotDeleted("ref"),e!==void 0?og(n._root,e):n._root}function og(n,e){return n=tt(n),Me(n._path)===null?$2("child","path",e):dC("child","path",e),new Ws(n._repo,At(n._path,e))}function mL(n){return n=tt(n),new pL(n._repo,n._path)}function IT(n,e){n=tt(n),pu("set",n._path),sg("set",e,n._path);const t=new Ci;return Z2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class U_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new hL("value",this,new Pd(e.snapshotNode,new Ws(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new dL(this,e,t):null}matches(e){return e instanceof U_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function gL(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,E)=>{ET(n._repo,n,d),f(y,E)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new fL(t,a||void 0),d=new U_(u);return iL(n._repo,n,d),()=>ET(n._repo,n,d)}function _L(n,e,t,r){return gL(n,"value",e,t,r)}d2(Ws);y2(Ws);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL="FIREBASE_DATABASE_EMULATOR_HOST",ag={};let vL=!1;function EL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=oi(a);n.repoInfo_=new RS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function wL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Mi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=wT(a,s),d=u.repoInfo,f;typeof process<"u"&&Uw&&(f=Uw[yL]),f?(a=`http://${f}?ns=${d.namespace}`,u=wT(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new PD(n.name,n.options,e);W2("Invalid Firebase Database URL",u),Ue(u.path)||Mi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=IL(d,n,m,new kD(n,t));return new SL(y,n)}function TL(n,e){const t=ag[e];(!t||t[n.key]!==n)&&Mi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sL(n),delete t[n.key]}function IL(n,e,t,r){let s=ag[e.name];s||(s={},ag[e.name]=s);let a=s[n.toURLString()];return a&&Mi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new Q2(n,vL,t,r),s[n.toURLString()]=a,a}class SL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ws(this._repo,Je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mi("Cannot call "+e+" on a deleted database.")}}function CL(n=Vd(),e){const t=Yu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=hg("database");r&&RL(t,...r)}return t}function RL(n,e,t,r={}){n=tt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ni(r,a.repoInfo_.emulatorOptions))return;Mi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Mi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Hh(Hh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:dg(r.mockUserToken,n.app.options.projectId);u=new Hh(d)}oi(e)&&(Dd(e),Od("Database",!0)),EL(a,s,r,u)}/**
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
 */function AL(n){dD(js),Ps(new xi("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return wL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),ar(jw,Bw,n),ar(jw,Bw,"esm2017")}Pi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};AL();var kL="firebase",PL="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(kL,PL,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="firebasestorage.googleapis.com",TC="storageBucket",NL=120*1e3,xL=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ai{constructor(e,t,r=0){super(mm(e),`Firebase Storage: ${t} (${mm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wt||(wt={}));function mm(n){return"storage/"+n}function j_(){const n="An unknown error occurred, please check the error payload for server response.";return new Tt(wt.UNKNOWN,n)}function bL(n){return new Tt(wt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function DL(n){return new Tt(wt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Tt(wt.UNAUTHENTICATED,n)}function LL(){return new Tt(wt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ML(n){return new Tt(wt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function VL(){return new Tt(wt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FL(){return new Tt(wt.CANCELED,"User canceled the upload/download.")}function UL(n){return new Tt(wt.INVALID_URL,"Invalid URL '"+n+"'.")}function jL(n){return new Tt(wt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function BL(){return new Tt(wt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+TC+"' property when initializing the app?")}function zL(){return new Tt(wt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $L(){return new Tt(wt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WL(n){return new Tt(wt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lg(n){return new Tt(wt.INVALID_ARGUMENT,n)}function IC(){return new Tt(wt.APP_DELETED,"The Firebase app was deleted.")}function HL(n){return new Tt(wt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ku(n,e){return new Tt(wt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ou(n){throw new Tt(wt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Wn.makeFromUrl(e,t)}catch{return new Wn(e,"")}if(r.path==="")return r;throw jL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(j){j.path_=decodeURIComponent(j.path)}const y="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",P=new RegExp(`^https?://${E}/${y}/b/${s}/o${T}`,"i"),M={bucket:1,path:3},L=t===wC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",ae=new RegExp(`^https?://${L}/${s}/${F}`,"i"),Z=[{regex:d,indices:f,postModify:a},{regex:P,indices:M,postModify:m},{regex:ae,indices:{bucket:1,path:2},postModify:m}];for(let j=0;j<Z.length;j++){const Te=Z[j],me=Te.regex.exec(e);if(me){const b=me[Te.indices.bucket];let C=me[Te.indices.path];C||(C=""),r=new Wn(b,C),Te.postModify(r);break}}if(r==null)throw UL(e);return r}}class qL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function y(...F){m||(m=!0,e.apply(null,F))}function E(F){s=setTimeout(()=>{s=null,n(P,f())},F)}function T(){a&&clearTimeout(a)}function P(F,...ae){if(m){T();return}if(F){T(),y.call(null,F,...ae);return}if(f()||u){T(),y.call(null,F,...ae);return}r<64&&(r*=2);let Z;d===1?(d=2,Z=0):Z=(r+Math.random())*1e3,E(Z)}let M=!1;function L(F){M||(M=!0,T(),!m&&(s!==null?(F||(d=2),clearTimeout(s),E(0)):F||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,L(!0)},t),L}function KL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(n){return n!==void 0}function YL(n){return typeof n=="object"&&!Array.isArray(n)}function B_(n){return typeof n=="string"||n instanceof String}function ST(n){return z_()&&n instanceof Blob}function z_(){return typeof Blob<"u"}function CT(n,e,t,r){if(r<e)throw lg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw lg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function SC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ro;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ro||(Ro={}));/**
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
 */function XL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,t,r,s,a,u,d,f,m,y,E,T=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,L)=>{this.resolve_=M,this.reject_=L,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Dh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Ro.NO_ERROR,f=a.getStatus();if(!d||XL(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Ro.ABORT;r(!1,new Dh(!1,null,y));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Dh(m,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());QL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=j_();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?IC():FL();u(f)}else{const f=VL();u(f)}};this.canceled_?t(!1,new Dh(!1,null,!0)):this.backoffId_=GL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ZL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function eM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function nM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function rM(n,e,t,r,s,a,u=!0,d=!1){const f=SC(n.urlParams),m=n.url+f,y=Object.assign({},n.headers);return tM(y,e),ZL(y,t),eM(y,a),nM(y,r),new JL(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sM(...n){const e=iM();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(z_())return new Blob(n);throw new Tt(wt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oM(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function aM(n){if(typeof atob>"u")throw WL("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gm{constructor(e,t){this.data=e,this.contentType=t||null}}function lM(n,e){switch(n){case Jr.RAW:return new gm(CC(e));case Jr.BASE64:case Jr.BASE64URL:return new gm(RC(n,e));case Jr.DATA_URL:return new gm(cM(e),hM(e))}throw j_()}function CC(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uM(n){let e;try{e=decodeURIComponent(n)}catch{throw ku(Jr.DATA_URL,"Malformed data URL.")}return CC(e)}function RC(n,e){switch(n){case Jr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw ku(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Jr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw ku(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=aM(e)}catch(s){throw s.message.includes("polyfill")?s:ku(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class AC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ku(Jr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=dM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cM(n){const e=new AC(n);return e.base64?RC(Jr.BASE64,e.rest):uM(e.rest)}function hM(n){return new AC(n).contentType}function dM(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){let r=0,s="";ST(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ST(this.data_)){const r=this.data_,s=oM(r,e,t);return s===null?null:new _s(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new _s(r,!0)}}static getBlob(...e){if(z_()){const t=e.map(r=>r instanceof _s?r.data_:r);return new _s(sM.apply(null,t))}else{const t=e.map(u=>B_(u)?lM(Jr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new _s(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(n){let e;try{e=JSON.parse(n)}catch{return null}return YL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pM(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function PC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(n,e){return e}class wn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||mM}}let Oh=null;function gM(n){return!B_(n)||n.length<2?n:PC(n)}function NC(){if(Oh)return Oh;const n=[];n.push(new wn("bucket")),n.push(new wn("generation")),n.push(new wn("metageneration")),n.push(new wn("name","fullPath",!0));function e(a,u){return gM(u)}const t=new wn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new wn("size");return s.xform=r,n.push(s),n.push(new wn("timeCreated")),n.push(new wn("updated")),n.push(new wn("md5Hash",null,!0)),n.push(new wn("cacheControl",null,!0)),n.push(new wn("contentDisposition",null,!0)),n.push(new wn("contentEncoding",null,!0)),n.push(new wn("contentLanguage",null,!0)),n.push(new wn("contentType",null,!0)),n.push(new wn("metadata","customMetadata",!0)),Oh=n,Oh}function _M(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new Wn(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function yM(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return _M(r,n),r}function xC(n,e,t){const r=kC(e);return r===null?null:yM(n,r,t)}function vM(n,e,t,r){const s=kC(e);if(s===null||!B_(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const y=n.bucket,E=n.fullPath,T="/b/"+u(y)+"/o/"+u(E),P=$_(T,t,r),M=SC({alt:"media",token:m});return P+M})[0]}function EM(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class bC{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(n){if(!n)throw j_()}function wM(n,e){function t(r,s){const a=xC(n,s,e);return DC(a!==null),a}return t}function TM(n,e){function t(r,s){const a=xC(n,s,e);return DC(a!==null),vM(a,s,n.host,n._protocol)}return t}function OC(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=LL():s=OL():t.getStatus()===402?s=DL(n.bucket):t.getStatus()===403?s=ML(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function IM(n){const e=OC(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=bL(n.path)),a.serverResponse=s.serverResponse,a}return t}function SM(n,e,t){const r=e.fullServerUrl(),s=$_(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new bC(s,a,TM(n,t),u);return d.errorHandler=IM(e),d}function CM(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function RM(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=CM(null,e)),r}function AM(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let Z="";for(let j=0;j<2;j++)Z=Z+Math.random().toString().slice(2);return Z}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=RM(e,r,s),y=EM(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",P=_s.getBlob(E,r,T);if(P===null)throw zL();const M={name:m.fullPath},L=$_(a,n.host,n._protocol),F="POST",ae=n.maxUploadRetryTime,K=new bC(L,F,wM(n,t),ae);return K.urlParams=M,K.headers=u,K.body=P.uploadData(),K.errorHandler=OC(e),K}class kM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ro.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ro.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ro.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw ou("cannot .send() more than once");if(oi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ou("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ou("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ou("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ou("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PM extends kM{initXhr(){this.xhr_.responseType="text"}}function LC(){return new PM}/**
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
 */class Mo{constructor(e,t){this._service=e,t instanceof Wn?this._location=t:this._location=Wn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mo(e,t)}get root(){const e=new Wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return PC(this._location.path)}get storage(){return this._service}get parent(){const e=fM(this._location.path);if(e===null)return null;const t=new Wn(this._location.bucket,e);return new Mo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw HL(e)}}function NM(n,e,t){n._throwIfRoot("uploadBytes");const r=AM(n.storage,n._location,NC(),new _s(e,!0),t);return n.storage.makeRequestWithTokens(r,LC).then(s=>({metadata:s,ref:n}))}function xM(n){n._throwIfRoot("getDownloadURL");const e=SM(n.storage,n._location,NC());return n.storage.makeRequestWithTokens(e,LC).then(t=>{if(t===null)throw $L();return t})}function bM(n,e){const t=pM(n._location.path,e),r=new Wn(n._location.bucket,t);return new Mo(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(n){return/^[A-Za-z]+:\/\//.test(n)}function OM(n,e){return new Mo(n,e)}function MC(n,e){if(n instanceof W_){const t=n;if(t._bucket==null)throw BL();const r=new Mo(t,t._bucket);return e!=null?MC(r,e):r}else return e!==void 0?bM(n,e):n}function LM(n,e){if(e&&DM(e)){if(n instanceof W_)return OM(n,e);throw lg("To use ref(service, url), the first argument must be a Storage instance.")}else return MC(n,e)}function RT(n,e){const t=e==null?void 0:e[TC];return t==null?null:Wn.makeFromBucketSpec(t,n)}function MM(n,e,t,r={}){n.host=`${e}:${t}`;const s=oi(e);s&&(Dd(`https://${n.host}/b`),Od("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:dg(a,n.app.options.projectId))}class W_{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=wC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NL,this._maxUploadRetryTime=xL,this._requests=new Set,s!=null?this._bucket=Wn.makeFromBucketSpec(s,this._host):this._bucket=RT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wn.makeFromBucketSpec(this._url,e):this._bucket=RT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){CT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){CT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mo(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new qL(IC());{const u=rM(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const AT="@firebase/storage",kT="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="storage";function VM(n,e,t){return n=tt(n),NM(n,e,t)}function FM(n){return n=tt(n),xM(n)}function UM(n,e){return n=tt(n),LM(n,e)}function jM(n=Vd(),e){n=tt(n);const r=Yu(n,VC).getImmediate({identifier:e}),s=hg("storage");return s&&BM(r,...s),r}function BM(n,e,t,r={}){MM(n,e,t,r)}function zM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new W_(t,r,s,e,js)}function $M(){Ps(new xi(VC,zM,"PUBLIC").setMultipleInstances(!0)),ar(AT,kT,""),ar(AT,kT,"esm2017")}$M();const WM={apiKey:"AIzaSyDUViybhB6xmC7Q9qQBJtFgYxH6OlpJbxU",authDomain:"ai-company-a51da.firebaseapp.com",projectId:"ai-company-a51da",storageBucket:"ai-company-a51da.firebasestorage.app",messagingSenderId:"1002740196014",appId:"1:1002740196014:web:0e801a199056864591833f",databaseURL:"https://ai-company-a51da-default-rtdb.asia-southeast1.firebasedatabase.app"},HM="",vf=KT(WM),rl=XP(vf);V1(rl,TI).catch(()=>{});const kr=Kb(vf),PT=CL(vf),qM=jM(vf),As=[{id:"chung",name:"Chung",role:"manager",roleVi:"Quản lý",color:"#2481cc"},{id:"hung",name:"Hùng",role:"staff",roleVi:"Nhân viên",color:"#d84a35"},{id:"tuan",name:"Tuấn",role:"staff",roleVi:"Nhân viên",color:"#3d9b4f"},{id:"linh",name:"Linh",role:"staff",roleVi:"Nhân viên",color:"#8e44ad"},{id:"muse",name:"Muse",role:"ai",roleVi:"AI điều phối",color:"#c04b9b"}],Xr=n=>(As.find(e=>e.id===n)||{name:n}).name,ks=n=>(As.find(e=>e.id===n)||{}).color||"#2481cc",au={waiting_acceptance:"Chờ nhận",in_progress:"Đang làm",waiting_review:"Chờ duyệt",completed:"Hoàn thành"},_m=["waiting_acceptance","in_progress","waiting_review","completed"],FC={urgent:"Khẩn cấp",high:"Cao",normal:"Bình thường",low:"Thấp"};function NT(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function UC(n,e){return e.trim()?NT(n).includes(NT(e)):!0}function Ao(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})}function Nd(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function jC(n){if(!n)return"";const e=new Date(typeof n=="number"?n:Date.parse(n));if(Number.isNaN(e.getTime()))return"";const t=e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return e.toDateString()===new Date().toDateString()?t:`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")} ${t}`}function GM(n){if(!n||!n.id||!n.name)throw new Error("Chưa xác định người gửi — đăng nhập lại rồi thử lại.");return n}async function ds(n,{method:e="GET",body:t,token:r}={}){const s=r||(rl.currentUser?await rl.currentUser.getIdToken():"");let a;try{a=await fetch(`${HM}${n}`,{method:e,headers:{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}},body:t!==void 0?JSON.stringify(t):void 0})}catch{throw new Error("Không kết nối được backend (enteesee-api.vnhairmarket.com) — backend chưa deploy, tính năng này tạm chưa dùng được.")}const u=await a.json().catch(()=>({}));if(!a.ok)throw new Error(u.error||`HTTP ${a.status}`);return u}function xd(n,e="dữ liệu"){const t=String(n&&n.message||"");return/401|unauthenticated|permission|hết hạn/i.test(t)&&/401/.test(t)?"Phiên đăng nhập đã hết hạn — đăng nhập lại.":/^HTTP 404|HTTP 404/.test(t)?`Không tải được ${e} — thử tải lại trang.`:/HTTP (4\d\d|5\d\d)/.test(t)?`Không tải được ${e} — thử lại sau. Nếu vẫn lỗi, báo quản lý.`:/không kết nối được backend|backend chưa deploy/i.test(t)?"Máy chủ chưa sẵn sàng — tính năng này tạm chưa dùng được.":/failed to fetch|load failed|networkerror|network request failed/i.test(t)?"Không có mạng — kiểm tra mạng rồi thử lại.":/chưa xác định người gửi/i.test(t)?t:t||`Không tải được ${e} — thử lại sau.`}const or={sendMessage:async({content:n,threadId:e=null,attachments:t=[],clientDocId:r=null},s)=>{const a=GM(s),u=(n||"").trim();if(!u)throw new Error("Nội dung trống.");try{const m=await ds("/api/messages",{method:"POST",body:{content:u,roomId:"general",threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[]}});return{id:m.message&&m.message.id}}catch(m){console.error("Gửi qua backend thất bại, fallback ghi trực tiếp Firestore:",m)}const d={roomId:"general",senderId:a.id,senderName:a.name,senderType:"human",content:u,mentions:[],threadId:e||null,replyToMessageId:e||null,attachments:Array.isArray(t)?t:[],linkPreview:null,createdAt:new Date().toISOString(),seenBy:[a.id],pinned:!1};return typeof r=="string"&&r.length>0?(await lD(Tu(Vs(kr,"messages"),r),d),{id:r}):{id:(await uD(Vs(kr,"messages"),d)).id}},pinMessage:(n,e)=>qm(Tu(kr,"messages",n),{pinned:!!e}),markSeen:(n,e)=>e?qm(Tu(kr,"messages",n),{seenBy:hD(e)}):Promise.resolve(),listTasks:(n="")=>ds(`/api/tasks${n}`),createTask:n=>ds("/api/tasks",{method:"POST",body:n}),setTaskStatus:(n,e,t)=>ds(`/api/tasks/${n}/status`,{method:"PATCH",body:{status:e,reason:t}}),registerDevice:(n,e)=>ds("/api/devices",{method:"POST",body:{token:n,platform:e}}),listJobs:()=>ds("/api/jobs"),listUsers:()=>ds("/api/users"),setTelegramChatId:(n,e)=>ds(`/api/users/${n}`,{method:"PATCH",body:{telegramChatId:e}})},H_="enteesee-theme",xT={light:"#eef1f5",dark:"#0b0f14"};function mu(){try{const n=localStorage.getItem(H_);return n==="dark"||n==="light"||n==="system"?n:null}catch{return null}}function BC(){try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function qh(n){return n==="dark"||n==="light"?n:BC()}function Gh(n){document.documentElement.dataset.theme=n;const e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",xT[n]||xT.light)}function KM(){const n=mu()||"system",e=qh(n);return Gh(e),e}function QM(n){try{localStorage.setItem(H_,n)}catch{}}function YM(){const[n,e]=J.useState(""),[t,r]=J.useState(""),[s,a]=J.useState(""),[u,d]=J.useState(!1);async function f(m){m.preventDefault(),a(""),d(!0);try{await M1(rl,n.trim(),t)}catch(y){y.code==="auth/invalid-credential"?a("Email hoặc mật khẩu chưa đúng."):y.code==="auth/network-request-failed"?a("Không có mạng — kiểm tra mạng rồi thử lại."):y.code==="auth/too-many-requests"?a("Thử quá nhiều lần — đợi một lát rồi thử lại."):a("Đăng nhập chưa được — thử lại sau. Nếu vẫn lỗi, báo quản lý."),console.error("Login failed:",y)}finally{d(!1)}}return I.jsx("div",{className:"login-page",children:I.jsxs("div",{className:"login-card",children:[I.jsx("div",{className:"login-logo",children:"E"}),I.jsx("h1",{children:"Enteesee"}),I.jsx("p",{className:"login-sub",children:"Phòng chat giao việc"}),I.jsx("p",{className:"muted",children:"Đăng nhập bằng tài khoản nhân viên do quản lý cấp."}),s&&I.jsx("div",{className:"err",children:s}),I.jsxs("form",{onSubmit:f,children:[I.jsx("div",{style:{marginBottom:10},children:I.jsx("input",{type:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Email",autoComplete:"username",required:!0})}),I.jsx("div",{style:{marginBottom:12},children:I.jsx("input",{type:"password",value:t,onChange:m=>r(m.target.value),placeholder:"Mật khẩu",autoComplete:"current-password",required:!0})}),I.jsx("button",{className:"primary",type:"submit",disabled:u,style:{width:"100%"},children:u?"Đang đăng nhập…":"Đăng nhập"})]}),I.jsx("p",{className:"muted login-foot",children:"Chưa có tài khoản? Quản lý (Chung) tạo tài khoản trong Firebase Auth rồi báo lại cho bạn."})]})})}function bT(n){return String(n||"").split(/(@[A-Za-zÀ-ỹ]+)/g).map((t,r)=>t.startsWith("@")?I.jsx("b",{className:"mention",children:t},r):I.jsx("span",{children:t},r))}function XM(n){const e=String(n&&n.message||"");return/load failed|failed to fetch|networkerror|network request failed/i.test(e)?"Không gửi được tin nhắn — kiểm tra mạng rồi thử lại.":e||"Không gửi được tin nhắn — thử lại sau."}function DT({status:n}){return n==="sending"||n==="failed"?I.jsxs("svg",{className:`tick tick-sending${n==="failed"?" tick-failed":""}`,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":n==="failed"?"Gửi thất bại":"Đang gửi",children:[I.jsx("circle",{cx:"6",cy:"6",r:"4.6"}),I.jsx("path",{d:"M6 3.5V6l1.8 1.2"})]}):n==="read"?I.jsxs("svg",{className:"tick tick-read",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã đọc",children:[I.jsx("path",{d:"M1 6.5 4 9.5 10 2.5"}),I.jsx("path",{d:"M5.5 6.5 8.5 9.5 14.5 2.5"})]}):I.jsx("svg",{className:"tick",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-label":"Đã gửi",children:I.jsx("path",{d:"M1.5 6.5 4.5 9.5 10.5 2.5"})})}function JM(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`pending-${crypto.randomUUID()}`:`pending-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}const ZM=1e4,eV=15e3,tV=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(min-width: 768px)").matches?220:140,nV=220,rV=160,iV=32,sV=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;function oV({person:n}){const[e,t]=J.useState([]),[r,s]=J.useState([]),[a,u]=J.useState(""),[d,f]=J.useState(""),[m,y]=J.useState(""),[E,T]=J.useState(!1),[P,M]=J.useState(!1),[L,F]=J.useState(null),[ae,K]=J.useState(null),[Z,j]=J.useState(""),[Te,me]=J.useState(""),[b,C]=J.useState(!1),[A,x]=J.useState([]),[D,U]=J.useState(!1),[k,ye]=J.useState(null),$e=J.useRef(null),ne=J.useRef(null),ce=J.useRef(null),Y=J.useRef(new Map),se=J.useRef(new Map),ie=J.useRef(null),V=J.useRef([]),G=J.useRef(!1),[Ee,Oe]=J.useState(!0),[xe,Ve]=J.useState(0),We=J.useRef(!0),qe=J.useRef(!0),nt=J.useRef(null);J.useEffect(()=>Bu(Ja(Vs(kr,"messages"),Uu("createdAt","desc"),ju(200)),W=>t(W.docs.map(de=>({id:de.id,...de.data(),_pendingWrite:de.metadata.hasPendingWrites})).reverse()),()=>j("Không tải được lịch sử tin nhắn — kiểm tra mạng rồi mở lại phòng.")),[]),J.useEffect(()=>Bu(Ja(Vs(kr,"aiEvents"),Uu("createdAt","desc"),ju(200)),W=>s(W.docs.map(de=>({id:de.id,...de.data()})))),[]);const It=J.useMemo(()=>{const W=new Map;for(const de of r)de.messageId&&W.set(de.messageId,de);return W},[r]),an=J.useMemo(()=>new Set(e.filter(W=>!W._pendingWrite).map(W=>W.id)),[e]),Or=J.useMemo(()=>new Set(A.flatMap(W=>[W.docId,W.realId].filter(Boolean))),[A]),Xt=J.useMemo(()=>e.filter(W=>!W.threadId&&!(W._pendingWrite&&Or.has(W.id))),[e,Or]),lr=J.useMemo(()=>{const W=m.trim();return Xt.filter(de=>UC(`${de.content||""} ${de.senderName||""}`,W))},[Xt,m]),Lr=W=>e.filter(de=>de.threadId===W&&!(de._pendingWrite&&Or.has(de.id)));function ur(W){const de=Y.current.get(W);de&&(clearTimeout(de),Y.current.delete(W))}function Ui(W){ur(W),x(de=>de.filter(Ie=>Ie.tempId!==W))}J.useEffect(()=>(G.current=!1,()=>{G.current=!0;for(const W of Y.current.values())clearTimeout(W);Y.current.clear();for(const W of se.current.values())clearTimeout(W.timeoutId);se.current.clear()}),[]),J.useEffect(()=>{V.current=e,e.length!==0&&x(W=>{let de=!1;const Ie=[];for(const Xe of W)if(Xe.realId&&an.has(Xe.realId)||Xe.docId&&an.has(Xe.docId)){ur(Xe.tempId);const zt=se.current.get(Xe.tempId);zt&&(clearTimeout(zt.timeoutId),se.current.delete(Xe.tempId)),de=!0}else Ie.push(Xe);return de?Ie:W})},[e,an]);const Hs=J.useMemo(()=>A.filter(W=>!(W.realId&&an.has(W.realId)||W.docId&&an.has(W.docId))),[A,an]);function ji(){const W=ne.current;if(!W)return;const de=W.scrollHeight-W.scrollTop-W.clientHeight,Ie=We.current?de<=nV:de<=rV;We.current=Ie,Oe(Ie),Ie&&Ve(0)}function Hn(W=!0){const de=ne.current;de&&(de.scrollTo({top:de.scrollHeight,behavior:W?"smooth":"auto"}),Ve(0))}J.useEffect(()=>{const W=ne.current;if(!W||Xt.length===0)return;const de=Xt[Xt.length-1],Ie=nt.current;if(nt.current=de.id,qe.current){W.scrollTo({top:W.scrollHeight,behavior:"auto"}),qe.current=!1;return}if(de.id===Ie)return;const Xe=Ie?Xt.findIndex(Pt=>Pt.id===Ie):-1,zt=Xe>=0?Xt.slice(Xe+1):[de],Gn=zt.some(Pt=>Pt.senderId===n.id);if(We.current||Gn)W.scrollTo({top:W.scrollHeight,behavior:"smooth"});else{const Pt=zt.filter(ct=>ct.senderId!==n.id).length;Pt>0&&Ve(ct=>ct+Pt)}},[Xt,n.id]),J.useEffect(()=>{const W=ne.current;if(!W||typeof ResizeObserver>"u")return;let de=W.clientHeight;const Ie=new ResizeObserver(()=>{const Xe=W.clientHeight;Xe<de&&W.scrollHeight-W.scrollTop-de<=iV&&(W.scrollTop=W.scrollHeight),de=Xe});return Ie.observe(W),()=>Ie.disconnect()},[]),J.useEffect(()=>{e.slice(-5).forEach(de=>{de.id&&!(de.seenBy||[]).includes(n.id)&&or.markSeen(de.id,n.id).catch(()=>{})})},[e,n.id]);function qn(){const W=ce.current;if(!W)return;const de=tV();W.style.height="auto";const Ie=W.scrollHeight;W.style.height=`${Math.min(Ie,de)}px`,W.style.overflowY=Ie>de?"auto":"hidden"}J.useEffect(()=>{qn()},[a]);function qs(W){u(W);const de=W.match(/@([A-Za-zÀ-ỹ]*)$/);de?(f(de[1]),M(!0)):M(!1)}function Bi(W){u(de=>de.replace(/@[A-Za-zÀ-ỹ]*$/,`@${W.name} `)),M(!1),ce.current&&ce.current.focus()}async function Mr(W=null){const de=typeof W=="string";if(b)return;let Ie,Xe,zt;if(de){const ct=A.find(Nt=>Nt.tempId===W);if(!ct||ct.status!=="failed")return;Ie=ct.tempId,Xe=ct.content,zt=ct.threadId||null,ur(Ie),x(Nt=>Nt.map(Jt=>Jt.tempId===Ie?{...Jt,status:"sending",realId:null}:Jt))}else{if(Xe=a.trim(),!Xe)return;zt=L?L.id:null,Ie=JM();const ct={tempId:Ie,id:Ie,docId:Ie,realId:null,senderId:n.id,senderName:n.name,senderType:"human",content:Xe,threadId:zt,createdAt:new Date().toISOString(),seenBy:[n.id],status:"sending"};x(Nt=>[...Nt,ct]),u(""),F(null),requestAnimationFrame(()=>Hn())}const Gn=se.current.get(Ie);Gn&&clearTimeout(Gn.timeoutId),ie.current=Ie,C(!0),me("");const Pt={timeoutId:null};se.current.set(Ie,Pt),Pt.timeoutId=setTimeout(()=>{G.current||se.current.get(Ie)===Pt&&(x(ct=>ct.map(Nt=>Nt.tempId===Ie?{...Nt,status:"failed"}:Nt)),me("Không gửi được tin nhắn — kiểm tra mạng rồi thử lại."),ie.current===Ie&&C(!1))},eV);try{const ct=await or.sendMessage({content:Xe,threadId:zt,clientDocId:Ie},n);clearTimeout(Pt.timeoutId);const Nt=se.current.get(Ie);if(Nt&&(clearTimeout(Nt.timeoutId),se.current.delete(Ie)),G.current)return;const Jt=ct&&ct.id?ct.id:null;if(Jt&&V.current.some(Vr=>Vr.id===Jt&&!Vr._pendingWrite))Ui(Ie);else{x(ui=>ui.map(Fr=>Fr.tempId===Ie?{...Fr,status:"sent",realId:Jt}:Fr)),ur(Ie);const Vr=setTimeout(()=>{Ui(Ie)},ZM);Y.current.set(Ie,Vr)}requestAnimationFrame(()=>{qn(),ce.current&&ce.current.focus()})}catch(ct){if(clearTimeout(Pt.timeoutId),G.current||se.current.get(Ie)!==Pt)return;se.current.delete(Ie),ur(Ie),x(Nt=>Nt.map(Jt=>Jt.tempId===Ie?{...Jt,status:"failed"}:Jt)),me(XM(ct))}finally{!G.current&&ie.current===Ie&&(!se.current.has(Ie)||se.current.get(Ie)===Pt)&&C(!1)}}async function Gs(W){if(W){U(!0),me("");try{const de=`rooms/general/${Date.now()}_${W.name}`,Ie=await VM(UM(qM,de),W),Xe=await FM(Ie.ref);await or.sendMessage({content:`Đã gửi file: ${W.name}`,attachments:[{name:W.name,size:W.size,type:W.type,url:Xe,path:de}]},n)}catch(de){me(/load failed|failed to fetch|networkerror/i.test(String(de.message||""))?"Không gửi được file — kiểm tra mạng rồi thử lại.":`Gửi file thất bại: ${de.message}`)}finally{U(!1)}}}const Ze=k?As.find(W=>W.id===k):null;return I.jsxs("div",{className:"chat",children:[I.jsxs("div",{className:`search-wrap${E?" open":""}`,children:[I.jsx("button",{type:"button",className:"search-toggle","aria-label":"Tìm tin nhắn",onClick:()=>T(W=>!W),children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"11",cy:"11",r:"8"}),I.jsx("path",{d:"m21 21-4.3-4.3"})]})}),I.jsx("input",{className:"search",value:m,onChange:W=>y(W.target.value),placeholder:"Tìm tin nhắn…","aria-label":"Tìm tin nhắn"})]}),Z&&I.jsx("div",{className:"err-load",children:Z}),I.jsxs("div",{className:"chat-list-wrap",children:[I.jsxs("div",{className:"chat-list",ref:ne,onScroll:ji,children:[lr.length===0&&Hs.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có tin nhắn nào trong phòng."}),lr.filter(W=>W.pinned).map(W=>I.jsx(ym,{m:W,person:n,event:It.get(W.id),onReply:F,threadOpen:ae,setThreadOpen:K,threadReplies:Lr,pinned:!0,onAvatar:ye},`pin-${W.id}`)),lr.filter(W=>!W.pinned).map(W=>I.jsx(ym,{m:W,person:n,event:It.get(W.id),onReply:F,threadOpen:ae,setThreadOpen:K,threadReplies:Lr,onAvatar:ye},W.id)),Hs.map(W=>I.jsx(ym,{m:W,person:n,event:null,onReply:F,threadOpen:ae,setThreadOpen:K,threadReplies:Lr,onAvatar:ye,status:W.status,onRetry:W.status==="failed"?()=>Mr(W.tempId):void 0},W.tempId))]}),I.jsxs("button",{type:"button",className:`scroll-bottom-btn${Ee?"":" visible"}${xe>0?" has-new":""}`,"aria-label":xe>0?`Cuộn xuống — có ${xe>99?"hơn 99":xe} tin mới`:"Cuộn xuống tin mới nhất","aria-hidden":Ee,tabIndex:Ee?-1:0,onClick:()=>Hn(!0),children:[I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),xe>0&&I.jsxs("span",{className:"scroll-bottom-label",children:[xe>99?"99+":xe," tin mới"]})]})]}),k&&Ze&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>ye(null),children:I.jsxs("div",{className:"member-detail",onClick:W=>W.stopPropagation(),role:"dialog","aria-label":`Thông tin ${Ze.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ks(Ze.id),color:"#fff"},children:Ze.name.charAt(0)}),I.jsx("h3",{children:Ze.name}),I.jsxs("div",{className:"muted",children:[Ze.roleVi," · ID: ",Ze.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:Ze.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":"Thành viên phòng giao việc Enteesee."}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsxs("button",{type:"button",onClick:()=>{u(W=>`${W}@${Ze.name} `),ye(null),ce.current&&ce.current.focus()},children:["Nhắc @",Ze.name]}),I.jsx("button",{type:"button",onClick:()=>ye(null),children:"Đóng"})]})]})}),L&&I.jsxs("div",{className:"reply-bar",children:[I.jsxs("span",{className:"muted",children:["Đang trả lời ",L.senderName,": ",(L.content||"").slice(0,80)]}),I.jsx("button",{onClick:()=>F(null),children:"Hủy"})]}),P&&I.jsx("div",{className:"mention-list",children:As.filter(W=>W.name.toLowerCase().startsWith(d.toLowerCase())).map(W=>I.jsxs("button",{type:"button",onClick:()=>Bi(W),children:["@",W.name," — ",W.roleVi]},W.id))}),Te&&I.jsx("div",{className:"err",children:Te}),I.jsxs("div",{className:"composer",children:[I.jsxs("div",{className:"composer-box",children:[I.jsx("button",{type:"button",className:"attach-btn",onClick:()=>$e.current&&$e.current.click(),disabled:D,title:"Đính kèm file","aria-label":"Đính kèm file",children:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),I.jsx("textarea",{ref:ce,value:a,onChange:W=>qs(W.target.value),placeholder:"Nhắn tin…","aria-label":"Nhắn tin",rows:1,onKeyDown:W=>{W.key==="Enter"&&!W.shiftKey&&!W.nativeEvent.isComposing&&!sV()&&(W.preventDefault(),Mr())}})]}),I.jsx("input",{ref:$e,type:"file",style:{display:"none"},onChange:W=>{Gs(W.target.files[0]),W.target.value=""}}),I.jsx("button",{className:"send-btn",type:"button",onMouseDown:W=>W.preventDefault(),onClick:()=>Mr(),disabled:b||!a.trim(),title:"Gửi","aria-label":"Gửi",children:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),I.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),D&&I.jsx("div",{className:"composer-note",children:"Đang tải file lên…"})]})}function ym({m:n,person:e,event:t,onReply:r,threadOpen:s,setThreadOpen:a,threadReplies:u,pinned:d,onAvatar:f,status:m,onRetry:y}){const[E,T]=J.useState(!1),[P,M]=J.useState(null),L=J.useRef(null),F=J.useRef(null),ae=!!n.tempId,K=ae?[]:u(n.id),Z=n.senderId===e.id,j=t,Te=(n.senderName||Xr(n.senderId)||"?").charAt(0),me=ks(n.senderId),b=(n.seenBy||[]).filter(ye=>ye!==e.id),C=b.length>0,A=m||(C?"read":"sent"),x=A==="sent"||A==="read",D=j?`${j.museRepliedAt?`Muse đã phản hồi ${Ao(j.museRepliedAt)}`:"Muse đang phản hồi…"} · ${j.employeeAcknowledgedAt?`Nhân viên đã xác nhận ${Ao(j.employeeAcknowledgedAt)}`:"Chờ nhân viên xác nhận"}`:null;function U(ye){if(ye.stopPropagation(),P){M(null);return}const $e=L.current?L.current.getBoundingClientRect():null;if(!$e)return;const ne=Math.max(8,window.innerWidth-$e.right);M($e.top>=96?{bottom:window.innerHeight-$e.top+6,right:ne}:{top:$e.bottom+6,right:ne})}J.useEffect(()=>{if(!P)return;const ye=()=>M(null),$e=ce=>{F.current&&F.current.contains(ce.target)||L.current&&L.current.contains(ce.target)||ye()},ne=ce=>{ce.key==="Escape"&&ye()};return document.addEventListener("pointerdown",$e,!0),document.addEventListener("keydown",ne),window.addEventListener("scroll",ye,!0),window.addEventListener("resize",ye),()=>{document.removeEventListener("pointerdown",$e,!0),document.removeEventListener("keydown",ne),window.removeEventListener("scroll",ye,!0),window.removeEventListener("resize",ye)}},[P]);function k(ye){ae||ye.target.closest("button, a")||T($e=>!$e)}return I.jsxs("div",{className:`msg-row ${Z?"mine":""}`,children:[!Z&&I.jsx("button",{type:"button",className:"msg-avatar-btn","aria-label":`Xem thông tin ${n.senderName||Xr(n.senderId)}`,onClick:()=>f&&f(n.senderId),children:I.jsx("span",{className:"avatar",style:{backgroundColor:me,color:"#fff"},children:Te})}),I.jsxs("div",{className:`msg ${Z?"mine":""} ${n.senderType==="ai"?"ai":""} ${n.pinned||d?"pinned":""}${E?" show-actions":""}`,onClick:k,children:[!Z&&I.jsx("div",{className:"sender-name",style:{color:me},children:n.senderName||Xr(n.senderId)}),n.senderType==="ai"&&I.jsx("span",{className:"tag ai-replied",children:"Muse đã phản hồi"}),(n.pinned||d)&&I.jsx("span",{className:"tag status",children:"Đã ghim"}),I.jsxs("div",{className:"content",children:[bT(n.content),I.jsxs("span",{className:"msg-time",children:[Nd(n.createdAt),Z&&I.jsx("span",{className:"msg-time-wrap",children:x?I.jsxs(I.Fragment,{children:[I.jsx("button",{ref:L,type:"button",className:"tick-btn","aria-label":A==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái","aria-expanded":!!P,title:A==="read"?"Đã đọc — bấm để xem ai đã đọc":"Đã gửi — bấm để xem trạng thái",onClick:U,children:I.jsx(DT,{status:A})}),P&&I.jsx("span",{ref:F,className:"seen-popover",role:"status",style:P,onClick:ye=>ye.stopPropagation(),children:A==="read"?`Đã xem: ${b.map(Xr).join(", ")}`:"Chưa ai xem tin này."})]}):I.jsxs(I.Fragment,{children:[I.jsx(DT,{status:A}),A==="failed"&&y&&I.jsx("button",{type:"button",className:"retry-inline-btn",onClick:ye=>{ye.stopPropagation(),y()},children:"Thử lại"})]})})]})]}),n.linkPreview&&I.jsxs("a",{className:"preview",href:n.linkPreview.url,target:"_blank",rel:"noreferrer",style:{display:"block",textDecoration:"none",color:"inherit"},children:[n.linkPreview.image&&I.jsx("img",{src:n.linkPreview.image,alt:""}),I.jsx("b",{children:n.linkPreview.title||n.linkPreview.url}),n.linkPreview.description&&I.jsx("div",{className:"muted",children:n.linkPreview.description})]}),(n.attachments||[]).map((ye,$e)=>I.jsx("div",{children:(ye.type||"").startsWith("image/")?I.jsx("a",{href:ye.url,target:"_blank",rel:"noreferrer",children:I.jsx("img",{className:"attachment-img",src:ye.url,alt:ye.name})}):I.jsxs("span",{className:"attachment-file",children:[I.jsx("a",{href:ye.url,target:"_blank",rel:"noreferrer",children:ye.name})," ",I.jsxs("span",{className:"muted",children:["(",Math.round((ye.size||0)/1024)," KB)"]})]})},$e)),D&&I.jsx("div",{style:{marginTop:6},children:I.jsx("span",{className:"tag ai-replied",children:D})}),!ae&&I.jsxs("div",{className:"row",children:[I.jsx("button",{type:"button",onClick:()=>r(n),children:"Trả lời"}),K.length>0&&I.jsxs("button",{type:"button",onClick:()=>a(s===n.id?null:n.id),children:[s===n.id?"Ẩn":"Xem"," ",K.length," trả lời"]}),I.jsx("button",{type:"button",onClick:()=>or.pinMessage(n.id,!n.pinned).catch(()=>{}),children:n.pinned?"Bỏ ghim":"Ghim"})]}),s===n.id&&K.map(ye=>I.jsxs("div",{className:"msg thread-reply",children:[I.jsx("div",{className:"sender-name",style:{color:ks(ye.senderId)},children:ye.senderName||Xr(ye.senderId)}),I.jsxs("div",{className:"content",children:[bT(ye.content),I.jsx("span",{className:"msg-time",children:Nd(ye.createdAt)})]})]},ye.id))]})]})}const aV=I.jsx("svg",{className:"combo-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"6 9 12 15 18 9"})}),lV=I.jsx("svg",{className:"combo-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})});function uV({id:n,label:e,options:t,value:r,onChange:s}){const[a,u]=J.useState(!1),[d,f]=J.useState(-1),m=J.useRef(null),y=J.useRef({text:"",at:0}),E=t.find(L=>L.value===r)||t[0],T=`${n}-listbox`;J.useEffect(()=>{if(!a)return;const L=F=>{m.current&&!m.current.contains(F.target)&&u(!1)};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[a]);function P(L){const F=t[L];F&&(s(F.value),u(!1),f(-1))}function M(L){if(L.key==="ArrowDown"){if(L.preventDefault(),!a){u(!0),f(0);return}f(F=>Math.min(t.length-1,F+1))}else if(L.key==="ArrowUp"){if(L.preventDefault(),!a){u(!0),f(t.length-1);return}f(F=>Math.max(0,F-1))}else if(L.key==="Enter"||L.key===" ")L.preventDefault(),a&&d>=0?P(d):u(F=>!F);else if(L.key==="Escape")L.preventDefault(),u(!1),f(-1);else if(L.key==="Home")L.preventDefault(),u(!0),f(0);else if(L.key==="End")L.preventDefault(),u(!0),f(t.length-1);else if(L.key.length===1){const F=Date.now(),ae=y.current;ae.text=F-ae.at>800?L.key:ae.text+L.key,ae.at=F;const K=t.findIndex(Z=>Z.label.toLowerCase().startsWith(ae.text.toLowerCase()));K>=0&&(u(!0),f(K))}}return I.jsxs("div",{className:"combo",ref:m,children:[e&&I.jsx("span",{className:"combo-label",id:`${n}-label`,children:e}),I.jsxs("button",{type:"button",id:n,className:"combo-trigger","aria-haspopup":"listbox","aria-expanded":a,"aria-labelledby":e?`${n}-label ${n}`:void 0,"aria-activedescendant":a&&d>=0?`${n}-opt-${d}`:void 0,onClick:()=>{u(L=>!L),f(t.findIndex(L=>L.value===r))},onKeyDown:M,children:[I.jsx("span",{className:"combo-value",children:E?E.label:""}),aV]}),a&&I.jsx("div",{className:"combo-panel",role:"listbox",id:T,"aria-labelledby":e?`${n}-label`:void 0,children:t.map((L,F)=>I.jsxs("button",{type:"button",id:`${n}-opt-${F}`,role:"option","aria-selected":L.value===r,className:`combo-option${L.value===r?" selected":""}${d===F?" highlighted":""}`,onClick:()=>P(F),onMouseEnter:()=>f(F),children:[L.value===r?lV:I.jsx("span",{className:"combo-check placeholder","aria-hidden":"true"}),L.label]},L.value))})]})}const cV=["urgent","high","normal","low"];function hV({person:n}){const[e,t]=J.useState([]),[r,s]=J.useState("all"),[a,u]=J.useState(""),[d,f]=J.useState(!1),[m,y]=J.useState(""),[E,T]=J.useState(null),[P,M]=J.useState("");async function L(){try{const j=n.role==="manager"?"":`?assignee=${n.id}`,Te=await or.listTasks(j);t(Te.tasks||[]),y("")}catch(j){y(xd(j,"danh sách công việc"))}}J.useEffect(()=>{L();const j=setInterval(L,15e3);return()=>clearInterval(j)},[n.id,n.role]);const F=J.useMemo(()=>e.filter(j=>r!=="all"&&j.status!==r?!1:UC(`${j.title} ${j.description||""} ${(j.assignees||[]).map(Xr).join(" ")}`,a)),[e,r,a]);async function ae(j,Te,me){y("");try{await or.setTaskStatus(j.id,Te,me),await L()}catch(b){y(xd(b,"danh sách công việc"))}}const K=n.role==="manager",Z=_m.reduce((j,Te)=>({...j,[Te]:e.filter(me=>me.status===Te).length}),{});return I.jsxs("div",{children:[I.jsx("div",{className:"row",style:{marginBottom:10},children:_m.map(j=>I.jsxs("span",{className:"tag status",children:[au[j],": ",Z[j]||0]},j))}),I.jsx("input",{className:"search",value:a,onChange:j=>u(j.target.value),placeholder:"Tìm công việc…","aria-label":"Tìm công việc"}),I.jsxs("div",{className:"row",style:{marginBottom:10,alignItems:"flex-end"},children:[I.jsx("div",{style:{flex:1,minWidth:180},children:I.jsx(uV,{id:"task-status-filter",label:"Trạng thái",options:[{value:"all",label:"Tất cả trạng thái"},..._m.map(j=>({value:j,label:au[j]}))],value:r,onChange:s})}),K&&I.jsx("button",{className:"primary",onClick:()=>f(!d),children:"+ Giao việc"})]}),m&&I.jsxs("div",{className:"err",role:"alert",children:[m,I.jsx("button",{type:"button",className:"retry-btn",onClick:L,children:"Thử lại"})]}),d&&K&&I.jsx(dV,{onDone:()=>{f(!1),L()},onCancel:()=>f(!1)}),F.length===0&&!m&&I.jsx("div",{className:"empty",children:K?I.jsxs(I.Fragment,{children:[I.jsx("div",{children:"Chưa có công việc nào — bấm để giao việc đầu tiên."}),I.jsx("div",{style:{marginTop:12},children:I.jsx("button",{type:"button",onClick:()=>f(!0),children:"+ Giao việc mới"})})]}):"Chưa có dữ liệu — chưa có công việc nào."}),F.map(j=>{const Te=(j.assignees||[]).includes(n.id);return I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:j.title}),I.jsx("div",{className:"muted",children:j.description||""}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("span",{className:"tag status",children:au[j.status]}),I.jsxs("span",{className:"tag status",children:["Ưu tiên: ",FC[j.priority]||j.priority]}),I.jsxs("span",{className:"muted",children:["Người nhận: ",(j.assignees||[]).map(Xr).join(", ")]}),j.dueAt&&I.jsxs("span",{className:"muted",children:["Hạn: ",Ao(j.dueAt)]})]}),j.reviewNote&&I.jsxs("div",{className:"muted",style:{marginTop:6},children:["Yêu cầu sửa: ",j.reviewNote]}),I.jsxs("div",{className:"row",style:{marginTop:10},children:[j.status==="waiting_acceptance"&&Te&&I.jsx("button",{className:"primary",onClick:()=>ae(j,"in_progress"),children:"Xác nhận nhận việc"}),j.status==="in_progress"&&Te&&I.jsx("button",{className:"primary",onClick:()=>ae(j,"waiting_review"),children:"Trình duyệt"}),j.status==="waiting_review"&&K&&I.jsx("button",{className:"primary",onClick:()=>ae(j,"completed"),children:"Duyệt — Hoàn thành"}),j.status==="waiting_review"&&K&&I.jsx("button",{className:"danger",onClick:()=>T(j.id),children:"Yêu cầu sửa"}),j.status==="completed"&&I.jsxs("span",{className:"tag acked",children:["Đã duyệt ",Ao(j.approvedAt)]})]}),E===j.id&&I.jsxs("div",{style:{marginTop:8},children:[I.jsx("label",{htmlFor:"reject-reason",style:{fontSize:13,fontWeight:600},children:"Lý do yêu cầu sửa (bắt buộc)"}),I.jsx("input",{id:"reject-reason",value:P,onChange:me=>M(me.target.value),placeholder:"Lý do yêu cầu sửa (bắt buộc)…"}),I.jsxs("div",{className:"row",style:{marginTop:6},children:[I.jsx("button",{disabled:!P.trim(),onClick:()=>{ae(j,"in_progress",P.trim()),T(null),M("")},children:"Gửi yêu cầu sửa"}),I.jsx("button",{onClick:()=>T(null),children:"Hủy"})]})]}),(j.history||[]).length>0&&I.jsxs("details",{style:{marginTop:8},children:[I.jsxs("summary",{className:"muted",children:["Lịch sử (",j.history.length,")"]}),(j.history||[]).map((me,b)=>I.jsxs("div",{className:"muted",children:[Ao(me.at)," — ",Xr(me.by),": ",me.from?au[me.from]:"—"," → ",au[me.to],me.reason?` — ${me.reason}`:""]},b))]})]},j.id)})]})}function dV({onDone:n,onCancel:e}){const[t,r]=J.useState(""),[s,a]=J.useState(""),[u,d]=J.useState([]),[f,m]=J.useState(""),[y,E]=J.useState("normal"),[T,P]=J.useState(""),[M,L]=J.useState(!1);async function F(K){if(K.preventDefault(),!t.trim()||u.length===0){P("Nhập tiêu đề và chọn ít nhất một người nhận.");return}L(!0),P("");try{await or.createTask({title:t,description:s,assignees:u,dueAt:f?new Date(f).toISOString():null,priority:y}),n()}catch(Z){P(xd(Z,"công việc"))}finally{L(!1)}}function ae(K){d(Z=>Z.includes(K)?Z.filter(j=>j!==K):[...Z,K])}return I.jsxs("form",{className:"card task-form",onSubmit:F,children:[I.jsx("h3",{style:{margin:0},children:"Giao việc mới"}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-title",children:"Tiêu đề công việc"}),I.jsx("input",{id:"task-title",value:t,onChange:K=>r(K.target.value),placeholder:"vd: Chuẩn bị báo cáo tuần",required:!0})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-desc",children:"Mô tả"}),I.jsx("textarea",{id:"task-desc",value:s,onChange:K=>a(K.target.value),placeholder:"Mô tả ngắn: làm gì, kết quả mong muốn là gì",rows:3})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"assignees-label",children:"Người nhận"}),I.jsx("div",{className:"assignee-chips",role:"group","aria-labelledby":"assignees-label",children:As.filter(K=>K.role==="staff").map(K=>I.jsxs("label",{className:`assignee-chip${u.includes(K.id)?" selected":""}`,children:[I.jsx("input",{type:"checkbox",checked:u.includes(K.id),onChange:()=>ae(K.id),"aria-label":`Chọn ${K.name}`}),I.jsx("span",{className:"assignee-check","aria-hidden":"true",children:u.includes(K.id)&&I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})})}),I.jsx("span",{className:"avatar sm",style:{backgroundColor:ks(K.id),color:"#fff"},children:K.name.charAt(0)}),K.name]},K.id))}),I.jsx("div",{className:"form-helper",children:"Chọn một hoặc nhiều người nhận."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{htmlFor:"task-due",children:"Hạn hoàn thành"}),I.jsx("input",{id:"task-due",type:"datetime-local",value:f,onChange:K=>m(K.target.value)}),I.jsx("div",{className:"form-helper",children:"Để trống nếu không có hạn."})]}),I.jsxs("div",{className:"form-field",children:[I.jsx("label",{id:"priority-label",children:"Ưu tiên"}),I.jsx("div",{className:"segmented",role:"group","aria-labelledby":"priority-label",children:cV.map(K=>I.jsx("button",{type:"button","aria-pressed":y===K,className:`${y===K?"selected":""}${K==="urgent"&&y===K?" danger-opt":""}`,onClick:()=>E(K),children:FC[K]},K))})]}),T&&I.jsx("div",{className:"err",role:"alert",style:{margin:0},children:T}),I.jsxs("div",{className:"row",children:[I.jsx("button",{className:"primary",type:"submit",disabled:M,children:M?"Đang giao…":"Giao việc"}),I.jsx("button",{type:"button",onClick:e,children:"Hủy"})]})]})}const fV={mention:"Tag",task_assigned:"Giao việc",task_review:"Trình duyệt",escalation:"Nhắc việc",employee_ack:"Xác nhận"};function pV({person:n,onUnread:e}){const[t,r]=J.useState([]),[s,a]=J.useState(""),[u,d]=J.useState(0),f=J.useCallback(()=>{a(""),d(y=>y+1)},[]);J.useEffect(()=>Bu(Ja(Vs(kr,"notifications"),uS("recipientId","==",n.id),Uu("createdAt","desc"),ju(100)),y=>{const E=y.docs.map(T=>({id:T.id,...T.data()}));r(E),a(""),e(E.filter(T=>!T.read).length)},y=>{console.error("Notifications load failed:",y),a("Không tải được thông báo — thử lại sau.")}),[n.id,e,u]);async function m(){await Promise.all(t.filter(y=>!y.read).map(y=>qm(Tu(kr,"notifications",y.id),{read:!0}).catch(()=>{})))}return I.jsxs("div",{children:[I.jsxs("div",{className:"row",style:{marginBottom:10},children:[I.jsx("b",{children:"Thông báo của bạn"}),I.jsx("button",{onClick:m,children:"Đánh dấu đã đọc hết"})]}),s&&I.jsxs("div",{className:"err",role:"alert",children:[s,I.jsx("button",{type:"button",className:"retry-btn",onClick:f,children:"Thử lại"})]}),t.length===0&&!s&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có thông báo nào."}),t.map(y=>I.jsxs("div",{className:`card${y.read?"":" unread"}`,style:y.read?{opacity:.65}:{},children:[!y.read&&I.jsx("span",{className:"unread-dot","aria-hidden":"true"}),I.jsxs("div",{className:"row",children:[I.jsx("span",{className:"tag status",children:fV[y.type]||y.type}),I.jsx("span",{className:"muted",children:Ao(y.createdAt)})]}),I.jsxs("div",{style:{marginTop:6},children:[Xr(y.senderId),": ",y.content]})]},y.id))]})}const mV=[{value:"system",label:"Theo hệ thống"},{value:"light",label:"Sáng"},{value:"dark",label:"Tối"}];function gV({person:n,onlineByPerson:e,onSignOut:t,themeMode:r="system",onThemeModeChange:s}){const[a,u]=J.useState([]),[d,f]=J.useState([]),[m,y]=J.useState(""),[E,T]=J.useState([]),[P,M]=J.useState({}),[L,F]=J.useState("");J.useEffect(()=>Bu(Ja(Vs(kr,"aiEvents"),Uu("createdAt","desc"),ju(20)),j=>u(j.docs.map(Te=>({id:Te.id,...Te.data()})))),[]),J.useEffect(()=>{n.role==="manager"&&(or.listJobs().then(j=>f(j.jobs||[])).catch(j=>y(xd(j,"hàng đợi AI"))),or.listUsers().then(j=>T(j.users||[])).catch(()=>{}))},[n.role]);const K=a.filter(j=>(j.mentions||[]).includes(n.id)).find(j=>j.museRepliedAt),Z=d.filter(j=>j.deadLetter);return I.jsxs("div",{children:[I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:n.name}),I.jsxs("div",{className:"muted",children:["Vai trò: ",n.roleVi," · ID: ",n.id]}),I.jsxs("div",{className:"muted",children:["Trạng thái: ",e[n.id]?"Đang online":"Offline (chưa có heartbeat)"]}),I.jsxs("div",{className:"muted",children:["Muse của bạn: ",K?`đã phản hồi lần cuối ${Ao(K.museRepliedAt)}`:"chưa có dữ liệu — chưa có phản hồi nào được ghi nhận"]}),I.jsx("div",{className:"row",style:{marginTop:10},children:I.jsx("button",{onClick:t,children:"Đăng xuất"})})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Giao diện"}),I.jsx("div",{className:"segmented",role:"group","aria-label":"Chọn giao diện",children:mV.map(j=>{const Te=r===j.value;return I.jsx("button",{type:"button",className:Te?"selected":"","aria-pressed":Te,onClick:()=>s&&s(j.value),children:j.label},j.value)})}),I.jsx("div",{className:"muted",style:{marginTop:8},children:"Theo hệ thống: tự đổi sáng/tối theo chế độ của điện thoại/máy tính."})]}),I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Kênh Telegram"}),I.jsx("div",{className:"muted",children:"Bot điều phối: @muse_daica_bot — nhận nhắc việc và leo thang từ Muse điều phối."}),I.jsx("div",{className:"muted",children:"Bot của Hùng / Tuấn / Linh: sẽ có tên riêng sau, mỗi bot một token giữ phía server."}),I.jsx("div",{className:"muted",children:"Phản hồi nhanh: tag → backend đẩy qua bot Telegram của người được tag → Muse trả lời → callback đưa trả lời về phòng chat."}),I.jsx("div",{className:"muted",children:"Quy tắc Telegram: bot chỉ nhắn được cho người đã nhắn cho bot trước. Lấy chat_id bằng lệnh get-updates của helper rồi ghi vào đây."})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Chat ID Telegram từng người (chỉ quản lý)"}),E.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa tải được danh sách."}),E.map(j=>I.jsxs("div",{className:"form-field",style:{marginBottom:8},children:[I.jsxs("label",{htmlFor:`tg-${j.id}`,children:[j.name," — chat_id Telegram"]}),I.jsxs("div",{className:"row",children:[I.jsx("input",{id:`tg-${j.id}`,value:P[j.id]!==void 0?P[j.id]:j.telegramChatId||"",onChange:Te=>M({...P,[j.id]:Te.target.value}),placeholder:"chat_id Telegram (trống = chưa nối)",inputMode:"numeric"}),I.jsx("button",{onClick:async()=>{await or.setTelegramChatId(j.id,P[j.id]!==void 0?P[j.id]:j.telegramChatId||""),F(`Đã lưu chat_id của ${j.name}.`),or.listUsers().then(Te=>T(Te.users||[]))},children:"Lưu"})]})]},j.id)),L&&I.jsx("div",{className:"muted",children:L})]}),n.role==="manager"&&I.jsxs("div",{className:"card",children:[I.jsx("h3",{children:"Hàng đợi AI (chỉ quản lý thấy)"}),m&&I.jsx("div",{className:"err",children:m}),d.length===0&&I.jsx("div",{className:"empty",children:"Chưa có dữ liệu — chưa có job nào."}),Z.length>0&&I.jsxs("div",{className:"err",children:["Có ",Z.length," job vào dead-letter (gửi thất bại nhiều lần): ",Z.map(j=>j.eventId).join(", ")]}),d.slice(0,20).map(j=>I.jsxs("div",{className:"muted",children:[j.eventId," → ",Xr(j.recipientId),": ",j.status," (lần thử ",j.attempt,")",j.lastError?` — ${j.lastError}`:""]},j.jobId))]})]})}const Pa={chat:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),tasks:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M9 11l3 3L22 4"}),I.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),notifs:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),I.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),account:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),I.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),menu:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),I.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),I.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),moon:I.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),sun:I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("circle",{cx:"12",cy:"12",r:"4"}),I.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),I.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),I.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),I.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),I.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),I.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),I.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),I.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},OT=[{id:"chat",label:"Chat"},{id:"tasks",label:"Công việc"},{id:"notifs",label:"Thông báo"},{id:"account",label:"Tài khoản"}];function LT({p:n,online:e,lastSeen:t,lastMsg:r,task:s,isAi:a,onSelect:u}){const d=r&&r.content||"";return I.jsxs("li",{className:"member-row-btn",role:"button",tabIndex:0,onClick:()=>u&&u(n),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&u&&(f.preventDefault(),u(n))},title:`Xem thông tin ${n.name}`,children:[I.jsxs("span",{className:"avatar-wrap",children:[I.jsx("span",{className:"avatar sm",style:{backgroundColor:ks(n.id),color:"#fff"},children:n.name.charAt(0)}),I.jsx("span",{className:e?"online-dot":"offline-dot"})]}),I.jsxs("span",{className:"side-person",children:[I.jsxs("span",{className:"side-name",children:[n.name," ",I.jsxs("span",{className:"side-role",children:["· ",n.roleVi]})]}),I.jsx("span",{className:`side-status${e?" online":""}`,children:e?"Đang online":t?`Hoạt động lần cuối ${jC(t)}`:"Chưa có dữ liệu hoạt động"}),r?I.jsxs("span",{className:"side-last",children:["“",d.slice(0,48),d.length>48?"…":"","” · ",Nd(r.createdAt)]}):I.jsx("span",{className:"side-last",children:"Chưa có tin nhắn gần đây"}),s&&I.jsxs("span",{className:"side-task",children:["Đang làm: ",s]})]})]})}function _V(){const[n,e]=J.useState(null),[t,r]=J.useState(!1),s=J.useRef(!1),[a,u]=J.useState(null),[d,f]=J.useState("chat"),[m,y]=J.useState({}),[E,T]=J.useState(0),[P,M]=J.useState(!1),[L,F]=J.useState({}),[ae,K]=J.useState({}),[Z,j]=J.useState(null),[Te,me]=J.useState(()=>mu()||"system"),[b,C]=J.useState(()=>document.documentElement.dataset.theme||qh(mu()||"system"));function A(ne){const ce=ne==="dark"||ne==="light"||ne==="system"?ne:"system",Y=qh(ce);me(ce),C(Y),Gh(Y),QM(ce)}function x(){A(b==="dark"?"light":"dark")}J.useEffect(()=>{const ne=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,ce=()=>{const se=mu();if(se==="light"||se==="dark")return;const ie=BC();Gh(ie),C(ie)},Y=se=>{if(se.key!==null&&se.key!==H_)return;const ie=mu()||"system",V=qh(ie);me(ie),Gh(V),C(V)};return ne&&(ne.addEventListener?ne.addEventListener("change",ce):ne.addListener&&ne.addListener(ce)),window.addEventListener("storage",Y),()=>{ne&&(ne.removeEventListener?ne.removeEventListener("change",ce):ne.removeListener&&ne.removeListener(ce)),window.removeEventListener("storage",Y)}},[]),J.useEffect(()=>j1(rl,async ne=>{if(s.current||(s.current=!0,r(!0)),e(ne),!ne){u(null);return}const ce=(ne.email||"").toLowerCase();let Y=null;try{const se=Ja(Vs(kr,"users"),uS("email","==",ce)),ie=await aD(se);if(!ie.empty){const V=ie.docs[0].data();Y=As.find(G=>G.id===V.id)||{id:V.id,name:V.name||ce,role:V.role||"staff",roleVi:V.role==="manager"?"Quản lý":"Nhân viên"}}}catch{}!Y&&ce==="teddyssk559@gmail.com"&&(Y=As.find(se=>se.id==="chung")),Y||(Y={id:ne.uid,name:ne.email||"Người dùng",role:"staff",roleVi:"Nhân viên"}),u(Y)}),[]),J.useEffect(()=>{if(!n||!a)return;const ne=TT(PT,`presence/${n.uid}`),ce=()=>IT(ne,{online:!0,personId:a.id,name:a.name,lastSeen:Date.now()}).catch(ie=>console.error("Presence write failed:",ie));ce(),mL(ne).remove().catch(ie=>console.error("Presence onDisconnect failed:",ie));const Y=setInterval(ce,6e4),se=_L(TT(PT,"presence"),ie=>y(ie.val()||{}),ie=>console.error("Presence read failed:",ie));return()=>{clearInterval(Y),se(),IT(ne,null).catch(ie=>console.error("Presence clear failed:",ie))}},[n,a]);const D=J.useMemo(()=>{const ne={};for(const ce of Object.values(m||{})){if(!ce||!ce.personId)continue;const Y=typeof ce.lastSeen=="number"?ce.lastSeen:Date.parse(ce.lastSeen||"");ne[ce.personId]=ce.online===!0&&Number.isFinite(Y)&&Date.now()-Y<12e4}return ne},[m]),U=J.useMemo(()=>{const ne={};for(const ce of Object.values(m||{})){if(!ce||!ce.personId)continue;const Y=typeof ce.lastSeen=="number"?ce.lastSeen:Date.parse(ce.lastSeen||"");Number.isFinite(Y)&&(ne[ce.personId]=Y)}return ne},[m]);if(J.useEffect(()=>{if(n)return Bu(Ja(Vs(kr,"messages"),Uu("createdAt","desc"),ju(60)),ne=>{const ce={};for(const Y of ne.docs){const se=Y.data();se&&se.senderId&&!ce[se.senderId]&&(ce[se.senderId]={content:se.content||"",createdAt:se.createdAt})}F(ce)},()=>{})},[n]),J.useEffect(()=>{if(!n)return;let ne=!1;return or.listTasks("").then(ce=>{if(ne)return;const Y={};for(const se of ce.tasks||[])if(se.status==="in_progress")for(const ie of se.assignees||[])Y[ie]||(Y[ie]=se.title);K(Y)}).catch(()=>{}),()=>{ne=!0}},[n]),!t)return I.jsx("div",{className:"app",children:I.jsxs("div",{className:"loading",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"muted",children:"Đang khôi phục phiên…"})]})});if(!n)return I.jsx(YM,{});if(!a)return I.jsx("div",{className:"app",children:I.jsx("div",{className:"content",children:I.jsx("div",{className:"main",children:I.jsx("div",{className:"empty",children:"Đang tải hồ sơ…"})})})});const k=As.filter(ne=>ne.id!=="muse"),ye=k.filter(ne=>D[ne.id]).length,$e={id:"muse",name:"Muse",roleVi:"AI điều phối"};return I.jsxs("div",{className:`app${d==="chat"?" app-chat":""}`,children:[I.jsxs("aside",{className:`sidebar${P?" open":""}`,children:[I.jsxs("div",{className:"side-brand",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsx("div",{className:"brand-sub",children:"Phòng giao việc"})]}),I.jsx("button",{type:"button",className:"drawer-close","aria-label":"Đóng menu",onClick:()=>M(!1),children:Pa.close})]}),I.jsx("nav",{className:"side-nav",children:OT.map(ne=>I.jsxs("button",{className:d===ne.id?"active":"",onClick:()=>{f(ne.id),M(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[Pa[ne.id],ne.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:ne.label})]},ne.id))}),I.jsx("div",{className:"side-section",children:"Thành viên · Hoạt động"}),I.jsxs("ul",{className:"side-people",children:[k.map(ne=>I.jsx(LT,{p:ne,online:!!D[ne.id],lastSeen:U[ne.id],lastMsg:L[ne.id],task:ae[ne.id],onSelect:j},ne.id)),I.jsx(LT,{p:$e,isAi:!0,online:!0,lastSeen:U.muse,lastMsg:L.muse,task:ae.muse,onSelect:j})]}),I.jsxs("div",{className:"side-user",children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ks(a.id),color:"#fff"},children:a.name.charAt(0)}),I.jsxs("div",{children:[I.jsx("div",{className:"side-name",children:a.name}),I.jsx("div",{className:"muted",children:a.roleVi})]})]})]}),P&&I.jsx("div",{className:"drawer-backdrop",onClick:()=>M(!1)}),I.jsxs("div",{className:"content",children:[I.jsxs("header",{className:"header",children:[I.jsx("button",{type:"button",className:"menu-btn","aria-label":"Mở menu",onClick:()=>M(!0),children:Pa.menu}),I.jsxs("div",{className:"chat-peer",onClick:()=>M(!0),title:"Mở menu",children:[I.jsx("span",{className:"avatar avatar-group",children:"E"}),I.jsxs("div",{className:"peer-info",children:[I.jsx("div",{className:"brand-title",children:"Enteesee"}),I.jsxs("div",{className:"peer-status",children:[k.length," thành viên",ye>0&&I.jsxs("span",{className:"online-count",children:[" · ",ye," đang online"]})]})]})]}),I.jsx("button",{type:"button",className:"header-avatars",onClick:()=>M(!0),"aria-label":"Mở danh sách thành viên",title:"Danh sách thành viên",children:k.map(ne=>I.jsxs("span",{className:"avatar-wrap",title:`${ne.name} — ${D[ne.id]?"đang online":"offline"}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ks(ne.id),color:"#fff"},children:ne.name.charAt(0)}),I.jsx("span",{className:D[ne.id]?"online-dot":"offline-dot"})]},ne.id))}),I.jsx("button",{type:"button",className:"theme-btn",onClick:x,"aria-label":b==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối",title:b==="dark"?"Giao diện sáng":"Giao diện tối",children:b==="dark"?Pa.sun:Pa.moon})]}),I.jsxs("main",{className:d==="chat"?"main main-chat":"main",children:[d==="chat"&&I.jsx(oV,{person:a}),d==="tasks"&&I.jsx(hV,{person:a}),d==="notifs"&&I.jsx(pV,{person:a,onUnread:T}),d==="account"&&I.jsx(gV,{person:a,onlineByPerson:D,onSignOut:()=>B1(rl),themeMode:Te,onThemeModeChange:A})]})]}),I.jsx("nav",{className:"nav",children:OT.map(ne=>I.jsxs("button",{className:d===ne.id?"active":"",onClick:()=>{f(ne.id),M(!1)},children:[I.jsxs("span",{className:"nav-icon",children:[Pa[ne.id],ne.id==="notifs"&&E>0&&I.jsx("span",{className:"badge",children:E})]}),I.jsx("span",{children:ne.label})]},ne.id))}),Z&&I.jsx("div",{className:"member-detail-overlay",onClick:()=>j(null),children:I.jsxs("div",{className:"member-detail",onClick:ne=>ne.stopPropagation(),role:"dialog","aria-label":`Thông tin ${Z.name}`,children:[I.jsx("span",{className:"avatar",style:{backgroundColor:ks(Z.id),color:"#fff"},children:Z.name.charAt(0)}),I.jsx("h3",{children:Z.name}),I.jsxs("div",{className:"muted",children:[Z.roleVi," · ID: ",Z.id]}),I.jsx("div",{className:"muted",style:{marginTop:4},children:Z.id==="muse"?"AI điều phối — trả lời tag @Muse và đẩy nhắc việc qua Telegram.":D[Z.id]?"Đang online.":U[Z.id]?`Hoạt động lần cuối ${jC(U[Z.id])}.`:"Chưa có dữ liệu hoạt động."}),L[Z.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Tin mới nhất: “",(L[Z.id].content||"").slice(0,80),"” · ",Nd(L[Z.id].createdAt)]}),ae[Z.id]&&I.jsxs("div",{className:"muted",style:{marginTop:4},children:["Đang làm: ",ae[Z.id]]}),I.jsxs("div",{className:"row",style:{marginTop:12},children:[I.jsx("button",{type:"button",onClick:()=>{j(null),M(!1),f("chat")},children:"Nhắn trong phòng"}),I.jsx("button",{type:"button",onClick:()=>j(null),children:"Đóng"})]})]})})]})}KM();tA.createRoot(document.getElementById("root")).render(I.jsx(KR.StrictMode,{children:I.jsx(_V,{})}));
