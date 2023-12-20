!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self)["design-ui-test"]={},e.require$$0)}(this,(function(e,r){"use strict";var t,n={exports:{}},o={};var a,i={};
/**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */"production"===process.env.NODE_ENV?n.exports=function(){if(a)return i;a=1;var e=r,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var a,i={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,a)&&!c.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:t,type:e,key:l,ref:u,props:i,_owner:s.current}}return i.Fragment=n,i.jsx=l,i.jsxs=l,i}():n.exports=(t||(t=1,"production"!==process.env.NODE_ENV&&function(){var e=r,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator,g="@@iterator",h=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=h.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var _,j=!1,w=!1,k=!1,S=!1,O=!1;function R(e){return e.displayName||"Context"}function x(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case a:return"Fragment";case n:return"Portal";case s:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return R(e)+".Consumer";case c:return R(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:x(e.type)||"Memo";case d:var t=e,o=t._payload,v=t._init;try{return x(v(o))}catch(m){return null}}return null}_=Symbol.for("react.module.reference");var E,T,P,N,$,F,C,D=Object.assign,I=0;function M(){}M.__reactDisabledLog=!0;var L,W=h.ReactCurrentDispatcher;function U(e,r,t){if(void 0===L)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);L=n&&n[1]||""}return"\n"+L+e}var A,z=!1,B="function"==typeof WeakMap?WeakMap:Map;function Y(e,r){if(!e||z)return"";var t,n=A.get(e);if(void 0!==n)return n;z=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=W.current,W.current=null,function(){if(0===I){E=console.log,T=console.info,P=console.warn,N=console.error,$=console.group,F=console.groupCollapsed,C=console.groupEnd;var e={configurable:!0,enumerable:!0,value:M,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(d){t=d}Reflect.construct(e,[],i)}else{try{i.call()}catch(d){t=d}e.call(i.prototype)}}else{try{throw Error()}catch(d){t=d}e()}}catch(v){if(v&&t&&"string"==typeof v.stack){for(var s=v.stack.split("\n"),c=t.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var f="\n"+s[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&A.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{z=!1,W.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:E}),info:D({},e,{value:T}),warn:D({},e,{value:P}),error:D({},e,{value:N}),group:D({},e,{value:$}),groupCollapsed:D({},e,{value:F}),groupEnd:D({},e,{value:C})})}I<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?U(p):"";return"function"==typeof e&&A.set(e,y),y}function q(e,r,t){if(null==e)return"";if("function"==typeof e)return Y(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return U(e);switch(e){case f:return U("Suspense");case p:return U("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return Y(e.render,!1);case y:return q(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return q(i(a),r,t)}catch(s){}}return""}A=new B;var V=Object.prototype.hasOwnProperty,H={},J=h.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);J.setExtraStackFrame(t)}else J.setExtraStackFrame(null)}var G=Array.isArray;function K(e){return G(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(r){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,te,ne=h.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,r,n,o,a,i,s){var c={$$typeof:t,type:e,key:r,ref:n,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ie(e,r,t,n,o){var a,i={},s=null,c=null;for(a in void 0!==t&&(Z(t),s=""+t),function(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),s=""+r.key),function(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(c=r.ref,function(e,r){if("string"==typeof e.ref&&ne.current&&r&&ne.current.stateNode!==r){var t=x(ne.current.type);te[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',x(ne.current.type),e.ref),te[t]=!0)}}(r,o)),r)V.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(s||c){var u="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,r){var t=function(){ee||(ee=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,u),c&&function(e,r){var t=function(){re||(re=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,u)}return ae(e,s,c,o,n,ne.current,i)}var se,ce=h.ReactCurrentOwner,le=h.ReactDebugCurrentFrame;function ue(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function pe(){if(ce.current){var e=x(ce.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}se=!1;var ye={};function de(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=pe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ye[t]){ye[t]=!0;var n="";e&&e._owner&&e._owner!==ce.current&&(n=" It was passed a child from "+x(e._owner.type)+"."),ue(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ue(null)}}}function ve(e,r){if("object"==typeof e)if(K(e))for(var t=0;t<e.length;t++){var n=e[t];fe(n)&&de(n,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e[g];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&de(a.value,r)}}function me(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=x(t);!function(e,r,t,n,o){var a=Function.call.bind(V);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){s=l}!s||s instanceof Error||(X(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),X(null)),s instanceof Error&&!(s.message in H)&&(H[s.message]=!0,X(o),b("Failed %s type: %s",t,s.message),X(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||se||(se=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ge(e,r,n,o,m,g){var h=function(e){return"string"==typeof e||"function"==typeof e||!!(e===a||e===s||O||e===i||e===f||e===p||S||e===v||j||w||k)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!h){var R="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E,T=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(m);R+=T||pe(),null===e?E="null":K(e)?E="array":void 0!==e&&e.$$typeof===t?(E="<"+(x(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,R)}var P=ie(e,r,n,m,g);if(null==P)return P;if(h){var N=r.children;if(void 0!==N)if(o)if(K(N)){for(var $=0;$<N.length;$++)ve(N[$],e);Object.freeze&&Object.freeze(N)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ve(N,e)}return e===a?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ue(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ue(null);break}}null!==e.ref&&(ue(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),ue(null))}(P):me(P),P}var he=function(e,r,t){return ge(e,r,t,!1)},be=function(e,r,t){return ge(e,r,t,!0)};o.Fragment=a,o.jsx=he,o.jsxs=be}()),o);var s=n.exports;e.TButton=()=>s.jsx(s.Fragment,{children:s.jsx("button",{children:"TButton"})}),e.TCowsay=function(e){return s.jsx("div",{style:{height:"100%",width:"100%"},children:s.jsxs("pre",{style:{fontFamily:"Arial",height:"100%",width:"100%"},children:[s.jsx("div",{className:"MonoFont",children:`( ${e.content||"hello"} )`}),s.jsx("div",{className:"MonoFont",children:"     \\"}),s.jsx("div",{className:"MonoFont",children:"      ^__^"}),s.jsx("div",{className:"MonoFont",children:"      (oo)\\________"}),s.jsx("div",{className:"MonoFont",children:"      (__)\\         )^"}),s.jsx("div",{className:"MonoFont",children:"          ||------w|"}),s.jsx("div",{className:"MonoFont",children:"          ||      ||"})]})})},Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
